/* */ 
"use strict";
require("earlgrey-runtime/5");
var $targ$6 = undefined;
var accum$0 = undefined;
var $targ$7 = undefined;
var accum$1 = undefined;
var $targ$15 = undefined;
var accum$2 = undefined;
var $targ$16 = undefined;
var accum$3 = undefined;
var $targ$23 = undefined;
var accum$4 = undefined;
var $targ$24 = undefined;
var accum$5 = undefined;
var $targ$25 = undefined;
var $targ$26 = undefined;
var $targ$27 = undefined;
var $targ$28 = undefined;
var $0$0 = undefined;
var findInsert$0 = undefined;
var insertSorted$0 = undefined;
var deleteSorted$0 = undefined;
var comparePaths$0 = undefined;
var comparePathEntries$0 = undefined;
var BasicDocument$0 = undefined;
var MapDocument$0 = undefined;
var $targ$0 = undefined;
var $targ$1 = undefined;
var $targ$2 = undefined;
var $targ$3 = undefined;
var SeqDocument$0 = undefined;
var $targ$4 = undefined;
$0$0 = require("./util");
findInsert$0 = getProperty($0$0, "findInsert", "./util");
insertSorted$0 = getProperty($0$0, "insertSorted", "./util");
deleteSorted$0 = getProperty($0$0, "deleteSorted", "./util");
comparePaths$0 = function comparePaths(p1$0, p2$0) {
  var m$1 = undefined;
  var m$0$0 = undefined;
  m$1 = null;
  $1: for (var _iterator = zip(p1$0, p2$0)[Symbol.iterator](),
      _step; !(_step = _iterator.next()).done; ) {
    m$1 = _step.value;
    var x$0 = undefined;
    var ph$0$0 = undefined;
    var y$0 = undefined;
    var t0$0 = undefined;
    var t1$0 = undefined;
    var t2$0 = undefined;
    t0$0 = m$1;
    if (Array.isArray(t0$0) && (t1$0 = t0$0.length, t1$0 === 2)) {
      t2$0 = t0$0[0];
      x$0 = t2$0;
      ph$0$0 = t2$0;
      y$0 = t0$0[1];
      if (ph$0$0 > y$0) {
        return 1;
      } else {
        if (ph$0$0 < y$0) {
          return -1;
        } else {
          undefined;
        }
      }
    } else {
      ___match_error(m$1);
    }
  }
  m$0$0 = p1$0.length;
  if (m$0$0 > p2$0.length) {
    return 1;
  } else {
    if (m$0$0 < p2$0.length) {
      return -1;
    } else {
      return 0;
    }
  }
};
comparePathEntries$0 = function comparePathEntries(temp$0$0, temp$1$0) {
  var t0$1 = undefined;
  var t1$1 = undefined;
  var t0$2 = undefined;
  var t1$2 = undefined;
  var p1$1 = undefined;
  var p2$1 = undefined;
  t0$1 = temp$0$0;
  if (Array.isArray(t0$1) && (t1$1 = t0$1.length, t1$1 === 2)) {
    p1$1 = t0$1[0];
    t0$1[1];
  } else {
    ___match_error(temp$0$0);
  }
  t0$2 = temp$1$0;
  if (Array.isArray(t0$2) && (t1$2 = t0$2.length, t1$2 === 2)) {
    p2$1 = t0$2[0];
    t0$2[1];
  } else {
    ___match_error(temp$1$0);
  }
  return comparePaths$0(p1$1, p2$1);
};
BasicDocument$0 = function BasicDocument() {
  var __at___$0 = undefined;
  if (!getChecker(BasicDocument$0)(this)) {
    __at___$0 = Object.create(BasicDocument$0.prototype);
  } else {
    __at___$0 = this;
  }
  __at___$0.resetFlags();
  return __at___$0;
};
BasicDocument$0.prototype.resetFlags = function resetFlags() {
  var t0$3 = undefined;
  var $targ$5 = undefined;
  var __at___$1 = undefined;
  var self$0 = undefined;
  __at___$1 = this;
  self$0 = this;
  $targ$5 = false;
  t0$3 = $targ$5;
  __at___$1.accessed = t0$3;
  __at___$1.modified = t0$3;
  return void 0;
};
__amp____colon__(BasicDocument$0, __amp____colon__(($targ$6 = "BasicDocument", accum$0 = {}, accum$0["::name"] = $targ$6, accum$0), ($targ$7 = true, accum$1 = {}, accum$1["::egclass"] = $targ$7, accum$1)));
MapDocument$0 = ___extend(function() {
  var $targ$8 = undefined;
  var __at___$2 = undefined;
  if (!getChecker(MapDocument$0)(this)) {
    __at___$2 = Object.create(MapDocument$0.prototype);
  } else {
    __at___$2 = this;
  }
  __at___$2.resetFlags();
  $targ$8 = new Map();
  __at___$2.data = $targ$8;
  return __at___$2;
}, BasicDocument$0);
MapDocument$0.prototype.register = function register() {
  var m$3 = undefined;
  var acc$0 = undefined;
  var temp$2 = undefined;
  var $targ$9 = undefined;
  var pairs$0 = undefined;
  var t0$4 = undefined;
  var m$2$0 = undefined;
  var __at___$3 = undefined;
  var self$1 = undefined;
  __at___$3 = this;
  self$1 = this;
  m$2$0 = arguments;
  t0$4 = m$2$0.length;
  if (t0$4 >= 1) {
    m$2$0[0];
    pairs$0 = Array.prototype.slice.call(m$2$0, 1);
    $targ$9 = true;
    __at___$3.modified = $targ$9;
    acc$0 = [];
    temp$2 = null;
    m$3 = null;
    $2: for (var _iterator = pairs$0[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$3 = _step.value;
      var key$0 = undefined;
      var value$0 = undefined;
      var t0$5 = undefined;
      var t1$3 = undefined;
      t0$5 = m$3;
      if (Array.isArray(t0$5) && (t1$3 = t0$5.length, t1$3 === 2)) {
        key$0 = t0$5[0];
        value$0 = t0$5[1];
        temp$2 = __at___$3.data.set(key$0, value$0);
        acc$0.push(temp$2);
      } else {
        ___match_error(m$3);
      }
    }
    return acc$0;
  } else {
    return ___match_error(m$2$0, "{_, *pairs}");
  }
};
$targ$0 = function(key$1) {
  var $targ$10 = undefined;
  var __at___$4 = undefined;
  var self$2 = undefined;
  __at___$4 = this;
  self$2 = this;
  $targ$10 = true;
  __at___$4.accessed = $targ$10;
  return __at___$4.data.has(key$1);
};
MapDocument$0.prototype.has = $targ$0;
$targ$1 = function(key$2) {
  var $targ$11 = undefined;
  var __at___$5 = undefined;
  var self$3 = undefined;
  __at___$5 = this;
  self$3 = this;
  $targ$11 = true;
  __at___$5.accessed = $targ$11;
  return __at___$5.data.get(key$2);
};
MapDocument$0.prototype.get = $targ$1;
$targ$2 = function(key$3, value$1) {
  var $targ$12 = undefined;
  var __at___$6 = undefined;
  var self$4 = undefined;
  __at___$6 = this;
  self$4 = this;
  $targ$12 = true;
  __at___$6.modified = $targ$12;
  return __at___$6.data.set(key$3, value$1);
};
MapDocument$0.prototype.set = $targ$2;
$targ$3 = function(key$4) {
  var $targ$13 = undefined;
  var __at___$7 = undefined;
  var self$5 = undefined;
  __at___$7 = this;
  self$5 = this;
  $targ$13 = true;
  __at___$7.modified = $targ$13;
  return __at___$7.data["delete"](key$4);
};
MapDocument$0.prototype["delete"] = $targ$3;
MapDocument$0.prototype.entries = function entries() {
  var $targ$14 = undefined;
  var __at___$8 = undefined;
  var self$6 = undefined;
  __at___$8 = this;
  self$6 = this;
  $targ$14 = true;
  __at___$8.accessed = $targ$14;
  return __at___$8.data.entries();
};
__amp____colon__(MapDocument$0, __amp____colon__(($targ$15 = "MapDocument", accum$2 = {}, accum$2["::name"] = $targ$15, accum$2), ($targ$16 = true, accum$3 = {}, accum$3["::egclass"] = $targ$16, accum$3)));
SeqDocument$0 = ___extend(function() {
  var $targ$17 = undefined;
  var __at___$9 = undefined;
  if (!getChecker(SeqDocument$0)(this)) {
    __at___$9 = Object.create(SeqDocument$0.prototype);
  } else {
    __at___$9 = this;
  }
  __at___$9.resetFlags();
  $targ$17 = [];
  __at___$9.data = $targ$17;
  return __at___$9;
}, BasicDocument$0);
SeqDocument$0.prototype.register = function register(path$0, entry$0) {
  var $targ$18 = undefined;
  var __at___$10 = undefined;
  var self$7 = undefined;
  __at___$10 = this;
  self$7 = this;
  $targ$18 = true;
  __at___$10.modified = $targ$18;
  if (entry$0 === undefined) {
    return deleteSorted$0(__at___$10.data, [path$0, entry$0], comparePathEntries$0);
  } else {
    if (equal(__at___$10.data.length, 0) || equal(comparePaths$0(path$0, send(send(__at___$10, "data", true), __at___$10.data.length - 1)[0]), 1)) {
      return __at___$10.data.push([path$0, entry$0]);
    } else {
      return insertSorted$0(__at___$10.data, [path$0, entry$0], comparePathEntries$0);
    }
  }
};
$targ$4 = function(path$1) {
  var __at___$11 = undefined;
  var self$8 = undefined;
  __at___$11 = this;
  self$8 = this;
  return __at___$11.register(path$1, undefined);
};
SeqDocument$0.prototype["delete"] = $targ$4;
SeqDocument$0.prototype.entriesWithPaths = function entriesWithPaths() {
  var $targ$19 = undefined;
  var __at___$12 = undefined;
  var self$9 = undefined;
  __at___$12 = this;
  self$9 = this;
  $targ$19 = true;
  __at___$12.accessed = $targ$19;
  return __at___$12.data.slice();
};
SeqDocument$0.prototype.entries = function entries() {
  var m$4 = undefined;
  var acc$1 = undefined;
  var temp$3 = undefined;
  var $targ$20 = undefined;
  var __at___$13 = undefined;
  var self$10 = undefined;
  __at___$13 = this;
  self$10 = this;
  $targ$20 = true;
  __at___$13.accessed = $targ$20;
  acc$1 = [];
  temp$3 = null;
  m$4 = null;
  $3: for (var _iterator = __at___$13.data[Symbol.iterator](),
      _step; !(_step = _iterator.next()).done; ) {
    m$4 = _step.value;
    var e$0 = undefined;
    var t0$6 = undefined;
    var t1$4 = undefined;
    t0$6 = m$4;
    if (Array.isArray(t0$6) && (t1$4 = t0$6.length, t1$4 === 2)) {
      t0$6[0];
      e$0 = t0$6[1];
      temp$3 = e$0;
      acc$1.push(temp$3);
    } else {
      ___match_error(m$4);
    }
  }
  return acc$1;
};
SeqDocument$0.prototype.entriesBefore = function entriesBefore(path$2) {
  var m$5 = undefined;
  var acc$2 = undefined;
  var temp$4 = undefined;
  var $targ$21 = undefined;
  var __at___$14 = undefined;
  var self$11 = undefined;
  __at___$14 = this;
  self$11 = this;
  $targ$21 = true;
  __at___$14.accessed = $targ$21;
  acc$2 = [];
  temp$4 = null;
  m$5 = null;
  $4: for (var _iterator = __at___$14.data[Symbol.iterator](),
      _step; !(_step = _iterator.next()).done; ) {
    m$5 = _step.value;
    var p$0 = undefined;
    var e$1 = undefined;
    var t0$7 = undefined;
    var t1$5 = undefined;
    t0$7 = m$5;
    if (Array.isArray(t0$7) && (t1$5 = t0$7.length, t1$5 === 2 && (p$0 = t0$7[0], e$1 = t0$7[1], comparePaths$0(p$0, path$2) < 0))) {
      temp$4 = e$1;
      acc$2.push(temp$4);
    } else {
      false;
    }
  }
  return acc$2;
};
SeqDocument$0.prototype.entriesAfter = function entriesAfter(path$3) {
  var m$6 = undefined;
  var acc$3 = undefined;
  var temp$5 = undefined;
  var $targ$22 = undefined;
  var __at___$15 = undefined;
  var self$12 = undefined;
  __at___$15 = this;
  self$12 = this;
  $targ$22 = true;
  __at___$15.accessed = $targ$22;
  acc$3 = [];
  temp$5 = null;
  m$6 = null;
  $5: for (var _iterator = __at___$15.data[Symbol.iterator](),
      _step; !(_step = _iterator.next()).done; ) {
    m$6 = _step.value;
    var p$1 = undefined;
    var e$2 = undefined;
    var t0$8 = undefined;
    var t1$6 = undefined;
    t0$8 = m$6;
    if (Array.isArray(t0$8) && (t1$6 = t0$8.length, t1$6 === 2 && (p$1 = t0$8[0], e$2 = t0$8[1], comparePaths$0(p$1, path$3) > 0))) {
      temp$5 = e$2;
      acc$3.push(temp$5);
    } else {
      false;
    }
  }
  return acc$3;
};
__amp____colon__(SeqDocument$0, __amp____colon__(($targ$23 = "SeqDocument", accum$4 = {}, accum$4["::name"] = $targ$23, accum$4), ($targ$24 = true, accum$5 = {}, accum$5["::egclass"] = $targ$24, accum$5)));
$targ$25 = comparePaths$0;
exports.comparePaths = $targ$25;
$targ$26 = BasicDocument$0;
exports.BasicDocument = $targ$26;
$targ$27 = MapDocument$0;
exports.MapDocument = $targ$27;
$targ$28 = SeqDocument$0;
exports.SeqDocument = $targ$28;
void 0;
