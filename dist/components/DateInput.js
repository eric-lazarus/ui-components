import { jsxs as t, jsx as n } from "react/jsx-runtime";
import "react";
import '../assets/DateInput.css';const i = "_inputContainer_1uxn0_1", d = "_input_1uxn0_1", u = "_inputLabel_1uxn0_44", a = {
  inputContainer: i,
  input: d,
  inputLabel: u
}, c = (e) => {
  const l = e.disabled && e.value ? e.value.split("-") : [null, null, null];
  return /* @__PURE__ */ t("label", { className: a.inputLabel, style: e.style || {}, children: [
    e.label,
    /* @__PURE__ */ t("div", { className: a.inputContainer, style: {}, children: [
      /* @__PURE__ */ n(
        "input",
        {
          className: a.input,
          name: "month",
          onChange: e.onChange,
          placeholder: e.disabled ? void 0 : "mm",
          type: "number",
          disabled: e.disabled,
          value: l[1]
        }
      ),
      /* @__PURE__ */ n("span", { children: "/" }),
      /* @__PURE__ */ n(
        "input",
        {
          className: a.input,
          name: "day",
          onChange: e.onChange,
          placeholder: e.disabled ? void 0 : "dd",
          type: "number",
          disabled: e.disabled,
          value: l[2]
        }
      ),
      /* @__PURE__ */ n("span", { children: "/" }),
      /* @__PURE__ */ n(
        "input",
        {
          className: a.input,
          name: "year",
          onChange: e.onChange,
          placeholder: e.disabled ? void 0 : "yyyy",
          type: "number",
          disabled: e.disabled,
          value: l[0]
        }
      )
    ] })
  ] });
};
export {
  c as default
};
