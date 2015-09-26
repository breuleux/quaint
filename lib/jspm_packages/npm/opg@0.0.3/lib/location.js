/* */ 
var util = require("./util");
var hl = require("./highlight");
function Source(text, url, offset) {
  if (!(this instanceof Source))
    return new Source(text, url);
  this.text = text;
  this.url = url;
  this.offset = offset || 0;
  this.counts = [];
  var curr = 0;
  var self = this;
  text.split("\n").forEach(function(line) {
    self.counts.push(curr);
    curr += line.length + 1;
  });
  this.counts.push(curr);
  this.nlines = this.counts.length - 1;
}
Source.prototype.linecol = function(pos) {
  var line = util.binsearch(this.counts, pos);
  var col = pos - this.counts[line - 1];
  return [line, col];
};
Source.prototype.at = function(start, end) {
  if (end === undefined) {
    end = start;
  }
  return Location(this, start, end);
};
Source.prototype.highlightLines = function(l1, l2, spans) {
  return hl.highlightLines(this.text, this.counts, l1 - 1, l2 - 1, spans);
};
function Location(source, start, end) {
  if (!(this instanceof Location))
    return new Location(source, start, end);
  this.source = source || Source("", null);
  this.start = start;
  this.end = end;
}
Location.prototype.text = function() {
  return this.source.text.slice(this.start, this.end);
};
Location.prototype.at_start = function() {
  return Location(this.source, this.start, this.start);
};
Location.prototype.at_end = function() {
  return Location(this.source, this.end, this.end);
};
Location.prototype.trim = function() {
  var t = this.source.text;
  var start = this.start;
  while (end > start && (t[start] == " " || t[start] == "\n"))
    start++;
  var end = this.end - 1;
  while (end > start && (t[end] == " " || t[end] == "\n"))
    end--;
  return Location(this.source, start, end + 1);
};
Location.prototype.linecol = function() {
  var start = this.source.linecol(this.start);
  var end = this.start === this.end ? null : this.source.linecol(this.end - 1);
  return [start, end];
};
Location.prototype.linerange = function() {
  var lc = this.linecol();
  if (lc[1] === null)
    return [lc[0][0], lc[0][0]];
  else
    return [lc[0][0], lc[1][0]];
};
Location.prototype.ref = function() {
  var lc = this.linecol();
  var l1 = lc[0][0];
  var c1 = lc[0][1];
  if (lc[1] === null)
    return l1 + ":" + c1;
  var l2 = lc[1][0];
  var c2 = lc[1][1];
  if (l1 === l2 && c1 === c2)
    return l1 + ":" + c1;
  if (l1 === l2)
    return l1 + ":" + c1 + "-" + c2;
  return l1 + ":" + c1 + "-" + l2 + ":" + c2;
};
Location.prototype.makeSource = function() {
  return Source(this.text(), this.source.url, this.start);
};
Location.prototype.merge = function(other) {
  if (other.source !== this.source)
    throw Error("Cannot merge locations from different sources.");
  return Location(this.source, Math.min(this.start, other.start), Math.max(this.end, other.end));
};
Location.prototype.highlight = function(cls, context) {
  if (!context)
    context = 0;
  if (!cls)
    cls = "hl1";
  return hl.highlightLocations([[this.trim(), cls]], context);
};
function transferLocation(x, y) {
  if (!(x.location instanceof Location))
    x.location = !(y && y.location instanceof Location) ? y : y.location;
  return x;
}
exports.Source = Source;
exports.Location = Location;
exports.transferLocation = transferLocation;
