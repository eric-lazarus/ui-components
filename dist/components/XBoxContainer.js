import { jsx as l } from "react/jsx-runtime";
import "react";
import s from "./Icon.js";
import '../assets/XBoxContainer.css';const _ = "_xBoxContainer_1cj5v_1", g = "_small_1cj5v_18", x = "_large_1cj5v_23", h = "_left_1cj5v_28", m = "_right_1cj5v_32", f = "_light_1cj5v_36", j = "_dark_1cj5v_49", t = {
  xBoxContainer: _,
  small: g,
  large: x,
  left: h,
  right: m,
  light: f,
  dark: j
};
function u({
  size: o = "small",
  theme: n = "light",
  className: r = "",
  style: a,
  align: e,
  onClick: c,
  iconId: i = null
}) {
  return /* @__PURE__ */ l(
    "button",
    {
      style: a || {},
      className: `
        ${t.xBoxContainer}
        ${t[n]}
        ${t[o]}
        ${e === "right" ? t.right : t.left}
        ${r}
      `,
      onClick: c,
      "aria-label": "Close",
      children: /* @__PURE__ */ l(s, { icon: "close", iconId: i })
    }
  );
}
export {
  u as default
};
