import { jsxs as l, jsx as t } from "react/jsx-runtime";
import "react";
import { s as i } from "../TestSetThumb.module-DQS1T-qP.js";
import m from "./Icon.js";
import a from "./Pill.js";
function h(e) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: `
          ${i.testSetThumb}          ${e.isClicked ? i.clickedTestSetThumb : ""}
          ${e.theme === "light" ? i.light : i.dark}
        `,
      children: [
        /* @__PURE__ */ l("div", { className: i.top, children: [
          /* @__PURE__ */ t("p", { children: `Test ID: ${e.id}` }),
          /* @__PURE__ */ l("div", { children: [
            /* @__PURE__ */ l("p", { children: [
              e.date1,
              " - ",
              e.date2
            ] }),
            /* @__PURE__ */ t(m, { icon: "mole-tracking" })
          ] })
        ] }),
        /* @__PURE__ */ l("div", { className: i.middle, children: [
          e.potentialConcern && /* @__PURE__ */ t("p", { className: i.fontLarge, children: "⚠️" }),
          /* @__PURE__ */ t("p", { className: i.fontSmall, children: e.location })
        ] }),
        /* @__PURE__ */ l("div", { className: i.moleBottom, children: [
          /* @__PURE__ */ t("span", { className: i.fontSmall, children: e.imageNumber === 1 ? e.imageNumber + " Image" : e.imageNumber + " Images" }),
          e.isReviewRequested && /* @__PURE__ */ t(a, { text: "Review Requested" })
        ] })
      ]
    }
  );
}
export {
  h as default
};
