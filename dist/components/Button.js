import { jsx as e, jsxs as k, Fragment as n } from "react/jsx-runtime";
import "react";
import L from "./Loader.js";
import '../assets/Button.css';const E = "_button_b9ihy_1", v = "_light_b9ihy_35", R = "_dark_b9ihy_40", M = "_selected_b9ihy_46", S = "_icon_b9ihy_55", j = "_buttonMultiSelect_b9ihy_61", x = "_iconEdge_b9ihy_69", A = "_iconLeft_b9ihy_74", B = "_iconRight_b9ihy_79", t = {
  button: E,
  light: v,
  dark: R,
  selected: M,
  icon: S,
  buttonMultiSelect: j,
  iconEdge: x,
  iconLeft: A,
  iconRight: B,
  "button-1": "_button-1_b9ihy_88",
  "button-primary": "_button-primary_b9ihy_89",
  "button-2": "_button-2_b9ihy_95",
  "button-secondary": "_button-secondary_b9ihy_96",
  "button-3": "_button-3_b9ihy_102",
  "button-success": "_button-success_b9ihy_103",
  "button-4": "_button-4_b9ihy_110",
  "button-warn": "_button-warn_b9ihy_111",
  "button-5": "_button-5_b9ihy_118",
  "button-error": "_button-error_b9ihy_119",
  "button-6": "_button-6_b9ihy_126",
  "button-ghost": "_button-ghost_b9ihy_127",
  "button-7": "_button-7_b9ihy_134",
  "button-ghost-accent": "_button-ghost-accent_b9ihy_135",
  "button-8": "_button-8_b9ihy_142",
  "button-ghost-success": "_button-ghost-success_b9ihy_143",
  "button-9": "_button-9_b9ihy_150",
  "button-ghost-warn": "_button-ghost-warn_b9ihy_151",
  "button-10": "_button-10_b9ihy_158",
  "button-ghost-error": "_button-ghost-error_b9ihy_159"
}, z = ({
  style: r = {},
  className: l,
  text: o,
  width: u = "100%",
  onClick: s,
  type: d = 1,
  loading: c = !1,
  selected: y = !1,
  iconPosition: _ = "left",
  iconJustify: a = "center",
  icon: h = null,
  iconImage: b = null,
  buttonType: g = "button",
  buttonRef: f = null,
  theme: i = "light",
  form: m = null,
  disabled: $ = !1,
  id: N = "",
  href: p,
  download: w = null
}) => p ? /* @__PURE__ */ e(
  "a",
  {
    ref: f,
    href: p,
    id: N,
    className: `
          ${t.button} ${t["button-" + d]}
          ${i === "light" ? t.light : t.dark}
          ${y ? t.selected : ""}
          ${_ === "left" ? t.iconLeft : ""}
          ${_ === "right" ? t.iconRight : ""}
          ${a === "edge" && u !== "auto" ? t.iconEdge : t.widthAuto}
          ${l}
        `,
    onClick: !c && s,
    style: { ...r, width: r.width || u },
    type: g,
    form: m,
    disabled: $,
    download: w,
    children: c ? /* @__PURE__ */ e(
      L,
      {
        theme: { theme: i },
        style: { height: "2em", width: "2em", color: "inherit" }
      }
    ) : /* @__PURE__ */ k(n, { children: [
      h && _ === "left" ? /* @__PURE__ */ e(n, { children: /* @__PURE__ */ e("div", { className: t.icon, children: h }) }) : b && _ === "left" ? /* @__PURE__ */ e(n, { children: /* @__PURE__ */ e("img", { className: t.icon, src: b }) }) : "",
      /* @__PURE__ */ e("span", { children: o }),
      b && _ === "right" ? /* @__PURE__ */ e(n, { children: /* @__PURE__ */ e("img", { className: t.icon, src: b }) }) : h && _ === "right" ? /* @__PURE__ */ e(n, { children: /* @__PURE__ */ e("div", { className: t.icon, children: h }) }) : ""
    ] })
  }
) : /* @__PURE__ */ e(
  "button",
  {
    id: N,
    ref: f,
    className: `
          ${t.button} ${t["button-" + d]}
          ${i === "light" ? t.light : t.dark}
          ${y ? t.selected : ""}
          ${_ === "left" ? t.iconLeft : ""}
          ${_ === "right" ? t.iconRight : ""}
          ${a === "edge" && u !== "auto" ? t.iconEdge : t.widthAuto}
          ${l}
        `,
    onClick: !c && s,
    style: { ...r, width: r.width || u },
    type: g,
    form: m,
    disabled: $,
    download: w,
    children: c ? /* @__PURE__ */ e(
      L,
      {
        theme: { theme: i },
        style: { height: "2em", width: "2em", color: "inherit" }
      }
    ) : /* @__PURE__ */ k(n, { children: [
      h && _ === "left" ? /* @__PURE__ */ e(n, { children: /* @__PURE__ */ e("div", { className: t.icon, children: h }) }) : b && _ === "left" ? /* @__PURE__ */ e(n, { children: /* @__PURE__ */ e("img", { className: t.icon, src: b }) }) : "",
      /* @__PURE__ */ e("span", { children: o }),
      b && _ === "right" ? /* @__PURE__ */ e(n, { children: /* @__PURE__ */ e("img", { className: t.icon, src: b }) }) : h && _ === "right" ? /* @__PURE__ */ e(n, { children: /* @__PURE__ */ e("div", { className: t.icon, children: h }) }) : ""
    ] })
  }
);
export {
  z as default
};
