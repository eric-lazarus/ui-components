import { jsx as n, jsxs as t } from "react/jsx-runtime";
import "react";
import l from "./Icon.js";
import '../assets/MoleTrackingThumbnail.css';const c = "_testThumb_njhto_1", m = "_testThumbInside_njhto_19", h = "_expandDown_njhto_37", o = "_imageScrollDiv_njhto_61", g = "_rightDiv_njhto_132", d = "_collapseUp_njhto_187", e = {
  testThumb: c,
  testThumbInside: m,
  expandDown: h,
  imageScrollDiv: o,
  rightDiv: g,
  collapseUp: d
};
function r(i) {
  const s = i.imageLinks.length > 2 ? i.imageLinks.slice(1, i.imageLinks.length - 1) : null, a = i.imageLinks.length !== 1 ? i.imageLinks[i.imageLinks.length - 1] : /* @__PURE__ */ n("div", { style: { height: "100%", width: "6.5em", background: "grey" } });
  return /* @__PURE__ */ t(
    "div",
    {
      className: i.isVisible ? `${e.testThumb} ${e.expandDown}` : `${e.testThumb} ${e.collapseUp}`,
      style: i.isVisible ? i.style : {},
      children: [
        /* @__PURE__ */ t("div", { className: e.testThumbInside, children: [
          i.imageLinks[0],
          /* @__PURE__ */ n(
            "div",
            {
              className: e.imageScrollDiv,
              children: s
            }
          ),
          a
        ] }),
        /* @__PURE__ */ t("div", { className: e.rightDiv, children: [
          /* @__PURE__ */ n("div", { children: i.notes && /* @__PURE__ */ n(l, { icon: "list-outline" }) }),
          /* @__PURE__ */ n("div", { children: i.flag && /* @__PURE__ */ n(l, { icon: "flag-outline" }) })
        ] })
      ]
    }
  );
}
export {
  r as default
};
