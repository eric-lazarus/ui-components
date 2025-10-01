import { jsxs as W, jsx as t } from "react/jsx-runtime";
import { useState as H, useEffect as u } from "react";
import { i as s } from "../Input.module-iWTIrBDq.js";
import K from "./Icon.js";
const ss = ({
  inputKey: h,
  autocomplete: N = void 0,
  autoFocus: i = !1,
  className: I = "",
  inputClassName: f = "",
  disabled: x = !1,
  form: k = null,
  info: X = null,
  label: Y = null,
  max: b = null,
  min: B = 0,
  minHeight: E = 36,
  maxHeight: Z = 144,
  maxlength: J = 524288,
  // browser default
  isAutoResizing: j = !1,
  isHeightControlled: _ = !1,
  options: w = [],
  placeholder: a = null,
  reference: m,
  style: L = {},
  theme: S = "light",
  type: d = 1,
  inputType: c = "text",
  value: $ = "",
  // controlled by default, pass null and it will be uncontrolled
  width: A = "100%",
  children: C,
  iconLeft: O,
  iconLeftImage: P,
  iconRight: M,
  iconRightImage: V,
  required: v,
  id: o,
  name: r,
  onChange: e = () => {
  },
  onSubmit: F = () => {
  },
  onKeyDown: G = () => {
  }
}) => {
  const [g, z] = H(!1), [Q, D] = H("");
  u(() => {
    const l = Math.round(Math.random() * 1e9);
    D(`input-textarea-${l}`);
  }, []);
  function U() {
    const l = document.getElementById(o || r || Q);
    l && (l.style.height = E + "px", l.style.height = (l.scrollHeight > Z ? Z : l.scrollHeight) + "px", l.scrollTop = l.scrollHeight);
  }
  function q() {
    z(!0), j && U();
  }
  return /* @__PURE__ */ W(
    "label",
    {
      className: `
        ${s.input}
        ${S === "dark" ? s.dark : s.light}
        ${x ? s.disabled : ""}
        ${g ? s.focus : ""}
        ${O || P ? s.iconLeft : ""}
        ${M || V ? s.iconRight : ""}
        ${c === "select" || d === 3 ? s.type3 : c === "textarea" || d === 2 ? s.type2 : c === "submit" && F ? s.type1 + " " + s.submit : s.type1}
        ${I}
      `,
      style: {
        width: A,
        ...L
      },
      htmlFor: r,
      children: [
        Y && /* @__PURE__ */ t("span", { className: s.label, children: Y }),
        /* @__PURE__ */ W(
          "div",
          {
            className: `${s.inputBox}`,
            onFocus: () => q(),
            onBlur: () => z(!1),
            children: [
              P ? /* @__PURE__ */ t(
                "img",
                {
                  className: `${s.icon} ${s.left}`,
                  src: P
                }
              ) : O ? /* @__PURE__ */ t("div", { className: `${s.icon} ${s.left}`, children: O }) : /* @__PURE__ */ t("span", {}),
              d === 3 || c === "select" ? /* @__PURE__ */ W(
                "select",
                {
                  ref: m,
                  id: o || r,
                  name: r,
                  onChange: e,
                  disabled: x,
                  value: $,
                  placeholder: a,
                  autoComplete: N,
                  min: B,
                  max: b,
                  form: k,
                  autoFocus: i,
                  required: v,
                  className: f,
                  children: [
                    a && /* @__PURE__ */ t("option", { disabled: !0, value: "", children: a }),
                    w.length ? w.map((l, n) => /* @__PURE__ */ t("option", { children: l }, l + n)) : C
                  ]
                },
                h
              ) : (d === 2 || c === "textarea") && $ ? /* @__PURE__ */ t(
                "textarea",
                {
                  ref: m,
                  id: o || r || Q,
                  name: r,
                  onChange: (l) => {
                    e(l), j && U();
                  },
                  onKeyDown: G,
                  disabled: x,
                  value: $,
                  placeholder: a,
                  autoComplete: N,
                  min: B,
                  max: b,
                  maxLength: J,
                  form: k,
                  autoFocus: i,
                  required: v,
                  defaultValue: e ? void 0 : $,
                  className: f !== "" ? f : s.defaultTextArea,
                  style: j || _ ? { minHeight: E + "px", height: E + "px", resize: "none" } : {}
                },
                h
              ) : (d === 2 || c === "textarea") && !$ ? /* @__PURE__ */ t(
                "textarea",
                {
                  ref: m,
                  id: o || r || Q,
                  name: r,
                  onChange: (l) => {
                    e(l), j && U();
                  },
                  onKeyDown: G,
                  disabled: x,
                  placeholder: a,
                  autoComplete: N,
                  min: B,
                  max: b,
                  form: k,
                  autoFocus: i,
                  required: v,
                  defaultValue: e ? void 0 : $,
                  className: f !== "" ? f : s.defaultTextArea,
                  style: j || _ ? { minHeight: E + "px", height: E + "px", resize: "none" } : {}
                },
                h
              ) : typeof $ == "string" || $ instanceof String ? /* @__PURE__ */ t(
                "input",
                {
                  ref: m,
                  id: o || r,
                  type: c === "submit" ? "text" : c,
                  name: r,
                  onChange: e,
                  onKeyDown: G,
                  disabled: x,
                  value: $,
                  style: L,
                  placeholder: a,
                  autoComplete: N,
                  min: B,
                  max: b,
                  maxLength: J,
                  form: k,
                  autoFocus: i,
                  required: v,
                  className: f
                },
                h
              ) : /* @__PURE__ */ t(
                "input",
                {
                  ref: m,
                  id: o || r,
                  type: c === "submit" ? "text" : c,
                  name: r,
                  onChange: e,
                  onKeyDown: G,
                  disabled: x,
                  style: L,
                  placeholder: a,
                  autoComplete: N,
                  min: B,
                  max: b,
                  maxLength: J,
                  form: k,
                  autoFocus: i,
                  required: v,
                  className: f
                },
                h
              ),
              V && c === "submit" ? /* @__PURE__ */ t("button", { type: "submit", children: /* @__PURE__ */ t(
                "img",
                {
                  className: `${s.icon} ${s.right}`,
                  src: V,
                  onClick: F
                }
              ) }) : M && c === "submit" ? /* @__PURE__ */ t(
                "button",
                {
                  type: "submit",
                  className: `${s.icon} ${s.right}`,
                  onClick: F,
                  children: M
                }
              ) : V && d !== 3 && c !== "select" ? /* @__PURE__ */ t(
                "img",
                {
                  className: `${s.icon} ${s.right}`,
                  src: V,
                  onClick: F
                }
              ) : M && d !== 3 && c !== "select" ? /* @__PURE__ */ t("div", { className: `${s.icon} ${s.right}`, onClick: F, children: M }) : d === 3 || c === "select" ? /* @__PURE__ */ t("div", { className: `${s.icon} ${s.right}`, children: /* @__PURE__ */ t(K, { icon: "arrow-down-outline" }) }) : /* @__PURE__ */ t("span", {})
            ]
          }
        ),
        X ? /* @__PURE__ */ t("div", { className: `${s.info}`, children: X }) : ""
      ]
    }
  );
};
export {
  ss as default
};
