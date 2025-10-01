import { jsxs as s, jsx as i, Fragment as K } from "react/jsx-runtime";
import { useState as b, useEffect as P } from "react";
import B from "./Button.js";
import { s as e, L as Q, a as d } from "../chunk-NISHYRIK-DVlWvwG1.js";
import u from "./Icon.js";
import R from "./Avatar.js";
function X({
  links: t = {},
  hiddenLinks: v = [],
  disabledLinks: c = [],
  currentEndpoint: r = "",
  active: G,
  isCollapsed: N,
  theme: $,
  isVisible: O,
  style: T,
  logo: y,
  userImage: I,
  userName: x,
  storePayload: S,
  orgId: z,
  isTracking: A,
  noFollow: o,
  onRikAIClick: p,
  onSignOutClick: D,
  onCollapse: m,
  onExpand: g,
  onClick: n
  // expects (events, nameOfLink)
}) {
  const [h, f] = b(N || !1), [q, j] = b(!1), [_, w] = b(!1);
  P(() => {
    window.addEventListener("resize", (a) => {
      window.innerWidth > 1280 && !N ? (f(!1), g && g()) : (f(!0), m && m());
    }), !_ && window.dispatchEvent(new Event("resize")), !_ && w(!0);
  }, [N, _, m, g]);
  function l(a) {
    A && S({ isTracking: !1 });
  }
  return /* @__PURE__ */ s(
    "nav",
    {
      className: `
      ${e.Nav}
      ${O ? e.isVisible : ""}
      ${h ? e.isCollapsed : ""}
      ${$ === "dark" ? e.dark : e.light}
    `,
      style: T || {},
      children: [
        /* @__PURE__ */ s("div", { className: e.logoDiv, children: [
          /* @__PURE__ */ i(
            "a",
            {
              className: e.logoA,
              onClick: (a) => {
                f(!h), m && m();
              },
              children: y || /* @__PURE__ */ i(Q, { viewBox: "0 0 1150 1012" })
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: e.collapseButton,
              onClick: (a) => {
                f(!h), m && m();
              },
              children: /* @__PURE__ */ i(u, { icon: "chevron-left-outline" })
            }
          )
        ] }),
        /* @__PURE__ */ s("div", { className: `${e.upper} ${e.borderTop}`, children: [
          /* @__PURE__ */ s(
            d,
            {
              className: `${e.navLink} ${r === t.dashboard || r === "/" ? e.active : ""} ${c.includes("dashboard") ? e.disabled : ""}`,
              to: t.dashboard ? t.dashboard : "/",
              onClick: (a) => {
                l(), o && a.preventDefault(), n(a, "dashboard");
              },
              target: t.dashboard && t.dashboard[0] !== "/" ? "_blank" : "",
              title: "Dashboard",
              children: [
                /* @__PURE__ */ i("span", { children: "Dashboard" }),
                /* @__PURE__ */ s("div", { className: e.icons, children: [
                  /* @__PURE__ */ i(u, { icon: "flash-outline" }),
                  /* @__PURE__ */ i(u, { icon: "flash" })
                ] })
              ]
            }
          ),
          !v.includes("api") && /* @__PURE__ */ s(
            d,
            {
              className: `${e.navLink} ${r === t.api || r === "/api" ? e.active : ""} ${c.includes("api") ? e.disabled : ""}
            `,
              to: c.includes("api") ? "#" : t.api ? t.api : "/api",
              onClick: (a) => {
                l(), o && a.preventDefault(), c.includes("api") && a.preventDefault(), n(a, "api");
              },
              target: t.api && t.api[0] !== "/" ? "_blank" : "",
              title: "API",
              id: "api",
              children: [
                /* @__PURE__ */ i("span", { children: "API" }),
                /* @__PURE__ */ s("div", { className: e.icons, children: [
                  /* @__PURE__ */ i(u, { icon: "cube-outline" }),
                  /* @__PURE__ */ i(u, { icon: "cube" })
                ] })
              ]
            }
          ),
          !v.includes("training") && /* @__PURE__ */ s(
            d,
            {
              className: `${e.navLink} ${r === t.training || r === "/training" ? e.active : ""} ${c.includes("training") ? e.disabled : ""}`,
              to: c.includes("training") ? "#" : t.training ? t.training : "/training",
              onClick: (a) => {
                l(), o && a.preventDefault(), c.includes("training") && a.preventDefault(), n(a, "training");
              },
              target: t.training && t.training[0] !== "/" ? "_blank" : "",
              title: "Training",
              id: "training",
              children: [
                /* @__PURE__ */ i("span", { children: "Training" }),
                /* @__PURE__ */ s("div", { className: e.icons, children: [
                  /* @__PURE__ */ i(u, { icon: "book-open-outline" }),
                  /* @__PURE__ */ i(u, { icon: "book-open" })
                ] })
              ]
            }
          ),
          !v.includes("quickstart") && /* @__PURE__ */ s(
            d,
            {
              className: `${e.navLink} ${r === t.quickstart || r === "/quickstart" ? e.active : ""} ${c.includes("quickstart") ? e.disabled : ""}`,
              to: c.includes("quickstart") ? "#" : t.quickstart ? t.quickstart : "/quickstart",
              onClick: (a) => {
                l(), o && a.preventDefault(), c.includes("quickstart") && a.preventDefault(), n(a, "quickstart");
              },
              target: t.quickstart && t.quickstart[0] !== "/" ? "_blank" : "",
              title: "Quickstart",
              id: "quickstart",
              children: [
                /* @__PURE__ */ i("span", { children: "Quickstart" }),
                /* @__PURE__ */ s("div", { className: e.icons, children: [
                  /* @__PURE__ */ i(u, { icon: "arrowhead-right-outline" }),
                  /* @__PURE__ */ i(u, { icon: "arrowhead-right" })
                ] })
              ]
            }
          ),
          !v.includes("demo") && /* @__PURE__ */ s(
            d,
            {
              className: `${e.navLink} ${r === t.demo || r === "/demo" ? e.active : ""} ${c.includes("demo") ? e.disabled : ""}`,
              to: c.includes("demo") ? "#" : t.demo ? t.demo : "/demo",
              onClick: (a) => {
                l(), o && a.preventDefault(), c.includes("demo") && a.preventDefault(), n(a, "demo");
              },
              target: t.demo && t.demo[0] !== "/" ? "_blank" : "",
              title: "Demo",
              id: "demo",
              children: [
                /* @__PURE__ */ i("span", { children: "Demo" }),
                /* @__PURE__ */ s("div", { className: e.icons, children: [
                  /* @__PURE__ */ i(u, { icon: "gift-outline" }),
                  /* @__PURE__ */ i(u, { icon: "gift" })
                ] })
              ]
            }
          ),
          !v.includes("support") && /* @__PURE__ */ s(
            d,
            {
              className: `${e.navLink} ${r === t.support || r === "/support" ? e.active : ""} ${c.includes("suppport") ? e.disabled : ""}`,
              to: c.includes("support") ? "#" : t.support ? t.support : "/support",
              onClick: (a) => {
                l(), o && a.preventDefault(), c.includes("support") && a.preventDefault(), n(a, "support");
              },
              target: t.support && t.support[0] !== "/" ? "_blank" : "",
              title: "Support",
              id: "support",
              children: [
                /* @__PURE__ */ i("span", { children: "Support" }),
                /* @__PURE__ */ s("div", { className: e.icons, children: [
                  /* @__PURE__ */ i(u, { icon: "info-outline" }),
                  /* @__PURE__ */ i(u, { icon: "info" })
                ] })
              ]
            }
          ),
          !v.includes("documentation") && /* @__PURE__ */ s(
            d,
            {
              className: `${e.navLink} ${r === t.documentation || r === "/documentation" ? e.active : ""} ${c.includes("documentation") ? e.disabled : ""}`,
              to: c.includes("documentation") ? "#" : t.documentation ? t.documentation : "/documentation",
              onClick: (a) => {
                l(), o && a.preventDefault(), c.includes("documentation") && a.preventDefault(), n(a, "documentation");
              },
              target: t.documentation && t.documentation[0] !== "/" ? "_blank" : "",
              title: "Documentation",
              id: "documentation",
              children: [
                /* @__PURE__ */ i("span", { children: "Documentation" }),
                /* @__PURE__ */ s("div", { className: e.icons, children: [
                  /* @__PURE__ */ i(u, { icon: "code-outline" }),
                  /* @__PURE__ */ i(u, { icon: "code" })
                ] })
              ]
            }
          ),
          !v.includes("resources") && /* @__PURE__ */ s(
            d,
            {
              className: `${e.navLink} ${r === t.resources || r === "/resources" ? e.active : ""} ${c.includes("resources") ? e.disabled : ""}`,
              to: c.includes("resources") ? "#" : t.resources ? t.resources : "/resources",
              onClick: (a) => {
                l(), o && a.preventDefault(), c.includes("resources") && a.preventDefault(), n(a, "resources");
              },
              target: t.resources && t.resources[0] !== "/" ? "_blank" : "",
              title: "Resources",
              id: "resources",
              children: [
                /* @__PURE__ */ i("span", { children: "Resources" }),
                /* @__PURE__ */ s("div", { className: e.icons, children: [
                  /* @__PURE__ */ i(u, { icon: "list-outline" }),
                  /* @__PURE__ */ i(u, { icon: "list" })
                ] })
              ]
            }
          ),
          !v.includes("rikai") && /* @__PURE__ */ s(K, { children: [
            /* @__PURE__ */ i(
              d,
              {
                to: c.includes("rikai") ? "#" : t.rikai ? t.rikai : "/rikai",
                className: `${e.rikAIButton} ${r === t.rikai || r === "/rikai" ? e.active : ""} ${c.includes("rikai") ? e.disabled : ""}`,
                onClick: (a) => {
                  l(), !t.rikai && p && p(), o && a.preventDefault(), p && a.preventDefault(), c.includes("rikai") && a.preventDefault(), n(a, "rikai");
                },
                target: t.rikai && t.rikai[0] !== "/" ? "_blank" : "",
                title: "RikAI",
                id: "rikai",
                children: /* @__PURE__ */ i(
                  B,
                  {
                    text: "RikAI",
                    type: r === t.rikai || r === "/rikai" ? 4 : 9,
                    theme: $ || "light"
                  }
                )
              }
            ),
            /* @__PURE__ */ i(
              d,
              {
                to: c.includes("rikai") ? "#" : t.rikai ? t.rikai : "/rikai",
                className: `${e.RKIButton} ${r === t.rikai || r === "/rikai" ? e.active : ""} ${c.includes("rikai") ? e.disabled : ""}`,
                onClick: (a) => {
                  l(), !t.rikai && p && p(), o && a.preventDefault(), p && a.preventDefault(), c.includes("rikai") && a.preventDefault(), n(a, "rikai");
                },
                target: t.rikai && t.rikai[0] !== "/" ? "_blank" : "",
                title: "RikAI",
                id: "rikai",
                children: /* @__PURE__ */ i(
                  B,
                  {
                    text: "RKI",
                    type: r === t.rikai || r === "/rikai" ? 4 : 9,
                    theme: $ || "light",
                    width: "var(--spacing-08)"
                  }
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ s(
          "div",
          {
            className: `${e.borderTop} ${e.avatarDiv}  ${q ? e.avatarExpanded : ""}`,
            children: [
              !v.includes("settings") && /* @__PURE__ */ s(
                d,
                {
                  className: `${e.navLink} ${r === t.settings || r === "/settings" ? e.active : ""} ${c.includes("settings") ? e.disabled : ""}`,
                  to: c.includes("settings") ? "#" : t.settings ? t.settings : "/settings",
                  onClick: (a) => {
                    l(), o && a.preventDefault(), c.includes("settings") && a.preventDefault(), n(a, "settings");
                  },
                  target: t.settings && t.settings[0] !== "/" ? "_blank" : "",
                  title: "Settings",
                  id: "settings",
                  children: [
                    /* @__PURE__ */ i("span", { children: "Settings" }),
                    /* @__PURE__ */ s("div", { className: e.icons, children: [
                      /* @__PURE__ */ i(u, { icon: "settings-outline" }),
                      /* @__PURE__ */ i(u, { icon: "settings" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ s(
                d,
                {
                  className: `${e.navLink} ${c.includes("signOut") ? e.disabled : ""}`,
                  title: "Sign Out",
                  to: c.includes("signOut") ? "#" : t.signOut && !D ? t.signOut : "/signOut",
                  onClick: (a) => {
                    n(a, "signOut") && (D && D(z), o && a.preventDefault(), D && a.preventDefault(), c.includes("signOut") && a.preventDefault());
                  },
                  id: "signOut",
                  children: [
                    /* @__PURE__ */ i("span", { children: "Sign Out" }),
                    /* @__PURE__ */ s("div", { className: e.icons, children: [
                      /* @__PURE__ */ i(u, { icon: "log-out-outline" }),
                      /* @__PURE__ */ i(u, { icon: "log-out" })
                    ] })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ i("div", { className: `${e.lower} ${e.borderTop}`, children: /* @__PURE__ */ s(
          "a",
          {
            className: `${e.navLink} ${e.avatarLink}`,
            onClick: (a) => {
              j(!q);
            },
            children: [
              /* @__PURE__ */ i(
                R,
                {
                  theme: $,
                  name: x,
                  image: I,
                  size: h ? "medium" : "small",
                  showGradient: !0
                }
              ),
              /* @__PURE__ */ i("span", { children: x }),
              /* @__PURE__ */ i(
                "div",
                {
                  className: `${e.icons} ${q ? e.avatarExpanded : ""}`,
                  children: /* @__PURE__ */ i(u, { icon: "chevron-up-outline" })
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ i(
          "button",
          {
            className: `${e.expandButton} `,
            onClick: (a) => {
              g && g(), f(!h);
            },
            children: /* @__PURE__ */ i(u, { icon: "chevron-right-outline" })
          }
        )
      ]
    }
  );
}
export {
  X as default
};
