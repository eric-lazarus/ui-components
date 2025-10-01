import { jsx as c } from "react/jsx-runtime";
import "react";
import '../assets/Pill.css';const o = "_light_1gmo2_1", e = "_accent_1gmo2_2", n = "_ghost_1gmo2_8", i = "_dark_1gmo2_14", s = "_pill_1gmo2_25", t = {
  light: o,
  accent: e,
  ghost: n,
  dark: i,
  pill: s
};
function g(l) {
  return /* @__PURE__ */ c(
    "div",
    {
      className: `
      ${t.pill}
      ${l.theme === "dark" ? t.dark : t.light}
      ${l.type === "ghost" || l.type === 2 ? t.ghost : t.accent}
    `,
      children: /* @__PURE__ */ c("span", { children: l.text })
    }
  );
}
export {
  g as default
};
