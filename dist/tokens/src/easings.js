var n = (c, e) => () => (e || c((e = { exports: {} }).exports, e), e.exports);
var b = n((a, i) => {
  const s = {
    easeInOutSine: "cubic-bezier(0.37, 0, 0.63, 1)",
    easeOutSine: "cubic-bezier(0.61, 1, 0.88, 1)",
    easeInSine: "cubic-bezier(0.12, 0, 0.39, 0)"
  };
  i.exports = s;
});
export default b();
