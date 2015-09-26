/* */ 
(function(Buffer) {
  var isBuffer = require("is-buffer");
  var toString = Object.prototype.toString;
  module.exports = function kindOf(val) {
    if (typeof val === 'undefined') {
      return 'undefined';
    }
    if (val === null) {
      return 'null';
    }
    if (val === true || val === false || val instanceof Boolean) {
      return 'boolean';
    }
    if (typeof val === 'string' || val instanceof String) {
      return 'string';
    }
    if (typeof val === 'number' || val instanceof Number) {
      return 'number';
    }
    if (typeof val === 'function' || val instanceof Function) {
      return 'function';
    }
    if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
      return 'array';
    }
    if (val instanceof RegExp) {
      return 'regexp';
    }
    if (val instanceof Date) {
      return 'date';
    }
    var type = toString.call(val);
    if (type === '[object RegExp]') {
      return 'regexp';
    }
    if (type === '[object Date]') {
      return 'date';
    }
    if (type === '[object Arguments]') {
      return 'arguments';
    }
    if (typeof Buffer !== 'undefined' && isBuffer(val)) {
      return 'buffer';
    }
    if (type === '[object Set]') {
      return 'set';
    }
    if (type === '[object WeakSet]') {
      return 'weakset';
    }
    if (type === '[object Map]') {
      return 'map';
    }
    if (type === '[object WeakMap]') {
      return 'weakmap';
    }
    if (type === '[object Symbol]') {
      return 'symbol';
    }
    return 'object';
  };
})(require("buffer").Buffer);
