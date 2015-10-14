System.config({
  baseURL: "/quaint/lib",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "edit.bundle.js": [
      "edit.js",
      "npm:earlgrey-runtime@0.0.11/5.js",
      "npm:quaint-highlight@0.0.5/plain.js",
      "npm:quaint@0.0.11.js",
      "npm:quaint-javascript@0.0.4.js",
      "npm:regenerator@0.8.41/runtime.js",
      "npm:quaint-highlight@0.0.5/lib/hl.js",
      "npm:quaint@0.0.11/lib/index.js",
      "npm:core-js@0.9.18/shim.js",
      "npm:earlgrey-runtime@0.0.11/lib.js",
      "npm:quaint-javascript@0.0.4/lib/index.js",
      "github:jspm/nodelibs-process@0.1.1.js",
      "npm:earlgrey-runtime@0.0.11/std/html.js",
      "npm:quaint@0.0.11/lib/lang.js",
      "npm:opg@0.0.3.js",
      "npm:quaint@0.0.11/lib/ast.js",
      "npm:quaint@0.0.11/lib/tools.js",
      "npm:quaint@0.0.11/lib/doc.js",
      "npm:quaint@0.0.11/lib/engine.js",
      "npm:quaint@0.0.11/lib/basic.js",
      "npm:core-js@0.9.18/modules/es5.js",
      "npm:core-js@0.9.18/modules/es6.symbol.js",
      "npm:core-js@0.9.18/modules/es6.object.assign.js",
      "npm:core-js@0.9.18/modules/es6.object.is.js",
      "npm:core-js@0.9.18/modules/es6.object.set-prototype-of.js",
      "npm:core-js@0.9.18/modules/es6.object.to-string.js",
      "npm:core-js@0.9.18/modules/es6.object.statics-accept-primitives.js",
      "npm:core-js@0.9.18/modules/es6.function.name.js",
      "npm:core-js@0.9.18/modules/es6.function.has-instance.js",
      "npm:core-js@0.9.18/modules/es6.number.constructor.js",
      "npm:core-js@0.9.18/modules/es6.number.statics.js",
      "npm:core-js@0.9.18/modules/es6.string.from-code-point.js",
      "npm:core-js@0.9.18/modules/es6.string.raw.js",
      "npm:core-js@0.9.18/modules/es6.math.js",
      "npm:core-js@0.9.18/modules/es6.string.iterator.js",
      "npm:core-js@0.9.18/modules/es6.string.code-point-at.js",
      "npm:core-js@0.9.18/modules/es6.string.ends-with.js",
      "npm:core-js@0.9.18/modules/es6.string.includes.js",
      "npm:core-js@0.9.18/modules/es6.string.repeat.js",
      "npm:core-js@0.9.18/modules/es6.array.from.js",
      "npm:core-js@0.9.18/modules/es6.string.starts-with.js",
      "npm:core-js@0.9.18/modules/es6.array.of.js",
      "npm:core-js@0.9.18/modules/es6.array.iterator.js",
      "npm:core-js@0.9.18/modules/es6.array.species.js",
      "npm:core-js@0.9.18/modules/es6.array.copy-within.js",
      "npm:core-js@0.9.18/modules/es6.array.fill.js",
      "npm:core-js@0.9.18/modules/es6.array.find.js",
      "npm:core-js@0.9.18/modules/es6.array.find-index.js",
      "npm:core-js@0.9.18/modules/es6.regexp.js",
      "npm:core-js@0.9.18/modules/es6.promise.js",
      "npm:core-js@0.9.18/modules/es6.map.js",
      "npm:core-js@0.9.18/modules/es6.set.js",
      "npm:core-js@0.9.18/modules/es6.weak-map.js",
      "npm:core-js@0.9.18/modules/es6.weak-set.js",
      "npm:core-js@0.9.18/modules/es6.reflect.js",
      "npm:core-js@0.9.18/modules/es7.array.includes.js",
      "npm:core-js@0.9.18/modules/es7.string.at.js",
      "npm:core-js@0.9.18/modules/es7.string.lpad.js",
      "npm:core-js@0.9.18/modules/es7.string.rpad.js",
      "npm:core-js@0.9.18/modules/es7.regexp.escape.js",
      "npm:core-js@0.9.18/modules/es7.object.get-own-property-descriptors.js",
      "npm:core-js@0.9.18/modules/es7.object.to-array.js",
      "npm:core-js@0.9.18/modules/es7.map.to-json.js",
      "npm:core-js@0.9.18/modules/es7.set.to-json.js",
      "npm:core-js@0.9.18/modules/js.array.statics.js",
      "npm:core-js@0.9.18/modules/web.timers.js",
      "npm:core-js@0.9.18/modules/web.immediate.js",
      "npm:core-js@0.9.18/modules/web.dom.iterable.js",
      "npm:core-js@0.9.18/modules/$.js",
      "npm:kaiser@0.0.2/reg.js",
      "github:jspm/nodelibs-vm@0.1.0.js",
      "npm:opg@0.0.3/lib/index.js",
      "npm:earlgrey-runtime@0.0.11/util.js",
      "github:jspm/nodelibs-process@0.1.1/index.js",
      "npm:quaint@0.0.11/lib/util.js",
      "npm:quaint@0.0.11/lib/etools.js",
      "npm:earlgrey-runtime@0.0.11/std/dom.js",
      "github:jspm/nodelibs-fs@0.1.2.js",
      "github:jspm/nodelibs-path@0.1.0.js",
      "npm:quaint@0.0.11/lib/format.js",
      "npm:quaint@0.0.11/lib/include.js",
      "npm:core-js@0.9.18/modules/$.cof.js",
      "npm:core-js@0.9.18/modules/$.dom-create.js",
      "npm:core-js@0.9.18/modules/$.def.js",
      "npm:core-js@0.9.18/modules/$.array-methods.js",
      "npm:core-js@0.9.18/modules/$.invoke.js",
      "npm:core-js@0.9.18/modules/$.uid.js",
      "npm:core-js@0.9.18/modules/$.assert.js",
      "npm:core-js@0.9.18/modules/$.array-includes.js",
      "npm:core-js@0.9.18/modules/$.replacer.js",
      "npm:core-js@0.9.18/modules/$.throws.js",
      "npm:core-js@0.9.18/modules/$.shared.js",
      "npm:core-js@0.9.18/modules/$.redef.js",
      "npm:core-js@0.9.18/modules/$.keyof.js",
      "npm:core-js@0.9.18/modules/$.enum-keys.js",
      "npm:core-js@0.9.18/modules/$.get-names.js",
      "npm:core-js@0.9.18/modules/$.wks.js",
      "npm:core-js@0.9.18/modules/$.assign.js",
      "npm:core-js@0.9.18/modules/$.same.js",
      "npm:core-js@0.9.18/modules/$.set-proto.js",
      "npm:core-js@0.9.18/modules/$.string-at.js",
      "npm:core-js@0.9.18/modules/$.iter.js",
      "npm:core-js@0.9.18/modules/$.iter-define.js",
      "npm:core-js@0.9.18/modules/$.string-repeat.js",
      "npm:core-js@0.9.18/modules/$.iter-call.js",
      "npm:core-js@0.9.18/modules/$.ctx.js",
      "npm:core-js@0.9.18/modules/$.iter-detect.js",
      "npm:core-js@0.9.18/modules/$.unscope.js",
      "npm:core-js@0.9.18/modules/$.species.js",
      "npm:core-js@0.9.18/modules/$.for-of.js",
      "npm:core-js@0.9.18/modules/$.task.js",
      "npm:core-js@0.9.18/modules/$.mix.js",
      "npm:core-js@0.9.18/modules/$.collection-strong.js",
      "npm:core-js@0.9.18/modules/$.collection.js",
      "npm:core-js@0.9.18/modules/$.collection-weak.js",
      "npm:core-js@0.9.18/modules/$.own-keys.js",
      "npm:core-js@0.9.18/modules/$.string-pad.js",
      "npm:core-js@0.9.18/modules/$.collection-to-json.js",
      "npm:core-js@0.9.18/modules/$.partial.js",
      "npm:core-js@0.9.18/modules/$.fw.js",
      "github:jspm/nodelibs-vm@0.1.0/index.js",
      "npm:opg@0.0.3/lib/parse.js",
      "npm:opg@0.0.3/lib/location.js",
      "npm:process@0.10.1.js",
      "npm:opg@0.0.3/lib/tokenize.js",
      "github:jspm/nodelibs-fs@0.1.2/index.js",
      "github:jspm/nodelibs-path@0.1.0/index.js",
      "npm:vm-browserify@0.0.4.js",
      "npm:quaint@0.0.11/package.json!github:systemjs/plugin-json@0.1.0.js",
      "npm:opg@0.0.3/lib/highlight.js",
      "npm:opg@0.0.3/lib/util.js",
      "npm:process@0.10.1/browser.js",
      "npm:path-browserify@0.0.0.js",
      "npm:vm-browserify@0.0.4/index.js",
      "npm:path-browserify@0.0.0/index.js",
      "npm:indexof@0.0.1.js",
      "npm:indexof@0.0.1/index.js"
    ]
  },

  map: {
    "earlgrey-runtime": "npm:earlgrey-runtime@0.0.11",
    "jquery": "github:components/jquery@2.1.4",
    "lodash.throttle": "npm:lodash.throttle@3.0.4",
    "quaint": "npm:quaint@0.0.11",
    "quaint-highlight": "npm:quaint-highlight@0.0.5",
    "quaint-javascript": "npm:quaint-javascript@0.0.4",
    "vm": "github:jspm/nodelibs-vm@0.1.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.10.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:align-text@0.1.3": {
      "kind-of": "npm:kind-of@2.0.1",
      "longest": "npm:longest@1.0.1",
      "repeat-string": "npm:repeat-string@1.5.2"
    },
    "npm:alter@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "stable": "npm:stable@0.1.5"
    },
    "npm:array-union@1.0.1": {
      "array-uniq": "npm:array-uniq@1.0.2"
    },
    "npm:asn1.js@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-traverse@0.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:brace-expansion@1.1.1": {
      "balanced-match": "npm:balanced-match@0.2.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.1",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.8": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:center-align@0.1.1": {
      "align-text": "npm:align-text@0.1.3"
    },
    "npm:cipher-base@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:cliui@2.1.0": {
      "center-align": "npm:center-align@0.1.1",
      "right-align": "npm:right-align@0.1.3",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:commander@2.5.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:commoner@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.5.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@4.2.2",
      "graceful-fs": "npm:graceful-fs@3.0.8",
      "iconv-lite": "npm:iconv-lite@0.4.13",
      "install": "npm:install@0.1.8",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "q": "npm:q@1.1.2",
      "recast": "npm:recast@0.10.33",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.10.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@3.0.8",
      "create-ecdh": "npm:create-ecdh@2.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:defs@1.1.0": {
      "alter": "npm:alter@0.2.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-traverse": "npm:ast-traverse@0.1.1",
      "breakable": "npm:breakable@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "esprima-fb": "npm:esprima-fb@8001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "simple-fmt": "npm:simple-fmt@0.1.0",
      "simple-is": "npm:simple-is@0.2.0",
      "stringmap": "npm:stringmap@0.2.2",
      "stringset": "npm:stringset@0.2.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "tryor": "npm:tryor@0.1.2",
      "yargs": "npm:yargs@1.3.3"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:earlgrey-runtime@0.0.11": {
      "core-js": "npm:core-js@0.9.18",
      "kaiser": "npm:kaiser@0.0.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "regenerator": "npm:regenerator@0.8.41"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima-fb@8001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:format-json@1.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:glob@4.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@1.0.0",
      "once": "npm:once@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:globby@3.0.1": {
      "array-union": "npm:array-union@1.0.1",
      "arrify": "npm:arrify@1.0.0",
      "glob": "npm:glob@5.0.15",
      "object-assign": "npm:object-assign@4.0.1",
      "pify": "npm:pify@2.2.0",
      "pinkie-promise": "npm:pinkie-promise@1.0.0"
    },
    "npm:graceful-fs@3.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:highlight.js@8.8.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:install@0.1.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:is-buffer@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:kaiser@0.0.2": {
      "earlgrey-runtime": "npm:earlgrey-runtime@0.0.11"
    },
    "npm:kind-of@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-buffer": "npm:is-buffer@1.1.0"
    },
    "npm:lcid@1.0.0": {
      "invert-kv": "npm:invert-kv@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:lodash.debounce@3.1.1": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1"
    },
    "npm:lodash.throttle@3.0.4": {
      "lodash.debounce": "npm:lodash.debounce@3.1.1"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@1.0.0": {
      "lru-cache": "npm:lru-cache@2.7.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.1"
    },
    "npm:minimatch@3.0.0": {
      "brace-expansion": "npm:brace-expansion@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:once@1.3.2": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:opg@0.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-locale@1.4.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "lcid": "npm:lcid@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:parse-asn1@3.0.2": {
      "asn1.js": "npm:asn1.js@2.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pinkie-promise@1.0.0": {
      "pinkie": "npm:pinkie@1.0.0"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.2",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:q@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:quaint-highlight@0.0.5": {
      "earlgrey-runtime": "npm:earlgrey-runtime@0.0.11",
      "highlight.js": "npm:highlight.js@8.8.0",
      "quaint": "npm:quaint@0.0.11"
    },
    "npm:quaint-javascript@0.0.4": {
      "earlgrey-runtime": "npm:earlgrey-runtime@0.0.11",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:quaint@0.0.11": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "earlgrey-runtime": "npm:earlgrey-runtime@0.0.11",
      "format-json": "npm:format-json@1.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "globby": "npm:globby@3.0.1",
      "kaiser": "npm:kaiser@0.0.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "opg": "npm:opg@0.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "yargs": "npm:yargs@3.26.0"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:recast@0.10.33": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.12",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.5.1"
    },
    "npm:regenerator@0.8.41": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "commoner": "npm:commoner@0.10.3",
      "defs": "npm:defs@1.1.0",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "recast": "npm:recast@0.10.33",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:right-align@0.1.3": {
      "align-text": "npm:align-text@0.1.3"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sigmund@1.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.5.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:window-size@0.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:y18n@3.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:yargs@1.3.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:yargs@3.26.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@1.2.1",
      "cliui": "npm:cliui@2.1.0",
      "decamelize": "npm:decamelize@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os-locale": "npm:os-locale@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "window-size": "npm:window-size@0.1.2",
      "y18n": "npm:y18n@3.2.0"
    }
  }
});
