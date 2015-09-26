/* */ 

function Parser(tokenizer, order, finalize) {
    if (!(this instanceof Parser))
        return new Parser(tokenizer, order, finalize);
    this.tokenizer = tokenizer;
    this.order = order;
    this.finalize = finalize || function (node) { return node; };
}

Parser.prototype.parse = function (source) {
    var next = this.tokenizer.iterator(source);
    var stack = [];
    var middle = null;
    var left = next();
    var right = next();
    var current = [null, left];
    while (true) {
        var o = this.order(left, right);
        switch (o) {
        case "done":
            return middle;
        case "<":
            stack.push(current);
            current = [middle, right];
            middle = null;
            left = right;
            right = next();
            break;
        case ">":
            current.push(middle);
            middle = this.finalize(current);
            current = stack.pop()
            left = current[current.length - 1];
            break;
        case "=":
            current.push(middle, right);
            middle = null;
            left = right;
            right = next();
            break;
        default:
            throw Error("Unknown order directive: " + o);
        }
    }
}



function TokenGroups(groups) {
    if (!(this instanceof TokenGroups))
        return new TokenGroups(groups);
    this.lookup = {boundary: "boundary"};
    this.fns = [];
    for (var name in groups) {
        var entries = groups[name];
        for (var i = 0; i < entries.length; i++) {
            var e = entries[i];
            if (typeof(e) === "string")
                this.lookup[e] = name;
            else
                this.fns.push([e, name]);
        }
    }
    this.groups = groups;
}

TokenGroups.prototype.resolve = function (token) {
    var x = this.lookup[token.type + " " + token.token];
    if (x) { return x; }
    else {
        for (var i = 0; i < this.fns.length; i++) {
            if (this.fns[i][0](token))
                return this.fns[i][1];
        }
        return this.lookup[token.type] || token.type;
    }
}



function PriorityOrder(groups, priorities) {
    if (!(this instanceof PriorityOrder))
        return new PriorityOrder(groups, priorities);
    this.groups = groups;
    this.priorities = priorities;
    this.priorities["boundary"] = {left: -1, right: -1};
}

PriorityOrder.prototype.getOrder = function () {
    return this.order.bind(this);
}

PriorityOrder.prototype.getPrio = function (token) {
    return this.priorities[this.groups.resolve(token)];
}

PriorityOrder.prototype.order = function (a, b) {
    if (a.type === "boundary" && b.type === "boundary") return "done";
    var pa = this.getPrio(a).right;
    var pb = this.getPrio(b).left;
    if (pa < pb)  return "<";
    if (pa > pb)  return ">";
    if (pa == pb) return "=";
}


exports.Parser = Parser
exports.TokenGroups = TokenGroups
exports.PriorityOrder = PriorityOrder

