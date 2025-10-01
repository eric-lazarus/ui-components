import { jsxs as Ot, jsx as K } from "react/jsx-runtime";
import * as R from "react";
import gn, { useState as fe, useCallback as J, forwardRef as bn, useContext as fn, useLayoutEffect as or, useRef as ae, useMemo as me, createContext as sr, Component as cr, Fragment as ct, useEffect as pn } from "react";
import { r as lr } from "../index-DpFLFzFZ.js";
import et from "./Icon.js";
import '../assets/InputMulti.css';function pe(t) {
  "@babel/helpers - typeof";
  return pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, pe(t);
}
function dr(t, e) {
  if (pe(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(t, e);
    if (pe(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function In(t) {
  var e = dr(t, "string");
  return pe(e) == "symbol" ? e : e + "";
}
function Ge(t, e, r) {
  return (e = In(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Pt(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function y(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Pt(Object(r), !0).forEach(function(i) {
      Ge(t, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Pt(Object(r)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return t;
}
function gr(t) {
  if (Array.isArray(t)) return t;
}
function br(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var i, n, a, s, d = [], u = !0, o = !1;
    try {
      if (a = (r = r.call(t)).next, e === 0) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (i = a.call(r)).done) && (d.push(i.value), d.length !== e); u = !0) ;
    } catch (g) {
      o = !0, n = g;
    } finally {
      try {
        if (!u && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (o) throw n;
      }
    }
    return d;
  }
}
function lt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, i = Array(e); r < e; r++) i[r] = t[r];
  return i;
}
function mn(t, e) {
  if (t) {
    if (typeof t == "string") return lt(t, e);
    var r = {}.toString.call(t).slice(8, -1);
    return r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set" ? Array.from(t) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? lt(t, e) : void 0;
  }
}
function fr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oe(t, e) {
  return gr(t) || br(t, e) || mn(t, e) || fr();
}
function pr(t, e) {
  if (t == null) return {};
  var r = {};
  for (var i in t) if ({}.hasOwnProperty.call(t, i)) {
    if (e.indexOf(i) !== -1) continue;
    r[i] = t[i];
  }
  return r;
}
function ce(t, e) {
  if (t == null) return {};
  var r, i, n = pr(t, e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++) r = a[i], e.indexOf(r) === -1 && {}.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
var Ir = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function mr(t) {
  var e = t.defaultInputValue, r = e === void 0 ? "" : e, i = t.defaultMenuIsOpen, n = i === void 0 ? !1 : i, a = t.defaultValue, s = a === void 0 ? null : a, d = t.inputValue, u = t.menuIsOpen, o = t.onChange, g = t.onInputChange, l = t.onMenuClose, c = t.onMenuOpen, b = t.value, m = ce(t, Ir), p = fe(d !== void 0 ? d : r), f = oe(p, 2), I = f[0], v = f[1], C = fe(u !== void 0 ? u : n), E = oe(C, 2), S = E[0], G = E[1], h = fe(b !== void 0 ? b : s), V = oe(h, 2), O = V[0], D = V[1], z = J(function(U, le) {
    typeof o == "function" && o(U, le), D(U);
  }, [o]), Z = J(function(U, le) {
    var de;
    typeof g == "function" && (de = g(U, le)), v(de !== void 0 ? de : U);
  }, [g]), ne = J(function() {
    typeof c == "function" && c(), G(!0);
  }, [c]), re = J(function() {
    typeof l == "function" && l(), G(!1);
  }, [l]), W = d !== void 0 ? d : I, T = u !== void 0 ? u : S, $ = b !== void 0 ? b : O;
  return y(y({}, m), {}, {
    inputValue: W,
    menuIsOpen: T,
    onChange: z,
    onInputChange: Z,
    onMenuClose: re,
    onMenuOpen: ne,
    value: $
  });
}
function x() {
  return x = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var i in r) ({}).hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, x.apply(null, arguments);
}
function vr(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function wt(t, e) {
  for (var r = 0; r < e.length; r++) {
    var i = e[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, In(i.key), i);
  }
}
function hr(t, e, r) {
  return e && wt(t.prototype, e), r && wt(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function dt(t, e) {
  return dt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, dt(t, e);
}
function Cr(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && dt(t, e);
}
function He(t) {
  return He = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, He(t);
}
function vn() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (vn = function() {
    return !!t;
  })();
}
function Ar(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function yr(t, e) {
  if (e && (pe(e) == "object" || typeof e == "function")) return e;
  if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Ar(t);
}
function Gr(t) {
  var e = vn();
  return function() {
    var r, i = He(t);
    if (e) {
      var n = He(this).constructor;
      r = Reflect.construct(i, arguments, n);
    } else r = i.apply(this, arguments);
    return yr(this, r);
  };
}
function xr(t) {
  if (Array.isArray(t)) return lt(t);
}
function Er(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Sr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vt(t) {
  return xr(t) || Er(t) || mn(t) || Sr();
}
function Vr(t) {
  if (t.sheet)
    return t.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === t)
      return document.styleSheets[e];
}
function Rr(t) {
  var e = document.createElement("style");
  return e.setAttribute("data-emotion", t.key), t.nonce !== void 0 && e.setAttribute("nonce", t.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
}
var Br = /* @__PURE__ */ (function() {
  function t(r) {
    var i = this;
    this._insertTag = function(n) {
      var a;
      i.tags.length === 0 ? i.insertionPoint ? a = i.insertionPoint.nextSibling : i.prepend ? a = i.container.firstChild : a = i.before : a = i.tags[i.tags.length - 1].nextSibling, i.container.insertBefore(n, a), i.tags.push(n);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var e = t.prototype;
  return e.hydrate = function(i) {
    i.forEach(this._insertTag);
  }, e.insert = function(i) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Rr(this));
    var n = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = Vr(n);
      try {
        a.insertRule(i, a.cssRules.length);
      } catch {
      }
    } else
      n.appendChild(document.createTextNode(i));
    this.ctr++;
  }, e.flush = function() {
    this.tags.forEach(function(i) {
      var n;
      return (n = i.parentNode) == null ? void 0 : n.removeChild(i);
    }), this.tags = [], this.ctr = 0;
  }, t;
})(), Y = "-ms-", Le = "-moz-", B = "-webkit-", hn = "comm", ht = "rule", Ct = "decl", Fr = "@import", Cn = "@keyframes", Xr = "@layer", Or = Math.abs, Ue = String.fromCharCode, Pr = Object.assign;
function wr(t, e) {
  return M(t, 0) ^ 45 ? (((e << 2 ^ M(t, 0)) << 2 ^ M(t, 1)) << 2 ^ M(t, 2)) << 2 ^ M(t, 3) : 0;
}
function An(t) {
  return t.trim();
}
function Tr(t, e) {
  return (t = e.exec(t)) ? t[0] : t;
}
function F(t, e, r) {
  return t.replace(e, r);
}
function gt(t, e) {
  return t.indexOf(e);
}
function M(t, e) {
  return t.charCodeAt(e) | 0;
}
function Ee(t, e, r) {
  return t.slice(e, r);
}
function q(t) {
  return t.length;
}
function At(t) {
  return t.length;
}
function Xe(t, e) {
  return e.push(t), t;
}
function Nr(t, e) {
  return t.map(e).join("");
}
var Qe = 1, he = 1, yn = 0, k = 0, w = 0, Ce = "";
function $e(t, e, r, i, n, a, s) {
  return { value: t, root: e, parent: r, type: i, props: n, children: a, line: Qe, column: he, length: s, return: "" };
}
function Ae(t, e) {
  return Pr($e("", null, null, "", null, null, 0), t, { length: -t.length }, e);
}
function Wr() {
  return w;
}
function Mr() {
  return w = k > 0 ? M(Ce, --k) : 0, he--, w === 10 && (he = 1, Qe--), w;
}
function _() {
  return w = k < yn ? M(Ce, k++) : 0, he++, w === 10 && (he = 1, Qe++), w;
}
function te() {
  return M(Ce, k);
}
function We() {
  return k;
}
function Re(t, e) {
  return Ee(Ce, t, e);
}
function Se(t) {
  switch (t) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Gn(t) {
  return Qe = he = 1, yn = q(Ce = t), k = 0, [];
}
function xn(t) {
  return Ce = "", t;
}
function Me(t) {
  return An(Re(k - 1, bt(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Dr(t) {
  for (; (w = te()) && w < 33; )
    _();
  return Se(t) > 2 || Se(w) > 3 ? "" : " ";
}
function Zr(t, e) {
  for (; --e && _() && !(w < 48 || w > 102 || w > 57 && w < 65 || w > 70 && w < 97); )
    ;
  return Re(t, We() + (e < 6 && te() == 32 && _() == 32));
}
function bt(t) {
  for (; _(); )
    switch (w) {
      // ] ) " '
      case t:
        return k;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && bt(w);
        break;
      // (
      case 40:
        t === 41 && bt(t);
        break;
      // \
      case 92:
        _();
        break;
    }
  return k;
}
function Hr(t, e) {
  for (; _() && t + w !== 57; )
    if (t + w === 84 && te() === 47)
      break;
  return "/*" + Re(e, k - 1) + "*" + Ue(t === 47 ? t : _());
}
function Lr(t) {
  for (; !Se(te()); )
    _();
  return Re(t, k);
}
function Yr(t) {
  return xn(De("", null, null, null, [""], t = Gn(t), 0, [0], t));
}
function De(t, e, r, i, n, a, s, d, u) {
  for (var o = 0, g = 0, l = s, c = 0, b = 0, m = 0, p = 1, f = 1, I = 1, v = 0, C = "", E = n, S = a, G = i, h = C; f; )
    switch (m = v, v = _()) {
      // (
      case 40:
        if (m != 108 && M(h, l - 1) == 58) {
          gt(h += F(Me(v), "&", "&\f"), "&\f") != -1 && (I = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        h += Me(v);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        h += Dr(m);
        break;
      // \
      case 92:
        h += Zr(We() - 1, 7);
        continue;
      // /
      case 47:
        switch (te()) {
          case 42:
          case 47:
            Xe(Jr(Hr(_(), We()), e, r), u);
            break;
          default:
            h += "/";
        }
        break;
      // {
      case 123 * p:
        d[o++] = q(h) * I;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (v) {
          // \0 }
          case 0:
          case 125:
            f = 0;
          // ;
          case 59 + g:
            I == -1 && (h = F(h, /\f/g, "")), b > 0 && q(h) - l && Xe(b > 32 ? Nt(h + ";", i, r, l - 1) : Nt(F(h, " ", "") + ";", i, r, l - 2), u);
            break;
          // @ ;
          case 59:
            h += ";";
          // { rule/at-rule
          default:
            if (Xe(G = Tt(h, e, r, o, g, n, d, C, E = [], S = [], l), a), v === 123)
              if (g === 0)
                De(h, e, G, G, E, a, l, d, S);
              else
                switch (c === 99 && M(h, 3) === 110 ? 100 : c) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    De(t, G, G, i && Xe(Tt(t, G, G, 0, 0, n, d, C, n, E = [], l), S), n, S, l, d, i ? E : S);
                    break;
                  default:
                    De(h, G, G, G, [""], S, 0, d, S);
                }
        }
        o = g = b = 0, p = I = 1, C = h = "", l = s;
        break;
      // :
      case 58:
        l = 1 + q(h), b = m;
      default:
        if (p < 1) {
          if (v == 123)
            --p;
          else if (v == 125 && p++ == 0 && Mr() == 125)
            continue;
        }
        switch (h += Ue(v), v * p) {
          // &
          case 38:
            I = g > 0 ? 1 : (h += "\f", -1);
            break;
          // ,
          case 44:
            d[o++] = (q(h) - 1) * I, I = 1;
            break;
          // @
          case 64:
            te() === 45 && (h += Me(_())), c = te(), g = l = q(C = h += Lr(We())), v++;
            break;
          // -
          case 45:
            m === 45 && q(h) == 2 && (p = 0);
        }
    }
  return a;
}
function Tt(t, e, r, i, n, a, s, d, u, o, g) {
  for (var l = n - 1, c = n === 0 ? a : [""], b = At(c), m = 0, p = 0, f = 0; m < i; ++m)
    for (var I = 0, v = Ee(t, l + 1, l = Or(p = s[m])), C = t; I < b; ++I)
      (C = An(p > 0 ? c[I] + " " + v : F(v, /&\f/g, c[I]))) && (u[f++] = C);
  return $e(t, e, r, n === 0 ? ht : d, u, o, g);
}
function Jr(t, e, r) {
  return $e(t, e, r, hn, Ue(Wr()), Ee(t, 2, -2), 0);
}
function Nt(t, e, r, i) {
  return $e(t, e, r, Ct, Ee(t, 0, i), Ee(t, i + 1, -1), i);
}
function ve(t, e) {
  for (var r = "", i = At(t), n = 0; n < i; n++)
    r += e(t[n], n, t, e) || "";
  return r;
}
function zr(t, e, r, i) {
  switch (t.type) {
    case Xr:
      if (t.children.length) break;
    case Fr:
    case Ct:
      return t.return = t.return || t.value;
    case hn:
      return "";
    case Cn:
      return t.return = t.value + "{" + ve(t.children, i) + "}";
    case ht:
      t.value = t.props.join(",");
  }
  return q(r = ve(t.children, i)) ? t.return = t.value + "{" + r + "}" : "";
}
function kr(t) {
  var e = At(t);
  return function(r, i, n, a) {
    for (var s = "", d = 0; d < e; d++)
      s += t[d](r, i, n, a) || "";
    return s;
  };
}
function jr(t) {
  return function(e) {
    e.root || (e = e.return) && t(e);
  };
}
function _r(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return e[r] === void 0 && (e[r] = t(r)), e[r];
  };
}
var Ur = function(e, r, i) {
  for (var n = 0, a = 0; n = a, a = te(), n === 38 && a === 12 && (r[i] = 1), !Se(a); )
    _();
  return Re(e, k);
}, Qr = function(e, r) {
  var i = -1, n = 44;
  do
    switch (Se(n)) {
      case 0:
        n === 38 && te() === 12 && (r[i] = 1), e[i] += Ur(k - 1, r, i);
        break;
      case 2:
        e[i] += Me(n);
        break;
      case 4:
        if (n === 44) {
          e[++i] = te() === 58 ? "&\f" : "", r[i] = e[i].length;
          break;
        }
      // fallthrough
      default:
        e[i] += Ue(n);
    }
  while (n = _());
  return e;
}, $r = function(e, r) {
  return xn(Qr(Gn(e), r));
}, Wt = /* @__PURE__ */ new WeakMap(), Kr = function(e) {
  if (!(e.type !== "rule" || !e.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  e.length < 1)) {
    for (var r = e.value, i = e.parent, n = e.column === i.column && e.line === i.line; i.type !== "rule"; )
      if (i = i.parent, !i) return;
    if (!(e.props.length === 1 && r.charCodeAt(0) !== 58 && !Wt.get(i)) && !n) {
      Wt.set(e, !0);
      for (var a = [], s = $r(r, a), d = i.props, u = 0, o = 0; u < s.length; u++)
        for (var g = 0; g < d.length; g++, o++)
          e.props[o] = a[u] ? s[u].replace(/&\f/g, d[g]) : d[g] + " " + s[u];
    }
  }
}, qr = function(e) {
  if (e.type === "decl") {
    var r = e.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
};
function En(t, e) {
  switch (wr(t, e)) {
    // color-adjust
    case 5103:
      return B + "print-" + t + t;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return B + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return B + t + Le + t + Y + t + t;
    // flex, flex-direction
    case 6828:
    case 4268:
      return B + t + Y + t + t;
    // order
    case 6165:
      return B + t + Y + "flex-" + t + t;
    // align-items
    case 5187:
      return B + t + F(t, /(\w+).+(:[^]+)/, B + "box-$1$2" + Y + "flex-$1$2") + t;
    // align-self
    case 5443:
      return B + t + Y + "flex-item-" + F(t, /flex-|-self/, "") + t;
    // align-content
    case 4675:
      return B + t + Y + "flex-line-pack" + F(t, /align-content|flex-|-self/, "") + t;
    // flex-shrink
    case 5548:
      return B + t + Y + F(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return B + t + Y + F(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return B + "box-" + F(t, "-grow", "") + B + t + Y + F(t, "grow", "positive") + t;
    // transition
    case 4554:
      return B + F(t, /([^-])(transform)/g, "$1" + B + "$2") + t;
    // cursor
    case 6187:
      return F(F(F(t, /(zoom-|grab)/, B + "$1"), /(image-set)/, B + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return F(t, /(image-set\([^]*)/, B + "$1$`$1");
    // justify-content
    case 4968:
      return F(F(t, /(.+:)(flex-)?(.*)/, B + "box-pack:$3" + Y + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + B + t + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return F(t, /(.+)-inline(.+)/, B + "$1$2") + t;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (q(t) - 1 - e > 6) switch (M(t, e + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (M(t, e + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return F(t, /(.+:)(.+)-([^]+)/, "$1" + B + "$2-$3$1" + Le + (M(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
        // (s)tretch
        case 115:
          return ~gt(t, "stretch") ? En(F(t, "stretch", "fill-available"), e) + t : t;
      }
      break;
    // position: sticky
    case 4949:
      if (M(t, e + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (M(t, q(t) - 3 - (~gt(t, "!important") && 10))) {
        // stic(k)y
        case 107:
          return F(t, ":", ":" + B) + t;
        // (inline-)?fl(e)x
        case 101:
          return F(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + B + (M(t, 14) === 45 ? "inline-" : "") + "box$3$1" + B + "$2$3$1" + Y + "$2box$3") + t;
      }
      break;
    // writing-mode
    case 5936:
      switch (M(t, e + 11)) {
        // vertical-l(r)
        case 114:
          return B + t + Y + F(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return B + t + Y + F(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return B + t + Y + F(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
      return B + t + Y + t + t;
  }
  return t;
}
var ei = function(e, r, i, n) {
  if (e.length > -1 && !e.return) switch (e.type) {
    case Ct:
      e.return = En(e.value, e.length);
      break;
    case Cn:
      return ve([Ae(e, {
        value: F(e.value, "@", "@" + B)
      })], n);
    case ht:
      if (e.length) return Nr(e.props, function(a) {
        switch (Tr(a, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return ve([Ae(e, {
              props: [F(a, /:(read-\w+)/, ":" + Le + "$1")]
            })], n);
          // :placeholder
          case "::placeholder":
            return ve([Ae(e, {
              props: [F(a, /:(plac\w+)/, ":" + B + "input-$1")]
            }), Ae(e, {
              props: [F(a, /:(plac\w+)/, ":" + Le + "$1")]
            }), Ae(e, {
              props: [F(a, /:(plac\w+)/, Y + "input-$1")]
            })], n);
        }
        return "";
      });
  }
}, ti = [ei], ni = function(e) {
  var r = e.key;
  if (r === "css") {
    var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(i, function(p) {
      var f = p.getAttribute("data-emotion");
      f.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var n = e.stylisPlugins || ti, a = {}, s, d = [];
  s = e.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(p) {
      for (var f = p.getAttribute("data-emotion").split(" "), I = 1; I < f.length; I++)
        a[f[I]] = !0;
      d.push(p);
    }
  );
  var u, o = [Kr, qr];
  {
    var g, l = [zr, jr(function(p) {
      g.insert(p);
    })], c = kr(o.concat(n, l)), b = function(f) {
      return ve(Yr(f), c);
    };
    u = function(f, I, v, C) {
      g = v, b(f ? f + "{" + I.styles + "}" : I.styles), C && (m.inserted[I.name] = !0);
    };
  }
  var m = {
    key: r,
    sheet: new Br({
      key: r,
      container: s,
      nonce: e.nonce,
      speedy: e.speedy,
      prepend: e.prepend,
      insertionPoint: e.insertionPoint
    }),
    nonce: e.nonce,
    inserted: a,
    registered: {},
    insert: u
  };
  return m.sheet.hydrate(d), m;
}, tt, Mt;
function ri() {
  if (Mt) return tt;
  Mt = 1;
  var t = lr(), e = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, i = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, n = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, a = {};
  a[t.ForwardRef] = i, a[t.Memo] = n;
  function s(m) {
    return t.isMemo(m) ? n : a[m.$$typeof] || e;
  }
  var d = Object.defineProperty, u = Object.getOwnPropertyNames, o = Object.getOwnPropertySymbols, g = Object.getOwnPropertyDescriptor, l = Object.getPrototypeOf, c = Object.prototype;
  function b(m, p, f) {
    if (typeof p != "string") {
      if (c) {
        var I = l(p);
        I && I !== c && b(m, I, f);
      }
      var v = u(p);
      o && (v = v.concat(o(p)));
      for (var C = s(m), E = s(p), S = 0; S < v.length; ++S) {
        var G = v[S];
        if (!r[G] && !(f && f[G]) && !(E && E[G]) && !(C && C[G])) {
          var h = g(p, G);
          try {
            d(m, G, h);
          } catch {
          }
        }
      }
    }
    return m;
  }
  return tt = b, tt;
}
ri();
var ii = !0;
function ui(t, e, r) {
  var i = "";
  return r.split(" ").forEach(function(n) {
    t[n] !== void 0 ? e.push(t[n] + ";") : n && (i += n + " ");
  }), i;
}
var Sn = function(e, r, i) {
  var n = e.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (i === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ii === !1) && e.registered[n] === void 0 && (e.registered[n] = r.styles);
}, ai = function(e, r, i) {
  Sn(e, r, i);
  var n = e.key + "-" + r.name;
  if (e.inserted[r.name] === void 0) {
    var a = r;
    do
      e.insert(r === a ? "." + n : "", a, e.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function oi(t) {
  for (var e = 0, r, i = 0, n = t.length; n >= 4; ++i, n -= 4)
    r = t.charCodeAt(i) & 255 | (t.charCodeAt(++i) & 255) << 8 | (t.charCodeAt(++i) & 255) << 16 | (t.charCodeAt(++i) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, e = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (n) {
    case 3:
      e ^= (t.charCodeAt(i + 2) & 255) << 16;
    case 2:
      e ^= (t.charCodeAt(i + 1) & 255) << 8;
    case 1:
      e ^= t.charCodeAt(i) & 255, e = /* Math.imul(h, m): */
      (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = /* Math.imul(h, m): */
  (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var si = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ci = /[A-Z]|^ms/g, li = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Vn = function(e) {
  return e.charCodeAt(1) === 45;
}, Dt = function(e) {
  return e != null && typeof e != "boolean";
}, nt = /* @__PURE__ */ _r(function(t) {
  return Vn(t) ? t : t.replace(ci, "-$&").toLowerCase();
}), Zt = function(e, r) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(li, function(i, n, a) {
          return ee = {
            name: n,
            styles: a,
            next: ee
          }, n;
        });
  }
  return si[e] !== 1 && !Vn(e) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Ve(t, e, r) {
  if (r == null)
    return "";
  var i = r;
  if (i.__emotion_styles !== void 0)
    return i;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var n = r;
      if (n.anim === 1)
        return ee = {
          name: n.name,
          styles: n.styles,
          next: ee
        }, n.name;
      var a = r;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            ee = {
              name: s.name,
              styles: s.styles,
              next: ee
            }, s = s.next;
        var d = a.styles + ";";
        return d;
      }
      return di(t, e, r);
    }
    case "function": {
      if (t !== void 0) {
        var u = ee, o = r(t);
        return ee = u, Ve(t, e, o);
      }
      break;
    }
  }
  var g = r;
  return g;
}
function di(t, e, r) {
  var i = "";
  if (Array.isArray(r))
    for (var n = 0; n < r.length; n++)
      i += Ve(t, e, r[n]) + ";";
  else
    for (var a in r) {
      var s = r[a];
      if (typeof s != "object") {
        var d = s;
        Dt(d) && (i += nt(a) + ":" + Zt(a, d) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && e == null)
        for (var u = 0; u < s.length; u++)
          Dt(s[u]) && (i += nt(a) + ":" + Zt(a, s[u]) + ";");
      else {
        var o = Ve(t, e, s);
        switch (a) {
          case "animation":
          case "animationName": {
            i += nt(a) + ":" + o + ";";
            break;
          }
          default:
            i += a + "{" + o + "}";
        }
      }
    }
  return i;
}
var Ht = /label:\s*([^\s;{]+)\s*(;|$)/g, ee;
function Rn(t, e, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var i = !0, n = "";
  ee = void 0;
  var a = t[0];
  if (a == null || a.raw === void 0)
    i = !1, n += Ve(r, e, a);
  else {
    var s = a;
    n += s[0];
  }
  for (var d = 1; d < t.length; d++)
    if (n += Ve(r, e, t[d]), i) {
      var u = a;
      n += u[d];
    }
  Ht.lastIndex = 0;
  for (var o = "", g; (g = Ht.exec(n)) !== null; )
    o += "-" + g[1];
  var l = oi(n) + o;
  return {
    name: l,
    styles: n,
    next: ee
  };
}
var gi = function(e) {
  return e();
}, bi = R.useInsertionEffect ? R.useInsertionEffect : !1, fi = bi || gi, Bn = /* @__PURE__ */ R.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ni({
    key: "css"
  }) : null
);
Bn.Provider;
var pi = function(e) {
  return /* @__PURE__ */ bn(function(r, i) {
    var n = fn(Bn);
    return e(r, n, i);
  });
}, Ii = /* @__PURE__ */ R.createContext({}), yt = {}.hasOwnProperty, ft = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", mi = function(e, r) {
  var i = {};
  for (var n in r)
    yt.call(r, n) && (i[n] = r[n]);
  return i[ft] = e, i;
}, vi = function(e) {
  var r = e.cache, i = e.serialized, n = e.isStringTag;
  return Sn(r, i, n), fi(function() {
    return ai(r, i, n);
  }), null;
}, hi = /* @__PURE__ */ pi(function(t, e, r) {
  var i = t.css;
  typeof i == "string" && e.registered[i] !== void 0 && (i = e.registered[i]);
  var n = t[ft], a = [i], s = "";
  typeof t.className == "string" ? s = ui(e.registered, a, t.className) : t.className != null && (s = t.className + " ");
  var d = Rn(a, void 0, R.useContext(Ii));
  s += e.key + "-" + d.name;
  var u = {};
  for (var o in t)
    yt.call(t, o) && o !== "css" && o !== ft && (u[o] = t[o]);
  return u.className = s, r && (u.ref = r), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(vi, {
    cache: e,
    serialized: d,
    isStringTag: typeof n == "string"
  }), /* @__PURE__ */ R.createElement(n, u));
}), Ci = hi, A = function(e, r) {
  var i = arguments;
  if (r == null || !yt.call(r, "css"))
    return R.createElement.apply(void 0, i);
  var n = i.length, a = new Array(n);
  a[0] = Ci, a[1] = mi(e, r);
  for (var s = 2; s < n; s++)
    a[s] = i[s];
  return R.createElement.apply(null, a);
};
(function(t) {
  var e;
  e || (e = t.JSX || (t.JSX = {}));
})(A || (A = {}));
function Gt() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return Rn(e);
}
function Ai() {
  var t = Gt.apply(void 0, arguments), e = "animation-" + t.name;
  return {
    name: e,
    styles: "@keyframes " + e + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
function yi(t, e) {
  return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, {
    raw: {
      value: Object.freeze(e)
    }
  }));
}
var Oe = { exports: {} }, H = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt;
function Gi() {
  if (Lt) return H;
  Lt = 1;
  var t = gn;
  function e(u) {
    var o = "https://react.dev/errors/" + u;
    if (1 < arguments.length) {
      o += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        o += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + u + "; visit " + o + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var i = {
    d: {
      f: r,
      r: function() {
        throw Error(e(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, n = Symbol.for("react.portal");
  function a(u, o, g) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: n,
      key: l == null ? null : "" + l,
      children: u,
      containerInfo: o,
      implementation: g
    };
  }
  var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(u, o) {
    if (u === "font") return "";
    if (typeof o == "string")
      return o === "use-credentials" ? o : "";
  }
  return H.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, H.createPortal = function(u, o) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!o || o.nodeType !== 1 && o.nodeType !== 9 && o.nodeType !== 11)
      throw Error(e(299));
    return a(u, o, null, g);
  }, H.flushSync = function(u) {
    var o = s.T, g = i.p;
    try {
      if (s.T = null, i.p = 2, u) return u();
    } finally {
      s.T = o, i.p = g, i.d.f();
    }
  }, H.preconnect = function(u, o) {
    typeof u == "string" && (o ? (o = o.crossOrigin, o = typeof o == "string" ? o === "use-credentials" ? o : "" : void 0) : o = null, i.d.C(u, o));
  }, H.prefetchDNS = function(u) {
    typeof u == "string" && i.d.D(u);
  }, H.preinit = function(u, o) {
    if (typeof u == "string" && o && typeof o.as == "string") {
      var g = o.as, l = d(g, o.crossOrigin), c = typeof o.integrity == "string" ? o.integrity : void 0, b = typeof o.fetchPriority == "string" ? o.fetchPriority : void 0;
      g === "style" ? i.d.S(
        u,
        typeof o.precedence == "string" ? o.precedence : void 0,
        {
          crossOrigin: l,
          integrity: c,
          fetchPriority: b
        }
      ) : g === "script" && i.d.X(u, {
        crossOrigin: l,
        integrity: c,
        fetchPriority: b,
        nonce: typeof o.nonce == "string" ? o.nonce : void 0
      });
    }
  }, H.preinitModule = function(u, o) {
    if (typeof u == "string")
      if (typeof o == "object" && o !== null) {
        if (o.as == null || o.as === "script") {
          var g = d(
            o.as,
            o.crossOrigin
          );
          i.d.M(u, {
            crossOrigin: g,
            integrity: typeof o.integrity == "string" ? o.integrity : void 0,
            nonce: typeof o.nonce == "string" ? o.nonce : void 0
          });
        }
      } else o == null && i.d.M(u);
  }, H.preload = function(u, o) {
    if (typeof u == "string" && typeof o == "object" && o !== null && typeof o.as == "string") {
      var g = o.as, l = d(g, o.crossOrigin);
      i.d.L(u, g, {
        crossOrigin: l,
        integrity: typeof o.integrity == "string" ? o.integrity : void 0,
        nonce: typeof o.nonce == "string" ? o.nonce : void 0,
        type: typeof o.type == "string" ? o.type : void 0,
        fetchPriority: typeof o.fetchPriority == "string" ? o.fetchPriority : void 0,
        referrerPolicy: typeof o.referrerPolicy == "string" ? o.referrerPolicy : void 0,
        imageSrcSet: typeof o.imageSrcSet == "string" ? o.imageSrcSet : void 0,
        imageSizes: typeof o.imageSizes == "string" ? o.imageSizes : void 0,
        media: typeof o.media == "string" ? o.media : void 0
      });
    }
  }, H.preloadModule = function(u, o) {
    if (typeof u == "string")
      if (o) {
        var g = d(o.as, o.crossOrigin);
        i.d.m(u, {
          as: typeof o.as == "string" && o.as !== "script" ? o.as : void 0,
          crossOrigin: g,
          integrity: typeof o.integrity == "string" ? o.integrity : void 0
        });
      } else i.d.m(u);
  }, H.requestFormReset = function(u) {
    i.d.r(u);
  }, H.unstable_batchedUpdates = function(u, o) {
    return u(o);
  }, H.useFormState = function(u, o, g) {
    return s.H.useFormState(u, o, g);
  }, H.useFormStatus = function() {
    return s.H.useHostTransitionStatus();
  }, H.version = "19.1.1", H;
}
var L = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function xi() {
  return Yt || (Yt = 1, process.env.NODE_ENV !== "production" && (function() {
    function t() {
    }
    function e(l) {
      return "" + l;
    }
    function r(l, c, b) {
      var m = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        e(m);
        var p = !1;
      } catch {
        p = !0;
      }
      return p && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object"
      ), e(m)), {
        $$typeof: o,
        key: m == null ? null : "" + m,
        children: l,
        containerInfo: c,
        implementation: b
      };
    }
    function i(l, c) {
      if (l === "font") return "";
      if (typeof c == "string")
        return c === "use-credentials" ? c : "";
    }
    function n(l) {
      return l === null ? "`null`" : l === void 0 ? "`undefined`" : l === "" ? "an empty string" : 'something with type "' + typeof l + '"';
    }
    function a(l) {
      return l === null ? "`null`" : l === void 0 ? "`undefined`" : l === "" ? "an empty string" : typeof l == "string" ? JSON.stringify(l) : typeof l == "number" ? "`" + l + "`" : 'something with type "' + typeof l + '"';
    }
    function s() {
      var l = g.H;
      return l === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), l;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var d = gn, u = {
      d: {
        f: t,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: t,
        C: t,
        L: t,
        m: t,
        X: t,
        S: t,
        M: t
      },
      p: 0,
      findDOMNode: null
    }, o = Symbol.for("react.portal"), g = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), L.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, L.createPortal = function(l, c) {
      var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!c || c.nodeType !== 1 && c.nodeType !== 9 && c.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return r(l, c, null, b);
    }, L.flushSync = function(l) {
      var c = g.T, b = u.p;
      try {
        if (g.T = null, u.p = 2, l)
          return l();
      } finally {
        g.T = c, u.p = b, u.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, L.preconnect = function(l, c) {
      typeof l == "string" && l ? c != null && typeof c != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        a(c)
      ) : c != null && typeof c.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        n(c.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        n(l)
      ), typeof l == "string" && (c ? (c = c.crossOrigin, c = typeof c == "string" ? c === "use-credentials" ? c : "" : void 0) : c = null, u.d.C(l, c));
    }, L.prefetchDNS = function(l) {
      if (typeof l != "string" || !l)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          n(l)
        );
      else if (1 < arguments.length) {
        var c = arguments[1];
        typeof c == "object" && c.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          a(c)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          a(c)
        );
      }
      typeof l == "string" && u.d.D(l);
    }, L.preinit = function(l, c) {
      if (typeof l == "string" && l ? c == null || typeof c != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        a(c)
      ) : c.as !== "style" && c.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        a(c.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        n(l)
      ), typeof l == "string" && c && typeof c.as == "string") {
        var b = c.as, m = i(b, c.crossOrigin), p = typeof c.integrity == "string" ? c.integrity : void 0, f = typeof c.fetchPriority == "string" ? c.fetchPriority : void 0;
        b === "style" ? u.d.S(
          l,
          typeof c.precedence == "string" ? c.precedence : void 0,
          {
            crossOrigin: m,
            integrity: p,
            fetchPriority: f
          }
        ) : b === "script" && u.d.X(l, {
          crossOrigin: m,
          integrity: p,
          fetchPriority: f,
          nonce: typeof c.nonce == "string" ? c.nonce : void 0
        });
      }
    }, L.preinitModule = function(l, c) {
      var b = "";
      if (typeof l == "string" && l || (b += " The `href` argument encountered was " + n(l) + "."), c !== void 0 && typeof c != "object" ? b += " The `options` argument encountered was " + n(c) + "." : c && "as" in c && c.as !== "script" && (b += " The `as` option encountered was " + a(c.as) + "."), b)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          b
        );
      else
        switch (b = c && typeof c.as == "string" ? c.as : "script", b) {
          case "script":
            break;
          default:
            b = a(b), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              b,
              l
            );
        }
      typeof l == "string" && (typeof c == "object" && c !== null ? (c.as == null || c.as === "script") && (b = i(
        c.as,
        c.crossOrigin
      ), u.d.M(l, {
        crossOrigin: b,
        integrity: typeof c.integrity == "string" ? c.integrity : void 0,
        nonce: typeof c.nonce == "string" ? c.nonce : void 0
      })) : c == null && u.d.M(l));
    }, L.preload = function(l, c) {
      var b = "";
      if (typeof l == "string" && l || (b += " The `href` argument encountered was " + n(l) + "."), c == null || typeof c != "object" ? b += " The `options` argument encountered was " + n(c) + "." : typeof c.as == "string" && c.as || (b += " The `as` option encountered was " + n(c.as) + "."), b && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        b
      ), typeof l == "string" && typeof c == "object" && c !== null && typeof c.as == "string") {
        b = c.as;
        var m = i(
          b,
          c.crossOrigin
        );
        u.d.L(l, b, {
          crossOrigin: m,
          integrity: typeof c.integrity == "string" ? c.integrity : void 0,
          nonce: typeof c.nonce == "string" ? c.nonce : void 0,
          type: typeof c.type == "string" ? c.type : void 0,
          fetchPriority: typeof c.fetchPriority == "string" ? c.fetchPriority : void 0,
          referrerPolicy: typeof c.referrerPolicy == "string" ? c.referrerPolicy : void 0,
          imageSrcSet: typeof c.imageSrcSet == "string" ? c.imageSrcSet : void 0,
          imageSizes: typeof c.imageSizes == "string" ? c.imageSizes : void 0,
          media: typeof c.media == "string" ? c.media : void 0
        });
      }
    }, L.preloadModule = function(l, c) {
      var b = "";
      typeof l == "string" && l || (b += " The `href` argument encountered was " + n(l) + "."), c !== void 0 && typeof c != "object" ? b += " The `options` argument encountered was " + n(c) + "." : c && "as" in c && typeof c.as != "string" && (b += " The `as` option encountered was " + n(c.as) + "."), b && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        b
      ), typeof l == "string" && (c ? (b = i(
        c.as,
        c.crossOrigin
      ), u.d.m(l, {
        as: typeof c.as == "string" && c.as !== "script" ? c.as : void 0,
        crossOrigin: b,
        integrity: typeof c.integrity == "string" ? c.integrity : void 0
      })) : u.d.m(l));
    }, L.requestFormReset = function(l) {
      u.d.r(l);
    }, L.unstable_batchedUpdates = function(l, c) {
      return l(c);
    }, L.useFormState = function(l, c, b) {
      return s().useFormState(l, c, b);
    }, L.useFormStatus = function() {
      return s().useHostTransitionStatus();
    }, L.version = "19.1.1", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), L;
}
var Jt;
function Ei() {
  if (Jt) return Oe.exports;
  Jt = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (e) {
        console.error(e);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (t(), Oe.exports = Gi()) : Oe.exports = xi(), Oe.exports;
}
var Si = Ei();
const Vi = Math.min, Ri = Math.max, Ye = Math.round, Pe = Math.floor, Je = (t) => ({
  x: t,
  y: t
});
function Bi(t) {
  const {
    x: e,
    y: r,
    width: i,
    height: n
  } = t;
  return {
    width: i,
    height: n,
    top: r,
    left: e,
    right: e + i,
    bottom: r + n,
    x: e,
    y: r
  };
}
function Ke() {
  return typeof window < "u";
}
function Fn(t) {
  return On(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function se(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Xn(t) {
  var e;
  return (e = (On(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function On(t) {
  return Ke() ? t instanceof Node || t instanceof se(t).Node : !1;
}
function Fi(t) {
  return Ke() ? t instanceof Element || t instanceof se(t).Element : !1;
}
function xt(t) {
  return Ke() ? t instanceof HTMLElement || t instanceof se(t).HTMLElement : !1;
}
function zt(t) {
  return !Ke() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof se(t).ShadowRoot;
}
const Xi = /* @__PURE__ */ new Set(["inline", "contents"]);
function Pn(t) {
  const {
    overflow: e,
    overflowX: r,
    overflowY: i,
    display: n
  } = Et(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + i + r) && !Xi.has(n);
}
function Oi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Pi = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function wi(t) {
  return Pi.has(Fn(t));
}
function Et(t) {
  return se(t).getComputedStyle(t);
}
function Ti(t) {
  if (Fn(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    zt(t) && t.host || // Fallback.
    Xn(t)
  );
  return zt(e) ? e.host : e;
}
function wn(t) {
  const e = Ti(t);
  return wi(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : xt(e) && Pn(e) ? e : wn(e);
}
function ze(t, e, r) {
  var i;
  e === void 0 && (e = []), r === void 0 && (r = !0);
  const n = wn(t), a = n === ((i = t.ownerDocument) == null ? void 0 : i.body), s = se(n);
  if (a) {
    const d = pt(s);
    return e.concat(s, s.visualViewport || [], Pn(n) ? n : [], d && r ? ze(d) : []);
  }
  return e.concat(n, ze(n, [], r));
}
function pt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Ni(t) {
  const e = Et(t);
  let r = parseFloat(e.width) || 0, i = parseFloat(e.height) || 0;
  const n = xt(t), a = n ? t.offsetWidth : r, s = n ? t.offsetHeight : i, d = Ye(r) !== a || Ye(i) !== s;
  return d && (r = a, i = s), {
    width: r,
    height: i,
    $: d
  };
}
function St(t) {
  return Fi(t) ? t : t.contextElement;
}
function kt(t) {
  const e = St(t);
  if (!xt(e))
    return Je(1);
  const r = e.getBoundingClientRect(), {
    width: i,
    height: n,
    $: a
  } = Ni(e);
  let s = (a ? Ye(r.width) : r.width) / i, d = (a ? Ye(r.height) : r.height) / n;
  return (!s || !Number.isFinite(s)) && (s = 1), (!d || !Number.isFinite(d)) && (d = 1), {
    x: s,
    y: d
  };
}
const Wi = /* @__PURE__ */ Je(0);
function Mi(t) {
  const e = se(t);
  return !Oi() || !e.visualViewport ? Wi : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Di(t, e, r) {
  return !1;
}
function jt(t, e, r, i) {
  e === void 0 && (e = !1);
  const n = t.getBoundingClientRect(), a = St(t);
  let s = Je(1);
  e && (s = kt(t));
  const d = Di() ? Mi(a) : Je(0);
  let u = (n.left + d.x) / s.x, o = (n.top + d.y) / s.y, g = n.width / s.x, l = n.height / s.y;
  if (a) {
    const c = se(a), b = i;
    let m = c, p = pt(m);
    for (; p && i && b !== m; ) {
      const f = kt(p), I = p.getBoundingClientRect(), v = Et(p), C = I.left + (p.clientLeft + parseFloat(v.paddingLeft)) * f.x, E = I.top + (p.clientTop + parseFloat(v.paddingTop)) * f.y;
      u *= f.x, o *= f.y, g *= f.x, l *= f.y, u += C, o += E, m = se(p), p = pt(m);
    }
  }
  return Bi({
    width: g,
    height: l,
    x: u,
    y: o
  });
}
function Tn(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Zi(t, e) {
  let r = null, i;
  const n = Xn(t);
  function a() {
    var d;
    clearTimeout(i), (d = r) == null || d.disconnect(), r = null;
  }
  function s(d, u) {
    d === void 0 && (d = !1), u === void 0 && (u = 1), a();
    const o = t.getBoundingClientRect(), {
      left: g,
      top: l,
      width: c,
      height: b
    } = o;
    if (d || e(), !c || !b)
      return;
    const m = Pe(l), p = Pe(n.clientWidth - (g + c)), f = Pe(n.clientHeight - (l + b)), I = Pe(g), C = {
      rootMargin: -m + "px " + -p + "px " + -f + "px " + -I + "px",
      threshold: Ri(0, Vi(1, u)) || 1
    };
    let E = !0;
    function S(G) {
      const h = G[0].intersectionRatio;
      if (h !== u) {
        if (!E)
          return s();
        h ? s(!1, h) : i = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      h === 1 && !Tn(o, t.getBoundingClientRect()) && s(), E = !1;
    }
    try {
      r = new IntersectionObserver(S, {
        ...C,
        // Handle <iframe>s
        root: n.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(S, C);
    }
    r.observe(t);
  }
  return s(!0), a;
}
function Hi(t, e, r, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: d = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = i, o = St(t), g = n || a ? [...o ? ze(o) : [], ...ze(e)] : [];
  g.forEach((I) => {
    n && I.addEventListener("scroll", r, {
      passive: !0
    }), a && I.addEventListener("resize", r);
  });
  const l = o && d ? Zi(o, r) : null;
  let c = -1, b = null;
  s && (b = new ResizeObserver((I) => {
    let [v] = I;
    v && v.target === o && b && (b.unobserve(e), cancelAnimationFrame(c), c = requestAnimationFrame(() => {
      var C;
      (C = b) == null || C.observe(e);
    })), r();
  }), o && !u && b.observe(o), b.observe(e));
  let m, p = u ? jt(t) : null;
  u && f();
  function f() {
    const I = jt(t);
    p && !Tn(p, I) && r(), p = I, m = requestAnimationFrame(f);
  }
  return r(), () => {
    var I;
    g.forEach((v) => {
      n && v.removeEventListener("scroll", r), a && v.removeEventListener("resize", r);
    }), l?.(), (I = b) == null || I.disconnect(), b = null, u && cancelAnimationFrame(m);
  };
}
var It = or, Li = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], ke = function() {
};
function Yi(t, e) {
  return e ? e[0] === "-" ? t + e : t + "__" + e : t;
}
function Ji(t, e) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
    i[n - 2] = arguments[n];
  var a = [].concat(i);
  if (e && t)
    for (var s in e)
      e.hasOwnProperty(s) && e[s] && a.push("".concat(Yi(t, s)));
  return a.filter(function(d) {
    return d;
  }).map(function(d) {
    return String(d).trim();
  }).join(" ");
}
var _t = function(e) {
  return qi(e) ? e.filter(Boolean) : pe(e) === "object" && e !== null ? [e] : [];
}, Nn = function(e) {
  e.className, e.clearValue, e.cx, e.getStyles, e.getClassNames, e.getValue, e.hasValue, e.isMulti, e.isRtl, e.options, e.selectOption, e.selectProps, e.setValue, e.theme;
  var r = ce(e, Li);
  return y({}, r);
}, P = function(e, r, i) {
  var n = e.cx, a = e.getStyles, s = e.getClassNames, d = e.className;
  return {
    css: a(r, e),
    className: n(i ?? {}, s(r, e), d)
  };
};
function qe(t) {
  return [document.documentElement, document.body, window].indexOf(t) > -1;
}
function zi(t) {
  return qe(t) ? window.innerHeight : t.clientHeight;
}
function Wn(t) {
  return qe(t) ? window.pageYOffset : t.scrollTop;
}
function je(t, e) {
  if (qe(t)) {
    window.scrollTo(0, e);
    return;
  }
  t.scrollTop = e;
}
function ki(t) {
  var e = getComputedStyle(t), r = e.position === "absolute", i = /(auto|scroll)/;
  if (e.position === "fixed") return document.documentElement;
  for (var n = t; n = n.parentElement; )
    if (e = getComputedStyle(n), !(r && e.position === "static") && i.test(e.overflow + e.overflowY + e.overflowX))
      return n;
  return document.documentElement;
}
function ji(t, e, r, i) {
  return r * ((t = t / i - 1) * t * t + 1) + e;
}
function we(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ke, n = Wn(t), a = e - n, s = 10, d = 0;
  function u() {
    d += s;
    var o = ji(d, n, a, r);
    je(t, o), d < r ? window.requestAnimationFrame(u) : i(t);
  }
  u();
}
function Ut(t, e) {
  var r = t.getBoundingClientRect(), i = e.getBoundingClientRect(), n = e.offsetHeight / 3;
  i.bottom + n > r.bottom ? je(t, Math.min(e.offsetTop + e.clientHeight - t.offsetHeight + n, t.scrollHeight)) : i.top - n < r.top && je(t, Math.max(e.offsetTop - n, 0));
}
function _i(t) {
  var e = t.getBoundingClientRect();
  return {
    bottom: e.bottom,
    height: e.height,
    left: e.left,
    right: e.right,
    top: e.top,
    width: e.width
  };
}
function Qt() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function Ui() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var Mn = !1, Qi = {
  get passive() {
    return Mn = !0;
  }
}, Te = typeof window < "u" ? window : {};
Te.addEventListener && Te.removeEventListener && (Te.addEventListener("p", ke, Qi), Te.removeEventListener("p", ke, !1));
var $i = Mn;
function Ki(t) {
  return t != null;
}
function qi(t) {
  return Array.isArray(t);
}
function Ne(t, e, r) {
  return t ? e : r;
}
var eu = function(e) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    i[n - 1] = arguments[n];
  var a = Object.entries(e).filter(function(s) {
    var d = oe(s, 1), u = d[0];
    return !i.includes(u);
  });
  return a.reduce(function(s, d) {
    var u = oe(d, 2), o = u[0], g = u[1];
    return s[o] = g, s;
  }, {});
}, tu = ["children", "innerProps"], nu = ["children", "innerProps"];
function ru(t) {
  var e = t.maxHeight, r = t.menuEl, i = t.minHeight, n = t.placement, a = t.shouldScroll, s = t.isFixedPosition, d = t.controlHeight, u = ki(r), o = {
    placement: "bottom",
    maxHeight: e
  };
  if (!r || !r.offsetParent) return o;
  var g = u.getBoundingClientRect(), l = g.height, c = r.getBoundingClientRect(), b = c.bottom, m = c.height, p = c.top, f = r.offsetParent.getBoundingClientRect(), I = f.top, v = s ? window.innerHeight : zi(u), C = Wn(u), E = parseInt(getComputedStyle(r).marginBottom, 10), S = parseInt(getComputedStyle(r).marginTop, 10), G = I - S, h = v - p, V = G + C, O = l - C - p, D = b - v + C + E, z = C + p - S, Z = 160;
  switch (n) {
    case "auto":
    case "bottom":
      if (h >= m)
        return {
          placement: "bottom",
          maxHeight: e
        };
      if (O >= m && !s)
        return a && we(u, D, Z), {
          placement: "bottom",
          maxHeight: e
        };
      if (!s && O >= i || s && h >= i) {
        a && we(u, D, Z);
        var ne = s ? h - E : O - E;
        return {
          placement: "bottom",
          maxHeight: ne
        };
      }
      if (n === "auto" || s) {
        var re = e, W = s ? G : V;
        return W >= i && (re = Math.min(W - E - d, e)), {
          placement: "top",
          maxHeight: re
        };
      }
      if (n === "bottom")
        return a && je(u, D), {
          placement: "bottom",
          maxHeight: e
        };
      break;
    case "top":
      if (G >= m)
        return {
          placement: "top",
          maxHeight: e
        };
      if (V >= m && !s)
        return a && we(u, z, Z), {
          placement: "top",
          maxHeight: e
        };
      if (!s && V >= i || s && G >= i) {
        var T = e;
        return (!s && V >= i || s && G >= i) && (T = s ? G - S : V - S), a && we(u, z, Z), {
          placement: "top",
          maxHeight: T
        };
      }
      return {
        placement: "bottom",
        maxHeight: e
      };
    default:
      throw new Error('Invalid placement provided "'.concat(n, '".'));
  }
  return o;
}
function iu(t) {
  var e = {
    bottom: "top",
    top: "bottom"
  };
  return t ? e[t] : "bottom";
}
var Dn = function(e) {
  return e === "auto" ? "bottom" : e;
}, uu = function(e, r) {
  var i, n = e.placement, a = e.theme, s = a.borderRadius, d = a.spacing, u = a.colors;
  return y((i = {
    label: "menu"
  }, Ge(i, iu(n), "100%"), Ge(i, "position", "absolute"), Ge(i, "width", "100%"), Ge(i, "zIndex", 1), i), r ? {} : {
    backgroundColor: u.neutral0,
    borderRadius: s,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: d.menuGutter,
    marginTop: d.menuGutter
  });
}, Zn = /* @__PURE__ */ sr(null), au = function(e) {
  var r = e.children, i = e.minMenuHeight, n = e.maxMenuHeight, a = e.menuPlacement, s = e.menuPosition, d = e.menuShouldScrollIntoView, u = e.theme, o = fn(Zn) || {}, g = o.setPortalPlacement, l = ae(null), c = fe(n), b = oe(c, 2), m = b[0], p = b[1], f = fe(null), I = oe(f, 2), v = I[0], C = I[1], E = u.spacing.controlHeight;
  return It(function() {
    var S = l.current;
    if (S) {
      var G = s === "fixed", h = d && !G, V = ru({
        maxHeight: n,
        menuEl: S,
        minHeight: i,
        placement: a,
        shouldScroll: h,
        isFixedPosition: G,
        controlHeight: E
      });
      p(V.maxHeight), C(V.placement), g?.(V.placement);
    }
  }, [n, a, s, d, i, g, E]), r({
    ref: l,
    placerProps: y(y({}, e), {}, {
      placement: v || Dn(a),
      maxHeight: m
    })
  });
}, ou = function(e) {
  var r = e.children, i = e.innerRef, n = e.innerProps;
  return A("div", x({}, P(e, "menu", {
    menu: !0
  }), {
    ref: i
  }, n), r);
}, su = ou, cu = function(e, r) {
  var i = e.maxHeight, n = e.theme.spacing.baseUnit;
  return y({
    maxHeight: i,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, r ? {} : {
    paddingBottom: n,
    paddingTop: n
  });
}, lu = function(e) {
  var r = e.children, i = e.innerProps, n = e.innerRef, a = e.isMulti;
  return A("div", x({}, P(e, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": a
  }), {
    ref: n
  }, i), r);
}, Hn = function(e, r) {
  var i = e.theme, n = i.spacing.baseUnit, a = i.colors;
  return y({
    textAlign: "center"
  }, r ? {} : {
    color: a.neutral40,
    padding: "".concat(n * 2, "px ").concat(n * 3, "px")
  });
}, du = Hn, gu = Hn, bu = function(e) {
  var r = e.children, i = r === void 0 ? "No options" : r, n = e.innerProps, a = ce(e, tu);
  return A("div", x({}, P(y(y({}, a), {}, {
    children: i,
    innerProps: n
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), n), i);
}, fu = function(e) {
  var r = e.children, i = r === void 0 ? "Loading..." : r, n = e.innerProps, a = ce(e, nu);
  return A("div", x({}, P(y(y({}, a), {}, {
    children: i,
    innerProps: n
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), n), i);
}, pu = function(e) {
  var r = e.rect, i = e.offset, n = e.position;
  return {
    left: r.left,
    position: n,
    top: i,
    width: r.width,
    zIndex: 1
  };
}, Iu = function(e) {
  var r = e.appendTo, i = e.children, n = e.controlElement, a = e.innerProps, s = e.menuPlacement, d = e.menuPosition, u = ae(null), o = ae(null), g = fe(Dn(s)), l = oe(g, 2), c = l[0], b = l[1], m = me(function() {
    return {
      setPortalPlacement: b
    };
  }, []), p = fe(null), f = oe(p, 2), I = f[0], v = f[1], C = J(function() {
    if (n) {
      var h = _i(n), V = d === "fixed" ? 0 : window.pageYOffset, O = h[c] + V;
      (O !== I?.offset || h.left !== I?.rect.left || h.width !== I?.rect.width) && v({
        offset: O,
        rect: h
      });
    }
  }, [n, d, c, I?.offset, I?.rect.left, I?.rect.width]);
  It(function() {
    C();
  }, [C]);
  var E = J(function() {
    typeof o.current == "function" && (o.current(), o.current = null), n && u.current && (o.current = Hi(n, u.current, C, {
      elementResize: "ResizeObserver" in window
    }));
  }, [n, C]);
  It(function() {
    E();
  }, [E]);
  var S = J(function(h) {
    u.current = h, E();
  }, [E]);
  if (!r && d !== "fixed" || !I) return null;
  var G = A("div", x({
    ref: S
  }, P(y(y({}, e), {}, {
    offset: I.offset,
    position: d,
    rect: I.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), a), i);
  return A(Zn.Provider, {
    value: m
  }, r ? /* @__PURE__ */ Si.createPortal(G, r) : G);
}, mu = function(e) {
  var r = e.isDisabled, i = e.isRtl;
  return {
    label: "container",
    direction: i ? "rtl" : void 0,
    pointerEvents: r ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, vu = function(e) {
  var r = e.children, i = e.innerProps, n = e.isDisabled, a = e.isRtl;
  return A("div", x({}, P(e, "container", {
    "--is-disabled": n,
    "--is-rtl": a
  }), i), r);
}, hu = function(e, r) {
  var i = e.theme.spacing, n = e.isMulti, a = e.hasValue, s = e.selectProps.controlShouldRenderValue;
  return y({
    alignItems: "center",
    display: n && a && s ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, r ? {} : {
    padding: "".concat(i.baseUnit / 2, "px ").concat(i.baseUnit * 2, "px")
  });
}, Cu = function(e) {
  var r = e.children, i = e.innerProps, n = e.isMulti, a = e.hasValue;
  return A("div", x({}, P(e, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": n,
    "value-container--has-value": a
  }), i), r);
}, Au = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, yu = function(e) {
  var r = e.children, i = e.innerProps;
  return A("div", x({}, P(e, "indicatorsContainer", {
    indicators: !0
  }), i), r);
}, $t, Gu = ["size"], xu = ["innerProps", "isRtl", "size"];
function Eu() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Su = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: Eu
}, Ln = function(e) {
  var r = e.size, i = ce(e, Gu);
  return A("svg", x({
    height: r,
    width: r,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: Su
  }, i));
}, Vt = function(e) {
  return A(Ln, x({
    size: 20
  }, e), A("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, Yn = function(e) {
  return A(Ln, x({
    size: 20
  }, e), A("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, Jn = function(e, r) {
  var i = e.isFocused, n = e.theme, a = n.spacing.baseUnit, s = n.colors;
  return y({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, r ? {} : {
    color: i ? s.neutral60 : s.neutral20,
    padding: a * 2,
    ":hover": {
      color: i ? s.neutral80 : s.neutral40
    }
  });
}, Vu = Jn, Ru = function(e) {
  var r = e.children, i = e.innerProps;
  return A("div", x({}, P(e, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), i), r || A(Yn, null));
}, Bu = Jn, Fu = function(e) {
  var r = e.children, i = e.innerProps;
  return A("div", x({}, P(e, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), i), r || A(Vt, null));
}, Xu = function(e, r) {
  var i = e.isDisabled, n = e.theme, a = n.spacing.baseUnit, s = n.colors;
  return y({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, r ? {} : {
    backgroundColor: i ? s.neutral10 : s.neutral20,
    marginBottom: a * 2,
    marginTop: a * 2
  });
}, Ou = function(e) {
  var r = e.innerProps;
  return A("span", x({}, r, P(e, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, Pu = Ai($t || ($t = yi([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), wu = function(e, r) {
  var i = e.isFocused, n = e.size, a = e.theme, s = a.colors, d = a.spacing.baseUnit;
  return y({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: n,
    lineHeight: 1,
    marginRight: n,
    textAlign: "center",
    verticalAlign: "middle"
  }, r ? {} : {
    color: i ? s.neutral60 : s.neutral20,
    padding: d * 2
  });
}, rt = function(e) {
  var r = e.delay, i = e.offset;
  return A("span", {
    css: /* @__PURE__ */ Gt({
      animation: "".concat(Pu, " 1s ease-in-out ").concat(r, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: i ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
}, Tu = function(e) {
  var r = e.innerProps, i = e.isRtl, n = e.size, a = n === void 0 ? 4 : n, s = ce(e, xu);
  return A("div", x({}, P(y(y({}, s), {}, {
    innerProps: r,
    isRtl: i,
    size: a
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), r), A(rt, {
    delay: 0,
    offset: i
  }), A(rt, {
    delay: 160,
    offset: !0
  }), A(rt, {
    delay: 320,
    offset: !i
  }));
}, Nu = function(e, r) {
  var i = e.isDisabled, n = e.isFocused, a = e.theme, s = a.colors, d = a.borderRadius, u = a.spacing;
  return y({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: u.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, r ? {} : {
    backgroundColor: i ? s.neutral5 : s.neutral0,
    borderColor: i ? s.neutral10 : n ? s.primary : s.neutral20,
    borderRadius: d,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: n ? "0 0 0 1px ".concat(s.primary) : void 0,
    "&:hover": {
      borderColor: n ? s.primary : s.neutral30
    }
  });
}, Wu = function(e) {
  var r = e.children, i = e.isDisabled, n = e.isFocused, a = e.innerRef, s = e.innerProps, d = e.menuIsOpen;
  return A("div", x({
    ref: a
  }, P(e, "control", {
    control: !0,
    "control--is-disabled": i,
    "control--is-focused": n,
    "control--menu-is-open": d
  }), s, {
    "aria-disabled": i || void 0
  }), r);
}, Mu = Wu, Du = ["data"], Zu = function(e, r) {
  var i = e.theme.spacing;
  return r ? {} : {
    paddingBottom: i.baseUnit * 2,
    paddingTop: i.baseUnit * 2
  };
}, Hu = function(e) {
  var r = e.children, i = e.cx, n = e.getStyles, a = e.getClassNames, s = e.Heading, d = e.headingProps, u = e.innerProps, o = e.label, g = e.theme, l = e.selectProps;
  return A("div", x({}, P(e, "group", {
    group: !0
  }), u), A(s, x({}, d, {
    selectProps: l,
    theme: g,
    getStyles: n,
    getClassNames: a,
    cx: i
  }), o), A("div", null, r));
}, Lu = function(e, r) {
  var i = e.theme, n = i.colors, a = i.spacing;
  return y({
    label: "group",
    cursor: "default",
    display: "block"
  }, r ? {} : {
    color: n.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: a.baseUnit * 3,
    paddingRight: a.baseUnit * 3,
    textTransform: "uppercase"
  });
}, Yu = function(e) {
  var r = Nn(e);
  r.data;
  var i = ce(r, Du);
  return A("div", x({}, P(e, "groupHeading", {
    "group-heading": !0
  }), i));
}, Ju = Hu, zu = ["innerRef", "isDisabled", "isHidden", "inputClassName"], ku = function(e, r) {
  var i = e.isDisabled, n = e.value, a = e.theme, s = a.spacing, d = a.colors;
  return y(y({
    visibility: i ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: n ? "translateZ(0)" : ""
  }, ju), r ? {} : {
    margin: s.baseUnit / 2,
    paddingBottom: s.baseUnit / 2,
    paddingTop: s.baseUnit / 2,
    color: d.neutral80
  });
}, zn = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, ju = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": y({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, zn)
}, _u = function(e) {
  return y({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: e ? 0 : 1,
    width: "100%"
  }, zn);
}, Uu = function(e) {
  var r = e.cx, i = e.value, n = Nn(e), a = n.innerRef, s = n.isDisabled, d = n.isHidden, u = n.inputClassName, o = ce(n, zu);
  return A("div", x({}, P(e, "input", {
    "input-container": !0
  }), {
    "data-value": i || ""
  }), A("input", x({
    className: r({
      input: !0
    }, u),
    ref: a,
    style: _u(d),
    disabled: s
  }, o)));
}, Qu = Uu, $u = function(e, r) {
  var i = e.theme, n = i.spacing, a = i.borderRadius, s = i.colors;
  return y({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, r ? {} : {
    backgroundColor: s.neutral10,
    borderRadius: a / 2,
    margin: n.baseUnit / 2
  });
}, Ku = function(e, r) {
  var i = e.theme, n = i.borderRadius, a = i.colors, s = e.cropWithEllipsis;
  return y({
    overflow: "hidden",
    textOverflow: s || s === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, r ? {} : {
    borderRadius: n / 2,
    color: a.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, qu = function(e, r) {
  var i = e.theme, n = i.spacing, a = i.borderRadius, s = i.colors, d = e.isFocused;
  return y({
    alignItems: "center",
    display: "flex"
  }, r ? {} : {
    borderRadius: a / 2,
    backgroundColor: d ? s.dangerLight : void 0,
    paddingLeft: n.baseUnit,
    paddingRight: n.baseUnit,
    ":hover": {
      backgroundColor: s.dangerLight,
      color: s.danger
    }
  });
}, kn = function(e) {
  var r = e.children, i = e.innerProps;
  return A("div", i, r);
}, ea = kn, ta = kn;
function na(t) {
  var e = t.children, r = t.innerProps;
  return A("div", x({
    role: "button"
  }, r), e || A(Vt, {
    size: 14
  }));
}
var ra = function(e) {
  var r = e.children, i = e.components, n = e.data, a = e.innerProps, s = e.isDisabled, d = e.removeProps, u = e.selectProps, o = i.Container, g = i.Label, l = i.Remove;
  return A(o, {
    data: n,
    innerProps: y(y({}, P(e, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": s
    })), a),
    selectProps: u
  }, A(g, {
    data: n,
    innerProps: y({}, P(e, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: u
  }, r), A(l, {
    data: n,
    innerProps: y(y({}, P(e, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(r || "option")
    }, d),
    selectProps: u
  }));
}, ia = ra, ua = function(e, r) {
  var i = e.isDisabled, n = e.isFocused, a = e.isSelected, s = e.theme, d = s.spacing, u = s.colors;
  return y({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, r ? {} : {
    backgroundColor: a ? u.primary : n ? u.primary25 : "transparent",
    color: i ? u.neutral20 : a ? u.neutral0 : "inherit",
    padding: "".concat(d.baseUnit * 2, "px ").concat(d.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: i ? void 0 : a ? u.primary : u.primary50
    }
  });
}, aa = function(e) {
  var r = e.children, i = e.isDisabled, n = e.isFocused, a = e.isSelected, s = e.innerRef, d = e.innerProps;
  return A("div", x({}, P(e, "option", {
    option: !0,
    "option--is-disabled": i,
    "option--is-focused": n,
    "option--is-selected": a
  }), {
    ref: s,
    "aria-disabled": i
  }, d), r);
}, oa = aa, sa = function(e, r) {
  var i = e.theme, n = i.spacing, a = i.colors;
  return y({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, r ? {} : {
    color: a.neutral50,
    marginLeft: n.baseUnit / 2,
    marginRight: n.baseUnit / 2
  });
}, ca = function(e) {
  var r = e.children, i = e.innerProps;
  return A("div", x({}, P(e, "placeholder", {
    placeholder: !0
  }), i), r);
}, la = ca, da = function(e, r) {
  var i = e.isDisabled, n = e.theme, a = n.spacing, s = n.colors;
  return y({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, r ? {} : {
    color: i ? s.neutral40 : s.neutral80,
    marginLeft: a.baseUnit / 2,
    marginRight: a.baseUnit / 2
  });
}, ga = function(e) {
  var r = e.children, i = e.isDisabled, n = e.innerProps;
  return A("div", x({}, P(e, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": i
  }), n), r);
}, ba = ga, xe = {
  ClearIndicator: Fu,
  Control: Mu,
  DropdownIndicator: Ru,
  DownChevron: Yn,
  CrossIcon: Vt,
  Group: Ju,
  GroupHeading: Yu,
  IndicatorsContainer: yu,
  IndicatorSeparator: Ou,
  Input: Qu,
  LoadingIndicator: Tu,
  Menu: su,
  MenuList: lu,
  MenuPortal: Iu,
  LoadingMessage: fu,
  NoOptionsMessage: bu,
  MultiValue: ia,
  MultiValueContainer: ea,
  MultiValueLabel: ta,
  MultiValueRemove: na,
  Option: oa,
  Placeholder: la,
  SelectContainer: vu,
  SingleValue: ba,
  ValueContainer: Cu
}, fa = function(e) {
  return y(y({}, xe), e.components);
}, Kt = Number.isNaN || function(e) {
  return typeof e == "number" && e !== e;
};
function pa(t, e) {
  return !!(t === e || Kt(t) && Kt(e));
}
function Ia(t, e) {
  if (t.length !== e.length)
    return !1;
  for (var r = 0; r < t.length; r++)
    if (!pa(t[r], e[r]))
      return !1;
  return !0;
}
function ma(t, e) {
  e === void 0 && (e = Ia);
  var r = null;
  function i() {
    for (var n = [], a = 0; a < arguments.length; a++)
      n[a] = arguments[a];
    if (r && r.lastThis === this && e(n, r.lastArgs))
      return r.lastResult;
    var s = t.apply(this, n);
    return r = {
      lastResult: s,
      lastArgs: n,
      lastThis: this
    }, s;
  }
  return i.clear = function() {
    r = null;
  }, i;
}
function va() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var ha = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: va
}, Ca = function(e) {
  return A("span", x({
    css: ha
  }, e));
}, qt = Ca, Aa = {
  guidance: function(e) {
    var r = e.isSearchable, i = e.isMulti, n = e.tabSelectsValue, a = e.context, s = e.isInitialFocus;
    switch (a) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(n ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return s ? "".concat(e["aria-label"] || "Select", " is focused ").concat(r ? ",type to refine list" : "", ", press Down to open the menu, ").concat(i ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(e) {
    var r = e.action, i = e.label, n = i === void 0 ? "" : i, a = e.labels, s = e.isDisabled;
    switch (r) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(n, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(a.length > 1 ? "s" : "", " ").concat(a.join(","), ", selected.");
      case "select-option":
        return s ? "option ".concat(n, " is disabled. Select another option.") : "option ".concat(n, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(e) {
    var r = e.context, i = e.focused, n = e.options, a = e.label, s = a === void 0 ? "" : a, d = e.selectValue, u = e.isDisabled, o = e.isSelected, g = e.isAppleDevice, l = function(p, f) {
      return p && p.length ? "".concat(p.indexOf(f) + 1, " of ").concat(p.length) : "";
    };
    if (r === "value" && d)
      return "value ".concat(s, " focused, ").concat(l(d, i), ".");
    if (r === "menu" && g) {
      var c = u ? " disabled" : "", b = "".concat(o ? " selected" : "").concat(c);
      return "".concat(s).concat(b, ", ").concat(l(n, i), ".");
    }
    return "";
  },
  onFilter: function(e) {
    var r = e.inputValue, i = e.resultsMessage;
    return "".concat(i).concat(r ? " for search term " + r : "", ".");
  }
}, ya = function(e) {
  var r = e.ariaSelection, i = e.focusedOption, n = e.focusedValue, a = e.focusableOptions, s = e.isFocused, d = e.selectValue, u = e.selectProps, o = e.id, g = e.isAppleDevice, l = u.ariaLiveMessages, c = u.getOptionLabel, b = u.inputValue, m = u.isMulti, p = u.isOptionDisabled, f = u.isSearchable, I = u.menuIsOpen, v = u.options, C = u.screenReaderStatus, E = u.tabSelectsValue, S = u.isLoading, G = u["aria-label"], h = u["aria-live"], V = me(function() {
    return y(y({}, Aa), l || {});
  }, [l]), O = me(function() {
    var W = "";
    if (r && V.onChange) {
      var T = r.option, $ = r.options, U = r.removedValue, le = r.removedValues, de = r.value, Be = function(ue) {
        return Array.isArray(ue) ? null : ue;
      }, N = U || T || Be(de), j = N ? c(N) : "", ie = $ || le || void 0, ge = ie ? ie.map(c) : [], Q = y({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: N && p(N, d),
        label: j,
        labels: ge
      }, r);
      W = V.onChange(Q);
    }
    return W;
  }, [r, V, p, d, c]), D = me(function() {
    var W = "", T = i || n, $ = !!(i && d && d.includes(i));
    if (T && V.onFocus) {
      var U = {
        focused: T,
        label: c(T),
        isDisabled: p(T, d),
        isSelected: $,
        options: a,
        context: T === i ? "menu" : "value",
        selectValue: d,
        isAppleDevice: g
      };
      W = V.onFocus(U);
    }
    return W;
  }, [i, n, c, p, V, a, d, g]), z = me(function() {
    var W = "";
    if (I && v.length && !S && V.onFilter) {
      var T = C({
        count: a.length
      });
      W = V.onFilter({
        inputValue: b,
        resultsMessage: T
      });
    }
    return W;
  }, [a, b, I, V, v, C, S]), Z = r?.action === "initial-input-focus", ne = me(function() {
    var W = "";
    if (V.guidance) {
      var T = n ? "value" : I ? "menu" : "input";
      W = V.guidance({
        "aria-label": G,
        context: T,
        isDisabled: i && p(i, d),
        isMulti: m,
        isSearchable: f,
        tabSelectsValue: E,
        isInitialFocus: Z
      });
    }
    return W;
  }, [G, i, n, m, p, f, I, V, d, E, Z]), re = A(ct, null, A("span", {
    id: "aria-selection"
  }, O), A("span", {
    id: "aria-focused"
  }, D), A("span", {
    id: "aria-results"
  }, z), A("span", {
    id: "aria-guidance"
  }, ne));
  return A(ct, null, A(qt, {
    id: o
  }, Z && re), A(qt, {
    "aria-live": h,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, s && !Z && re));
}, Ga = ya, mt = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], xa = new RegExp("[" + mt.map(function(t) {
  return t.letters;
}).join("") + "]", "g"), jn = {};
for (var it = 0; it < mt.length; it++)
  for (var ut = mt[it], at = 0; at < ut.letters.length; at++)
    jn[ut.letters[at]] = ut.base;
var _n = function(e) {
  return e.replace(xa, function(r) {
    return jn[r];
  });
}, Ea = ma(_n), en = function(e) {
  return e.replace(/^\s+|\s+$/g, "");
}, Sa = function(e) {
  return "".concat(e.label, " ").concat(e.value);
}, Va = function(e) {
  return function(r, i) {
    if (r.data.__isNew__) return !0;
    var n = y({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: Sa,
      trim: !0,
      matchFrom: "any"
    }, e), a = n.ignoreCase, s = n.ignoreAccents, d = n.stringify, u = n.trim, o = n.matchFrom, g = u ? en(i) : i, l = u ? en(d(r)) : d(r);
    return a && (g = g.toLowerCase(), l = l.toLowerCase()), s && (g = Ea(g), l = _n(l)), o === "start" ? l.substr(0, g.length) === g : l.indexOf(g) > -1;
  };
}, Ra = ["innerRef"];
function Ba(t) {
  var e = t.innerRef, r = ce(t, Ra), i = eu(r, "onExited", "in", "enter", "exit", "appear");
  return A("input", x({
    ref: e
  }, i, {
    css: /* @__PURE__ */ Gt({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyByZW1vdmVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGlubmVyUmVmLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbnB1dCddICYge1xuICByZWFkb25seSBpbm5lclJlZjogUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xufSkge1xuICAvLyBSZW1vdmUgYW5pbWF0aW9uIHByb3BzIG5vdCBtZWFudCBmb3IgSFRNTCBlbGVtZW50c1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMoXG4gICAgcHJvcHMsXG4gICAgJ29uRXhpdGVkJyxcbiAgICAnaW4nLFxuICAgICdlbnRlcicsXG4gICAgJ2V4aXQnLFxuICAgICdhcHBlYXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4uZmlsdGVyZWRQcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgdGhpcyBoaWRlcyB0aGUgZmxhc2hpbmcgY3Vyc29yXG4gICAgICAgIGNhcmV0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSguMDEpJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
  }));
}
var Fa = function(e) {
  e.cancelable && e.preventDefault(), e.stopPropagation();
};
function Xa(t) {
  var e = t.isEnabled, r = t.onBottomArrive, i = t.onBottomLeave, n = t.onTopArrive, a = t.onTopLeave, s = ae(!1), d = ae(!1), u = ae(0), o = ae(null), g = J(function(f, I) {
    if (o.current !== null) {
      var v = o.current, C = v.scrollTop, E = v.scrollHeight, S = v.clientHeight, G = o.current, h = I > 0, V = E - S - C, O = !1;
      V > I && s.current && (i && i(f), s.current = !1), h && d.current && (a && a(f), d.current = !1), h && I > V ? (r && !s.current && r(f), G.scrollTop = E, O = !0, s.current = !0) : !h && -I > C && (n && !d.current && n(f), G.scrollTop = 0, O = !0, d.current = !0), O && Fa(f);
    }
  }, [r, i, n, a]), l = J(function(f) {
    g(f, f.deltaY);
  }, [g]), c = J(function(f) {
    u.current = f.changedTouches[0].clientY;
  }, []), b = J(function(f) {
    var I = u.current - f.changedTouches[0].clientY;
    g(f, I);
  }, [g]), m = J(function(f) {
    if (f) {
      var I = $i ? {
        passive: !1
      } : !1;
      f.addEventListener("wheel", l, I), f.addEventListener("touchstart", c, I), f.addEventListener("touchmove", b, I);
    }
  }, [b, c, l]), p = J(function(f) {
    f && (f.removeEventListener("wheel", l, !1), f.removeEventListener("touchstart", c, !1), f.removeEventListener("touchmove", b, !1));
  }, [b, c, l]);
  return pn(function() {
    if (e) {
      var f = o.current;
      return m(f), function() {
        p(f);
      };
    }
  }, [e, m, p]), function(f) {
    o.current = f;
  };
}
var tn = ["boxSizing", "height", "overflow", "paddingRight", "position"], nn = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function rn(t) {
  t.cancelable && t.preventDefault();
}
function un(t) {
  t.stopPropagation();
}
function an() {
  var t = this.scrollTop, e = this.scrollHeight, r = t + this.offsetHeight;
  t === 0 ? this.scrollTop = 1 : r === e && (this.scrollTop = t - 1);
}
function on() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var sn = !!(typeof window < "u" && window.document && window.document.createElement), ye = 0, Ie = {
  capture: !1,
  passive: !1
};
function Oa(t) {
  var e = t.isEnabled, r = t.accountForScrollbars, i = r === void 0 ? !0 : r, n = ae({}), a = ae(null), s = J(function(u) {
    if (sn) {
      var o = document.body, g = o && o.style;
      if (i && tn.forEach(function(m) {
        var p = g && g[m];
        n.current[m] = p;
      }), i && ye < 1) {
        var l = parseInt(n.current.paddingRight, 10) || 0, c = document.body ? document.body.clientWidth : 0, b = window.innerWidth - c + l || 0;
        Object.keys(nn).forEach(function(m) {
          var p = nn[m];
          g && (g[m] = p);
        }), g && (g.paddingRight = "".concat(b, "px"));
      }
      o && on() && (o.addEventListener("touchmove", rn, Ie), u && (u.addEventListener("touchstart", an, Ie), u.addEventListener("touchmove", un, Ie))), ye += 1;
    }
  }, [i]), d = J(function(u) {
    if (sn) {
      var o = document.body, g = o && o.style;
      ye = Math.max(ye - 1, 0), i && ye < 1 && tn.forEach(function(l) {
        var c = n.current[l];
        g && (g[l] = c);
      }), o && on() && (o.removeEventListener("touchmove", rn, Ie), u && (u.removeEventListener("touchstart", an, Ie), u.removeEventListener("touchmove", un, Ie)));
    }
  }, [i]);
  return pn(function() {
    if (e) {
      var u = a.current;
      return s(u), function() {
        d(u);
      };
    }
  }, [e, s, d]), function(u) {
    a.current = u;
  };
}
function Pa() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var wa = function(e) {
  var r = e.target;
  return r.ownerDocument.activeElement && r.ownerDocument.activeElement.blur();
}, Ta = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: Pa
};
function Na(t) {
  var e = t.children, r = t.lockEnabled, i = t.captureEnabled, n = i === void 0 ? !0 : i, a = t.onBottomArrive, s = t.onBottomLeave, d = t.onTopArrive, u = t.onTopLeave, o = Xa({
    isEnabled: n,
    onBottomArrive: a,
    onBottomLeave: s,
    onTopArrive: d,
    onTopLeave: u
  }), g = Oa({
    isEnabled: r
  }), l = function(b) {
    o(b), g(b);
  };
  return A(ct, null, r && A("div", {
    onClick: wa,
    css: Ta
  }), e(l));
}
function Wa() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Ma = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: Wa
}, Da = function(e) {
  var r = e.name, i = e.onFocus;
  return A("input", {
    required: !0,
    name: r,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: i,
    css: Ma,
    value: "",
    onChange: function() {
    }
  });
}, Za = Da;
function Rt(t) {
  var e;
  return typeof window < "u" && window.navigator != null ? t.test(((e = window.navigator.userAgentData) === null || e === void 0 ? void 0 : e.platform) || window.navigator.platform) : !1;
}
function Ha() {
  return Rt(/^iPhone/i);
}
function Un() {
  return Rt(/^Mac/i);
}
function La() {
  return Rt(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Un() && navigator.maxTouchPoints > 1;
}
function Ya() {
  return Ha() || La();
}
function Ja() {
  return Un() || Ya();
}
var za = function(e) {
  return e.label;
}, ka = function(e) {
  return e.label;
}, ja = function(e) {
  return e.value;
}, _a = function(e) {
  return !!e.isDisabled;
}, Ua = {
  clearIndicator: Bu,
  container: mu,
  control: Nu,
  dropdownIndicator: Vu,
  group: Zu,
  groupHeading: Lu,
  indicatorsContainer: Au,
  indicatorSeparator: Xu,
  input: ku,
  loadingIndicator: wu,
  loadingMessage: gu,
  menu: uu,
  menuList: cu,
  menuPortal: pu,
  multiValue: $u,
  multiValueLabel: Ku,
  multiValueRemove: qu,
  noOptionsMessage: du,
  option: ua,
  placeholder: sa,
  singleValue: da,
  valueContainer: hu
}, Qa = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, $a = 4, Qn = 4, Ka = 38, qa = Qn * 2, eo = {
  baseUnit: Qn,
  controlHeight: Ka,
  menuGutter: qa
}, ot = {
  borderRadius: $a,
  colors: Qa,
  spacing: eo
}, to = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: Qt(),
  captureMenuScroll: !Qt(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: Va(),
  formatGroupLabel: za,
  getOptionLabel: ka,
  getOptionValue: ja,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: _a,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !Ui(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(e) {
    var r = e.count;
    return "".concat(r, " result").concat(r !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function cn(t, e, r, i) {
  var n = qn(t, e, r), a = er(t, e, r), s = Kn(t, e), d = _e(t, e);
  return {
    type: "option",
    data: e,
    isDisabled: n,
    isSelected: a,
    label: s,
    value: d,
    index: i
  };
}
function Ze(t, e) {
  return t.options.map(function(r, i) {
    if ("options" in r) {
      var n = r.options.map(function(s, d) {
        return cn(t, s, e, d);
      }).filter(function(s) {
        return dn(t, s);
      });
      return n.length > 0 ? {
        type: "group",
        data: r,
        options: n,
        index: i
      } : void 0;
    }
    var a = cn(t, r, e, i);
    return dn(t, a) ? a : void 0;
  }).filter(Ki);
}
function $n(t) {
  return t.reduce(function(e, r) {
    return r.type === "group" ? e.push.apply(e, vt(r.options.map(function(i) {
      return i.data;
    }))) : e.push(r.data), e;
  }, []);
}
function ln(t, e) {
  return t.reduce(function(r, i) {
    return i.type === "group" ? r.push.apply(r, vt(i.options.map(function(n) {
      return {
        data: n.data,
        id: "".concat(e, "-").concat(i.index, "-").concat(n.index)
      };
    }))) : r.push({
      data: i.data,
      id: "".concat(e, "-").concat(i.index)
    }), r;
  }, []);
}
function no(t, e) {
  return $n(Ze(t, e));
}
function dn(t, e) {
  var r = t.inputValue, i = r === void 0 ? "" : r, n = e.data, a = e.isSelected, s = e.label, d = e.value;
  return (!nr(t) || !a) && tr(t, {
    label: s,
    value: d,
    data: n
  }, i);
}
function ro(t, e) {
  var r = t.focusedValue, i = t.selectValue, n = i.indexOf(r);
  if (n > -1) {
    var a = e.indexOf(r);
    if (a > -1)
      return r;
    if (n < e.length)
      return e[n];
  }
  return null;
}
function io(t, e) {
  var r = t.focusedOption;
  return r && e.indexOf(r) > -1 ? r : e[0];
}
var st = function(e, r) {
  var i, n = (i = e.find(function(a) {
    return a.data === r;
  })) === null || i === void 0 ? void 0 : i.id;
  return n || null;
}, Kn = function(e, r) {
  return e.getOptionLabel(r);
}, _e = function(e, r) {
  return e.getOptionValue(r);
};
function qn(t, e, r) {
  return typeof t.isOptionDisabled == "function" ? t.isOptionDisabled(e, r) : !1;
}
function er(t, e, r) {
  if (r.indexOf(e) > -1) return !0;
  if (typeof t.isOptionSelected == "function")
    return t.isOptionSelected(e, r);
  var i = _e(t, e);
  return r.some(function(n) {
    return _e(t, n) === i;
  });
}
function tr(t, e, r) {
  return t.filterOption ? t.filterOption(e, r) : !0;
}
var nr = function(e) {
  var r = e.hideSelectedOptions, i = e.isMulti;
  return r === void 0 ? i : r;
}, uo = 1, rr = /* @__PURE__ */ (function(t) {
  Cr(r, t);
  var e = Gr(r);
  function r(i) {
    var n;
    if (vr(this, r), n = e.call(this, i), n.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: "",
      isAppleDevice: !1
    }, n.blockOptionHover = !1, n.isComposing = !1, n.commonProps = void 0, n.initialTouchX = 0, n.initialTouchY = 0, n.openAfterFocus = !1, n.scrollToFocusedOptionOnUpdate = !1, n.userIsDragging = void 0, n.controlRef = null, n.getControlRef = function(u) {
      n.controlRef = u;
    }, n.focusedOptionRef = null, n.getFocusedOptionRef = function(u) {
      n.focusedOptionRef = u;
    }, n.menuListRef = null, n.getMenuListRef = function(u) {
      n.menuListRef = u;
    }, n.inputRef = null, n.getInputRef = function(u) {
      n.inputRef = u;
    }, n.focus = n.focusInput, n.blur = n.blurInput, n.onChange = function(u, o) {
      var g = n.props, l = g.onChange, c = g.name;
      o.name = c, n.ariaOnChange(u, o), l(u, o);
    }, n.setValue = function(u, o, g) {
      var l = n.props, c = l.closeMenuOnSelect, b = l.isMulti, m = l.inputValue;
      n.onInputChange("", {
        action: "set-value",
        prevInputValue: m
      }), c && (n.setState({
        inputIsHiddenAfterUpdate: !b
      }), n.onMenuClose()), n.setState({
        clearFocusValueOnUpdate: !0
      }), n.onChange(u, {
        action: o,
        option: g
      });
    }, n.selectOption = function(u) {
      var o = n.props, g = o.blurInputOnSelect, l = o.isMulti, c = o.name, b = n.state.selectValue, m = l && n.isOptionSelected(u, b), p = n.isOptionDisabled(u, b);
      if (m) {
        var f = n.getOptionValue(u);
        n.setValue(b.filter(function(I) {
          return n.getOptionValue(I) !== f;
        }), "deselect-option", u);
      } else if (!p)
        l ? n.setValue([].concat(vt(b), [u]), "select-option", u) : n.setValue(u, "select-option");
      else {
        n.ariaOnChange(u, {
          action: "select-option",
          option: u,
          name: c
        });
        return;
      }
      g && n.blurInput();
    }, n.removeValue = function(u) {
      var o = n.props.isMulti, g = n.state.selectValue, l = n.getOptionValue(u), c = g.filter(function(m) {
        return n.getOptionValue(m) !== l;
      }), b = Ne(o, c, c[0] || null);
      n.onChange(b, {
        action: "remove-value",
        removedValue: u
      }), n.focusInput();
    }, n.clearValue = function() {
      var u = n.state.selectValue;
      n.onChange(Ne(n.props.isMulti, [], null), {
        action: "clear",
        removedValues: u
      });
    }, n.popValue = function() {
      var u = n.props.isMulti, o = n.state.selectValue, g = o[o.length - 1], l = o.slice(0, o.length - 1), c = Ne(u, l, l[0] || null);
      g && n.onChange(c, {
        action: "pop-value",
        removedValue: g
      });
    }, n.getFocusedOptionId = function(u) {
      return st(n.state.focusableOptionsWithIds, u);
    }, n.getFocusableOptionsWithIds = function() {
      return ln(Ze(n.props, n.state.selectValue), n.getElementId("option"));
    }, n.getValue = function() {
      return n.state.selectValue;
    }, n.cx = function() {
      for (var u = arguments.length, o = new Array(u), g = 0; g < u; g++)
        o[g] = arguments[g];
      return Ji.apply(void 0, [n.props.classNamePrefix].concat(o));
    }, n.getOptionLabel = function(u) {
      return Kn(n.props, u);
    }, n.getOptionValue = function(u) {
      return _e(n.props, u);
    }, n.getStyles = function(u, o) {
      var g = n.props.unstyled, l = Ua[u](o, g);
      l.boxSizing = "border-box";
      var c = n.props.styles[u];
      return c ? c(l, o) : l;
    }, n.getClassNames = function(u, o) {
      var g, l;
      return (g = (l = n.props.classNames)[u]) === null || g === void 0 ? void 0 : g.call(l, o);
    }, n.getElementId = function(u) {
      return "".concat(n.state.instancePrefix, "-").concat(u);
    }, n.getComponents = function() {
      return fa(n.props);
    }, n.buildCategorizedOptions = function() {
      return Ze(n.props, n.state.selectValue);
    }, n.getCategorizedOptions = function() {
      return n.props.menuIsOpen ? n.buildCategorizedOptions() : [];
    }, n.buildFocusableOptions = function() {
      return $n(n.buildCategorizedOptions());
    }, n.getFocusableOptions = function() {
      return n.props.menuIsOpen ? n.buildFocusableOptions() : [];
    }, n.ariaOnChange = function(u, o) {
      n.setState({
        ariaSelection: y({
          value: u
        }, o)
      });
    }, n.onMenuMouseDown = function(u) {
      u.button === 0 && (u.stopPropagation(), u.preventDefault(), n.focusInput());
    }, n.onMenuMouseMove = function(u) {
      n.blockOptionHover = !1;
    }, n.onControlMouseDown = function(u) {
      if (!u.defaultPrevented) {
        var o = n.props.openMenuOnClick;
        n.state.isFocused ? n.props.menuIsOpen ? u.target.tagName !== "INPUT" && u.target.tagName !== "TEXTAREA" && n.onMenuClose() : o && n.openMenu("first") : (o && (n.openAfterFocus = !0), n.focusInput()), u.target.tagName !== "INPUT" && u.target.tagName !== "TEXTAREA" && u.preventDefault();
      }
    }, n.onDropdownIndicatorMouseDown = function(u) {
      if (!(u && u.type === "mousedown" && u.button !== 0) && !n.props.isDisabled) {
        var o = n.props, g = o.isMulti, l = o.menuIsOpen;
        n.focusInput(), l ? (n.setState({
          inputIsHiddenAfterUpdate: !g
        }), n.onMenuClose()) : n.openMenu("first"), u.preventDefault();
      }
    }, n.onClearIndicatorMouseDown = function(u) {
      u && u.type === "mousedown" && u.button !== 0 || (n.clearValue(), u.preventDefault(), n.openAfterFocus = !1, u.type === "touchend" ? n.focusInput() : setTimeout(function() {
        return n.focusInput();
      }));
    }, n.onScroll = function(u) {
      typeof n.props.closeMenuOnScroll == "boolean" ? u.target instanceof HTMLElement && qe(u.target) && n.props.onMenuClose() : typeof n.props.closeMenuOnScroll == "function" && n.props.closeMenuOnScroll(u) && n.props.onMenuClose();
    }, n.onCompositionStart = function() {
      n.isComposing = !0;
    }, n.onCompositionEnd = function() {
      n.isComposing = !1;
    }, n.onTouchStart = function(u) {
      var o = u.touches, g = o && o.item(0);
      g && (n.initialTouchX = g.clientX, n.initialTouchY = g.clientY, n.userIsDragging = !1);
    }, n.onTouchMove = function(u) {
      var o = u.touches, g = o && o.item(0);
      if (g) {
        var l = Math.abs(g.clientX - n.initialTouchX), c = Math.abs(g.clientY - n.initialTouchY), b = 5;
        n.userIsDragging = l > b || c > b;
      }
    }, n.onTouchEnd = function(u) {
      n.userIsDragging || (n.controlRef && !n.controlRef.contains(u.target) && n.menuListRef && !n.menuListRef.contains(u.target) && n.blurInput(), n.initialTouchX = 0, n.initialTouchY = 0);
    }, n.onControlTouchEnd = function(u) {
      n.userIsDragging || n.onControlMouseDown(u);
    }, n.onClearIndicatorTouchEnd = function(u) {
      n.userIsDragging || n.onClearIndicatorMouseDown(u);
    }, n.onDropdownIndicatorTouchEnd = function(u) {
      n.userIsDragging || n.onDropdownIndicatorMouseDown(u);
    }, n.handleInputChange = function(u) {
      var o = n.props.inputValue, g = u.currentTarget.value;
      n.setState({
        inputIsHiddenAfterUpdate: !1
      }), n.onInputChange(g, {
        action: "input-change",
        prevInputValue: o
      }), n.props.menuIsOpen || n.onMenuOpen();
    }, n.onInputFocus = function(u) {
      n.props.onFocus && n.props.onFocus(u), n.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (n.openAfterFocus || n.props.openMenuOnFocus) && n.openMenu("first"), n.openAfterFocus = !1;
    }, n.onInputBlur = function(u) {
      var o = n.props.inputValue;
      if (n.menuListRef && n.menuListRef.contains(document.activeElement)) {
        n.inputRef.focus();
        return;
      }
      n.props.onBlur && n.props.onBlur(u), n.onInputChange("", {
        action: "input-blur",
        prevInputValue: o
      }), n.onMenuClose(), n.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, n.onOptionHover = function(u) {
      if (!(n.blockOptionHover || n.state.focusedOption === u)) {
        var o = n.getFocusableOptions(), g = o.indexOf(u);
        n.setState({
          focusedOption: u,
          focusedOptionId: g > -1 ? n.getFocusedOptionId(u) : null
        });
      }
    }, n.shouldHideSelectedOptions = function() {
      return nr(n.props);
    }, n.onValueInputFocus = function(u) {
      u.preventDefault(), u.stopPropagation(), n.focus();
    }, n.onKeyDown = function(u) {
      var o = n.props, g = o.isMulti, l = o.backspaceRemovesValue, c = o.escapeClearsValue, b = o.inputValue, m = o.isClearable, p = o.isDisabled, f = o.menuIsOpen, I = o.onKeyDown, v = o.tabSelectsValue, C = o.openMenuOnFocus, E = n.state, S = E.focusedOption, G = E.focusedValue, h = E.selectValue;
      if (!p && !(typeof I == "function" && (I(u), u.defaultPrevented))) {
        switch (n.blockOptionHover = !0, u.key) {
          case "ArrowLeft":
            if (!g || b) return;
            n.focusValue("previous");
            break;
          case "ArrowRight":
            if (!g || b) return;
            n.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (b) return;
            if (G)
              n.removeValue(G);
            else {
              if (!l) return;
              g ? n.popValue() : m && n.clearValue();
            }
            break;
          case "Tab":
            if (n.isComposing || u.shiftKey || !f || !v || !S || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            C && n.isOptionSelected(S, h))
              return;
            n.selectOption(S);
            break;
          case "Enter":
            if (u.keyCode === 229)
              break;
            if (f) {
              if (!S || n.isComposing) return;
              n.selectOption(S);
              break;
            }
            return;
          case "Escape":
            f ? (n.setState({
              inputIsHiddenAfterUpdate: !1
            }), n.onInputChange("", {
              action: "menu-close",
              prevInputValue: b
            }), n.onMenuClose()) : m && c && n.clearValue();
            break;
          case " ":
            if (b)
              return;
            if (!f) {
              n.openMenu("first");
              break;
            }
            if (!S) return;
            n.selectOption(S);
            break;
          case "ArrowUp":
            f ? n.focusOption("up") : n.openMenu("last");
            break;
          case "ArrowDown":
            f ? n.focusOption("down") : n.openMenu("first");
            break;
          case "PageUp":
            if (!f) return;
            n.focusOption("pageup");
            break;
          case "PageDown":
            if (!f) return;
            n.focusOption("pagedown");
            break;
          case "Home":
            if (!f) return;
            n.focusOption("first");
            break;
          case "End":
            if (!f) return;
            n.focusOption("last");
            break;
          default:
            return;
        }
        u.preventDefault();
      }
    }, n.state.instancePrefix = "react-select-" + (n.props.instanceId || ++uo), n.state.selectValue = _t(i.value), i.menuIsOpen && n.state.selectValue.length) {
      var a = n.getFocusableOptionsWithIds(), s = n.buildFocusableOptions(), d = s.indexOf(n.state.selectValue[0]);
      n.state.focusableOptionsWithIds = a, n.state.focusedOption = s[d], n.state.focusedOptionId = st(a, s[d]);
    }
    return n;
  }
  return hr(r, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Ut(this.menuListRef, this.focusedOptionRef), Ja() && this.setState({
        isAppleDevice: !0
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function(n) {
      var a = this.props, s = a.isDisabled, d = a.menuIsOpen, u = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (u && !s && n.isDisabled || // ensure focus is on the Input when the menu opens
      u && d && !n.menuIsOpen) && this.focusInput(), u && s && !n.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !u && !s && n.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Ut(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(n, a) {
      this.props.onInputChange(n, a);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(n) {
      var a = this, s = this.state, d = s.selectValue, u = s.isFocused, o = this.buildFocusableOptions(), g = n === "first" ? 0 : o.length - 1;
      if (!this.props.isMulti) {
        var l = o.indexOf(d[0]);
        l > -1 && (g = l);
      }
      this.scrollToFocusedOptionOnUpdate = !(u && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: o[g],
        focusedOptionId: this.getFocusedOptionId(o[g])
      }, function() {
        return a.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(n) {
      var a = this.state, s = a.selectValue, d = a.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var u = s.indexOf(d);
        d || (u = -1);
        var o = s.length - 1, g = -1;
        if (s.length) {
          switch (n) {
            case "previous":
              u === 0 ? g = 0 : u === -1 ? g = o : g = u - 1;
              break;
            case "next":
              u > -1 && u < o && (g = u + 1);
              break;
          }
          this.setState({
            inputIsHidden: g !== -1,
            focusedValue: s[g]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", a = this.props.pageSize, s = this.state.focusedOption, d = this.getFocusableOptions();
      if (d.length) {
        var u = 0, o = d.indexOf(s);
        s || (o = -1), n === "up" ? u = o > 0 ? o - 1 : d.length - 1 : n === "down" ? u = (o + 1) % d.length : n === "pageup" ? (u = o - a, u < 0 && (u = 0)) : n === "pagedown" ? (u = o + a, u > d.length - 1 && (u = d.length - 1)) : n === "last" && (u = d.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: d[u],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(d[u])
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(ot) : y(y({}, ot), this.props.theme) : ot;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var n = this.clearValue, a = this.cx, s = this.getStyles, d = this.getClassNames, u = this.getValue, o = this.selectOption, g = this.setValue, l = this.props, c = l.isMulti, b = l.isRtl, m = l.options, p = this.hasValue();
      return {
        clearValue: n,
        cx: a,
        getStyles: s,
        getClassNames: d,
        getValue: u,
        hasValue: p,
        isMulti: c,
        isRtl: b,
        options: m,
        selectOption: o,
        selectProps: l,
        setValue: g,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var n = this.state.selectValue;
      return n.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var n = this.props, a = n.isClearable, s = n.isMulti;
      return a === void 0 ? s : a;
    }
  }, {
    key: "isOptionDisabled",
    value: function(n, a) {
      return qn(this.props, n, a);
    }
  }, {
    key: "isOptionSelected",
    value: function(n, a) {
      return er(this.props, n, a);
    }
  }, {
    key: "filterOption",
    value: function(n, a) {
      return tr(this.props, n, a);
    }
  }, {
    key: "formatOptionLabel",
    value: function(n, a) {
      if (typeof this.props.formatOptionLabel == "function") {
        var s = this.props.inputValue, d = this.state.selectValue;
        return this.props.formatOptionLabel(n, {
          context: a,
          inputValue: s,
          selectValue: d
        });
      } else
        return this.getOptionLabel(n);
    }
  }, {
    key: "formatGroupLabel",
    value: function(n) {
      return this.props.formatGroupLabel(n);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var n = this.props, a = n.isDisabled, s = n.isSearchable, d = n.inputId, u = n.inputValue, o = n.tabIndex, g = n.form, l = n.menuIsOpen, c = n.required, b = this.getComponents(), m = b.Input, p = this.state, f = p.inputIsHidden, I = p.ariaSelection, v = this.commonProps, C = d || this.getElementId("input"), E = y(y(y({
          "aria-autocomplete": "list",
          "aria-expanded": l,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": c,
          role: "combobox",
          "aria-activedescendant": this.state.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, l && {
          "aria-controls": this.getElementId("listbox")
        }), !s && {
          "aria-readonly": !0
        }), this.hasValue() ? I?.action === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return s ? /* @__PURE__ */ R.createElement(m, x({}, v, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: C,
          innerRef: this.getInputRef,
          isDisabled: a,
          isHidden: f,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: o,
          form: g,
          type: "text",
          value: u
        }, E)) : /* @__PURE__ */ R.createElement(Ba, x({
          id: C,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: ke,
          onFocus: this.onInputFocus,
          disabled: a,
          tabIndex: o,
          inputMode: "none",
          form: g,
          value: ""
        }, E));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var n = this, a = this.getComponents(), s = a.MultiValue, d = a.MultiValueContainer, u = a.MultiValueLabel, o = a.MultiValueRemove, g = a.SingleValue, l = a.Placeholder, c = this.commonProps, b = this.props, m = b.controlShouldRenderValue, p = b.isDisabled, f = b.isMulti, I = b.inputValue, v = b.placeholder, C = this.state, E = C.selectValue, S = C.focusedValue, G = C.isFocused;
      if (!this.hasValue() || !m)
        return I ? null : /* @__PURE__ */ R.createElement(l, x({}, c, {
          key: "placeholder",
          isDisabled: p,
          isFocused: G,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), v);
      if (f)
        return E.map(function(V, O) {
          var D = V === S, z = "".concat(n.getOptionLabel(V), "-").concat(n.getOptionValue(V));
          return /* @__PURE__ */ R.createElement(s, x({}, c, {
            components: {
              Container: d,
              Label: u,
              Remove: o
            },
            isFocused: D,
            isDisabled: p,
            key: z,
            index: O,
            removeProps: {
              onClick: function() {
                return n.removeValue(V);
              },
              onTouchEnd: function() {
                return n.removeValue(V);
              },
              onMouseDown: function(ne) {
                ne.preventDefault();
              }
            },
            data: V
          }), n.formatOptionLabel(V, "value"));
        });
      if (I)
        return null;
      var h = E[0];
      return /* @__PURE__ */ R.createElement(g, x({}, c, {
        data: h,
        isDisabled: p
      }), this.formatOptionLabel(h, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var n = this.getComponents(), a = n.ClearIndicator, s = this.commonProps, d = this.props, u = d.isDisabled, o = d.isLoading, g = this.state.isFocused;
      if (!this.isClearable() || !a || u || !this.hasValue() || o)
        return null;
      var l = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ R.createElement(a, x({}, s, {
        innerProps: l,
        isFocused: g
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var n = this.getComponents(), a = n.LoadingIndicator, s = this.commonProps, d = this.props, u = d.isDisabled, o = d.isLoading, g = this.state.isFocused;
      if (!a || !o) return null;
      var l = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ R.createElement(a, x({}, s, {
        innerProps: l,
        isDisabled: u,
        isFocused: g
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var n = this.getComponents(), a = n.DropdownIndicator, s = n.IndicatorSeparator;
      if (!a || !s) return null;
      var d = this.commonProps, u = this.props.isDisabled, o = this.state.isFocused;
      return /* @__PURE__ */ R.createElement(s, x({}, d, {
        isDisabled: u,
        isFocused: o
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var n = this.getComponents(), a = n.DropdownIndicator;
      if (!a) return null;
      var s = this.commonProps, d = this.props.isDisabled, u = this.state.isFocused, o = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ R.createElement(a, x({}, s, {
        innerProps: o,
        isDisabled: d,
        isFocused: u
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var n = this, a = this.getComponents(), s = a.Group, d = a.GroupHeading, u = a.Menu, o = a.MenuList, g = a.MenuPortal, l = a.LoadingMessage, c = a.NoOptionsMessage, b = a.Option, m = this.commonProps, p = this.state.focusedOption, f = this.props, I = f.captureMenuScroll, v = f.inputValue, C = f.isLoading, E = f.loadingMessage, S = f.minMenuHeight, G = f.maxMenuHeight, h = f.menuIsOpen, V = f.menuPlacement, O = f.menuPosition, D = f.menuPortalTarget, z = f.menuShouldBlockScroll, Z = f.menuShouldScrollIntoView, ne = f.noOptionsMessage, re = f.onMenuScrollToTop, W = f.onMenuScrollToBottom;
      if (!h) return null;
      var T = function(j, ie) {
        var ge = j.type, Q = j.data, be = j.isDisabled, ue = j.isSelected, Fe = j.label, ir = j.value, Bt = p === Q, Ft = be ? void 0 : function() {
          return n.onOptionHover(Q);
        }, ur = be ? void 0 : function() {
          return n.selectOption(Q);
        }, Xt = "".concat(n.getElementId("option"), "-").concat(ie), ar = {
          id: Xt,
          onClick: ur,
          onMouseMove: Ft,
          onMouseOver: Ft,
          tabIndex: -1,
          role: "option",
          "aria-selected": n.state.isAppleDevice ? void 0 : ue
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ R.createElement(b, x({}, m, {
          innerProps: ar,
          data: Q,
          isDisabled: be,
          isSelected: ue,
          key: Xt,
          label: Fe,
          type: ge,
          value: ir,
          isFocused: Bt,
          innerRef: Bt ? n.getFocusedOptionRef : void 0
        }), n.formatOptionLabel(j.data, "menu"));
      }, $;
      if (this.hasOptions())
        $ = this.getCategorizedOptions().map(function(N) {
          if (N.type === "group") {
            var j = N.data, ie = N.options, ge = N.index, Q = "".concat(n.getElementId("group"), "-").concat(ge), be = "".concat(Q, "-heading");
            return /* @__PURE__ */ R.createElement(s, x({}, m, {
              key: Q,
              data: j,
              options: ie,
              Heading: d,
              headingProps: {
                id: be,
                data: N.data
              },
              label: n.formatGroupLabel(N.data)
            }), N.options.map(function(ue) {
              return T(ue, "".concat(ge, "-").concat(ue.index));
            }));
          } else if (N.type === "option")
            return T(N, "".concat(N.index));
        });
      else if (C) {
        var U = E({
          inputValue: v
        });
        if (U === null) return null;
        $ = /* @__PURE__ */ R.createElement(l, m, U);
      } else {
        var le = ne({
          inputValue: v
        });
        if (le === null) return null;
        $ = /* @__PURE__ */ R.createElement(c, m, le);
      }
      var de = {
        minMenuHeight: S,
        maxMenuHeight: G,
        menuPlacement: V,
        menuPosition: O,
        menuShouldScrollIntoView: Z
      }, Be = /* @__PURE__ */ R.createElement(au, x({}, m, de), function(N) {
        var j = N.ref, ie = N.placerProps, ge = ie.placement, Q = ie.maxHeight;
        return /* @__PURE__ */ R.createElement(u, x({}, m, de, {
          innerRef: j,
          innerProps: {
            onMouseDown: n.onMenuMouseDown,
            onMouseMove: n.onMenuMouseMove
          },
          isLoading: C,
          placement: ge
        }), /* @__PURE__ */ R.createElement(Na, {
          captureEnabled: I,
          onTopArrive: re,
          onBottomArrive: W,
          lockEnabled: z
        }, function(be) {
          return /* @__PURE__ */ R.createElement(o, x({}, m, {
            innerRef: function(Fe) {
              n.getMenuListRef(Fe), be(Fe);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": m.isMulti,
              id: n.getElementId("listbox")
            },
            isLoading: C,
            maxHeight: Q,
            focusedOption: p
          }), $);
        }));
      });
      return D || O === "fixed" ? /* @__PURE__ */ R.createElement(g, x({}, m, {
        appendTo: D,
        controlElement: this.controlRef,
        menuPlacement: V,
        menuPosition: O
      }), Be) : Be;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var n = this, a = this.props, s = a.delimiter, d = a.isDisabled, u = a.isMulti, o = a.name, g = a.required, l = this.state.selectValue;
      if (g && !this.hasValue() && !d)
        return /* @__PURE__ */ R.createElement(Za, {
          name: o,
          onFocus: this.onValueInputFocus
        });
      if (!(!o || d))
        if (u)
          if (s) {
            var c = l.map(function(p) {
              return n.getOptionValue(p);
            }).join(s);
            return /* @__PURE__ */ R.createElement("input", {
              name: o,
              type: "hidden",
              value: c
            });
          } else {
            var b = l.length > 0 ? l.map(function(p, f) {
              return /* @__PURE__ */ R.createElement("input", {
                key: "i-".concat(f),
                name: o,
                type: "hidden",
                value: n.getOptionValue(p)
              });
            }) : /* @__PURE__ */ R.createElement("input", {
              name: o,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ R.createElement("div", null, b);
          }
        else {
          var m = l[0] ? this.getOptionValue(l[0]) : "";
          return /* @__PURE__ */ R.createElement("input", {
            name: o,
            type: "hidden",
            value: m
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var n = this.commonProps, a = this.state, s = a.ariaSelection, d = a.focusedOption, u = a.focusedValue, o = a.isFocused, g = a.selectValue, l = this.getFocusableOptions();
      return /* @__PURE__ */ R.createElement(Ga, x({}, n, {
        id: this.getElementId("live-region"),
        ariaSelection: s,
        focusedOption: d,
        focusedValue: u,
        isFocused: o,
        selectValue: g,
        focusableOptions: l,
        isAppleDevice: this.state.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.getComponents(), a = n.Control, s = n.IndicatorsContainer, d = n.SelectContainer, u = n.ValueContainer, o = this.props, g = o.className, l = o.id, c = o.isDisabled, b = o.menuIsOpen, m = this.state.isFocused, p = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ R.createElement(d, x({}, p, {
        className: g,
        innerProps: {
          id: l,
          onKeyDown: this.onKeyDown
        },
        isDisabled: c,
        isFocused: m
      }), this.renderLiveRegion(), /* @__PURE__ */ R.createElement(a, x({}, p, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: c,
        isFocused: m,
        menuIsOpen: b
      }), /* @__PURE__ */ R.createElement(u, x({}, p, {
        isDisabled: c
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ R.createElement(s, x({}, p, {
        isDisabled: c
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      var s = a.prevProps, d = a.clearFocusValueOnUpdate, u = a.inputIsHiddenAfterUpdate, o = a.ariaSelection, g = a.isFocused, l = a.prevWasFocused, c = a.instancePrefix, b = n.options, m = n.value, p = n.menuIsOpen, f = n.inputValue, I = n.isMulti, v = _t(m), C = {};
      if (s && (m !== s.value || b !== s.options || p !== s.menuIsOpen || f !== s.inputValue)) {
        var E = p ? no(n, v) : [], S = p ? ln(Ze(n, v), "".concat(c, "-option")) : [], G = d ? ro(a, v) : null, h = io(a, E), V = st(S, h);
        C = {
          selectValue: v,
          focusedOption: h,
          focusedOptionId: V,
          focusableOptionsWithIds: S,
          focusedValue: G,
          clearFocusValueOnUpdate: !1
        };
      }
      var O = u != null && n !== s ? {
        inputIsHidden: u,
        inputIsHiddenAfterUpdate: void 0
      } : {}, D = o, z = g && l;
      return g && !z && (D = {
        value: Ne(I, v, v[0] || null),
        options: v,
        action: "initial-input-focus"
      }, z = !l), o?.action === "initial-input-focus" && (D = null), y(y(y({}, C), O), {}, {
        prevProps: n,
        ariaSelection: D,
        prevWasFocused: z
      });
    }
  }]), r;
})(cr);
rr.defaultProps = to;
var ao = /* @__PURE__ */ bn(function(t, e) {
  var r = mr(t);
  return /* @__PURE__ */ R.createElement(rr, x({
    ref: e
  }, r));
}), oo = ao;
const so = "_inputMulti_1qkgs_1", co = "_light_1qkgs_1", lo = "_info_1qkgs_5", go = "_dark_1qkgs_9", bo = "_control_1qkgs_17", fo = "_controlFocused_1qkgs_18", po = "_multiValue_1qkgs_19", Io = "_option_1qkgs_45", mo = "_optionActive_1qkgs_57", vo = "_label_1qkgs_71", ho = "_menu_1qkgs_79", Co = "_indicatorsContainer_1qkgs_120", Ao = "_input_1qkgs_1", yo = "_placeholder_1qkgs_127", Go = "_singleValue_1qkgs_128", xo = "_icon_1qkgs_161", Eo = "_valueContainer_1qkgs_170", So = "_hidden_1qkgs_209", Vo = "_menuList_1qkgs_225", Ro = "_disabled_1qkgs_229", X = {
  inputMulti: so,
  light: co,
  info: lo,
  dark: go,
  control: bo,
  controlFocused: fo,
  multiValue: po,
  option: Io,
  optionActive: mo,
  label: vo,
  menu: ho,
  indicatorsContainer: Co,
  input: Ao,
  placeholder: yo,
  singleValue: Go,
  icon: xo,
  valueContainer: Eo,
  hidden: So,
  menuList: Vo,
  disabled: Ro
}, Po = (t) => {
  const e = (a) => /* @__PURE__ */ K(xe.DropdownIndicator, { ...a, children: /* @__PURE__ */ K(et, { className: X.icon, icon: "arrow-down-outline", width: "16px" }) }), r = (a) => /* @__PURE__ */ K(xe.ClearIndicator, { ...a, children: /* @__PURE__ */ K(et, { className: X.icon, icon: "close-outline", width: "16px" }) }), i = (a) => /* @__PURE__ */ K(xe.MultiValueRemove, { ...a, children: /* @__PURE__ */ K(et, { className: X.icon, icon: "close-outline", width: "12px" }) }), n = ({ children: a, ...s }) => /* @__PURE__ */ Ot(xe.ValueContainer, { ...s, children: [
    /* @__PURE__ */ K("div", { className: X.icon, children: t.icon && t.icon }),
    a
  ] });
  return /* @__PURE__ */ Ot(
    "div",
    {
      className: `${X.inputMulti} ${t.theme === "dark" ? X.dark : X.light}`,
      style: t.style || {},
      children: [
        /* @__PURE__ */ K("span", { className: X.label, children: t.label }),
        /* @__PURE__ */ K(
          oo,
          {
            ...t,
            components: Object.assign(
              {
                DropdownIndicator: e,
                MultiValueRemove: i,
                ClearIndicator: r,
                ValueContainer: n
              },
              t.components || {}
            ),
            classNames: {
              control: (a) => a.isFocused ? X.controlFocused : X.control,
              menu: (a) => X.menu,
              multiValue: (a) => X.multiValue,
              indicatorSeparator: (a) => X.hidden,
              indicatorsContainer: (a) => X.indicatorsContainer,
              input: (a) => X.input,
              menuList: (a) => X.menuList,
              option: (a) => a.isFocused || a.isSelected ? X.optionActive + " " + X.option : a.isDisabled ? X.disabled : X.option,
              placeholder: (a) => X.placeholder,
              singleValue: (a) => X.singleValue,
              valueContainer: (a) => X.valueContainer
            }
          }
        ),
        t.info ? /* @__PURE__ */ K("div", { className: `${X.info}`, children: t.info }) : ""
      ]
    }
  );
};
export {
  Po as default
};
