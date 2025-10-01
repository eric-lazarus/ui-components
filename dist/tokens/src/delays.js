var n = (s, o) => () => (o || s((o = { exports: {} }).exports, o), o.exports);
var t = n((g, e) => {
  const r = {
    veryLong: 1,
    long: 0.6,
    medium: 0.25,
    short: 0.15
  };
  e.exports = r;
});
export default t();
