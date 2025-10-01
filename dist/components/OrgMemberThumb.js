import { jsxs as t, jsx as m } from "react/jsx-runtime";
import "react";
import n from "./Pill.js";
import r from "./Avatar.js";
import '../assets/OrgMemberThumb.css';const l = "_light_grsyi_1", c = "_dark_grsyi_8", o = "_orgMemberThumb_grsyi_31", a = "_selected_grsyi_50", g = "_infoDiv_grsyi_58", h = "_email_grsyi_99", i = {
  light: l,
  dark: c,
  orgMemberThumb: o,
  selected: a,
  infoDiv: g,
  email: h
};
function f(e) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: `
          ${i.orgMemberThumb}
          ${e.isSelected ? i.selected : ""}
          ${e.theme === "dark" ? i.dark : i.light}
        `,
      onClick: e.onClick,
      children: [
        e.icon ? /* @__PURE__ */ m(r, { theme: e.theme, icon: e.icon }) : /* @__PURE__ */ m(r, { theme: e.theme, image: e.image, name: e.name }),
        /* @__PURE__ */ t("div", { className: i.infoDiv, children: [
          /* @__PURE__ */ m("p", { children: e.orgMember.Info.Name }),
          /* @__PURE__ */ m("p", { className: i.email, children: e.orgMember.Info.Email })
        ] }),
        /* @__PURE__ */ m(n, { text: e.orgMember.Membership.Auth })
      ]
    }
  );
}
export {
  f as default
};
