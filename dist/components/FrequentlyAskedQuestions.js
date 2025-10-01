import { jsxs as c, jsx as t, Fragment as b } from "react/jsx-runtime";
import { useState as $, useEffect as S } from "react";
import N from "./Icon.js";
import y from "./Input.js";
import k from "../Helpers.js";
import '../assets/FrequentlyAskedQuestions.css';const C = "_FrequentlyAskedQuestions_62hot_1", T = "_light_62hot_18", H = "_dark_62hot_26", s = {
  FrequentlyAskedQuestions: C,
  light: T,
  dark: H,
  "faq-title-row": "_faq-title-row_62hot_34",
  "faq-title": "_faq-title_62hot_34",
  "faq-section": "_faq-section_62hot_55",
  "faq-search-results": "_faq-search-results_62hot_55",
  "faq-section-title-row": "_faq-section-title-row_62hot_61",
  "faq-section-title": "_faq-section-title_62hot_61",
  "faq-section-title-search": "_faq-section-title-search_62hot_78",
  "faq-section-body": "_faq-section-body_62hot_92",
  "faq-qna-row": "_faq-qna-row_62hot_100",
  "faq-qna-question": "_faq-qna-question_62hot_106",
  "faq-qna-answer": "_faq-qna-answer_62hot_111",
  "faq-search-section-row": "_faq-search-section-row_62hot_117",
  "faq-search-section-row-key": "_faq-search-section-row-key_62hot_125",
  "section-open": "_section-open_62hot_163",
  "section-close": "_section-close_62hot_167"
};
function J({
  faqs: l = {},
  title: m = "Frequently Asked Questions",
  idPrefix: q = "",
  ...f
}) {
  const [h, w] = $([]), [u, p] = $(!1), [d, g] = $(""), [F, Q] = $([]);
  S(() => {
    if (window?.location?.search) {
      const e = window.location.search.substring(1);
      g(e), p(!0);
    }
  }, []), S(() => {
    if (l) {
      const e = [], r = Object.keys(l);
      for (let n = 0; n < r.length; n++) {
        const o = r[n];
        for (let a = 0; a < l?.[o]?.length; a++) {
          const i = { ...l?.[o]?.[a] };
          i.section = o, i.searchString = `${i?.question} ${i?.answer}`, e.push(i);
        }
      }
      Q(e);
    }
  }, [l]);
  function A(e, r) {
    return e.filter((n) => n?.searchString?.includes(r)).sort((n, o) => {
      const a = n?.searchString?.indexOf(r), i = o?.searchString?.indexOf(r);
      return a - i;
    });
  }
  return /* @__PURE__ */ c(
    "div",
    {
      className: `
      ${s.FrequentlyAskedQuestions}
      ${f.theme === "dark" ? s.dark : s.light}
    `,
      style: f.style || {},
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            className: s["faq-title-row"],
            children: [
              /* @__PURE__ */ t(
                "div",
                {
                  className: s["faq-title"],
                  children: m
                }
              ),
              /* @__PURE__ */ t(
                N,
                {
                  icon: "search-outline",
                  onClick: () => {
                    p(!u);
                  }
                }
              )
            ]
          }
        ),
        u && /* @__PURE__ */ t(
          y,
          {
            value: d,
            onChange: (e) => {
              g(e.target.value);
            },
            placeholder: `${m} Search...`,
            theme: f.theme
          }
        ),
        d.length > 0 && u && /* @__PURE__ */ c(b, { children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: s["faq-section-title-search"],
              children: "Search Results"
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              className: s["faq-search-results"],
              children: A(
                F,
                d
              ).map((e, r) => /* @__PURE__ */ c(
                "div",
                {
                  id: `${q}search-${e?.question}`,
                  className: s["faq-qna-row"],
                  children: [
                    /* @__PURE__ */ t(
                      "div",
                      {
                        className: s["faq-qna-question"],
                        children: e?.question
                      }
                    ),
                    /* @__PURE__ */ c(
                      "div",
                      {
                        className: s["faq-qna-answer"],
                        children: [
                          (e?.answer || "").split(`
`).map((n, o) => /* @__PURE__ */ t(
                            "p",
                            {
                              children: k.faqTextIntoArray(n || "").map((a, i) => a[1] ? /* @__PURE__ */ t(
                                "a",
                                {
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  href: a[1],
                                  children: a[0]
                                },
                                `search-${r}-${e?.question}-ans-url-${o}-${i}`
                              ) : /* @__PURE__ */ t("span", { children: a[0] }, `search-${r}-${e?.question}-ans-${o}-${i}`))
                            },
                            `ans-para-${o}`
                          )),
                          /* @__PURE__ */ c(
                            "div",
                            {
                              className: s["faq-search-section-row"],
                              children: [
                                /* @__PURE__ */ t(
                                  "div",
                                  {
                                    className: s["faq-search-section-row-key"],
                                    children: "Section:"
                                  }
                                ),
                                /* @__PURE__ */ t("div", { children: ` ${e.section}` })
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                },
                `${e.question}-search-${r}`
              ))
            }
          )
        ] }),
        (d.length === 0 || !u) && Object.keys(l).map((e, r) => /* @__PURE__ */ c(
          "div",
          {
            id: `${q}${e}`,
            className: s["faq-section"],
            children: [
              /* @__PURE__ */ c(
                "div",
                {
                  className: s["faq-section-title-row"],
                  onClick: () => {
                    h.includes(e) ? w(h.filter((n) => n !== e)) : w([...h, e]);
                  },
                  children: [
                    /* @__PURE__ */ t(
                      "div",
                      {
                        className: s["faq-section-title"],
                        children: e
                      }
                    ),
                    /* @__PURE__ */ t(
                      N,
                      {
                        icon: h.includes(e) ? "plus-outline" : "minus-outline"
                      },
                      `${e}-toggle-${h.includes(e)}`
                    )
                  ]
                }
              ),
              /* @__PURE__ */ t(
                "div",
                {
                  className: `${s["faq-section-body"]} ${h.includes(e) ? s["section-close"] : s["section-open"]}`,
                  children: l?.[e]?.map((n, o) => /* @__PURE__ */ c(
                    "div",
                    {
                      id: `${q}${e}-${n?.question}`,
                      className: s["faq-qna-row"],
                      children: [
                        /* @__PURE__ */ t(
                          "div",
                          {
                            className: s["faq-qna-question"],
                            children: n?.question
                          }
                        ),
                        /* @__PURE__ */ t(
                          "div",
                          {
                            className: s["faq-qna-answer"],
                            children: (n?.answer || "").split(`
`).map((a, i) => /* @__PURE__ */ t(
                              "p",
                              {
                                children: k.faqTextIntoArray(a || "").map((_, v) => _[1] ? /* @__PURE__ */ t(
                                  "a",
                                  {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: _[1],
                                    children: _[0]
                                  },
                                  `${e}-${r}-${n?.question}-${o}-ans-url-${i}-${v}`
                                ) : /* @__PURE__ */ t("span", { children: _[0] }, `${e}-${r}-${n?.question}-${o}-ans-${i}-${v}`))
                              },
                              `ans-para-${i}`
                            ))
                          }
                        )
                      ]
                    },
                    `${e}-${r}-${n?.question}-${o}`
                  ))
                }
              )
            ]
          },
          `${e}-${r}`
        ))
      ]
    }
  );
}
export {
  J as default
};
