
quaint-highlight
================

Highlight code in Quaint markup using highlight.js.

Usage:

```javascript
var quaint = require("quaint");
var qhl = require("quaint-highlight");

var q = quaint(qhl);

q.toHTML("javascript & function f() { return 123; }")
// ==> highlight the function in javascript

q.toHTML("& function f() { return 123; }")
// ==> highlight the function using the default language
// (see default option below)
```

Options:

**`operatorBlock`** (default: `"&"`) - define the operator for block
highlighting.

**`operatorInline`** (default: ``"`"``) - define the operator for
inline highlighting.

**`default`** (default: null) - define the language to use for
highlighting by default. This is useful if most of your code blocks
are in a specific language. By default, there is no highlighting.
Note that this will highlight both code blocks *and* inline code.

**`defaultBlock`** (default: null) - define the language to use for
highlighting by default for *code blocks*.

**`defaultInline`** (default: null) - define the language to use for
highlighting by default for *inline code*.

**`installPlugins`** (default: null) - a function that will be called
on the `highlight.js` instance. You can configure it, add languages,
and so on.
