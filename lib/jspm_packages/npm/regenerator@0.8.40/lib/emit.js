/* */ 
(function(process) {
  var assert = require("assert");
  var types = require("recast").types;
  var isArray = types.builtInTypes.array;
  var b = types.builders;
  var n = types.namedTypes;
  var leap = require("./leap");
  var meta = require("./meta");
  var util = require("./util");
  var runtimeProperty = util.runtimeProperty;
  var hasOwn = Object.prototype.hasOwnProperty;
  function Emitter(contextId) {
    assert.ok(this instanceof Emitter);
    n.Identifier.assert(contextId);
    this.nextTempId = 0;
    Object.defineProperties(this, {
      contextId: {value: contextId},
      listing: {value: []},
      marked: {value: [true]},
      finalLoc: {value: loc()},
      tryEntries: {value: []}
    });
    Object.defineProperties(this, {leapManager: {value: new leap.LeapManager(this)}});
  }
  var Ep = Emitter.prototype;
  exports.Emitter = Emitter;
  function loc() {
    return b.literal(-1);
  }
  Ep.mark = function(loc) {
    n.Literal.assert(loc);
    var index = this.listing.length;
    if (loc.value === -1) {
      loc.value = index;
    } else {
      assert.strictEqual(loc.value, index);
    }
    this.marked[index] = true;
    return loc;
  };
  Ep.emit = function(node) {
    if (n.Expression.check(node))
      node = b.expressionStatement(node);
    n.Statement.assert(node);
    this.listing.push(node);
  };
  Ep.emitAssign = function(lhs, rhs) {
    this.emit(this.assign(lhs, rhs));
    return lhs;
  };
  Ep.assign = function(lhs, rhs) {
    return b.expressionStatement(b.assignmentExpression("=", lhs, rhs));
  };
  Ep.contextProperty = function(name, computed) {
    return b.memberExpression(this.contextId, computed ? b.literal(name) : b.identifier(name), !!computed);
  };
  Ep.stop = function(rval) {
    if (rval) {
      this.setReturnValue(rval);
    }
    this.jump(this.finalLoc);
  };
  Ep.setReturnValue = function(valuePath) {
    n.Expression.assert(valuePath.value);
    this.emitAssign(this.contextProperty("rval"), this.explodeExpression(valuePath));
  };
  Ep.clearPendingException = function(tryLoc, assignee) {
    n.Literal.assert(tryLoc);
    var catchCall = b.callExpression(this.contextProperty("catch", true), [tryLoc]);
    if (assignee) {
      this.emitAssign(assignee, catchCall);
    } else {
      this.emit(catchCall);
    }
  };
  Ep.jump = function(toLoc) {
    this.emitAssign(this.contextProperty("next"), toLoc);
    this.emit(b.breakStatement());
  };
  Ep.jumpIf = function(test, toLoc) {
    n.Expression.assert(test);
    n.Literal.assert(toLoc);
    this.emit(b.ifStatement(test, b.blockStatement([this.assign(this.contextProperty("next"), toLoc), b.breakStatement()])));
  };
  Ep.jumpIfNot = function(test, toLoc) {
    n.Expression.assert(test);
    n.Literal.assert(toLoc);
    var negatedTest;
    if (n.UnaryExpression.check(test) && test.operator === "!") {
      negatedTest = test.argument;
    } else {
      negatedTest = b.unaryExpression("!", test);
    }
    this.emit(b.ifStatement(negatedTest, b.blockStatement([this.assign(this.contextProperty("next"), toLoc), b.breakStatement()])));
  };
  Ep.makeTempVar = function() {
    return this.contextProperty("t" + this.nextTempId++);
  };
  Ep.getContextFunction = function(id) {
    return b.functionExpression(id || null, [this.contextId], b.blockStatement([this.getDispatchLoop()]), false, false);
  };
  Ep.getDispatchLoop = function() {
    var self = this;
    var cases = [];
    var current;
    var alreadyEnded = false;
    self.listing.forEach(function(stmt, i) {
      if (self.marked.hasOwnProperty(i)) {
        cases.push(b.switchCase(b.literal(i), current = []));
        alreadyEnded = false;
      }
      if (!alreadyEnded) {
        current.push(stmt);
        if (isSwitchCaseEnder(stmt))
          alreadyEnded = true;
      }
    });
    this.finalLoc.value = this.listing.length;
    cases.push(b.switchCase(this.finalLoc, []), b.switchCase(b.literal("end"), [b.returnStatement(b.callExpression(this.contextProperty("stop"), []))]));
    return b.whileStatement(b.literal(1), b.switchStatement(b.assignmentExpression("=", this.contextProperty("prev"), this.contextProperty("next")), cases));
  };
  function isSwitchCaseEnder(stmt) {
    return n.BreakStatement.check(stmt) || n.ContinueStatement.check(stmt) || n.ReturnStatement.check(stmt) || n.ThrowStatement.check(stmt);
  }
  Ep.getTryLocsList = function() {
    if (this.tryEntries.length === 0) {
      return null;
    }
    var lastLocValue = 0;
    return b.arrayExpression(this.tryEntries.map(function(tryEntry) {
      var thisLocValue = tryEntry.firstLoc.value;
      assert.ok(thisLocValue >= lastLocValue, "try entries out of order");
      lastLocValue = thisLocValue;
      var ce = tryEntry.catchEntry;
      var fe = tryEntry.finallyEntry;
      var locs = [tryEntry.firstLoc, ce ? ce.firstLoc : null];
      if (fe) {
        locs[2] = fe.firstLoc;
        locs[3] = fe.afterLoc;
      }
      return b.arrayExpression(locs);
    }));
  };
  Ep.explode = function(path, ignoreResult) {
    assert.ok(path instanceof types.NodePath);
    var node = path.value;
    var self = this;
    n.Node.assert(node);
    if (n.Statement.check(node))
      return self.explodeStatement(path);
    if (n.Expression.check(node))
      return self.explodeExpression(path, ignoreResult);
    if (n.Declaration.check(node))
      throw getDeclError(node);
    switch (node.type) {
      case "Program":
        return path.get("body").map(self.explodeStatement, self);
      case "VariableDeclarator":
        throw getDeclError(node);
      case "Property":
      case "SwitchCase":
      case "CatchClause":
        throw new Error(node.type + " nodes should be handled by their parents");
      default:
        throw new Error("unknown Node of type " + JSON.stringify(node.type));
    }
  };
  function getDeclError(node) {
    return new Error("all declarations should have been transformed into " + "assignments before the Exploder began its work: " + JSON.stringify(node));
  }
  Ep.explodeStatement = function(path, labelId) {
    assert.ok(path instanceof types.NodePath);
    var stmt = path.value;
    var self = this;
    n.Statement.assert(stmt);
    if (labelId) {
      n.Identifier.assert(labelId);
    } else {
      labelId = null;
    }
    if (n.BlockStatement.check(stmt)) {
      return path.get("body").each(self.explodeStatement, self);
    }
    if (!meta.containsLeap(stmt)) {
      self.emit(stmt);
      return;
    }
    switch (stmt.type) {
      case "ExpressionStatement":
        self.explodeExpression(path.get("expression"), true);
        break;
      case "LabeledStatement":
        var after = loc();
        self.leapManager.withEntry(new leap.LabeledEntry(after, stmt.label), function() {
          self.explodeStatement(path.get("body"), stmt.label);
        });
        self.mark(after);
        break;
      case "WhileStatement":
        var before = loc();
        var after = loc();
        self.mark(before);
        self.jumpIfNot(self.explodeExpression(path.get("test")), after);
        self.leapManager.withEntry(new leap.LoopEntry(after, before, labelId), function() {
          self.explodeStatement(path.get("body"));
        });
        self.jump(before);
        self.mark(after);
        break;
      case "DoWhileStatement":
        var first = loc();
        var test = loc();
        var after = loc();
        self.mark(first);
        self.leapManager.withEntry(new leap.LoopEntry(after, test, labelId), function() {
          self.explode(path.get("body"));
        });
        self.mark(test);
        self.jumpIf(self.explodeExpression(path.get("test")), first);
        self.mark(after);
        break;
      case "ForStatement":
        var head = loc();
        var update = loc();
        var after = loc();
        if (stmt.init) {
          self.explode(path.get("init"), true);
        }
        self.mark(head);
        if (stmt.test) {
          self.jumpIfNot(self.explodeExpression(path.get("test")), after);
        } else {}
        self.leapManager.withEntry(new leap.LoopEntry(after, update, labelId), function() {
          self.explodeStatement(path.get("body"));
        });
        self.mark(update);
        if (stmt.update) {
          self.explode(path.get("update"), true);
        }
        self.jump(head);
        self.mark(after);
        break;
      case "ForInStatement":
        var head = loc();
        var after = loc();
        var keyIterNextFn = self.makeTempVar();
        self.emitAssign(keyIterNextFn, b.callExpression(runtimeProperty("keys"), [self.explodeExpression(path.get("right"))]));
        self.mark(head);
        var keyInfoTmpVar = self.makeTempVar();
        self.jumpIf(b.memberExpression(b.assignmentExpression("=", keyInfoTmpVar, b.callExpression(keyIterNextFn, [])), b.identifier("done"), false), after);
        self.emitAssign(stmt.left, b.memberExpression(keyInfoTmpVar, b.identifier("value"), false));
        self.leapManager.withEntry(new leap.LoopEntry(after, head, labelId), function() {
          self.explodeStatement(path.get("body"));
        });
        self.jump(head);
        self.mark(after);
        break;
      case "BreakStatement":
        self.emitAbruptCompletion({
          type: "break",
          target: self.leapManager.getBreakLoc(stmt.label)
        });
        break;
      case "ContinueStatement":
        self.emitAbruptCompletion({
          type: "continue",
          target: self.leapManager.getContinueLoc(stmt.label)
        });
        break;
      case "SwitchStatement":
        var disc = self.emitAssign(self.makeTempVar(), self.explodeExpression(path.get("discriminant")));
        var after = loc();
        var defaultLoc = loc();
        var condition = defaultLoc;
        var caseLocs = [];
        var cases = stmt.cases || [];
        for (var i = cases.length - 1; i >= 0; --i) {
          var c = cases[i];
          n.SwitchCase.assert(c);
          if (c.test) {
            condition = b.conditionalExpression(b.binaryExpression("===", disc, c.test), caseLocs[i] = loc(), condition);
          } else {
            caseLocs[i] = defaultLoc;
          }
        }
        self.jump(self.explodeExpression(new types.NodePath(condition, path, "discriminant")));
        self.leapManager.withEntry(new leap.SwitchEntry(after), function() {
          path.get("cases").each(function(casePath) {
            var c = casePath.value;
            var i = casePath.name;
            self.mark(caseLocs[i]);
            casePath.get("consequent").each(self.explodeStatement, self);
          });
        });
        self.mark(after);
        if (defaultLoc.value === -1) {
          self.mark(defaultLoc);
          assert.strictEqual(after.value, defaultLoc.value);
        }
        break;
      case "IfStatement":
        var elseLoc = stmt.alternate && loc();
        var after = loc();
        self.jumpIfNot(self.explodeExpression(path.get("test")), elseLoc || after);
        self.explodeStatement(path.get("consequent"));
        if (elseLoc) {
          self.jump(after);
          self.mark(elseLoc);
          self.explodeStatement(path.get("alternate"));
        }
        self.mark(after);
        break;
      case "ReturnStatement":
        self.emitAbruptCompletion({
          type: "return",
          value: self.explodeExpression(path.get("argument"))
        });
        break;
      case "WithStatement":
        throw new Error(node.type + " not supported in generator functions.");
      case "TryStatement":
        var after = loc();
        var handler = stmt.handler;
        if (!handler && stmt.handlers) {
          handler = stmt.handlers[0] || null;
        }
        var catchLoc = handler && loc();
        var catchEntry = catchLoc && new leap.CatchEntry(catchLoc, handler.param);
        var finallyLoc = stmt.finalizer && loc();
        var finallyEntry = finallyLoc && new leap.FinallyEntry(finallyLoc, after);
        var tryEntry = new leap.TryEntry(self.getUnmarkedCurrentLoc(), catchEntry, finallyEntry);
        self.tryEntries.push(tryEntry);
        self.updateContextPrevLoc(tryEntry.firstLoc);
        self.leapManager.withEntry(tryEntry, function() {
          self.explodeStatement(path.get("block"));
          if (catchLoc) {
            if (finallyLoc) {
              self.jump(finallyLoc);
            } else {
              self.jump(after);
            }
            self.updateContextPrevLoc(self.mark(catchLoc));
            var bodyPath = path.get("handler", "body");
            var safeParam = self.makeTempVar();
            self.clearPendingException(tryEntry.firstLoc, safeParam);
            var catchScope = bodyPath.scope;
            var catchParamName = handler.param.name;
            n.CatchClause.assert(catchScope.node);
            assert.strictEqual(catchScope.lookup(catchParamName), catchScope);
            types.visit(bodyPath, {
              visitIdentifier: function(path) {
                if (util.isReference(path, catchParamName) && path.scope.lookup(catchParamName) === catchScope) {
                  return safeParam;
                }
                this.traverse(path);
              },
              visitFunction: function(path) {
                if (path.scope.declares(catchParamName)) {
                  return false;
                }
                this.traverse(path);
              }
            });
            self.leapManager.withEntry(catchEntry, function() {
              self.explodeStatement(bodyPath);
            });
          }
          if (finallyLoc) {
            self.updateContextPrevLoc(self.mark(finallyLoc));
            self.leapManager.withEntry(finallyEntry, function() {
              self.explodeStatement(path.get("finalizer"));
            });
            self.emit(b.returnStatement(b.callExpression(self.contextProperty("finish"), [finallyEntry.firstLoc])));
          }
        });
        self.mark(after);
        break;
      case "ThrowStatement":
        self.emit(b.throwStatement(self.explodeExpression(path.get("argument"))));
        break;
      default:
        throw new Error("unknown Statement of type " + JSON.stringify(stmt.type));
    }
  };
  Ep.emitAbruptCompletion = function(record) {
    if (!isValidCompletion(record)) {
      assert.ok(false, "invalid completion record: " + JSON.stringify(record));
    }
    assert.notStrictEqual(record.type, "normal", "normal completions are not abrupt");
    var abruptArgs = [b.literal(record.type)];
    if (record.type === "break" || record.type === "continue") {
      n.Literal.assert(record.target);
      abruptArgs[1] = record.target;
    } else if (record.type === "return" || record.type === "throw") {
      if (record.value) {
        n.Expression.assert(record.value);
        abruptArgs[1] = record.value;
      }
    }
    this.emit(b.returnStatement(b.callExpression(this.contextProperty("abrupt"), abruptArgs)));
  };
  function isValidCompletion(record) {
    var type = record.type;
    if (type === "normal") {
      return !hasOwn.call(record, "target");
    }
    if (type === "break" || type === "continue") {
      return !hasOwn.call(record, "value") && n.Literal.check(record.target);
    }
    if (type === "return" || type === "throw") {
      return hasOwn.call(record, "value") && !hasOwn.call(record, "target");
    }
    return false;
  }
  Ep.getUnmarkedCurrentLoc = function() {
    return b.literal(this.listing.length);
  };
  Ep.updateContextPrevLoc = function(loc) {
    if (loc) {
      n.Literal.assert(loc);
      if (loc.value === -1) {
        loc.value = this.listing.length;
      } else {
        assert.strictEqual(loc.value, this.listing.length);
      }
    } else {
      loc = this.getUnmarkedCurrentLoc();
    }
    this.emitAssign(this.contextProperty("prev"), loc);
  };
  Ep.explodeExpression = function(path, ignoreResult) {
    assert.ok(path instanceof types.NodePath);
    var expr = path.value;
    if (expr) {
      n.Expression.assert(expr);
    } else {
      return expr;
    }
    var self = this;
    var result;
    function finish(expr) {
      n.Expression.assert(expr);
      if (ignoreResult) {
        self.emit(expr);
      } else {
        return expr;
      }
    }
    if (!meta.containsLeap(expr)) {
      return finish(expr);
    }
    var hasLeapingChildren = meta.containsLeap.onlyChildren(expr);
    function explodeViaTempVar(tempVar, childPath, ignoreChildResult) {
      assert.ok(childPath instanceof types.NodePath);
      assert.ok(!ignoreChildResult || !tempVar, "Ignoring the result of a child expression but forcing it to " + "be assigned to a temporary variable?");
      var result = self.explodeExpression(childPath, ignoreChildResult);
      if (ignoreChildResult) {} else if (tempVar || (hasLeapingChildren && !n.Literal.check(result))) {
        result = self.emitAssign(tempVar || self.makeTempVar(), result);
      }
      return result;
    }
    switch (expr.type) {
      case "MemberExpression":
        return finish(b.memberExpression(self.explodeExpression(path.get("object")), expr.computed ? explodeViaTempVar(null, path.get("property")) : expr.property, expr.computed));
      case "CallExpression":
        var calleePath = path.get("callee");
        var argsPath = path.get("arguments");
        var newCallee;
        var newArgs = [];
        var hasLeapingArgs = false;
        argsPath.each(function(argPath) {
          hasLeapingArgs = hasLeapingArgs || meta.containsLeap(argPath.value);
        });
        if (n.MemberExpression.check(calleePath.value)) {
          if (hasLeapingArgs) {
            var newObject = explodeViaTempVar(self.makeTempVar(), calleePath.get("object"));
            var newProperty = calleePath.value.computed ? explodeViaTempVar(null, calleePath.get("property")) : calleePath.value.property;
            newArgs.unshift(newObject);
            newCallee = b.memberExpression(b.memberExpression(newObject, newProperty, calleePath.value.computed), b.identifier("call"), false);
          } else {
            newCallee = self.explodeExpression(calleePath);
          }
        } else {
          newCallee = self.explodeExpression(calleePath);
          if (n.MemberExpression.check(newCallee)) {
            newCallee = b.sequenceExpression([b.literal(0), newCallee]);
          }
        }
        argsPath.each(function(argPath) {
          newArgs.push(explodeViaTempVar(null, argPath));
        });
        return finish(b.callExpression(newCallee, newArgs));
      case "NewExpression":
        return finish(b.newExpression(explodeViaTempVar(null, path.get("callee")), path.get("arguments").map(function(argPath) {
          return explodeViaTempVar(null, argPath);
        })));
      case "ObjectExpression":
        return finish(b.objectExpression(path.get("properties").map(function(propPath) {
          return b.property(propPath.value.kind, propPath.value.key, explodeViaTempVar(null, propPath.get("value")));
        })));
      case "ArrayExpression":
        return finish(b.arrayExpression(path.get("elements").map(function(elemPath) {
          return explodeViaTempVar(null, elemPath);
        })));
      case "SequenceExpression":
        var lastIndex = expr.expressions.length - 1;
        path.get("expressions").each(function(exprPath) {
          if (exprPath.name === lastIndex) {
            result = self.explodeExpression(exprPath, ignoreResult);
          } else {
            self.explodeExpression(exprPath, true);
          }
        });
        return result;
      case "LogicalExpression":
        var after = loc();
        if (!ignoreResult) {
          result = self.makeTempVar();
        }
        var left = explodeViaTempVar(result, path.get("left"));
        if (expr.operator === "&&") {
          self.jumpIfNot(left, after);
        } else {
          assert.strictEqual(expr.operator, "||");
          self.jumpIf(left, after);
        }
        explodeViaTempVar(result, path.get("right"), ignoreResult);
        self.mark(after);
        return result;
      case "ConditionalExpression":
        var elseLoc = loc();
        var after = loc();
        var test = self.explodeExpression(path.get("test"));
        self.jumpIfNot(test, elseLoc);
        if (!ignoreResult) {
          result = self.makeTempVar();
        }
        explodeViaTempVar(result, path.get("consequent"), ignoreResult);
        self.jump(after);
        self.mark(elseLoc);
        explodeViaTempVar(result, path.get("alternate"), ignoreResult);
        self.mark(after);
        return result;
      case "UnaryExpression":
        return finish(b.unaryExpression(expr.operator, self.explodeExpression(path.get("argument")), !!expr.prefix));
      case "BinaryExpression":
        return finish(b.binaryExpression(expr.operator, explodeViaTempVar(null, path.get("left")), explodeViaTempVar(null, path.get("right"))));
      case "AssignmentExpression":
        return finish(b.assignmentExpression(expr.operator, self.explodeExpression(path.get("left")), self.explodeExpression(path.get("right"))));
      case "UpdateExpression":
        return finish(b.updateExpression(expr.operator, self.explodeExpression(path.get("argument")), expr.prefix));
      case "YieldExpression":
        var after = loc();
        var arg = expr.argument && self.explodeExpression(path.get("argument"));
        if (arg && expr.delegate) {
          var result = self.makeTempVar();
          self.emit(b.returnStatement(b.callExpression(self.contextProperty("delegateYield"), [arg, b.literal(result.property.name), after])));
          self.mark(after);
          return result;
        }
        self.emitAssign(self.contextProperty("next"), after);
        self.emit(b.returnStatement(arg || null));
        self.mark(after);
        return self.contextProperty("sent");
      default:
        throw new Error("unknown Expression of type " + JSON.stringify(expr.type));
    }
  };
})(require("process"));
