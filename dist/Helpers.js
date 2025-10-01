const l = {
  async fetchPostJson(t, e, s = {}) {
    const o = new Headers();
    o.append("Content-Type", "application/json");
    const n = Object.keys(s);
    n?.length > 0 && n.forEach((c) => {
      o.append(c, s[c]);
    });
    const r = {
      method: "POST",
      headers: o,
      body: JSON.stringify(e),
      redirect: "follow"
    };
    return (await fetch(t, r)).json();
  },
  async fetchGet(t, e) {
    const s = new Headers(e);
    return s.append("Content-Type", "application/json"), (await fetch(t, {
      headers: s,
      redirect: "follow"
    })).json();
  },
  time() {
    const t = /* @__PURE__ */ new Date(), e = t.getHours(), s = t.getMinutes();
    return `${e}:${s}`;
  },
  mysteryCaseToDisplay(t) {
    if (t)
      return t.includes("_") ? this.snakeCaseToDisplay(t) : this.camelCaseToDisplay(t);
  },
  camelCaseToDisplay(t) {
    const e = t.replace(/([A-Z])/g, " $1");
    return e.charAt(0).toUpperCase() + e.slice(1);
  },
  snakeCaseToDisplay(t) {
    let e = t.charAt(0).toUpperCase() + t.slice(1);
    for (; e.includes("_"); ) {
      const s = e.indexOf("_");
      e = e.slice(0, s) + " " + e.charAt(s + 1).toUpperCase() + e.slice(s + 2);
    }
    return e;
  },
  displayToSnakeCase(t) {
    return t.toLowerCase().replace(" ", "_");
  },
  async getFileFromURL(t, e) {
    const o = await (await fetch(t).then((n) => n).catch((n) => (console.log(t, n), null)))?.blob() || null;
    return o ? new File([o], e, { type: o.type }) : null;
  },
  copyToClipBoard(t, e = () => {
  }) {
    navigator.permissions.query({ name: "clipboard-write" }).then((o) => {
      o.state === "granted" || o.state === "prompt" ? navigator.clipboard.writeText(t).then(() => {
        e();
      }).catch(s) : s();
    }).catch(s);
    function s() {
      const o = document.createElement("textarea");
      o.value = t, o.style.top = "0", o.style.left = "0", o.style.position = "fixed", document.body.appendChild(o), o.focus(), o.select();
      try {
        document.execCommand("copy"), e();
      } catch (n) {
        console.error("Unable to copy to clipboard: ", n);
      }
      document.body.removeChild(o);
    }
  },
  timeStampToDate(t) {
    if (t) {
      const e = new Date(t);
      return e.getMonth() + 1 + "/" + e.getDate() + "/" + e.getFullYear();
    }
  },
  timeStampToTime(t) {
    const e = new Date(t), s = e.getHours().toString(), o = e.getMinutes().toString(), n = s.length === 2 ? s : "0" + s, r = o.length === 2 ? o : "0" + o;
    return `${n}:${r}`;
  },
  formatDate(t) {
    return t ? (t.slice(5, t.length) + "/" + t.slice(0, 4)).replace("-", "/") : "";
  },
  returnIndexWithinRange(t, e) {
    return t >= e ? t % e : t;
  },
  downloadJsonData(t, e) {
    const s = new Blob([t], { type: "application/json" }), o = window.URL.createObjectURL(s), n = document.createElement("a");
    n.setAttribute("href", o), n.setAttribute(
      "download",
      e.substring(e.length - 5) === ".json" ? e : `${e}.json`
    ), n.click();
  },
  openLinkInNewTab(t) {
    Object.assign(document.createElement("a"), {
      target: "_blank",
      rel: "noopener noreferrer",
      href: t
    }).click();
  },
  truncateString(t, e) {
    return e && t?.length > e ? t.slice(0, e) + "..." : t;
  },
  assessSubSectionCompletion(t) {
    const e = Object.keys(t);
    let s = 0;
    return e.forEach((o, n) => {
      t[o].Answer && s++;
    }), {
      total: e.length,
      completed: s
    };
  },
  removeCheckbox(t) {
    if (t)
      return t.replace("□ ", "").replace("□", "");
  },
  splitTextByCitations(t) {
    const e = /<co: (\S+)>(.*?)<\/co: [\d,>]+(?!,)/g;
    return Array.from(t.matchAll(e));
  },
  citationTextIntoArray(t) {
    const e = this.splitTextByCitations(t), s = [];
    let o = 0;
    for (let n = 0; n < e.length; n++) {
      s.push([t.slice(o, e[n].index), null]);
      const r = e[n][0]?.[e[n][0].length - 1] === "," && e[n][0]?.[e[n][0].length - 2] === ">" ? e[n][0].length - 1 : e[n][0].length;
      o = e[n].index + r, s.push([e[n][2], e[n][1].split(",").map((a) => parseInt(a) + 1)]);
    }
    return s.push([t.slice(o), null]), s;
  },
  splitTextByLinks(t) {
    const e = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
    return Array.from(t.matchAll(e));
  },
  faqTextIntoArray(t) {
    const e = this.splitTextByLinks(t), s = [];
    let o = 0;
    for (let n = 0; n < e.length; n++) {
      s.push([t.slice(o, e[n].index), null]);
      const r = e[n][0].length;
      o = e[n].index + r, s.push([e[n][1], e[n][2]]);
    }
    return s.push([t.slice(o), null]), s;
  }
};
export {
  l as default
};
