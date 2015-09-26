
importScripts('jspm_packages/system.js', 'config.js');

window = self;
importScripts('highlight.pack.js');

console.log("worker loaded");

var u = null;

System.import("edit").then(function (m) {
    console.log("quaint loaded");
    u = m.UpdaterWorker();
    u.work();
});

onmessage = function (m) {
    if (u) {
        u.onmessage(m.data);
    }
}
