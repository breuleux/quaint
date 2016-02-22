
Quaint
======

[![Join the chat at https://gitter.im/breuleux/quaint](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/breuleux/quaint?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Quaint is a markup language similar to Markdown, but more regular and
easier to customize.

**[Website](http://breuleux.github.io/quaint/)**

Quaint is written in [Earl Grey](http://earl-grey.io)


Install
-------

    npm install quaint -g

Once installed, you can run `quaint` in a new directory to set up a
project. Plugins can be installed locally and configured with the
following command:

    quaint --setup plugin-name

[Usage documentation](http://breuleux.github.io/quaint/usage.html)


Syntax
------

[Syntax](http://breuleux.github.io/quaint/syntax.html)


Plugins
-------

[List of plugins](https://breuleux.github.io/quaint/plugins/index.html)


Command-line
------------

```
Usage: quaint <file ...> [options]

Options:
  -c, --config          Path to a configuration file with option values (must be
                        JSON)                           [default: "quaint.json"]
  -d, --data            JSON string or file(s) defining field:value pairs to be
                        made available inside markup (as {field}):
                        * key:value
                        * {"key": value, ...}
                        * filename.json
                        * prefix::filename.json
  -e, --eval            Quaint string to parse directly
  -f, --format          Format (only html currently supported)
  -h, --help            Show help                                      [boolean]
  --inline              Inline resources in the HTML
  -o, --out             File or directory to save the output to
  -p, --plugin          Plugin(s) to import:
                        * Quaint file (injected at the beginning)
                        * Path to JavaScript file
                        * Local npm module
                        * Global npm module
  -r, --resources       Directory where to put the resources
  --resources-url       URL for the resources directory
  --serve               Start server on specified port, in output directory
                                                                [default: false]
  -s, --stdout          Print to standard out         [boolean] [default: false]
  -t, --template        Name of the default template to use
  --template-directory  Template directory
  -v, --verbose         Print information about the operations performed
                                                                       [boolean]
  --setup               Set up and configure a plugin.          [default: false]
  -w, --watch           Watch for changes to rebuild            [default: false]

```


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
