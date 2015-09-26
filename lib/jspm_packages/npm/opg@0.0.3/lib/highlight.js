/* */ 
var util = require("./util");
function highlight(text, spans, offset) {
  if (!offset)
    offset = 0;
  return ENode([], {}, util.morsel(spans).map(function(x) {
    var start = Math.max(x[0] - offset, 0);
    var end = Math.min(x[1] - offset, text.length);
    var attributes = x[2];
    return ENode(["." + attributes.slice(0, 1)], {}, [text.slice(start, end)]);
  }));
}
function highlightLines(text, linelocs, l1, l2, spans) {
  var results = [];
  for (var i = l1; i <= l2; i++) {
    var start = linelocs[i];
    var end = linelocs[i + 1];
    var r = ENode([], {}, [ENode([".lineno"], {}, [i + 1]), ENode([".sourcecode"], {}, [highlight(text, [[start, end, []]].concat(clamp(spans, start, end)))])]);
    results.push(r);
  }
  return ENode([], {}, results);
}
function clamp(spans, bot, top) {
  var results = [];
  spans.forEach(function(x) {
    var start = x[0];
    var end = x[1];
    var attr = x[2];
    if (end >= bot && start <= top)
      results.push([Math.max(start, bot), Math.min(end, top), attr]);
  });
  return results;
}
function highlightLocations(locations, context) {
  if (!context)
    context = 0;
  var srcs = {};
  locations.forEach(function(x) {
    var loc = x[0];
    var cls = x[1];
    var key = String(loc.source && loc.source.url);
    if (!srcs[key])
      srcs[key] = [];
    srcs[key].push([loc, cls]);
  });
  return ENode([], {}, items(srcs).map(function(x) {
    return highlightLocationsSameSource(x[1], context);
  }));
}
function highlightLocationsSameSource(locations, context) {
  if (!context)
    context = 0;
  var loc = mergeLocations(locations.map(function(x) {
    return x[0];
  }));
  var src = loc.source;
  var l1l2 = loc.linerange();
  var l1 = l1l2[0];
  var l2 = l1l2[1];
  var first = Math.max(1, l1 - context);
  var last = Math.min(src.nlines, l2 + context);
  return ENode(["div", ".location"], {}, [ENode(["div", ".source"], {}, [ENode([".sourcefile"], {}, [src.url || "???"]), locations.map(function(x) {
    var loc = x[0];
    var cls = x[1];
    return ENode(["." + cls, ".sourcepos"], {}, [loc.ref()]);
  })]), src.highlightLines(first, last, locations.map(function(x) {
    var loc = x[0];
    var cls = x[1];
    return [loc.start, loc.end, [cls]];
  }))]);
}
function mergeLocations(locs) {
  var ll = locs.length;
  if (ll === 0)
    return Location(null, 0, 0);
  else if (ll === 1)
    return locs[0];
  else {
    var l = locs[0];
    locs.slice(1).forEach(function(l2) {
      l = l.merge(l2);
    });
    return l;
  }
}
exports.highlight = highlight;
exports.highlightLines = highlightLines;
exports.highlightLocations = highlightLocations;
exports.mergeLocations = mergeLocations;
