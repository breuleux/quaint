/* */ 
var assert = require("assert");
var events = require("../../events@1.0.2");
var e = new events.EventEmitter;
assert.deepEqual(e._events, {});
e.setMaxListeners(5);
assert.deepEqual(e._events, {});
