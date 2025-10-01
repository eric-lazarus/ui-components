import { jsxs as t, jsx as e } from "react/jsx-runtime";
import "react";
import c from "./Icon.js";
import o from "./ConfidenceBar.js";
import '../assets/TestThumb.css';const l = "_testThumb_1nzvg_1", d = "_light_1nzvg_17", s = "_dark_1nzvg_24", _ = "_imageDiv_1nzvg_45", a = "_expandDown_1nzvg_60", v = "_topDiv_1nzvg_65", g = "_bottomDiv_1nzvg_73", m = "_textDiv_1nzvg_77", r = "_middleDiv_1nzvg_82", h = "_leftDiv_1nzvg_83", D = "_rightDiv_1nzvg_84", z = "_condition1_1nzvg_108", f = "_condition2_1nzvg_109", x = "_conditionCircle_1nzvg_113", N = "_flex_1nzvg_119", u = "_collapseUp_1nzvg_123", b = "_red_1nzvg_129", w = "_orange_1nzvg_133", $ = "_yellow_1nzvg_137", C = "_green_1nzvg_141", i = {
  testThumb: l,
  light: d,
  dark: s,
  imageDiv: _,
  expandDown: a,
  "expand-down": "_expand-down_1nzvg_1",
  topDiv: v,
  bottomDiv: g,
  textDiv: m,
  middleDiv: r,
  leftDiv: h,
  rightDiv: D,
  condition1: z,
  condition2: f,
  conditionCircle: x,
  flex: N,
  collapseUp: u,
  "collapse-up": "_collapse-up_1nzvg_1",
  red: b,
  orange: w,
  yellow: $,
  green: C
};
function j(n) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: `
          ${i.testThumb}
          ${n.isVisible ? i.expandDown : i.collapseUp}
          ${n.theme === "light" ? i.light : i.dark}
        `,
      style: n.isVisible ? n.style : {},
      children: [
        n.image ? /* @__PURE__ */ e("img", { src: n.image, alt: "lesion" }) : n.icon ? n.icon : "",
        n.isAIActive && /* @__PURE__ */ t("div", { className: i.textDiv, children: [
          /* @__PURE__ */ t("div", { className: i.topDiv, children: [
            /* @__PURE__ */ t("div", { className: i.leftDiv, children: [
              /* @__PURE__ */ e("p", { children: "Top Results" }),
              /* @__PURE__ */ t("div", { className: i.flex, children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: `${i.conditionCircle} ${i[n.risk1]}`
                  }
                ),
                /* @__PURE__ */ e("p", { className: i.condition1, children: n.condition1 })
              ] }),
              /* @__PURE__ */ t("div", { className: i.flex, children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: `${i.conditionCircle} ${i[n.risk2]}`
                  }
                ),
                /* @__PURE__ */ e("p", { className: i.condition2, children: n.condition2 })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: i.middleDiv, children: [
              /* @__PURE__ */ e("p", { children: "Confidence" }),
              /* @__PURE__ */ e("p", { className: i.condition1, children: `${n.confidence1}%` }),
              /* @__PURE__ */ e("p", { className: i.condition2, children: `${n.confidence2}%` })
            ] }),
            n.notes || n.flag && /* @__PURE__ */ t("div", { className: i.rightDiv, children: [
              /* @__PURE__ */ e("div", { children: n.notes && /* @__PURE__ */ e(c, { icon: "list-outline" }) }),
              /* @__PURE__ */ e("div", { children: n.flag && /* @__PURE__ */ e(c, { icon: "flag-outline" }) })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: i.bottomDiv, children: /* @__PURE__ */ e(o, { reasoning: n.reasoning }) })
        ] })
      ]
    }
  );
}
export {
  j as default
};
