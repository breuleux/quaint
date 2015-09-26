/* */ 
var argv = require("../index").usage('Usage: $0 -x [num] -y [num]').demand(['x', 'y']).argv;
console.log(argv.x / argv.y);
