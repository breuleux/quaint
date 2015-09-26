/* */ 
"use strict";
var assert = require("assert");
var stringmap = require("stringmap");
var stringset = require("stringset");
var is = require("simple-is");
var fmt = require("simple-fmt");
var error = require("./error");
var getline = error.getline;
var options = require("./options");
function Scope(args) {
  assert(is.someof(args.kind, ["hoist", "block", "catch-block"]));
  assert(is.object(args.node));
  assert(args.parent === null || is.object(args.parent));
  this.kind = args.kind;
  this.node = args.node;
  this.parent = args.parent;
  this.children = [];
  this.decls = stringmap();
  this.written = stringset();
  this.propagates = (this.kind === "hoist" ? stringset() : null);
  if (this.parent) {
    this.parent.children.push(this);
  }
}
Scope.prototype.print = function(indent) {
  indent = indent || 0;
  var scope = this;
  var names = this.decls.keys().map(function(name) {
    return fmt("{0} [{1}]", name, scope.decls.get(name).kind);
  }).join(", ");
  var propagates = this.propagates ? this.propagates.items().join(", ") : "";
  console.log(fmt("{0}{1}: {2}. propagates: {3}", fmt.repeat(" ", indent), this.node.type, names, propagates));
  this.children.forEach(function(c) {
    c.print(indent + 2);
  });
};
Scope.prototype.add = function(name, kind, node, referableFromPos) {
  assert(is.someof(kind, ["fun", "param", "var", "caught", "const", "let"]));
  function isConstLet(kind) {
    return is.someof(kind, ["const", "let"]);
  }
  var scope = this;
  if (is.someof(kind, ["fun", "param", "var"])) {
    while (scope.kind !== "hoist") {
      if (scope.decls.has(name) && isConstLet(scope.decls.get(name).kind)) {
        return error(getline(node), "{0} is already declared", name);
      }
      scope = scope.parent;
    }
  }
  if (scope.decls.has(name) && (options.disallowDuplicated || isConstLet(scope.decls.get(name).kind) || isConstLet(kind))) {
    return error(getline(node), "{0} is already declared", name);
  }
  var declaration = {
    kind: kind,
    node: node
  };
  if (referableFromPos) {
    assert(is.someof(kind, ["var", "const", "let"]));
    declaration.from = referableFromPos;
  }
  scope.decls.set(name, declaration);
};
Scope.prototype.getKind = function(name) {
  assert(is.string(name));
  var decl = this.decls.get(name);
  return decl ? decl.kind : null;
};
Scope.prototype.getNode = function(name) {
  assert(is.string(name));
  var decl = this.decls.get(name);
  return decl ? decl.node : null;
};
Scope.prototype.getFromPos = function(name) {
  assert(is.string(name));
  var decl = this.decls.get(name);
  return decl ? decl.from : null;
};
Scope.prototype.hasOwn = function(name) {
  return this.decls.has(name);
};
Scope.prototype.remove = function(name) {
  return this.decls.remove(name);
};
Scope.prototype.doesPropagate = function(name) {
  return this.propagates.has(name);
};
Scope.prototype.markPropagates = function(name) {
  this.propagates.add(name);
};
Scope.prototype.closestHoistScope = function() {
  var scope = this;
  while (scope.kind !== "hoist") {
    scope = scope.parent;
  }
  return scope;
};
Scope.prototype.hasFunctionScopeBetween = function(outer) {
  function isFunction(node) {
    return is.someof(node.type, ["FunctionDeclaration", "FunctionExpression"]);
  }
  for (var scope = this; scope; scope = scope.parent) {
    if (scope === outer) {
      return false;
    }
    if (isFunction(scope.node)) {
      return true;
    }
  }
  throw new Error("wasn't inner scope of outer");
};
Scope.prototype.lookup = function(name) {
  for (var scope = this; scope; scope = scope.parent) {
    if (scope.decls.has(name)) {
      return scope;
    } else if (scope.kind === "hoist") {
      scope.propagates.add(name);
    }
  }
  return null;
};
Scope.prototype.markWrite = function(name) {
  assert(is.string(name));
  this.written.add(name);
};
Scope.prototype.detectUnmodifiedLets = function() {
  var outmost = this;
  function detect(scope) {
    if (scope !== outmost) {
      scope.decls.keys().forEach(function(name) {
        if (scope.getKind(name) === "let" && !scope.written.has(name)) {
          return error(getline(scope.getNode(name)), "{0} is declared as let but never modified so could be const", name);
        }
      });
    }
    scope.children.forEach(function(childScope) {
      detect(childScope);
    });
  }
  detect(this);
};
Scope.prototype.traverse = function(options) {
  options = options || {};
  var pre = options.pre;
  var post = options.post;
  function visit(scope) {
    if (pre) {
      pre(scope);
    }
    scope.children.forEach(function(childScope) {
      visit(childScope);
    });
    if (post) {
      post(scope);
    }
  }
  visit(this);
};
module.exports = Scope;
