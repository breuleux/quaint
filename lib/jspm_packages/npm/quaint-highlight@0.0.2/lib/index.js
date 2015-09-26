/* */ 
"use strict";
require("earlgrey-runtime/5");
var t0$2 = undefined;
var hl$0 = undefined;
var hljs$0 = undefined;
var main$0 = undefined;
var $targ$0 = undefined;
hl$0 = require("./hl");
hljs$0 = require("highlight.js");
main$0 = function main() {
  var options$1 = undefined;
  var __at___$0 = undefined;
  var options$0 = undefined;
  var $$212$0 = undefined;
  var $$213$0 = undefined;
  var t0$1 = undefined;
  var t1$0 = undefined;
  var t2$0 = undefined;
  var ph$1$0 = undefined;
  var t0$0 = undefined;
  var m$0$0 = undefined;
  m$0$0 = arguments;
  t0$0 = m$0$0.length;
  if (t0$0 >= 0) {
    ph$1$0 = Array.prototype.slice.call(m$0$0, 0);
    t0$1 = ph$1$0;
    t1$0 = t0$1.length;
    if (t1$0 >= 1 && t1$0 <= 2 && (t2$0 = t0$1[0], __at___$0 = t2$0, ___hasprop(t2$0, "isQuaintEngine") && (t2$0.isQuaintEngine ? true : false))) {
      if (1 >= t1$0) {
        options$0 = {};
      } else {
        options$0 = t0$1[1];
      }
      options$0.hljs = options$0.hljs || hljs$0;
      return hl$0(__at___$0, options$0);
    } else {
      if (t1$0 >= 0 && t1$0 <= 1) {
        if (0 >= t1$0) {
          options$1 = {};
        } else {
          options$1 = t0$1[0];
        }
        return function(__at___$1) {
          return main$0(__at___$1, options$1);
        };
      } else {
        return ___match_error(ph$1$0, "{options = {=}}");
      }
    }
  } else {
    return ___match_error(m$0$0, "{*match}");
  }
};
$targ$0 = main$0;
t0$2 = $targ$0;
module.exports = t0$2;
exports = t0$2;
exports;
