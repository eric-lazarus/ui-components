import { jsxs as a, jsx as i } from "react/jsx-runtime";
import "react";
import d from "./Pill.js";
import n from "./Avatar.js";
import '../assets/PatientThumb.css';const c = "_light_qign8_1", l = "_dark_qign8_8", h = "_clickedPatientThumb_qign8_19", m = "_patientThumb_qign8_31", s = "_imageDiv_qign8_61", _ = "_nameDiv_qign8_74", g = "_right_qign8_94", r = "_birthdateDiv_qign8_102", v = "_lastUpdatedDiv_qign8_103", t = {
  light: c,
  dark: l,
  clickedPatientThumb: h,
  patientThumb: m,
  imageDiv: s,
  nameDiv: _,
  right: g,
  birthdateDiv: r,
  lastUpdatedDiv: v
};
function k(e) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: `
          ${t.patientThumb}
          ${e.isClicked ? t.clickedPatientThumb : ""}
          ${e.theme === "dark" ? t.dark : t.light}
        `,
      style: e.styles || {},
      children: [
        /* @__PURE__ */ a("div", { className: t.imageDiv, children: [
          e.icon ? /* @__PURE__ */ i(n, { theme: e.theme, icon: e.icon }) : /* @__PURE__ */ i(n, { theme: e.theme, image: e.image, name: e.name }),
          /* @__PURE__ */ i("div", { className: t.nameDiv, children: /* @__PURE__ */ i("p", { children: e.name.length > 30 ? e.name.slice(0, 30) + "..." : e.name }) })
        ] }),
        /* @__PURE__ */ a("div", { className: t.right, children: [
          /* @__PURE__ */ a("div", { className: t.birthdateDiv, children: [
            /* @__PURE__ */ i("p", { children: "Date of Birth" }),
            /* @__PURE__ */ i("p", { children: e.birthdate })
          ] }),
          /* @__PURE__ */ a("div", { className: t.lastUpdatedDiv, children: [
            /* @__PURE__ */ i("p", { children: "Last Updated" }),
            /* @__PURE__ */ i("p", { children: e.lastUpdated })
          ] }),
          e.isLinked && /* @__PURE__ */ i(d, { text: "Portal Access", children: "Portal Access" })
        ] }),
        e.newTests && e.newTests > 0 && /* @__PURE__ */ i("div", { className: t.newTestsOrb, children: /* @__PURE__ */ i("p", { children: e.newTests > 0 && e.newTests }) })
      ]
    }
  );
}
export {
  k as default
};
