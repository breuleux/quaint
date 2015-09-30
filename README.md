
Quaint
======

[![Join the chat at https://gitter.im/breuleux/quaint](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/breuleux/quaint?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Quaint is a markup language similar to Markdown, but more regular and
easier to customize.

**[Documentation](http://breuleux.github.io/quaint/)**

Quaint is written in [Earl Grey](http://breuleux.github.io/earl-grey/)


Install
-------

    npm install quaint -g


Syntax
------

[Syntax](http://breuleux.github.io/quaint/syntax.html)


Command-line
------------

Quaint comes with the `quaint` command.

    Usage: quaint <file ...> [options]
    
    Options:
      -c, --config    Path to a configuration file with option values (must be JSON)
                                                          [default: "./quaint.json"]
      -d, --data      JSON string or file(s) defining field:value pairs to be made
                      available inside markup (as {field}):
                      * key:value
                      * {"key": value, ...}
                      * filename.json
                      * prefix::filename.json
      -e, --eval      Quaint string to parse directly
      -f, --format    Format (only html currently supported)       [default: "html"]
      -h, --help      Show help                                            [boolean]
      -o, --out       File or directory to save the output to
      -p, --plugin    Plugin(s) to import:
                      * Quaint file (injected at the beginning)
                      * Path to JavaScript file
                      * Local npm module
                      * Global npm module
      -s, --stdout    Print to standard out               [boolean] [default: false]
      -t, --template  Quaint file to use as template, or template directory
      -v, --verbose   Print information about the operations performed     [boolean]
      --save-meta     Save meta data in a file (./meta.json if the file is not
                      specified)                                    [default: false]

    Examples:
      quaint myfile.q                           Translate to myfile.html
      quaint file1.q file2.q file3.q -v         Translate multiple files
      quaint -e 'Quaint is __cool'              Translate a literal
      quaint -e 'Play {game}' -d 'game:chess'   Fill data in
      quaint article.q -d info.json             Fill data in from a file
      quaint -e '2+2={2+2}' -p javascript       Using the quaint-javascript plugin
      quaint file1.q file2.q -p prelude.q       Prepend prelude to each file
      quaint file.q -t tpl                      Use template ./tpl.q
      quaint -e 'B' -t 'A {body} C'             Inline template, prints out A B C
      quaint -e '[template::tpl]BODY'           Use template ./tpl.q
      quaint -e '[template::tpl]BODY' -t        Use template ./templates/tpl.q
        templates/


Plugins
-------

* [quaint-javascript](https://github.com/breuleux/quaint-javascript)
* [quaint-earlgrey](https://github.com/breuleux/quaint-earlgrey)
* [quaint-highlight](https://github.com/breuleux/quaint-highlight)



API
---

Simple usage:

```javascript
var quaint = require("quaint");
quaint.toHTML("Hello _italic __[bold words].");
// ==> "Hello <i>italic</i> <b>bold words</b>"
```

Extend with plugins:

```javascript
var quaint = require("quaint");
var qhl = require("quaint-highlight");
q = quaint(qhl({defaultLanguage: "python"}))
q.toHTML("&\n  def python_function():\n    return 1234");
// ==> code block for python_function highlighted in Python
```
