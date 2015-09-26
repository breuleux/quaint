
quaint-javascript
=================

Allows inline JavaScript code in Quaint markup.

Expressions in curly brackets will be evaluated in JavaScript.

## Usage

```javascript
var quaint = require("quaint");
var qjs = require("quaint-javascript");

var q = quaint(qjs);

q.toHTML("2 + 3 = {2 + 3}")
// ==> "2 + 3 = 5"
```

In the JavaScript code, you can use the `h` function to create HTML
elements programmatically:

```javascript
q.toHTML("{h('a.cls#id', {href: 'there'}, 'A', 'B')}")
'<a href="there" id="id" class="cls">AB</a>'

q.toHTML("{[1, 2, 3].map(function (x) { return h('b', x); })}")
// ==> "<b>1</b><b>4</b><b>9</b>"
```

## Options

### `sandbox`

An object to use as the global object for `eval`. All the properties
you set on that object will be available as top level variables in
scripts.

### `vm`

The module to use for the virtualization (defaults to the standard
`vm` module, so you usally won't have to set it).

Still, this can be handy if you want to preprocess the code before
evaluating it. The module must implement these two methods:

* **vm.createContext(sandbox)**: "contextify" the object, i.e. make it
  into a proper environment for the evaluator. If you implement your
  own, you return the sandbox itself, or a copy.

* **vm.runInContext(code, sandbox)**: evaluate the code in the sandbox
    returned by `createContext`.

