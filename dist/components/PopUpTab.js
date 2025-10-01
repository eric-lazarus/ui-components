import { jsxs as o, jsx as a } from "react/jsx-runtime";
import "react";
import '../assets/PopUpTab.css';const s = "_popUpTab_1vi0i_1", t = {
  popUpTab: s
};
function l(p) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: t.popUpTab,
      onClick: p.onClick,
      style: p.style || {},
      children: [
        /* @__PURE__ */ a("div", { className: t.blackTab }),
        /* @__PURE__ */ a("p", { children: p.text })
      ]
    }
  );
}
export {
  l as default
};
