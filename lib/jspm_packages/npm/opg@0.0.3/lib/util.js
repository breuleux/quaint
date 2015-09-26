/* */ 
(function(process) {
  function binsearch(xs, x) {
    var lo = 0;
    var hi = xs.length - 1;
    while (lo <= hi) {
      var mid = lo + ((hi - lo) >> 1);
      var v = xs[mid];
      if (v < x)
        lo = mid + 1;
      else if (v > x)
        hi = mid - 1;
      else
        return mid + 1;
    }
    return lo;
  }
  function morsel(spans) {
    function jump(active, bot, top) {
      var choices = [top].concat(active.map(function(x) {
        return x[1];
      }));
      var e = Math.min.apply(null, choices);
      var attributes = [];
      active.forEach(function(x) {
        attributes = attributes.concat(x[2]);
      });
      return [e, [bot, e, attributes]];
    }
    function jumptill(active, bot, top) {
      if (bot === top) {
        return [[], active];
      } else {
        var j = jump(active, bot, top);
        var newbot = j[0];
        var span = j[1];
        var newactive = [];
        active.forEach(function(x) {
          if (x[1] > newbot) {
            newactive.push(x);
          }
        });
        var jt = jumptill(newactive, newbot, top);
        var spans = jt[0];
        var remainder = jt[1];
        return [[span].concat(spans), remainder];
      }
    }
    function process_elements(start, active, rem) {
      if (active.length === 0 && rem.length === 0) {
        return [];
      } else if (rem.length === 0) {
        var choices = active.map(function(x) {
          return x[1];
        });
        var top = Math.max.apply(null, choices);
        var bot = Math.min(start, top);
        var spans = jumptill(active, start, top)[0];
        return spans;
      } else {
        var next = rem[0];
        var rest = rem.slice(1);
        var target = next[0];
        var jt = jumptill(active, start, target);
        return jt[0].concat(process_elements(target, [next].concat(jt[1]), rest));
      }
    }
    var thespans = spans.sort(function(a, b) {
      if (a[0] === b[0])
        return a[1] - b[1];
      else
        return a[0] - b[0];
    });
    return process_elements(thespans[0][0], [], thespans);
  }
  exports.binsearch = binsearch;
  exports.morsel = morsel;
})(require("process"));
