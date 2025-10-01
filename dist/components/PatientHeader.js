import { jsxs as t, jsx as i } from "react/jsx-runtime";
import "react";
import l from "./Icon.js";
import a from "./Avatar.js";
import '../assets/PatientHeader.css';const c = "_light_vvyep_1", d = "_dark_vvyep_9", m = "_patientHeader_vvyep_25", s = "_sharePatientBtn_vvyep_25", h = "_capitalize_vvyep_76", v = "_infoDiv_vvyep_84", o = "_nameDiv_vvyep_105", r = "_fontMedium_vvyep_113", n = {
  light: c,
  dark: d,
  patientHeader: m,
  sharePatientBtn: s,
  capitalize: h,
  infoDiv: v,
  nameDiv: o,
  fontMedium: r
};
function D(e) {
  return /* @__PURE__ */ t(
    "header",
    {
      className: `
        ${n.patientHeader}
        ${e.theme === "dark" ? n.dark : n.light}
      `,
      style: e.style || {},
      children: [
        e.icon ? /* @__PURE__ */ i(a, { theme: e.theme, icon: e.icon }) : /* @__PURE__ */ i(a, { theme: e.theme, image: e.image, name: e.name }),
        /* @__PURE__ */ i("div", { className: n.nameDiv, onClick: e.onClick || null, children: /* @__PURE__ */ i("p", { children: e.name }) }),
        e.sex && /* @__PURE__ */ t(
          "div",
          {
            className: `${n.sexDiv} ${n.infoDiv}`,
            onClick: e.onClick || null,
            children: [
              /* @__PURE__ */ i("p", { children: "Sex" }),
              /* @__PURE__ */ i("p", { className: `${n.fontLarge} ${n.capitalize}`, children: e.sex })
            ]
          }
        ),
        /* @__PURE__ */ t("div", { onClick: e.onClick || null, className: `${n.infoDiv}`, children: [
          /* @__PURE__ */ i("p", { children: "Date of Birth" }),
          /* @__PURE__ */ i("p", { className: n.fontMedium, children: e.birthdate })
        ] }),
        /* @__PURE__ */ t("div", { onClick: e.onClick || null, className: `${n.infoDiv}`, children: [
          /* @__PURE__ */ i("p", { children: "Last Updated" }),
          /* @__PURE__ */ i("p", { className: n.fontMedium, children: e.lastUpdated })
        ] }),
        /* @__PURE__ */ t(
          "div",
          {
            className: n.sharePatientBtn,
            onClick: e.onClickSharePatient,
            children: [
              /* @__PURE__ */ i(l, { icon: "person-outline" }),
              /* @__PURE__ */ i("p", { children: "+" })
            ]
          }
        ),
        e.newTests && e.newTests > 0 && /* @__PURE__ */ i("div", { className: n.newTestsOrb, children: /* @__PURE__ */ i("p", { children: e.newTests > 0 && e.newTests }) })
      ]
    }
  );
}
export {
  D as default
};
