import { jsxs as a, jsx as i } from "react/jsx-runtime";
import { Fragment as m } from "react";
import '../assets/Timeline.css';const _ = "_light_1n972_1", v = "_timeline_1n972_1", f = "_bar_1n972_2", u = "_filled_1n972_6", $ = "_square_1n972_7", h = "_circle_1n972_8", o = "_dark_1n972_21", e = {
  light: _,
  timeline: v,
  bar: f,
  filled: u,
  square: $,
  circle: h,
  dark: o
};
function q(t) {
  const s = Array(t.activeStep).fill(null), r = Array(t.steps - t.activeStep).fill(null), c = t.activeStep === t.steps, n = t.activeStep / t.steps * 100;
  return /* @__PURE__ */ a(
    "div",
    {
      className: `
      ${e.timeline}
      ${t.theme === "dark" ? e.dark : e.light}
    `,
      children: [
        /* @__PURE__ */ i("div", { className: `${e.square} ${e.filled}` }),
        /* @__PURE__ */ a(
          "div",
          {
            className: `${e.bar} ${t.activeStep !== 0 ? e.filled : ""}`,
            style: { width: t.activeStep !== 0 ? n + "%" : "auto" },
            children: [
              /* @__PURE__ */ i("span", {}),
              s !== 0 && s.map((d, l) => /* @__PURE__ */ i(
                "div",
                {
                  className: `${e.circle} ${e.filled}`
                },
                l + 1
              )),
              c ? /* @__PURE__ */ i("div", { className: `${e.square} ${e.filled}` }) : ""
            ]
          }
        ),
        !c && /* @__PURE__ */ a(m, { children: [
          /* @__PURE__ */ i(
            "div",
            {
              className: `${e.bar}`,
              style: { width: 100 - n + "%" },
              children: r.map((d, l) => l !== 0 ? /* @__PURE__ */ i("div", { className: `${e.circle}` }, l + 1) : "")
            }
          ),
          /* @__PURE__ */ i("div", { className: `${e.square}` })
        ] })
      ]
    }
  );
}
export {
  q as default
};
