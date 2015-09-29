

== 0.0.8

=== TODO

* CLI options:
  * `[--save-meta]
  * `[--config]
  * `[--dump-data]
* Translate directories with CLI
* Better way to instantiate a naked Engine?
* `[plugins :: javascript, highlight]
* Conditionals
  * `[cond ?? true !! false]
  * `[when cond :: body]
* `[format :: file], `[format fmt :: body], `[format +fmt :: body]
* `[include :: data.json]
* Smarter link resolution for things like `[blah@@github.io/]?
* Adjust scoping to allow function defs in environment
* Update earlgrey-runtime to v0.0.11
* Update README

=== DONE

* Blockquotes
* `MapDocument.getValue, `MapDocument.toJSON
* Set up `errors document
* meta error throws an actual error
* `[meta :: key: value] (: in addition to =)
* Replace `[::check] etc. by `[Symbol.check] etc.
* `Into and `Deferred instead of `[genfor %] and `[genfrom %]


== Plugins

=== TODO

==== Languages

* coffeescript
* clojurescript
* python
* ruby

==== Other

* math (latex)
* biblio
* yaml (include/format)
* earl-quaint (macro!)
* debug?

=== DONE

* highlight
* javascript
* earlgrey


== Future

=== TODO

* Give `[[]] and `{} lower priority than indent.
* `[blah::[xy]z] should have `[[xy]] as the right hand side and not
  `[[xy]z].
* Apply regular expressions to contiguous strings
* `genfor multiple documents at the same time
* MAYBE: suffix `[!] and `[?] behave like suffix `[.]. Also `[...],
  `[?!?] and so on.
* Preprocessor

=== DONE

* Engine.run -> Engine.gen, Engine.run{src, documents}
* Specify document generation order
  * In fact, the process now tracks document access and modification
    and reruns code when needed.
* plugin system
* Order candidates by pattern specificity
* Fix short suffix operator when at the end of a line (it is interpreted
  as wide in case there is an indented block below...)
* Fix short suffix operator when right before comma, e.g. blah//, things.
* Paragraphs behave weird sometimes, for instance

  & Par 1

    Par 2

    .note %
      * a
      * b

    Will not put the bullet list inside the note?

=== ABANDONED
