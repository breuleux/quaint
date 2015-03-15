
== TODO

* Give `[[]] and `{} lower priority than indent.
* `[blah::[xy]z] should have `[[xy]] as the right hand side and not
  `[[xy]z].
* Apply regular expressions to contiguous strings
* `genfor multiple documents at the same time
* MAYBE: suffix `[!] and `[?] behave like suffix `[.]. Also `[...],
  `[?!?] and so on.


== DONE

* Engine.run -> Engine.gen, Engine.run{src, documents}
* Specify document generation order
  * In fact, the process now tracks document access and modification
    and reruns code when needed.
* plugin system
* Order candidates by pattern specificity
* Fix short suffix operator when at the end of a line (it is interpreted
  as wide in case there is an indented block below...)
* Fix short suffix operator when right before comma, e.g. blah//, things.


== ABANDONED
