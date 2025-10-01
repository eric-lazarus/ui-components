import { jsx as t } from "react/jsx-runtime";
import "react";
import '../assets/Loader.css';const e = "_loader_oyvru_1", c = "_circle_oyvru_10", a = "_dash_oyvru_1", l = "_light_oyvru_19", s = "_dark_oyvru_23", _ = "_rotate_oyvru_1", r = {
  loader: e,
  circle: c,
  dash: a,
  light: l,
  dark: s,
  rotate: _
};
function n(o) {
  return /* @__PURE__ */ t(
    "svg",
    {
      className: `
        ${r.loader}
        ${o.theme === "dark" ? r.dark : r.light}
      `,
      viewBox: "20 20 40 40",
      style: o.style || {},
      children: /* @__PURE__ */ t(
        "circle",
        {
          className: `${r[o.color]} ${r.circle}`,
          cx: "40",
          cy: "40",
          r: "20"
        }
      )
    }
  );
}
export {
  n as default
};
