import { jsx as i } from "react/jsx-runtime";
import { useState as o, useEffect as d } from "react";
import '../assets/LoadingBar.css';const l = "_loadingBarContainer_9fjya_1", f = "_loadingBar_9fjya_1", g = "_finished_9fjya_20", B = "_loadingBar2_9fjya_25", a = {
  loadingBarContainer: l,
  loadingBar: f,
  finished: g,
  loadingBar2: B
};
function u(n) {
  const [t, r] = o(a.loadingBar), [s, e] = o("15s");
  return setTimeout(() => {
    r(`${a.loadingBar} ${a.loadingBar2}`);
  }, [1]), d(() => {
    n.animationDuration && e(n.animationDuration);
  }, [n.animationDuration]), /* @__PURE__ */ i("div", { className: a.loadingBarContainer, children: /* @__PURE__ */ i(
    "div",
    {
      style: {
        transitionDuration: s
      },
      className: n.isFinished ? `${a.loadingBar} ${a.finished}` : t
    }
  ) });
}
export {
  u as default
};
