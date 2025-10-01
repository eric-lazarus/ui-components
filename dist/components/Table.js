import { jsxs as c, jsx as t } from "react/jsx-runtime";
import { useState as d, useEffect as $ } from "react";
import H from "./Card.js";
import { s as e } from "../Table.module-ECkhU42c.js";
import { i as V } from "../Input.module-iWTIrBDq.js";
import { g as l } from "../GlobalStyles.module-DpHB84ee.js";
import I from "./Pill.js";
function L(r, a) {
  return r.filter((s) => a ? s.props.content.flat("Infinity").some((i) => typeof i == "string" ? i.includes(a) : !1) : s);
}
function J({
  entries: r = [],
  theme: a = "light",
  total: h = r.length,
  showingCount: s = "1 to " + r.length,
  showTotal: i = !1,
  showCount: p = !0,
  useFilter: g = !1,
  columnTitles: u,
  title: x,
  className: b,
  minWidth: y,
  maxHeight: S,
  isLogs: N,
  scrollRef: v,
  style: C,
  tableId: E = null,
  cardId: w = null
}) {
  const [n, k] = d(r), [f, j] = d(""), [B, m] = d(s);
  return $(() => {
    k(L(r, f));
  }, [f, r]), $(() => {
    n.length === 0 ? m("0 to " + n.length) : m("1 to " + n.length);
  }, [n]), /* @__PURE__ */ c(
    H,
    {
      className: `
        ${e.table}
        ${a === "dark" ? e.dark : e.light}
        ${b}
      `,
      style: {
        ...C,
        maxHeight: `${S}`
      },
      theme: a,
      id: w,
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            className: `
          ${l.flex}
          ${l.justifySpaceBetween}
          ${l.alignCenter}
          ${e.title}
        `,
            children: [
              /* @__PURE__ */ t("span", { children: x }),
              g && /* @__PURE__ */ t("label", { children: /* @__PURE__ */ t(
                "label",
                {
                  className: `
                ${a === "dark" ? e.dark : e.light}
                ${V.inputBox}
                ${e.searchBox}
              `,
                  children: /* @__PURE__ */ t(
                    "input",
                    {
                      placeholder: "Search",
                      value: f,
                      onChange: (o) => j(o.target.value)
                    }
                  )
                }
              ) }),
              p && /* @__PURE__ */ t(
                I,
                {
                  theme: a || "light",
                  type: 2,
                  text: `${B} ${i ? "of " + h : ""}`
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ c(
          "table",
          {
            className: e.tableEl,
            style: {
              minWidth: `${y || 0}px`
            },
            id: E,
            children: [
              u && /* @__PURE__ */ t("thead", { className: e.tableHeader, children: /* @__PURE__ */ t("tr", { className: `${l.flex} ${l.flex1}`, children: u.map((o, F) => /* @__PURE__ */ t(
                "td",
                {
                  className: N ? `${l.flex} ${l.flex1} ${e.logsFlex}` : `${l.flex} ${l.flex1}`,
                  children: o
                },
                o + F
              )) }) }),
              /* @__PURE__ */ t(
                "tbody",
                {
                  className: `${e.tableContent} ${l.customScrollbar}`,
                  ref: v,
                  children: n
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
  J as default
};
