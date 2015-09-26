/* */ 
var assert = require("assert");
var stableSort = require("stable");
function alter(str, fragments) {
  "use strict";
  var isArray = Array.isArray || function(v) {
    return Object.prototype.toString.call(v) === "[object Array]";
  };
  ;
  assert(typeof str === "string");
  assert(isArray(fragments));
  var sortedFragments = stableSort(fragments, function(a, b) {
    return a.start - b.start;
  });
  var outs = [];
  var pos = 0;
  for (var i = 0; i < sortedFragments.length; i++) {
    var frag = sortedFragments[i];
    assert(pos <= frag.start);
    assert(frag.start <= frag.end);
    outs.push(str.slice(pos, frag.start));
    outs.push(frag.str);
    pos = frag.end;
  }
  if (pos < str.length) {
    outs.push(str.slice(pos));
  }
  return outs.join("");
}
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = alter;
}
