import { jsx as o } from "react/jsx-runtime";
import "react";
import '../assets/Avatar.css';const f = "_light_b5v83_1", p = "_dark_b5v83_8", $ = "_avatar_b5v83_37", k = "_gradient_b5v83_37", m = "_small_b5v83_65", L = "_fontLarge_b5v83_65", x = "_medium_b5v83_73", C = "_icon_b5v83_107", y = "_large_b5v83_117", t = {
  light: f,
  dark: p,
  avatar: $,
  gradient: k,
  small: m,
  fontLarge: L,
  medium: x,
  icon: C,
  large: y
}, U = ({
  name: s = "",
  theme: d = "light",
  showGradient: l = !1,
  showText: g = !0,
  size: _ = "large",
  icon: c,
  image: n,
  color: a,
  onClick: b = () => {
  }
}) => {
  const v = (r) => r[s.length % e.length], e = [
    "var(--colors-brand-gold)",
    "var(--colors-brand-bright-orange)",
    "var(--colors-brand-bright-blue)",
    "var(--colors-brand-bright-green)"
  ], i = (r) => {
    if (r?.length) {
      const h = r[0].toUpperCase(), u = r.indexOf(" ") !== -1 ? r[r.indexOf(" ") + 1].toUpperCase() : "";
      return `${h}${u}`;
    } else
      return "";
  };
  return /* @__PURE__ */ o(
    "button",
    {
      className: `
        ${t.button}
        ${t.avatar} ${d === "dark" ? t.dark : t.light}
        ${l || n ? t.gradient : ""}
        ${t[_]}
        ${i.length === 1 ? t.fontLarge : ""}
      `,
      onClick: b,
      style: l && !a || n && !a ? { backgroundColor: v(e) } : a ? { backgroundColor: e[a] } : {},
      children: n ? /* @__PURE__ */ o("img", { src: n }) : c ? /* @__PURE__ */ o("div", { className: t.icon, children: c }) : s && g ? /* @__PURE__ */ o("span", { children: i(s) }) : ""
    }
  );
};
export {
  U as default
};
