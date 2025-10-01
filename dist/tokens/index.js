var s = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var W = s((w, r) => {
  const t = require("./src/borderWidths.js"), o = require("./src/colors.js"), n = require("./src/delays.js"), c = require("./src/durations.js"), u = require("./src/easings.js"), q = require("./src/fontFamilies.js"), a = require("./src/fontSizes.js"), d = require("./src/fontWeights.js"), g = require("./src/letterSpacings.js"), l = require("./src/lineHeights.js"), h = require("./src/mediaQueries.js"), p = require("./src/opacities.js"), f = require("./src/radii.js"), m = require("./src/shadows.js"), z = require("./src/spacing.js"), S = require("./src/zIndices.js");
  r.exports = {
    borderWidths: t,
    colors: o,
    delays: n,
    durations: c,
    easings: u,
    fontFamilies: q,
    fontSizes: a,
    fontWeights: d,
    letterSpacings: g,
    lineHeights: l,
    mediaQueries: h,
    opacities: p,
    radii: f,
    shadows: m,
    spacing: z,
    zIndices: S
  };
});
export default W();
