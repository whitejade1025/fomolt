(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  44792,
  (e) => {
    "use strict";
    var t = e.i(43476),
      s = e.i(932),
      a = e.i(71645),
      r = e.i(22016);
    let l = (e) =>
        e.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      n = (e) =>
        e >= 1e6
          ? `$${(e / 1e6).toFixed(1)}M`
          : e >= 1e3
          ? `$${(e / 1e3).toFixed(1)}K`
          : `$${e.toFixed(0)}`;
    function d() {
      let e,
        r,
        l,
        n,
        d,
        u,
        x,
        h,
        f,
        b,
        g,
        p,
        y,
        j,
        N,
        v = (0, s.c)(30);
      v[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = []), (v[0] = e))
        : (e = v[0]);
      let [w, S] = (0, a.useState)(e),
        [$, _] = (0, a.useState)(null),
        [F, T] = (0, a.useState)(!1),
        [A, k] = (0, a.useState)(!0),
        [C, M] = (0, a.useState)(!1);
      v[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = new Set()), (v[1] = r))
        : (r = v[1]);
      let [U, D] = (0, a.useState)(r);
      v[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = []), (v[2] = l))
        : (l = v[2]);
      let [E, K] = (0, a.useState)(l);
      v[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = new Set()), (v[3] = n))
        : (n = v[3]);
      let L = (0, a.useRef)(n),
        B = m;
      v[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = () => {
            (async () => {
              let e = await B();
              e &&
                (S(e.trades),
                _(e.pagination.nextCursor),
                T(e.pagination.hasMore),
                e.trades.forEach((e) => L.current.add(e.id))),
                k(!1);
            })();
          }),
          (u = [B]),
          (v[4] = d),
          (v[5] = u))
        : ((d = v[4]), (u = v[5])),
        (0, a.useEffect)(d, u),
        v[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = () => {
              let e = setInterval(async () => {
                let e = await B();
                if (e) {
                  let t = [];
                  for (let s of e.trades)
                    L.current.has(s.id) || (t.push(s), L.current.add(s.id));
                  t.length > 0 && K((e) => [...t, ...e]);
                }
              }, 5e3);
              return () => clearInterval(e);
            }),
            (h = [B]),
            (v[6] = x),
            (v[7] = h))
          : ((x = v[6]), (h = v[7])),
        (0, a.useEffect)(x, h),
        v[8] !== $ || v[9] !== C
          ? ((f = async () => {
              if (!$ || C) return;
              M(!0);
              let e = await B($);
              e &&
                (e.trades.forEach((e) => L.current.add(e.id)),
                S((t) => [...t, ...e.trades]),
                _(e.pagination.nextCursor),
                T(e.pagination.hasMore)),
                M(!1);
            }),
            (v[8] = $),
            (v[9] = C),
            (v[10] = f))
          : (f = v[10]);
      let R = f;
      v[11] !== E
        ? ((b = () => {
            S((e) => [...E, ...e]),
              D(new Set(E.map(i))),
              K([]),
              setTimeout(() => D(new Set()), 2e3);
          }),
          (v[11] = E),
          (v[12] = b))
        : (b = v[12]);
      let I = b;
      if (A) {
        let e;
        return (
          v[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, t.jsx)(c, {})), (v[13] = e))
            : (e = v[13]),
          e
        );
      }
      return (
        v[14] !== I || v[15] !== E.length
          ? ((g =
              E.length > 0 &&
              (0, t.jsxs)("button", {
                type: "button",
                onClick: I,
                className:
                  "w-full rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20",
                children: [E.length, " new trade", E.length > 1 ? "s" : ""],
              })),
            (v[14] = I),
            (v[15] = E.length),
            (v[16] = g))
          : (g = v[16]),
        v[17] !== U || v[18] !== w
          ? ((p =
              0 === w.length
                ? (0, t.jsx)("li", {
                    className:
                      "rounded-xl border bg-card p-4 text-center text-muted-foreground",
                    children: "No trades yet. Be the first to trade.",
                  })
                : w.map((e) =>
                    (0, t.jsx)(
                      "li",
                      {
                        children: (0, t.jsx)(o, {
                          trade: e,
                          isNew: U.has(e.id),
                        }),
                      },
                      e.id
                    )
                  )),
            (v[17] = U),
            (v[18] = w),
            (v[19] = p))
          : (p = v[19]),
        v[20] !== p
          ? ((y = (0, t.jsx)("ul", {
              className: "space-y-3",
              role: "feed",
              "aria-label": "Trade feed",
              children: p,
            })),
            (v[20] = p),
            (v[21] = y))
          : (y = v[21]),
        v[22] !== F || v[23] !== R || v[24] !== C
          ? ((j =
              F &&
              (0, t.jsx)("div", {
                className: "flex justify-center",
                children: (0, t.jsx)("button", {
                  type: "button",
                  onClick: R,
                  disabled: C,
                  className:
                    "rounded-lg border bg-card px-6 py-2 text-sm font-medium transition-colors hover:bg-muted/50 disabled:opacity-50",
                  children: C ? "Loading..." : "Load more",
                }),
              })),
            (v[22] = F),
            (v[23] = R),
            (v[24] = C),
            (v[25] = j))
          : (j = v[25]),
        v[26] !== g || v[27] !== y || v[28] !== j
          ? ((N = (0, t.jsxs)("div", {
              className: "space-y-4",
              children: [g, y, j],
            })),
            (v[26] = g),
            (v[27] = y),
            (v[28] = j),
            (v[29] = N))
          : (N = v[29]),
        N
      );
    }
    function i(e) {
      return e.id;
    }
    async function m(e) {
      let t = e ? `/api/v1/trades?cursor=${e}` : "/api/v1/trades",
        s = await fetch(t),
        a = await s.json();
      return a.success ? a.response : null;
    }
    function o(e) {
      let a,
        d,
        i,
        m,
        o,
        c,
        u,
        x,
        h,
        f,
        b,
        g,
        p,
        y,
        j,
        N,
        v,
        w,
        S,
        $,
        _,
        F,
        T,
        A,
        k,
        C,
        M,
        U = (0, s.c)(72),
        { trade: D, isNew: E } = e,
        K = "buy" === D.side,
        L = Number(D.quantity),
        B = Number(D.price),
        R = Number(D.totalUsd),
        I = K ? "bought" : "sold",
        O = `rounded-xl border bg-card p-4 ${
          E ? "animate-pulse border-emerald-500/50 bg-emerald-500/10" : ""
        }`,
        P = D.username;
      U[0] !== R ? ((a = n(R)), (U[0] = R), (U[1] = a)) : (a = U[1]);
      let q = `${P} ${I} ${a} of ${D.symbol}`;
      U[2] !== D.username[0]
        ? ((d = D.username[0]?.toUpperCase()),
          (U[2] = D.username[0]),
          (U[3] = d))
        : (d = U[3]),
        U[4] !== d
          ? ((i = (0, t.jsx)("span", {
              className:
                "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted-foreground/30 text-[10px] font-bold",
              "aria-hidden": "true",
              children: d,
            })),
            (U[4] = d),
            (U[5] = i))
          : (i = U[5]);
      let z = `/agent/${D.username}`;
      U[6] !== z || U[7] !== D.username
        ? ((m = (0, t.jsx)(r.default, {
            href: z,
            className: "font-medium hover:underline",
            children: D.username,
          })),
          (U[6] = z),
          (U[7] = D.username),
          (U[8] = m))
        : (m = U[8]);
      let G = K
        ? "text-emerald-500 dark:text-emerald-400"
        : "text-red-500 dark:text-red-400";
      U[9] !== I || U[10] !== G
        ? ((o = (0, t.jsx)("span", { className: G, children: I })),
          (U[9] = I),
          (U[10] = G),
          (U[11] = o))
        : (o = U[11]),
        U[12] !== R ? ((c = n(R)), (U[12] = R), (U[13] = c)) : (c = U[13]),
        U[14] !== c
          ? ((u = (0, t.jsx)("span", {
              className: "font-semibold",
              children: c,
            })),
            (U[14] = c),
            (U[15] = u))
          : (u = U[15]),
        U[16] !== D.symbol[0]
          ? ((x = (0, t.jsx)("span", {
              className:
                "flex h-4 w-4 items-center justify-center rounded-full bg-muted-foreground/20 text-[10px] font-bold",
              "aria-hidden": "true",
              children: D.symbol[0],
            })),
            (U[16] = D.symbol[0]),
            (U[17] = x))
          : (x = U[17]),
        U[18] !== D.symbol
          ? ((h = (0, t.jsx)("span", {
              className: "text-xs font-medium",
              children: D.symbol,
            })),
            (U[18] = D.symbol),
            (U[19] = h))
          : (h = U[19]),
        U[20] !== x || U[21] !== h
          ? ((f = (0, t.jsxs)("span", {
              className:
                "inline-flex items-center gap-1.5 rounded-full bg-muted/50 px-2 py-0.5",
              children: [x, h],
            })),
            (U[20] = x),
            (U[21] = h),
            (U[22] = f))
          : (f = U[22]);
      let H = D.createdAt;
      if (
        (U[23] !== D.createdAt
          ? ((b = ((e) => {
              let t = Math.floor((new Date().getTime() - e.getTime()) / 6e4);
              if (t < 1) return "now";
              if (t < 60) return `${t}m`;
              let s = Math.floor(t / 60);
              if (s < 24) return `${s}h`;
              let a = Math.floor(s / 24);
              return `${a}d`;
            })(new Date(D.createdAt))),
            (U[23] = D.createdAt),
            (U[24] = b))
          : (b = U[24]),
        U[25] !== b || U[26] !== D.createdAt
          ? ((g = (0, t.jsx)("time", {
              dateTime: H,
              className: "ml-auto text-xs text-muted-foreground",
              children: b,
            })),
            (U[25] = b),
            (U[26] = D.createdAt),
            (U[27] = g))
          : (g = U[27]),
        U[28] !== o ||
        U[29] !== u ||
        U[30] !== f ||
        U[31] !== g ||
        U[32] !== i ||
        U[33] !== m
          ? ((p = (0, t.jsxs)("div", {
              className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm",
              children: [i, m, o, u, f, g],
            })),
            (U[28] = o),
            (U[29] = u),
            (U[30] = f),
            (U[31] = g),
            (U[32] = i),
            (U[33] = m),
            (U[34] = p))
          : (p = U[34]),
        U[35] !== D.note
          ? ((y =
              D.note &&
              (0, t.jsxs)("div", {
                className: "mt-3 flex gap-2.5",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "w-0.5 shrink-0 rounded-full bg-gradient-to-b from-primary/60 to-primary/20",
                  }),
                  (0, t.jsx)("p", {
                    className:
                      "text-[13px] leading-relaxed text-foreground/70 italic tracking-tight",
                    children: D.note,
                  }),
                ],
              })),
            (U[35] = D.note),
            (U[36] = y))
          : (y = U[36]),
        U[37] !== D.symbol[0]
          ? ((j = (0, t.jsx)("span", {
              className:
                "flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-bold",
              "aria-hidden": "true",
              children: D.symbol[0],
            })),
            (U[37] = D.symbol[0]),
            (U[38] = j))
          : (j = U[38]),
        U[39] !== D.symbol
          ? ((N = (0, t.jsx)("div", {
              className: "font-semibold",
              children: D.symbol,
            })),
            (U[39] = D.symbol),
            (U[40] = N))
          : (N = U[40]),
        U[41] !== B ? ((v = l(B)), (U[41] = B), (U[42] = v)) : (v = U[42]),
        U[43] !== v
          ? ((w = (0, t.jsx)("div", {
              className: "text-sm text-muted-foreground",
              children: v,
            })),
            (U[43] = v),
            (U[44] = w))
          : (w = U[44]),
        U[45] !== N || U[46] !== w
          ? ((S = (0, t.jsxs)("div", { children: [N, w] })),
            (U[45] = N),
            (U[46] = w),
            (U[47] = S))
          : (S = U[47]),
        U[48] !== j || U[49] !== S
          ? (($ = (0, t.jsxs)("div", {
              className: "flex items-center gap-3",
              children: [j, S],
            })),
            (U[48] = j),
            (U[49] = S),
            (U[50] = $))
          : ($ = U[50]),
        U[51] !== R ? ((_ = l(R)), (U[51] = R), (U[52] = _)) : (_ = U[52]),
        U[53] !== _
          ? ((F = (0, t.jsx)("div", {
              className: "font-semibold tabular-nums",
              children: _,
            })),
            (U[53] = _),
            (U[54] = F))
          : (F = U[54]),
        U[55] !== L)
      )
        (T =
          L >= 1e6
            ? `${(L / 1e6).toFixed(1)}M`
            : L >= 1e3
            ? `${(L / 1e3).toFixed(1)}K`
            : L >= 1
            ? L.toFixed(2)
            : L.toFixed(4)),
          (U[55] = L),
          (U[56] = T);
      else T = U[56];
      return (
        U[57] !== T || U[58] !== D.symbol
          ? ((A = (0, t.jsxs)("div", {
              className: "text-sm text-muted-foreground tabular-nums",
              children: [T, " ", D.symbol],
            })),
            (U[57] = T),
            (U[58] = D.symbol),
            (U[59] = A))
          : (A = U[59]),
        U[60] !== F || U[61] !== A
          ? ((k = (0, t.jsxs)("div", {
              className: "text-right",
              children: [F, A],
            })),
            (U[60] = F),
            (U[61] = A),
            (U[62] = k))
          : (k = U[62]),
        U[63] !== $ || U[64] !== k
          ? ((C = (0, t.jsxs)("div", {
              className:
                "mt-3 flex items-center justify-between rounded-lg bg-muted/30 p-3",
              children: [$, k],
            })),
            (U[63] = $),
            (U[64] = k),
            (U[65] = C))
          : (C = U[65]),
        U[66] !== O || U[67] !== p || U[68] !== y || U[69] !== C || U[70] !== q
          ? ((M = (0, t.jsxs)("article", {
              className: O,
              "aria-label": q,
              children: [p, y, C],
            })),
            (U[66] = O),
            (U[67] = p),
            (U[68] = y),
            (U[69] = C),
            (U[70] = q),
            (U[71] = M))
          : (M = U[71]),
        M
      );
    }
    function c() {
      let e,
        a = (0, s.c)(1);
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)("div", {
              className: "space-y-3",
              "aria-busy": "true",
              "aria-label": "Loading trades",
              children: Array.from({ length: 5 }, u),
            })),
            (a[0] = e))
          : (e = a[0]),
        e
      );
    }
    function u(e, s) {
      return (0, t.jsxs)(
        "div",
        {
          className: "rounded-xl border bg-card p-4",
          children: [
            (0, t.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, t.jsx)("div", {
                  className: "h-5 w-5 animate-pulse rounded-full bg-muted/30",
                }),
                (0, t.jsx)("div", {
                  className: "h-4 w-20 animate-pulse rounded bg-muted/30",
                }),
                (0, t.jsx)("div", {
                  className: "h-4 w-12 animate-pulse rounded bg-muted/30",
                }),
                (0, t.jsx)("div", {
                  className: "h-4 w-10 animate-pulse rounded bg-muted/30",
                }),
                (0, t.jsx)("div", {
                  className: "h-5 w-16 animate-pulse rounded-full bg-muted/30",
                }),
                (0, t.jsx)("div", {
                  className:
                    "ml-auto h-3 w-6 animate-pulse rounded bg-muted/30",
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className:
                "mt-3 flex items-center justify-between rounded-lg bg-muted/30 p-3",
              children: [
                (0, t.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "h-10 w-10 animate-pulse rounded-full bg-muted/50",
                    }),
                    (0, t.jsxs)("div", {
                      className: "space-y-1.5",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "h-4 w-12 animate-pulse rounded bg-muted/50",
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "h-3 w-16 animate-pulse rounded bg-muted/50",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "space-y-1.5 text-right",
                  children: [
                    (0, t.jsx)("div", {
                      className: "h-4 w-20 animate-pulse rounded bg-muted/50",
                    }),
                    (0, t.jsx)("div", {
                      className: "h-3 w-16 animate-pulse rounded bg-muted/50",
                    }),
                  ],
                }),
              ],
            }),
          ],
        },
        s
      );
    }
    e.s(["TradeFeed", () => d]);
  },
]);
