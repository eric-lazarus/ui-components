import * as i from "react";
import './assets/chunk-NISHYRIK.css';const nn = "data:image/svg+xml,%3csvg%20width='1150'%20height='1012'%20viewBox='0%200%201150%201012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M382.308%20462.257L99.8422%20536.841C27.9696%20555.84%20-14.6515%20628.479%204.64019%20699.263L340.315%20610.717C399.805%20594.987%20450.502%20556.724%20481.368%20504.144C512.145%20451.653%20520.49%20389.176%20504.608%20330.588L414.52%200C342.648%2018.9993%20300.027%2091.6385%20319.318%20162.422L395.049%20440.607L382.398%20462.257H382.308Z'%20fill='%23F2F2F2'/%3e%3cpath%20d='M767.692%20462.257L1050.16%20536.841C1122.03%20555.84%201164.65%20628.479%201145.36%20699.263L809.685%20610.717C750.195%20594.987%20699.498%20556.724%20668.632%20504.144C637.855%20451.653%20629.51%20389.176%20645.392%20330.588L735.48%200C807.352%2018.9993%20849.973%2091.6385%20830.682%20162.422L754.951%20440.607C759.886%20449.09%20762.667%20453.774%20767.602%20462.257H767.692Z'%20fill='%23F2F2F2'/%3e%3cpath%20d='M562.214%20769.339L355.299%20972.853C302.719%201024.64%20217.387%201024.55%20164.895%20972.764L410.752%20730.899C454.36%20688.04%20513.401%20664.003%20575.045%20664.003C636.599%20664.003%20695.73%20688.217%20739.248%20731.075L984.835%20973.206C932.254%201024.99%20846.922%201024.9%20794.431%20973.118L587.786%20769.339C577.826%20769.339%20572.353%20769.339%20562.393%20769.339H562.214Z'%20fill='%23F2F2F2'/%3e%3c/svg%3e", xe = "_light_10cc1_1", Re = "_navLink_10cc1_9", Ee = "_disabled_10cc1_9", be = "_active_10cc1_10", Le = "_logoDiv_10cc1_16", ke = "_avatarLink_10cc1_20", Pe = "_borderTop_10cc1_24", _e = "_rikAIButton_10cc1_29", Se = "_RKIButton_10cc1_30", $e = "_dark_10cc1_50", Fe = "_logoA_10cc1_70", De = "_Nav_10cc1_104", Ie = "_isCollapsed_10cc1_141", Ne = "_isVisible_10cc1_141", Be = "_expandButton_10cc1_198", Te = "_collapseButton_10cc1_199", Me = "_avatarDiv_10cc1_280", Ae = "_avatarExpanded_10cc1_293", We = "_icons_10cc1_402", rn = {
  light: xe,
  navLink: Re,
  disabled: Ee,
  active: be,
  logoDiv: Le,
  avatarLink: ke,
  borderTop: Pe,
  rikAIButton: _e,
  RKIButton: Se,
  dark: $e,
  logoA: Fe,
  Nav: De,
  isCollapsed: Ie,
  isVisible: Ne,
  expandButton: Be,
  collapseButton: Te,
  avatarDiv: Me,
  avatarExpanded: Ae,
  icons: We
};
/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function x(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function b(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function J({
  pathname: e = "/",
  search: t = "",
  hash: n = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function Y(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
    let a = e.indexOf("?");
    a >= 0 && (t.search = e.substring(a), e = e.substring(0, a)), e && (t.pathname = e);
  }
  return t;
}
function oe(e, t, n = "/") {
  return Oe(e, t, n, !1);
}
function Oe(e, t, n, a) {
  let r = typeof t == "string" ? Y(t) : t, o = P(r.pathname || "/", n);
  if (o == null)
    return null;
  let l = le(e);
  He(l);
  let c = null;
  for (let u = 0; c == null && u < l.length; ++u) {
    let s = Xe(o);
    c = Ge(
      l[u],
      s,
      a
    );
  }
  return c;
}
function le(e, t = [], n = [], a = "", r = !1) {
  let o = (l, c, u = r, s) => {
    let d = {
      relativePath: s === void 0 ? l.path || "" : s,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: c,
      route: l
    };
    if (d.relativePath.startsWith("/")) {
      if (!d.relativePath.startsWith(a) && u)
        return;
      x(
        d.relativePath.startsWith(a),
        `Absolute route path "${d.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), d.relativePath = d.relativePath.slice(a.length);
    }
    let f = E([a, d.relativePath]), m = n.concat(d);
    l.children && l.children.length > 0 && (x(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      l.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${f}".`
    ), le(
      l.children,
      t,
      m,
      f,
      u
    )), !(l.path == null && !l.index) && t.push({
      path: f,
      score: Ye(f, l.index),
      routesMeta: m
    });
  };
  return e.forEach((l, c) => {
    if (l.path === "" || !l.path?.includes("?"))
      o(l, c);
    else
      for (let u of ie(l.path))
        o(l, c, !0, u);
  }), t;
}
function ie(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...a] = t, r = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (a.length === 0)
    return r ? [o, ""] : [o];
  let l = ie(a.join("/")), c = [];
  return c.push(
    ...l.map(
      (u) => u === "" ? o : [o, u].join("/")
    )
  ), r && c.push(...l), c.map(
    (u) => e.startsWith("/") && u === "" ? "/" : u
  );
}
function He(e) {
  e.sort(
    (t, n) => t.score !== n.score ? n.score - t.score : qe(
      t.routesMeta.map((a) => a.childrenIndex),
      n.routesMeta.map((a) => a.childrenIndex)
    )
  );
}
var Ue = /^:[\w-]+$/, Ve = 3, Ke = 2, ze = 1, je = 10, Je = -2, ne = (e) => e === "*";
function Ye(e, t) {
  let n = e.split("/"), a = n.length;
  return n.some(ne) && (a += Je), t && (a += Ke), n.filter((r) => !ne(r)).reduce(
    (r, o) => r + (Ue.test(o) ? Ve : o === "" ? ze : je),
    a
  );
}
function qe(e, t) {
  return e.length === t.length && e.slice(0, -1).every((a, r) => a === t[r]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Ge(e, t, n = !1) {
  let { routesMeta: a } = e, r = {}, o = "/", l = [];
  for (let c = 0; c < a.length; ++c) {
    let u = a[c], s = c === a.length - 1, d = o === "/" ? t : t.slice(o.length) || "/", f = H(
      { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
      d
    ), m = u.route;
    if (!f && s && n && !a[a.length - 1].route.index && (f = H(
      {
        path: u.relativePath,
        caseSensitive: u.caseSensitive,
        end: !1
      },
      d
    )), !f)
      return null;
    Object.assign(r, f.params), l.push({
      // TODO: Can this as be avoided?
      params: r,
      pathname: E([o, f.pathname]),
      pathnameBase: nt(
        E([o, f.pathnameBase])
      ),
      route: m
    }), f.pathnameBase !== "/" && (o = E([o, f.pathnameBase]));
  }
  return l;
}
function H(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, a] = Ze(
    e.path,
    e.caseSensitive,
    e.end
  ), r = t.match(n);
  if (!r) return null;
  let o = r[0], l = o.replace(/(.)\/+$/, "$1"), c = r.slice(1);
  return {
    params: a.reduce(
      (s, { paramName: d, isOptional: f }, m) => {
        if (d === "*") {
          let v = c[m] || "";
          l = o.slice(0, o.length - v.length).replace(/(.)\/+$/, "$1");
        }
        const p = c[m];
        return f && !p ? s[d] = void 0 : s[d] = (p || "").replace(/%2F/g, "/"), s;
      },
      {}
    ),
    pathname: o,
    pathnameBase: l,
    pattern: e
  };
}
function Ze(e, t = !1, n = !0) {
  b(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let a = [], r = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (l, c, u) => (a.push({ paramName: c, isOptional: u != null }), u ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return e.endsWith("*") ? (a.push({ paramName: "*" }), r += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? r += "\\/*$" : e !== "" && e !== "/" && (r += "(?:(?=\\/|$))"), [new RegExp(r, t ? void 0 : "i"), a];
}
function Xe(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return b(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function P(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, a = e.charAt(n);
  return a && a !== "/" ? null : e.slice(n) || "/";
}
function Qe(e, t = "/") {
  let {
    pathname: n,
    search: a = "",
    hash: r = ""
  } = typeof e == "string" ? Y(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : et(n, t) : t,
    search: rt(a),
    hash: at(r)
  };
}
function et(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((r) => {
    r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r);
  }), n.length > 1 ? n.join("/") : "/";
}
function z(e, t, n, a) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    a
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function tt(e) {
  return e.filter(
    (t, n) => n === 0 || t.route.path && t.route.path.length > 0
  );
}
function ue(e) {
  let t = tt(e);
  return t.map(
    (n, a) => a === t.length - 1 ? n.pathname : n.pathnameBase
  );
}
function se(e, t, n, a = !1) {
  let r;
  typeof e == "string" ? r = Y(e) : (r = { ...e }, x(
    !r.pathname || !r.pathname.includes("?"),
    z("?", "pathname", "search", r)
  ), x(
    !r.pathname || !r.pathname.includes("#"),
    z("#", "pathname", "hash", r)
  ), x(
    !r.search || !r.search.includes("#"),
    z("#", "search", "hash", r)
  ));
  let o = e === "" || r.pathname === "", l = o ? "/" : r.pathname, c;
  if (l == null)
    c = n;
  else {
    let f = t.length - 1;
    if (!a && l.startsWith("..")) {
      let m = l.split("/");
      for (; m[0] === ".."; )
        m.shift(), f -= 1;
      r.pathname = m.join("/");
    }
    c = f >= 0 ? t[f] : "/";
  }
  let u = Qe(r, c), s = l && l !== "/" && l.endsWith("/"), d = (o || l === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || d) && (u.pathname += "/"), u;
}
var E = (e) => e.join("/").replace(/\/\/+/g, "/"), nt = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), rt = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, at = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function ot(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
var ce = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  ce
);
var lt = [
  "GET",
  ...ce
];
new Set(lt);
var D = i.createContext(null);
D.displayName = "DataRouter";
var U = i.createContext(null);
U.displayName = "DataRouterState";
i.createContext(!1);
var de = i.createContext({
  isTransitioning: !1
});
de.displayName = "ViewTransition";
var it = i.createContext(
  /* @__PURE__ */ new Map()
);
it.displayName = "Fetchers";
var ut = i.createContext(null);
ut.displayName = "Await";
var L = i.createContext(
  null
);
L.displayName = "Navigation";
var q = i.createContext(
  null
);
q.displayName = "Location";
var k = i.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
k.displayName = "Route";
var G = i.createContext(null);
G.displayName = "RouteError";
function st(e, { relative: t } = {}) {
  x(
    V(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: n, navigator: a } = i.useContext(L), { hash: r, pathname: o, search: l } = B(e, { relative: t }), c = o;
  return n !== "/" && (c = o === "/" ? n : E([n, o])), a.createHref({ pathname: c, search: l, hash: r });
}
function V() {
  return i.useContext(q) != null;
}
function S() {
  return x(
    V(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), i.useContext(q).location;
}
var fe = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function he(e) {
  i.useContext(L).static || i.useLayoutEffect(e);
}
function ct() {
  let { isDataRoute: e } = i.useContext(k);
  return e ? Et() : dt();
}
function dt() {
  x(
    V(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = i.useContext(D), { basename: t, navigator: n } = i.useContext(L), { matches: a } = i.useContext(k), { pathname: r } = S(), o = JSON.stringify(ue(a)), l = i.useRef(!1);
  return he(() => {
    l.current = !0;
  }), i.useCallback(
    (u, s = {}) => {
      if (b(l.current, fe), !l.current) return;
      if (typeof u == "number") {
        n.go(u);
        return;
      }
      let d = se(
        u,
        JSON.parse(o),
        r,
        s.relative === "path"
      );
      e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : E([t, d.pathname])), (s.replace ? n.replace : n.push)(
        d,
        s.state,
        s
      );
    },
    [
      t,
      n,
      o,
      r,
      e
    ]
  );
}
i.createContext(null);
function B(e, { relative: t } = {}) {
  let { matches: n } = i.useContext(k), { pathname: a } = S(), r = JSON.stringify(ue(n));
  return i.useMemo(
    () => se(
      e,
      JSON.parse(r),
      a,
      t === "path"
    ),
    [e, r, a, t]
  );
}
function ft(e, t, n, a, r) {
  x(
    V(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o } = i.useContext(L), { matches: l } = i.useContext(k), c = l[l.length - 1], u = c ? c.params : {}, s = c ? c.pathname : "/", d = c ? c.pathnameBase : "/", f = c && c.route;
  {
    let h = f && f.path || "";
    me(
      s,
      !f || h.endsWith("*") || h.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h === "/" ? "*" : `${h}/*`}">.`
    );
  }
  let m = S(), p;
  p = m;
  let v = p.pathname || "/", w = v;
  if (d !== "/") {
    let h = d.replace(/^\//, "").split("/");
    w = "/" + v.replace(/^\//, "").split("/").slice(h.length).join("/");
  }
  let y = oe(e, { pathname: w });
  return b(
    f || y != null,
    `No routes matched location "${p.pathname}${p.search}${p.hash}" `
  ), b(
    y == null || y[y.length - 1].route.element !== void 0 || y[y.length - 1].route.Component !== void 0 || y[y.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), vt(
    y && y.map(
      (h) => Object.assign({}, h, {
        params: Object.assign({}, u, h.params),
        pathname: E([
          d,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          o.encodeLocation ? o.encodeLocation(
            h.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : h.pathname
        ]),
        pathnameBase: h.pathnameBase === "/" ? d : E([
          d,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          o.encodeLocation ? o.encodeLocation(
            h.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : h.pathnameBase
        ])
      })
    ),
    l,
    n,
    a,
    r
  );
}
function ht() {
  let e = Rt(), t = ot(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, a = "rgba(200,200,200, 0.5)", r = { padding: "0.5rem", backgroundColor: a }, o = { padding: "2px 4px", backgroundColor: a }, l = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), l = /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ i.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ i.createElement("code", { style: o }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ i.createElement("code", { style: o }, "errorElement"), " prop on your route.")), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ i.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? /* @__PURE__ */ i.createElement("pre", { style: r }, n) : null, l);
}
var mt = /* @__PURE__ */ i.createElement(ht, null), pt = class extends i.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    this.props.unstable_onError ? this.props.unstable_onError(e, t) : console.error(
      "React Router caught the following error during render",
      e
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ i.createElement(k.Provider, { value: this.props.routeContext }, /* @__PURE__ */ i.createElement(
      G.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function gt({ routeContext: e, match: t, children: n }) {
  let a = i.useContext(D);
  return a && a.static && a.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ i.createElement(k.Provider, { value: e }, n);
}
function vt(e, t = [], n = null, a = null, r = null) {
  if (e == null) {
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let o = e, l = n?.errors;
  if (l != null) {
    let s = o.findIndex(
      (d) => d.route.id && l?.[d.route.id] !== void 0
    );
    x(
      s >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        l
      ).join(",")}`
    ), o = o.slice(
      0,
      Math.min(o.length, s + 1)
    );
  }
  let c = !1, u = -1;
  if (n)
    for (let s = 0; s < o.length; s++) {
      let d = o[s];
      if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = s), d.route.id) {
        let { loaderData: f, errors: m } = n, p = d.route.loader && !f.hasOwnProperty(d.route.id) && (!m || m[d.route.id] === void 0);
        if (d.route.lazy || p) {
          c = !0, u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
          break;
        }
      }
    }
  return o.reduceRight(
    (s, d, f) => {
      let m, p = !1, v = null, w = null;
      n && (m = l && d.route.id ? l[d.route.id] : void 0, v = d.route.errorElement || mt, c && (u < 0 && f === 0 ? (me(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), p = !0, w = null) : u === f && (p = !0, w = d.route.hydrateFallbackElement || null)));
      let y = t.concat(o.slice(0, f + 1)), g = () => {
        let h;
        return m ? h = v : p ? h = w : d.route.Component ? h = /* @__PURE__ */ i.createElement(d.route.Component, null) : d.route.element ? h = d.route.element : h = s, /* @__PURE__ */ i.createElement(
          gt,
          {
            match: d,
            routeContext: {
              outlet: s,
              matches: y,
              isDataRoute: n != null
            },
            children: h
          }
        );
      };
      return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? /* @__PURE__ */ i.createElement(
        pt,
        {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: m,
          children: g(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
          unstable_onError: a
        }
      ) : g();
    },
    null
  );
}
function Z(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function yt(e) {
  let t = i.useContext(D);
  return x(t, Z(e)), t;
}
function wt(e) {
  let t = i.useContext(U);
  return x(t, Z(e)), t;
}
function Ct(e) {
  let t = i.useContext(k);
  return x(t, Z(e)), t;
}
function X(e) {
  let t = Ct(e), n = t.matches[t.matches.length - 1];
  return x(
    n.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), n.route.id;
}
function xt() {
  return X(
    "useRouteId"
    /* UseRouteId */
  );
}
function Rt() {
  let e = i.useContext(G), t = wt(
    "useRouteError"
    /* UseRouteError */
  ), n = X(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : t.errors?.[n];
}
function Et() {
  let { router: e } = yt(
    "useNavigate"
    /* UseNavigateStable */
  ), t = X(
    "useNavigate"
    /* UseNavigateStable */
  ), n = i.useRef(!1);
  return he(() => {
    n.current = !0;
  }), i.useCallback(
    async (r, o = {}) => {
      b(n.current, fe), n.current && (typeof r == "number" ? e.navigate(r) : await e.navigate(r, { fromRouteId: t, ...o }));
    },
    [e, t]
  );
}
var re = {};
function me(e, t, n) {
  !t && !re[e] && (re[e] = !0, b(!1, n));
}
i.memo(bt);
function bt({
  routes: e,
  future: t,
  state: n,
  unstable_onError: a
}) {
  return ft(e, void 0, n, a, t);
}
var W = "get", O = "application/x-www-form-urlencoded";
function K(e) {
  return e != null && typeof e.tagName == "string";
}
function Lt(e) {
  return K(e) && e.tagName.toLowerCase() === "button";
}
function kt(e) {
  return K(e) && e.tagName.toLowerCase() === "form";
}
function Pt(e) {
  return K(e) && e.tagName.toLowerCase() === "input";
}
function _t(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function St(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !_t(e);
}
var A = null;
function $t() {
  if (A === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), A = !1;
    } catch {
      A = !0;
    }
  return A;
}
var Ft = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function j(e) {
  return e != null && !Ft.has(e) ? (b(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${O}"`
  ), null) : e;
}
function Dt(e, t) {
  let n, a, r, o, l;
  if (kt(e)) {
    let c = e.getAttribute("action");
    a = c ? P(c, t) : null, n = e.getAttribute("method") || W, r = j(e.getAttribute("enctype")) || O, o = new FormData(e);
  } else if (Lt(e) || Pt(e) && (e.type === "submit" || e.type === "image")) {
    let c = e.form;
    if (c == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let u = e.getAttribute("formaction") || c.getAttribute("action");
    if (a = u ? P(u, t) : null, n = e.getAttribute("formmethod") || c.getAttribute("method") || W, r = j(e.getAttribute("formenctype")) || j(c.getAttribute("enctype")) || O, o = new FormData(c, e), !$t()) {
      let { name: s, type: d, value: f } = e;
      if (d === "image") {
        let m = s ? `${s}.` : "";
        o.append(`${m}x`, "0"), o.append(`${m}y`, "0");
      } else s && o.append(s, f);
    }
  } else {
    if (K(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    n = W, a = null, r = O, l = e;
  }
  return o && r === "text/plain" && (l = o, o = void 0), { action: a, method: n.toLowerCase(), encType: r, formData: o, body: l };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Q(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function It(e, t, n) {
  let a = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return a.pathname === "/" ? a.pathname = `_root.${n}` : t && P(a.pathname, t) === "/" ? a.pathname = `${t.replace(/\/$/, "")}/_root.${n}` : a.pathname = `${a.pathname.replace(/\/$/, "")}.${n}`, a;
}
async function Nt(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let n = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = n, n;
  } catch (n) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Bt(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Tt(e, t, n) {
  let a = await Promise.all(
    e.map(async (r) => {
      let o = t.routes[r.route.id];
      if (o) {
        let l = await Nt(o, n);
        return l.links ? l.links() : [];
      }
      return [];
    })
  );
  return Ot(
    a.flat(1).filter(Bt).filter((r) => r.rel === "stylesheet" || r.rel === "preload").map(
      (r) => r.rel === "stylesheet" ? { ...r, rel: "prefetch", as: "style" } : { ...r, rel: "prefetch" }
    )
  );
}
function ae(e, t, n, a, r, o) {
  let l = (u, s) => n[s] ? u.route.id !== n[s].route.id : !0, c = (u, s) => (
    // param change, /users/123 -> /users/456
    n[s].pathname !== u.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    n[s].route.path?.endsWith("*") && n[s].params["*"] !== u.params["*"]
  );
  return o === "assets" ? t.filter(
    (u, s) => l(u, s) || c(u, s)
  ) : o === "data" ? t.filter((u, s) => {
    let d = a.routes[u.route.id];
    if (!d || !d.hasLoader)
      return !1;
    if (l(u, s) || c(u, s))
      return !0;
    if (u.route.shouldRevalidate) {
      let f = u.route.shouldRevalidate({
        currentUrl: new URL(
          r.pathname + r.search + r.hash,
          window.origin
        ),
        currentParams: n[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: u.params,
        defaultShouldRevalidate: !0
      });
      if (typeof f == "boolean")
        return f;
    }
    return !0;
  }) : [];
}
function Mt(e, t, { includeHydrateFallback: n } = {}) {
  return At(
    e.map((a) => {
      let r = t.routes[a.route.id];
      if (!r) return [];
      let o = [r.module];
      return r.clientActionModule && (o = o.concat(r.clientActionModule)), r.clientLoaderModule && (o = o.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (o = o.concat(r.hydrateFallbackModule)), r.imports && (o = o.concat(r.imports)), o;
    }).flat(1)
  );
}
function At(e) {
  return [...new Set(e)];
}
function Wt(e) {
  let t = {}, n = Object.keys(e).sort();
  for (let a of n)
    t[a] = e[a];
  return t;
}
function Ot(e, t) {
  let n = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((a, r) => {
    let o = JSON.stringify(Wt(r));
    return n.has(o) || (n.add(o), a.push({ key: o, link: r })), a;
  }, []);
}
function pe() {
  let e = i.useContext(D);
  return Q(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function Ht() {
  let e = i.useContext(U);
  return Q(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var ee = i.createContext(void 0);
ee.displayName = "FrameworkContext";
function ge() {
  let e = i.useContext(ee);
  return Q(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function Ut(e, t) {
  let n = i.useContext(ee), [a, r] = i.useState(!1), [o, l] = i.useState(!1), { onFocus: c, onBlur: u, onMouseEnter: s, onMouseLeave: d, onTouchStart: f } = t, m = i.useRef(null);
  i.useEffect(() => {
    if (e === "render" && l(!0), e === "viewport") {
      let w = (g) => {
        g.forEach((h) => {
          l(h.isIntersecting);
        });
      }, y = new IntersectionObserver(w, { threshold: 0.5 });
      return m.current && y.observe(m.current), () => {
        y.disconnect();
      };
    }
  }, [e]), i.useEffect(() => {
    if (a) {
      let w = setTimeout(() => {
        l(!0);
      }, 100);
      return () => {
        clearTimeout(w);
      };
    }
  }, [a]);
  let p = () => {
    r(!0);
  }, v = () => {
    r(!1), l(!1);
  };
  return n ? e !== "intent" ? [o, m, {}] : [
    o,
    m,
    {
      onFocus: N(c, p),
      onBlur: N(u, v),
      onMouseEnter: N(s, p),
      onMouseLeave: N(d, v),
      onTouchStart: N(f, p)
    }
  ] : [!1, m, {}];
}
function N(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function Vt({ page: e, ...t }) {
  let { router: n } = pe(), a = i.useMemo(
    () => oe(n.routes, e, n.basename),
    [n.routes, e, n.basename]
  );
  return a ? /* @__PURE__ */ i.createElement(zt, { page: e, matches: a, ...t }) : null;
}
function Kt(e) {
  let { manifest: t, routeModules: n } = ge(), [a, r] = i.useState([]);
  return i.useEffect(() => {
    let o = !1;
    return Tt(e, t, n).then(
      (l) => {
        o || r(l);
      }
    ), () => {
      o = !0;
    };
  }, [e, t, n]), a;
}
function zt({
  page: e,
  matches: t,
  ...n
}) {
  let a = S(), { manifest: r, routeModules: o } = ge(), { basename: l } = pe(), { loaderData: c, matches: u } = Ht(), s = i.useMemo(
    () => ae(
      e,
      t,
      u,
      r,
      a,
      "data"
    ),
    [e, t, u, r, a]
  ), d = i.useMemo(
    () => ae(
      e,
      t,
      u,
      r,
      a,
      "assets"
    ),
    [e, t, u, r, a]
  ), f = i.useMemo(() => {
    if (e === a.pathname + a.search + a.hash)
      return [];
    let v = /* @__PURE__ */ new Set(), w = !1;
    if (t.forEach((g) => {
      let h = r.routes[g.route.id];
      !h || !h.hasLoader || (!s.some((C) => C.route.id === g.route.id) && g.route.id in c && o[g.route.id]?.shouldRevalidate || h.hasClientLoader ? w = !0 : v.add(g.route.id));
    }), v.size === 0)
      return [];
    let y = It(e, l, "data");
    return w && v.size > 0 && y.searchParams.set(
      "_routes",
      t.filter((g) => v.has(g.route.id)).map((g) => g.route.id).join(",")
    ), [y.pathname + y.search];
  }, [
    l,
    c,
    a,
    r,
    s,
    t,
    e,
    o
  ]), m = i.useMemo(
    () => Mt(d, r),
    [d, r]
  ), p = Kt(d);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, f.map((v) => /* @__PURE__ */ i.createElement("link", { key: v, rel: "prefetch", as: "fetch", href: v, ...n })), m.map((v) => /* @__PURE__ */ i.createElement("link", { key: v, rel: "modulepreload", href: v, ...n })), p.map(({ key: v, link: w }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ i.createElement("link", { key: v, nonce: n.nonce, ...w })
  )));
}
function jt(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
var ve = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  ve && (window.__reactRouterVersion = // @ts-expect-error
  "7.9.3");
} catch {
}
var ye = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, we = i.forwardRef(
  function({
    onClick: t,
    discover: n = "render",
    prefetch: a = "none",
    relative: r,
    reloadDocument: o,
    replace: l,
    state: c,
    target: u,
    to: s,
    preventScrollReset: d,
    viewTransition: f,
    ...m
  }, p) {
    let { basename: v } = i.useContext(L), w = typeof s == "string" && ye.test(s), y, g = !1;
    if (typeof s == "string" && w && (y = s, ve))
      try {
        let R = new URL(window.location.href), F = s.startsWith("//") ? new URL(R.protocol + s) : new URL(s), te = P(F.pathname, v);
        F.origin === R.origin && te != null ? s = te + F.search + F.hash : g = !0;
      } catch {
        b(
          !1,
          `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let h = st(s, { relative: r }), [C, $, _] = Ut(
      a,
      m
    ), T = Gt(s, {
      replace: l,
      state: c,
      target: u,
      preventScrollReset: d,
      relative: r,
      viewTransition: f
    });
    function I(R) {
      t && t(R), R.defaultPrevented || T(R);
    }
    let M = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ i.createElement(
        "a",
        {
          ...m,
          ..._,
          href: y || h,
          onClick: g || o ? t : I,
          ref: jt(p, $),
          target: u,
          "data-discover": !w && n === "render" ? "true" : void 0
        }
      )
    );
    return C && !w ? /* @__PURE__ */ i.createElement(i.Fragment, null, M, /* @__PURE__ */ i.createElement(Vt, { page: h })) : M;
  }
);
we.displayName = "Link";
var Jt = i.forwardRef(
  function({
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: a = "",
    end: r = !1,
    style: o,
    to: l,
    viewTransition: c,
    children: u,
    ...s
  }, d) {
    let f = B(l, { relative: s.relative }), m = S(), p = i.useContext(U), { navigator: v, basename: w } = i.useContext(L), y = p != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    tn(f) && c === !0, g = v.encodeLocation ? v.encodeLocation(f).pathname : f.pathname, h = m.pathname, C = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
    n || (h = h.toLowerCase(), C = C ? C.toLowerCase() : null, g = g.toLowerCase()), C && w && (C = P(C, w) || C);
    const $ = g !== "/" && g.endsWith("/") ? g.length - 1 : g.length;
    let _ = h === g || !r && h.startsWith(g) && h.charAt($) === "/", T = C != null && (C === g || !r && C.startsWith(g) && C.charAt(g.length) === "/"), I = {
      isActive: _,
      isPending: T,
      isTransitioning: y
    }, M = _ ? t : void 0, R;
    typeof a == "function" ? R = a(I) : R = [
      a,
      _ ? "active" : null,
      T ? "pending" : null,
      y ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let F = typeof o == "function" ? o(I) : o;
    return /* @__PURE__ */ i.createElement(
      we,
      {
        ...s,
        "aria-current": M,
        className: R,
        ref: d,
        style: F,
        to: l,
        viewTransition: c
      },
      typeof u == "function" ? u(I) : u
    );
  }
);
Jt.displayName = "NavLink";
var Yt = i.forwardRef(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: n,
    reloadDocument: a,
    replace: r,
    state: o,
    method: l = W,
    action: c,
    onSubmit: u,
    relative: s,
    preventScrollReset: d,
    viewTransition: f,
    ...m
  }, p) => {
    let v = Qt(), w = en(c, { relative: s }), y = l.toLowerCase() === "get" ? "get" : "post", g = typeof c == "string" && ye.test(c), h = (C) => {
      if (u && u(C), C.defaultPrevented) return;
      C.preventDefault();
      let $ = C.nativeEvent.submitter, _ = $?.getAttribute("formmethod") || l;
      v($ || C.currentTarget, {
        fetcherKey: t,
        method: _,
        navigate: n,
        replace: r,
        state: o,
        relative: s,
        preventScrollReset: d,
        viewTransition: f
      });
    };
    return /* @__PURE__ */ i.createElement(
      "form",
      {
        ref: p,
        method: y,
        action: w,
        onSubmit: a ? u : h,
        ...m,
        "data-discover": !g && e === "render" ? "true" : void 0
      }
    );
  }
);
Yt.displayName = "Form";
function qt(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ce(e) {
  let t = i.useContext(D);
  return x(t, qt(e)), t;
}
function Gt(e, {
  target: t,
  replace: n,
  state: a,
  preventScrollReset: r,
  relative: o,
  viewTransition: l
} = {}) {
  let c = ct(), u = S(), s = B(e, { relative: o });
  return i.useCallback(
    (d) => {
      if (St(d, t)) {
        d.preventDefault();
        let f = n !== void 0 ? n : J(u) === J(s);
        c(e, {
          replace: f,
          state: a,
          preventScrollReset: r,
          relative: o,
          viewTransition: l
        });
      }
    },
    [
      u,
      c,
      s,
      n,
      a,
      t,
      e,
      r,
      o,
      l
    ]
  );
}
var Zt = 0, Xt = () => `__${String(++Zt)}__`;
function Qt() {
  let { router: e } = Ce(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = i.useContext(L), n = xt();
  return i.useCallback(
    async (a, r = {}) => {
      let { action: o, method: l, encType: c, formData: u, body: s } = Dt(
        a,
        t
      );
      if (r.navigate === !1) {
        let d = r.fetcherKey || Xt();
        await e.fetch(d, n, r.action || o, {
          preventScrollReset: r.preventScrollReset,
          formData: u,
          body: s,
          formMethod: r.method || l,
          formEncType: r.encType || c,
          flushSync: r.flushSync
        });
      } else
        await e.navigate(r.action || o, {
          preventScrollReset: r.preventScrollReset,
          formData: u,
          body: s,
          formMethod: r.method || l,
          formEncType: r.encType || c,
          replace: r.replace,
          state: r.state,
          fromRouteId: n,
          flushSync: r.flushSync,
          viewTransition: r.viewTransition
        });
    },
    [e, t, n]
  );
}
function en(e, { relative: t } = {}) {
  let { basename: n } = i.useContext(L), a = i.useContext(k);
  x(a, "useFormAction must be used inside a RouteContext");
  let [r] = a.matches.slice(-1), o = { ...B(e || ".", { relative: t }) }, l = S();
  if (e == null) {
    o.search = l.search;
    let c = new URLSearchParams(o.search), u = c.getAll("index");
    if (u.some((d) => d === "")) {
      c.delete("index"), u.filter((f) => f).forEach((f) => c.append("index", f));
      let d = c.toString();
      o.search = d ? `?${d}` : "";
    }
  }
  return (!e || e === ".") && r.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (o.pathname = o.pathname === "/" ? n : E([n, o.pathname])), J(o);
}
function tn(e, { relative: t } = {}) {
  let n = i.useContext(de);
  x(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: a } = Ce(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), r = B(e, { relative: t });
  if (!n.isTransitioning)
    return !1;
  let o = P(n.currentLocation.pathname, a) || n.currentLocation.pathname, l = P(n.nextLocation.pathname, a) || n.nextLocation.pathname;
  return H(r.pathname, l) != null || H(r.pathname, o) != null;
}
export {
  nn as L,
  we as a,
  rn as s
};
