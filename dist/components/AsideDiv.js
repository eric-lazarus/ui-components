import { jsxs as d, jsx as t } from "react/jsx-runtime";
import "react";
import l from "./Switch.js";
import '../assets/AsideDiv.css';const c = "_light_8wdid_1", n = "_dark_8wdid_8", a = "_asideDiv_8wdid_15", s = "_selectedAsideDiv_8wdid_41", _ = "_smallText_8wdid_53", m = "_mediumText_8wdid_57", x = "_bigText_8wdid_61", h = "_flex_8wdid_65", g = "_alignCenter_8wdid_72", w = "_type1_8wdid_76", i = {
  light: c,
  dark: n,
  asideDiv: a,
  selectedAsideDiv: s,
  smallText: _,
  mediumText: m,
  bigText: x,
  flex: h,
  alignCenter: g,
  type1: w
};
function f(e) {
  return /* @__PURE__ */ d(
    "div",
    {
      className: `
        ${i.asideDiv}
        ${e.theme === "dark" ? i.dark : i.light}
        ${e.isSelected ? i.selectedAsideDiv : ""}
        ${e.type ? i["type" + e.type] : ""}
      `,
      style: e.style || {},
      onClick: e.onClick,
      children: [
        e.render && e.render,
        /* @__PURE__ */ d("div", { className: `${i.flex} ${i.smallText}`, children: [
          /* @__PURE__ */ t("p", { children: e.text }),
          /* @__PURE__ */ d("div", { className: i.flex, children: [
            /* @__PURE__ */ t("p", { children: e.switchText && e.switchText }),
            e.icon ? e.icon : e.image ? /* @__PURE__ */ t("img", { src: e.image, alt: "", onClick: e.onClickImage }) : ""
          ] })
        ] }),
        /* @__PURE__ */ d("div", { className: `${i.flex} ${i.alignCenter}`, children: [
          /* @__PURE__ */ t("p", { className: i.mediumText, children: e.number }),
          e.switch && /* @__PURE__ */ t(l, { onChange: e.onChange, checked: e.isSelected })
        ] })
      ]
    }
  );
}
export {
  f as default
};
