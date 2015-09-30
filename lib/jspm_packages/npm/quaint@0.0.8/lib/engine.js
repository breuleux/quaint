/* */ 
(function(process) {
  "use strict";
  require("earlgrey-runtime/5");
  var $targ$4 = undefined;
  var accum$0 = undefined;
  var $targ$5 = undefined;
  var accum$1 = undefined;
  var $targ$32 = undefined;
  var accum$2 = undefined;
  var $targ$33 = undefined;
  var accum$3 = undefined;
  var $targ$34 = undefined;
  var accum$4 = undefined;
  var $targ$35 = undefined;
  var accum$5 = undefined;
  var $targ$42 = undefined;
  var $targ$43 = undefined;
  var $targ$44 = undefined;
  var $targ$45 = undefined;
  var opg$0 = undefined;
  var Source$0 = undefined;
  var lang$0 = undefined;
  var parse$0 = undefined;
  var ast$0 = undefined;
  var QAst$0 = undefined;
  var Text$0 = undefined;
  var Oper$0 = undefined;
  var Seq$0 = undefined;
  var Into$0 = undefined;
  var Deferred$0 = undefined;
  var tools$0 = undefined;
  var makeExtractor$0 = undefined;
  var normalize$0 = undefined;
  var may__minus__fail$0 = undefined;
  var doc$0 = undefined;
  var SeqDocument$0 = undefined;
  var util$0 = undefined;
  var insertSorted$0 = undefined;
  var transform$0 = undefined;
  var html$0 = undefined;
  var dom$0 = undefined;
  var Dispatcher$0 = undefined;
  var Engine$0 = undefined;
  var $targ$0 = undefined;
  var Spec$0 = undefined;
  var $targ$1 = undefined;
  var processDocuments$0 = undefined;
  opg$0 = require("opg");
  Source$0 = getProperty(opg$0, "Source", "opg");
  lang$0 = require("./lang");
  parse$0 = getProperty(lang$0, "parse", "lang");
  ast$0 = require("./ast");
  QAst$0 = getProperty(ast$0, "QAst", "ast");
  Text$0 = getProperty(ast$0, "Text", "ast");
  Oper$0 = getProperty(ast$0, "Oper", "ast");
  Seq$0 = getProperty(ast$0, "Seq", "ast");
  Into$0 = getProperty(ast$0, "Into", "ast");
  Deferred$0 = getProperty(ast$0, "Deferred", "ast");
  tools$0 = require("./tools");
  makeExtractor$0 = getProperty(tools$0, "makeExtractor", "tools");
  normalize$0 = getProperty(tools$0, "normalize", "tools");
  may__minus__fail$0 = getProperty(tools$0, "mayFail", "tools");
  doc$0 = require("./doc");
  SeqDocument$0 = getProperty(doc$0, "SeqDocument", "doc");
  util$0 = require("./util");
  insertSorted$0 = getProperty(util$0, "insertSorted", "util");
  transform$0 = getProperty(util$0, "transform", "util");
  html$0 = require("earlgrey-runtime/std/html");
  dom$0 = require("earlgrey-runtime/std/dom");
  Dispatcher$0 = function Dispatcher() {
    var $targ$2 = undefined;
    var __at___$0 = undefined;
    if (!getChecker(Dispatcher$0)(this)) {
      __at___$0 = Object.create(Dispatcher$0.prototype);
    } else {
      __at___$0 = this;
    }
    $targ$2 = [];
    __at___$0.dispatch = $targ$2;
    return __at___$0;
  };
  Dispatcher$0.prototype.handlers = regeneratorRuntime.mark(function handlers(node$0) {
    var _this = this;
    var m$1,
        candidates$0,
        m$0$0,
        key$0,
        __at___$1,
        self$0,
        _iterator,
        _step,
        parts$0,
        t0$0,
        m$2$0,
        c$0;
    return regeneratorRuntime.wrap(function handlers$(context$1$0) {
      while (1)
        switch (context$1$0.prev = context$1$0.next) {
          case 0:
            m$1 = undefined;
            candidates$0 = undefined;
            m$0$0 = undefined;
            key$0 = undefined;
            __at___$1 = undefined;
            self$0 = undefined;
            __at___$1 = _this;
            self$0 = _this;
            key$0 = node$0.operator || "";
            if (!key$0) {
              console.error("Node lacks an operator key. That may be indicative of a bug.");
            }
            m$0$0 = send(send(__at___$1, "dispatch", true), key$0);
            if (!(m$0$0 === void 0)) {
              context$1$0.next = 15;
              break;
            }
            return context$1$0.abrupt("return", false);
          case 15:
            candidates$0 = m$0$0;
            m$1 = null;
            _iterator = candidates$0[Symbol.iterator]();
          case 18:
            if ((_step = _iterator.next()).done) {
              context$1$0.next = 36;
              break;
            }
            m$1 = _step.value;
            parts$0 = undefined;
            t0$0 = undefined;
            m$2$0 = undefined;
            c$0 = undefined;
            c$0 = m$1;
            m$2$0 = node$0;
            t0$0 = getProjector(c$0)(m$2$0);
            if (!t0$0[0]) {
              context$1$0.next = 33;
              break;
            }
            parts$0 = t0$0[1];
            context$1$0.next = 31;
            return [parts$0, c$0];
          case 31:
            context$1$0.next = 34;
            break;
          case 33:
            undefined;
          case 34:
            context$1$0.next = 18;
            break;
          case 36:
            return context$1$0.abrupt("return", false);
          case 37:
          case "end":
            return context$1$0.stop();
        }
    }, handlers, this);
  });
  Dispatcher$0.prototype.register = function register() {
    var key$1 = undefined;
    var l$0 = undefined;
    var rule$0 = undefined;
    var fn$0 = undefined;
    var handler$0 = undefined;
    var $$5378$0 = undefined;
    var $$5379$0 = undefined;
    var t0$2 = undefined;
    var t1$0 = undefined;
    var t2$0 = undefined;
    var ph$1$0 = undefined;
    var t0$1 = undefined;
    var m$3$0 = undefined;
    var __at___$2 = undefined;
    var self$1 = undefined;
    __at___$2 = this;
    self$1 = this;
    m$3$0 = arguments;
    t0$1 = m$3$0.length;
    if (t0$1 >= 0) {
      ph$1$0 = Array.prototype.slice.call(m$3$0, 0);
      t0$2 = ph$1$0;
      t1$0 = t0$2.length;
      if (t1$0 === 1 && (t2$0 = t0$2[0], getChecker(Spec$0)(t2$0))) {
        handler$0 = t2$0;
        key$1 = handler$0.operator;
        l$0 = __at___$2.dispatch[key$1] = send(send(__at___$2, "dispatch", true), key$1) || [];
        return insertSorted$0(l$0, handler$0, function(temp$0$0, temp$1$0) {
          var t0$3 = undefined;
          var t1$1 = undefined;
          var t0$4 = undefined;
          var s1$0 = undefined;
          var ph$2$0 = undefined;
          var s2$0 = undefined;
          t0$3 = temp$0$0;
          if (___hasprop(t0$3, "specificity")) {
            t1$1 = t0$3.specificity;
            s1$0 = t1$1;
            ph$2$0 = t1$1;
          } else {
            ___match_error(temp$0$0);
          }
          t0$4 = temp$1$0;
          if (___hasprop(t0$4, "specificity")) {
            s2$0 = t0$4.specificity;
          } else {
            ___match_error(temp$1$0);
          }
          if (ph$2$0 > s2$0) {
            return -1;
          } else {
            return 1;
          }
        });
      } else {
        if (t1$0 === 2) {
          rule$0 = t0$2[0];
          fn$0 = t0$2[1];
          return __at___$2.register(Spec$0(rule$0, fn$0));
        } else {
          return ___match_error(ph$1$0, "{rule, fn}");
        }
      }
    } else {
      return ___match_error(m$3$0, "{*match}");
    }
  };
  Dispatcher$0.prototype.clone = function clone() {
    var m$4 = undefined;
    var acc$0 = undefined;
    var temp$2 = undefined;
    var d$0 = undefined;
    var $targ$3 = undefined;
    var __at___$3 = undefined;
    var self$2 = undefined;
    __at___$3 = this;
    self$2 = this;
    d$0 = Dispatcher$0();
    $targ$3 = object((acc$0 = [], temp$2 = null, m$4 = null, (function() {
      $1: for (var _iterator = items(__at___$3.dispatch)[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$4 = _step.value;
        var key$2 = undefined;
        var l$1 = undefined;
        var t0$5 = undefined;
        var t1$2 = undefined;
        t0$5 = m$4;
        if (Array.isArray(t0$5) && (t1$2 = t0$5.length, t1$2 === 2)) {
          key$2 = t0$5[0];
          l$1 = t0$5[1];
          temp$2 = [key$2, l$1.slice(0)];
          acc$0.push(temp$2);
        } else {
          ___match_error(m$4);
        }
      }
    })(), acc$0));
    d$0.dispatch = $targ$3;
    return d$0;
  };
  __amp____colon__(Dispatcher$0, __amp____colon__(($targ$4 = "Dispatcher", accum$0 = {}, accum$0["::name"] = $targ$4, accum$0), ($targ$5 = true, accum$1 = {}, accum$1["::egclass"] = $targ$5, accum$1)));
  Engine$0 = function Engine(temp$3$0) {
    var t$0 = undefined;
    var t0$6 = undefined;
    var $targ$6 = undefined;
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
    var plugins$0 = undefined;
    var __at___$4 = undefined;
    if (!getChecker(Engine$0)(this)) {
      __at___$4 = Object.create(Engine$0.prototype);
    } else {
      __at___$4 = this;
    }
    t0$6 = [true, (t$0 = temp$3$0, Array.isArray(t$0) ? t$0 : [t$0])];
    if (t0$6[0]) {
      plugins$0 = t0$6[1];
    } else {
      ___match_error(temp$3$0);
    }
    $targ$6 = true;
    __at___$4.top = $targ$6;
    $targ$7 = true;
    __at___$4.isQuaintEngine = $targ$7;
    $targ$8 = Dispatcher$0();
    __at___$4.dispatch = $targ$8;
    $targ$9 = {};
    __at___$4.documents = $targ$9;
    $targ$10 = [];
    __at___$4.regexps = $targ$10;
    $targ$11 = [];
    __at___$4.methods = $targ$11;
    $targ$12 = {};
    __at___$4.macros = $targ$12;
    $targ$13 = {};
    __at___$4.resolvers = $targ$13;
    send(send(__at___$4, "plug", true), plugins$0);
    $targ$14 = tools$0;
    __at___$4.tools = $targ$14;
    $targ$15 = null;
    __at___$4.template = $targ$15;
    $targ$16 = Deferred$0;
    __at___$4.deferred = $targ$16;
    $targ$17 = Into$0;
    __at___$4.into = $targ$17;
    return __at___$4;
  };
  Engine$0.prototype.forkPlug = function forkPlug() {
    var plugins$1 = undefined;
    var t0$7 = undefined;
    var m$5$0 = undefined;
    var __at___$5 = undefined;
    var self$3 = undefined;
    __at___$5 = this;
    self$3 = this;
    m$5$0 = arguments;
    t0$7 = m$5$0.length;
    if (t0$7 >= 0) {
      plugins$1 = Array.prototype.slice.call(m$5$0, 0);
      return send(send(__at___$5.fork(), "plug", true), plugins$1);
    } else {
      return ___match_error(m$5$0, "{*plugins}");
    }
  };
  Engine$0.prototype.plug = function plug() {
    var m$7 = undefined;
    var plugins$2 = undefined;
    var t0$8 = undefined;
    var m$6$0 = undefined;
    var __at___$6 = undefined;
    var self$4 = undefined;
    __at___$6 = this;
    self$4 = this;
    m$6$0 = arguments;
    t0$8 = m$6$0.length;
    if (t0$8 >= 0) {
      plugins$2 = Array.prototype.slice.call(m$6$0, 0);
      m$7 = null;
      $2: for (var _iterator = plugins$2[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$7 = _step.value;
        var install__minus__to$0 = undefined;
        var f$0 = undefined;
        var $$5670$0 = undefined;
        var t0$10 = undefined;
        var plugin$0 = undefined;
        var ph$3$0 = undefined;
        var t0$9 = undefined;
        t0$9 = m$7;
        plugin$0 = t0$9;
        ph$3$0 = t0$9;
        t0$10 = ph$3$0;
        if (typeof t0$10 === "function") {
          f$0 = t0$10;
          f$0(__at___$6);
        } else {
          if (___hasprop(t0$10, "installTo")) {
            install__minus__to$0 = t0$10.installTo;
            plugin$0.installTo(__at___$6);
          } else {
            ___match_error(ph$3$0);
          }
        }
      }
      return __at___$6;
    } else {
      return ___match_error(m$6$0, "{*plugins}");
    }
  };
  $targ$0 = function(temp$4$0) {
    var t0$11 = undefined;
    var t0$13 = undefined;
    var t0$14 = undefined;
    var l$2 = undefined;
    var r$0 = undefined;
    var f$1 = undefined;
    var result$0 = undefined;
    var bridge$$5708$0 = undefined;
    var bridge$$5707$0 = undefined;
    var e$0 = undefined;
    var x$0 = undefined;
    var parts$1 = undefined;
    var t$1 = undefined;
    var $$5710$0 = undefined;
    var bridge$$5701$0 = undefined;
    var t0$12 = undefined;
    var t1$3 = undefined;
    var bridge$$5704$0 = undefined;
    var bridge$$5706$0 = undefined;
    var node$1 = undefined;
    var ph$4$0 = undefined;
    var __at___$7 = undefined;
    var self$5 = undefined;
    __at___$7 = this;
    self$5 = this;
    t0$11 = temp$4$0;
    node$1 = t0$11;
    ph$4$0 = t0$11;
    bridge$$5701$0 = ph$4$0;
    if (getChecker(Text$0)(bridge$$5701$0) && (t0$13 = bridge$$5701$0.length, t0$13 === 1 && (t$1 = bridge$$5701$0[0], true)) || getChecker(Oper$0)(bridge$$5701$0) && (t0$14 = bridge$$5701$0.length, t0$14 === 1 && (t$1 = bridge$$5701$0[0], true))) {
      l$2 = node$1.location;
      r$0 = RegExp("~|\\\\[\\\\~!@#$%^&*_\\-+=<>/?;:.`|(){}\\[\\],.]", "g");
      return node$1.location.text().replace(r$0, function(ph$5$0) {
        var s$0 = undefined;
        if (ph$5$0 === "~") {
          return "";
        } else {
          s$0 = ph$5$0;
          return s$0[1];
        }
      });
    } else {
      t0$12 = ph$4$0;
      if (getChecker(Seq$0)(t0$12) && (t1$3 = t0$12.length, t1$3 >= 0)) {
        parts$1 = Array.prototype.slice.call(t0$12, 0);
        f$1 = function f() {
          var m$8 = undefined;
          var m$10 = undefined;
          var acc$1 = undefined;
          var temp$5 = undefined;
          m$8 = null;
          $3: for (var _iterator = __at___$7.dispatch.handlers(node$1)[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            m$8 = _step.value;
            var result$1 = undefined;
            var m$9$0 = undefined;
            var extra$0 = undefined;
            var values$0 = undefined;
            var handler$1 = undefined;
            var t0$15 = undefined;
            var t1$4 = undefined;
            t0$15 = m$8;
            if (Array.isArray(t0$15) && (t1$4 = t0$15.length, t1$4 === 2)) {
              values$0 = t0$15[0];
              handler$1 = t0$15[1];
              extra$0 = {
                _node: node$1,
                _wide: equal(node$1.width, "wide"),
                _op: node$1[1]
              };
              m$9$0 = handler$1.gen(__at___$7, __amp__(extra$0, values$0));
              if (equal(m$9$0, tools$0.next)) {
                undefined;
              } else {
                result$1 = m$9$0;
                return result$1;
              }
            } else {
              ___match_error(m$8);
            }
          }
          return ENode([], {}, (acc$1 = [], temp$5 = null, m$10 = null, (function() {
            $4: for (var _iterator2 = parts$1[Symbol.iterator](),
                _step2; !(_step2 = _iterator2.next()).done; ) {
              m$10 = _step2.value;
              var part$0 = undefined;
              part$0 = m$10;
              temp$5 = __at___$7.gen(part$0);
              acc$1.push(temp$5);
            }
          })(), acc$1));
        };
        result$0 = f$1();
        return result$0;
      } else {
        bridge$$5704$0 = ph$4$0;
        if (bridge$$5704$0 === null || bridge$$5704$0 === void 0) {
          return "";
        } else {
          t0$12 = ph$4$0;
          x$0 = t0$12;
          bridge$$5706$0 = t0$12;
          if ((bridge$$5707$0 = bridge$$5706$0, (bridge$$5708$0 = bridge$$5707$0, getChecker(ENode)(bridge$$5708$0) || Array.isArray(bridge$$5708$0)) || typeof bridge$$5707$0 === "string") || typeof bridge$$5706$0 === "boolean") {
            return x$0;
          } else {
            if (getChecker(Error)(t0$12)) {
              e$0 = t0$12;
              return ENode(["div", ".error"], {id: ENode([], {}, ["ERR", e$0.id || ""]).toString()}, e$0.stack);
            } else {
              return ___match_error(ph$4$0, "Error? e");
            }
          }
        }
      }
    }
  };
  Engine$0.prototype.gen = $targ$0;
  Engine$0.prototype.genFromSource = function(temp$6$0) {
    var t0$16 = undefined;
    var parsed$0 = undefined;
    var node$2 = undefined;
    var src$1 = undefined;
    var text$0 = undefined;
    var $$5909$0 = undefined;
    var t0$17 = undefined;
    var src$0 = undefined;
    var ph$6$0 = undefined;
    var __at___$8 = undefined;
    var self$6 = undefined;
    __at___$8 = this;
    self$6 = this;
    t0$16 = temp$6$0;
    src$0 = t0$16;
    ph$6$0 = t0$16;
    t0$17 = ph$6$0;
    if (typeof t0$17 === "string") {
      text$0 = t0$17;
      return __at___$8.genFromSource(Source$0(text$0, "<quaint>"));
    } else {
      if (getChecker(Source$0)(t0$17)) {
        src$1 = t0$17;
        parsed$0 = parse$0(src$1);
        return __at___$8.gen(parsed$0);
      } else {
        node$2 = ph$6$0;
        return __at___$8.gen(node$2);
      }
    }
  };
  Engine$0.prototype.run = function run(src$2) {
    var generated$0 = undefined;
    var docs$0 = undefined;
    var main$0 = undefined;
    var __at___$9 = undefined;
    var self$7 = undefined;
    __at___$9 = this;
    self$7 = this;
    generated$0 = __at___$9.genFromSource(src$2);
    docs$0 = __at___$9.documents;
    main$0 = processDocuments$0(generated$0, docs$0);
    return __amp____colon__(docs$0, {main: main$0});
  };
  Engine$0.prototype.translate = function translate() {
    var top$0 = undefined;
    var m$16$0 = undefined;
    var contents$1 = undefined;
    var file$0 = undefined;
    var contents$0 = undefined;
    var bridge$$6340$0 = undefined;
    var m$17$0 = undefined;
    var r$3 = undefined;
    var tsrc$0 = undefined;
    var $targ$18 = undefined;
    var finalize$0 = undefined;
    var collapse$0 = undefined;
    var results$0 = undefined;
    var main$1 = undefined;
    var result$2 = undefined;
    var src$3 = undefined;
    var format$0 = undefined;
    var options$0 = undefined;
    var t0$18 = undefined;
    var m$11$0 = undefined;
    var __at___$10 = undefined;
    var self$8 = undefined;
    __at___$10 = this;
    self$8 = this;
    m$11$0 = arguments;
    t0$18 = m$11$0.length;
    if (t0$18 >= 2 && t0$18 <= 3) {
      src$3 = m$11$0[0];
      format$0 = m$11$0[1];
      if (2 >= t0$18) {
        options$0 = {};
      } else {
        options$0 = m$11$0[2];
      }
      finalize$0 = function finalize(ph$7$0, ndone$0) {
        var m$12 = undefined;
        var x$1 = undefined;
        var s$1 = undefined;
        var t0$19 = undefined;
        t0$19 = ph$7$0;
        if (typeof t0$19 === "string") {
          s$1 = t0$19;
          m$12 = null;
          $5: for (var _iterator = enumerate(__at___$10.regexps.slice(ndone$0))[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            var _ret = (function() {
              m$12 = _step.value;
              var parts$2 = undefined;
              var index$0 = undefined;
              var curr$0 = undefined;
              var f$2 = undefined;
              var bridge$$6029$0 = undefined;
              var i$0 = undefined;
              var r$1 = undefined;
              var repl$0 = undefined;
              var ph$8$0 = undefined;
              var t0$20 = undefined;
              var t1$5 = undefined;
              var t2$1 = undefined;
              var t3$0 = undefined;
              var t4$0 = undefined;
              t0$20 = m$12;
              if (Array.isArray(t0$20) && (t1$5 = t0$20.length, t1$5 === 2 && (i$0 = t0$20[0], t2$1 = t0$20[1], Array.isArray(t2$1) && (t3$0 = t2$1.length, t3$0 === 2)))) {
                r$1 = t2$1[0];
                t4$0 = t2$1[1];
                repl$0 = t4$0;
                ph$8$0 = t4$0;
                if (typeof ph$8$0 === "string") {
                  s$1 = s$1.replace(r$1, repl$0);
                  s$1;
                } else {
                  bridge$$6029$0 = ph$8$0;
                  if (typeof bridge$$6029$0 === "function" && (f$2 = bridge$$6029$0, true) || (f$2 = function() {
                    return repl$0;
                  }, true)) {
                    parts$2 = [];
                    index$0 = 0;
                    curr$0 = null;
                    $6: while ((curr$0 = r$1.exec(s$1), curr$0)) {
                      parts$2.push(send(s$1, range(index$0, curr$0.index - 1)));
                      index$0 = curr$0.index + curr$0[0].length;
                      parts$2.push(send(f$2, curr$0));
                      if (!__in__("g", r$1.flags)) {
                        break $6;
                      }
                    }
                    parts$2.push(s$1.slice(index$0));
                    return {v: collapse$0(parts$2, ndone$0 + i$0 + 1)};
                  } else {
                    ___match_error(ph$8$0);
                  }
                }
              } else {
                ___match_error(m$12);
              }
            })();
            if (typeof _ret === "object") {
              return _ret.v;
            }
          }
          return s$1;
        } else {
          x$1 = ph$7$0;
          return x$1;
        }
      };
      collapse$0 = function collapse() {
        var t0$23 = undefined;
        var t1$6 = undefined;
        var m$15 = undefined;
        var acc$2 = undefined;
        var temp$7 = undefined;
        var fn$1 = undefined;
        var r$2 = undefined;
        var x$5 = undefined;
        var tags$0 = undefined;
        var props$0 = undefined;
        var children$2 = undefined;
        var children$0 = undefined;
        var bridge$$6122$0 = undefined;
        var t0$22 = undefined;
        var ph$10$0 = undefined;
        var ndone$1 = undefined;
        var t0$21 = undefined;
        var m$13$0 = undefined;
        m$13$0 = arguments;
        t0$21 = m$13$0.length;
        if (t0$21 >= 1 && t0$21 <= 2) {
          ph$10$0 = m$13$0[0];
          if (1 >= t0$21) {
            ndone$1 = 0;
          } else {
            ndone$1 = m$13$0[1];
          }
          bridge$$6122$0 = ph$10$0;
          if (getChecker(ENode)(bridge$$6122$0) && (___hasprop(bridge$$6122$0, "tags") && (t0$23 = bridge$$6122$0.tags, Array.isArray(t0$23) && (t1$6 = t0$23.length, t1$6 === 0 && (___hasprop(bridge$$6122$0, "props") && (equal(bridge$$6122$0.props, {}) && (___hasprop(bridge$$6122$0, "children") && (children$0 = bridge$$6122$0.children, true))))))) || Array.isArray(bridge$$6122$0) && (children$0 = bridge$$6122$0, true)) {
            fn$1 = function fn() {
              var t0$26 = undefined;
              var t1$8 = undefined;
              var x$3 = undefined;
              var y$0 = undefined;
              var x$2 = undefined;
              var children$1 = undefined;
              var s$2 = undefined;
              var t$2 = undefined;
              var $$6175$0 = undefined;
              var $$6176$0 = undefined;
              var $$6177$0 = undefined;
              var t0$25 = undefined;
              var t1$7 = undefined;
              var t2$2 = undefined;
              var t3$1 = undefined;
              var bridge$$6173$0 = undefined;
              var ph$12$0 = undefined;
              var t0$24 = undefined;
              var m$14$0 = undefined;
              m$14$0 = arguments;
              t0$24 = m$14$0.length;
              if (t0$24 >= 0) {
                ph$12$0 = Array.prototype.slice.call(m$14$0, 0);
                t0$25 = ph$12$0;
                t1$7 = t0$25.length;
                if (($$6177$0 = t1$7 === 2) && (t2$2 = t0$25[0], typeof t2$2 === "string" && (s$2 = t2$2, t3$1 = t0$25[1], typeof t3$1 === "string"))) {
                  t$2 = t3$1;
                  return ["replace", s$2 + t$2];
                } else {
                  if ($$6177$0 && (x$2 = t0$25[0], bridge$$6173$0 = t0$25[1], getChecker(ENode)(bridge$$6173$0) && (___hasprop(bridge$$6173$0, "tags") && (t0$26 = bridge$$6173$0.tags, Array.isArray(t0$26) && (t1$8 = t0$26.length, t1$8 === 0 && (___hasprop(bridge$$6173$0, "props") && (equal(bridge$$6173$0.props, {}) && (___hasprop(bridge$$6173$0, "children") && (children$1 = bridge$$6173$0.children, true))))))) || Array.isArray(bridge$$6173$0) && (children$1 = bridge$$6173$0, true))) {
                    return ["splice"].concat(children$1);
                  } else {
                    if ($$6177$0) {
                      x$3 = t0$25[0];
                      y$0 = t0$25[1];
                      return ["push", collapse$0(y$0)];
                    } else {
                      return ___match_error(ph$12$0, "{x, y}");
                    }
                  }
                }
              } else {
                return ___match_error(m$14$0, "{*match}");
              }
            };
            r$2 = transform$0(children$0, fn$1, "");
            acc$2 = [];
            temp$7 = null;
            m$15 = null;
            $7: for (var _iterator = r$2[Symbol.iterator](),
                _step; !(_step = _iterator.next()).done; ) {
              m$15 = _step.value;
              var x$4 = undefined;
              x$4 = m$15;
              temp$7 = finalize$0(x$4, ndone$1);
              acc$2.push(temp$7);
            }
            return acc$2;
          } else {
            t0$22 = ph$10$0;
            if (getChecker(ENode)(t0$22) && (___hasprop(t0$22, "tags") && (tags$0 = t0$22.tags, ___hasprop(t0$22, "props") && (props$0 = t0$22.props, ___hasprop(t0$22, "children"))))) {
              children$2 = t0$22.children;
              return ENode(tags$0, props$0, collapse$0(children$2));
            } else {
              x$5 = ph$10$0;
              return x$5;
            }
          }
        } else {
          return ___match_error(m$13$0, "{match, ndone = 0}");
        }
      };
      results$0 = __at___$10.run(src$3);
      if (options$0.paragraph) {
        top$0 = ENode(["p"], {}, results$0.main);
      } else {
        top$0 = ENode(["top"], {}, results$0.main);
      }
      main$1 = normalize$0(collapse$0(top$0));
      m$16$0 = format$0;
      if (m$16$0 === "enode") {
        result$2 = main$1;
      } else {
        if (m$16$0 === "text") {
          result$2 = main$1.toString();
        } else {
          if (m$16$0 === "html") {
            result$2 = html$0(main$1);
          } else {
            if (m$16$0 === "dom") {
              result$2 = dom$0(main$1);
            } else {
              result$2 = ___match_error(m$16$0, ".dom");
            }
          }
        }
      }
      if (__at___$10.template && !options$0.noTemplate) {
        r$3 = __at___$10.resolvers.template || __at___$10.resolvers["default"];
        if (!r$3) {
          throw ErrorFactory(["template", "noResolver"]).create(ENode([], {}, ["Cannot resolve templates."]).toString());
        }
        m$17$0 = r$3(__at___$10.template);
        if (___hasprop(m$17$0, "file") && (file$0 = m$17$0.file, ___hasprop(m$17$0, "contents"))) {
          contents$0 = m$17$0.contents;
          tsrc$0 = Source$0(contents$0, file$0);
        } else {
          bridge$$6340$0 = m$17$0;
          if (___hasprop(bridge$$6340$0, "contents") && (contents$1 = bridge$$6340$0.contents, true) || typeof bridge$$6340$0 === "string" && (contents$1 = bridge$$6340$0, true)) {
            tsrc$0 = Source$0(contents$1, "<quaint>");
          } else {
            tsrc$0 = ___match_error(m$17$0, "{=> contents} or String? contents");
          }
        }
        $targ$18 = null;
        __at___$10.template = $targ$18;
        __at___$10.setenv("body", ENode(["raw"], {}, result$2));
        return __at___$10.translate(tsrc$0, format$0, options$0);
      } else {
        return result$2;
      }
    } else {
      return ___match_error(m$11$0, "{src, format, options = {=}}");
    }
  };
  Engine$0.prototype.toHTML = function toHTML() {
    var src$4 = undefined;
    var options$1 = undefined;
    var t0$27 = undefined;
    var m$18$0 = undefined;
    var __at___$11 = undefined;
    var self$9 = undefined;
    __at___$11 = this;
    self$9 = this;
    m$18$0 = arguments;
    t0$27 = m$18$0.length;
    if (t0$27 >= 1 && t0$27 <= 2) {
      src$4 = m$18$0[0];
      if (1 >= t0$27) {
        options$1 = {};
      } else {
        options$1 = m$18$0[1];
      }
      return __at___$11.translate(src$4, "html", options$1);
    } else {
      return ___match_error(m$18$0, "{src, options = {=}}");
    }
  };
  Engine$0.prototype.toENode = function toENode() {
    var src$5 = undefined;
    var options$2 = undefined;
    var t0$28 = undefined;
    var m$19$0 = undefined;
    var __at___$12 = undefined;
    var self$10 = undefined;
    __at___$12 = this;
    self$10 = this;
    m$19$0 = arguments;
    t0$28 = m$19$0.length;
    if (t0$28 >= 1 && t0$28 <= 2) {
      src$5 = m$19$0[0];
      if (1 >= t0$28) {
        options$2 = {};
      } else {
        options$2 = m$19$0[1];
      }
      return __at___$12.translate(src$5, "enode", options$2);
    } else {
      return ___match_error(m$19$0, "{src, options = {=}}");
    }
  };
  Engine$0.prototype.registerMethods = function(methods$0) {
    var __at___$13 = undefined;
    var self$11 = undefined;
    __at___$13 = this;
    self$11 = this;
    __at___$13.methods = __at___$13.methods.concat(keys(methods$0));
    __amp____colon__(this, methods$0);
    return __at___$13;
  };
  Engine$0.prototype.registerMacros = function(macs$0) {
    var __at___$14 = undefined;
    var self$12 = undefined;
    __at___$14 = this;
    self$12 = this;
    __amp____colon__(__at___$14.macros, macs$0);
    return __at___$14;
  };
  Engine$0.prototype.registerPostprocessor = function() {
    var m$21 = undefined;
    var acc$3 = undefined;
    var temp$8 = undefined;
    var xs$0$0 = undefined;
    var expr$0 = undefined;
    var ph$15$0 = undefined;
    var repl$1 = undefined;
    var $$6472$0 = undefined;
    var $$6473$0 = undefined;
    var t0$30 = undefined;
    var t1$9 = undefined;
    var t2$3 = undefined;
    var ph$14$0 = undefined;
    var t0$29 = undefined;
    var m$20$0 = undefined;
    var __at___$15 = undefined;
    var self$13 = undefined;
    __at___$15 = this;
    self$13 = this;
    m$20$0 = arguments;
    t0$29 = m$20$0.length;
    if (t0$29 >= 0) {
      ph$14$0 = Array.prototype.slice.call(m$20$0, 0);
      t0$30 = ph$14$0;
      t1$9 = t0$30.length;
      if (t1$9 === 2) {
        t2$3 = t0$30[0];
        expr$0 = t2$3;
        ph$15$0 = t2$3;
        repl$1 = t0$30[1];
        if (typeof ph$15$0 === "string") {
          __at___$15.regexps.push([RegExp(expr$0, "g"), repl$1]);
          return __at___$15;
        } else {
          if (getChecker(RegExp)(ph$15$0)) {
            __at___$15.regexps.push([expr$0, repl$1]);
            return __at___$15;
          } else {
            return ___match_error(ph$15$0, "RegExp? ");
          }
        }
      } else {
        if (t1$9 === 1) {
          xs$0$0 = t0$30[0];
          acc$3 = [];
          temp$8 = null;
          m$21 = null;
          $8: for (var _iterator = xs$0$0[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            m$21 = _step.value;
            var expr$1 = undefined;
            var repl$2 = undefined;
            var t0$31 = undefined;
            var t1$10 = undefined;
            t0$31 = m$21;
            if (Array.isArray(t0$31) && (t1$10 = t0$31.length, t1$10 === 2)) {
              expr$1 = t0$31[0];
              repl$2 = t0$31[1];
              __at___$15.registerSubstitutions(expr$1, repl$2);
              temp$8 = __at___$15;
              acc$3.push(temp$8);
            } else {
              ___match_error(m$21);
            }
          }
          return acc$3;
        } else {
          return ___match_error(ph$14$0, "{each {expr, repl}}");
        }
      }
    } else {
      return ___match_error(m$20$0, "{*match}");
    }
  };
  Engine$0.prototype.clearRules = function() {
    var $targ$19 = undefined;
    var __at___$16 = undefined;
    var self$14 = undefined;
    __at___$16 = this;
    self$14 = this;
    $targ$19 = Dispatcher$0();
    __at___$16.dispatch = $targ$19;
    return __at___$16;
  };
  Engine$0.prototype.registerRule = function() {
    var args$0 = undefined;
    var t0$32 = undefined;
    var m$22$0 = undefined;
    var __at___$17 = undefined;
    var self$15 = undefined;
    __at___$17 = this;
    self$15 = this;
    m$22$0 = arguments;
    t0$32 = m$22$0.length;
    if (t0$32 >= 0) {
      args$0 = Array.prototype.slice.call(m$22$0, 0);
      console.error(ENode([], {}, ["Deprecated: Engine::registerRule, use Engine::registerRules"]).toString());
      return __at___$17.registerRules.apply(__at___$17, args$0);
    } else {
      return ___match_error(m$22$0, "{*args}");
    }
  };
  Engine$0.prototype.registerRules = function() {
    var m$24 = undefined;
    var rules$0 = undefined;
    var rule$1 = undefined;
    var handler$2 = undefined;
    var $$6627$0 = undefined;
    var $$6628$0 = undefined;
    var t0$34 = undefined;
    var t1$11 = undefined;
    var ph$17$0 = undefined;
    var t0$33 = undefined;
    var m$23$0 = undefined;
    var __at___$18 = undefined;
    var self$16 = undefined;
    __at___$18 = this;
    self$16 = this;
    m$23$0 = arguments;
    t0$33 = m$23$0.length;
    if (t0$33 >= 0) {
      ph$17$0 = Array.prototype.slice.call(m$23$0, 0);
      t0$34 = ph$17$0;
      t1$11 = t0$34.length;
      if (t1$11 === 2) {
        rule$1 = t0$34[0];
        handler$2 = t0$34[1];
        __at___$18.dispatch.register(rule$1, handler$2);
        return __at___$18;
      } else {
        if (t1$11 === 1) {
          rules$0 = t0$34[0];
          m$24 = null;
          $9: for (var _iterator = items(rules$0)[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            m$24 = _step.value;
            var rule$2 = undefined;
            var handler$4 = undefined;
            var handler$3 = undefined;
            var $$6671$0 = undefined;
            var t0$36 = undefined;
            var t1$13 = undefined;
            var name$0 = undefined;
            var ph$18$0 = undefined;
            var t0$35 = undefined;
            var t1$12 = undefined;
            t0$35 = m$24;
            if (Array.isArray(t0$35) && (t1$12 = t0$35.length, t1$12 === 2)) {
              name$0 = t0$35[0];
              ph$18$0 = t0$35[1];
              t0$36 = ph$18$0;
              if (typeof t0$36 === "function") {
                handler$3 = t0$36;
                __at___$18.dispatch.register(name$0, handler$3);
              } else {
                if (Array.isArray(t0$36) && (t1$13 = t0$36.length, t1$13 === 2)) {
                  rule$2 = t0$36[0];
                  handler$4 = t0$36[1];
                  __at___$18.dispatch.register(rule$2, handler$4);
                } else {
                  ___match_error(ph$18$0);
                }
              }
            } else {
              ___match_error(m$24);
            }
          }
          return __at___$18;
        } else {
          return ___match_error(ph$17$0, "{rules}");
        }
      }
    } else {
      return ___match_error(m$23$0, "{*match}");
    }
  };
  Engine$0.prototype.registerDocument = function() {
    var args$1 = undefined;
    var t0$37 = undefined;
    var m$25$0 = undefined;
    var __at___$19 = undefined;
    var self$17 = undefined;
    __at___$19 = this;
    self$17 = this;
    m$25$0 = arguments;
    t0$37 = m$25$0.length;
    if (t0$37 >= 0) {
      args$1 = Array.prototype.slice.call(m$25$0, 0);
      console.error(ENode([], {}, ["Deprecated: Engine::registerDocument, use Engine::registerDocuments"]).toString());
      return __at___$19.registerDocuments.apply(__at___$19, args$1);
    } else {
      return ___match_error(m$25$0, "{*args}");
    }
  };
  Engine$0.prototype.registerDocuments = function(docs$1) {
    var m$26 = undefined;
    var __at___$20 = undefined;
    var self$18 = undefined;
    __at___$20 = this;
    self$18 = this;
    m$26 = null;
    $10: for (var _iterator = items(docs$1)[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$26 = _step.value;
      var $targ$20 = undefined;
      var name$1 = undefined;
      var maker$0 = undefined;
      var t0$38 = undefined;
      var t1$14 = undefined;
      t0$38 = m$26;
      if (Array.isArray(t0$38) && (t1$14 = t0$38.length, t1$14 === 2)) {
        name$1 = t0$38[0];
        maker$0 = t0$38[1];
        $targ$20 = maker$0;
        __at___$20.documents[name$1] = $targ$20;
        void 0;
      } else {
        ___match_error(m$26);
      }
    }
    return __at___$20;
  };
  Engine$0.prototype.registerResolvers = function() {
    var $targ$21 = undefined;
    var m$28 = undefined;
    var docs$2 = undefined;
    var name$2 = undefined;
    var res$0 = undefined;
    var $$6797$0 = undefined;
    var $$6798$0 = undefined;
    var t0$40 = undefined;
    var t1$15 = undefined;
    var ph$20$0 = undefined;
    var t0$39 = undefined;
    var m$27$0 = undefined;
    var __at___$21 = undefined;
    var self$19 = undefined;
    __at___$21 = this;
    self$19 = this;
    m$27$0 = arguments;
    t0$39 = m$27$0.length;
    if (t0$39 >= 0) {
      ph$20$0 = Array.prototype.slice.call(m$27$0, 0);
      t0$40 = ph$20$0;
      t1$15 = t0$40.length;
      if (t1$15 === 2) {
        name$2 = t0$40[0];
        res$0 = t0$40[1];
        $targ$21 = res$0;
        __at___$21.resolvers[name$2] = $targ$21;
        return __at___$21;
      } else {
        if (t1$15 === 1) {
          docs$2 = t0$40[0];
          m$28 = null;
          $11: for (var _iterator = items(docs$2)[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            m$28 = _step.value;
            var $targ$22 = undefined;
            var name$3 = undefined;
            var res$1 = undefined;
            var t0$41 = undefined;
            var t1$16 = undefined;
            t0$41 = m$28;
            if (Array.isArray(t0$41) && (t1$16 = t0$41.length, t1$16 === 2)) {
              name$3 = t0$41[0];
              res$1 = t0$41[1];
              $targ$22 = res$1;
              __at___$21.resolvers[name$3] = $targ$22;
              void 0;
            } else {
              ___match_error(m$28);
            }
          }
          return __at___$21;
        } else {
          return ___match_error(ph$20$0, "{docs}");
        }
      }
    } else {
      return ___match_error(m$27$0, "{*match}");
    }
  };
  Engine$0.prototype.fork = function fork() {
    var m$29 = undefined;
    var e$1 = undefined;
    var $targ$23 = undefined;
    var $targ$24 = undefined;
    var $targ$25 = undefined;
    var $targ$26 = undefined;
    var $targ$27 = undefined;
    var $targ$28 = undefined;
    var $targ$29 = undefined;
    var $targ$30 = undefined;
    var __at___$22 = undefined;
    var self$20 = undefined;
    __at___$22 = this;
    self$20 = this;
    e$1 = Engine$0([]);
    $targ$23 = false;
    e$1.top = $targ$23;
    $targ$24 = __at___$22.dispatch.clone();
    e$1.dispatch = $targ$24;
    $targ$25 = __at___$22.evaluator.fork();
    e$1.evaluator = $targ$25;
    $targ$26 = clone(__at___$22.regexps);
    e$1.regexps = $targ$26;
    $targ$27 = clone(__at___$22.macros);
    e$1.macros = $targ$27;
    $targ$28 = clone(__at___$22.methods);
    e$1.methods = $targ$28;
    m$29 = null;
    $12: for (var _iterator = e$1.methods[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$29 = _step.value;
      var $targ$31 = undefined;
      var m$30 = undefined;
      m$30 = m$29;
      $targ$31 = send(this, m$30);
      e$1[m$30] = $targ$31;
      void 0;
    }
    $targ$29 = clone(__at___$22.resolvers);
    e$1.resolvers = $targ$29;
    $targ$30 = __at___$22.template;
    e$1.template = $targ$30;
    return e$1;
  };
  Engine$0.prototype.eval = function() {
    var text$1 = undefined;
    var env$0 = undefined;
    var loc$0 = undefined;
    var t0$42 = undefined;
    var m$31$0 = undefined;
    var __at___$23 = undefined;
    var self$21 = undefined;
    __at___$23 = this;
    self$21 = this;
    m$31$0 = arguments;
    t0$42 = m$31$0.length;
    if (t0$42 >= 2 && t0$42 <= 3) {
      text$1 = m$31$0[0];
      env$0 = m$31$0[1];
      if (2 >= t0$42) {
        loc$0 = null;
      } else {
        loc$0 = m$31$0[2];
      }
      return __at___$23.evaluator.eval(text$1, env$0, loc$0);
    } else {
      return ___match_error(m$31$0, "{text, env, loc = null}");
    }
  };
  Engine$0.prototype.setenv = function setenv() {
    var m$33 = undefined;
    var env$1 = undefined;
    var name$4 = undefined;
    var value$0 = undefined;
    var $$6976$0 = undefined;
    var $$6977$0 = undefined;
    var t0$44 = undefined;
    var t1$17 = undefined;
    var ph$22$0 = undefined;
    var t0$43 = undefined;
    var m$32$0 = undefined;
    var __at___$24 = undefined;
    var self$22 = undefined;
    __at___$24 = this;
    self$22 = this;
    m$32$0 = arguments;
    t0$43 = m$32$0.length;
    if (t0$43 >= 0) {
      ph$22$0 = Array.prototype.slice.call(m$32$0, 0);
      t0$44 = ph$22$0;
      t1$17 = t0$44.length;
      if (t1$17 === 2) {
        name$4 = t0$44[0];
        value$0 = t0$44[1];
        __at___$24.evaluator.setenv(name$4, value$0);
        return __at___$24;
      } else {
        if (t1$17 === 1) {
          env$1 = t0$44[0];
          m$33 = null;
          $13: for (var _iterator = items(env$1)[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            m$33 = _step.value;
            var k$0 = undefined;
            var v$0 = undefined;
            var t0$45 = undefined;
            var t1$18 = undefined;
            t0$45 = m$33;
            if (Array.isArray(t0$45) && (t1$18 = t0$45.length, t1$18 === 2)) {
              k$0 = t0$45[0];
              v$0 = t0$45[1];
              __at___$24.setenv(k$0, v$0);
            } else {
              ___match_error(m$33);
            }
          }
          return __at___$24;
        } else {
          return ___match_error(ph$22$0, "{env}");
        }
      }
    } else {
      return ___match_error(m$32$0, "{*match}");
    }
  };
  Engine$0.prototype.redefer = function redefer(temp$9$0, fn$2) {
    var t0$46 = undefined;
    var node$3 = undefined;
    var ph$23$0 = undefined;
    var __at___$25 = undefined;
    var self$23 = undefined;
    __at___$25 = this;
    self$23 = this;
    t0$46 = temp$9$0;
    node$3 = t0$46;
    ph$23$0 = t0$46;
    if (getChecker(Deferred$0)(ph$23$0)) {
      return Deferred$0(function(path$0, docs$3) {
        var rval$0 = undefined;
        var res$2 = undefined;
        rval$0 = false;
        try {
          rval$0 = node$3.generate(path$0, docs$3);
          rval$0;
        } catch (excv$0) {
          var e$2 = undefined;
          e$2 = excv$0;
          rval$0 = e$2;
          rval$0;
        }
        res$2 = rval$0;
        return __at___$25.redefer(res$2, fn$2);
      });
    } else {
      return fn$2(node$3);
    }
  };
  __amp____colon__(Engine$0, __amp____colon__(($targ$32 = "Engine", accum$2 = {}, accum$2["::name"] = $targ$32, accum$2), ($targ$33 = true, accum$3 = {}, accum$3["::egclass"] = $targ$33, accum$3)));
  Spec$0 = function Spec(temp$10$0, temp$11$0) {
    var t0$47 = undefined;
    var t1$19 = undefined;
    var t2$4 = undefined;
    var __at___$26 = undefined;
    if (!getChecker(Spec$0)(this)) {
      __at___$26 = Object.create(Spec$0.prototype);
    } else {
      __at___$26 = this;
    }
    t0$47 = getProjector(makeExtractor$0)(temp$10$0);
    if (t0$47[0] && (t1$19 = t0$47[1], t2$4 = t1$19.length, t2$4 === 3)) {
      __at___$26.operator = t1$19[0];
      __at___$26.specificity = t1$19[1];
      __at___$26.extractor = t1$19[2];
    } else {
      ___match_error(temp$10$0);
    }
    __at___$26.gen = temp$11$0;
    return __at___$26;
  };
  $targ$1 = function(temp$12$0) {
    var t0$48 = undefined;
    var values$1 = undefined;
    var ph$24$0 = undefined;
    var __at___$27 = undefined;
    var self$24 = undefined;
    __at___$27 = this;
    self$24 = this;
    t0$48 = getProjector(__at___$27.extractor)(temp$12$0);
    if (t0$48[0]) {
      ph$24$0 = t0$48[1];
    } else {
      ___match_error(temp$12$0);
    }
    if (!ph$24$0) {
      return [false, null];
    } else {
      values$1 = ph$24$0;
      return [true, values$1];
    }
  };
  Spec$0.prototype[Symbol.projectNoExc] = $targ$1;
  __amp____colon__(Spec$0, __amp____colon__(($targ$34 = "Spec", accum$4 = {}, accum$4["::name"] = $targ$34, accum$4), ($targ$35 = true, accum$5 = {}, accum$5["::egclass"] = $targ$35, accum$5)));
  processDocuments$0 = function processDocuments() {
    var replace$4 = undefined;
    var forges$0 = undefined;
    var deps$0 = undefined;
    var populate$0 = undefined;
    var res$3 = undefined;
    var niter$0 = undefined;
    var x$6 = undefined;
    var documents$0 = undefined;
    var maxiter$0 = undefined;
    var t0$49 = undefined;
    var m$34$0 = undefined;
    m$34$0 = arguments;
    t0$49 = m$34$0.length;
    if (t0$49 >= 2 && t0$49 <= 3) {
      x$6 = m$34$0[0];
      documents$0 = m$34$0[1];
      if (2 >= t0$49) {
        maxiter$0 = 10;
      } else {
        maxiter$0 = m$34$0[2];
      }
      forges$0 = new Set();
      deps$0 = new Map();
      populate$0 = function populate(temp$13$0, documents$1, replace$0, path$1) {
        var t0$50 = undefined;
        var t0$51 = undefined;
        var t1$20 = undefined;
        var docs$4 = undefined;
        var f$3 = undefined;
        var m$35$0 = undefined;
        var newdocs$0 = undefined;
        var $targ$36 = undefined;
        var child$0 = undefined;
        var $targ$37 = undefined;
        var m$36$0 = undefined;
        var doc$1 = undefined;
        var m$37$0 = undefined;
        var docname$0 = undefined;
        var m$38 = undefined;
        var acc$4 = undefined;
        var temp$14 = undefined;
        var m$39 = undefined;
        var acc$5 = undefined;
        var temp$15 = undefined;
        var tags$1 = undefined;
        var props$1 = undefined;
        var children$3 = undefined;
        var rval$1 = undefined;
        var m$40 = undefined;
        var acc$6 = undefined;
        var temp$16 = undefined;
        var rval$2 = undefined;
        var node$4 = undefined;
        var ph$25$0 = undefined;
        t0$50 = temp$13$0;
        node$4 = t0$50;
        ph$25$0 = t0$50;
        if (getChecker(ENode(["redoc"], {}, []))(ph$25$0)) {
          $targ$36 = node$4.children;
          t0$51 = $targ$36;
          if (Array.isArray(t0$51) && (t1$20 = t0$51.length, t1$20 === 1)) {
            child$0 = t0$51[0];
          } else {
            ___match_error($targ$36, "{child}");
          }
          m$35$0 = node$4.props.documents;
          if (typeof m$35$0 === "function") {
            f$3 = m$35$0;
            newdocs$0 = f$3(documents$1);
          } else {
            docs$4 = m$35$0;
            newdocs$0 = __amp__(documents$1, docs$4);
          }
          return populate$0(child$0, newdocs$0, replace$0, path$1);
        } else {
          if (getChecker(Into$0)(ph$25$0)) {
            docname$0 = node$4.document;
            m$36$0 = send(documents$1, docname$0);
            if (m$36$0 === void 0 && node$4.create) {
              $targ$37 = node$4.create();
              documents$1[docname$0] = $targ$37;
              void 0;
            } else {
              if (m$36$0 === void 0 && node$4.important) {
                throw ErrorFactory(["no_document"]).create(docname$0);
              } else {
                undefined;
              }
            }
            m$37$0 = send(documents$1, docname$0);
            if (!m$37$0) {
              return "";
            } else {
              if (___hasprop(m$37$0, "delay") && (m$37$0.delay ? true : false)) {
                return node$4;
              } else {
                doc$1 = m$37$0;
                doc$1.register.call(doc$1, path$1, node$4.value);
                return "";
              }
            }
          } else {
            if (getChecker(Deferred$0)(ph$25$0)) {
              forges$0.add([node$4, documents$1, replace$0, path$1]);
              return "PLACEHOLDER";
            } else {
              if (getChecker(ENode)(ph$25$0)) {
                tags$1 = node$4.tags;
                props$1 = object((acc$4 = [], temp$14 = null, m$38 = null, (function() {
                  $14: for (var _iterator = items(node$4.props)[Symbol.iterator](),
                      _step; !(_step = _iterator.next()).done; ) {
                    (function() {
                      m$38 = _step.value;
                      var replace$1 = undefined;
                      var k$1 = undefined;
                      var v$1 = undefined;
                      var ph$26$0 = undefined;
                      var t0$52 = undefined;
                      var t1$21 = undefined;
                      var t2$5 = undefined;
                      t0$52 = m$38;
                      if (Array.isArray(t0$52) && (t1$21 = t0$52.length, t1$21 === 2)) {
                        k$1 = t0$52[0];
                        t2$5 = t0$52[1];
                        v$1 = t2$5;
                        ph$26$0 = t2$5;
                        replace$1 = function replace(x$7) {
                          var $targ$38 = undefined;
                          $targ$38 = x$7;
                          rval$1.props[k$1] = $targ$38;
                          return void 0;
                        };
                        temp$14 = [k$1, populate$0(v$1, documents$1, replace$1, path$1.concat([k$1]))];
                        acc$4.push(temp$14);
                      } else {
                        ___match_error(m$38);
                      }
                    })();
                  }
                })(), acc$4));
                acc$5 = [];
                temp$15 = null;
                m$39 = null;
                $15: for (var _iterator = enumerate(node$4.children)[Symbol.iterator](),
                    _step; !(_step = _iterator.next()).done; ) {
                  (function() {
                    m$39 = _step.value;
                    var replace$2 = undefined;
                    var i$1 = undefined;
                    var c$1 = undefined;
                    var t0$53 = undefined;
                    var t1$22 = undefined;
                    t0$53 = m$39;
                    if (Array.isArray(t0$53) && (t1$22 = t0$53.length, t1$22 === 2)) {
                      i$1 = t0$53[0];
                      c$1 = t0$53[1];
                      replace$2 = function replace(x$8) {
                        var $targ$39 = undefined;
                        $targ$39 = x$8;
                        rval$1.children[i$1] = $targ$39;
                        return void 0;
                      };
                      temp$15 = populate$0(c$1, documents$1, replace$2, path$1.concat([i$1]));
                      acc$5.push(temp$15);
                    } else {
                      ___match_error(m$39);
                    }
                  })();
                }
                children$3 = acc$5;
                rval$1 = ENode(tags$1, props$1, children$3);
                return rval$1;
              } else {
                if (Array.isArray(ph$25$0)) {
                  acc$6 = [];
                  temp$16 = null;
                  m$40 = null;
                  $16: for (var _iterator2 = enumerate(node$4)[Symbol.iterator](),
                      _step2; !(_step2 = _iterator2.next()).done; ) {
                    (function() {
                      m$40 = _step2.value;
                      var replace$3 = undefined;
                      var i$2 = undefined;
                      var c$2 = undefined;
                      var t0$54 = undefined;
                      var t1$23 = undefined;
                      t0$54 = m$40;
                      if (Array.isArray(t0$54) && (t1$23 = t0$54.length, t1$23 === 2)) {
                        i$2 = t0$54[0];
                        c$2 = t0$54[1];
                        replace$3 = function replace(x$9) {
                          var $targ$40 = undefined;
                          $targ$40 = x$9;
                          rval$2[i$2] = $targ$40;
                          return void 0;
                        };
                        temp$16 = populate$0(c$2, documents$1, replace$3, path$1.concat([i$2]));
                        acc$6.push(temp$16);
                      } else {
                        ___match_error(m$40);
                      }
                    })();
                  }
                  rval$2 = acc$6;
                  return rval$2;
                } else {
                  return node$4;
                }
              }
            }
          }
        }
      };
      replace$4 = function replace(x$10) {
        res$3 = x$10;
        return res$3;
      };
      res$3 = populate$0(ENode([], {}, [x$6]), documents$0, replace$4, []);
      niter$0 = 0;
      $17: while (nequal(forges$0.size, 0) && niter$0 < maxiter$0) {
        var t0$55 = undefined;
        var t1$24 = undefined;
        var m$41 = undefined;
        var acc$7 = undefined;
        var temp$17 = undefined;
        var $targ$41 = undefined;
        var _forges$0 = undefined;
        $targ$41 = [forges$0, new Set()];
        t0$55 = $targ$41;
        if (Array.isArray(t0$55) && (t1$24 = t0$55.length, t1$24 === 2)) {
          _forges$0 = t0$55[0];
          forges$0 = t0$55[1];
        } else {
          ___match_error($targ$41, "{_forges, forges}");
        }
        [_forges$0, forges$0];
        niter$0 = niter$0 + 1;
        acc$7 = [];
        temp$17 = null;
        m$41 = null;
        $18: for (var _iterator = _forges$0[Symbol.iterator](),
            _step; !(_step = _iterator.next()).done; ) {
          var _iterator2,
              _step2;
          var _iterator3,
              _step3;
          var _iterator4,
              _step4;
          var _iterator5,
              _step5;
          (function() {
            m$41 = _step.value;
            var m$42 = undefined;
            var newnode$0 = undefined;
            var m$43 = undefined;
            var m$45 = undefined;
            var acc$8 = undefined;
            var temp$18 = undefined;
            var forge$0 = undefined;
            var node$5 = undefined;
            var docs$5 = undefined;
            var replace$5 = undefined;
            var path$2 = undefined;
            var t0$56 = undefined;
            var t1$25 = undefined;
            t0$56 = m$41;
            forge$0 = t0$56;
            if (Array.isArray(t0$56) && (t1$25 = t0$56.length, t1$25 === 4)) {
              node$5 = t0$56[0];
              docs$5 = t0$56[1];
              replace$5 = t0$56[2];
              path$2 = t0$56[3];
              m$42 = null;
              $19: for (_iterator2 = items(docs$5)[Symbol.iterator](); !(_step2 = _iterator2.next()).done; ) {
                m$42 = _step2.value;
                var doc$2 = undefined;
                var t0$57 = undefined;
                var t1$26 = undefined;
                t0$57 = m$42;
                if (Array.isArray(t0$57) && (t1$26 = t0$57.length, t1$26 === 2 && (t0$57[0], doc$2 = t0$57[1], doc$2.resetFlags))) {
                  doc$2.resetFlags();
                } else {
                  false;
                }
              }
              replace$5((newnode$0 = may__minus__fail$0(function() {
                return node$5.generate(path$2, docs$5);
              }), populate$0(newnode$0, docs$5, replace$5, path$2)));
              m$43 = null;
              $20: for (_iterator3 = items(docs$5)[Symbol.iterator](); !(_step3 = _iterator3.next()).done; ) {
                m$43 = _step3.value;
                var m$44 = undefined;
                var doc$3 = undefined;
                var t0$58 = undefined;
                var t1$27 = undefined;
                t0$58 = m$43;
                if (Array.isArray(t0$58) && (t1$27 = t0$58.length, t1$27 === 2 && (t0$58[0], doc$3 = t0$58[1], doc$3.modified))) {
                  m$44 = null;
                  $22: for (_iterator4 = (deps$0.get(doc$3) || [])[Symbol.iterator](); !(_step4 = _iterator4.next()).done; ) {
                    m$44 = _step4.value;
                    var forge$1 = undefined;
                    forge$1 = m$44;
                    forges$0.add(forge$1);
                  }
                  deps$0.set(doc$3, []);
                } else {
                  false;
                }
              }
              acc$8 = [];
              temp$18 = null;
              m$45 = null;
              $21: for (_iterator5 = items(docs$5)[Symbol.iterator](); !(_step5 = _iterator5.next()).done; ) {
                m$45 = _step5.value;
                var doc$4 = undefined;
                var t0$59 = undefined;
                var t1$28 = undefined;
                t0$59 = m$45;
                if (Array.isArray(t0$59) && (t1$28 = t0$59.length, t1$28 === 2 && (t0$59[0], doc$4 = t0$59[1], doc$4.accessed))) {
                  if (!deps$0.has(doc$4)) {
                    deps$0.set(doc$4, []);
                  }
                  temp$18 = deps$0.get(doc$4).push(forge$0);
                  acc$8.push(temp$18);
                } else {
                  false;
                }
              }
              temp$17 = acc$8;
              acc$7.push(temp$17);
            } else {
              ___match_error(m$41);
            }
          })();
        }
        acc$7;
      }
      return res$3.children[0];
    } else {
      return ___match_error(m$34$0, "{x, documents, maxiter = 10}");
    }
  };
  $targ$42 = Dispatcher$0;
  exports.Dispatcher = $targ$42;
  $targ$43 = Engine$0;
  exports.Engine = $targ$43;
  $targ$44 = Spec$0;
  exports.Spec = $targ$44;
  $targ$45 = processDocuments$0;
  exports.processDocuments = $targ$45;
  void 0;
})(require("process"));
