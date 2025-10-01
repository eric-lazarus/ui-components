import { jsxs as d, jsx as c } from "react/jsx-runtime";
import "react";
import u from "./Button.js";
import '../assets/MultiSelect.css';const h = "_light_19j1c_1", s = "_dark_19j1c_5", _ = "_MultiSelect_19j1c_9", o = "_buttonDiv_19j1c_25", l = {
  light: h,
  dark: s,
  MultiSelect: _,
  buttonDiv: o
};
function b(t) {
  const a = (e, i) => {
    e.preventDefault(), t.onChange(i);
  };
  return /* @__PURE__ */ d(
    "div",
    {
      className: `
      ${l.MultiSelect}
      ${t.theme === "dark" ? l.dark : l.light}
    `,
      style: t.style || {},
      children: [
        /* @__PURE__ */ c("p", { children: t.title }),
        /* @__PURE__ */ c("div", { className: l.buttonDiv, children: t.items.map((e, i) => /* @__PURE__ */ c(
          u,
          {
            type: t.selected === e || t.value === e ? t.theme === "dark" ? 1 : 2 : 6,
            text: e,
            onClick: (n) => {
              n.preventDefault(), t.disabled || a(n, e);
            },
            disabled: t.disabled,
            theme: t.theme
          },
          i
        )) })
      ]
    }
  );
}
export {
  b as default
};
