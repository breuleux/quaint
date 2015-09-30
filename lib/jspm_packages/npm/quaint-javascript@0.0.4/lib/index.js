/* */ 
"use strict";
require("earlgrey-runtime/5");
var $targ$3 = undefined;
var accum$0 = undefined;
var $targ$4 = undefined;
var accum$1 = undefined;
var t0$6 = undefined;
var $targ$6 = undefined;
var vm$0 = undefined;
var JavaScriptEvaluator$0 = undefined;
var main$0 = undefined;
var $targ$0 = undefined;
vm$0 = require("vm");
JavaScriptEvaluator$0 = function JavaScriptEvaluator() {
  var h$0 = undefined;
  var t0$2 = undefined;
  var $targ$1 = undefined;
  var t0$0 = undefined;
  var m$0$0 = undefined;
  var __at___$0 = undefined;
  if (!getChecker(JavaScriptEvaluator$0)(this)) {
    __at___$0 = Object.create(JavaScriptEvaluator$0.prototype);
  } else {
    __at___$0 = this;
  }
  m$0$0 = arguments;
  t0$0 = m$0$0.length;
  if (t0$0 >= 0 && t0$0 <= 2) {
    __at___$0.store = 0 >= t0$0 ? Object.create(global) : m$0$0[0];
    __at___$0.vm = 1 >= t0$0 ? vm$0 : m$0$0[1];
    h$0 = function h() {
      var bridge$$49$0 = undefined;
      var bridge$$48$0 = undefined;
      var bridge$$47$0 = undefined;
      var tag$0 = undefined;
      var props$0 = undefined;
      var ph$1$0 = undefined;
      var children$0 = undefined;
      var t0$1 = undefined;
      var t1$0 = undefined;
      var m$1$0 = undefined;
      m$1$0 = arguments;
      t0$1 = m$1$0.length;
      if (t0$1 >= 2) {
        tag$0 = m$1$0[0];
        t1$0 = m$1$0[1];
        props$0 = t1$0;
        ph$1$0 = t1$0;
        children$0 = Array.prototype.slice.call(m$1$0, 2);
        bridge$$47$0 = ph$1$0;
        if ((bridge$$48$0 = bridge$$47$0, (bridge$$49$0 = bridge$$48$0, ___hasprop(bridge$$49$0, "tags") && (bridge$$49$0.tags, ___hasprop(bridge$$49$0, "props") && (bridge$$49$0.props, ___hasprop(bridge$$49$0, "children") && (bridge$$49$0.children, true))) || typeof bridge$$49$0 === "string") || typeof bridge$$48$0 === "number") || typeof bridge$$47$0 === "boolean") {
          return send(h$0, [tag$0, {}, props$0].concat(children$0));
        } else {
          return ENode(tag$0.split(RegExp("(?=\\W)", "")), props$0, children$0);
        }
      } else {
        return ___match_error(m$1$0, "{tag, match props, *children}");
      }
    };
    __at___$0.setenv("h", h$0);
    $targ$1 = __at___$0.vm.createContext(__at___$0.store);
    t0$2 = $targ$1;
    __at___$0.store = t0$2;
    __at___$0.ctx = t0$2;
    void 0;
  } else {
    ___match_error(m$0$0, "{@store = Object.create{global}, @vm = vm}");
  }
  return __at___$0;
};
JavaScriptEvaluator$0.prototype.eval = function() {
  var code$0 = undefined;
  var env$0 = undefined;
  var loc$0 = undefined;
  var t0$3 = undefined;
  var m$2$0 = undefined;
  var __at___$1 = undefined;
  var self$0 = undefined;
  __at___$1 = this;
  self$0 = this;
  m$2$0 = arguments;
  t0$3 = m$2$0.length;
  if (t0$3 >= 1 && t0$3 <= 3) {
    code$0 = m$2$0[0];
    if (1 >= t0$3) {
      env$0 = {};
    } else {
      env$0 = m$2$0[1];
    }
    if (2 >= t0$3) {
      loc$0 = null;
    } else {
      loc$0 = m$2$0[2];
    }
    __amp____colon__(__at___$1.store, env$0);
    return __at___$1.vm.runInContext(code$0, __at___$1.store);
  } else {
    return ___match_error(m$2$0, "{code, env = {=}, loc = null}");
  }
};
JavaScriptEvaluator$0.prototype.setenv = function setenv(key$0, value$0) {
  var $targ$2 = undefined;
  var __at___$2 = undefined;
  var self$1 = undefined;
  __at___$2 = this;
  self$1 = this;
  $targ$2 = value$0;
  __at___$2.store[key$0] = $targ$2;
  return void 0;
};
JavaScriptEvaluator$0.prototype.fork = function fork() {
  var __at___$3 = undefined;
  var self$2 = undefined;
  __at___$3 = this;
  self$2 = this;
  return JavaScriptEvaluator$0(Object.create(__at___$3.store), __at___$3.vm);
};
__amp____colon__(JavaScriptEvaluator$0, __amp____colon__(($targ$3 = "JavaScriptEvaluator", accum$0 = {}, accum$0["::name"] = $targ$3, accum$0), ($targ$4 = true, accum$1 = {}, accum$1["::egclass"] = $targ$4, accum$1)));
main$0 = function main() {
  var $targ$5 = undefined;
  var options$1 = undefined;
  var __at___$4 = undefined;
  var options$0 = undefined;
  var $$186$0 = undefined;
  var $$187$0 = undefined;
  var t0$5 = undefined;
  var t1$1 = undefined;
  var t2$0 = undefined;
  var ph$3$0 = undefined;
  var t0$4 = undefined;
  var m$3$0 = undefined;
  m$3$0 = arguments;
  t0$4 = m$3$0.length;
  if (t0$4 >= 0) {
    ph$3$0 = Array.prototype.slice.call(m$3$0, 0);
    t0$5 = ph$3$0;
    t1$1 = t0$5.length;
    if (t1$1 >= 1 && t1$1 <= 2 && (t2$0 = t0$5[0], __at___$4 = t2$0, ___hasprop(t2$0, "isQuaintEngine") && (t2$0.isQuaintEngine ? true : false))) {
      if (1 >= t1$1) {
        options$0 = {};
      } else {
        options$0 = t0$5[1];
      }
      $targ$5 = JavaScriptEvaluator$0(options$0.sandbox || Object.create(global), options$0.vm || vm$0);
      __at___$4.evaluator = $targ$5;
      return void 0;
    } else {
      if (t1$1 >= 0 && t1$1 <= 1) {
        if (0 >= t1$1) {
          options$1 = {};
        } else {
          options$1 = t0$5[0];
        }
        return function(__at___$5) {
          return main$0(__at___$5, options$1);
        };
      } else {
        return ___match_error(ph$3$0, "{options = {=}}");
      }
    }
  } else {
    return ___match_error(m$3$0, "{*match}");
  }
};
$targ$0 = main$0;
t0$6 = $targ$0;
module.exports = t0$6;
exports = t0$6;
$targ$6 = JavaScriptEvaluator$0;
exports.JavaScriptEvaluator = $targ$6;
void 0;
