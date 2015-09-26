/* */ 
(function(Buffer) {
  module.exports = function(obj) {
    return !!(obj != null && (obj._isBuffer || (obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj))));
  };
})(require("buffer").Buffer);
