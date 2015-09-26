/* */ 
var ast = require("./tst-ast.json!systemjs-json");
var traverse = require("../ast-traverse");
traverse(ast, {pre: function(node, parent, prop, idx) {
    console.log(node.type + (parent ? " from parent " + parent.type + " via " + prop + (idx !== undefined ? "[" + idx + "]" : "") : ""));
  }});
console.log();
var indent = 0;
traverse(ast, {
  pre: function(node) {
    console.log(Array(indent + 1).join(" ") + node.type);
    indent += 4;
  },
  post: function() {
    indent -= 4;
  }
});
console.log();
traverse(ast, {
  pre: function(node) {
    console.log(node.type);
  },
  skipProperty: function(prop, node) {
    return prop === "parent" || prop === "expression";
  }
});
