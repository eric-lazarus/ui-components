var T = { exports: {} }, t = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w;
function ne() {
  if (w) return t;
  w = 1;
  var o = typeof Symbol == "function" && Symbol.for, _ = o ? Symbol.for("react.element") : 60103, p = o ? Symbol.for("react.portal") : 60106, s = o ? Symbol.for("react.fragment") : 60107, f = o ? Symbol.for("react.strict_mode") : 60108, i = o ? Symbol.for("react.profiler") : 60114, u = o ? Symbol.for("react.provider") : 60109, l = o ? Symbol.for("react.context") : 60110, v = o ? Symbol.for("react.async_mode") : 60111, m = o ? Symbol.for("react.concurrent_mode") : 60111, d = o ? Symbol.for("react.forward_ref") : 60112, y = o ? Symbol.for("react.suspense") : 60113, b = o ? Symbol.for("react.suspense_list") : 60120, E = o ? Symbol.for("react.memo") : 60115, S = o ? Symbol.for("react.lazy") : 60116, P = o ? Symbol.for("react.block") : 60121, $ = o ? Symbol.for("react.fundamental") : 60117, x = o ? Symbol.for("react.responder") : 60118, A = o ? Symbol.for("react.scope") : 60119;
  function a(e) {
    if (typeof e == "object" && e !== null) {
      var C = e.$$typeof;
      switch (C) {
        case _:
          switch (e = e.type, e) {
            case v:
            case m:
            case s:
            case i:
            case f:
            case y:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case l:
                case d:
                case S:
                case E:
                case u:
                  return e;
                default:
                  return C;
              }
          }
        case p:
          return C;
      }
    }
  }
  function c(e) {
    return a(e) === m;
  }
  return t.AsyncMode = v, t.ConcurrentMode = m, t.ContextConsumer = l, t.ContextProvider = u, t.Element = _, t.ForwardRef = d, t.Fragment = s, t.Lazy = S, t.Memo = E, t.Portal = p, t.Profiler = i, t.StrictMode = f, t.Suspense = y, t.isAsyncMode = function(e) {
    return c(e) || a(e) === v;
  }, t.isConcurrentMode = c, t.isContextConsumer = function(e) {
    return a(e) === l;
  }, t.isContextProvider = function(e) {
    return a(e) === u;
  }, t.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === _;
  }, t.isForwardRef = function(e) {
    return a(e) === d;
  }, t.isFragment = function(e) {
    return a(e) === s;
  }, t.isLazy = function(e) {
    return a(e) === S;
  }, t.isMemo = function(e) {
    return a(e) === E;
  }, t.isPortal = function(e) {
    return a(e) === p;
  }, t.isProfiler = function(e) {
    return a(e) === i;
  }, t.isStrictMode = function(e) {
    return a(e) === f;
  }, t.isSuspense = function(e) {
    return a(e) === y;
  }, t.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === s || e === m || e === i || e === f || e === y || e === b || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === E || e.$$typeof === u || e.$$typeof === l || e.$$typeof === d || e.$$typeof === $ || e.$$typeof === x || e.$$typeof === A || e.$$typeof === P);
  }, t.typeOf = a, t;
}
var n = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function ce() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && (function() {
    var o = typeof Symbol == "function" && Symbol.for, _ = o ? Symbol.for("react.element") : 60103, p = o ? Symbol.for("react.portal") : 60106, s = o ? Symbol.for("react.fragment") : 60107, f = o ? Symbol.for("react.strict_mode") : 60108, i = o ? Symbol.for("react.profiler") : 60114, u = o ? Symbol.for("react.provider") : 60109, l = o ? Symbol.for("react.context") : 60110, v = o ? Symbol.for("react.async_mode") : 60111, m = o ? Symbol.for("react.concurrent_mode") : 60111, d = o ? Symbol.for("react.forward_ref") : 60112, y = o ? Symbol.for("react.suspense") : 60113, b = o ? Symbol.for("react.suspense_list") : 60120, E = o ? Symbol.for("react.memo") : 60115, S = o ? Symbol.for("react.lazy") : 60116, P = o ? Symbol.for("react.block") : 60121, $ = o ? Symbol.for("react.fundamental") : 60117, x = o ? Symbol.for("react.responder") : 60118, A = o ? Symbol.for("react.scope") : 60119;
    function a(r) {
      return typeof r == "string" || typeof r == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      r === s || r === m || r === i || r === f || r === y || r === b || typeof r == "object" && r !== null && (r.$$typeof === S || r.$$typeof === E || r.$$typeof === u || r.$$typeof === l || r.$$typeof === d || r.$$typeof === $ || r.$$typeof === x || r.$$typeof === A || r.$$typeof === P);
    }
    function c(r) {
      if (typeof r == "object" && r !== null) {
        var M = r.$$typeof;
        switch (M) {
          case _:
            var R = r.type;
            switch (R) {
              case v:
              case m:
              case s:
              case i:
              case f:
              case y:
                return R;
              default:
                var O = R && R.$$typeof;
                switch (O) {
                  case l:
                  case d:
                  case S:
                  case E:
                  case u:
                    return O;
                  default:
                    return M;
                }
            }
          case p:
            return M;
        }
      }
    }
    var e = v, C = m, N = l, L = u, g = _, D = d, z = s, q = S, V = E, U = p, k = i, W = f, B = y, Y = !1;
    function G(r) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(r) || c(r) === v;
    }
    function I(r) {
      return c(r) === m;
    }
    function K(r) {
      return c(r) === l;
    }
    function X(r) {
      return c(r) === u;
    }
    function Z(r) {
      return typeof r == "object" && r !== null && r.$$typeof === _;
    }
    function j(r) {
      return c(r) === d;
    }
    function H(r) {
      return c(r) === s;
    }
    function J(r) {
      return c(r) === S;
    }
    function Q(r) {
      return c(r) === E;
    }
    function ee(r) {
      return c(r) === p;
    }
    function re(r) {
      return c(r) === i;
    }
    function oe(r) {
      return c(r) === f;
    }
    function te(r) {
      return c(r) === y;
    }
    n.AsyncMode = e, n.ConcurrentMode = C, n.ContextConsumer = N, n.ContextProvider = L, n.Element = g, n.ForwardRef = D, n.Fragment = z, n.Lazy = q, n.Memo = V, n.Portal = U, n.Profiler = k, n.StrictMode = W, n.Suspense = B, n.isAsyncMode = G, n.isConcurrentMode = I, n.isContextConsumer = K, n.isContextProvider = X, n.isElement = Z, n.isForwardRef = j, n.isFragment = H, n.isLazy = J, n.isMemo = Q, n.isPortal = ee, n.isProfiler = re, n.isStrictMode = oe, n.isSuspense = te, n.isValidElementType = a, n.typeOf = c;
  })()), n;
}
var h;
function ae() {
  return h || (h = 1, process.env.NODE_ENV === "production" ? T.exports = ne() : T.exports = ce()), T.exports;
}
export {
  ae as r
};
