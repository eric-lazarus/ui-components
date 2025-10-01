import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { useState as s, useRef as l } from "react";
import p from "./Icon.js";
import '../assets/CollapseCard.css';const m = "_openBody_1kbo6_140", h = "_closeBody_1kbo6_147", _ = "_ocra_1kbo6_298", e = {
  "prompt-wrapper": "_prompt-wrapper_1kbo6_1",
  "prompt-header-container": "_prompt-header-container_1kbo6_10",
  "prompt-header": "_prompt-header_1kbo6_10",
  "prompt-header-text": "_prompt-header-text_1kbo6_42",
  "prompt-header-text-open": "_prompt-header-text-open_1kbo6_50",
  "star-container": "_star-container_1kbo6_64",
  "prompt-header-icon": "_prompt-header-icon_1kbo6_75",
  "prompt-body": "_prompt-body_1kbo6_84",
  openBody: m,
  closeBody: h,
  "cursor-pointer": "_cursor-pointer_1kbo6_294",
  ocra: _
};
function v({
  onCopy: u = () => {
  },
  ...o
}) {
  const [t, d] = s(o.isOpen || !1), n = l();
  function c() {
    if (n.current) {
      const a = n.current.scrollHeight;
      n.current.style.setProperty("--max-height", a + "px");
    }
  }
  return /* @__PURE__ */ r("div", { className: `${e["prompt-card-wrapper"]}`, children: /* @__PURE__ */ i("div", { className: `${e["prompt-wrapper"]} ${e.ocra}`, onMouseOver: c, children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: `${e["prompt-header-container"]} ${e["cursor-pointer"]}`,
        children: [
          o.hasStar ? /* @__PURE__ */ r(
            "div",
            {
              className: `${e["star-container"]}`,
              children: /* @__PURE__ */ r(
                p,
                {
                  animation: null,
                  icon: "star-outline",
                  fill: o.isStarred ? "#FFFF00" : "#808080",
                  onClick: () => o.onClickStar(o.index)
                },
                "star-" + o.index + o.isStarred
              )
            }
          ) : /* @__PURE__ */ r("div", {}),
          /* @__PURE__ */ i(
            "div",
            {
              className: `${e["prompt-header"]} ${e["cursor-pointer"]}`,
              onClick: () => {
                d(!t), c();
              },
              children: [
                /* @__PURE__ */ r(
                  "div",
                  {
                    className: t ? `${e["prompt-header-text-open"]}` : `${e["prompt-header-text"]}`,
                    children: /* @__PURE__ */ r(
                      "span",
                      {
                        onClick: (a) => {
                          o.copyTitle && a.stopPropagation();
                        },
                        children: o.title
                      }
                    )
                  }
                ),
                /* @__PURE__ */ r(
                  "div",
                  {
                    className: `${e["prompt-header-icon"]} ${e["cursor-pointer"]}`,
                    children: /* @__PURE__ */ r(
                      p,
                      {
                        icon: t ? "chevron-down-outline" : "chevron-right-outline",
                        animation: null
                      },
                      t ? "chevron-down-outline-key" : "chevron-right-outline-key"
                    )
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r(
      "div",
      {
        className: `
              ${e["prompt-body"]}
              ${t ? e.openBody : e.closeBody}
            `,
        ref: n,
        children: o.content || o.children
      }
    )
  ] }) });
}
export {
  v as default
};
