"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [117], {
        49117: function(e, t, n) {
            let r, o;
            n.d(t, {
                V: function() {
                    return eT
                }
            });
            var l, a, i, u, s, c, d, f = n(67294),
                p = n.t(f, 2),
                m = n(32984),
                v = n(12351),
                g = n(23784),
                h = n(61363),
                E = n(64103),
                w = n(19946),
                T = n(82180),
                b = ((l = b || {})[l.None = 1] = "None", l[l.Focusable = 2] = "Focusable", l[l.Hidden = 4] = "Hidden", l);
            let y = (0, v.yV)(function(e, t) {
                let {
                    features: n = 1,
                    ...r
                } = e, o = {
                    ref: t,
                    "aria-hidden": (2 & n) == 2 || void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...(4 & n) == 4 && (2 & n) != 2 && {
                            display: "none"
                        }
                    }
                };
                return (0, v.sY)({
                    ourProps: o,
                    theirProps: r,
                    slot: {},
                    defaultTag: "div",
                    name: "Hidden"
                })
            });
            var C = n(84575),
                P = n(73781),
                L = n(7815),
                M = ((a = M || {})[a.Forwards = 0] = "Forwards", a[a.Backwards = 1] = "Backwards", a),
                S = n(14879),
                D = n(51074),
                R = n(3855);

            function O(e, t, n, r) {
                let o = (0, R.E)(n);
                (0, f.useEffect)(() => {
                    function n(e) {
                        o.current(e)
                    }
                    return (e = null != e ? e : window).addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
                }, [e, t, r])
            }
            var k = n(81021);

            function A(e, t) {
                let n = (0, f.useRef)([]),
                    r = (0, P.z)(e);
                (0, f.useEffect)(() => {
                    let e = [...n.current];
                    for (let [o, l] of t.entries())
                        if (n.current[o] !== l) {
                            let o = r(t, e);
                            return n.current = t, o
                        }
                }, [r, ...t])
            }
            var F = n(94192);

            function x(e) {
                let t = (0, P.z)(e),
                    n = (0, f.useRef)(!1);
                (0, f.useEffect)(() => (n.current = !1, () => {
                    n.current = !0, (0, k.Y)(() => {
                        n.current && t()
                    })
                }), [t])
            }

            function H(e) {
                if (!e) return new Set;
                if ("function" == typeof e) return new Set(e());
                let t = new Set;
                for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
                return t
            }
            var N = ((i = N || {})[i.None = 1] = "None", i[i.InitialFocus = 2] = "InitialFocus", i[i.TabLock = 4] = "TabLock", i[i.FocusLock = 8] = "FocusLock", i[i.RestoreFocus = 16] = "RestoreFocus", i[i.All = 30] = "All", i);
            let Y = Object.assign((0, v.yV)(function(e, t) {
                    let n, r = (0, f.useRef)(null),
                        o = (0, g.T)(r, t),
                        {
                            initialFocus: l,
                            containers: a,
                            features: i = 30,
                            ...u
                        } = e;
                    (0, T.H)() || (i = 1);
                    let s = (0, D.i)(r);
                    ! function({
                        ownerDocument: e
                    }, t) {
                        let n = function(e = !0) {
                            let t = (0, f.useRef)(V.slice());
                            return A(([e], [n]) => {
                                !0 === n && !1 === e && (0, k.Y)(() => {
                                    t.current.splice(0)
                                }), !1 === n && !0 === e && (t.current = V.slice())
                            }, [e, V, t]), (0, P.z)(() => {
                                var e;
                                return null != (e = t.current.find(e => null != e && e.isConnected)) ? e : null
                            })
                        }(t);
                        A(() => {
                            t || (null == e ? void 0 : e.activeElement) === (null == e ? void 0 : e.body) && (0, C.C5)(n())
                        }, [t]), x(() => {
                            t && (0, C.C5)(n())
                        })
                    }({
                        ownerDocument: s
                    }, !!(16 & i));
                    let c = function({
                        ownerDocument: e,
                        container: t,
                        initialFocus: n
                    }, r) {
                        let o = (0, f.useRef)(null),
                            l = (0, S.t)();
                        return A(() => {
                            if (!r) return;
                            let a = t.current;
                            a && (0, k.Y)(() => {
                                if (!l.current) return;
                                let t = null == e ? void 0 : e.activeElement;
                                if (null != n && n.current) {
                                    if ((null == n ? void 0 : n.current) === t) {
                                        o.current = t;
                                        return
                                    }
                                } else if (a.contains(t)) {
                                    o.current = t;
                                    return
                                }
                                null != n && n.current ? (0, C.C5)(n.current) : (0, C.jA)(a, C.TO.First) === C.fE.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.current = null == e ? void 0 : e.activeElement
                            })
                        }, [r]), o
                    }({
                        ownerDocument: s,
                        container: r,
                        initialFocus: l
                    }, !!(2 & i));
                    ! function({
                        ownerDocument: e,
                        container: t,
                        containers: n,
                        previousActiveElement: r
                    }, o) {
                        let l = (0, S.t)();
                        O(null == e ? void 0 : e.defaultView, "focus", e => {
                            if (!o || !l.current) return;
                            let a = H(n);
                            t.current instanceof HTMLElement && a.add(t.current);
                            let i = r.current;
                            if (!i) return;
                            let u = e.target;
                            u && u instanceof HTMLElement ? z(a, u) ? (r.current = u, (0, C.C5)(u)) : (e.preventDefault(), e.stopPropagation(), (0, C.C5)(i)) : (0, C.C5)(r.current)
                        }, !0)
                    }({
                        ownerDocument: s,
                        container: r,
                        containers: a,
                        previousActiveElement: c
                    }, !!(8 & i));
                    let d = (n = (0, f.useRef)(0), (0, L.s)("keydown", e => {
                            "Tab" === e.key && (n.current = e.shiftKey ? 1 : 0)
                        }, !0), n),
                        p = (0, P.z)(e => {
                            let t = r.current;
                            t && (0, m.E)(d.current, {
                                [M.Forwards]: () => {
                                    (0, C.jA)(t, C.TO.First, {
                                        skipElements: [e.relatedTarget]
                                    })
                                },
                                [M.Backwards]: () => {
                                    (0, C.jA)(t, C.TO.Last, {
                                        skipElements: [e.relatedTarget]
                                    })
                                }
                            })
                        }),
                        h = (0, F.G)(),
                        E = (0, f.useRef)(!1);
                    return f.createElement(f.Fragment, null, !!(4 & i) && f.createElement(y, {
                        as: "button",
                        type: "button",
                        "data-headlessui-focus-guard": !0,
                        onFocus: p,
                        features: b.Focusable
                    }), (0, v.sY)({
                        ourProps: {
                            ref: o,
                            onKeyDown(e) {
                                "Tab" == e.key && (E.current = !0, h.requestAnimationFrame(() => {
                                    E.current = !1
                                }))
                            },
                            onBlur(e) {
                                let t = H(a);
                                r.current instanceof HTMLElement && t.add(r.current);
                                let n = e.relatedTarget;
                                n instanceof HTMLElement && "true" !== n.dataset.headlessuiFocusGuard && (z(t, n) || (E.current ? (0, C.jA)(r.current, (0, m.E)(d.current, {
                                    [M.Forwards]: () => C.TO.Next,
                                    [M.Backwards]: () => C.TO.Previous
                                }) | C.TO.WrapAround, {
                                    relativeTo: e.target
                                }) : e.target instanceof HTMLElement && (0, C.C5)(e.target)))
                            }
                        },
                        theirProps: u,
                        defaultTag: "div",
                        name: "FocusTrap"
                    }), !!(4 & i) && f.createElement(y, {
                        as: "button",
                        type: "button",
                        "data-headlessui-focus-guard": !0,
                        onFocus: p,
                        features: b.Focusable
                    }))
                }), {
                    features: N
                }),
                V = [];

            function z(e, t) {
                for (let n of e)
                    if (n.contains(t)) return !0;
                return !1
            }! function(e) {
                function t() {
                    "loading" !== document.readyState && (e(), document.removeEventListener("DOMContentLoaded", t))
                }
                "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("DOMContentLoaded", t), t())
            }(() => {
                function e(e) {
                    e.target instanceof HTMLElement && e.target !== document.body && V[0] !== e.target && (V.unshift(e.target), (V = V.filter(e => null != e && e.isConnected)).splice(10))
                }
                window.addEventListener("click", e, {
                    capture: !0
                }), window.addEventListener("mousedown", e, {
                    capture: !0
                }), window.addEventListener("focus", e, {
                    capture: !0
                }), document.body.addEventListener("click", e, {
                    capture: !0
                }), document.body.addEventListener("mousedown", e, {
                    capture: !0
                }), document.body.addEventListener("focus", e, {
                    capture: !0
                })
            });
            var I = n(73935),
                B = n(16723);
            let $ = (0, f.createContext)(!1);

            function j(e) {
                return f.createElement($.Provider, {
                    value: e.force
                }, e.children)
            }
            var W = n(77896);
            let _ = f.Fragment,
                q = f.Fragment,
                G = (0, f.createContext)(null),
                U = (0, f.createContext)(null),
                Z = Object.assign((0, v.yV)(function(e, t) {
                    let n = (0, f.useRef)(null),
                        r = (0, g.T)((0, g.h)(e => {
                            n.current = e
                        }), t),
                        o = (0, D.i)(n),
                        l = function(e) {
                            let t = (0, f.useContext)($),
                                n = (0, f.useContext)(G),
                                r = (0, D.i)(e),
                                [o, l] = (0, f.useState)(() => {
                                    if (!t && null !== n || W.O.isServer) return null;
                                    let e = null == r ? void 0 : r.getElementById("headlessui-portal-root");
                                    if (e) return e;
                                    if (null === r) return null;
                                    let o = r.createElement("div");
                                    return o.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(o)
                                });
                            return (0, f.useEffect)(() => {
                                null !== o && (null != r && r.body.contains(o) || null == r || r.body.appendChild(o))
                            }, [o, r]), (0, f.useEffect)(() => {
                                t || null !== n && l(n.current)
                            }, [n, l, t]), o
                        }(n),
                        [a] = (0, f.useState)(() => {
                            var e;
                            return W.O.isServer ? null : null != (e = null == o ? void 0 : o.createElement("div")) ? e : null
                        }),
                        i = (0, f.useContext)(U),
                        u = (0, T.H)();
                    return (0, B.e)(() => {
                        !l || !a || l.contains(a) || (a.setAttribute("data-headlessui-portal", ""), l.appendChild(a))
                    }, [l, a]), (0, B.e)(() => {
                        if (a && i) return i.register(a)
                    }, [i, a]), x(() => {
                        var e;
                        l && a && (a instanceof Node && l.contains(a) && l.removeChild(a), l.childNodes.length <= 0 && (null == (e = l.parentElement) || e.removeChild(l)))
                    }), u && l && a ? (0, I.createPortal)((0, v.sY)({
                        ourProps: {
                            ref: r
                        },
                        theirProps: e,
                        defaultTag: _,
                        name: "Portal"
                    }), a) : null
                }), {
                    Group: (0, v.yV)(function(e, t) {
                        let {
                            target: n,
                            ...r
                        } = e, o = {
                            ref: (0, g.T)(t)
                        };
                        return f.createElement(G.Provider, {
                            value: n
                        }, (0, v.sY)({
                            ourProps: o,
                            theirProps: r,
                            defaultTag: q,
                            name: "Popover.Group"
                        }))
                    })
                }),
                K = (0, f.createContext)(null),
                J = Object.assign((0, v.yV)(function(e, t) {
                    let n = (0, w.M)(),
                        {
                            id: r = `headlessui-description-${n}`,
                            ...o
                        } = e,
                        l = function e() {
                            let t = (0, f.useContext)(K);
                            if (null === t) {
                                let t = Error("You used a <Description /> component, but it is not inside a relevant parent.");
                                throw Error.captureStackTrace && Error.captureStackTrace(t, e), t
                            }
                            return t
                        }(),
                        a = (0, g.T)(t);
                    (0, B.e)(() => l.register(r), [r, l.register]);
                    let i = {
                        ref: a,
                        ...l.props,
                        id: r
                    };
                    return (0, v.sY)({
                        ourProps: i,
                        theirProps: o,
                        slot: l.slot || {},
                        defaultTag: "p",
                        name: l.name || "Description"
                    })
                }), {});
            var Q = n(16567);
            let X = (0, f.createContext)(() => {});
            X.displayName = "StackContext";
            var ee = ((u = ee || {})[u.Add = 0] = "Add", u[u.Remove = 1] = "Remove", u);

            function et({
                children: e,
                onUpdate: t,
                type: n,
                element: r,
                enabled: o
            }) {
                let l = (0, f.useContext)(X),
                    a = (0, P.z)((...e) => {
                        null == t || t(...e), l(...e)
                    });
                return (0, B.e)(() => {
                    let e = void 0 === o || !0 === o;
                    return e && a(0, n, r), () => {
                        e && a(1, n, r)
                    }
                }, [a, n, r, o]), f.createElement(X.Provider, {
                    value: a
                }, e)
            }
            var en = n(39650);
            let {
                useState: er,
                useEffect: eo,
                useLayoutEffect: el,
                useDebugValue: ea
            } = p;
            "undefined" != typeof window && void 0 !== window.document && window.document.createElement;
            let ei = p.useSyncExternalStore;
            var eu = n(9362);
            let es = (s = {
                PUSH(e, t) {
                    var n;
                    let r = null != (n = this.get(e)) ? n : {
                        doc: e,
                        count: 0,
                        d: (0, eu.k)(),
                        meta: new Set
                    };
                    return r.count++, r.meta.add(t), this.set(e, r), this
                },
                POP(e, t) {
                    let n = this.get(e);
                    return n && (n.count--, n.meta.delete(t)), this
                },
                SCROLL_PREVENT({
                    doc: e,
                    d: t,
                    meta: n
                }) {
                    let r, o;
                    let l = {
                            doc: e,
                            d: t,
                            meta: function(e) {
                                let t = {};
                                for (let n of e) Object.assign(t, n(t));
                                return t
                            }(n)
                        },
                        a = [/iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0 ? {
                            before() {
                                r = window.pageYOffset
                            },
                            after({
                                doc: e,
                                d: t,
                                meta: n
                            }) {
                                function o(e) {
                                    return n.containers.flatMap(e => e()).some(t => t.contains(e))
                                }
                                t.style(e.body, "marginTop", `-${r}px`), window.scrollTo(0, 0);
                                let l = null;
                                t.addEventListener(e, "click", t => {
                                    if (t.target instanceof HTMLElement) try {
                                        let n = t.target.closest("a");
                                        if (!n) return;
                                        let {
                                            hash: r
                                        } = new URL(n.href), a = e.querySelector(r);
                                        a && !o(a) && (l = a)
                                    } catch {}
                                }, !0), t.addEventListener(e, "touchmove", e => {
                                    e.target instanceof HTMLElement && !o(e.target) && e.preventDefault()
                                }, {
                                    passive: !1
                                }), t.add(() => {
                                    window.scrollTo(0, window.pageYOffset + r), l && l.isConnected && (l.scrollIntoView({
                                        block: "nearest"
                                    }), l = null)
                                })
                            }
                        } : {}, {
                            before({
                                doc: e
                            }) {
                                var t;
                                let n = e.documentElement;
                                o = (null != (t = e.defaultView) ? t : window).innerWidth - n.clientWidth
                            },
                            after({
                                doc: e,
                                d: t
                            }) {
                                let n = e.documentElement,
                                    r = o - (n.clientWidth - n.offsetWidth);
                                t.style(n, "paddingRight", `${r}px`)
                            }
                        }, {
                            before({
                                doc: e,
                                d: t
                            }) {
                                t.style(e.documentElement, "overflow", "hidden")
                            }
                        }];
                    a.forEach(({
                        before: e
                    }) => null == e ? void 0 : e(l)), a.forEach(({
                        after: e
                    }) => null == e ? void 0 : e(l))
                },
                SCROLL_ALLOW({
                    d: e
                }) {
                    e.dispose()
                },
                TEARDOWN({
                    doc: e
                }) {
                    this.delete(e)
                }
            }, r = new Map, o = new Set, {
                getSnapshot: () => r,
                subscribe: e => (o.add(e), () => o.delete(e)),
                dispatch(e, ...t) {
                    let n = s[e].call(r, ...t);
                    n && (r = n, o.forEach(e => e()))
                }
            });
            es.subscribe(() => {
                let e = es.getSnapshot(),
                    t = new Map;
                for (let [n] of e) t.set(n, n.documentElement.style.overflow);
                for (let n of e.values()) {
                    let e = "hidden" === t.get(n.doc),
                        r = 0 !== n.count;
                    (r && !e || !r && e) && es.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), 0 === n.count && es.dispatch("TEARDOWN", n)
                }
            });
            let ec = new Map,
                ed = new Map;

            function ef(e, t = !0) {
                (0, B.e)(() => {
                    var n;
                    if (!t) return;
                    let r = "function" == typeof e ? e() : e.current;
                    if (!r) return;
                    let o = null != (n = ed.get(r)) ? n : 0;
                    return ed.set(r, o + 1), 0 !== o || (ec.set(r, {
                            "aria-hidden": r.getAttribute("aria-hidden"),
                            inert: r.inert
                        }), r.setAttribute("aria-hidden", "true"), r.inert = !0),
                        function() {
                            var e;
                            if (!r) return;
                            let t = null != (e = ed.get(r)) ? e : 1;
                            if (1 === t ? ed.delete(r) : ed.set(r, t - 1), 1 !== t) return;
                            let n = ec.get(r);
                            n && (null === n["aria-hidden"] ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", n["aria-hidden"]), r.inert = n.inert, ec.delete(r))
                        }
                }, [e, t])
            }
            var ep = ((c = ep || {})[c.Open = 0] = "Open", c[c.Closed = 1] = "Closed", c),
                em = ((d = em || {})[d.SetTitleId = 0] = "SetTitleId", d);
            let ev = {
                    0: (e, t) => e.titleId === t.id ? e : { ...e,
                        titleId: t.id
                    }
                },
                eg = (0, f.createContext)(null);

            function eh(e) {
                let t = (0, f.useContext)(eg);
                if (null === t) {
                    let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, eh), t
                }
                return t
            }

            function eE(e, t) {
                return (0, m.E)(t.type, ev, e, t)
            }
            eg.displayName = "DialogContext";
            let ew = v.AN.RenderStrategy | v.AN.Static,
                eT = Object.assign((0, v.yV)(function(e, t) {
                    var n;
                    let r, o, l, a, i;
                    let u = (0, w.M)(),
                        {
                            id: s = `headlessui-dialog-${u}`,
                            open: c,
                            onClose: d,
                            initialFocus: p,
                            __demoMode: E = !1,
                            ...C
                        } = e,
                        [L, M] = (0, f.useState)(0),
                        S = (0, Q.oJ)();
                    void 0 === c && null !== S && (c = (S & Q.ZM.Open) === Q.ZM.Open);
                    let R = (0, f.useRef)(null),
                        k = (0, g.T)(R, t),
                        A = (0, D.i)(R),
                        F = e.hasOwnProperty("open") || null !== S,
                        x = e.hasOwnProperty("onClose");
                    if (!F && !x) throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
                    if (!F) throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
                    if (!x) throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
                    if ("boolean" != typeof c) throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c}`);
                    if ("function" != typeof d) throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${d}`);
                    let H = c ? 0 : 1,
                        [N, V] = (0, f.useReducer)(eE, {
                            titleId: null,
                            descriptionId: null,
                            panelRef: (0, f.createRef)()
                        }),
                        z = (0, P.z)(() => d(!1)),
                        I = (0, P.z)(e => V({
                            type: 0,
                            id: e
                        })),
                        $ = !!(0, T.H)() && !E && 0 === H,
                        W = L > 1,
                        _ = null !== (0, f.useContext)(eg),
                        [q, G] = (r = (0, f.useContext)(U), o = (0, f.useRef)([]), l = (0, P.z)(e => (o.current.push(e), r && r.register(e), () => a(e))), a = (0, P.z)(e => {
                            let t = o.current.indexOf(e); - 1 !== t && o.current.splice(t, 1), r && r.unregister(e)
                        }), i = (0, f.useMemo)(() => ({
                            register: l,
                            unregister: a,
                            portals: o
                        }), [l, a, o]), [o, (0, f.useMemo)(() => function({
                            children: e
                        }) {
                            return f.createElement(U.Provider, {
                                value: i
                            }, e)
                        }, [i])]),
                        {
                            resolveContainers: J,
                            mainTreeNodeRef: X,
                            MainTreeNode: er
                        } = function({
                            defaultContainers: e = [],
                            portals: t
                        } = {}) {
                            let n = (0, f.useRef)(null),
                                r = (0, D.i)(n),
                                o = (0, P.z)(() => {
                                    var o;
                                    let l = [];
                                    for (let t of e) null !== t && (t instanceof HTMLElement ? l.push(t) : "current" in t && t.current instanceof HTMLElement && l.push(t.current));
                                    if (null != t && t.current)
                                        for (let e of t.current) l.push(e);
                                    for (let e of null != (o = null == r ? void 0 : r.querySelectorAll("html > *, body > *")) ? o : []) e !== document.body && e !== document.head && e instanceof HTMLElement && "headlessui-portal-root" !== e.id && (e.contains(n.current) || l.some(t => e.contains(t)) || l.push(e));
                                    return l
                                });
                            return {
                                resolveContainers: o,
                                contains: (0, P.z)(e => o().some(t => t.contains(e))),
                                mainTreeNodeRef: n,
                                MainTreeNode: (0, f.useMemo)(() => function() {
                                    return f.createElement(y, {
                                        features: b.Hidden,
                                        ref: n
                                    })
                                }, [n])
                            }
                        }({
                            portals: q,
                            defaultContainers: [null != (n = N.panelRef.current) ? n : R.current]
                        }),
                        eo = W ? "parent" : "leaf",
                        el = null !== S && (S & Q.ZM.Closing) === Q.ZM.Closing,
                        ea = !_ && !el && $;
                    ef((0, f.useCallback)(() => {
                        var e, t;
                        return null != (t = Array.from(null != (e = null == A ? void 0 : A.querySelectorAll("body > *")) ? e : []).find(e => "headlessui-portal-root" !== e.id && e.contains(X.current) && e instanceof HTMLElement)) ? t : null
                    }, [X]), ea);
                    let eu = !!W || $;
                    ef((0, f.useCallback)(() => {
                        var e, t;
                        return null != (t = Array.from(null != (e = null == A ? void 0 : A.querySelectorAll("[data-headlessui-portal]")) ? e : []).find(e => e.contains(X.current) && e instanceof HTMLElement)) ? t : null
                    }, [X]), eu);
                    let ec = !(!$ || W);
                    (0, en.O)(J, z, ec);
                    let ed = !(W || 0 !== H);
                    O(null == A ? void 0 : A.defaultView, "keydown", e => {
                            ed && (e.defaultPrevented || e.key === h.R.Escape && (e.preventDefault(), e.stopPropagation(), z()))
                        }),
                        function(e, t, n = () => [document.body]) {
                            var r;
                            let o, l;
                            r = e => {
                                var t;
                                return {
                                    containers: [...null != (t = e.containers) ? t : [], n]
                                }
                            }, o = ei(es.subscribe, es.getSnapshot, es.getSnapshot), (l = e ? o.get(e) : void 0) && l.count, (0, B.e)(() => {
                                if (!(!e || !t)) return es.dispatch("PUSH", e, r), () => es.dispatch("POP", e, r)
                            }, [t, e])
                        }(A, !(el || 0 !== H || _), J), (0, f.useEffect)(() => {
                            if (0 !== H || !R.current) return;
                            let e = new ResizeObserver(e => {
                                for (let t of e) {
                                    let e = t.target.getBoundingClientRect();
                                    0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height && z()
                                }
                            });
                            return e.observe(R.current), () => e.disconnect()
                        }, [H, R, z]);
                    let [ep, em] = function() {
                        let [e, t] = (0, f.useState)([]);
                        return [e.length > 0 ? e.join(" ") : void 0, (0, f.useMemo)(() => function(e) {
                            let n = (0, P.z)(e => (t(t => [...t, e]), () => t(t => {
                                    let n = t.slice(),
                                        r = n.indexOf(e);
                                    return -1 !== r && n.splice(r, 1), n
                                }))),
                                r = (0, f.useMemo)(() => ({
                                    register: n,
                                    slot: e.slot,
                                    name: e.name,
                                    props: e.props
                                }), [n, e.slot, e.name, e.props]);
                            return f.createElement(K.Provider, {
                                value: r
                            }, e.children)
                        }, [t])]
                    }(), ev = (0, f.useMemo)(() => [{
                        dialogState: H,
                        close: z,
                        setTitleId: I
                    }, N], [H, N, z, I]), eh = (0, f.useMemo)(() => ({
                        open: 0 === H
                    }), [H]), eT = {
                        ref: k,
                        id: s,
                        role: "dialog",
                        "aria-modal": 0 === H || void 0,
                        "aria-labelledby": N.titleId,
                        "aria-describedby": ep
                    };
                    return f.createElement(et, {
                        type: "Dialog",
                        enabled: 0 === H,
                        element: R,
                        onUpdate: (0, P.z)((e, t) => {
                            "Dialog" === t && (0, m.E)(e, {
                                [ee.Add]: () => M(e => e + 1),
                                [ee.Remove]: () => M(e => e - 1)
                            })
                        })
                    }, f.createElement(j, {
                        force: !0
                    }, f.createElement(Z, null, f.createElement(eg.Provider, {
                        value: ev
                    }, f.createElement(Z.Group, {
                        target: R
                    }, f.createElement(j, {
                        force: !1
                    }, f.createElement(em, {
                        slot: eh,
                        name: "Dialog.Description"
                    }, f.createElement(Y, {
                        initialFocus: p,
                        containers: J,
                        features: $ ? (0, m.E)(eo, {
                            parent: Y.features.RestoreFocus,
                            leaf: Y.features.All & ~Y.features.FocusLock
                        }) : Y.features.None
                    }, f.createElement(G, null, (0, v.sY)({
                        ourProps: eT,
                        theirProps: C,
                        slot: eh,
                        defaultTag: "div",
                        features: ew,
                        visible: 0 === H,
                        name: "Dialog"
                    }))))))))), f.createElement(er, null))
                }), {
                    Backdrop: (0, v.yV)(function(e, t) {
                        let n = (0, w.M)(),
                            {
                                id: r = `headlessui-dialog-backdrop-${n}`,
                                ...o
                            } = e,
                            [{
                                dialogState: l
                            }, a] = eh("Dialog.Backdrop"),
                            i = (0, g.T)(t);
                        (0, f.useEffect)(() => {
                            if (null === a.panelRef.current) throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
                        }, [a.panelRef]);
                        let u = (0, f.useMemo)(() => ({
                            open: 0 === l
                        }), [l]);
                        return f.createElement(j, {
                            force: !0
                        }, f.createElement(Z, null, (0, v.sY)({
                            ourProps: {
                                ref: i,
                                id: r,
                                "aria-hidden": !0
                            },
                            theirProps: o,
                            slot: u,
                            defaultTag: "div",
                            name: "Dialog.Backdrop"
                        })))
                    }),
                    Panel: (0, v.yV)(function(e, t) {
                        let n = (0, w.M)(),
                            {
                                id: r = `headlessui-dialog-panel-${n}`,
                                ...o
                            } = e,
                            [{
                                dialogState: l
                            }, a] = eh("Dialog.Panel"),
                            i = (0, g.T)(t, a.panelRef),
                            u = (0, f.useMemo)(() => ({
                                open: 0 === l
                            }), [l]),
                            s = (0, P.z)(e => {
                                e.stopPropagation()
                            });
                        return (0, v.sY)({
                            ourProps: {
                                ref: i,
                                id: r,
                                onClick: s
                            },
                            theirProps: o,
                            slot: u,
                            defaultTag: "div",
                            name: "Dialog.Panel"
                        })
                    }),
                    Overlay: (0, v.yV)(function(e, t) {
                        let n = (0, w.M)(),
                            {
                                id: r = `headlessui-dialog-overlay-${n}`,
                                ...o
                            } = e,
                            [{
                                dialogState: l,
                                close: a
                            }] = eh("Dialog.Overlay"),
                            i = (0, g.T)(t),
                            u = (0, P.z)(e => {
                                if (e.target === e.currentTarget) {
                                    if ((0, E.P)(e.currentTarget)) return e.preventDefault();
                                    e.preventDefault(), e.stopPropagation(), a()
                                }
                            }),
                            s = (0, f.useMemo)(() => ({
                                open: 0 === l
                            }), [l]);
                        return (0, v.sY)({
                            ourProps: {
                                ref: i,
                                id: r,
                                "aria-hidden": !0,
                                onClick: u
                            },
                            theirProps: o,
                            slot: s,
                            defaultTag: "div",
                            name: "Dialog.Overlay"
                        })
                    }),
                    Title: (0, v.yV)(function(e, t) {
                        let n = (0, w.M)(),
                            {
                                id: r = `headlessui-dialog-title-${n}`,
                                ...o
                            } = e,
                            [{
                                dialogState: l,
                                setTitleId: a
                            }] = eh("Dialog.Title"),
                            i = (0, g.T)(t);
                        (0, f.useEffect)(() => (a(r), () => a(null)), [r, a]);
                        let u = (0, f.useMemo)(() => ({
                            open: 0 === l
                        }), [l]);
                        return (0, v.sY)({
                            ourProps: {
                                ref: i,
                                id: r
                            },
                            theirProps: o,
                            slot: u,
                            defaultTag: "h2",
                            name: "Dialog.Title"
                        })
                    }),
                    Description: J
                })
        }
    }
]);