/* */ 
var StringMap = require("./stringmap");
var sm1 = new StringMap();
sm1.set("greeting", "yoyoma");
sm1.set("check", true);
sm1.set("__proto__", -1);
console.log(sm1.has("greeting"));
console.log(sm1.get("__proto__"));
sm1.remove("greeting");
console.log(sm1.keys());
console.log(sm1.values());
console.log(sm1.items());
console.log(sm1.toString());
var sm2 = new StringMap({
  one: 1,
  two: 2
});
console.log(sm2.map(function(value, key) {
  return value * value;
}));
sm2.forEach(function(value, key) {});
console.log(sm2.isEmpty());
console.log(sm2.size());
var sm3 = sm1.clone();
sm3.merge(sm2);
sm3.setMany({
  a: {},
  b: []
});
console.log(sm3.toString());
