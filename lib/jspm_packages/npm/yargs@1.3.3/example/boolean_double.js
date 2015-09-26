/* */ 
var argv = require("../index").boolean(['x', 'y', 'z']).argv;
;
console.dir([argv.x, argv.y, argv.z]);
console.dir(argv._);
