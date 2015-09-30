
quaint-highlight
================

Highlight code in Quaint markup using highlight.js.


Usage
-----

**Command-line**

Set up `quaint-highlight` for use with `file.q`:

```bash
$ npm install quaint-highlight
$ quaint -p highlight file.q
```

**Quaint**

Import `quaint-highlight` directly in `file.q`:

```
plugin highlight ::
  defaultLanguage = python

& def square(x): return x * x
```

**API**

```javascript
var quaint = require("quaint");
var qhl = require("quaint-highlight");

var q = quaint(qhl);

q.toHTML("javascript & function f() { return 123; }")
// ==> highlight the function in javascript


q = quaint(qhl({defaultLanguage: "javascript"}));

q.toHTML("& function f() { return 123; }")
// ==> highlight the function using the default language
// (defaultLanguage option is described below)
```

Options
-------

**`operatorBlock`** (default: `"&"`) - define the operator for block
highlighting.

**`operatorInline`** (default: ``"`"``) - define the operator for
inline highlighting.

**`defaultLanguage`** (default: null) - define the language to use for
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
