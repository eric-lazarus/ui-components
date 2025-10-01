import { jsxs as i, jsx as n } from "react/jsx-runtime";
import { useState as w, useRef as y, Fragment as v } from "react";
import l from "./Icon.js";
import '../assets/PromptCard.css';const $ = "_openBody_1fa2i_141", N = "_closeBody_1fa2i_148", x = "_ocra_1fa2i_303", e = {
  "prompt-wrapper": "_prompt-wrapper_1fa2i_1",
  "prompt-header-container": "_prompt-header-container_1fa2i_10",
  "prompt-header": "_prompt-header_1fa2i_10",
  "prompt-header-text": "_prompt-header-text_1fa2i_54",
  "prompt-header-conf": "_prompt-header-conf_1fa2i_62",
  "star-container": "_star-container_1fa2i_69",
  "prompt-header-icon": "_prompt-header-icon_1fa2i_80",
  "prompt-body": "_prompt-body_1fa2i_89",
  openBody: $,
  closeBody: N,
  "prompt-body-interior": "_prompt-body-interior_1fa2i_155",
  "prompt-body-row": "_prompt-body-row_1fa2i_159",
  "bracket-row": "_bracket-row_1fa2i_163",
  "highlight-row": "_highlight-row_1fa2i_167",
  "copy-button": "_copy-button_1fa2i_179",
  "qa-row": "_qa-row_1fa2i_225",
  "qa-section-two": "_qa-section-two_1fa2i_232",
  "qa-gray-text": "_qa-gray-text_1fa2i_232",
  "qa-body": "_qa-body_1fa2i_233",
  "qa-header": "_qa-header_1fa2i_238",
  "qa-followup": "_qa-followup_1fa2i_247",
  "qa-followup-icon": "_qa-followup-icon_1fa2i_254",
  "qa-green-text": "_qa-green-text_1fa2i_260",
  "qa-blue-text": "_qa-blue-text_1fa2i_264",
  "qa-section-two-arrow": "_qa-section-two-arrow_1fa2i_272",
  "context-body": "_context-body_1fa2i_288",
  "context-span": "_context-span_1fa2i_292",
  "cursor-pointer": "_cursor-pointer_1fa2i_299",
  ocra: x,
  "q-a": "_q-a_1fa2i_307"
};
function C({
  onCopy: s = () => {
  },
  copyToClipBoard: r = () => console.log("no copy function"),
  ...a
}) {
  const [h, q] = w(!0), [d, _] = w(!1), m = y();
  function f(o) {
    return o === void 0 ? "" : o > 0.75 ? "High" : o > 0.55 ? "Medium" : "Low";
  }
  function u(o) {
    const t = ["#B3E87D", "#FFD24C", "#FF4C4D"];
    return o > 0.75 ? t[0] : o > 0.55 ? t[1] : t[2];
  }
  function p() {
    if (m.current) {
      const o = m.current.scrollHeight;
      m.current.style.setProperty("--max-height", o + "px");
    }
  }
  return /* @__PURE__ */ i("div", { className: `${e["prompt-wrapper"]} ${e.ocra}`, onMouseOver: p, children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: `${e["prompt-header-container"]} ${e["cursor-pointer"]}`,
        children: [
          a.hasStar ? /* @__PURE__ */ n(
            "div",
            {
              className: `${e["star-container"]}`,
              children: /* @__PURE__ */ n(
                l,
                {
                  animation: null,
                  icon: "star-outline",
                  fill: a.isStarred ? "#FFFF00" : "#808080",
                  onClick: () => a.onClickStar(a.index)
                },
                "star-" + a.index + a.isStarred
              )
            }
          ) : /* @__PURE__ */ n("div", {}),
          /* @__PURE__ */ i(
            "div",
            {
              className: `${e["prompt-header"]} ${e["cursor-pointer"]}`,
              onClick: () => {
                q(!h), p();
              },
              children: [
                /* @__PURE__ */ n(
                  "div",
                  {
                    className: `${e["prompt-header-text"]}`,
                    children: a.title
                  }
                ),
                a.confidence > 0 ? /* @__PURE__ */ n("div", { className: e["prompt-header-conf"], children: /* @__PURE__ */ n(
                  "span",
                  {
                    style: {
                      color: u(a.confidence)
                    },
                    children: f(a.confidence)
                  }
                ) }) : /* @__PURE__ */ n("div", {}),
                /* @__PURE__ */ n(
                  "div",
                  {
                    className: `${e["prompt-header-icon"]} ${e["cursor-pointer"]}`,
                    children: /* @__PURE__ */ n(
                      l,
                      {
                        icon: h ? "chevron-down-outline" : "chevron-right-outline",
                        animation: null
                      },
                      h ? "chevron-down-outline-key" : "chevron-right-outline-key"
                    )
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ n(
      "div",
      {
        className: `
            ${e["prompt-body"]}
            ${h ? e.openBody : e.closeBody}
          `,
        ref: m,
        children: /* @__PURE__ */ i("div", { className: e["prompt-body-interior"], children: [
          /* @__PURE__ */ n(
            "div",
            {
              className: `${e["prompt-body-row"]} ${e["bracket-row"]}`,
              children: `{
`
            }
          ),
          /* @__PURE__ */ i(
            "div",
            {
              className: `${e["prompt-body-row"]} ${e["highlight-row"]}`,
              onClick: (o) => {
                o.preventDefault(), r(a.questions.join(`
`)), s("question", a.questions.join(`
`));
              },
              children: [
                /* @__PURE__ */ n(
                  "div",
                  {
                    className: e["copy-button"],
                    onClick: (o) => {
                      o.preventDefault(), r(a.questions.join(`
`)), s("question", a.questions.join(`
`));
                    },
                    children: /* @__PURE__ */ n(l, { icon: "file-outline", animation: null })
                  }
                ),
                /* @__PURE__ */ i("div", { className: e["qa-row"], children: [
                  /* @__PURE__ */ n("div", { className: e["qa-header"], children: /* @__PURE__ */ n("div", { className: `${e["q-a"]}`, children: "Q:" }) }),
                  /* @__PURE__ */ n("div", { className: `${e["qa-body"]} ${e["qa-blue-text"]}`, children: a.questions.map((o, t) => /* @__PURE__ */ n(v, { children: t === 0 ? /* @__PURE__ */ i(
                    "div",
                    {
                      className: e["copy-text"],
                      onClick: (c) => {
                        c.preventDefault(), r(o);
                      },
                      children: [
                        '"',
                        o,
                        '"'
                      ]
                    },
                    `prompt-${t}`
                  ) : /* @__PURE__ */ i(
                    "div",
                    {
                      className: e["qa-followup"],
                      children: [
                        /* @__PURE__ */ n("div", { className: e["qa-followup-icon"], children: /* @__PURE__ */ n(
                          l,
                          {
                            icon: "corner-down-right-outline",
                            animation: null
                          },
                          `return-${t}`
                        ) }),
                        /* @__PURE__ */ i(
                          "div",
                          {
                            className: e["copy-text"],
                            onClick: (c) => {
                              c.preventDefault(), r(o);
                            },
                            children: [
                              '"',
                              o,
                              '"'
                            ]
                          },
                          `prompt-${t}`
                        )
                      ]
                    },
                    `followup-${t}`
                  ) }, `prompt-frag-${t}`)) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ i(
            "div",
            {
              className: `${e["prompt-body-row"]} ${e["highlight-row"]}`,
              onClick: (o) => {
                o.preventDefault(), r(a.answers.join(`
`)), s("answer", a.answers.join(`
`));
              },
              children: [
                /* @__PURE__ */ n(
                  "div",
                  {
                    className: e["copy-button"],
                    onClick: (o) => {
                      o.preventDefault(), r(a.answers.join(`
`)), s("answer", a.answers.join(`
`));
                    },
                    children: /* @__PURE__ */ n(l, { icon: "file-outline", animation: null })
                  }
                ),
                /* @__PURE__ */ i("div", { className: e["qa-row"], children: [
                  /* @__PURE__ */ n("div", { className: e["qa-header"], children: /* @__PURE__ */ n("div", { className: `${e.ocra} ${e["q-a"]}`, children: "A:" }) }),
                  /* @__PURE__ */ n("div", { className: `${e["qa-body"]} ${e["qa-green-text"]}`, children: a.answers.map((o, t) => /* @__PURE__ */ n(v, { children: t === 0 ? /* @__PURE__ */ i(
                    "div",
                    {
                      onClick: (c) => {
                        c.preventDefault(), r(o);
                      },
                      children: [
                        '"',
                        o,
                        '"'
                      ]
                    },
                    `answer-${t}`
                  ) : /* @__PURE__ */ i(
                    "div",
                    {
                      className: e["qa-followup"],
                      children: [
                        /* @__PURE__ */ n("div", { className: e["qa-followup-icon"], children: /* @__PURE__ */ n(
                          l,
                          {
                            icon: "corner-down-right-outline",
                            animation: null
                          },
                          `return-${t}`
                        ) }),
                        /* @__PURE__ */ i(
                          "div",
                          {
                            className: e["copy-text"],
                            id: `answer-${t}`,
                            onClick: (c) => {
                              c.preventDefault(), r(o);
                            },
                            children: [
                              '"',
                              o,
                              '"'
                            ]
                          },
                          `answer-${t}`
                        )
                      ]
                    },
                    `followup-${t}`
                  ) }, `answ-frag-${t}`)) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ n(
            "div",
            {
              className: `${e["prompt-body-row"]} ${e["bracket-row"]}`,
              children: "}"
            }
          ),
          a.confidence > 0 && /* @__PURE__ */ n(
            "div",
            {
              className: e["prompt-body-row"],
              children: /* @__PURE__ */ i("div", { className: e["qa-section-two"], children: [
                /* @__PURE__ */ n("span", { className: e.ocra, children: "Confidence: " }),
                /* @__PURE__ */ n(
                  "span",
                  {
                    style: {
                      color: u(a.confidence),
                      marginTop: "-1px"
                      // for OCR-A/Work-Sans difference
                    },
                    children: f(a.confidence)
                  }
                )
              ] })
            }
          ),
          a.context && /* @__PURE__ */ n(
            "div",
            {
              className: e["prompt-body-row"],
              children: /* @__PURE__ */ i(
                "div",
                {
                  className: e["qa-section-two"],
                  children: [
                    /* @__PURE__ */ i(
                      "span",
                      {
                        className: `${e["cursor-pointer"]} ${e["context-span"]}`,
                        onClick: () => {
                          _(!d);
                        },
                        children: [
                          /* @__PURE__ */ n("span", { className: e["qa-section-two-arrow"], children: /* @__PURE__ */ n(
                            l,
                            {
                              icon: d ? "chevron-down-outline" : "chevron-right-outline",
                              style: { width: ".8em", height: ".8em" },
                              onClick: () => {
                                _(!d);
                              },
                              animation: null
                            },
                            d ? "context-key-downward-outline" : "context-key-right-outline"
                          ) }),
                          /* @__PURE__ */ n("span", { className: e.ocra, children: "Explainability: " })
                        ]
                      }
                    ),
                    d && /* @__PURE__ */ n(
                      "p",
                      {
                        className: `${e["qa-gray-text"]} ${e["context-body"]}`,
                        children: a.context
                      }
                    )
                  ]
                }
              )
            }
          )
        ] })
      }
    )
  ] });
}
export {
  C as default
};
