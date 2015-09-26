/* */ 
"use strict";

require("earlgrey-runtime/5");var $targ$2 = undefined;var $targ$3 = undefined;var $targ$4 = undefined;var $targ$5 = undefined;var $targ$6 = undefined;var findInsert$0 = undefined;var insertSorted$0 = undefined;var deleteSorted$0 = undefined;var group$0 = undefined;var transform$0 = undefined;findInsert$0 = function findInsert(xs$0, x$0, ord$0) {
  var lo$0 = undefined;var hi$0 = undefined;lo$0 = 0;hi$0 = xs$0.length - 1;$0: while (lo$0 <= hi$0) {
    var m$0$0 = undefined;var mid$0 = undefined;mid$0 = lo$0 + Math.floor((hi$0 - lo$0) / 2);m$0$0 = ord$0(send(xs$0, mid$0), x$0);if (m$0$0 < 0) {
      lo$0 = mid$0 + 1;lo$0;
    } else {
      if (m$0$0 > 0) {
        hi$0 = mid$0 - 1;hi$0;
      } else {
        return [mid$0, true];
      }
    }
  }return [lo$0, false];
};insertSorted$0 = function insertSorted(xs$1, x$1, ord$1) {
  var t0$0 = undefined;var t1$0 = undefined;var $targ$0 = undefined;var idx$0 = undefined;var replace$0 = undefined;$targ$0 = findInsert$0(xs$1, x$1, ord$1);t0$0 = $targ$0;if (Array.isArray(t0$0) && (t1$0 = t0$0.length, t1$0 === 2)) {
    idx$0 = t0$0[0];replace$0 = t0$0[1];
  } else {
    ___match_error($targ$0, "{idx, replace}");
  }[idx$0, replace$0];return xs$1.splice(idx$0, replace$0 ? 1 : 0, x$1);
};deleteSorted$0 = function deleteSorted(xs$2, x$2, ord$2) {
  var t0$1 = undefined;var t1$1 = undefined;var $targ$1 = undefined;var idx$1 = undefined;var replace$1 = undefined;$targ$1 = findInsert$0(xs$2, x$2, ord$2);t0$1 = $targ$1;if (Array.isArray(t0$1) && (t1$1 = t0$1.length, t1$1 === 2)) {
    idx$1 = t0$1[0];replace$1 = t0$1[1];
  } else {
    ___match_error($targ$1, "{idx, replace}");
  }[idx$1, replace$1];if (replace$1) {
    return xs$2.splice(idx$1, replace$1 ? 1 : 0);
  }
};group$0 = function group(xs$3, classify$0) {
  var f$0 = undefined;f$0 = function f(temp$0$0, temp$1$0) {
    var t0$2 = undefined;var t0$3 = undefined;var t1$2 = undefined;var $$9225$0 = undefined;var $$9226$0 = undefined;var t0$4 = undefined;var t1$3 = undefined;var current$0 = undefined;var ph$0$0 = undefined;var x$3 = undefined;var cls$0 = undefined;t0$2 = temp$0$0;current$0 = t0$2;ph$0$0 = t0$2;t0$3 = temp$1$0;x$3 = t0$3;t1$2 = getProjector(classify$0)(t0$3);if (t1$2[0]) {
      cls$0 = t1$2[1];
    } else {
      ___match_error(temp$1$0);
    }t0$4 = ph$0$0;t1$3 = t0$4.length;if (t1$3 === 0) {
      current$0.push(cls$0, x$3);return ["replace", current$0];
    } else {
      if (t1$3 >= 1 && equal(t0$4[0], cls$0)) {
        Array.prototype.slice.call(t0$4, 1);current$0.push(x$3);return ["replace", current$0];
      } else {
        return ["push", [cls$0, x$3]];
      }
    }
  };return transform$0(xs$3, f$0, []);
};transform$0 = function transform() {
  var m$4 = undefined;var results$0 = undefined;var current$1 = undefined;var pushc$0 = undefined;var helper$0 = undefined;var xs$4 = undefined;var control$0 = undefined;var init$0 = undefined;var t0$5 = undefined;var m$1$0 = undefined;m$1$0 = arguments;t0$5 = m$1$0.length;if (t0$5 >= 2 && t0$5 <= 3) {
    xs$4 = m$1$0[0];control$0 = m$1$0[1];if (2 >= t0$5) {
      init$0 = null;
    } else {
      init$0 = m$1$0[2];
    }results$0 = [];current$1 = init$0;pushc$0 = false;helper$0 = function helper(x$4) {
      var m$3 = undefined;var acc$0 = undefined;var temp$2 = undefined;var elems$0 = undefined;var v$1 = undefined;var v$0 = undefined;var $$9313$0 = undefined;var $$9314$0 = undefined;var $$9315$0 = undefined;var t0$6 = undefined;var m$2$0 = undefined;m$2$0 = control$0(current$1, x$4);if (($$9313$0 = Array.isArray(m$2$0)) && (t0$6 = m$2$0.length, ($$9315$0 = t0$6 === 2) && m$2$0[0] === "push")) {
        v$0 = m$2$0[1];results$0.push(current$1);current$1 = v$0;pushc$0 = true;return pushc$0;
      } else {
        if ($$9315$0 && m$2$0[0] === "replace") {
          v$1 = m$2$0[1];current$1 = v$1;pushc$0 = true;return pushc$0;
        } else {
          if ($$9313$0 && (t0$6 >= 1 && m$2$0[0] === "splice")) {
            elems$0 = Array.prototype.slice.call(m$2$0, 1);acc$0 = [];temp$2 = null;m$3 = null;$2: for (var _iterator = elems$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
              m$3 = _step.value;
              var elem$0 = undefined;elem$0 = m$3;temp$2 = helper$0(elem$0);acc$0.push(temp$2);
            }return acc$0;
          } else {
            return ___match_error(m$2$0, "#splice{*[elems each elem]}");
          }
        }
      }
    };m$4 = null;$1: for (var _iterator = xs$4[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      m$4 = _step.value;
      var x$5 = undefined;x$5 = m$4;helper$0(x$5);
    }if (pushc$0) {
      results$0.push(current$1);
    }return results$0;
  } else {
    return ___match_error(m$1$0, "{xs, control, init = null}");
  }
};$targ$2 = findInsert$0;exports.findInsert = $targ$2;$targ$3 = insertSorted$0;exports.insertSorted = $targ$3;$targ$4 = deleteSorted$0;exports.deleteSorted = $targ$4;$targ$5 = group$0;exports.group = $targ$5;$targ$6 = transform$0;exports.transform = $targ$6;void 0;
//# sourceMappingURL=util.js.map

