/* */ 
(function(process) {
  "use strict";
  require("earlgrey-runtime/5");
  var t0$2 = undefined;
  var $targ$1 = undefined;
  var $targ$2 = undefined;
  var $targ$3 = undefined;
  var $targ$4 = undefined;
  var $targ$5 = undefined;
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
  var $targ$24 = undefined;
  var opg$0 = undefined;
  var Source$0 = undefined;
  var Location$0 = undefined;
  var __lt____lt____colon__$0 = undefined;
  var lang$0 = undefined;
  var parse$0 = undefined;
  var tokenize$0 = undefined;
  var QAst$0 = undefined;
  var Text$0 = undefined;
  var Oper$0 = undefined;
  var Seq$0 = undefined;
  var ast$0 = undefined;
  var Into$0 = undefined;
  var Deferred$0 = undefined;
  var tools$0 = undefined;
  var docs$0 = undefined;
  var BasicDocument$0 = undefined;
  var SeqDocument$0 = undefined;
  var MapDocument$0 = undefined;
  var engine$0 = undefined;
  var Engine$0 = undefined;
  var processDocuments$0 = undefined;
  var basic$0 = undefined;
  var basic__minus__plugin$0 = undefined;
  var lit__minus__plugin$0 = undefined;
  var file__minus__resolver$0 = undefined;
  var h$0 = undefined;
  var $targ$0 = undefined;
  var create$0 = undefined;
  var translate$0 = undefined;
  var toENode$0 = undefined;
  var toHTML$0 = undefined;
  opg$0 = require("opg");
  Source$0 = getProperty(opg$0, "Source", "opg");
  Location$0 = getProperty(opg$0, "Location", "opg");
  __lt____lt____colon__$0 = getProperty(opg$0, "transferLocation", "opg");
  lang$0 = require("./lang");
  parse$0 = getProperty(lang$0, "parse", "lang");
  tokenize$0 = getProperty(lang$0, "tokenize", "lang");
  QAst$0 = getProperty(lang$0, "QAst", "lang");
  Text$0 = getProperty(lang$0, "Text", "lang");
  Oper$0 = getProperty(lang$0, "Oper", "lang");
  Seq$0 = getProperty(lang$0, "Seq", "lang");
  ast$0 = require("./ast");
  Into$0 = getProperty(ast$0, "Into", "ast");
  Deferred$0 = getProperty(ast$0, "Deferred", "ast");
  tools$0 = require("./tools");
  docs$0 = require("./doc");
  BasicDocument$0 = getProperty(docs$0, "BasicDocument", "docs");
  SeqDocument$0 = getProperty(docs$0, "SeqDocument", "docs");
  MapDocument$0 = getProperty(docs$0, "MapDocument", "docs");
  engine$0 = require("./engine");
  Engine$0 = getProperty(engine$0, "Engine", "engine");
  processDocuments$0 = getProperty(engine$0, "processDocuments", "engine");
  basic$0 = require("./basic");
  basic__minus__plugin$0 = getProperty(basic$0, "basicPlugin", "basic");
  lit__minus__plugin$0 = getProperty(basic$0, "litPlugin", "basic");
  file__minus__resolver$0 = getProperty(basic$0, "fileResolver", "basic");
  h$0 = function h() {
    var bridge$$8751$0 = undefined;
    var bridge$$8750$0 = undefined;
    var bridge$$8749$0 = undefined;
    var tag$0 = undefined;
    var props$0 = undefined;
    var ph$1$0 = undefined;
    var children$0 = undefined;
    var t0$0 = undefined;
    var t1$0 = undefined;
    var m$0$0 = undefined;
    m$0$0 = arguments;
    t0$0 = m$0$0.length;
    if (t0$0 >= 2) {
      tag$0 = m$0$0[0];
      t1$0 = m$0$0[1];
      props$0 = t1$0;
      ph$1$0 = t1$0;
      children$0 = Array.prototype.slice.call(m$0$0, 2);
      bridge$$8749$0 = ph$1$0;
      if ((bridge$$8750$0 = bridge$$8749$0, (bridge$$8751$0 = bridge$$8750$0, ___hasprop(bridge$$8751$0, "tags") && (bridge$$8751$0.tags, ___hasprop(bridge$$8751$0, "props") && (bridge$$8751$0.props, ___hasprop(bridge$$8751$0, "children") && (bridge$$8751$0.children, true))) || typeof bridge$$8751$0 === "string") || typeof bridge$$8750$0 === "number") || typeof bridge$$8749$0 === "boolean") {
        return send(h$0, [tag$0, {}, props$0].concat(children$0));
      } else {
        return ENode(tag$0.split(RegExp("(?=\\W)", "")), props$0, children$0);
      }
    } else {
      return ___match_error(m$0$0, "{tag, match props, *children}");
    }
  };
  $targ$0 = function() {
    var plugins$0 = undefined;
    var t0$1 = undefined;
    var m$1$0 = undefined;
    m$1$0 = arguments;
    t0$1 = m$1$0.length;
    if (t0$1 >= 0) {
      plugins$0 = Array.prototype.slice.call(m$1$0, 0);
      return send(create$0, plugins$0);
    } else {
      return ___match_error(m$1$0, "{*plugins}");
    }
  };
  t0$2 = $targ$0;
  module.exports = t0$2;
  exports = t0$2;
  create$0 = function create() {
    var plugins$1 = undefined;
    var t0$3 = undefined;
    var m$2$0 = undefined;
    m$2$0 = arguments;
    t0$3 = m$2$0.length;
    if (t0$3 >= 0) {
      plugins$1 = Array.prototype.slice.call(m$2$0, 0);
      return Engine$0([basic__minus__plugin$0].concat(plugins$1));
    } else {
      return ___match_error(m$2$0, "{*plugins}");
    }
  };
  translate$0 = function translate() {
    var text$0 = undefined;
    var format$0 = undefined;
    var options$0 = undefined;
    var t0$4 = undefined;
    var m$3$0 = undefined;
    m$3$0 = arguments;
    t0$4 = m$3$0.length;
    if (t0$4 >= 2 && t0$4 <= 3) {
      text$0 = m$3$0[0];
      format$0 = m$3$0[1];
      if (2 >= t0$4) {
        options$0 = {};
      } else {
        options$0 = m$3$0[2];
      }
      return create$0().translate(text$0, format$0, options$0);
    } else {
      return ___match_error(m$3$0, "{text, format, options = {=}}");
    }
  };
  toENode$0 = function toENode() {
    var text$1 = undefined;
    var options$1 = undefined;
    var t0$5 = undefined;
    var m$4$0 = undefined;
    m$4$0 = arguments;
    t0$5 = m$4$0.length;
    if (t0$5 >= 1 && t0$5 <= 2) {
      text$1 = m$4$0[0];
      if (1 >= t0$5) {
        options$1 = {};
      } else {
        options$1 = m$4$0[1];
      }
      return create$0().translate(text$1, "enode", options$1);
    } else {
      return ___match_error(m$4$0, "{text, options = {=}}");
    }
  };
  toHTML$0 = function toHTML() {
    var text$2 = undefined;
    var options$2 = undefined;
    var t0$6 = undefined;
    var m$5$0 = undefined;
    m$5$0 = arguments;
    t0$6 = m$5$0.length;
    if (t0$6 >= 1 && t0$6 <= 2) {
      text$2 = m$5$0[0];
      if (1 >= t0$6) {
        options$2 = {};
      } else {
        options$2 = m$5$0[1];
      }
      return create$0().translate(text$2, "html", options$2);
    } else {
      return ___match_error(m$5$0, "{text, options = {=}}");
    }
  };
  $targ$1 = parse$0;
  exports.parse = $targ$1;
  $targ$2 = tokenize$0;
  exports.tokenize = $targ$2;
  $targ$3 = Location$0;
  exports.Location = $targ$3;
  $targ$4 = Source$0;
  exports.Source = $targ$4;
  $targ$5 = Engine$0;
  exports.Engine = $targ$5;
  $targ$6 = create$0;
  exports.create = $targ$6;
  $targ$7 = toENode$0;
  exports.toENode = $targ$7;
  $targ$8 = toHTML$0;
  exports.toHTML = $targ$8;
  $targ$9 = translate$0;
  exports.translate = $targ$9;
  $targ$10 = processDocuments$0;
  exports.processDocuments = $targ$10;
  $targ$11 = tools$0;
  exports.tools = $targ$11;
  $targ$12 = QAst$0;
  exports.QAst = $targ$12;
  $targ$13 = Text$0;
  exports.Text = $targ$13;
  $targ$14 = Oper$0;
  exports.Oper = $targ$14;
  $targ$15 = Seq$0;
  exports.Seq = $targ$15;
  $targ$16 = Into$0;
  exports.Into = $targ$16;
  $targ$17 = Deferred$0;
  exports.Deferred = $targ$17;
  $targ$18 = BasicDocument$0;
  exports.BasicDocument = $targ$18;
  $targ$19 = SeqDocument$0;
  exports.SeqDocument = $targ$19;
  $targ$20 = MapDocument$0;
  exports.MapDocument = $targ$20;
  $targ$21 = h$0;
  exports.h = $targ$21;
  $targ$22 = basic__minus__plugin$0;
  exports.basicPlugin = $targ$22;
  $targ$23 = lit__minus__plugin$0;
  exports.litPlugin = $targ$23;
  $targ$24 = file__minus__resolver$0;
  exports.fileResolver = $targ$24;
  void 0;
})(require("process"));
