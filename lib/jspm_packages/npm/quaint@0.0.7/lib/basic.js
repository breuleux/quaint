/* */ 
"use strict";
require("earlgrey-runtime/5");
var $targ$1 = undefined;
var accum$0 = undefined;
var $targ$2 = undefined;
var accum$1 = undefined;
var $targ$36 = undefined;
var opg$0 = undefined;
var __lt____lt____colon__$0 = undefined;
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
var $1$0 = undefined;
var SeqDocument$0 = undefined;
var MapDocument$0 = undefined;
var $2$0 = undefined;
var insertSorted$0 = undefined;
var $3$0 = undefined;
var QAst$0 = undefined;
var Text$0 = undefined;
var Oper$0 = undefined;
var Seq$0 = undefined;
var requireWide$0 = undefined;
var headerRule$0 = undefined;
var BasicEvaluator$0 = undefined;
var litPlugin$0 = undefined;
var basicPlugin$0 = undefined;
opg$0 = require("opg");
__lt____lt____colon__$0 = getProperty(opg$0, "transferLocation", "opg");
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
$1$0 = require("./doc");
SeqDocument$0 = getProperty($1$0, "SeqDocument", "./doc");
MapDocument$0 = getProperty($1$0, "MapDocument", "./doc");
$2$0 = require("./util");
insertSorted$0 = getProperty($2$0, "insertSorted", "./util");
$3$0 = require("./lang");
QAst$0 = getProperty($3$0, "QAst", "./lang");
Text$0 = getProperty($3$0, "Text", "./lang");
Oper$0 = getProperty($3$0, "Oper", "./lang");
Seq$0 = getProperty($3$0, "Seq", "./lang");
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
    rval$0 = ENode([String(ENode([], {}, ["h", level$0]).toString())], {id: lbl$0}, [gx$0, ENode(["genfor"], {document: "sections"}, [[level$0, gx$0, lbl$0]])]);
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
      throw ErrorFactory(["not_in_environment"]).create(key$0);
    }
    return send(s$0, key$0);
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
litPlugin$0 = function litPlugin(__at___$4) {
  var $targ$3 = undefined;
  var accum$2 = undefined;
  __at___$4.clearRules();
  return __at___$4.registerRule(($targ$3 = function(engine$2, temp$1$0) {
    var t0$3 = undefined;
    var x$1 = undefined;
    t0$3 = temp$1$0;
    if (___hasprop(t0$3, "x")) {
      x$1 = t0$3.x;
    } else {
      ___match_error(temp$1$0);
    }
    return tools$0.code(engine$2, x$1);
  }, accum$2 = {}, accum$2["{\\x}"] = $targ$3, accum$2));
};
basicPlugin$0 = function basicPlugin(__at___$5) {
  var accum$3 = undefined;
  var accum$6 = undefined;
  var accum$7 = undefined;
  var accum$8 = undefined;
  var accum$9 = undefined;
  var accum$11 = undefined;
  var accum$14 = undefined;
  var accum$15 = undefined;
  var $targ$10 = undefined;
  var accum$16 = undefined;
  var $targ$11 = undefined;
  var accum$17 = undefined;
  var $targ$12 = undefined;
  var accum$18 = undefined;
  var $targ$13 = undefined;
  var accum$19 = undefined;
  var $targ$14 = undefined;
  var accum$21 = undefined;
  var $targ$15 = undefined;
  var accum$22 = undefined;
  var $targ$16 = undefined;
  var accum$23 = undefined;
  var $targ$17 = undefined;
  var accum$24 = undefined;
  var $targ$18 = undefined;
  var accum$25 = undefined;
  var $targ$19 = undefined;
  var accum$26 = undefined;
  var $targ$20 = undefined;
  var accum$27 = undefined;
  var t0$32 = undefined;
  var $targ$21 = undefined;
  var accum$28 = undefined;
  var t0$33 = undefined;
  var $targ$22 = undefined;
  var accum$29 = undefined;
  var t0$34 = undefined;
  var $targ$23 = undefined;
  var accum$30 = undefined;
  var t0$35 = undefined;
  var $targ$24 = undefined;
  var accum$31 = undefined;
  var t0$36 = undefined;
  var $targ$25 = undefined;
  var accum$32 = undefined;
  var t0$37 = undefined;
  var $targ$26 = undefined;
  var accum$33 = undefined;
  var t0$38 = undefined;
  var $targ$27 = undefined;
  var accum$34 = undefined;
  var t0$40 = undefined;
  var $targ$28 = undefined;
  var accum$35 = undefined;
  var t0$42 = undefined;
  var $targ$29 = undefined;
  var accum$36 = undefined;
  var t0$44 = undefined;
  var $targ$30 = undefined;
  var accum$37 = undefined;
  var t0$46 = undefined;
  var $targ$31 = undefined;
  var accum$38 = undefined;
  var $targ$32 = undefined;
  var accum$39 = undefined;
  var filter$0 = undefined;
  var spec$1 = undefined;
  var fn$1 = undefined;
  var $targ$4 = undefined;
  __at___$5.registerDocument({
    meta: MapDocument$0(),
    sections: SeqDocument$0()
  });
  $targ$4 = BasicEvaluator$0();
  __at___$5.evaluator = $targ$4;
  __at___$5.registerMacros(__amp____colon__((accum$3 = {}, accum$3.store = function store(engine$3, temp$2$0, body$0) {
    var t0$4 = undefined;
    var t1$0 = undefined;
    var accum$4 = undefined;
    var accum$5 = undefined;
    var name$0 = undefined;
    t0$4 = getProjector(shed$0)(temp$2$0);
    if (t0$4[0] && (t1$0 = getProjector(raw$0)(t0$4[1]), t1$0[0])) {
      name$0 = t1$0[1];
    } else {
      ___match_error(temp$2$0);
    }
    if (equal(raw$0(body$0), "dump!")) {
      return ENode(["genfrom"], (accum$4 = {}, accum$4.generate = function generate(path$0, docs$0) {
        var m$3 = undefined;
        var acc$0 = undefined;
        var temp$3 = undefined;
        var doc$0 = undefined;
        var m$2$0 = undefined;
        m$2$0 = send(docs$0, name$0);
        if (m$2$0 === void 0) {
          return "";
        } else {
          doc$0 = m$2$0;
          acc$0 = [];
          temp$3 = null;
          m$3 = null;
          $4: for (var _iterator = doc$0.entries()[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            m$3 = _step.value;
            var x$2 = undefined;
            x$2 = m$3;
            temp$3 = engine$3.gen(x$2);
            acc$0.push(temp$3);
          }
          return acc$0;
        }
      }, accum$4), []);
    } else {
      return ENode(["genfor"], __amp____colon__({document: name$0}, (accum$5 = {}, accum$5.create = function create() {
        return SeqDocument$0();
      }, accum$5)), [body$0]);
    }
  }, accum$3), __amp____colon__((accum$6 = {}, accum$6.css = function css(engine$4, temp$4$0) {
    var t0$5 = undefined;
    var body$1 = undefined;
    t0$5 = getProjector(shed$0)(temp$4$0);
    if (t0$5[0]) {
      body$1 = t0$5[1];
    } else {
      ___match_error(temp$4$0);
    }
    return ENode(["style", "raw"], {}, raw$0(body$1));
  }, accum$6), __amp____colon__((accum$7 = {}, accum$7.html = function html(engine$5, temp$5$0) {
    var t0$6 = undefined;
    var body$2 = undefined;
    t0$6 = getProjector(shed$0)(temp$5$0);
    if (t0$6[0]) {
      body$2 = t0$6[1];
    } else {
      ___match_error(temp$5$0);
    }
    return ENode(["raw"], {}, raw$0(body$2));
  }, accum$7), __amp____colon__((accum$8 = {}, accum$8.js = function js(engine$6, temp$6$0) {
    var t0$7 = undefined;
    var body$3 = undefined;
    t0$7 = getProjector(shed$0)(temp$6$0);
    if (t0$7[0]) {
      body$3 = t0$7[1];
    } else {
      ___match_error(temp$6$0);
    }
    return ENode(["script", "raw"], {}, raw$0(body$3));
  }, accum$8), __amp____colon__((accum$9 = {}, accum$9.toc = function toc(engine$7, body$4) {
    var accum$10 = undefined;
    return ENode(["genfrom"], (accum$10 = {}, accum$10.generate = function generate(path$1, docs$1) {
      var bridge$$466$0 = undefined;
      var m$4$0 = undefined;
      var m$5 = undefined;
      var rval$1 = undefined;
      var stack$0 = undefined;
      var cnode$0 = undefined;
      var clvl$0 = undefined;
      var entries$0 = undefined;
      rval$1 = ENode(["ul", ".toc"], {}, []);
      stack$0 = [];
      cnode$0 = rval$1;
      clvl$0 = -1;
      m$4$0 = raw$0(body$4);
      bridge$$466$0 = m$4$0;
      if (bridge$$466$0 === "" || bridge$$466$0 === "all") {
        entries$0 = docs$1.sections.entries(path$1);
      } else {
        if (m$4$0 === "below") {
          entries$0 = docs$1.sections.entriesAfter(path$1);
        } else {
          entries$0 = ___match_error(m$4$0, ".below");
        }
      }
      m$5 = null;
      $5: for (var _iterator = entries$0[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$5 = _step.value;
        var t0$10 = undefined;
        var t1$2 = undefined;
        var newnode$0 = undefined;
        var $targ$5 = undefined;
        var level$3 = undefined;
        var level$2 = undefined;
        var level$1 = undefined;
        var link$0 = undefined;
        var $$449$0 = undefined;
        var bridge$$446$0 = undefined;
        var t0$9 = undefined;
        var ph$0$0 = undefined;
        var title$0 = undefined;
        var lbl$1 = undefined;
        var t0$8 = undefined;
        var t1$1 = undefined;
        t0$8 = m$5;
        if (Array.isArray(t0$8) && (t1$1 = t0$8.length, t1$1 === 3)) {
          ph$0$0 = t0$8[0];
          title$0 = t0$8[1];
          lbl$1 = t0$8[2];
          link$0 = ENode(["a"], {href: String(ENode([], {}, ["#", lbl$1]).toString())}, title$0);
          bridge$$446$0 = ph$0$0;
          if (equal(bridge$$446$0, clvl$0) && (level$1 = bridge$$446$0, true) || (level$1 = bridge$$446$0, equal(clvl$0, -1))) {
            clvl$0 = level$1;
            cnode$0.children.push(ENode(["li"], {}, link$0));
          } else {
            t0$9 = ph$0$0;
            if (t0$9 > clvl$0) {
              level$2 = t0$9;
              newnode$0 = ENode(["ul"], {}, ENode(["li"], {}, link$0));
              cnode$0.children.push(newnode$0);
              stack$0.push([clvl$0, cnode$0]);
              $targ$5 = [level$2, newnode$0];
              t0$10 = $targ$5;
              if (Array.isArray(t0$10) && (t1$2 = t0$10.length, t1$2 === 2)) {
                clvl$0 = t0$10[0];
                cnode$0 = t0$10[1];
              } else {
                ___match_error($targ$5, "{clvl, cnode}");
              }
              [clvl$0, cnode$0];
            } else {
              if (t0$9 < clvl$0) {
                level$3 = t0$9;
                $6: while (level$3 < clvl$0) {
                  var t0$11 = undefined;
                  var t1$3 = undefined;
                  var $targ$6 = undefined;
                  $targ$6 = stack$0.pop();
                  t0$11 = $targ$6;
                  if (Array.isArray(t0$11) && (t1$3 = t0$11.length, t1$3 === 2)) {
                    clvl$0 = t0$11[0];
                    cnode$0 = t0$11[1];
                  } else {
                    ___match_error($targ$6, "{clvl, cnode}");
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
          ___match_error(m$5);
        }
      }
      return rval$1;
    }, accum$10), []);
  }, accum$9), (accum$11 = {}, accum$11.meta = function meta(engine$8, body$5) {
    var accum$12 = undefined;
    var m$7 = undefined;
    var acc$2 = undefined;
    var temp$8 = undefined;
    var ex$0 = undefined;
    var accum$13 = undefined;
    var r$0 = undefined;
    r$0 = raw$0(body$5);
    if (equal(r$0, "dump!")) {
      return ENode(["genfrom"], (accum$12 = {}, accum$12.generate = function generate(path$2, docs$2) {
        var m$6 = undefined;
        var acc$1 = undefined;
        var temp$7 = undefined;
        return ENode(["table"], {}, (acc$1 = [], temp$7 = null, m$6 = null, (function() {
          $7: for (var _iterator = docs$2.meta.entries()[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            m$6 = _step.value;
            var k$0 = undefined;
            var v$0 = undefined;
            var t0$12 = undefined;
            var t1$4 = undefined;
            t0$12 = m$6;
            if (Array.isArray(t0$12) && (t1$4 = t0$12.length, t1$4 === 2)) {
              k$0 = t0$12[0];
              v$0 = t0$12[1];
              temp$7 = ENode(["tr"], {}, [ENode(["td"], {}, k$0), ENode(["td"], {}, engine$8.gen(v$0))]);
              acc$1.push(temp$7);
            } else {
              ___match_error(m$6);
            }
          }
        })(), acc$1));
      }, accum$12), []);
    } else {
      if (__in__("=", raw$0(body$5))) {
        ex$0 = extractor$0("\\key = \\value");
        return ENode(["genfor"], {document: "meta"}, (acc$2 = [], temp$8 = null, m$7 = null, (function() {
          $8: for (var _iterator = statements$0(body$5)[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            m$7 = _step.value;
            var key$2 = undefined;
            var value$1 = undefined;
            var t0$13 = undefined;
            var t1$5 = undefined;
            t0$13 = getProjector(ex$0)(m$7);
            if (t0$13[0] && (t1$5 = t0$13[1], ___hasprop(t1$5, "key") && (key$2 = t1$5.key, ___hasprop(t1$5, "value")))) {
              value$1 = t1$5.value;
              temp$8 = [raw$0(key$2), value$1];
              acc$2.push(temp$8);
            } else {
              ___match_error(m$7);
            }
          }
        })(), acc$2));
      } else {
        return ENode(["genfrom"], (accum$13 = {}, accum$13.generate = function generate(path$3, docs$3) {
          var node$0 = undefined;
          var x$3 = undefined;
          var bridge$$694$0 = undefined;
          var m$8$0 = undefined;
          m$8$0 = docs$3.meta.get(r$0);
          if (m$8$0 === void 0) {
            return ENode([], {}, ["No meta information: ", r$0]).toString();
          } else {
            bridge$$694$0 = m$8$0;
            if (getChecker(ENode)(bridge$$694$0) && (x$3 = bridge$$694$0, true) || typeof bridge$$694$0 === "string" && (x$3 = bridge$$694$0, true)) {
              return x$3;
            } else {
              node$0 = m$8$0;
              return engine$8.gen(node$0);
            }
          }
        }, accum$13), []);
      }
    }
  }, accum$11)))))));
  __at___$5.registerMethods(__amp____colon__((accum$14 = {}, accum$14.lit = function lit() {
    var t0$14 = undefined;
    var p$0 = undefined;
    var $targ$8 = undefined;
    var $targ$7 = undefined;
    var __at___$6 = undefined;
    var self$3 = undefined;
    $targ$7 = this;
    t0$14 = $targ$7;
    __at___$6 = t0$14;
    self$3 = t0$14;
    [__at___$6, self$3];
    p$0 = __at___$6.forkPlug(litPlugin$0);
    $targ$8 = __at___$6.evaluator;
    p$0.evaluator = $targ$8;
    return p$0;
  }, accum$14), (accum$15 = {}, accum$15.litgen = function litgen(x$4) {
    var t0$15 = undefined;
    var $targ$9 = undefined;
    var __at___$7 = undefined;
    var self$4 = undefined;
    $targ$9 = this;
    t0$15 = $targ$9;
    __at___$7 = t0$15;
    self$4 = t0$15;
    [__at___$7, self$4];
    return __at___$7.lit().gen(x$4);
  }, accum$15)));
  return __at___$5.registerRule(__amp____colon__(($targ$10 = function(engine$9, temp$9$0) {
    var t0$16 = undefined;
    var x$5 = undefined;
    t0$16 = temp$9$0;
    if (___hasprop(t0$16, "x")) {
      x$5 = t0$16.x;
    } else {
      ___match_error(temp$9$0);
    }
    return engine$9.gen(x$5);
  }, accum$16 = {}, accum$16["\\maybe\\x ;; \\ignore"] = $targ$10, accum$16), __amp____colon__(($targ$11 = function(engine$10, temp$10$0) {
    var t0$17 = undefined;
    var t1$6 = undefined;
    var t2$0 = undefined;
    var beg$0 = undefined;
    var middle$0 = undefined;
    var end$0 = undefined;
    var res$0 = undefined;
    var o$0 = undefined;
    var x$6 = undefined;
    var c$0 = undefined;
    t0$17 = temp$10$0;
    if (___hasprop(t0$17, "_node") && (t1$6 = t0$17._node, getChecker(Seq$0)(t1$6) && (t2$0 = t1$6.length, t2$0 === 5))) {
      t1$6[0];
      o$0 = t1$6[1];
      x$6 = t1$6[2];
      c$0 = t1$6[3];
      t1$6[4];
    } else {
      ___match_error(temp$10$0);
    }
    beg$0 = raw$0(o$0).replace("[", "");
    middle$0 = engine$10.gen(x$6);
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
  }, accum$17 = {}, accum$17["[\\maybe\\x]"] = $targ$11, accum$17), __amp____colon__(($targ$12 = function(engine$11, temp$11$0) {
    var t0$18 = undefined;
    var x$7 = undefined;
    t0$18 = temp$11$0;
    if (___hasprop(t0$18, "x")) {
      x$7 = t0$18.x;
    } else {
      ___match_error(temp$11$0);
    }
    return tools$0.code(engine$11, x$7);
  }, accum$18 = {}, accum$18["{\\x}"] = $targ$12, accum$18), __amp____colon__(($targ$13 = function(engine$12, temp$12$0) {
    var t0$19 = undefined;
    var fna$0 = undefined;
    var body$6 = undefined;
    t0$19 = temp$12$0;
    if (___hasprop(t0$19, "fna") && (fna$0 = t0$19.fna, ___hasprop(t0$19, "body"))) {
      body$6 = t0$19.body;
    } else {
      ___match_error(temp$12$0);
    }
    return may__minus__fail$0(function() {
      var args$1 = undefined;
      var t0$20 = undefined;
      var t1$7 = undefined;
      var t2$1 = undefined;
      var m$9$0 = undefined;
      var t0$21 = undefined;
      var t1$8 = undefined;
      var f$1 = undefined;
      var accum$20 = undefined;
      var $targ$33 = undefined;
      var fn$0 = undefined;
      var args$0 = undefined;
      var rf$0 = undefined;
      m$9$0 = fna$0;
      t0$20 = getProjector(extract$0)(m$9$0);
      if (t0$20[0] && (t1$7 = t0$20[1], getChecker(Seq$0)(t1$7) && (t2$1 = t1$7.length, t2$1 >= 1 && t1$7[0] === "J"))) {
        args$1 = Array.prototype.slice.call(t1$7, 1);
        $targ$33 = args$1;
      } else {
        $targ$33 = [fna$0];
      }
      t0$21 = $targ$33;
      if (Array.isArray(t0$21) && (t1$8 = t0$21.length, t1$8 >= 1)) {
        fn$0 = t0$21[0];
        args$0 = Array.prototype.slice.call(t0$21, 1);
      } else {
        ___match_error($targ$33, "{fn, *args}");
      }
      [fn$0, args$0];
      rf$0 = raw$0(fn$0);
      if ((f$1 = send(send(engine$12, "macros", true), rf$0), f$1)) {
        return send(f$1, [engine$12].concat(args$0).concat([body$6])) || "";
      } else {
        return ENode(["genfrom"], (accum$20 = {}, accum$20.generate = function generate(path$4, documents$0) {
          return may__minus__fail$0(function() {
            var f2$0 = undefined;
            f2$0 = engine$12.eval(rf$0, {}, fn$0.location);
            return f2$0.apply(null, [engine$12].concat(args$0).concat([body$6])) || "";
          });
        }, accum$20), []);
      }
    });
  }, accum$19 = {}, accum$19["\\fna :: \\maybe\\body"] = $targ$13, accum$19), __amp____colon__(($targ$14 = function(engine$13, temp$13$0) {
    var t0$22 = undefined;
    var x$8 = undefined;
    t0$22 = temp$13$0;
    if (___hasprop(t0$22, "x")) {
      x$8 = t0$22.x;
    } else {
      ___match_error(temp$13$0);
    }
    return ENode(["em"], {}, engine$13.gen(x$8));
  }, accum$21 = {}, accum$21["_ \\x"] = $targ$14, accum$21), __amp____colon__(($targ$15 = function(engine$14, temp$14$0) {
    var t0$23 = undefined;
    var x$9 = undefined;
    t0$23 = temp$14$0;
    if (___hasprop(t0$23, "x")) {
      x$9 = t0$23.x;
    } else {
      ___match_error(temp$14$0);
    }
    return ENode(["strong"], {}, engine$14.gen(x$9));
  }, accum$22 = {}, accum$22["__ \\x"] = $targ$15, accum$22), __amp____colon__(($targ$16 = function(engine$15, temp$15$0) {
    var t0$24 = undefined;
    var t1$9 = undefined;
    var x$10 = undefined;
    t0$24 = temp$15$0;
    if (___hasprop(t0$24, "x") && (t1$9 = getProjector(shed$0)(t0$24.x), t1$9[0])) {
      x$10 = t1$9[1];
    } else {
      ___match_error(temp$15$0);
    }
    return ENode(["code"], {}, raw$0(x$10).replace(RegExp("\\\\+[{}()\\[\\]]", "g"), function(x$11) {
      return x$11.slice(1);
    }));
  }, accum$23 = {}, accum$23["` \\x"] = $targ$16, accum$23), __amp____colon__(($targ$17 = function(engine$16, temp$16$0) {
    var t0$25 = undefined;
    var t1$10 = undefined;
    var x$12 = undefined;
    t0$25 = temp$16$0;
    if (___hasprop(t0$25, "x") && (t1$10 = getProjector(shed$0)(t0$25.x), t1$10[0])) {
      x$12 = t1$10[1];
    } else {
      ___match_error(temp$16$0);
    }
    return ENode(["pre"], {}, dedent$0(rawRelative$0(x$12).replace(RegExp("^ *\\n", ""), "")));
  }, accum$24 = {}, accum$24["\\maybe\\lang & \\x"] = $targ$17, accum$24), __amp____colon__(($targ$18 = function(engine$17, temp$17$0) {
    var t0$26 = undefined;
    var t1$11 = undefined;
    var url2$0 = undefined;
    var label$0 = undefined;
    var url$0 = undefined;
    t0$26 = temp$17$0;
    if (___hasprop(t0$26, "label") && (label$0 = t0$26.label, ___hasprop(t0$26, "url") && (t1$11 = getProjector(shed$0)(t0$26.url), t1$11[0]))) {
      url$0 = t1$11[1];
    } else {
      ___match_error(temp$17$0);
    }
    url2$0 = engine$17.litgen(url$0);
    return ENode(["a"], {href: url2$0}, equal(label$0, Text$0("")) ? url2$0 : engine$17.gen(label$0));
  }, accum$25 = {}, accum$25["\\maybe\\label @@ \\url"] = $targ$18, accum$25), __amp____colon__(($targ$19 = function(engine$18, temp$18$0) {
    var t0$27 = undefined;
    var t1$12 = undefined;
    var label$1 = undefined;
    var url$1 = undefined;
    t0$27 = temp$18$0;
    if (___hasprop(t0$27, "label") && (label$1 = t0$27.label, ___hasprop(t0$27, "url") && (t1$12 = getProjector(shed$0)(t0$27.url), t1$12[0]))) {
      url$1 = t1$12[1];
    } else {
      ___match_error(temp$18$0);
    }
    return ENode(["img"], {
      src: engine$18.litgen(url$1),
      alt: engine$18.gen(label$1)
    }, []);
  }, accum$26 = {}, accum$26["\\maybe\\label @@ image : \\url"] = $targ$19, accum$26), __amp____colon__(($targ$20 = function(engine$19, temp$19$0) {
    var t0$28 = undefined;
    var t1$13 = undefined;
    var url$2 = undefined;
    t0$28 = temp$19$0;
    if (___hasprop(t0$28, "url") && (t1$13 = getProjector(shed$0)(t0$28.url), t1$13[0])) {
      url$2 = t1$13[1];
    } else {
      ___match_error(temp$19$0);
    }
    return ENode(["img"], {src: engine$19.litgen(url$2)}, []);
  }, accum$27 = {}, accum$27["\\url @@ image"] = $targ$20, accum$27), __amp____colon__(($targ$21 = function(engine$20, temp$20$0) {
    var t0$29 = undefined;
    var m$10 = undefined;
    var acc$3 = undefined;
    var temp$21 = undefined;
    var m$11 = undefined;
    var acc$4 = undefined;
    var temp$22 = undefined;
    var s$1 = undefined;
    var m$12 = undefined;
    var $targ$35 = undefined;
    var leng$0 = undefined;
    var ex$1 = undefined;
    var props$0 = undefined;
    var stmts$0 = undefined;
    var children$0 = undefined;
    var parts$0 = undefined;
    var id$0 = undefined;
    var tags$0 = undefined;
    var descr$0 = undefined;
    var contents$0 = undefined;
    t0$29 = temp$20$0;
    if (___hasprop(t0$29, "descr") && (descr$0 = t0$29.descr, ___hasprop(t0$29, "contents"))) {
      contents$0 = t0$29.contents;
    } else {
      ___match_error(temp$20$0);
    }
    leng$0 = engine$20.lit();
    ex$1 = extractor$0("\\key = \\value");
    props$0 = {};
    acc$3 = [];
    temp$21 = null;
    m$10 = null;
    $10: for (var _iterator = statements$0(contents$0)[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$10 = _step.value;
      var $targ$34 = undefined;
      var stmt$0 = undefined;
      var key$3 = undefined;
      var value$2 = undefined;
      var t0$30 = undefined;
      var t1$14 = undefined;
      var t2$2 = undefined;
      t0$30 = getProjector(ex$1)(m$10);
      if (t0$30[0] && (t1$14 = t0$30[1], ___hasprop(t1$14, "key") && (t2$2 = getProjector(raw$0)(t1$14.key), t2$2[0] && (key$3 = t2$2[1], ___hasprop(t1$14, "value"))))) {
        value$2 = t1$14.value;
        $targ$34 = leng$0.gen(value$2);
        props$0[key$3] = $targ$34;
        continue $10;
        acc$3.push(temp$21);
      } else {
        stmt$0 = m$10;
        temp$21 = stmt$0;
        acc$3.push(temp$21);
      }
    }
    stmts$0 = acc$3;
    if (nequal(props$0, {})) {
      children$0 = ENode([], {}, (acc$4 = [], temp$22 = null, m$11 = null, (function() {
        $11: for (var _iterator2 = stmts$0[Symbol.iterator](),
            _step2; !(_step2 = _iterator2.next()).done; ) {
          m$11 = _step2.value;
          var stmt$1 = undefined;
          stmt$1 = m$11;
          temp$22 = engine$20.gen(stmt$1);
          acc$4.push(temp$22);
        }
      })(), acc$4)).join("\n").children;
    } else {
      s$1 = shedIndent$0(contents$0);
      if (equal(s$1, Text$0(""))) {
        children$0 = [];
      } else {
        children$0 = [engine$20.gen(s$1)];
      }
    }
    parts$0 = raw$0(descr$0).split(RegExp("[ +]|(?=\\.|#)", ""));
    id$0 = null;
    tags$0 = [];
    m$12 = null;
    $9: for (var _iterator2 = parts$0[Symbol.iterator](),
        _step2; !(_step2 = _iterator2.next()).done; ) {
      m$12 = _step2.value;
      var tag$0 = undefined;
      var _id$0 = undefined;
      var t0$31 = undefined;
      var t1$15 = undefined;
      var t2$3 = undefined;
      if (m$12 === "") {
        undefined;
      } else {
        t0$31 = getProjector(RegExp("^#(.*)", ""))(m$12);
        if (t0$31[0] && (t1$15 = t0$31[1], t2$3 = t1$15.length, t2$3 === 2)) {
          t1$15[0];
          _id$0 = t1$15[1];
          id$0 = _id$0;
          id$0;
        } else {
          tag$0 = m$12;
          tags$0.push(tag$0);
        }
      }
    }
    if (id$0) {
      $targ$35 = id$0;
      props$0.id = $targ$35;
      void 0;
    }
    return ENode(tags$0, props$0, children$0);
  }, accum$28 = {}, t0$32 = getProjector(requireWide$0)($targ$21), t0$32[0] ? (accum$28["\\descr % \\maybe\\contents"] = t0$32[1], accum$28) : ___match_error($targ$21, "requireWide! \"\\\\descr % \\\\maybe\\\\contents\"{engine, var {=> descr, => contents}}")), __amp____colon__(($targ$22 = headerRule$0(1), accum$29 = {}, t0$33 = getProjector(requireWide$0)($targ$22), t0$33[0] ? (accum$29["= \\x"] = t0$33[1], accum$29) : ___match_error($targ$22, "requireWide! \"= \\\\x\"")), __amp____colon__(($targ$23 = headerRule$0(2), accum$30 = {}, t0$34 = getProjector(requireWide$0)($targ$23), t0$34[0] ? (accum$30["== \\x"] = t0$34[1], accum$30) : ___match_error($targ$23, "requireWide! \"== \\\\x\"")), __amp____colon__(($targ$24 = headerRule$0(3), accum$31 = {}, t0$35 = getProjector(requireWide$0)($targ$24), t0$35[0] ? (accum$31["=== \\x"] = t0$35[1], accum$31) : ___match_error($targ$24, "requireWide! \"=== \\\\x\"")), __amp____colon__(($targ$25 = headerRule$0(4), accum$32 = {}, t0$36 = getProjector(requireWide$0)($targ$25), t0$36[0] ? (accum$32["==== \\x"] = t0$36[1], accum$32) : ___match_error($targ$25, "requireWide! \"==== \\\\x\"")), __amp____colon__(($targ$26 = headerRule$0(5), accum$33 = {}, t0$37 = getProjector(requireWide$0)($targ$26), t0$37[0] ? (accum$33["===== \\x"] = t0$37[1], accum$33) : ___match_error($targ$26, "requireWide! \"===== \\\\x\"")), __amp____colon__(($targ$27 = headerRule$0(6), accum$34 = {}, t0$38 = getProjector(requireWide$0)($targ$27), t0$38[0] ? (accum$34["====== \\x"] = t0$38[1], accum$34) : ___match_error($targ$27, "requireWide! \"====== \\\\x\"")), __amp____colon__(($targ$28 = function(engine$21, temp$23$0) {
    var t0$39 = undefined;
    var x$13 = undefined;
    t0$39 = temp$23$0;
    if (___hasprop(t0$39, "x")) {
      x$13 = t0$39.x;
    } else {
      ___match_error(temp$23$0);
    }
    return mergeable$0("ol", ENode(["li"], {}, engine$21.gen(x$13)));
  }, accum$35 = {}, t0$40 = getProjector(requireWide$0)($targ$28), t0$40[0] ? (accum$35["# \\x"] = t0$40[1], accum$35) : ___match_error($targ$28, "requireWide! \"# \\\\x\"{engine, {=> x}}")), __amp____colon__(($targ$29 = function(engine$22, temp$24$0) {
    var t0$41 = undefined;
    var x$14 = undefined;
    t0$41 = temp$24$0;
    if (___hasprop(t0$41, "x")) {
      x$14 = t0$41.x;
    } else {
      ___match_error(temp$24$0);
    }
    return mergeable$0("ul", ENode(["li"], {}, engine$22.gen(x$14)));
  }, accum$36 = {}, t0$42 = getProjector(requireWide$0)($targ$29), t0$42[0] ? (accum$36["* \\x"] = t0$42[1], accum$36) : ___match_error($targ$29, "requireWide! \"* \\\\x\"{engine, {=> x}}")), __amp____colon__(($targ$30 = function(engine$23, temp$25$0) {
    var t0$43 = undefined;
    var m$13 = undefined;
    var acc$5 = undefined;
    var temp$26 = undefined;
    var args$2 = undefined;
    var x$15 = undefined;
    t0$43 = temp$25$0;
    if (___hasprop(t0$43, "x")) {
      x$15 = t0$43.x;
    } else {
      ___match_error(temp$25$0);
    }
    args$2 = collapse$0("+", x$15);
    return mergeable$0("table", ENode(["tr"], {}, (acc$5 = [], temp$26 = null, m$13 = null, (function() {
      $12: for (var _iterator = args$2[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$13 = _step.value;
        var arg$0 = undefined;
        arg$0 = m$13;
        temp$26 = ENode(["th"], {}, engine$23.gen(arg$0));
        acc$5.push(temp$26);
      }
    })(), acc$5)));
  }, accum$37 = {}, t0$44 = getProjector(requireWide$0)($targ$30), t0$44[0] ? (accum$37["+ \\x"] = t0$44[1], accum$37) : ___match_error($targ$30, "requireWide! \"+ \\\\x\"{engine, {=> x}}")), __amp____colon__(($targ$31 = function(engine$24, temp$27$0) {
    var t0$45 = undefined;
    var m$14 = undefined;
    var acc$6 = undefined;
    var temp$28 = undefined;
    var args$3 = undefined;
    var x$16 = undefined;
    t0$45 = temp$27$0;
    if (___hasprop(t0$45, "x")) {
      x$16 = t0$45.x;
    } else {
      ___match_error(temp$27$0);
    }
    args$3 = collapse$0("|", x$16);
    return mergeable$0("table", ENode(["tr"], {}, (acc$6 = [], temp$28 = null, m$14 = null, (function() {
      $13: for (var _iterator = args$3[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$14 = _step.value;
        var arg$1 = undefined;
        arg$1 = m$14;
        temp$28 = ENode(["td"], {}, engine$24.gen(arg$1));
        acc$6.push(temp$28);
      }
    })(), acc$6)));
  }, accum$38 = {}, t0$46 = getProjector(requireWide$0)($targ$31), t0$46[0] ? (accum$38["| \\x"] = t0$46[1], accum$38) : ___match_error($targ$31, "requireWide! \"| \\\\x\"{engine, {=> x}}")), __amp____colon__(($targ$32 = function(engine$25, temp$29$0) {
    var t0$47 = undefined;
    var t1$16 = undefined;
    var t2$4 = undefined;
    var t3$0 = undefined;
    var t4$0 = undefined;
    var x$17 = undefined;
    var name$1 = undefined;
    var t0$51 = undefined;
    var t1$19 = undefined;
    var t2$6 = undefined;
    var t3$2 = undefined;
    var spec$0 = undefined;
    var top$0 = undefined;
    var tree$0 = undefined;
    var ph$1$0 = undefined;
    var specificity$0 = undefined;
    var regexp$0 = undefined;
    var t0$48 = undefined;
    var t1$17 = undefined;
    var t2$5 = undefined;
    var t3$1 = undefined;
    var m$15$0 = undefined;
    var rule$0 = undefined;
    var body$7 = undefined;
    t0$47 = temp$29$0;
    if (___hasprop(t0$47, "rule") && (t1$16 = getProjector(shed$0)(t0$47.rule), t1$16[0] && (t2$4 = getProjector(raw$0)(t1$16[1]), t2$4[0] && (rule$0 = t2$4[1], ___hasprop(t0$47, "body") && (t3$0 = getProjector(shed$0)(t0$47.body), t3$0[0] && (t4$0 = getProjector(shedIndent$0)(t3$0[1]), t4$0[0])))))) {
      body$7 = t4$0[1];
    } else {
      ___match_error(temp$29$0);
    }
    m$15$0 = rule$0;
    t0$48 = getProjector(RegExp("^/(.*)/$", ""))(m$15$0);
    if (t0$48[0] && (t1$17 = t0$48[1], t2$5 = t1$17.length, t2$5 === 2)) {
      t1$17[0];
      regexp$0 = t1$17[1];
      engine$25.registerReplace(regexp$0, function() {
        var m$17 = undefined;
        var acc$7 = undefined;
        var temp$30 = undefined;
        var values$0 = undefined;
        var matches$0 = undefined;
        var t0$49 = undefined;
        var m$16$0 = undefined;
        m$16$0 = arguments;
        t0$49 = m$16$0.length;
        if (t0$49 >= 0) {
          matches$0 = Array.prototype.slice.call(m$16$0, 0);
          values$0 = object((acc$7 = [], temp$30 = null, m$17 = null, (function() {
            $14: for (var _iterator = enumerate(matches$0)[Symbol.iterator](),
                _step; !(_step = _iterator.next()).done; ) {
              m$17 = _step.value;
              var i$0 = undefined;
              var m$18 = undefined;
              var t0$50 = undefined;
              var t1$18 = undefined;
              t0$50 = m$17;
              if (Array.isArray(t0$50) && (t1$18 = t0$50.length, t1$18 === 2)) {
                i$0 = t0$50[0];
                m$18 = t0$50[1];
                temp$30 = [String(ENode([], {}, ["m", i$0]).toString()), m$18];
                acc$7.push(temp$30);
              } else {
                ___match_error(m$17);
              }
            }
          })(), acc$7));
          return engine$25.fork().setenv(values$0).gen(body$7);
        } else {
          return ___match_error(m$16$0, "{*matches}");
        }
      });
    } else {
      t0$48 = getProjector(parseSpec$0)(m$15$0);
      if (t0$48[0] && (t1$17 = t0$48[1], spec$0 = t1$17, Array.isArray(t1$17) && (t2$5 = t1$17.length, t2$5 === 3))) {
        top$0 = t1$17[0];
        t3$1 = t1$17[1];
        tree$0 = t3$1;
        ph$1$0 = t3$1;
        specificity$0 = t1$17[2];
        if ((x$17 = ph$1$0, x$17 instanceof Array && x$17[0] === "put")) {
          throw ErrorFactory(["too_general"]).create(rule$0);
        } else {
          t0$51 = ph$1$0;
          if (Array.isArray(t0$51) && (t1$19 = t0$51.length, t1$19 === 2 && (t0$51[0] === "eq" && (t2$6 = t0$51[1], getChecker(Text$0)(t2$6) && (t3$2 = t2$6.length, t3$2 === 1))))) {
            name$1 = t2$6[0];
            engine$25.setenv(name$1, body$7);
          } else {
            engine$25.registerRule(spec$0, function(engine$26, values$1) {
              return engine$26.fork().setenv(values$1).gen(body$7);
            });
          }
        }
      } else {
        ___match_error(m$15$0, "parseSpec! [spec and {top, match tree, specificity}]");
      }
    }
    return "";
  }, accum$39 = {}, accum$39["\\rule => \\body"] = $targ$32, accum$39), {newlineRule: (filter$0 = function filter(temp$31$0) {
      var t0$52 = undefined;
      var args$4 = undefined;
      var t0$53 = undefined;
      var t1$20 = undefined;
      var t2$7 = undefined;
      var node$1 = undefined;
      var ph$2$0 = undefined;
      t0$52 = temp$31$0;
      node$1 = t0$52;
      ph$2$0 = t0$52;
      t0$53 = getProjector(extract$0)(ph$2$0);
      if (t0$53[0] && (t1$20 = t0$53[1], getChecker(Seq$0)(t1$20) && (t2$7 = t1$20.length, t2$7 >= 1 && t1$20[0] === "NL"))) {
        args$4 = Array.prototype.slice.call(t1$20, 1);
        return {args: args$4};
      } else {
        return false;
      }
    }, spec$1 = ["NL", ["fn", filter$0], 1], fn$1 = function fn(engine$27, temp$32$0) {
      var t0$54 = undefined;
      var t1$21 = undefined;
      var t2$8 = undefined;
      var m$22 = undefined;
      var result$0 = undefined;
      var t0$57 = undefined;
      var m$19$0 = undefined;
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
      t0$54 = temp$32$0;
      if (___hasprop(t0$54, "_node") && (t1$21 = t0$54._node, node$2 = t1$21, getChecker(Seq$0)(t1$21) && (t2$8 = t1$21.length, t2$8 >= 0 && (elems$0 = Array.prototype.slice.call(t1$21, 0), ___hasprop(t0$54, "args"))))) {
        args$5 = t0$54.args;
      } else {
        ___match_error(temp$32$0);
      }
      results$0 = [];
      wide$0 = equal(node$2.width, "wide");
      last$0 = null;
      _gen$0 = engine$27.gen.bind(engine$27);
      i$1 = -3;
      add$0 = function add() {
        var bridge$$1759$0 = undefined;
        var m$21$0 = undefined;
        var addblank$0 = undefined;
        var t0$55 = undefined;
        var m$20$0 = undefined;
        m$20$0 = arguments;
        t0$55 = m$20$0.length;
        if (t0$55 >= 0 && t0$55 <= 1) {
          if (0 >= t0$55) {
            addblank$0 = true;
          } else {
            addblank$0 = m$20$0[0];
          }
          results$0.push((m$21$0 = last$0, bridge$$1759$0 = m$21$0, getChecker(ENode(["div"], {}, []))(bridge$$1759$0) || ___hasprop(bridge$$1759$0, "block") && (bridge$$1759$0.block ? true : false) ? last$0 : nequal(m$21$0, "") && wide$0 ? ENode(["p"], {}, last$0) : last$0));
          if (addblank$0) {
            return results$0.push(raw$0(send(elems$0, i$1)));
          }
        } else {
          return ___match_error(m$20$0, "{addblank = true}");
        }
      };
      isFirst$0 = true;
      m$22 = null;
      $15: for (var _iterator = args$5[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$22 = _step.value;
        var newx$0 = undefined;
        var m$23$0 = undefined;
        var x$20 = undefined;
        var x$19 = undefined;
        var x$18 = undefined;
        var ph$3$0 = undefined;
        var t0$56 = undefined;
        t0$56 = getProjector(_gen$0)(m$22);
        if (t0$56[0]) {
          ph$3$0 = t0$56[1];
          i$1 = i$1 + 2;
          x$18 = ph$3$0;
          if (isFirst$0) {
            isFirst$0 = false;
            last$0 = x$18;
            last$0;
          } else {
            x$19 = ph$3$0;
            if (last$0 && last$0.merge) {
              m$23$0 = last$0.merge(x$19);
              if (!m$23$0) {
                add$0();
                last$0 = x$19;
                last$0;
              } else {
                newx$0 = m$23$0;
                last$0 = newx$0;
                last$0;
              }
            } else {
              x$20 = ph$3$0;
              add$0();
              last$0 = x$20;
              last$0;
            }
          }
        } else {
          ___match_error(m$22);
        }
      }
      i$1 = i$1 + 2;
      if (last$0) {
        add$0(false);
      }
      m$19$0 = results$0;
      if (Array.isArray(m$19$0) && (t0$57 = m$19$0.length, t0$57 === 1)) {
        result$0 = m$19$0[0];
        return result$0;
      } else {
        return __amp____colon__(ENode([], {}, results$0), {block: [true, Boolean(wide$0)][1]});
      }
    }, [spec$1, fn$1])}))))))))))))))))))))))));
};
$targ$36 = basicPlugin$0;
exports.basicPlugin = $targ$36;
void 0;
