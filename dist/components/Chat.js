import { jsxs as i, jsx as a } from "react/jsx-runtime";
import "react";
import o from "./PromptCard.js";
import l from "./Icon.js";
import d from "./Button.js";
import { g as h } from "../GlobalStyles.module-DpHB84ee.js";
import '../assets/Chat.css';const n = {
  "chat-container": "_chat-container_9bfon_1",
  "chat-wrapper": "_chat-wrapper_9bfon_1",
  "chat-sub-heading": "_chat-sub-heading_9bfon_58",
  "inner-chat-container": "_inner-chat-container_9bfon_1",
  "prompt-card-wrapper": "_prompt-card-wrapper_9bfon_90",
  "chat-btn": "_chat-btn_9bfon_111",
  "invisible-text-area": "_invisible-text-area_9bfon_126",
  "text-area-wrapper": "_text-area-wrapper_9bfon_133"
};
function x({
  copyToClipBoard: c = () => console.log("no copy function"),
  ...e
}) {
  return /* @__PURE__ */ i("div", { id: n["chat-container"], style: e.style, children: [
    e.title && /* @__PURE__ */ i("header", { children: [
      /* @__PURE__ */ a("span", { children: "{} " }),
      /* @__PURE__ */ a("span", { children: e.title })
    ] }),
    e.feedTitle && /* @__PURE__ */ a("p", { className: n["chat-sub-heading"], children: e.feedTitle }),
    /* @__PURE__ */ a("div", { id: n["inner-chat-container"], children: /* @__PURE__ */ a(
      "div",
      {
        id: n["chat-wrapper"],
        className: `${n.customScrollbar} ${h.customScrollbar}`,
        children: e.prompts.map((t, r) => /* @__PURE__ */ a("div", { className: n["prompt-card-wrapper"], children: /* @__PURE__ */ a(
          o,
          {
            hasStar: e.hasStars,
            copyToClipBoard: c,
            onClickStar: e.onClickStar,
            isStarred: t.isStarred,
            index: r,
            id: e.id,
            title: t.title,
            questions: t.questions,
            answers: t.answers,
            confidence: t.confidence || 0,
            context: t.context || "",
            theme: e.theme
          },
          e.id
        ) }, t + r))
      }
    ) }),
    e.hasInput && /* @__PURE__ */ a("footer", { children: /* @__PURE__ */ i(
      "form",
      {
        id: "chat-form",
        onSubmit: (t) => {
          document.getElementById("invisible-text-area").innerText = "", e.onSubmitPrompt(t);
        },
        children: [
          /* @__PURE__ */ i("div", { className: n["text-area-wrapper"], children: [
            /* @__PURE__ */ a(
              "div",
              {
                className: n["invisible-text-area"],
                id: "invisible-text-area"
              }
            ),
            /* @__PURE__ */ a(
              "textarea",
              {
                placeholder: e.newPromptPlaceholder,
                onChange: (t) => {
                  document.getElementById("invisible-text-area").innerHTML = t.target.value, e.onChangeNewPrompt(t);
                },
                name: "newPrompt",
                value: e.newPrompt,
                rows: 1,
                form: "chat-form",
                className: n["custom-txt-area"]
              }
            )
          ] }),
          /* @__PURE__ */ a(
            d,
            {
              theme: e.theme,
              form: "chat-form",
              type: 6,
              buttonType: "submit",
              text: "Submit",
              icon: /* @__PURE__ */ a(l, { icon: "arrow-forward-outline" }, "submit"),
              iconPosition: "right",
              isAutoResizing: !0,
              iconJusitfy: "edge",
              className: n["chat-btn"]
            }
          )
        ]
      }
    ) })
  ] });
}
export {
  x as default
};
