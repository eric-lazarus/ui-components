import { jsxs as i, jsx as r } from "react/jsx-runtime";
import "react";
import a from "./Input.js";
import '../assets/BirthdayForm.css';const h = "_light_19vqb_1", c = "_dark_19vqb_5", u = "_birthdayForm_19vqb_9", s = "_inputContainer_19vqb_23", e = {
  light: h,
  dark: c,
  birthdayForm: u,
  inputContainer: s
}, C = ({
  onChangeDay: o,
  onChangeMonth: l,
  onChangeYear: d,
  dayRef: m = null,
  monthRef: p = null,
  yearRef: y = null,
  form: t = null,
  theme: n = "light"
}) => /* @__PURE__ */ i(
  "div",
  {
    className: `
      ${e.birthdayForm}
      ${n === "dark" ? e.dark : e.light}
    `,
    children: [
      /* @__PURE__ */ r("p", { children: "Date of Birth (mm/dd/yyyy)" }),
      /* @__PURE__ */ i(
        "div",
        {
          className: `
        ${e.inputContainer}
      `,
          children: [
            /* @__PURE__ */ r(
              a,
              {
                onChange: l,
                inputType: "number",
                min: 1,
                max: 12,
                name: "month",
                placeholder: "mm",
                reference: p,
                form: t,
                theme: n
              }
            ),
            /* @__PURE__ */ r(
              a,
              {
                onChange: o,
                inputType: "number",
                min: 1,
                max: 12,
                name: "day",
                placeholder: "dd",
                reference: m,
                form: t,
                theme: n
              }
            ),
            /* @__PURE__ */ r(
              a,
              {
                onChange: d,
                inputType: "number",
                min: 1900,
                name: "year",
                placeholder: "yyyy",
                reference: y,
                form: t,
                theme: n
              }
            )
          ]
        }
      )
    ]
  }
);
export {
  C as default
};
