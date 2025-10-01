import { jsxs as _, jsx as n } from "react/jsx-runtime";
import "react";
import '../assets/Card.css';const o = "_light_b3acr_1", h = "_card_b3acr_1", m = "_dark_b3acr_9", b = "_cardTitle_b3acr_33", r = {
  light: o,
  card: h,
  dark: m,
  cardTitle: b
};
function T({
  theme: c = "light",
  className: t = "",
  children: d,
  content: l,
  style: s,
  title: a,
  titleStyle: i,
  id: e = null
}) {
  return /* @__PURE__ */ _(
    "div",
    {
      className: `${r.card} ${r[c]} ${t}`,
      id: e,
      style: s,
      children: [
        a && /* @__PURE__ */ n("h3", { className: `${r.cardTitle}`, style: i, children: a }),
        d || l
      ]
    }
  );
}
export {
  T as default
};
