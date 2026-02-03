(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  33525,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = (e) => {};
  },
  98183,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return l;
      },
      searchParamsToUrlQuery: function () {
        return a;
      },
      urlQueryToSearchParams: function () {
        return s;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    function a(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e
          ? (t[r] = n)
          : Array.isArray(e)
          ? e.push(n)
          : (t[r] = [e, n]);
      }
      return t;
    }
    function i(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
        ? ""
        : String(e);
    }
    function s(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, i(e));
        else t.set(r, i(n));
      return t;
    }
    function l(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  95057,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      formatUrl: function () {
        return s;
      },
      formatWithValidation: function () {
        return u;
      },
      urlObjectKeys: function () {
        return l;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let a = e.r(90809)._(e.r(98183)),
      i = /https?|ftp|gopher|file/;
    function s(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        o = e.pathname || "",
        s = e.hash || "",
        l = e.query || "",
        u = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (u = t + e.host)
          : r &&
            ((u = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (u += ":" + e.port)),
        l && "object" == typeof l && (l = String(a.urlQueryToSearchParams(l)));
      let c = e.search || (l && `?${l}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || i.test(n)) && !1 !== u)
          ? ((u = "//" + (u || "")), o && "/" !== o[0] && (o = "/" + o))
          : u || (u = ""),
        s && "#" !== s[0] && (s = "#" + s),
        c && "?" !== c[0] && (c = "?" + c),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${n}${u}${o}${c}${s}`
      );
    }
    let l = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function u(e) {
      return s(e);
    }
  },
  18581,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(71645);
    function o(e, t) {
      let r = (0, n.useRef)(null),
        o = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = o.current;
            t && ((o.current = null), t());
          } else e && (r.current = a(e, n)), t && (o.current = a(t, n));
        },
        [e, t]
      );
    }
    function a(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  18967,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      DecodeError: function () {
        return g;
      },
      MiddlewareNotFoundError: function () {
        return j;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return y;
      },
      PageNotFoundError: function () {
        return x;
      },
      SP: function () {
        return h;
      },
      ST: function () {
        return b;
      },
      WEB_VITALS: function () {
        return a;
      },
      execOnce: function () {
        return i;
      },
      getDisplayName: function () {
        return d;
      },
      getLocationOrigin: function () {
        return u;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return l;
      },
      isResSent: function () {
        return f;
      },
      loadGetInitialProps: function () {
        return m;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return _;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let a = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function i(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      l = (e) => s.test(e);
    function u() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        t = u();
      return e.substring(t.length);
    }
    function d(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function f(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function m(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await m(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (r && f(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${d(
              e
            )}.getInitialProps()" should resolve to an object. But found "${n}" instead.`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 }
        );
      return n;
    }
    let h = "u" > typeof performance,
      b =
        h &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e]
        );
    class g extends Error {}
    class y extends Error {}
    class x extends Error {
      constructor(e) {
        super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`);
      }
    }
    class v extends Error {
      constructor(e, t) {
        super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`);
      }
    }
    class j extends Error {
      constructor() {
        super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module");
      }
    }
    function _(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  73668,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let n = e.r(18967),
      o = e.r(52817);
    function a(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, o.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  84508,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = (e) => {};
  },
  22016,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return g;
      },
      useLinkStatus: function () {
        return x;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let a = e.r(90809),
      i = e.r(43476),
      s = a._(e.r(71645)),
      l = e.r(95057),
      u = e.r(8372),
      c = e.r(18581),
      d = e.r(18967),
      f = e.r(5550);
    e.r(33525);
    let p = e.r(91949),
      m = e.r(73668),
      h = e.r(9396);
    function b(e) {
      return "string" == typeof e ? e : (0, l.formatUrl)(e);
    }
    function g(t) {
      let r,
        n,
        o,
        [a, l] = (0, s.useOptimistic)(p.IDLE_LINK_STATUS),
        g = (0, s.useRef)(null),
        {
          href: x,
          as: v,
          children: j,
          prefetch: _ = null,
          passHref: w,
          replace: k,
          shallow: E,
          scroll: S,
          onClick: N,
          onMouseEnter: P,
          onTouchStart: O,
          legacyBehavior: T = !1,
          onNavigate: $,
          ref: A,
          unstable_dynamicOnHover: C,
          ...L
        } = t;
      (r = j),
        T &&
          ("string" == typeof r || "number" == typeof r) &&
          (r = (0, i.jsx)("a", { children: r }));
      let R = s.default.useContext(u.AppRouterContext),
        M = !1 !== _,
        I = !1 !== _ && !0 === _ ? h.FetchStrategy.Full : h.FetchStrategy.PPR,
        { href: U, as: B } = s.default.useMemo(() => {
          let e = b(x);
          return { href: e, as: v ? b(v) : e };
        }, [x, v]);
      if (T) {
        if (r?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        n = s.default.Children.only(r);
      }
      let F = T ? n && "object" == typeof n && n.ref : A,
        D = s.default.useCallback(
          (e) => (
            null !== R &&
              (g.current = (0, p.mountLinkInstance)(e, U, R, I, M, l)),
            () => {
              g.current &&
                ((0, p.unmountLinkForCurrentNavigation)(g.current),
                (g.current = null)),
                (0, p.unmountPrefetchableInstance)(e);
            }
          ),
          [M, U, R, I, l]
        ),
        z = {
          ref: (0, c.useMergedRef)(D, F),
          onClick(t) {
            T || "function" != typeof N || N(t),
              T &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(t),
              !R ||
                t.defaultPrevented ||
                (function (t, r, n, o, a, i, l) {
                  if ("u" > typeof window) {
                    let u,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((u = t.currentTarget.getAttribute("target")) &&
                          "_self" !== u) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, m.isLocalURL)(r)) {
                      a && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), l)) {
                      let e = !1;
                      if (
                        (l({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: d } = e.r(99781);
                    s.default.startTransition(() => {
                      d(n || r, a ? "replace" : "push", i ?? !0, o.current);
                    });
                  }
                })(t, U, B, g, k, S, $);
          },
          onMouseEnter(e) {
            T || "function" != typeof P || P(e),
              T &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              R && M && (0, p.onNavigationIntent)(e.currentTarget, !0 === C);
          },
          onTouchStart: function (e) {
            T || "function" != typeof O || O(e),
              T &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              R && M && (0, p.onNavigationIntent)(e.currentTarget, !0 === C);
          },
        };
      return (
        (0, d.isAbsoluteUrl)(B)
          ? (z.href = B)
          : (T && !w && ("a" !== n.type || "href" in n.props)) ||
            (z.href = (0, f.addBasePath)(B)),
        (o = T
          ? s.default.cloneElement(n, z)
          : (0, i.jsx)("a", { ...L, ...z, children: r })),
        (0, i.jsx)(y.Provider, { value: a, children: o })
      );
    }
    e.r(84508);
    let y = (0, s.createContext)(p.IDLE_LINK_STATUS),
      x = () => (0, s.useContext)(y);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  79474,
  (e, t, r) => {
    "use strict";
    var n =
      e.r(
        71645
      ).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    r.c = function (e) {
      return n.H.useMemoCache(e);
    };
  },
  932,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(79474);
  },
  18566,
  (e, t, r) => {
    t.exports = e.r(76562);
  },
  13293,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(932),
      n = e.i(71645),
      o = e.i(22016),
      a = e.i(18566);
    function i() {
      let e,
        o,
        a,
        i,
        l,
        u,
        c,
        d,
        f,
        p,
        m,
        h = (0, r.c)(20),
        [b, g] = (0, n.useState)(!0);
      h[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = () => {
            let e = localStorage.getItem("theme"),
              t = window.matchMedia("(prefers-color-scheme: dark)").matches,
              r = e ? "dark" === e : t;
            g(r), document.documentElement.classList.toggle("dark", r);
          }),
          (o = []),
          (h[0] = e),
          (h[1] = o))
        : ((e = h[0]), (o = h[1])),
        (0, n.useEffect)(e, o),
        h[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = () => {
              g(s);
            }),
            (h[2] = a))
          : (a = h[2]);
      let y = a,
        x = b ? "Switch to light mode" : "Switch to dark mode",
        v = `absolute inset-0 h-4 w-4 stroke-current transition-all duration-300 ${
          b ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`;
      h[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, t.jsx)("circle", { cx: "12", cy: "12", r: "4" })),
          (l = (0, t.jsx)("path", {
            d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41",
          })),
          (h[3] = i),
          (h[4] = l))
        : ((i = h[3]), (l = h[4])),
        h[5] !== v
          ? ((u = (0, t.jsxs)("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: v,
              "aria-hidden": "true",
              children: [i, l],
            })),
            (h[5] = v),
            (h[6] = u))
          : (u = h[6]);
      let j = `absolute inset-0 h-4 w-4 stroke-current transition-all duration-300 ${
        b ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
      }`;
      h[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = (0, t.jsx)("path", {
            d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
          })),
          (h[7] = c))
        : (c = h[7]),
        h[8] !== j
          ? ((d = (0, t.jsx)("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: j,
              "aria-hidden": "true",
              children: c,
            })),
            (h[8] = j),
            (h[9] = d))
          : (d = h[9]),
        h[10] !== d || h[11] !== u
          ? ((f = (0, t.jsxs)("div", {
              className: "relative h-4 w-4",
              children: [u, d],
            })),
            (h[10] = d),
            (h[11] = u),
            (h[12] = f))
          : (f = h[12]);
      let _ = b ? "Dark" : "Light";
      return (
        h[13] !== _
          ? ((p = (0, t.jsx)("span", {
              className:
                "font-mono text-[10px] uppercase tracking-widest opacity-60 transition-opacity group-hover:opacity-100",
              children: _,
            })),
            (h[13] = _),
            (h[14] = p))
          : (p = h[14]),
        h[15] !== b || h[16] !== f || h[17] !== p || h[18] !== x
          ? ((m = (0, t.jsxs)("button", {
              type: "button",
              onClick: y,
              className:
                "group relative flex h-9 items-center gap-2 rounded-md border border-border/60 bg-card/50 px-3 text-muted-foreground transition-all hover:border-primary/30 hover:bg-card hover:text-foreground",
              "aria-label": x,
              "aria-pressed": b,
              children: [f, p],
            })),
            (h[15] = b),
            (h[16] = f),
            (h[17] = p),
            (h[18] = x),
            (h[19] = m))
          : (m = h[19]),
        m
      );
    }
    function s(e) {
      let t = !e;
      return (
        document.documentElement.classList.toggle("dark", t),
        localStorage.setItem("theme", t ? "dark" : "light"),
        t
      );
    }
    let l = [
      { href: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon", label: "Dextools", key: "01" },
      { href: "https://dexscreener.com/ethereum/0xcomingsoon", label: "Dexscreener", key: "02" },
      { href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon", label: "Uniswap", key: "03" },
    ];
    function u() {
      let e,
        s,
        u,
        d,
        f,
        p,
        m,
        h,
        b,
        g,
        y,
        x,
        v,
        j,
        _,
        w,
        k,
        E,
        S,
        N,
        P,
        O,
        T,
        $,
        A,
        C,
        L,
        R,
        M,
        I = (0, r.c)(57),
        U = (0, a.usePathname)(),
        [B, F] = (0, n.useState)(!1),
        [D, z] = (0, n.useState)(!1);
      I[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = () => {
            z(!0);
          }),
          (s = []),
          (I[0] = e),
          (I[1] = s))
        : ((e = I[0]), (s = I[1])),
        (0, n.useEffect)(e, s),
        I[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = () => F(!1)), (I[2] = u))
          : (u = I[2]);
      let K = u;
      I[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = () => {
            K();
          }),
          (I[3] = d))
        : (d = I[3]),
        I[4] !== U ? ((f = [U, K]), (I[4] = U), (I[5] = f)) : (f = I[5]),
        (0, n.useEffect)(d, f),
        I[6] !== B
          ? ((p = () => {
              if (!B) return;
              let e = (e) => {
                "Escape" === e.key && K();
              };
              return (
                document.addEventListener("keydown", e),
                () => document.removeEventListener("keydown", e)
              );
            }),
            (m = [B, K]),
            (I[6] = B),
            (I[7] = p),
            (I[8] = m))
          : ((p = I[7]), (m = I[8])),
        (0, n.useEffect)(p, m),
        I[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, t.jsx)("div", {
              className:
                "absolute inset-0 bg-gradient-to-r from-primary/[0.02] via-transparent to-primary/[0.02] dark:from-primary/[0.03] dark:to-primary/[0.03]",
            })),
            (I[9] = h))
          : (h = I[9]),
        I[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, t.jsx)("span", {
              className:
                "relative font-mono text-[10px] font-medium tracking-widest text-muted-foreground/60 transition-colors group-hover:text-primary",
              children: "//",
            })),
            (g = (0, t.jsx)("span", {
              className:
                "text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary",
              children: "FOMOLT",
            })),
            (I[10] = b),
            (I[11] = g))
          : ((b = I[10]), (g = I[11]));
      let W = `absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ${
        "/" === U ? "w-full" : "w-0 group-hover:w-full"
      }`;
      I[12] !== W
        ? ((y = (0, t.jsxs)(o.default, {
            href: "/",
            className: "group relative flex items-center gap-2",
            children: [b, g, (0, t.jsx)("span", { className: W })],
          })),
          (I[12] = W),
          (I[13] = y))
        : (y = I[13]),
        I[14] !== U
          ? ((x = l.map((e) => {
              let r = U === e.href;
              return (0, t.jsxs)(
                o.default,
                {
                  href: e.href,
                  className: `group relative flex items-center gap-2 rounded-md px-3 py-1.5 font-mono text-sm transition-all ${
                    r
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`,
                  children: [
                    (0, t.jsx)("span", {
                      className: `text-[10px] tabular-nums transition-colors ${
                        r
                          ? "text-primary"
                          : "text-muted-foreground/40 group-hover:text-primary/60"
                      }`,
                      children: e.key,
                    }),
                    (0, t.jsx)("span", {
                      className: "tracking-wide",
                      children: e.label,
                    }),
                    r &&
                      (0, t.jsx)("span", {
                        className:
                          "absolute inset-0 rounded-md bg-primary/[0.08] dark:bg-primary/10",
                      }),
                  ],
                },
                e.href
              );
            })),
            (I[14] = U),
            (I[15] = x))
          : (x = I[15]),
        I[16] !== x
          ? ((v = (0, t.jsx)("nav", {
              className: "hidden items-center gap-1 sm:flex",
              "aria-label": "Main navigation",
              children: x,
            })),
            (I[16] = x),
            (I[17] = v))
          : (v = I[17]),
        I[18] !== y || I[19] !== v
          ? ((j = (0, t.jsxs)("div", {
              className: "flex items-center gap-10",
              children: [y, v],
            })),
            (I[18] = y),
            (I[19] = v),
            (I[20] = j))
          : (j = I[20]),
        I[21] !== D
          ? ((_ =
              D &&
              (0, t.jsx)("div", {
                className: "hidden sm:block",
                children: (0, t.jsx)(i, {}),
              })),
            (I[21] = D),
            (I[22] = _))
          : (_ = I[22]),
        I[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = () => F(c)), (I[23] = w))
          : (w = I[23]);
      let V = B ? "Close menu" : "Open menu",
        q = `h-px w-3.5 bg-current transition-all duration-200 ${
          B ? "translate-y-[3px] rotate-45" : ""
        }`;
      I[24] !== q
        ? ((k = (0, t.jsx)("span", { className: q })), (I[24] = q), (I[25] = k))
        : (k = I[25]);
      let H = `h-px w-3.5 bg-current transition-all duration-200 ${
        B ? "-translate-y-[2px] -rotate-45" : ""
      }`;
      I[26] !== H
        ? ((E = (0, t.jsx)("span", { className: H })), (I[26] = H), (I[27] = E))
        : (E = I[27]),
        I[28] !== k || I[29] !== E
          ? ((S = (0, t.jsxs)("div", {
              className: "flex flex-col items-center justify-center gap-1",
              children: [k, E],
            })),
            (I[28] = k),
            (I[29] = E),
            (I[30] = S))
          : (S = I[30]),
        I[31] !== B || I[32] !== V || I[33] !== S
          ? ((N = (0, t.jsx)("button", {
              type: "button",
              onClick: w,
              className:
                "relative flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-card/50 text-muted-foreground transition-all hover:border-primary/30 hover:bg-card hover:text-foreground sm:hidden",
              "aria-label": V,
              "aria-expanded": B,
              "aria-controls": "mobile-menu",
              children: S,
            })),
            (I[31] = B),
            (I[32] = V),
            (I[33] = S),
            (I[34] = N))
          : (N = I[34]),
        I[35] !== _ || I[36] !== N
          ? ((P = (0, t.jsxs)("div", {
              className: "flex items-center gap-3",
              children: [_, N],
            })),
            (I[35] = _),
            (I[36] = N),
            (I[37] = P))
          : (P = I[37]),
        I[38] !== j || I[39] !== P
          ? ((O = (0, t.jsxs)("header", {
              className:
                "fixed top-0 left-0 right-0 z-50 h-14 border-b border-border/50 bg-background/90 backdrop-blur-md",
              children: [
                h,
                (0, t.jsxs)("div", {
                  className:
                    "relative mx-auto flex h-full max-w-4xl items-center justify-between px-4 sm:px-6",
                  children: [j, P],
                }),
              ],
            })),
            (I[38] = j),
            (I[39] = P),
            (I[40] = O))
          : (O = I[40]);
      let X = `fixed inset-0 z-40 bg-background/60 backdrop-blur-sm transition-opacity duration-200 sm:hidden ${
        B ? "opacity-100" : "pointer-events-none opacity-0"
      }`;
      I[41] !== X
        ? ((T = (0, t.jsx)("div", {
            className: X,
            onClick: K,
            "aria-hidden": "true",
          })),
          (I[41] = X),
          (I[42] = T))
        : (T = I[42]);
      let Q = `fixed right-4 left-4 top-16 z-50 overflow-hidden rounded-xl border border-border/60 bg-card/95 shadow-2xl backdrop-blur-xl transition-all duration-200 sm:hidden ${
        B
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0"
      }`;
      return (
        I[43] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = (0, t.jsx)("div", {
              className:
                "absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent",
            })),
            (I[43] = $))
          : ($ = I[43]),
        I[44] !== B || I[45] !== U
          ? ((A = l.map((e, r) => {
              let n = U === e.href;
              return (0, t.jsx)(
                "li",
                {
                  style: { animationDelay: `${50 * r}ms` },
                  className: B ? "animate-in fade-in slide-in-from-top-1" : "",
                  children: (0, t.jsxs)(o.default, {
                    href: e.href,
                    className: `group flex items-center gap-3 rounded-lg px-4 py-3 font-mono transition-all ${
                      n
                        ? "bg-primary/10 text-foreground"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }`,
                    children: [
                      (0, t.jsx)("span", {
                        className: `text-xs tabular-nums ${
                          n ? "text-primary" : "text-muted-foreground/50"
                        }`,
                        children: e.key,
                      }),
                      (0, t.jsx)("span", {
                        className: "flex-1 text-sm tracking-wide",
                        children: e.label,
                      }),
                      (0, t.jsx)("span", {
                        className: `h-1.5 w-1.5 rounded-full transition-colors ${
                          n ? "bg-primary" : "bg-muted-foreground/20"
                        }`,
                      }),
                    ],
                  }),
                },
                e.href
              );
            })),
            (I[44] = B),
            (I[45] = U),
            (I[46] = A))
          : (A = I[46]),
        I[47] !== A
          ? ((C = (0, t.jsx)("ul", {
              className: "relative flex flex-col p-2",
              children: A,
            })),
            (I[47] = A),
            (I[48] = C))
          : (C = I[48]),
        I[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = (0, t.jsx)("div", {
              className: "relative border-t border-border/40 p-3",
              children: (0, t.jsxs)("div", {
                className: "flex items-center justify-between px-1",
                children: [
                  (0, t.jsx)("span", {
                    className:
                      "font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50",
                    children: "Theme",
                  }),
                  (0, t.jsx)(i, {}),
                ],
              }),
            })),
            (I[49] = L))
          : (L = I[49]),
        I[50] !== Q || I[51] !== C
          ? ((R = (0, t.jsxs)("nav", {
              id: "mobile-menu",
              className: Q,
              "aria-label": "Mobile navigation",
              children: [$, C, L],
            })),
            (I[50] = Q),
            (I[51] = C),
            (I[52] = R))
          : (R = I[52]),
        I[53] !== O || I[54] !== T || I[55] !== R
          ? ((M = (0, t.jsxs)(t.Fragment, { children: [O, T, R] })),
            (I[53] = O),
            (I[54] = T),
            (I[55] = R),
            (I[56] = M))
          : (M = I[56]),
        M
      );
    }
    function c(e) {
      return !e;
    }
    e.s(["Header", () => u], 13293);
  },
  2355,
  (e) => {
    "use strict";
    var t = e.i(47167),
      r = e.i(71645),
      n = e.i(18566);
    function o() {
      return "u" > typeof window;
    }
    function a() {
      return "production";
    }
    function i() {
      return "development" === ((o() ? window.vam : a()) || "production");
    }
    function s(e) {
      return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`);
    }
    function l(e) {
      return (
        (0, r.useEffect)(() => {
          var t;
          e.beforeSend &&
            (null == (t = window.va) ||
              t.call(window, "beforeSend", e.beforeSend));
        }, [e.beforeSend]),
        (0, r.useEffect)(() => {
          !(function (e = { debug: !0 }) {
            var t;
            if (!o()) return;
            !(function (e = "auto") {
              if ("auto" === e) {
                window.vam = a();
                return;
              }
              window.vam = e;
            })(e.mode),
              window.va ||
                (window.va = function (...e) {
                  (window.vaq = window.vaq || []).push(e);
                }),
              e.beforeSend &&
                (null == (t = window.va) ||
                  t.call(window, "beforeSend", e.beforeSend));
            let r = e.scriptSrc
              ? e.scriptSrc
              : i()
              ? "https://va.vercel-scripts.com/v1/script.debug.js"
              : e.basePath
              ? `${e.basePath}/insights/script.js`
              : "/_vercel/insights/script.js";
            if (document.head.querySelector(`script[src*="${r}"]`)) return;
            let n = document.createElement("script");
            (n.src = r),
              (n.defer = !0),
              (n.dataset.sdkn =
                "@vercel/analytics" + (e.framework ? `/${e.framework}` : "")),
              (n.dataset.sdkv = "1.6.1"),
              e.disableAutoTrack && (n.dataset.disableAutoTrack = "1"),
              e.endpoint
                ? (n.dataset.endpoint = e.endpoint)
                : e.basePath && (n.dataset.endpoint = `${e.basePath}/insights`),
              e.dsn && (n.dataset.dsn = e.dsn),
              (n.onerror = () => {
                let e = i()
                  ? "Please check if any ad blockers are enabled and try again."
                  : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                console.log(
                  `[Vercel Web Analytics] Failed to load script from ${r}. ${e}`
                );
              }),
              i() && !1 === e.debug && (n.dataset.debug = "false"),
              document.head.appendChild(n);
          })({
            framework: e.framework || "react",
            basePath:
              e.basePath ??
              (function () {
                if (void 0 !== t.default && void 0 !== t.default.env)
                  return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
              })(),
            ...(void 0 !== e.route && { disableAutoTrack: !0 }),
            ...e,
          });
        }, []),
        (0, r.useEffect)(() => {
          e.route &&
            e.path &&
            (function ({ route: e, path: t }) {
              var r;
              null == (r = window.va) ||
                r.call(window, "pageview", { route: e, path: t });
            })({ route: e.route, path: e.path });
        }, [e.route, e.path]),
        null
      );
    }
    function u(e) {
      let o,
        a,
        i,
        { route: u, path: c } =
          ((o = (0, n.useParams)()),
          (a = (0, n.useSearchParams)()),
          (i = (0, n.usePathname)()),
          o
            ? {
                route: (function (e, t) {
                  if (!e || !t) return e;
                  let r = e;
                  try {
                    let e = Object.entries(t);
                    for (let [t, n] of e)
                      if (!Array.isArray(n)) {
                        let e = s(n);
                        e.test(r) && (r = r.replace(e, `/[${t}]`));
                      }
                    for (let [t, n] of e)
                      if (Array.isArray(n)) {
                        let e = s(n.join("/"));
                        e.test(r) && (r = r.replace(e, `/[...${t}]`));
                      }
                    return r;
                  } catch (t) {
                    return e;
                  }
                })(
                  i,
                  Object.keys(o).length ? o : Object.fromEntries(a.entries())
                ),
                path: i,
              }
            : { route: null, path: i });
      return r.default.createElement(l, {
        path: c,
        route: u,
        ...e,
        basePath: (function () {
          if (void 0 !== t.default && void 0 !== t.default.env)
            return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
        })(),
        framework: "next",
      });
    }
    function c(e) {
      return r.default.createElement(
        r.Suspense,
        { fallback: null },
        r.default.createElement(u, { ...e })
      );
    }
    e.s(["Analytics", () => c]);
  },
]);
