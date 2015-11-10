

== Future

* CLI options:
  * `[--dump-data]
* Smarter link resolution for things like `[blah@@github.io/]?
* Adjust scoping to allow function defs in environment
* Additional processors for format
* Way to specify column name for first row for format

* Centralized list of format parsers?
* Make it suitable for live templating by running the document loop
  continuously
* resources ::
* Make compatible with Promises, async/await


== 0.0.13

=== TODO

* Better way to instantiate a naked Engine?
* Isolate the plugins in basic.eg


== 0.0.11

=== DONE

* Fix error numerotation


== 0.0.10

=== DONE

* doctype ::
* Label sections with the same name differently
* include :: html
* Fix error numerotation
* Clean up NL rule


== 0.0.9

=== DONE

* Arguments to plugins with -p
* CLI options:
  * `[--config]
  * `[--save-meta]
* Prefix option for include like -d has?
* Translate directories with CLI
* each::


== 0.0.8

=== DONE

* Blockquotes
* `MapDocument.getValue, `MapDocument.toJSON
* Set up `errors document
* meta error throws an actual error
* `[meta :: key: value] (: in addition to =)
* Replace `[::check] etc. by `[Symbol.check] etc.
* `Into and `Deferred instead of `[genfor %] and `[genfrom %]
* Conditionals
  * `[cond ?? true !! false]
  * `[when cond :: body]
* QAst.empty{}
* `[format :: file], `[format fmt :: body], `[format +fmt :: body]
* `[include :: data.json]
* `[scope :: body]
* `[plugins :: javascript, highlight]
* Update earlgrey-runtime to v0.0.11
* Update README


== Plugins

=== TODO

==== Languages

* coffeescript
* clojurescript
* python
* ruby

==== Markups and formats

* sass
* markdown
* yaml
* ini?

==== Displayers

* plot (various libraries)

==== Other

* math (latex)
* biblio
* yaml (include/format)
* earl-quaint (macro!)
* debug?

==== Resources

* bootstrap
* toc-scroll
* jspm?


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
