/* */ 
(function(Buffer) {
  "use strict";
  module.exports = {
    utf8: {
      type: "_internal",
      bomAware: true
    },
    cesu8: {
      type: "_internal",
      bomAware: true
    },
    unicode11utf8: "utf8",
    ucs2: {
      type: "_internal",
      bomAware: true
    },
    utf16le: "ucs2",
    binary: {type: "_internal"},
    base64: {type: "_internal"},
    hex: {type: "_internal"},
    _internal: InternalCodec
  };
  function InternalCodec(codecOptions) {
    this.enc = codecOptions.encodingName;
    this.bomAware = codecOptions.bomAware;
    if (this.enc === "base64")
      this.encoder = InternalEncoderBase64;
    else if (this.enc === "cesu8") {
      this.enc = "utf8";
      this.encoder = InternalEncoderCesu8;
    }
  }
  InternalCodec.prototype.encoder = InternalEncoder;
  InternalCodec.prototype.decoder = InternalDecoder;
  var StringDecoder = require("string_decoder").StringDecoder;
  if (!StringDecoder.prototype.end)
    StringDecoder.prototype.end = function() {};
  function InternalDecoder(options, codec) {
    StringDecoder.call(this, codec.enc);
  }
  InternalDecoder.prototype = StringDecoder.prototype;
  function InternalEncoder(options, codec) {
    this.enc = codec.enc;
  }
  InternalEncoder.prototype.write = function(str) {
    return new Buffer(str, this.enc);
  };
  InternalEncoder.prototype.end = function() {};
  function InternalEncoderBase64(options, codec) {
    this.prevStr = '';
  }
  InternalEncoderBase64.prototype.write = function(str) {
    str = this.prevStr + str;
    var completeQuads = str.length - (str.length % 4);
    this.prevStr = str.slice(completeQuads);
    str = str.slice(0, completeQuads);
    return new Buffer(str, "base64");
  };
  InternalEncoderBase64.prototype.end = function() {
    return new Buffer(this.prevStr, "base64");
  };
  function InternalEncoderCesu8(options, codec) {}
  InternalEncoderCesu8.prototype.write = function(str) {
    var buf = new Buffer(str.length * 3),
        bufIdx = 0;
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i);
      if (charCode < 0x80)
        buf[bufIdx++] = charCode;
      else if (charCode < 0x800) {
        buf[bufIdx++] = 0xC0 + (charCode >>> 6);
        buf[bufIdx++] = 0x80 + (charCode & 0x3f);
      } else {
        buf[bufIdx++] = 0xE0 + (charCode >>> 12);
        buf[bufIdx++] = 0x80 + ((charCode >>> 6) & 0x3f);
        buf[bufIdx++] = 0x80 + (charCode & 0x3f);
      }
    }
    return buf.slice(0, bufIdx);
  };
  InternalEncoderCesu8.prototype.end = function() {};
})(require("buffer").Buffer);
