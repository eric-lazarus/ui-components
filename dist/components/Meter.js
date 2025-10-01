import { jsx as e } from "react/jsx-runtime";
import "react";
import '../assets/Meter.css';const r = "_meter_792ms_1", s = {
  meter: r
};
function n(t) {
  return /* @__PURE__ */ e("div", { className: s.meter, children: /* @__PURE__ */ e("div", { style: { width: `${t.percent}%` } }) });
}
export {
  n as default
};
