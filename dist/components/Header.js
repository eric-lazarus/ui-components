import { jsx as t, Fragment as m, jsxs as s } from "react/jsx-runtime";
import { useState as l, useEffect as p } from "react";
import A from "./Modal.js";
import '../assets/Header.css';const $ = "_light_144mh_1", B = "_mainHeader_144mh_5", C = "_textMuted_144mh_13", S = "_textBright_144mh_17", k = "_textGray_144mh_21", H = "_dark_144mh_25", M = "_headerNotes_144mh_72", V = "_changeLogNotesStart_144mh_79", D = "_scrollTextArea_144mh_83", G = "_extraNotes_144mh_92", b = "_version_144mh_100", n = {
  light: $,
  mainHeader: B,
  textMuted: C,
  textBright: S,
  textGray: k,
  dark: H,
  headerNotes: M,
  changeLogNotesStart: V,
  scrollTextArea: D,
  extraNotes: G,
  "scrolling-animation": "_scrolling-animation_144mh_1",
  version: b
};
function z({
  headerTitle: d,
  changeLogNotes: e,
  theme: i = "light",
  isModalDefaultOpen: h = !1
}) {
  const [_, a] = l(!1), [u, v] = l(null), [f, y] = l(null), [N, T] = l(5);
  return p(() => {
    a(h);
  }, [h]), p(() => {
    if (e) {
      v(
        /* @__PURE__ */ t(m, { children: /* @__PURE__ */ s(
          "div",
          {
            style: { display: "block" },
            className: `${n.version}  ${n[i]}`,
            children: [
              /* @__PURE__ */ s("div", { style: { marginBottom: "1em" }, children: [
                /* @__PURE__ */ t("h2", { className: n.textMuted, children: d }),
                /* @__PURE__ */ s("h3", { className: n.textBright, children: [
                  "Version ",
                  e.version
                ] }),
                /* @__PURE__ */ t("h4", { className: n.textGray, children: `© ${(/* @__PURE__ */ new Date()).getFullYear()} Lazarus Enterprises Inc.` })
              ] }),
              /* @__PURE__ */ s("div", { children: [
                /* @__PURE__ */ t("p", { children: `${e.versionSummary}`.replaceAll("\\n", `
`) }),
                /* @__PURE__ */ t("p", { children: `${e.versionDetails}`.replaceAll("\\n", `
`) }),
                /* @__PURE__ */ t("ul", { children: e.versionBullets && e.versionBullets.map((x, c) => /* @__PURE__ */ t("li", { children: x }, c)) })
              ] })
            ]
          }
        ) })
      );
      let r = e && e.versionSummary;
      const o = r && 140 - r.length * 2;
      if (o && o > 0) {
        const c = " ".repeat(o) + r;
        r += c;
      }
      r && y(r), T(r.length / 6);
    }
  }, [e, i]), /* @__PURE__ */ s(m, { children: [
    /* @__PURE__ */ s(
      "header",
      {
        id: "main-header",
        className: `${n.mainHeader} ${n[i]}`,
        children: [
          /* @__PURE__ */ t("h2", { children: d }),
          e && /* @__PURE__ */ s(
            "div",
            {
              className: n.headerNotes,
              onClick: (r) => {
                r.preventDefault(), a(!_);
              },
              children: [
                /* @__PURE__ */ s("div", { className: n.changeLogNotesStart, children: [
                  " ",
                  "V",
                  e.version
                ] }),
                /* @__PURE__ */ t("div", { className: n.scrollTextArea, children: /* @__PURE__ */ t(
                  "div",
                  {
                    className: n.extraNotes,
                    style: {
                      animationDuration: `${N}s`
                    },
                    children: f
                  }
                ) })
              ]
            }
          )
        ]
      }
    ),
    e && /* @__PURE__ */ t(m, { children: /* @__PURE__ */ t(
      A,
      {
        content: u,
        isVisible: _,
        onConfirm: () => a(!1),
        onCancel: () => a(!1),
        theme: i,
        showClose: !1,
        confirmText: "Close",
        height: "80vh",
        style: { display: "block" }
      }
    ) })
  ] });
}
export {
  z as default
};
