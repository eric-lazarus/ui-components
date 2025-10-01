import { jsxs as c, jsx as o } from "react/jsx-runtime";
import { useState as m, useRef as E, useEffect as I } from "react";
import g from "../Helpers.js";
import w from "./Icon.js";
import '../assets/Select.css';const R = "_selectContainer_1tiw0_1", b = "_select_1tiw0_1", S = "_optionsContainer_1tiw0_27", L = "_optionRow_1tiw0_38", T = "_optionCloseRow_1tiw0_50", j = "_optionText_1tiw0_54", B = "_selected_1tiw0_76", y = "_unselected_1tiw0_80", H = "_optionCloseIcon_1tiw0_84", M = "_options_1tiw0_27", Y = "_label_1tiw0_100", q = "_option_1tiw0_27", z = "_dark_1tiw0_119", A = "_active_1tiw0_125", F = "_expanded_1tiw0_137", G = "_collapsed_1tiw0_141", e = {
  selectContainer: R,
  select: b,
  optionsContainer: S,
  optionRow: L,
  optionCloseRow: T,
  optionText: j,
  selected: B,
  unselected: y,
  optionCloseIcon: H,
  options: M,
  label: Y,
  option: q,
  dark: z,
  active: A,
  expanded: F,
  collapsed: G
};
function Z({
  onCloseOption: C = () => {
  },
  canCloseOptions: a = !1,
  isMultiselect: s = !1,
  multiSelectDisplayValue: v = null,
  optionsDict: l = null,
  selectId: x = null,
  optionIdPrefix: d = null,
  ...n
}) {
  const [u, r] = m(!1), [J, N] = m(!1), $ = E(!1), [i, O] = m(`select-${parseInt(Math.random() * 2e3)}`);
  function f(t) {
    N(t), $.current = t;
  }
  function k(t) {
    $.current || r(!1);
  }
  function p() {
    setTimeout(() => {
      f(!1);
    }, 100);
  }
  function h() {
    f(!0);
  }
  return I(() => {
    document.removeEventListener("mouseup", k), document.addEventListener("mouseup", k), document.getElementById(i).removeEventListener("mousedown", h), document.getElementById(i).removeEventListener("mouseup", p), document.getElementById(i).addEventListener("mousedown", h), document.getElementById(i).addEventListener("mouseup", p);
  }, [u]), /* @__PURE__ */ c(
    "div",
    {
      className: e.selectContainer,
      id: i,
      children: [
        /* @__PURE__ */ o("p", { className: e.label, children: n.label }),
        /* @__PURE__ */ c(
          "div",
          {
            className: `${e.select} ${n.theme === "dark" ? e.dark : e.light} ${u ? e.active : ""}`,
            onClick: () => r(!u),
            id: x,
            children: [
              /* @__PURE__ */ o(
                "span",
                {
                  className: `${n.value && n.isSelectedYellow ? e.selected : ""}`,
                  children: s ? v ? `${v}` : `${n?.value?.length || 0} Selected` : (l ? g.truncateString(l?.[n.value], n.textMaxLength) : g.truncateString(n.value, n.textMaxLength)) || n.placeholder || "Select"
                }
              ),
              /* @__PURE__ */ o("span", { children: /* @__PURE__ */ o(
                w,
                {
                  className: e.icon,
                  icon: "arrow-down-outline",
                  width: "16px",
                  animation: null
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ o("div", { id: "options-container", className: `${e.optionsContainer} ${u ? e.expanded : e.collapsed}`, children: /* @__PURE__ */ o("div", { className: e.options, children: l && Object.keys(l) ? Object.keys(l).map((t) => /* @__PURE__ */ c(
          "div",
          {
            className: `${e.option} ${e.optionRow} ${a && e.optionCloseRow}`,
            onClick: () => {
              n.onClickOption(t), s || r(!1);
            },
            id: `${d ? d + "-" : ""}${t}`,
            children: [
              /* @__PURE__ */ c(
                "div",
                {
                  className: `${e.optionText}`,
                  children: [
                    s && /* @__PURE__ */ o("span", { className: `${n.value.includes(t) ? e.selected : e.unselected}` }),
                    l[t]
                  ]
                }
              ),
              a && /* @__PURE__ */ o(
                w,
                {
                  icon: "close-outline",
                  className: `${e.optionCloseIcon}`,
                  onClick: (_) => {
                    _.stopPropagation(), C(t);
                  }
                }
              )
            ]
          },
          t
        )) : n.options.map((t) => /* @__PURE__ */ c(
          "div",
          {
            className: `${e.option} ${e.optionRow} ${a && e.optionCloseRow}`,
            onClick: () => {
              n.onClickOption(t), s || r(!1);
            },
            id: `${d ? d + "-" : ""}${t}`,
            children: [
              /* @__PURE__ */ c(
                "div",
                {
                  className: `${e.optionText}`,
                  children: [
                    s && /* @__PURE__ */ o("span", { className: `${n.value.includes(t) ? e.selected : e.unselected}` }),
                    t
                  ]
                }
              ),
              a && /* @__PURE__ */ o(
                w,
                {
                  icon: "close-outline",
                  className: `${e.optionCloseIcon}`,
                  onClick: (_) => {
                    _.stopPropagation(), C(t);
                  }
                }
              )
            ]
          },
          t
        )) }) })
      ]
    }
  );
}
export {
  Z as default
};
