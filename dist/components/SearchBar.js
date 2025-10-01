import { jsx as l, jsxs as o } from "react/jsx-runtime";
import "react";
import r from "./Icon.js";
import '../assets/SearchBar.css';const i = "_light_1ctoz_1", n = "_dark_1ctoz_15", h = "_searchBar_1ctoz_29", d = "_collapsible_1ctoz_37", _ = "_searchBarLabel_1ctoz_41", m = "_isCollapsed_1ctoz_66", e = {
  light: i,
  dark: n,
  searchBar: h,
  collapsible: d,
  searchBarLabel: _,
  isCollapsed: m
};
function C({
  inputId: t = null,
  // null id will not be added, so only if inputId/formId is added will an id be added
  formId: c = null,
  ...a
}) {
  return /* @__PURE__ */ l(
    "form",
    {
      style: a.style || {},
      onSubmit: (s) => {
        s.preventDefault(), a.onSubmit && a.onSubmit();
      },
      className: `
          ${e.searchBar}
        `,
      id: c,
      children: /* @__PURE__ */ o(
        "label",
        {
          className: `
            ${e.searchBarLabel}
            ${a.isCollapsed ? e.isCollapsed : ""}
            ${a.isCollapsible ? e.collapsible : ""}
            ${a.theme === "dark" ? e.dark : e.light}
          `,
          children: [
            /* @__PURE__ */ l(
              "div",
              {
                className: `
            ${e.searchBar}
          `,
                children: /* @__PURE__ */ l(r, { icon: "search-outline" })
              }
            ),
            /* @__PURE__ */ l(
              "input",
              {
                type: "text",
                name: "search",
                placeholder: a.placeHolder || "",
                onChange: a.onChange,
                value: a.searchValue,
                autoComplete: a.autoComplete || "off",
                id: t
              }
            )
          ]
        }
      )
    }
  );
}
export {
  C as default
};
