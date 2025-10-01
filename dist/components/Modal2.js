import { jsxs as o, jsx as t } from "react/jsx-runtime";
import "react";
import f from "./XBoxContainer.js";
import '../assets/Modal2.css';const b = "_container_1jnng_1", k = "_invisibleContainer_1jnng_8", w = "_visibleContainer_1jnng_12", N = "_modal_1jnng_16", $ = "_dark_1jnng_32", M = "_light_1jnng_40", x = "_modalMain_1jnng_48", y = "_modalHeader_1jnng_57", H = "_hasLine_1jnng_64", L = "_modalContentContainer_1jnng_69", B = "_rightIn_1jnng_77", F = "_leftIn_1jnng_77", X = "_upIn_1jnng_77", q = "_downIn_1jnng_77", z = "_rightOut_1jnng_81", A = "_leftOut_1jnng_81", E = "_upOut_1jnng_81", G = "_downOut_1jnng_81", J = "_backdrop_1jnng_102", K = "_close_1jnng_127", n = {
  container: b,
  invisibleContainer: k,
  visibleContainer: w,
  modal: N,
  dark: $,
  light: M,
  modalMain: x,
  modalHeader: y,
  hasLine: H,
  modalContentContainer: L,
  rightIn: B,
  leftIn: F,
  upIn: X,
  downIn: q,
  rightOut: z,
  leftOut: A,
  upOut: E,
  downOut: G,
  backdrop: J,
  close: K
};
function S({
  className: r = "",
  onDismiss: a = () => {
  },
  showBackdrop: c = !0,
  showClose: u = !0,
  outsideClickDismisses: g = !1,
  theme: e = "dark",
  title: i = "",
  style: m = {},
  contentContainerStyle: h = {},
  contentStyle: j = {},
  isDismissable: C = !0,
  isVisible: l = !1,
  // showTime = false,
  content: p,
  children: I,
  // image,
  // icon,
  footer: s,
  direction: _ = "down",
  hasLine: v = !0,
  closeId: O = null
}) {
  const d = {
    up: {
      in: n.upIn,
      out: n.upOut
    },
    down: {
      in: n.downIn,
      out: n.downOut
    },
    left: {
      in: n.leftIn,
      out: n.leftOut
    },
    right: {
      in: n.rightIn,
      out: n.rightOut
    }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: `${n.container}
         ${l ? n.visibleContainer : n.invisibleContainer}`,
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            className: `${n.modal}
           ${l ? d[_].in : d[_].out}
           ${r}`,
            style: m || {},
            children: [
              /* @__PURE__ */ o(
                "div",
                {
                  className: `${n.modalMain}
             ${n[e]}`,
                  children: [
                    /* @__PURE__ */ o("div", { className: `${n.modalHeader} ${v ? n.hasLine : ""}`, children: [
                      i && /* @__PURE__ */ t("h2", { children: i }),
                      C && u && /* @__PURE__ */ t(
                        f,
                        {
                          theme: e,
                          onClick: a,
                          className: n.close,
                          iconId: O
                        }
                      )
                    ] }),
                    /* @__PURE__ */ t(
                      "div",
                      {
                        className: n.modalContentContainer,
                        style: h || {},
                        children: /* @__PURE__ */ t(
                          "div",
                          {
                            className: n.modalContent,
                            style: j || {},
                            children: p || I
                          }
                        )
                      }
                    )
                  ]
                }
              ),
              s && /* @__PURE__ */ t("div", { className: n.modalFooter, children: s })
            ]
          }
        ),
        c && /* @__PURE__ */ t(
          "div",
          {
            className: n.backdrop,
            onClick: g ? a : null
          }
        )
      ]
    }
  );
}
export {
  S as default
};
