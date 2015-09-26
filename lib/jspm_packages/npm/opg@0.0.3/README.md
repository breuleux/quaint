
OPG - Operator Precedence Grammars
==================================

This package implements operator precedence grammars, which are
suitable for simple arithmetic or programming languages. Such grammars
work well with incremental parsing, though that is not yet
implemented.

Here's example code for a simple arithmetic language:


    var opg = require("opg");
    
    var tokenizer = opg.tokenize.Tokenizer({
        // Each regular expression is tried in order. They must be
        // strings (for concatenation purposes).
        regexps: [
            ["op", "[+\\-*\\/^]"],
            ["open", "[\\(\\[\\{]"],
            ["close", "[\\)\\]\\}]"],
            ["number", "[0-9]+"],
            ["word", "[A-Za-z0-9]+"]
        ],
        // You can give a list of post-processing functions.
        // They must return a replacement token or a list of replacement tokens.
        post: [
            function (token, i, tokens) {
                if ((token.type === "op" || token.type === "open")
                    && tokens[i - 1].type === "op") {
                    // When there are consecutive operators, the second
                    // should be interpreted as prefix.
                    token.type = "prefix";
                }
                return token;
            }
        ]
    });

    // Tokens can be grouped together. Each group will obey the same
    // priority rules.
    var groups = opg.parse.TokenGroups({
        add: ["op +", "op -"],
        mul: ["op *", "op /", "prefix -", "prefix +"],
        exp: ["op ^"],
        lit: ["word", "number"]
    });
    
    // Priorities between token groups. Expression "a + b * c"
    // compares "+".right to "*".left.
    // left < right: group is left-associative
    // left > right: group is right-associative
    // left == right: group is list-associative
    var prio = opg.parse.PriorityOrder(groups, {
        open: {left: 100, right: 0},
        close: {left: 0, right: 1000},
        add: {left: 10, right: 11},
        mul: {left: 20, right: 21},
        exp: {left: 31, right: 30},
        lit: {left: 1000, right: 1000}
    });
    
    var parser = opg.parse.Parser(tokenizer, prio.getOrder(), function (node) {
    
        // This function will receive AST nodes from the parser as they
        // are resolved. An AST node, essentially, alternates between
        // operands and operators like this:
    
        // [operand, operator, operand, operator, ...]
    
        // All operands are either null or a previous return value of
        // finalize. Operators are always tokens.
    
        // An identifier or literal is a nullary operator, which means
        // that both of its operands are null. Therefore, when parsing:
        // "2 + 3"
        // finalize will be called three times:
    
        // 1. Finalize "2"
        //    node = [null, {token: "2", type: "number"}, null]
        //    ==> return 2
    
        // 2. Finalize "3"
        //    node = [null, {token: "3", type: "number"}, null]
        //    ==> return 3
    
        // 3. Finalize "2 + 3"
        //    node = [2, {token: "+", type: "op"}, 3]
        //    ==> return 5
    
        switch (node[1].token) {
        case "+":
            return node[0] + node[2];
        case "-":
            // That will work for prefix "-" since null-x == -x
            return node[0] - node[2];
        case "*":
            return node[0] * node[2];
        case "/":
            return node[0] / node[2];
        case "^":
            return Math.pow(node[0], node[2]);
        case "(":
            if (node[0] === null) {
                return node[2];
            }
            return Math[node[0]](node[2]);
        default:
            if (node[1].type === "number")
                return parseInt(node[1].token);
            else
                return node[1].token;
        }
    });
    
    console.log(parser.parse("2 + 3"));
