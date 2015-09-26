/* */ 
(function(process) {
  "use strict";
  require("earlgrey-runtime/5");
  var t0$1 = undefined;
  var yargs$0 = undefined;
  var run$0 = undefined;
  var get__minus__arguments$0 = undefined;
  var $targ$0 = undefined;
  yargs$0 = require("yargs");
  run$0 = require("./run");
  get__minus__arguments$0 = function getArguments() {
    var __at___$41 = undefined;
    var __at___$40 = undefined;
    var __at___$39 = undefined;
    var __at___$38 = undefined;
    var __at___$37 = undefined;
    var __at___$36 = undefined;
    var __at___$35 = undefined;
    var __at___$34 = undefined;
    var __at___$33 = undefined;
    var __at___$32 = undefined;
    var __at___$31 = undefined;
    var __at___$30 = undefined;
    var __at___$29 = undefined;
    var __at___$28 = undefined;
    var __at___$27 = undefined;
    var __at___$26 = undefined;
    var __at___$25 = undefined;
    var __at___$24 = undefined;
    var __at___$23 = undefined;
    var __at___$22 = undefined;
    var __at___$21 = undefined;
    var __at___$20 = undefined;
    var __at___$19 = undefined;
    var __at___$18 = undefined;
    var __at___$17 = undefined;
    var __at___$16 = undefined;
    var __at___$15 = undefined;
    var __at___$14 = undefined;
    var __at___$13 = undefined;
    var __at___$12 = undefined;
    var __at___$11 = undefined;
    var __at___$10 = undefined;
    var __at___$9 = undefined;
    var __at___$8 = undefined;
    var __at___$7 = undefined;
    var __at___$6 = undefined;
    var __at___$5 = undefined;
    var __at___$4 = undefined;
    var __at___$3 = undefined;
    var __at___$2 = undefined;
    var __at___$1 = undefined;
    var __at___$0 = undefined;
    var argv$0 = undefined;
    __at___$0 = yargs$0;
    __at___$1 = __at___$0.usage("Usage: quaint <file ...> [options]");
    __at___$2 = __at___$1.alias("d", "data");
    __at___$3 = __at___$2.nargs("d", 1);
    __at___$4 = __at___$3.describe("d", "\n         JSON string or file(s) defining field:value pairs to be made available inside markup (as {field}):\n         * key:value\n         * {\"key\": value, ...}\n         * filename.json\n         * prefix::filename.json\n      ".trim());
    __at___$5 = __at___$4.alias("e", "eval");
    __at___$6 = __at___$5.nargs("e", 1);
    __at___$7 = __at___$6.describe("e", "Quaint string to parse directly");
    __at___$8 = __at___$7.alias("f", "format");
    __at___$9 = __at___$8.nargs("f", 1);
    __at___$10 = __at___$9["default"]("f", "html");
    __at___$11 = __at___$10.describe("f", "Format (only html currently supported)");
    __at___$12 = __at___$11.alias("h", "help");
    __at___$13 = __at___$12.help("h");
    __at___$14 = __at___$13.alias("o", "out");
    __at___$15 = __at___$14.nargs("o", 1);
    __at___$16 = __at___$15.describe("o", "File or directory to save the output to");
    __at___$17 = __at___$16.alias("p", "plugin");
    __at___$18 = __at___$17.nargs("p", 1);
    __at___$19 = __at___$18.describe("p", "Plugin(s) to import:\n         * Quaint file (injected at the beginning)\n         * Path to JavaScript file\n         * Local npm module\n         * Global npm module");
    __at___$20 = __at___$19.alias("s", "stdout");
    __at___$21 = __at___$20.boolean("s");
    __at___$22 = __at___$21["default"]("s", false);
    __at___$23 = __at___$22.describe("s", "Print to standard out");
    __at___$24 = __at___$23.alias("t", "template");
    __at___$25 = __at___$24.nargs("t", 1);
    __at___$26 = __at___$25.describe("t", "Quaint file to use as template, or template directory");
    __at___$27 = __at___$26.alias("v", "verbose");
    __at___$28 = __at___$27.boolean("v");
    __at___$29 = __at___$28.describe("v", "Print information about the operations performed");
    __at___$30 = __at___$29.example("quaint myfile.q", "Translate to myfile.html");
    __at___$31 = __at___$30.example("quaint file1.q file2.q file3.q -v", "Translate multiple files");
    __at___$32 = __at___$31.example("quaint -e 'Quaint is __cool'", "Translate a literal");
    __at___$33 = __at___$32.example("quaint -e 'Play {game}' -d 'game:chess'", "Fill data in");
    __at___$34 = __at___$33.example("quaint article.q -d info.json", "Fill data in from a file");
    __at___$35 = __at___$34.example("quaint -e '2+2={2+2}' -p javascript", "Using the quaint-javascript plugin");
    __at___$36 = __at___$35.example("quaint file1.q file2.q -p prelude.q", "Prepend prelude to each file");
    __at___$37 = __at___$36.example("quaint file.q -t tpl", "Use template ./tpl.q");
    __at___$38 = __at___$37.example("quaint -e 'B' -t 'A {body} C'", "Inline template, prints out A B C");
    __at___$39 = __at___$38.example("quaint -e '[meta::template=tpl]BODY'", "Use template ./tpl.q");
    __at___$40 = __at___$39.example("quaint -e '[meta::template=tpl]BODY' -t templates/", "Use template ./templates/tpl.q");
    __at___$41 = __at___$40.check(function(argv$1) {
      if (!argv$1.e && !argv$1._.length) {
        throw ErrorFactory(["usage"]).create("You must provide one or more filenames, or a string with the -e option.");
      }
      if (argv$1.e && argv$1._.length) {
        throw ErrorFactory(["usage"]).create("You cannot translate a file if the -e option is used.");
      }
      if (argv$1.s && argv$1.o) {
        throw ErrorFactory(["usage"]).create("You cannot combine the options -s and -o.");
      }
      return true;
    });
    argv$0 = __at___$41.argv;
    return argv$0;
  };
  $targ$0 = function() {
    var rval$0 = undefined;
    rval$0 = false;
    try {
      rval$0 = run$0(get__minus__arguments$0());
      rval$0;
    } catch (excv$0) {
      var e$2 = undefined;
      var e$1 = undefined;
      var e$0 = undefined;
      var $$2126$0 = undefined;
      var t0$0 = undefined;
      t0$0 = excv$0;
      if (getChecker(ErrorFactory(["usageError"]))(t0$0)) {
        e$0 = t0$0;
        yargs$0.showHelp();
        console.error(e$0.message);
        rval$0 = process.exit(1);
        rval$0;
      } else {
        if (getChecker(ErrorFactory(["cliError"]))(t0$0)) {
          e$1 = t0$0;
          console.error(e$1.message);
          if (getChecker(Error)(e$1[0])) {
            rval$0 = console.error(ENode([], {}, ["\n", e$1[0].stack]).toString());
          }
          rval$0;
        } else {
          e$2 = excv$0;
          rval$0 = console.error(e$2.stack);
          rval$0;
        }
      }
    }
    return rval$0;
  };
  t0$1 = $targ$0;
  module.exports = t0$1;
  exports = t0$1;
  exports;
})(require("process"));
