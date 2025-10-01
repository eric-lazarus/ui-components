import { jsx as o } from "react/jsx-runtime";
import "react";
import '../assets/ConfidenceBar.css';const s = "_confidenceBar_wnql7_1", l = "_red_wnql7_13", a = "_orange_wnql7_17", m = "_yellow_wnql7_21", _ = "_green_wnql7_25", t = {
  confidenceBar: s,
  red: l,
  orange: a,
  yellow: m,
  green: _
};
function f(e) {
  const c = (n) => n >= 1 || n === 0 ? Math.floor(n) : 1;
  return /* @__PURE__ */ o("div", { className: t.confidenceBar, style: e.style || {}, children: e.reasoning.map((n, r) => {
    const i = n.Confidence * 100;
    return /* @__PURE__ */ o(
      "div",
      {
        className: t[n.Risk],
        style: { width: `${c(i)}%` }
      },
      r
    );
  }) });
}
export {
  f as default
};
