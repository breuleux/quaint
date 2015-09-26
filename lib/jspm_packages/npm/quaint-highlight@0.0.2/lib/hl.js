/* */ 
"use strict";

require("earlgrey-runtime/5");var t0$4 = undefined;var quaint$0 = undefined;var tools$0 = undefined;var html$0 = undefined;var hl$0 = undefined;var main$0 = undefined;var $targ$0 = undefined;quaint$0 = require("quaint");tools$0 = getProperty(quaint$0, "tools", "quaint");html$0 = require("earlgrey-runtime/std/html");hl$0 = function hl(hljs$0, raw__minus__lang$0, code$0, inline$0, default__minus__language$0) {
  var rval$0 = undefined;var langstr$0 = undefined;var body$0 = undefined;if (raw__minus__lang$0 === "") {
    langstr$0 = default__minus__language$0;
  } else {
    langstr$0 = raw__minus__lang$0;
  }if (langstr$0) {
    rval$0 = false;try {
      rval$0 = hljs$0.highlight(langstr$0, code$0).value;rval$0;
    } catch (excv$0) {
      var e$0 = undefined;e$0 = excv$0;rval$0 = html$0(code$0);rval$0;
    }body$0 = rval$0;
  } else {
    body$0 = html$0(code$0);
  }if (inline$0) {
    return ENode(["code", ".hl", "raw"], {}, body$0);
  } else {
    return ENode(["pre", ".hl", "raw"], {}, body$0);
  }
};main$0 = function main() {
  var tmp$0 = undefined;var $targ$1 = undefined;var accum$0 = undefined;var $targ$2 = undefined;var accum$1 = undefined;var current__minus__hljs$0 = undefined;var block__minus__rule$0 = undefined;var inline__minus__rule$0 = undefined;var options$1 = undefined;var __at___$0 = undefined;var options$0 = undefined;var $$67$0 = undefined;var $$68$0 = undefined;var t0$1 = undefined;var t1$0 = undefined;var t2$0 = undefined;var ph$1$0 = undefined;var t0$0 = undefined;var m$0$0 = undefined;m$0$0 = arguments;t0$0 = m$0$0.length;if (t0$0 >= 0) {
    ph$1$0 = Array.prototype.slice.call(m$0$0, 0);t0$1 = ph$1$0;t1$0 = t0$1.length;if (t1$0 >= 1 && t1$0 <= 2 && (t2$0 = t0$1[0], __at___$0 = t2$0, ___hasprop(t2$0, "isQuaintEngine") && (t2$0.isQuaintEngine ? true : false))) {
      if (1 >= t1$0) {
        options$0 = {};
      } else {
        options$0 = t0$1[1];
      }current__minus__hljs$0 = options$0.hljs;tmp$0 = send(options$0, "installPlugins", true);if (tmp$0 === undefined || tmp$0 === null) {
        tmp$0;
      } else {
        tmp$0(current__minus__hljs$0);
      }block__minus__rule$0 = ENode([], {}, ["\\maybe\\lang ", options$0.operatorBlock || "&", " \\body"]).toString();inline__minus__rule$0 = ENode([], {}, ["\\maybe\\lang ", options$0.operatorInline || "`", " \\body"]).toString();return __at___$0.registerRule(__amp____colon__(($targ$1 = function (engine$0, temp$0$0) {
        var t0$2 = undefined;var code$1 = undefined;var raw__minus__lang$1 = undefined;var lang$0 = undefined;var body$1 = undefined;t0$2 = temp$0$0;if (___hasprop(t0$2, "lang") && (lang$0 = t0$2.lang, ___hasprop(t0$2, "body"))) {
          body$1 = t0$2.body;
        } else {
          ___match_error(temp$0$0);
        }code$1 = tools$0.dedent(tools$0.rawRelative(body$1).replace(RegExp("^ *\\n", ""), ""));raw__minus__lang$1 = lang$0.raw().trim();return hl$0(current__minus__hljs$0, raw__minus__lang$1, code$1, false, options$0.defaultBlock || options$0["default"]);
      }, accum$0 = {}, accum$0[block__minus__rule$0] = $targ$1, accum$0), ($targ$2 = function (engine$1, temp$1$0) {
        var t0$3 = undefined;var code$2 = undefined;var raw__minus__lang$2 = undefined;var lang$1 = undefined;var body$2 = undefined;t0$3 = temp$1$0;if (___hasprop(t0$3, "lang") && (lang$1 = t0$3.lang, ___hasprop(t0$3, "body"))) {
          body$2 = t0$3.body;
        } else {
          ___match_error(temp$1$0);
        }code$2 = tools$0.shed(body$2).raw().replace(RegExp("\\\\+[{}()\\[\\]]", "g"), function (x$0) {
          return x$0.slice(1);
        });raw__minus__lang$2 = lang$1.raw().trim();return hl$0(current__minus__hljs$0, raw__minus__lang$2, code$2, true, options$0.defaultInline || options$0["default"]);
      }, accum$1 = {}, accum$1[inline__minus__rule$0] = $targ$2, accum$1)));
    } else {
      if (t1$0 >= 0 && t1$0 <= 1) {
        if (0 >= t1$0) {
          options$1 = {};
        } else {
          options$1 = t0$1[0];
        }return function (__at___$1) {
          return main$0(__at___$1, options$1);
        };
      } else {
        return ___match_error(ph$1$0, "{options = {=}}");
      }
    }
  } else {
    return ___match_error(m$0$0, "{*match}");
  }
};$targ$0 = main$0;t0$4 = $targ$0;module.exports = t0$4;exports = t0$4;exports;
//# sourceMappingURL=hl.js.map

