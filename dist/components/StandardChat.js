import { jsxs as m, jsx as e, Fragment as h } from "react/jsx-runtime";
import { useState as b, useEffect as g } from "react";
import d from "./Icon.js";
import k from "./Animation.js";
import _ from "../Helpers.js";
import '../assets/StandardChat.css';const O = "_avatar_158wm_77", x = "_context_158wm_138", R = "_citation_158wm_174", o = {
  "chat-wrapper": "_chat-wrapper_158wm_1",
  "chat-response": "_chat-response_158wm_12",
  "chat-box": "_chat-box_158wm_22",
  "chat-copy": "_chat-copy_158wm_35",
  "answer-chat": "_answer-chat_158wm_68",
  avatar: O,
  "question-chat": "_question-chat_158wm_93",
  "animation-wrapper": "_animation-wrapper_158wm_130",
  context: x,
  "context-container": "_context-container_158wm_155",
  "citations-on": "_citations-on_158wm_174",
  "citations-inactive": "_citations-inactive_158wm_174",
  "citations-active": "_citations-active_158wm_178",
  citation: R,
  "citation-number": "_citation-number_158wm_184",
  "animation-icon": "_animation-icon_158wm_200",
  "chat-images": "_chat-images_158wm_214"
};
function U({
  copyFeedbackFunc: $ = () => {
  },
  showCitations: N = !1,
  ...c
}) {
  const [l, w] = b([]);
  function f(t) {
    l.includes(t) ? w(JSON.parse(JSON.stringify(l.filter((a) => a !== t)))) : (l.push(t), w(JSON.parse(JSON.stringify(l))));
  }
  g(() => {
    if (c.activeResponse === null || c.activeResponse === c.chatFeed.length) {
      const t = document.getElementById("chat-wrapper");
      t.scrollTo({ top: t.scrollHeight, behavior: "smooth" });
    }
  }, [c.chatFeed]);
  function v(t) {
    return _.citationTextIntoArray(t);
  }
  function C(t) {
    const a = _.splitTextByCitations(t), r = [].concat(...a.map((n) => n[1].split(",").map((i) => parseInt(i)))), u = r.filter((n, i) => i === r.indexOf(n));
    return Object.assign({}, ...u.map((n, i) => {
      const s = {};
      return s[n] = i + 1, s;
    }));
  }
  function y(t, a) {
    const r = v(t), u = C(t);
    return r.filter((n) => n[0].length).map((n, i) => n[1] === null ? /* @__PURE__ */ e("span", { children: p(n[0]) }, i) : /* @__PURE__ */ m(h, { children: [
      /* @__PURE__ */ e(
        "span",
        {
          className: o.citation,
          onClick: () => {
            c.onClickCitation(a, n[1].map((s) => u[s - 1]));
          },
          children: p(n[0])
        },
        `${i}-text`
      ),
      n[1].map((s) => /* @__PURE__ */ e(
        "span",
        {
          className: o["citation-number"],
          onClick: () => {
            c.onClickCitation(a, u[s - 1]);
          },
          children: ` ${u[s - 1]} `
        },
        `${i}-number-${s}`
      ))
    ] }));
  }
  function p(t) {
    const a = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi, r = "**url**:";
    return t.replace(a, (n) => {
      const i = n.replace(`
`, "");
      return "|||" + r + i + "|||" + n.replace(i, "");
    }).split("|||").map((n, i) => {
      if (n.includes(r)) {
        const s = n.replace(r, "");
        return /* @__PURE__ */ e(
          "a",
          {
            href: s,
            target: "_blank",
            rel: "noopener noreferrer",
            children: s
          },
          "url-" + i
        );
      }
      return n;
    });
  }
  function T(t) {
    const r = v(t).map((u) => u[0]).join("");
    _.copyToClipBoard(r, $(r.slice(0, 20)));
  }
  return /* @__PURE__ */ m("div", { className: `${o["chat-wrapper"]} ${c.isCitationModeOn ? o["citations-on"] : ""}`, id: "chat-wrapper", style: c.styles, children: [
    c.chatFeed.map((t, a) => {
      if (!t)
        return /* @__PURE__ */ e(h, {});
      const r = C(t.text), u = Object.keys(r);
      return /* @__PURE__ */ m(
        "div",
        {
          className: `${o["chat-response"]} ` + (t.type === "question" ? o["question-chat"] : c.activeResponse === a ? `${o["answer-chat"]} ${o["citations-active"]}` : `${o["answer-chat"]} ${o["citations-inactive"]}`),
          children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: o.avatar,
                children: t.type === "answer" ? /* @__PURE__ */ e(
                  "div",
                  {
                    className: o["animation-wrapper"],
                    children: /* @__PURE__ */ e("div", { className: o["animation-icon"], children: /* @__PURE__ */ e(
                      k,
                      {
                        animationState: "generating",
                        stopAnimation: !t.isLoading,
                        height: 36,
                        width: 36
                      }
                    ) })
                  }
                ) : c.userAvatar
              },
              "avatar-" + a
            ),
            /* @__PURE__ */ m(
              "div",
              {
                className: o["chat-box"],
                onClick: () => {
                  c.onClickChat(a);
                },
                children: [
                  /* @__PURE__ */ e(
                    "div",
                    {
                      className: o["chat-copy"],
                      onClick: (n) => {
                        n.stopPropagation(), T(t.text);
                      },
                      children: /* @__PURE__ */ e(
                        d,
                        {
                          icon: "file-outline"
                        }
                      )
                    }
                  ),
                  t.type === "answer" ? /* @__PURE__ */ m(
                    "div",
                    {
                      children: [
                        y(t.text, a),
                        t.context && /* @__PURE__ */ m(h, { children: [
                          /* @__PURE__ */ m(
                            "div",
                            {
                              className: o.context,
                              onClick: () => {
                                f(a);
                              },
                              children: [
                                /* @__PURE__ */ e(
                                  d,
                                  {
                                    icon: l.includes(a) ? "arrow-ios-upward-outline" : "arrow-ios-downward-outline"
                                  },
                                  (l.includes(a) ? "arrow-ios-upward-outline" : "arrow-ios-downward-outline") + `-${a}`
                                ),
                                /* @__PURE__ */ e("span", { children: c.contextName })
                              ]
                            }
                          ),
                          l.includes(a) && /* @__PURE__ */ e("div", { className: o["context-container"], children: t.context })
                        ] }),
                        t?.images?.length && /* @__PURE__ */ e(
                          "div",
                          {
                            className: o["chat-images"],
                            children: t?.images.map((n, i) => /* @__PURE__ */ e(
                              "img",
                              {
                                src: n
                              },
                              `${i}-img-url-${a}`
                            ))
                          },
                          `chat-images-${a}`
                        ),
                        N && t.citations && /* @__PURE__ */ m(h, { children: [
                          /* @__PURE__ */ m(
                            "div",
                            {
                              className: o.context,
                              onClick: () => {
                                f(a);
                              },
                              children: [
                                /* @__PURE__ */ e(
                                  d,
                                  {
                                    icon: l.includes(a) ? "arrow-ios-upward-outline" : "arrow-ios-downward-outline"
                                  },
                                  (l.includes(a) ? "arrow-ios-upward-outline" : "arrow-ios-downward-outline") + `-${a}`
                                ),
                                /* @__PURE__ */ e("span", { children: c.citationsName })
                              ]
                            }
                          ),
                          l.includes(a) && /* @__PURE__ */ e("div", { className: o["context-container"], children: t.citations.map((n, i) => u.includes(`${i}`) ? [r[i], /* @__PURE__ */ e("p", { children: `${r[i]}: ${n.text}` }, `${a}-citation-${i}`)] : null).filter((n) => n !== null).sort((n, i) => n[0] - i[0]).map((n) => n[1]) })
                        ] })
                      ]
                    },
                    "answer-body-" + a
                  ) : /* @__PURE__ */ e(h, { children: p(t.text) })
                ]
              },
              "chat-box-" + a
            )
          ]
        },
        "msg-" + a
      );
    }),
    /* @__PURE__ */ e(
      "div",
      {
        style: { width: "100%", height: c.paddingBottom || "0em" }
      }
    )
  ] });
}
export {
  U as default
};
