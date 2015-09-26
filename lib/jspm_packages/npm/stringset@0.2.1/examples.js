/* */ 
var StringSet = require("./stringset");
var ss1 = new StringSet();
ss1.add("greeting");
ss1.add("check");
ss1.add("__proto__");
console.log(ss1.has("greeting"));
console.log(ss1.has("__proto__"));
ss1.remove("greeting");
console.log(ss1.items());
console.log(ss1.toString());
var ss2 = new StringSet(["one", "two"]);
console.log(ss2.isEmpty());
console.log(ss2.size());
var ss3 = ss1.clone();
ss3.merge(ss2);
ss3.addMany(["a", "b"]);
console.log(ss3.toString());
