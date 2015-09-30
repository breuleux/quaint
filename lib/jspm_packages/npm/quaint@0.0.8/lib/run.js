/* */ 
(function(process) {
  "use strict";
  require("earlgrey-runtime/5");
  var t0$13 = undefined;
  var child_process$0 = undefined;
  var fs$0 = undefined;
  var path$0 = undefined;
  var quaint$0 = undefined;
  var module$0 = undefined;
  var is__minus__directory$0 = undefined;
  var cli__minus__error$0 = undefined;
  var module__minus__here$0 = undefined;
  var normalize__minus__qname$0 = undefined;
  var collate__minus__data$0 = undefined;
  var resolve__minus__plugins$0 = undefined;
  var run__minus__template$0 = undefined;
  var $targ$0 = undefined;
  child_process$0 = require("child_process");
  fs$0 = require("fs");
  path$0 = require("path");
  quaint$0 = require("./index");
  module$0 = require("module");
  is__minus__directory$0 = function isDirectory(path$1) {
    var rval$0 = undefined;
    rval$0 = false;
    try {
      rval$0 = fs$0.statSync(path$1).isDirectory();
      rval$0;
    } catch (excv$0) {
      var e$0 = undefined;
      e$0 = excv$0;
      rval$0 = false;
      rval$0;
    }
    return rval$0;
  };
  cli__minus__error$0 = function cliError(msg$0, fn$0) {
    var rval$1 = undefined;
    rval$1 = false;
    try {
      rval$1 = fn$0();
      rval$1;
    } catch (excv$1) {
      var e$1 = undefined;
      e$1 = excv$1;
      throw ErrorFactory(["cliError"]).create(msg$0, e$1);
      rval$1;
    }
    return rval$1;
  };
  module__minus__here$0 = function moduleHere() {
    var m$1 = undefined;
    var acc$0 = undefined;
    var temp$0 = undefined;
    var xs$0 = undefined;
    var m$0 = undefined;
    var $targ$1 = undefined;
    var c$0 = undefined;
    var $targ$2 = undefined;
    m$0 = new module$0();
    $targ$1 = process.cwd();
    m$0.filename = $targ$1;
    c$0 = process.cwd().split("/");
    acc$0 = [];
    temp$0 = null;
    m$1 = null;
    $0: for (var _iterator = range(1, c$0.length)[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$1 = _step.value;
      var i$0 = undefined;
      i$0 = m$1;
      temp$0 = send(c$0, range(0, i$0 - 1)).join("/") + "/node_modules";
      acc$0.push(temp$0);
    }
    xs$0 = acc$0;
    $targ$2 = xs$0.reverse();
    m$0.paths = $targ$2;
    m$0.paths.push("/usr/local/lib/node_modules", "/usr/lib/node_modules");
    return m$0;
  };
  normalize__minus__qname$0 = function normalizeQname(temp$1$0) {
    var t0$0 = undefined;
    var bridge$$10255$0 = undefined;
    var t$0 = undefined;
    var ph$0$0 = undefined;
    t0$0 = temp$1$0;
    t$0 = t0$0;
    ph$0$0 = t0$0;
    bridge$$10255$0 = ph$0$0;
    if (getChecker(RegExp(".q$", ""))(bridge$$10255$0) || !bridge$$10255$0) {
      return t$0;
    } else {
      return t$0 + ".q";
    }
  };
  collate__minus__data$0 = function collateData(data__minus__arguments$0) {
    var m$2 = undefined;
    var json__minus__filename$0 = undefined;
    var json__minus__parse$0 = undefined;
    var data$0 = undefined;
    json__minus__filename$0 = function jsonFilename(temp$2$0) {
      var t0$1 = undefined;
      var f$0 = undefined;
      var ph$2$0 = undefined;
      t0$1 = temp$2$0;
      f$0 = t0$1;
      ph$2$0 = t0$1;
      if (getChecker(RegExp("\\.", ""))(ph$2$0)) {
        return f$0;
      } else {
        return f$0 + ".json";
      }
    };
    json__minus__parse$0 = function jsonParse(filename$0, contents$0) {
      return cli__minus__error$0(ENode([], {}, ["Error parsing JSON in ", filename$0]).toString(), function() {
        return JSON.parse(contents$0);
      });
    };
    data$0 = {};
    m$2 = null;
    $1: for (var _iterator = (function() {
      var t$1 = undefined;
      return [true, (t$1 = data__minus__arguments$0, Array.isArray(t$1) ? t$1 : [t$1])][1];
    })()[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      (function() {
        m$2 = _step.value;
        var f$1 = undefined;
        var contents$1 = undefined;
        var rval$2 = undefined;
        var f$2 = undefined;
        var filename$2 = undefined;
        var key$1 = undefined;
        var value$0 = undefined;
        var key$0 = undefined;
        var filename$1 = undefined;
        var t0$3 = undefined;
        var t1$0 = undefined;
        var t2$0 = undefined;
        var entry$0 = undefined;
        var ph$1$0 = undefined;
        var t0$2 = undefined;
        t0$2 = m$2;
        entry$0 = t0$2;
        ph$1$0 = t0$2;
        if (ph$1$0 === void 0) {
          undefined;
        } else {
          if (getChecker(RegExp("^[\\\"']", ""))(ph$1$0)) {
            __amp____colon__(data$0, json__minus__parse$0(ENode([], {}, ["argument ", entry$0]).toString(), "{" + entry$0 + "}"));
          } else {
            if (getChecker(RegExp("^[{]", ""))(ph$1$0)) {
              __amp____colon__(data$0, json__minus__parse$0(ENode([], {}, ["argument ", entry$0]).toString(), entry$0));
            } else {
              t0$3 = getProjector(RegExp("([a-zA-Z0-9_-]+)::(.*)", ""))(ph$1$0);
              if (t0$3[0] && (t1$0 = t0$3[1], t2$0 = t1$0.length, t2$0 === 3)) {
                t1$0[0];
                key$0 = t1$0[1];
                filename$1 = t1$0[2];
                f$1 = json__minus__filename$0(filename$1);
                contents$1 = json__minus__parse$0(ENode([], {}, ["file ", f$1]).toString(), fs$0.readFileSync(f$1, "utf8"));
                __amp____colon__(data$0, (function() {
                  var $$10941 = {};
                  $$10941[key$0] = contents$1;
                  return $$10941;
                })());
              } else {
                t0$3 = getProjector(RegExp("([a-zA-Z0-9_-]+):(.*)", ""))(ph$1$0);
                if (t0$3[0] && (t1$0 = t0$3[1], t2$0 = t1$0.length, t2$0 === 3)) {
                  t1$0[0];
                  key$1 = t1$0[1];
                  value$0 = t1$0[2];
                  rval$2 = false;
                  try {
                    rval$2 = __amp____colon__(data$0, (function() {
                      var $$10942 = {};
                      $$10942[key$1] = JSON.parse(value$0);
                      return $$10942;
                    })());
                    rval$2;
                  } catch (excv$2) {
                    var e$2 = undefined;
                    e$2 = excv$2;
                    rval$2 = __amp____colon__(data$0, (function() {
                      var $$10943 = {};
                      $$10943[key$1] = value$0;
                      return $$10943;
                    })());
                    rval$2;
                  }
                  rval$2;
                } else {
                  filename$2 = ph$1$0;
                  f$2 = json__minus__filename$0(filename$2);
                  __amp____colon__(data$0, json__minus__parse$0(ENode([], {}, ["file ", f$2]).toString(), fs$0.readFileSync(f$2, "utf8")));
                }
              }
            }
          }
        }
      })();
    }
    return data$0;
  };
  resolve__minus__plugins$0 = function resolvePlugins(plugins$0) {
    var resolve$0 = undefined;
    var m$3 = undefined;
    var r$0 = undefined;
    var inj$0 = undefined;
    var results$0 = undefined;
    var spawned$0 = undefined;
    var r2$0 = undefined;
    var try__minus__require$0 = undefined;
    m$3 = module__minus__here$0();
    r$0 = function r(p$0) {
      return module$0._load(p$0, m$3, true);
    };
    inj$0 = [];
    results$0 = [];
    spawned$0 = false;
    r2$0 = function r2(name$0) {
      var rval$3 = undefined;
      if (spawned$0) {
        return r$0(name$0);
      } else {
        rval$3 = false;
        try {
          rval$3 = r$0(name$0);
          rval$3;
        } catch (excv$3) {
          var e$3 = undefined;
          e$3 = excv$3;
          m$3.paths.push(child_process$0.spawnSync("npm", ["root", "-g"]).stdout.toString().trim());
          spawned$0 = true;
          rval$3 = r$0(name$0);
          rval$3;
        }
        return rval$3;
      }
    };
    try__minus__require$0 = function tryRequire() {
      var m$5 = undefined;
      var acc$1 = undefined;
      var temp$3 = undefined;
      var rqs$0 = undefined;
      var rval$4 = undefined;
      var name$2 = undefined;
      var rest$0 = undefined;
      var $$10505$0 = undefined;
      var $$10506$0 = undefined;
      var t0$5 = undefined;
      var t1$2 = undefined;
      var orig$0 = undefined;
      var names$0 = undefined;
      var ph$4$0 = undefined;
      var all$0 = undefined;
      var t0$4 = undefined;
      var t1$1 = undefined;
      var m$4$0 = undefined;
      m$4$0 = arguments;
      t0$4 = m$4$0.length;
      if (t0$4 >= 2 && t0$4 <= 3) {
        orig$0 = m$4$0[0];
        t1$1 = m$4$0[1];
        names$0 = t1$1;
        ph$4$0 = t1$1;
        if (2 >= t0$4) {
          all$0 = names$0;
        } else {
          all$0 = m$4$0[2];
        }
        t0$5 = ph$4$0;
        t1$2 = t0$5.length;
        if (t1$2 === 0) {
          rqs$0 = (acc$1 = [], temp$3 = null, m$5 = null, (function() {
            $4: for (var _iterator = all$0[Symbol.iterator](),
                _step; !(_step = _iterator.next()).done; ) {
              m$5 = _step.value;
              var name$1 = undefined;
              name$1 = m$5;
              temp$3 = ENode([], {}, ["\"", name$1, "\""]).toString();
              acc$1.push(temp$3);
            }
          })(), acc$1).join(", ");
          throw ErrorFactory(["cliError"]).create(ENode([], {}, ["Could not find a plugin for \"", orig$0, "\". I tried requiring the following modules: ", rqs$0, ".\nIf they are available on npm, you can install them locally or globally, then try again."]).toString());
        } else {
          if (t1$2 >= 1) {
            name$2 = t0$5[0];
            rest$0 = Array.prototype.slice.call(t0$5, 1);
            rval$4 = false;
            try {
              rval$4 = r2$0(name$2);
              rval$4;
            } catch (excv$4) {
              var e$4 = undefined;
              e$4 = excv$4;
              if (equal(e$4.message, ENode([], {}, ["Cannot find module '", name$2, "'"]).toString())) {
                rval$4 = try__minus__require$0(orig$0, rest$0, all$0);
              } else {
                throw ErrorFactory(["cliError"]).create(ENode([], {}, ["An error happened when loading module '", name$2, "'"]).toString(), e$4);
              }
              rval$4;
            }
            return rval$4;
          } else {
            return ___match_error(ph$4$0, "{name, *rest}");
          }
        }
      } else {
        return ___match_error(m$4$0, "{orig, match names, all = names}");
      }
    };
    resolve$0 = function resolve(temp$4$0) {
      var t0$6 = undefined;
      var m$6 = undefined;
      var acc$2 = undefined;
      var temp$5 = undefined;
      var m$7 = undefined;
      var acc$3 = undefined;
      var temp$6 = undefined;
      var dots$0 = undefined;
      var t0$7 = undefined;
      var t1$3 = undefined;
      var t2$1 = undefined;
      var name$3 = undefined;
      var ph$5$0 = undefined;
      t0$6 = temp$4$0;
      name$3 = t0$6;
      ph$5$0 = t0$6;
      if (ph$5$0 === void 0) {
        return undefined;
      } else {
        if (Array.isArray(ph$5$0)) {
          acc$2 = [];
          temp$5 = null;
          m$6 = null;
          $5: for (var _iterator = name$3[Symbol.iterator](),
              _step; !(_step = _iterator.next()).done; ) {
            m$6 = _step.value;
            var n$0 = undefined;
            n$0 = m$6;
            temp$5 = resolve$0(n$0);
            acc$2.push(temp$5);
          }
          return acc$2;
        } else {
          if (getChecker(RegExp(",", ""))(ph$5$0)) {
            acc$3 = [];
            temp$6 = null;
            m$7 = null;
            $6: for (var _iterator2 = name$3.split(RegExp("[, ]+", ""))[Symbol.iterator](),
                _step2; !(_step2 = _iterator2.next()).done; ) {
              m$7 = _step2.value;
              var n$1 = undefined;
              n$1 = m$7;
              temp$6 = resolve$0(n$1);
              acc$3.push(temp$6);
            }
            return acc$3;
          } else {
            t0$7 = getProjector(RegExp("^(\\.+)([^/.]|$)", ""))(ph$5$0);
            if (t0$7[0] && (t1$3 = t0$7[1], t2$1 = t1$3.length, t2$1 === 3)) {
              t1$3[0];
              dots$0 = t1$3[1];
              t1$3[2];
              return resolve$0(dots$0 + "/" + name$3.slice(dots$0.length));
            } else {
              if (getChecker(RegExp("\\.q$", ""))(ph$5$0)) {
                return inj$0.push(fs$0.readFileSync(name$3, "utf8"));
              } else {
                if (getChecker(RegExp("^[./]", ""))(ph$5$0)) {
                  return results$0.push(try__minus__require$0(name$3, [name$3]));
                } else {
                  return results$0.push(try__minus__require$0(name$3, [ENode([], {}, ["quaint-", name$3]).toString(), name$3]));
                }
              }
            }
          }
        }
      }
    };
    resolve$0(plugins$0);
    return {
      inj: inj$0,
      plugins: results$0
    };
  };
  run__minus__template$0 = function runTemplate(q$0, source$0, t__minus__specific$0, t__minus__directory$0, verbose$0) {
    var read__minus__template$0 = undefined;
    var $targ$3 = undefined;
    read__minus__template$0 = function readTemplate(temp$7$0) {
      var t0$8 = undefined;
      var t1$4 = undefined;
      var p$1 = undefined;
      var name$4 = undefined;
      var ph$6$0 = undefined;
      t0$8 = getProjector(normalize__minus__qname$0)(temp$7$0);
      if (t0$8[0]) {
        t1$4 = t0$8[1];
        name$4 = t1$4;
        ph$6$0 = t1$4;
      } else {
        ___match_error(temp$7$0);
      }
      if (ph$6$0 === "%%%") {
        if (verbose$0) {
          console.error(ENode([], {}, ["quaint: using template \"", t__minus__specific$0, "\""]).toString());
        }
        if (getChecker(RegExp("\\{", ""))(t__minus__specific$0)) {
          return t__minus__specific$0;
        } else {
          return {
            file: t__minus__specific$0,
            contents: fs$0.readFileSync(t__minus__specific$0, "utf8")
          };
        }
      } else {
        p$1 = path$0.join(t__minus__directory$0 || ".", name$4);
        if (verbose$0) {
          console.error(ENode([], {}, ["quaint: using template \"", p$1, "\""]).toString());
        }
        return {
          file: p$1,
          contents: fs$0.readFileSync(p$1, "utf8")
        };
      }
    };
    q$0.registerResolvers({template: read__minus__template$0});
    $targ$3 = t__minus__specific$0;
    q$0.template = $targ$3;
    return q$0.toHTML(source$0);
  };
  $targ$0 = function(argv$0) {
    var m$8 = undefined;
    var acc$4 = undefined;
    var temp$9 = undefined;
    var t0$10 = undefined;
    var t$4 = undefined;
    var t$3 = undefined;
    var m$9$0 = undefined;
    var t0$11 = undefined;
    var t1$5 = undefined;
    var m$10 = undefined;
    var acc$5 = undefined;
    var temp$10 = undefined;
    var save__minus__results$0 = undefined;
    var sources$0 = undefined;
    var is__minus__dir$0 = undefined;
    var data$1 = undefined;
    var $targ$4 = undefined;
    var inj$1 = undefined;
    var plugins$1 = undefined;
    var $targ$5 = undefined;
    var t__minus__specific$1 = undefined;
    var t__minus__directory$1 = undefined;
    save__minus__results$0 = function saveResults(temp$8$0, contents$2) {
      var t0$9 = undefined;
      var t$2 = undefined;
      var p2$0 = undefined;
      var p$2 = undefined;
      t0$9 = (function(p$3) {
        return [true, p$3.replace(RegExp(".q$|$", ""), ".html")];
      })(temp$8$0);
      if (t0$9[0]) {
        p$2 = t0$9[1];
      } else {
        ___match_error(temp$8$0);
      }
      if (argv$0.stdout || argv$0.eval && !argv$0.out) {
        t$2 = contents$2;
        console.log(t$2);
        return t$2;
      } else {
        if (is__minus__dir$0) {
          p2$0 = path$0.join(argv$0.out || "./", path$0.basename(p$2));
          fs$0.writeFileSync(p2$0, contents$2);
          if (argv$0.verbose) {
            return console.error(ENode([], {}, ["quaint: wrote to \"", p2$0, "\""]).toString());
          }
        } else {
          fs$0.writeFileSync(argv$0.out, contents$2);
          if (argv$0.verbose) {
            return console.error(ENode([], {}, ["quaint: wrote to \"", argv$0.out, "\""]).toString());
          }
        }
      }
    };
    acc$4 = [];
    temp$9 = null;
    m$8 = null;
    $8: for (var _iterator = argv$0._[Symbol.iterator](),
        _step; !(_step = _iterator.next()).done; ) {
      m$8 = _step.value;
      var filename$3 = undefined;
      filename$3 = m$8;
      temp$9 = {
        file: filename$3,
        contents: fs$0.readFileSync(filename$3, "utf8")
      };
      acc$4.push(temp$9);
    }
    sources$0 = acc$4;
    if (argv$0.eval) {
      sources$0.push({
        file: "<cli>",
        contents: argv$0.e
      });
    }
    is__minus__dir$0 = is__minus__directory$0(argv$0.out || "./");
    if (!argv$0.stdout && !is__minus__dir$0 && sources$0.length > 1) {
      throw ErrorFactory(["usageError"]).create("The -o option must point to a directory in order to process multiple files.");
    }
    data$1 = collate__minus__data$0(argv$0.data);
    $targ$4 = resolve__minus__plugins$0(argv$0.plugin);
    t0$10 = $targ$4;
    if (___hasprop(t0$10, "inj") && (inj$1 = t0$10.inj, ___hasprop(t0$10, "plugins"))) {
      plugins$1 = t0$10.plugins;
    } else {
      ___match_error($targ$4, "{=> inj, => plugins}");
    }
    [inj$1, plugins$1];
    m$9$0 = argv$0.template;
    t$3 = m$9$0;
    if (is__minus__directory$0(t$3)) {
      $targ$5 = [null, t$3];
    } else {
      if (m$9$0 ? true : false) {
        t$4 = m$9$0;
        $targ$5 = [normalize__minus__qname$0(t$4), null];
      } else {
        $targ$5 = [null, "."];
      }
    }
    t0$11 = $targ$5;
    if (Array.isArray(t0$11) && (t1$5 = t0$11.length, t1$5 === 2)) {
      t__minus__specific$1 = t0$11[0];
      t__minus__directory$1 = t0$11[1];
    } else {
      ___match_error($targ$5, "{t-specific, t-directory}");
    }
    [t__minus__specific$1, t__minus__directory$1];
    acc$5 = [];
    temp$10 = null;
    m$10 = null;
    $7: for (var _iterator2 = sources$0[Symbol.iterator](),
        _step2; !(_step2 = _iterator2.next()).done; ) {
      m$10 = _step2.value;
      var result$0 = undefined;
      var m$11$0 = undefined;
      var q$1 = undefined;
      var file$0 = undefined;
      var contents$3 = undefined;
      var t0$12 = undefined;
      t0$12 = m$10;
      if (___hasprop(t0$12, "file") && (file$0 = t0$12.file, ___hasprop(t0$12, "contents"))) {
        contents$3 = t0$12.contents;
        if (argv$0.verbose) {
          console.error(ENode([], {}, ["quaint: processing \"", file$0, "\""]).toString());
        }
        q$1 = send(quaint$0, plugins$1);
        q$1.setenv(data$1);
        m$11$0 = argv$0.format;
        if (m$11$0 === "html") {
          result$0 = run__minus__template$0(q$1, inj$1.concat([contents$3]).join(""), t__minus__specific$1, t__minus__directory$1, argv$0.verbose);
          temp$10 = save__minus__results$0(file$0, result$0);
        } else {
          throw ErrorFactory(["usageError"]).create("Format must be html");
        }
        acc$5.push(temp$10);
      } else {
        ___match_error(m$10);
      }
    }
    return acc$5;
  };
  t0$13 = $targ$0;
  module.exports = t0$13;
  exports = t0$13;
  exports;
})(require("process"));
