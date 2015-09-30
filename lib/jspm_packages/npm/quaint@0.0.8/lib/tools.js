/* */ 
"use strict";
require("earlgrey-runtime/5");
var m$6 = undefined;
var acc$4 = undefined;
var temp$6 = undefined;
var elems$0 = undefined;
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
var $targ$18 = undefined;
var $targ$19 = undefined;
var $targ$20 = undefined;
var $targ$21 = undefined;
var $targ$22 = undefined;
var $targ$23 = undefined;
var opg$0 = undefined;
var Source$0 = undefined;
var Location$0 = undefined;
var lang$0 = undefined;
var parse$0 = undefined;
var doc$0 = undefined;
var SeqDocument$0 = undefined;
var ast$0 = undefined;
var QAst$0 = undefined;
var Text$0 = undefined;
var Oper$0 = undefined;
var Seq$0 = undefined;
var Into$0 = undefined;
var Deferred$0 = undefined;
var raw$0 = undefined;
var shed$0 = undefined;
var shedAll$0 = undefined;
var shedIndent$0 = undefined;
var collapse$0 = undefined;
var statements$0 = undefined;
var parseSpec$0 = undefined;
var makeExtractor$0 = undefined;
var extractor$0 = undefined;
var next$0 = undefined;
var errn$0 = undefined;
var may__minus__fail$0 = undefined;
var rawRelative$0 = undefined;
var dedent$0 = undefined;
var code$0 = undefined;
var extract$0 = undefined;
var mergeable$0 = undefined;
var blockElements$0 = undefined;
var normalize$0 = undefined;
var toJSON$0 = undefined;
opg$0 = require("opg");
Source$0 = getProperty(opg$0, "Source", "opg");
Location$0 = getProperty(opg$0, "Location", "opg");
lang$0 = require("./lang");
parse$0 = getProperty(lang$0, "parse", "lang");
doc$0 = require("./doc");
SeqDocument$0 = getProperty(doc$0, "SeqDocument", "doc");
ast$0 = require("./ast");
QAst$0 = getProperty(ast$0, "QAst", "ast");
Text$0 = getProperty(ast$0, "Text", "ast");
Oper$0 = getProperty(ast$0, "Oper", "ast");
Seq$0 = getProperty(ast$0, "Seq", "ast");
Into$0 = getProperty(ast$0, "Into", "ast");
Deferred$0 = getProperty(ast$0, "Deferred", "ast");
raw$0 = getProperty(ast$0, "raw", "ast");
shed$0 = getProperty(ast$0, "shed", "ast");
shedAll$0 = getProperty(ast$0, "shedAll", "ast");
shedIndent$0 = getProperty(ast$0, "shedIndent", "ast");
collapse$0 = getProperty(ast$0, "collapse", "ast");
statements$0 = getProperty(ast$0, "statements", "ast");
parseSpec$0 = getProperty(ast$0, "parseSpec", "ast");
makeExtractor$0 = getProperty(ast$0, "makeExtractor", "ast");
extractor$0 = getProperty(ast$0, "extractor", "ast");
next$0 = Symbol("next");
errn$0 = 0;
may__minus__fail$0 = function mayFail(f$0) {
  var rval$0 = undefined;
  rval$0 = false;
  try {
    rval$0 = f$0();
    rval$0;
  } catch (excv$0) {
    var accum$0 = undefined;
    var res$0 = undefined;
    var $targ$0 = undefined;
    var $targ$1 = undefined;
    var e$0 = undefined;
    e$0 = excv$0;
    errn$0 = errn$0 + 1;
    res$0 = ENode(["span", ".error"], {}, [String(e$0), " ", ENode(["a"], {href: ENode([], {}, ["#ERR", errn$0])}, ENode([], {}, ["[#", errn$0, "]"])), send(Into$0, __amp____colon__(["errors", e$0], __amp____colon__((accum$0 = {}, accum$0.create = function create() {
      return SeqDocument$0();
    }, accum$0), {"::objinsert": 2})))]);
    $targ$0 = e$0;
    res$0.error = $targ$0;
    $targ$1 = errn$0;
    res$0.error.id = $targ$1;
    rval$0 = res$0;
    rval$0;
  }
  return rval$0;
};
rawRelative$0 = function rawRelative(temp$0$0) {
  var t0$0 = undefined;
  var t0$2 = undefined;
  var t1$0 = undefined;
  var t2$0 = undefined;
  var t3$0 = undefined;
  var m$0 = undefined;
  var acc$0 = undefined;
  var temp$1 = undefined;
  var $targ$2 = undefined;
  var c$0 = undefined;
  var padding$0 = undefined;
  var location$0 = undefined;
  var t0$1 = undefined;
  var x$0 = undefined;
  var ph$0$0 = undefined;
  t0$0 = temp$0$0;
  x$0 = t0$0;
  ph$0$0 = t0$0;
  t0$1 = ph$0$0;
  if (___hasprop(t0$1, "location")) {
    location$0 = t0$1.location;
    $targ$2 = location$0.linecol();
    t0$2 = $targ$2;
    if (Array.isArray(t0$2) && (t1$0 = t0$2.length, t1$0 === 2 && (t2$0 = t0$2[0], Array.isArray(t2$0) && (t3$0 = t2$0.length, t3$0 === 2)))) {
      t2$0[0];
      c$0 = t2$0[1];
      t0$2[1];
    } else {
      ___match_error($targ$2, "{{_, c}, _}");
    }
    padding$0 = (acc$0 = [], temp$1 = null, m$0 = null, (function() {
      $2: for (var _iterator = range(1, c$0)[Symbol.iterator](),
          _step; !(_step = _iterator.next()).done; ) {
        m$0 = _step.value;
        var i$0 = undefined;
        i$0 = m$0;
        temp$1 = " ";
        acc$0.push(temp$1);
      }
    })(), acc$0).join("");
    return padding$0 + location$0.text();
  } else {
    if (typeof ph$0$0 === "string") {
      return x$0;
    } else {
      throw ErrorFactory(["noraw"]).create(String(ENode([], {}, ["Cannot get a raw string from ", x$0, "."]).toString()));
    }
  }
};
dedent$0 = function dedent(x$1) {
  var m$1 = undefined;
  var acc$1 = undefined;
  var temp$2 = undefined;
  var m$2 = undefined;
  var acc$2 = undefined;
  var temp$3 = undefined;
  var newlines$0 = undefined;
  var lines$0 = undefined;
  var indents$0 = undefined;
  var min$0 = undefined;
  lines$0 = x$1.split("\n");
  acc$1 = [];
  temp$2 = null;
  m$1 = null;
  $3: for (var _iterator = lines$0[Symbol.iterator](),
      _step; !(_step = _iterator.next()).done; ) {
    m$1 = _step.value;
    var pfx$0 = undefined;
    var t0$3 = undefined;
    var t1$1 = undefined;
    var t2$1 = undefined;
    t0$3 = getProjector(RegExp("^( *)(?! |$)", ""))(m$1);
    if (t0$3[0] && (t1$1 = t0$3[1], t2$1 = t1$1.length, t2$1 === 2)) {
      t1$1[0];
      pfx$0 = t1$1[1];
      temp$2 = pfx$0.length;
      acc$1.push(temp$2);
    } else {
      continue $3;
      acc$1.push(temp$2);
    }
  }
  indents$0 = acc$1;
  min$0 = send(send(Math, "min", true), indents$0);
  acc$2 = [];
  temp$3 = null;
  m$2 = null;
  $4: for (var _iterator2 = lines$0[Symbol.iterator](),
      _step2; !(_step2 = _iterator2.next()).done; ) {
    m$2 = _step2.value;
    var line$0 = undefined;
    line$0 = m$2;
    temp$3 = line$0.slice(min$0);
    acc$2.push(temp$3);
  }
  newlines$0 = acc$2;
  return newlines$0.join("\n");
};
code$0 = function code(engine$0, x$2) {
  return Deferred$0(function(path$0, documents$0) {
    return may__minus__fail$0(function() {
      var t0$4 = undefined;
      var $targ$3 = undefined;
      var accum$1 = undefined;
      var env$0 = undefined;
      var m$3$0 = undefined;
      var res$1 = undefined;
      env$0 = __amp____colon__(($targ$3 = documents$0, accum$1 = {}, t0$4 = $targ$3, accum$1.doc = t0$4, accum$1.documents = t0$4, accum$1), {engine: engine$0});
      res$1 = engine$0.eval(raw$0(x$2), env$0, x$2.location) || "";
      m$3$0 = res$1;
      if (getChecker(QAst$0)(m$3$0)) {
        return engine$0.gen(res$1);
      } else {
        return res$1;
      }
    });
  });
};
extract$0 = function extract(ph$1$0) {
  var m$4 = undefined;
  var acc$3 = undefined;
  var temp$4 = undefined;
  var newargs$0 = undefined;
  var other$0 = undefined;
  var args$0 = undefined;
  var t0$5 = undefined;
  var t1$2 = undefined;
  t0$5 = ph$1$0;
  if (getChecker(Seq$0)(t0$5) && (t1$2 = t0$5.length, t1$2 >= 0)) {
    args$0 = Array.prototype.slice.call(t0$5, 0);
    acc$3 = [];
    temp$4 = null;
    m$4 = null;
    $5: for (var _iterator = enumerate(args$0)[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$4 = _step.value;
      var i$1 = undefined;
      var arg$0 = undefined;
      var t0$6 = undefined;
      var t1$3 = undefined;
      t0$6 = m$4;
      if (Array.isArray(t0$6) && (t1$3 = t0$6.length, t1$3 === 2 && (i$1 = t0$6[0], arg$0 = t0$6[1], equal(i$1 % 2, 0)))) {
        temp$4 = arg$0;
        acc$3.push(temp$4);
      } else {
        false;
      }
    }
    newargs$0 = acc$3;
    return send(Seq$0, [args$0[1][0]].concat(newargs$0));
  } else {
    other$0 = ph$1$0;
    return other$0;
  }
};
mergeable$0 = function mergeable() {
  var merge$0 = undefined;
  var node$0 = undefined;
  var $targ$4 = undefined;
  var $targ$5 = undefined;
  var tag$0 = undefined;
  var child$0 = undefined;
  var block$0 = undefined;
  var t0$7 = undefined;
  var m$5$0 = undefined;
  m$5$0 = arguments;
  t0$7 = m$5$0.length;
  if (t0$7 >= 2 && t0$7 <= 3) {
    tag$0 = m$5$0[0];
    child$0 = m$5$0[1];
    if (2 >= t0$7) {
      block$0 = true;
    } else {
      block$0 = m$5$0[2];
    }
    merge$0 = function merge(temp$5$0) {
      var t0$8 = undefined;
      var other$1 = undefined;
      var tags$0 = undefined;
      var props$0 = undefined;
      var children$0 = undefined;
      var t0$9 = undefined;
      var t1$4 = undefined;
      var t2$2 = undefined;
      var node$1 = undefined;
      var ph$2$0 = undefined;
      t0$8 = temp$5$0;
      node$1 = t0$8;
      ph$2$0 = t0$8;
      t0$9 = getProjector(ENode([tag$0], {}, []))(ph$2$0);
      if (t0$9[0] && (t1$4 = t0$9[1], t2$2 = t1$4.length, t2$2 === 3)) {
        tags$0 = t1$4[0];
        props$0 = t1$4[1];
        children$0 = t1$4[2];
        this.children = this.children.concat(children$0);
        return this;
      } else {
        other$1 = ph$2$0;
        return false;
      }
    };
    node$0 = ENode([tag$0], {}, child$0);
    $targ$4 = block$0;
    node$0.block = $targ$4;
    $targ$5 = merge$0;
    node$0.merge = $targ$5;
    return node$0;
  } else {
    return ___match_error(m$5$0, "{tag, child, block = true}");
  }
};
elems$0 = "\n      address article aside audio\n      blockquote\n      canvas\n      dd div dl\n      fieldset figcaption figure footer form\n      h1 h2 h3 h4 h5 h6 header hgroup hr\n      main\n      nav noscript\n      ol output\n      p pre\n      section\n      table tfoot\n      ul\n      video\n      html head body link script\n      raw top\n   ";
blockElements$0 = object((acc$4 = [], temp$6 = null, m$6 = null, (function() {
  $6: for (var _iterator = elems$0.split(RegExp("[\\n ]+", ""))[Symbol.iterator](),
      _step; !(_step = _iterator.next()).done; ) {
    m$6 = _step.value;
    var x$3 = undefined;
    x$3 = m$6;
    temp$6 = [x$3, true];
    acc$4.push(temp$6);
  }
})(), acc$4));
normalize$0 = function normalize(temp$7$0) {
  var t0$10 = undefined;
  var t0$12 = undefined;
  var t0$13 = undefined;
  var m$7 = undefined;
  var ch$0 = undefined;
  var t0$14 = undefined;
  var t1$6 = undefined;
  var m$8 = undefined;
  var res$2 = undefined;
  var children$2 = undefined;
  var tags$1 = undefined;
  var ph$4$0 = undefined;
  var props$1 = undefined;
  var children$1 = undefined;
  var $$11517$0 = undefined;
  var $$11518$0 = undefined;
  var $$11519$0 = undefined;
  var $$11520$0 = undefined;
  var t0$11 = undefined;
  var t1$5 = undefined;
  var t2$3 = undefined;
  var bridge$$11511$0 = undefined;
  var node$2 = undefined;
  var ph$3$0 = undefined;
  t0$10 = temp$7$0;
  node$2 = t0$10;
  ph$3$0 = t0$10;
  t0$11 = ph$3$0;
  if (($$11518$0 = getChecker(ENode)(t0$11)) && (($$11519$0 = ___hasprop(t0$11, "tags")) && (t1$5 = t0$11.tags, Array.isArray(t1$5) && (t2$3 = t1$5.length, t2$3 === 1 && (t1$5[0] === "p" && (___hasprop(t0$11, "props") && (equal(t0$11.props, {}) && (___hasprop(t0$11, "children") && (bridge$$11511$0 = t0$11.children, Array.isArray(bridge$$11511$0) && (t0$12 = bridge$$11511$0.length, t0$12 === 1 && getChecker(RegExp("^[\\n ]*$", ""))(bridge$$11511$0[0])) || Array.isArray(bridge$$11511$0) && (t0$13 = bridge$$11511$0.length, t0$13 === 0)))))))))) {
    return "";
  } else {
    if ($$11519$0 && (tags$1 = t1$5, ph$4$0 = t1$5, ___hasprop(t0$11, "props") && (t2$3 = t0$11.props, equal(t2$3, {}) && (props$1 = t2$3, ___hasprop(t0$11, "children"))))) {
      children$1 = t0$11.children;
      t0$14 = ph$4$0;
      t1$6 = t0$14.length;
      if (t1$6 === 1 && t0$14[0] === "p") {
        ch$0 = normalize$0(children$1);
        m$7 = null;
        $7: for (var _iterator = ch$0[Symbol.iterator](),
            _step; !(_step = _iterator.next()).done; ) {
          m$7 = _step.value;
          var tags$2 = undefined;
          var t0$15 = undefined;
          t0$15 = m$7;
          if (getChecker(ENode)(t0$15) && (___hasprop(t0$15, "tags") && (tags$2 = t0$15.tags, tags$2.some(function(t$0) {
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
      if (Array.isArray(t0$11)) {
        children$2 = t0$11;
        res$2 = [];
        m$8 = null;
        $8: for (var _iterator2 = children$2[Symbol.iterator](),
            _step2; !(_step2 = _iterator2.next()).done; ) {
          m$8 = _step2.value;
          var other$2 = undefined;
          var a$0 = undefined;
          var t0$17 = undefined;
          var ph$5$0 = undefined;
          var t0$16 = undefined;
          t0$16 = getProjector(normalize$0)(m$8);
          if (t0$16[0]) {
            ph$5$0 = t0$16[1];
            t0$17 = ph$5$0;
            if (Array.isArray(t0$17)) {
              a$0 = t0$17;
              res$2 = res$2.concat(a$0);
            } else {
              other$2 = ph$5$0;
              res$2.push(other$2);
            }
          } else {
            ___match_error(m$8);
          }
        }
        return res$2;
      } else {
        return node$2;
      }
    }
  }
};
toJSON$0 = function toJSON(temp$8$0) {
  var t0$18 = undefined;
  var rval$1 = undefined;
  var t$1 = undefined;
  var raw$1 = undefined;
  var t0$19 = undefined;
  var v$0 = undefined;
  var ph$6$0 = undefined;
  t0$18 = temp$8$0;
  v$0 = t0$18;
  ph$6$0 = t0$18;
  t0$19 = ph$6$0;
  if (___hasprop(t0$19, "raw")) {
    raw$1 = t0$19.raw;
    t$1 = v$0.raw();
    rval$1 = false;
    try {
      rval$1 = JSON.parse(t$1);
      rval$1;
    } catch (excv$1) {
      var e$1 = undefined;
      e$1 = excv$1;
      if (__in__("{", t$1) || __in__("[", t$1)) {
        throw e$1;
      }
      rval$1 = t$1;
      rval$1;
    }
    return rval$1;
  } else {
    return v$0;
  }
};
$targ$6 = next$0;
exports.next = $targ$6;
$targ$7 = may__minus__fail$0;
exports.mayFail = $targ$7;
$targ$8 = raw$0;
exports.raw = $targ$8;
$targ$9 = rawRelative$0;
exports.rawRelative = $targ$9;
$targ$10 = dedent$0;
exports.dedent = $targ$10;
$targ$11 = code$0;
exports.code = $targ$11;
$targ$12 = parseSpec$0;
exports.parseSpec = $targ$12;
$targ$13 = makeExtractor$0;
exports.makeExtractor = $targ$13;
$targ$14 = extractor$0;
exports.extractor = $targ$14;
$targ$15 = extract$0;
exports.extract = $targ$15;
$targ$16 = collapse$0;
exports.collapse = $targ$16;
$targ$17 = statements$0;
exports.statements = $targ$17;
$targ$18 = shed$0;
exports.shed = $targ$18;
$targ$19 = shedAll$0;
exports.shedAll = $targ$19;
$targ$20 = shedIndent$0;
exports.shedIndent = $targ$20;
$targ$21 = mergeable$0;
exports.mergeable = $targ$21;
$targ$22 = normalize$0;
exports.normalize = $targ$22;
$targ$23 = toJSON$0;
exports.toJSON = $targ$23;
void 0;
