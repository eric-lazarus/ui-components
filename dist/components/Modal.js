import { jsxs as a, jsx as s } from "react/jsx-runtime";
import { useRef as ee, useState as te, useCallback as H, useEffect as oe } from "react";
import N from "./Button.js";
import O from "./XBoxContainer.js";
import { g as ne } from "../GlobalStyles.module-DpHB84ee.js";
import '../assets/Modal.css';function ie(o) {
  if (Array.isArray(o)) {
    for (var e = 0, t = Array(o.length); e < o.length; e++)
      t[e] = o[e];
    return t;
  } else
    return Array.from(o);
}
var T = !1;
if (typeof window < "u") {
  var D = {
    get passive() {
      T = !0;
    }
  };
  window.addEventListener("testPassive", null, D), window.removeEventListener("testPassive", null, D);
}
var w = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1), u = [], q = !1, R = -1, m = void 0, c = void 0, g = void 0, A = function(e) {
  return u.some(function(t) {
    return !!(t.options.allowTouchMove && t.options.allowTouchMove(e));
  });
}, S = function(e) {
  var t = e || window.event;
  return A(t.target) || t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}, re = function(e) {
  if (g === void 0) {
    var t = !1, r = window.innerWidth - document.documentElement.clientWidth;
    if (t && r > 0) {
      var i = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
      g = document.body.style.paddingRight, document.body.style.paddingRight = i + r + "px";
    }
  }
  m === void 0 && (m = document.body.style.overflow, document.body.style.overflow = "hidden");
}, le = function() {
  g !== void 0 && (document.body.style.paddingRight = g, g = void 0), m !== void 0 && (document.body.style.overflow = m, m = void 0);
}, se = function() {
  return window.requestAnimationFrame(function() {
    if (c === void 0) {
      c = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left
      };
      var e = window, t = e.scrollY, r = e.scrollX, i = e.innerHeight;
      document.body.style.position = "fixed", document.body.style.top = -t, document.body.style.left = -r, setTimeout(function() {
        return window.requestAnimationFrame(function() {
          var d = i - window.innerHeight;
          d && t >= i && (document.body.style.top = -(t + d));
        });
      }, 300);
    }
  });
}, de = function() {
  if (c !== void 0) {
    var e = -parseInt(document.body.style.top, 10), t = -parseInt(document.body.style.left, 10);
    document.body.style.position = c.position, document.body.style.top = c.top, document.body.style.left = c.left, window.scrollTo(t, e), c = void 0;
  }
}, ce = function(e) {
  return e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1;
}, ue = function(e, t) {
  var r = e.targetTouches[0].clientY - R;
  return A(e.target) ? !1 : t && t.scrollTop === 0 && r > 0 || ce(t) && r < 0 ? S(e) : (e.stopPropagation(), !0);
}, ae = function(e, t) {
  if (!e) {
    console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
    return;
  }
  if (!u.some(function(i) {
    return i.targetElement === e;
  })) {
    var r = {
      targetElement: e,
      options: {}
    };
    u = [].concat(ie(u), [r]), w ? se() : re(), w && (e.ontouchstart = function(i) {
      i.targetTouches.length === 1 && (R = i.targetTouches[0].clientY);
    }, e.ontouchmove = function(i) {
      i.targetTouches.length === 1 && ue(i, e);
    }, q || (document.addEventListener("touchmove", S, T ? { passive: !1 } : void 0), q = !0));
  }
}, fe = function(e) {
  if (!e) {
    console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
    return;
  }
  u = u.filter(function(t) {
    return t.targetElement !== e;
  }), w && (e.ontouchstart = null, e.ontouchmove = null, q && u.length === 0 && (document.removeEventListener("touchmove", S, T ? { passive: !1 } : void 0), q = !1)), w ? de() : le();
};
const ve = "_light_qh7uq_1", he = "_modal_qh7uq_1", pe = "_body_qh7uq_1", ye = "_notificationTop_qh7uq_9", me = "_btnDiv_qh7uq_14", ge = "_button_qh7uq_14", _e = "_dark_qh7uq_19", be = "_outer_qh7uq_46", we = "_backdrop_qh7uq_47", qe = "_wrapper_qh7uq_59", Se = "_noButtons_qh7uq_81", Be = "_noHeader_qh7uq_102", $e = "_showClose_qh7uq_102", xe = "_icon_qh7uq_130", Te = "_meta_qh7uq_141", ke = "_close_qh7uq_150", Ce = "_content_qh7uq_177", Ie = "_contentInner_qh7uq_198", Pe = "_slideOutRightCenter_qh7uq_210", n = {
  light: ve,
  modal: he,
  body: pe,
  notificationTop: ye,
  btnDiv: me,
  button: ge,
  dark: _e,
  outer: be,
  backdrop: we,
  wrapper: qe,
  noButtons: Se,
  noHeader: Be,
  showClose: $e,
  icon: xe,
  meta: Te,
  close: ke,
  content: Ce,
  contentInner: Ie,
  slideOutRightCenter: Pe
};
function Ae({
  meta: o = "",
  className: e = "",
  height: t = "calc(var(--spacing-64) * 2)",
  width: r = "calc(var(--spacing-64) * 3)",
  onConfirm: i = () => {
  },
  onCancel: d = () => {
  },
  showBackdrop: L = !0,
  showConfirm: B = !0,
  showCancel: $ = !1,
  showClose: x = !0,
  outsideClickDismisses: M = !1,
  theme: f = "light",
  confirmButtonType: F = 7,
  cancelButtonType: W = 10,
  style: j = {},
  bodyStyle: k = {},
  contentStyle: E = {},
  aboveNav: Y = !1,
  navPadding: z = !0,
  isDismissable: C = !0,
  confirmText: X = "Confirm",
  cancelText: V = "Cancel",
  isVisible: I = !1,
  showTime: v = !1,
  confirmDisabled: J = !1,
  content: K,
  children: Q,
  image: h,
  icon: _,
  closeId: U = null
}) {
  const Z = ee(), [p, P] = te(!1), b = H(() => {
    p ? ae(document.scrollingElement) : fe(document.scrollingElement);
  }, [p]), y = H(
    (l, G) => {
      C && P(!p), b(), l && l(G);
    },
    [b, C, p]
  );
  return oe(() => {
    P(I), b();
  }, [b, I]), /* @__PURE__ */ a(
    "div",
    {
      className: `${n.modal} ${n[f]} ${!p && n.slideOutRightCenter} ${!(h || _ || o !== "" || v) && n.noHeader}
        ${x && n.showClose}
        ${e}
        ${!$ && !B && n.noButtons}
      `,
      style: Object.assign(
        Y ? { zIndex: 20 } : {},
        z ? { marginLeft: "var(--spacing-12)" } : {},
        j
      ),
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            style: { maxWidth: r, maxHeight: t },
            className: `${n.wrapper} ${e}`,
            children: [
              /* @__PURE__ */ a("div", { className: `${n.body} ${e}`, style: k, children: [
                (h || _ || o !== "" || v) && /* @__PURE__ */ a("div", { className: n.notificationTop, children: [
                  /* @__PURE__ */ s("div", { className: n.icon, children: h ? /* @__PURE__ */ s("img", { src: h }) : _ || "" }),
                  (o || v) && /* @__PURE__ */ s("p", { className: n.meta, children: v ? `${o} ${(/* @__PURE__ */ new Date()).toLocaleString([], {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: !0
                  })}` : o }),
                  x && /* @__PURE__ */ s(
                    O,
                    {
                      onClick: (l) => {
                        y(d, l);
                      },
                      theme: f,
                      size: "large",
                      align: "right",
                      className: n.close
                    }
                  )
                ] }),
                /* @__PURE__ */ a(
                  "div",
                  {
                    className: `${n.content} ${ne.customScrollbar}`,
                    style: { ...k, maxHeight: t, maxWidth: r },
                    ref: Z,
                    children: [
                      x && !(h || _ || o !== "" || v) && /* @__PURE__ */ s(
                        O,
                        {
                          onClick: (l) => {
                            y(d, l);
                          },
                          theme: f,
                          align: "right",
                          className: n.close,
                          iconId: U
                        }
                      ),
                      /* @__PURE__ */ s("div", { className: `${n.contentInner}`, style: E, children: K || Q })
                    ]
                  }
                )
              ] }),
              ($ || B) && /* @__PURE__ */ a("div", { className: n.btnDiv, children: [
                $ && /* @__PURE__ */ s("div", { className: n.button, children: /* @__PURE__ */ s(
                  N,
                  {
                    text: V,
                    type: W,
                    onClick: (l) => {
                      y(d, l);
                    },
                    style: { width: "100%" },
                    theme: f
                  }
                ) }),
                B && /* @__PURE__ */ s("div", { className: n.button, children: /* @__PURE__ */ s(
                  N,
                  {
                    text: X,
                    type: F,
                    onClick: (l) => {
                      y(i, l);
                    },
                    disabled: J,
                    theme: f
                  }
                ) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ s(
          "div",
          {
            className: `${L ? n.backdrop : n.outer}`,
            onClick: (l) => {
              M && y(d, l);
            }
          }
        )
      ]
    }
  );
}
export {
  Ae as default
};
