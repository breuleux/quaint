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
var $targ$37 = undefined;
var $targ$38 = undefined;
var $targ$39 = undefined;
var $targ$40 = undefined;
var $targ$41 = undefined;
var $targ$42 = undefined;
var $targ$43 = undefined;
var $targ$44 = undefined;
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
var ast$0 = undefined;
var QAst$0 = undefined;
var Text$0 = undefined;
var Oper$0 = undefined;
var Seq$0 = undefined;
var tokenizer$0 = undefined;
var prio$0 = undefined;
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
ast$0 = require("./ast");
QAst$0 = getProperty(ast$0, "QAst", "ast");
Text$0 = getProperty(ast$0, "Text", "ast");
Oper$0 = getProperty(ast$0, "Oper", "ast");
Seq$0 = getProperty(ast$0, "Seq", "ast");
tokenizer$0 = Tokenizer$0({
  regexps: [["nl", " *(?:\n *)+"], ["ws", "[ ~]+"], ["op", "[!@#$%^&*_\\-+=<>/?;:.`|]+|[(){}\\[\\],.]"], ["word", "(?:\\\\.|[^\n!@#$%^&*_\\-+=<>/?;:.`|\\[\\](){},. ~])+"], ["unknown", "."]],
  post: (calcSize$0 = function calcSize(temp$0$0) {
    var t0$0 = undefined;
    var t0$2 = undefined;
    var t1$0 = undefined;
    var $targ$0 = undefined;
    var x$0 = undefined;
    var t0$1 = undefined;
    var token$0 = undefined;
    var ph$0$0 = undefined;
    t0$0 = temp$0$0;
    token$0 = t0$0;
    ph$0$0 = t0$0;
    t0$1 = ph$0$0;
    if (___hasprop(t0$1, "type") && t0$1.type === "nl") {
      $targ$0 = token$0.token.split("\n");
      t0$2 = $targ$0;
      if (Array.isArray(t0$2) && (t1$0 = t0$2.length, t1$0 >= 1)) {
        Array.prototype.slice.call(t0$2, 0, -1);
        x$0 = t0$2[t1$0 - 1];
      } else {
        ___match_error($targ$0, "{*, x}");
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
    var $targ$2 = undefined;
    var $targ$3 = undefined;
    var bridge$$9150$0 = undefined;
    var $targ$4 = undefined;
    var $targ$5 = undefined;
    var $targ$6 = undefined;
    var $targ$7 = undefined;
    var $targ$8 = undefined;
    var $targ$9 = undefined;
    var $targ$10 = undefined;
    var token$2 = undefined;
    var $targ$1 = undefined;
    var prev$0 = undefined;
    var next$0 = undefined;
    var $$9157$0 = undefined;
    var $$9158$0 = undefined;
    var $$9159$0 = undefined;
    var t0$4 = undefined;
    var bridge$$9149$0 = undefined;
    var tok$0 = undefined;
    var ph$1$0 = undefined;
    t0$3 = temp$1$0;
    tok$0 = t0$3;
    ph$1$0 = t0$3;
    $targ$1 = [send(toks$0, i$0 - 1), send(toks$0, i$0 + 1)];
    t0$5 = $targ$1;
    if (Array.isArray(t0$5) && (t1$1 = t0$5.length, t1$1 === 2)) {
      prev$0 = t0$5[0];
      next$0 = t0$5[1];
    } else {
      ___match_error($targ$1, "{prev, next}");
    }
    [prev$0, next$0];
    t0$4 = ph$1$0;
    if (($$9158$0 = ___hasprop(t0$4, "type")) && (t0$4.type === "ws" && ___hasprop(t0$4, "token"))) {
      token$2 = t0$4.token;
      $targ$2 = token$2.length;
      t0$6 = $targ$2;
      prev$0.wsa = t0$6;
      next$0.wsb = t0$6;
      $targ$3 = tok$0;
      next$0.tucked = $targ$3;
      return [];
    } else {
      if ($$9158$0 && (t0$4.type === "op" && (___hasprop(t0$4, "token") && (bridge$$9149$0 = t0$4.token, (bridge$$9150$0 = bridge$$9149$0, bridge$$9150$0 === "]" || bridge$$9150$0 === "}") || bridge$$9149$0 === ")")))) {
        $targ$4 = 1;
        prev$0.wsa = $targ$4;
        return [tok$0];
      } else {
        if ($$9158$0 && t0$4.type === "indent") {
          $targ$5 = prev$0.wsb;
          prev$0.wsa = $targ$5;
          return [tok$0];
        } else {
          if ($$9158$0 && t0$4.type === "dedent") {
            $targ$6 = 1;
            prev$0.wsa = $targ$6;
            return [tok$0];
          } else {
            if ($$9158$0 && t0$4.type === "nl") {
              $targ$7 = 1;
              prev$0.wsa = $targ$7;
              $targ$8 = 1;
              next$0.wsb = $targ$8;
              return [tok$0];
            } else {
              if ($$9158$0 && (($$9159$0 = t0$4.type === "boundary") && prev$0)) {
                $targ$9 = 1;
                prev$0.wsa = $targ$9;
                return [tok$0];
              } else {
                if ($$9159$0 && next$0) {
                  $targ$10 = 1;
                  next$0.wsb = $targ$10;
                  return [tok$0];
                } else {
                  return [tok$0];
                }
              }
            }
          }
        }
      }
    }
  }, classifyOperators$0 = function classifyOperators(temp$2$0) {
    var t0$7 = undefined;
    var bridge$$9277$0 = undefined;
    var $targ$11 = undefined;
    var $targ$13 = undefined;
    var $targ$12 = undefined;
    var $targ$14 = undefined;
    var $targ$15 = undefined;
    var bridge$$9379$0 = undefined;
    var $targ$17 = undefined;
    var $targ$18 = undefined;
    var bridge$$9382$0 = undefined;
    var $targ$19 = undefined;
    var $targ$20 = undefined;
    var bridge$$9378$0 = undefined;
    var bridge$$9381$0 = undefined;
    var bridge$$9384$0 = undefined;
    var m$0$0 = undefined;
    var $$9462$0 = undefined;
    var $$9463$0 = undefined;
    var $$9464$0 = undefined;
    var t0$9 = undefined;
    var m$1$0 = undefined;
    var t0$10 = undefined;
    var t1$2 = undefined;
    var never_sfx$0 = undefined;
    var $targ$16 = undefined;
    var get$0 = undefined;
    var token$4 = undefined;
    var wsb$0 = undefined;
    var wsa$0 = undefined;
    var token$3 = undefined;
    var tuck$0 = undefined;
    var sfx$0 = undefined;
    var pad$0 = undefined;
    var $$9283$0 = undefined;
    var $$9284$0 = undefined;
    var t0$8 = undefined;
    var bridge$$9276$0 = undefined;
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
    if (($$9284$0 = ___hasprop(t0$8, "type")) && (bridge$$9276$0 = t0$8.type, (bridge$$9277$0 = bridge$$9276$0, bridge$$9277$0 === "boundary" || bridge$$9277$0 === "ws") || bridge$$9276$0 === "indent")) {
      $targ$11 = false;
      this.sfx = $targ$11;
      return [tok$1];
    } else {
      if ($$9284$0 && (t0$8.type === "nl" && ___hasprop(t0$8, "token"))) {
        token$3 = t0$8.token;
        $targ$12 = false;
        this.sfx = $targ$12;
        if (token$3.split("\n").length <= 2) {
          $targ$13 = "sh_nl";
          tok$1.type = $targ$13;
          void 0;
        }
        return [tok$1];
      } else {
        if ($$9284$0 && t0$8.type === "dedent") {
          $targ$14 = true;
          this.sfx = $targ$14;
          return [tok$1];
        } else {
          if ($$9284$0 && t0$8.type === "word") {
            $targ$15 = true;
            this.sfx = $targ$15;
            return pad$0(tok$1);
          } else {
            if ($$9284$0 && (t0$8.type === "op" && (___hasprop(t0$8, "token") && (token$4 = t0$8.token, ___hasprop(t0$8, "wsb") && (wsb$0 = t0$8.wsb, ___hasprop(t0$8, "wsa")))))) {
              wsa$0 = t0$8.wsa;
              never_sfx$0 = false;
              m$0$0 = tok$1.token;
              bridge$$9378$0 = m$0$0;
              if ((bridge$$9379$0 = bridge$$9378$0, bridge$$9379$0 === "(" || bridge$$9379$0 === "[") || bridge$$9378$0 === "{") {
                $targ$17 = "open";
                tok$1.type = $targ$17;
                $targ$18 = false;
                this.sfx = $targ$18;
                return pad$0(tok$1);
              } else {
                bridge$$9381$0 = m$0$0;
                if ((bridge$$9382$0 = bridge$$9381$0, bridge$$9382$0 === ")" || bridge$$9382$0 === "]") || bridge$$9381$0 === "}") {
                  $targ$19 = "close";
                  tok$1.type = $targ$19;
                  $targ$20 = true;
                  this.sfx = $targ$20;
                  return [tok$1];
                } else {
                  bridge$$9384$0 = m$0$0;
                  if (bridge$$9384$0 === "," || bridge$$9384$0 === ":") {
                    never_sfx$0 = true;
                    never_sfx$0;
                  } else {
                    undefined;
                  }
                }
              }
              m$1$0 = [sfx$0, wsb$0, wsa$0];
              if (($$9462$0 = Array.isArray(m$1$0)) && (t0$9 = m$1$0.length, ($$9464$0 = t0$9 === 3) && ((m$1$0[0] ? true : false) && (m$1$0[1] === 0 && m$1$0[2] === 0)))) {
                $targ$16 = ["sh_ifx", false, [tok$1]];
              } else {
                if ($$9464$0 && ((m$1$0[0] ? true : false) && (m$1$0[1] > 0 && m$1$0[2] > 0))) {
                  $targ$16 = ["wi_ifx", false, [tok$1]];
                } else {
                  if ($$9464$0 && ((m$1$0[0] ? true : false) && (m$1$0[1], m$1$0[2] === 0))) {
                    $targ$16 = ["sh_pfx", false, pad$0(tok$1)];
                  } else {
                    if ($$9464$0 && ((m$1$0[0] ? true : false) && m$1$0[1] === 0)) {
                      m$1$0[2];
                      $targ$16 = [never_sfx$0 ? "wi_ifx" : "sh_sfx", !never_sfx$0, [tok$1]];
                    } else {
                      if ($$9464$0 && (!m$1$0[0] && (m$1$0[1] === 0 && m$1$0[2] === 0))) {
                        $targ$16 = ["sh_pfx", false, [tok$1]];
                      } else {
                        if ($$9464$0 && (!m$1$0[0] && (m$1$0[1] > 0 && m$1$0[2] > 0))) {
                          $targ$16 = ["wi_pfx", false, [tok$1]];
                        } else {
                          if ($$9464$0 && (!m$1$0[0] && (m$1$0[1], m$1$0[2] === 0))) {
                            $targ$16 = ["sh_pfx", false, [tok$1]];
                          } else {
                            if ($$9464$0 && (!m$1$0[0] && m$1$0[1] === 0)) {
                              m$1$0[2];
                              $targ$16 = [never_sfx$0 ? "wi_ifx" : "wi_pfx", false, [tok$1]];
                            } else {
                              $targ$16 = ___match_error(m$1$0, "{false?,  0  , _}");
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              t0$10 = $targ$16;
              if (Array.isArray(t0$10) && (t1$2 = t0$10.length, t1$2 === 3)) {
                tok$1.type = t0$10[0];
                this.sfx = t0$10[1];
                get$0 = t0$10[2];
              } else {
                ___match_error($targ$16, "{tok.type, this.sfx, get}");
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
finalize$0 = function finalize(temp$3$0) {
  var t0$11 = undefined;
  var rval$0 = undefined;
  var m$2 = undefined;
  var acc$0 = undefined;
  var temp$4 = undefined;
  var newparts$0 = undefined;
  var rval$1 = undefined;
  var parts$0 = undefined;
  var mid$0 = undefined;
  var token$5 = undefined;
  var location$0 = undefined;
  var type$0 = undefined;
  var $$9550$0 = undefined;
  var $$9551$0 = undefined;
  var t0$12 = undefined;
  var t1$3 = undefined;
  var t2$0 = undefined;
  var node$0 = undefined;
  var ph$3$0 = undefined;
  t0$11 = temp$3$0;
  node$0 = t0$11;
  ph$3$0 = t0$11;
  t0$12 = ph$3$0;
  t1$3 = t0$12.length;
  if (t1$3 === 3 && (t0$12[0] === null && (t2$0 = t0$12[1], mid$0 = t2$0, ___hasprop(t2$0, "token") && (token$5 = t2$0.token, ___hasprop(t2$0, "location") && (location$0 = t2$0.location, ___hasprop(t2$0, "type") && (type$0 = t2$0.type, t0$12[2] === null)))))) {
    rval$0 = __lt____lt____colon__$0(Text$0(token$5), location$0);
    return __amp____colon__(rval$0, {operatorToken: nequal(type$0, "word")});
  } else {
    if (t1$3 >= 0) {
      parts$0 = Array.prototype.slice.call(t0$12, 0);
      acc$0 = [];
      temp$4 = null;
      m$2 = null;
      $0: for (var _iterator = enumerate(parts$0)[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$2 = _step.value;
        var p0$0 = undefined;
        var p1$0 = undefined;
        var s$0 = undefined;
        var e$0 = undefined;
        var p$0 = undefined;
        var p$1 = undefined;
        var m$3$0 = undefined;
        var t0$14 = undefined;
        var t1$5 = undefined;
        var loc$0 = undefined;
        var $targ$21 = undefined;
        var rval$2 = undefined;
        var width$0 = undefined;
        var $targ$22 = undefined;
        var ph$5$0 = undefined;
        var i$2 = undefined;
        var ph$4$0 = undefined;
        var part$0 = undefined;
        var t0$13 = undefined;
        var t1$4 = undefined;
        var t2$1 = undefined;
        t0$13 = m$2;
        if (Array.isArray(t0$13) && (t1$4 = t0$13.length, t1$4 === 2)) {
          t2$1 = t0$13[0];
          i$2 = t2$1;
          ph$4$0 = t2$1;
          part$0 = t0$13[1];
          ph$5$0 = part$0;
          if (equal(i$2 % 2, 0)) {
            if (ph$5$0 === null) {
              temp$4 = __lt____lt____colon__$0(Text$0(""), (p0$0 = send(parts$0, i$2 - 1), p1$0 = send(parts$0, i$2 + 1), s$0 = p0$0 ? p0$0.location.end : p1$0.location.start, e$0 = p1$0 ? p1$0.location.start : p0$0.location.end, Location$0(p0$0 ? p0$0.location.source : p1$0.location.source, s$0, e$0)));
            } else {
              temp$4 = part$0;
            }
          } else {
            loc$0 = Location$0(part$0.location.source, (p$0 = send(parts$0, i$2 - 1), p$0) ? p$0.location.end : part$0.location.start, (p$1 = send(parts$0, i$2 + 1), p$1) ? p$1.location.start : part$0.location.end);
            m$3$0 = part$0.type;
            if (m$3$0 === "indent") {
              $targ$21 = [Oper$0("I("), "wide"];
            } else {
              if (m$3$0 === "dedent") {
                $targ$21 = [Oper$0(")I"), "wide"];
              } else {
                if (m$3$0 === "sh_nl") {
                  $targ$21 = [Oper$0("NL"), "short"];
                } else {
                  if (m$3$0 === "nl") {
                    $targ$21 = [Oper$0("NL"), "wide"];
                  } else {
                    if (m$3$0 === "sh_ws") {
                      $targ$21 = [Oper$0("J"), "short"];
                    } else {
                      if (m$3$0 === "ws") {
                        $targ$21 = [Oper$0("J"), "wide"];
                      } else {
                        if (getChecker(RegExp("^sh_", ""))(m$3$0)) {
                          $targ$21 = [Oper$0(part$0.token), "short"];
                        } else {
                          if (getChecker(RegExp("^wi_", ""))(m$3$0)) {
                            $targ$21 = [Oper$0(part$0.token), "wide"];
                          } else {
                            $targ$21 = [Oper$0(part$0.token), "wide"];
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            t0$14 = $targ$21;
            if (Array.isArray(t0$14) && (t1$5 = t0$14.length, t1$5 === 2)) {
              rval$2 = t0$14[0];
              width$0 = t0$14[1];
            } else {
              ___match_error($targ$21, "{let rval, width}");
            }
            [rval$2, width$0];
            $targ$22 = width$0;
            rval$2.width = $targ$22;
            temp$4 = __lt____lt____colon__$0(rval$2, loc$0);
          }
          acc$0.push(temp$4);
        } else {
          ___match_error(m$2);
        }
      }
      newparts$0 = acc$0;
      rval$1 = __lt____lt____colon__$0(send(Seq$0, newparts$0), Location$0(newparts$0[0].location.source, newparts$0[0].location.start, send(newparts$0, newparts$0.length - 1).location.end));
      __amp____colon__(rval$1, {
        operator: newparts$0[1][0],
        width: newparts$0[1].width
      });
      return adjust$0(rval$1);
    } else {
      throw ErrorFactory(["syntax", "unknown_node"]).create(node$0);
    }
  }
};
adjust$0 = function adjust(temp$5$0) {
  var t0$15 = undefined;
  var loc$1 = undefined;
  var $targ$23 = undefined;
  var $targ$24 = undefined;
  var $targ$25 = undefined;
  var $targ$26 = undefined;
  var $targ$27 = undefined;
  var findTarget$0 = undefined;
  var target$0 = undefined;
  var pre$0 = undefined;
  var inds$0 = undefined;
  var mid$1 = undefined;
  var inde$0 = undefined;
  var tail$0 = undefined;
  var t0$16 = undefined;
  var t1$6 = undefined;
  var t2$2 = undefined;
  var t3$0 = undefined;
  var t4$0 = undefined;
  var t5$0 = undefined;
  var node$1 = undefined;
  var ph$6$0 = undefined;
  t0$15 = temp$5$0;
  node$1 = t0$15;
  ph$6$0 = t0$15;
  t0$16 = ph$6$0;
  if (getChecker(Seq$0)(t0$16) && (t1$6 = t0$16.length, t1$6 === 5 && (pre$0 = t0$16[0], t2$2 = t0$16[1], inds$0 = t2$2, getChecker(Oper$0)(t2$2) && (t3$0 = t2$2.length, t3$0 === 1 && (t2$2[0] === "I(" && (mid$1 = t0$16[2], t4$0 = t0$16[3], inde$0 = t4$0, getChecker(Oper$0)(t4$0) && (t5$0 = t4$0.length, t5$0 === 1 && t4$0[0] === ")I"))))))) {
    tail$0 = t0$16[4];
    findTarget$0 = function findTarget(temp$6$0) {
      var t0$17 = undefined;
      var pre$1 = undefined;
      var t0$18 = undefined;
      var t1$7 = undefined;
      var t2$3 = undefined;
      var t3$1 = undefined;
      var x$1 = undefined;
      var ph$7$0 = undefined;
      t0$17 = temp$6$0;
      x$1 = t0$17;
      ph$7$0 = t0$17;
      t0$18 = ph$7$0;
      if (getChecker(Seq$0)(t0$18) && (t1$7 = t0$18.length, t1$7 >= 2 && (pre$1 = t0$18[0], t2$3 = t0$18[1], getChecker(Oper$0)(t2$3) && (t3$1 = t2$3.length, t3$1 === 1 && t2$3[0] === "NL")))) {
        Array.prototype.slice.call(t0$18, 2);
        return findTarget$0(pre$1) || x$1;
      } else {
        return false;
      }
    };
    target$0 = findTarget$0(mid$1);
    if (target$0) {
      loc$1 = pre$0.location.at_start();
      $targ$23 = loc$1.start;
      target$0.location.start = $targ$23;
      $targ$24 = loc$1.start;
      node$1.location.start = $targ$24;
      $targ$25 = loc$1;
      inds$0.location = $targ$25;
      $targ$26 = __lt____lt____colon__$0(Text$0(""), loc$1);
      node$1[0] = $targ$26;
      $targ$27 = pre$0;
      target$0[0] = $targ$27;
      void 0;
    }
    return node$1;
  } else {
    return node$1;
  }
};
adjust2$0 = function adjust2(temp$7$0) {
  var t0$19 = undefined;
  var t0$22 = undefined;
  var $targ$28 = undefined;
  var source$0 = undefined;
  var start$0 = undefined;
  var end$0 = undefined;
  var $targ$29 = undefined;
  var $targ$30 = undefined;
  var $targ$31 = undefined;
  var $targ$32 = undefined;
  var t0$23 = undefined;
  var $targ$33 = undefined;
  var source$1 = undefined;
  var start$1 = undefined;
  var end$1 = undefined;
  var $targ$34 = undefined;
  var rval$3 = undefined;
  var $targ$35 = undefined;
  var $targ$36 = undefined;
  var t$0 = undefined;
  var left$0 = undefined;
  var right$0 = undefined;
  var $$9886$0 = undefined;
  var t0$21 = undefined;
  var t1$9 = undefined;
  var t2$5 = undefined;
  var pre$2 = undefined;
  var ph$9$0 = undefined;
  var inds$1 = undefined;
  var mid$2 = undefined;
  var inde$1 = undefined;
  var tail$1 = undefined;
  var t0$20 = undefined;
  var t1$8 = undefined;
  var t2$4 = undefined;
  var t3$2 = undefined;
  var t4$1 = undefined;
  var t5$1 = undefined;
  var t6$0 = undefined;
  var node$2 = undefined;
  var ph$8$0 = undefined;
  t0$19 = temp$7$0;
  node$2 = t0$19;
  ph$8$0 = t0$19;
  t0$20 = ph$8$0;
  if (getChecker(Seq$0)(t0$20) && (t1$8 = t0$20.length, t1$8 === 5 && (t2$4 = t0$20[0], pre$2 = t2$4, ph$9$0 = t2$4, t3$2 = t0$20[1], inds$1 = t3$2, getChecker(Oper$0)(t3$2) && (t4$1 = t3$2.length, t4$1 === 1 && (t3$2[0] === "I(" && (mid$2 = t0$20[2], t5$1 = t0$20[3], inde$1 = t5$1, getChecker(Oper$0)(t5$1) && (t6$0 = t5$1.length, t6$0 === 1 && t5$1[0] === ")I"))))))) {
    tail$1 = t0$20[4];
    t0$21 = ph$9$0;
    if (getChecker(Seq$0)(t0$21) && (t1$9 = t0$21.length, t1$9 === 3 && (left$0 = t0$21[0], t2$5 = t0$21[1], ___hasprop(t2$5, "width") && t2$5.width === "wide"))) {
      right$0 = t0$21[2];
      $targ$28 = node$2.location;
      t0$22 = $targ$28;
      if (___hasprop(t0$22, "source") && (source$0 = t0$22.source, ___hasprop(t0$22, "start") && (start$0 = t0$22.start, ___hasprop(t0$22, "end")))) {
        end$0 = t0$22.end;
      } else {
        ___match_error($targ$28, "{=> source, => start, => end}");
      }
      [source$0, start$0, end$0];
      $targ$29 = pre$2[2];
      node$2[0] = $targ$29;
      $targ$30 = Location$0(source$0, right$0.location.start, end$0);
      node$2.location = $targ$30;
      $targ$31 = adjust$0(node$2);
      pre$2[2] = $targ$31;
      $targ$32 = Location$0(source$0, start$0, end$0);
      pre$2.location = $targ$32;
      return pre$2;
    } else {
      if (getChecker(Text$0)(t0$21) && (t1$9 = t0$21.length, t1$9 === 1 && (t$0 = t0$21[0], ___hasprop(t0$21, "operatorToken") && (t0$21.operatorToken ? true : false)))) {
        $targ$33 = node$2.location;
        t0$23 = $targ$33;
        if (___hasprop(t0$23, "source") && (source$1 = t0$23.source, ___hasprop(t0$23, "start") && (start$1 = t0$23.start, ___hasprop(t0$23, "end")))) {
          end$1 = t0$23.end;
        } else {
          ___match_error($targ$33, "{=> source, => start, => end}");
        }
        [source$1, start$1, end$1];
        $targ$34 = __lt____lt____colon__$0(Text$0(""), pre$2.location.at_end());
        node$2[0] = $targ$34;
        __lt____lt____colon__$0(node$2, Location$0(source$1, pre$2.location.end, end$1));
        rval$3 = __lt____lt____colon__$0(Seq$0(__lt____lt____colon__$0(Text$0(""), Location$0(source$1, start$1, start$1)), __lt____lt____colon__$0(__amp____colon__(Oper$0(t$0), {width: "wide"}), pre$2), adjust$0(node$2)), Location$0(source$1, start$1, end$1));
        $targ$35 = t$0;
        rval$3.operator = $targ$35;
        $targ$36 = "wide";
        rval$3.width = $targ$36;
        return rval$3;
      } else {
        return adjust$0(node$2);
      }
    }
  } else {
    return node$2;
  }
};
parser$0 = Parser$0(tokenizer$0, prio$0.getOrder(), finalize$0);
tokenize$0 = function tokenize(temp$8$0) {
  var t0$24 = undefined;
  var src$0 = undefined;
  var ph$10$0 = undefined;
  t0$24 = temp$8$0;
  src$0 = t0$24;
  ph$10$0 = t0$24;
  if (typeof ph$10$0 === "string") {
    return tokenize$0(Source$0(src$0, "<quaint>"));
  } else {
    return tokenizer$0.run(src$0);
  }
};
parse$0 = function parse(temp$9$0) {
  var t0$25 = undefined;
  var src$1 = undefined;
  var ph$11$0 = undefined;
  t0$25 = temp$9$0;
  src$1 = t0$25;
  ph$11$0 = t0$25;
  if (typeof ph$11$0 === "string") {
    return parse$0(Source$0(src$1, "<quaint>"));
  } else {
    return parser$0.parse(src$1) || __lt____lt____colon__$0(Text$0(""), Location$0(src$1, 0, src$1.text.length));
  }
};
$targ$37 = tokenizer$0;
exports.tokenizer = $targ$37;
$targ$38 = tokenize$0;
exports.tokenize = $targ$38;
$targ$39 = parser$0;
exports.parser = $targ$39;
$targ$40 = parse$0;
exports.parse = $targ$40;
$targ$41 = QAst$0;
exports.QAst = $targ$41;
$targ$42 = Text$0;
exports.Text = $targ$42;
$targ$43 = Oper$0;
exports.Oper = $targ$43;
$targ$44 = Seq$0;
exports.Seq = $targ$44;
void 0;
