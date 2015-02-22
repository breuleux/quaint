
Quaint
======

Quaint is a markup language that's a bit similar to Markdown, but is
more regular and easier to customize. The markup is documented
[here](http://breuleux.net/quaint) for the Python version (available
[here](https://github.com/breuleux/quaint).

Install:

    npm install quaint

Simple usage:

    var quaint = require("quaint");
    quaint.toHTML("Hello _italic __[bold words].");
    // ==> "Hello <i>italic</i> <b>bold words</b>"

