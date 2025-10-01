import { jsxs as l, Fragment as z, jsx as i } from "react/jsx-runtime";
import { useState as b, useEffect as C } from "react";
import I from "./Button.js";
import k from "./XBoxContainer.js";
import '../assets/Notification.css';const T = "_light_z9gpx_1", $ = "_dark_z9gpx_9", N = "_modal_z9gpx_17", D = "_notification_z9gpx_25", O = "_slideInRight_z9gpx_47", S = "_slideInRightCenter_z9gpx_52", w = "_btnDiv_z9gpx_68", j = "_notificationTop_z9gpx_77", y = "_backdrop_z9gpx_101", B = "_slideOutRightCenter_z9gpx_110", t = {
  light: T,
  dark: $,
  modal: N,
  notification: D,
  slideInRight: O,
  slideInRightCenter: S,
  btnDiv: w,
  notificationTop: j,
  backdrop: y,
  slideOutRightCenter: B
}, X = ({
  isVisible: n = !1,
  type: e = 1,
  style: m = {},
  meta: p = (/* @__PURE__ */ new Date()).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: !0
  }),
  showMeta: u = !1,
  theme: o = "light",
  onClick: c = () => {
  },
  showBackdrop: x = !1,
  className: R,
  icon: d,
  iconColor: g,
  iconImage: _,
  content: h,
  autoDismisses: f = !1,
  buttonRef: v
}) => {
  const [s, a] = b(!1);
  return C(() => {
    if (n && f) {
      a(!0);
      const r = setTimeout(() => {
        a(!1);
      }, 6e3);
      return () => {
        clearTimeout(r);
      };
    } else
      a(n);
  }, [n, f]), /* @__PURE__ */ l(z, { children: [
    /* @__PURE__ */ l(
      "div",
      {
        style: m || {},
        className: `
          ${t.notification}
          ${t[o]}
          ${e === 3 ? t.modal : ""}
          ${e === 3 && s ? t.slideInRightCenter : s ? t.slideInRight : ""}
          ${R}
        `,
        role: "diaglogue",
        "aria-live": "rude",
        "aria-label": h,
        children: [
          e !== 3 && /* @__PURE__ */ i(k, { theme: o, onClick: c }),
          /* @__PURE__ */ l("div", { className: t.notificationTop, children: [
            _ ? /* @__PURE__ */ i("img", { src: _, "aria-hidden": !0 }) : d ? /* @__PURE__ */ i("div", { style: g ? { color: g } : {}, children: d }) : "",
            u && /* @__PURE__ */ i("p", { className: t.meta, children: p })
          ] }),
          /* @__PURE__ */ i("div", { className: t.content, children: h }),
          e === 3 && /* @__PURE__ */ i(
            I,
            {
              text: "Dismiss",
              type: 1,
              onClick: (r) => {
                r.preventDefault(), c();
              },
              buttonRef: v,
              buttonType: "submit",
              theme: o
            }
          )
        ]
      }
    ),
    x && /* @__PURE__ */ i(
      "div",
      {
        className: `${t.backdrop} ${s ? "" : t.slideOutRightCenter}`
      }
    )
  ] });
};
export {
  X as default
};
