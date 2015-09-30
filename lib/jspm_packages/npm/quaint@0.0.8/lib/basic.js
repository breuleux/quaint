/* */ 
"use strict";
require("earlgrey-runtime/5");
var $targ$1 = undefined;
var accum$0 = undefined;
var $targ$2 = undefined;
var accum$1 = undefined;
var $targ$43 = undefined;
var $targ$44 = undefined;
var $targ$45 = undefined;
var $targ$46 = undefined;
var opg$0 = undefined;
var __lt____lt____colon__$0 = undefined;
var Source$0 = undefined;
var tools$0 = undefined;
var may__minus__fail$0 = undefined;
var parseSpec$0 = undefined;
var makeExtractor$0 = undefined;
var extractor$0 = undefined;
var raw$0 = undefined;
var rawRelative$0 = undefined;
var dedent$0 = undefined;
var extract$0 = undefined;
var collapse$0 = undefined;
var statements$0 = undefined;
var shed$0 = undefined;
var shedAll$0 = undefined;
var shedIndent$0 = undefined;
var mergeable$0 = undefined;
var toJSON$0 = undefined;
var doc$0 = undefined;
var SeqDocument$0 = undefined;
var MapDocument$0 = undefined;
var util$0 = undefined;
var insertSorted$0 = undefined;
var ast$0 = undefined;
var QAst$0 = undefined;
var Text$0 = undefined;
var Oper$0 = undefined;
var Seq$0 = undefined;
var Into$0 = undefined;
var Deferred$0 = undefined;
var format$0 = undefined;
var Format$0 = undefined;
var include$0 = undefined;
var Include$0 = undefined;
var fs$0 = undefined;
var path$0 = undefined;
var requireWide$0 = undefined;
var headerRule$0 = undefined;
var BasicEvaluator$0 = undefined;
var file__minus__resolver$0 = undefined;
var conditional$0 = undefined;
var litPlugin$0 = undefined;
var basicPlugin$0 = undefined;
opg$0 = require("opg");
__lt____lt____colon__$0 = getProperty(opg$0, "transferLocation", "opg");
Source$0 = getProperty(opg$0, "Source", "opg");
tools$0 = require("./tools");
may__minus__fail$0 = getProperty(tools$0, "mayFail", "tools");
parseSpec$0 = getProperty(tools$0, "parseSpec", "tools");
makeExtractor$0 = getProperty(tools$0, "makeExtractor", "tools");
extractor$0 = getProperty(tools$0, "extractor", "tools");
raw$0 = getProperty(tools$0, "raw", "tools");
rawRelative$0 = getProperty(tools$0, "rawRelative", "tools");
dedent$0 = getProperty(tools$0, "dedent", "tools");
extract$0 = getProperty(tools$0, "extract", "tools");
collapse$0 = getProperty(tools$0, "collapse", "tools");
statements$0 = getProperty(tools$0, "statements", "tools");
shed$0 = getProperty(tools$0, "shed", "tools");
shedAll$0 = getProperty(tools$0, "shedAll", "tools");
shedIndent$0 = getProperty(tools$0, "shedIndent", "tools");
mergeable$0 = getProperty(tools$0, "mergeable", "tools");
toJSON$0 = getProperty(tools$0, "toJSON", "tools");
doc$0 = require("./doc");
SeqDocument$0 = getProperty(doc$0, "SeqDocument", "doc");
MapDocument$0 = getProperty(doc$0, "MapDocument", "doc");
util$0 = require("./util");
insertSorted$0 = getProperty(util$0, "insertSorted", "util");
ast$0 = require("./ast");
QAst$0 = getProperty(ast$0, "QAst", "ast");
Text$0 = getProperty(ast$0, "Text", "ast");
Oper$0 = getProperty(ast$0, "Oper", "ast");
Seq$0 = getProperty(ast$0, "Seq", "ast");
Into$0 = getProperty(ast$0, "Into", "ast");
Deferred$0 = getProperty(ast$0, "Deferred", "ast");
format$0 = require("./format");
Format$0 = getProperty(format$0, "Format", "format");
include$0 = require("./include");
Include$0 = getProperty(include$0, "Include", "include");
fs$0 = require("fs");
path$0 = require("path");
requireWide$0 = function requireWide(f$0) {
  return function(engine$0, data$0) {
    if (data$0._wide) {
      return f$0.call(this, engine$0, data$0);
    } else {
      return tools$0.next;
    }
  };
};
headerRule$0 = function headerRule(level$0) {
  return function(engine$1, temp$0$0) {
    var t0$0 = undefined;
    var gx$0 = undefined;
    var lbl$0 = undefined;
    var rval$0 = undefined;
    var x$0 = undefined;
    t0$0 = temp$0$0;
    if (___hasprop(t0$0, "x")) {
      x$0 = t0$0.x;
    } else {
      ___match_error(temp$0$0);
    }
    gx$0 = engine$1.gen(x$0);
    lbl$0 = raw$0(x$0).replace(RegExp("\\W", "g"), "").toLowerCase();
    rval$0 = ENode([String(ENode([], {}, ["h", level$0]).toString())], {id: lbl$0}, [gx$0, Into$0("sections", [level$0, gx$0, lbl$0])]);
    return __amp____colon__(rval$0, {block: true});
  };
};
BasicEvaluator$0 = function BasicEvaluator() {
  var t0$1 = undefined;
  var m$0$0 = undefined;
  var __at___$0 = undefined;
  if (!getChecker(BasicEvaluator$0)(this)) {
    __at___$0 = Object.create(BasicEvaluator$0.prototype);
  } else {
    __at___$0 = this;
  }
  m$0$0 = arguments;
  t0$1 = m$0$0.length;
  if (t0$1 >= 0 && t0$1 <= 1) {
    __at___$0.store = 0 >= t0$1 ? Object.create(null) : m$0$0[0];
    undefined;
  } else {
    ___match_error(m$0$0, "{@store = Object.create{null}}");
  }
  return __at___$0;
};
BasicEvaluator$0.prototype.eval = function() {
  var rval$1 = undefined;
  var s$0 = undefined;
  var key$0 = undefined;
  var env$0 = undefined;
  var loc$0 = undefined;
  var t0$2 = undefined;
  var m$1$0 = undefined;
  var __at___$1 = undefined;
  var self$0 = undefined;
  __at___$1 = this;
  self$0 = this;
  m$1$0 = arguments;
  t0$2 = m$1$0.length;
  if (t0$2 >= 1 && t0$2 <= 3) {
    key$0 = m$1$0[0];
    if (1 >= t0$2) {
      env$0 = {};
    } else {
      env$0 = m$1$0[1];
    }
    if (2 >= t0$2) {
      loc$0 = null;
    } else {
      loc$0 = m$1$0[2];
    }
    s$0 = __amp____colon__(__at___$1.store, env$0);
    if (!Object.hasProperty.call(s$0, key$0)) {
      rval$1 = false;
      try {
        rval$1 = JSON.parse(key$0);
        rval$1;
      } catch (excv$0) {
        throw ErrorFactory(["not_in_environment"]).create(key$0);
        rval$1;
      }
      return rval$1;
    } else {
      return send(s$0, key$0);
    }
  } else {
    return ___match_error(m$1$0, "{key, env = {=}, loc = null}");
  }
};
BasicEvaluator$0.prototype.setenv = function setenv(key$1, value$0) {
  var $targ$0 = undefined;
  var __at___$2 = undefined;
  var self$1 = undefined;
  __at___$2 = this;
  self$1 = this;
  $targ$0 = value$0;
  __at___$2.store[key$1] = $targ$0;
  return void 0;
};
BasicEvaluator$0.prototype.fork = function fork() {
  var __at___$3 = undefined;
  var self$2 = undefined;
  __at___$3 = this;
  self$2 = this;
  return BasicEvaluator$0(Object.create(__at___$3.store));
};
__amp____colon__(BasicEvaluator$0, __amp____colon__(($targ$1 = "BasicEvaluator", accum$0 = {}, accum$0["::name"] = $targ$1, accum$0), ($targ$2 = true, accum$1 = {}, accum$1["::egclass"] = $targ$2, accum$1)));
file__minus__resolver$0 = function fileResolver() {
  var options$0 = undefined;
  var t0$3 = undefined;
  var m$2$0 = undefined;
  m$2$0 = arguments;
  t0$3 = m$2$0.length;
  if (t0$3 >= 0 && t0$3 <= 1) {
    if (0 >= t0$3) {
      options$0 = {};
    } else {
      options$0 = m$2$0[0];
    }
    return function(name$0) {
      var m$3$0 = undefined;
      var m$4$0 = undefined;
      var with__minus__extension$0 = undefined;
      var filename$0 = undefined;
      var contents$0 = undefined;
      m$3$0 = name$0;
      if (getChecker(RegExp("\\.[a-zA-Z0-9]+$", ""))(m$3$0)) {
        with__minus__extension$0 = name$0;
      } else {
        with__minus__extension$0 = ENode([], {}, [name$0, ".q"]).toString();
      }
      m$4$0 = with__minus__extension$0;
      if (getChecker(RegExp("^/", ""))(m$4$0)) {
        filename$0 = with__minus__extension$0;
      } else {
        filename$0 = path$0.join(options$0.directory || "", with__minus__extension$0);
      }
      contents$0 = (options$0.readFile || fs$0.readFileSync)(filename$0, "utf8");
      return {
        file: filename$0,
        contents: contents$0
      };
    };
  } else {
    return ___match_error(m$2$0, "{options = {=}}");
  }
};
conditional$0 = function conditional() {
  var engine$2 = undefined;
  var cond$0 = undefined;
  var value$1 = undefined;
  var falsey$0 = undefined;
  var t0$4 = undefined;
  var m$5$0 = undefined;
  m$5$0 = arguments;
  t0$4 = m$5$0.length;
  if (t0$4 >= 3 && t0$4 <= 4) {
    engine$2 = m$5$0[0];
    cond$0 = m$5$0[1];
    value$1 = m$5$0[2];
    if (3 >= t0$4) {
      falsey$0 = "";
    } else {
      falsey$0 = m$5$0[3];
    }
    return engine$2.redefer(engine$2.gen(cond$0), function(result$0) {
      if (result$0 && !getChecker(Error)(result$0) && !result$0.error) {
        return engine$2.gen(value$1);
      } else {
        return falsey$0 && engine$2.gen(falsey$0);
      }
    });
  } else {
    return ___match_error(m$5$0, "{engine, cond, value, falsey = \"\"}");
  }
};
litPlugin$0 = function litPlugin(__at___$4) {
  var $targ$3 = undefined;
  var accum$2 = undefined;
  __at___$4.clearRules();
  return __at___$4.registerRules(($targ$3 = function(engine$3, temp$1$0) {
    var t0$5 = undefined;
    var x$1 = undefined;
    t0$5 = temp$1$0;
    if (___hasprop(t0$5, "x")) {
      x$1 = t0$5.x;
    } else {
      ___match_error(temp$1$0);
    }
    return tools$0.code(engine$3, x$1);
  }, accum$2 = {}, accum$2["{\\x}"] = $targ$3, accum$2));
};
basicPlugin$0 = function basicPlugin(__at___$5) {
  var accum$3 = undefined;
  var $targ$5 = undefined;
  var accum$4 = undefined;
  var accum$5 = undefined;
  var accum$7 = undefined;
  var accum$8 = undefined;
  var accum$9 = undefined;
  var accum$10 = undefined;
  var accum$11 = undefined;
  var accum$12 = undefined;
  var accum$13 = undefined;
  var accum$14 = undefined;
  var accum$15 = undefined;
  var accum$16 = undefined;
  var accum$17 = undefined;
  var accum$18 = undefined;
  var accum$19 = undefined;
  var accum$20 = undefined;
  var $targ$12 = undefined;
  var accum$21 = undefined;
  var $targ$13 = undefined;
  var accum$22 = undefined;
  var $targ$14 = undefined;
  var accum$23 = undefined;
  var $targ$15 = undefined;
  var accum$24 = undefined;
  var $targ$16 = undefined;
  var accum$25 = undefined;
  var $targ$17 = undefined;
  var accum$26 = undefined;
  var $targ$18 = undefined;
  var accum$27 = undefined;
  var $targ$19 = undefined;
  var accum$28 = undefined;
  var $targ$20 = undefined;
  var accum$29 = undefined;
  var $targ$21 = undefined;
  var accum$30 = undefined;
  var $targ$22 = undefined;
  var accum$31 = undefined;
  var t0$46 = undefined;
  var $targ$23 = undefined;
  var accum$32 = undefined;
  var t0$47 = undefined;
  var $targ$24 = undefined;
  var accum$33 = undefined;
  var t0$48 = undefined;
  var $targ$25 = undefined;
  var accum$34 = undefined;
  var t0$49 = undefined;
  var $targ$26 = undefined;
  var accum$35 = undefined;
  var t0$50 = undefined;
  var $targ$27 = undefined;
  var accum$36 = undefined;
  var t0$51 = undefined;
  var $targ$28 = undefined;
  var accum$37 = undefined;
  var t0$52 = undefined;
  var $targ$29 = undefined;
  var accum$38 = undefined;
  var t0$54 = undefined;
  var $targ$30 = undefined;
  var accum$39 = undefined;
  var t0$56 = undefined;
  var $targ$31 = undefined;
  var accum$40 = undefined;
  var t0$58 = undefined;
  var $targ$32 = undefined;
  var accum$41 = undefined;
  var t0$60 = undefined;
  var $targ$33 = undefined;
  var accum$42 = undefined;
  var t0$62 = undefined;
  var $targ$34 = undefined;
  var accum$43 = undefined;
  var $targ$35 = undefined;
  var accum$44 = undefined;
  var $targ$36 = undefined;
  var accum$45 = undefined;
  var $targ$37 = undefined;
  var accum$46 = undefined;
  var $targ$38 = undefined;
  var accum$47 = undefined;
  var filter$0 = undefined;
  var spec$1 = undefined;
  var fn$1 = undefined;
  var $targ$4 = undefined;
  var fmt$0 = undefined;
  var incl$0 = undefined;
  __at___$5.registerDocuments({
    meta: MapDocument$0(),
    sections: SeqDocument$0()
  });
  __at___$5.registerResolvers(__amp____colon__({"default": send(file__minus__resolver$0, {directory: ""})}, (accum$3 = {}, accum$3.plugin = function plugin(name$1) {
    var rval$2 = undefined;
    rval$2 = false;
    try {
      rval$2 = require(ENode([], {}, ["quaint-", name$1]).toString());
      rval$2;
    } catch (excv$1) {
      var rval$3 = undefined;
      var e1$0 = undefined;
      e1$0 = excv$1;
      rval$3 = false;
      try {
        rval$3 = require(name$1);
        rval$3;
      } catch (excv$2) {
        var e2$0 = undefined;
        e2$0 = excv$2;
        throw e1$0;
        rval$3;
      }
      rval$2 = rval$3;
      rval$2;
    }
    return rval$2;
  }, accum$3)));
  $targ$4 = BasicEvaluator$0();
  __at___$5.evaluator = $targ$4;
  __at___$5.registerMacros(__amp____colon__(($targ$5 = function(engine$4, temp$2$0, body$0) {
    var t0$6 = undefined;
    var cond$1 = undefined;
    t0$6 = getProjector(shed$0)(temp$2$0);
    if (t0$6[0]) {
      cond$1 = t0$6[1];
    } else {
      ___match_error(temp$2$0);
    }
    return conditional$0(engine$4, cond$1, body$0);
  }, accum$4 = {}, accum$4.when = $targ$5, accum$4), __amp____colon__((accum$5 = {}, accum$5.store = function store(engine$5, temp$3$0, body$1) {
    var t0$7 = undefined;
    var t1$0 = undefined;
    var accum$6 = undefined;
    var name$2 = undefined;
    t0$7 = getProjector(shed$0)(temp$3$0);
    if (t0$7[0] && (t1$0 = getProjector(raw$0)(t0$7[1]), t1$0[0])) {
      name$2 = t1$0[1];
    } else {
      ___match_error(temp$3$0);
    }
    if (equal(raw$0(body$1), "dump!")) {
      return engine$5.macros.dump(engine$5, name$2);
    } else {
      return send(Into$0, __amp____colon__([name$2, body$1], __amp____colon__((accum$6 = {}, accum$6.create = function create() {
        return SeqDocument$0();
      }, accum$6), {"::objinsert": 2})));
    }
  }, accum$5), __amp____colon__((accum$7 = {}, accum$7.dump = function dump(engine$6, temp$4$0) {
    var t0$8 = undefined;
    var t1$1 = undefined;
    var name$3 = undefined;
    t0$8 = getProjector(shed$0)(temp$4$0);
    if (t0$8[0] && (t1$1 = getProjector(raw$0)(t0$8[1]), t1$1[0])) {
      name$3 = t1$1[1];
    } else {
      ___match_error(temp$4$0);
    }
    return Deferred$0(function(path$1, docs$0) {
      var m$7 = undefined;
      var acc$0 = undefined;
      var temp$5 = undefined;
      var doc$1 = undefined;
      var m$6$0 = undefined;
      m$6$0 = send(docs$0, name$3);
      if (m$6$0 === void 0) {
        return "";
      } else {
        doc$1 = m$6$0;
        acc$0 = [];
        temp$5 = null;
        m$7 = null;
        $0: for (var _iterator = doc$1.entries()[Symbol.iterator](),
            _step; !(_step = _iterator.next()).done; ) {
          m$7 = _step.value;
          var x$2 = undefined;
          x$2 = m$7;
          temp$5 = engine$6.gen(x$2);
          acc$0.push(temp$5);
        }
        return acc$0;
      }
    });
  }, accum$7), __amp____colon__((accum$8 = {}, accum$8.css = function css(engine$7, temp$6$0) {
    var t0$9 = undefined;
    var body$2 = undefined;
    t0$9 = getProjector(shed$0)(temp$6$0);
    if (t0$9[0]) {
      body$2 = t0$9[1];
    } else {
      ___match_error(temp$6$0);
    }
    return ENode(["style", "raw"], {}, raw$0(body$2));
  }, accum$8), __amp____colon__((accum$9 = {}, accum$9.html = function html(engine$8, temp$7$0) {
    var t0$10 = undefined;
    var body$3 = undefined;
    t0$10 = getProjector(shed$0)(temp$7$0);
    if (t0$10[0]) {
      body$3 = t0$10[1];
    } else {
      ___match_error(temp$7$0);
    }
    return ENode(["raw"], {}, raw$0(body$3));
  }, accum$9), __amp____colon__((accum$10 = {}, accum$10.js = function js(engine$9, temp$8$0) {
    var t0$11 = undefined;
    var body$4 = undefined;
    t0$11 = getProjector(shed$0)(temp$8$0);
    if (t0$11[0]) {
      body$4 = t0$11[1];
    } else {
      ___match_error(temp$8$0);
    }
    return ENode(["script", "raw"], {}, raw$0(body$4));
  }, accum$10), __amp____colon__((accum$11 = {}, accum$11.toc = function toc(engine$10, body$5) {
    return Deferred$0(function(path$2, docs$1) {
      var bridge$$2388$0 = undefined;
      var m$8$0 = undefined;
      var m$9 = undefined;
      var rval$4 = undefined;
      var stack$0 = undefined;
      var cnode$0 = undefined;
      var clvl$0 = undefined;
      var entries$0 = undefined;
      rval$4 = ENode(["ul", ".toc"], {}, []);
      stack$0 = [];
      cnode$0 = rval$4;
      clvl$0 = -1;
      m$8$0 = raw$0(body$5);
      bridge$$2388$0 = m$8$0;
      if (bridge$$2388$0 === "" || bridge$$2388$0 === "all") {
        entries$0 = docs$1.sections.entries(path$2);
      } else {
        if (m$8$0 === "below") {
          entries$0 = docs$1.sections.entriesAfter(path$2);
        } else {
          entries$0 = ___match_error(m$8$0, ".below");
        }
      }
      m$9 = null;
      $1: for (var _iterator = entries$0[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$9 = _step.value;
        var t0$14 = undefined;
        var t1$3 = undefined;
        var newnode$0 = undefined;
        var $targ$6 = undefined;
        var level$3 = undefined;
        var level$2 = undefined;
        var level$1 = undefined;
        var link$0 = undefined;
        var $$2371$0 = undefined;
        var bridge$$2368$0 = undefined;
        var t0$13 = undefined;
        var ph$0$0 = undefined;
        var title$0 = undefined;
        var lbl$1 = undefined;
        var t0$12 = undefined;
        var t1$2 = undefined;
        t0$12 = m$9;
        if (Array.isArray(t0$12) && (t1$2 = t0$12.length, t1$2 === 3)) {
          ph$0$0 = t0$12[0];
          title$0 = t0$12[1];
          lbl$1 = t0$12[2];
          link$0 = ENode(["a"], {href: String(ENode([], {}, ["#", lbl$1]).toString())}, title$0);
          bridge$$2368$0 = ph$0$0;
          if (equal(bridge$$2368$0, clvl$0) && (level$1 = bridge$$2368$0, true) || (level$1 = bridge$$2368$0, equal(clvl$0, -1))) {
            clvl$0 = level$1;
            cnode$0.children.push(ENode(["li"], {}, link$0));
          } else {
            t0$13 = ph$0$0;
            if (t0$13 > clvl$0) {
              level$2 = t0$13;
              newnode$0 = ENode(["ul"], {}, ENode(["li"], {}, link$0));
              cnode$0.children.push(newnode$0);
              stack$0.push([clvl$0, cnode$0]);
              $targ$6 = [level$2, newnode$0];
              t0$14 = $targ$6;
              if (Array.isArray(t0$14) && (t1$3 = t0$14.length, t1$3 === 2)) {
                clvl$0 = t0$14[0];
                cnode$0 = t0$14[1];
              } else {
                ___match_error($targ$6, "{clvl, cnode}");
              }
              [clvl$0, cnode$0];
            } else {
              if (t0$13 < clvl$0) {
                level$3 = t0$13;
                $2: while (level$3 < clvl$0) {
                  var t0$15 = undefined;
                  var t1$4 = undefined;
                  var $targ$7 = undefined;
                  $targ$7 = stack$0.pop();
                  t0$15 = $targ$7;
                  if (Array.isArray(t0$15) && (t1$4 = t0$15.length, t1$4 === 2)) {
                    clvl$0 = t0$15[0];
                    cnode$0 = t0$15[1];
                  } else {
                    ___match_error($targ$7, "{clvl, cnode}");
                  }
                  [clvl$0, cnode$0];
                }
                cnode$0.children.push(ENode(["li"], {}, link$0));
              } else {
                ___match_error(ph$0$0);
              }
            }
          }
        } else {
          ___match_error(m$9);
        }
      }
      return rval$4;
    });
  }, accum$11), __amp____colon__((accum$12 = {}, accum$12.meta = function meta(engine$11, body$6) {
    var m$11 = undefined;
    var acc$2 = undefined;
    var temp$10 = undefined;
    var ex$0 = undefined;
    var r$0 = undefined;
    r$0 = raw$0(body$6);
    if (equal(r$0, "dump!")) {
      return Deferred$0(function(path$3, docs$2) {
        var m$10 = undefined;
        var acc$1 = undefined;
        var temp$9 = undefined;
        return ENode(["table"], {}, (acc$1 = [], temp$9 = null, m$10 = null, (function() {
          $3: for (var _iterator = docs$2.meta.entries()[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            m$10 = _step.value;
            var k$0 = undefined;
            var v$0 = undefined;
            var t0$16 = undefined;
            var t1$5 = undefined;
            t0$16 = m$10;
            if (Array.isArray(t0$16) && (t1$5 = t0$16.length, t1$5 === 2)) {
              k$0 = t0$16[0];
              v$0 = t0$16[1];
              temp$9 = ENode(["tr"], {}, [ENode(["td"], {}, k$0), ENode(["td"], {}, engine$11.gen(v$0))]);
              acc$1.push(temp$9);
            } else {
              ___match_error(m$10);
            }
          }
        })(), acc$1));
      });
    } else {
      if (getChecker(RegExp("[=:]", ""))(raw$0(body$6))) {
        ex$0 = extractor$0("\\key = \\value", "\\key => \\value", "\\key: \\jsonvalue");
        acc$2 = [];
        temp$10 = null;
        m$11 = null;
        $4: for (var _iterator = statements$0(body$6)[Symbol.iterator](),
            _step; !(_step = _iterator.next()).done; ) {
          m$11 = _step.value;
          var key$3 = undefined;
          var jsonvalue$0 = undefined;
          var key$2 = undefined;
          var value$2 = undefined;
          var $$2590$0 = undefined;
          var m$12$0 = undefined;
          var stmt$0 = undefined;
          stmt$0 = m$11;
          m$12$0 = ex$0(stmt$0);
          if (($$2590$0 = ___hasprop(m$12$0, "key")) && (key$2 = m$12$0.key, ___hasprop(m$12$0, "value"))) {
            value$2 = m$12$0.value;
            temp$10 = Into$0("meta", [raw$0(key$2), value$2]);
          } else {
            if ($$2590$0 && (key$3 = m$12$0.key, ___hasprop(m$12$0, "jsonvalue"))) {
              jsonvalue$0 = m$12$0.jsonvalue;
              temp$10 = Into$0("meta", [raw$0(key$3), toJSON$0(jsonvalue$0)]);
            } else {
              throw ErrorFactory(["meta", "syntax"]).create(ENode([], {}, ["Invalid meta statement: \"", stmt$0.raw(), "\""]).toString());
            }
          }
          acc$2.push(temp$10);
        }
        return acc$2;
      } else {
        return Deferred$0(function(path$4, docs$3) {
          var node$0 = undefined;
          var x$3 = undefined;
          var bridge$$2614$0 = undefined;
          var m$13$0 = undefined;
          m$13$0 = docs$3.meta.get(r$0);
          if (m$13$0 === void 0) {
            throw ErrorFactory(["meta", "missing"]).create(ENode([], {}, ["No meta information: ", r$0]).toString());
          } else {
            bridge$$2614$0 = m$13$0;
            if (getChecker(ENode)(bridge$$2614$0) && (x$3 = bridge$$2614$0, true) || typeof bridge$$2614$0 === "string" && (x$3 = bridge$$2614$0, true)) {
              return x$3;
            } else {
              node$0 = m$13$0;
              return engine$11.gen(node$0);
            }
          }
        });
      }
    }
  }, accum$12), __amp____colon__((accum$13 = {}, accum$13.template = function template(temp$11$0, tpl$0) {
    var t0$17 = undefined;
    var $targ$8 = undefined;
    var t$0 = undefined;
    var $$2644$0 = undefined;
    var t0$18 = undefined;
    var t1$6 = undefined;
    var engine$12 = undefined;
    var ph$1$0 = undefined;
    t0$17 = temp$11$0;
    engine$12 = t0$17;
    ph$1$0 = t0$17;
    t0$18 = ph$1$0;
    if (___hasprop(t0$18, "top") && !t0$18.top) {
      throw ErrorFactory(["template", "syntax"]).create(ENode([], {}, ["Template must be specified at top level."]).toString());
    } else {
      if (___hasprop(t0$18, "template") && (t1$6 = t0$18.template, t1$6 ? true : false)) {
        t$0 = t1$6;
        throw ErrorFactory(["template", "duplicate"]).create(ENode([], {}, ["Template ", t$0, " was already specified for this file."]).toString());
      } else {
        $targ$8 = tpl$0.raw();
        engine$12.template = $targ$8;
        return void 0;
      }
    }
  }, accum$13), __amp____colon__((accum$14 = {}, accum$14.scope = function scope(engine$13, body$7) {
    return engine$13.fork().gen(body$7);
  }, accum$14), __amp____colon__((accum$15 = {}, accum$15.plugins = function plugins(engine$14, temp$12$0) {
    var t0$19 = undefined;
    var t1$7 = undefined;
    var m$14 = undefined;
    var r$1 = undefined;
    var body$8 = undefined;
    t0$19 = getProjector(shedAll$0)(temp$12$0);
    if (t0$19[0] && (t1$7 = getProjector(raw$0)(t0$19[1]), t1$7[0])) {
      body$8 = t1$7[1];
    } else {
      ___match_error(temp$12$0);
    }
    r$1 = engine$14.resolvers.plugin;
    if (!r$1) {
      throw ErrorFactory(["plugin"]).create(ENode([], {}, ["Cannot resolve plugins."]).toString());
    }
    m$14 = null;
    $5: for (var _iterator = body$8.split(RegExp("[ \\n,]+", ""))[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$14 = _step.value;
      var p$0 = undefined;
      var name$4 = undefined;
      name$4 = m$14;
      p$0 = r$1(name$4);
      p$0(engine$14);
    }
    return "";
  }, accum$15), (accum$16 = {}, accum$16.plugin = function plugin(engine$15, temp$13$0, values$0) {
    var t0$20 = undefined;
    var m$15 = undefined;
    var acc$3 = undefined;
    var temp$14 = undefined;
    var r$2 = undefined;
    var p$1 = undefined;
    var ex$1 = undefined;
    var options$1 = undefined;
    var name$5 = undefined;
    t0$20 = getProjector(raw$0)(temp$13$0);
    if (t0$20[0]) {
      name$5 = t0$20[1];
    } else {
      ___match_error(temp$13$0);
    }
    r$2 = engine$15.resolvers.plugin;
    if (!r$2) {
      throw ErrorFactory(["plugin"]).create(ENode([], {}, ["Cannot resolve plugins."]).toString());
    }
    p$1 = r$2(name$5);
    ex$1 = extractor$0("\\k = \\v", "\\k: \\v", "\\k => \\v");
    options$1 = object((acc$3 = [], temp$14 = null, m$15 = null, (function() {
      $6: for (var _iterator = values$0.statements()[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$15 = _step.value;
        var k$1 = undefined;
        var v$1 = undefined;
        var t0$21 = undefined;
        var t1$8 = undefined;
        var t2$0 = undefined;
        t0$21 = getProjector(ex$1)(m$15);
        if (t0$21[0] && (t1$8 = t0$21[1], ___hasprop(t1$8, "k") && (t2$0 = getProjector(raw$0)(t1$8.k), t2$0[0] && (k$1 = t2$0[1], ___hasprop(t1$8, "v"))))) {
          v$1 = t1$8.v;
          temp$14 = [k$1, toJSON$0(v$1)];
          acc$3.push(temp$14);
        } else {
          throw ErrorFactory(["plugin"]).create(ENode([], {}, ["Invalid option for plugin \"", name$5, "\""]).toString());
          acc$3.push(temp$14);
        }
      }
    })(), acc$3));
    p$1(engine$15, options$1);
    return "";
  }, accum$16)))))))))))));
  fmt$0 = Format$0();
  __at___$5.registerMacros((accum$17 = {}, accum$17.format = function format() {
    var t0$23 = undefined;
    var t0$24 = undefined;
    var engine$16 = undefined;
    var descr$0 = undefined;
    var body$9 = undefined;
    var t0$22 = undefined;
    var bridge$$2814$0 = undefined;
    var m$16$0 = undefined;
    m$16$0 = arguments;
    t0$22 = m$16$0.length;
    if (t0$22 >= 1 && (engine$16 = m$16$0[0], bridge$$2814$0 = Array.prototype.slice.call(m$16$0, 1), Array.isArray(bridge$$2814$0) && (t0$23 = bridge$$2814$0.length, t0$23 === 2 && (descr$0 = bridge$$2814$0[0], body$9 = bridge$$2814$0[1], true)) || Array.isArray(bridge$$2814$0) && (t0$24 = bridge$$2814$0.length, t0$24 === 1 && (descr$0 = bridge$$2814$0[0], body$9 = null, true)))) {
      return may__minus__fail$0(function() {
        return fmt$0.format(engine$16, descr$0, body$9);
      });
    } else {
      return ___match_error(m$16$0, "{engine, *[{descr, body} or {descr} and body is null]}");
    }
  }, accum$17));
  incl$0 = Include$0();
  __at___$5.registerMacros((accum$18 = {}, accum$18.include = function include() {
    var t0$26 = undefined;
    var t0$27 = undefined;
    var engine$17 = undefined;
    var ext$0 = undefined;
    var body$10 = undefined;
    var t0$25 = undefined;
    var bridge$$2866$0 = undefined;
    var m$17$0 = undefined;
    m$17$0 = arguments;
    t0$25 = m$17$0.length;
    if (t0$25 >= 1 && (engine$17 = m$17$0[0], bridge$$2866$0 = Array.prototype.slice.call(m$17$0, 1), Array.isArray(bridge$$2866$0) && (t0$26 = bridge$$2866$0.length, t0$26 === 2 && (ext$0 = bridge$$2866$0[0], body$10 = bridge$$2866$0[1], true)) || Array.isArray(bridge$$2866$0) && (t0$27 = bridge$$2866$0.length, t0$27 === 1 && (body$10 = bridge$$2866$0[0], ext$0 = null, true)))) {
      return may__minus__fail$0(function() {
        var tmp$0 = undefined;
        return incl$0.include(engine$17, (tmp$0 = ext$0, tmp$0 === undefined || tmp$0 === null ? tmp$0 : tmp$0.raw()), body$10);
      });
    } else {
      return ___match_error(m$17$0, "{engine, *[{ext, body} or {body} and ext is null]}");
    }
  }, accum$18));
  __at___$5.registerMethods(__amp____colon__((accum$19 = {}, accum$19.lit = function lit() {
    var t0$28 = undefined;
    var p$2 = undefined;
    var $targ$10 = undefined;
    var $targ$9 = undefined;
    var __at___$6 = undefined;
    var self$3 = undefined;
    $targ$9 = this;
    t0$28 = $targ$9;
    __at___$6 = t0$28;
    self$3 = t0$28;
    [__at___$6, self$3];
    p$2 = __at___$6.forkPlug(litPlugin$0);
    $targ$10 = __at___$6.evaluator;
    p$2.evaluator = $targ$10;
    return p$2;
  }, accum$19), (accum$20 = {}, accum$20.litgen = function litgen(x$4) {
    var t0$29 = undefined;
    var $targ$11 = undefined;
    var __at___$7 = undefined;
    var self$4 = undefined;
    $targ$11 = this;
    t0$29 = $targ$11;
    __at___$7 = t0$29;
    self$4 = t0$29;
    [__at___$7, self$4];
    return __at___$7.lit().gen(x$4);
  }, accum$20)));
  return __at___$5.registerRules(__amp____colon__(($targ$12 = function(engine$18, temp$15$0) {
    var t0$30 = undefined;
    var x$5 = undefined;
    t0$30 = temp$15$0;
    if (___hasprop(t0$30, "x")) {
      x$5 = t0$30.x;
    } else {
      ___match_error(temp$15$0);
    }
    return engine$18.gen(x$5);
  }, accum$21 = {}, accum$21["\\maybe\\x ;; \\ignore"] = $targ$12, accum$21), __amp____colon__(($targ$13 = function(engine$19, temp$16$0) {
    var t0$31 = undefined;
    var t1$9 = undefined;
    var t2$1 = undefined;
    var beg$0 = undefined;
    var middle$0 = undefined;
    var end$0 = undefined;
    var res$0 = undefined;
    var o$0 = undefined;
    var x$6 = undefined;
    var c$0 = undefined;
    t0$31 = temp$16$0;
    if (___hasprop(t0$31, "_node") && (t1$9 = t0$31._node, getChecker(Seq$0)(t1$9) && (t2$1 = t1$9.length, t2$1 === 5))) {
      t1$9[0];
      o$0 = t1$9[1];
      x$6 = t1$9[2];
      c$0 = t1$9[3];
      t1$9[4];
    } else {
      ___match_error(temp$16$0);
    }
    beg$0 = raw$0(o$0).replace("[", "");
    middle$0 = engine$19.gen(x$6);
    end$0 = raw$0(c$0).replace("]", "");
    if (beg$0 || end$0 || middle$0.block) {
      res$0 = ENode([], {}, [beg$0, middle$0, end$0]);
    } else {
      res$0 = middle$0;
    }
    if (middle$0.block) {
      __amp____colon__(res$0, {block: middle$0.block});
    }
    return res$0;
  }, accum$22 = {}, accum$22["[\\maybe\\x]"] = $targ$13, accum$22), __amp____colon__(($targ$14 = function(engine$20, temp$17$0) {
    var t0$32 = undefined;
    var x$7 = undefined;
    t0$32 = temp$17$0;
    if (___hasprop(t0$32, "x")) {
      x$7 = t0$32.x;
    } else {
      ___match_error(temp$17$0);
    }
    return tools$0.code(engine$20, x$7);
  }, accum$23 = {}, accum$23["{\\x}"] = $targ$14, accum$23), __amp____colon__(($targ$15 = function(engine$21, temp$18$0) {
    var t0$33 = undefined;
    var fna$0 = undefined;
    var body$11 = undefined;
    t0$33 = temp$18$0;
    if (___hasprop(t0$33, "fna") && (fna$0 = t0$33.fna, ___hasprop(t0$33, "body"))) {
      body$11 = t0$33.body;
    } else {
      ___match_error(temp$18$0);
    }
    return may__minus__fail$0(function() {
      var args$1 = undefined;
      var t0$34 = undefined;
      var t1$10 = undefined;
      var t2$2 = undefined;
      var m$18$0 = undefined;
      var t0$35 = undefined;
      var t1$11 = undefined;
      var f$1 = undefined;
      var $targ$39 = undefined;
      var fn$0 = undefined;
      var args$0 = undefined;
      var rf$0 = undefined;
      m$18$0 = fna$0;
      t0$34 = getProjector(extract$0)(m$18$0);
      if (t0$34[0] && (t1$10 = t0$34[1], getChecker(Seq$0)(t1$10) && (t2$2 = t1$10.length, t2$2 >= 1 && t1$10[0] === "J"))) {
        args$1 = Array.prototype.slice.call(t1$10, 1);
        $targ$39 = args$1;
      } else {
        $targ$39 = [fna$0];
      }
      t0$35 = $targ$39;
      if (Array.isArray(t0$35) && (t1$11 = t0$35.length, t1$11 >= 1)) {
        fn$0 = t0$35[0];
        args$0 = Array.prototype.slice.call(t0$35, 1);
      } else {
        ___match_error($targ$39, "{fn, *args}");
      }
      [fn$0, args$0];
      rf$0 = raw$0(fn$0);
      if ((f$1 = send(send(engine$21, "macros", true), rf$0), f$1)) {
        return send(f$1, [engine$21].concat(args$0).concat([body$11])) || "";
      } else {
        return Deferred$0(function(path$5, documents$0) {
          return may__minus__fail$0(function() {
            var f2$0 = undefined;
            f2$0 = engine$21.eval(rf$0, {}, fn$0.location);
            return f2$0.apply(null, [engine$21].concat(args$0).concat([body$11])) || "";
          });
        });
      }
    });
  }, accum$24 = {}, accum$24["\\fna :: \\maybe\\body"] = $targ$15, accum$24), __amp____colon__(($targ$16 = function(engine$22, temp$19$0) {
    var t0$36 = undefined;
    var x$8 = undefined;
    t0$36 = temp$19$0;
    if (___hasprop(t0$36, "x")) {
      x$8 = t0$36.x;
    } else {
      ___match_error(temp$19$0);
    }
    return ENode(["em"], {}, engine$22.gen(x$8));
  }, accum$25 = {}, accum$25["_ \\x"] = $targ$16, accum$25), __amp____colon__(($targ$17 = function(engine$23, temp$20$0) {
    var t0$37 = undefined;
    var x$9 = undefined;
    t0$37 = temp$20$0;
    if (___hasprop(t0$37, "x")) {
      x$9 = t0$37.x;
    } else {
      ___match_error(temp$20$0);
    }
    return ENode(["strong"], {}, engine$23.gen(x$9));
  }, accum$26 = {}, accum$26["__ \\x"] = $targ$17, accum$26), __amp____colon__(($targ$18 = function(engine$24, temp$21$0) {
    var t0$38 = undefined;
    var t1$12 = undefined;
    var x$10 = undefined;
    t0$38 = temp$21$0;
    if (___hasprop(t0$38, "x") && (t1$12 = getProjector(shed$0)(t0$38.x), t1$12[0])) {
      x$10 = t1$12[1];
    } else {
      ___match_error(temp$21$0);
    }
    return ENode(["code"], {}, raw$0(x$10).replace(RegExp("\\\\+[{}()\\[\\]]", "g"), function(x$11) {
      return x$11.slice(1);
    }));
  }, accum$27 = {}, accum$27["` \\x"] = $targ$18, accum$27), __amp____colon__(($targ$19 = function(engine$25, temp$22$0) {
    var t0$39 = undefined;
    var t1$13 = undefined;
    var x$12 = undefined;
    t0$39 = temp$22$0;
    if (___hasprop(t0$39, "x") && (t1$13 = getProjector(shed$0)(t0$39.x), t1$13[0])) {
      x$12 = t1$13[1];
    } else {
      ___match_error(temp$22$0);
    }
    return ENode(["pre"], {}, dedent$0(rawRelative$0(x$12).replace(RegExp("^ *\\n", ""), "")));
  }, accum$28 = {}, accum$28["& \\x"] = $targ$19, accum$28), __amp____colon__(($targ$20 = function(engine$26, temp$23$0) {
    var t0$40 = undefined;
    var t1$14 = undefined;
    var url2$0 = undefined;
    var label$0 = undefined;
    var url$0 = undefined;
    t0$40 = temp$23$0;
    if (___hasprop(t0$40, "label") && (label$0 = t0$40.label, ___hasprop(t0$40, "url") && (t1$14 = getProjector(shed$0)(t0$40.url), t1$14[0]))) {
      url$0 = t1$14[1];
    } else {
      ___match_error(temp$23$0);
    }
    url2$0 = engine$26.litgen(url$0);
    return ENode(["a"], {href: url2$0}, equal(label$0, Text$0("")) ? url2$0 : engine$26.gen(label$0));
  }, accum$29 = {}, accum$29["\\maybe\\label @@ \\url"] = $targ$20, accum$29), __amp____colon__(($targ$21 = function(engine$27, temp$24$0) {
    var t0$41 = undefined;
    var t1$15 = undefined;
    var label$1 = undefined;
    var url$1 = undefined;
    t0$41 = temp$24$0;
    if (___hasprop(t0$41, "label") && (label$1 = t0$41.label, ___hasprop(t0$41, "url") && (t1$15 = getProjector(shed$0)(t0$41.url), t1$15[0]))) {
      url$1 = t1$15[1];
    } else {
      ___match_error(temp$24$0);
    }
    return ENode(["img"], {
      src: engine$27.litgen(url$1),
      alt: engine$27.gen(label$1)
    }, []);
  }, accum$30 = {}, accum$30["\\maybe\\label @@ image : \\url"] = $targ$21, accum$30), __amp____colon__(($targ$22 = function(engine$28, temp$25$0) {
    var t0$42 = undefined;
    var t1$16 = undefined;
    var url$2 = undefined;
    t0$42 = temp$25$0;
    if (___hasprop(t0$42, "url") && (t1$16 = getProjector(shed$0)(t0$42.url), t1$16[0])) {
      url$2 = t1$16[1];
    } else {
      ___match_error(temp$25$0);
    }
    return ENode(["img"], {src: engine$28.litgen(url$2)}, []);
  }, accum$31 = {}, accum$31["\\url @@ image"] = $targ$22, accum$31), __amp____colon__(($targ$23 = function(engine$29, temp$26$0) {
    var t0$43 = undefined;
    var m$19 = undefined;
    var acc$4 = undefined;
    var temp$27 = undefined;
    var m$20 = undefined;
    var acc$5 = undefined;
    var temp$28 = undefined;
    var s$1 = undefined;
    var m$21 = undefined;
    var $targ$41 = undefined;
    var leng$0 = undefined;
    var ex$2 = undefined;
    var props$0 = undefined;
    var stmts$0 = undefined;
    var children$0 = undefined;
    var parts$0 = undefined;
    var id$0 = undefined;
    var tags$0 = undefined;
    var descr$1 = undefined;
    var contents$1 = undefined;
    t0$43 = temp$26$0;
    if (___hasprop(t0$43, "descr") && (descr$1 = t0$43.descr, ___hasprop(t0$43, "contents"))) {
      contents$1 = t0$43.contents;
    } else {
      ___match_error(temp$26$0);
    }
    leng$0 = engine$29.lit();
    ex$2 = extractor$0("\\key = \\value");
    props$0 = {};
    acc$4 = [];
    temp$27 = null;
    m$19 = null;
    $8: for (var _iterator = statements$0(contents$1)[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$19 = _step.value;
      var $targ$40 = undefined;
      var stmt$1 = undefined;
      var key$4 = undefined;
      var value$3 = undefined;
      var t0$44 = undefined;
      var t1$17 = undefined;
      var t2$3 = undefined;
      t0$44 = getProjector(ex$2)(m$19);
      if (t0$44[0] && (t1$17 = t0$44[1], ___hasprop(t1$17, "key") && (t2$3 = getProjector(raw$0)(t1$17.key), t2$3[0] && (key$4 = t2$3[1], ___hasprop(t1$17, "value"))))) {
        value$3 = t1$17.value;
        $targ$40 = leng$0.gen(value$3);
        props$0[key$4] = $targ$40;
        continue $8;
        acc$4.push(temp$27);
      } else {
        stmt$1 = m$19;
        temp$27 = stmt$1;
        acc$4.push(temp$27);
      }
    }
    stmts$0 = acc$4;
    if (nequal(props$0, {})) {
      children$0 = ENode([], {}, (acc$5 = [], temp$28 = null, m$20 = null, (function() {
        $9: for (var _iterator2 = stmts$0[Symbol.iterator](),
            _step2; !(_step2 = _iterator2.next()).done; ) {
          m$20 = _step2.value;
          var stmt$2 = undefined;
          stmt$2 = m$20;
          temp$28 = engine$29.gen(stmt$2);
          acc$5.push(temp$28);
        }
      })(), acc$5)).join("\n").children;
    } else {
      s$1 = shedIndent$0(contents$1);
      if (equal(s$1, Text$0(""))) {
        children$0 = [];
      } else {
        children$0 = [engine$29.gen(s$1)];
      }
    }
    parts$0 = raw$0(descr$1).split(RegExp("[ +]|(?=\\.|#)", ""));
    id$0 = null;
    tags$0 = [];
    m$21 = null;
    $7: for (var _iterator2 = parts$0[Symbol.iterator](),
        _step2; !(_step2 = _iterator2.next()).done; ) {
      m$21 = _step2.value;
      var tag$0 = undefined;
      var _id$0 = undefined;
      var t0$45 = undefined;
      var t1$18 = undefined;
      var t2$4 = undefined;
      if (m$21 === "") {
        undefined;
      } else {
        t0$45 = getProjector(RegExp("^#(.*)", ""))(m$21);
        if (t0$45[0] && (t1$18 = t0$45[1], t2$4 = t1$18.length, t2$4 === 2)) {
          t1$18[0];
          _id$0 = t1$18[1];
          id$0 = _id$0;
          id$0;
        } else {
          tag$0 = m$21;
          tags$0.push(tag$0);
        }
      }
    }
    if (id$0) {
      $targ$41 = id$0;
      props$0.id = $targ$41;
      void 0;
    }
    return ENode(tags$0, props$0, children$0);
  }, accum$32 = {}, t0$46 = getProjector(requireWide$0)($targ$23), t0$46[0] ? (accum$32["\\descr % \\maybe\\contents"] = t0$46[1], accum$32) : ___match_error($targ$23, "requireWide! \"\\\\descr % \\\\maybe\\\\contents\"{engine, var {=> descr, => contents}}")), __amp____colon__(($targ$24 = headerRule$0(1), accum$33 = {}, t0$47 = getProjector(requireWide$0)($targ$24), t0$47[0] ? (accum$33["= \\x"] = t0$47[1], accum$33) : ___match_error($targ$24, "requireWide! \"= \\\\x\"")), __amp____colon__(($targ$25 = headerRule$0(2), accum$34 = {}, t0$48 = getProjector(requireWide$0)($targ$25), t0$48[0] ? (accum$34["== \\x"] = t0$48[1], accum$34) : ___match_error($targ$25, "requireWide! \"== \\\\x\"")), __amp____colon__(($targ$26 = headerRule$0(3), accum$35 = {}, t0$49 = getProjector(requireWide$0)($targ$26), t0$49[0] ? (accum$35["=== \\x"] = t0$49[1], accum$35) : ___match_error($targ$26, "requireWide! \"=== \\\\x\"")), __amp____colon__(($targ$27 = headerRule$0(4), accum$36 = {}, t0$50 = getProjector(requireWide$0)($targ$27), t0$50[0] ? (accum$36["==== \\x"] = t0$50[1], accum$36) : ___match_error($targ$27, "requireWide! \"==== \\\\x\"")), __amp____colon__(($targ$28 = headerRule$0(5), accum$37 = {}, t0$51 = getProjector(requireWide$0)($targ$28), t0$51[0] ? (accum$37["===== \\x"] = t0$51[1], accum$37) : ___match_error($targ$28, "requireWide! \"===== \\\\x\"")), __amp____colon__(($targ$29 = headerRule$0(6), accum$38 = {}, t0$52 = getProjector(requireWide$0)($targ$29), t0$52[0] ? (accum$38["====== \\x"] = t0$52[1], accum$38) : ___match_error($targ$29, "requireWide! \"====== \\\\x\"")), __amp____colon__(($targ$30 = function(engine$30, temp$29$0) {
    var t0$53 = undefined;
    var x$13 = undefined;
    t0$53 = temp$29$0;
    if (___hasprop(t0$53, "x")) {
      x$13 = t0$53.x;
    } else {
      ___match_error(temp$29$0);
    }
    return mergeable$0("ol", ENode(["li"], {}, engine$30.gen(x$13)));
  }, accum$39 = {}, t0$54 = getProjector(requireWide$0)($targ$30), t0$54[0] ? (accum$39["# \\x"] = t0$54[1], accum$39) : ___match_error($targ$30, "requireWide! \"# \\\\x\"{engine, {=> x}}")), __amp____colon__(($targ$31 = function(engine$31, temp$30$0) {
    var t0$55 = undefined;
    var x$14 = undefined;
    t0$55 = temp$30$0;
    if (___hasprop(t0$55, "x")) {
      x$14 = t0$55.x;
    } else {
      ___match_error(temp$30$0);
    }
    return mergeable$0("ul", ENode(["li"], {}, engine$31.gen(x$14)));
  }, accum$40 = {}, t0$56 = getProjector(requireWide$0)($targ$31), t0$56[0] ? (accum$40["* \\x"] = t0$56[1], accum$40) : ___match_error($targ$31, "requireWide! \"* \\\\x\"{engine, {=> x}}")), __amp____colon__(($targ$32 = function(engine$32, temp$31$0) {
    var t0$57 = undefined;
    var m$22 = undefined;
    var acc$6 = undefined;
    var temp$32 = undefined;
    var args$2 = undefined;
    var x$15 = undefined;
    t0$57 = temp$31$0;
    if (___hasprop(t0$57, "x")) {
      x$15 = t0$57.x;
    } else {
      ___match_error(temp$31$0);
    }
    args$2 = collapse$0("+", x$15);
    return mergeable$0("table", ENode(["tr"], {}, (acc$6 = [], temp$32 = null, m$22 = null, (function() {
      $10: for (var _iterator = args$2[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$22 = _step.value;
        var arg$0 = undefined;
        arg$0 = m$22;
        temp$32 = ENode(["th"], {}, engine$32.gen(arg$0));
        acc$6.push(temp$32);
      }
    })(), acc$6)));
  }, accum$41 = {}, t0$58 = getProjector(requireWide$0)($targ$32), t0$58[0] ? (accum$41["+ \\x"] = t0$58[1], accum$41) : ___match_error($targ$32, "requireWide! \"+ \\\\x\"{engine, {=> x}}")), __amp____colon__(($targ$33 = function(engine$33, temp$33$0) {
    var t0$59 = undefined;
    var x$16 = undefined;
    t0$59 = temp$33$0;
    if (___hasprop(t0$59, "x")) {
      x$16 = t0$59.x;
    } else {
      ___match_error(temp$33$0);
    }
    return mergeable$0("blockquote", [" ", engine$33.gen(x$16)]);
  }, accum$42 = {}, t0$60 = getProjector(requireWide$0)($targ$33), t0$60[0] ? (accum$42["> \\x"] = t0$60[1], accum$42) : ___match_error($targ$33, "requireWide! \"> \\\\x\"{engine, {=> x}}")), __amp____colon__(($targ$34 = function(engine$34, temp$34$0) {
    var t0$61 = undefined;
    var m$23 = undefined;
    var acc$7 = undefined;
    var temp$35 = undefined;
    var args$3 = undefined;
    var x$17 = undefined;
    t0$61 = temp$34$0;
    if (___hasprop(t0$61, "x")) {
      x$17 = t0$61.x;
    } else {
      ___match_error(temp$34$0);
    }
    args$3 = collapse$0("|", x$17);
    return mergeable$0("table", ENode(["tr"], {}, (acc$7 = [], temp$35 = null, m$23 = null, (function() {
      $11: for (var _iterator = args$3[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$23 = _step.value;
        var arg$1 = undefined;
        arg$1 = m$23;
        temp$35 = ENode(["td"], {}, engine$34.gen(arg$1));
        acc$7.push(temp$35);
      }
    })(), acc$7)));
  }, accum$43 = {}, t0$62 = getProjector(requireWide$0)($targ$34), t0$62[0] ? (accum$43["| \\x"] = t0$62[1], accum$43) : ___match_error($targ$34, "requireWide! \"| \\\\x\"{engine, {=> x}}")), __amp____colon__(($targ$35 = function(engine$35, temp$36$0) {
    var t0$63 = undefined;
    var t1$19 = undefined;
    var t2$5 = undefined;
    var t3$0 = undefined;
    var t4$0 = undefined;
    var x$18 = undefined;
    var name$6 = undefined;
    var t0$67 = undefined;
    var t1$22 = undefined;
    var t2$7 = undefined;
    var t3$2 = undefined;
    var spec$0 = undefined;
    var top$0 = undefined;
    var tree$0 = undefined;
    var ph$2$0 = undefined;
    var specificity$0 = undefined;
    var regexp$0 = undefined;
    var t0$64 = undefined;
    var t1$20 = undefined;
    var t2$6 = undefined;
    var t3$1 = undefined;
    var m$24$0 = undefined;
    var rule$0 = undefined;
    var body$12 = undefined;
    t0$63 = temp$36$0;
    if (___hasprop(t0$63, "rule") && (t1$19 = getProjector(shed$0)(t0$63.rule), t1$19[0] && (t2$5 = getProjector(raw$0)(t1$19[1]), t2$5[0] && (rule$0 = t2$5[1], ___hasprop(t0$63, "body") && (t3$0 = getProjector(shed$0)(t0$63.body), t3$0[0] && (t4$0 = getProjector(shedIndent$0)(t3$0[1]), t4$0[0])))))) {
      body$12 = t4$0[1];
    } else {
      ___match_error(temp$36$0);
    }
    m$24$0 = rule$0;
    t0$64 = getProjector(RegExp("^/(.*)/$", ""))(m$24$0);
    if (t0$64[0] && (t1$20 = t0$64[1], t2$6 = t1$20.length, t2$6 === 2)) {
      t1$20[0];
      regexp$0 = t1$20[1];
      engine$35.registerPostprocessor(regexp$0, function() {
        var m$26 = undefined;
        var acc$8 = undefined;
        var temp$37 = undefined;
        var values$1 = undefined;
        var e$0 = undefined;
        var $targ$42 = undefined;
        var matches$0 = undefined;
        var t0$65 = undefined;
        var m$25$0 = undefined;
        m$25$0 = arguments;
        t0$65 = m$25$0.length;
        if (t0$65 >= 0) {
          matches$0 = Array.prototype.slice.call(m$25$0, 0);
          values$1 = object((acc$8 = [], temp$37 = null, m$26 = null, (function() {
            $12: for (var _iterator = enumerate(matches$0)[Symbol.iterator](),
                _step; !(_step = _iterator.next()).done; ) {
              m$26 = _step.value;
              var i$0 = undefined;
              var m$27 = undefined;
              var t0$66 = undefined;
              var t1$21 = undefined;
              t0$66 = m$26;
              if (Array.isArray(t0$66) && (t1$21 = t0$66.length, t1$21 === 2)) {
                i$0 = t0$66[0];
                m$27 = t0$66[1];
                temp$37 = [String(ENode([], {}, ["m", i$0]).toString()), m$27];
                acc$8.push(temp$37);
              } else {
                ___match_error(m$26);
              }
            }
          })(), acc$8));
          e$0 = engine$35.fork();
          $targ$42 = [];
          e$0.regexps = $targ$42;
          return e$0.setenv(values$1).translate(body$12, "enode");
        } else {
          return ___match_error(m$25$0, "{*matches}");
        }
      });
      null;
    } else {
      t0$64 = getProjector(parseSpec$0)(m$24$0);
      if (t0$64[0] && (t1$20 = t0$64[1], spec$0 = t1$20, Array.isArray(t1$20) && (t2$6 = t1$20.length, t2$6 === 3))) {
        top$0 = t1$20[0];
        t3$1 = t1$20[1];
        tree$0 = t3$1;
        ph$2$0 = t3$1;
        specificity$0 = t1$20[2];
        if ((x$18 = ph$2$0, x$18 instanceof Array && x$18[0] === "put")) {
          throw ErrorFactory(["too_general"]).create(rule$0);
        } else {
          t0$67 = ph$2$0;
          if (Array.isArray(t0$67) && (t1$22 = t0$67.length, t1$22 === 2 && (t0$67[0] === "eq" && (t2$7 = t0$67[1], getChecker(Text$0)(t2$7) && (t3$2 = t2$7.length, t3$2 === 1))))) {
            name$6 = t2$7[0];
            engine$35.setenv(name$6, body$12);
          } else {
            engine$35.registerRules(spec$0, function(engine$36, values$2) {
              return engine$36.fork().setenv(values$2).gen(body$12);
            });
          }
        }
      } else {
        ___match_error(m$24$0, "parseSpec! [spec and {top, match tree, specificity}]");
      }
    }
    return "";
  }, accum$44 = {}, accum$44["\\rule => \\body"] = $targ$35, accum$44), __amp____colon__(($targ$36 = function(engine$37, temp$38$0) {
    var t0$68 = undefined;
    var t1$23 = undefined;
    var cond$2 = undefined;
    var value$4 = undefined;
    t0$68 = temp$38$0;
    if (___hasprop(t0$68, "cond") && (t1$23 = getProjector(shed$0)(t0$68.cond), t1$23[0] && (cond$2 = t1$23[1], ___hasprop(t0$68, "value")))) {
      value$4 = t0$68.value;
    } else {
      ___match_error(temp$38$0);
    }
    return conditional$0(engine$37, cond$2, value$4);
  }, accum$45 = {}, accum$45["\\cond ?? \\value"] = $targ$36, accum$45), __amp____colon__(($targ$37 = function(engine$38, temp$39$0) {
    var t0$69 = undefined;
    var t1$24 = undefined;
    var cond$3 = undefined;
    var value$5 = undefined;
    var falsey$1 = undefined;
    t0$69 = temp$39$0;
    if (___hasprop(t0$69, "cond") && (t1$24 = getProjector(shed$0)(t0$69.cond), t1$24[0] && (cond$3 = t1$24[1], ___hasprop(t0$69, "value") && (value$5 = t0$69.value, ___hasprop(t0$69, "falsey"))))) {
      falsey$1 = t0$69.falsey;
    } else {
      ___match_error(temp$39$0);
    }
    return conditional$0(engine$38, cond$3, value$5, falsey$1);
  }, accum$46 = {}, accum$46["\\cond ?? \\value !! \\falsey"] = $targ$37, accum$46), __amp____colon__(($targ$38 = function(engine$39, temp$40$0) {
    var t0$70 = undefined;
    var t1$25 = undefined;
    var cond$4 = undefined;
    var falsey$2 = undefined;
    t0$70 = temp$40$0;
    if (___hasprop(t0$70, "cond") && (t1$25 = getProjector(shed$0)(t0$70.cond), t1$25[0] && (cond$4 = t1$25[1], ___hasprop(t0$70, "falsey")))) {
      falsey$2 = t0$70.falsey;
    } else {
      ___match_error(temp$40$0);
    }
    return conditional$0(engine$39, cond$4, cond$4, falsey$2);
  }, accum$47 = {}, accum$47["\\cond !! \\falsey"] = $targ$38, accum$47), {newlineRule: (filter$0 = function filter(temp$41$0) {
      var t0$71 = undefined;
      var args$4 = undefined;
      var t0$72 = undefined;
      var t1$26 = undefined;
      var t2$8 = undefined;
      var node$1 = undefined;
      var ph$3$0 = undefined;
      t0$71 = temp$41$0;
      node$1 = t0$71;
      ph$3$0 = t0$71;
      t0$72 = getProjector(extract$0)(ph$3$0);
      if (t0$72[0] && (t1$26 = t0$72[1], getChecker(Seq$0)(t1$26) && (t2$8 = t1$26.length, t2$8 >= 1 && t1$26[0] === "NL"))) {
        args$4 = Array.prototype.slice.call(t1$26, 1);
        return {args: args$4};
      } else {
        return false;
      }
    }, spec$1 = ["NL", ["fn", filter$0], 1], fn$1 = function fn(engine$40, temp$42$0) {
      var t0$73 = undefined;
      var t1$27 = undefined;
      var t2$9 = undefined;
      var m$31 = undefined;
      var result$1 = undefined;
      var t0$76 = undefined;
      var m$28$0 = undefined;
      var results$0 = undefined;
      var wide$0 = undefined;
      var last$0 = undefined;
      var _gen$0 = undefined;
      var i$1 = undefined;
      var add$0 = undefined;
      var isFirst$0 = undefined;
      var node$2 = undefined;
      var elems$0 = undefined;
      var args$5 = undefined;
      t0$73 = temp$42$0;
      if (___hasprop(t0$73, "_node") && (t1$27 = t0$73._node, node$2 = t1$27, getChecker(Seq$0)(t1$27) && (t2$9 = t1$27.length, t2$9 >= 0 && (elems$0 = Array.prototype.slice.call(t1$27, 0), ___hasprop(t0$73, "args"))))) {
        args$5 = t0$73.args;
      } else {
        ___match_error(temp$42$0);
      }
      results$0 = [];
      wide$0 = equal(node$2.width, "wide");
      last$0 = null;
      _gen$0 = engine$40.gen.bind(engine$40);
      i$1 = -3;
      add$0 = function add() {
        var bridge$$4043$0 = undefined;
        var m$30$0 = undefined;
        var addblank$0 = undefined;
        var t0$74 = undefined;
        var m$29$0 = undefined;
        m$29$0 = arguments;
        t0$74 = m$29$0.length;
        if (t0$74 >= 0 && t0$74 <= 1) {
          if (0 >= t0$74) {
            addblank$0 = true;
          } else {
            addblank$0 = m$29$0[0];
          }
          results$0.push((m$30$0 = last$0, bridge$$4043$0 = m$30$0, getChecker(ENode(["div"], {}, []))(bridge$$4043$0) || ___hasprop(bridge$$4043$0, "block") && (bridge$$4043$0.block ? true : false) ? last$0 : nequal(m$30$0, "") && wide$0 ? ENode(["p"], {}, last$0) : last$0));
          if (addblank$0) {
            return results$0.push(raw$0(send(elems$0, i$1)));
          }
        } else {
          return ___match_error(m$29$0, "{addblank = true}");
        }
      };
      isFirst$0 = true;
      m$31 = null;
      $13: for (var _iterator = args$5[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$31 = _step.value;
        var newx$0 = undefined;
        var m$32$0 = undefined;
        var x$21 = undefined;
        var x$20 = undefined;
        var x$19 = undefined;
        var ph$4$0 = undefined;
        var t0$75 = undefined;
        t0$75 = getProjector(_gen$0)(m$31);
        if (t0$75[0]) {
          ph$4$0 = t0$75[1];
          i$1 = i$1 + 2;
          x$19 = ph$4$0;
          if (isFirst$0) {
            isFirst$0 = false;
            last$0 = x$19;
            last$0;
          } else {
            x$20 = ph$4$0;
            if (last$0 && last$0.merge) {
              m$32$0 = last$0.merge(x$20);
              if (!m$32$0) {
                add$0();
                last$0 = x$20;
                last$0;
              } else {
                newx$0 = m$32$0;
                last$0 = newx$0;
                last$0;
              }
            } else {
              x$21 = ph$4$0;
              add$0();
              last$0 = x$21;
              last$0;
            }
          }
        } else {
          ___match_error(m$31);
        }
      }
      i$1 = i$1 + 2;
      if (last$0) {
        add$0(false);
      }
      m$28$0 = results$0;
      if (Array.isArray(m$28$0) && (t0$76 = m$28$0.length, t0$76 === 1)) {
        result$1 = m$28$0[0];
        return result$1;
      } else {
        return __amp____colon__(ENode([], {}, results$0), {block: [true, Boolean(wide$0)][1]});
      }
    }, [spec$1, fn$1])}))))))))))))))))))))))))))));
};
$targ$43 = BasicEvaluator$0;
exports.BasicEvaluator = $targ$43;
$targ$44 = basicPlugin$0;
exports.basicPlugin = $targ$44;
$targ$45 = litPlugin$0;
exports.litPlugin = $targ$45;
$targ$46 = file__minus__resolver$0;
exports.fileResolver = $targ$46;
void 0;
