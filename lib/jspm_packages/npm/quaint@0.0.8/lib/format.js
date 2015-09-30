/* */ 
"use strict";
require("earlgrey-runtime/5");
var $targ$3 = undefined;
var accum$0 = undefined;
var $targ$4 = undefined;
var accum$1 = undefined;
var accum$2 = undefined;
var accum$3 = undefined;
var accum$4 = undefined;
var accum$5 = undefined;
var $targ$5 = undefined;
var tools$0 = undefined;
var Format$0 = undefined;
var default__minus__parsers$0 = undefined;
var auto__minus__format$0 = undefined;
var detect__minus__columns$0 = undefined;
var make__minus__table$0 = undefined;
var default__minus__formatters$0 = undefined;
tools$0 = require("./tools");
Format$0 = function Format() {
  var $targ$0 = undefined;
  var $targ$1 = undefined;
  var __at___$0 = undefined;
  if (!getChecker(Format$0)(this)) {
    __at___$0 = Object.create(Format$0.prototype);
  } else {
    __at___$0 = this;
  }
  $targ$0 = clone(default__minus__parsers$0);
  __at___$0.parsers = $targ$0;
  $targ$1 = clone(default__minus__formatters$0);
  __at___$0.formatters = $targ$1;
  return __at___$0;
};
Format$0.prototype.format = function format(engine$0, descr$0, body$0) {
  var x$0 = undefined;
  var contents$1 = undefined;
  var bridge$$7818$0 = undefined;
  var m$1$0 = undefined;
  var r$0 = undefined;
  var ext$0 = undefined;
  var t0$1 = undefined;
  var t1$1 = undefined;
  var t2$0 = undefined;
  var f$1 = undefined;
  var f$0 = undefined;
  var ph$0$0 = undefined;
  var d$0 = undefined;
  var $$7771$0 = undefined;
  var $$7772$0 = undefined;
  var t0$0 = undefined;
  var t1$0 = undefined;
  var m$0$0 = undefined;
  var t0$2 = undefined;
  var t1$2 = undefined;
  var $targ$2 = undefined;
  var lang$0 = undefined;
  var format$0 = undefined;
  var contents$0 = undefined;
  var parse$0 = undefined;
  var res$0 = undefined;
  var form$0 = undefined;
  var __at___$1 = undefined;
  var self$0 = undefined;
  __at___$1 = this;
  self$0 = this;
  x$0 = descr$0.shed().raw().split(":");
  m$0$0 = x$0;
  if (Array.isArray(m$0$0) && (t0$0 = m$0$0.length, t0$0 === 2)) {
    t1$0 = m$0$0[0];
    f$0 = t1$0;
    ph$0$0 = t1$0;
    d$0 = m$0$0[1];
    t0$1 = getProjector(RegExp("\\.([a-zA-Z0-9]+)$", ""))(ph$0$0);
    if (t0$1[0] && (t1$1 = t0$1[1], t2$0 = t1$1.length, t2$0 === 2)) {
      t1$1[0];
      ext$0 = t1$1[1];
      if (!body$0.empty()) {
        throw ErrorFactory(["format"]).create("Do not provide both a filename and a body for format.");
      }
      r$0 = engine$0.resolvers.format || engine$0.resolvers["default"];
      if (!r$0) {
        throw ErrorFactory(["noResolver"]).create(ENode([], {}, ["Cannot resolve \"", f$0, "\""]).toString());
      }
      m$1$0 = r$0(f$0);
      bridge$$7818$0 = m$1$0;
      if (typeof bridge$$7818$0 === "string" && (contents$1 = bridge$$7818$0, true) || ___hasprop(bridge$$7818$0, "contents") && (contents$1 = bridge$$7818$0.contents, true)) {
        $targ$2 = [ext$0, d$0, contents$1];
      } else {
        throw ErrorFactory(["badResolver"]).create(ENode([], {}, ["Bad resolution for \"", f$0, "\""]).toString());
      }
    } else {
      $targ$2 = [f$0, d$0, tools$0.dedent(tools$0.rawRelative(body$0))];
    }
  } else {
    if (!body$0) {
      throw ErrorFactory(["format"]).create(ENode([], {}, ["You must provide a filename, if there is no body to format."]).toString());
    } else {
      if (($$7771$0 = Array.isArray(m$0$0)) && (t0$0 = m$0$0.length, t0$0 === 1)) {
        f$1 = m$0$0[0];
        $targ$2 = [f$1, "auto", tools$0.dedent(tools$0.rawRelative(body$0))];
      } else {
        if ($$7771$0 && t0$0 === 0) {
          $targ$2 = ["json", "auto", tools$0.dedent(tools$0.rawRelative(body$0))];
        } else {
          throw ErrorFactory(["format"]).create(ENode([], {}, ["Please use the syntax \"lang:format\", or \"format\" e.g.\""]).toString() + ENode([], {}, ["\"json:table\", after the format keyword"]).toString());
        }
      }
    }
  }
  t0$2 = $targ$2;
  if (Array.isArray(t0$2) && (t1$2 = t0$2.length, t1$2 === 3)) {
    lang$0 = t0$2[0];
    format$0 = t0$2[1];
    contents$0 = t0$2[2];
  } else {
    ___match_error($targ$2, "{lang, format, contents}");
  }
  [lang$0, format$0, contents$0];
  parse$0 = send(send(__at___$1, "parsers", true), lang$0);
  if (!parse$0) {
    throw ErrorFactory(["noParser"]).create(ENode([], {}, ["Cannot parse \"", lang$0, "\". You probably need to load a plugin."]).toString());
  }
  res$0 = parse$0(contents$0);
  form$0 = send(send(__at___$1, "formatters", true), format$0);
  if (!form$0) {
    throw ErrorFactory(["noFormat"]).create(ENode([], {}, ["Cannot format as \"", format$0, "\". You probably need to load a plugin."]).toString());
  }
  return form$0(engine$0, res$0);
};
__amp____colon__(Format$0, __amp____colon__(($targ$3 = "Format", accum$0 = {}, accum$0["::name"] = $targ$3, accum$0), ($targ$4 = true, accum$1 = {}, accum$1["::egclass"] = $targ$4, accum$1)));
accum$2 = {};
accum$2.json = function json(contents$2) {
  return JSON.parse(contents$2);
};
default__minus__parsers$0 = accum$2;
auto__minus__format$0 = function autoFormat(engine$1, temp$0$0) {
  var t0$3 = undefined;
  var m$2 = undefined;
  var acc$0 = undefined;
  var temp$1 = undefined;
  var bridge$$7911$0 = undefined;
  var bridge$$7910$0 = undefined;
  var bridge$$7909$0 = undefined;
  var m$3 = undefined;
  var acc$1 = undefined;
  var temp$2 = undefined;
  var bridge$$7908$0 = undefined;
  var obj$0 = undefined;
  var ph$1$0 = undefined;
  t0$3 = temp$0$0;
  obj$0 = t0$3;
  ph$1$0 = t0$3;
  if (Array.isArray(ph$1$0)) {
    return ENode(["ul"], {}, (acc$0 = [], temp$1 = null, m$2 = null, (function() {
      $0: for (var _iterator = obj$0[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$2 = _step.value;
        var entry$0 = undefined;
        entry$0 = m$2;
        temp$1 = ENode(["li"], {}, auto__minus__format$0(engine$1, entry$0));
        acc$0.push(temp$1);
      }
    })(), acc$0));
  } else {
    bridge$$7908$0 = ph$1$0;
    if ((bridge$$7909$0 = bridge$$7908$0, (bridge$$7910$0 = bridge$$7909$0, (bridge$$7911$0 = bridge$$7910$0, typeof bridge$$7911$0 === "string" || typeof bridge$$7911$0 === "number") || typeof bridge$$7910$0 === "boolean") || bridge$$7909$0 === null) || bridge$$7908$0 === void 0) {
      return engine$1.genFromSource(String(obj$0));
    } else {
      return ENode(["table"], {}, (acc$1 = [], temp$2 = null, m$3 = null, (function() {
        $1: for (var _iterator = items(obj$0)[Symbol.iterator](),
            _step; !(_step = _iterator.next()).done; ) {
          m$3 = _step.value;
          var k$0 = undefined;
          var v$0 = undefined;
          var t0$4 = undefined;
          var t1$3 = undefined;
          t0$4 = m$3;
          if (Array.isArray(t0$4) && (t1$3 = t0$4.length, t1$3 === 2)) {
            k$0 = t0$4[0];
            v$0 = t0$4[1];
            temp$2 = ENode(["tr"], {}, [ENode(["td"], {}, auto__minus__format$0(engine$1, k$0)), ENode(["td"], {}, auto__minus__format$0(engine$1, v$0))]);
            acc$1.push(temp$2);
          } else {
            ___match_error(m$3);
          }
        }
      })(), acc$1));
    }
  }
};
detect__minus__columns$0 = function detectColumns(list$0) {
  var m$4 = undefined;
  var counts$0 = undefined;
  var len$0 = undefined;
  if (!Array.isArray(list$0)) {
    return false;
  }
  counts$0 = {};
  len$0 = 0;
  m$4 = null;
  $2: for (var _iterator = list$0[Symbol.iterator](),
      _step; !(_step = _iterator.next()).done; ) {
    m$4 = _step.value;
    var bridge$$8037$0 = undefined;
    var bridge$$8036$0 = undefined;
    var bridge$$8035$0 = undefined;
    var m$5 = undefined;
    var acc$2 = undefined;
    var temp$3 = undefined;
    var things$0 = undefined;
    var entry$2 = undefined;
    var t0$6 = undefined;
    var bridge$$8034$0 = undefined;
    var entry$1 = undefined;
    var ph$2$0 = undefined;
    var t0$5 = undefined;
    t0$5 = m$4;
    entry$1 = t0$5;
    ph$2$0 = t0$5;
    t0$6 = ph$2$0;
    if (Array.isArray(t0$6)) {
      entry$2 = t0$6;
      if (nequal(keys(counts$0), [])) {
        return false;
      }
      if (entry$2.length > len$0) {
        len$0 = entry$2.length;
        len$0;
      }
    } else {
      if (len$0 > 0) {
        return false;
      } else {
        bridge$$8034$0 = ph$2$0;
        if ((bridge$$8035$0 = bridge$$8034$0, (bridge$$8036$0 = bridge$$8035$0, (bridge$$8037$0 = bridge$$8036$0, typeof bridge$$8037$0 === "string" || typeof bridge$$8037$0 === "number") || typeof bridge$$8036$0 === "boolean") || bridge$$8035$0 === null) || bridge$$8034$0 === void 0) {
          return false;
        } else {
          t0$6 = getProjector(items)(ph$2$0);
          if (t0$6[0]) {
            things$0 = t0$6[1];
            acc$2 = [];
            temp$3 = null;
            m$5 = null;
            $3: for (var _iterator2 = things$0[Symbol.iterator](),
                _step2; !(_step2 = _iterator2.next()).done; ) {
              m$5 = _step2.value;
              var k$1 = undefined;
              var v$1 = undefined;
              var t0$7 = undefined;
              var t1$4 = undefined;
              t0$7 = m$5;
              if (Array.isArray(t0$7) && (t1$4 = t0$7.length, t1$4 === 2)) {
                k$1 = t0$7[0];
                v$1 = t0$7[1];
                counts$0[k$1] = send(counts$0, k$1) || 0;
                temp$3 = counts$0[k$1] = send(counts$0, k$1) + 1;
                acc$2.push(temp$3);
              } else {
                ___match_error(m$5);
              }
            }
            acc$2;
          } else {
            return false;
          }
        }
      }
    }
  }
  return len$0 || keys(counts$0);
};
make__minus__table$0 = function makeTable(engine$2, ks$0, temp$4$0) {
  var t0$8 = undefined;
  var t1$5 = undefined;
  var m$6 = undefined;
  var acc$3 = undefined;
  var temp$5 = undefined;
  var m$8 = undefined;
  var acc$5 = undefined;
  var temp$7 = undefined;
  var m$9 = undefined;
  var acc$6 = undefined;
  var temp$8 = undefined;
  var columns$0 = undefined;
  var t0$9 = undefined;
  var rows$0 = undefined;
  var ph$3$0 = undefined;
  t0$8 = temp$4$0;
  rows$0 = t0$8;
  t1$5 = getProjector(detect__minus__columns$0)(t0$8);
  if (t1$5[0]) {
    ph$3$0 = t1$5[1];
  } else {
    ___match_error(temp$4$0);
  }
  if (!ph$3$0) {
    return false;
  } else {
    if (typeof ph$3$0 === "number") {
      return ENode(["table"], {}, (acc$3 = [], temp$5 = null, m$6 = null, (function() {
        $4: for (var _iterator = zip(rows$0, ks$0 || [])[Symbol.iterator](),
            _step; !(_step = _iterator.next()).done; ) {
          (function() {
            m$6 = _step.value;
            var m$7 = undefined;
            var acc$4 = undefined;
            var temp$6 = undefined;
            var row$0 = undefined;
            var key$0 = undefined;
            var t0$10 = undefined;
            var t1$6 = undefined;
            t0$10 = m$6;
            if (Array.isArray(t0$10) && (t1$6 = t0$10.length, t1$6 === 2)) {
              row$0 = t0$10[0];
              key$0 = t0$10[1];
              temp$5 = ENode(["tr"], {}, [key$0 ? ENode(["td"], {}, key$0) : "", (acc$4 = [], temp$6 = null, m$7 = null, (function() {
                $5: for (var _iterator2 = row$0[Symbol.iterator](),
                    _step2; !(_step2 = _iterator2.next()).done; ) {
                  m$7 = _step2.value;
                  var entry$3 = undefined;
                  entry$3 = m$7;
                  temp$6 = ENode(["td"], {}, auto__minus__format$0(engine$2, entry$3));
                  acc$4.push(temp$6);
                }
              })(), acc$4)]);
              acc$3.push(temp$5);
            } else {
              ___match_error(m$6);
            }
          })();
        }
      })(), acc$3));
    } else {
      t0$9 = ph$3$0;
      if (Array.isArray(t0$9)) {
        columns$0 = t0$9;
        return ENode(["table"], {}, [ENode(["tr"], {}, [ks$0 ? ENode(["th"], {}, "") : "", (acc$5 = [], temp$7 = null, m$8 = null, (function() {
          $6: for (var _iterator = columns$0[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            m$8 = _step.value;
            var col$0 = undefined;
            col$0 = m$8;
            temp$7 = ENode(["th"], {}, col$0);
            acc$5.push(temp$7);
          }
        })(), acc$5)]), (acc$6 = [], temp$8 = null, m$9 = null, (function() {
          $7: for (var _iterator = zip(rows$0, ks$0 || [])[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            (function() {
              m$9 = _step.value;
              var m$10 = undefined;
              var acc$7 = undefined;
              var temp$9 = undefined;
              var row$1 = undefined;
              var key$1 = undefined;
              var t0$11 = undefined;
              var t1$7 = undefined;
              t0$11 = m$9;
              if (Array.isArray(t0$11) && (t1$7 = t0$11.length, t1$7 === 2)) {
                row$1 = t0$11[0];
                key$1 = t0$11[1];
                temp$8 = ENode(["tr"], {}, [key$1 ? ENode(["td"], {}, key$1) : "", (acc$7 = [], temp$9 = null, m$10 = null, (function() {
                  $8: for (var _iterator2 = columns$0[Symbol.iterator](),
                      _step2; !(_step2 = _iterator2.next()).done; ) {
                    m$10 = _step2.value;
                    var col$1 = undefined;
                    col$1 = m$10;
                    temp$9 = ENode(["td"], {}, auto__minus__format$0(engine$2, send(row$1, col$1) || ""));
                    acc$7.push(temp$9);
                  }
                })(), acc$7)]);
                acc$6.push(temp$8);
              } else {
                ___match_error(m$9);
              }
            })();
          }
        })(), acc$6)]);
      } else {
        return ___match_error(ph$3$0, "Array? columns");
      }
    }
  }
};
default__minus__formatters$0 = __amp____colon__((accum$3 = {}, accum$3.auto = function auto(engine$3, obj$1) {
  return auto__minus__format$0(engine$3, obj$1);
}, accum$3), __amp____colon__((accum$4 = {}, accum$4.list = function list(engine$4, obj$2) {
  return auto__minus__format$0(engine$4, obj$2);
}, accum$4), (accum$5 = {}, accum$5.table = function table(engine$5, temp$10$0) {
  var t0$12 = undefined;
  var m$11 = undefined;
  var acc$8 = undefined;
  var temp$11 = undefined;
  var obj$3 = undefined;
  var ph$4$0 = undefined;
  t0$12 = temp$10$0;
  obj$3 = t0$12;
  ph$4$0 = t0$12;
  if (Array.isArray(ph$4$0)) {
    return make__minus__table$0(engine$5, null, obj$3) || (function() {
      throw ErrorFactory(["format", "table"]).create(ENode([], {}, ["The object cannot be formatted as a table."]).toString() + ENode([], {}, ["The rows may not be regular enough."]).toString());
    })();
  } else {
    return make__minus__table$0(engine$5, keys(obj$3), (acc$8 = [], temp$11 = null, m$11 = null, (function() {
      $9: for (var _iterator = items(obj$3)[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$11 = _step.value;
        var k$2 = undefined;
        var v$2 = undefined;
        var t0$13 = undefined;
        var t1$8 = undefined;
        t0$13 = m$11;
        if (Array.isArray(t0$13) && (t1$8 = t0$13.length, t1$8 === 2)) {
          k$2 = t0$13[0];
          v$2 = t0$13[1];
          temp$11 = v$2;
          acc$8.push(temp$11);
        } else {
          ___match_error(m$11);
        }
      }
    })(), acc$8)) || auto__minus__format$0(engine$5, obj$3);
  }
}, accum$5)));
$targ$5 = Format$0;
exports.Format = $targ$5;
void 0;
