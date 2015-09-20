
Quaint
======

Quaint is a markup language that's a bit similar to Markdown, but is
more regular and easier to customize.

Unfortunately the markup is poorly documented at the moment, but you
can use it interactively [here](http://breuleux.net/tryquaint/).

Install
-------

    npm install quaint -g


Syntax
------

Pending.


Command-line
------------

Quaint comes with the `quaint` command.

    Usage: quaint <file ...> [options]
    
    Options:
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
      quaint -e '[meta::template=tpl]BODY'      Use template ./tpl.q
      quaint -e '[meta::template=tpl]BODY' -t   Use template ./templates/tpl.q
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
