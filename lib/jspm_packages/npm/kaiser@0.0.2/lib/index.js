/* */ 
"use strict";

require("earlgrey-runtime/5");var tmp$0 = undefined;var $targ$19 = undefined;var accum$8 = undefined;var $targ$20 = undefined;var accum$9 = undefined;var accum$10 = undefined;var accum$11 = undefined;var accum$12 = undefined;var accum$13 = undefined;var accum$14 = undefined;var accum$15 = undefined;var accum$16 = undefined;var accum$17 = undefined;var accum$18 = undefined;var accum$19 = undefined;var accum$20 = undefined;var accum$21 = undefined;var m$24 = undefined;var $targ$27 = undefined;var $targ$28 = undefined;var $targ$29 = undefined;var $targ$30 = undefined;var $targ$31 = undefined;var $targ$32 = undefined;var $targ$33 = undefined;var $targ$34 = undefined;var $targ$35 = undefined;var $targ$36 = undefined;var $targ$37 = undefined;var $targ$38 = undefined;var $targ$39 = undefined;var $targ$40 = undefined;var TYPEID$0 = undefined;var registry$0 = undefined;var object__minus__name$0 = undefined;var make__minus__type__minus__id$0 = undefined;var register$0 = undefined;var register__minus__all$0 = undefined;var object__minus__serializer$0 = undefined;var singleton__minus__serializer$0 = undefined;var register__minus__singleton$0 = undefined;var register__minus__singletons$0 = undefined;var register__minus__function$0 = undefined;var register__minus__functions$0 = undefined;var Serializer$0 = undefined;var default__minus__serializer$0 = undefined;var serialize$0 = undefined;var deserialize$0 = undefined;var shallow__minus__copy$0 = undefined;var deep__minus__copy$0 = undefined;var cmds$0 = undefined;var $targ$0 = undefined;if ((tmp$0 = send(global, "@@KAISER", true), tmp$0 === undefined || tmp$0 === null ? tmp$0 : tmp$0.loaded)) {
  return global["@@KAISER"];
}TYPEID$0 = Symbol("TYPEID");registry$0 = {};object__minus__name$0 = function objectName() {
  var tmp$1 = undefined;var tmp$3 = undefined;var tmp$2 = undefined;var name$0 = undefined;var m$1$0 = undefined;var object$0 = undefined;var req$0 = undefined;var t0$0 = undefined;var m$0$0 = undefined;m$0$0 = arguments;t0$0 = m$0$0.length;if (t0$0 >= 1 && t0$0 <= 2) {
    object$0 = m$0$0[0];if (1 >= t0$0) {
      req$0 = false;
    } else {
      req$0 = m$0$0[1];
    }m$1$0 = (tmp$1 = object$0, tmp$1 === undefined || tmp$1 === null ? tmp$1 : tmp$1.name) || (tmp$2 = (tmp$3 = object$0, tmp$3 === undefined || tmp$3 === null ? tmp$3 : tmp$3.constructor), tmp$2 === undefined || tmp$2 === null ? tmp$2 : tmp$2.name);if (!m$1$0 && req$0) {
      throw ErrorFactory(["kaiser", "nameRequired"]).create("The object or function to register must have a name field or its constructor must have a name.");
    } else {
      if (!m$1$0) {
        return "";
      } else {
        name$0 = m$1$0;return name$0;
      }
    }
  } else {
    return ___match_error(m$0$0, "{object, req = false}");
  }
};make__minus__type__minus__id$0 = function makeTypeId(object$1, temp$0$0) {
  var t0$1 = undefined;var name__minus__variant$0 = undefined;var dv$0 = undefined;var data__minus__version$0 = undefined;var m$2$0 = undefined;var version$0 = undefined;var package$1 = undefined;var use__minus__version$0 = undefined;var type__minus__id$2 = undefined;var type__minus__id$1 = undefined;var ph$1$0 = undefined;var type__minus__id$0 = undefined;var variant$0 = undefined;var $$107$0 = undefined;var $$108$0 = undefined;var t0$2 = undefined;var policy$0 = undefined;var ph$0$0 = undefined;t0$1 = temp$0$0;policy$0 = t0$1;ph$0$0 = t0$1;t0$2 = ph$0$0;if (($$108$0 = ___hasprop(t0$2, "typeId")) && (type__minus__id$0 = t0$2.typeId, ___hasprop(t0$2, "variant"))) {
    variant$0 = t0$2.variant;return type__minus__id$0 + "/" + JSON.stringify(variant$0);
  } else {
    if ($$108$0 && (type__minus__id$1 = t0$2.typeId, ___hasprop(t0$2, "nameVariant"))) {
      ph$1$0 = t0$2.nameVariant;if (ph$1$0 === true) {
        return type__minus__id$1 + "/" + object__minus__name$0(object$1);
      } else {
        name__minus__variant$0 = ph$1$0;return type__minus__id$1 + "/" + name__minus__variant$0;
      }
    } else {
      if ($$108$0) {
        type__minus__id$2 = t0$2.typeId;return type__minus__id$2;
      } else {
        if (___hasprop(t0$2, "package")) {
          package$1 = t0$2["package"];if (___hasprop(t0$2, "useVersion")) {
            use__minus__version$0 = t0$2.useVersion;
          } else {
            use__minus__version$0 = null;
          }m$2$0 = use__minus__version$0;if (!m$2$0) {
            version$0 = "";
          } else {
            if ((dv$0 = package$1.dataVersion, dv$0)) {
              data__minus__version$0 = ENode([], {}, ["d", dv$0]).toString();
            } else {
              data__minus__version$0 = package$1.version;
            }if (m$2$0 === "major") {
              version$0 = ENode([], {}, ["@", data__minus__version$0.split(".")[0]]).toString();
            } else {
              if (m$2$0 === "minor") {
                version$0 = ENode([], {}, ["@", send(data__minus__version$0.split("."), range(0, 2 - 1)).join(".")]).toString();
              } else {
                if (m$2$0 === "patch") {
                  version$0 = ENode([], {}, ["@", data__minus__version$0]).toString();
                } else {
                  version$0 = ___match_error(m$2$0, ".patch");
                }
              }
            }
          }return ENode([], {}, ["npm:", package$1.name, version$0, "/", object__minus__name$0(object$1)]).toString();
        } else {
          throw ErrorFactory(["kaiser", "register", "id"]).create("No typeId provided.");
        }
      }
    }
  }
};register$0 = function register(object$2, _policy$0) {
  var $targ$4 = undefined;var $targ$5 = undefined;var t0$3 = undefined;var bridge$$233$0 = undefined;var bridge$$236$0 = undefined;var m$3$0 = undefined;var policy$1 = undefined;var $targ$1 = undefined;var type__minus__id$3 = undefined;var prev$0 = undefined;var $targ$2 = undefined;var $targ$3 = undefined;if (!_policy$0.deserialize && _policy$0.create) {
    $targ$4 = function (x$0) {
      var r$0 = undefined;r$0 = _policy$0.create();_policy$0.fill(r$0, x$0);return r$0;
    };_policy$0.deserialize = $targ$4;void 0;
  }if (_policy$0.deserialize && !_policy$0.create) {
    $targ$5 = null;_policy$0.create = $targ$5;void 0;
  }policy$1 = __amp__(object__minus__serializer$0(object$2), _policy$0);if (policy$1.target !== "self" && object$2.prototype && !policy$1.ignorePrototype) {
    return register$0(object$2.prototype, _policy$0);
  }$targ$1 = make__minus__type__minus__id$0(object$2, policy$1);t0$3 = $targ$1;policy$1.typeId = t0$3;type__minus__id$3 = t0$3;if (Object.isFrozen(object$2)) {
    throw ErrorFactory(["kaiser", "frozen"]).create("kaiser cannot register frozen objects as serializable types; " + "either register them before freezing them, or register their prototypes.");
  }prev$0 = send(registry$0, type__minus__id$3);if (prev$0 && prev$0 !== policy$1) {
    m$3$0 = prev$0.onDuplicate;bridge$$233$0 = m$3$0;if (bridge$$233$0 === "error" || policy$1.onDuplicate === "error") {
      throw ErrorFactory(["kaiser", "duplicateId"]).create(ENode([], {}, ["Duplicate typeId: \"", type__minus__id$3, "\". You can control this error"]).toString() + ENode([], {}, [" with the onDuplicate option to kaiser.register"]).toString() + ENode([], {}, [" (onDuplicate: \"error\" (default), \"(warn-)keep\" or \"(warn-)replace\")."]).toString());
    } else {
      if (m$3$0 === "warnKeep") {
        console.warn(ENode([], {}, ["WARNING: Duplicate typeId: \"", type__minus__id$3, "\". Keeping previous."]).toString());return false;
      } else {
        bridge$$236$0 = m$3$0;if (bridge$$236$0 === "warn" || bridge$$236$0 === "warnReplace") {
          console.warn(ENode([], {}, ["WARNING: Duplicate typeId: \"", type__minus__id$3, "\". Replacing."]).toString());
        } else {
          if (m$3$0 === "keep") {
            return false;
          } else {
            if (m$3$0 === "replace") {
              undefined;
            } else {
              ___match_error(m$3$0, ".replace");
            }
          }
        }
      }
    }
  }$targ$2 = policy$1;registry$0[type__minus__id$3] = $targ$2;$targ$3 = type__minus__id$3;object$2[TYPEID$0] = $targ$3;return true;
};register__minus__all$0 = function registerAll(objects$0, policy$2) {
  var m$4 = undefined;var acc$0 = undefined;var temp$1 = undefined;acc$0 = [];temp$1 = null;m$4 = null;$1: for (var _iterator = objects$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
    m$4 = _step.value;
    var object$3 = undefined;object$3 = m$4;temp$1 = register$0(object$3, __amp__(policy$2, { nameVariant: object__minus__name$0(object$3) }));acc$0.push(temp$1);
  }return acc$0;
};object__minus__serializer$0 = function objectSerializer(proto$0) {
  var accum$0 = undefined;var accum$1 = undefined;var accum$2 = undefined;var accum$3 = undefined;return __amp____colon__({ onDuplicate: "error", target: "direct", ignorePrototype: false }, __amp____colon__((accum$0 = {}, accum$0.serialize = function serialize(x$1) {
    return object(items(x$1));
  }, accum$0), __amp____colon__((accum$1 = {}, accum$1.deserialize = function deserialize(x$2) {
    var m$5 = undefined;var rval$0 = undefined;rval$0 = Object.create(proto$0);m$5 = null;$2: for (var _iterator = items(x$2)[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      m$5 = _step.value;
      var $targ$6 = undefined;var k$0 = undefined;var v$0 = undefined;var t0$4 = undefined;var t1$0 = undefined;t0$4 = m$5;if (Array.isArray(t0$4) && (t1$0 = t0$4.length, t1$0 === 2)) {
        k$0 = t0$4[0];v$0 = t0$4[1];$targ$6 = v$0;rval$0[k$0] = $targ$6;void 0;
      } else {
        ___match_error(m$5);
      }
    }return rval$0;
  }, accum$1), __amp____colon__((accum$2 = {}, accum$2.create = function create() {
    return Object.create(proto$0);
  }, accum$2), (accum$3 = {}, accum$3.fill = function fill(rval$1, x$3) {
    var m$6 = undefined;m$6 = null;$3: for (var _iterator = items(x$3)[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      m$6 = _step.value;
      var $targ$7 = undefined;var k$1 = undefined;var v$1 = undefined;var t0$5 = undefined;var t1$1 = undefined;t0$5 = m$6;if (Array.isArray(t0$5) && (t1$1 = t0$5.length, t1$1 === 2)) {
        k$1 = t0$5[0];v$1 = t0$5[1];$targ$7 = v$1;rval$1[k$1] = $targ$7;void 0;
      } else {
        ___match_error(m$6);
      }
    }return rval$1;
  }, accum$3)))));
};singleton__minus__serializer$0 = function singletonSerializer(object$4) {
  var accum$4 = undefined;var accum$5 = undefined;return __amp____colon__({ target: "self" }, __amp____colon__((accum$4 = {}, accum$4.serialize = function serialize(temp$2$0) {
    return null;
  }, accum$4), (accum$5 = {}, accum$5.deserialize = function deserialize(temp$3$0) {
    return object$4;
  }, accum$5)));
};register__minus__singleton$0 = function registerSingleton() {
  var policy$3 = undefined;var type__minus__id$4 = undefined;var t0$7 = undefined;var object$5 = undefined;var ph$3$0 = undefined;var t0$6 = undefined;var m$7$0 = undefined;m$7$0 = arguments;t0$6 = m$7$0.length;if (t0$6 >= 1 && t0$6 <= 2) {
    object$5 = m$7$0[0];if (1 >= t0$6) {
      ph$3$0 = null;
    } else {
      ph$3$0 = m$7$0[1];
    }if (ph$3$0 === null) {
      return function (o$0) {
        return register__minus__singleton$0(o$0, object$5);
      };
    } else {
      t0$7 = ph$3$0;if (typeof t0$7 === "string") {
        type__minus__id$4 = t0$7;register$0(object$5, __amp__(singleton__minus__serializer$0(object$5), { typeId: type__minus__id$4 }));return object$5;
      } else {
        policy$3 = ph$3$0;register$0(object$5, __amp__(singleton__minus__serializer$0(object$5), policy$3));return object$5;
      }
    }
  } else {
    return ___match_error(m$7$0, "{object, match = null}");
  }
};register__minus__singletons$0 = function registerSingletons(objects$1, _policy$1) {
  var type__minus__id$5 = undefined;var m$8$0 = undefined;var m$9 = undefined;var acc$1 = undefined;var temp$4 = undefined;var policy$4 = undefined;m$8$0 = _policy$1;if (typeof m$8$0 === "string") {
    type__minus__id$5 = m$8$0;policy$4 = { typeId: type__minus__id$5 };
  } else {
    policy$4 = _policy$1;
  }acc$1 = [];temp$4 = null;m$9 = null;$4: for (var _iterator = objects$1[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
    m$9 = _step.value;
    var object$6 = undefined;object$6 = m$9;temp$4 = register$0(object$6, __amp__(singleton__minus__serializer$0(object$6), __amp__(policy$4, { nameVariant: object__minus__name$0(object$6) })));acc$1.push(temp$4);
  }return acc$1;
};register__minus__function$0 = register__minus__singleton$0;register__minus__functions$0 = register__minus__singletons$0;Serializer$0 = function Serializer() {
  var $targ$8 = undefined;var $targ$10 = undefined;var accum$6 = undefined;var $targ$11 = undefined;var accum$7 = undefined;var t0$9 = undefined;var acquire$0 = undefined;var $targ$9 = undefined;var wl$0 = undefined;var white__minus__list$0 = undefined;var ph$5$0 = undefined;var t0$8 = undefined;var t1$2 = undefined;var m$10$0 = undefined;var __at___$0 = undefined;if (!getChecker(Serializer$0)(this)) {
    __at___$0 = Object.create(Serializer$0.prototype);
  } else {
    __at___$0 = this;
  }m$10$0 = arguments;t0$8 = m$10$0.length;if (t0$8 >= 0 && t0$8 <= 1) {
    if (0 >= t0$8) {
      t1$2 = null;
    } else {
      t1$2 = m$10$0[0];
    }white__minus__list$0 = t1$2;ph$5$0 = t1$2;if (ph$5$0 === null) {
      $targ$8 = null;__at___$0.whiteList = $targ$8;void 0;
    } else {
      $targ$9 = __amp____colon__({ native: true }, __amp____colon__(($targ$10 = true, accum$6 = {}, accum$6["builtin:Object"] = $targ$10, accum$6), ($targ$11 = true, accum$7 = {}, accum$7["builtin:Array"] = $targ$11, accum$7)));t0$9 = $targ$9;__at___$0.whiteList = t0$9;wl$0 = t0$9;acquire$0 = function acquire(temp$5$0) {
        var t0$10 = undefined;var m$11 = undefined;var acc$2 = undefined;var temp$6 = undefined;var $targ$12 = undefined;var $targ$13 = undefined;var $targ$14 = undefined;var tid$1 = undefined;var tid$0 = undefined;var $$595$0 = undefined;var t0$11 = undefined;var t1$3 = undefined;var t2$0 = undefined;var w$0 = undefined;var ph$6$0 = undefined;t0$10 = temp$5$0;w$0 = t0$10;ph$6$0 = t0$10;if (Array.isArray(ph$6$0)) {
          acc$2 = [];temp$6 = null;m$11 = null;$5: for (var _iterator = w$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
            m$11 = _step.value;
            var entry$0 = undefined;entry$0 = m$11;temp$6 = acquire$0(entry$0);acc$2.push(temp$6);
          }return acc$2;
        } else {
          if (typeof ph$6$0 === "string") {
            $targ$12 = true;wl$0[w$0] = $targ$12;return void 0;
          } else {
            t0$11 = ph$6$0;if (___hasprop(t0$11, "prototype") && (t1$3 = t0$11.prototype, t2$0 = TYPEID$0, ___hasprop(t1$3, t2$0))) {
              tid$0 = send(t1$3, t2$0);$targ$13 = true;wl$0[tid$0] = $targ$13;return void 0;
            } else {
              t1$3 = TYPEID$0;if (___hasprop(t0$11, t1$3)) {
                tid$1 = send(t0$11, t1$3);$targ$14 = true;wl$0[tid$1] = $targ$14;return void 0;
              } else {
                return ___match_error(ph$6$0, "{^TYPEID => tid}");
              }
            }
          }
        }
      };acquire$0(white__minus__list$0 || []);
    }
  } else {
    ___match_error(m$10$0, "{match white-list = null}");
  }return __at___$0;
};Serializer$0.prototype.toObject = function () {
  var bridge$$712$0 = undefined;var bridge$$711$0 = undefined;var bridge$$710$0 = undefined;var bridge$$709$0 = undefined;var m$13$0 = undefined;var t0$13 = undefined;var t1$4 = undefined;var $targ$15 = undefined;var d$0 = undefined;var i$0 = undefined;var $targ$16 = undefined;var p$0 = undefined;var t0$14 = undefined;var policy$5 = undefined;var ph$7$0 = undefined;var m$14$0 = undefined;var bridge$$825$0 = undefined;var bridge$$824$0 = undefined;var bridge$$823$0 = undefined;var m$16 = undefined;var acc$3 = undefined;var temp$7 = undefined;var m$17 = undefined;var acc$4 = undefined;var temp$8 = undefined;var bridge$$822$0 = undefined;var m$15$0 = undefined;var tid$2 = undefined;var ser0$0 = undefined;var ser1$0 = undefined;var rval$2 = undefined;var obj$0 = undefined;var recursive$0 = undefined;var seen$0 = undefined;var t0$12 = undefined;var m$12$0 = undefined;var __at___$1 = undefined;var self$0 = undefined;__at___$1 = this;self$0 = this;m$12$0 = arguments;t0$12 = m$12$0.length;if (t0$12 >= 1 && t0$12 <= 3) {
    obj$0 = m$12$0[0];if (1 >= t0$12) {
      recursive$0 = true;
    } else {
      recursive$0 = m$12$0[1];
    }if (2 >= t0$12) {
      seen$0 = new Map();
    } else {
      seen$0 = m$12$0[2];
    }m$13$0 = obj$0;bridge$$709$0 = m$13$0;if ((bridge$$710$0 = bridge$$709$0, (bridge$$711$0 = bridge$$710$0, (bridge$$712$0 = bridge$$711$0, bridge$$712$0 === null || bridge$$712$0 === void 0) || typeof bridge$$711$0 === "boolean") || typeof bridge$$710$0 === "number") || typeof bridge$$709$0 === "string") {
      return { typeId: ENode([], {}, ["native"]).toString(), data: obj$0 };
    } else {
      undefined;
    }if (seen$0.has(obj$0)) {
      $targ$15 = seen$0.get(obj$0);t0$13 = $targ$15;if (Array.isArray(t0$13) && (t1$4 = t0$13.length, t1$4 === 2)) {
        d$0 = t0$13[0];i$0 = t0$13[1];
      } else {
        ___match_error($targ$15, "{d, i}");
      }[d$0, i$0];$targ$16 = i$0;d$0.ref = $targ$16;return { ref: i$0 };
    }rval$2 = {};seen$0.set(obj$0, [rval$2, seen$0.size]);__amp____colon__(rval$2, (tid$2 = send(obj$0, TYPEID$0), !tid$2 ? (function () {
      throw ErrorFactory(["kaiser", "serialize"]).create(ENode([], {}, ["Object has no typeId and cannot be serialized: ", obj$0]).toString());
    })() : undefined, __at___$1.whiteList && !send(send(__at___$1, "whiteList", true), tid$2) ? (function () {
      throw ErrorFactory(["kaiser", "serialize"]).create(ENode([], {}, ["Object with type id \"", tid$2, "\" is not white-listed for serialization: ", obj$0]).toString());
    })() : undefined, ser0$0 = (m$14$0 = send(registry$0, tid$2), m$14$0 === void 0 ? (function () {
      throw ErrorFactory(["kaiser", "serialize"]).create(ENode([], {}, ["Cannot serialize typeId: \"", tid$2, "\" for object ", obj$0]).toString());
    })() : (policy$5 = m$14$0, ___hasprop(m$14$0, "target") ? (ph$7$0 = m$14$0.target, ph$7$0 === "self" && !Object.hasOwnProperty.call(obj$0, TYPEID$0) ? (function () {
      throw ErrorFactory(["kaiser", "serialize"]).create(ENode([], {}, ["Object has no typeId and cannot be serialized: ", obj$0, " [1]"]).toString());
    })() : (t0$14 = ph$7$0, t0$14 === "direct" && (p$0 = Object.getPrototypeOf(obj$0), !p$0.hasOwnProperty.call(p$0, TYPEID$0)) ? (function () {
      throw ErrorFactory(["kaiser", "serialize"]).create(ENode([], {}, ["Object has no typeId and cannot be serialized: ", obj$0, " [2]"]).toString());
    })() : policy$5.serialize(obj$0))) : ___match_error(m$14$0, "policy and {target => match}"))), ser1$0 = (m$15$0 = ser0$0, !recursive$0 ? ser0$0 : (bridge$$822$0 = m$15$0, (bridge$$823$0 = bridge$$822$0, (bridge$$824$0 = bridge$$823$0, (bridge$$825$0 = bridge$$824$0, bridge$$825$0 === null || bridge$$825$0 === void 0) || typeof bridge$$824$0 === "string") || typeof bridge$$823$0 === "number") || typeof bridge$$822$0 === "boolean" ? ser0$0 : Array.isArray(m$15$0) ? (acc$3 = [], temp$7 = null, m$16 = null, (function () {
      $6: for (var _iterator = ser0$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        m$16 = _step.value;
        var x$4 = undefined;x$4 = m$16;temp$7 = __at___$1.toObject(x$4, recursive$0, seen$0);acc$3.push(temp$7);
      }
    })(), acc$3) : getChecker(Object)(m$15$0) ? object((acc$4 = [], temp$8 = null, m$17 = null, (function () {
      $7: for (var _iterator = items(ser0$0)[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        m$17 = _step.value;
        var k$2 = undefined;var v$2 = undefined;var t0$15 = undefined;var t1$5 = undefined;t0$15 = m$17;if (Array.isArray(t0$15) && (t1$5 = t0$15.length, t1$5 === 2)) {
          k$2 = t0$15[0];v$2 = t0$15[1];temp$8 = [k$2, __at___$1.toObject(v$2, recursive$0, seen$0)];acc$4.push(temp$8);
        } else {
          ___match_error(m$17);
        }
      }
    })(), acc$4)) : ___match_error(m$15$0, "Object? "))), { typeId: tid$2, data: ser1$0 }));return rval$2;
  } else {
    return ___match_error(m$12$0, "{obj, recursive = true, seen = new Map{}}");
  }
};Serializer$0.prototype.fromObject = function () {
  var rval$3 = undefined;var $targ$17 = undefined;var $targ$18 = undefined;var x$6 = undefined;var policy$7 = undefined;var policy$6 = undefined;var m$21$0 = undefined;var deser$0 = undefined;var assim$0 = undefined;var tid$3 = undefined;var obj$1 = undefined;var recursive$1 = undefined;var made$0 = undefined;var t0$16 = undefined;var m$18$0 = undefined;var __at___$2 = undefined;var self$1 = undefined;__at___$2 = this;self$1 = this;m$18$0 = arguments;t0$16 = m$18$0.length;if (t0$16 >= 1 && t0$16 <= 3) {
    obj$1 = m$18$0[0];if (1 >= t0$16) {
      recursive$1 = true;
    } else {
      recursive$1 = m$18$0[1];
    }if (2 >= t0$16) {
      made$0 = {};
    } else {
      made$0 = m$18$0[2];
    }assim$0 = function assim(temp$9$0) {
      var t0$17 = undefined;var bridge$$973$0 = undefined;var bridge$$972$0 = undefined;var bridge$$971$0 = undefined;var m$19 = undefined;var acc$5 = undefined;var temp$10 = undefined;var m$20 = undefined;var acc$6 = undefined;var temp$11 = undefined;var bridge$$970$0 = undefined;var data$0 = undefined;var ph$8$0 = undefined;t0$17 = temp$9$0;data$0 = t0$17;ph$8$0 = t0$17;if (!recursive$1) {
        return object(items(data$0));
      } else {
        bridge$$970$0 = ph$8$0;if ((bridge$$971$0 = bridge$$970$0, (bridge$$972$0 = bridge$$971$0, (bridge$$973$0 = bridge$$972$0, bridge$$973$0 === null || bridge$$973$0 === void 0) || typeof bridge$$972$0 === "string") || typeof bridge$$971$0 === "number") || typeof bridge$$970$0 === "boolean") {
          return data$0;
        } else {
          if (Array.isArray(ph$8$0)) {
            acc$5 = [];temp$10 = null;m$19 = null;$8: for (var _iterator = data$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
              m$19 = _step.value;
              var x$5 = undefined;x$5 = m$19;temp$10 = __at___$2.fromObject(x$5, recursive$1, made$0);acc$5.push(temp$10);
            }return acc$5;
          } else {
            if (getChecker(Object)(ph$8$0)) {
              return object((acc$6 = [], temp$11 = null, m$20 = null, (function () {
                $9: for (var _iterator2 = items(data$0)[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
                  m$20 = _step2.value;
                  var k$3 = undefined;var v$3 = undefined;var t0$18 = undefined;var t1$6 = undefined;t0$18 = m$20;if (Array.isArray(t0$18) && (t1$6 = t0$18.length, t1$6 === 2)) {
                    k$3 = t0$18[0];v$3 = t0$18[1];temp$11 = [k$3, __at___$2.fromObject(v$3, recursive$1, made$0)];acc$6.push(temp$11);
                  } else {
                    ___match_error(m$20);
                  }
                }
              })(), acc$6));
            } else {
              return ___match_error(ph$8$0, "Object? ");
            }
          }
        }
      }
    };tid$3 = obj$1.typeId;if (tid$3 === undefined) {
      if (Object.hasProperty.call(made$0, obj$1.ref)) {
        return send(made$0, obj$1.ref);
      } else {
        throw ErrorFactory(["kaiser", "noRef"]).create(ENode([], {}, ["Could not deserialize object reference ", obj$1.ref, " because it is nested recursively and kaiser does not know how to build it."]).toString());
      }
    } else {
      if (__at___$2.whiteList && !send(send(__at___$2, "whiteList", true), tid$3)) {
        throw ErrorFactory(["kaiser", "deserialize"]).create(ENode([], {}, ["Cannot deserialize ", obj$1.data, ": typeId \"", tid$3, "\" is not in the whitelist"]).toString());
      }if (tid$3 === "native") {
        return obj$1.data;
      } else {
        m$21$0 = send(registry$0, tid$3);if (m$21$0 === void 0) {
          throw ErrorFactory(["kaiser", "deserialize"]).create(ENode([], {}, ["No deserializer for typeId \"", tid$3, "\""]).toString());
        } else {
          policy$6 = m$21$0;if (obj$1.ref !== undefined && policy$6.create) {
            rval$3 = policy$6.create();$targ$17 = rval$3;made$0[obj$1.ref] = $targ$17;policy$6.fill(rval$3, assim$0(obj$1.data));deser$0 = rval$3;
          } else {
            policy$7 = m$21$0;x$6 = policy$7.deserialize(assim$0(obj$1.data));if (obj$1.ref) {
              $targ$18 = x$6;made$0[obj$1.ref] = $targ$18;void 0;
            }deser$0 = x$6;
          }
        }return deser$0;
      }
    }
  } else {
    return ___match_error(m$18$0, "{obj, recursive = true, made = {=}}");
  }
};Serializer$0.prototype.serialize = function serialize(obj$2) {
  var __at___$3 = undefined;var self$2 = undefined;__at___$3 = this;self$2 = this;return JSON.stringify(__at___$3.toObject(obj$2));
};Serializer$0.prototype.deserialize = function deserialize(repr$0) {
  var __at___$4 = undefined;var self$3 = undefined;__at___$4 = this;self$3 = this;return __at___$4.fromObject(JSON.parse(repr$0));
};Serializer$0.prototype.shallowCopy = function (obj$3) {
  var __at___$5 = undefined;var self$4 = undefined;__at___$5 = this;self$4 = this;return __at___$5.fromObject(__at___$5.toObject(obj$3, false), false);
};Serializer$0.prototype.deepCopy = function (obj$4) {
  var __at___$6 = undefined;var self$5 = undefined;__at___$6 = this;self$5 = this;return __at___$6.fromObject(__at___$6.toObject(obj$4));
};__amp____colon__(Serializer$0, __amp____colon__(($targ$19 = "Serializer", accum$8 = {}, accum$8["::name"] = $targ$19, accum$8), ($targ$20 = true, accum$9 = {}, accum$9["::egclass"] = $targ$20, accum$9)));default__minus__serializer$0 = Serializer$0();serialize$0 = default__minus__serializer$0.serialize.bind(default__minus__serializer$0);deserialize$0 = default__minus__serializer$0.deserialize.bind(default__minus__serializer$0);shallow__minus__copy$0 = default__minus__serializer$0.shallowCopy.bind(default__minus__serializer$0);deep__minus__copy$0 = default__minus__serializer$0.deepCopy.bind(default__minus__serializer$0);register$0(Array.prototype, __amp____colon__({ typeId: "builtin:Array", onDuplicate: "error", target: "direct" }, __amp____colon__((accum$10 = {}, accum$10.serialize = function serialize(obj$5) {
  return obj$5;
}, accum$10), __amp____colon__((accum$11 = {}, accum$11.deserialize = function deserialize(obj$6) {
  return obj$6;
}, accum$11), __amp____colon__((accum$12 = {}, accum$12.create = function create() {
  return [];
}, accum$12), (accum$13 = {}, accum$13.fill = function fill(a$0, obj$7) {
  var m$22 = undefined;m$22 = null;$10: for (var _iterator = obj$7[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
    m$22 = _step.value;
    var x$7 = undefined;x$7 = m$22;a$0.push(x$7);
  }return a$0;
}, accum$13))))));register$0(Object.prototype, __amp____colon__({ typeId: "builtin:Object", onDuplicate: "error", target: "direct" }, __amp____colon__((accum$14 = {}, accum$14.serialize = function serialize(obj$8) {
  return obj$8;
}, accum$14), __amp____colon__((accum$15 = {}, accum$15.deserialize = function deserialize(obj$9) {
  return obj$9;
}, accum$15), __amp____colon__((accum$16 = {}, accum$16.create = function create() {
  return {};
}, accum$16), (accum$17 = {}, accum$17.fill = function fill(o$1, obj$10) {
  __amp____colon__(o$1, obj$10);return o$1;
}, accum$17))))));register$0(Date.prototype, __amp____colon__({ typeId: "builtin:Date", onDuplicate: "error", target: "direct" }, __amp____colon__((accum$18 = {}, accum$18.serialize = function serialize(obj$11) {
  return String(obj$11);
}, accum$18), (accum$19 = {}, accum$19.deserialize = function deserialize(s$0) {
  return new Date(s$0);
}, accum$19))));register$0(Error.prototype, __amp____colon__({ typeId: "builtin:Error", onDuplicate: "error", target: "direct" }, __amp____colon__((accum$20 = {}, accum$20.serialize = function serialize(obj$12) {
  var $targ$23 = undefined;var rval$4 = undefined;var $targ$21 = undefined;var $targ$22 = undefined;rval$4 = object(items(obj$12));$targ$21 = obj$12.message;rval$4.message = $targ$21;$targ$22 = obj$12.stack;rval$4.stack = $targ$22;if (send(obj$12, Symbol.errorTags)) {
    $targ$23 = send(obj$12, Symbol.errorTags);rval$4["::tags"] = $targ$23;void 0;
  }return rval$4;
}, accum$20), (accum$21 = {}, accum$21.deserialize = function deserialize(s$1) {
  var m$23 = undefined;var $targ$26 = undefined;var e$0 = undefined;var $targ$24 = undefined;e$0 = Error(s$1.message);m$23 = null;$11: for (var _iterator = items(s$1)[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
    m$23 = _step.value;
    var $targ$25 = undefined;var k$4 = undefined;var v$4 = undefined;var t0$19 = undefined;var t1$7 = undefined;t0$19 = m$23;if (Array.isArray(t0$19) && (t1$7 = t0$19.length, t1$7 === 2 && (k$4 = t0$19[0], v$4 = t0$19[1], !__in__(k$4, ["message", "::tags"])))) {
      $targ$25 = v$4;e$0[k$4] = $targ$25;void 0;
    } else {
      false;
    }
  }$targ$24 = s$1.stack;e$0.stack = $targ$24;if (s$1["::tags"]) {
    $targ$26 = s$1["::tags"];e$0[Symbol.errorTags] = $targ$26;void 0;
  }return e$0;
}, accum$21))));cmds$0 = { register: register$0, registerAll: register__minus__all$0, registerSingleton: register__minus__singleton$0, registerSingletons: register__minus__singletons$0, registerFunction: register__minus__function$0, registerFunctions: register__minus__functions$0 };m$24 = null;$0: for (var _iterator = (function () {
  var tmp$4 = undefined;return (tmp$4 = send(global, "@@KAISER", true), tmp$4 === undefined || tmp$4 === null ? tmp$4 : tmp$4.waitingList) || [];
})()[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
  m$24 = _step.value;
  var cmd$0 = undefined;var args$0 = undefined;var t0$20 = undefined;var t1$8 = undefined;t0$20 = m$24;if (Array.isArray(t0$20) && (t1$8 = t0$20.length, t1$8 === 2)) {
    cmd$0 = t0$20[0];args$0 = t0$20[1];send(send(cmds$0, cmd$0, true), args$0);
  } else {
    ___match_error(m$24);
  }
}$targ$0 = module.exports;global["@@KAISER"] = $targ$0;$targ$27 = TYPEID$0;exports.TYPEID = $targ$27;$targ$28 = Serializer$0;exports.Serializer = $targ$28;$targ$29 = default__minus__serializer$0;exports.defaultSerializer = $targ$29;$targ$30 = serialize$0;exports.serialize = $targ$30;$targ$31 = deserialize$0;exports.deserialize = $targ$31;$targ$32 = shallow__minus__copy$0;exports.shallowCopy = $targ$32;$targ$33 = deep__minus__copy$0;exports.deepCopy = $targ$33;$targ$34 = register$0;exports.register = $targ$34;$targ$35 = register__minus__all$0;exports.registerAll = $targ$35;$targ$36 = register__minus__singleton$0;exports.registerSingleton = $targ$36;$targ$37 = register__minus__singletons$0;exports.registerSingletons = $targ$37;$targ$38 = register__minus__function$0;exports.registerFunction = $targ$38;$targ$39 = register__minus__functions$0;exports.registerFunctions = $targ$39;$targ$40 = true;exports.loaded = $targ$40;void 0;
//# sourceMappingURL=index.js.map

