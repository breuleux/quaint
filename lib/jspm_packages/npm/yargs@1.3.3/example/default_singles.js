/* */ 
var argv = require("../index").default('x', 10).default('y', 10).argv;
;
console.log(argv.x + argv.y);
