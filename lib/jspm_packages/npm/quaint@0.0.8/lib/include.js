/* */ 
(function(process) {
  "use strict";
  require("earlgrey-runtime/5");
  var $targ$1 = undefined;
  var accum$0 = undefined;
  var $targ$2 = undefined;
  var accum$1 = undefined;
  var accum$2 = undefined;
  var accum$3 = undefined;
  var $targ$3 = undefined;
  var opg$0 = undefined;
  var Source$0 = undefined;
  var tools$0 = undefined;
  var Include$0 = undefined;
  var default__minus__extensions$0 = undefined;
  opg$0 = require("opg");
  Source$0 = getProperty(opg$0, "Source", "opg");
  tools$0 = require("./tools");
  Include$0 = function Include() {
    var $targ$0 = undefined;
    var __at___$0 = undefined;
    if (!getChecker(Include$0)(this)) {
      __at___$0 = Object.create(Include$0.prototype);
    } else {
      __at___$0 = this;
    }
    $targ$0 = clone(default__minus__extensions$0);
    __at___$0.extensions = $targ$0;
    return __at___$0;
  };
  Include$0.prototype.process = function process(engine$0, ext$0, file$0, contents$0) {
    var fn$0 = undefined;
    var __at___$1 = undefined;
    var self$0 = undefined;
    __at___$1 = this;
    self$0 = this;
    fn$0 = send(send(__at___$1, "extensions", true), ext$0);
    if (!fn$0) {
      throw ErrorFactory(["noIncluder"]).create(ENode([], {}, ["Do not know how to include \"", file$0, "\""]).toString());
    }
    return fn$0(engine$0, file$0, contents$0);
  };
  Include$0.prototype.include = function include(engine$1, temp$0$0, body$0) {
    var t0$0 = undefined;
    var m$0 = undefined;
    var acc$0 = undefined;
    var temp$1 = undefined;
    var r$0 = undefined;
    var e$0 = undefined;
    var ext$1 = undefined;
    var ph$0$0 = undefined;
    var __at___$2 = undefined;
    var self$1 = undefined;
    __at___$2 = this;
    self$1 = this;
    t0$0 = temp$0$0;
    ext$1 = t0$0;
    ph$0$0 = t0$0;
    if (ph$0$0 === null) {
      r$0 = engine$1.resolvers.include || engine$1.resolvers["default"];
      e$0 = engine$1;
      acc$0 = [];
      temp$1 = null;
      m$0 = null;
      $0: for (var _iterator = body$0.raw().split(RegExp("[ \\n,]+", ""))[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$0 = _step.value;
        var t0$2 = undefined;
        var t1$0 = undefined;
        var t2$0 = undefined;
        var contents$1 = undefined;
        var bridge$$8574$0 = undefined;
        var m$1$0 = undefined;
        var ext$2 = undefined;
        var bridge$$8512$0 = undefined;
        var filename$0 = undefined;
        var ph$1$0 = undefined;
        var t0$1 = undefined;
        t0$1 = m$0;
        filename$0 = t0$1;
        ph$1$0 = t0$1;
        bridge$$8512$0 = ph$1$0;
        if ((t0$2 = getProjector(RegExp("\\.([a-zA-Z0-9]+)$", ""))(bridge$$8512$0), t0$2[0] && (t1$0 = t0$2[1], t2$0 = t1$0.length, t2$0 === 2 && (t1$0[0], ext$2 = t1$0[1], true))) || (ext$2 = "q", true)) {
          if (!r$0) {
            throw ErrorFactory(["noResolver"]).create(ENode([], {}, ["Cannot resolve \"", filename$0, "\""]).toString());
          }
          m$1$0 = r$0(filename$0);
          bridge$$8574$0 = m$1$0;
          if (typeof bridge$$8574$0 === "string" && (contents$1 = bridge$$8574$0, true) || ___hasprop(bridge$$8574$0, "contents") && (contents$1 = bridge$$8574$0.contents, true)) {
            temp$1 = __at___$2.process(engine$1, ext$2, filename$0, contents$1);
          } else {
            throw ErrorFactory(["badResolver"]).create(ENode([], {}, ["Bad resolution for \"", filename$0, "\""]).toString());
          }
        } else {
          temp$1 = ___match_error(ph$1$0);
        }
        acc$0.push(temp$1);
      }
      return acc$0;
    } else {
      return __at___$2.process(engine$1, ext$1, "<quaint>", tools$0.dedent(tools$0.rawRelative(body$0)));
    }
  };
  __amp____colon__(Include$0, __amp____colon__(($targ$1 = "Include", accum$0 = {}, accum$0["::name"] = $targ$1, accum$0), ($targ$2 = true, accum$1 = {}, accum$1["::egclass"] = $targ$2, accum$1)));
  default__minus__extensions$0 = __amp____colon__((accum$2 = {}, accum$2.q = function q(engine$2, file$1, contents$2) {
    return engine$2.genFromSource(Source$0(contents$2, file$1));
  }, accum$2), (accum$3 = {}, accum$3.json = function json(engine$3, file$2, contents$3) {
    engine$3.setenv(JSON.parse(contents$3));
    return "";
  }, accum$3));
  $targ$3 = Include$0;
  exports.Include = $targ$3;
  void 0;
})(require("process"));
