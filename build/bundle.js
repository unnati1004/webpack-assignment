(() => {
  var e,
    t,
    r = {
      375: (e) => {
        e.exports = {
          mul: function (e, t) {
            return e * t;
          },
        };
      },
      236: (e, t, r) => {
        "use strict";
        e.exports = r.p + "5058a9b6603c1b9997ed.png";
      },
    },
    o = {};
  function n(e) {
    var t = o[e];
    if (void 0 !== t) return t.exports;
    var a = (o[e] = { id: e, exports: {} });
    return r[e](a, a.exports, n), a.exports;
  }
  (n.m = r),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => e + ".bundle.js"),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = "day1:"),
    (n.l = (r, o, a, i) => {
      if (e[r]) e[r].push(o);
      else {
        var c, u;
        if (void 0 !== a)
          for (
            var l = document.getElementsByTagName("script"), s = 0;
            s < l.length;
            s++
          ) {
            var d = l[s];
            if (
              d.getAttribute("src") == r ||
              d.getAttribute("data-webpack") == t + a
            ) {
              c = d;
              break;
            }
          }
        c ||
          ((u = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          n.nc && c.setAttribute("nonce", n.nc),
          c.setAttribute("data-webpack", t + a),
          (c.src = r)),
          (e[r] = [o]);
        var p = (t, o) => {
            (c.onerror = c.onload = null), clearTimeout(f);
            var n = e[r];
            if (
              (delete e[r],
              c.parentNode && c.parentNode.removeChild(c),
              n && n.forEach((e) => e(o)),
              t)
            )
              return t(o);
          },
          f = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: c }),
            12e4
          );
        (c.onerror = p.bind(null, c.onerror)),
          (c.onload = p.bind(null, c.onload)),
          u && document.head.appendChild(c);
      }
    }),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (() => {
      var e = { 179: 0 };
      n.f.j = (t, r) => {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) r.push(o[2]);
          else {
            var a = new Promise((r, n) => (o = e[t] = [r, n]));
            r.push((o[2] = a));
            var i = n.p + n.u(t),
              c = new Error();
            n.l(
              i,
              (r) => {
                if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var a = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (c.message =
                    "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = a),
                    (c.request = i),
                    o[1](c);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var o,
            a,
            [i, c, u] = r,
            l = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (o in c) n.o(c, o) && (n.m[o] = c[o]);
            u && u(n);
          }
          for (t && t(r); l < i.length; l++)
            (a = i[l]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        r = (self.webpackChunkday1 = self.webpackChunkday1 || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      "use strict";
      var e = n(236);
      const { mul: t } = n(375);
      console.log(t(2, 5)), n.e(548).then(n.bind(n, 548));
      const r = document.createElement("h1");
      (r.innerText = "Hello webpack"), r.classList.add("txt");
      const o = document.createElement("img");
      (o.src = e),
        document.querySelector(".box").append(r),
        document.querySelector(".images").append(o);
    })();
})();
