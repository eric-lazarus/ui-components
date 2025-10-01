import { jsxs as u, jsx as e, Fragment as i } from "react/jsx-runtime";
import { useRef as E, useState as w, useEffect as O } from "react";
import { g as C } from "../GlobalStyles.module-DpHB84ee.js";
import '../assets/Tab.css';const L = "_tab_10cgs_1", R = "_light_10cgs_38", S = "_dark_10cgs_46", j = "_active_10cgs_66", x = "_tabContainer_10cgs_94", B = "_tabContent_10cgs_106", N = "_tabBar_10cgs_110", A = "_icon_10cgs_122", M = "_tabMultiSelect_10cgs_136", D = "_iconEdge_10cgs_144", F = "_iconLeft_10cgs_149", T = "_iconRight_10cgs_154", W = "_animated_10cgs_179", q = "_fadeIn_10cgs_1", t = {
  tab: L,
  light: R,
  dark: S,
  active: j,
  "tab-1": "_tab-1_10cgs_66",
  "tab-primary": "_tab-primary_10cgs_67",
  "tab-2": "_tab-2_10cgs_72",
  "tab-secondary": "_tab-secondary_10cgs_73",
  tabContainer: x,
  tabContent: B,
  tabBar: N,
  icon: A,
  tabMultiSelect: M,
  iconEdge: D,
  iconLeft: F,
  iconRight: T,
  animated: W,
  fadeIn: q
}, z = ({
  style: d = {},
  text: g,
  width: _ = "100%",
  onClick: f,
  type: o = 1,
  iconPosition: c = "left",
  iconJustify: l = "center",
  icon: r = null,
  iconImage: a = null,
  tabType: h = "tab",
  tabRef: n = null,
  theme: p = "light",
  disabled: $ = !1,
  href: b
}) => h === "link" ? /* @__PURE__ */ u(
  "a",
  {
    ref: n,
    target: "_blank",
    className: `
            ${t.tab} ${t["tab-" + o]}
            ${c === "left" ? t.iconLeft : ""}
            ${c === "right" ? t.iconRight : ""}
            ${l === "edge" && _ !== "auto" ? t.iconEdge : t.widthAuto}
          `,
    onClick: f,
    style: { ...d, width: d.width || _ },
    type: h,
    href: b,
    rel: "noreferrer",
    children: [
      r && c === "left" ? /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e("div", { className: t.icon, children: r }) }) : a && c === "left" ? /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e("img", { className: t.icon, src: a }) }) : "",
      /* @__PURE__ */ e("span", { children: g }),
      a && c === "right" ? /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e("img", { className: t.icon, src: a }) }) : r && c === "right" ? /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e("div", { className: t.icon, children: r }) }) : ""
    ]
  }
) : /* @__PURE__ */ u(
  "button",
  {
    ref: n,
    className: `
            ${t.tab} ${t["tab-" + o]}
            ${p === "light" ? t.light : t.dark}
            ${c === "left" ? t.iconLeft : ""}
            ${c === "right" ? t.iconRight : ""}
            ${l === "edge" && _ !== "auto" ? t.iconEdge : t.widthAuto}
          `,
    onClick: f,
    style: { ...d, width: d.width || _ },
    type: h,
    disabled: $,
    children: [
      r && c === "left" ? /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e("div", { className: t.icon, children: r }) }) : a && c === "left" ? /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e("img", { className: t.icon, src: a }) }) : "",
      /* @__PURE__ */ e("span", { children: g }),
      a && c === "right" ? /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e("img", { className: t.icon, src: a }) }) : r && c === "right" ? /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e("div", { className: t.icon, children: r }) }) : ""
    ]
  }
), U = ({
  style: d = {},
  type: g = 1,
  iconJustify: _ = "center",
  iconPosition: f = "left",
  theme: o = "light",
  className: c,
  tabContent: l,
  // key is name, render is content, isDisabled is to disable or not
  activeTab: r,
  canChangeTab: a = () => !0,
  // conditional for whether tab change is allowed
  onTabChange: h
  // updates state in hosting application everytime tab is changed
}) => {
  const n = Object.keys(l), p = n[0], $ = E(r), [b, y] = w(p), v = 100 / n.length;
  O(() => {
    m(r);
  }, [r]);
  const m = (s) => {
    a() && h(s) !== !1 && (Object.prototype.hasOwnProperty.call(l[s], "link") ? setTimeout(() => {
      window.open(l[s].link), h($.current);
    }, 500) : (y(s), $.current = s));
  };
  return /* @__PURE__ */ u(
    "div",
    {
      className: `${t[o]} ${t.tabContainer} ${c}`,
      style: d,
      children: [
        /* @__PURE__ */ u("div", { className: `${t.tabBar}`, children: [
          n.map((s, k) => /* @__PURE__ */ e(
            z,
            {
              text: l[s].title,
              theme: o,
              type: g,
              tabType: l[s].link ? "link" : "tab",
              onClick: () => {
                l[s].isDisabled || (Object.prototype.hasOwnProperty.call(
                  l[s],
                  "onClickEvent"
                ) && l[s].onClickEvent(), m(s));
              },
              disabled: l[s].isDisabled,
              style: { width: v + "%" }
            },
            s + k
          )),
          /* @__PURE__ */ e(
            "div",
            {
              className: `
            ${t.tab} ${t["tab-" + g]} ${t.active}
            ${f === "left" ? t.iconLeft : ""}
            ${f === "right" ? t.iconRight : ""}
            ${_ === "edge" ? t.iconEdge : ""}
          `,
              style: {
                display: n.indexOf(b) < 0 ? "none" : "",
                width: 100 / n.length + "%",
                left: n.indexOf(b) * v + "%"
              }
            }
          )
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            className: `${t.tabContent} ${t.animated} ${C.customScrollbar}`,
            children: l?.[b]?.render
          }
        )
      ]
    }
  );
};
export {
  U as default
};
