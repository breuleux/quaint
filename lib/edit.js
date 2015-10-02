"use strict";

require("earlgrey-runtime/5");var $targ$0 = undefined;var $targ$1 = undefined;var $targ$2 = undefined;var $targ$3 = undefined;var $targ$12 = undefined;var accum$2 = undefined;var $targ$13 = undefined;var accum$3 = undefined;var $targ$19 = undefined;var accum$4 = undefined;var $targ$20 = undefined;var accum$5 = undefined;var $targ$27 = undefined;var $targ$28 = undefined;var $targ$29 = undefined;var quaint$0 = undefined;var qjs$0 = undefined;var qhl$0 = undefined;var wait$0 = undefined;var qgen$0 = undefined;var Updater$0 = undefined;var UpdaterWorker$0 = undefined;var setupNoWorker$0 = undefined;var main$0 = undefined;quaint$0 = require("quaint");qjs$0 = require("quaint-javascript");qhl$0 = require("quaint-highlight/plain");if (typeof document === "undefined") {
  $targ$0 = undefined;global.document = $targ$0;void 0;
}if (typeof postMessage === "undefined") {
  $targ$1 = undefined;global.postMessage = $targ$1;void 0;
}if (typeof Worker === "undefined") {
  $targ$2 = undefined;global.Worker = $targ$2;void 0;
}if (typeof hljs === "undefined") {
  $targ$3 = undefined;global.hljs = $targ$3;void 0;
}wait$0 = promisify(function (d$0, f$0) {
  return setTimeout.call(null, f$0, d$0);
});qgen$0 = function qgen(value$0) {
  var accum$0 = undefined;var accum$1 = undefined;var vm$0 = undefined;var q$0 = undefined;vm$0 = __amp____colon__((accum$0 = {}, accum$0.createContext = function (x$0) {
    return x$0;
  }, accum$0), (accum$1 = {}, accum$1.runInContext = function (code$0, x$1) {
    var restore$0 = undefined;var current$0 = undefined;var res$0 = undefined;restore$0 = {};current$0 = x$1;$1: while (current$0 !== global) {
      var m$0 = undefined;m$0 = null;$2: for (var _iterator = Object.getOwnPropertyNames(current$0)[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        m$0 = _step.value;
        var $targ$4 = undefined;var $targ$5 = undefined;var k$0 = undefined;k$0 = m$0;$targ$4 = send(global, k$0);restore$0[k$0] = $targ$4;$targ$5 = send(current$0, k$0);global[k$0] = $targ$5;void 0;
      }current$0 = Object.getPrototypeOf(x$1);current$0;
    }res$0 = eval(code$0);__amp____colon__(global, restore$0);return res$0;
  }, accum$1));q$0 = quaint$0(send(qjs$0, { sandbox: global, vm: vm$0 }), send(qhl$0, { hljs: hljs }));return q$0.translate(value$0, "html");
};Updater$0 = function Updater(temp$0$0, temp$1$0) {
  var $targ$6 = undefined;var __at___$0 = undefined;if (!getChecker(Updater$0)(this)) {
    __at___$0 = Object.create(Updater$0.prototype);
  } else {
    __at___$0 = this;
  }__at___$0.target = temp$0$0;__at___$0.text = temp$1$0;$targ$6 = false;__at___$0.changed = $targ$6;return __at___$0;
};Updater$0.prototype.update = function update() {
  var $targ$7 = undefined;var $targ$8 = undefined;var $targ$9 = undefined;var text$0 = undefined;var ph$1$0 = undefined;var regen$0 = undefined;var t0$0 = undefined;var t1$0 = undefined;var m$1$0 = undefined;var __at___$1 = undefined;var self$0 = undefined;__at___$1 = this;self$0 = this;m$1$0 = arguments;t0$0 = m$1$0.length;if (t0$0 >= 1 && t0$0 <= 2) {
    t1$0 = m$1$0[0];text$0 = t1$0;ph$1$0 = t1$0;if (1 >= t0$0) {
      regen$0 = true;
    } else {
      regen$0 = m$1$0[1];
    }if (!regen$0) {
      $targ$7 = text$0;__at___$1.text = $targ$7;return void 0;
    } else {
      if (equal(ph$1$0, __at___$1.text)) {
        return undefined;
      } else {
        $targ$8 = text$0;__at___$1.text = $targ$8;$targ$9 = true;__at___$1.changed = $targ$9;return void 0;
      }
    }
  } else {
    return ___match_error(m$1$0, "{match text, regen = true}");
  }
};Updater$0.prototype.work = function work() {
  var __at___$2 = undefined;var self$1 = undefined;__at___$2 = this;self$1 = this;return spawn.call(this, regeneratorRuntime.mark(function callee$1$0() {
    var $targ$11, rval$0, $targ$10, t$0, e$0;
    return regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          if (!true) {
            context$2$0.next = 9;
            break;
          }

          $targ$11 = undefined;
          rval$0 = undefined;
          $targ$10 = undefined;
          context$2$0.next = 6;
          return wait$0(50);

        case 6:
          if (__at___$2.changed) {
            $targ$10 = false;__at___$2.changed = $targ$10;rval$0 = false;try {
              $targ$11 = qgen$0(__at___$2.text);__at___$2.target.innerHTML = $targ$11;rval$0 = void 0;rval$0;
            } catch (excv$0) {
              t$0 = undefined;
              e$0 = undefined;
              e$0 = excv$0;t$0 = e$0;console.log(t$0);rval$0 = t$0;rval$0;
            }rval$0;
          }context$2$0.next = 0;
          break;

        case 9:
        case "end":
          return context$2$0.stop();
      }
    }, callee$1$0, this);
  }));
};__amp____colon__(Updater$0, __amp____colon__(($targ$12 = "Updater", accum$2 = {}, accum$2["::name"] = $targ$12, accum$2), ($targ$13 = true, accum$3 = {}, accum$3["::egclass"] = $targ$13, accum$3)));UpdaterWorker$0 = function UpdaterWorker() {
  var $targ$14 = undefined;var $targ$15 = undefined;var __at___$3 = undefined;if (!getChecker(UpdaterWorker$0)(this)) {
    __at___$3 = Object.create(UpdaterWorker$0.prototype);
  } else {
    __at___$3 = this;
  }$targ$14 = {};__at___$3.changes = $targ$14;$targ$15 = {};__at___$3.values = $targ$15;return __at___$3;
};UpdaterWorker$0.prototype.onmessage = function onmessage(temp$2$0) {
  var t0$1 = undefined;var t1$1 = undefined;var t2$0 = undefined;var $targ$16 = undefined;var $targ$17 = undefined;var $targ$18 = undefined;var id$0 = undefined;var text$1 = undefined;var ph$2$0 = undefined;var regen$1 = undefined;var __at___$4 = undefined;var self$2 = undefined;__at___$4 = this;self$2 = this;t0$1 = temp$2$0;if (Array.isArray(t0$1) && (t1$1 = t0$1.length, t1$1 >= 2 && t1$1 <= 3)) {
    id$0 = t0$1[0];t2$0 = t0$1[1];text$1 = t2$0;ph$2$0 = t2$0;if (2 >= t1$1) {
      regen$1 = true;
    } else {
      regen$1 = t0$1[2];
    }
  } else {
    ___match_error(temp$2$0);
  }if (!regen$1) {
    $targ$16 = text$1;__at___$4.values[id$0] = $targ$16;return void 0;
  } else {
    if (ph$2$0 !== send(send(__at___$4, "values", true), id$0)) {
      $targ$17 = true;__at___$4.changes[id$0] = $targ$17;$targ$18 = text$1;__at___$4.values[id$0] = $targ$18;return void 0;
    } else {
      return undefined;
    }
  }
};UpdaterWorker$0.prototype.work = function work() {
  var __at___$5 = undefined;var self$3 = undefined;__at___$5 = this;self$3 = this;return spawn.call(this, regeneratorRuntime.mark(function callee$1$0() {
    var rval$1, id$1, t0$2, m$2$0, t$1, e$1;
    return regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          if (!true) {
            context$2$0.next = 11;
            break;
          }

          rval$1 = undefined;
          id$1 = undefined;
          t0$2 = undefined;
          m$2$0 = undefined;
          context$2$0.next = 7;
          return wait$0(10);

        case 7:
          m$2$0 = keys(__at___$5.changes);if (Array.isArray(m$2$0) && (t0$2 = m$2$0.length, t0$2 >= 1)) {
            id$1 = m$2$0[0];Array.prototype.slice.call(m$2$0, 1);delete __at___$5.changes[id$1];rval$1 = false;try {
              rval$1 = postMessage([id$1, qgen$0(send(send(__at___$5, "values", true), id$1))]);rval$1;
            } catch (excv$1) {
              t$1 = undefined;
              e$1 = undefined;
              e$1 = excv$1;t$1 = e$1;console.log(t$1);rval$1 = t$1;rval$1;
            }rval$1;
          } else {
            undefined;
          }context$2$0.next = 0;
          break;

        case 11:
        case "end":
          return context$2$0.stop();
      }
    }, callee$1$0, this);
  }));
};__amp____colon__(UpdaterWorker$0, __amp____colon__(($targ$19 = "UpdaterWorker", accum$4 = {}, accum$4["::name"] = $targ$19, accum$4), ($targ$20 = true, accum$5 = {}, accum$5["::egclass"] = $targ$20, accum$5)));setupNoWorker$0 = function setupNoWorker() {
  var worker$0 = undefined;var $targ$21 = undefined;var editor$0 = undefined;var target$0 = undefined;var regen$2 = undefined;var t0$3 = undefined;var m$3$0 = undefined;m$3$0 = arguments;t0$3 = m$3$0.length;if (t0$3 >= 2 && t0$3 <= 3) {
    editor$0 = m$3$0[0];target$0 = m$3$0[1];if (2 >= t0$3) {
      regen$2 = true;
    } else {
      regen$2 = m$3$0[2];
    }worker$0 = Updater$0(target$0, editor$0.value);worker$0.work();worker$0.update(editor$0.value, regen$2);$targ$21 = function (e$2) {
      return worker$0.update(editor$0.value);
    };editor$0.onkeyup = $targ$21;return void 0;
  } else {
    return ___match_error(m$3$0, "{editor, target, regen = true}");
  }
};main$0 = function main() {
  var m$5 = undefined;var acc$0 = undefined;var temp$3 = undefined;var last__minus__id$0 = undefined;var targets$0 = undefined;var worker$1 = undefined;var $targ$22 = undefined;var eds$0 = undefined;last__minus__id$0 = 0;targets$0 = {};worker$1 = new Worker("lib/work.js");$targ$22 = function (m$4) {
    var t0$4 = undefined;var t1$2 = undefined;var $targ$23 = undefined;var id$2 = undefined;var text$2 = undefined;var $targ$24 = undefined;$targ$23 = m$4.data;t0$4 = $targ$23;if (Array.isArray(t0$4) && (t1$2 = t0$4.length, t1$2 === 2)) {
      id$2 = t0$4[0];text$2 = t0$4[1];
    } else {
      ___match_error($targ$23, "{id, text}");
    }[id$2, text$2];$targ$24 = text$2;send(targets$0, id$2).innerHTML = $targ$24;return void 0;
  };worker$1.onmessage = $targ$22;eds$0 = document.querySelectorAll(".quaint-example");acc$0 = [];temp$3 = null;m$5 = null;$5: for (var _iterator = eds$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
    (function () {
      m$5 = _step.value;
      var id$3 = undefined;var editor$1 = undefined;var target$1 = undefined;var $targ$25 = undefined;var $targ$26 = undefined;var ed$0 = undefined;ed$0 = m$5;last__minus__id$0 = last__minus__id$0 + 1;id$3 = last__minus__id$0;editor$1 = ed$0.children[0].children[0];target$1 = ed$0.children[1];$targ$25 = target$1;targets$0[id$3] = $targ$25;worker$1.postMessage([id$3, editor$1.value, false]);$targ$26 = function (e$3) {
        return worker$1.postMessage([id$3, editor$1.value, true]);
      };editor$1.onkeyup = $targ$26;temp$3 = void 0;acc$0.push(temp$3);
    })();
  }return acc$0;
};$targ$27 = Updater$0;exports.Updater = $targ$27;$targ$28 = UpdaterWorker$0;exports.UpdaterWorker = $targ$28;$targ$29 = main$0;exports.main = $targ$29;void 0;
//# sourceMappingURL=edit.js.map
