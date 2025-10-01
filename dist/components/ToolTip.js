import { jsxs as i, jsx as r } from "react/jsx-runtime";
import "react";
import n from "./Button.js";
import '../assets/ToolTip.css';const l = "_toolTip_19foz_1", c = "_toolTipBody_19foz_12", _ = "_toolTipText_19foz_23", x = "_toolTipShowing_19foz_31", d = "_toolTipHiding_19foz_36", T = "_toolTipArrow_19foz_41", f = "_pos1_19foz_45", m = "_pos2_19foz_46", h = "_pos3_19foz_50", w = "_pos4_19foz_51", S = "_pos5_19foz_55", z = "_pos6_19foz_56", u = "_pos0_19foz_60", y = "_pos7_19foz_61", t = {
  toolTip: l,
  toolTipBody: c,
  toolTipText: _,
  toolTipShowing: x,
  toolTipHiding: d,
  toolTipArrow: T,
  pos1: f,
  pos2: m,
  pos3: h,
  pos4: w,
  pos5: S,
  pos6: z,
  pos0: u,
  pos7: y
};
function k(s) {
  const o = {}, p = "var(--spacing-02half)";
  function a(e) {
    switch (e) {
      case 0:
        return o.top = p, o.boxShadow = "2px 2px var(--colors-semi-transparent-dark30)", t.pos0;
      case 1:
        return o.top = p, o.boxShadow = "2px 2px var(--colors-semi-transparent-dark30)", t.pos1;
      case 2:
        return o.right = p, o.boxShadow = "-2px 2px var(--colors-semi-transparent-dark30)", t.pos2;
      case 3:
        return o.right = p, o.boxShadow = "-2px 2px var(--colors-semi-transparent-dark30)", t.pos3;
      case 4:
        return o.bottom = p, o.boxShadow = "2px -2px var(--colors-semi-transparent-dark30)", t.pos4;
      case 5:
        return o.bottom = p, o.boxShadow = "2px -2px var(--colors-semi-transparent-dark30)", t.pos5;
      case 6:
        return o.left = p, o.boxShadow = "2px 2px var(--colors-semi-transparent-dark30)", t.pos6;
      case 7:
        return o.left = p, o.boxShadow = "2px 2px var(--colors-semi-transparent-dark30)", t.pos7;
    }
  }
  return /* @__PURE__ */ i(
    "div",
    {
      className: `
            ${t.toolTip}
            ${s.isVisible ? t.toolTipShowing : t.toolTipHiding}
            ${a(s.arrowPosition)}
          `,
      children: [
        /* @__PURE__ */ r("div", { className: `${t.toolTipArrow}` }),
        /* @__PURE__ */ i(
          "div",
          {
            className: t.toolTipBody,
            style: s.style ? { ...o, ...s.style } : o,
            children: [
              /* @__PURE__ */ r("p", { className: t.toolTipText, style: s.textStyle || {}, children: s.text }),
              /* @__PURE__ */ r(
                n,
                {
                  style: s.buttonStyle,
                  type: 6,
                  theme: "dark",
                  text: "OK",
                  onClick: s.onDismiss
                }
              )
            ]
          }
        )
      ]
    }
  );
}
export {
  k as default
};
