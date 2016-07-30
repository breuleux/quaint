
function $$quaintQuaintMain() {
    var lastId = 0;
    var targets = {};
    var worker = new Worker("/quaint/resources/quaint/work.js");
    worker.onmessage = function (m) {
        var id = m.data[0];
        var text = m.data[1];
        targets[id].innerHTML = text;
    }
    var eds = document.querySelectorAll(".quaint-interactive");
    for (var i = 0; i < eds.length; i++) {
        var ed = eds[i];
        lastId++;
        var id = lastId;
        var editor = ed.children[0].children[0];
        var target = ed.children[1];
        targets[id] = target;
        worker.postMessage([id, editor.value, false]);
        editor.onkeyup = (function (id, editor) {
            return function (e) {
                worker.postMessage([id, editor.value, true]);
            }
        })(id, editor);
    }
}
