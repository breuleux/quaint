/* */ 
(function(process) {
  "use strict";
  require("earlgrey-runtime/5");
  var $targ$4 = undefined;
  var accum$0 = undefined;
  var $targ$5 = undefined;
  var accum$1 = undefined;
  var $targ$22 = undefined;
  var accum$2 = undefined;
  var $targ$23 = undefined;
  var accum$3 = undefined;
  var $targ$24 = undefined;
  var accum$4 = undefined;
  var $targ$25 = undefined;
  var accum$5 = undefined;
  var $targ$32 = undefined;
  var $targ$33 = undefined;
  var $targ$34 = undefined;
  var $targ$35 = undefined;
  var opg$0 = undefined;
  var Source$0 = undefined;
  var $0$0 = undefined;
  var parse$0 = undefined;
  var QAst$0 = undefined;
  var Text$0 = undefined;
  var Oper$0 = undefined;
  var Seq$0 = undefined;
  var tools$0 = undefined;
  var makeExtractor$0 = undefined;
  var normalize$0 = undefined;
  var $2$0 = undefined;
  var SeqDocument$0 = undefined;
  var $3$0 = undefined;
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
  $0$0 = require("./lang");
  parse$0 = getProperty($0$0, "parse", "./lang");
  QAst$0 = getProperty($0$0, "QAst", "./lang");
  Text$0 = getProperty($0$0, "Text", "./lang");
  Oper$0 = getProperty($0$0, "Oper", "./lang");
  Seq$0 = getProperty($0$0, "Seq", "./lang");
  tools$0 = require("./tools");
  makeExtractor$0 = getProperty(tools$0, "makeExtractor", "tools");
  normalize$0 = getProperty(tools$0, "normalize", "tools");
  $2$0 = require("./doc");
  SeqDocument$0 = getProperty($2$0, "SeqDocument", "./doc");
  $3$0 = require("./util");
  insertSorted$0 = getProperty($3$0, "insertSorted", "./util");
  transform$0 = getProperty($3$0, "transform", "./util");
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
    var $$2991$0 = undefined;
    var $$2992$0 = undefined;
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
      $5: for (var _iterator = items(__at___$3.dispatch)[Symbol.iterator](),
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
    __at___$4.isQuaintEngine = $targ$6;
    $targ$7 = Dispatcher$0();
    __at___$4.dispatch = $targ$7;
    $targ$8 = {};
    __at___$4.documents = $targ$8;
    $targ$9 = [];
    __at___$4.regexps = $targ$9;
    $targ$10 = [];
    __at___$4.methods = $targ$10;
    $targ$11 = {};
    __at___$4.macros = $targ$11;
    send(send(__at___$4, "plug", true), plugins$0);
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
      $6: for (var _iterator = plugins$2[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$7 = _step.value;
        var install__minus__to$0 = undefined;
        var f$0 = undefined;
        var $$3259$0 = undefined;
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
    var bridge$$3294$0 = undefined;
    var x$0 = undefined;
    var parts$1 = undefined;
    var t$1 = undefined;
    var $$3295$0 = undefined;
    var bridge$$3290$0 = undefined;
    var t0$12 = undefined;
    var t1$3 = undefined;
    var bridge$$3293$0 = undefined;
    var node$1 = undefined;
    var ph$4$0 = undefined;
    var __at___$7 = undefined;
    var self$5 = undefined;
    __at___$7 = this;
    self$5 = this;
    t0$11 = temp$4$0;
    node$1 = t0$11;
    ph$4$0 = t0$11;
    bridge$$3290$0 = ph$4$0;
    if (getChecker(Text$0)(bridge$$3290$0) && (t0$13 = bridge$$3290$0.length, t0$13 === 1 && (t$1 = bridge$$3290$0[0], true)) || getChecker(Oper$0)(bridge$$3290$0) && (t0$14 = bridge$$3290$0.length, t0$14 === 1 && (t$1 = bridge$$3290$0[0], true))) {
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
          $7: for (var _iterator = __at___$7.dispatch.handlers(node$1)[Symbol.iterator](),
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
            $8: for (var _iterator2 = parts$1[Symbol.iterator](),
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
        x$0 = t0$12;
        bridge$$3293$0 = t0$12;
        if ((bridge$$3294$0 = bridge$$3293$0, getChecker(ENode)(bridge$$3294$0) || Array.isArray(bridge$$3294$0)) || typeof bridge$$3293$0 === "string") {
          return x$0;
        } else {
          return ___match_error(ph$4$0, "x and [ENode? or Array? or String?]");
        }
      }
    }
  };
  Engine$0.prototype.gen = $targ$0;
  Engine$0.prototype.run = function run(src$0) {
    var parsed$0 = undefined;
    var node$2 = undefined;
    var src$1 = undefined;
    var text$0 = undefined;
    var m$11$0 = undefined;
    var generated$0 = undefined;
    var docs$0 = undefined;
    var main$0 = undefined;
    var __at___$8 = undefined;
    var self$6 = undefined;
    __at___$8 = this;
    self$6 = this;
    m$11$0 = src$0;
    if (typeof m$11$0 === "string") {
      text$0 = m$11$0;
      return __at___$8.run(Source$0(text$0, "<quaint>"));
    } else {
      if (getChecker(Source$0)(m$11$0)) {
        src$1 = m$11$0;
        parsed$0 = parse$0(src$1);
        generated$0 = __at___$8.gen(parsed$0);
      } else {
        node$2 = m$11$0;
        generated$0 = __at___$8.gen(node$2);
      }
    }
    docs$0 = __at___$8.documents;
    main$0 = processDocuments$0(generated$0, docs$0);
    return __amp____colon__(docs$0, {main: main$0});
  };
  Engine$0.prototype.translate = function translate() {
    var top$0 = undefined;
    var m$13$0 = undefined;
    var finalize$0 = undefined;
    var collapse$0 = undefined;
    var results$0 = undefined;
    var main$1 = undefined;
    var src$2 = undefined;
    var format$0 = undefined;
    var options$0 = undefined;
    var t0$16 = undefined;
    var m$12$0 = undefined;
    var __at___$9 = undefined;
    var self$7 = undefined;
    __at___$9 = this;
    self$7 = this;
    m$12$0 = arguments;
    t0$16 = m$12$0.length;
    if (t0$16 >= 2 && t0$16 <= 3) {
      src$2 = m$12$0[0];
      format$0 = m$12$0[1];
      if (2 >= t0$16) {
        options$0 = {};
      } else {
        options$0 = m$12$0[2];
      }
      finalize$0 = function finalize(ph$6$0, ndone$0) {
        var m$14 = undefined;
        var x$1 = undefined;
        var s$1 = undefined;
        var t0$17 = undefined;
        t0$17 = ph$6$0;
        if (typeof t0$17 === "string") {
          s$1 = t0$17;
          m$14 = null;
          $9: for (var _iterator = enumerate(__at___$9.regexps.slice(ndone$0))[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            var _ret = (function() {
              m$14 = _step.value;
              var parts$2 = undefined;
              var index$0 = undefined;
              var curr$0 = undefined;
              var f$2 = undefined;
              var bridge$$3575$0 = undefined;
              var i$0 = undefined;
              var r$1 = undefined;
              var repl$0 = undefined;
              var ph$7$0 = undefined;
              var t0$18 = undefined;
              var t1$5 = undefined;
              var t2$1 = undefined;
              var t3$0 = undefined;
              var t4$0 = undefined;
              t0$18 = m$14;
              if (Array.isArray(t0$18) && (t1$5 = t0$18.length, t1$5 === 2 && (i$0 = t0$18[0], t2$1 = t0$18[1], Array.isArray(t2$1) && (t3$0 = t2$1.length, t3$0 === 2)))) {
                r$1 = t2$1[0];
                t4$0 = t2$1[1];
                repl$0 = t4$0;
                ph$7$0 = t4$0;
                if (typeof ph$7$0 === "string") {
                  s$1 = s$1.replace(r$1, repl$0);
                  s$1;
                } else {
                  bridge$$3575$0 = ph$7$0;
                  if (typeof bridge$$3575$0 === "function" && (f$2 = bridge$$3575$0, true) || (f$2 = function() {
                    return repl$0;
                  }, true)) {
                    parts$2 = [];
                    index$0 = 0;
                    curr$0 = null;
                    $10: while ((curr$0 = r$1.exec(s$1), curr$0)) {
                      parts$2.push(send(s$1, range(index$0, curr$0.index - 1)));
                      index$0 = curr$0.index + curr$0[0].length;
                      parts$2.push(send(f$2, curr$0));
                      if (!__in__("g", r$1.flags)) {
                        break $10;
                      }
                    }
                    parts$2.push(s$1.slice(index$0));
                    return {v: collapse$0(parts$2, ndone$0 + i$0 + 1)};
                  } else {
                    ___match_error(ph$7$0);
                  }
                }
              } else {
                ___match_error(m$14);
              }
            })();
            if (typeof _ret === "object") {
              return _ret.v;
            }
          }
          return s$1;
        } else {
          x$1 = ph$6$0;
          return x$1;
        }
      };
      collapse$0 = function collapse() {
        var t0$21 = undefined;
        var t1$6 = undefined;
        var m$17 = undefined;
        var acc$2 = undefined;
        var temp$6 = undefined;
        var fn$1 = undefined;
        var r$2 = undefined;
        var x$5 = undefined;
        var tags$0 = undefined;
        var props$0 = undefined;
        var children$2 = undefined;
        var children$0 = undefined;
        var bridge$$3668$0 = undefined;
        var t0$20 = undefined;
        var ph$9$0 = undefined;
        var ndone$1 = undefined;
        var t0$19 = undefined;
        var m$15$0 = undefined;
        m$15$0 = arguments;
        t0$19 = m$15$0.length;
        if (t0$19 >= 1 && t0$19 <= 2) {
          ph$9$0 = m$15$0[0];
          if (1 >= t0$19) {
            ndone$1 = 0;
          } else {
            ndone$1 = m$15$0[1];
          }
          bridge$$3668$0 = ph$9$0;
          if (getChecker(ENode)(bridge$$3668$0) && (___hasprop(bridge$$3668$0, "tags") && (t0$21 = bridge$$3668$0.tags, Array.isArray(t0$21) && (t1$6 = t0$21.length, t1$6 === 0 && (___hasprop(bridge$$3668$0, "props") && (equal(bridge$$3668$0.props, {}) && (___hasprop(bridge$$3668$0, "children") && (children$0 = bridge$$3668$0.children, true))))))) || Array.isArray(bridge$$3668$0) && (children$0 = bridge$$3668$0, true)) {
            fn$1 = function fn() {
              var t0$24 = undefined;
              var t1$8 = undefined;
              var x$3 = undefined;
              var y$0 = undefined;
              var x$2 = undefined;
              var children$1 = undefined;
              var s$2 = undefined;
              var t$2 = undefined;
              var $$3721$0 = undefined;
              var $$3722$0 = undefined;
              var $$3723$0 = undefined;
              var t0$23 = undefined;
              var t1$7 = undefined;
              var t2$2 = undefined;
              var t3$1 = undefined;
              var bridge$$3719$0 = undefined;
              var ph$11$0 = undefined;
              var t0$22 = undefined;
              var m$16$0 = undefined;
              m$16$0 = arguments;
              t0$22 = m$16$0.length;
              if (t0$22 >= 0) {
                ph$11$0 = Array.prototype.slice.call(m$16$0, 0);
                t0$23 = ph$11$0;
                t1$7 = t0$23.length;
                if (($$3723$0 = t1$7 === 2) && (t2$2 = t0$23[0], typeof t2$2 === "string" && (s$2 = t2$2, t3$1 = t0$23[1], typeof t3$1 === "string"))) {
                  t$2 = t3$1;
                  return ["replace", s$2 + t$2];
                } else {
                  if ($$3723$0 && (x$2 = t0$23[0], bridge$$3719$0 = t0$23[1], getChecker(ENode)(bridge$$3719$0) && (___hasprop(bridge$$3719$0, "tags") && (t0$24 = bridge$$3719$0.tags, Array.isArray(t0$24) && (t1$8 = t0$24.length, t1$8 === 0 && (___hasprop(bridge$$3719$0, "props") && (equal(bridge$$3719$0.props, {}) && (___hasprop(bridge$$3719$0, "children") && (children$1 = bridge$$3719$0.children, true))))))) || Array.isArray(bridge$$3719$0) && (children$1 = bridge$$3719$0, true))) {
                    return ["splice"].concat(children$1);
                  } else {
                    if ($$3723$0) {
                      x$3 = t0$23[0];
                      y$0 = t0$23[1];
                      return ["push", collapse$0(y$0)];
                    } else {
                      return ___match_error(ph$11$0, "{x, y}");
                    }
                  }
                }
              } else {
                return ___match_error(m$16$0, "{*match}");
              }
            };
            r$2 = transform$0(children$0, fn$1, "");
            acc$2 = [];
            temp$6 = null;
            m$17 = null;
            $11: for (var _iterator = r$2[Symbol.iterator](),
                _step; !(_step = _iterator.next()).done; ) {
              m$17 = _step.value;
              var x$4 = undefined;
              x$4 = m$17;
              temp$6 = finalize$0(x$4, ndone$1);
              acc$2.push(temp$6);
            }
            return acc$2;
          } else {
            t0$20 = ph$9$0;
            if (getChecker(ENode)(t0$20) && (___hasprop(t0$20, "tags") && (tags$0 = t0$20.tags, ___hasprop(t0$20, "props") && (props$0 = t0$20.props, ___hasprop(t0$20, "children"))))) {
              children$2 = t0$20.children;
              return ENode(tags$0, props$0, collapse$0(children$2));
            } else {
              x$5 = ph$9$0;
              return x$5;
            }
          }
        } else {
          return ___match_error(m$15$0, "{match, ndone = 0}");
        }
      };
      results$0 = __at___$9.run(src$2);
      if (options$0.paragraph) {
        top$0 = ENode(["p"], {}, results$0.main);
      } else {
        top$0 = ENode(["top"], {}, results$0.main);
      }
      main$1 = normalize$0(collapse$0(top$0));
      m$13$0 = format$0;
      if (m$13$0 === "enode") {
        return main$1;
      } else {
        if (m$13$0 === "text") {
          return main$1.toString();
        } else {
          if (m$13$0 === "html") {
            return html$0(main$1);
          } else {
            if (m$13$0 === "dom") {
              return dom$0(main$1);
            } else {
              return ___match_error(m$13$0, ".dom");
            }
          }
        }
      }
    } else {
      return ___match_error(m$12$0, "{src, format, options = {=}}");
    }
  };
  Engine$0.prototype.toHTML = function toHTML() {
    var src$3 = undefined;
    var options$1 = undefined;
    var t0$25 = undefined;
    var m$18$0 = undefined;
    var __at___$10 = undefined;
    var self$8 = undefined;
    __at___$10 = this;
    self$8 = this;
    m$18$0 = arguments;
    t0$25 = m$18$0.length;
    if (t0$25 >= 1 && t0$25 <= 2) {
      src$3 = m$18$0[0];
      if (1 >= t0$25) {
        options$1 = {};
      } else {
        options$1 = m$18$0[1];
      }
      return __at___$10.translate(src$3, "html", options$1);
    } else {
      return ___match_error(m$18$0, "{src, options = {=}}");
    }
  };
  Engine$0.prototype.toENode = function toENode() {
    var src$4 = undefined;
    var options$2 = undefined;
    var t0$26 = undefined;
    var m$19$0 = undefined;
    var __at___$11 = undefined;
    var self$9 = undefined;
    __at___$11 = this;
    self$9 = this;
    m$19$0 = arguments;
    t0$26 = m$19$0.length;
    if (t0$26 >= 1 && t0$26 <= 2) {
      src$4 = m$19$0[0];
      if (1 >= t0$26) {
        options$2 = {};
      } else {
        options$2 = m$19$0[1];
      }
      return __at___$11.translate(src$4, "enode", options$2);
    } else {
      return ___match_error(m$19$0, "{src, options = {=}}");
    }
  };
  Engine$0.prototype.registerMethods = function registerMethods(methods$0) {
    var __at___$12 = undefined;
    var self$10 = undefined;
    __at___$12 = this;
    self$10 = this;
    __at___$12.methods = __at___$12.methods.concat(keys(methods$0));
    return __amp____colon__(this, methods$0);
  };
  Engine$0.prototype.registerMacros = function registerMacros(macs$0) {
    var __at___$13 = undefined;
    var self$11 = undefined;
    __at___$13 = this;
    self$11 = this;
    return __amp____colon__(__at___$13.macros, macs$0);
  };
  Engine$0.prototype.registerReplace = function registerReplace() {
    var m$21 = undefined;
    var acc$3 = undefined;
    var temp$7 = undefined;
    var xs$0$0 = undefined;
    var expr$0 = undefined;
    var ph$14$0 = undefined;
    var repl$1 = undefined;
    var $$3970$0 = undefined;
    var $$3971$0 = undefined;
    var t0$28 = undefined;
    var t1$9 = undefined;
    var t2$3 = undefined;
    var ph$13$0 = undefined;
    var t0$27 = undefined;
    var m$20$0 = undefined;
    var __at___$14 = undefined;
    var self$12 = undefined;
    __at___$14 = this;
    self$12 = this;
    m$20$0 = arguments;
    t0$27 = m$20$0.length;
    if (t0$27 >= 0) {
      ph$13$0 = Array.prototype.slice.call(m$20$0, 0);
      t0$28 = ph$13$0;
      t1$9 = t0$28.length;
      if (t1$9 === 2) {
        t2$3 = t0$28[0];
        expr$0 = t2$3;
        ph$14$0 = t2$3;
        repl$1 = t0$28[1];
        if (typeof ph$14$0 === "string") {
          return __at___$14.regexps.push([RegExp(expr$0, "g"), repl$1]);
        } else {
          if (getChecker(RegExp)(ph$14$0)) {
            return __at___$14.regexps.push([expr$0, repl$1]);
          } else {
            return ___match_error(ph$14$0, "RegExp? ");
          }
        }
      } else {
        if (t1$9 === 1) {
          xs$0$0 = t0$28[0];
          acc$3 = [];
          temp$7 = null;
          m$21 = null;
          $12: for (var _iterator = xs$0$0[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            m$21 = _step.value;
            var expr$1 = undefined;
            var repl$2 = undefined;
            var t0$29 = undefined;
            var t1$10 = undefined;
            t0$29 = m$21;
            if (Array.isArray(t0$29) && (t1$10 = t0$29.length, t1$10 === 2)) {
              expr$1 = t0$29[0];
              repl$2 = t0$29[1];
              temp$7 = __at___$14.registerReplace(expr$1, repl$2);
              acc$3.push(temp$7);
            } else {
              ___match_error(m$21);
            }
          }
          return acc$3;
        } else {
          return ___match_error(ph$13$0, "{each {expr, repl}}");
        }
      }
    } else {
      return ___match_error(m$20$0, "{*match}");
    }
  };
  Engine$0.prototype.clearRules = function clearRules() {
    var $targ$12 = undefined;
    var __at___$15 = undefined;
    var self$13 = undefined;
    __at___$15 = this;
    self$13 = this;
    $targ$12 = Dispatcher$0();
    __at___$15.dispatch = $targ$12;
    return void 0;
  };
  Engine$0.prototype.registerRule = function registerRule() {
    var m$23 = undefined;
    var rules$0 = undefined;
    var rule$1 = undefined;
    var handler$2 = undefined;
    var $$4090$0 = undefined;
    var $$4091$0 = undefined;
    var t0$31 = undefined;
    var t1$11 = undefined;
    var ph$16$0 = undefined;
    var t0$30 = undefined;
    var m$22$0 = undefined;
    var __at___$16 = undefined;
    var self$14 = undefined;
    __at___$16 = this;
    self$14 = this;
    m$22$0 = arguments;
    t0$30 = m$22$0.length;
    if (t0$30 >= 0) {
      ph$16$0 = Array.prototype.slice.call(m$22$0, 0);
      t0$31 = ph$16$0;
      t1$11 = t0$31.length;
      if (t1$11 === 2) {
        rule$1 = t0$31[0];
        handler$2 = t0$31[1];
        __at___$16.dispatch.register(rule$1, handler$2);
        return __at___$16;
      } else {
        if (t1$11 === 1) {
          rules$0 = t0$31[0];
          m$23 = null;
          $13: for (var _iterator = items(rules$0)[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            m$23 = _step.value;
            var rule$2 = undefined;
            var handler$4 = undefined;
            var handler$3 = undefined;
            var $$4134$0 = undefined;
            var t0$33 = undefined;
            var t1$13 = undefined;
            var name$0 = undefined;
            var ph$17$0 = undefined;
            var t0$32 = undefined;
            var t1$12 = undefined;
            t0$32 = m$23;
            if (Array.isArray(t0$32) && (t1$12 = t0$32.length, t1$12 === 2)) {
              name$0 = t0$32[0];
              ph$17$0 = t0$32[1];
              t0$33 = ph$17$0;
              if (typeof t0$33 === "function") {
                handler$3 = t0$33;
                __at___$16.registerRule(name$0, handler$3);
              } else {
                if (Array.isArray(t0$33) && (t1$13 = t0$33.length, t1$13 === 2)) {
                  rule$2 = t0$33[0];
                  handler$4 = t0$33[1];
                  __at___$16.registerRule(rule$2, handler$4);
                } else {
                  ___match_error(ph$17$0);
                }
              }
            } else {
              ___match_error(m$23);
            }
          }
          return __at___$16;
        } else {
          return ___match_error(ph$16$0, "{rules}");
        }
      }
    } else {
      return ___match_error(m$22$0, "{*match}");
    }
  };
  Engine$0.prototype.registerDocument = function registerDocument() {
    var $targ$13 = undefined;
    var m$25 = undefined;
    var docs$1 = undefined;
    var name$1 = undefined;
    var maker$0 = undefined;
    var $$4188$0 = undefined;
    var $$4189$0 = undefined;
    var t0$35 = undefined;
    var t1$14 = undefined;
    var ph$19$0 = undefined;
    var t0$34 = undefined;
    var m$24$0 = undefined;
    var __at___$17 = undefined;
    var self$15 = undefined;
    __at___$17 = this;
    self$15 = this;
    m$24$0 = arguments;
    t0$34 = m$24$0.length;
    if (t0$34 >= 0) {
      ph$19$0 = Array.prototype.slice.call(m$24$0, 0);
      t0$35 = ph$19$0;
      t1$14 = t0$35.length;
      if (t1$14 === 2) {
        name$1 = t0$35[0];
        maker$0 = t0$35[1];
        $targ$13 = maker$0;
        __at___$17.documents[name$1] = $targ$13;
        return __at___$17;
      } else {
        if (t1$14 === 1) {
          docs$1 = t0$35[0];
          m$25 = null;
          $14: for (var _iterator = items(docs$1)[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            m$25 = _step.value;
            var $targ$14 = undefined;
            var name$2 = undefined;
            var maker$1 = undefined;
            var t0$36 = undefined;
            var t1$15 = undefined;
            t0$36 = m$25;
            if (Array.isArray(t0$36) && (t1$15 = t0$36.length, t1$15 === 2)) {
              name$2 = t0$36[0];
              maker$1 = t0$36[1];
              $targ$14 = maker$1;
              __at___$17.documents[name$2] = $targ$14;
              void 0;
            } else {
              ___match_error(m$25);
            }
          }
          return __at___$17;
        } else {
          return ___match_error(ph$19$0, "{docs}");
        }
      }
    } else {
      return ___match_error(m$24$0, "{*match}");
    }
  };
  Engine$0.prototype.fork = function fork() {
    var m$26 = undefined;
    var e$0 = undefined;
    var $targ$15 = undefined;
    var $targ$16 = undefined;
    var $targ$17 = undefined;
    var $targ$18 = undefined;
    var $targ$19 = undefined;
    var $targ$20 = undefined;
    var __at___$18 = undefined;
    var self$16 = undefined;
    __at___$18 = this;
    self$16 = this;
    e$0 = Engine$0([]);
    $targ$15 = __at___$18.dispatch.clone();
    e$0.dispatch = $targ$15;
    $targ$16 = clone(__at___$18.documentMakers);
    e$0.documentMakers = $targ$16;
    $targ$17 = __at___$18.evaluator.fork();
    e$0.evaluator = $targ$17;
    $targ$18 = clone(__at___$18.regexps);
    e$0.regexps = $targ$18;
    $targ$19 = clone(__at___$18.macros);
    e$0.macros = $targ$19;
    $targ$20 = clone(__at___$18.methods);
    e$0.methods = $targ$20;
    m$26 = null;
    $15: for (var _iterator = e$0.methods[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$26 = _step.value;
      var $targ$21 = undefined;
      var m$27 = undefined;
      m$27 = m$26;
      $targ$21 = send(this, m$27);
      e$0[m$27] = $targ$21;
      void 0;
    }
    return e$0;
  };
  Engine$0.prototype.eval = function() {
    var text$1 = undefined;
    var env$0 = undefined;
    var loc$0 = undefined;
    var t0$37 = undefined;
    var m$28$0 = undefined;
    var __at___$19 = undefined;
    var self$17 = undefined;
    __at___$19 = this;
    self$17 = this;
    m$28$0 = arguments;
    t0$37 = m$28$0.length;
    if (t0$37 >= 2 && t0$37 <= 3) {
      text$1 = m$28$0[0];
      env$0 = m$28$0[1];
      if (2 >= t0$37) {
        loc$0 = null;
      } else {
        loc$0 = m$28$0[2];
      }
      return __at___$19.evaluator.eval(text$1, env$0, loc$0);
    } else {
      return ___match_error(m$28$0, "{text, env, loc = null}");
    }
  };
  Engine$0.prototype.setenv = function setenv() {
    var m$30 = undefined;
    var env$1 = undefined;
    var name$3 = undefined;
    var value$0 = undefined;
    var $$4359$0 = undefined;
    var $$4360$0 = undefined;
    var t0$39 = undefined;
    var t1$16 = undefined;
    var ph$21$0 = undefined;
    var t0$38 = undefined;
    var m$29$0 = undefined;
    var __at___$20 = undefined;
    var self$18 = undefined;
    __at___$20 = this;
    self$18 = this;
    m$29$0 = arguments;
    t0$38 = m$29$0.length;
    if (t0$38 >= 0) {
      ph$21$0 = Array.prototype.slice.call(m$29$0, 0);
      t0$39 = ph$21$0;
      t1$16 = t0$39.length;
      if (t1$16 === 2) {
        name$3 = t0$39[0];
        value$0 = t0$39[1];
        __at___$20.evaluator.setenv(name$3, value$0);
        return __at___$20;
      } else {
        if (t1$16 === 1) {
          env$1 = t0$39[0];
          m$30 = null;
          $16: for (var _iterator = items(env$1)[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            m$30 = _step.value;
            var k$0 = undefined;
            var v$0 = undefined;
            var t0$40 = undefined;
            var t1$17 = undefined;
            t0$40 = m$30;
            if (Array.isArray(t0$40) && (t1$17 = t0$40.length, t1$17 === 2)) {
              k$0 = t0$40[0];
              v$0 = t0$40[1];
              __at___$20.setenv(k$0, v$0);
            } else {
              ___match_error(m$30);
            }
          }
          return __at___$20;
        } else {
          return ___match_error(ph$21$0, "{env}");
        }
      }
    } else {
      return ___match_error(m$29$0, "{*match}");
    }
  };
  __amp____colon__(Engine$0, __amp____colon__(($targ$22 = "Engine", accum$2 = {}, accum$2["::name"] = $targ$22, accum$2), ($targ$23 = true, accum$3 = {}, accum$3["::egclass"] = $targ$23, accum$3)));
  Spec$0 = function Spec(temp$8$0, temp$9$0) {
    var t0$41 = undefined;
    var t1$18 = undefined;
    var t2$4 = undefined;
    var __at___$21 = undefined;
    if (!getChecker(Spec$0)(this)) {
      __at___$21 = Object.create(Spec$0.prototype);
    } else {
      __at___$21 = this;
    }
    t0$41 = getProjector(makeExtractor$0)(temp$8$0);
    if (t0$41[0] && (t1$18 = t0$41[1], t2$4 = t1$18.length, t2$4 === 3)) {
      __at___$21.operator = t1$18[0];
      __at___$21.specificity = t1$18[1];
      __at___$21.extractor = t1$18[2];
    } else {
      ___match_error(temp$8$0);
    }
    __at___$21.gen = temp$9$0;
    return __at___$21;
  };
  $targ$1 = function(temp$10$0) {
    var t0$42 = undefined;
    var values$1 = undefined;
    var ph$22$0 = undefined;
    var __at___$22 = undefined;
    var self$19 = undefined;
    __at___$22 = this;
    self$19 = this;
    t0$42 = getProjector(__at___$22.extractor)(temp$10$0);
    if (t0$42[0]) {
      ph$22$0 = t0$42[1];
    } else {
      ___match_error(temp$10$0);
    }
    if (!ph$22$0) {
      return [false, null];
    } else {
      values$1 = ph$22$0;
      return [true, values$1];
    }
  };
  Spec$0.prototype[":::project"] = $targ$1;
  __amp____colon__(Spec$0, __amp____colon__(($targ$24 = "Spec", accum$4 = {}, accum$4["::name"] = $targ$24, accum$4), ($targ$25 = true, accum$5 = {}, accum$5["::egclass"] = $targ$25, accum$5)));
  processDocuments$0 = function processDocuments() {
    var replace$4 = undefined;
    var forges$0 = undefined;
    var deps$0 = undefined;
    var populate$0 = undefined;
    var res$0 = undefined;
    var niter$0 = undefined;
    var x$6 = undefined;
    var documents$0 = undefined;
    var maxiter$0 = undefined;
    var t0$43 = undefined;
    var m$31$0 = undefined;
    m$31$0 = arguments;
    t0$43 = m$31$0.length;
    if (t0$43 >= 2 && t0$43 <= 3) {
      x$6 = m$31$0[0];
      documents$0 = m$31$0[1];
      if (2 >= t0$43) {
        maxiter$0 = 10;
      } else {
        maxiter$0 = m$31$0[2];
      }
      forges$0 = new Set();
      deps$0 = new Map();
      populate$0 = function populate(temp$11$0, documents$1, replace$0, path$0) {
        var t0$44 = undefined;
        var t0$45 = undefined;
        var t1$19 = undefined;
        var docs$2 = undefined;
        var f$3 = undefined;
        var m$32$0 = undefined;
        var newdocs$0 = undefined;
        var $targ$26 = undefined;
        var child$0 = undefined;
        var $targ$27 = undefined;
        var m$33$0 = undefined;
        var doc$0 = undefined;
        var m$34$0 = undefined;
        var docname$0 = undefined;
        var m$35 = undefined;
        var acc$4 = undefined;
        var temp$12 = undefined;
        var m$36 = undefined;
        var acc$5 = undefined;
        var temp$13 = undefined;
        var tags$1 = undefined;
        var props$1 = undefined;
        var children$3 = undefined;
        var rval$0 = undefined;
        var m$37 = undefined;
        var acc$6 = undefined;
        var temp$14 = undefined;
        var rval$1 = undefined;
        var node$3 = undefined;
        var ph$23$0 = undefined;
        t0$44 = temp$11$0;
        node$3 = t0$44;
        ph$23$0 = t0$44;
        if (getChecker(ENode(["redoc"], {}, []))(ph$23$0)) {
          $targ$26 = node$3.children;
          t0$45 = $targ$26;
          if (Array.isArray(t0$45) && (t1$19 = t0$45.length, t1$19 === 1)) {
            child$0 = t0$45[0];
          } else {
            ___match_error($targ$26, "{child}");
          }
          m$32$0 = node$3.props.documents;
          if (typeof m$32$0 === "function") {
            f$3 = m$32$0;
            newdocs$0 = f$3(documents$1);
          } else {
            docs$2 = m$32$0;
            newdocs$0 = __amp__(documents$1, docs$2);
          }
          return populate$0(child$0, newdocs$0, replace$0, path$0);
        } else {
          if (getChecker(ENode(["genfor"], {}, []))(ph$23$0)) {
            docname$0 = node$3.props.document;
            m$33$0 = send(documents$1, docname$0);
            if (m$33$0 === void 0 && node$3.props.create) {
              $targ$27 = node$3.props.create();
              documents$1[docname$0] = $targ$27;
              void 0;
            } else {
              if (m$33$0 === void 0 && node$3.props.important) {
                throw ErrorFactory(["no_document"]).create(docname$0);
              } else {
                undefined;
              }
            }
            m$34$0 = send(documents$1, docname$0);
            if (!m$34$0) {
              return "";
            } else {
              if (___hasprop(m$34$0, "delay") && (m$34$0.delay ? true : false)) {
                return node$3;
              } else {
                doc$0 = m$34$0;
                doc$0.register.apply(doc$0, [path$0].concat(node$3.children));
                return "";
              }
            }
          } else {
            if (getChecker(ENode(["genfrom"], {}, []))(ph$23$0)) {
              forges$0.add([node$3, documents$1, replace$0, path$0]);
              return "PLACEHOLDER";
            } else {
              if (getChecker(ENode)(ph$23$0)) {
                tags$1 = node$3.tags;
                props$1 = object((acc$4 = [], temp$12 = null, m$35 = null, (function() {
                  $17: for (var _iterator = items(node$3.props)[Symbol.iterator](),
                      _step; !(_step = _iterator.next()).done; ) {
                    (function() {
                      m$35 = _step.value;
                      var replace$1 = undefined;
                      var k$1 = undefined;
                      var v$1 = undefined;
                      var ph$24$0 = undefined;
                      var t0$46 = undefined;
                      var t1$20 = undefined;
                      var t2$5 = undefined;
                      t0$46 = m$35;
                      if (Array.isArray(t0$46) && (t1$20 = t0$46.length, t1$20 === 2)) {
                        k$1 = t0$46[0];
                        t2$5 = t0$46[1];
                        v$1 = t2$5;
                        ph$24$0 = t2$5;
                        replace$1 = function replace(x$7) {
                          var $targ$28 = undefined;
                          $targ$28 = x$7;
                          rval$0.props[k$1] = $targ$28;
                          return void 0;
                        };
                        temp$12 = [k$1, populate$0(v$1, documents$1, replace$1, path$0.concat([k$1]))];
                        acc$4.push(temp$12);
                      } else {
                        ___match_error(m$35);
                      }
                    })();
                  }
                })(), acc$4));
                acc$5 = [];
                temp$13 = null;
                m$36 = null;
                $18: for (var _iterator = enumerate(node$3.children)[Symbol.iterator](),
                    _step; !(_step = _iterator.next()).done; ) {
                  (function() {
                    m$36 = _step.value;
                    var replace$2 = undefined;
                    var i$1 = undefined;
                    var c$1 = undefined;
                    var t0$47 = undefined;
                    var t1$21 = undefined;
                    t0$47 = m$36;
                    if (Array.isArray(t0$47) && (t1$21 = t0$47.length, t1$21 === 2)) {
                      i$1 = t0$47[0];
                      c$1 = t0$47[1];
                      replace$2 = function replace(x$8) {
                        var $targ$29 = undefined;
                        $targ$29 = x$8;
                        rval$0.children[i$1] = $targ$29;
                        return void 0;
                      };
                      temp$13 = populate$0(c$1, documents$1, replace$2, path$0.concat([i$1]));
                      acc$5.push(temp$13);
                    } else {
                      ___match_error(m$36);
                    }
                  })();
                }
                children$3 = acc$5;
                rval$0 = ENode(tags$1, props$1, children$3);
                return rval$0;
              } else {
                if (Array.isArray(ph$23$0)) {
                  acc$6 = [];
                  temp$14 = null;
                  m$37 = null;
                  $19: for (var _iterator2 = enumerate(node$3)[Symbol.iterator](),
                      _step2; !(_step2 = _iterator2.next()).done; ) {
                    (function() {
                      m$37 = _step2.value;
                      var replace$3 = undefined;
                      var i$2 = undefined;
                      var c$2 = undefined;
                      var t0$48 = undefined;
                      var t1$22 = undefined;
                      t0$48 = m$37;
                      if (Array.isArray(t0$48) && (t1$22 = t0$48.length, t1$22 === 2)) {
                        i$2 = t0$48[0];
                        c$2 = t0$48[1];
                        replace$3 = function replace(x$9) {
                          var $targ$30 = undefined;
                          $targ$30 = x$9;
                          rval$1[i$2] = $targ$30;
                          return void 0;
                        };
                        temp$14 = populate$0(c$2, documents$1, replace$3, path$0.concat([i$2]));
                        acc$6.push(temp$14);
                      } else {
                        ___match_error(m$37);
                      }
                    })();
                  }
                  rval$1 = acc$6;
                  return rval$1;
                } else {
                  return node$3;
                }
              }
            }
          }
        }
      };
      replace$4 = function replace(x$10) {
        res$0 = x$10;
        return res$0;
      };
      res$0 = populate$0(ENode([], {}, x$6), documents$0, replace$4, []);
      niter$0 = 0;
      $20: while (nequal(forges$0.size, 0) && niter$0 < maxiter$0) {
        var t0$49 = undefined;
        var t1$23 = undefined;
        var m$38 = undefined;
        var acc$7 = undefined;
        var temp$15 = undefined;
        var $targ$31 = undefined;
        var _forges$0 = undefined;
        $targ$31 = [forges$0, new Set()];
        t0$49 = $targ$31;
        if (Array.isArray(t0$49) && (t1$23 = t0$49.length, t1$23 === 2)) {
          _forges$0 = t0$49[0];
          forges$0 = t0$49[1];
        } else {
          ___match_error($targ$31, "{_forges, forges}");
        }
        [_forges$0, forges$0];
        niter$0 = niter$0 + 1;
        acc$7 = [];
        temp$15 = null;
        m$38 = null;
        $21: for (var _iterator = _forges$0[Symbol.iterator](),
            _step; !(_step = _iterator.next()).done; ) {
          m$38 = _step.value;
          var m$39 = undefined;
          var newnode$0 = undefined;
          var m$40 = undefined;
          var m$42 = undefined;
          var acc$8 = undefined;
          var temp$16 = undefined;
          var forge$0 = undefined;
          var node$4 = undefined;
          var docs$3 = undefined;
          var replace$5 = undefined;
          var path$1 = undefined;
          var t0$50 = undefined;
          var t1$24 = undefined;
          t0$50 = m$38;
          forge$0 = t0$50;
          if (Array.isArray(t0$50) && (t1$24 = t0$50.length, t1$24 === 4)) {
            node$4 = t0$50[0];
            docs$3 = t0$50[1];
            replace$5 = t0$50[2];
            path$1 = t0$50[3];
            m$39 = null;
            $22: for (var _iterator2 = items(docs$3)[Symbol.iterator](),
                _step2; !(_step2 = _iterator2.next()).done; ) {
              m$39 = _step2.value;
              var doc$1 = undefined;
              var t0$51 = undefined;
              var t1$25 = undefined;
              t0$51 = m$39;
              if (Array.isArray(t0$51) && (t1$25 = t0$51.length, t1$25 === 2 && (t0$51[0], doc$1 = t0$51[1], doc$1.resetFlags))) {
                doc$1.resetFlags();
              } else {
                false;
              }
            }
            replace$5((newnode$0 = node$4.props.generate(path$1, docs$3), populate$0(newnode$0, docs$3, replace$5, path$1)));
            m$40 = null;
            $23: for (var _iterator3 = items(docs$3)[Symbol.iterator](),
                _step3; !(_step3 = _iterator3.next()).done; ) {
              m$40 = _step3.value;
              var m$41 = undefined;
              var doc$2 = undefined;
              var t0$52 = undefined;
              var t1$26 = undefined;
              t0$52 = m$40;
              if (Array.isArray(t0$52) && (t1$26 = t0$52.length, t1$26 === 2 && (t0$52[0], doc$2 = t0$52[1], doc$2.modified))) {
                m$41 = null;
                $25: for (var _iterator4 = (deps$0.get(doc$2) || [])[Symbol.iterator](),
                    _step4; !(_step4 = _iterator4.next()).done; ) {
                  m$41 = _step4.value;
                  var forge$1 = undefined;
                  forge$1 = m$41;
                  forges$0.add(forge$1);
                }
                deps$0.set(doc$2, []);
              } else {
                false;
              }
            }
            acc$8 = [];
            temp$16 = null;
            m$42 = null;
            $24: for (var _iterator5 = items(docs$3)[Symbol.iterator](),
                _step5; !(_step5 = _iterator5.next()).done; ) {
              m$42 = _step5.value;
              var doc$3 = undefined;
              var t0$53 = undefined;
              var t1$27 = undefined;
              t0$53 = m$42;
              if (Array.isArray(t0$53) && (t1$27 = t0$53.length, t1$27 === 2 && (t0$53[0], doc$3 = t0$53[1], doc$3.accessed))) {
                if (!deps$0.has(doc$3)) {
                  deps$0.set(doc$3, []);
                }
                temp$16 = deps$0.get(doc$3).push(forge$0);
                acc$8.push(temp$16);
              } else {
                false;
              }
            }
            temp$15 = acc$8;
            acc$7.push(temp$15);
          } else {
            ___match_error(m$38);
          }
        }
        acc$7;
      }
      return res$0.children[0];
    } else {
      return ___match_error(m$31$0, "{x, documents, maxiter = 10}");
    }
  };
  $targ$32 = Dispatcher$0;
  exports.Dispatcher = $targ$32;
  $targ$33 = Engine$0;
  exports.Engine = $targ$33;
  $targ$34 = Spec$0;
  exports.Spec = $targ$34;
  $targ$35 = processDocuments$0;
  exports.processDocuments = $targ$35;
  void 0;
})(require("process"));
