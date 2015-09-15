
Quaint
======

Quaint is a markup language that's a bit similar to Markdown, but is
more regular and easier to customize.

Unfortunately the markup is poorly documented at the moment, but you
can use it interactively [here](http://breuleux.net/tryquaint/).

Install:

    npm install quaint

Simple usage:

    var quaint = require("quaint");
    quaint.toHTML("Hello _italic __[bold words].");
    // ==> "Hello <i>italic</i> <b>bold words</b>"

Extend with plugins:

    var quaint = require("quaint");
    var qhl = require("quaint-highlight");
    q = quaint(qhl({defaultLanguage: "python"}))
    q.toHTML("&\n  def python_function():\n    return 1234");
    // ==> code block for python_function highlighted in Python


