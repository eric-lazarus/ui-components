import { jsxs as i, jsx as t, Fragment as E } from "react/jsx-runtime";
import { useState as w, useEffect as I, Fragment as S } from "react";
import { s as a, L as A, a as m } from "../chunk-NISHYRIK-DVlWvwG1.js";
import n from "./Icon.js";
import F from "./Avatar.js";
import g from "./Button.js";
function Q({
  links: f = [],
  bottomLinks: b = [],
  hiddenLinks: T = [],
  disabledLinks: _ = [],
  currentEndpoint: z = "",
  active: O,
  isCollapsed: p,
  theme: h,
  isVisible: L,
  style: N,
  logo: D,
  userImage: x,
  userName: $,
  storePayload: j,
  orgId: R,
  isTracking: V,
  noFollow: G,
  onRikAIClick: K,
  onSignOutClick: B,
  onCollapse: s,
  onExpand: r,
  onClick: l,
  // expects (events, nameOfLink)
  ...P
}) {
  const [c, d] = w(p || !1), [u, C] = w(!1), [v, y] = w(!1);
  return I(() => {
    window.addEventListener("resize", (e) => {
      window.innerWidth > 1280 && !p ? (d(!1), r && r()) : (d(!0), s && s());
    }), !v && window.dispatchEvent(new Event("resize")), !v && y(!0);
  }, [p, v, s, r]), /* @__PURE__ */ i(
    "nav",
    {
      className: `
      ${a.Nav}
      ${L ? a.isVisible : ""}
      ${c ? a.isCollapsed : ""}
      ${h === "dark" ? a.dark : a.light}
    `,
      style: N || {},
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: `${a.logoDiv} logoSection`,
            children: [
              /* @__PURE__ */ t(
                "a",
                {
                  className: a.logoA,
                  onClick: (e) => {
                    d(!c), s && s();
                  },
                  children: D || /* @__PURE__ */ t(A, { viewBox: "0 0 1150 1012" })
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  className: a.collapseButton,
                  onClick: (e) => {
                    d(!c), s && s();
                  },
                  children: /* @__PURE__ */ t(n, { icon: "chevron-left-outline" })
                }
              )
            ]
          },
          "logo-section"
        ),
        /* @__PURE__ */ t(
          "div",
          {
            className: `${a.upper} ${a.borderTop}`,
            children: f.map((e) => e.highlight ? /* @__PURE__ */ i(
              S,
              {
                children: [
                  /* @__PURE__ */ t(
                    m,
                    {
                      to: e.path,
                      className: `${a.rikAIButton} ${window.location.pathname === e.path || window.location.pathname.includes(e.path + "/") ? a.active : ""} ${e.isDisabled ? a.disabled : ""}`,
                      onClick: (o) => {
                        e.isDisabled && o.preventDefault(), l(o, e.path);
                      },
                      target: e.outsideLink ? "_blank" : "",
                      rel: e.outsideLink ? "noopener noreferrer" : "",
                      title: e.name,
                      id: e.name.toLowerCase(),
                      children: /* @__PURE__ */ t(
                        g,
                        {
                          text: e.name.toUpperCase(),
                          type: window.location.pathname === e.path || window.location.pathname.includes(e.path + "/") ? 4 : 9,
                          theme: h || "light"
                        }
                      )
                    },
                    `${e.name}-big`
                  ),
                  /* @__PURE__ */ t(
                    m,
                    {
                      to: e.path,
                      className: `${a.RKIButton} ${window.location.pathname === e.path || window.location.pathname.includes(e.path + "/") ? a.active : ""} ${e.isDisabled ? a.disabled : ""}`,
                      onClick: (o) => {
                        e.isDisabled && o.preventDefault(), l(o, e.path);
                      },
                      target: e.outsideLink ? "_blank" : "",
                      rel: e.outsideLink ? "noopener noreferrer" : "",
                      title: e.name,
                      id: e.name.toLowerCase(),
                      children: /* @__PURE__ */ t(
                        g,
                        {
                          text: /* @__PURE__ */ t(E, { children: window.location.pathname === e.path || window.location.pathname.includes(e.path + "/") ? /* @__PURE__ */ t(n, { icon: `${e.icon}` }) : /* @__PURE__ */ t(n, { icon: `${e.icon}-outline` }) }),
                          type: window.location.pathname === e.path || window.location.pathname.includes(e.path + "/") ? 4 : 9,
                          theme: h || "light",
                          width: "var(--spacing-08)"
                        }
                      )
                    },
                    e.name
                  )
                ]
              },
              `highlight-fragment-${e.name}`
            ) : /* @__PURE__ */ i(
              m,
              {
                className: `${a.navLink} ${window.location.pathname === e.path || window.location.pathname.includes(e.path + "/") ? a.active : ""} ${e.isDisabled ? a.disabled : ""}
              `,
                onClick: (o) => {
                  e.isDisabled && o.preventDefault(), l(o, e.path);
                },
                target: e.outsideLink ? "_blank" : "",
                rel: e.outsideLink ? "noopener noreferrer" : "",
                to: e.path,
                title: e.name,
                id: e.name.toLowerCase(),
                children: [
                  /* @__PURE__ */ t("span", { children: e.name }),
                  /* @__PURE__ */ i("div", { className: a.icons, children: [
                    /* @__PURE__ */ t(n, { icon: `${e.icon}-outline` }),
                    /* @__PURE__ */ t(n, { icon: `${e.icon}` })
                  ] })
                ]
              },
              e.name
            ))
          },
          "top-links-section"
        ),
        /* @__PURE__ */ i(
          "div",
          {
            className: `${a.borderTop} ${a.avatarDiv}  ${u ? a.avatarExpanded : ""}`,
            children: [
              b.map((e) => /* @__PURE__ */ i(
                m,
                {
                  className: `${a.navLink} ${window.location.pathname === e.path || window.location.pathname.includes(e.path + "/") ? a.active : ""} ${e.isDisabled ? a.disabled : ""}
              `,
                  onClick: (o) => {
                    e.isDisabled && o.preventDefault(), l(o, e.path);
                  },
                  target: e.outsideLink ? "_blank" : "",
                  rel: e.outsideLink ? "noopener noreferrer" : "",
                  to: e.path,
                  title: e.name,
                  id: e.name.toLowerCase(),
                  children: [
                    /* @__PURE__ */ t("span", { children: e.name }),
                    /* @__PURE__ */ i("div", { className: a.icons, children: [
                      /* @__PURE__ */ t(n, { icon: `${e.icon}-outline` }),
                      /* @__PURE__ */ t(n, { icon: `${e.icon}` })
                    ] })
                  ]
                },
                e.name
              )),
              /* @__PURE__ */ i(
                "a",
                {
                  className: `${a.navLink}`,
                  title: "Sign Out",
                  onClick: B,
                  id: "signOut",
                  children: [
                    /* @__PURE__ */ t("span", { children: "Sign Out" }),
                    /* @__PURE__ */ i("div", { className: a.icons, children: [
                      /* @__PURE__ */ t(n, { icon: "log-out-outline" }),
                      /* @__PURE__ */ t(n, { icon: "log-out" })
                    ] })
                  ]
                }
              )
            ]
          },
          "bottom-links-section"
        ),
        /* @__PURE__ */ t(
          "div",
          {
            className: `${a.lower} ${a.borderTop}`,
            children: /* @__PURE__ */ i(
              "a",
              {
                className: `${a.navLink} ${a.avatarLink} avatarSection`,
                onClick: (e) => {
                  C(!u);
                },
                id: "navigation-user-information",
                children: [
                  /* @__PURE__ */ t(
                    F,
                    {
                      theme: h,
                      name: $,
                      image: x,
                      size: c ? "medium" : "small",
                      showGradient: !0
                    }
                  ),
                  /* @__PURE__ */ t("span", { children: $ }),
                  /* @__PURE__ */ t(
                    "div",
                    {
                      className: `${a.icons} ${u ? a.avatarExpanded : ""}`,
                      children: /* @__PURE__ */ t(n, { icon: "chevron-up-outline" })
                    }
                  )
                ]
              }
            )
          },
          "avatar-section"
        ),
        /* @__PURE__ */ t(
          "button",
          {
            className: `${a.expandButton} `,
            onClick: (e) => {
              r && r(), d(!c);
            },
            children: /* @__PURE__ */ t(n, { icon: "chevron-right-outline" })
          },
          "collapse-section"
        )
      ]
    }
  );
}
export {
  Q as default
};
