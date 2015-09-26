/* */ 
"use strict";
require("earlgrey-runtime/5");
var m$19 = undefined;
var acc$7 = undefined;
var temp$14 = undefined;
var elems$0 = undefined;
var $targ$7 = undefined;
var $targ$8 = undefined;
var $targ$9 = undefined;
var $targ$10 = undefined;
var $targ$11 = undefined;
var $targ$12 = undefined;
var $targ$13 = undefined;
var $targ$14 = undefined;
var $targ$15 = undefined;
var $targ$16 = undefined;
var $targ$17 = undefined;
var $targ$18 = undefined;
var $targ$19 = undefined;
var $targ$20 = undefined;
var $targ$21 = undefined;
var $targ$22 = undefined;
var $targ$23 = undefined;
var opg$0 = undefined;
var Source$0 = undefined;
var Location$0 = undefined;
var $0$0 = undefined;
var parse$0 = undefined;
var QAst$0 = undefined;
var Text$0 = undefined;
var Oper$0 = undefined;
var Seq$0 = undefined;
var next$0 = undefined;
var may__minus__fail$0 = undefined;
var raw$0 = undefined;
var rawRelative$0 = undefined;
var dedent$0 = undefined;
var code$0 = undefined;
var parseSpec$0 = undefined;
var makeExtractor$0 = undefined;
var ruleBank$0 = undefined;
var extractor$0 = undefined;
var extract$0 = undefined;
var collapse$0 = undefined;
var statements$0 = undefined;
var shed$0 = undefined;
var shedAll$0 = undefined;
var shedIndent$0 = undefined;
var mergeable$0 = undefined;
var blockElements$0 = undefined;
var normalize$0 = undefined;
opg$0 = require("opg");
Source$0 = getProperty(opg$0, "Source", "opg");
Location$0 = getProperty(opg$0, "Location", "opg");
$0$0 = require("./lang");
parse$0 = getProperty($0$0, "parse", "./lang");
QAst$0 = getProperty($0$0, "QAst", "./lang");
Text$0 = getProperty($0$0, "Text", "./lang");
Oper$0 = getProperty($0$0, "Oper", "./lang");
Seq$0 = getProperty($0$0, "Seq", "./lang");
next$0 = Symbol("next");
may__minus__fail$0 = function mayFail(f$0) {
  var rval$0 = undefined;
  rval$0 = false;
  try {
    rval$0 = f$0();
    rval$0;
  } catch (excv$0) {
    var e$0 = undefined;
    e$0 = excv$0;
    rval$0 = ENode(["span", ".error"], {}, String(e$0));
    rval$0;
  }
  return rval$0;
};
raw$0 = function raw() {
  var accum$0 = undefined;
  var x$0 = undefined;
  var ph$1$0 = undefined;
  var operate$0 = undefined;
  var t0$0 = undefined;
  var t1$0 = undefined;
  var m$0$0 = undefined;
  m$0$0 = arguments;
  t0$0 = m$0$0.length;
  if (t0$0 >= 1 && t0$0 <= 2) {
    t1$0 = m$0$0[0];
    x$0 = t1$0;
    ph$1$0 = t1$0;
    if (1 >= t0$0) {
      operate$0 = function(x$1) {
        return x$1;
      };
    } else {
      operate$0 = m$0$0[1];
    }
    if (getChecker(QAst$0)(ph$1$0)) {
      return x$0.raw();
    } else {
      if (typeof ph$1$0 === "string") {
        return operate$0(x$0);
      } else {
        if (getChecker(ENode(["genfrom"], {}, []))(ph$1$0)) {
          return ENode(["genfrom"], (accum$0 = {}, accum$0.generate = function generate(path$0, docs$0) {
            return raw$0(x$0.props.generate(path$0, docs$0));
          }, accum$0), []);
        } else {
          throw ErrorFactory(["noraw"]).create(String(ENode([], {}, ["Cannot get a raw string from ", x$0, "."]).toString()));
        }
      }
    }
  } else {
    return ___match_error(m$0$0, "{match x, operate = {x} -> x}");
  }
};
rawRelative$0 = function rawRelative(temp$0$0) {
  var t0$1 = undefined;
  var t0$3 = undefined;
  var t1$1 = undefined;
  var t2$0 = undefined;
  var t3$0 = undefined;
  var m$1 = undefined;
  var acc$0 = undefined;
  var temp$1 = undefined;
  var $targ$0 = undefined;
  var c$0 = undefined;
  var padding$0 = undefined;
  var location$0 = undefined;
  var t0$2 = undefined;
  var x$2 = undefined;
  var ph$2$0 = undefined;
  t0$1 = temp$0$0;
  x$2 = t0$1;
  ph$2$0 = t0$1;
  t0$2 = ph$2$0;
  if (___hasprop(t0$2, "location")) {
    location$0 = t0$2.location;
    $targ$0 = location$0.linecol();
    t0$3 = $targ$0;
    if (Array.isArray(t0$3) && (t1$1 = t0$3.length, t1$1 === 2 && (t2$0 = t0$3[0], Array.isArray(t2$0) && (t3$0 = t2$0.length, t3$0 === 2)))) {
      t2$0[0];
      c$0 = t2$0[1];
      t0$3[1];
    } else {
      ___match_error($targ$0, "{{_, c}, _}");
    }
    padding$0 = (acc$0 = [], temp$1 = null, m$1 = null, (function() {
      $3: for (var _iterator = range(1, c$0)[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$1 = _step.value;
        var i$0 = undefined;
        i$0 = m$1;
        temp$1 = " ";
        acc$0.push(temp$1);
      }
    })(), acc$0).join("");
    return padding$0 + location$0.text();
  } else {
    if (typeof ph$2$0 === "string") {
      return x$2;
    } else {
      throw ErrorFactory(["noraw"]).create(String(ENode([], {}, ["Cannot get a raw string from ", x$2, "."]).toString()));
    }
  }
};
dedent$0 = function dedent(x$3) {
  var m$2 = undefined;
  var acc$1 = undefined;
  var temp$2 = undefined;
  var m$3 = undefined;
  var acc$2 = undefined;
  var temp$3 = undefined;
  var newlines$0 = undefined;
  var lines$0 = undefined;
  var indents$0 = undefined;
  var min$0 = undefined;
  lines$0 = x$3.split("\n");
  acc$1 = [];
  temp$2 = null;
  m$2 = null;
  $4: for (var _iterator = lines$0[Symbol.iterator](),
      _step; !(_step = _iterator.next()).done; ) {
    m$2 = _step.value;
    var pfx$0 = undefined;
    var t0$4 = undefined;
    var t1$2 = undefined;
    var t2$1 = undefined;
    t0$4 = getProjector(RegExp("^( *)(?! |$)", ""))(m$2);
    if (t0$4[0] && (t1$2 = t0$4[1], t2$1 = t1$2.length, t2$1 === 2)) {
      t1$2[0];
      pfx$0 = t1$2[1];
      temp$2 = pfx$0.length;
      acc$1.push(temp$2);
    } else {
      continue $4;
      acc$1.push(temp$2);
    }
  }
  indents$0 = acc$1;
  min$0 = send(send(Math, "min", true), indents$0);
  acc$2 = [];
  temp$3 = null;
  m$3 = null;
  $5: for (var _iterator2 = lines$0[Symbol.iterator](),
      _step2; !(_step2 = _iterator2.next()).done; ) {
    m$3 = _step2.value;
    var line$0 = undefined;
    line$0 = m$3;
    temp$3 = line$0.slice(min$0);
    acc$2.push(temp$3);
  }
  newlines$0 = acc$2;
  return newlines$0.join("\n");
};
code$0 = function code(engine$0, x$4) {
  var accum$1 = undefined;
  return ENode(["genfrom"], (accum$1 = {}, accum$1.generate = function generate(path$1, documents$0) {
    return may__minus__fail$0(function() {
      var t0$5 = undefined;
      var $targ$1 = undefined;
      var accum$2 = undefined;
      var env$0 = undefined;
      var m$4$0 = undefined;
      var res$0 = undefined;
      env$0 = __amp____colon__(($targ$1 = documents$0, accum$2 = {}, t0$5 = $targ$1, accum$2.doc = t0$5, accum$2.documents = t0$5, accum$2), {engine: engine$0});
      res$0 = engine$0.eval(raw$0(x$4), env$0, x$4.location) || "";
      m$4$0 = res$0;
      if (getChecker(QAst$0)(m$4$0)) {
        return engine$0.gen(res$0);
      } else {
        return res$0;
      }
    });
  }, accum$1), []);
};
parseSpec$0 = function parseSpec(ph$3$0) {
  var helper$0 = undefined;
  var ast$0 = undefined;
  var top$0 = undefined;
  var specificity$0 = undefined;
  var rval$1 = undefined;
  var top$1 = undefined;
  var rval$2 = undefined;
  var specificity$1 = undefined;
  var spec$0 = undefined;
  var $$7937$0 = undefined;
  var t0$6 = undefined;
  var t1$3 = undefined;
  t0$6 = ph$3$0;
  if (typeof t0$6 === "string") {
    spec$0 = t0$6;
    ast$0 = parse$0(Source$0(spec$0));
    top$0 = null;
    specificity$0 = 0;
    helper$0 = function helper(temp$4$0, opts$0) {
      var t0$7 = undefined;
      var m$5 = undefined;
      var acc$3 = undefined;
      var temp$5 = undefined;
      var args$0 = undefined;
      var operator$0 = undefined;
      var flag$0 = undefined;
      var ph$5$0 = undefined;
      var name$0 = undefined;
      var t0$8 = undefined;
      var t1$4 = undefined;
      var t2$2 = undefined;
      var t3$1 = undefined;
      var t4$0 = undefined;
      var t5$0 = undefined;
      var expr$0 = undefined;
      var ph$4$0 = undefined;
      t0$7 = temp$4$0;
      expr$0 = t0$7;
      ph$4$0 = t0$7;
      t0$8 = ph$4$0;
      if (getChecker(Text$0)(t0$8) && (t1$4 = t0$8.length, t1$4 === 1 && (t2$2 = getProjector(RegExp("^\\\\(?:([^\\\\]*)\\\\)?(.*)$", ""))(t0$8[0]), t2$2[0] && (t3$1 = t2$2[1], t4$0 = t3$1.length, t4$0 === 3)))) {
        t3$1[0];
        t5$0 = t3$1[1];
        flag$0 = t5$0;
        ph$5$0 = t5$0;
        name$0 = t3$1[2];
        if (ph$5$0 === "maybe") {
          return ["put", name$0, true];
        } else {
          return ["put", name$0, false];
        }
      } else {
        if (getChecker(Text$0)(ph$4$0)) {
          specificity$0 = specificity$0 + 100;
          return ["eq", expr$0];
        } else {
          if (getChecker(Oper$0)(ph$4$0)) {
            return ["eq", expr$0];
          } else {
            t0$8 = ph$4$0;
            if (getChecker(Seq$0)(t0$8) && (t1$4 = t0$8.length, t1$4 >= 0 && (args$0 = Array.prototype.slice.call(t0$8, 0), ___hasprop(t0$8, "operator")))) {
              operator$0 = t0$8.operator;
              specificity$0 = specificity$0 + 1;
              if (!top$0) {
                top$0 = operator$0;
                top$0;
              }
              return ["seq"].concat((acc$3 = [], temp$5 = null, m$5 = null, (function() {
                $6: for (var _iterator = args$0[Symbol.iterator](),
                    _step; !(_step = _iterator.next()).done; ) {
                  m$5 = _step.value;
                  var arg$0 = undefined;
                  arg$0 = m$5;
                  temp$5 = helper$0(arg$0, opts$0);
                  acc$3.push(temp$5);
                }
              })(), acc$3));
            } else {
              return ___match_error(ph$4$0, "Seq? {*args} and {=> operator}");
            }
          }
        }
      }
    };
    rval$1 = helper$0(ast$0, {shed: true});
    return [top$0, rval$1, specificity$0];
  } else {
    t1$3 = t0$6.length;
    if (t1$3 === 3) {
      top$1 = t0$6[0];
      rval$2 = t0$6[1];
      specificity$1 = t0$6[2];
      return [top$1, rval$2, specificity$1];
    } else {
      return ___match_error(ph$3$0, "{top, rval, specificity}");
    }
  }
};
makeExtractor$0 = function makeExtractor(temp$6$0) {
  var t0$9 = undefined;
  var t1$5 = undefined;
  var t2$3 = undefined;
  var fn$0 = undefined;
  var helper$1 = undefined;
  var top$2 = undefined;
  var tree$0 = undefined;
  var specificity$2 = undefined;
  t0$9 = getProjector(parseSpec$0)(temp$6$0);
  if (t0$9[0] && (t1$5 = t0$9[1], t2$3 = t1$5.length, t2$3 === 3)) {
    top$2 = t1$5[0];
    tree$0 = t1$5[1];
    specificity$2 = t1$5[2];
  } else {
    ___match_error(temp$6$0);
  }
  helper$1 = function helper(temp$7$0, node$0) {
    var t0$10 = undefined;
    var t0$12 = undefined;
    var m$6$0 = undefined;
    var m$8 = undefined;
    var rval$3 = undefined;
    var other$0 = undefined;
    var args$1 = undefined;
    var t0$13 = undefined;
    var m$7$0 = undefined;
    var f$1 = undefined;
    var subtrees$0 = undefined;
    var ph$7$0 = undefined;
    var v$0 = undefined;
    var _maybe$0 = undefined;
    var $$8123$0 = undefined;
    var $$8124$0 = undefined;
    var t0$11 = undefined;
    var t1$6 = undefined;
    var x$5 = undefined;
    var ph$6$0 = undefined;
    t0$10 = temp$7$0;
    x$5 = t0$10;
    ph$6$0 = t0$10;
    t0$11 = ph$6$0;
    t1$6 = t0$11.length;
    if (t1$6 >= 2 && t1$6 <= 3 && t0$11[0] === "put") {
      v$0 = t0$11[1];
      if (2 >= t1$6) {
        _maybe$0 = true;
      } else {
        _maybe$0 = t0$11[2];
      }
      m$6$0 = node$0;
      if (getChecker(Text$0)(m$6$0) && (t0$12 = m$6$0.length, t0$12 === 1 && (m$6$0[0] === "" && !_maybe$0))) {
        return false;
      } else {
        return (function() {
          var $$9113 = {};
          $$9113[v$0] = node$0;
          return $$9113;
        })();
      }
    } else {
      if (t1$6 === 2 && t0$11[0] === "eq") {
        ph$7$0 = t0$11[1];
        if (equal(ph$7$0, node$0)) {
          return {};
        } else {
          return false;
        }
      } else {
        if (t1$6 >= 1 && t0$11[0] === "seq") {
          subtrees$0 = Array.prototype.slice.call(t0$11, 1);
          m$7$0 = node$0;
          if (getChecker(Seq$0)(m$7$0) && (t0$13 = m$7$0.length, t0$13 >= 0 && (args$1 = Array.prototype.slice.call(m$7$0, 0), equal(subtrees$0.length, args$1.length)))) {
            rval$3 = {};
            m$8 = null;
            $7: for (var _iterator = zip(subtrees$0, args$1)[Symbol.iterator](),
                _step; !(_step = _iterator.next()).done; ) {
              m$8 = _step.value;
              var vars$0 = undefined;
              var m$9$0 = undefined;
              var subtree$0 = undefined;
              var arg$1 = undefined;
              var t0$14 = undefined;
              var t1$7 = undefined;
              t0$14 = m$8;
              if (Array.isArray(t0$14) && (t1$7 = t0$14.length, t1$7 === 2)) {
                subtree$0 = t0$14[0];
                arg$1 = t0$14[1];
                m$9$0 = helper$1(subtree$0, arg$1);
                if (!m$9$0) {
                  return false;
                } else {
                  vars$0 = m$9$0;
                  __amp____colon__(rval$3, vars$0);
                }
              } else {
                ___match_error(m$8);
              }
            }
            return rval$3;
          } else {
            other$0 = m$7$0;
            return false;
          }
        } else {
          if (t1$6 === 2 && t0$11[0] === "fn") {
            f$1 = t0$11[1];
            return f$1(node$0);
          } else {
            return ___match_error(ph$6$0, "#fn{f}");
          }
        }
      }
    }
  };
  fn$0 = function fn(node$1) {
    return helper$1(tree$0, node$1);
  };
  return [top$2, specificity$2, fn$0];
};
ruleBank$0 = {};
extractor$0 = function extractor() {
  var m$11 = undefined;
  var acc$4 = undefined;
  var temp$8 = undefined;
  var extractors$0 = undefined;
  var f$2 = undefined;
  var $targ$2 = undefined;
  var rules$0 = undefined;
  var t0$15 = undefined;
  var m$10$0 = undefined;
  m$10$0 = arguments;
  t0$15 = m$10$0.length;
  if (t0$15 >= 0) {
    rules$0 = Array.prototype.slice.call(m$10$0, 0);
    acc$4 = [];
    temp$8 = null;
    m$11 = null;
    $8: for (var _iterator = rules$0[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$11 = _step.value;
      var t0$16 = undefined;
      var t1$8 = undefined;
      var $targ$3 = undefined;
      var ex$0 = undefined;
      var $targ$4 = undefined;
      var rule$1 = undefined;
      var rule$0 = undefined;
      rule$0 = m$11;
      if (send(ruleBank$0, rule$0)) {
        temp$8 = send(ruleBank$0, rule$0);
        acc$4.push(temp$8);
      } else {
        rule$1 = m$11;
        $targ$3 = makeExtractor$0(rule$1);
        t0$16 = $targ$3;
        if (Array.isArray(t0$16) && (t1$8 = t0$16.length, t1$8 === 3)) {
          t0$16[0];
          t0$16[1];
          ex$0 = t0$16[2];
        } else {
          ___match_error($targ$3, "{_, _, ex}");
        }
        $targ$4 = ex$0;
        ruleBank$0[rule$1] = $targ$4;
        temp$8 = ex$0;
        acc$4.push(temp$8);
      }
    }
    extractors$0 = acc$4;
    f$2 = function f(node$2) {
      var m$12 = undefined;
      m$12 = null;
      $9: for (var _iterator2 = extractors$0[Symbol.iterator](),
          _step2; !(_step2 = _iterator2.next()).done; ) {
        m$12 = _step2.value;
        var res$1 = undefined;
        var ex$1 = undefined;
        ex$1 = m$12;
        if ((res$1 = ex$1(node$2), res$1)) {
          return res$1;
        }
      }
      return false;
    };
    $targ$2 = function(x$6) {
      var values$0 = undefined;
      var m$13$0 = undefined;
      m$13$0 = f$2(x$6);
      if (m$13$0 === false) {
        return [false, null];
      } else {
        values$0 = m$13$0;
        return [true, values$0];
      }
    };
    f$2[":::project"] = $targ$2;
    return f$2;
  } else {
    return ___match_error(m$10$0, "{*rules}");
  }
};
extract$0 = function extract(ph$8$0) {
  var m$14 = undefined;
  var acc$5 = undefined;
  var temp$9 = undefined;
  var newargs$0 = undefined;
  var other$1 = undefined;
  var args$2 = undefined;
  var t0$17 = undefined;
  var t1$9 = undefined;
  t0$17 = ph$8$0;
  if (getChecker(Seq$0)(t0$17) && (t1$9 = t0$17.length, t1$9 >= 0)) {
    args$2 = Array.prototype.slice.call(t0$17, 0);
    acc$5 = [];
    temp$9 = null;
    m$14 = null;
    $10: for (var _iterator = enumerate(args$2)[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$14 = _step.value;
      var i$1 = undefined;
      var arg$2 = undefined;
      var t0$18 = undefined;
      var t1$10 = undefined;
      t0$18 = m$14;
      if (Array.isArray(t0$18) && (t1$10 = t0$18.length, t1$10 === 2 && (i$1 = t0$18[0], arg$2 = t0$18[1], equal(i$1 % 2, 0)))) {
        temp$9 = arg$2;
        acc$5.push(temp$9);
      } else {
        false;
      }
    }
    newargs$0 = acc$5;
    return send(Seq$0, [args$2[1][0]].concat(newargs$0));
  } else {
    other$1 = ph$8$0;
    return other$1;
  }
};
collapse$0 = function collapse(operator$1, ph$9$0) {
  var node$3 = undefined;
  var l$0 = undefined;
  var r$0 = undefined;
  var t0$19 = undefined;
  var t1$11 = undefined;
  var t2$4 = undefined;
  t0$19 = getProjector(extract$0)(ph$9$0);
  if (t0$19[0] && (t1$11 = t0$19[1], getChecker(Seq$0)(t1$11) && (t2$4 = t1$11.length, t2$4 === 3 && t1$11[0] === operator$1))) {
    l$0 = t1$11[1];
    r$0 = t1$11[2];
    return [l$0].concat(collapse$0(operator$1, r$0));
  } else {
    node$3 = ph$9$0;
    return [node$3];
  }
};
statements$0 = function statements(temp$10$0) {
  var t0$20 = undefined;
  var t1$12 = undefined;
  var m$15 = undefined;
  var acc$6 = undefined;
  var temp$11 = undefined;
  var xs$0 = undefined;
  var $$8484$0 = undefined;
  var t0$21 = undefined;
  var t1$13 = undefined;
  var t2$5 = undefined;
  var t3$2 = undefined;
  var node$4 = undefined;
  var ph$10$0 = undefined;
  t0$20 = getProjector(shedIndent$0)(temp$10$0);
  if (t0$20[0]) {
    t1$12 = t0$20[1];
    node$4 = t1$12;
    ph$10$0 = t1$12;
  } else {
    ___match_error(temp$10$0);
  }
  t0$21 = ph$10$0;
  if (getChecker(Seq$0)(t0$21) && (t1$13 = t0$21.length, t1$13 >= 2 && (t0$21[0], t2$5 = t0$21[1], getChecker(Oper$0)(t2$5) && (t3$2 = t2$5.length, t3$2 === 1 && t2$5[0] === "NL")))) {
    Array.prototype.slice.call(t0$21, 2);
    acc$6 = [];
    temp$11 = null;
    m$15 = null;
    $11: for (var _iterator = enumerate(node$4)[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$15 = _step.value;
      var i$2 = undefined;
      var x$7 = undefined;
      var t0$22 = undefined;
      var t1$14 = undefined;
      t0$22 = m$15;
      if (Array.isArray(t0$22) && (t1$14 = t0$22.length, t1$14 === 2 && (i$2 = t0$22[0], x$7 = t0$22[1], equal(i$2 % 2, 0)))) {
        temp$11 = statements$0(x$7);
        acc$6.push(temp$11);
      } else {
        false;
      }
    }
    xs$0 = acc$6;
    return xs$0.reduce(function(x$8, y$0) {
      return x$8.concat(y$0);
    });
  } else {
    if (getChecker(Text$0)(t0$21) && (t1$13 = t0$21.length, t1$13 === 1 && t0$21[0] === "")) {
      return [];
    } else {
      return [node$4];
    }
  }
};
shed$0 = function shed() {
  var lw$0 = undefined;
  var rw$0 = undefined;
  var loc$0 = undefined;
  var node$5 = undefined;
  var ob$0 = undefined;
  var mid$0 = undefined;
  var cb$0 = undefined;
  var t0$24 = undefined;
  var t1$15 = undefined;
  var t2$6 = undefined;
  var t3$3 = undefined;
  var t4$1 = undefined;
  var t5$1 = undefined;
  var ph$12$0 = undefined;
  var n$0 = undefined;
  var t0$23 = undefined;
  var m$16$0 = undefined;
  m$16$0 = arguments;
  t0$23 = m$16$0.length;
  if (t0$23 >= 1 && t0$23 <= 2) {
    ph$12$0 = m$16$0[0];
    if (1 >= t0$23) {
      n$0 = 1;
    } else {
      n$0 = m$16$0[1];
    }
    t0$24 = ph$12$0;
    if (getChecker(Seq$0)(t0$24) && (t1$15 = t0$24.length, t1$15 === 5 && (t0$24[0], t2$6 = t0$24[1], ob$0 = t2$6, getChecker(Oper$0)(t2$6) && (t3$3 = t2$6.length, t3$3 === 1 && (t2$6[0] === "[" && (mid$0 = t0$24[2], t4$1 = t0$24[3], cb$0 = t4$1, getChecker(Oper$0)(t4$1) && (t5$1 = t4$1.length, t5$1 === 1 && t4$1[0] === "]"))))))) {
      t0$24[4];
      if (n$0 > 1) {
        return shed$0(mid$0, n$0 - 1);
      } else {
        lw$0 = raw$0(ob$0).split("[").pop();
        rw$0 = raw$0(cb$0).split("]").shift();
        loc$0 = mid$0.location;
        return __amp__(mid$0, {location: Location$0(loc$0.source, loc$0.start - lw$0.length, loc$0.end + rw$0.length)});
      }
    } else {
      node$5 = ph$12$0;
      return node$5;
    }
  } else {
    return ___match_error(m$16$0, "{match, n = 1}");
  }
};
shedAll$0 = function shedAll(node$6) {
  return shed$0(node$6, 1 / 0);
};
shedIndent$0 = function shedIndent(temp$12$0) {
  var t0$25 = undefined;
  var rest$0 = undefined;
  var x$9 = undefined;
  var $$8719$0 = undefined;
  var $$8720$0 = undefined;
  var t0$27 = undefined;
  var t1$17 = undefined;
  var t2$8 = undefined;
  var t3$5 = undefined;
  var t4$3 = undefined;
  var m$17$0 = undefined;
  var node$8 = undefined;
  var mid$1 = undefined;
  var t0$26 = undefined;
  var t1$16 = undefined;
  var t2$7 = undefined;
  var t3$4 = undefined;
  var t4$2 = undefined;
  var t5$2 = undefined;
  var node$7 = undefined;
  var ph$13$0 = undefined;
  t0$25 = temp$12$0;
  node$7 = t0$25;
  ph$13$0 = t0$25;
  t0$26 = ph$13$0;
  if (getChecker(Seq$0)(t0$26) && (t1$16 = t0$26.length, t1$16 === 5 && (t0$26[0], t2$7 = t0$26[1], getChecker(Oper$0)(t2$7) && (t3$4 = t2$7.length, t3$4 === 1 && (t2$7[0] === "I(" && (mid$1 = t0$26[2], t4$2 = t0$26[3], getChecker(Oper$0)(t4$2) && (t5$2 = t4$2.length, t5$2 === 1 && t4$2[0] === ")I"))))))) {
    t0$26[4];
    m$17$0 = mid$1;
    if (($$8719$0 = getChecker(Seq$0)(m$17$0)) && (t0$27 = m$17$0.length, t0$27 === 3 && (t1$17 = m$17$0[0], getChecker(Text$0)(t1$17) && (t2$8 = t1$17.length, t2$8 === 1 && (t1$17[0] === "" && (t3$5 = m$17$0[1], getChecker(Oper$0)(t3$5) && (t4$3 = t3$5.length, t4$3 === 1 && t3$5[0] === "NL"))))))) {
      x$9 = m$17$0[2];
      return x$9;
    } else {
      if ($$8719$0 && (t0$27 >= 2 && (t1$17 = m$17$0[0], getChecker(Text$0)(t1$17) && (t2$8 = t1$17.length, t2$8 === 1 && (t1$17[0] === "" && (t3$5 = m$17$0[1], getChecker(Oper$0)(t3$5) && (t4$3 = t3$5.length, t4$3 === 1 && t3$5[0] === "NL"))))))) {
        rest$0 = Array.prototype.slice.call(m$17$0, 2);
        return __amp____colon__(send(Seq$0, rest$0), mid$1);
      } else {
        return mid$1;
      }
    }
  } else {
    node$8 = ph$13$0;
    return node$8;
  }
};
mergeable$0 = function mergeable() {
  var merge$0 = undefined;
  var node$9 = undefined;
  var $targ$5 = undefined;
  var $targ$6 = undefined;
  var tag$0 = undefined;
  var child$0 = undefined;
  var block$0 = undefined;
  var t0$28 = undefined;
  var m$18$0 = undefined;
  m$18$0 = arguments;
  t0$28 = m$18$0.length;
  if (t0$28 >= 2 && t0$28 <= 3) {
    tag$0 = m$18$0[0];
    child$0 = m$18$0[1];
    if (2 >= t0$28) {
      block$0 = true;
    } else {
      block$0 = m$18$0[2];
    }
    merge$0 = function merge(temp$13$0) {
      var t0$29 = undefined;
      var other$2 = undefined;
      var tags$0 = undefined;
      var props$0 = undefined;
      var children$0 = undefined;
      var t0$30 = undefined;
      var t1$18 = undefined;
      var t2$9 = undefined;
      var node$10 = undefined;
      var ph$14$0 = undefined;
      t0$29 = temp$13$0;
      node$10 = t0$29;
      ph$14$0 = t0$29;
      t0$30 = getProjector(ENode([tag$0], {}, []))(ph$14$0);
      if (t0$30[0] && (t1$18 = t0$30[1], t2$9 = t1$18.length, t2$9 === 3)) {
        tags$0 = t1$18[0];
        props$0 = t1$18[1];
        children$0 = t1$18[2];
        this.children = this.children.concat(children$0);
        return this;
      } else {
        other$2 = ph$14$0;
        return false;
      }
    };
    node$9 = ENode([tag$0], {}, child$0);
    $targ$5 = block$0;
    node$9.block = $targ$5;
    $targ$6 = merge$0;
    node$9.merge = $targ$6;
    return node$9;
  } else {
    return ___match_error(m$18$0, "{tag, child, block = true}");
  }
};
elems$0 = "\n      address article aside audio\n      blockquote\n      canvas\n      dd div dl\n      fieldset figcaption figure footer form\n      h1 h2 h3 h4 h5 h6 header hgroup hr\n      main\n      nav noscript\n      ol output\n      p pre\n      section\n      table tfoot\n      ul\n      video\n      html head body link script\n      raw top\n   ";
blockElements$0 = object((acc$7 = [], temp$14 = null, m$19 = null, (function() {
  $12: for (var _iterator = elems$0.split(RegExp("[\\n ]+", ""))[Symbol.iterator](),
      _step; !(_step = _iterator.next()).done; ) {
    m$19 = _step.value;
    var x$10 = undefined;
    x$10 = m$19;
    temp$14 = [x$10, true];
    acc$7.push(temp$14);
  }
})(), acc$7));
normalize$0 = function normalize(temp$15$0) {
  var t0$31 = undefined;
  var t0$33 = undefined;
  var t0$34 = undefined;
  var m$20 = undefined;
  var ch$0 = undefined;
  var t0$35 = undefined;
  var t1$20 = undefined;
  var m$21 = undefined;
  var res$2 = undefined;
  var children$2 = undefined;
  var tags$1 = undefined;
  var ph$16$0 = undefined;
  var props$1 = undefined;
  var children$1 = undefined;
  var $$8901$0 = undefined;
  var $$8902$0 = undefined;
  var $$8903$0 = undefined;
  var $$8904$0 = undefined;
  var t0$32 = undefined;
  var t1$19 = undefined;
  var t2$10 = undefined;
  var bridge$$8895$0 = undefined;
  var node$11 = undefined;
  var ph$15$0 = undefined;
  t0$31 = temp$15$0;
  node$11 = t0$31;
  ph$15$0 = t0$31;
  t0$32 = ph$15$0;
  if (($$8902$0 = getChecker(ENode)(t0$32)) && (($$8903$0 = ___hasprop(t0$32, "tags")) && (t1$19 = t0$32.tags, Array.isArray(t1$19) && (t2$10 = t1$19.length, t2$10 === 1 && (t1$19[0] === "p" && (___hasprop(t0$32, "props") && (equal(t0$32.props, {}) && (___hasprop(t0$32, "children") && (bridge$$8895$0 = t0$32.children, Array.isArray(bridge$$8895$0) && (t0$33 = bridge$$8895$0.length, t0$33 === 1 && getChecker(RegExp("^[\\n ]*$", ""))(bridge$$8895$0[0])) || Array.isArray(bridge$$8895$0) && (t0$34 = bridge$$8895$0.length, t0$34 === 0)))))))))) {
    return "";
  } else {
    if ($$8903$0 && (tags$1 = t1$19, ph$16$0 = t1$19, ___hasprop(t0$32, "props") && (t2$10 = t0$32.props, equal(t2$10, {}) && (props$1 = t2$10, ___hasprop(t0$32, "children"))))) {
      children$1 = t0$32.children;
      t0$35 = ph$16$0;
      t1$20 = t0$35.length;
      if (t1$20 === 1 && t0$35[0] === "p") {
        ch$0 = normalize$0(children$1);
        m$20 = null;
        $13: for (var _iterator = ch$0[Symbol.iterator](),
            _step; !(_step = _iterator.next()).done; ) {
          m$20 = _step.value;
          var tags$2 = undefined;
          var t0$36 = undefined;
          t0$36 = m$20;
          if (getChecker(ENode)(t0$36) && (___hasprop(t0$36, "tags") && (tags$2 = t0$36.tags, tags$2.some(function(t$0) {
            return send(blockElements$0, t$0);
          })))) {
            return ch$0;
          } else {
            undefined;
          }
        }
        return ENode(tags$1, props$1, ch$0);
      } else {
        return ENode(tags$1, props$1, normalize$0(children$1));
      }
    } else {
      if (Array.isArray(t0$32)) {
        children$2 = t0$32;
        res$2 = [];
        m$21 = null;
        $14: for (var _iterator2 = children$2[Symbol.iterator](),
            _step2; !(_step2 = _iterator2.next()).done; ) {
          m$21 = _step2.value;
          var other$3 = undefined;
          var a$0 = undefined;
          var t0$38 = undefined;
          var ph$17$0 = undefined;
          var t0$37 = undefined;
          t0$37 = getProjector(normalize$0)(m$21);
          if (t0$37[0]) {
            ph$17$0 = t0$37[1];
            t0$38 = ph$17$0;
            if (Array.isArray(t0$38)) {
              a$0 = t0$38;
              res$2 = res$2.concat(a$0);
            } else {
              other$3 = ph$17$0;
              res$2.push(other$3);
            }
          } else {
            ___match_error(m$21);
          }
        }
        return res$2;
      } else {
        return node$11;
      }
    }
  }
};
$targ$7 = next$0;
exports.next = $targ$7;
$targ$8 = may__minus__fail$0;
exports.mayFail = $targ$8;
$targ$9 = raw$0;
exports.raw = $targ$9;
$targ$10 = rawRelative$0;
exports.rawRelative = $targ$10;
$targ$11 = dedent$0;
exports.dedent = $targ$11;
$targ$12 = code$0;
exports.code = $targ$12;
$targ$13 = parseSpec$0;
exports.parseSpec = $targ$13;
$targ$14 = makeExtractor$0;
exports.makeExtractor = $targ$14;
$targ$15 = extractor$0;
exports.extractor = $targ$15;
$targ$16 = extract$0;
exports.extract = $targ$16;
$targ$17 = collapse$0;
exports.collapse = $targ$17;
$targ$18 = statements$0;
exports.statements = $targ$18;
$targ$19 = shed$0;
exports.shed = $targ$19;
$targ$20 = shedAll$0;
exports.shedAll = $targ$20;
$targ$21 = shedIndent$0;
exports.shedIndent = $targ$21;
$targ$22 = mergeable$0;
exports.mergeable = $targ$22;
$targ$23 = normalize$0;
exports.normalize = $targ$23;
void 0;
