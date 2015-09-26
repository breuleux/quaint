/* */ 
var parse = require("../../minimist@0.0.8");
var test = require("tape");
test('whitespace should be whitespace', function(t) {
  t.plan(1);
  var x = parse(['-x', '\t']).x;
  t.equal(x, '\t');
});
