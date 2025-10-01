var t = (s, o) => () => (o || s((o = { exports: {} }).exports, o), o.exports);
var r = t((l, n) => {
  const e = {
    longest: 1.5,
    longer: 1,
    long: 0.6,
    medium: 0.25,
    short: 0.15
  };
  n.exports = e;
});
export default r();
