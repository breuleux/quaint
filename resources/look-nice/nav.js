
function $$quaintNavFunctionality() {

    function toggleActive(elem) {
        if (elem.className.indexOf(" active") !== -1)
            elem.className = elem.className.replace(" active", "");
        else
            elem.className = elem.className + " active"
    }

    var dropdowns = document.querySelectorAll(".dropdown");

    for (var i = 0; i < dropdowns.length; i++) {
        (function (_elem) {
            var elem = _elem.childNodes[0];
            var onMobile = false;
            elem.ontouchend = function (e) {
                onMobile = true;
                e.stopPropagation();
                e.preventDefault();
                toggleActive(_elem);
            }
            elem.onclick = function (e) {
                if (!onMobile) {
                    e.stopPropagation();
                    e.preventDefault();
                    toggleActive(_elem);
                }
            }
        })(dropdowns[i]);
    }
}

