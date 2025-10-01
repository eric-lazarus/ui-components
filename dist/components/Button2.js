import { jsx as n, jsxs as L, Fragment as _ } from "react/jsx-runtime";
import "react";
import y from "./Loader.js";
import '../assets/Button2.css';const E = "_button_13tn2_1", v = "_light_13tn2_42", R = "_dark_13tn2_47", M = "_selected_13tn2_53", S = "_icon_13tn2_62", j = "_buttonMultiSelect_13tn2_68", x = "_iconEdge_13tn2_76", A = "_iconLeft_13tn2_81", B = "_iconRight_13tn2_86", t = {
  button: E,
  light: v,
  dark: R,
  selected: M,
  icon: S,
  buttonMultiSelect: j,
  iconEdge: x,
  iconLeft: A,
  iconRight: B,
  "button-1": "_button-1_13tn2_95",
  "button-primary": "_button-primary_13tn2_96",
  "button-2": "_button-2_13tn2_102",
  "button-secondary": "_button-secondary_13tn2_103",
  "button-3": "_button-3_13tn2_109",
  "button-success": "_button-success_13tn2_110",
  "button-4": "_button-4_13tn2_117",
  "button-warn": "_button-warn_13tn2_118",
  "button-5": "_button-5_13tn2_125",
  "button-error": "_button-error_13tn2_126",
  "button-6": "_button-6_13tn2_133",
  "button-ghost": "_button-ghost_13tn2_134",
  "button-7": "_button-7_13tn2_141",
  "button-ghost-accent": "_button-ghost-accent_13tn2_142",
  "button-8": "_button-8_13tn2_149",
  "button-ghost-success": "_button-ghost-success_13tn2_150",
  "button-9": "_button-9_13tn2_157",
  "button-ghost-warn": "_button-ghost-warn_13tn2_158",
  "button-10": "_button-10_13tn2_165",
  "button-ghost-error": "_button-ghost-error_13tn2_166"
}, z = ({
  style: c = {},
  className: h,
  text: b,
  width: l = "100%",
  onClick: d,
  type: i = 1,
  loading: o = !1,
  selected: a = !1,
  iconPosition: e = "left",
  iconJustify: g = "center",
  icon: r = null,
  iconImage: u = null,
  buttonType: f = "button",
  buttonRef: m = null,
  theme: s = "light",
  form: $ = null,
  disabled: N = !1,
  id: p = "",
  href: w,
  download: k = null
}) => w ? /* @__PURE__ */ n(
  "a",
  {
    ref: m,
    href: w,
    id: p,
    className: `
          ${t.button} ${t["button-" + i]}
          ${s === "light" ? t.light : t.dark}
          ${a ? t.selected : ""}
          ${e === "left" ? t.iconLeft : ""}
          ${e === "right" ? t.iconRight : ""}
          ${g === "edge" && l !== "auto" ? t.iconEdge : t.widthAuto}
          ${h}
        `,
    onClick: !o && d,
    style: { ...c, width: c.width || l },
    type: f,
    form: $,
    disabled: N,
    download: k,
    children: o ? /* @__PURE__ */ n(
      y,
      {
        theme: { theme: s },
        style: { height: "2em", width: "2em", color: "inherit" }
      }
    ) : /* @__PURE__ */ L(_, { children: [
      r && e === "left" ? /* @__PURE__ */ n(_, { children: /* @__PURE__ */ n("div", { className: t.icon, children: r }) }) : u && e === "left" ? /* @__PURE__ */ n(_, { children: /* @__PURE__ */ n("img", { className: t.icon, src: u }) }) : "",
      /* @__PURE__ */ n("span", { children: b }),
      u && e === "right" ? /* @__PURE__ */ n(_, { children: /* @__PURE__ */ n("img", { className: t.icon, src: u }) }) : r && e === "right" ? /* @__PURE__ */ n(_, { children: /* @__PURE__ */ n("div", { className: t.icon, children: r }) }) : ""
    ] })
  }
) : /* @__PURE__ */ n(
  "button",
  {
    id: p,
    ref: m,
    className: `
          ${t.button} ${t["button-" + i]}
          ${s === "light" ? t.light : t.dark}
          ${a ? t.selected : ""}
          ${e === "left" ? t.iconLeft : ""}
          ${e === "right" ? t.iconRight : ""}
          ${g === "edge" && l !== "auto" ? t.iconEdge : t.widthAuto}
          ${h}
        `,
    onClick: !o && d,
    style: { ...c, width: c.width || l },
    type: f,
    form: $,
    disabled: N,
    download: k,
    children: o ? /* @__PURE__ */ n(
      y,
      {
        theme: { theme: s },
        style: { height: "2em", width: "2em", color: "inherit" }
      }
    ) : /* @__PURE__ */ L(_, { children: [
      r && e === "left" ? /* @__PURE__ */ n(_, { children: /* @__PURE__ */ n("div", { className: t.icon, children: r }) }) : u && e === "left" ? /* @__PURE__ */ n(_, { children: /* @__PURE__ */ n("img", { className: t.icon, src: u }) }) : "",
      /* @__PURE__ */ n("span", { children: b }),
      u && e === "right" ? /* @__PURE__ */ n(_, { children: /* @__PURE__ */ n("img", { className: t.icon, src: u }) }) : r && e === "right" ? /* @__PURE__ */ n(_, { children: /* @__PURE__ */ n("div", { className: t.icon, children: r }) }) : ""
    ] })
  }
);
export {
  z as default
};
