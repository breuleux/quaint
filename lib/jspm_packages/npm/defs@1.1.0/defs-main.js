/* */ 
(function(process) {
  "use strict";
  const assert = require("assert");
  const is = require("simple-is");
  const fmt = require("simple-fmt");
  const stringmap = require("stringmap");
  const stringset = require("stringset");
  const alter = require("alter");
  const traverse = require("ast-traverse");
  const breakable = require("breakable");
  const Scope = require("./scope");
  const error = require("./error");
  const getline = error.getline;
  const options = require("./options");
  const Stats = require("./stats");
  const jshint_vars = require("./jshint_globals/vars");
  function isConstLet(kind) {
    return is.someof(kind, ["const", "let"]);
  }
  function isVarConstLet(kind) {
    return is.someof(kind, ["var", "const", "let"]);
  }
  function isNonFunctionBlock(node) {
    return node.type === "BlockStatement" && is.noneof(node.$parent.type, ["FunctionDeclaration", "FunctionExpression"]);
  }
  function isForWithConstLet(node) {
    return node.type === "ForStatement" && node.init && node.init.type === "VariableDeclaration" && isConstLet(node.init.kind);
  }
  function isForInOfWithConstLet(node) {
    return isForInOf(node) && node.left.type === "VariableDeclaration" && isConstLet(node.left.kind);
  }
  function isForInOf(node) {
    return is.someof(node.type, ["ForInStatement", "ForOfStatement"]);
  }
  function isFunction(node) {
    return is.someof(node.type, ["FunctionDeclaration", "FunctionExpression"]);
  }
  function isLoop(node) {
    return is.someof(node.type, ["ForStatement", "ForInStatement", "ForOfStatement", "WhileStatement", "DoWhileStatement"]);
  }
  function isReference(node) {
    const parent = node.$parent;
    return node.$refToScope || node.type === "Identifier" && !(parent.type === "VariableDeclarator" && parent.id === node) && !(parent.type === "MemberExpression" && parent.computed === false && parent.property === node) && !(parent.type === "Property" && parent.key === node) && !(parent.type === "LabeledStatement" && parent.label === node) && !(parent.type === "CatchClause" && parent.param === node) && !(isFunction(parent) && parent.id === node) && !(isFunction(parent) && is.someof(node, parent.params)) && true;
  }
  function isLvalue(node) {
    return isReference(node) && ((node.$parent.type === "AssignmentExpression" && node.$parent.left === node) || (node.$parent.type === "UpdateExpression" && node.$parent.argument === node));
  }
  function createScopes(node, parent) {
    assert(!node.$scope);
    node.$parent = parent;
    node.$scope = node.$parent ? node.$parent.$scope : null;
    if (node.type === "Program") {
      node.$scope = new Scope({
        kind: "hoist",
        node: node,
        parent: null
      });
    } else if (isFunction(node)) {
      node.$scope = new Scope({
        kind: "hoist",
        node: node,
        parent: node.$parent.$scope
      });
      if (node.id) {
        assert(node.id.type === "Identifier");
        if (node.type === "FunctionDeclaration") {
          node.$parent.$scope.add(node.id.name, "fun", node.id, null);
        } else if (node.type === "FunctionExpression") {
          node.$scope.add(node.id.name, "fun", node.id, null);
        } else {
          assert(false);
        }
      }
      node.params.forEach(function(param) {
        node.$scope.add(param.name, "param", param, null);
      });
    } else if (node.type === "VariableDeclaration") {
      assert(isVarConstLet(node.kind));
      node.declarations.forEach(function(declarator) {
        assert(declarator.type === "VariableDeclarator");
        const name = declarator.id.name;
        if (options.disallowVars && node.kind === "var") {
          error(getline(declarator), "var {0} is not allowed (use let or const)", name);
        }
        node.$scope.add(name, node.kind, declarator.id, declarator.range[1]);
      });
    } else if (isForWithConstLet(node) || isForInOfWithConstLet(node)) {
      node.$scope = new Scope({
        kind: "block",
        node: node,
        parent: node.$parent.$scope
      });
    } else if (isNonFunctionBlock(node)) {
      node.$scope = new Scope({
        kind: "block",
        node: node,
        parent: node.$parent.$scope
      });
    } else if (node.type === "CatchClause") {
      const identifier = node.param;
      node.$scope = new Scope({
        kind: "catch-block",
        node: node,
        parent: node.$parent.$scope
      });
      node.$scope.add(identifier.name, "caught", identifier, null);
      node.$scope.closestHoistScope().markPropagates(identifier.name);
    }
  }
  function createTopScope(programScope, environments, globals) {
    function inject(obj) {
      for (let name in obj) {
        const writeable = obj[name];
        const kind = (writeable ? "var" : "const");
        if (topScope.hasOwn(name)) {
          topScope.remove(name);
        }
        topScope.add(name, kind, {loc: {start: {line: -1}}}, -1);
      }
    }
    const topScope = new Scope({
      kind: "hoist",
      node: {},
      parent: null
    });
    const complementary = {
      undefined: false,
      Infinity: false,
      console: false
    };
    inject(complementary);
    inject(jshint_vars.reservedVars);
    inject(jshint_vars.ecmaIdentifiers);
    if (environments) {
      environments.forEach(function(env) {
        if (!jshint_vars[env]) {
          error(-1, 'environment "{0}" not found', env);
        } else {
          inject(jshint_vars[env]);
        }
      });
    }
    if (globals) {
      inject(globals);
    }
    programScope.parent = topScope;
    topScope.children.push(programScope);
    return topScope;
  }
  function setupReferences(ast, allIdentifiers, opts) {
    const analyze = (is.own(opts, "analyze") ? opts.analyze : true);
    function visit(node) {
      if (!isReference(node)) {
        return;
      }
      allIdentifiers.add(node.name);
      const scope = node.$scope.lookup(node.name);
      if (analyze && !scope && options.disallowUnknownReferences) {
        error(getline(node), "reference to unknown global variable {0}", node.name);
      }
      if (analyze && scope && is.someof(scope.getKind(node.name), ["const", "let"])) {
        const allowedFromPos = scope.getFromPos(node.name);
        const referencedAtPos = node.range[0];
        assert(is.finitenumber(allowedFromPos));
        assert(is.finitenumber(referencedAtPos));
        if (referencedAtPos < allowedFromPos) {
          if (!node.$scope.hasFunctionScopeBetween(scope)) {
            error(getline(node), "{0} is referenced before its declaration", node.name);
          }
        }
      }
      node.$refToScope = scope;
    }
    traverse(ast, {pre: visit});
  }
  function varify(ast, stats, allIdentifiers, changes) {
    function unique(name) {
      assert(allIdentifiers.has(name));
      for (let cnt = 0; ; cnt++) {
        const genName = name + "$" + String(cnt);
        if (!allIdentifiers.has(genName)) {
          return genName;
        }
      }
    }
    function renameDeclarations(node) {
      if (node.type === "VariableDeclaration" && isConstLet(node.kind)) {
        const hoistScope = node.$scope.closestHoistScope();
        const origScope = node.$scope;
        changes.push({
          start: node.range[0],
          end: node.range[0] + node.kind.length,
          str: "var"
        });
        node.declarations.forEach(function(declarator) {
          assert(declarator.type === "VariableDeclarator");
          const name = declarator.id.name;
          stats.declarator(node.kind);
          const rename = (origScope !== hoistScope && (hoistScope.hasOwn(name) || hoistScope.doesPropagate(name)));
          const newName = (rename ? unique(name) : name);
          origScope.remove(name);
          hoistScope.add(newName, "var", declarator.id, declarator.range[1]);
          origScope.moves = origScope.moves || stringmap();
          origScope.moves.set(name, {
            name: newName,
            scope: hoistScope
          });
          allIdentifiers.add(newName);
          if (newName !== name) {
            stats.rename(name, newName, getline(declarator));
            declarator.id.originalName = name;
            declarator.id.name = newName;
            changes.push({
              start: declarator.id.range[0],
              end: declarator.id.range[1],
              str: newName
            });
          }
        });
        node.kind = "var";
      }
    }
    function renameReferences(node) {
      if (!node.$refToScope) {
        return;
      }
      const move = node.$refToScope.moves && node.$refToScope.moves.get(node.name);
      if (!move) {
        return;
      }
      node.$refToScope = move.scope;
      if (node.name !== move.name) {
        node.originalName = node.name;
        node.name = move.name;
        if (node.alterop) {
          let existingOp = null;
          for (let i = 0; i < changes.length; i++) {
            const op = changes[i];
            if (op.node === node) {
              existingOp = op;
              break;
            }
          }
          assert(existingOp);
          existingOp.str = move.name;
        } else {
          changes.push({
            start: node.range[0],
            end: node.range[1],
            str: move.name
          });
        }
      }
    }
    traverse(ast, {pre: renameDeclarations});
    traverse(ast, {pre: renameReferences});
    ast.$scope.traverse({pre: function(scope) {
        delete scope.moves;
      }});
  }
  function detectLoopClosures(ast) {
    traverse(ast, {pre: visit});
    function detectIifyBodyBlockers(body, node) {
      return breakable(function(brk) {
        traverse(body, {pre: function(n) {
            if (isFunction(n)) {
              return false;
            }
            let err = true;
            const msg = "loop-variable {0} is captured by a loop-closure that can't be transformed due to use of {1} at line {2}";
            if (n.type === "BreakStatement") {
              error(getline(node), msg, node.name, "break", getline(n));
            } else if (n.type === "ContinueStatement") {
              error(getline(node), msg, node.name, "continue", getline(n));
            } else if (n.type === "ReturnStatement") {
              error(getline(node), msg, node.name, "return", getline(n));
            } else if (n.type === "YieldExpression") {
              error(getline(node), msg, node.name, "yield", getline(n));
            } else if (n.type === "Identifier" && n.name === "arguments") {
              error(getline(node), msg, node.name, "arguments", getline(n));
            } else if (n.type === "VariableDeclaration" && n.kind === "var") {
              error(getline(node), msg, node.name, "var", getline(n));
            } else {
              err = false;
            }
            if (err) {
              brk(true);
            }
          }});
        return false;
      });
    }
    function visit(node) {
      var loopNode = null;
      if (isReference(node) && node.$refToScope && isConstLet(node.$refToScope.getKind(node.name))) {
        for (let n = node.$refToScope.node; ; ) {
          if (isFunction(n)) {
            return;
          } else if (isLoop(n)) {
            loopNode = n;
            break;
          }
          n = n.$parent;
          if (!n) {
            return;
          }
        }
        assert(isLoop(loopNode));
        const defScope = node.$refToScope;
        const generateIIFE = (options.loopClosures === "iife");
        for (let s = node.$scope; s; s = s.parent) {
          if (s === defScope) {
            return;
          } else if (isFunction(s.node)) {
            if (!generateIIFE) {
              const msg = "loop-variable {0} is captured by a loop-closure. Tried \"loopClosures\": \"iife\" in defs-config.json?";
              return error(getline(node), msg, node.name);
            }
            if (loopNode.type === "ForStatement" && defScope.node === loopNode) {
              const declarationNode = defScope.getNode(node.name);
              return error(getline(declarationNode), "Not yet specced ES6 feature. {0} is declared in for-loop header and then captured in loop closure", declarationNode.name);
            }
            if (detectIifyBodyBlockers(loopNode.body, node)) {
              return;
            }
            loopNode.$iify = true;
          }
        }
      }
    }
  }
  function transformLoopClosures(root, ops, options) {
    function insertOp(pos, str, node) {
      const op = {
        start: pos,
        end: pos,
        str: str
      };
      if (node) {
        op.node = node;
      }
      ops.push(op);
    }
    traverse(root, {pre: function(node) {
        if (!node.$iify) {
          return;
        }
        const hasBlock = (node.body.type === "BlockStatement");
        const insertHead = (hasBlock ? node.body.range[0] + 1 : node.body.range[0]);
        const insertFoot = (hasBlock ? node.body.range[1] - 1 : node.body.range[1]);
        const forInName = (isForInOf(node) && node.left.declarations[0].id.name);
        ;
        const iifeHead = fmt("(function({0}){", forInName ? forInName : "");
        const iifeTail = fmt("}).call(this{0});", forInName ? ", " + forInName : "");
        const iifeFragment = options.parse(iifeHead + iifeTail);
        const iifeExpressionStatement = iifeFragment.body[0];
        const iifeBlockStatement = iifeExpressionStatement.expression.callee.object.body;
        if (hasBlock) {
          const forBlockStatement = node.body;
          const tmp = forBlockStatement.body;
          forBlockStatement.body = [iifeExpressionStatement];
          iifeBlockStatement.body = tmp;
        } else {
          const tmp = node.body;
          node.body = iifeExpressionStatement;
          iifeBlockStatement.body[0] = tmp;
        }
        insertOp(insertHead, iifeHead);
        if (forInName) {
          insertOp(insertFoot, "}).call(this, ");
          const args = iifeExpressionStatement.expression.arguments;
          const iifeArgumentIdentifier = args[1];
          iifeArgumentIdentifier.alterop = true;
          insertOp(insertFoot, forInName, iifeArgumentIdentifier);
          insertOp(insertFoot, ");");
        } else {
          insertOp(insertFoot, iifeTail);
        }
      }});
  }
  function detectConstAssignment(ast) {
    traverse(ast, {pre: function(node) {
        if (isLvalue(node)) {
          const scope = node.$scope.lookup(node.name);
          if (scope && scope.getKind(node.name) === "const") {
            error(getline(node), "can't assign to const variable {0}", node.name);
          }
        }
      }});
  }
  function detectConstantLets(ast) {
    traverse(ast, {pre: function(node) {
        if (isLvalue(node)) {
          const scope = node.$scope.lookup(node.name);
          if (scope) {
            scope.markWrite(node.name);
          }
        }
      }});
    ast.$scope.detectUnmodifiedLets();
  }
  function setupScopeAndReferences(root, opts) {
    traverse(root, {pre: createScopes});
    const topScope = createTopScope(root.$scope, options.environments, options.globals);
    const allIdentifiers = stringset();
    topScope.traverse({pre: function(scope) {
        allIdentifiers.addMany(scope.decls.keys());
      }});
    setupReferences(root, allIdentifiers, opts);
    return allIdentifiers;
  }
  function cleanupTree(root) {
    traverse(root, {pre: function(node) {
        for (let prop in node) {
          if (prop[0] === "$") {
            delete node[prop];
          }
        }
      }});
  }
  function run(src, config) {
    for (let key in config) {
      options[key] = config[key];
    }
    let parsed;
    if (is.object(src)) {
      if (!options.ast) {
        return {errors: ["Can't produce string output when input is an AST. " + "Did you forget to set options.ast = true?"]};
      }
      parsed = src;
    } else if (is.string(src)) {
      try {
        parsed = options.parse(src, {
          loc: true,
          range: true
        });
      } catch (e) {
        return {errors: [fmt("line {0} column {1}: Error during input file parsing\n{2}\n{3}", e.lineNumber, e.column, src.split("\n")[e.lineNumber - 1], fmt.repeat(" ", e.column - 1) + "^")]};
      }
    } else {
      return {errors: ["Input was neither an AST object nor a string."]};
    }
    const ast = parsed;
    error.reset();
    let allIdentifiers = setupScopeAndReferences(ast, {});
    detectLoopClosures(ast);
    detectConstAssignment(ast);
    const changes = [];
    transformLoopClosures(ast, changes, options);
    if (error.errors.length >= 1) {
      return {errors: error.errors};
    }
    if (changes.length > 0) {
      cleanupTree(ast);
      allIdentifiers = setupScopeAndReferences(ast, {analyze: false});
    }
    assert(error.errors.length === 0);
    const stats = new Stats();
    varify(ast, stats, allIdentifiers, changes);
    if (options.ast) {
      cleanupTree(ast);
      return {
        stats: stats,
        ast: ast
      };
    } else {
      const transformedSrc = alter(src, changes);
      return {
        stats: stats,
        src: transformedSrc
      };
    }
  }
  module.exports = run;
})(require("process"));
