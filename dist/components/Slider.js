import { jsx as i, jsxs as _ } from "react/jsx-runtime";
import "react";
import n from "./Icon.js";
import '../assets/Slider.css';const y = "_light_10i3x_1", a = "_dark_10i3x_9", d = "_isOverlay_10i3x_17", r = "_slider_10i3x_27", l = "_sliderInner_10i3x_36", s = "_backgroundWrapper_10i3x_55", c = "_background_10i3x_55", o = "_sliderInput_10i3x_69", u = "_type1_10i3x_109", x = "_type2_10i3x_110", h = "_type3_10i3x_111", p = "_type4_10i3x_112", g = "_type5_10i3x_116", m = "_type6_10i3x_117", k = "_type7_10i3x_118", v = "_type8_10i3x_119", t = {
  light: y,
  dark: a,
  isOverlay: d,
  slider: r,
  sliderInner: l,
  backgroundWrapper: s,
  background: c,
  sliderInput: o,
  type1: u,
  type2: x,
  type3: h,
  type4: p,
  type5: g,
  type6: m,
  type7: k,
  type8: v
};
function N(e) {
  return /* @__PURE__ */ i(
    "div",
    {
      className: `
        ${t.slider}
        ${e.type ? t["type" + e.type] : t.type1}
        ${e.theme === "dark" ? t.dark : t.light}
        ${e.isOverlay ? t.isOverlay : ""}
      `,
      style: e.width && (e.type === 5 || e.type === 6 || e.type === 7 || e.type === 8) ? { height: e.width } : { width: e.width },
      children: /* @__PURE__ */ _(
        "div",
        {
          className: `
          ${t.sliderInner}
        `,
          style: e.width && (e.type === 5 || e.type === 6 || e.type === 7 || e.type === 8) && { width: e.width },
          children: [
            /* @__PURE__ */ i("div", { className: t.backgroundWrapper, children: /* @__PURE__ */ i("div", { className: t.background }) }),
            /* @__PURE__ */ i(n, { icon: "minus-square-outline" }),
            /* @__PURE__ */ i(
              "input",
              {
                type: "range",
                min: "1",
                max: "100",
                value: e.zoom,
                className: t.sliderInput,
                onChange: e.onChangeZoom
              }
            ),
            /* @__PURE__ */ i(n, { icon: "plus-square-outline" })
          ]
        }
      )
    }
  );
}
export {
  N as default
};
