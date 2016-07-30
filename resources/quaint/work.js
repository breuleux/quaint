
window = self;
importScripts(
    '/quaint/resources/quaint/quaint.js',
    '/quaint/resources/quaint/highlight.pack.js'
);

console.log("worker loaded, at last");

var edit = require("edit");
var u = edit.UpdaterWorker();

onmessage = function (m) {
    u.onmessage(m.data);
}

u.work();
