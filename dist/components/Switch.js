import { jsxs as a, jsx as i } from "react/jsx-runtime";
import "react";
import d from "./Icon.js";
import '../assets/Switch.css';const t = "_disabled_bgwky_16", l = "_light_bgwky_21", n = "_switchSlider_bgwky_25", h = "_input_bgwky_30", b = "_radio_bgwky_30", _ = "_checkbox_bgwky_34", k = "_dark_bgwky_78", s = "_reversed_bgwky_141", o = "_label_bgwky_141", c = {
  switch: "_switch_bgwky_2",
  disabled: t,
  light: l,
  switchSlider: n,
  input: h,
  radio: b,
  checkbox: _,
  dark: k,
  reversed: s,
  label: o
};
function y(e) {
  return /* @__PURE__ */ a(
    "label",
    {
      className: `
      ${c.switch}
      ${e.disabled === "true" ? c.disabled : ""}
      ${e.theme === "dark" ? c.dark : c.light}
      ${e.reversed ? c.reversed : ""}
    `,
      htmlFor: e.id || void 0,
      children: [
        e.disabled ? /* @__PURE__ */ i(
          "input",
          {
            className: c.input,
            id: e.id || void 0,
            type: e.type === "radio" ? "radio" : "checkbox",
            onChange: e.onChange,
            checked: e.checked,
            value: e.value,
            disabled: !0,
            name: e.name
          }
        ) : /* @__PURE__ */ i(
          "input",
          {
            className: c.input,
            id: e.id || void 0,
            type: e.type === "radio" ? "radio" : "checkbox",
            onChange: e.onChange,
            checked: e.checked,
            value: e.value,
            name: e.name
          }
        ),
        /* @__PURE__ */ i(
          "span",
          {
            className: e.type === "checkbox" ? c.checkbox : e.type === "radio" ? c.radio : c.switchSlider,
            children: e.type === "checkbox" && /* @__PURE__ */ i(d, { icon: "check" })
          }
        ),
        e.label && /* @__PURE__ */ i("span", { className: c.label, children: e.label })
      ]
    }
  );
}
export {
  y as default
};
