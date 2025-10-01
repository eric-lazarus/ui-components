import { jsxs as c, jsx as t } from "react/jsx-runtime";
import "react";
import { s as i } from "../TestSetThumb.module-DQS1T-qP.js";
import n from "./Icon.js";
function o(e) {
  return /* @__PURE__ */ c(
    "div",
    {
      className: e.isClicked ? `${i.testSetThumb} ${i.clickedTestSetThumb} ${e.theme === "dark" ? i.dark : ""}` : `${i.testSetThumb} ${e.theme === "dark" ? i.dark : i.light}`,
      style: e.style || {},
      children: [
        /* @__PURE__ */ c("div", { className: i.top, children: [
          /* @__PURE__ */ t("p", { children: `Test ID: ${e.id}` }),
          /* @__PURE__ */ c("div", { children: [
            /* @__PURE__ */ t("p", { children: e.date }),
            e.type === "mproc" ? /* @__PURE__ */ t(n, { icon: "m-proc-outline" }) : /* @__PURE__ */ t(n, { icon: "person-outline" })
          ] })
        ] }),
        /* @__PURE__ */ c("div", { className: i.middle + " " + i.fontSmall, children: [
          e.potentialConcern && /* @__PURE__ */ t("div", { className: "conditionIndicator", children: "⚠️" }),
          /* @__PURE__ */ t("p", { children: e.location })
        ] }),
        e.isAIActive && /* @__PURE__ */ c("div", { className: i.bottom, children: [
          /* @__PURE__ */ c("div", { className: i.conditionDiv, children: [
            /* @__PURE__ */ t(
              "div",
              {
                className: `${i.conditionIndicator} ${i[e.risk]}`
              }
            ),
            /* @__PURE__ */ t("p", { className: `${i.condition} ${i.fontSmall}`, children: e.condition })
          ] }),
          /* @__PURE__ */ t("p", { className: `${i.fontSmall}`, children: `${e.confidence}%` })
        ] })
      ]
    }
  );
}
export {
  o as default
};
