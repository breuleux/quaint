/* */ 
"use strict";
require("earlgrey-runtime/5");
var calcSize$0 = undefined;
var addDefaults$0 = undefined;
var tuckWhitespace$0 = undefined;
var classifyOperators$0 = undefined;
var padLocations$0 = undefined;
var tokgrp$0 = undefined;
var MAX$0 = undefined;
var priorities$0 = undefined;
var $targ$26 = undefined;
var accum$0 = undefined;
var $targ$27 = undefined;
var accum$1 = undefined;
var $targ$30 = undefined;
var accum$2 = undefined;
var $targ$31 = undefined;
var accum$3 = undefined;
var $targ$34 = undefined;
var accum$4 = undefined;
var $targ$35 = undefined;
var accum$5 = undefined;
var $targ$40 = undefined;
var accum$6 = undefined;
var $targ$41 = undefined;
var accum$7 = undefined;
var package$1 = undefined;
var $targ$58 = undefined;
var $targ$59 = undefined;
var $targ$60 = undefined;
var $targ$61 = undefined;
var $targ$62 = undefined;
var $targ$63 = undefined;
var $targ$64 = undefined;
var $targ$65 = undefined;
var opg$0 = undefined;
var Source$0 = undefined;
var Location$0 = undefined;
var __lt____lt____colon__$0 = undefined;
var tknz$0 = undefined;
var Tokenizer$0 = undefined;
var indentTracker$0 = undefined;
var inferLocation$0 = undefined;
var _parse$0 = undefined;
var Parser$0 = undefined;
var TokenGroups$0 = undefined;
var PriorityOrder$0 = undefined;
var reg$0 = undefined;
var register__minus__all$0 = undefined;
var tokenizer$0 = undefined;
var prio$0 = undefined;
var QAst$0 = undefined;
var _ts$0 = undefined;
var Text$0 = undefined;
var $targ$0 = undefined;
var $targ$1 = undefined;
var _os$0 = undefined;
var Oper$0 = undefined;
var $targ$2 = undefined;
var $targ$3 = undefined;
var _ss$0 = undefined;
var Seq$0 = undefined;
var $targ$4 = undefined;
var $targ$5 = undefined;
var finalize$0 = undefined;
var adjust$0 = undefined;
var adjust2$0 = undefined;
var parser$0 = undefined;
var tokenize$0 = undefined;
var parse$0 = undefined;
opg$0 = require("opg");
Source$0 = getProperty(opg$0, "Source", "opg");
Location$0 = getProperty(opg$0, "Location", "opg");
__lt____lt____colon__$0 = getProperty(opg$0, "transferLocation", "opg");
tknz$0 = getProperty(opg$0, "tokenize", "opg");
Tokenizer$0 = getProperty(tknz$0, "Tokenizer", "tknz");
indentTracker$0 = getProperty(tknz$0, "indentTracker", "tknz");
inferLocation$0 = getProperty(tknz$0, "inferLocation", "tknz");
_parse$0 = getProperty(opg$0, "parse", "opg");
Parser$0 = getProperty(_parse$0, "Parser", "_parse");
TokenGroups$0 = getProperty(_parse$0, "TokenGroups", "_parse");
PriorityOrder$0 = getProperty(_parse$0, "PriorityOrder", "_parse");
reg$0 = require("kaiser/reg");
register__minus__all$0 = getProperty(reg$0, "registerAll", "reg");
tokenizer$0 = Tokenizer$0({
  regexps: [["nl", " *(?:\n *)+"], ["ws", "[ ~]+"], ["op", "[!@#$%^&*_\\-+=<>/?;:.`|]+|[(){}\\[\\],.]"], ["word", "(?:\\\\.|[^\n!@#$%^&*_\\-+=<>/?;:.`|\\[\\](){},. ~])+"], ["unknown", "."]],
  post: (calcSize$0 = function calcSize(temp$0$0) {
    var t0$0 = undefined;
    var t0$2 = undefined;
    var t1$0 = undefined;
    var $targ$6 = undefined;
    var x$0 = undefined;
    var t0$1 = undefined;
    var token$0 = undefined;
    var ph$0$0 = undefined;
    t0$0 = temp$0$0;
    token$0 = t0$0;
    ph$0$0 = t0$0;
    t0$1 = ph$0$0;
    if (___hasprop(t0$1, "type") && t0$1.type === "nl") {
      $targ$6 = token$0.token.split("\n");
      t0$2 = $targ$6;
      if (Array.isArray(t0$2) && (t1$0 = t0$2.length, t1$0 >= 1)) {
        Array.prototype.slice.call(t0$2, 0, -1);
        x$0 = t0$2[t1$0 - 1];
      } else {
        ___match_error($targ$6, "{*, x}");
      }
      return x$0.length;
    } else {
      return -1;
    }
  }, addDefaults$0 = function addDefaults(token$1) {
    return __amp____colon__(token$1, {
      wsb: 0,
      wsa: 0
    });
  }, tuckWhitespace$0 = function tuckWhitespace(temp$1$0, i$0, toks$0) {
    var t0$3 = undefined;
    var t0$5 = undefined;
    var t1$1 = undefined;
    var t0$6 = undefined;
    var $targ$8 = undefined;
    var $targ$9 = undefined;
    var bridge$$5442$0 = undefined;
    var $targ$10 = undefined;
    var $targ$11 = undefined;
    var $targ$12 = undefined;
    var $targ$13 = undefined;
    var $targ$14 = undefined;
    var $targ$15 = undefined;
    var token$2 = undefined;
    var $targ$7 = undefined;
    var prev$0 = undefined;
    var next$0 = undefined;
    var $$5448$0 = undefined;
    var $$5449$0 = undefined;
    var $$5450$0 = undefined;
    var t0$4 = undefined;
    var bridge$$5441$0 = undefined;
    var tok$0 = undefined;
    var ph$1$0 = undefined;
    t0$3 = temp$1$0;
    tok$0 = t0$3;
    ph$1$0 = t0$3;
    $targ$7 = [send(toks$0, i$0 - 1), send(toks$0, i$0 + 1)];
    t0$5 = $targ$7;
    if (Array.isArray(t0$5) && (t1$1 = t0$5.length, t1$1 === 2)) {
      prev$0 = t0$5[0];
      next$0 = t0$5[1];
    } else {
      ___match_error($targ$7, "{prev, next}");
    }
    [prev$0, next$0];
    t0$4 = ph$1$0;
    if (($$5449$0 = ___hasprop(t0$4, "type")) && (t0$4.type === "ws" && ___hasprop(t0$4, "token"))) {
      token$2 = t0$4.token;
      $targ$8 = token$2.length;
      t0$6 = $targ$8;
      prev$0.wsa = t0$6;
      next$0.wsb = t0$6;
      $targ$9 = tok$0;
      next$0.tucked = $targ$9;
      return [];
    } else {
      if ($$5449$0 && (t0$4.type === "op" && (___hasprop(t0$4, "token") && (bridge$$5441$0 = t0$4.token, (bridge$$5442$0 = bridge$$5441$0, bridge$$5442$0 === "]" || bridge$$5442$0 === "}") || bridge$$5441$0 === ")")))) {
        $targ$10 = 1;
        prev$0.wsa = $targ$10;
        return [tok$0];
      } else {
        if ($$5449$0 && t0$4.type === "indent") {
          $targ$11 = prev$0.wsb;
          prev$0.wsa = $targ$11;
          return [tok$0];
        } else {
          if ($$5449$0 && t0$4.type === "nl") {
            $targ$12 = 1;
            prev$0.wsa = $targ$12;
            $targ$13 = 1;
            next$0.wsb = $targ$13;
            return [tok$0];
          } else {
            if ($$5449$0 && (($$5450$0 = t0$4.type === "boundary") && prev$0)) {
              $targ$14 = 1;
              prev$0.wsa = $targ$14;
              return [tok$0];
            } else {
              if ($$5450$0 && next$0) {
                $targ$15 = 1;
                next$0.wsb = $targ$15;
                return [tok$0];
              } else {
                return [tok$0];
              }
            }
          }
        }
      }
    }
  }, classifyOperators$0 = function classifyOperators(temp$2$0) {
    var t0$7 = undefined;
    var bridge$$5560$0 = undefined;
    var $targ$16 = undefined;
    var $targ$18 = undefined;
    var $targ$17 = undefined;
    var $targ$19 = undefined;
    var $targ$20 = undefined;
    var bridge$$5662$0 = undefined;
    var $targ$22 = undefined;
    var $targ$23 = undefined;
    var bridge$$5665$0 = undefined;
    var $targ$24 = undefined;
    var $targ$25 = undefined;
    var bridge$$5661$0 = undefined;
    var bridge$$5664$0 = undefined;
    var bridge$$5667$0 = undefined;
    var m$0$0 = undefined;
    var $$5745$0 = undefined;
    var $$5746$0 = undefined;
    var $$5747$0 = undefined;
    var t0$9 = undefined;
    var m$1$0 = undefined;
    var t0$10 = undefined;
    var t1$2 = undefined;
    var never_sfx$0 = undefined;
    var $targ$21 = undefined;
    var get$0 = undefined;
    var token$4 = undefined;
    var wsb$0 = undefined;
    var wsa$0 = undefined;
    var token$3 = undefined;
    var tuck$0 = undefined;
    var sfx$0 = undefined;
    var pad$0 = undefined;
    var $$5566$0 = undefined;
    var $$5567$0 = undefined;
    var t0$8 = undefined;
    var bridge$$5559$0 = undefined;
    var tok$1 = undefined;
    var ph$2$0 = undefined;
    t0$7 = temp$2$0;
    tok$1 = t0$7;
    ph$2$0 = t0$7;
    tuck$0 = tok$1.tucked;
    delete tok$1.tucked;
    sfx$0 = this.sfx;
    pad$0 = function pad(tok$2) {
      var padder$0 = undefined;
      if (sfx$0) {
        padder$0 = tuck$0 || {
          type: "sh_ws",
          token: "",
          location: Location$0(tok$2.location.source, tok$2.location.start, tok$2.location.start)
        };
        return [padder$0, tok$2];
      } else {
        return [tok$2];
      }
    };
    t0$8 = ph$2$0;
    if (($$5567$0 = ___hasprop(t0$8, "type")) && (bridge$$5559$0 = t0$8.type, (bridge$$5560$0 = bridge$$5559$0, bridge$$5560$0 === "boundary" || bridge$$5560$0 === "ws") || bridge$$5559$0 === "indent")) {
      $targ$16 = false;
      this.sfx = $targ$16;
      return [tok$1];
    } else {
      if ($$5567$0 && (t0$8.type === "nl" && ___hasprop(t0$8, "token"))) {
        token$3 = t0$8.token;
        $targ$17 = false;
        this.sfx = $targ$17;
        if (token$3.split("\n").length <= 2) {
          $targ$18 = "sh_nl";
          tok$1.type = $targ$18;
          void 0;
        }
        return [tok$1];
      } else {
        if ($$5567$0 && t0$8.type === "dedent") {
          $targ$19 = true;
          this.sfx = $targ$19;
          return [tok$1];
        } else {
          if ($$5567$0 && t0$8.type === "word") {
            $targ$20 = true;
            this.sfx = $targ$20;
            return pad$0(tok$1);
          } else {
            if ($$5567$0 && (t0$8.type === "op" && (___hasprop(t0$8, "token") && (token$4 = t0$8.token, ___hasprop(t0$8, "wsb") && (wsb$0 = t0$8.wsb, ___hasprop(t0$8, "wsa")))))) {
              wsa$0 = t0$8.wsa;
              never_sfx$0 = false;
              m$0$0 = tok$1.token;
              bridge$$5661$0 = m$0$0;
              if ((bridge$$5662$0 = bridge$$5661$0, bridge$$5662$0 === "(" || bridge$$5662$0 === "[") || bridge$$5661$0 === "{") {
                $targ$22 = "open";
                tok$1.type = $targ$22;
                $targ$23 = false;
                this.sfx = $targ$23;
                return pad$0(tok$1);
              } else {
                bridge$$5664$0 = m$0$0;
                if ((bridge$$5665$0 = bridge$$5664$0, bridge$$5665$0 === ")" || bridge$$5665$0 === "]") || bridge$$5664$0 === "}") {
                  $targ$24 = "close";
                  tok$1.type = $targ$24;
                  $targ$25 = true;
                  this.sfx = $targ$25;
                  return [tok$1];
                } else {
                  bridge$$5667$0 = m$0$0;
                  if (bridge$$5667$0 === "," || bridge$$5667$0 === ":") {
                    never_sfx$0 = true;
                    never_sfx$0;
                  } else {
                    undefined;
                  }
                }
              }
              m$1$0 = [sfx$0, wsb$0, wsa$0];
              if (($$5745$0 = Array.isArray(m$1$0)) && (t0$9 = m$1$0.length, ($$5747$0 = t0$9 === 3) && ((m$1$0[0] ? true : false) && (m$1$0[1] === 0 && m$1$0[2] === 0)))) {
                $targ$21 = ["sh_ifx", false, [tok$1]];
              } else {
                if ($$5747$0 && ((m$1$0[0] ? true : false) && (m$1$0[1] > 0 && m$1$0[2] > 0))) {
                  $targ$21 = ["wi_ifx", false, [tok$1]];
                } else {
                  if ($$5747$0 && ((m$1$0[0] ? true : false) && (m$1$0[1], m$1$0[2] === 0))) {
                    $targ$21 = ["sh_pfx", false, pad$0(tok$1)];
                  } else {
                    if ($$5747$0 && ((m$1$0[0] ? true : false) && m$1$0[1] === 0)) {
                      m$1$0[2];
                      $targ$21 = [never_sfx$0 ? "wi_ifx" : "sh_sfx", !never_sfx$0, [tok$1]];
                    } else {
                      if ($$5747$0 && (!m$1$0[0] && (m$1$0[1] === 0 && m$1$0[2] === 0))) {
                        $targ$21 = ["sh_pfx", false, [tok$1]];
                      } else {
                        if ($$5747$0 && (!m$1$0[0] && (m$1$0[1] > 0 && m$1$0[2] > 0))) {
                          $targ$21 = ["wi_pfx", false, [tok$1]];
                        } else {
                          if ($$5747$0 && (!m$1$0[0] && (m$1$0[1], m$1$0[2] === 0))) {
                            $targ$21 = ["sh_pfx", false, [tok$1]];
                          } else {
                            if ($$5747$0 && (!m$1$0[0] && m$1$0[1] === 0)) {
                              m$1$0[2];
                              $targ$21 = [never_sfx$0 ? "wi_ifx" : "wi_pfx", false, [tok$1]];
                            } else {
                              $targ$21 = ___match_error(m$1$0, "{false?,  0  , _}");
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              t0$10 = $targ$21;
              if (Array.isArray(t0$10) && (t1$2 = t0$10.length, t1$2 === 3)) {
                tok$1.type = t0$10[0];
                this.sfx = t0$10[1];
                get$0 = t0$10[2];
              } else {
                ___match_error($targ$21, "{tok.type, this.sfx, get}");
              }
              return get$0;
            } else {
              throw ErrorFactory(["unknown_token_type"]).create(tok$1.type + " " + tok$1.token);
            }
          }
        }
      }
    }
  }, padLocations$0 = function padLocations(tok$3, i$1, toks$1) {
    return tok$3;
  }, [indentTracker$0(calcSize$0, true), inferLocation$0, addDefaults$0, tuckWhitespace$0, classifyOperators$0, padLocations$0])
});
tokgrp$0 = TokenGroups$0({
  sh_pfx: ["sh_pfx"],
  sh_ifx: ["sh_ifx"],
  sh_sfx: ["sh_sfx"],
  wi_pfx: ["wi_pfx"],
  wi_ifx: ["wi_ifx"],
  wi_sfx: ["wi_sfx"],
  sh_ws: ["sh_ws"],
  ws: ["ws"],
  sh_nl: ["sh_nl"],
  nl: ["nl"],
  indent: ["indent"],
  dedent: ["dedent"],
  openp: ["open ("],
  closep: ["close )"],
  opens: ["open ["],
  closes: ["close ]"],
  openb: ["open {"],
  closeb: ["close }"],
  period: ["sh_sfx ."],
  word: ["word"],
  boundary: ["boundary"]
});
MAX$0 = Infinity;
priorities$0 = {
  indent: {
    left: 240,
    right: 1
  },
  dedent: {
    left: 1,
    right: MAX$0
  },
  opens: {
    left: MAX$0,
    right: 2
  },
  closes: {
    left: 2,
    right: MAX$0
  },
  openb: {
    left: MAX$0,
    right: 3
  },
  closeb: {
    left: 3,
    right: MAX$0
  },
  openp: {
    left: MAX$0,
    right: 4
  },
  closep: {
    left: 4,
    right: MAX$0
  },
  nl: {
    left: 100,
    right: 100
  },
  sh_nl: {
    left: 150,
    right: 150
  },
  wi_pfx: {
    left: MAX$0,
    right: 200
  },
  wi_ifx: {
    left: 201,
    right: 200
  },
  wi_sfx: {
    left: 201,
    right: MAX$0
  },
  ws: {
    left: 250,
    right: 250
  },
  period: {
    left: 299,
    right: MAX$0
  },
  sh_pfx: {
    left: MAX$0,
    right: 300
  },
  sh_ifx: {
    left: 301,
    right: 300
  },
  sh_sfx: {
    left: 301,
    right: MAX$0
  },
  sh_ws: {
    left: 350,
    right: 350
  },
  word: {
    left: 1000,
    right: 1000
  },
  boundary: {
    left: -1,
    right: -1
  }
};
prio$0 = PriorityOrder$0(tokgrp$0, priorities$0);
QAst$0 = function QAst() {
  var __at___$0 = undefined;
  if (!getChecker(QAst$0)(this)) {
    __at___$0 = Object.create(QAst$0.prototype);
  } else {
    __at___$0 = this;
  }
  return __at___$0;
};
QAst$0.prototype.raw = function raw() {
  var rval$0 = undefined;
  var __at___$1 = undefined;
  var self$0 = undefined;
  __at___$1 = this;
  self$0 = this;
  rval$0 = false;
  try {
    rval$0 = __at___$1.location.text();
    rval$0;
  } catch (excv$0) {
    var e$0 = undefined;
    e$0 = excv$0;
    throw ErrorFactory(["noraw"]).create(ENode([], {}, ["Cannot get a raw string from ", __at___$1, "."]).toString());
    rval$0;
  }
  return rval$0;
};
__amp____colon__(QAst$0, __amp____colon__(($targ$26 = "QAst", accum$0 = {}, accum$0["::name"] = $targ$26, accum$0), ($targ$27 = true, accum$1 = {}, accum$1["::egclass"] = $targ$27, accum$1)));
_ts$0 = Symbol("text");
Text$0 = ___extend(function(x$1) {
  var $targ$28 = undefined;
  var $targ$29 = undefined;
  var __at___$2 = undefined;
  if (!getChecker(Text$0)(this)) {
    __at___$2 = Object.create(Text$0.prototype);
  } else {
    __at___$2 = this;
  }
  $targ$28 = x$1;
  __at___$2[0] = $targ$28;
  $targ$29 = 1;
  __at___$2.length = $targ$29;
  return __at___$2;
}, QAst$0);
$targ$0 = function() {
  var __at___$3 = undefined;
  var self$1 = undefined;
  __at___$3 = this;
  self$1 = this;
  return Text$0(__at___$3[0]);
};
Text$0.prototype["::clone"] = $targ$0;
$targ$1 = function() {
  var __at___$4 = undefined;
  var self$2 = undefined;
  __at___$4 = this;
  self$2 = this;
  return [_ts$0, __at___$4[0]];
};
Text$0.prototype["::serialize"] = $targ$1;
__amp____colon__(Text$0, __amp____colon__(($targ$30 = "Text", accum$2 = {}, accum$2["::name"] = $targ$30, accum$2), ($targ$31 = true, accum$3 = {}, accum$3["::egclass"] = $targ$31, accum$3)));
_os$0 = Symbol("oper");
Oper$0 = ___extend(function(x$2) {
  var $targ$32 = undefined;
  var $targ$33 = undefined;
  var __at___$5 = undefined;
  if (!getChecker(Oper$0)(this)) {
    __at___$5 = Object.create(Oper$0.prototype);
  } else {
    __at___$5 = this;
  }
  $targ$32 = x$2;
  __at___$5[0] = $targ$32;
  $targ$33 = 1;
  __at___$5.length = $targ$33;
  return __at___$5;
}, QAst$0);
$targ$2 = function() {
  var __at___$6 = undefined;
  var self$3 = undefined;
  __at___$6 = this;
  self$3 = this;
  return Oper$0(__at___$6[0]);
};
Oper$0.prototype["::clone"] = $targ$2;
$targ$3 = function() {
  var __at___$7 = undefined;
  var self$4 = undefined;
  __at___$7 = this;
  self$4 = this;
  return [_os$0, __at___$7[0]];
};
Oper$0.prototype["::serialize"] = $targ$3;
__amp____colon__(Oper$0, __amp____colon__(($targ$34 = "Oper", accum$4 = {}, accum$4["::name"] = $targ$34, accum$4), ($targ$35 = true, accum$5 = {}, accum$5["::egclass"] = $targ$35, accum$5)));
_ss$0 = Symbol("seq");
Seq$0 = ___extend(function() {
  var m$3 = undefined;
  var self$5 = undefined;
  var $targ$36 = undefined;
  var xs$0 = undefined;
  var t0$11 = undefined;
  var m$2$0 = undefined;
  var __at___$8 = undefined;
  if (!getChecker(Seq$0)(this)) {
    __at___$8 = Object.create(Seq$0.prototype);
  } else {
    __at___$8 = this;
  }
  m$2$0 = arguments;
  t0$11 = m$2$0.length;
  if (t0$11 >= 0) {
    xs$0 = Array.prototype.slice.call(m$2$0, 0);
    self$5 = __at___$8;
    m$3 = null;
    $0: for (var _iterator = enumerate(xs$0)[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$3 = _step.value;
      var $targ$37 = undefined;
      var i$2 = undefined;
      var x$3 = undefined;
      var t0$12 = undefined;
      var t1$3 = undefined;
      t0$12 = m$3;
      if (Array.isArray(t0$12) && (t1$3 = t0$12.length, t1$3 === 2)) {
        i$2 = t0$12[0];
        x$3 = t0$12[1];
        $targ$37 = x$3;
        self$5[i$2] = $targ$37;
        void 0;
      } else {
        ___match_error(m$3);
      }
    }
    $targ$36 = xs$0.length;
    __at___$8.length = $targ$36;
    void 0;
  } else {
    ___match_error(m$2$0, "{*xs}");
  }
  return __at___$8;
}, QAst$0);
$targ$4 = function() {
  var m$4 = undefined;
  var acc$0 = undefined;
  var temp$3 = undefined;
  var rval$1 = undefined;
  var $targ$38 = undefined;
  var $targ$39 = undefined;
  var __at___$9 = undefined;
  var self$6 = undefined;
  __at___$9 = this;
  self$6 = this;
  rval$1 = send(Seq$0, (acc$0 = [], temp$3 = null, m$4 = null, (function() {
    $1: for (var _iterator = enumerate(__at___$9)[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$4 = _step.value;
      var x$4 = undefined;
      var t0$13 = undefined;
      var t1$4 = undefined;
      t0$13 = m$4;
      if (Array.isArray(t0$13) && (t1$4 = t0$13.length, t1$4 === 2)) {
        t0$13[0];
        x$4 = t0$13[1];
        temp$3 = x$4;
        acc$0.push(temp$3);
      } else {
        ___match_error(m$4);
      }
    }
  })(), acc$0));
  $targ$38 = __at___$9.operator;
  rval$1.operator = $targ$38;
  $targ$39 = __at___$9.location;
  rval$1.location = $targ$39;
  return rval$1;
};
Seq$0.prototype["::clone"] = $targ$4;
$targ$5 = function() {
  var m$5 = undefined;
  var acc$1 = undefined;
  var temp$4 = undefined;
  var __at___$10 = undefined;
  var self$7 = undefined;
  __at___$10 = this;
  self$7 = this;
  return [_ss$0, (acc$1 = [], temp$4 = null, m$5 = null, (function() {
    $2: for (var _iterator = enumerate(__at___$10)[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$5 = _step.value;
      var x$5 = undefined;
      var t0$14 = undefined;
      var t1$5 = undefined;
      t0$14 = m$5;
      if (Array.isArray(t0$14) && (t1$5 = t0$14.length, t1$5 === 2)) {
        t0$14[0];
        x$5 = t0$14[1];
        temp$4 = x$5;
        acc$1.push(temp$4);
      } else {
        ___match_error(m$5);
      }
    }
  })(), acc$1)];
};
Seq$0.prototype["::serialize"] = $targ$5;
__amp____colon__(Seq$0, __amp____colon__(($targ$40 = "Seq", accum$6 = {}, accum$6["::name"] = $targ$40, accum$6), ($targ$41 = true, accum$7 = {}, accum$7["::egclass"] = $targ$41, accum$7)));
register__minus__all$0([QAst$0.prototype, Text$0.prototype, Oper$0.prototype, Seq$0.prototype], {"package": (package$1 = require("../package.json!systemjs-json"), package$1)});
finalize$0 = function finalize(temp$5$0) {
  var t0$15 = undefined;
  var rval$2 = undefined;
  var m$6 = undefined;
  var acc$2 = undefined;
  var temp$6 = undefined;
  var newparts$0 = undefined;
  var rval$3 = undefined;
  var parts$0 = undefined;
  var mid$0 = undefined;
  var token$5 = undefined;
  var location$0 = undefined;
  var type$0 = undefined;
  var $$6201$0 = undefined;
  var $$6202$0 = undefined;
  var t0$16 = undefined;
  var t1$6 = undefined;
  var t2$0 = undefined;
  var node$0 = undefined;
  var ph$3$0 = undefined;
  t0$15 = temp$5$0;
  node$0 = t0$15;
  ph$3$0 = t0$15;
  t0$16 = ph$3$0;
  t1$6 = t0$16.length;
  if (t1$6 === 3 && (t0$16[0] === null && (t2$0 = t0$16[1], mid$0 = t2$0, ___hasprop(t2$0, "token") && (token$5 = t2$0.token, ___hasprop(t2$0, "location") && (location$0 = t2$0.location, ___hasprop(t2$0, "type") && (type$0 = t2$0.type, t0$16[2] === null)))))) {
    rval$2 = __lt____lt____colon__$0(Text$0(token$5), location$0);
    return __amp____colon__(rval$2, {operatorToken: nequal(type$0, "word")});
  } else {
    if (t1$6 >= 0) {
      parts$0 = Array.prototype.slice.call(t0$16, 0);
      acc$2 = [];
      temp$6 = null;
      m$6 = null;
      $3: for (var _iterator = enumerate(parts$0)[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$6 = _step.value;
        var p0$0 = undefined;
        var p1$0 = undefined;
        var s$0 = undefined;
        var e$1 = undefined;
        var p$0 = undefined;
        var p$1 = undefined;
        var m$7$0 = undefined;
        var t0$18 = undefined;
        var t1$8 = undefined;
        var loc$0 = undefined;
        var $targ$42 = undefined;
        var rval$4 = undefined;
        var width$0 = undefined;
        var $targ$43 = undefined;
        var ph$5$0 = undefined;
        var i$3 = undefined;
        var ph$4$0 = undefined;
        var part$0 = undefined;
        var t0$17 = undefined;
        var t1$7 = undefined;
        var t2$1 = undefined;
        t0$17 = m$6;
        if (Array.isArray(t0$17) && (t1$7 = t0$17.length, t1$7 === 2)) {
          t2$1 = t0$17[0];
          i$3 = t2$1;
          ph$4$0 = t2$1;
          part$0 = t0$17[1];
          ph$5$0 = part$0;
          if (equal(i$3 % 2, 0)) {
            if (ph$5$0 === null) {
              temp$6 = __lt____lt____colon__$0(Text$0(""), (p0$0 = send(parts$0, i$3 - 1), p1$0 = send(parts$0, i$3 + 1), s$0 = p0$0 ? p0$0.location.end : p1$0.location.start, e$1 = p1$0 ? p1$0.location.start : p0$0.location.end, Location$0(p0$0 ? p0$0.location.source : p1$0.location.source, s$0, e$1)));
            } else {
              temp$6 = part$0;
            }
          } else {
            loc$0 = Location$0(part$0.location.source, (p$0 = send(parts$0, i$3 - 1), p$0) ? p$0.location.end : part$0.location.start, (p$1 = send(parts$0, i$3 + 1), p$1) ? p$1.location.start : part$0.location.end);
            m$7$0 = part$0.type;
            if (m$7$0 === "indent") {
              $targ$42 = [Oper$0("I("), "wide"];
            } else {
              if (m$7$0 === "dedent") {
                $targ$42 = [Oper$0(")I"), "wide"];
              } else {
                if (m$7$0 === "sh_nl") {
                  $targ$42 = [Oper$0("NL"), "short"];
                } else {
                  if (m$7$0 === "nl") {
                    $targ$42 = [Oper$0("NL"), "wide"];
                  } else {
                    if (m$7$0 === "sh_ws") {
                      $targ$42 = [Oper$0("J"), "short"];
                    } else {
                      if (m$7$0 === "ws") {
                        $targ$42 = [Oper$0("J"), "wide"];
                      } else {
                        if (getChecker(RegExp("^sh_", ""))(m$7$0)) {
                          $targ$42 = [Oper$0(part$0.token), "short"];
                        } else {
                          if (getChecker(RegExp("^wi_", ""))(m$7$0)) {
                            $targ$42 = [Oper$0(part$0.token), "wide"];
                          } else {
                            $targ$42 = [Oper$0(part$0.token), "wide"];
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            t0$18 = $targ$42;
            if (Array.isArray(t0$18) && (t1$8 = t0$18.length, t1$8 === 2)) {
              rval$4 = t0$18[0];
              width$0 = t0$18[1];
            } else {
              ___match_error($targ$42, "{let rval, width}");
            }
            [rval$4, width$0];
            $targ$43 = width$0;
            rval$4.width = $targ$43;
            temp$6 = __lt____lt____colon__$0(rval$4, loc$0);
          }
          acc$2.push(temp$6);
        } else {
          ___match_error(m$6);
        }
      }
      newparts$0 = acc$2;
      rval$3 = __lt____lt____colon__$0(send(Seq$0, newparts$0), Location$0(newparts$0[0].location.source, newparts$0[0].location.start, send(newparts$0, newparts$0.length - 1).location.end));
      __amp____colon__(rval$3, {
        operator: newparts$0[1][0],
        width: newparts$0[1].width
      });
      return adjust$0(rval$3);
    } else {
      throw ErrorFactory(["syntax", "unknown_node"]).create(node$0);
    }
  }
};
adjust$0 = function adjust(temp$7$0) {
  var t0$19 = undefined;
  var loc$1 = undefined;
  var $targ$44 = undefined;
  var $targ$45 = undefined;
  var $targ$46 = undefined;
  var $targ$47 = undefined;
  var $targ$48 = undefined;
  var findTarget$0 = undefined;
  var target$0 = undefined;
  var pre$0 = undefined;
  var inds$0 = undefined;
  var mid$1 = undefined;
  var inde$0 = undefined;
  var tail$0 = undefined;
  var t0$20 = undefined;
  var t1$9 = undefined;
  var t2$2 = undefined;
  var t3$0 = undefined;
  var t4$0 = undefined;
  var t5$0 = undefined;
  var node$1 = undefined;
  var ph$6$0 = undefined;
  t0$19 = temp$7$0;
  node$1 = t0$19;
  ph$6$0 = t0$19;
  t0$20 = ph$6$0;
  if (getChecker(Seq$0)(t0$20) && (t1$9 = t0$20.length, t1$9 === 5 && (pre$0 = t0$20[0], t2$2 = t0$20[1], inds$0 = t2$2, getChecker(Oper$0)(t2$2) && (t3$0 = t2$2.length, t3$0 === 1 && (t2$2[0] === "I(" && (mid$1 = t0$20[2], t4$0 = t0$20[3], inde$0 = t4$0, getChecker(Oper$0)(t4$0) && (t5$0 = t4$0.length, t5$0 === 1 && t4$0[0] === ")I"))))))) {
    tail$0 = t0$20[4];
    findTarget$0 = function findTarget(temp$8$0) {
      var t0$21 = undefined;
      var pre$1 = undefined;
      var t0$22 = undefined;
      var t1$10 = undefined;
      var t2$3 = undefined;
      var t3$1 = undefined;
      var x$6 = undefined;
      var ph$7$0 = undefined;
      t0$21 = temp$8$0;
      x$6 = t0$21;
      ph$7$0 = t0$21;
      t0$22 = ph$7$0;
      if (getChecker(Seq$0)(t0$22) && (t1$10 = t0$22.length, t1$10 >= 2 && (pre$1 = t0$22[0], t2$3 = t0$22[1], getChecker(Oper$0)(t2$3) && (t3$1 = t2$3.length, t3$1 === 1 && t2$3[0] === "NL")))) {
        Array.prototype.slice.call(t0$22, 2);
        return findTarget$0(pre$1) || x$6;
      } else {
        return false;
      }
    };
    target$0 = findTarget$0(mid$1);
    if (target$0) {
      loc$1 = pre$0.location.at_start();
      $targ$44 = loc$1.start;
      target$0.location.start = $targ$44;
      $targ$45 = loc$1.start;
      node$1.location.start = $targ$45;
      $targ$46 = loc$1;
      inds$0.location = $targ$46;
      $targ$47 = __lt____lt____colon__$0(Text$0(""), loc$1);
      node$1[0] = $targ$47;
      $targ$48 = pre$0;
      target$0[0] = $targ$48;
      void 0;
    }
    return node$1;
  } else {
    return node$1;
  }
};
adjust2$0 = function adjust2(temp$9$0) {
  var t0$23 = undefined;
  var t0$26 = undefined;
  var $targ$49 = undefined;
  var source$0 = undefined;
  var start$0 = undefined;
  var end$0 = undefined;
  var $targ$50 = undefined;
  var $targ$51 = undefined;
  var $targ$52 = undefined;
  var $targ$53 = undefined;
  var t0$27 = undefined;
  var $targ$54 = undefined;
  var source$1 = undefined;
  var start$1 = undefined;
  var end$1 = undefined;
  var $targ$55 = undefined;
  var rval$5 = undefined;
  var $targ$56 = undefined;
  var $targ$57 = undefined;
  var t$0 = undefined;
  var left$0 = undefined;
  var right$0 = undefined;
  var $$6537$0 = undefined;
  var t0$25 = undefined;
  var t1$12 = undefined;
  var t2$5 = undefined;
  var pre$2 = undefined;
  var ph$9$0 = undefined;
  var inds$1 = undefined;
  var mid$2 = undefined;
  var inde$1 = undefined;
  var tail$1 = undefined;
  var t0$24 = undefined;
  var t1$11 = undefined;
  var t2$4 = undefined;
  var t3$2 = undefined;
  var t4$1 = undefined;
  var t5$1 = undefined;
  var t6$0 = undefined;
  var node$2 = undefined;
  var ph$8$0 = undefined;
  t0$23 = temp$9$0;
  node$2 = t0$23;
  ph$8$0 = t0$23;
  t0$24 = ph$8$0;
  if (getChecker(Seq$0)(t0$24) && (t1$11 = t0$24.length, t1$11 === 5 && (t2$4 = t0$24[0], pre$2 = t2$4, ph$9$0 = t2$4, t3$2 = t0$24[1], inds$1 = t3$2, getChecker(Oper$0)(t3$2) && (t4$1 = t3$2.length, t4$1 === 1 && (t3$2[0] === "I(" && (mid$2 = t0$24[2], t5$1 = t0$24[3], inde$1 = t5$1, getChecker(Oper$0)(t5$1) && (t6$0 = t5$1.length, t6$0 === 1 && t5$1[0] === ")I"))))))) {
    tail$1 = t0$24[4];
    t0$25 = ph$9$0;
    if (getChecker(Seq$0)(t0$25) && (t1$12 = t0$25.length, t1$12 === 3 && (left$0 = t0$25[0], t2$5 = t0$25[1], ___hasprop(t2$5, "width") && t2$5.width === "wide"))) {
      right$0 = t0$25[2];
      $targ$49 = node$2.location;
      t0$26 = $targ$49;
      if (___hasprop(t0$26, "source") && (source$0 = t0$26.source, ___hasprop(t0$26, "start") && (start$0 = t0$26.start, ___hasprop(t0$26, "end")))) {
        end$0 = t0$26.end;
      } else {
        ___match_error($targ$49, "{=> source, => start, => end}");
      }
      [source$0, start$0, end$0];
      $targ$50 = pre$2[2];
      node$2[0] = $targ$50;
      $targ$51 = Location$0(source$0, right$0.location.start, end$0);
      node$2.location = $targ$51;
      $targ$52 = adjust$0(node$2);
      pre$2[2] = $targ$52;
      $targ$53 = Location$0(source$0, start$0, end$0);
      pre$2.location = $targ$53;
      return pre$2;
    } else {
      if (getChecker(Text$0)(t0$25) && (t1$12 = t0$25.length, t1$12 === 1 && (t$0 = t0$25[0], ___hasprop(t0$25, "operatorToken") && (t0$25.operatorToken ? true : false)))) {
        $targ$54 = node$2.location;
        t0$27 = $targ$54;
        if (___hasprop(t0$27, "source") && (source$1 = t0$27.source, ___hasprop(t0$27, "start") && (start$1 = t0$27.start, ___hasprop(t0$27, "end")))) {
          end$1 = t0$27.end;
        } else {
          ___match_error($targ$54, "{=> source, => start, => end}");
        }
        [source$1, start$1, end$1];
        $targ$55 = __lt____lt____colon__$0(Text$0(""), pre$2.location.at_end());
        node$2[0] = $targ$55;
        __lt____lt____colon__$0(node$2, Location$0(source$1, pre$2.location.end, end$1));
        rval$5 = __lt____lt____colon__$0(Seq$0(__lt____lt____colon__$0(Text$0(""), Location$0(source$1, start$1, start$1)), __lt____lt____colon__$0(__amp____colon__(Oper$0(t$0), {width: "wide"}), pre$2), adjust$0(node$2)), Location$0(source$1, start$1, end$1));
        $targ$56 = t$0;
        rval$5.operator = $targ$56;
        $targ$57 = "wide";
        rval$5.width = $targ$57;
        return rval$5;
      } else {
        return adjust$0(node$2);
      }
    }
  } else {
    return node$2;
  }
};
parser$0 = Parser$0(tokenizer$0, prio$0.getOrder(), finalize$0);
tokenize$0 = function tokenize(src$0) {
  return tokenizer$0.run(src$0);
};
parse$0 = function parse(src$1) {
  return parser$0.parse(src$1) || __lt____lt____colon__$0(Text$0(""), Location$0(src$1, 0, src$1.text.length));
};
$targ$58 = tokenizer$0;
exports.tokenizer = $targ$58;
$targ$59 = tokenize$0;
exports.tokenize = $targ$59;
$targ$60 = parser$0;
exports.parser = $targ$60;
$targ$61 = parse$0;
exports.parse = $targ$61;
$targ$62 = QAst$0;
exports.QAst = $targ$62;
$targ$63 = Text$0;
exports.Text = $targ$63;
$targ$64 = Oper$0;
exports.Oper = $targ$64;
$targ$65 = Seq$0;
exports.Seq = $targ$65;
void 0;
