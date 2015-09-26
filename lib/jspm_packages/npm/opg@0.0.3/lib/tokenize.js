/* */ 
var loc = require("./location");
var Source = loc.Source;
var Location = loc.Location;
function Tokenizer(config) {
  if (!(this instanceof Tokenizer))
    return new Tokenizer(config);
  this.config = config;
  var parts = [];
  this.types = [];
  var regexps = config.regexps instanceof Array ? config.regexps : Object.getOwnPropertyNames(config.regexps).map(function(x) {
    return [x, config.regexps[x]];
  });
  for (var i = 0; i < regexps.length; i++) {
    var pair = regexps[i];
    this.types.push(pair[0]);
    if (pair[2])
      parts.push(pair[1]);
    else
      parts.push("(" + pair[1] + ")");
  }
  this.re = parts.join("|");
}
Tokenizer.prototype.iterator = function(source) {
  var results = this.run(source);
  return results.shift.bind(results);
};
Tokenizer.prototype.run = function(source) {
  if (source instanceof Source) {
    var text = source.text;
    var index = source.offset || 0;
  } else {
    var text = source;
    var index = 0;
  }
  var re = new RegExp(this.re, "g");
  function dopost(post, toks) {
    var state = post.initState ? post.initState() : {};
    var results = [];
    for (var i = 0; i < toks.length; i++) {
      var r = post.call(state, toks[i], i, toks);
      if (r instanceof Array)
        results.push.apply(results, r);
      else
        results.push(r);
    }
    return results;
  }
  var post = this.config.post;
  if (post === undefined)
    post = [];
  else if (!(post instanceof Array))
    post = [post];
  var m;
  var results = [{
    token: "",
    type: "boundary",
    location: Location(source, index, index)
  }];
  while (m = re.exec(text)) {
    var type = this.types[m.slice(1).indexOf(m[0])];
    if (type === "comment")
      continue;
    results.push({
      token: m[0],
      type: type,
      location: Location(source, m.index + index, m.index + m[0].length + index)
    });
  }
  results.push({
    token: "",
    type: "boundary",
    location: Location(source, text.length + index, text.length + index)
  });
  for (var i = 0; i < post.length; i++)
    results = dopost(post[i], results);
  return results;
};
function indentTracker(calcSize, tolerateErrors) {
  if (!calcSize)
    calcSize = function(tok) {
      if (tok.type === "newline")
        return tok.token.length;
      else
        return -1;
    };
  function next(curr) {
    var sz;
    if (curr.type === "boundary")
      sz = 0;
    else
      sz = calcSize(curr);
    if (sz === -1)
      return curr;
    else if (sz > this.current) {
      this.stack.push(this.current);
      this.current = sz;
      return [{
        type: "indent",
        token: ""
      }, curr];
    } else {
      var rval = [];
      while (sz < this.current) {
        rval.push({
          type: "dedent",
          token: ""
        });
        this.current = this.stack.pop();
      }
      if (this.current !== sz) {
        if (!tolerateErrors)
          throw SyntaxError("Indentation error. " + this.current + " " + sz);
        else {
          this.stack.push(this.current);
          this.current = sz;
          rval.pop();
          rval.push(curr);
          return rval;
        }
      }
      this.current = sz;
      rval.push(curr);
      return rval;
    }
  }
  next.initState = function() {
    return {
      current: 0,
      stack: []
    };
  };
  return next;
}
function inferLocation(tok, i, toks) {
  if (tok.location === undefined) {
    var src = (toks[i - 1] || toks[i + 1]).location.source;
    var start = toks[i - 1] ? toks[i - 1].location.end : 0;
    var end = toks[i + 1] && toks[i + 1].location ? toks[i + 1].location.start : start;
    tok.location = Location(src, start, end);
  }
  return tok;
}
exports.Tokenizer = Tokenizer;
exports.indentTracker = indentTracker;
exports.inferLocation = inferLocation;
