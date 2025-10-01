var a = (p, e) => () => (e || p((e = { exports: {} }).exports, e), e.exports);
var m = a((g, x) => {
  const r = {
    small: "640px",
    medium: "768px",
    large: "1024px",
    extraLarge: "1280px",
    huge: "1536px"
  };
  x.exports = r;
});
export default m();
