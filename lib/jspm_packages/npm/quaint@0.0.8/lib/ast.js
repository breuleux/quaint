/* */ 
"use strict";
require("earlgrey-runtime/5");
var $targ$11 = undefined;
var accum$0 = undefined;
var $targ$12 = undefined;
var accum$1 = undefined;
var $targ$13 = undefined;
var accum$2 = undefined;
var $targ$14 = undefined;
var accum$3 = undefined;
var $targ$15 = undefined;
var accum$4 = undefined;
var $targ$16 = undefined;
var accum$5 = undefined;
var $targ$19 = undefined;
var accum$6 = undefined;
var $targ$20 = undefined;
var accum$7 = undefined;
var $targ$23 = undefined;
var accum$8 = undefined;
var $targ$24 = undefined;
var accum$9 = undefined;
var $targ$29 = undefined;
var accum$10 = undefined;
var $targ$30 = undefined;
var accum$11 = undefined;
var package$1 = undefined;
var $targ$34 = undefined;
var $targ$35 = undefined;
var $targ$36 = undefined;
var $targ$37 = undefined;
var $targ$38 = undefined;
var $targ$39 = undefined;
var $targ$40 = undefined;
var $targ$41 = undefined;
var $targ$42 = undefined;
var $targ$43 = undefined;
var $targ$44 = undefined;
var $targ$45 = undefined;
var $targ$46 = undefined;
var $targ$47 = undefined;
var $targ$48 = undefined;
var opg$0 = undefined;
var Location$0 = undefined;
var Source$0 = undefined;
var reg$0 = undefined;
var register__minus__all$0 = undefined;
var lang$0 = undefined;
var Into$0 = undefined;
var Deferred$0 = undefined;
var QAst$0 = undefined;
var $targ$0 = undefined;
var $targ$1 = undefined;
var $targ$2 = undefined;
var $targ$3 = undefined;
var _ts$0 = undefined;
var Text$0 = undefined;
var $targ$4 = undefined;
var $targ$5 = undefined;
var _os$0 = undefined;
var Oper$0 = undefined;
var $targ$6 = undefined;
var $targ$7 = undefined;
var _ss$0 = undefined;
var Seq$0 = undefined;
var $targ$8 = undefined;
var $targ$9 = undefined;
var $targ$10 = undefined;
var raw$0 = undefined;
var shed$0 = undefined;
var shedAll$0 = undefined;
var shedIndent$0 = undefined;
var statements$0 = undefined;
var collapse$0 = undefined;
var parseSpec$0 = undefined;
var makeExtractor$0 = undefined;
var ruleBank$0 = undefined;
var extractor$0 = undefined;
opg$0 = require("opg");
Location$0 = getProperty(opg$0, "Location", "opg");
Source$0 = getProperty(opg$0, "Source", "opg");
reg$0 = require("kaiser/reg");
register__minus__all$0 = getProperty(reg$0, "registerAll", "reg");
lang$0 = require("./lang");
Into$0 = function Into() {
  var t0$0 = undefined;
  var m$0$0 = undefined;
  var __at___$0 = undefined;
  if (!getChecker(Into$0)(this)) {
    __at___$0 = Object.create(Into$0.prototype);
  } else {
    __at___$0 = this;
  }
  m$0$0 = arguments;
  t0$0 = m$0$0.length;
  if (t0$0 >= 2 && t0$0 <= 3) {
    __at___$0.document = m$0$0[0];
    __at___$0.value = m$0$0[1];
    __at___$0.options = 2 >= t0$0 ? {} : m$0$0[2];
    __amp____colon__(__at___$0, __at___$0.options);
  } else {
    ___match_error(m$0$0, "{@document, @value, @options = {=}}");
  }
  return __at___$0;
};
__amp____colon__(Into$0, __amp____colon__(($targ$11 = "Into", accum$0 = {}, accum$0["::name"] = $targ$11, accum$0), ($targ$12 = true, accum$1 = {}, accum$1["::egclass"] = $targ$12, accum$1)));
Deferred$0 = function Deferred(temp$0$0) {
  var __at___$1 = undefined;
  if (!getChecker(Deferred$0)(this)) {
    __at___$1 = Object.create(Deferred$0.prototype);
  } else {
    __at___$1 = this;
  }
  __at___$1.generate = temp$0$0;
  return __at___$1;
};
__amp____colon__(Deferred$0, __amp____colon__(($targ$13 = "Deferred", accum$2 = {}, accum$2["::name"] = $targ$13, accum$2), ($targ$14 = true, accum$3 = {}, accum$3["::egclass"] = $targ$14, accum$3)));
QAst$0 = function QAst() {
  var __at___$2 = undefined;
  if (!getChecker(QAst$0)(this)) {
    __at___$2 = Object.create(QAst$0.prototype);
  } else {
    __at___$2 = this;
  }
  return __at___$2;
};
QAst$0.prototype.raw = function raw() {
  var rval$0 = undefined;
  var __at___$3 = undefined;
  var self$0 = undefined;
  __at___$3 = this;
  self$0 = this;
  rval$0 = false;
  try {
    rval$0 = __at___$3.location.text();
    rval$0;
  } catch (excv$0) {
    var e$0 = undefined;
    e$0 = excv$0;
    throw ErrorFactory(["noraw"]).create(ENode([], {}, ["Cannot get a raw string from ", __at___$3, "."]).toString());
    rval$0;
  }
  return rval$0;
};
QAst$0.prototype.empty = function empty() {
  var __at___$4 = undefined;
  var self$1 = undefined;
  __at___$4 = this;
  self$1 = this;
  return equal(__at___$4.raw().trim(), "");
};
$targ$0 = function() {
  var __at___$5 = undefined;
  var self$2 = undefined;
  __at___$5 = this;
  self$2 = this;
  return statements$0(__at___$5);
};
QAst$0.prototype.statements = $targ$0;
$targ$1 = function() {
  var n$0 = undefined;
  var t0$1 = undefined;
  var m$1$0 = undefined;
  var __at___$6 = undefined;
  var self$3 = undefined;
  __at___$6 = this;
  self$3 = this;
  m$1$0 = arguments;
  t0$1 = m$1$0.length;
  if (t0$1 >= 0 && t0$1 <= 1) {
    if (0 >= t0$1) {
      n$0 = 1;
    } else {
      n$0 = m$1$0[0];
    }
    return shed$0(__at___$6, n$0);
  } else {
    return ___match_error(m$1$0, "{n = 1}");
  }
};
QAst$0.prototype.shed = $targ$1;
$targ$2 = function() {
  var __at___$7 = undefined;
  var self$4 = undefined;
  __at___$7 = this;
  self$4 = this;
  return __at___$7.shed(1 / 0);
};
QAst$0.prototype.shedAll = $targ$2;
$targ$3 = function() {
  var __at___$8 = undefined;
  var self$5 = undefined;
  __at___$8 = this;
  self$5 = this;
  return shedIndent$0(__at___$8);
};
QAst$0.prototype.shedIndent = $targ$3;
QAst$0.prototype.sexp = function sexp() {
  var __at___$9 = undefined;
  var self$6 = undefined;
  __at___$9 = this;
  self$6 = this;
  return __at___$9;
};
QAst$0.prototype.args = function args() {
  var __at___$10 = undefined;
  var self$7 = undefined;
  __at___$10 = this;
  self$7 = this;
  return __at___$10;
};
QAst$0.prototype.extract = function extract() {
  var specs$0 = undefined;
  var t0$2 = undefined;
  var m$2$0 = undefined;
  var __at___$11 = undefined;
  var self$8 = undefined;
  __at___$11 = this;
  self$8 = this;
  m$2$0 = arguments;
  t0$2 = m$2$0.length;
  if (t0$2 >= 0) {
    specs$0 = Array.prototype.slice.call(m$2$0, 0);
    return send(extractor$0, specs$0, true)(__at___$11);
  } else {
    return ___match_error(m$2$0, "{*specs}");
  }
};
__amp____colon__(QAst$0, __amp____colon__(($targ$15 = "QAst", accum$4 = {}, accum$4["::name"] = $targ$15, accum$4), ($targ$16 = true, accum$5 = {}, accum$5["::egclass"] = $targ$16, accum$5)));
_ts$0 = Symbol("text");
Text$0 = ___extend(function(x$0) {
  var $targ$17 = undefined;
  var $targ$18 = undefined;
  var __at___$12 = undefined;
  if (!getChecker(Text$0)(this)) {
    __at___$12 = Object.create(Text$0.prototype);
  } else {
    __at___$12 = this;
  }
  $targ$17 = x$0;
  __at___$12[0] = $targ$17;
  $targ$18 = 1;
  __at___$12.length = $targ$18;
  return __at___$12;
}, QAst$0);
$targ$4 = function() {
  var __at___$13 = undefined;
  var self$9 = undefined;
  __at___$13 = this;
  self$9 = this;
  return Text$0(__at___$13[0]);
};
Text$0.prototype[Symbol.clone] = $targ$4;
$targ$5 = function() {
  var __at___$14 = undefined;
  var self$10 = undefined;
  __at___$14 = this;
  self$10 = this;
  return [_ts$0, __at___$14[0]];
};
Text$0.prototype["::serialize"] = $targ$5;
__amp____colon__(Text$0, __amp____colon__(($targ$19 = "Text", accum$6 = {}, accum$6["::name"] = $targ$19, accum$6), ($targ$20 = true, accum$7 = {}, accum$7["::egclass"] = $targ$20, accum$7)));
_os$0 = Symbol("oper");
Oper$0 = ___extend(function(x$1) {
  var $targ$21 = undefined;
  var $targ$22 = undefined;
  var __at___$15 = undefined;
  if (!getChecker(Oper$0)(this)) {
    __at___$15 = Object.create(Oper$0.prototype);
  } else {
    __at___$15 = this;
  }
  $targ$21 = x$1;
  __at___$15[0] = $targ$21;
  $targ$22 = 1;
  __at___$15.length = $targ$22;
  return __at___$15;
}, QAst$0);
$targ$6 = function() {
  var __at___$16 = undefined;
  var self$11 = undefined;
  __at___$16 = this;
  self$11 = this;
  return Oper$0(__at___$16[0]);
};
Oper$0.prototype[Symbol.clone] = $targ$6;
$targ$7 = function() {
  var __at___$17 = undefined;
  var self$12 = undefined;
  __at___$17 = this;
  self$12 = this;
  return [_os$0, __at___$17[0]];
};
Oper$0.prototype["::serialize"] = $targ$7;
__amp____colon__(Oper$0, __amp____colon__(($targ$23 = "Oper", accum$8 = {}, accum$8["::name"] = $targ$23, accum$8), ($targ$24 = true, accum$9 = {}, accum$9["::egclass"] = $targ$24, accum$9)));
_ss$0 = Symbol("seq");
Seq$0 = ___extend(function() {
  var m$4 = undefined;
  var self$13 = undefined;
  var $targ$25 = undefined;
  var xs$0 = undefined;
  var t0$3 = undefined;
  var m$3$0 = undefined;
  var __at___$18 = undefined;
  if (!getChecker(Seq$0)(this)) {
    __at___$18 = Object.create(Seq$0.prototype);
  } else {
    __at___$18 = this;
  }
  m$3$0 = arguments;
  t0$3 = m$3$0.length;
  if (t0$3 >= 0) {
    xs$0 = Array.prototype.slice.call(m$3$0, 0);
    self$13 = __at___$18;
    m$4 = null;
    $0: for (var _iterator = enumerate(xs$0)[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$4 = _step.value;
      var $targ$26 = undefined;
      var i$0 = undefined;
      var x$2 = undefined;
      var t0$4 = undefined;
      var t1$0 = undefined;
      t0$4 = m$4;
      if (Array.isArray(t0$4) && (t1$0 = t0$4.length, t1$0 === 2)) {
        i$0 = t0$4[0];
        x$2 = t0$4[1];
        $targ$26 = x$2;
        self$13[i$0] = $targ$26;
        void 0;
      } else {
        ___match_error(m$4);
      }
    }
    $targ$25 = xs$0.length;
    __at___$18.length = $targ$25;
    void 0;
  } else {
    ___match_error(m$3$0, "{*xs}");
  }
  return __at___$18;
}, QAst$0);
$targ$8 = function() {
  var m$5 = undefined;
  var acc$0 = undefined;
  var temp$1 = undefined;
  var rval$1 = undefined;
  var $targ$27 = undefined;
  var $targ$28 = undefined;
  var __at___$19 = undefined;
  var self$14 = undefined;
  __at___$19 = this;
  self$14 = this;
  rval$1 = send(Seq$0, (acc$0 = [], temp$1 = null, m$5 = null, (function() {
    $1: for (var _iterator = enumerate(__at___$19)[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$5 = _step.value;
      var x$3 = undefined;
      var t0$5 = undefined;
      var t1$1 = undefined;
      t0$5 = m$5;
      if (Array.isArray(t0$5) && (t1$1 = t0$5.length, t1$1 === 2)) {
        t0$5[0];
        x$3 = t0$5[1];
        temp$1 = x$3;
        acc$0.push(temp$1);
      } else {
        ___match_error(m$5);
      }
    }
  })(), acc$0));
  $targ$27 = __at___$19.operator;
  rval$1.operator = $targ$27;
  $targ$28 = __at___$19.location;
  rval$1.location = $targ$28;
  return rval$1;
};
Seq$0.prototype[Symbol.clone] = $targ$8;
$targ$9 = function() {
  var m$6 = undefined;
  var acc$1 = undefined;
  var temp$2 = undefined;
  var __at___$20 = undefined;
  var self$15 = undefined;
  __at___$20 = this;
  self$15 = this;
  return [_ss$0, (acc$1 = [], temp$2 = null, m$6 = null, (function() {
    $2: for (var _iterator = enumerate(__at___$20)[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$6 = _step.value;
      var x$4 = undefined;
      var t0$6 = undefined;
      var t1$2 = undefined;
      t0$6 = m$6;
      if (Array.isArray(t0$6) && (t1$2 = t0$6.length, t1$2 === 2)) {
        t0$6[0];
        x$4 = t0$6[1];
        temp$2 = x$4;
        acc$1.push(temp$2);
      } else {
        ___match_error(m$6);
      }
    }
  })(), acc$1)];
};
Seq$0.prototype["::serialize"] = $targ$9;
Seq$0.prototype.sexp = function sexp() {
  var m$8 = undefined;
  var operators$0 = undefined;
  var newargs$0 = undefined;
  var recursive$0 = undefined;
  var t0$7 = undefined;
  var m$7$0 = undefined;
  var __at___$21 = undefined;
  var self$16 = undefined;
  __at___$21 = this;
  self$16 = this;
  m$7$0 = arguments;
  t0$7 = m$7$0.length;
  if (t0$7 >= 0 && t0$7 <= 1) {
    if (0 >= t0$7) {
      recursive$0 = true;
    } else {
      recursive$0 = m$7$0[0];
    }
    operators$0 = [];
    newargs$0 = [];
    m$8 = null;
    $3: for (var _iterator = enumerate(__at___$21)[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$8 = _step.value;
      var $$660$0 = undefined;
      var i$1 = undefined;
      var ph$0$0 = undefined;
      var arg$0 = undefined;
      var t0$8 = undefined;
      var t1$3 = undefined;
      var t2$0 = undefined;
      t0$8 = m$8;
      if (Array.isArray(t0$8) && (t1$3 = t0$8.length, t1$3 === 2)) {
        t2$0 = t0$8[0];
        i$1 = t2$0;
        ph$0$0 = t2$0;
        arg$0 = t0$8[1];
        if (equal(i$1 % 2, 0)) {
          newargs$0.push(recursive$0 ? arg$0.sexp(recursive$0) : arg$0);
        } else {
          operators$0.push(arg$0[0]);
        }
      } else {
        ___match_error(m$8);
      }
    }
    return [operators$0.join(" ")].concat(newargs$0);
  } else {
    return ___match_error(m$7$0, "{recursive = true}");
  }
};
Seq$0.prototype.args = function args() {
  var __at___$22 = undefined;
  var self$17 = undefined;
  __at___$22 = this;
  self$17 = this;
  return send(__at___$22.sexp(false), range(1));
};
$targ$10 = function() {
  var __at___$23 = undefined;
  var self$18 = undefined;
  __at___$23 = this;
  self$18 = this;
  return collapse$0(__at___$23[1][0], __at___$23);
};
Seq$0.prototype.collapse = $targ$10;
__amp____colon__(Seq$0, __amp____colon__(($targ$29 = "Seq", accum$10 = {}, accum$10["::name"] = $targ$29, accum$10), ($targ$30 = true, accum$11 = {}, accum$11["::egclass"] = $targ$30, accum$11)));
register__minus__all$0([QAst$0.prototype, Text$0.prototype, Oper$0.prototype, Seq$0.prototype], {"package": (package$1 = require("../package.json!systemjs-json"), package$1)});
raw$0 = function raw() {
  var x$5 = undefined;
  var ph$2$0 = undefined;
  var operate$0 = undefined;
  var t0$9 = undefined;
  var t1$4 = undefined;
  var m$9$0 = undefined;
  m$9$0 = arguments;
  t0$9 = m$9$0.length;
  if (t0$9 >= 1 && t0$9 <= 2) {
    t1$4 = m$9$0[0];
    x$5 = t1$4;
    ph$2$0 = t1$4;
    if (1 >= t0$9) {
      operate$0 = function(x$6) {
        return x$6;
      };
    } else {
      operate$0 = m$9$0[1];
    }
    if (getChecker(QAst$0)(ph$2$0)) {
      return x$5.raw();
    } else {
      if (typeof ph$2$0 === "string") {
        return operate$0(x$5);
      } else {
        if (getChecker(Deferred$0)(ph$2$0)) {
          return Deferred$0(function(path$0, docs$0) {
            return raw$0(x$5.props.generate(path$0, docs$0));
          });
        } else {
          throw ErrorFactory(["noraw"]).create(String(ENode([], {}, ["Cannot get a raw string from ", x$5, "."]).toString()));
        }
      }
    }
  } else {
    return ___match_error(m$9$0, "{match x, operate = {x} -> x}");
  }
};
shed$0 = function shed() {
  var lw$0 = undefined;
  var rw$0 = undefined;
  var loc$0 = undefined;
  var node$0 = undefined;
  var ob$0 = undefined;
  var mid$0 = undefined;
  var cb$0 = undefined;
  var t0$11 = undefined;
  var t1$5 = undefined;
  var t2$1 = undefined;
  var t3$0 = undefined;
  var t4$0 = undefined;
  var t5$0 = undefined;
  var ph$4$0 = undefined;
  var n$1 = undefined;
  var t0$10 = undefined;
  var m$10$0 = undefined;
  m$10$0 = arguments;
  t0$10 = m$10$0.length;
  if (t0$10 >= 1 && t0$10 <= 2) {
    ph$4$0 = m$10$0[0];
    if (1 >= t0$10) {
      n$1 = 1;
    } else {
      n$1 = m$10$0[1];
    }
    t0$11 = ph$4$0;
    if (getChecker(Seq$0)(t0$11) && (t1$5 = t0$11.length, t1$5 === 5 && (t0$11[0], t2$1 = t0$11[1], ob$0 = t2$1, getChecker(Oper$0)(t2$1) && (t3$0 = t2$1.length, t3$0 === 1 && (t2$1[0] === "[" && (mid$0 = t0$11[2], t4$0 = t0$11[3], cb$0 = t4$0, getChecker(Oper$0)(t4$0) && (t5$0 = t4$0.length, t5$0 === 1 && t4$0[0] === "]"))))))) {
      t0$11[4];
      if (n$1 > 1) {
        return shed$0(mid$0, n$1 - 1);
      } else {
        lw$0 = raw$0(ob$0).split("[").pop();
        rw$0 = raw$0(cb$0).split("]").shift();
        loc$0 = mid$0.location;
        return __amp__(mid$0, {location: Location$0(loc$0.source, loc$0.start - lw$0.length, loc$0.end + rw$0.length)});
      }
    } else {
      node$0 = ph$4$0;
      return node$0;
    }
  } else {
    return ___match_error(m$10$0, "{match, n = 1}");
  }
};
shedAll$0 = function shedAll(node$1) {
  return shed$0(node$1, 1 / 0);
};
shedIndent$0 = function shedIndent(temp$3$0) {
  var t0$12 = undefined;
  var rest$0 = undefined;
  var x$7 = undefined;
  var $$927$0 = undefined;
  var $$928$0 = undefined;
  var t0$14 = undefined;
  var t1$7 = undefined;
  var t2$3 = undefined;
  var t3$2 = undefined;
  var t4$2 = undefined;
  var m$11$0 = undefined;
  var node$3 = undefined;
  var mid$1 = undefined;
  var t0$13 = undefined;
  var t1$6 = undefined;
  var t2$2 = undefined;
  var t3$1 = undefined;
  var t4$1 = undefined;
  var t5$1 = undefined;
  var node$2 = undefined;
  var ph$5$0 = undefined;
  t0$12 = temp$3$0;
  node$2 = t0$12;
  ph$5$0 = t0$12;
  t0$13 = ph$5$0;
  if (getChecker(Seq$0)(t0$13) && (t1$6 = t0$13.length, t1$6 === 5 && (t0$13[0], t2$2 = t0$13[1], getChecker(Oper$0)(t2$2) && (t3$1 = t2$2.length, t3$1 === 1 && (t2$2[0] === "I(" && (mid$1 = t0$13[2], t4$1 = t0$13[3], getChecker(Oper$0)(t4$1) && (t5$1 = t4$1.length, t5$1 === 1 && t4$1[0] === ")I"))))))) {
    t0$13[4];
    m$11$0 = mid$1;
    if (($$927$0 = getChecker(Seq$0)(m$11$0)) && (t0$14 = m$11$0.length, t0$14 === 3 && (t1$7 = m$11$0[0], getChecker(Text$0)(t1$7) && (t2$3 = t1$7.length, t2$3 === 1 && (t1$7[0] === "" && (t3$2 = m$11$0[1], getChecker(Oper$0)(t3$2) && (t4$2 = t3$2.length, t4$2 === 1 && t3$2[0] === "NL"))))))) {
      x$7 = m$11$0[2];
      return x$7;
    } else {
      if ($$927$0 && (t0$14 >= 2 && (t1$7 = m$11$0[0], getChecker(Text$0)(t1$7) && (t2$3 = t1$7.length, t2$3 === 1 && (t1$7[0] === "" && (t3$2 = m$11$0[1], getChecker(Oper$0)(t3$2) && (t4$2 = t3$2.length, t4$2 === 1 && t3$2[0] === "NL"))))))) {
        rest$0 = Array.prototype.slice.call(m$11$0, 2);
        return __amp____colon__(send(Seq$0, rest$0), mid$1);
      } else {
        return mid$1;
      }
    }
  } else {
    node$3 = ph$5$0;
    return node$3;
  }
};
statements$0 = function statements(temp$4$0) {
  var t0$15 = undefined;
  var t1$8 = undefined;
  var m$12 = undefined;
  var acc$2 = undefined;
  var temp$5 = undefined;
  var xs$1 = undefined;
  var $$998$0 = undefined;
  var t0$16 = undefined;
  var t1$9 = undefined;
  var t2$4 = undefined;
  var t3$3 = undefined;
  var node$4 = undefined;
  var ph$6$0 = undefined;
  t0$15 = getProjector(shedIndent$0)(temp$4$0);
  if (t0$15[0]) {
    t1$8 = t0$15[1];
    node$4 = t1$8;
    ph$6$0 = t1$8;
  } else {
    ___match_error(temp$4$0);
  }
  t0$16 = ph$6$0;
  if (getChecker(Seq$0)(t0$16) && (t1$9 = t0$16.length, t1$9 >= 2 && (t0$16[0], t2$4 = t0$16[1], getChecker(Oper$0)(t2$4) && (t3$3 = t2$4.length, t3$3 === 1 && t2$4[0] === "NL")))) {
    Array.prototype.slice.call(t0$16, 2);
    acc$2 = [];
    temp$5 = null;
    m$12 = null;
    $4: for (var _iterator = enumerate(node$4)[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$12 = _step.value;
      var i$2 = undefined;
      var x$8 = undefined;
      var t0$17 = undefined;
      var t1$10 = undefined;
      t0$17 = m$12;
      if (Array.isArray(t0$17) && (t1$10 = t0$17.length, t1$10 === 2 && (i$2 = t0$17[0], x$8 = t0$17[1], equal(i$2 % 2, 0)))) {
        temp$5 = statements$0(x$8);
        acc$2.push(temp$5);
      } else {
        false;
      }
    }
    xs$1 = acc$2;
    return xs$1.reduce(function(x$9, y$0) {
      return x$9.concat(y$0);
    });
  } else {
    if (getChecker(Text$0)(t0$16) && (t1$9 = t0$16.length, t1$9 === 1 && t0$16[0] === "")) {
      return [];
    } else {
      return [node$4];
    }
  }
};
collapse$0 = function collapse(operator$0, node$5) {
  var l$0 = undefined;
  var r$0 = undefined;
  var t0$18 = undefined;
  var m$13$0 = undefined;
  m$13$0 = node$5.sexp(false);
  if (Array.isArray(m$13$0) && (t0$18 = m$13$0.length, t0$18 === 3 && m$13$0[0] === operator$0)) {
    l$0 = m$13$0[1];
    r$0 = m$13$0[2];
    return [l$0].concat(collapse$0(operator$0, r$0));
  } else {
    return [node$5];
  }
};
parseSpec$0 = function parseSpec(ph$7$0) {
  var helper$0 = undefined;
  var ast$0 = undefined;
  var top$0 = undefined;
  var specificity$0 = undefined;
  var rval$2 = undefined;
  var top$1 = undefined;
  var rval$3 = undefined;
  var specificity$1 = undefined;
  var spec$0 = undefined;
  var $$1125$0 = undefined;
  var t0$19 = undefined;
  var t1$11 = undefined;
  t0$19 = ph$7$0;
  if (typeof t0$19 === "string") {
    spec$0 = t0$19;
    ast$0 = lang$0.parse(Source$0(spec$0));
    top$0 = null;
    specificity$0 = 0;
    helper$0 = function helper(temp$6$0, opts$0) {
      var t0$20 = undefined;
      var m$14 = undefined;
      var acc$3 = undefined;
      var temp$7 = undefined;
      var args$0 = undefined;
      var operator$1 = undefined;
      var flag$0 = undefined;
      var ph$9$0 = undefined;
      var name$0 = undefined;
      var t0$21 = undefined;
      var t1$12 = undefined;
      var t2$5 = undefined;
      var t3$4 = undefined;
      var t4$3 = undefined;
      var t5$2 = undefined;
      var expr$0 = undefined;
      var ph$8$0 = undefined;
      t0$20 = temp$6$0;
      expr$0 = t0$20;
      ph$8$0 = t0$20;
      t0$21 = ph$8$0;
      if (getChecker(Text$0)(t0$21) && (t1$12 = t0$21.length, t1$12 === 1 && (t2$5 = getProjector(RegExp("^\\\\(?:([^\\\\]*)\\\\)?(.*)$", ""))(t0$21[0]), t2$5[0] && (t3$4 = t2$5[1], t4$3 = t3$4.length, t4$3 === 3)))) {
        t3$4[0];
        t5$2 = t3$4[1];
        flag$0 = t5$2;
        ph$9$0 = t5$2;
        name$0 = t3$4[2];
        if (ph$9$0 === "maybe") {
          return ["put", name$0, true];
        } else {
          return ["put", name$0, false];
        }
      } else {
        if (getChecker(Text$0)(ph$8$0)) {
          specificity$0 = specificity$0 + 100;
          return ["eq", expr$0];
        } else {
          if (getChecker(Oper$0)(ph$8$0)) {
            return ["eq", expr$0];
          } else {
            t0$21 = ph$8$0;
            if (getChecker(Seq$0)(t0$21) && (t1$12 = t0$21.length, t1$12 >= 0 && (args$0 = Array.prototype.slice.call(t0$21, 0), ___hasprop(t0$21, "operator")))) {
              operator$1 = t0$21.operator;
              specificity$0 = specificity$0 + 1;
              if (!top$0) {
                top$0 = operator$1;
                top$0;
              }
              return ["seq"].concat((acc$3 = [], temp$7 = null, m$14 = null, (function() {
                $5: for (var _iterator = args$0[Symbol.iterator](),
                    _step; !(_step = _iterator.next()).done; ) {
                  m$14 = _step.value;
                  var arg$1 = undefined;
                  arg$1 = m$14;
                  temp$7 = helper$0(arg$1, opts$0);
                  acc$3.push(temp$7);
                }
              })(), acc$3));
            } else {
              return ___match_error(ph$8$0, "Seq? {*args} and {=> operator}");
            }
          }
        }
      }
    };
    rval$2 = helper$0(ast$0, {shed: true});
    return [top$0, rval$2, specificity$0];
  } else {
    t1$11 = t0$19.length;
    if (t1$11 === 3) {
      top$1 = t0$19[0];
      rval$3 = t0$19[1];
      specificity$1 = t0$19[2];
      return [top$1, rval$3, specificity$1];
    } else {
      return ___match_error(ph$7$0, "{top, rval, specificity}");
    }
  }
};
makeExtractor$0 = function makeExtractor(temp$8$0) {
  var t0$22 = undefined;
  var t1$13 = undefined;
  var t2$6 = undefined;
  var fn$0 = undefined;
  var helper$1 = undefined;
  var top$2 = undefined;
  var tree$0 = undefined;
  var specificity$2 = undefined;
  t0$22 = getProjector(parseSpec$0)(temp$8$0);
  if (t0$22[0] && (t1$13 = t0$22[1], t2$6 = t1$13.length, t2$6 === 3)) {
    top$2 = t1$13[0];
    tree$0 = t1$13[1];
    specificity$2 = t1$13[2];
  } else {
    ___match_error(temp$8$0);
  }
  helper$1 = function helper(temp$9$0, node$6) {
    var t0$23 = undefined;
    var t0$25 = undefined;
    var m$15$0 = undefined;
    var m$17 = undefined;
    var rval$4 = undefined;
    var other$0 = undefined;
    var args$1 = undefined;
    var t0$26 = undefined;
    var m$16$0 = undefined;
    var f$0 = undefined;
    var subtrees$0 = undefined;
    var ph$11$0 = undefined;
    var v$0 = undefined;
    var _maybe$0 = undefined;
    var $$1311$0 = undefined;
    var $$1312$0 = undefined;
    var t0$24 = undefined;
    var t1$14 = undefined;
    var x$10 = undefined;
    var ph$10$0 = undefined;
    t0$23 = temp$9$0;
    x$10 = t0$23;
    ph$10$0 = t0$23;
    t0$24 = ph$10$0;
    t1$14 = t0$24.length;
    if (t1$14 >= 2 && t1$14 <= 3 && t0$24[0] === "put") {
      v$0 = t0$24[1];
      if (2 >= t1$14) {
        _maybe$0 = true;
      } else {
        _maybe$0 = t0$24[2];
      }
      m$15$0 = node$6;
      if (getChecker(Text$0)(m$15$0) && (t0$25 = m$15$0.length, t0$25 === 1 && (m$15$0[0] === "" && !_maybe$0))) {
        return false;
      } else {
        return (function() {
          var $$1682 = {};
          $$1682[v$0] = node$6;
          return $$1682;
        })();
      }
    } else {
      if (t1$14 === 2 && t0$24[0] === "eq") {
        ph$11$0 = t0$24[1];
        if (equal(ph$11$0, node$6)) {
          return {};
        } else {
          return false;
        }
      } else {
        if (t1$14 >= 1 && t0$24[0] === "seq") {
          subtrees$0 = Array.prototype.slice.call(t0$24, 1);
          m$16$0 = node$6;
          if (getChecker(Seq$0)(m$16$0) && (t0$26 = m$16$0.length, t0$26 >= 0 && (args$1 = Array.prototype.slice.call(m$16$0, 0), equal(subtrees$0.length, args$1.length)))) {
            rval$4 = {};
            m$17 = null;
            $6: for (var _iterator = zip(subtrees$0, args$1)[Symbol.iterator](),
                _step; !(_step = _iterator.next()).done; ) {
              m$17 = _step.value;
              var vars$0 = undefined;
              var m$18$0 = undefined;
              var subtree$0 = undefined;
              var arg$2 = undefined;
              var t0$27 = undefined;
              var t1$15 = undefined;
              t0$27 = m$17;
              if (Array.isArray(t0$27) && (t1$15 = t0$27.length, t1$15 === 2)) {
                subtree$0 = t0$27[0];
                arg$2 = t0$27[1];
                m$18$0 = helper$1(subtree$0, arg$2);
                if (!m$18$0) {
                  return false;
                } else {
                  vars$0 = m$18$0;
                  __amp____colon__(rval$4, vars$0);
                }
              } else {
                ___match_error(m$17);
              }
            }
            return rval$4;
          } else {
            other$0 = m$16$0;
            return false;
          }
        } else {
          if (t1$14 === 2 && t0$24[0] === "fn") {
            f$0 = t0$24[1];
            return f$0(node$6);
          } else {
            return ___match_error(ph$10$0, "#fn{f}");
          }
        }
      }
    }
  };
  fn$0 = function fn(node$7) {
    return helper$1(tree$0, node$7);
  };
  return [top$2, specificity$2, fn$0];
};
ruleBank$0 = {};
extractor$0 = function extractor() {
  var m$20 = undefined;
  var acc$4 = undefined;
  var temp$10 = undefined;
  var extractors$0 = undefined;
  var f$1 = undefined;
  var $targ$31 = undefined;
  var rules$1 = undefined;
  var rules$0 = undefined;
  var t0$29 = undefined;
  var t1$16 = undefined;
  var t2$7 = undefined;
  var ph$13$0 = undefined;
  var t0$28 = undefined;
  var m$19$0 = undefined;
  m$19$0 = arguments;
  t0$28 = m$19$0.length;
  if (t0$28 >= 0) {
    ph$13$0 = Array.prototype.slice.call(m$19$0, 0);
    t0$29 = ph$13$0;
    t1$16 = t0$29.length;
    if (t1$16 === 1 && (t2$7 = t0$29[0], rules$0 = t2$7, !(typeof t2$7 === "string"))) {
      acc$4 = [];
      temp$10 = null;
      m$20 = null;
      $7: for (var _iterator = items(rules$0)[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$20 = _step.value;
        var t0$31 = undefined;
        var t1$18 = undefined;
        var $targ$32 = undefined;
        var ex$0 = undefined;
        var $targ$33 = undefined;
        var $$1496$0 = undefined;
        var name$1 = undefined;
        var rule$0 = undefined;
        var ph$14$0 = undefined;
        var t0$30 = undefined;
        var t1$17 = undefined;
        var t2$8 = undefined;
        t0$30 = m$20;
        if (Array.isArray(t0$30) && (t1$17 = t0$30.length, t1$17 === 2)) {
          name$1 = t0$30[0];
          t2$8 = t0$30[1];
          rule$0 = t2$8;
          ph$14$0 = t2$8;
          if (send(ruleBank$0, rule$0)) {
            temp$10 = [name$1, send(ruleBank$0, rule$0)];
          } else {
            $targ$32 = makeExtractor$0(rule$0);
            t0$31 = $targ$32;
            if (Array.isArray(t0$31) && (t1$18 = t0$31.length, t1$18 === 3)) {
              t0$31[0];
              t0$31[1];
              ex$0 = t0$31[2];
            } else {
              ___match_error($targ$32, "{_, _, ex}");
            }
            $targ$33 = ex$0;
            ruleBank$0[rule$0] = $targ$33;
            temp$10 = [name$1, ex$0];
          }
          acc$4.push(temp$10);
        } else {
          ___match_error(m$20);
        }
      }
      extractors$0 = acc$4;
      f$1 = function f(node$8) {
        var m$21 = undefined;
        m$21 = null;
        $8: for (var _iterator2 = extractors$0[Symbol.iterator](),
            _step2; !(_step2 = _iterator2.next()).done; ) {
          m$21 = _step2.value;
          var res$0 = undefined;
          var name$2 = undefined;
          var ex$1 = undefined;
          var t0$32 = undefined;
          var t1$19 = undefined;
          t0$32 = m$21;
          if (Array.isArray(t0$32) && (t1$19 = t0$32.length, t1$19 === 2)) {
            name$2 = t0$32[0];
            ex$1 = t0$32[1];
            if ((res$0 = ex$1(node$8), res$0)) {
              return __amp____colon__(res$0, {_which: name$2});
            }
          } else {
            ___match_error(m$21);
          }
        }
        return false;
      };
      $targ$31 = function(x$11) {
        var values$0 = undefined;
        var m$22$0 = undefined;
        m$22$0 = f$1(x$11);
        if (m$22$0 === false) {
          return [false, null];
        } else {
          values$0 = m$22$0;
          return [true, values$0];
        }
      };
      f$1[Symbol.projectNoExc] = $targ$31;
      return f$1;
    } else {
      rules$1 = ph$13$0;
      return extractor$0(object(enumerate(rules$1)));
    }
  } else {
    return ___match_error(m$19$0, "{*match}");
  }
};
$targ$34 = QAst$0;
exports.QAst = $targ$34;
$targ$35 = Text$0;
exports.Text = $targ$35;
$targ$36 = Oper$0;
exports.Oper = $targ$36;
$targ$37 = Seq$0;
exports.Seq = $targ$37;
$targ$38 = raw$0;
exports.raw = $targ$38;
$targ$39 = shed$0;
exports.shed = $targ$39;
$targ$40 = shedAll$0;
exports.shedAll = $targ$40;
$targ$41 = shedIndent$0;
exports.shedIndent = $targ$41;
$targ$42 = parseSpec$0;
exports.parseSpec = $targ$42;
$targ$43 = makeExtractor$0;
exports.makeExtractor = $targ$43;
$targ$44 = extractor$0;
exports.extractor = $targ$44;
$targ$45 = statements$0;
exports.statements = $targ$45;
$targ$46 = collapse$0;
exports.collapse = $targ$46;
$targ$47 = Into$0;
exports.Into = $targ$47;
$targ$48 = Deferred$0;
exports.Deferred = $targ$48;
void 0;
