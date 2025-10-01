import { jsxs as n, jsx as l } from "react/jsx-runtime";
import "react";
import '../assets/FloatingButton.css';const a = "_light_1hkq0_1", i = "_dark_1hkq0_9", o = "_labelContainer_1hkq0_24", c = "_floatingButton_1hkq0_32", u = "_buttonText_1hkq0_50", e = {
  light: a,
  dark: i,
  labelContainer: o,
  floatingButton: c,
  buttonText: u
};
function d(t) {
  return /* @__PURE__ */ n(
    "button",
    {
      className: `
        ${e.floatingButton}
        ${t.text === "cancel" ? e.cancelButton : ""}
        ${t.theme === "dark" ? e.dark : e.light}
      `,
      onClick: t.onClick,
      style: Object.assign(
        t.fixed ? { position: "fixed" } : {},
        t.style || {}
      ),
      type: "submit",
      form: t.form || void 0,
      children: [
        t.image ? /* @__PURE__ */ l("img", { src: t.image, alt: t.text || "" }) : t.icon ? t.icon : /* @__PURE__ */ l("p", { className: e.buttonText, style: t.textStyle || {}, children: t.text }),
        t.label && /* @__PURE__ */ l("div", { className: e.labelContainer, children: /* @__PURE__ */ l("p", { style: t.tooltipStyle || {}, className: e.label, children: t.label }) })
      ]
    }
  );
}
export {
  d as default
};
