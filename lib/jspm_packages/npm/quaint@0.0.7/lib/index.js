/* */ 
(function(process) {
  "use strict";
  require("earlgrey-runtime/5");
  var t0$1 = undefined;
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
  var opg$0 = undefined;
  var Source$0 = undefined;
  var Location$0 = undefined;
  var __lt____lt____colon__$0 = undefined;
  var $0$0 = undefined;
  var parse$0 = undefined;
  var QAst$0 = undefined;
  var Text$0 = undefined;
  var Oper$0 = undefined;
  var Seq$0 = undefined;
  var tools$0 = undefined;
  var docs$0 = undefined;
  var BasicDocument$0 = undefined;
  var SeqDocument$0 = undefined;
  var MapDocument$0 = undefined;
  var $3$0 = undefined;
  var Engine$0 = undefined;
  var processDocuments$0 = undefined;
  var $4$0 = undefined;
  var basicPlugin$0 = undefined;
  var $targ$0 = undefined;
  var create$0 = undefined;
  var translate$0 = undefined;
  var toENode$0 = undefined;
  var toHTML$0 = undefined;
  opg$0 = require("opg");
  Source$0 = getProperty(opg$0, "Source", "opg");
  Location$0 = getProperty(opg$0, "Location", "opg");
  __lt____lt____colon__$0 = getProperty(opg$0, "transferLocation", "opg");
  $0$0 = require("./lang");
  parse$0 = getProperty($0$0, "parse", "./lang");
  QAst$0 = getProperty($0$0, "QAst", "./lang");
  Text$0 = getProperty($0$0, "Text", "./lang");
  Oper$0 = getProperty($0$0, "Oper", "./lang");
  Seq$0 = getProperty($0$0, "Seq", "./lang");
  tools$0 = require("./tools");
  docs$0 = require("./doc");
  BasicDocument$0 = getProperty(docs$0, "BasicDocument", "docs");
  SeqDocument$0 = getProperty(docs$0, "SeqDocument", "docs");
  MapDocument$0 = getProperty(docs$0, "MapDocument", "docs");
  $3$0 = require("./engine");
  Engine$0 = getProperty($3$0, "Engine", "./engine");
  processDocuments$0 = getProperty($3$0, "processDocuments", "./engine");
  $4$0 = require("./basic");
  basicPlugin$0 = getProperty($4$0, "basicPlugin", "./basic");
  $targ$0 = function() {
    var plugins$0 = undefined;
    var t0$0 = undefined;
    var m$0$0 = undefined;
    m$0$0 = arguments;
    t0$0 = m$0$0.length;
    if (t0$0 >= 0) {
      plugins$0 = Array.prototype.slice.call(m$0$0, 0);
      return send(create$0, plugins$0);
    } else {
      return ___match_error(m$0$0, "{*plugins}");
    }
  };
  t0$1 = $targ$0;
  module.exports = t0$1;
  exports = t0$1;
  create$0 = function create() {
    var plugins$1 = undefined;
    var t0$2 = undefined;
    var m$1$0 = undefined;
    m$1$0 = arguments;
    t0$2 = m$1$0.length;
    if (t0$2 >= 0) {
      plugins$1 = Array.prototype.slice.call(m$1$0, 0);
      return Engine$0([basicPlugin$0].concat(plugins$1));
    } else {
      return ___match_error(m$1$0, "{*plugins}");
    }
  };
  translate$0 = function translate() {
    var text$0 = undefined;
    var format$0 = undefined;
    var options$0 = undefined;
    var t0$3 = undefined;
    var m$2$0 = undefined;
    m$2$0 = arguments;
    t0$3 = m$2$0.length;
    if (t0$3 >= 2 && t0$3 <= 3) {
      text$0 = m$2$0[0];
      format$0 = m$2$0[1];
      if (2 >= t0$3) {
        options$0 = {};
      } else {
        options$0 = m$2$0[2];
      }
      return create$0().translate(text$0, format$0, options$0);
    } else {
      return ___match_error(m$2$0, "{text, format, options = {=}}");
    }
  };
  toENode$0 = function toENode() {
    var text$1 = undefined;
    var options$1 = undefined;
    var t0$4 = undefined;
    var m$3$0 = undefined;
    m$3$0 = arguments;
    t0$4 = m$3$0.length;
    if (t0$4 >= 1 && t0$4 <= 2) {
      text$1 = m$3$0[0];
      if (1 >= t0$4) {
        options$1 = {};
      } else {
        options$1 = m$3$0[1];
      }
      return create$0().translate(text$1, "enode", options$1);
    } else {
      return ___match_error(m$3$0, "{text, options = {=}}");
    }
  };
  toHTML$0 = function toHTML() {
    var text$2 = undefined;
    var options$2 = undefined;
    var t0$5 = undefined;
    var m$4$0 = undefined;
    m$4$0 = arguments;
    t0$5 = m$4$0.length;
    if (t0$5 >= 1 && t0$5 <= 2) {
      text$2 = m$4$0[0];
      if (1 >= t0$5) {
        options$2 = {};
      } else {
        options$2 = m$4$0[1];
      }
      return create$0().translate(text$2, "html", options$2);
    } else {
      return ___match_error(m$4$0, "{text, options = {=}}");
    }
  };
  $targ$1 = parse$0;
  exports.parse = $targ$1;
  $targ$2 = Location$0;
  exports.Location = $targ$2;
  $targ$3 = Source$0;
  exports.Source = $targ$3;
  $targ$4 = Engine$0;
  exports.Engine = $targ$4;
  $targ$5 = create$0;
  exports.create = $targ$5;
  $targ$6 = toENode$0;
  exports.toENode = $targ$6;
  $targ$7 = toHTML$0;
  exports.toHTML = $targ$7;
  $targ$8 = translate$0;
  exports.translate = $targ$8;
  $targ$9 = processDocuments$0;
  exports.processDocuments = $targ$9;
  $targ$10 = tools$0;
  exports.tools = $targ$10;
  $targ$11 = QAst$0;
  exports.QAst = $targ$11;
  $targ$12 = Text$0;
  exports.Text = $targ$12;
  $targ$13 = Oper$0;
  exports.Oper = $targ$13;
  $targ$14 = Seq$0;
  exports.Seq = $targ$14;
  $targ$15 = BasicDocument$0;
  exports.BasicDocument = $targ$15;
  $targ$16 = SeqDocument$0;
  exports.SeqDocument = $targ$16;
  $targ$17 = MapDocument$0;
  exports.MapDocument = $targ$17;
  void 0;
})(require("process"));
