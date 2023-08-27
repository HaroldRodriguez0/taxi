(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function no(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Wa = { exports: {} },
  ro = {},
  Ha = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vr = Symbol.for("react.element"),
  sp = Symbol.for("react.portal"),
  up = Symbol.for("react.fragment"),
  ap = Symbol.for("react.strict_mode"),
  cp = Symbol.for("react.profiler"),
  dp = Symbol.for("react.provider"),
  fp = Symbol.for("react.context"),
  pp = Symbol.for("react.forward_ref"),
  mp = Symbol.for("react.suspense"),
  hp = Symbol.for("react.memo"),
  vp = Symbol.for("react.lazy"),
  gu = Symbol.iterator;
function gp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gu && e[gu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Va = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ka = Object.assign,
  Qa = {};
function Gn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qa),
    (this.updater = n || Va);
}
Gn.prototype.isReactComponent = {};
Gn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Gn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xa() {}
Xa.prototype = Gn.prototype;
function fs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qa),
    (this.updater = n || Va);
}
var ps = (fs.prototype = new Xa());
ps.constructor = fs;
Ka(ps, Gn.prototype);
ps.isPureReactComponent = !0;
var yu = Array.isArray,
  Ya = Object.prototype.hasOwnProperty,
  ms = { current: null },
  Ga = { key: !0, ref: !0, __self: !0, __source: !0 };
function Za(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ya.call(t, r) && !Ga.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), c = 0; c < s; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: Vr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ms.current,
  };
}
function yp(e, t) {
  return {
    $$typeof: Vr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vr;
}
function xp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xu = /\/+/g;
function Po(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? xp("" + e.key)
    : t.toString(36);
}
function gl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Vr:
          case sp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Po(i, 0) : r),
      yu(l)
        ? ((n = ""),
          e != null && (n = e.replace(xu, "$&/") + "/"),
          gl(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (hs(l) &&
            (l = yp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(xu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), yu(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + Po(o, s);
      i += gl(o, t, n, a, l);
    }
  else if (((a = gp(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Po(o, s++)), (i += gl(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function qr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    gl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function wp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var je = { current: null },
  yl = { transition: null },
  Sp = {
    ReactCurrentDispatcher: je,
    ReactCurrentBatchConfig: yl,
    ReactCurrentOwner: ms,
  };
z.Children = {
  map: qr,
  forEach: function (e, t, n) {
    qr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      qr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      qr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = Gn;
z.Fragment = up;
z.Profiler = cp;
z.PureComponent = fs;
z.StrictMode = ap;
z.Suspense = mp;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sp;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ka({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ms.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Ya.call(t, a) &&
        !Ga.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var c = 0; c < a; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: Vr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: fp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: dp, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = Za;
z.createFactory = function (e) {
  var t = Za.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: pp, render: e };
};
z.isValidElement = hs;
z.lazy = function (e) {
  return { $$typeof: vp, _payload: { _status: -1, _result: e }, _init: wp };
};
z.memo = function (e, t) {
  return { $$typeof: hp, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = yl.transition;
  yl.transition = {};
  try {
    e();
  } finally {
    yl.transition = t;
  }
};
z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
z.useCallback = function (e, t) {
  return je.current.useCallback(e, t);
};
z.useContext = function (e) {
  return je.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return je.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return je.current.useEffect(e, t);
};
z.useId = function () {
  return je.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return je.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return je.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return je.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return je.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return je.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return je.current.useRef(e);
};
z.useState = function (e) {
  return je.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return je.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return je.current.useTransition();
};
z.version = "18.2.0";
Ha.exports = z;
var g = Ha.exports;
const at = no(g);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kp = g,
  Cp = Symbol.for("react.element"),
  Ep = Symbol.for("react.fragment"),
  Np = Object.prototype.hasOwnProperty,
  jp = kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Tp = { key: !0, ref: !0, __self: !0, __source: !0 };
function qa(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Np.call(t, r) && !Tp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Cp,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: jp.current,
  };
}
ro.Fragment = Ep;
ro.jsx = qa;
ro.jsxs = qa;
Wa.exports = ro;
var u = Wa.exports,
  ai = {},
  Ja = { exports: {} },
  $e = {},
  ba = { exports: {} },
  ec = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, O) {
    var P = C.length;
    C.push(O);
    e: for (; 0 < P; ) {
      var I = (P - 1) >>> 1,
        B = C[I];
      if (0 < l(B, O)) (C[I] = O), (C[P] = B), (P = I);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var O = C[0],
      P = C.pop();
    if (P !== O) {
      C[0] = P;
      e: for (var I = 0, B = C.length, ee = B >>> 1; I < ee; ) {
        var te = 2 * (I + 1) - 1,
          Z = C[te],
          D = te + 1,
          lt = C[D];
        if (0 > l(Z, P))
          D < B && 0 > l(lt, Z)
            ? ((C[I] = lt), (C[D] = P), (I = D))
            : ((C[I] = Z), (C[te] = P), (I = te));
        else if (D < B && 0 > l(lt, P)) (C[I] = lt), (C[D] = P), (I = D);
        else break e;
      }
    }
    return O;
  }
  function l(C, O) {
    var P = C.sortIndex - O.sortIndex;
    return P !== 0 ? P : C.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var a = [],
    c = [],
    f = 1,
    v = null,
    p = 3,
    x = !1,
    w = !1,
    S = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(C) {
    for (var O = n(c); O !== null; ) {
      if (O.callback === null) r(c);
      else if (O.startTime <= C)
        r(c), (O.sortIndex = O.expirationTime), t(a, O);
      else break;
      O = n(c);
    }
  }
  function y(C) {
    if (((S = !1), h(C), !w))
      if (n(a) !== null) (w = !0), he(N);
      else {
        var O = n(c);
        O !== null && G(y, O.startTime - C);
      }
  }
  function N(C, O) {
    (w = !1), S && ((S = !1), m(T), (T = -1)), (x = !0);
    var P = p;
    try {
      for (
        h(O), v = n(a);
        v !== null && (!(v.expirationTime > O) || (C && !le()));

      ) {
        var I = v.callback;
        if (typeof I == "function") {
          (v.callback = null), (p = v.priorityLevel);
          var B = I(v.expirationTime <= O);
          (O = e.unstable_now()),
            typeof B == "function" ? (v.callback = B) : v === n(a) && r(a),
            h(O);
        } else r(a);
        v = n(a);
      }
      if (v !== null) var ee = !0;
      else {
        var te = n(c);
        te !== null && G(y, te.startTime - O), (ee = !1);
      }
      return ee;
    } finally {
      (v = null), (p = P), (x = !1);
    }
  }
  var k = !1,
    j = null,
    T = -1,
    A = 5,
    M = -1;
  function le() {
    return !(e.unstable_now() - M < A);
  }
  function ke() {
    if (j !== null) {
      var C = e.unstable_now();
      M = C;
      var O = !0;
      try {
        O = j(!0, C);
      } finally {
        O ? de() : ((k = !1), (j = null));
      }
    } else k = !1;
  }
  var de;
  if (typeof d == "function")
    de = function () {
      d(ke);
    };
  else if (typeof MessageChannel < "u") {
    var Xe = new MessageChannel(),
      Ae = Xe.port2;
    (Xe.port1.onmessage = ke),
      (de = function () {
        Ae.postMessage(null);
      });
  } else
    de = function () {
      _(ke, 0);
    };
  function he(C) {
    (j = C), k || ((k = !0), de());
  }
  function G(C, O) {
    T = _(function () {
      C(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), he(N));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = p;
      }
      var P = p;
      p = O;
      try {
        return C();
      } finally {
        p = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, O) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var P = p;
      p = C;
      try {
        return O();
      } finally {
        p = P;
      }
    }),
    (e.unstable_scheduleCallback = function (C, O, P) {
      var I = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? I + P : I))
          : (P = I),
        C)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = P + B),
        (C = {
          id: f++,
          callback: O,
          priorityLevel: C,
          startTime: P,
          expirationTime: B,
          sortIndex: -1,
        }),
        P > I
          ? ((C.sortIndex = P),
            t(c, C),
            n(a) === null &&
              C === n(c) &&
              (S ? (m(T), (T = -1)) : (S = !0), G(y, P - I)))
          : ((C.sortIndex = B), t(a, C), w || x || ((w = !0), he(N))),
        C
      );
    }),
    (e.unstable_shouldYield = le),
    (e.unstable_wrapCallback = function (C) {
      var O = p;
      return function () {
        var P = p;
        p = O;
        try {
          return C.apply(this, arguments);
        } finally {
          p = P;
        }
      };
    });
})(ec);
ba.exports = ec;
var _p = ba.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tc = g,
  De = _p;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var nc = new Set(),
  Nr = {};
function hn(e, t) {
  Wn(e, t), Wn(e + "Capture", t);
}
function Wn(e, t) {
  for (Nr[e] = t, e = 0; e < t.length; e++) nc.add(t[e]);
}
var Ct = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ci = Object.prototype.hasOwnProperty,
  Rp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wu = {},
  Su = {};
function Op(e) {
  return ci.call(Su, e)
    ? !0
    : ci.call(wu, e)
    ? !1
    : Rp.test(e)
    ? (Su[e] = !0)
    : ((wu[e] = !0), !1);
}
function Pp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Mp(e, t, n, r) {
  if (t === null || typeof t > "u" || Pp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Te(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Te(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  me[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  me[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  me[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  me[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  me[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  me[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  me[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vs = /[\-:]([a-z])/g;
function gs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vs, gs);
    me[t] = new Te(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vs, gs);
    me[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(vs, gs);
  me[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  me[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new Te(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  me[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ys(e, t, n, r) {
  var l = me.hasOwnProperty(t) ? me[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Mp(t, n, l, r) && (n = null),
    r || l === null
      ? Op(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Tt = tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Jr = Symbol.for("react.element"),
  Cn = Symbol.for("react.portal"),
  En = Symbol.for("react.fragment"),
  xs = Symbol.for("react.strict_mode"),
  di = Symbol.for("react.profiler"),
  rc = Symbol.for("react.provider"),
  lc = Symbol.for("react.context"),
  ws = Symbol.for("react.forward_ref"),
  fi = Symbol.for("react.suspense"),
  pi = Symbol.for("react.suspense_list"),
  Ss = Symbol.for("react.memo"),
  Pt = Symbol.for("react.lazy"),
  oc = Symbol.for("react.offscreen"),
  ku = Symbol.iterator;
function nr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ku && e[ku]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var b = Object.assign,
  Mo;
function dr(e) {
  if (Mo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Mo = (t && t[1]) || "";
    }
  return (
    `
` +
    Mo +
    e
  );
}
var Lo = !1;
function zo(e, t) {
  if (!e || Lo) return "";
  Lo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && l[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (l[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || l[i] !== o[s])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (Lo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? dr(e) : "";
}
function Lp(e) {
  switch (e.tag) {
    case 5:
      return dr(e.type);
    case 16:
      return dr("Lazy");
    case 13:
      return dr("Suspense");
    case 19:
      return dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = zo(e.type, !1)), e;
    case 11:
      return (e = zo(e.type.render, !1)), e;
    case 1:
      return (e = zo(e.type, !0)), e;
    default:
      return "";
  }
}
function mi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case En:
      return "Fragment";
    case Cn:
      return "Portal";
    case di:
      return "Profiler";
    case xs:
      return "StrictMode";
    case fi:
      return "Suspense";
    case pi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case lc:
        return (e.displayName || "Context") + ".Consumer";
      case rc:
        return (e._context.displayName || "Context") + ".Provider";
      case ws:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ss:
        return (
          (t = e.displayName || null), t !== null ? t : mi(e.type) || "Memo"
        );
      case Pt:
        (t = e._payload), (e = e._init);
        try {
          return mi(e(t));
        } catch {}
    }
  return null;
}
function zp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return mi(t);
    case 8:
      return t === xs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Yt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ic(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ip(e) {
  var t = ic(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function br(e) {
  e._valueTracker || (e._valueTracker = Ip(e));
}
function sc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ic(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ol(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function hi(e, t) {
  var n = t.checked;
  return b({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Cu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Yt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function uc(e, t) {
  (t = t.checked), t != null && ys(e, "checked", t, !1);
}
function vi(e, t) {
  uc(e, t);
  var n = Yt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? gi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && gi(e, t.type, Yt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Eu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function gi(e, t, n) {
  (t !== "number" || Ol(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fr = Array.isArray;
function Dn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Yt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function yi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return b({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Nu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (fr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Yt(n) };
}
function ac(e, t) {
  var n = Yt(t.value),
    r = Yt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ju(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function cc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? cc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var el,
  dc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        el = el || document.createElement("div"),
          el.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = el.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function jr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var vr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Dp = ["Webkit", "ms", "Moz", "O"];
Object.keys(vr).forEach(function (e) {
  Dp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (vr[t] = vr[e]);
  });
});
function fc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (vr.hasOwnProperty(e) && vr[e])
    ? ("" + t).trim()
    : t + "px";
}
function pc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = fc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var $p = b(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function wi(e, t) {
  if (t) {
    if ($p[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Si(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ki = null;
function ks(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ci = null,
  $n = null,
  Fn = null;
function Tu(e) {
  if ((e = Xr(e))) {
    if (typeof Ci != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = uo(t)), Ci(e.stateNode, e.type, t));
  }
}
function mc(e) {
  $n ? (Fn ? Fn.push(e) : (Fn = [e])) : ($n = e);
}
function hc() {
  if ($n) {
    var e = $n,
      t = Fn;
    if (((Fn = $n = null), Tu(e), t)) for (e = 0; e < t.length; e++) Tu(t[e]);
  }
}
function vc(e, t) {
  return e(t);
}
function gc() {}
var Io = !1;
function yc(e, t, n) {
  if (Io) return e(t, n);
  Io = !0;
  try {
    return vc(e, t, n);
  } finally {
    (Io = !1), ($n !== null || Fn !== null) && (gc(), hc());
  }
}
function Tr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = uo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Ei = !1;
if (Ct)
  try {
    var rr = {};
    Object.defineProperty(rr, "passive", {
      get: function () {
        Ei = !0;
      },
    }),
      window.addEventListener("test", rr, rr),
      window.removeEventListener("test", rr, rr);
  } catch {
    Ei = !1;
  }
function Fp(e, t, n, r, l, o, i, s, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var gr = !1,
  Pl = null,
  Ml = !1,
  Ni = null,
  Ap = {
    onError: function (e) {
      (gr = !0), (Pl = e);
    },
  };
function Bp(e, t, n, r, l, o, i, s, a) {
  (gr = !1), (Pl = null), Fp.apply(Ap, arguments);
}
function Up(e, t, n, r, l, o, i, s, a) {
  if ((Bp.apply(this, arguments), gr)) {
    if (gr) {
      var c = Pl;
      (gr = !1), (Pl = null);
    } else throw Error(E(198));
    Ml || ((Ml = !0), (Ni = c));
  }
}
function vn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function _u(e) {
  if (vn(e) !== e) throw Error(E(188));
}
function Wp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vn(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return _u(l), e;
        if (o === r) return _u(l), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (s === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (s === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function wc(e) {
  return (e = Wp(e)), e !== null ? Sc(e) : null;
}
function Sc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Sc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var kc = De.unstable_scheduleCallback,
  Ru = De.unstable_cancelCallback,
  Hp = De.unstable_shouldYield,
  Vp = De.unstable_requestPaint,
  re = De.unstable_now,
  Kp = De.unstable_getCurrentPriorityLevel,
  Cs = De.unstable_ImmediatePriority,
  Cc = De.unstable_UserBlockingPriority,
  Ll = De.unstable_NormalPriority,
  Qp = De.unstable_LowPriority,
  Ec = De.unstable_IdlePriority,
  lo = null,
  ct = null;
function Xp(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(lo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var tt = Math.clz32 ? Math.clz32 : Zp,
  Yp = Math.log,
  Gp = Math.LN2;
function Zp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Yp(e) / Gp) | 0)) | 0;
}
var tl = 64,
  nl = 4194304;
function pr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function zl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = pr(s)) : ((o &= i), o !== 0 && (r = pr(o)));
  } else (i = n & ~l), i !== 0 ? (r = pr(i)) : o !== 0 && (r = pr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - tt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function qp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Jp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - tt(o),
      s = 1 << i,
      a = l[i];
    a === -1
      ? (!(s & n) || s & r) && (l[i] = qp(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function ji(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Nc() {
  var e = tl;
  return (tl <<= 1), !(tl & 4194240) && (tl = 64), e;
}
function Do(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Kr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - tt(t)),
    (e[t] = n);
}
function bp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - tt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Es(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var W = 0;
function jc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Tc,
  Ns,
  _c,
  Rc,
  Oc,
  Ti = !1,
  rl = [],
  Bt = null,
  Ut = null,
  Wt = null,
  _r = new Map(),
  Rr = new Map(),
  zt = [],
  em =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ou(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Bt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ut = null;
      break;
    case "mouseover":
    case "mouseout":
      Wt = null;
      break;
    case "pointerover":
    case "pointerout":
      _r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Rr.delete(t.pointerId);
  }
}
function lr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Xr(t)), t !== null && Ns(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function tm(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Bt = lr(Bt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Ut = lr(Ut, e, t, n, r, l)), !0;
    case "mouseover":
      return (Wt = lr(Wt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return _r.set(o, lr(_r.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Rr.set(o, lr(Rr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Pc(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xc(n)), t !== null)) {
          (e.blockedOn = t),
            Oc(e.priority, function () {
              _c(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function xl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ki = r), n.target.dispatchEvent(r), (ki = null);
    } else return (t = Xr(n)), t !== null && Ns(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Pu(e, t, n) {
  xl(e) && n.delete(t);
}
function nm() {
  (Ti = !1),
    Bt !== null && xl(Bt) && (Bt = null),
    Ut !== null && xl(Ut) && (Ut = null),
    Wt !== null && xl(Wt) && (Wt = null),
    _r.forEach(Pu),
    Rr.forEach(Pu);
}
function or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ti ||
      ((Ti = !0),
      De.unstable_scheduleCallback(De.unstable_NormalPriority, nm)));
}
function Or(e) {
  function t(l) {
    return or(l, e);
  }
  if (0 < rl.length) {
    or(rl[0], e);
    for (var n = 1; n < rl.length; n++) {
      var r = rl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Bt !== null && or(Bt, e),
      Ut !== null && or(Ut, e),
      Wt !== null && or(Wt, e),
      _r.forEach(t),
      Rr.forEach(t),
      n = 0;
    n < zt.length;
    n++
  )
    (r = zt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < zt.length && ((n = zt[0]), n.blockedOn === null); )
    Pc(n), n.blockedOn === null && zt.shift();
}
var An = Tt.ReactCurrentBatchConfig,
  Il = !0;
function rm(e, t, n, r) {
  var l = W,
    o = An.transition;
  An.transition = null;
  try {
    (W = 1), js(e, t, n, r);
  } finally {
    (W = l), (An.transition = o);
  }
}
function lm(e, t, n, r) {
  var l = W,
    o = An.transition;
  An.transition = null;
  try {
    (W = 4), js(e, t, n, r);
  } finally {
    (W = l), (An.transition = o);
  }
}
function js(e, t, n, r) {
  if (Il) {
    var l = _i(e, t, n, r);
    if (l === null) Qo(e, t, r, Dl, n), Ou(e, r);
    else if (tm(l, e, t, n, r)) r.stopPropagation();
    else if ((Ou(e, r), t & 4 && -1 < em.indexOf(e))) {
      for (; l !== null; ) {
        var o = Xr(l);
        if (
          (o !== null && Tc(o),
          (o = _i(e, t, n, r)),
          o === null && Qo(e, t, r, Dl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Qo(e, t, r, null, n);
  }
}
var Dl = null;
function _i(e, t, n, r) {
  if (((Dl = null), (e = ks(r)), (e = ln(e)), e !== null))
    if (((t = vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Dl = e), null;
}
function Mc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Kp()) {
        case Cs:
          return 1;
        case Cc:
          return 4;
        case Ll:
        case Qp:
          return 16;
        case Ec:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $t = null,
  Ts = null,
  wl = null;
function Lc() {
  if (wl) return wl;
  var e,
    t = Ts,
    n = t.length,
    r,
    l = "value" in $t ? $t.value : $t.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (wl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Sl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ll() {
  return !0;
}
function Mu() {
  return !1;
}
function Fe(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ll
        : Mu),
      (this.isPropagationStopped = Mu),
      this
    );
  }
  return (
    b(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ll));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ll));
      },
      persist: function () {},
      isPersistent: ll,
    }),
    t
  );
}
var Zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _s = Fe(Zn),
  Qr = b({}, Zn, { view: 0, detail: 0 }),
  om = Fe(Qr),
  $o,
  Fo,
  ir,
  oo = b({}, Qr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Rs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ir &&
            (ir && e.type === "mousemove"
              ? (($o = e.screenX - ir.screenX), (Fo = e.screenY - ir.screenY))
              : (Fo = $o = 0),
            (ir = e)),
          $o);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Fo;
    },
  }),
  Lu = Fe(oo),
  im = b({}, oo, { dataTransfer: 0 }),
  sm = Fe(im),
  um = b({}, Qr, { relatedTarget: 0 }),
  Ao = Fe(um),
  am = b({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cm = Fe(am),
  dm = b({}, Zn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  fm = Fe(dm),
  pm = b({}, Zn, { data: 0 }),
  zu = Fe(pm),
  mm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  hm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  vm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vm[e]) ? !!t[e] : !1;
}
function Rs() {
  return gm;
}
var ym = b({}, Qr, {
    key: function (e) {
      if (e.key) {
        var t = mm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Sl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? hm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Rs,
    charCode: function (e) {
      return e.type === "keypress" ? Sl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Sl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xm = Fe(ym),
  wm = b({}, oo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Iu = Fe(wm),
  Sm = b({}, Qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rs,
  }),
  km = Fe(Sm),
  Cm = b({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Em = Fe(Cm),
  Nm = b({}, oo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  jm = Fe(Nm),
  Tm = [9, 13, 27, 32],
  Os = Ct && "CompositionEvent" in window,
  yr = null;
Ct && "documentMode" in document && (yr = document.documentMode);
var _m = Ct && "TextEvent" in window && !yr,
  zc = Ct && (!Os || (yr && 8 < yr && 11 >= yr)),
  Du = String.fromCharCode(32),
  $u = !1;
function Ic(e, t) {
  switch (e) {
    case "keyup":
      return Tm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Dc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Nn = !1;
function Rm(e, t) {
  switch (e) {
    case "compositionend":
      return Dc(t);
    case "keypress":
      return t.which !== 32 ? null : (($u = !0), Du);
    case "textInput":
      return (e = t.data), e === Du && $u ? null : e;
    default:
      return null;
  }
}
function Om(e, t) {
  if (Nn)
    return e === "compositionend" || (!Os && Ic(e, t))
      ? ((e = Lc()), (wl = Ts = $t = null), (Nn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return zc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Fu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pm[e.type] : t === "textarea";
}
function $c(e, t, n, r) {
  mc(r),
    (t = $l(t, "onChange")),
    0 < t.length &&
      ((n = new _s("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var xr = null,
  Pr = null;
function Mm(e) {
  Yc(e, 0);
}
function io(e) {
  var t = _n(e);
  if (sc(t)) return e;
}
function Lm(e, t) {
  if (e === "change") return t;
}
var Fc = !1;
if (Ct) {
  var Bo;
  if (Ct) {
    var Uo = "oninput" in document;
    if (!Uo) {
      var Au = document.createElement("div");
      Au.setAttribute("oninput", "return;"),
        (Uo = typeof Au.oninput == "function");
    }
    Bo = Uo;
  } else Bo = !1;
  Fc = Bo && (!document.documentMode || 9 < document.documentMode);
}
function Bu() {
  xr && (xr.detachEvent("onpropertychange", Ac), (Pr = xr = null));
}
function Ac(e) {
  if (e.propertyName === "value" && io(Pr)) {
    var t = [];
    $c(t, Pr, e, ks(e)), yc(Mm, t);
  }
}
function zm(e, t, n) {
  e === "focusin"
    ? (Bu(), (xr = t), (Pr = n), xr.attachEvent("onpropertychange", Ac))
    : e === "focusout" && Bu();
}
function Im(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return io(Pr);
}
function Dm(e, t) {
  if (e === "click") return io(t);
}
function $m(e, t) {
  if (e === "input" || e === "change") return io(t);
}
function Fm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rt = typeof Object.is == "function" ? Object.is : Fm;
function Mr(e, t) {
  if (rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ci.call(t, l) || !rt(e[l], t[l])) return !1;
  }
  return !0;
}
function Uu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wu(e, t) {
  var n = Uu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Uu(n);
  }
}
function Bc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Bc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Uc() {
  for (var e = window, t = Ol(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ol(e.document);
  }
  return t;
}
function Ps(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Am(e) {
  var t = Uc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Bc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ps(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Wu(n, o));
        var i = Wu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Bm = Ct && "documentMode" in document && 11 >= document.documentMode,
  jn = null,
  Ri = null,
  wr = null,
  Oi = !1;
function Hu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Oi ||
    jn == null ||
    jn !== Ol(r) ||
    ((r = jn),
    "selectionStart" in r && Ps(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (wr && Mr(wr, r)) ||
      ((wr = r),
      (r = $l(Ri, "onSelect")),
      0 < r.length &&
        ((t = new _s("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = jn))));
}
function ol(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Tn = {
    animationend: ol("Animation", "AnimationEnd"),
    animationiteration: ol("Animation", "AnimationIteration"),
    animationstart: ol("Animation", "AnimationStart"),
    transitionend: ol("Transition", "TransitionEnd"),
  },
  Wo = {},
  Wc = {};
Ct &&
  ((Wc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Tn.animationend.animation,
    delete Tn.animationiteration.animation,
    delete Tn.animationstart.animation),
  "TransitionEvent" in window || delete Tn.transitionend.transition);
function so(e) {
  if (Wo[e]) return Wo[e];
  if (!Tn[e]) return e;
  var t = Tn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wc) return (Wo[e] = t[n]);
  return e;
}
var Hc = so("animationend"),
  Vc = so("animationiteration"),
  Kc = so("animationstart"),
  Qc = so("transitionend"),
  Xc = new Map(),
  Vu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Zt(e, t) {
  Xc.set(e, t), hn(t, [e]);
}
for (var Ho = 0; Ho < Vu.length; Ho++) {
  var Vo = Vu[Ho],
    Um = Vo.toLowerCase(),
    Wm = Vo[0].toUpperCase() + Vo.slice(1);
  Zt(Um, "on" + Wm);
}
Zt(Hc, "onAnimationEnd");
Zt(Vc, "onAnimationIteration");
Zt(Kc, "onAnimationStart");
Zt("dblclick", "onDoubleClick");
Zt("focusin", "onFocus");
Zt("focusout", "onBlur");
Zt(Qc, "onTransitionEnd");
Wn("onMouseEnter", ["mouseout", "mouseover"]);
Wn("onMouseLeave", ["mouseout", "mouseover"]);
Wn("onPointerEnter", ["pointerout", "pointerover"]);
Wn("onPointerLeave", ["pointerout", "pointerover"]);
hn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
hn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
hn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
hn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var mr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Hm = new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));
function Ku(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Up(r, t, void 0, e), (e.currentTarget = null);
}
function Yc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            a = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), a !== o && l.isPropagationStopped())) break e;
          Ku(l, s, c), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (a = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          Ku(l, s, c), (o = a);
        }
    }
  }
  if (Ml) throw ((e = Ni), (Ml = !1), (Ni = null), e);
}
function Q(e, t) {
  var n = t[Ii];
  n === void 0 && (n = t[Ii] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Gc(t, e, 2, !1), n.add(r));
}
function Ko(e, t, n) {
  var r = 0;
  t && (r |= 4), Gc(n, e, r, t);
}
var il = "_reactListening" + Math.random().toString(36).slice(2);
function Lr(e) {
  if (!e[il]) {
    (e[il] = !0),
      nc.forEach(function (n) {
        n !== "selectionchange" && (Hm.has(n) || Ko(n, !1, e), Ko(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[il] || ((t[il] = !0), Ko("selectionchange", !1, t));
  }
}
function Gc(e, t, n, r) {
  switch (Mc(t)) {
    case 1:
      var l = rm;
      break;
    case 4:
      l = lm;
      break;
    default:
      l = js;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ei ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Qo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = ln(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  yc(function () {
    var c = o,
      f = ks(n),
      v = [];
    e: {
      var p = Xc.get(e);
      if (p !== void 0) {
        var x = _s,
          w = e;
        switch (e) {
          case "keypress":
            if (Sl(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = xm;
            break;
          case "focusin":
            (w = "focus"), (x = Ao);
            break;
          case "focusout":
            (w = "blur"), (x = Ao);
            break;
          case "beforeblur":
          case "afterblur":
            x = Ao;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Lu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = sm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = km;
            break;
          case Hc:
          case Vc:
          case Kc:
            x = cm;
            break;
          case Qc:
            x = Em;
            break;
          case "scroll":
            x = om;
            break;
          case "wheel":
            x = jm;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = fm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Iu;
        }
        var S = (t & 4) !== 0,
          _ = !S && e === "scroll",
          m = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var d = c, h; d !== null; ) {
          h = d;
          var y = h.stateNode;
          if (
            (h.tag === 5 &&
              y !== null &&
              ((h = y),
              m !== null && ((y = Tr(d, m)), y != null && S.push(zr(d, y, h)))),
            _)
          )
            break;
          d = d.return;
        }
        0 < S.length &&
          ((p = new x(p, w, null, n, f)), v.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          p &&
            n !== ki &&
            (w = n.relatedTarget || n.fromElement) &&
            (ln(w) || w[Et]))
        )
          break e;
        if (
          (x || p) &&
          ((p =
            f.window === f
              ? f
              : (p = f.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = c),
              (w = w ? ln(w) : null),
              w !== null &&
                ((_ = vn(w)), w !== _ || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = c)),
          x !== w)
        ) {
          if (
            ((S = Lu),
            (y = "onMouseLeave"),
            (m = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Iu),
              (y = "onPointerLeave"),
              (m = "onPointerEnter"),
              (d = "pointer")),
            (_ = x == null ? p : _n(x)),
            (h = w == null ? p : _n(w)),
            (p = new S(y, d + "leave", x, n, f)),
            (p.target = _),
            (p.relatedTarget = h),
            (y = null),
            ln(f) === c &&
              ((S = new S(m, d + "enter", w, n, f)),
              (S.target = h),
              (S.relatedTarget = _),
              (y = S)),
            (_ = y),
            x && w)
          )
            t: {
              for (S = x, m = w, d = 0, h = S; h; h = wn(h)) d++;
              for (h = 0, y = m; y; y = wn(y)) h++;
              for (; 0 < d - h; ) (S = wn(S)), d--;
              for (; 0 < h - d; ) (m = wn(m)), h--;
              for (; d--; ) {
                if (S === m || (m !== null && S === m.alternate)) break t;
                (S = wn(S)), (m = wn(m));
              }
              S = null;
            }
          else S = null;
          x !== null && Qu(v, p, x, S, !1),
            w !== null && _ !== null && Qu(v, _, w, S, !0);
        }
      }
      e: {
        if (
          ((p = c ? _n(c) : window),
          (x = p.nodeName && p.nodeName.toLowerCase()),
          x === "select" || (x === "input" && p.type === "file"))
        )
          var N = Lm;
        else if (Fu(p))
          if (Fc) N = $m;
          else {
            N = Im;
            var k = zm;
          }
        else
          (x = p.nodeName) &&
            x.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (N = Dm);
        if (N && (N = N(e, c))) {
          $c(v, N, n, f);
          break e;
        }
        k && k(e, p, c),
          e === "focusout" &&
            (k = p._wrapperState) &&
            k.controlled &&
            p.type === "number" &&
            gi(p, "number", p.value);
      }
      switch (((k = c ? _n(c) : window), e)) {
        case "focusin":
          (Fu(k) || k.contentEditable === "true") &&
            ((jn = k), (Ri = c), (wr = null));
          break;
        case "focusout":
          wr = Ri = jn = null;
          break;
        case "mousedown":
          Oi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Oi = !1), Hu(v, n, f);
          break;
        case "selectionchange":
          if (Bm) break;
        case "keydown":
        case "keyup":
          Hu(v, n, f);
      }
      var j;
      if (Os)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Nn
          ? Ic(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (zc &&
          n.locale !== "ko" &&
          (Nn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Nn && (j = Lc())
            : (($t = f),
              (Ts = "value" in $t ? $t.value : $t.textContent),
              (Nn = !0))),
        (k = $l(c, T)),
        0 < k.length &&
          ((T = new zu(T, e, null, n, f)),
          v.push({ event: T, listeners: k }),
          j ? (T.data = j) : ((j = Dc(n)), j !== null && (T.data = j)))),
        (j = _m ? Rm(e, n) : Om(e, n)) &&
          ((c = $l(c, "onBeforeInput")),
          0 < c.length &&
            ((f = new zu("onBeforeInput", "beforeinput", null, n, f)),
            v.push({ event: f, listeners: c }),
            (f.data = j)));
    }
    Yc(v, t);
  });
}
function zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $l(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Tr(e, n)),
      o != null && r.unshift(zr(e, o, l)),
      (o = Tr(e, t)),
      o != null && r.push(zr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      c = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      l
        ? ((a = Tr(n, o)), a != null && i.unshift(zr(n, a, s)))
        : l || ((a = Tr(n, o)), a != null && i.push(zr(n, a, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Vm = /\r\n?/g,
  Km = /\u0000|\uFFFD/g;
function Xu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vm,
      `
`
    )
    .replace(Km, "");
}
function sl(e, t, n) {
  if (((t = Xu(t)), Xu(e) !== t && n)) throw Error(E(425));
}
function Fl() {}
var Pi = null,
  Mi = null;
function Li(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var zi = typeof setTimeout == "function" ? setTimeout : void 0,
  Qm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Yu = typeof Promise == "function" ? Promise : void 0,
  Xm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Yu < "u"
      ? function (e) {
          return Yu.resolve(null).then(e).catch(Ym);
        }
      : zi;
function Ym(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Or(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Or(t);
}
function Ht(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Gu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var qn = Math.random().toString(36).slice(2),
  ut = "__reactFiber$" + qn,
  Ir = "__reactProps$" + qn,
  Et = "__reactContainer$" + qn,
  Ii = "__reactEvents$" + qn,
  Gm = "__reactListeners$" + qn,
  Zm = "__reactHandles$" + qn;
function ln(e) {
  var t = e[ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Et] || n[ut])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Gu(e); e !== null; ) {
          if ((n = e[ut])) return n;
          e = Gu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Xr(e) {
  return (
    (e = e[ut] || e[Et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function _n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function uo(e) {
  return e[Ir] || null;
}
var Di = [],
  Rn = -1;
function qt(e) {
  return { current: e };
}
function X(e) {
  0 > Rn || ((e.current = Di[Rn]), (Di[Rn] = null), Rn--);
}
function K(e, t) {
  Rn++, (Di[Rn] = e.current), (e.current = t);
}
var Gt = {},
  Se = qt(Gt),
  Oe = qt(!1),
  cn = Gt;
function Hn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Al() {
  X(Oe), X(Se);
}
function Zu(e, t, n) {
  if (Se.current !== Gt) throw Error(E(168));
  K(Se, t), K(Oe, n);
}
function Zc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(E(108, zp(e) || "Unknown", l));
  return b({}, n, r);
}
function Bl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Gt),
    (cn = Se.current),
    K(Se, e),
    K(Oe, Oe.current),
    !0
  );
}
function qu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = Zc(e, t, cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      X(Oe),
      X(Se),
      K(Se, e))
    : X(Oe),
    K(Oe, n);
}
var gt = null,
  ao = !1,
  Yo = !1;
function qc(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
function qm(e) {
  (ao = !0), qc(e);
}
function Jt() {
  if (!Yo && gt !== null) {
    Yo = !0;
    var e = 0,
      t = W;
    try {
      var n = gt;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (gt = null), (ao = !1);
    } catch (l) {
      throw (gt !== null && (gt = gt.slice(e + 1)), kc(Cs, Jt), l);
    } finally {
      (W = t), (Yo = !1);
    }
  }
  return null;
}
var On = [],
  Pn = 0,
  Ul = null,
  Wl = 0,
  Be = [],
  Ue = 0,
  dn = null,
  xt = 1,
  wt = "";
function tn(e, t) {
  (On[Pn++] = Wl), (On[Pn++] = Ul), (Ul = e), (Wl = t);
}
function Jc(e, t, n) {
  (Be[Ue++] = xt), (Be[Ue++] = wt), (Be[Ue++] = dn), (dn = e);
  var r = xt;
  e = wt;
  var l = 32 - tt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - tt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (xt = (1 << (32 - tt(t) + l)) | (n << l) | r),
      (wt = o + e);
  } else (xt = (1 << o) | (n << l) | r), (wt = e);
}
function Ms(e) {
  e.return !== null && (tn(e, 1), Jc(e, 1, 0));
}
function Ls(e) {
  for (; e === Ul; )
    (Ul = On[--Pn]), (On[Pn] = null), (Wl = On[--Pn]), (On[Pn] = null);
  for (; e === dn; )
    (dn = Be[--Ue]),
      (Be[Ue] = null),
      (wt = Be[--Ue]),
      (Be[Ue] = null),
      (xt = Be[--Ue]),
      (Be[Ue] = null);
}
var Ie = null,
  ze = null,
  Y = !1,
  Je = null;
function bc(e, t) {
  var n = We(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ju(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ie = e), (ze = Ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ie = e), (ze = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = dn !== null ? { id: xt, overflow: wt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = We(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ie = e),
            (ze = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function $i(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fi(e) {
  if (Y) {
    var t = ze;
    if (t) {
      var n = t;
      if (!Ju(e, t)) {
        if ($i(e)) throw Error(E(418));
        t = Ht(n.nextSibling);
        var r = Ie;
        t && Ju(e, t)
          ? bc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), (Ie = e));
      }
    } else {
      if ($i(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (Y = !1), (Ie = e);
    }
  }
}
function bu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function ul(e) {
  if (e !== Ie) return !1;
  if (!Y) return bu(e), (Y = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Li(e.type, e.memoizedProps))),
    t && (t = ze))
  ) {
    if ($i(e)) throw (ed(), Error(E(418)));
    for (; t; ) bc(e, t), (t = Ht(t.nextSibling));
  }
  if ((bu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ze = Ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ze = null;
    }
  } else ze = Ie ? Ht(e.stateNode.nextSibling) : null;
  return !0;
}
function ed() {
  for (var e = ze; e; ) e = Ht(e.nextSibling);
}
function Vn() {
  (ze = Ie = null), (Y = !1);
}
function zs(e) {
  Je === null ? (Je = [e]) : Je.push(e);
}
var Jm = Tt.ReactCurrentBatchConfig;
function Ze(e, t) {
  if (e && e.defaultProps) {
    (t = b({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Hl = qt(null),
  Vl = null,
  Mn = null,
  Is = null;
function Ds() {
  Is = Mn = Vl = null;
}
function $s(e) {
  var t = Hl.current;
  X(Hl), (e._currentValue = t);
}
function Ai(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Bn(e, t) {
  (Vl = e),
    (Is = Mn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Re = !0), (e.firstContext = null));
}
function Ke(e) {
  var t = e._currentValue;
  if (Is !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Mn === null)) {
      if (Vl === null) throw Error(E(308));
      (Mn = e), (Vl.dependencies = { lanes: 0, firstContext: e });
    } else Mn = Mn.next = e;
  return t;
}
var on = null;
function Fs(e) {
  on === null ? (on = [e]) : on.push(e);
}
function td(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Fs(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Nt(e, r)
  );
}
function Nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Mt = !1;
function As(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function nd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function St(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Nt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Fs(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Nt(e, n)
  );
}
function kl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Es(e, n);
  }
}
function ea(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Kl(e, t, n, r) {
  var l = e.updateQueue;
  Mt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s,
      c = a.next;
    (a.next = null), i === null ? (o = c) : (i.next = c), (i = a);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (s = f.lastBaseUpdate),
      s !== i &&
        (s === null ? (f.firstBaseUpdate = c) : (s.next = c),
        (f.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var v = l.baseState;
    (i = 0), (f = c = a = null), (s = o);
    do {
      var p = s.lane,
        x = s.eventTime;
      if ((r & p) === p) {
        f !== null &&
          (f = f.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            S = s;
          switch (((p = t), (x = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                v = w.call(x, v, p);
                break e;
              }
              v = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (p = typeof w == "function" ? w.call(x, v, p) : w),
                p == null)
              )
                break e;
              v = b({}, v, p);
              break e;
            case 2:
              Mt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [s]) : p.push(s));
      } else
        (x = {
          eventTime: x,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          f === null ? ((c = f = x), (a = v)) : (f = f.next = x),
          (i |= p);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (p = s),
          (s = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (a = v),
      (l.baseState = a),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (pn |= i), (e.lanes = i), (e.memoizedState = v);
  }
}
function ta(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(E(191, l));
        l.call(r);
      }
    }
}
var rd = new tc.Component().refs;
function Bi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : b({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var co = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      l = Qt(e),
      o = St(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Vt(e, o, l)),
      t !== null && (nt(t, e, l, r), kl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      l = Qt(e),
      o = St(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Vt(e, o, l)),
      t !== null && (nt(t, e, l, r), kl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ne(),
      r = Qt(e),
      l = St(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Vt(e, l, r)),
      t !== null && (nt(t, e, r, n), kl(t, e, r));
  },
};
function na(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Mr(n, r) || !Mr(l, o)
      : !0
  );
}
function ld(e, t, n) {
  var r = !1,
    l = Gt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ke(o))
      : ((l = Pe(t) ? cn : Se.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Hn(e, l) : Gt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = co),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ra(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && co.enqueueReplaceState(t, t.state, null);
}
function Ui(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = rd), As(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ke(o))
    : ((o = Pe(t) ? cn : Se.current), (l.context = Hn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Bi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && co.enqueueReplaceState(l, l.state, null),
      Kl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function sr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var s = l.refs;
            s === rd && (s = l.refs = {}),
              i === null ? delete s[o] : (s[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function al(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function la(e) {
  var t = e._init;
  return t(e._payload);
}
function od(e) {
  function t(m, d) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [d]), (m.flags |= 16)) : h.push(d);
    }
  }
  function n(m, d) {
    if (!e) return null;
    for (; d !== null; ) t(m, d), (d = d.sibling);
    return null;
  }
  function r(m, d) {
    for (m = new Map(); d !== null; )
      d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling);
    return m;
  }
  function l(m, d) {
    return (m = Xt(m, d)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, d, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((m.flags |= 2), d) : h)
            : ((m.flags |= 2), d))
        : ((m.flags |= 1048576), d)
    );
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, d, h, y) {
    return d === null || d.tag !== 6
      ? ((d = ti(h, m.mode, y)), (d.return = m), d)
      : ((d = l(d, h)), (d.return = m), d);
  }
  function a(m, d, h, y) {
    var N = h.type;
    return N === En
      ? f(m, d, h.props.children, y, h.key)
      : d !== null &&
        (d.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === Pt &&
            la(N) === d.type))
      ? ((y = l(d, h.props)), (y.ref = sr(m, d, h)), (y.return = m), y)
      : ((y = _l(h.type, h.key, h.props, null, m.mode, y)),
        (y.ref = sr(m, d, h)),
        (y.return = m),
        y);
  }
  function c(m, d, h, y) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = ni(h, m.mode, y)), (d.return = m), d)
      : ((d = l(d, h.children || [])), (d.return = m), d);
  }
  function f(m, d, h, y, N) {
    return d === null || d.tag !== 7
      ? ((d = an(h, m.mode, y, N)), (d.return = m), d)
      : ((d = l(d, h)), (d.return = m), d);
  }
  function v(m, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = ti("" + d, m.mode, h)), (d.return = m), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Jr:
          return (
            (h = _l(d.type, d.key, d.props, null, m.mode, h)),
            (h.ref = sr(m, null, d)),
            (h.return = m),
            h
          );
        case Cn:
          return (d = ni(d, m.mode, h)), (d.return = m), d;
        case Pt:
          var y = d._init;
          return v(m, y(d._payload), h);
      }
      if (fr(d) || nr(d))
        return (d = an(d, m.mode, h, null)), (d.return = m), d;
      al(m, d);
    }
    return null;
  }
  function p(m, d, h, y) {
    var N = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return N !== null ? null : s(m, d, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Jr:
          return h.key === N ? a(m, d, h, y) : null;
        case Cn:
          return h.key === N ? c(m, d, h, y) : null;
        case Pt:
          return (N = h._init), p(m, d, N(h._payload), y);
      }
      if (fr(h) || nr(h)) return N !== null ? null : f(m, d, h, y, null);
      al(m, h);
    }
    return null;
  }
  function x(m, d, h, y, N) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (m = m.get(h) || null), s(d, m, "" + y, N);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Jr:
          return (m = m.get(y.key === null ? h : y.key) || null), a(d, m, y, N);
        case Cn:
          return (m = m.get(y.key === null ? h : y.key) || null), c(d, m, y, N);
        case Pt:
          var k = y._init;
          return x(m, d, h, k(y._payload), N);
      }
      if (fr(y) || nr(y)) return (m = m.get(h) || null), f(d, m, y, N, null);
      al(d, y);
    }
    return null;
  }
  function w(m, d, h, y) {
    for (
      var N = null, k = null, j = d, T = (d = 0), A = null;
      j !== null && T < h.length;
      T++
    ) {
      j.index > T ? ((A = j), (j = null)) : (A = j.sibling);
      var M = p(m, j, h[T], y);
      if (M === null) {
        j === null && (j = A);
        break;
      }
      e && j && M.alternate === null && t(m, j),
        (d = o(M, d, T)),
        k === null ? (N = M) : (k.sibling = M),
        (k = M),
        (j = A);
    }
    if (T === h.length) return n(m, j), Y && tn(m, T), N;
    if (j === null) {
      for (; T < h.length; T++)
        (j = v(m, h[T], y)),
          j !== null &&
            ((d = o(j, d, T)), k === null ? (N = j) : (k.sibling = j), (k = j));
      return Y && tn(m, T), N;
    }
    for (j = r(m, j); T < h.length; T++)
      (A = x(j, m, T, h[T], y)),
        A !== null &&
          (e && A.alternate !== null && j.delete(A.key === null ? T : A.key),
          (d = o(A, d, T)),
          k === null ? (N = A) : (k.sibling = A),
          (k = A));
    return (
      e &&
        j.forEach(function (le) {
          return t(m, le);
        }),
      Y && tn(m, T),
      N
    );
  }
  function S(m, d, h, y) {
    var N = nr(h);
    if (typeof N != "function") throw Error(E(150));
    if (((h = N.call(h)), h == null)) throw Error(E(151));
    for (
      var k = (N = null), j = d, T = (d = 0), A = null, M = h.next();
      j !== null && !M.done;
      T++, M = h.next()
    ) {
      j.index > T ? ((A = j), (j = null)) : (A = j.sibling);
      var le = p(m, j, M.value, y);
      if (le === null) {
        j === null && (j = A);
        break;
      }
      e && j && le.alternate === null && t(m, j),
        (d = o(le, d, T)),
        k === null ? (N = le) : (k.sibling = le),
        (k = le),
        (j = A);
    }
    if (M.done) return n(m, j), Y && tn(m, T), N;
    if (j === null) {
      for (; !M.done; T++, M = h.next())
        (M = v(m, M.value, y)),
          M !== null &&
            ((d = o(M, d, T)), k === null ? (N = M) : (k.sibling = M), (k = M));
      return Y && tn(m, T), N;
    }
    for (j = r(m, j); !M.done; T++, M = h.next())
      (M = x(j, m, T, M.value, y)),
        M !== null &&
          (e && M.alternate !== null && j.delete(M.key === null ? T : M.key),
          (d = o(M, d, T)),
          k === null ? (N = M) : (k.sibling = M),
          (k = M));
    return (
      e &&
        j.forEach(function (ke) {
          return t(m, ke);
        }),
      Y && tn(m, T),
      N
    );
  }
  function _(m, d, h, y) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === En &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Jr:
          e: {
            for (var N = h.key, k = d; k !== null; ) {
              if (k.key === N) {
                if (((N = h.type), N === En)) {
                  if (k.tag === 7) {
                    n(m, k.sibling),
                      (d = l(k, h.props.children)),
                      (d.return = m),
                      (m = d);
                    break e;
                  }
                } else if (
                  k.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === Pt &&
                    la(N) === k.type)
                ) {
                  n(m, k.sibling),
                    (d = l(k, h.props)),
                    (d.ref = sr(m, k, h)),
                    (d.return = m),
                    (m = d);
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            h.type === En
              ? ((d = an(h.props.children, m.mode, y, h.key)),
                (d.return = m),
                (m = d))
              : ((y = _l(h.type, h.key, h.props, null, m.mode, y)),
                (y.ref = sr(m, d, h)),
                (y.return = m),
                (m = y));
          }
          return i(m);
        case Cn:
          e: {
            for (k = h.key; d !== null; ) {
              if (d.key === k)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(m, d.sibling),
                    (d = l(d, h.children || [])),
                    (d.return = m),
                    (m = d);
                  break e;
                } else {
                  n(m, d);
                  break;
                }
              else t(m, d);
              d = d.sibling;
            }
            (d = ni(h, m.mode, y)), (d.return = m), (m = d);
          }
          return i(m);
        case Pt:
          return (k = h._init), _(m, d, k(h._payload), y);
      }
      if (fr(h)) return w(m, d, h, y);
      if (nr(h)) return S(m, d, h, y);
      al(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = l(d, h)), (d.return = m), (m = d))
          : (n(m, d), (d = ti(h, m.mode, y)), (d.return = m), (m = d)),
        i(m))
      : n(m, d);
  }
  return _;
}
var Kn = od(!0),
  id = od(!1),
  Yr = {},
  dt = qt(Yr),
  Dr = qt(Yr),
  $r = qt(Yr);
function sn(e) {
  if (e === Yr) throw Error(E(174));
  return e;
}
function Bs(e, t) {
  switch ((K($r, t), K(Dr, e), K(dt, Yr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = xi(t, e));
  }
  X(dt), K(dt, t);
}
function Qn() {
  X(dt), X(Dr), X($r);
}
function sd(e) {
  sn($r.current);
  var t = sn(dt.current),
    n = xi(t, e.type);
  t !== n && (K(Dr, e), K(dt, n));
}
function Us(e) {
  Dr.current === e && (X(dt), X(Dr));
}
var q = qt(0);
function Ql(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Go = [];
function Ws() {
  for (var e = 0; e < Go.length; e++)
    Go[e]._workInProgressVersionPrimary = null;
  Go.length = 0;
}
var Cl = Tt.ReactCurrentDispatcher,
  Zo = Tt.ReactCurrentBatchConfig,
  fn = 0,
  J = null,
  ie = null,
  ae = null,
  Xl = !1,
  Sr = !1,
  Fr = 0,
  bm = 0;
function ge() {
  throw Error(E(321));
}
function Hs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rt(e[n], t[n])) return !1;
  return !0;
}
function Vs(e, t, n, r, l, o) {
  if (
    ((fn = o),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Cl.current = e === null || e.memoizedState === null ? rh : lh),
    (e = n(r, l)),
    Sr)
  ) {
    o = 0;
    do {
      if (((Sr = !1), (Fr = 0), 25 <= o)) throw Error(E(301));
      (o += 1),
        (ae = ie = null),
        (t.updateQueue = null),
        (Cl.current = oh),
        (e = n(r, l));
    } while (Sr);
  }
  if (
    ((Cl.current = Yl),
    (t = ie !== null && ie.next !== null),
    (fn = 0),
    (ae = ie = J = null),
    (Xl = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function Ks() {
  var e = Fr !== 0;
  return (Fr = 0), e;
}
function st() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ae === null ? (J.memoizedState = ae = e) : (ae = ae.next = e), ae;
}
function Qe() {
  if (ie === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = ae === null ? J.memoizedState : ae.next;
  if (t !== null) (ae = t), (ie = e);
  else {
    if (e === null) throw Error(E(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      ae === null ? (J.memoizedState = ae = e) : (ae = ae.next = e);
  }
  return ae;
}
function Ar(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function qo(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ie,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var s = (i = null),
      a = null,
      c = o;
    do {
      var f = c.lane;
      if ((fn & f) === f)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var v = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((s = a = v), (i = r)) : (a = a.next = v),
          (J.lanes |= f),
          (pn |= f);
      }
      c = c.next;
    } while (c !== null && c !== o);
    a === null ? (i = r) : (a.next = s),
      rt(r, t.memoizedState) || (Re = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (J.lanes |= o), (pn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Jo(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    rt(o, t.memoizedState) || (Re = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ud() {}
function ad(e, t) {
  var n = J,
    r = Qe(),
    l = t(),
    o = !rt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Re = !0)),
    (r = r.queue),
    Qs(fd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ae !== null && ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Br(9, dd.bind(null, n, r, l, t), void 0, null),
      ce === null)
    )
      throw Error(E(349));
    fn & 30 || cd(n, t, l);
  }
  return l;
}
function cd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function dd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), pd(t) && md(e);
}
function fd(e, t, n) {
  return n(function () {
    pd(t) && md(e);
  });
}
function pd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rt(e, n);
  } catch {
    return !0;
  }
}
function md(e) {
  var t = Nt(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function oa(e) {
  var t = st();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ar,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = nh.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function Br(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function hd() {
  return Qe().memoizedState;
}
function El(e, t, n, r) {
  var l = st();
  (J.flags |= e),
    (l.memoizedState = Br(1 | t, n, void 0, r === void 0 ? null : r));
}
function fo(e, t, n, r) {
  var l = Qe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ie !== null) {
    var i = ie.memoizedState;
    if (((o = i.destroy), r !== null && Hs(r, i.deps))) {
      l.memoizedState = Br(t, n, o, r);
      return;
    }
  }
  (J.flags |= e), (l.memoizedState = Br(1 | t, n, o, r));
}
function ia(e, t) {
  return El(8390656, 8, e, t);
}
function Qs(e, t) {
  return fo(2048, 8, e, t);
}
function vd(e, t) {
  return fo(4, 2, e, t);
}
function gd(e, t) {
  return fo(4, 4, e, t);
}
function yd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function xd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), fo(4, 4, yd.bind(null, t, e), n)
  );
}
function Xs() {}
function wd(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Sd(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function kd(e, t, n) {
  return fn & 21
    ? (rt(n, t) || ((n = Nc()), (J.lanes |= n), (pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Re = !0)), (e.memoizedState = n));
}
function eh(e, t) {
  var n = W;
  (W = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Zo.transition;
  Zo.transition = {};
  try {
    e(!1), t();
  } finally {
    (W = n), (Zo.transition = r);
  }
}
function Cd() {
  return Qe().memoizedState;
}
function th(e, t, n) {
  var r = Qt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ed(e))
  )
    Nd(t, n);
  else if (((n = td(e, t, n, r)), n !== null)) {
    var l = Ne();
    nt(n, e, r, l), jd(n, t, r);
  }
}
function nh(e, t, n) {
  var r = Qt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ed(e)) Nd(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = s), rt(s, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Fs(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = td(e, t, l, r)),
      n !== null && ((l = Ne()), nt(n, e, r, l), jd(n, t, r));
  }
}
function Ed(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function Nd(e, t) {
  Sr = Xl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function jd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Es(e, n);
  }
}
var Yl = {
    readContext: Ke,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  rh = {
    readContext: Ke,
    useCallback: function (e, t) {
      return (st().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ke,
    useEffect: ia,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        El(4194308, 4, yd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return El(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return El(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = st();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = st();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = th.bind(null, J, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = st();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: oa,
    useDebugValue: Xs,
    useDeferredValue: function (e) {
      return (st().memoizedState = e);
    },
    useTransition: function () {
      var e = oa(!1),
        t = e[0];
      return (e = eh.bind(null, e[1])), (st().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = J,
        l = st();
      if (Y) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), ce === null)) throw Error(E(349));
        fn & 30 || cd(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        ia(fd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Br(9, dd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = st(),
        t = ce.identifierPrefix;
      if (Y) {
        var n = wt,
          r = xt;
        (n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Fr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = bm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  lh = {
    readContext: Ke,
    useCallback: wd,
    useContext: Ke,
    useEffect: Qs,
    useImperativeHandle: xd,
    useInsertionEffect: vd,
    useLayoutEffect: gd,
    useMemo: Sd,
    useReducer: qo,
    useRef: hd,
    useState: function () {
      return qo(Ar);
    },
    useDebugValue: Xs,
    useDeferredValue: function (e) {
      var t = Qe();
      return kd(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = qo(Ar)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: ud,
    useSyncExternalStore: ad,
    useId: Cd,
    unstable_isNewReconciler: !1,
  },
  oh = {
    readContext: Ke,
    useCallback: wd,
    useContext: Ke,
    useEffect: Qs,
    useImperativeHandle: xd,
    useInsertionEffect: vd,
    useLayoutEffect: gd,
    useMemo: Sd,
    useReducer: Jo,
    useRef: hd,
    useState: function () {
      return Jo(Ar);
    },
    useDebugValue: Xs,
    useDeferredValue: function (e) {
      var t = Qe();
      return ie === null ? (t.memoizedState = e) : kd(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Jo(Ar)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: ud,
    useSyncExternalStore: ad,
    useId: Cd,
    unstable_isNewReconciler: !1,
  };
function Xn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Lp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function bo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Wi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ih = typeof WeakMap == "function" ? WeakMap : Map;
function Td(e, t, n) {
  (n = St(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Zl || ((Zl = !0), (Ji = r)), Wi(e, t);
    }),
    n
  );
}
function _d(e, t, n) {
  (n = St(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Wi(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Wi(e, t),
          typeof r != "function" &&
            (Kt === null ? (Kt = new Set([this])) : Kt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function sa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ih();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = wh.bind(null, e, t, n)), t.then(e, e));
}
function ua(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function aa(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = St(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sh = Tt.ReactCurrentOwner,
  Re = !1;
function Ee(e, t, n, r) {
  t.child = e === null ? id(t, null, n, r) : Kn(t, e.child, n, r);
}
function ca(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Bn(t, l),
    (r = Vs(e, t, n, r, o, l)),
    (n = Ks()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        jt(e, t, l))
      : (Y && n && Ms(t), (t.flags |= 1), Ee(e, t, r, l), t.child)
  );
}
function da(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !tu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Rd(e, t, o, r, l))
      : ((e = _l(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Mr), n(i, r) && e.ref === t.ref)
    )
      return jt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Xt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Rd(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Mr(o, r) && e.ref === t.ref)
      if (((Re = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Re = !0);
      else return (t.lanes = e.lanes), jt(e, t, l);
  }
  return Hi(e, t, n, r, l);
}
function Od(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(zn, Le),
        (Le |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          K(zn, Le),
          (Le |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        K(zn, Le),
        (Le |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      K(zn, Le),
      (Le |= r);
  return Ee(e, t, l, n), t.child;
}
function Pd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Hi(e, t, n, r, l) {
  var o = Pe(n) ? cn : Se.current;
  return (
    (o = Hn(t, o)),
    Bn(t, l),
    (n = Vs(e, t, n, r, o, l)),
    (r = Ks()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        jt(e, t, l))
      : (Y && r && Ms(t), (t.flags |= 1), Ee(e, t, n, l), t.child)
  );
}
function fa(e, t, n, r, l) {
  if (Pe(n)) {
    var o = !0;
    Bl(t);
  } else o = !1;
  if ((Bn(t, l), t.stateNode === null))
    Nl(e, t), ld(t, n, r), Ui(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ke(c))
      : ((c = Pe(n) ? cn : Se.current), (c = Hn(t, c)));
    var f = n.getDerivedStateFromProps,
      v =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== c) && ra(t, i, r, c)),
      (Mt = !1);
    var p = t.memoizedState;
    (i.state = p),
      Kl(t, r, i, l),
      (a = t.memoizedState),
      s !== r || p !== a || Oe.current || Mt
        ? (typeof f == "function" && (Bi(t, n, f, r), (a = t.memoizedState)),
          (s = Mt || na(t, n, s, r, p, a, c))
            ? (v ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = c),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      nd(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Ze(t.type, s)),
      (i.props = c),
      (v = t.pendingProps),
      (p = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ke(a))
        : ((a = Pe(n) ? cn : Se.current), (a = Hn(t, a)));
    var x = n.getDerivedStateFromProps;
    (f =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== v || p !== a) && ra(t, i, r, a)),
      (Mt = !1),
      (p = t.memoizedState),
      (i.state = p),
      Kl(t, r, i, l);
    var w = t.memoizedState;
    s !== v || p !== w || Oe.current || Mt
      ? (typeof x == "function" && (Bi(t, n, x, r), (w = t.memoizedState)),
        (c = Mt || na(t, n, c, r, p, w, a) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = a),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Vi(e, t, n, r, o, l);
}
function Vi(e, t, n, r, l, o) {
  Pd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && qu(t, n, !1), jt(e, t, o);
  (r = t.stateNode), (sh.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Kn(t, e.child, null, o)), (t.child = Kn(t, null, s, o)))
      : Ee(e, t, s, o),
    (t.memoizedState = r.state),
    l && qu(t, n, !0),
    t.child
  );
}
function Md(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Zu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Zu(e, t.context, !1),
    Bs(e, t.containerInfo);
}
function pa(e, t, n, r, l) {
  return Vn(), zs(l), (t.flags |= 256), Ee(e, t, n, r), t.child;
}
var Ki = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ld(e, t, n) {
  var r = t.pendingProps,
    l = q.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    K(q, l & 1),
    e === null)
  )
    return (
      Fi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = ho(i, r, 0, null)),
              (e = an(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Qi(n)),
              (t.memoizedState = Ki),
              e)
            : Ys(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return uh(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Xt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = Xt(s, o)) : ((o = an(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Qi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ki),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Xt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ys(e, t) {
  return (
    (t = ho({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function cl(e, t, n, r) {
  return (
    r !== null && zs(r),
    Kn(t, e.child, null, n),
    (e = Ys(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function uh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = bo(Error(E(422)))), cl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = ho({ mode: "visible", children: r.children }, l, 0, null)),
        (o = an(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Kn(t, e.child, null, i),
        (t.child.memoizedState = Qi(i)),
        (t.memoizedState = Ki),
        o);
  if (!(t.mode & 1)) return cl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(E(419))), (r = bo(o, r, void 0)), cl(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Re || s)) {
    if (((r = ce), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Nt(e, l), nt(r, e, l, -1));
    }
    return eu(), (r = bo(Error(E(421)))), cl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Sh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ze = Ht(l.nextSibling)),
      (Ie = t),
      (Y = !0),
      (Je = null),
      e !== null &&
        ((Be[Ue++] = xt),
        (Be[Ue++] = wt),
        (Be[Ue++] = dn),
        (xt = e.id),
        (wt = e.overflow),
        (dn = t)),
      (t = Ys(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ma(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ai(e.return, t, n);
}
function ei(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function zd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Ee(e, t, r.children, n), (r = q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ma(e, n, t);
        else if (e.tag === 19) ma(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((K(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Ql(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ei(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ql(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ei(t, !0, n, null, o);
        break;
      case "together":
        ei(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Nl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function jt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ah(e, t, n) {
  switch (t.tag) {
    case 3:
      Md(t), Vn();
      break;
    case 5:
      sd(t);
      break;
    case 1:
      Pe(t.type) && Bl(t);
      break;
    case 4:
      Bs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      K(Hl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ld(e, t, n)
          : (K(q, q.current & 1),
            (e = jt(e, t, n)),
            e !== null ? e.sibling : null);
      K(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return zd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        K(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Od(e, t, n);
  }
  return jt(e, t, n);
}
var Id, Xi, Dd, $d;
Id = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Xi = function () {};
Dd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), sn(dt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = hi(e, l)), (r = hi(e, r)), (o = []);
        break;
      case "select":
        (l = b({}, l, { value: void 0 })),
          (r = b({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = yi(e, l)), (r = yi(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Fl);
    }
    wi(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var s = l[c];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Nr.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((s = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && a !== s && (a != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                s[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Nr.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && Q("scroll", e),
                  o || s === a || (o = []))
                : (o = o || []).push(c, a));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
$d = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ur(e, t) {
  if (!Y)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ch(e, t, n) {
  var r = t.pendingProps;
  switch ((Ls(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ye(t), null;
    case 1:
      return Pe(t.type) && Al(), ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Qn(),
        X(Oe),
        X(Se),
        Ws(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ul(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Je !== null && (ts(Je), (Je = null)))),
        Xi(e, t),
        ye(t),
        null
      );
    case 5:
      Us(t);
      var l = sn($r.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Dd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return ye(t), null;
        }
        if (((e = sn(dt.current)), ul(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[ut] = t), (r[Ir] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Q("cancel", r), Q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < mr.length; l++) Q(mr[l], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Q("error", r), Q("load", r);
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              Cu(r, o), Q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Q("invalid", r);
              break;
            case "textarea":
              Nu(r, o), Q("invalid", r);
          }
          wi(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      sl(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      sl(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Nr.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  Q("scroll", r);
            }
          switch (n) {
            case "input":
              br(r), Eu(r, o, !0);
              break;
            case "textarea":
              br(r), ju(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Fl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = cc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[ut] = t),
            (e[Ir] = r),
            Id(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Si(n, r)), n)) {
              case "dialog":
                Q("cancel", e), Q("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < mr.length; l++) Q(mr[l], e);
                l = r;
                break;
              case "source":
                Q("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                Q("error", e), Q("load", e), (l = r);
                break;
              case "details":
                Q("toggle", e), (l = r);
                break;
              case "input":
                Cu(e, r), (l = hi(e, r)), Q("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = b({}, r, { value: void 0 })),
                  Q("invalid", e);
                break;
              case "textarea":
                Nu(e, r), (l = yi(e, r)), Q("invalid", e);
                break;
              default:
                l = r;
            }
            wi(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? pc(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && dc(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && jr(e, a)
                    : typeof a == "number" && jr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Nr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && Q("scroll", e)
                      : a != null && ys(e, o, a, i));
              }
            switch (n) {
              case "input":
                br(e), Eu(e, r, !1);
                break;
              case "textarea":
                br(e), ju(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Yt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Dn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Dn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Fl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ye(t), null;
    case 6:
      if (e && t.stateNode != null) $d(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = sn($r.current)), sn(dt.current), ul(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ut] = t),
            (o = r.nodeValue !== n) && ((e = Ie), e !== null))
          )
            switch (e.tag) {
              case 3:
                sl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  sl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ut] = t),
            (t.stateNode = r);
      }
      return ye(t), null;
    case 13:
      if (
        (X(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Y && ze !== null && t.mode & 1 && !(t.flags & 128))
          ed(), Vn(), (t.flags |= 98560), (o = !1);
        else if (((o = ul(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(E(317));
            o[ut] = t;
          } else
            Vn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ye(t), (o = !1);
        } else Je !== null && (ts(Je), (Je = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? se === 0 && (se = 3) : eu())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null);
    case 4:
      return (
        Qn(), Xi(e, t), e === null && Lr(t.stateNode.containerInfo), ye(t), null
      );
    case 10:
      return $s(t.type._context), ye(t), null;
    case 17:
      return Pe(t.type) && Al(), ye(t), null;
    case 19:
      if ((X(q), (o = t.memoizedState), o === null)) return ye(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) ur(o, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ql(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    ur(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return K(q, (q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            re() > Yn &&
            ((t.flags |= 128), (r = !0), ur(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ql(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ur(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !Y)
            )
              return ye(t), null;
          } else
            2 * re() - o.renderingStartTime > Yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ur(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = re()),
          (t.sibling = null),
          (n = q.current),
          K(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null);
    case 22:
    case 23:
      return (
        bs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Le & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function dh(e, t) {
  switch ((Ls(t), t.tag)) {
    case 1:
      return (
        Pe(t.type) && Al(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Qn(),
        X(Oe),
        X(Se),
        Ws(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Us(t), null;
    case 13:
      if ((X(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        Vn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return X(q), null;
    case 4:
      return Qn(), null;
    case 10:
      return $s(t.type._context), null;
    case 22:
    case 23:
      return bs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var dl = !1,
  xe = !1,
  fh = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function Ln(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function Yi(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var ha = !1;
function ph(e, t) {
  if (((Pi = Il), (e = Uc()), Ps(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            a = -1,
            c = 0,
            f = 0,
            v = e,
            p = null;
          t: for (;;) {
            for (
              var x;
              v !== n || (l !== 0 && v.nodeType !== 3) || (s = i + l),
                v !== o || (r !== 0 && v.nodeType !== 3) || (a = i + r),
                v.nodeType === 3 && (i += v.nodeValue.length),
                (x = v.firstChild) !== null;

            )
              (p = v), (v = x);
            for (;;) {
              if (v === e) break t;
              if (
                (p === n && ++c === l && (s = i),
                p === o && ++f === r && (a = i),
                (x = v.nextSibling) !== null)
              )
                break;
              (v = p), (p = v.parentNode);
            }
            v = x;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Mi = { focusedElem: e, selectionRange: n }, Il = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    _ = w.memoizedState,
                    m = t.stateNode,
                    d = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Ze(t.type, S),
                      _
                    );
                  m.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (y) {
          ne(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (w = ha), (ha = !1), w;
}
function kr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Yi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function po(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Gi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Fd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Fd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ut], delete t[Ir], delete t[Ii], delete t[Gm], delete t[Zm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ad(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function va(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ad(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Fl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zi(e, t, n), e = e.sibling; e !== null; ) Zi(e, t, n), (e = e.sibling);
}
function qi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qi(e, t, n), e = e.sibling; e !== null; ) qi(e, t, n), (e = e.sibling);
}
var fe = null,
  qe = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) Bd(e, t, n), (n = n.sibling);
}
function Bd(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(lo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      xe || Ln(n, t);
    case 6:
      var r = fe,
        l = qe;
      (fe = null),
        Ot(e, t, n),
        (fe = r),
        (qe = l),
        fe !== null &&
          (qe
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null &&
        (qe
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Xo(e.parentNode, n)
              : e.nodeType === 1 && Xo(e, n),
            Or(e))
          : Xo(fe, n.stateNode));
      break;
    case 4:
      (r = fe),
        (l = qe),
        (fe = n.stateNode.containerInfo),
        (qe = !0),
        Ot(e, t, n),
        (fe = r),
        (qe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Yi(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (
        !xe &&
        (Ln(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ne(n, t, s);
        }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((xe = (r = xe) || n.memoizedState !== null), Ot(e, t, n), (xe = r))
        : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function ga(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new fh()),
      t.forEach(function (r) {
        var l = kh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ge(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (fe = s.stateNode), (qe = !1);
              break e;
            case 3:
              (fe = s.stateNode.containerInfo), (qe = !0);
              break e;
            case 4:
              (fe = s.stateNode.containerInfo), (qe = !0);
              break e;
          }
          s = s.return;
        }
        if (fe === null) throw Error(E(160));
        Bd(o, i, l), (fe = null), (qe = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (c) {
        ne(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ud(t, e), (t = t.sibling);
}
function Ud(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ge(t, e), it(e), r & 4)) {
        try {
          kr(3, e, e.return), po(3, e);
        } catch (S) {
          ne(e, e.return, S);
        }
        try {
          kr(5, e, e.return);
        } catch (S) {
          ne(e, e.return, S);
        }
      }
      break;
    case 1:
      Ge(t, e), it(e), r & 512 && n !== null && Ln(n, n.return);
      break;
    case 5:
      if (
        (Ge(t, e),
        it(e),
        r & 512 && n !== null && Ln(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          jr(l, "");
        } catch (S) {
          ne(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && uc(l, o),
              Si(s, i);
            var c = Si(s, o);
            for (i = 0; i < a.length; i += 2) {
              var f = a[i],
                v = a[i + 1];
              f === "style"
                ? pc(l, v)
                : f === "dangerouslySetInnerHTML"
                ? dc(l, v)
                : f === "children"
                ? jr(l, v)
                : ys(l, f, v, c);
            }
            switch (s) {
              case "input":
                vi(l, o);
                break;
              case "textarea":
                ac(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? Dn(l, !!o.multiple, x, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Dn(l, !!o.multiple, o.defaultValue, !0)
                      : Dn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Ir] = o;
          } catch (S) {
            ne(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Ge(t, e), it(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          ne(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Ge(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Or(t.containerInfo);
        } catch (S) {
          ne(e, e.return, S);
        }
      break;
    case 4:
      Ge(t, e), it(e);
      break;
    case 13:
      Ge(t, e),
        it(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (qs = re())),
        r & 4 && ga(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((xe = (c = xe) || f), Ge(t, e), (xe = c)) : Ge(t, e),
        it(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !f && e.mode & 1)
        )
          for (R = e, f = e.child; f !== null; ) {
            for (v = R = f; R !== null; ) {
              switch (((p = R), (x = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kr(4, p, p.return);
                  break;
                case 1:
                  Ln(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      ne(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Ln(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    xa(v);
                    continue;
                  }
              }
              x !== null ? ((x.return = p), (R = x)) : xa(v);
            }
            f = f.sibling;
          }
        e: for (f = null, v = e; ; ) {
          if (v.tag === 5) {
            if (f === null) {
              f = v;
              try {
                (l = v.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = v.stateNode),
                      (a = v.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = fc("display", i)));
              } catch (S) {
                ne(e, e.return, S);
              }
            }
          } else if (v.tag === 6) {
            if (f === null)
              try {
                v.stateNode.nodeValue = c ? "" : v.memoizedProps;
              } catch (S) {
                ne(e, e.return, S);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            f === v && (f = null), (v = v.return);
          }
          f === v && (f = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      Ge(t, e), it(e), r & 4 && ga(e);
      break;
    case 21:
      break;
    default:
      Ge(t, e), it(e);
  }
}
function it(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ad(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (jr(l, ""), (r.flags &= -33));
          var o = va(e);
          qi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = va(e);
          Zi(e, s, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      ne(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function mh(e, t, n) {
  (R = e), Wd(e);
}
function Wd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var l = R,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || dl;
      if (!i) {
        var s = l.alternate,
          a = (s !== null && s.memoizedState !== null) || xe;
        s = dl;
        var c = xe;
        if (((dl = i), (xe = a) && !c))
          for (R = l; R !== null; )
            (i = R),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? wa(l)
                : a !== null
                ? ((a.return = i), (R = a))
                : wa(l);
        for (; o !== null; ) (R = o), Wd(o), (o = o.sibling);
        (R = l), (dl = s), (xe = c);
      }
      ya(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (R = o)) : ya(e);
  }
}
function ya(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              xe || po(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xe)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ta(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ta(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var f = c.memoizedState;
                  if (f !== null) {
                    var v = f.dehydrated;
                    v !== null && Or(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        xe || (t.flags & 512 && Gi(t));
      } catch (p) {
        ne(t, t.return, p);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function xa(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function wa(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            po(4, t);
          } catch (a) {
            ne(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ne(t, l, a);
            }
          }
          var o = t.return;
          try {
            Gi(t);
          } catch (a) {
            ne(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Gi(t);
          } catch (a) {
            ne(t, i, a);
          }
      }
    } catch (a) {
      ne(t, t.return, a);
    }
    if (t === e) {
      R = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (R = s);
      break;
    }
    R = t.return;
  }
}
var hh = Math.ceil,
  Gl = Tt.ReactCurrentDispatcher,
  Gs = Tt.ReactCurrentOwner,
  Ve = Tt.ReactCurrentBatchConfig,
  F = 0,
  ce = null,
  oe = null,
  pe = 0,
  Le = 0,
  zn = qt(0),
  se = 0,
  Ur = null,
  pn = 0,
  mo = 0,
  Zs = 0,
  Cr = null,
  _e = null,
  qs = 0,
  Yn = 1 / 0,
  vt = null,
  Zl = !1,
  Ji = null,
  Kt = null,
  fl = !1,
  Ft = null,
  ql = 0,
  Er = 0,
  bi = null,
  jl = -1,
  Tl = 0;
function Ne() {
  return F & 6 ? re() : jl !== -1 ? jl : (jl = re());
}
function Qt(e) {
  return e.mode & 1
    ? F & 2 && pe !== 0
      ? pe & -pe
      : Jm.transition !== null
      ? (Tl === 0 && (Tl = Nc()), Tl)
      : ((e = W),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Mc(e.type))),
        e)
    : 1;
}
function nt(e, t, n, r) {
  if (50 < Er) throw ((Er = 0), (bi = null), Error(E(185)));
  Kr(e, n, r),
    (!(F & 2) || e !== ce) &&
      (e === ce && (!(F & 2) && (mo |= n), se === 4 && It(e, pe)),
      Me(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Yn = re() + 500), ao && Jt()));
}
function Me(e, t) {
  var n = e.callbackNode;
  Jp(e, t);
  var r = zl(e, e === ce ? pe : 0);
  if (r === 0)
    n !== null && Ru(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ru(n), t === 1))
      e.tag === 0 ? qm(Sa.bind(null, e)) : qc(Sa.bind(null, e)),
        Xm(function () {
          !(F & 6) && Jt();
        }),
        (n = null);
    else {
      switch (jc(r)) {
        case 1:
          n = Cs;
          break;
        case 4:
          n = Cc;
          break;
        case 16:
          n = Ll;
          break;
        case 536870912:
          n = Ec;
          break;
        default:
          n = Ll;
      }
      n = Zd(n, Hd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Hd(e, t) {
  if (((jl = -1), (Tl = 0), F & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (Un() && e.callbackNode !== n) return null;
  var r = zl(e, e === ce ? pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Jl(e, r);
  else {
    t = r;
    var l = F;
    F |= 2;
    var o = Kd();
    (ce !== e || pe !== t) && ((vt = null), (Yn = re() + 500), un(e, t));
    do
      try {
        yh();
        break;
      } catch (s) {
        Vd(e, s);
      }
    while (1);
    Ds(),
      (Gl.current = o),
      (F = l),
      oe !== null ? (t = 0) : ((ce = null), (pe = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ji(e)), l !== 0 && ((r = l), (t = es(e, l)))), t === 1)
    )
      throw ((n = Ur), un(e, 0), It(e, r), Me(e, re()), n);
    if (t === 6) It(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !vh(l) &&
          ((t = Jl(e, r)),
          t === 2 && ((o = ji(e)), o !== 0 && ((r = o), (t = es(e, o)))),
          t === 1))
      )
        throw ((n = Ur), un(e, 0), It(e, r), Me(e, re()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          nn(e, _e, vt);
          break;
        case 3:
          if (
            (It(e, r), (r & 130023424) === r && ((t = qs + 500 - re()), 10 < t))
          ) {
            if (zl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ne(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = zi(nn.bind(null, e, _e, vt), t);
            break;
          }
          nn(e, _e, vt);
          break;
        case 4:
          if ((It(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - tt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = re() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * hh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = zi(nn.bind(null, e, _e, vt), r);
            break;
          }
          nn(e, _e, vt);
          break;
        case 5:
          nn(e, _e, vt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Me(e, re()), e.callbackNode === n ? Hd.bind(null, e) : null;
}
function es(e, t) {
  var n = Cr;
  return (
    e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
    (e = Jl(e, t)),
    e !== 2 && ((t = _e), (_e = n), t !== null && ts(t)),
    e
  );
}
function ts(e) {
  _e === null ? (_e = e) : _e.push.apply(_e, e);
}
function vh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!rt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function It(e, t) {
  for (
    t &= ~Zs,
      t &= ~mo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - tt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Sa(e) {
  if (F & 6) throw Error(E(327));
  Un();
  var t = zl(e, 0);
  if (!(t & 1)) return Me(e, re()), null;
  var n = Jl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ji(e);
    r !== 0 && ((t = r), (n = es(e, r)));
  }
  if (n === 1) throw ((n = Ur), un(e, 0), It(e, t), Me(e, re()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nn(e, _e, vt),
    Me(e, re()),
    null
  );
}
function Js(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Yn = re() + 500), ao && Jt());
  }
}
function mn(e) {
  Ft !== null && Ft.tag === 0 && !(F & 6) && Un();
  var t = F;
  F |= 1;
  var n = Ve.transition,
    r = W;
  try {
    if (((Ve.transition = null), (W = 1), e)) return e();
  } finally {
    (W = r), (Ve.transition = n), (F = t), !(F & 6) && Jt();
  }
}
function bs() {
  (Le = zn.current), X(zn);
}
function un(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Qm(n)), oe !== null))
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch ((Ls(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Al();
          break;
        case 3:
          Qn(), X(Oe), X(Se), Ws();
          break;
        case 5:
          Us(r);
          break;
        case 4:
          Qn();
          break;
        case 13:
          X(q);
          break;
        case 19:
          X(q);
          break;
        case 10:
          $s(r.type._context);
          break;
        case 22:
        case 23:
          bs();
      }
      n = n.return;
    }
  if (
    ((ce = e),
    (oe = e = Xt(e.current, null)),
    (pe = Le = t),
    (se = 0),
    (Ur = null),
    (Zs = mo = pn = 0),
    (_e = Cr = null),
    on !== null)
  ) {
    for (t = 0; t < on.length; t++)
      if (((n = on[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    on = null;
  }
  return e;
}
function Vd(e, t) {
  do {
    var n = oe;
    try {
      if ((Ds(), (Cl.current = Yl), Xl)) {
        for (var r = J.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Xl = !1;
      }
      if (
        ((fn = 0),
        (ae = ie = J = null),
        (Sr = !1),
        (Fr = 0),
        (Gs.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (Ur = t), (oe = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          a = t;
        if (
          ((t = pe),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            f = s,
            v = f.tag;
          if (!(f.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var p = f.alternate;
            p
              ? ((f.updateQueue = p.updateQueue),
                (f.memoizedState = p.memoizedState),
                (f.lanes = p.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var x = ua(i);
          if (x !== null) {
            (x.flags &= -257),
              aa(x, i, s, o, t),
              x.mode & 1 && sa(o, c, t),
              (t = x),
              (a = c);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(a), (t.updateQueue = S);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              sa(o, c, t), eu();
              break e;
            }
            a = Error(E(426));
          }
        } else if (Y && s.mode & 1) {
          var _ = ua(i);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              aa(_, i, s, o, t),
              zs(Xn(a, s));
            break e;
          }
        }
        (o = a = Xn(a, s)),
          se !== 4 && (se = 2),
          Cr === null ? (Cr = [o]) : Cr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Td(o, a, t);
              ea(o, m);
              break e;
            case 1:
              s = a;
              var d = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Kt === null || !Kt.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = _d(o, s, t);
                ea(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Xd(n);
    } catch (N) {
      (t = N), oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Kd() {
  var e = Gl.current;
  return (Gl.current = Yl), e === null ? Yl : e;
}
function eu() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    ce === null || (!(pn & 268435455) && !(mo & 268435455)) || It(ce, pe);
}
function Jl(e, t) {
  var n = F;
  F |= 2;
  var r = Kd();
  (ce !== e || pe !== t) && ((vt = null), un(e, t));
  do
    try {
      gh();
      break;
    } catch (l) {
      Vd(e, l);
    }
  while (1);
  if ((Ds(), (F = n), (Gl.current = r), oe !== null)) throw Error(E(261));
  return (ce = null), (pe = 0), se;
}
function gh() {
  for (; oe !== null; ) Qd(oe);
}
function yh() {
  for (; oe !== null && !Hp(); ) Qd(oe);
}
function Qd(e) {
  var t = Gd(e.alternate, e, Le);
  (e.memoizedProps = e.pendingProps),
    t === null ? Xd(e) : (oe = t),
    (Gs.current = null);
}
function Xd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = dh(n, t)), n !== null)) {
        (n.flags &= 32767), (oe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (oe = null);
        return;
      }
    } else if (((n = ch(n, t, Le)), n !== null)) {
      oe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      oe = t;
      return;
    }
    oe = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function nn(e, t, n) {
  var r = W,
    l = Ve.transition;
  try {
    (Ve.transition = null), (W = 1), xh(e, t, n, r);
  } finally {
    (Ve.transition = l), (W = r);
  }
  return null;
}
function xh(e, t, n, r) {
  do Un();
  while (Ft !== null);
  if (F & 6) throw Error(E(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (bp(e, o),
    e === ce && ((oe = ce = null), (pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      fl ||
      ((fl = !0),
      Zd(Ll, function () {
        return Un(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ve.transition), (Ve.transition = null);
    var i = W;
    W = 1;
    var s = F;
    (F |= 4),
      (Gs.current = null),
      ph(e, n),
      Ud(n, e),
      Am(Mi),
      (Il = !!Pi),
      (Mi = Pi = null),
      (e.current = n),
      mh(n),
      Vp(),
      (F = s),
      (W = i),
      (Ve.transition = o);
  } else e.current = n;
  if (
    (fl && ((fl = !1), (Ft = e), (ql = l)),
    (o = e.pendingLanes),
    o === 0 && (Kt = null),
    Xp(n.stateNode),
    Me(e, re()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Zl) throw ((Zl = !1), (e = Ji), (Ji = null), e);
  return (
    ql & 1 && e.tag !== 0 && Un(),
    (o = e.pendingLanes),
    o & 1 ? (e === bi ? Er++ : ((Er = 0), (bi = e))) : (Er = 0),
    Jt(),
    null
  );
}
function Un() {
  if (Ft !== null) {
    var e = jc(ql),
      t = Ve.transition,
      n = W;
    try {
      if (((Ve.transition = null), (W = 16 > e ? 16 : e), Ft === null))
        var r = !1;
      else {
        if (((e = Ft), (Ft = null), (ql = 0), F & 6)) throw Error(E(331));
        var l = F;
        for (F |= 4, R = e.current; R !== null; ) {
          var o = R,
            i = o.child;
          if (R.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var c = s[a];
                for (R = c; R !== null; ) {
                  var f = R;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(8, f, o);
                  }
                  var v = f.child;
                  if (v !== null) (v.return = f), (R = v);
                  else
                    for (; R !== null; ) {
                      f = R;
                      var p = f.sibling,
                        x = f.return;
                      if ((Fd(f), f === c)) {
                        R = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = x), (R = p);
                        break;
                      }
                      R = x;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var _ = S.sibling;
                    (S.sibling = null), (S = _);
                  } while (S !== null);
                }
              }
              R = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (R = i);
          else
            e: for (; R !== null; ) {
              if (((o = R), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    kr(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (R = m);
                break e;
              }
              R = o.return;
            }
        }
        var d = e.current;
        for (R = d; R !== null; ) {
          i = R;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (R = h);
          else
            e: for (i = d; R !== null; ) {
              if (((s = R), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      po(9, s);
                  }
                } catch (N) {
                  ne(s, s.return, N);
                }
              if (s === i) {
                R = null;
                break e;
              }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (R = y);
                break e;
              }
              R = s.return;
            }
        }
        if (
          ((F = l), Jt(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(lo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (W = n), (Ve.transition = t);
    }
  }
  return !1;
}
function ka(e, t, n) {
  (t = Xn(n, t)),
    (t = Td(e, t, 1)),
    (e = Vt(e, t, 1)),
    (t = Ne()),
    e !== null && (Kr(e, 1, t), Me(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) ka(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ka(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Kt === null || !Kt.has(r)))
        ) {
          (e = Xn(n, e)),
            (e = _d(t, e, 1)),
            (t = Vt(t, e, 1)),
            (e = Ne()),
            t !== null && (Kr(t, 1, e), Me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function wh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ce === e &&
      (pe & n) === n &&
      (se === 4 || (se === 3 && (pe & 130023424) === pe && 500 > re() - qs)
        ? un(e, 0)
        : (Zs |= n)),
    Me(e, t);
}
function Yd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = nl), (nl <<= 1), !(nl & 130023424) && (nl = 4194304))
      : (t = 1));
  var n = Ne();
  (e = Nt(e, t)), e !== null && (Kr(e, t, n), Me(e, n));
}
function Sh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Yd(e, n);
}
function kh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), Yd(e, n);
}
var Gd;
Gd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Oe.current) Re = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Re = !1), ah(e, t, n);
      Re = !!(e.flags & 131072);
    }
  else (Re = !1), Y && t.flags & 1048576 && Jc(t, Wl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Nl(e, t), (e = t.pendingProps);
      var l = Hn(t, Se.current);
      Bn(t, n), (l = Vs(null, t, r, e, l, n));
      var o = Ks();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Pe(r) ? ((o = !0), Bl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            As(t),
            (l.updater = co),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ui(t, r, e, n),
            (t = Vi(null, t, r, !0, o, n)))
          : ((t.tag = 0), Y && o && Ms(t), Ee(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Nl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Eh(r)),
          (e = Ze(r, e)),
          l)
        ) {
          case 0:
            t = Hi(null, t, r, e, n);
            break e;
          case 1:
            t = fa(null, t, r, e, n);
            break e;
          case 11:
            t = ca(null, t, r, e, n);
            break e;
          case 14:
            t = da(null, t, r, Ze(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        Hi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        fa(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Md(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          nd(e, t),
          Kl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Xn(Error(E(423)), t)), (t = pa(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Xn(Error(E(424)), t)), (t = pa(e, t, r, n, l));
            break e;
          } else
            for (
              ze = Ht(t.stateNode.containerInfo.firstChild),
                Ie = t,
                Y = !0,
                Je = null,
                n = id(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Vn(), r === l)) {
            t = jt(e, t, n);
            break e;
          }
          Ee(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sd(t),
        e === null && Fi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Li(r, l) ? (i = null) : o !== null && Li(r, o) && (t.flags |= 32),
        Pd(e, t),
        Ee(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Fi(t), null;
    case 13:
      return Ld(e, t, n);
    case 4:
      return (
        Bs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Kn(t, null, r, n)) : Ee(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        ca(e, t, r, l, n)
      );
    case 7:
      return Ee(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          K(Hl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (rt(o.value, i)) {
            if (o.children === l.children && !Oe.current) {
              t = jt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = St(-1, n & -n)), (a.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null
                          ? (a.next = a)
                          : ((a.next = f.next), (f.next = a)),
                          (c.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Ai(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(E(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Ai(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Ee(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Bn(t, n),
        (l = Ke(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ee(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ze(r, t.pendingProps)),
        (l = Ze(r.type, l)),
        da(e, t, r, l, n)
      );
    case 15:
      return Rd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        Nl(e, t),
        (t.tag = 1),
        Pe(r) ? ((e = !0), Bl(t)) : (e = !1),
        Bn(t, n),
        ld(t, r, l),
        Ui(t, r, l, n),
        Vi(null, t, r, !0, e, n)
      );
    case 19:
      return zd(e, t, n);
    case 22:
      return Od(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Zd(e, t) {
  return kc(e, t);
}
function Ch(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function We(e, t, n, r) {
  return new Ch(e, t, n, r);
}
function tu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Eh(e) {
  if (typeof e == "function") return tu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ws)) return 11;
    if (e === Ss) return 14;
  }
  return 2;
}
function Xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = We(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function _l(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) tu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case En:
        return an(n.children, l, o, t);
      case xs:
        (i = 8), (l |= 8);
        break;
      case di:
        return (
          (e = We(12, n, t, l | 2)), (e.elementType = di), (e.lanes = o), e
        );
      case fi:
        return (e = We(13, n, t, l)), (e.elementType = fi), (e.lanes = o), e;
      case pi:
        return (e = We(19, n, t, l)), (e.elementType = pi), (e.lanes = o), e;
      case oc:
        return ho(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case rc:
              i = 10;
              break e;
            case lc:
              i = 9;
              break e;
            case ws:
              i = 11;
              break e;
            case Ss:
              i = 14;
              break e;
            case Pt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = We(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function an(e, t, n, r) {
  return (e = We(7, e, r, t)), (e.lanes = n), e;
}
function ho(e, t, n, r) {
  return (
    (e = We(22, e, r, t)),
    (e.elementType = oc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ti(e, t, n) {
  return (e = We(6, e, null, t)), (e.lanes = n), e;
}
function ni(e, t, n) {
  return (
    (t = We(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Nh(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Do(0)),
    (this.expirationTimes = Do(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Do(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function nu(e, t, n, r, l, o, i, s, a) {
  return (
    (e = new Nh(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = We(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    As(o),
    e
  );
}
function jh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Cn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qd(e) {
  if (!e) return Gt;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Pe(n)) return Zc(e, n, t);
  }
  return t;
}
function Jd(e, t, n, r, l, o, i, s, a) {
  return (
    (e = nu(n, r, !0, e, l, o, i, s, a)),
    (e.context = qd(null)),
    (n = e.current),
    (r = Ne()),
    (l = Qt(n)),
    (o = St(r, l)),
    (o.callback = t ?? null),
    Vt(n, o, l),
    (e.current.lanes = l),
    Kr(e, l, r),
    Me(e, r),
    e
  );
}
function vo(e, t, n, r) {
  var l = t.current,
    o = Ne(),
    i = Qt(l);
  return (
    (n = qd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = St(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Vt(l, t, i)),
    e !== null && (nt(e, l, i, o), kl(e, l, i)),
    i
  );
}
function bl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ca(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ru(e, t) {
  Ca(e, t), (e = e.alternate) && Ca(e, t);
}
function Th() {
  return null;
}
var bd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function lu(e) {
  this._internalRoot = e;
}
go.prototype.render = lu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  vo(e, t, null, null);
};
go.prototype.unmount = lu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mn(function () {
      vo(null, e, null, null);
    }),
      (t[Et] = null);
  }
};
function go(e) {
  this._internalRoot = e;
}
go.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Rc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
    zt.splice(n, 0, e), n === 0 && Pc(e);
  }
};
function ou(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ea() {}
function _h(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = bl(i);
        o.call(c);
      };
    }
    var i = Jd(t, r, e, 0, null, !1, !1, "", Ea);
    return (
      (e._reactRootContainer = i),
      (e[Et] = i.current),
      Lr(e.nodeType === 8 ? e.parentNode : e),
      mn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = bl(a);
      s.call(c);
    };
  }
  var a = nu(e, 0, !1, null, null, !1, !1, "", Ea);
  return (
    (e._reactRootContainer = a),
    (e[Et] = a.current),
    Lr(e.nodeType === 8 ? e.parentNode : e),
    mn(function () {
      vo(t, a, n, r);
    }),
    a
  );
}
function xo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var a = bl(i);
        s.call(a);
      };
    }
    vo(t, i, e, l);
  } else i = _h(n, t, e, l, r);
  return bl(i);
}
Tc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = pr(t.pendingLanes);
        n !== 0 &&
          (Es(t, n | 1), Me(t, re()), !(F & 6) && ((Yn = re() + 500), Jt()));
      }
      break;
    case 13:
      mn(function () {
        var r = Nt(e, 1);
        if (r !== null) {
          var l = Ne();
          nt(r, e, 1, l);
        }
      }),
        ru(e, 1);
  }
};
Ns = function (e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = Ne();
      nt(t, e, 134217728, n);
    }
    ru(e, 134217728);
  }
};
_c = function (e) {
  if (e.tag === 13) {
    var t = Qt(e),
      n = Nt(e, t);
    if (n !== null) {
      var r = Ne();
      nt(n, e, t, r);
    }
    ru(e, t);
  }
};
Rc = function () {
  return W;
};
Oc = function (e, t) {
  var n = W;
  try {
    return (W = e), t();
  } finally {
    W = n;
  }
};
Ci = function (e, t, n) {
  switch (t) {
    case "input":
      if ((vi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = uo(r);
            if (!l) throw Error(E(90));
            sc(r), vi(r, l);
          }
        }
      }
      break;
    case "textarea":
      ac(e, n);
      break;
    case "select":
      (t = n.value), t != null && Dn(e, !!n.multiple, t, !1);
  }
};
vc = Js;
gc = mn;
var Rh = { usingClientEntryPoint: !1, Events: [Xr, _n, uo, mc, hc, Js] },
  ar = {
    findFiberByHostInstance: ln,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Oh = {
    bundleType: ar.bundleType,
    version: ar.version,
    rendererPackageName: ar.rendererPackageName,
    rendererConfig: ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = wc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ar.findFiberByHostInstance || Th,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!pl.isDisabled && pl.supportsFiber)
    try {
      (lo = pl.inject(Oh)), (ct = pl);
    } catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rh;
$e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ou(t)) throw Error(E(200));
  return jh(e, t, null, n);
};
$e.createRoot = function (e, t) {
  if (!ou(e)) throw Error(E(299));
  var n = !1,
    r = "",
    l = bd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = nu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Et] = t.current),
    Lr(e.nodeType === 8 ? e.parentNode : e),
    new lu(t)
  );
};
$e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = wc(t)), (e = e === null ? null : e.stateNode), e;
};
$e.flushSync = function (e) {
  return mn(e);
};
$e.hydrate = function (e, t, n) {
  if (!yo(t)) throw Error(E(200));
  return xo(null, e, t, !0, n);
};
$e.hydrateRoot = function (e, t, n) {
  if (!ou(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = bd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Jd(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Et] = t.current),
    Lr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new go(t);
};
$e.render = function (e, t, n) {
  if (!yo(t)) throw Error(E(200));
  return xo(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function (e) {
  if (!yo(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (mn(function () {
        xo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Et] = null);
        });
      }),
      !0)
    : !1;
};
$e.unstable_batchedUpdates = Js;
$e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!yo(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return xo(e, t, n, !1, r);
};
$e.version = "18.2.0-next-9e3b772b8-20220608";
function ef() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ef);
    } catch (e) {
      console.error(e);
    }
}
ef(), (Ja.exports = $e);
var tf = Ja.exports;
const In = no(tf);
var Na = tf;
(ai.createRoot = Na.createRoot), (ai.hydrateRoot = Na.hydrateRoot);
function nf(e) {
  const t = g.useRef(e);
  return (
    g.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function we(e) {
  const t = nf(e);
  return g.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
function Ph(e, t) {
  const n = g.useRef(!0);
  g.useEffect(() => {
    if (n.current) {
      n.current = !1;
      return;
    }
    return e();
  }, t);
}
function rf() {
  const e = g.useRef(!0),
    t = g.useRef(() => e.current);
  return (
    g.useEffect(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    t.current
  );
}
function Mh(e) {
  const t = g.useRef(e);
  return (t.current = e), t;
}
function iu(e) {
  const t = Mh(e);
  g.useEffect(() => () => t.current(), []);
}
const ns = 2 ** 31 - 1;
function lf(e, t, n) {
  const r = n - Date.now();
  e.current = r <= ns ? setTimeout(t, r) : setTimeout(() => lf(e, t, n), ns);
}
function Lh() {
  const e = rf(),
    t = g.useRef();
  return (
    iu(() => clearTimeout(t.current)),
    g.useMemo(() => {
      const n = () => clearTimeout(t.current);
      function r(l, o = 0) {
        e() &&
          (n(),
          o <= ns ? (t.current = setTimeout(l, o)) : lf(t, l, Date.now() + o));
      }
      return { set: r, clear: n };
    }, [])
  );
}
function zh() {
  return g.useState(null);
}
function Ih(e) {
  const t = g.useRef(null);
  return (
    g.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
const Dh =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  $h = typeof document < "u",
  rs = $h || Dh ? g.useLayoutEffect : g.useEffect,
  Fh = ["as", "disabled"];
function Ah(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Bh(e) {
  return !e || e.trim() === "#";
}
function of({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: l,
  role: o,
  onClick: i,
  tabIndex: s = 0,
  type: a,
}) {
  e || (n != null || r != null || l != null ? (e = "a") : (e = "button"));
  const c = { tagName: e };
  if (e === "button") return [{ type: a || "button", disabled: t }, c];
  const f = (p) => {
      if (((t || (e === "a" && Bh(n))) && p.preventDefault(), t)) {
        p.stopPropagation();
        return;
      }
      i == null || i(p);
    },
    v = (p) => {
      p.key === " " && (p.preventDefault(), f(p));
    };
  return (
    e === "a" && (n || (n = "#"), t && (n = void 0)),
    [
      {
        role: o ?? "button",
        disabled: void 0,
        tabIndex: t ? void 0 : s,
        href: n,
        target: e === "a" ? r : void 0,
        "aria-disabled": t || void 0,
        rel: e === "a" ? l : void 0,
        onClick: f,
        onKeyDown: v,
      },
      c,
    ]
  );
}
const sf = g.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    l = Ah(e, Fh);
  const [o, { tagName: i }] = of(Object.assign({ tagName: n, disabled: r }, l));
  return u.jsx(i, Object.assign({}, l, o, { ref: t }));
});
sf.displayName = "Button";
const Uh = ["onKeyDown"];
function Wh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Hh(e) {
  return !e || e.trim() === "#";
}
const uf = g.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = Wh(e, Uh);
  const [l] = of(Object.assign({ tagName: "a" }, r)),
    o = we((i) => {
      l.onKeyDown(i), n == null || n(i);
    });
  return Hh(r.href) || r.role === "button"
    ? u.jsx("a", Object.assign({ ref: t }, r, l, { onKeyDown: o }))
    : u.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
uf.displayName = "Anchor";
const ls = uf;
var af = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], l = 0; l < arguments.length; l++) {
        var o = arguments[l];
        if (o) {
          var i = typeof o;
          if (i === "string" || i === "number") r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var s = n.apply(null, o);
              s && r.push(s);
            }
          } else if (i === "object") {
            if (
              o.toString !== Object.prototype.toString &&
              !o.toString.toString().includes("[native code]")
            ) {
              r.push(o.toString());
              continue;
            }
            for (var a in o) t.call(o, a) && o[a] && r.push(a);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(af);
var Vh = af.exports;
const H = no(Vh);
function os() {
  return (
    (os = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    os.apply(this, arguments)
  );
}
function cf(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function ja(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function Kh(e) {
  var t = Qh(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Qh(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xh(e, t, n) {
  var r = g.useRef(e !== void 0),
    l = g.useState(t),
    o = l[0],
    i = l[1],
    s = e !== void 0,
    a = r.current;
  return (
    (r.current = s),
    !s && a && o !== t && i(t),
    [
      s ? e : o,
      g.useCallback(
        function (c) {
          for (
            var f = arguments.length, v = new Array(f > 1 ? f - 1 : 0), p = 1;
            p < f;
            p++
          )
            v[p - 1] = arguments[p];
          n && n.apply(void 0, [c].concat(v)), i(c);
        },
        [n]
      ),
    ]
  );
}
function su(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var l,
      o = n,
      i = o[ja(r)],
      s = o[r],
      a = cf(o, [ja(r), r].map(Kh)),
      c = t[r],
      f = Xh(s, i, e[c]),
      v = f[0],
      p = f[1];
    return os({}, a, ((l = {}), (l[r] = v), (l[c] = p), l));
  }, e);
}
function is(e, t) {
  return (
    (is = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, l) {
          return (r.__proto__ = l), r;
        }),
    is(e, t)
  );
}
function Yh(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    is(e, t);
}
var Gh = /-(.)/g;
function Zh(e) {
  return e.replace(Gh, function (t, n) {
    return n.toUpperCase();
  });
}
const qh = ["xxl", "xl", "lg", "md", "sm", "xs"],
  Jh = "xs",
  wo = g.createContext({ prefixes: {}, breakpoints: qh, minBreakpoint: Jh });
function ue(e, t) {
  const { prefixes: n } = g.useContext(wo);
  return e || n[t] || t;
}
function df() {
  const { breakpoints: e } = g.useContext(wo);
  return e;
}
function ff() {
  const { minBreakpoint: e } = g.useContext(wo);
  return e;
}
function pf() {
  const { dir: e } = g.useContext(wo);
  return e === "rtl";
}
const bh = (e) => e[0].toUpperCase() + Zh(e).slice(1);
function bt(e, { displayName: t = bh(e), Component: n, defaultProps: r } = {}) {
  const l = g.forwardRef(
    ({ className: o, bsPrefix: i, as: s = n || "div", ...a }, c) => {
      const f = { ...r, ...a },
        v = ue(i, e);
      return u.jsx(s, { ref: c, className: H(o, v), ...f });
    }
  );
  return (l.displayName = t), l;
}
const ev = bt("carousel-caption"),
  mf = g.forwardRef(({ as: e = "div", bsPrefix: t, className: n, ...r }, l) => {
    const o = H(n, ue(t, "carousel-item"));
    return u.jsx(e, { ref: l, ...r, className: o });
  });
mf.displayName = "CarouselItem";
const tv = mf;
function Ta(e, t) {
  let n = 0;
  return g.Children.map(e, (r) => (g.isValidElement(r) ? t(r, n++) : r));
}
function nv(e, t) {
  let n = 0;
  g.Children.forEach(e, (r) => {
    g.isValidElement(r) && t(r, n++);
  });
}
function So(e) {
  return (e && e.ownerDocument) || document;
}
function rv(e) {
  var t = So(e);
  return (t && t.defaultView) || window;
}
function lv(e, t) {
  return rv(e).getComputedStyle(e, t);
}
var ov = /([A-Z])/g;
function iv(e) {
  return e.replace(ov, "-$1").toLowerCase();
}
var sv = /^ms-/;
function ml(e) {
  return iv(e).replace(sv, "-ms-");
}
var uv =
  /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function av(e) {
  return !!(e && uv.test(e));
}
function kt(e, t) {
  var n = "",
    r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(ml(t)) || lv(e).getPropertyValue(ml(t));
  Object.keys(t).forEach(function (l) {
    var o = t[l];
    !o && o !== 0
      ? e.style.removeProperty(ml(l))
      : av(l)
      ? (r += l + "(" + o + ") ")
      : (n += ml(l) + ": " + o + ";");
  }),
    r && (n += "transform: " + r + ";"),
    (e.style.cssText += ";" + n);
}
const Jn = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
var ss = !1,
  us = !1;
try {
  var ri = {
    get passive() {
      return (ss = !0);
    },
    get once() {
      return (us = ss = !0);
    },
  };
  Jn &&
    (window.addEventListener("test", ri, ri),
    window.removeEventListener("test", ri, !0));
} catch {}
function hf(e, t, n, r) {
  if (r && typeof r != "boolean" && !us) {
    var l = r.once,
      o = r.capture,
      i = n;
    !us &&
      l &&
      ((i =
        n.__once ||
        function s(a) {
          this.removeEventListener(t, s, o), n.call(this, a);
        }),
      (n.__once = i)),
      e.addEventListener(t, i, ss ? r : o);
  }
  e.addEventListener(t, n, r);
}
function as(e, t, n, r) {
  var l = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, l),
    n.__once && e.removeEventListener(t, n.__once, l);
}
function eo(e, t, n, r) {
  return (
    hf(e, t, n, r),
    function () {
      as(e, t, n, r);
    }
  );
}
function cv(e, t, n, r) {
  if ((n === void 0 && (n = !1), r === void 0 && (r = !0), e)) {
    var l = document.createEvent("HTMLEvents");
    l.initEvent(t, n, r), e.dispatchEvent(l);
  }
}
function dv(e) {
  var t = kt(e, "transitionDuration") || "",
    n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function fv(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1,
    l = setTimeout(function () {
      r || cv(e, "transitionend", !0);
    }, t + n),
    o = eo(
      e,
      "transitionend",
      function () {
        r = !0;
      },
      { once: !0 }
    );
  return function () {
    clearTimeout(l), o();
  };
}
function vf(e, t, n, r) {
  n == null && (n = dv(e) || 0);
  var l = fv(e, n, r),
    o = eo(e, "transitionend", t);
  return function () {
    l(), o();
  };
}
function _a(e, t) {
  const n = kt(e, t) || "",
    r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function ko(e, t) {
  const n = _a(e, "transitionDuration"),
    r = _a(e, "transitionDelay"),
    l = vf(
      e,
      (o) => {
        o.target === e && (l(), t(o));
      },
      n + r
    );
}
function uu(e) {
  e.offsetHeight;
}
var gf = { exports: {} },
  pv = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  mv = pv,
  hv = mv;
function yf() {}
function xf() {}
xf.resetWarningCache = yf;
var vv = function () {
  function e(r, l, o, i, s, a) {
    if (a !== hv) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: xf,
    resetWarningCache: yf,
  };
  return (n.PropTypes = n), n;
};
gf.exports = vv();
var gv = gf.exports;
const Dt = no(gv),
  Ra = { disabled: !1 },
  wf = at.createContext(null);
var yv = function (t) {
    return t.scrollTop;
  },
  hr = "unmounted",
  Lt = "exited",
  be = "entering",
  yt = "entered",
  Wr = "exiting",
  _t = (function (e) {
    Yh(t, e);
    function t(r, l) {
      var o;
      o = e.call(this, r, l) || this;
      var i = l,
        s = i && !i.isMounting ? r.enter : r.appear,
        a;
      return (
        (o.appearStatus = null),
        r.in
          ? s
            ? ((a = Lt), (o.appearStatus = be))
            : (a = yt)
          : r.unmountOnExit || r.mountOnEnter
          ? (a = hr)
          : (a = Lt),
        (o.state = { status: a }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (l, o) {
      var i = l.in;
      return i && o.status === hr ? { status: Lt } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (l) {
        var o = null;
        if (l !== this.props) {
          var i = this.state.status;
          this.props.in
            ? i !== be && i !== yt && (o = be)
            : (i === be || i === yt) && (o = Wr);
        }
        this.updateStatus(!1, o);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var l = this.props.timeout,
          o,
          i,
          s;
        return (
          (o = i = s = l),
          l != null &&
            typeof l != "number" &&
            ((o = l.exit),
            (i = l.enter),
            (s = l.appear !== void 0 ? l.appear : i)),
          { exit: o, enter: i, appear: s }
        );
      }),
      (n.updateStatus = function (l, o) {
        if ((l === void 0 && (l = !1), o !== null))
          if ((this.cancelNextCallback(), o === be)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var i = this.props.nodeRef
                ? this.props.nodeRef.current
                : In.findDOMNode(this);
              i && yv(i);
            }
            this.performEnter(l);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Lt &&
            this.setState({ status: hr });
      }),
      (n.performEnter = function (l) {
        var o = this,
          i = this.props.enter,
          s = this.context ? this.context.isMounting : l,
          a = this.props.nodeRef ? [s] : [In.findDOMNode(this), s],
          c = a[0],
          f = a[1],
          v = this.getTimeouts(),
          p = s ? v.appear : v.enter;
        if ((!l && !i) || Ra.disabled) {
          this.safeSetState({ status: yt }, function () {
            o.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, f),
          this.safeSetState({ status: be }, function () {
            o.props.onEntering(c, f),
              o.onTransitionEnd(p, function () {
                o.safeSetState({ status: yt }, function () {
                  o.props.onEntered(c, f);
                });
              });
          });
      }),
      (n.performExit = function () {
        var l = this,
          o = this.props.exit,
          i = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : In.findDOMNode(this);
        if (!o || Ra.disabled) {
          this.safeSetState({ status: Lt }, function () {
            l.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: Wr }, function () {
            l.props.onExiting(s),
              l.onTransitionEnd(i.exit, function () {
                l.safeSetState({ status: Lt }, function () {
                  l.props.onExited(s);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (l, o) {
        (o = this.setNextCallback(o)), this.setState(l, o);
      }),
      (n.setNextCallback = function (l) {
        var o = this,
          i = !0;
        return (
          (this.nextCallback = function (s) {
            i && ((i = !1), (o.nextCallback = null), l(s));
          }),
          (this.nextCallback.cancel = function () {
            i = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (l, o) {
        this.setNextCallback(o);
        var i = this.props.nodeRef
            ? this.props.nodeRef.current
            : In.findDOMNode(this),
          s = l == null && !this.props.addEndListener;
        if (!i || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var a = this.props.nodeRef
              ? [this.nextCallback]
              : [i, this.nextCallback],
            c = a[0],
            f = a[1];
          this.props.addEndListener(c, f);
        }
        l != null && setTimeout(this.nextCallback, l);
      }),
      (n.render = function () {
        var l = this.state.status;
        if (l === hr) return null;
        var o = this.props,
          i = o.children;
        o.in,
          o.mountOnEnter,
          o.unmountOnExit,
          o.appear,
          o.enter,
          o.exit,
          o.timeout,
          o.addEndListener,
          o.onEnter,
          o.onEntering,
          o.onEntered,
          o.onExit,
          o.onExiting,
          o.onExited,
          o.nodeRef;
        var s = cf(o, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return at.createElement(
          wf.Provider,
          { value: null },
          typeof i == "function"
            ? i(l, s)
            : at.cloneElement(at.Children.only(i), s)
        );
      }),
      t
    );
  })(at.Component);
_t.contextType = wf;
_t.propTypes = {};
function Sn() {}
_t.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Sn,
  onEntering: Sn,
  onEntered: Sn,
  onExit: Sn,
  onExiting: Sn,
  onExited: Sn,
};
_t.UNMOUNTED = hr;
_t.EXITED = Lt;
_t.ENTERING = be;
_t.ENTERED = yt;
_t.EXITING = Wr;
const xv = _t,
  Oa = (e) =>
    !e || typeof e == "function"
      ? e
      : (t) => {
          e.current = t;
        };
function wv(e, t) {
  const n = Oa(e),
    r = Oa(t);
  return (l) => {
    n && n(l), r && r(l);
  };
}
function Gr(e, t) {
  return g.useMemo(() => wv(e, t), [e, t]);
}
function Sv(e) {
  return e && "setState" in e ? In.findDOMNode(e) : e ?? null;
}
const kv = at.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: l,
        onExited: o,
        addEndListener: i,
        children: s,
        childRef: a,
        ...c
      },
      f
    ) => {
      const v = g.useRef(null),
        p = Gr(v, a),
        x = (k) => {
          p(Sv(k));
        },
        w = (k) => (j) => {
          k && v.current && k(v.current, j);
        },
        S = g.useCallback(w(e), [e]),
        _ = g.useCallback(w(t), [t]),
        m = g.useCallback(w(n), [n]),
        d = g.useCallback(w(r), [r]),
        h = g.useCallback(w(l), [l]),
        y = g.useCallback(w(o), [o]),
        N = g.useCallback(w(i), [i]);
      return u.jsx(xv, {
        ref: f,
        ...c,
        onEnter: S,
        onEntered: m,
        onEntering: _,
        onExit: d,
        onExited: y,
        onExiting: h,
        addEndListener: N,
        nodeRef: v,
        children:
          typeof s == "function"
            ? (k, j) => s(k, { ...j, ref: x })
            : at.cloneElement(s, { ref: x }),
      });
    }
  ),
  Co = kv,
  Cv = 40;
function Ev(e) {
  if (!e || !e.style || !e.parentNode || !e.parentNode.style) return !1;
  const t = getComputedStyle(e);
  return (
    t.display !== "none" &&
    t.visibility !== "hidden" &&
    getComputedStyle(e.parentNode).display !== "none"
  );
}
const Sf = g.forwardRef(({ defaultActiveIndex: e = 0, ...t }, n) => {
  const {
      as: r = "div",
      bsPrefix: l,
      slide: o = !0,
      fade: i = !1,
      controls: s = !0,
      indicators: a = !0,
      indicatorLabels: c = [],
      activeIndex: f,
      onSelect: v,
      onSlide: p,
      onSlid: x,
      interval: w = 5e3,
      keyboard: S = !0,
      onKeyDown: _,
      pause: m = "hover",
      onMouseOver: d,
      onMouseOut: h,
      wrap: y = !0,
      touch: N = !0,
      onTouchStart: k,
      onTouchMove: j,
      onTouchEnd: T,
      prevIcon: A = u.jsx("span", {
        "aria-hidden": "true",
        className: "carousel-control-prev-icon",
      }),
      prevLabel: M = "Previous",
      nextIcon: le = u.jsx("span", {
        "aria-hidden": "true",
        className: "carousel-control-next-icon",
      }),
      nextLabel: ke = "Next",
      variant: de,
      className: Xe,
      children: Ae,
      ...he
    } = su({ defaultActiveIndex: e, ...t }, { activeIndex: "onSelect" }),
    G = ue(l, "carousel"),
    C = pf(),
    O = g.useRef(null),
    [P, I] = g.useState("next"),
    [B, ee] = g.useState(!1),
    [te, Z] = g.useState(!1),
    [D, lt] = g.useState(f || 0);
  g.useEffect(() => {
    !te &&
      f !== D &&
      (O.current ? I(O.current) : I((f || 0) > D ? "next" : "prev"),
      o && Z(!0),
      lt(f || 0));
  }, [f, te, D, o]),
    g.useEffect(() => {
      O.current && (O.current = null);
    });
  let Ye = 0,
    ft;
  nv(Ae, (L, V) => {
    ++Ye, V === f && (ft = L.props.interval);
  });
  const pt = nf(ft),
    ve = g.useCallback(
      (L) => {
        if (te) return;
        let V = D - 1;
        if (V < 0) {
          if (!y) return;
          V = Ye - 1;
        }
        (O.current = "prev"), v == null || v(V, L);
      },
      [te, D, v, y, Ye]
    ),
    Ce = we((L) => {
      if (te) return;
      let V = D + 1;
      if (V >= Ye) {
        if (!y) return;
        V = 0;
      }
      (O.current = "next"), v == null || v(V, L);
    }),
    mt = g.useRef();
  g.useImperativeHandle(n, () => ({ element: mt.current, prev: ve, next: Ce }));
  const ot = we(() => {
      !document.hidden && Ev(mt.current) && (C ? ve() : Ce());
    }),
    U = P === "next" ? "start" : "end";
  Ph(() => {
    o || (p == null || p(D, U), x == null || x(D, U));
  }, [D]);
  const yn = `${G}-item-${P}`,
    en = `${G}-item-${U}`,
    No = g.useCallback(
      (L) => {
        uu(L), p == null || p(D, U);
      },
      [p, D, U]
    ),
    jo = g.useCallback(() => {
      Z(!1), x == null || x(D, U);
    }, [x, D, U]),
    To = g.useCallback(
      (L) => {
        if (S && !/input|textarea/i.test(L.target.tagName))
          switch (L.key) {
            case "ArrowLeft":
              L.preventDefault(), C ? Ce(L) : ve(L);
              return;
            case "ArrowRight":
              L.preventDefault(), C ? ve(L) : Ce(L);
              return;
          }
        _ == null || _(L);
      },
      [S, _, ve, Ce, C]
    ),
    _o = g.useCallback(
      (L) => {
        m === "hover" && ee(!0), d == null || d(L);
      },
      [m, d]
    ),
    Ro = g.useCallback(
      (L) => {
        ee(!1), h == null || h(L);
      },
      [h]
    ),
    er = g.useRef(0),
    xn = g.useRef(0),
    $ = Lh(),
    Rt = g.useCallback(
      (L) => {
        (er.current = L.touches[0].clientX),
          (xn.current = 0),
          m === "hover" && ee(!0),
          k == null || k(L);
      },
      [m, k]
    ),
    Zr = g.useCallback(
      (L) => {
        L.touches && L.touches.length > 1
          ? (xn.current = 0)
          : (xn.current = L.touches[0].clientX - er.current),
          j == null || j(L);
      },
      [j]
    ),
    op = g.useCallback(
      (L) => {
        if (N) {
          const V = xn.current;
          Math.abs(V) > Cv && (V > 0 ? ve(L) : Ce(L));
        }
        m === "hover" &&
          $.set(() => {
            ee(!1);
          }, w || void 0),
          T == null || T(L);
      },
      [N, m, ve, Ce, $, w, T]
    ),
    hu = w != null && !B && !te,
    Oo = g.useRef();
  g.useEffect(() => {
    var L, V;
    if (!hu) return;
    const ht = C ? ve : Ce;
    return (
      (Oo.current = window.setInterval(
        document.visibilityState ? ot : ht,
        (L = (V = pt.current) != null ? V : w) != null ? L : void 0
      )),
      () => {
        Oo.current !== null && clearInterval(Oo.current);
      }
    );
  }, [hu, ve, Ce, pt, w, ot, C]);
  const vu = g.useMemo(
    () =>
      a &&
      Array.from({ length: Ye }, (L, V) => (ht) => {
        v == null || v(V, ht);
      }),
    [a, Ye, v]
  );
  return u.jsxs(r, {
    ref: mt,
    ...he,
    onKeyDown: To,
    onMouseOver: _o,
    onMouseOut: Ro,
    onTouchStart: Rt,
    onTouchMove: Zr,
    onTouchEnd: op,
    className: H(Xe, G, o && "slide", i && `${G}-fade`, de && `${G}-${de}`),
    children: [
      a &&
        u.jsx("div", {
          className: `${G}-indicators`,
          children: Ta(Ae, (L, V) =>
            u.jsx(
              "button",
              {
                type: "button",
                "data-bs-target": "",
                "aria-label": c != null && c.length ? c[V] : `Slide ${V + 1}`,
                className: V === D ? "active" : void 0,
                onClick: vu ? vu[V] : void 0,
                "aria-current": V === D,
              },
              V
            )
          ),
        }),
      u.jsx("div", {
        className: `${G}-inner`,
        children: Ta(Ae, (L, V) => {
          const ht = V === D;
          return o
            ? u.jsx(Co, {
                in: ht,
                onEnter: ht ? No : void 0,
                onEntered: ht ? jo : void 0,
                addEndListener: ko,
                children: (tr, ip) =>
                  g.cloneElement(L, {
                    ...ip,
                    className: H(
                      L.props.className,
                      ht && tr !== "entered" && yn,
                      (tr === "entered" || tr === "exiting") && "active",
                      (tr === "entering" || tr === "exiting") && en
                    ),
                  }),
              })
            : g.cloneElement(L, {
                className: H(L.props.className, ht && "active"),
              });
        }),
      }),
      s &&
        u.jsxs(u.Fragment, {
          children: [
            (y || f !== 0) &&
              u.jsxs(ls, {
                className: `${G}-control-prev`,
                onClick: ve,
                children: [
                  A,
                  M &&
                    u.jsx("span", {
                      className: "visually-hidden",
                      children: M,
                    }),
                ],
              }),
            (y || f !== Ye - 1) &&
              u.jsxs(ls, {
                className: `${G}-control-next`,
                onClick: Ce,
                children: [
                  le,
                  ke &&
                    u.jsx("span", {
                      className: "visually-hidden",
                      children: ke,
                    }),
                ],
              }),
          ],
        }),
    ],
  });
});
Sf.displayName = "Carousel";
const He = Object.assign(Sf, { Caption: ev, Item: tv }),
  gn = g.createContext(null),
  Nv = () => {
    const { language: e } = g.useContext(gn);
    return u.jsxs("div", {
      className: "container row w-100 mx-auto border py-3 mb-4 ",
      children: [
        u.jsx("div", {
          className: "col-md-6 d-flex justify-content-center",
          children: u.jsx("img", {
            className: "img-fluid  rounded ",
            src: "../pexels-tim-samuel-5835362 (2)sm.jpg",
            alt: "",
          }),
        }),
        u.jsxs("div", {
          className: "col-md-6 comments-bg",
          children: [
            u.jsx("h3", {
              className: "text-center mt-3 titleCars",
              children: "Comentarios",
            }),
            u.jsxs(He, {
              interval: 1e4,
              controls: !1,
              className: "carousel-vh ",
              children: [
                u.jsx(He.Item, {
                  children: u.jsx("div", {
                    className: "",
                    children: u.jsx("p", {
                      className: "m-0 ",
                      children: e
                        ? "Taxi Cuba took me to see the most beautiful and authentic places on the island. The driver was very friendly and professional, and the car was in perfect condition. I recommend Taxi Cuba 100%"
                        : "Taxi Cuba me llevó a conocer los lugares más hermosos y auténticos de la isla. El conductor fue muy amable y profesional, y el coche estaba en perfectas condiciones. Recomiendo Taxi Cuba al 100%",
                    }),
                  }),
                }),
                u.jsx(He.Item, {
                  children: u.jsx("div", {
                    className: "",
                    children: u.jsx("p", {
                      className: "m-0 ",
                      children: e
                        ? "Taxi Cuba is the best taxi service I have ever tried. The driver picked me up on time at the airport and we enjoyed everything Cuba has to offer."
                        : "Taxi Cuba es el mejor servicio de taxis que he probado. El conductor me recogió puntualmente en el aeropuerto y disfrutamos de todo lo que Cuba tiene que ofrecer.",
                    }),
                  }),
                }),
                u.jsx(He.Item, {
                  children: u.jsx("div", {
                    className: "",
                    children: u.jsx("p", {
                      className: "m-0 ",
                      children: e
                        ? "I loved traveling with Taxi Cuba. The car was very comfortable and safe. We visited emblematic places and I learned a lot about their history and culture. It is the taxi service that I recommend to everyone who wants to get to know the island"
                        : "Me encantó viajar con Taxi Cuba. El coche era muy cómodo y seguro. Visitamos lugares emblemáticos y aprendí mucho sobre su historia y cultura. Es el servicio de taxis que recomiendo a todos los que quieran conocer la isla.",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  kf = g.forwardRef(
    ({ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...l }, o) => {
      const i = ue(e, "container"),
        s = typeof t == "string" ? `-${t}` : "-fluid";
      return u.jsx(n, { ref: o, ...l, className: H(r, t ? `${i}${s}` : i) });
    }
  );
kf.displayName = "Container";
const Cf = kf,
  Ef = g.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, l) => {
    const o = ue(e, "row"),
      i = df(),
      s = ff(),
      a = `${o}-cols`,
      c = [];
    return (
      i.forEach((f) => {
        const v = r[f];
        delete r[f];
        let p;
        v != null && typeof v == "object" ? ({ cols: p } = v) : (p = v);
        const x = f !== s ? `-${f}` : "";
        p != null && c.push(`${a}${x}-${p}`);
      }),
      u.jsx(n, { ref: l, ...r, className: H(t, o, ...c) })
    );
  });
Ef.displayName = "Row";
const Pa = Ef;
function jv({ as: e, bsPrefix: t, className: n, ...r }) {
  t = ue(t, "col");
  const l = df(),
    o = ff(),
    i = [],
    s = [];
  return (
    l.forEach((a) => {
      const c = r[a];
      delete r[a];
      let f, v, p;
      typeof c == "object" && c != null
        ? ({ span: f, offset: v, order: p } = c)
        : (f = c);
      const x = a !== o ? `-${a}` : "";
      f && i.push(f === !0 ? `${t}${x}` : `${t}${x}-${f}`),
        p != null && s.push(`order${x}-${p}`),
        v != null && s.push(`offset${x}-${v}`);
    }),
    [
      { ...r, className: H(n, ...i, ...s) },
      { as: e, bsPrefix: t, spans: i },
    ]
  );
}
const Nf = g.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: l = "div", bsPrefix: o, spans: i }] =
    jv(e);
  return u.jsx(l, { ...r, ref: t, className: H(n, !i.length && o) });
});
Nf.displayName = "Col";
const li = Nf,
  Hr = { _origin: "https://api.emailjs.com" },
  Tv = (e, t = "https://api.emailjs.com") => {
    (Hr._userID = e), (Hr._origin = t);
  },
  jf = (e, t, n) => {
    if (!e)
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class Ma {
  constructor(t) {
    (this.status = t ? t.status : 0),
      (this.text = t ? t.responseText : "Network Error");
  }
}
const Tf = (e, t, n = {}) =>
    new Promise((r, l) => {
      const o = new XMLHttpRequest();
      o.addEventListener("load", ({ target: i }) => {
        const s = new Ma(i);
        s.status === 200 || s.text === "OK" ? r(s) : l(s);
      }),
        o.addEventListener("error", ({ target: i }) => {
          l(new Ma(i));
        }),
        o.open("POST", Hr._origin + e, !0),
        Object.keys(n).forEach((i) => {
          o.setRequestHeader(i, n[i]);
        }),
        o.send(t);
    }),
  _v = (e, t, n, r) => {
    const l = r || Hr._userID;
    return (
      jf(l, e, t),
      Tf(
        "/api/v1.0/email/send",
        JSON.stringify({
          lib_version: "3.11.0",
          user_id: l,
          service_id: e,
          template_id: t,
          template_params: n,
        }),
        { "Content-type": "application/json" }
      )
    );
  },
  Rv = (e) => {
    let t;
    if (
      (typeof e == "string" ? (t = document.querySelector(e)) : (t = e),
      !t || t.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return t;
  },
  Ov = (e, t, n, r) => {
    const l = r || Hr._userID,
      o = Rv(n);
    jf(l, e, t);
    const i = new FormData(o);
    return (
      i.append("lib_version", "3.11.0"),
      i.append("service_id", e),
      i.append("template_id", t),
      i.append("user_id", l),
      Tf("/api/v1.0/email/send-form", i)
    );
  },
  Pv = { init: Tv, send: _v, sendForm: Ov },
  Mv = () =>
    u.jsx("svg", {
      className: "svg",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      children: u.jsx("path", {
        d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
      }),
    }),
  Lv = () =>
    u.jsx("svg", {
      className: "svgWhatsapp",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      children: u.jsx("path", {
        d: "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z",
      }),
    }),
  zv = () =>
    u.jsx("svg", {
      className: "svg",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      children: u.jsx("path", {
        d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
      }),
    }),
  Iv = () =>
    u.jsx("svg", {
      className: "svg",
      fill: "currentColor",
      viewBox: "0 0 16 16",
      children: u.jsx("path", {
        d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z",
      }),
    }),
  Dv = () => {
    const e = g.useRef(),
      { language: t } = g.useContext(gn),
      n = (r) => {
        r.preventDefault(),
          Pv.sendForm(
            "service_8vlojj4",
            "template_quv6ofk",
            e.current,
            "SPkXvX_RCPuhsK88h"
          ).then(
            (l) => {
              console.log(l.text);
            },
            (l) => {
              console.log(l.text);
            }
          );
      };
    return u.jsx("div", {
      id: "footer",
      className: "bg-dark pt-4",
      children: u.jsxs(Cf, {
        className: "flex-column footer-text-color",
        children: [
          u.jsxs(Pa, {
            className: "w-100",
            children: [
              u.jsxs(li, {
                md: 6,
                children: [
                  u.jsx("h2", {
                    className: "footer-title py-2",
                    children: t ? "Contact details" : "Detalles de contacto",
                  }),
                  u.jsx("h5", {
                    className: "m-0",
                    children: t ? "General Manager" : "Gerente general",
                  }),
                  u.jsx("h2", {
                    className: "mb-3 footer-info-color",
                    children: "Oriel ... ...",
                  }),
                  u.jsx("h5", {
                    className: "m-0",
                    children: t ? "Phone number" : "Numero de telefono",
                  }),
                  u.jsx("a", {
                    href: "tel:5353760295",
                    className: "mb-5 footer-info-color",
                    children: "+53 53760295",
                  }),
                ],
              }),
              u.jsx(li, {
                md: 6,
                className: "pt-4",
                children: u.jsxs("form", {
                  ref: e,
                  onSubmit: n,
                  className: "px-auto",
                  children: [
                    u.jsxs("div", {
                      className: "mb-3",
                      children: [
                        u.jsx("label", {
                          className: "form-label",
                          children: "Email",
                        }),
                        u.jsx("input", {
                          name: "user_email",
                          className: "form-control",
                          placeholder: "You Email",
                          type: "email",
                          autoComplete: "off",
                          required: !0,
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "mb-3",
                      children: [
                        u.jsx("label", {
                          className: "form-label",
                          children: t ? "Comments" : "Comentarios",
                        }),
                        u.jsx("textarea", {
                          name: "message",
                          className: "form-control resize",
                          placeholder: "write your Comments",
                          autoComplete: "off",
                          required: !0,
                        }),
                      ],
                    }),
                    u.jsx("div", {
                      className: "mb-3",
                      children: u.jsx("button", {
                        className: "btn btn-lg btn-warning",
                        type: "submit",
                        children: t ? "Submit" : "Enviar",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          u.jsx(Pa, {
            className: "w-100 pt-3",
            children: u.jsx(li, {
              children: u.jsxs("section", {
                className: "container text-center",
                children: [
                  u.jsxs("nav", {
                    className: "d-flex justify-content-evenly py-2 footer-link",
                    children: [
                      u.jsx("a", { children: u.jsx(Mv, {}) }),
                      u.jsx("a", { children: u.jsx(zv, {}) }),
                      u.jsx("a", { children: u.jsx(Iv, {}) }),
                    ],
                  }),
                  u.jsxs("small", {
                    className: "d-inline-block mb-3",
                    children: [
                      "©",
                      t
                        ? "2023 TaxiVaradero your best option"
                        : "TaxiVaradero 2023 tu mejor opción",
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    });
  };
Dt.string, Dt.bool, Dt.bool, Dt.bool, Dt.bool;
const _f = g.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      fluid: n = !1,
      rounded: r = !1,
      roundedCircle: l = !1,
      thumbnail: o = !1,
      ...i
    },
    s
  ) => (
    (e = ue(e, "img")),
    u.jsx("img", {
      ref: s,
      ...i,
      className: H(
        t,
        n && `${e}-fluid`,
        r && "rounded",
        l && "rounded-circle",
        o && `${e}-thumbnail`
      ),
    })
  )
);
_f.displayName = "Image";
const et = _f,
  $v = () => {
    const { language: e } = g.useContext(gn);
    return u.jsxs(u.Fragment, {
      children: [
        u.jsxs("div", {
          className: "d-flex justify-content-center",
          children: [
            u.jsxs("div", {
              className:
                "home-bg-article rounded position text-center text-white position-h1",
              children: [
                u.jsx("h1", {
                  className: "color-h1 m-0 p-3 fs-2 ",
                  children: e
                    ? "Taxi from Varadero to Cuba"
                    : "Taxi desde Varadero hacia Cuba",
                }),
                u.jsx("p", {
                  className: "",
                  children: e
                    ? "the best way to get to know the island"
                    : "el mejor modo de conocer la isla",
                }),
              ],
            }),
            u.jsx("button", {
              className: "btn btn-lg btn-warning position position-b",
              children: u.jsx("a", {
                href: "#footer",
                children: e ? "Contact" : "Contáctanos",
              }),
            }),
          ],
        }),
        u.jsxs(He, {
          fade: !0,
          controls: !1,
          children: [
            u.jsxs(He.Item, {
              children: [
                u.jsx(et, {
                  className: "d-md-none h-100vh w-100",
                  src: "../fotis-fotopoulos-7_r85l4eht8-unsplash (1)sm (1).jpg",
                }),
                u.jsx(et, {
                  className: "d-none d-md-block h-100vh w-100",
                  src: "../fotis-fotopoulos-7_r85l4eht8-unsplash (2)lg.jpg",
                }),
              ],
            }),
            u.jsxs(He.Item, {
              children: [
                u.jsx(et, {
                  className: "d-md-none h-100vh w-100",
                  src: "../pexels-life-of-pix-8247 (2)sm.jpg",
                }),
                u.jsx(et, {
                  className: "d-none d-md-block h-100vh w-100",
                  src: "../pexels-life-of-pix-8247lg.jpg",
                }),
              ],
            }),
            u.jsxs(He.Item, {
              children: [
                u.jsx(et, {
                  className: "d-md-none h-100vh w-100",
                  src: "../taxi-gacelas-jorge-ricardo-2023-2-1024x683.jpg",
                }),
                u.jsx(et, {
                  className: "d-none d-md-block h-100vh w-100",
                  src: "../taxi-gacelas-jorge-ricardo-2023-2-1024x683.jpg",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
var hl;
function La(e) {
  if (((!hl && hl !== 0) || e) && Jn) {
    var t = document.createElement("div");
    (t.style.position = "absolute"),
      (t.style.top = "-9999px"),
      (t.style.width = "50px"),
      (t.style.height = "50px"),
      (t.style.overflow = "scroll"),
      document.body.appendChild(t),
      (hl = t.offsetWidth - t.clientWidth),
      document.body.removeChild(t);
  }
  return hl;
}
function oi(e) {
  e === void 0 && (e = So());
  try {
    var t = e.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e.body;
  }
}
function za(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
const Fv = "data-rr-ui-",
  Av = "rrUi";
function Eo(e) {
  return `${Fv}${e}`;
}
function Bv(e) {
  return `${Av}${e}`;
}
function Uv(e = document) {
  const t = e.defaultView;
  return Math.abs(t.innerWidth - e.documentElement.clientWidth);
}
const Ia = Eo("modal-open");
class Wv {
  constructor({
    ownerDocument: t,
    handleContainerOverflow: n = !0,
    isRTL: r = !1,
  } = {}) {
    (this.handleContainerOverflow = n),
      (this.isRTL = r),
      (this.modals = []),
      (this.ownerDocument = t);
  }
  getScrollbarWidth() {
    return Uv(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(t) {}
  removeModalAttributes(t) {}
  setContainerStyle(t) {
    const n = { overflow: "hidden" },
      r = this.isRTL ? "paddingLeft" : "paddingRight",
      l = this.getElement();
    (t.style = { overflow: l.style.overflow, [r]: l.style[r] }),
      t.scrollBarWidth &&
        (n[r] = `${parseInt(kt(l, r) || "0", 10) + t.scrollBarWidth}px`),
      l.setAttribute(Ia, ""),
      kt(l, n);
  }
  reset() {
    [...this.modals].forEach((t) => this.remove(t));
  }
  removeContainerStyle(t) {
    const n = this.getElement();
    n.removeAttribute(Ia), Object.assign(n.style, t.style);
  }
  add(t) {
    let n = this.modals.indexOf(t);
    return (
      n !== -1 ||
        ((n = this.modals.length),
        this.modals.push(t),
        this.setModalAttributes(t),
        n !== 0) ||
        ((this.state = { scrollBarWidth: this.getScrollbarWidth(), style: {} }),
        this.handleContainerOverflow && this.setContainerStyle(this.state)),
      n
    );
  }
  remove(t) {
    const n = this.modals.indexOf(t);
    n !== -1 &&
      (this.modals.splice(n, 1),
      !this.modals.length &&
        this.handleContainerOverflow &&
        this.removeContainerStyle(this.state),
      this.removeModalAttributes(t));
  }
  isTopModal(t) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === t;
  }
}
const au = Wv,
  Rf = g.createContext(Jn ? window : void 0);
Rf.Provider;
function cu() {
  return g.useContext(Rf);
}
const ii = (e, t) =>
  Jn
    ? e == null
      ? (t || So()).body
      : (typeof e == "function" && (e = e()),
        e && "current" in e && (e = e.current),
        e && ("nodeType" in e || e.getBoundingClientRect) ? e : null)
    : null;
function Hv(e, t) {
  const n = cu(),
    [r, l] = g.useState(() => ii(e, n == null ? void 0 : n.document));
  if (!r) {
    const o = ii(e);
    o && l(o);
  }
  return (
    g.useEffect(() => {
      t && r && t(r);
    }, [t, r]),
    g.useEffect(() => {
      const o = ii(e);
      o !== r && l(o);
    }, [e, r]),
    r
  );
}
function Vv({
  children: e,
  in: t,
  onExited: n,
  mountOnEnter: r,
  unmountOnExit: l,
}) {
  const o = g.useRef(null),
    i = g.useRef(t),
    s = we(n);
  g.useEffect(() => {
    t ? (i.current = !0) : s(o.current);
  }, [t, s]);
  const a = Gr(o, e.ref),
    c = g.cloneElement(e, { ref: a });
  return t ? c : l || (!i.current && r) ? null : c;
}
function Kv({ in: e, onTransition: t }) {
  const n = g.useRef(null),
    r = g.useRef(!0),
    l = we(t);
  return (
    rs(() => {
      if (!n.current) return;
      let o = !1;
      return (
        l({ in: e, element: n.current, initial: r.current, isStale: () => o }),
        () => {
          o = !0;
        }
      );
    }, [e, l]),
    rs(
      () => (
        (r.current = !1),
        () => {
          r.current = !0;
        }
      ),
      []
    ),
    n
  );
}
function Qv({ children: e, in: t, onExited: n, onEntered: r, transition: l }) {
  const [o, i] = g.useState(!t);
  t && o && i(!1);
  const s = Kv({
      in: !!t,
      onTransition: (c) => {
        const f = () => {
          c.isStale() ||
            (c.in
              ? r == null || r(c.element, c.initial)
              : (i(!0), n == null || n(c.element)));
        };
        Promise.resolve(l(c)).then(f, (v) => {
          throw (c.in || i(!0), v);
        });
      },
    }),
    a = Gr(s, e.ref);
  return o && !t ? null : g.cloneElement(e, { ref: a });
}
function Da(e, t, n) {
  return e
    ? u.jsx(e, Object.assign({}, n))
    : t
    ? u.jsx(Qv, Object.assign({}, n, { transition: t }))
    : u.jsx(Vv, Object.assign({}, n));
}
function Xv(e) {
  return e.code === "Escape" || e.keyCode === 27;
}
const Yv = [
  "show",
  "role",
  "className",
  "style",
  "children",
  "backdrop",
  "keyboard",
  "onBackdropClick",
  "onEscapeKeyDown",
  "transition",
  "runTransition",
  "backdropTransition",
  "runBackdropTransition",
  "autoFocus",
  "enforceFocus",
  "restoreFocus",
  "restoreFocusOptions",
  "renderDialog",
  "renderBackdrop",
  "manager",
  "container",
  "onShow",
  "onHide",
  "onExit",
  "onExited",
  "onExiting",
  "onEnter",
  "onEntering",
  "onEntered",
];
function Gv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
let si;
function Zv(e) {
  return (
    si || (si = new au({ ownerDocument: e == null ? void 0 : e.document })), si
  );
}
function qv(e) {
  const t = cu(),
    n = e || Zv(t),
    r = g.useRef({ dialog: null, backdrop: null });
  return Object.assign(r.current, {
    add: () => n.add(r.current),
    remove: () => n.remove(r.current),
    isTopModal: () => n.isTopModal(r.current),
    setDialogRef: g.useCallback((l) => {
      r.current.dialog = l;
    }, []),
    setBackdropRef: g.useCallback((l) => {
      r.current.backdrop = l;
    }, []),
  });
}
const Of = g.forwardRef((e, t) => {
  let {
      show: n = !1,
      role: r = "dialog",
      className: l,
      style: o,
      children: i,
      backdrop: s = !0,
      keyboard: a = !0,
      onBackdropClick: c,
      onEscapeKeyDown: f,
      transition: v,
      runTransition: p,
      backdropTransition: x,
      runBackdropTransition: w,
      autoFocus: S = !0,
      enforceFocus: _ = !0,
      restoreFocus: m = !0,
      restoreFocusOptions: d,
      renderDialog: h,
      renderBackdrop: y = (U) => u.jsx("div", Object.assign({}, U)),
      manager: N,
      container: k,
      onShow: j,
      onHide: T = () => {},
      onExit: A,
      onExited: M,
      onExiting: le,
      onEnter: ke,
      onEntering: de,
      onEntered: Xe,
    } = e,
    Ae = Gv(e, Yv);
  const he = cu(),
    G = Hv(k),
    C = qv(N),
    O = rf(),
    P = Ih(n),
    [I, B] = g.useState(!n),
    ee = g.useRef(null);
  g.useImperativeHandle(t, () => C, [C]),
    Jn && !P && n && (ee.current = oi(he == null ? void 0 : he.document)),
    n && I && B(!1);
  const te = we(() => {
      if (
        (C.add(),
        (pt.current = eo(document, "keydown", Ye)),
        (ft.current = eo(document, "focus", () => setTimeout(D), !0)),
        j && j(),
        S)
      ) {
        var U, yn;
        const en = oi(
          (U = (yn = C.dialog) == null ? void 0 : yn.ownerDocument) != null
            ? U
            : he == null
            ? void 0
            : he.document
        );
        C.dialog &&
          en &&
          !za(C.dialog, en) &&
          ((ee.current = en), C.dialog.focus());
      }
    }),
    Z = we(() => {
      if (
        (C.remove(),
        pt.current == null || pt.current(),
        ft.current == null || ft.current(),
        m)
      ) {
        var U;
        (U = ee.current) == null || U.focus == null || U.focus(d),
          (ee.current = null);
      }
    });
  g.useEffect(() => {
    !n || !G || te();
  }, [n, G, te]),
    g.useEffect(() => {
      I && Z();
    }, [I, Z]),
    iu(() => {
      Z();
    });
  const D = we(() => {
      if (!_ || !O() || !C.isTopModal()) return;
      const U = oi(he == null ? void 0 : he.document);
      C.dialog && U && !za(C.dialog, U) && C.dialog.focus();
    }),
    lt = we((U) => {
      U.target === U.currentTarget && (c == null || c(U), s === !0 && T());
    }),
    Ye = we((U) => {
      a &&
        Xv(U) &&
        C.isTopModal() &&
        (f == null || f(U), U.defaultPrevented || T());
    }),
    ft = g.useRef(),
    pt = g.useRef(),
    ve = (...U) => {
      B(!0), M == null || M(...U);
    };
  if (!G) return null;
  const Ce = Object.assign(
    {
      role: r,
      ref: C.setDialogRef,
      "aria-modal": r === "dialog" ? !0 : void 0,
    },
    Ae,
    { style: o, className: l, tabIndex: -1 }
  );
  let mt = h
    ? h(Ce)
    : u.jsx(
        "div",
        Object.assign({}, Ce, {
          children: g.cloneElement(i, { role: "document" }),
        })
      );
  mt = Da(v, p, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!n,
    onExit: A,
    onExiting: le,
    onExited: ve,
    onEnter: ke,
    onEntering: de,
    onEntered: Xe,
    children: mt,
  });
  let ot = null;
  return (
    s &&
      ((ot = y({ ref: C.setBackdropRef, onClick: lt })),
      (ot = Da(x, w, {
        in: !!n,
        appear: !0,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: ot,
      }))),
    u.jsx(u.Fragment, {
      children: In.createPortal(u.jsxs(u.Fragment, { children: [ot, mt] }), G),
    })
  );
});
Of.displayName = "Modal";
const Pf = Object.assign(Of, { Manager: au });
function Jv(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " "
      ) !== -1;
}
function bv(e, t) {
  e.classList
    ? e.classList.add(t)
    : Jv(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t
          ));
}
var e0 = Function.prototype.bind.call(Function.prototype.call, [].slice);
function rn(e, t) {
  return e0(e.querySelectorAll(t));
}
function $a(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function t0(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = $a(e.className, t))
    : e.setAttribute(
        "class",
        $a((e.className && e.className.baseVal) || "", t)
      );
}
const kn = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler",
};
class Mf extends au {
  adjustAndStore(t, n, r) {
    const l = n.style[t];
    (n.dataset[t] = l), kt(n, { [t]: `${parseFloat(kt(n, t)) + r}px` });
  }
  restore(t, n) {
    const r = n.dataset[t];
    r !== void 0 && (delete n.dataset[t], kt(n, { [t]: r }));
  }
  setContainerStyle(t) {
    super.setContainerStyle(t);
    const n = this.getElement();
    if ((bv(n, "modal-open"), !t.scrollBarWidth)) return;
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      l = this.isRTL ? "marginLeft" : "marginRight";
    rn(n, kn.FIXED_CONTENT).forEach((o) =>
      this.adjustAndStore(r, o, t.scrollBarWidth)
    ),
      rn(n, kn.STICKY_CONTENT).forEach((o) =>
        this.adjustAndStore(l, o, -t.scrollBarWidth)
      ),
      rn(n, kn.NAVBAR_TOGGLER).forEach((o) =>
        this.adjustAndStore(l, o, t.scrollBarWidth)
      );
  }
  removeContainerStyle(t) {
    super.removeContainerStyle(t);
    const n = this.getElement();
    t0(n, "modal-open");
    const r = this.isRTL ? "paddingLeft" : "paddingRight",
      l = this.isRTL ? "marginLeft" : "marginRight";
    rn(n, kn.FIXED_CONTENT).forEach((o) => this.restore(r, o)),
      rn(n, kn.STICKY_CONTENT).forEach((o) => this.restore(l, o)),
      rn(n, kn.NAVBAR_TOGGLER).forEach((o) => this.restore(l, o));
  }
}
let ui;
function Lf(e) {
  return ui || (ui = new Mf(e)), ui;
}
const n0 = Mf,
  r0 = { [be]: "show", [yt]: "show" },
  zf = g.forwardRef(
    (
      {
        className: e,
        children: t,
        transitionClasses: n = {},
        onEnter: r,
        ...l
      },
      o
    ) => {
      const i = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          ...l,
        },
        s = g.useCallback(
          (a, c) => {
            uu(a), r == null || r(a, c);
          },
          [r]
        );
      return u.jsx(Co, {
        ref: o,
        addEndListener: ko,
        ...i,
        onEnter: s,
        childRef: t.ref,
        children: (a, c) =>
          g.cloneElement(t, {
            ...c,
            className: H("fade", e, t.props.className, r0[a], n[a]),
          }),
      });
    }
  );
zf.displayName = "Fade";
const du = zf,
  l0 = bt("modal-body"),
  o0 = g.createContext({ onHide() {} }),
  fu = o0,
  If = g.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        contentClassName: n,
        centered: r,
        size: l,
        fullscreen: o,
        children: i,
        scrollable: s,
        ...a
      },
      c
    ) => {
      e = ue(e, "modal");
      const f = `${e}-dialog`,
        v = typeof o == "string" ? `${e}-fullscreen-${o}` : `${e}-fullscreen`;
      return u.jsx("div", {
        ...a,
        ref: c,
        className: H(
          f,
          t,
          l && `${e}-${l}`,
          r && `${f}-centered`,
          s && `${f}-scrollable`,
          o && v
        ),
        children: u.jsx("div", {
          className: H(`${e}-content`, n),
          children: i,
        }),
      });
    }
  );
If.displayName = "ModalDialog";
const Df = If,
  i0 = bt("modal-footer"),
  s0 = {
    "aria-label": Dt.string,
    onClick: Dt.func,
    variant: Dt.oneOf(["white"]),
  },
  pu = g.forwardRef(
    ({ className: e, variant: t, "aria-label": n = "Close", ...r }, l) =>
      u.jsx("button", {
        ref: l,
        type: "button",
        className: H("btn-close", t && `btn-close-${t}`, e),
        "aria-label": n,
        ...r,
      })
  );
pu.displayName = "CloseButton";
pu.propTypes = s0;
const u0 = pu,
  a0 = g.forwardRef(
    (
      {
        closeLabel: e = "Close",
        closeVariant: t,
        closeButton: n = !1,
        onHide: r,
        children: l,
        ...o
      },
      i
    ) => {
      const s = g.useContext(fu),
        a = we(() => {
          s == null || s.onHide(), r == null || r();
        });
      return u.jsxs("div", {
        ref: i,
        ...o,
        children: [
          l,
          n && u.jsx(u0, { "aria-label": e, variant: t, onClick: a }),
        ],
      });
    }
  ),
  $f = a0,
  Ff = g.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        closeLabel: n = "Close",
        closeButton: r = !1,
        ...l
      },
      o
    ) => (
      (e = ue(e, "modal-header")),
      u.jsx($f, {
        ref: o,
        ...l,
        className: H(t, e),
        closeLabel: n,
        closeButton: r,
      })
    )
  );
Ff.displayName = "ModalHeader";
const c0 = Ff,
  Af = (e) =>
    g.forwardRef((t, n) =>
      u.jsx("div", { ...t, ref: n, className: H(t.className, e) })
    ),
  d0 = Af("h4"),
  f0 = bt("modal-title", { Component: d0 });
function p0(e) {
  return u.jsx(du, { ...e, timeout: null });
}
function m0(e) {
  return u.jsx(du, { ...e, timeout: null });
}
const Bf = g.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      style: n,
      dialogClassName: r,
      contentClassName: l,
      children: o,
      dialogAs: i = Df,
      "aria-labelledby": s,
      "aria-describedby": a,
      "aria-label": c,
      show: f = !1,
      animation: v = !0,
      backdrop: p = !0,
      keyboard: x = !0,
      onEscapeKeyDown: w,
      onShow: S,
      onHide: _,
      container: m,
      autoFocus: d = !0,
      enforceFocus: h = !0,
      restoreFocus: y = !0,
      restoreFocusOptions: N,
      onEntered: k,
      onExit: j,
      onExiting: T,
      onEnter: A,
      onEntering: M,
      onExited: le,
      backdropClassName: ke,
      manager: de,
      ...Xe
    },
    Ae
  ) => {
    const [he, G] = g.useState({}),
      [C, O] = g.useState(!1),
      P = g.useRef(!1),
      I = g.useRef(!1),
      B = g.useRef(null),
      [ee, te] = zh(),
      Z = Gr(Ae, te),
      D = we(_),
      lt = pf();
    e = ue(e, "modal");
    const Ye = g.useMemo(() => ({ onHide: D }), [D]);
    function ft() {
      return de || Lf({ isRTL: lt });
    }
    function pt($) {
      if (!Jn) return;
      const Rt = ft().getScrollbarWidth() > 0,
        Zr = $.scrollHeight > So($).documentElement.clientHeight;
      G({
        paddingRight: Rt && !Zr ? La() : void 0,
        paddingLeft: !Rt && Zr ? La() : void 0,
      });
    }
    const ve = we(() => {
      ee && pt(ee.dialog);
    });
    iu(() => {
      as(window, "resize", ve), B.current == null || B.current();
    });
    const Ce = () => {
        P.current = !0;
      },
      mt = ($) => {
        P.current && ee && $.target === ee.dialog && (I.current = !0),
          (P.current = !1);
      },
      ot = () => {
        O(!0),
          (B.current = vf(ee.dialog, () => {
            O(!1);
          }));
      },
      U = ($) => {
        $.target === $.currentTarget && ot();
      },
      yn = ($) => {
        if (p === "static") {
          U($);
          return;
        }
        if (I.current || $.target !== $.currentTarget) {
          I.current = !1;
          return;
        }
        _ == null || _();
      },
      en = ($) => {
        x ? w == null || w($) : ($.preventDefault(), p === "static" && ot());
      },
      No = ($, Rt) => {
        $ && pt($), A == null || A($, Rt);
      },
      jo = ($) => {
        B.current == null || B.current(), j == null || j($);
      },
      To = ($, Rt) => {
        M == null || M($, Rt), hf(window, "resize", ve);
      },
      _o = ($) => {
        $ && ($.style.display = ""),
          le == null || le($),
          as(window, "resize", ve);
      },
      Ro = g.useCallback(
        ($) =>
          u.jsx("div", {
            ...$,
            className: H(`${e}-backdrop`, ke, !v && "show"),
          }),
        [v, ke, e]
      ),
      er = { ...n, ...he };
    er.display = "block";
    const xn = ($) =>
      u.jsx("div", {
        role: "dialog",
        ...$,
        style: er,
        className: H(t, e, C && `${e}-static`, !v && "show"),
        onClick: p ? yn : void 0,
        onMouseUp: mt,
        "aria-label": c,
        "aria-labelledby": s,
        "aria-describedby": a,
        children: u.jsx(i, {
          ...Xe,
          onMouseDown: Ce,
          className: r,
          contentClassName: l,
          children: o,
        }),
      });
    return u.jsx(fu.Provider, {
      value: Ye,
      children: u.jsx(Pf, {
        show: f,
        ref: Z,
        backdrop: p,
        container: m,
        keyboard: !0,
        autoFocus: d,
        enforceFocus: h,
        restoreFocus: y,
        restoreFocusOptions: N,
        onEscapeKeyDown: en,
        onShow: S,
        onHide: _,
        onEnter: No,
        onEntering: To,
        onEntered: k,
        onExit: jo,
        onExiting: T,
        onExited: _o,
        manager: ft(),
        transition: v ? p0 : void 0,
        backdropTransition: v ? m0 : void 0,
        renderBackdrop: Ro,
        renderDialog: xn,
      }),
    });
  }
);
Bf.displayName = "Modal";
const At = Object.assign(Bf, {
    Body: l0,
    Header: c0,
    Title: f0,
    Footer: i0,
    Dialog: Df,
    TRANSITION_DURATION: 300,
    BACKDROP_TRANSITION_DURATION: 150,
  }),
  h0 = ({ show: e, handleClose: t, sitie: n }) => {
    const r = (s) => {
        switch (s) {
          case 0:
            return "Viñales";
          case 1:
            return "Las Terrazas";
          case 2:
            return "Soroa";
          case 3:
            return "La Habana";
          case 4:
            return "Matanzas";
          case 5:
            return "Ciénaga de Zapata";
          case 6:
            return "Varadero";
          case 7:
            return "Cienfuegos";
          case 8:
            return "Trinidad";
          case 9:
            return "Santa Clara";
        }
      },
      l = (s) => {
        switch (s) {
          case 0:
            return "../vinales.jpg";
          case 1:
            return "../terrazas.jpg";
          case 2:
            return "../soroa.JPG";
          case 3:
            return "../habana.png";
          case 4:
            return "../matanzas.jpg";
          case 5:
            return "../Zienaga.jpg";
          case 6:
            return "../varadero.jpg";
          case 7:
            return "../cienfuegos.jpg";
          case 8:
            return "../trinidad.jpg";
          case 9:
            return "../santaClara.jpg";
        }
      },
      o = (s) => {
        switch (s) {
          case 0:
            return "titulo algo asi quiero poner";
          case 1:
            return "titulo algo asi quiero poner";
          case 2:
            return "titulo algo asi quiero poner";
          case 3:
            return "titulo algo asi quiero poner";
          case 4:
            return "titulo algo asi quiero poner";
          case 5:
            return "titulo algo asi quiero poner";
          case 6:
            return "titulo algo asi quiero poner";
          case 7:
            return "titulo algo asi quiero poner";
          case 8:
            return "titulo algo asi quiero poner";
          case 9:
            return "titulo algo asi quiero poner";
        }
      },
      i = (s) => {
        switch (s) {
          case 0:
            return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
          case 1:
            return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
          case 2:
            return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
          case 3:
            return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
          case 4:
            return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
          case 5:
            return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
          case 6:
            return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
          case 7:
            return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
          case 8:
            return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
          case 9:
            return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis deleniti, eos eius mollitia illo unde!";
        }
      };
    return u.jsx(u.Fragment, {
      children: u.jsxs(At, {
        className: "service-transition ",
        show: e,
        onHide: t,
        centered: !0,
        size: "xl",
        children: [
          u.jsx(At.Header, {
            closeButton: !0,
            children: u.jsxs(At.Title, {
              className: "display-5 fs-w",
              children: [
                u.jsx("img", {
                  className: "modalIcon",
                  src: "../icons/citie-icon.png",
                  alt: "icon-img",
                }),
                r(n),
              ],
            }),
          }),
          u.jsx(At.Body, {
            children: u.jsxs("div", {
              className: "row",
              children: [
                u.jsx("div", {
                  className: "col-lg-6 text-center modalMap-carousel",
                  children: u.jsxs(He, {
                    fade: !0,
                    controls: !1,
                    children: [
                      u.jsx(He.Item, {
                        className: "",
                        children: u.jsx(et, {
                          className: "img-fluid w-100 h-30vh",
                          src: l(n),
                        }),
                      }),
                      u.jsx(He.Item, {
                        children: u.jsx(et, {
                          className: "img-fluid w-100 h-30vh",
                          src: "../default-image.jpg",
                        }),
                      }),
                      u.jsx(He.Item, {
                        children: u.jsx(et, {
                          className: "img-fluid w-100 h-30vh",
                          src: "../default-image.jpg",
                        }),
                      }),
                    ],
                  }),
                }),
                u.jsxs("div", {
                  className: "col-lg-6",
                  children: [
                    u.jsx("h3", { className: "pt-2", children: o(n) }),
                    u.jsx("p", { children: i(n) }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  v0 = () => {
    const [e, t] = g.useState(!1),
      [n, r] = g.useState(!1),
      l = () => r(!1),
      o = () => r(!0),
      i = [],
      s = [
        "Viñales",
        "Las_Terrazas",
        "Soroa",
        "Habana",
        "Matanzas",
        "Cienaga_de_Zapata",
        "Varadero",
        "Cienfuegos",
        "Trinidad",
        "Santa_Clara",
      ],
      a = (c) => {
        o(), t(c);
      };
    for (let c = 0; c < 10; c++) {
      const f = u.jsx(
        "img",
        {
          title: s[c],
          src: "../icons/geo-alt-fill.svg",
          className: `mapCuba-size ${s[c]}`,
          onClick: () => (window.innerWidth < 500 ? a(c) : null),
          onMouseEnter: () => (window.innerWidth > 500 ? a(c) : null),
        },
        c
      );
      i.push(f);
    }
    return u.jsxs("div", {
      id: "mapCuba",
      className: "bg-mapa d-relative",
      children: [
        u.jsxs("div", {
          className: "container text-center",
          children: [
            u.jsx("h2", { className: "pb-4", children: "Sitios" }),
            u.jsxs("div", {
              className: "p-relative",
              children: [
                u.jsx("img", {
                  className: "d-md-none img-fluid",
                  src: "../icons/mapaCuba-sm.png",
                }),
                u.jsx("img", {
                  className: "d-none d-md-block img-fluid mx-auto max-w",
                  src: "../icons/mapaCuba-lg.png",
                  alt: "cuba-mapa",
                }),
                i.map((c) => c),
              ],
            }),
          ],
        }),
        u.jsx(h0, { show: n, handleClose: l, sitie: e }),
      ],
    });
  };
var Fa = { exports: {} },
  cs = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
  function n(r) {
    function l(i, s, a, c, f, v) {
      var p = c || "<<anonymous>>",
        x = v || a;
      if (s[a] == null)
        return i
          ? new Error(
              "Required " +
                f +
                " `" +
                x +
                "` was not specified " +
                ("in `" + p + "`.")
            )
          : null;
      for (
        var w = arguments.length, S = Array(w > 6 ? w - 6 : 0), _ = 6;
        _ < w;
        _++
      )
        S[_ - 6] = arguments[_];
      return r.apply(void 0, [s, a, p, f, x].concat(S));
    }
    var o = l.bind(null, !1);
    return (o.isRequired = l.bind(null, !0)), o;
  }
  e.exports = t.default;
})(cs, cs.exports);
var g0 = cs.exports;
(function (e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = o);
  var n = g0,
    r = l(n);
  function l(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function o() {
    for (var i = arguments.length, s = Array(i), a = 0; a < i; a++)
      s[a] = arguments[a];
    function c() {
      for (var f = arguments.length, v = Array(f), p = 0; p < f; p++)
        v[p] = arguments[p];
      var x = null;
      return (
        s.forEach(function (w) {
          if (x == null) {
            var S = w.apply(void 0, v);
            S != null && (x = S);
          }
        }),
        x
      );
    }
    return (0, r.default)(c);
  }
  e.exports = t.default;
})(Fa, Fa.exports);
function y0() {
  const [, e] = g.useReducer((t) => !t, !1);
  return e;
}
const Uf = g.createContext(null);
Uf.displayName = "NavContext";
const Wf = Uf,
  x0 = g.createContext(null),
  mu = (e, t = null) => (e != null ? String(e) : t || null),
  to = x0,
  w0 = g.createContext(null),
  Hf = w0,
  S0 = ["as", "active", "eventKey"];
function k0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Vf({ key: e, onClick: t, active: n, id: r, role: l, disabled: o }) {
  const i = g.useContext(to),
    s = g.useContext(Wf),
    a = g.useContext(Hf);
  let c = n;
  const f = { role: l };
  if (s) {
    !l && s.role === "tablist" && (f.role = "tab");
    const v = s.getControllerId(e ?? null),
      p = s.getControlledId(e ?? null);
    (f[Eo("event-key")] = e),
      (f.id = v || r),
      (c = n == null && e != null ? s.activeKey === e : n),
      (c ||
        (!(a != null && a.unmountOnExit) && !(a != null && a.mountOnEnter))) &&
        (f["aria-controls"] = p);
  }
  return (
    f.role === "tab" &&
      ((f["aria-selected"] = c),
      c || (f.tabIndex = -1),
      o && ((f.tabIndex = -1), (f["aria-disabled"] = !0))),
    (f.onClick = we((v) => {
      o ||
        (t == null || t(v),
        e != null && i && !v.isPropagationStopped() && i(e, v));
    })),
    [f, { isActive: c }]
  );
}
const Kf = g.forwardRef((e, t) => {
  let { as: n = sf, active: r, eventKey: l } = e,
    o = k0(e, S0);
  const [i, s] = Vf(Object.assign({ key: mu(l, o.href), active: r }, o));
  return (
    (i[Eo("active")] = s.isActive),
    u.jsx(n, Object.assign({}, o, i, { ref: t }))
  );
});
Kf.displayName = "NavItem";
const C0 = Kf,
  E0 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function N0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const Aa = () => {},
  Ba = Eo("event-key"),
  Qf = g.forwardRef((e, t) => {
    let { as: n = "div", onSelect: r, activeKey: l, role: o, onKeyDown: i } = e,
      s = N0(e, E0);
    const a = y0(),
      c = g.useRef(!1),
      f = g.useContext(to),
      v = g.useContext(Hf);
    let p, x;
    v &&
      ((o = o || "tablist"),
      (l = v.activeKey),
      (p = v.getControlledId),
      (x = v.getControllerId));
    const w = g.useRef(null),
      S = (h) => {
        const y = w.current;
        if (!y) return null;
        const N = rn(y, `[${Ba}]:not([aria-disabled=true])`),
          k = y.querySelector("[aria-selected=true]");
        if (!k || k !== document.activeElement) return null;
        const j = N.indexOf(k);
        if (j === -1) return null;
        let T = j + h;
        return T >= N.length && (T = 0), T < 0 && (T = N.length - 1), N[T];
      },
      _ = (h, y) => {
        h != null && (r == null || r(h, y), f == null || f(h, y));
      },
      m = (h) => {
        if ((i == null || i(h), !v)) return;
        let y;
        switch (h.key) {
          case "ArrowLeft":
          case "ArrowUp":
            y = S(-1);
            break;
          case "ArrowRight":
          case "ArrowDown":
            y = S(1);
            break;
          default:
            return;
        }
        y &&
          (h.preventDefault(),
          _(y.dataset[Bv("EventKey")] || null, h),
          (c.current = !0),
          a());
      };
    g.useEffect(() => {
      if (w.current && c.current) {
        const h = w.current.querySelector(`[${Ba}][aria-selected=true]`);
        h == null || h.focus();
      }
      c.current = !1;
    });
    const d = Gr(t, w);
    return u.jsx(to.Provider, {
      value: _,
      children: u.jsx(Wf.Provider, {
        value: {
          role: o,
          activeKey: mu(l),
          getControlledId: p || Aa,
          getControllerId: x || Aa,
        },
        children: u.jsx(
          n,
          Object.assign({}, s, { onKeyDown: m, ref: d, role: o })
        ),
      }),
    });
  });
Qf.displayName = "Nav";
const j0 = Object.assign(Qf, { Item: C0 }),
  Xf = g.createContext(null);
Xf.displayName = "NavbarContext";
const bn = Xf,
  Yf = g.createContext(null);
Yf.displayName = "CardHeaderContext";
const T0 = Yf,
  _0 = bt("nav-item"),
  Gf = g.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        as: n = ls,
        active: r,
        eventKey: l,
        disabled: o = !1,
        ...i
      },
      s
    ) => {
      e = ue(e, "nav-link");
      const [a, c] = Vf({ key: mu(l, i.href), active: r, disabled: o, ...i });
      return u.jsx(n, {
        ...i,
        ...a,
        ref: s,
        disabled: o,
        className: H(t, e, o && "disabled", c.isActive && "active"),
      });
    }
  );
Gf.displayName = "NavLink";
const R0 = Gf,
  Zf = g.forwardRef((e, t) => {
    const {
        as: n = "div",
        bsPrefix: r,
        variant: l,
        fill: o = !1,
        justify: i = !1,
        navbar: s,
        navbarScroll: a,
        className: c,
        activeKey: f,
        ...v
      } = su(e, { activeKey: "onSelect" }),
      p = ue(r, "nav");
    let x,
      w,
      S = !1;
    const _ = g.useContext(bn),
      m = g.useContext(T0);
    return (
      _
        ? ((x = _.bsPrefix), (S = s ?? !0))
        : m && ({ cardHeaderBsPrefix: w } = m),
      u.jsx(j0, {
        as: n,
        ref: t,
        activeKey: f,
        className: H(c, {
          [p]: !S,
          [`${x}-nav`]: S,
          [`${x}-nav-scroll`]: S && a,
          [`${w}-${l}`]: !!w,
          [`${p}-${l}`]: !!l,
          [`${p}-fill`]: o,
          [`${p}-justified`]: i,
        }),
        ...v,
      })
    );
  });
Zf.displayName = "Nav";
const O0 = Object.assign(Zf, { Item: _0, Link: R0 }),
  qf = g.forwardRef(({ bsPrefix: e, className: t, as: n, ...r }, l) => {
    e = ue(e, "navbar-brand");
    const o = n || (r.href ? "a" : "span");
    return u.jsx(o, { ...r, ref: l, className: H(t, e) });
  });
qf.displayName = "NavbarBrand";
const P0 = qf;
function cr(...e) {
  return e
    .filter((t) => t != null)
    .reduce((t, n) => {
      if (typeof n != "function")
        throw new Error(
          "Invalid Argument Type, must only provide functions, undefined, or null."
        );
      return t === null
        ? n
        : function (...l) {
            t.apply(this, l), n.apply(this, l);
          };
    }, null);
}
const M0 = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"],
};
function L0(e, t) {
  const n = `offset${e[0].toUpperCase()}${e.slice(1)}`,
    r = t[n],
    l = M0[e];
  return r + parseInt(kt(t, l[0]), 10) + parseInt(kt(t, l[1]), 10);
}
const z0 = {
    [Lt]: "collapse",
    [Wr]: "collapsing",
    [be]: "collapsing",
    [yt]: "collapse show",
  },
  I0 = at.forwardRef(
    (
      {
        onEnter: e,
        onEntering: t,
        onEntered: n,
        onExit: r,
        onExiting: l,
        className: o,
        children: i,
        dimension: s = "height",
        in: a = !1,
        timeout: c = 300,
        mountOnEnter: f = !1,
        unmountOnExit: v = !1,
        appear: p = !1,
        getDimensionValue: x = L0,
        ...w
      },
      S
    ) => {
      const _ = typeof s == "function" ? s() : s,
        m = g.useMemo(
          () =>
            cr((k) => {
              k.style[_] = "0";
            }, e),
          [_, e]
        ),
        d = g.useMemo(
          () =>
            cr((k) => {
              const j = `scroll${_[0].toUpperCase()}${_.slice(1)}`;
              k.style[_] = `${k[j]}px`;
            }, t),
          [_, t]
        ),
        h = g.useMemo(
          () =>
            cr((k) => {
              k.style[_] = null;
            }, n),
          [_, n]
        ),
        y = g.useMemo(
          () =>
            cr((k) => {
              (k.style[_] = `${x(_, k)}px`), uu(k);
            }, r),
          [r, x, _]
        ),
        N = g.useMemo(
          () =>
            cr((k) => {
              k.style[_] = null;
            }, l),
          [_, l]
        );
      return u.jsx(Co, {
        ref: S,
        addEndListener: ko,
        ...w,
        "aria-expanded": w.role ? a : null,
        onEnter: m,
        onEntering: d,
        onEntered: h,
        onExit: y,
        onExiting: N,
        childRef: i.ref,
        in: a,
        timeout: c,
        mountOnEnter: f,
        unmountOnExit: v,
        appear: p,
        children: (k, j) =>
          at.cloneElement(i, {
            ...j,
            className: H(
              o,
              i.props.className,
              z0[k],
              _ === "width" && "collapse-horizontal"
            ),
          }),
      });
    }
  ),
  D0 = I0,
  Jf = g.forwardRef(({ children: e, bsPrefix: t, ...n }, r) => {
    t = ue(t, "navbar-collapse");
    const l = g.useContext(bn);
    return u.jsx(D0, {
      in: !!(l && l.expanded),
      ...n,
      children: u.jsx("div", { ref: r, className: t, children: e }),
    });
  });
Jf.displayName = "NavbarCollapse";
const $0 = Jf,
  bf = g.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        label: r = "Toggle navigation",
        as: l = "button",
        onClick: o,
        ...i
      },
      s
    ) => {
      e = ue(e, "navbar-toggler");
      const { onToggle: a, expanded: c } = g.useContext(bn) || {},
        f = we((v) => {
          o && o(v), a && a();
        });
      return (
        l === "button" && (i.type = "button"),
        u.jsx(l, {
          ...i,
          ref: s,
          onClick: f,
          "aria-label": r,
          className: H(t, e, !c && "collapsed"),
          children: n || u.jsx("span", { className: `${e}-icon` }),
        })
      );
    }
  );
bf.displayName = "NavbarToggle";
const F0 = bf,
  ds = new WeakMap(),
  Ua = (e, t) => {
    if (!e || !t) return;
    const n = ds.get(t) || new Map();
    ds.set(t, n);
    let r = n.get(e);
    return r || ((r = t.matchMedia(e)), (r.refCount = 0), n.set(r.media, r)), r;
  };
function A0(e, t = typeof window > "u" ? void 0 : window) {
  const n = Ua(e, t),
    [r, l] = g.useState(() => (n ? n.matches : !1));
  return (
    rs(() => {
      let o = Ua(e, t);
      if (!o) return l(!1);
      let i = ds.get(t);
      const s = () => {
        l(o.matches);
      };
      return (
        o.refCount++,
        o.addListener(s),
        s(),
        () => {
          o.removeListener(s),
            o.refCount--,
            o.refCount <= 0 && (i == null || i.delete(o.media)),
            (o = void 0);
        }
      );
    }, [e]),
    r
  );
}
function B0(e) {
  const t = Object.keys(e);
  function n(s, a) {
    return s === a ? a : s ? `${s} and ${a}` : a;
  }
  function r(s) {
    return t[Math.min(t.indexOf(s) + 1, t.length - 1)];
  }
  function l(s) {
    const a = r(s);
    let c = e[a];
    return (
      typeof c == "number" ? (c = `${c - 0.2}px`) : (c = `calc(${c} - 0.2px)`),
      `(max-width: ${c})`
    );
  }
  function o(s) {
    let a = e[s];
    return typeof a == "number" && (a = `${a}px`), `(min-width: ${a})`;
  }
  function i(s, a, c) {
    let f;
    typeof s == "object"
      ? ((f = s), (c = a), (a = !0))
      : ((a = a || !0), (f = { [s]: a }));
    let v = g.useMemo(
      () =>
        Object.entries(f).reduce(
          (p, [x, w]) => (
            (w === "up" || w === !0) && (p = n(p, o(x))),
            (w === "down" || w === !0) && (p = n(p, l(x))),
            p
          ),
          ""
        ),
      [JSON.stringify(f)]
    );
    return A0(v, c);
  }
  return i;
}
const U0 = B0({ xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }),
  W0 = bt("offcanvas-body"),
  H0 = { [be]: "show", [yt]: "show" },
  ep = g.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        children: n,
        in: r = !1,
        mountOnEnter: l = !1,
        unmountOnExit: o = !1,
        appear: i = !1,
        ...s
      },
      a
    ) => (
      (e = ue(e, "offcanvas")),
      u.jsx(Co, {
        ref: a,
        addEndListener: ko,
        in: r,
        mountOnEnter: l,
        unmountOnExit: o,
        appear: i,
        ...s,
        childRef: n.ref,
        children: (c, f) =>
          g.cloneElement(n, {
            ...f,
            className: H(
              t,
              n.props.className,
              (c === be || c === Wr) && `${e}-toggling`,
              H0[c]
            ),
          }),
      })
    )
  );
ep.displayName = "OffcanvasToggling";
const V0 = ep,
  tp = g.forwardRef(
    (
      {
        bsPrefix: e,
        className: t,
        closeLabel: n = "Close",
        closeButton: r = !1,
        ...l
      },
      o
    ) => (
      (e = ue(e, "offcanvas-header")),
      u.jsx($f, {
        ref: o,
        ...l,
        className: H(t, e),
        closeLabel: n,
        closeButton: r,
      })
    )
  );
tp.displayName = "OffcanvasHeader";
const K0 = tp,
  Q0 = Af("h5"),
  X0 = bt("offcanvas-title", { Component: Q0 });
function Y0(e) {
  return u.jsx(V0, { ...e });
}
function G0(e) {
  return u.jsx(du, { ...e });
}
const np = g.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      children: n,
      "aria-labelledby": r,
      placement: l = "start",
      responsive: o,
      show: i = !1,
      backdrop: s = !0,
      keyboard: a = !0,
      scroll: c = !1,
      onEscapeKeyDown: f,
      onShow: v,
      onHide: p,
      container: x,
      autoFocus: w = !0,
      enforceFocus: S = !0,
      restoreFocus: _ = !0,
      restoreFocusOptions: m,
      onEntered: d,
      onExit: h,
      onExiting: y,
      onEnter: N,
      onEntering: k,
      onExited: j,
      backdropClassName: T,
      manager: A,
      renderStaticNode: M = !1,
      ...le
    },
    ke
  ) => {
    const de = g.useRef();
    e = ue(e, "offcanvas");
    const { onToggle: Xe } = g.useContext(bn) || {},
      [Ae, he] = g.useState(!1),
      G = U0(o || "xs", "up");
    g.useEffect(() => {
      he(o ? i && !G : i);
    }, [i, o, G]);
    const C = we(() => {
        Xe == null || Xe(), p == null || p();
      }),
      O = g.useMemo(() => ({ onHide: C }), [C]);
    function P() {
      return (
        A ||
        (c
          ? (de.current ||
              (de.current = new n0({ handleContainerOverflow: !1 })),
            de.current)
          : Lf())
      );
    }
    const I = (Z, ...D) => {
        Z && (Z.style.visibility = "visible"), N == null || N(Z, ...D);
      },
      B = (Z, ...D) => {
        Z && (Z.style.visibility = ""), j == null || j(...D);
      },
      ee = g.useCallback(
        (Z) => u.jsx("div", { ...Z, className: H(`${e}-backdrop`, T) }),
        [T, e]
      ),
      te = (Z) =>
        u.jsx("div", {
          ...Z,
          ...le,
          className: H(t, o ? `${e}-${o}` : e, `${e}-${l}`),
          "aria-labelledby": r,
          children: n,
        });
    return u.jsxs(u.Fragment, {
      children: [
        !Ae && (o || M) && te({}),
        u.jsx(fu.Provider, {
          value: O,
          children: u.jsx(Pf, {
            show: Ae,
            ref: ke,
            backdrop: s,
            container: x,
            keyboard: a,
            autoFocus: w,
            enforceFocus: S && !c,
            restoreFocus: _,
            restoreFocusOptions: m,
            onEscapeKeyDown: f,
            onShow: v,
            onHide: C,
            onEnter: I,
            onEntering: k,
            onEntered: d,
            onExit: h,
            onExiting: y,
            onExited: B,
            manager: P(),
            transition: Y0,
            backdropTransition: G0,
            renderBackdrop: ee,
            renderDialog: te,
          }),
        }),
      ],
    });
  }
);
np.displayName = "Offcanvas";
const Rl = Object.assign(np, { Body: W0, Header: K0, Title: X0 }),
  rp = g.forwardRef((e, t) => {
    const n = g.useContext(bn);
    return u.jsx(Rl, {
      ref: t,
      show: !!(n != null && n.expanded),
      ...e,
      renderStaticNode: !0,
    });
  });
rp.displayName = "NavbarOffcanvas";
const Z0 = rp,
  q0 = bt("navbar-text", { Component: "span" }),
  lp = g.forwardRef((e, t) => {
    const {
        bsPrefix: n,
        expand: r = !0,
        variant: l = "light",
        bg: o,
        fixed: i,
        sticky: s,
        className: a,
        as: c = "nav",
        expanded: f,
        onToggle: v,
        onSelect: p,
        collapseOnSelect: x = !1,
        ...w
      } = su(e, { expanded: "onToggle" }),
      S = ue(n, "navbar"),
      _ = g.useCallback(
        (...h) => {
          p == null || p(...h), x && f && (v == null || v(!1));
        },
        [p, x, f, v]
      );
    w.role === void 0 && c !== "nav" && (w.role = "navigation");
    let m = `${S}-expand`;
    typeof r == "string" && (m = `${m}-${r}`);
    const d = g.useMemo(
      () => ({
        onToggle: () => (v == null ? void 0 : v(!f)),
        bsPrefix: S,
        expanded: !!f,
        expand: r,
      }),
      [S, f, r, v]
    );
    return u.jsx(bn.Provider, {
      value: d,
      children: u.jsx(to.Provider, {
        value: _,
        children: u.jsx(c, {
          ref: t,
          ...w,
          className: H(
            a,
            S,
            r && m,
            l && `${S}-${l}`,
            o && `bg-${o}`,
            s && `sticky-${s}`,
            i && `fixed-${i}`
          ),
        }),
      }),
    });
  });
lp.displayName = "Navbar";
const vl = Object.assign(lp, {
    Brand: P0,
    Collapse: $0,
    Offcanvas: Z0,
    Text: q0,
    Toggle: F0,
  }),
  J0 = () => {
    const { language: e, setLanguage: t } = g.useContext(gn),
      [n, r] = g.useState(!1),
      l = () => r(!1),
      o = () => r(!0);
    return u.jsx(vl, {
      expand: "md",
      bg: "dark",
      "data-bs-theme": "dark",
      children: u.jsxs(Cf, {
        fluid: !0,
        children: [
          u.jsxs(vl.Brand, {
            children: [
              " ",
              u.jsx("a", {
                href: "#footer",
                children: u.jsx("div", {
                  className: "navbar-bg-logo p-1 ps-2 rounded",
                  children: u.jsx(et, {
                    width: "220",
                    height: "45",
                    src: "../icons/logo.png",
                    alt: "logo",
                    rounded: !0,
                  }),
                }),
              }),
              " ",
            ],
          }),
          u.jsx(vl.Toggle, {
            "aria-controls": "offcanvasNavbar-expand-md",
            onClick: o,
          }),
          u.jsxs(vl.Offcanvas, {
            show: n,
            restoreFocus: !1,
            onHide: l,
            bg: "dark",
            "data-bs-theme": "dark",
            id: "offcanvasNavbar-expand-md",
            "aria-labelledby": "offcanvasNavbarLabel-expand-$md",
            placement: "end",
            children: [
              u.jsx(Rl.Header, {
                closeButton: !0,
                onClick: l,
                children: u.jsx(Rl.Title, {
                  id: "offcanvasNavbarLabel-expand-lg",
                  children: u.jsx("a", {
                    href: "/home",
                    children: u.jsx("div", {
                      className: "navbar-bg-logo p-1 ps-2 rounded",
                      children: u.jsx(et, {
                        width: "150",
                        height: "40",
                        src: "../icons/logo.png",
                        alt: "logo",
                        rounded: !0,
                      }),
                    }),
                  }),
                }),
              }),
              u.jsx(Rl.Body, {
                children: u.jsxs(O0, {
                  className: "justify-content-end flex-grow-1 fs-4",
                  children: [
                    u.jsx("a", {
                      onClick: l,
                      className: "nav-link",
                      href: "#service",
                      children: e ? "Service" : "Servicios",
                    }),
                    u.jsx("a", {
                      onClick: l,
                      className: "nav-link",
                      href: "#ourCars",
                      children: e ? "Our Cars" : "Vehículos",
                    }),
                    u.jsx("a", {
                      onClick: l,
                      className: "nav-link",
                      href: "#mapCuba",
                      children: e ? "Sitie" : "Sitios",
                    }),
                    u.jsx("a", {
                      onClick: l,
                      className: "nav-link",
                      href: "#footer",
                      children: e ? "Contact" : "Contacto",
                    }),
                    u.jsx("a", {
                      onClick: () => t(!e),
                      className: "icon-lenguaje",
                      children: e
                        ? u.jsx("img", {
                            className: "img-fluid",
                            src: "../icons/estados-unidos.png",
                            alt: "estados-unidos",
                          })
                        : u.jsx("img", {
                            className: "img-fluid",
                            src: "../icons/espana.png",
                            alt: "espana",
                          }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  b0 = () =>
    u.jsxs("div", {
      id: "ourCars",
      className: "container row justify-content-center w-100 my-4 mx-auto p-0 ",
      children: [
        u.jsxs("div", {
          className: "col-9 col-md-6 py-4 border max-w-ourCars",
          children: [
            u.jsx("h2", { className: "nameCars", children: "Name Car" }),
            u.jsx("img", {
              className: "img-fluid imgOurCars",
              src: "../taximodelo1.png",
              alt: "image-taxi",
            }),
            u.jsx("h5", {
              className: "titleCars",
              children: "Algun titulo apropiado",
            }),
            u.jsxs("ul", {
              className: "ul-fs",
              children: [
                u.jsx("li", { children: "Fixed price " }),
                u.jsx("li", { children: "English-speaking driver " }),
                u.jsx("li", {
                  children: "Automated flight and train tracking ",
                }),
                u.jsx("li", {
                  children: "45 minutes waiting time after landing ",
                }),
                u.jsx("li", {
                  children: "Pickup with name sign in arrivals hall",
                }),
                u.jsx("li", {
                  children: "Children seats available on request",
                }),
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className: "col-9 col-md-6 py-4 border max-w-ourCars",
          children: [
            u.jsx("h2", { className: "nameCars", children: "Name Car" }),
            u.jsx("img", {
              className: "img-fluid",
              src: "../taximodelo2.png",
              alt: "image-taxi",
            }),
            u.jsx("h5", {
              className: "titleCars",
              children: "Algun titulo apropiado",
            }),
            u.jsxs("ul", {
              className: "ul-fs",
              children: [
                u.jsx("li", { children: "Fixed price " }),
                u.jsx("li", { children: "English-speaking driver " }),
                u.jsx("li", {
                  children: "Automated flight and train tracking ",
                }),
                u.jsx("li", {
                  children: "45 minutes waiting time after landing ",
                }),
                u.jsx("li", {
                  children: "Pickup with name sign in arrivals hall",
                }),
                u.jsx("li", {
                  children: "Children seats available on request",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  eg = () =>
    u.jsx("div", {
      className: " w-100 bg-black py-5",
      children: u.jsxs("div", {
        className:
          "background-OurWork row m-auto p-0 border-xy max-width-OurWork ",
        children: [
          u.jsxs("article", {
            className: "row m-0 p-0 border-b border-a1",
            children: [
              u.jsxs("div", {
                className: "col-lg-6 px-2 ",
                children: [
                  u.jsx("img", {
                    className: "img-fluid ourWork-icon my-3 rounded",
                    src: "../icons/laHabana-icon.png",
                    alt: "laHabana",
                  }),
                  u.jsx("h4", {
                    className: "title-color",
                    children: "Varadero - La Habana",
                  }),
                  u.jsxs("div", {
                    className: "ourWork-body",
                    children: [
                      u.jsx("li", { children: "Salidas entre 8-AM y 9-AM" }),
                      u.jsx("li", {
                        children:
                          "2 horas con 20 minutos aproximadamente de viaje",
                      }),
                      u.jsx("li", {
                        children: "Una parada en el mirador de Bacunayagua",
                      }),
                      u.jsx("li", { children: "Lugares de interés" }),
                      u.jsxs("ul", {
                        type: "none",
                        className: "ourWork-ul ps-2 m-0",
                        children: [
                          u.jsx("li", { children: "El cristo" }),
                          u.jsx("li", {
                            children:
                              "Exposición de misiles de la crisis de octubre",
                          }),
                          u.jsx("li", {
                            children:
                              "Fortaleza San Carlos de la Cabaña, el Morro",
                          }),
                          u.jsx("li", { children: "Paseo por el malecón" }),
                          u.jsx("li", { children: "Plaza d la Revolución" }),
                          u.jsx("li", { children: "Capitolio " }),
                          u.jsx("li", { children: "Parque central " }),
                          u.jsx("li", { children: "Bar Floridita" }),
                          u.jsx("li", { children: "Paseo del Prado" }),
                        ],
                      }),
                      u.jsx("li", { children: "La Habana vieja y sus plazas" }),
                      u.jsxs("ul", {
                        type: "none",
                        className: "ourWork-ul ps-2 m-0",
                        children: [
                          u.jsx("li", { children: "Plaza de armas " }),
                          u.jsx("li", { children: "Plaza de la catedral " }),
                          u.jsx("li", {
                            children: "Plaza san francisco de asis ",
                          }),
                          u.jsx("li", { children: "Plaza vieja " }),
                        ],
                      }),
                      u.jsx("li", {
                        children:
                          "Saliendo de la Habana cuando termine el programa entre 3-PM y 4-PM.",
                      }),
                    ],
                  }),
                ],
              }),
              u.jsx("div", {
                className: "col-lg-6 p-0",
                children: u.jsx("img", {
                  className: "img-fluid ourWork-img",
                  src: "../habana.png",
                  alt: "habana",
                }),
              }),
            ],
          }),
          u.jsxs("article", {
            className: "row col-lg-6 m-0 p-0 border-b border-a1",
            children: [
              u.jsxs("div", {
                className: "col-lg-6 col-xl-5 px-2 ",
                children: [
                  u.jsx("img", {
                    className: "img-fluid ourWork-icon my-3 rounded",
                    src: "../icons/matanzas-icon.png",
                    alt: "matanzas",
                  }),
                  u.jsx("h4", {
                    className: "title-color",
                    children: "Varadero - Matanzas",
                  }),
                  u.jsxs("div", {
                    className: "ourWork-body",
                    children: [
                      u.jsx("li", { children: "Lugares de interés" }),
                      u.jsxs("ul", {
                        type: "none",
                        className: "ourWork-ul ps-2 m-0",
                        children: [
                          u.jsx("li", { children: "Playa el coral " }),
                          u.jsx("li", { children: "Cueva saturno " }),
                          u.jsx("li", { children: "Centro de la ciudad " }),
                          u.jsx("li", { children: "Ermita de monserrate" }),
                          u.jsx("li", { children: "Museo farmacéutico" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsx("div", {
                className: "col-lg-6 col-xl-7 p-0",
                children: u.jsx("img", {
                  className: "img-fluid ourWork-img",
                  src: "../matanzas.jpg",
                  alt: "varadero",
                }),
              }),
            ],
          }),
          u.jsxs("article", {
            className: "row col-lg-6 m-0 p-0 border-b border-a2",
            children: [
              u.jsxs("div", {
                className: "col-lg-6 col-xl-5 px-2",
                children: [
                  u.jsx("img", {
                    className: "img-fluid ourWork-icon my-3 rounded",
                    src: "../icons/zapata-icon.png",
                    alt: "",
                  }),
                  u.jsx("h4", {
                    className: "title-color",
                    children: "Varadero - Zapata",
                  }),
                  u.jsxs("div", {
                    className: "ourWork-body",
                    children: [
                      u.jsx("li", { children: "Lugares de interés" }),
                      u.jsxs("ul", {
                        type: "none",
                        className: "ourWork-ul ps-2 m-0",
                        children: [
                          u.jsx("li", { children: "Finca fiesta campesina " }),
                          u.jsx("li", { children: "Criadero de cocodrilo " }),
                          u.jsx("li", { children: "Playa larga " }),
                          u.jsx("li", { children: "Cueva de los peces" }),
                          u.jsx("li", { children: "Casa del colibrí" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsx("div", {
                className: "col-lg-6 col-xl-7 p-0",
                children: u.jsx("img", {
                  className: "img-fluid ourWork-img",
                  src: "../Zienaga.jpg",
                  alt: "Zienaga",
                }),
              }),
            ],
          }),
          u.jsxs("article", {
            className: "row col-lg-6 m-0 p-0 border-b border-a3",
            children: [
              u.jsxs("div", {
                className: "col-lg-6 col-xl-5 px-2",
                children: [
                  u.jsx("img", {
                    className: "img-fluid ourWork-icon my-3 rounded",
                    src: "../icons/vinales-icon.png",
                    alt: "",
                  }),
                  u.jsx("h4", {
                    className: "title-color",
                    children: "Varadero - Viñales ",
                  }),
                  u.jsxs("div", {
                    className: "ourWork-body",
                    children: [
                      u.jsx("li", { children: "Lugares de interés" }),
                      u.jsxs("ul", {
                        type: "none",
                        className: "ourWork-ul ps-2 m-0",
                        children: [
                          u.jsx("li", { children: "Mirador los jazmines " }),
                          u.jsx("li", { children: "Mural de la prehistoria" }),
                          u.jsx("li", { children: "Cueva del indio " }),
                          u.jsx("li", { children: "Cueva de los peces" }),
                          u.jsx("li", {
                            children:
                              "Casa de campesino donde ven como tuerce el tabaco",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsx("div", {
                className: "col-lg-6 col-xl-7 p-0",
                children: u.jsx("img", {
                  className: "img-fluid ourWork-img",
                  src: "../vinales.jpg",
                  alt: "vinales",
                }),
              }),
            ],
          }),
          u.jsxs("article", {
            className: "row col-lg-6 m-0 p-0 ",
            children: [
              u.jsxs("div", {
                className: "col-lg-6 col-xl-5 px-2",
                children: [
                  u.jsx("img", {
                    className: "img-fluid ourWork-icon my-3 rounded",
                    src: "..//icons/3ciudades-icon.png",
                    alt: "",
                  }),
                  u.jsx("h4", {
                    className: "title-color",
                    children: "Varadero - 3 ciudades",
                  }),
                  u.jsxs("div", {
                    className: "ourWork-body",
                    children: [
                      u.jsx("li", { children: "Santa Clara" }),
                      u.jsxs("ul", {
                        type: "none",
                        className: "ourWork-ul ps-2 m-0",
                        children: [
                          u.jsx("li", { children: "Mausoleo del Che" }),
                          u.jsx("li", { children: "Parke Vidal " }),
                          u.jsx("li", {
                            children: "Monumento al tren blindado ",
                          }),
                        ],
                      }),
                      u.jsx("li", { children: "Trinidad" }),
                      u.jsxs("ul", {
                        type: "none",
                        className: "ourWork-ul ps-2 m-0",
                        children: [
                          u.jsx("li", { children: "Torre de Manaca Isnaga" }),
                          u.jsx("li", { children: "Valle d los ingenios" }),
                          u.jsx("li", { children: "Bar cancha chara " }),
                          u.jsx("li", { children: "Paseo por la ciudad " }),
                        ],
                      }),
                      u.jsx("li", { children: "Cienfuegos" }),
                      u.jsxs("ul", {
                        type: "none",
                        className: "ourWork-ul ps-2 m-0",
                        children: [
                          u.jsx("li", { children: "Punta gorda " }),
                          u.jsx("li", { children: "Estatua de Beni More " }),
                          u.jsx("li", { children: "Parque Marti" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsx("div", {
                className: "col-lg-6 col-xl-7 p-0",
                children: u.jsx("img", {
                  className: "img-fluid ourWork-img",
                  src: "../cienfuegos.jpg",
                  alt: "cienfuegos",
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  tg = ({ show: e, handleClose: t, service: n }) => {
    const { language: r } = g.useContext(gn),
      l = (c) => {
        switch (c) {
          case 1:
            return r ? "Pickup" : "Recogida";
          case 2:
            return r ? "Transfers" : "Traslados";
          case 3:
            return r ? "Circuits" : "Circuitos";
          case 4:
            return r ? "Excursion" : "Excursión";
        }
      },
      o = (c) => {
        switch (c) {
          case 1:
            return "../icons/recogida.png";
          case 2:
            return "../icons/traslados.png";
          case 3:
            return "../icons/circuitos.png";
          case 4:
            return "../icons/maleta.png";
        }
      },
      i = (c) => {
        switch (c) {
          case 1:
            return window.innerWidth < 500, "../recogida-sm.jpg";
          case 2:
            return "../default-image.jpg";
          case 3:
            return "../default-image.jpg";
          case 4:
            return "../default-image.jpg";
        }
      },
      s = (c) => {
        switch (c) {
          case 1:
            return r ? "Pickup" : "A tu disposición";
          case 2:
            return r ? "Pickup" : "Al sitio que desees";
          case 3:
            return r ? "Pickup" : "algun titulo";
          case 4:
            return r ? "Pickup" : "Vive la experiencia";
        }
      },
      a = (c) => {
        switch (c) {
          case 1:
            return r
              ? "Pickup"
              : "Realizamos recogidas en los aeropuertos de Varadero y La Habana y lo llevamos al destino que desee.";
          case 2:
            return r
              ? "Pickup"
              : "Ofrecemos servicios de traslados entre hoteles. Tu seguridad y comodidad están garantizadas.";
          case 3:
            return r
              ? "Pickup"
              : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta recusandae, optio minus ab quam quae fugiat,";
          case 4:
            return r
              ? "Pickup"
              : "Realizamos excursiones por la isla para que conozcas los lugares más emblemáticos y entretenidos de Cuba.";
        }
      };
    return u.jsx(u.Fragment, {
      children: u.jsxs(At, {
        className: "service-transition ",
        show: e,
        onHide: t,
        centered: !0,
        size: "xl",
        children: [
          u.jsx(At.Header, {
            closeButton: !0,
            children: u.jsxs(At.Title, {
              className: "display-5 fs-w",
              children: [
                u.jsx("img", {
                  className: "modalIcon",
                  src: o(n),
                  alt: "icon-img",
                }),
                l(n),
              ],
            }),
          }),
          u.jsx(At.Body, {
            children: u.jsxs("div", {
              className: "row",
              children: [
                u.jsx("div", {
                  className: "col-lg-6 text-center",
                  children: u.jsx("img", {
                    className: "img-fluid",
                    src: i(n),
                    alt: "service-img",
                  }),
                }),
                u.jsxs("div", {
                  className: "col-lg-6",
                  children: [
                    u.jsx("h3", { className: "pt-2", children: s(n) }),
                    u.jsx("p", { children: a(n) }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  ng = () => {
    const { language: e } = g.useContext(gn),
      [t, n] = g.useState(),
      [r, l] = g.useState(!1),
      o = () => l(!1),
      i = () => l(!0);
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx("section", {
          id: "service",
          className: "h-100 w-100",
          children: u.jsxs("div", {
            className: "img-fixe",
            children: [
              u.jsx("article", {
                className:
                  "bg-t text-center d-flex align-items-center justify-content-center",
                children: u.jsxs("div", {
                  children: [
                    u.jsx("h3", {
                      className: "",
                      children: e ? "OUR COMPANY" : "NUESTRA EMPRESA",
                    }),
                    u.jsx("p", {
                      className: "mb-1",
                      children: e
                        ? "Your safety is our priority."
                        : "Tu seguridad es nuestra prioridad.",
                    }),
                  ],
                }),
              }),
              u.jsx("article", {
                className: "bg-w text-center ",
                children: u.jsxs("div", {
                  className:
                    "w-100 h-w d-flex flex-column justify-content-center align-items-center",
                  children: [
                    u.jsxs("div", {
                      className: "w-100 py-2 d-flex justify-content-around",
                      children: [
                        u.jsx("img", {
                          className: "service-icon",
                          src: "../icons/ubucacion-taxi-icon.png",
                          alt: "parada",
                        }),
                        u.jsx("h2", {
                          className: "display-2 ",
                          children: u.jsx("b", { children: "Servicios" }),
                        }),
                        u.jsx("img", {
                          className: "service-icon",
                          src: "../icons/taxi-icon.png",
                          alt: "taxi",
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: "row w-100 hover-service ",
                      children: [
                        u.jsxs("div", {
                          className:
                            "col-6 col-md-3 py-3 d-flex flex-column align-items-center justify-content-center",
                          children: [
                            u.jsx("img", {
                              className: "img-size",
                              src: "../icons/recogida.png",
                              alt: "recogida",
                              onClick: () => {
                                i(), n(1);
                              },
                            }),
                            u.jsx("h5", {
                              className: "pt-2",
                              children: e ? "pickup" : "recogida",
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className:
                            "col-6 col-md-3 d-flex flex-column align-items-center justify-content-center",
                          children: [
                            u.jsx("img", {
                              className: "img-size",
                              src: "../icons/traslados.png",
                              alt: "traslados",
                              onClick: () => {
                                i(), n(2);
                              },
                            }),
                            u.jsx("h5", {
                              className: "pt-2",
                              children: e ? "transfers" : "traslados",
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className:
                            "col-6 col-md-3 d-flex flex-column align-items-center justify-content-center",
                          children: [
                            u.jsx("img", {
                              className: "img-size",
                              src: "../icons/circuitos.png",
                              alt: "circuitos",
                              onClick: () => {
                                i(), n(3);
                              },
                            }),
                            u.jsx("h5", {
                              className: "pt-2",
                              children: e ? "circuits" : "circuitos",
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className:
                            "col-6 col-md-3 d-flex flex-column align-items-center justify-content-center",
                          children: [
                            u.jsx("img", {
                              className: "img-size",
                              src: "../icons/maleta.png",
                              alt: "excursion",
                              onClick: () => {
                                i(), n(4);
                              },
                            }),
                            u.jsx("h5", {
                              className: "pt-2",
                              children: e ? "excursion" : "excursión",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              u.jsx("article", {
                className:
                  "bg-t text-center d-flex align-items-center justify-content-center",
                children: u.jsxs("div", {
                  className: "",
                  children: [
                    u.jsx("h3", {
                      className: "",
                      children: e ? "OUR COMPANY" : "PLAN PERSONALIZADO",
                    }),
                    u.jsx("a", {
                      href: "tel:5353760295",
                      className: "service-info",
                      children: "+53 53760295",
                    }),
                    u.jsx("p", {
                      className: "mb-1",
                      children: e
                        ? "Your safety is our priority."
                        : "Nos enfocamos en las necesidades del cliente.",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        u.jsx(tg, { show: r, handleClose: o, service: t }),
      ],
    });
  },
  rg = () =>
    u.jsx("div", {
      className: "whatsapp ",
      children: u.jsx("a", {
        href: "https://api.whatsapp.com/send?phone=5353760295&text=Hola%2C%20como%20podemos%20we%20ayudarte%3F",
        children: u.jsx(Lv, {}),
      }),
    });
const lg = () => {
  const [e, t] = g.useState(!0);
  return u.jsxs(gn.Provider, {
    value: { language: e, setLanguage: t },
    children: [
      u.jsx(J0, {}),
      u.jsx(rg, {}),
      u.jsx($v, {}),
      u.jsx(ng, {}),
      u.jsx(eg, {}),
      u.jsx(b0, {}),
      u.jsx(Nv, {}),
      u.jsx(v0, {}),
      u.jsx(Dv, {}),
    ],
  });
};
ai.createRoot(document.getElementById("root")).render(
  u.jsx(at.StrictMode, { children: u.jsx(lg, {}) })
);
