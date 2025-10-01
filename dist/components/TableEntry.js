import { jsx as a } from "react/jsx-runtime";
import "react";
import { s as r } from "../Table.module-ECkhU42c.js";
import { g as s } from "../GlobalStyles.module-DpHB84ee.js";
function f(l) {
  return /* @__PURE__ */ a(
    "tr",
    {
      onClick: l.onClick,
      className: `${r.tableEntry} ${s.flex} ${s.flex1} ${l.className} ${l.isSelected ? r.selected : ""}`,
      style: l.style ? l.style : {},
      id: l.rowId ? l.rowId : null,
      children: l.content.map(
        (e, t) => Array.isArray(e) ? /* @__PURE__ */ a("td", { "data-status": e[0], children: e[1] }, e + t) : /* @__PURE__ */ a("td", { children: e }, e + t)
      )
    }
  );
}
export {
  f as default
};
