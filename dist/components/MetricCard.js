import { jsx as t, jsxs as l } from "react/jsx-runtime";
import { Fragment as g } from "react";
import { g as s } from "../GlobalStyles.module-DpHB84ee.js";
import f from "./Card.js";
import h from "./Icon.js";
import '../assets/MetricCard.css';const v = "_metricCard_tz1gd_1", $ = "_content_tz1gd_5", z = "_icon_tz1gd_14", N = "_icon2_tz1gd_15", p = "_value_tz1gd_50", C = "_column1_tz1gd_55", x = "_column2_tz1gd_59", c = {
  metricCard: v,
  content: $,
  icon: z,
  icon2: N,
  value: p,
  column1: C,
  column2: x
};
function F({
  className: a = "",
  icon: n = /* @__PURE__ */ t(h, { icon: "file-outline" }),
  icon2: e = null,
  color: m = "salem",
  textColor: d = "bright-green",
  style: _,
  title: u,
  value: o,
  column1: i,
  column2: r
}) {
  return /* @__PURE__ */ t(
    f,
    {
      className: `${a} ${c.metricCard} ${s["background-" + m]}`,
      style: _,
      theme: "dark",
      title: u,
      titleStyle: {
        fontSize: "var(--font-sizes-medium)"
      },
      children: /* @__PURE__ */ l("div", { className: `${c.content}`, children: [
        n && /* @__PURE__ */ t("div", { className: `${c.icon}`, children: n }),
        o && /* @__PURE__ */ t(
          "div",
          {
            className: `${c.value} ${s["text-" + d]}`,
            children: o
          }
        ),
        e && /* @__PURE__ */ t("div", { className: `${c.icon2}`, children: e }),
        (i || r) && /* @__PURE__ */ l(g, { children: [
          /* @__PURE__ */ t("div", { className: `${c.column1}`, children: i }),
          /* @__PURE__ */ t("div", { className: `${c.column2}`, children: r })
        ] })
      ] })
    }
  );
}
export {
  F as default
};
