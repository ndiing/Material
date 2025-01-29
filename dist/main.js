/*! For license information please see main.js.LICENSE.txt */
(() => {
    "use strict";
    var t,
        e,
        n = {
            548: (t, e, n) => {
                function r(t) {
                    return (
                        (r =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                  }),
                        r(t)
                    );
                }
                function o(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, i(r.key), r);
                    }
                }
                function i(t) {
                    var e = (function (t) {
                        if ("object" != r(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, "string");
                            if ("object" != r(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return String(t);
                    })(t);
                    return "symbol" == r(e) ? e : e + "";
                }
                function a() {
                    try {
                        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                    } catch (t) {}
                    return (a = function () {
                        return !!t;
                    })();
                }
                function c(t) {
                    return (
                        (c = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (t) {
                                  return t.__proto__ || Object.getPrototypeOf(t);
                              }),
                        c(t)
                    );
                }
                function u(t, e) {
                    return (
                        (u = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (t, e) {
                                  return (t.__proto__ = e), t;
                              }),
                        u(t, e)
                    );
                }
                n.d(e, { $: () => l });
                var l = (function (t) {
                    function e() {
                        return (
                            (function (t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            })(this, e),
                            (function (t, e, n) {
                                return (
                                    (e = c(e)),
                                    (function (t, e) {
                                        if (e && ("object" == r(e) || "function" == typeof e)) return e;
                                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                        return (function (t) {
                                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return t;
                                        })(t);
                                    })(t, a() ? Reflect.construct(e, n || [], c(t).constructor) : e.apply(t, n))
                                );
                            })(this, e, arguments)
                        );
                    }
                    return (
                        (function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && u(t, e);
                        })(e, t),
                        (function (t, e) {
                            return e && o(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                        })(e, [
                            {
                                key: "createRenderRoot",
                                value: function () {
                                    return this;
                                },
                            },
                            {
                                key: "emit",
                                value: function (t, e) {
                                    var n = new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: e });
                                    this.dispatchEvent(n);
                                },
                            },
                        ])
                    );
                })(n(420).WF);
            },
            681: (t, e, n) => {
                var r;
                function o(t, e, n) {
                    return (
                        (e = a(e)),
                        (function (t, e) {
                            if (e && ("object" == v(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, i() ? Reflect.construct(e, n || [], a(t).constructor) : e.apply(t, n))
                    );
                }
                function i() {
                    try {
                        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                    } catch (t) {}
                    return (i = function () {
                        return !!t;
                    })();
                }
                function a(t) {
                    return (
                        (a = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (t) {
                                  return t.__proto__ || Object.getPrototypeOf(t);
                              }),
                        a(t)
                    );
                }
                function c(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && u(t, e);
                }
                function u(t, e) {
                    return (
                        (u = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (t, e) {
                                  return (t.__proto__ = e), t;
                              }),
                        u(t, e)
                    );
                }
                function l(t, e) {
                    var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                    if (!n) {
                        if (Array.isArray(t) || (n = s(t)) || (e && t && "number" == typeof t.length)) {
                            n && (t = n);
                            var r = 0,
                                o = function () {};
                            return {
                                s: o,
                                n: function () {
                                    return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                                },
                                e: function (t) {
                                    throw t;
                                },
                                f: o,
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var i,
                        a = !0,
                        c = !1;
                    return {
                        s: function () {
                            n = n.call(t);
                        },
                        n: function () {
                            var t = n.next();
                            return (a = t.done), t;
                        },
                        e: function (t) {
                            (c = !0), (i = t);
                        },
                        f: function () {
                            try {
                                a || null == n.return || n.return();
                            } finally {
                                if (c) throw i;
                            }
                        },
                    };
                }
                function s(t, e) {
                    if (t) {
                        if ("string" == typeof t) return f(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0;
                    }
                }
                function f(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                    return r;
                }
                function h(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }
                function p(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, d(r.key), r);
                    }
                }
                function y(t, e, n) {
                    return e && p(t.prototype, e), n && p(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                }
                function d(t) {
                    var e = (function (t) {
                        if ("object" != v(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, "string");
                            if ("object" != v(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return String(t);
                    })(t);
                    return "symbol" == v(e) ? e : e + "";
                }
                function v(t) {
                    return (
                        (v =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                  }),
                        v(t)
                    );
                }
                n.d(e, { XX: () => tt, c0: () => q, qy: () => $, s6: () => D });
                var b = globalThis,
                    m = b.trustedTypes,
                    g = m
                        ? m.createPolicy("lit-html", {
                              createHTML: function (t) {
                                  return t;
                              },
                          })
                        : void 0,
                    w = "$lit$",
                    O = "lit$".concat(Math.random().toFixed(9).slice(2), "$"),
                    _ = "?" + O,
                    j = "<".concat(_, ">"),
                    S = document,
                    k = function () {
                        return S.createComment("");
                    },
                    P = function (t) {
                        return null === t || ("object" != v(t) && "function" != typeof t);
                    },
                    E = Array.isArray,
                    x = "[ \t\n\f\r]",
                    L = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
                    C = /-->/g,
                    T = />/g,
                    R = RegExp(">|".concat(x, "(?:([^\\s\"'>=/]+)(").concat(x, "*=").concat(x, "*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"), "g"),
                    A = /'/g,
                    B = /"/g,
                    I = /^(?:script|style|textarea|title)$/i,
                    N = function (t) {
                        return function (e) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                            return { _$litType$: t, strings: e, values: r };
                        };
                    },
                    $ = N(1),
                    q = (N(2), N(3), Symbol.for("lit-noChange")),
                    D = Symbol.for("lit-nothing"),
                    G = new WeakMap(),
                    F = S.createTreeWalker(S, 129);
                function z(t, e) {
                    if (!E(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
                    return void 0 !== g ? g.createHTML(e) : e;
                }
                var U = function (t, e) {
                        for (var n, r = t.length - 1, o = [], i = 2 === e ? "<svg>" : 3 === e ? "<math>" : "", a = L, c = 0; c < r; c++) {
                            for (var u = t[c], l = void 0, s = void 0, f = -1, h = 0; h < u.length && ((a.lastIndex = h), null !== (s = a.exec(u))); ) (h = a.lastIndex), a === L ? ("!--" === s[1] ? (a = C) : void 0 !== s[1] ? (a = T) : void 0 !== s[2] ? (I.test(s[2]) && (n = RegExp("</" + s[2], "g")), (a = R)) : void 0 !== s[3] && (a = R)) : a === R ? (">" === s[0] ? ((a = null != n ? n : L), (f = -1)) : void 0 === s[1] ? (f = -2) : ((f = a.lastIndex - s[2].length), (l = s[1]), (a = void 0 === s[3] ? R : '"' === s[3] ? B : A))) : a === B || a === A ? (a = R) : a === C || a === T ? (a = L) : ((a = R), (n = void 0));
                            var p = a === R && t[c + 1].startsWith("/>") ? " " : "";
                            i += a === L ? u + j : f >= 0 ? (o.push(l), u.slice(0, f) + w + u.slice(f) + O + p) : u + O + (-2 === f ? c : p);
                        }
                        return [z(t, i + (t[r] || "<?>") + (2 === e ? "</svg>" : 3 === e ? "</math>" : "")), o];
                    },
                    M = (function () {
                        return y(
                            function t(e, n) {
                                var r,
                                    o = e.strings,
                                    i = e._$litType$;
                                h(this, t), (this.parts = []);
                                var a = 0,
                                    c = 0,
                                    u = o.length - 1,
                                    p = this.parts,
                                    y = (function (t, e) {
                                        return (
                                            (function (t) {
                                                if (Array.isArray(t)) return t;
                                            })(t) ||
                                            (function (t, e) {
                                                var n = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                                                if (null != n) {
                                                    var r,
                                                        o,
                                                        i,
                                                        a,
                                                        c = [],
                                                        u = !0,
                                                        l = !1;
                                                    try {
                                                        if (((i = (n = n.call(t)).next), 0 === e)) {
                                                            if (Object(n) !== n) return;
                                                            u = !1;
                                                        } else for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== e); u = !0);
                                                    } catch (t) {
                                                        (l = !0), (o = t);
                                                    } finally {
                                                        try {
                                                            if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                                                        } finally {
                                                            if (l) throw o;
                                                        }
                                                    }
                                                    return c;
                                                }
                                            })(t, e) ||
                                            s(t, e) ||
                                            (function () {
                                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                            })()
                                        );
                                    })(U(o, i), 2),
                                    d = y[0],
                                    v = y[1];
                                if (((this.el = t.createElement(d, n)), (F.currentNode = this.el.content), 2 === i || 3 === i)) {
                                    var b = this.el.content.firstChild;
                                    b.replaceWith.apply(
                                        b,
                                        (function (t) {
                                            return (
                                                (function (t) {
                                                    if (Array.isArray(t)) return f(t);
                                                })(t) ||
                                                (function (t) {
                                                    if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                                                })(t) ||
                                                s(t) ||
                                                (function () {
                                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                })()
                                            );
                                        })(b.childNodes),
                                    );
                                }
                                for (; null !== (r = F.nextNode()) && p.length < u; ) {
                                    if (1 === r.nodeType) {
                                        if (r.hasAttributes()) {
                                            var g,
                                                j = l(r.getAttributeNames());
                                            try {
                                                for (j.s(); !(g = j.n()).done; ) {
                                                    var S = g.value;
                                                    if (S.endsWith(w)) {
                                                        var P = v[c++],
                                                            E = r.getAttribute(S).split(O),
                                                            x = /([.?@])?(.*)/.exec(P);
                                                        p.push({ type: 1, index: a, name: x[2], strings: E, ctor: "." === x[1] ? X : "?" === x[1] ? J : "@" === x[1] ? Z : V }), r.removeAttribute(S);
                                                    } else S.startsWith(O) && (p.push({ type: 6, index: a }), r.removeAttribute(S));
                                                }
                                            } catch (t) {
                                                j.e(t);
                                            } finally {
                                                j.f();
                                            }
                                        }
                                        if (I.test(r.tagName)) {
                                            var L = r.textContent.split(O),
                                                C = L.length - 1;
                                            if (C > 0) {
                                                r.textContent = m ? m.emptyScript : "";
                                                for (var T = 0; T < C; T++) r.append(L[T], k()), F.nextNode(), p.push({ type: 2, index: ++a });
                                                r.append(L[C], k());
                                            }
                                        }
                                    } else if (8 === r.nodeType)
                                        if (r.data === _) p.push({ type: 2, index: a });
                                        else for (var R = -1; -1 !== (R = r.data.indexOf(O, R + 1)); ) p.push({ type: 7, index: a }), (R += O.length - 1);
                                    a++;
                                }
                            },
                            null,
                            [
                                {
                                    key: "createElement",
                                    value: function (t, e) {
                                        var n = S.createElement("template");
                                        return (n.innerHTML = t), n;
                                    },
                                },
                            ],
                        );
                    })();
                function H(t, e) {
                    var n,
                        r,
                        o,
                        i,
                        a,
                        c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                        u = arguments.length > 3 ? arguments[3] : void 0;
                    if (e === q) return e;
                    var l = void 0 !== u ? (null === (n = c._$Co) || void 0 === n ? void 0 : n[u]) : c._$Cl,
                        s = P(e) ? void 0 : e._$litDirective$;
                    return (null === (r = l) || void 0 === r ? void 0 : r.constructor) !== s && (null !== (o = l) && void 0 !== o && null !== (i = o._$AO) && void 0 !== i && i.call(o, !1), void 0 === s ? (l = void 0) : (l = new s(t))._$AT(t, c, u), void 0 !== u ? ((null !== (a = c._$Co) && void 0 !== a ? a : (c._$Co = []))[u] = l) : (c._$Cl = l)), void 0 !== l && (e = H(t, l._$AS(t, e.values), l, u)), e;
                }
                var Y = (function () {
                        return y(
                            function t(e, n) {
                                h(this, t), (this._$AV = []), (this._$AN = void 0), (this._$AD = e), (this._$AM = n);
                            },
                            [
                                {
                                    key: "parentNode",
                                    get: function () {
                                        return this._$AM.parentNode;
                                    },
                                },
                                {
                                    key: "_$AU",
                                    get: function () {
                                        return this._$AM._$AU;
                                    },
                                },
                                {
                                    key: "u",
                                    value: function (t) {
                                        var e,
                                            n = this._$AD,
                                            r = n.el.content,
                                            o = n.parts,
                                            i = (null !== (e = null == t ? void 0 : t.creationScope) && void 0 !== e ? e : S).importNode(r, !0);
                                        F.currentNode = i;
                                        for (var a = F.nextNode(), c = 0, u = 0, l = o[0]; void 0 !== l; ) {
                                            var s;
                                            if (c === l.index) {
                                                var f = void 0;
                                                2 === l.type ? (f = new W(a, a.nextSibling, this, t)) : 1 === l.type ? (f = new l.ctor(a, l.name, l.strings, this, t)) : 6 === l.type && (f = new K(a, this, t)), this._$AV.push(f), (l = o[++u]);
                                            }
                                            c !== (null === (s = l) || void 0 === s ? void 0 : s.index) && ((a = F.nextNode()), c++);
                                        }
                                        return (F.currentNode = S), i;
                                    },
                                },
                                {
                                    key: "p",
                                    value: function (t) {
                                        var e,
                                            n = 0,
                                            r = l(this._$AV);
                                        try {
                                            for (r.s(); !(e = r.n()).done; ) {
                                                var o = e.value;
                                                void 0 !== o && (void 0 !== o.strings ? (o._$AI(t, o, n), (n += o.strings.length - 2)) : o._$AI(t[n])), n++;
                                            }
                                        } catch (t) {
                                            r.e(t);
                                        } finally {
                                            r.f();
                                        }
                                    },
                                },
                            ],
                        );
                    })(),
                    W = (function () {
                        function t(e, n, r, o) {
                            var i;
                            h(this, t), (this.type = 2), (this._$AH = D), (this._$AN = void 0), (this._$AA = e), (this._$AB = n), (this._$AM = r), (this.options = o), (this._$Cv = null === (i = null == o ? void 0 : o.isConnected) || void 0 === i || i);
                        }
                        return y(t, [
                            {
                                key: "_$AU",
                                get: function () {
                                    var t, e;
                                    return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$Cv;
                                },
                            },
                            {
                                key: "parentNode",
                                get: function () {
                                    var t,
                                        e = this._$AA.parentNode,
                                        n = this._$AM;
                                    return void 0 !== n && 11 === (null === (t = e) || void 0 === t ? void 0 : t.nodeType) && (e = n.parentNode), e;
                                },
                            },
                            {
                                key: "startNode",
                                get: function () {
                                    return this._$AA;
                                },
                            },
                            {
                                key: "endNode",
                                get: function () {
                                    return this._$AB;
                                },
                            },
                            {
                                key: "_$AI",
                                value: function (t) {
                                    (t = H(this, t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this)),
                                        P(t)
                                            ? t === D || null == t || "" === t
                                                ? (this._$AH !== D && this._$AR(), (this._$AH = D))
                                                : t !== this._$AH && t !== q && this._(t)
                                            : void 0 !== t._$litType$
                                              ? this.$(t)
                                              : void 0 !== t.nodeType
                                                ? this.T(t)
                                                : (function (t) {
                                                        return E(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]);
                                                    })(t)
                                                  ? this.k(t)
                                                  : this._(t);
                                },
                            },
                            {
                                key: "O",
                                value: function (t) {
                                    return this._$AA.parentNode.insertBefore(t, this._$AB);
                                },
                            },
                            {
                                key: "T",
                                value: function (t) {
                                    this._$AH !== t && (this._$AR(), (this._$AH = this.O(t)));
                                },
                            },
                            {
                                key: "_",
                                value: function (t) {
                                    this._$AH !== D && P(this._$AH) ? (this._$AA.nextSibling.data = t) : this.T(S.createTextNode(t)), (this._$AH = t);
                                },
                            },
                            {
                                key: "$",
                                value: function (t) {
                                    var e,
                                        n = t.values,
                                        r = t._$litType$,
                                        o = "number" == typeof r ? this._$AC(t) : (void 0 === r.el && (r.el = M.createElement(z(r.h, r.h[0]), this.options)), r);
                                    if ((null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === o) this._$AH.p(n);
                                    else {
                                        var i = new Y(o, this),
                                            a = i.u(this.options);
                                        i.p(n), this.T(a), (this._$AH = i);
                                    }
                                },
                            },
                            {
                                key: "_$AC",
                                value: function (t) {
                                    var e = G.get(t.strings);
                                    return void 0 === e && G.set(t.strings, (e = new M(t))), e;
                                },
                            },
                            {
                                key: "k",
                                value: function (e) {
                                    E(this._$AH) || ((this._$AH = []), this._$AR());
                                    var n,
                                        r,
                                        o = this._$AH,
                                        i = 0,
                                        a = l(e);
                                    try {
                                        for (a.s(); !(r = a.n()).done; ) {
                                            var c = r.value;
                                            i === o.length ? o.push((n = new t(this.O(k()), this.O(k()), this, this.options))) : (n = o[i]), n._$AI(c), i++;
                                        }
                                    } catch (t) {
                                        a.e(t);
                                    } finally {
                                        a.f();
                                    }
                                    i < o.length && (this._$AR(n && n._$AB.nextSibling, i), (o.length = i));
                                },
                            },
                            {
                                key: "_$AR",
                                value: function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._$AA.nextSibling,
                                        e = arguments.length > 1 ? arguments[1] : void 0;
                                    for (null === (n = this._$AP) || void 0 === n || n.call(this, !1, !0, e); t && t !== this._$AB; ) {
                                        var n,
                                            r = t.nextSibling;
                                        t.remove(), (t = r);
                                    }
                                },
                            },
                            {
                                key: "setConnected",
                                value: function (t) {
                                    var e;
                                    void 0 === this._$AM && ((this._$Cv = t), null === (e = this._$AP) || void 0 === e || e.call(this, t));
                                },
                            },
                        ]);
                    })(),
                    V = (function () {
                        return y(
                            function t(e, n, r, o, i) {
                                h(this, t), (this.type = 1), (this._$AH = D), (this._$AN = void 0), (this.element = e), (this.name = n), (this._$AM = o), (this.options = i), r.length > 2 || "" !== r[0] || "" !== r[1] ? ((this._$AH = Array(r.length - 1).fill(new String())), (this.strings = r)) : (this._$AH = D);
                            },
                            [
                                {
                                    key: "tagName",
                                    get: function () {
                                        return this.element.tagName;
                                    },
                                },
                                {
                                    key: "_$AU",
                                    get: function () {
                                        return this._$AM._$AU;
                                    },
                                },
                                {
                                    key: "_$AI",
                                    value: function (t) {
                                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
                                            n = arguments.length > 2 ? arguments[2] : void 0,
                                            r = arguments.length > 3 ? arguments[3] : void 0,
                                            o = this.strings,
                                            i = !1;
                                        if (void 0 === o) (t = H(this, t, e, 0)), (i = !P(t) || (t !== this._$AH && t !== q)) && (this._$AH = t);
                                        else {
                                            var a,
                                                c,
                                                u = t;
                                            for (t = o[0], a = 0; a < o.length - 1; a++) (c = H(this, u[n + a], e, a)) === q && (c = this._$AH[a]), i || (i = !P(c) || c !== this._$AH[a]), c === D ? (t = D) : t !== D && (t += (null != c ? c : "") + o[a + 1]), (this._$AH[a] = c);
                                        }
                                        i && !r && this.j(t);
                                    },
                                },
                                {
                                    key: "j",
                                    value: function (t) {
                                        t === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
                                    },
                                },
                            ],
                        );
                    })(),
                    X = (function (t) {
                        function e() {
                            var t;
                            return h(this, e), ((t = o(this, e, arguments)).type = 3), t;
                        }
                        return (
                            c(e, t),
                            y(e, [
                                {
                                    key: "j",
                                    value: function (t) {
                                        this.element[this.name] = t === D ? void 0 : t;
                                    },
                                },
                            ])
                        );
                    })(V),
                    J = (function (t) {
                        function e() {
                            var t;
                            return h(this, e), ((t = o(this, e, arguments)).type = 4), t;
                        }
                        return (
                            c(e, t),
                            y(e, [
                                {
                                    key: "j",
                                    value: function (t) {
                                        this.element.toggleAttribute(this.name, !!t && t !== D);
                                    },
                                },
                            ])
                        );
                    })(V),
                    Z = (function (t) {
                        function e(t, n, r, i, a) {
                            var c;
                            return h(this, e), ((c = o(this, e, [t, n, r, i, a])).type = 5), c;
                        }
                        return (
                            c(e, t),
                            y(e, [
                                {
                                    key: "_$AI",
                                    value: function (t) {
                                        var e;
                                        if ((t = null !== (e = H(this, t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this, 0)) && void 0 !== e ? e : D) !== q) {
                                            var n = this._$AH,
                                                r = (t === D && n !== D) || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive,
                                                o = t !== D && (n === D || r);
                                            r && this.element.removeEventListener(this.name, this, n), o && this.element.addEventListener(this.name, this, t), (this._$AH = t);
                                        }
                                    },
                                },
                                {
                                    key: "handleEvent",
                                    value: function (t) {
                                        var e, n;
                                        "function" == typeof this._$AH ? this._$AH.call(null !== (e = null === (n = this.options) || void 0 === n ? void 0 : n.host) && void 0 !== e ? e : this.element, t) : this._$AH.handleEvent(t);
                                    },
                                },
                            ])
                        );
                    })(V),
                    K = (function () {
                        return y(
                            function t(e, n, r) {
                                h(this, t), (this.element = e), (this.type = 6), (this._$AN = void 0), (this._$AM = n), (this.options = r);
                            },
                            [
                                {
                                    key: "_$AU",
                                    get: function () {
                                        return this._$AM._$AU;
                                    },
                                },
                                {
                                    key: "_$AI",
                                    value: function (t) {
                                        H(this, t);
                                    },
                                },
                            ],
                        );
                    })(),
                    Q = b.litHtmlPolyfillSupport;
                null != Q && Q(M, W), (null !== (r = b.litHtmlVersions) && void 0 !== r ? r : (b.litHtmlVersions = [])).push("3.2.1");
                var tt = function (t, e, n) {
                    var r,
                        o = null !== (r = null == n ? void 0 : n.renderBefore) && void 0 !== r ? r : e,
                        i = o._$litPart$;
                    if (void 0 === i) {
                        var a,
                            c = null !== (a = null == n ? void 0 : n.renderBefore) && void 0 !== a ? a : null;
                        o._$litPart$ = i = new W(e.insertBefore(k(), c), c, void 0, null != n ? n : {});
                    }
                    return i._$AI(t), i;
                };
            },
            420: (t, e, n) => {
                function r(t, e) {
                    var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                    if (!n) {
                        if (
                            Array.isArray(t) ||
                            (n = (function (t, e) {
                                if (t) {
                                    if ("string" == typeof t) return o(t, e);
                                    var n = {}.toString.call(t).slice(8, -1);
                                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0;
                                }
                            })(t)) ||
                            (e && t && "number" == typeof t.length)
                        ) {
                            n && (t = n);
                            var r = 0,
                                i = function () {};
                            return {
                                s: i,
                                n: function () {
                                    return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                                },
                                e: function (t) {
                                    throw t;
                                },
                                f: i,
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var a,
                        c = !0,
                        u = !1;
                    return {
                        s: function () {
                            n = n.call(t);
                        },
                        n: function () {
                            var t = n.next();
                            return (c = t.done), t;
                        },
                        e: function (t) {
                            (u = !0), (a = t);
                        },
                        f: function () {
                            try {
                                c || null == n.return || n.return();
                            } finally {
                                if (u) throw a;
                            }
                        },
                    };
                }
                function o(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                    return r;
                }
                function i(t) {
                    return (
                        (i =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                  }),
                        i(t)
                    );
                }
                function a(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, c(r.key), r);
                    }
                }
                function c(t) {
                    var e = (function (t) {
                        if ("object" != i(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, "string");
                            if ("object" != i(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return String(t);
                    })(t);
                    return "symbol" == i(e) ? e : e + "";
                }
                n.d(e, { WF: () => it, qy: () => X.qy, s6: () => X.s6 });
                var u,
                    l,
                    s,
                    f = globalThis,
                    h = f.ShadowRoot && (void 0 === f.ShadyCSS || f.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
                    p = Symbol(),
                    y = new WeakMap(),
                    d = (function () {
                        return (function (t, e) {
                            return e && a(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                        })(
                            function t(e, n, r) {
                                if (
                                    ((function (t, e) {
                                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                    })(this, t),
                                    (this._$cssResult$ = !0),
                                    r !== p)
                                )
                                    throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                                (this.cssText = e), (this.t = n);
                            },
                            [
                                {
                                    key: "styleSheet",
                                    get: function () {
                                        var t = this.o,
                                            e = this.t;
                                        if (h && void 0 === t) {
                                            var n = void 0 !== e && 1 === e.length;
                                            n && (t = y.get(e)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && y.set(e, t));
                                        }
                                        return t;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return this.cssText;
                                    },
                                },
                            ],
                        );
                    })(),
                    v = function (t, e) {
                        if (h)
                            t.adoptedStyleSheets = e.map(function (t) {
                                return t instanceof CSSStyleSheet ? t : t.styleSheet;
                            });
                        else {
                            var n,
                                o = r(e);
                            try {
                                for (o.s(); !(n = o.n()).done; ) {
                                    var i = n.value,
                                        a = document.createElement("style"),
                                        c = f.litNonce;
                                    void 0 !== c && a.setAttribute("nonce", c), (a.textContent = i.cssText), t.appendChild(a);
                                }
                            } catch (t) {
                                o.e(t);
                            } finally {
                                o.f();
                            }
                        }
                    },
                    b = h
                        ? function (t) {
                              return t;
                          }
                        : function (t) {
                              return t instanceof CSSStyleSheet
                                  ? (function (t) {
                                        var e,
                                            n = "",
                                            o = r(t.cssRules);
                                        try {
                                            for (o.s(); !(e = o.n()).done; ) n += e.value.cssText;
                                        } catch (t) {
                                            o.e(t);
                                        } finally {
                                            o.f();
                                        }
                                        return (function (t) {
                                            return new d("string" == typeof t ? t : t + "", void 0, p);
                                        })(n);
                                    })(t)
                                  : t;
                          };
                function m(t) {
                    return (
                        (m =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                  }),
                        m(t)
                    );
                }
                function g(t) {
                    return (
                        (function (t) {
                            if (Array.isArray(t)) return k(t);
                        })(t) ||
                        (function (t) {
                            if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                        })(t) ||
                        S(t) ||
                        (function () {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        })()
                    );
                }
                function w(t, e) {
                    return (
                        (function (t) {
                            if (Array.isArray(t)) return t;
                        })(t) ||
                        (function (t, e) {
                            var n = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                            if (null != n) {
                                var r,
                                    o,
                                    i,
                                    a,
                                    c = [],
                                    u = !0,
                                    l = !1;
                                try {
                                    if (((i = (n = n.call(t)).next), 0 === e)) {
                                        if (Object(n) !== n) return;
                                        u = !1;
                                    } else for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== e); u = !0);
                                } catch (t) {
                                    (l = !0), (o = t);
                                } finally {
                                    try {
                                        if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                                    } finally {
                                        if (l) throw o;
                                    }
                                }
                                return c;
                            }
                        })(t, e) ||
                        S(t, e) ||
                        (function () {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        })()
                    );
                }
                function O() {
                    O = function () {
                        return e;
                    };
                    var t,
                        e = {},
                        n = Object.prototype,
                        r = n.hasOwnProperty,
                        o =
                            Object.defineProperty ||
                            function (t, e, n) {
                                t[e] = n.value;
                            },
                        i = "function" == typeof Symbol ? Symbol : {},
                        a = i.iterator || "@@iterator",
                        c = i.asyncIterator || "@@asyncIterator",
                        u = i.toStringTag || "@@toStringTag";
                    function l(t, e, n) {
                        return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
                    }
                    try {
                        l({}, "");
                    } catch (t) {
                        l = function (t, e, n) {
                            return (t[e] = n);
                        };
                    }
                    function s(t, e, n, r) {
                        var i = e && e.prototype instanceof b ? e : b,
                            a = Object.create(i.prototype),
                            c = new R(r || []);
                        return o(a, "_invoke", { value: x(t, n, c) }), a;
                    }
                    function f(t, e, n) {
                        try {
                            return { type: "normal", arg: t.call(e, n) };
                        } catch (t) {
                            return { type: "throw", arg: t };
                        }
                    }
                    e.wrap = s;
                    var h = "suspendedStart",
                        p = "suspendedYield",
                        y = "executing",
                        d = "completed",
                        v = {};
                    function b() {}
                    function g() {}
                    function w() {}
                    var _ = {};
                    l(_, a, function () {
                        return this;
                    });
                    var j = Object.getPrototypeOf,
                        S = j && j(j(A([])));
                    S && S !== n && r.call(S, a) && (_ = S);
                    var k = (w.prototype = b.prototype = Object.create(_));
                    function P(t) {
                        ["next", "throw", "return"].forEach(function (e) {
                            l(t, e, function (t) {
                                return this._invoke(e, t);
                            });
                        });
                    }
                    function E(t, e) {
                        function n(o, i, a, c) {
                            var u = f(t[o], t, i);
                            if ("throw" !== u.type) {
                                var l = u.arg,
                                    s = l.value;
                                return s && "object" == m(s) && r.call(s, "__await")
                                    ? e.resolve(s.__await).then(
                                          function (t) {
                                              n("next", t, a, c);
                                          },
                                          function (t) {
                                              n("throw", t, a, c);
                                          },
                                      )
                                    : e.resolve(s).then(
                                          function (t) {
                                              (l.value = t), a(l);
                                          },
                                          function (t) {
                                              return n("throw", t, a, c);
                                          },
                                      );
                            }
                            c(u.arg);
                        }
                        var i;
                        o(this, "_invoke", {
                            value: function (t, r) {
                                function o() {
                                    return new e(function (e, o) {
                                        n(t, r, e, o);
                                    });
                                }
                                return (i = i ? i.then(o, o) : o());
                            },
                        });
                    }
                    function x(e, n, r) {
                        var o = h;
                        return function (i, a) {
                            if (o === y) throw Error("Generator is already running");
                            if (o === d) {
                                if ("throw" === i) throw a;
                                return { value: t, done: !0 };
                            }
                            for (r.method = i, r.arg = a; ; ) {
                                var c = r.delegate;
                                if (c) {
                                    var u = L(c, r);
                                    if (u) {
                                        if (u === v) continue;
                                        return u;
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if (o === h) throw ((o = d), r.arg);
                                    r.dispatchException(r.arg);
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                o = y;
                                var l = f(e, n, r);
                                if ("normal" === l.type) {
                                    if (((o = r.done ? d : p), l.arg === v)) continue;
                                    return { value: l.arg, done: r.done };
                                }
                                "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                            }
                        };
                    }
                    function L(e, n) {
                        var r = n.method,
                            o = e.iterator[r];
                        if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), L(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
                        var i = f(o, e.iterator, n.arg);
                        if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
                        var a = i.arg;
                        return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
                    }
                    function C(t) {
                        var e = { tryLoc: t[0] };
                        1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
                    }
                    function T(t) {
                        var e = t.completion || {};
                        (e.type = "normal"), delete e.arg, (t.completion = e);
                    }
                    function R(t) {
                        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(C, this), this.reset(!0);
                    }
                    function A(e) {
                        if (e || "" === e) {
                            var n = e[a];
                            if (n) return n.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var o = -1,
                                    i = function n() {
                                        for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                                        return (n.value = t), (n.done = !0), n;
                                    };
                                return (i.next = i);
                            }
                        }
                        throw new TypeError(m(e) + " is not iterable");
                    }
                    return (
                        (g.prototype = w),
                        o(k, "constructor", { value: w, configurable: !0 }),
                        o(w, "constructor", { value: g, configurable: !0 }),
                        (g.displayName = l(w, u, "GeneratorFunction")),
                        (e.isGeneratorFunction = function (t) {
                            var e = "function" == typeof t && t.constructor;
                            return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name));
                        }),
                        (e.mark = function (t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : ((t.__proto__ = w), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(k)), t;
                        }),
                        (e.awrap = function (t) {
                            return { __await: t };
                        }),
                        P(E.prototype),
                        l(E.prototype, c, function () {
                            return this;
                        }),
                        (e.AsyncIterator = E),
                        (e.async = function (t, n, r, o, i) {
                            void 0 === i && (i = Promise);
                            var a = new E(s(t, n, r, o), i);
                            return e.isGeneratorFunction(n)
                                ? a
                                : a.next().then(function (t) {
                                      return t.done ? t.value : a.next();
                                  });
                        }),
                        P(k),
                        l(k, u, "Generator"),
                        l(k, a, function () {
                            return this;
                        }),
                        l(k, "toString", function () {
                            return "[object Generator]";
                        }),
                        (e.keys = function (t) {
                            var e = Object(t),
                                n = [];
                            for (var r in e) n.push(r);
                            return (
                                n.reverse(),
                                function t() {
                                    for (; n.length; ) {
                                        var r = n.pop();
                                        if (r in e) return (t.value = r), (t.done = !1), t;
                                    }
                                    return (t.done = !0), t;
                                }
                            );
                        }),
                        (e.values = A),
                        (R.prototype = {
                            constructor: R,
                            reset: function (e) {
                                if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(T), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                            },
                            stop: function () {
                                this.done = !0;
                                var t = this.tryEntries[0].completion;
                                if ("throw" === t.type) throw t.arg;
                                return this.rval;
                            },
                            dispatchException: function (e) {
                                if (this.done) throw e;
                                var n = this;
                                function o(r, o) {
                                    return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                                }
                                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                    var a = this.tryEntries[i],
                                        c = a.completion;
                                    if ("root" === a.tryLoc) return o("end");
                                    if (a.tryLoc <= this.prev) {
                                        var u = r.call(a, "catchLoc"),
                                            l = r.call(a, "finallyLoc");
                                        if (u && l) {
                                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                                        } else if (u) {
                                            if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                        } else {
                                            if (!l) throw Error("try statement without catch or finally");
                                            if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                                        }
                                    }
                                }
                            },
                            abrupt: function (t, e) {
                                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                    var o = this.tryEntries[n];
                                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                        var i = o;
                                        break;
                                    }
                                }
                                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                                var a = i ? i.completion : {};
                                return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                            },
                            complete: function (t, e) {
                                if ("throw" === t.type) throw t.arg;
                                return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                            },
                            finish: function (t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), T(n), v;
                                }
                            },
                            catch: function (t) {
                                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                    var n = this.tryEntries[e];
                                    if (n.tryLoc === t) {
                                        var r = n.completion;
                                        if ("throw" === r.type) {
                                            var o = r.arg;
                                            T(n);
                                        }
                                        return o;
                                    }
                                }
                                throw Error("illegal catch attempt");
                            },
                            delegateYield: function (e, n, r) {
                                return (this.delegate = { iterator: A(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                            },
                        }),
                        e
                    );
                }
                function _(t, e, n, r, o, i, a) {
                    try {
                        var c = t[i](a),
                            u = c.value;
                    } catch (t) {
                        return void n(t);
                    }
                    c.done ? e(u) : Promise.resolve(u).then(r, o);
                }
                function j(t, e) {
                    var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                    if (!n) {
                        if (Array.isArray(t) || (n = S(t)) || (e && t && "number" == typeof t.length)) {
                            n && (t = n);
                            var r = 0,
                                o = function () {};
                            return {
                                s: o,
                                n: function () {
                                    return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                                },
                                e: function (t) {
                                    throw t;
                                },
                                f: o,
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var i,
                        a = !0,
                        c = !1;
                    return {
                        s: function () {
                            n = n.call(t);
                        },
                        n: function () {
                            var t = n.next();
                            return (a = t.done), t;
                        },
                        e: function (t) {
                            (c = !0), (i = t);
                        },
                        f: function () {
                            try {
                                a || null == n.return || n.return();
                            } finally {
                                if (c) throw i;
                            }
                        },
                    };
                }
                function S(t, e) {
                    if (t) {
                        if ("string" == typeof t) return k(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(t, e) : void 0;
                    }
                }
                function k(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                    return r;
                }
                function P(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, E(r.key), r);
                    }
                }
                function E(t) {
                    var e = (function (t) {
                        if ("object" != m(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, "string");
                            if ("object" != m(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return String(t);
                    })(t);
                    return "symbol" == m(e) ? e : e + "";
                }
                function x(t) {
                    var e = "function" == typeof Map ? new Map() : void 0;
                    return (
                        (x = function (t) {
                            if (
                                null === t ||
                                !(function (t) {
                                    try {
                                        return -1 !== Function.toString.call(t).indexOf("[native code]");
                                    } catch (e) {
                                        return "function" == typeof t;
                                    }
                                })(t)
                            )
                                return t;
                            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                            if (void 0 !== e) {
                                if (e.has(t)) return e.get(t);
                                e.set(t, n);
                            }
                            function n() {
                                return (function (t, e, n) {
                                    if (L()) return Reflect.construct.apply(null, arguments);
                                    var r = [null];
                                    r.push.apply(r, e);
                                    var o = new (t.bind.apply(t, r))();
                                    return n && C(o, n.prototype), o;
                                })(t, arguments, T(this).constructor);
                            }
                            return (n.prototype = Object.create(t.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } })), C(n, t);
                        }),
                        x(t)
                    );
                }
                function L() {
                    try {
                        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                    } catch (t) {}
                    return (L = function () {
                        return !!t;
                    })();
                }
                function C(t, e) {
                    return (
                        (C = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (t, e) {
                                  return (t.__proto__ = e), t;
                              }),
                        C(t, e)
                    );
                }
                function T(t) {
                    return (
                        (T = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (t) {
                                  return t.__proto__ || Object.getPrototypeOf(t);
                              }),
                        T(t)
                    );
                }
                var R = Object.is,
                    A = Object.defineProperty,
                    B = Object.getOwnPropertyDescriptor,
                    I = Object.getOwnPropertyNames,
                    N = Object.getOwnPropertySymbols,
                    $ = Object.getPrototypeOf,
                    q = globalThis,
                    D = q.trustedTypes,
                    G = D ? D.emptyScript : "",
                    F = q.reactiveElementPolyfillSupport,
                    z = function (t, e) {
                        return t;
                    },
                    U = {
                        toAttribute: function (t, e) {
                            switch (e) {
                                case Boolean:
                                    t = t ? G : null;
                                    break;
                                case Object:
                                case Array:
                                    t = null == t ? t : JSON.stringify(t);
                            }
                            return t;
                        },
                        fromAttribute: function (t, e) {
                            var n = t;
                            switch (e) {
                                case Boolean:
                                    n = null !== t;
                                    break;
                                case Number:
                                    n = null === t ? null : Number(t);
                                    break;
                                case Object:
                                case Array:
                                    try {
                                        n = JSON.parse(t);
                                    } catch (t) {
                                        n = null;
                                    }
                            }
                            return n;
                        },
                    },
                    M = function (t, e) {
                        return !R(t, e);
                    },
                    H = { attribute: !0, type: String, converter: U, reflect: !1, hasChanged: M };
                (null !== (u = Symbol.metadata) && void 0 !== u) || (Symbol.metadata = Symbol("metadata")), (null !== (l = q.litPropertyMetadata) && void 0 !== l) || (q.litPropertyMetadata = new WeakMap());
                var Y = (function (t) {
                    function e() {
                        var t;
                        return (
                            (function (t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            })(this, e),
                            ((t = (function (t, e, n) {
                                return (
                                    (e = T(e)),
                                    (function (t, e) {
                                        if (e && ("object" == m(e) || "function" == typeof e)) return e;
                                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                        return (function (t) {
                                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return t;
                                        })(t);
                                    })(t, L() ? Reflect.construct(e, n || [], T(t).constructor) : e.apply(t, n))
                                );
                            })(this, e))._$Ep = void 0),
                            (t.isUpdatePending = !1),
                            (t.hasUpdated = !1),
                            (t._$Em = null),
                            t._$Ev(),
                            t
                        );
                    }
                    return (
                        (function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && C(t, e);
                        })(e, t),
                        (function (t, e, n) {
                            return e && P(t.prototype, e), n && P(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                        })(
                            e,
                            [
                                {
                                    key: "_$Ev",
                                    value: function () {
                                        var t,
                                            e = this;
                                        (this._$ES = new Promise(function (t) {
                                            return (e.enableUpdating = t);
                                        })),
                                            (this._$AL = new Map()),
                                            this._$E_(),
                                            this.requestUpdate(),
                                            null === (t = this.constructor.l) ||
                                                void 0 === t ||
                                                t.forEach(function (t) {
                                                    return t(e);
                                                });
                                    },
                                },
                                {
                                    key: "addController",
                                    value: function (t) {
                                        var e, n;
                                        (null !== (e = this._$EO) && void 0 !== e ? e : (this._$EO = new Set())).add(t), void 0 !== this.renderRoot && this.isConnected && (null === (n = t.hostConnected) || void 0 === n || n.call(t));
                                    },
                                },
                                {
                                    key: "removeController",
                                    value: function (t) {
                                        var e;
                                        null === (e = this._$EO) || void 0 === e || e.delete(t);
                                    },
                                },
                                {
                                    key: "_$E_",
                                    value: function () {
                                        var t,
                                            e = new Map(),
                                            n = j(this.constructor.elementProperties.keys());
                                        try {
                                            for (n.s(); !(t = n.n()).done; ) {
                                                var r = t.value;
                                                this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
                                            }
                                        } catch (t) {
                                            n.e(t);
                                        } finally {
                                            n.f();
                                        }
                                        e.size > 0 && (this._$Ep = e);
                                    },
                                },
                                {
                                    key: "createRenderRoot",
                                    value: function () {
                                        var t,
                                            e = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
                                        return v(e, this.constructor.elementStyles), e;
                                    },
                                },
                                {
                                    key: "connectedCallback",
                                    value: function () {
                                        var t, e;
                                        (null !== (t = this.renderRoot) && void 0 !== t) || (this.renderRoot = this.createRenderRoot()),
                                            this.enableUpdating(!0),
                                            null === (e = this._$EO) ||
                                                void 0 === e ||
                                                e.forEach(function (t) {
                                                    var e;
                                                    return null === (e = t.hostConnected) || void 0 === e ? void 0 : e.call(t);
                                                });
                                    },
                                },
                                { key: "enableUpdating", value: function (t) {} },
                                {
                                    key: "disconnectedCallback",
                                    value: function () {
                                        var t;
                                        null === (t = this._$EO) ||
                                            void 0 === t ||
                                            t.forEach(function (t) {
                                                var e;
                                                return null === (e = t.hostDisconnected) || void 0 === e ? void 0 : e.call(t);
                                            });
                                    },
                                },
                                {
                                    key: "attributeChangedCallback",
                                    value: function (t, e, n) {
                                        this._$AK(t, n);
                                    },
                                },
                                {
                                    key: "_$EC",
                                    value: function (t, e) {
                                        var n = this.constructor.elementProperties.get(t),
                                            r = this.constructor._$Eu(t, n);
                                        if (void 0 !== r && !0 === n.reflect) {
                                            var o,
                                                i = (void 0 !== (null === (o = n.converter) || void 0 === o ? void 0 : o.toAttribute) ? n.converter : U).toAttribute(e, n.type);
                                            (this._$Em = t), null == i ? this.removeAttribute(r) : this.setAttribute(r, i), (this._$Em = null);
                                        }
                                    },
                                },
                                {
                                    key: "_$AK",
                                    value: function (t, e) {
                                        var n = this.constructor,
                                            r = n._$Eh.get(t);
                                        if (void 0 !== r && this._$Em !== r) {
                                            var o,
                                                i = n.getPropertyOptions(r),
                                                a = "function" == typeof i.converter ? { fromAttribute: i.converter } : void 0 !== (null === (o = i.converter) || void 0 === o ? void 0 : o.fromAttribute) ? i.converter : U;
                                            (this._$Em = r), (this[r] = a.fromAttribute(e, i.type)), (this._$Em = null);
                                        }
                                    },
                                },
                                {
                                    key: "requestUpdate",
                                    value: function (t, e, n) {
                                        if (void 0 !== t) {
                                            var r;
                                            if ((null != n || (n = this.constructor.getPropertyOptions(t)), !(null !== (r = n.hasChanged) && void 0 !== r ? r : M)(this[t], e))) return;
                                            this.P(t, e, n);
                                        }
                                        !1 === this.isUpdatePending && (this._$ES = this._$ET());
                                    },
                                },
                                {
                                    key: "P",
                                    value: function (t, e, n) {
                                        var r;
                                        this._$AL.has(t) || this._$AL.set(t, e), !0 === n.reflect && this._$Em !== t && (null !== (r = this._$Ej) && void 0 !== r ? r : (this._$Ej = new Set())).add(t);
                                    },
                                },
                                {
                                    key: "_$ET",
                                    value:
                                        ((n = (function (t) {
                                            return function () {
                                                var e = this,
                                                    n = arguments;
                                                return new Promise(function (r, o) {
                                                    var i = t.apply(e, n);
                                                    function a(t) {
                                                        _(i, r, o, a, c, "next", t);
                                                    }
                                                    function c(t) {
                                                        _(i, r, o, a, c, "throw", t);
                                                    }
                                                    a(void 0);
                                                });
                                            };
                                        })(
                                            O().mark(function t() {
                                                var e;
                                                return O().wrap(
                                                    function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return (this.isUpdatePending = !0), (t.prev = 1), (t.next = 4), this._$ES;
                                                                case 4:
                                                                    t.next = 9;
                                                                    break;
                                                                case 6:
                                                                    (t.prev = 6), (t.t0 = t.catch(1)), Promise.reject(t.t0);
                                                                case 9:
                                                                    if (((e = this.scheduleUpdate()), (t.t1 = null != e), !t.t1)) {
                                                                        t.next = 14;
                                                                        break;
                                                                    }
                                                                    return (t.next = 14), e;
                                                                case 14:
                                                                    return t.abrupt("return", !this.isUpdatePending);
                                                                case 15:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    this,
                                                    [[1, 6]],
                                                );
                                            }),
                                        )),
                                        function () {
                                            return n.apply(this, arguments);
                                        }),
                                },
                                {
                                    key: "scheduleUpdate",
                                    value: function () {
                                        return this.performUpdate();
                                    },
                                },
                                {
                                    key: "performUpdate",
                                    value: function () {
                                        if (this.isUpdatePending) {
                                            if (!this.hasUpdated) {
                                                var t;
                                                if (((null !== (t = this.renderRoot) && void 0 !== t) || (this.renderRoot = this.createRenderRoot()), this._$Ep)) {
                                                    var e,
                                                        n = j(this._$Ep);
                                                    try {
                                                        for (n.s(); !(e = n.n()).done; ) {
                                                            var r = w(e.value, 2),
                                                                o = r[0],
                                                                i = r[1];
                                                            this[o] = i;
                                                        }
                                                    } catch (t) {
                                                        n.e(t);
                                                    } finally {
                                                        n.f();
                                                    }
                                                    this._$Ep = void 0;
                                                }
                                                var a = this.constructor.elementProperties;
                                                if (a.size > 0) {
                                                    var c,
                                                        u = j(a);
                                                    try {
                                                        for (u.s(); !(c = u.n()).done; ) {
                                                            var l = w(c.value, 2),
                                                                s = l[0],
                                                                f = l[1];
                                                            !0 !== f.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], f);
                                                        }
                                                    } catch (t) {
                                                        u.e(t);
                                                    } finally {
                                                        u.f();
                                                    }
                                                }
                                            }
                                            var h = !1,
                                                p = this._$AL;
                                            try {
                                                var y;
                                                (h = this.shouldUpdate(p))
                                                    ? (this.willUpdate(p),
                                                      null !== (y = this._$EO) &&
                                                          void 0 !== y &&
                                                          y.forEach(function (t) {
                                                              var e;
                                                              return null === (e = t.hostUpdate) || void 0 === e ? void 0 : e.call(t);
                                                          }),
                                                      this.update(p))
                                                    : this._$EU();
                                            } catch (p) {
                                                throw ((h = !1), this._$EU(), p);
                                            }
                                            h && this._$AE(p);
                                        }
                                    },
                                },
                                { key: "willUpdate", value: function (t) {} },
                                {
                                    key: "_$AE",
                                    value: function (t) {
                                        var e;
                                        null !== (e = this._$EO) &&
                                            void 0 !== e &&
                                            e.forEach(function (t) {
                                                var e;
                                                return null === (e = t.hostUpdated) || void 0 === e ? void 0 : e.call(t);
                                            }),
                                            this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
                                            this.updated(t);
                                    },
                                },
                                {
                                    key: "_$EU",
                                    value: function () {
                                        (this._$AL = new Map()), (this.isUpdatePending = !1);
                                    },
                                },
                                {
                                    key: "updateComplete",
                                    get: function () {
                                        return this.getUpdateComplete();
                                    },
                                },
                                {
                                    key: "getUpdateComplete",
                                    value: function () {
                                        return this._$ES;
                                    },
                                },
                                {
                                    key: "shouldUpdate",
                                    value: function (t) {
                                        return !0;
                                    },
                                },
                                {
                                    key: "update",
                                    value: function (t) {
                                        var e = this;
                                        this._$Ej &&
                                            (this._$Ej = this._$Ej.forEach(function (t) {
                                                return e._$EC(t, e[t]);
                                            })),
                                            this._$EU();
                                    },
                                },
                                { key: "updated", value: function (t) {} },
                                { key: "firstUpdated", value: function (t) {} },
                            ],
                            [
                                {
                                    key: "addInitializer",
                                    value: function (t) {
                                        var e;
                                        this._$Ei(), (null !== (e = this.l) && void 0 !== e ? e : (this.l = [])).push(t);
                                    },
                                },
                                {
                                    key: "observedAttributes",
                                    get: function () {
                                        return this.finalize(), this._$Eh && g(this._$Eh.keys());
                                    },
                                },
                                {
                                    key: "createProperty",
                                    value: function (t) {
                                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H;
                                        if ((e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor)) {
                                            var n = Symbol(),
                                                r = this.getPropertyDescriptor(t, n, e);
                                            void 0 !== r && A(this.prototype, t, r);
                                        }
                                    },
                                },
                                {
                                    key: "getPropertyDescriptor",
                                    value: function (t, e, n) {
                                        var r,
                                            o =
                                                null !== (r = B(this.prototype, t)) && void 0 !== r
                                                    ? r
                                                    : {
                                                          get: function () {
                                                              return this[e];
                                                          },
                                                          set: function (t) {
                                                              this[e] = t;
                                                          },
                                                      },
                                            i = o.get,
                                            a = o.set;
                                        return {
                                            get: function () {
                                                return null == i ? void 0 : i.call(this);
                                            },
                                            set: function (e) {
                                                var r = null == i ? void 0 : i.call(this);
                                                a.call(this, e), this.requestUpdate(t, r, n);
                                            },
                                            configurable: !0,
                                            enumerable: !0,
                                        };
                                    },
                                },
                                {
                                    key: "getPropertyOptions",
                                    value: function (t) {
                                        var e;
                                        return null !== (e = this.elementProperties.get(t)) && void 0 !== e ? e : H;
                                    },
                                },
                                {
                                    key: "_$Ei",
                                    value: function () {
                                        if (!this.hasOwnProperty(z("elementProperties"))) {
                                            var t = $(this);
                                            t.finalize(), void 0 !== t.l && (this.l = g(t.l)), (this.elementProperties = new Map(t.elementProperties));
                                        }
                                    },
                                },
                                {
                                    key: "finalize",
                                    value: function () {
                                        if (!this.hasOwnProperty(z("finalized"))) {
                                            if (((this.finalized = !0), this._$Ei(), this.hasOwnProperty(z("properties")))) {
                                                var t,
                                                    e = this.properties,
                                                    n = j([].concat(g(I(e)), g(N(e))));
                                                try {
                                                    for (n.s(); !(t = n.n()).done; ) {
                                                        var r = t.value;
                                                        this.createProperty(r, e[r]);
                                                    }
                                                } catch (t) {
                                                    n.e(t);
                                                } finally {
                                                    n.f();
                                                }
                                            }
                                            var o = this[Symbol.metadata];
                                            if (null !== o) {
                                                var i = litPropertyMetadata.get(o);
                                                if (void 0 !== i) {
                                                    var a,
                                                        c = j(i);
                                                    try {
                                                        for (c.s(); !(a = c.n()).done; ) {
                                                            var u = w(a.value, 2),
                                                                l = u[0],
                                                                s = u[1];
                                                            this.elementProperties.set(l, s);
                                                        }
                                                    } catch (t) {
                                                        c.e(t);
                                                    } finally {
                                                        c.f();
                                                    }
                                                }
                                            }
                                            this._$Eh = new Map();
                                            var f,
                                                h = j(this.elementProperties);
                                            try {
                                                for (h.s(); !(f = h.n()).done; ) {
                                                    var p = w(f.value, 2),
                                                        y = p[0],
                                                        d = p[1],
                                                        v = this._$Eu(y, d);
                                                    void 0 !== v && this._$Eh.set(v, y);
                                                }
                                            } catch (t) {
                                                h.e(t);
                                            } finally {
                                                h.f();
                                            }
                                            this.elementStyles = this.finalizeStyles(this.styles);
                                        }
                                    },
                                },
                                {
                                    key: "finalizeStyles",
                                    value: function (t) {
                                        var e = [];
                                        if (Array.isArray(t)) {
                                            var n,
                                                r = j(new Set(t.flat(1 / 0).reverse()));
                                            try {
                                                for (r.s(); !(n = r.n()).done; ) {
                                                    var o = n.value;
                                                    e.unshift(b(o));
                                                }
                                            } catch (t) {
                                                r.e(t);
                                            } finally {
                                                r.f();
                                            }
                                        } else void 0 !== t && e.push(b(t));
                                        return e;
                                    },
                                },
                                {
                                    key: "_$Eu",
                                    value: function (t, e) {
                                        var n = e.attribute;
                                        return !1 === n ? void 0 : "string" == typeof n ? n : "string" == typeof t ? t.toLowerCase() : void 0;
                                    },
                                },
                            ],
                        )
                    );
                    var n;
                })(x(HTMLElement));
                (Y.elementStyles = []), (Y.shadowRootOptions = { mode: "open" }), (Y[z("elementProperties")] = new Map()), (Y[z("finalized")] = new Map()), null != F && F({ ReactiveElement: Y }), (null !== (s = q.reactiveElementVersions) && void 0 !== s ? s : (q.reactiveElementVersions = [])).push("2.0.4");
                var W,
                    V,
                    X = n(681);
                function J(t) {
                    return (
                        (J =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (t) {
                                      return typeof t;
                                  }
                                : function (t) {
                                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                  }),
                        J(t)
                    );
                }
                function Z(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, K(r.key), r);
                    }
                }
                function K(t) {
                    var e = (function (t) {
                        if ("object" != J(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, "string");
                            if ("object" != J(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return String(t);
                    })(t);
                    return "symbol" == J(e) ? e : e + "";
                }
                function Q(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }
                function tt() {
                    try {
                        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                    } catch (t) {}
                    return (tt = function () {
                        return !!t;
                    })();
                }
                function et(t, e, n, r) {
                    var o = nt(rt(1 & r ? t.prototype : t), e, n);
                    return 2 & r && "function" == typeof o
                        ? function (t) {
                              return o.apply(n, t);
                          }
                        : o;
                }
                function nt() {
                    return (
                        (nt =
                            "undefined" != typeof Reflect && Reflect.get
                                ? Reflect.get.bind()
                                : function (t, e, n) {
                                      var r = (function (t, e) {
                                          for (; !{}.hasOwnProperty.call(t, e) && null !== (t = rt(t)); );
                                          return t;
                                      })(t, e);
                                      if (r) {
                                          var o = Object.getOwnPropertyDescriptor(r, e);
                                          return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                                      }
                                  }),
                        nt.apply(null, arguments)
                    );
                }
                function rt(t) {
                    return (
                        (rt = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (t) {
                                  return t.__proto__ || Object.getPrototypeOf(t);
                              }),
                        rt(t)
                    );
                }
                function ot(t, e) {
                    return (
                        (ot = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (t, e) {
                                  return (t.__proto__ = e), t;
                              }),
                        ot(t, e)
                    );
                }
                var it = (function (t) {
                    function e() {
                        var t;
                        return (
                            (function (t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            })(this, e),
                            ((t = (function (t, e, n) {
                                return (
                                    (e = rt(e)),
                                    (function (t, e) {
                                        if (e && ("object" == J(e) || "function" == typeof e)) return e;
                                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                        return Q(t);
                                    })(t, tt() ? Reflect.construct(e, n || [], rt(t).constructor) : e.apply(t, n))
                                );
                            })(this, e, arguments)).renderOptions = { host: Q(t) }),
                            (t._$Do = void 0),
                            t
                        );
                    }
                    return (
                        (function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && ot(t, e);
                        })(e, t),
                        (function (t, e) {
                            return e && Z(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                        })(e, [
                            {
                                key: "createRenderRoot",
                                value: function () {
                                    var t,
                                        n,
                                        r = et(e, "createRenderRoot", this, 3)([]);
                                    return (null !== (n = (t = this.renderOptions).renderBefore) && void 0 !== n) || (t.renderBefore = r.firstChild), r;
                                },
                            },
                            {
                                key: "update",
                                value: function (t) {
                                    var n = this.render();
                                    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), et(e, "update", this, 3)([t]), (this._$Do = (0, X.XX)(n, this.renderRoot, this.renderOptions));
                                },
                            },
                            {
                                key: "connectedCallback",
                                value: function () {
                                    var t;
                                    et(e, "connectedCallback", this, 3)([]), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
                                },
                            },
                            {
                                key: "disconnectedCallback",
                                value: function () {
                                    var t;
                                    et(e, "disconnectedCallback", this, 3)([]), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return X.c0;
                                },
                            },
                        ])
                    );
                })(Y);
                (it._$litElement$ = !0), (it.finalized = !0), null === (W = globalThis.litElementHydrateSupport) || void 0 === W || W.call(globalThis, { LitElement: it });
                var at = globalThis.litElementPolyfillSupport;
                null == at || at({ LitElement: it }), (null !== (V = globalThis.litElementVersions) && void 0 !== V ? V : (globalThis.litElementVersions = [])).push("4.1.1");
            },
        },
        r = {};
    function o(t) {
        var e = r[t];
        if (void 0 !== e) return e.exports;
        var i = (r[t] = { exports: {} });
        return n[t](i, i.exports, o), i.exports;
    }
    (o.m = n),
        (o.d = (t, e) => {
            for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        }),
        (o.f = {}),
        (o.e = (t) => Promise.all(Object.keys(o.f).reduce((e, n) => (o.f[n](t, e), e), []))),
        (o.u = (t) => t + ".js"),
        (o.miniCssF = (t) => {}),
        (o.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (t) {
                if ("object" == typeof window) return window;
            }
        })()),
        (o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (t = {}),
        (e = "@ndiinginc/material:"),
        (o.l = (n, r, i, a) => {
            if (t[n]) t[n].push(r);
            else {
                var c, u;
                if (void 0 !== i)
                    for (var l = document.getElementsByTagName("script"), s = 0; s < l.length; s++) {
                        var f = l[s];
                        if (f.getAttribute("src") == n || f.getAttribute("data-webpack") == e + i) {
                            c = f;
                            break;
                        }
                    }
                c || ((u = !0), ((c = document.createElement("script")).charset = "utf-8"), (c.timeout = 120), o.nc && c.setAttribute("nonce", o.nc), c.setAttribute("data-webpack", e + i), (c.src = n)), (t[n] = [r]);
                var h = (e, r) => {
                        (c.onerror = c.onload = null), clearTimeout(p);
                        var o = t[n];
                        if ((delete t[n], c.parentNode && c.parentNode.removeChild(c), o && o.forEach((t) => t(r)), e)) return e(r);
                    },
                    p = setTimeout(h.bind(null, void 0, { type: "timeout", target: c }), 12e4);
                (c.onerror = h.bind(null, c.onerror)), (c.onload = h.bind(null, c.onload)), u && document.head.appendChild(c);
            }
        }),
        (o.r = (t) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (() => {
            var t;
            o.g.importScripts && (t = o.g.location + "");
            var e = o.g.document;
            if (!t && e && (e.currentScript && "SCRIPT" === e.currentScript.tagName.toUpperCase() && (t = e.currentScript.src), !t)) {
                var n = e.getElementsByTagName("script");
                if (n.length) for (var r = n.length - 1; r > -1 && (!t || !/^http(s?):/.test(t)); ) t = n[r--].src;
            }
            if (!t) throw new Error("Automatic publicPath is not supported in this browser");
            (t = t
                .replace(/#.*$/, "")
                .replace(/\?.*$/, "")
                .replace(/\/[^\/]+$/, "/")),
                (o.p = t);
        })(),
        (() => {
            var t = { 792: 0 };
            o.f.j = (e, n) => {
                var r = o.o(t, e) ? t[e] : void 0;
                if (0 !== r)
                    if (r) n.push(r[2]);
                    else {
                        var i = new Promise((n, o) => (r = t[e] = [n, o]));
                        n.push((r[2] = i));
                        var a = o.p + o.u(e),
                            c = new Error();
                        o.l(
                            a,
                            (n) => {
                                if (o.o(t, e) && (0 !== (r = t[e]) && (t[e] = void 0), r)) {
                                    var i = n && ("load" === n.type ? "missing" : n.type),
                                        a = n && n.target && n.target.src;
                                    (c.message = "Loading chunk " + e + " failed.\n(" + i + ": " + a + ")"), (c.name = "ChunkLoadError"), (c.type = i), (c.request = a), r[1](c);
                                }
                            },
                            "chunk-" + e,
                            e,
                        );
                    }
            };
            var e = (e, n) => {
                    var r,
                        i,
                        [a, c, u] = n,
                        l = 0;
                    if (a.some((e) => 0 !== t[e])) {
                        for (r in c) o.o(c, r) && (o.m[r] = c[r]);
                        u && u(o);
                    }
                    for (e && e(n); l < a.length; l++) (i = a[l]), o.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
                },
                n = (self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []);
            n.forEach(e.bind(null, 0)), (n.push = e.bind(null, n.push.bind(n)));
        })();
    var i = o(420),
        a = o(548);
    function c(t) {
        return (
            (c =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            c(t)
        );
    }
    function u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, l(r.key), r);
        }
    }
    function l(t) {
        var e = (function (t) {
            if ("object" != c(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != c(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == c(e) ? e : e + "";
    }
    function s() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (s = function () {
            return !!t;
        })();
    }
    function f() {
        return (
            (f =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = h(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            f.apply(null, arguments)
        );
    }
    function h(t) {
        return (
            (h = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            h(t)
        );
    }
    function p(t, e) {
        return (
            (p = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            p(t, e)
        );
    }
    var y = (function (t) {
        function e() {
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                (function (t, e, n) {
                    return (
                        (e = h(e)),
                        (function (t, e) {
                            if (e && ("object" == c(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, s() ? Reflect.construct(e, n || [], h(t).constructor) : e.apply(t, n))
                    );
                })(this, e, arguments)
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && p(t, e);
            })(e, t),
            (function (t, e) {
                return e && u(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "connectedCallback",
                    value: function () {
                        !(function (t, e, n) {
                            var r = f(h(t.prototype), "connectedCallback", n);
                            return "function" == typeof r
                                ? function (t) {
                                      return r.apply(n, t);
                                  }
                                : r;
                        })(
                            e,
                            0,
                            this,
                        )([]),
                            this.classList.add("md-icon");
                    },
                },
            ])
        );
    })(a.$);
    customElements.define("md-icon", y);
    var d = o(681),
        v = function (t) {
            return null != t ? t : d.s6;
        };
    function b(t) {
        return (
            (b =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            b(t)
        );
    }
    function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    function g(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, w(r.key), r);
        }
    }
    function w(t) {
        var e = (function (t) {
            if ("object" != b(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != b(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == b(e) ? e : e + "";
    }
    var O = function (t) {
            return function () {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return { _$litDirective$: t, values: n };
            };
        },
        _ = (function () {
            return (function (t, e) {
                return e && g(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(
                function t(e) {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t);
                },
                [
                    {
                        key: "_$AU",
                        get: function () {
                            return this._$AM._$AU;
                        },
                    },
                    {
                        key: "_$AT",
                        value: function (t, e, n) {
                            (this._$Ct = t), (this._$AM = e), (this._$Ci = n);
                        },
                    },
                    {
                        key: "_$AS",
                        value: function (t, e) {
                            return this.update(t, e);
                        },
                    },
                    {
                        key: "update",
                        value: function (t, e) {
                            return this.render.apply(
                                this,
                                (function (t) {
                                    return (
                                        (function (t) {
                                            if (Array.isArray(t)) return m(t);
                                        })(t) ||
                                        (function (t) {
                                            if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                                        })(t) ||
                                        (function (t, e) {
                                            if (t) {
                                                if ("string" == typeof t) return m(t, e);
                                                var n = {}.toString.call(t).slice(8, -1);
                                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(t, e) : void 0;
                                            }
                                        })(t) ||
                                        (function () {
                                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                        })()
                                    );
                                })(e),
                            );
                        },
                    },
                ],
            );
        })();
    function j(t) {
        return (
            (j =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            j(t)
        );
    }
    function S(t, e) {
        if (t) {
            if ("string" == typeof t) return k(t, e);
            var n = {}.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(t, e) : void 0;
        }
    }
    function k(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    function P(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, E(r.key), r);
        }
    }
    function E(t) {
        var e = (function (t) {
            if ("object" != j(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != j(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == j(e) ? e : e + "";
    }
    function x() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (x = function () {
            return !!t;
        })();
    }
    function L(t) {
        return (
            (L = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            L(t)
        );
    }
    function C(t, e) {
        return (
            (C = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            C(t, e)
        );
    }
    var T,
        R = "important",
        A = " !" + R,
        B = O(
            (function (t) {
                function e(t) {
                    var n, r;
                    if (
                        ((function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        (r = (function (t, e, n) {
                            return (
                                (e = L(e)),
                                (function (t, e) {
                                    if (e && ("object" == j(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, x() ? Reflect.construct(e, n || [], L(t).constructor) : e.apply(t, n))
                            );
                        })(this, e, [t])),
                        1 !== t.type || "style" !== t.name || (null === (n = t.strings) || void 0 === n ? void 0 : n.length) > 2)
                    )
                        throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
                    return r;
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && C(t, e);
                    })(e, t),
                    (function (t, e) {
                        return e && P(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                    })(e, [
                        {
                            key: "render",
                            value: function (t) {
                                return Object.keys(t).reduce(function (e, n) {
                                    var r = t[n];
                                    return null == r ? e : e + "".concat((n = n.includes("-") ? n : n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()), ":").concat(r, ";");
                                }, "");
                            },
                        },
                        {
                            key: "update",
                            value: function (t, e) {
                                var n = (function (t, e) {
                                        return (
                                            (function (t) {
                                                if (Array.isArray(t)) return t;
                                            })(t) ||
                                            (function (t, e) {
                                                var n = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                                                if (null != n) {
                                                    var r,
                                                        o,
                                                        i,
                                                        a,
                                                        c = [],
                                                        u = !0,
                                                        l = !1;
                                                    try {
                                                        if (((i = (n = n.call(t)).next), 0 === e)) {
                                                            if (Object(n) !== n) return;
                                                            u = !1;
                                                        } else for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== e); u = !0);
                                                    } catch (t) {
                                                        (l = !0), (o = t);
                                                    } finally {
                                                        try {
                                                            if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                                                        } finally {
                                                            if (l) throw o;
                                                        }
                                                    }
                                                    return c;
                                                }
                                            })(t, e) ||
                                            S(t, e) ||
                                            (function () {
                                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                            })()
                                        );
                                    })(e, 1)[0],
                                    r = t.element.style;
                                if (void 0 === this.ft) return (this.ft = new Set(Object.keys(n))), this.render(n);
                                var o,
                                    i = (function (t) {
                                        var e = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                                        if (!e) {
                                            if (Array.isArray(t) || (e = S(t))) {
                                                e && (t = e);
                                                var n = 0,
                                                    r = function () {};
                                                return {
                                                    s: r,
                                                    n: function () {
                                                        return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
                                                    },
                                                    e: function (t) {
                                                        throw t;
                                                    },
                                                    f: r,
                                                };
                                            }
                                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                        }
                                        var o,
                                            i = !0,
                                            a = !1;
                                        return {
                                            s: function () {
                                                e = e.call(t);
                                            },
                                            n: function () {
                                                var t = e.next();
                                                return (i = t.done), t;
                                            },
                                            e: function (t) {
                                                (a = !0), (o = t);
                                            },
                                            f: function () {
                                                try {
                                                    i || null == e.return || e.return();
                                                } finally {
                                                    if (a) throw o;
                                                }
                                            },
                                        };
                                    })(this.ft);
                                try {
                                    for (i.s(); !(o = i.n()).done; ) {
                                        var a = o.value;
                                        null == n[a] && (this.ft.delete(a), a.includes("-") ? r.removeProperty(a) : (r[a] = null));
                                    }
                                } catch (t) {
                                    i.e(t);
                                } finally {
                                    i.f();
                                }
                                for (var c in n) {
                                    var u = n[c];
                                    if (null != u) {
                                        this.ft.add(c);
                                        var l = "string" == typeof u && u.endsWith(A);
                                        c.includes("-") || l ? r.setProperty(c, l ? u.slice(0, -11) : u, l ? R : "") : (r[c] = u);
                                    }
                                }
                                return d.c0;
                            },
                        },
                    ])
                );
            })(_),
        );
    function I(t) {
        return (
            (I =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            I(t)
        );
    }
    function N(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    function $(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, z(r.key), r);
        }
    }
    function q() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (q = function () {
            return !!t;
        })();
    }
    function D() {
        return (
            (D =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = G(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            D.apply(null, arguments)
        );
    }
    function G(t) {
        return (
            (G = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            G(t)
        );
    }
    function F(t, e) {
        return (
            (F = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            F(t, e)
        );
    }
    function z(t) {
        var e = (function (t) {
            if ("object" != I(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != I(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == I(e) ? e : e + "";
    }
    var U = (function (t) {
        function e() {
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                (function (t, e, n) {
                    return (
                        (e = G(e)),
                        (function (t, e) {
                            if (e && ("object" == I(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, q() ? Reflect.construct(e, n || [], G(t).constructor) : e.apply(t, n))
                    );
                })(this, e)
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && F(t, e);
            })(e, t),
            (function (t, e) {
                return e && $(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "styleInfo",
                    get: function () {
                        var t = {};
                        if ((this.ratio && (t["aspect-ratio"] = this.ratio), this.circular))
                            if (this.ratio) {
                                var e = (function (t, e) {
                                        return (
                                            (function (t) {
                                                if (Array.isArray(t)) return t;
                                            })(t) ||
                                            (function (t, e) {
                                                var n = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                                                if (null != n) {
                                                    var r,
                                                        o,
                                                        i,
                                                        a,
                                                        c = [],
                                                        u = !0,
                                                        l = !1;
                                                    try {
                                                        if (((i = (n = n.call(t)).next), 0 === e)) {
                                                            if (Object(n) !== n) return;
                                                            u = !1;
                                                        } else for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== e); u = !0);
                                                    } catch (t) {
                                                        (l = !0), (o = t);
                                                    } finally {
                                                        try {
                                                            if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                                                        } finally {
                                                            if (l) throw o;
                                                        }
                                                    }
                                                    return c;
                                                }
                                            })(t, e) ||
                                            (function (t, e) {
                                                if (t) {
                                                    if ("string" == typeof t) return N(t, e);
                                                    var n = {}.toString.call(t).slice(8, -1);
                                                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? N(t, e) : void 0;
                                                }
                                            })(t, e) ||
                                            (function () {
                                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                            })()
                                        );
                                    })(this.ratio.split("/"), 2),
                                    n = e[0],
                                    r = e[1];
                                (n = Number(n)), (r = Number(r)), (t["border-radius"] = "50% / ".concat((50 * n) / r, "%"));
                            } else t["border-radius"] = "50%";
                        return t;
                    },
                },
                {
                    key: "render",
                    value: function () {
                        return (0, i.qy)(
                            T ||
                                (T = (function (t, e) {
                                    return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
                                })(['\n            <img \n                .src="', '" \n                .alt="', '" \n                class="md-image__native"\n                style="', '"\n            >\n        '])),
                            v(this.src),
                            v(this.alt),
                            B(this.styleInfo),
                        );
                    },
                },
                {
                    key: "connectedCallback",
                    value: function () {
                        !(function (t, e, n) {
                            var r = D(G(t.prototype), "connectedCallback", n);
                            return "function" == typeof r
                                ? function (t) {
                                      return r.apply(n, t);
                                  }
                                : r;
                        })(
                            e,
                            0,
                            this,
                        )([]),
                            this.classList.add("md-image");
                    },
                },
            ])
        );
    })(a.$);
    function M(t) {
        return (
            (M =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            M(t)
        );
    }
    function H(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Y(r.key), r);
        }
    }
    function Y(t) {
        var e = (function (t) {
            if ("object" != M(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != M(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == M(e) ? e : e + "";
    }
    function W() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (W = function () {
            return !!t;
        })();
    }
    function V() {
        return (
            (V =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = X(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            V.apply(null, arguments)
        );
    }
    function X(t) {
        return (
            (X = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            X(t)
        );
    }
    function J(t, e) {
        return (
            (J = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            J(t, e)
        );
    }
    !(function (t, e, n) {
        (e = z(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(U, "properties", { src: { type: String }, alt: { type: String }, ratio: { type: String }, circular: { type: Boolean } }),
        customElements.define("md-image", U);
    var Z = (function (t) {
        function e() {
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                (function (t, e, n) {
                    return (
                        (e = X(e)),
                        (function (t, e) {
                            if (e && ("object" == M(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, W() ? Reflect.construct(e, n || [], X(t).constructor) : e.apply(t, n))
                    );
                })(this, e, arguments)
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && J(t, e);
            })(e, t),
            (function (t, e) {
                return e && H(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "connectedCallback",
                    value: function () {
                        !(function (t, e, n) {
                            var r = V(X(t.prototype), "connectedCallback", n);
                            return "function" == typeof r
                                ? function (t) {
                                      return r.apply(n, t);
                                  }
                                : r;
                        })(
                            e,
                            0,
                            this,
                        )([]),
                            this.classList.add("md-divider");
                    },
                },
            ])
        );
    })(a.$);
    function K(t) {
        return (
            (K =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            K(t)
        );
    }
    function Q(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, ot(r.key), r);
        }
    }
    function tt() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (tt = function () {
            return !!t;
        })();
    }
    function et() {
        return (
            (et =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = nt(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            et.apply(null, arguments)
        );
    }
    function nt(t) {
        return (
            (nt = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            nt(t)
        );
    }
    function rt(t, e) {
        return (
            (rt = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            rt(t, e)
        );
    }
    function ot(t) {
        var e = (function (t) {
            if ("object" != K(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != K(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == K(e) ? e : e + "";
    }
    customElements.define("md-divider", Z);
    var it = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                ((t = (function (t, e, n) {
                    return (
                        (e = nt(e)),
                        (function (t, e) {
                            if (e && ("object" == K(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, tt() ? Reflect.construct(e, n || [], nt(t).constructor) : e.apply(t, n))
                    );
                })(this, e)).max = 999),
                t
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && rt(t, e);
            })(e, t),
            (function (t, e) {
                return e && Q(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "render",
                    value: function () {
                        return this.label ? (this.label > this.max ? this.max + "+" : this.label) : i.s6;
                    },
                },
                {
                    key: "connectedCallback",
                    value: function () {
                        !(function (t, e, n) {
                            var r = et(nt(t.prototype), "connectedCallback", n);
                            return "function" == typeof r
                                ? function (t) {
                                      return r.apply(n, t);
                                  }
                                : r;
                        })(
                            e,
                            0,
                            this,
                        )([]),
                            this.classList.add("md-badge");
                    },
                },
            ])
        );
    })(a.$);
    function at(t) {
        return (
            (at =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            at(t)
        );
    }
    function ct() {
        ct = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == at(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(at(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function ut(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function lt(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise(function (r, o) {
                var i = t.apply(e, n);
                function a(t) {
                    ut(i, r, o, a, c, "next", t);
                }
                function c(t) {
                    ut(i, r, o, a, c, "throw", t);
                }
                a(void 0);
            });
        };
    }
    function st(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
                (r = r.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }
    function ft(t, e, n) {
        return (e = pt(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function ht(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, pt(r.key), r);
        }
    }
    function pt(t) {
        var e = (function (t) {
            if ("object" != at(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != at(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == at(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = ot(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(it, "properties", { label: { type: Number }, max: { type: Number } }),
        customElements.define("md-badge", it);
    var yt,
        dt,
        vt,
        bt = (function () {
            return (function (t, e) {
                return e && ht(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(
                function t(e, n) {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        (this.host = e).addController(this),
                        (this.options = (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2
                                    ? st(Object(n), !0).forEach(function (e) {
                                          ft(t, e, n[e]);
                                      })
                                    : Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                      : st(Object(n)).forEach(function (e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                        });
                            }
                            return t;
                        })({ centered: !1, radius: void 0, trigger: void 0, unbounded: !1, container: void 0 }, n));
                },
                [
                    {
                        key: "hostConnected",
                        value:
                            ((e = lt(
                                ct().mark(function t() {
                                    return ct().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (t.next = 2), this.host.updateComplete;
                                                    case 2:
                                                        (this.container = this.host), this.options.container && ("string" == typeof this.options.container ? (this.container = this.host.querySelector(this.options.container)) : (this.container = this.options.container)), (this.trigger = this.host), this.options.trigger && ("string" == typeof this.options.trigger ? (this.trigger = this.host.querySelector(this.options.trigger)) : (this.trigger = this.options.trigger)), this.container.classList.add("md-ripple"), this.container.classList.toggle("md-ripple--bounded", !this.options.unbounded), this.container.setAttribute("tabIndex", 0), this.trigger.classList.add("md-ripple--trigger"), (this.radius = 141.4213562373095), this.options.radius && (this.radius = (this.options.radius / this.container.clientWidth) * 100), this.container.style.setProperty("--md-comp-ripple-radius", this.radius + "%"), (this.handlePointerenter = this.handlePointerenter.bind(this)), (this.handlePointerleave = this.handlePointerleave.bind(this)), (this.handlePointerdown = this.handlePointerdown.bind(this)), (this.handlePointerup = this.handlePointerup.bind(this)), (this.handleFocus = this.handleFocus.bind(this)), (this.handleBlur = this.handleBlur.bind(this)), this.trigger.addEventListener("pointerenter", this.handlePointerenter), this.trigger.addEventListener("pointerleave", this.handlePointerleave), this.trigger.addEventListener("pointerdown", this.handlePointerdown), this.trigger.addEventListener("focus", this.handleFocus), this.trigger.addEventListener("blur", this.handleBlur);
                                                    case 24:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return e.apply(this, arguments);
                            }),
                    },
                    {
                        key: "hostDisconnected",
                        value:
                            ((t = lt(
                                ct().mark(function t() {
                                    return ct().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (t.next = 2), this.host.updateComplete;
                                                    case 2:
                                                        this.container.classList.remove("md-ripple"), this.container.removeAttribute("tabIndex"), this.trigger.classList.remove("md-ripple--trigger"), this.trigger.classList.remove("md-ripple--bounded"), this.trigger.removeEventListener("pointerenter", this.handlePointerenter), this.trigger.removeEventListener("pointerleave", this.handlePointerleave), this.trigger.removeEventListener("pointerdown", this.handlePointerdown), this.trigger.removeEventListener("focus", this.handleFocus), this.trigger.removeEventListener("blur", this.handleBlur);
                                                    case 11:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return t.apply(this, arguments);
                            }),
                    },
                    {
                        key: "handlePointerenter",
                        value: function (t) {
                            this.container.classList.add("md-ripple--hover");
                        },
                    },
                    {
                        key: "handlePointerleave",
                        value: function (t) {
                            this.container.classList.remove("md-ripple--hover");
                        },
                    },
                    {
                        key: "handlePointerdown",
                        value: function (t) {
                            window.addEventListener("pointerup", this.handlePointerup), this.container.classList.add("md-ripple--press");
                            var e = this.container.getBoundingClientRect();
                            if (!this.options.centered) {
                                var n = (t.clientX - e.left) / e.width,
                                    r = (t.clientY - e.top) / e.height,
                                    o = (0.5 - n) * (100 / this.radius),
                                    i = (0.5 - r) * ((100 / this.radius) * (e.height / e.width));
                                this.container.style.setProperty("--md-comp-ripple-radius", this.radius + "%"), this.container.style.setProperty("--md-comp-ripple-left", 100 * n + "%"), this.container.style.setProperty("--md-comp-ripple-top", 100 * r + "%"), this.container.style.setProperty("--md-comp-ripple-x", 100 * o + "%"), this.container.style.setProperty("--md-comp-ripple-y", 100 * i + "%");
                            }
                        },
                    },
                    {
                        key: "handlePointerup",
                        value: function (t) {
                            this.container.classList.remove("md-ripple--press"), window.removeEventListener("pointerup", this.handlePointerup);
                        },
                    },
                    {
                        key: "handleFocus",
                        value: function (t) {
                            this.container.classList.add("md-ripple--focus");
                        },
                    },
                    {
                        key: "handleBlur",
                        value: function (t) {
                            this.container.classList.remove("md-ripple--focus");
                        },
                    },
                ],
            );
            var t, e;
        })();
    function mt(t) {
        return (
            (mt =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            mt(t)
        );
    }
    function gt(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function wt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Et(r.key), r);
        }
    }
    function Ot() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Ot = function () {
            return !!t;
        })();
    }
    function _t(t, e, n, r) {
        var o = jt(St(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function jt() {
        return (
            (jt =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = St(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            jt.apply(null, arguments)
        );
    }
    function St(t) {
        return (
            (St = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            St(t)
        );
    }
    function kt(t, e) {
        return (
            (kt = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            kt(t, e)
        );
    }
    function Pt(t, e, n) {
        return (e = Et(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function Et(t) {
        var e = (function (t) {
            if ("object" != mt(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != mt(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == mt(e) ? e : e + "";
    }
    var xt,
        Lt,
        Ct,
        Tt = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    Pt(
                        (t = (function (t, e, n) {
                            return (
                                (e = St(e)),
                                (function (t, e) {
                                    if (e && ("object" == mt(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, Ot() ? Reflect.construct(e, n || [], St(t).constructor) : e.apply(t, n))
                            );
                        })(this, e)),
                        "variants",
                        ["elevated", "filled", "filled-tonal", "outlined"],
                    ),
                    (t.type = "button"),
                    (t.ripple = new bt(t, { trigger: ".md-button__native" })),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && kt(t, e);
                })(e, t),
                (function (t, e) {
                    return e && wt(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(yt || (yt = gt(['\n            <button \n                class="md-button__native"\n                .type="', '"\n            >button</button>\n            ', "\n            ", "\n        "])), v(this.type), this.icon ? (0, i.qy)(dt || (dt = gt(['<md-icon class="md-button__icon">', "</md-icon>"])), this.icon) : i.s6, this.label ? (0, i.qy)(vt || (vt = gt(['<div class="md-button__label">', "</div>"])), this.label) : i.s6);
                        },
                    },
                    {
                        key: "connectedCallback",
                        value: function () {
                            _t(e, "connectedCallback", this, 3)([]), this.classList.add("md-button");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            var n = this;
                            _t(e, "updated", this, 3)([t]),
                                t.has("variant") &&
                                    this.variants.forEach(function (t) {
                                        n.classList.toggle("md-button--".concat(t), t === n.variant);
                                    });
                        },
                    },
                ])
            );
        })(a.$);
    function Rt(t) {
        return (
            (Rt =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Rt(t)
        );
    }
    function At(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Bt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Ft(r.key), r);
        }
    }
    function It() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (It = function () {
            return !!t;
        })();
    }
    function Nt(t, e, n, r) {
        var o = $t(qt(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function $t() {
        return (
            ($t =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = qt(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            $t.apply(null, arguments)
        );
    }
    function qt(t) {
        return (
            (qt = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            qt(t)
        );
    }
    function Dt(t, e) {
        return (
            (Dt = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Dt(t, e)
        );
    }
    function Gt(t, e, n) {
        return (e = Ft(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function Ft(t) {
        var e = (function (t) {
            if ("object" != Rt(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Rt(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Rt(e) ? e : e + "";
    }
    Pt(Tt, "properties", { icon: { type: String }, label: { type: String }, variant: { type: String }, type: { type: String }, disabled: { type: Boolean, reflect: !0 }, selected: { type: Boolean, reflect: !0 } }), customElements.define("md-button", Tt);
    var zt,
        Ut,
        Mt = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    Gt(
                        (t = (function (t, e, n) {
                            return (
                                (e = qt(e)),
                                (function (t, e) {
                                    if (e && ("object" == Rt(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, It() ? Reflect.construct(e, n || [], qt(t).constructor) : e.apply(t, n))
                            );
                        })(this, e)),
                        "sizes",
                        ["small", "large"],
                    ),
                    Gt(t, "types", ["extended"]),
                    Gt(t, "variants", ["unelevated"]),
                    (t.ripple = new bt(t, {})),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Dt(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Bt(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(xt || (xt = At(["\n            ", "\n            ", "\n        "])), this.icon ? (0, i.qy)(Lt || (Lt = At(['<md-icon class="md-fab__icon">', "</md-icon>"])), this.icon) : i.s6, this.label ? (0, i.qy)(Ct || (Ct = At(['<div class="md-fab__label">', "</div>"])), this.label) : i.s6);
                        },
                    },
                    {
                        key: "connectedCallback",
                        value: function () {
                            Nt(e, "connectedCallback", this, 3)([]), this.classList.add("md-fab");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            var n = this;
                            Nt(e, "updated", this, 3)([t]),
                                t.has("type") &&
                                    this.types.forEach(function (t) {
                                        n.classList.toggle("md-fab--".concat(t), t === n.type);
                                    }),
                                t.has("size") &&
                                    this.sizes.forEach(function (t) {
                                        n.classList.toggle("md-fab--".concat(t), t === n.size);
                                    }),
                                t.has("variant") &&
                                    this.variants.forEach(function (t) {
                                        n.classList.toggle("md-fab--".concat(t), t === n.variant);
                                    });
                        },
                    },
                ])
            );
        })(a.$);
    function Ht(t) {
        return (
            (Ht =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Ht(t)
        );
    }
    function Yt(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
                (r = r.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }
    function Wt(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Vt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, ee(r.key), r);
        }
    }
    function Xt() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Xt = function () {
            return !!t;
        })();
    }
    function Jt(t, e, n, r) {
        var o = Zt(Kt(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Zt() {
        return (
            (Zt =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Kt(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Zt.apply(null, arguments)
        );
    }
    function Kt(t) {
        return (
            (Kt = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Kt(t)
        );
    }
    function Qt(t, e) {
        return (
            (Qt = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Qt(t, e)
        );
    }
    function te(t, e, n) {
        return (e = ee(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function ee(t) {
        var e = (function (t) {
            if ("object" != Ht(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Ht(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Ht(e) ? e : e + "";
    }
    Gt(Mt, "properties", { icon: { type: String }, label: { type: String }, type: { type: String }, size: { type: String }, variant: { type: String } }), customElements.define("md-fab", Mt);
    var ne,
        re = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    te(
                        (t = (function (t, e, n) {
                            return (
                                (e = Kt(e)),
                                (function (t, e) {
                                    if (e && ("object" == Ht(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, Xt() ? Reflect.construct(e, n || [], Kt(t).constructor) : e.apply(t, n))
                            );
                        })(this, e)),
                        "variants",
                        ["filled", "filled-tonal", "outlined"],
                    ),
                    (t.type = "icon-button"),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Qt(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Vt(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(zt || (zt = Wt(['\n            <button \n                class="md-icon-button__native"\n                .type="', '"\n            >icon-button</button>\n            ', "\n        "])), v(this.type), this.icon ? (0, i.qy)(Ut || (Ut = Wt(['<md-icon class="md-icon-button__icon">', "</md-icon>"])), this.icon) : i.s6);
                        },
                    },
                    {
                        key: "connectedCallback",
                        value: function () {
                            Jt(e, "connectedCallback", this, 3)([]),
                                this.classList.add("md-icon-button"),
                                (this.handleIconButtonClick = this.handleIconButtonClick.bind(this)),
                                this.addEventListener("click", this.handleIconButtonClick),
                                (this.ripple = new bt(
                                    this,
                                    (function (t) {
                                        for (var e = 1; e < arguments.length; e++) {
                                            var n = null != arguments[e] ? arguments[e] : {};
                                            e % 2
                                                ? Yt(Object(n), !0).forEach(function (e) {
                                                      te(t, e, n[e]);
                                                  })
                                                : Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                  : Yt(Object(n)).forEach(function (e) {
                                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                    });
                                        }
                                        return t;
                                    })({ trigger: ".md-icon-button__native", unbounded: !0, radius: 40 }, this.rippleOptions),
                                ));
                        },
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            Jt(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-icon-button"), this.removeEventListener("click", this.handleIconButtonClick);
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            var n = this;
                            Jt(e, "updated", this, 3)([t]),
                                t.has("variant") &&
                                    this.variants.forEach(function (t) {
                                        n.classList.toggle("md-icon-button--".concat(t), t === n.variant);
                                    });
                        },
                    },
                    {
                        key: "handleIconButtonClick",
                        value: function (t) {
                            this.toggle && (this.selected = !this.selected), this.emit("onIconButtonClick", { event: t });
                        },
                    },
                ])
            );
        })(a.$);
    function oe(t) {
        return (
            (oe =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            oe(t)
        );
    }
    function ie(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, fe(r.key), r);
        }
    }
    function ae() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (ae = function () {
            return !!t;
        })();
    }
    function ce() {
        return (
            (ce =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ue(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            ce.apply(null, arguments)
        );
    }
    function ue(t) {
        return (
            (ue = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            ue(t)
        );
    }
    function le(t, e) {
        return (
            (le = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            le(t, e)
        );
    }
    function se(t, e, n) {
        return (e = fe(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function fe(t) {
        var e = (function (t) {
            if ("object" != oe(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != oe(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == oe(e) ? e : e + "";
    }
    te(re, "properties", { icon: { type: String }, variant: { type: String }, type: { type: String }, toggle: { type: Boolean, reflect: !0 }, selected: { type: Boolean, reflect: !0 }, disabled: { type: Boolean, reflect: !0 } }), customElements.define("md-icon-button", re);
    var he,
        pe,
        ye,
        de,
        ve,
        be = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    se(
                        (t = (function (t, e, n) {
                            return (
                                (e = ue(e)),
                                (function (t, e) {
                                    if (e && ("object" == oe(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, ae() ? Reflect.construct(e, n || [], ue(t).constructor) : e.apply(t, n))
                            );
                        })(this, e)),
                        "types",
                        ["single-select", "multi-select"],
                    ),
                    (t.items = []),
                    (t.type = "single-select"),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && le(t, e);
                })(e, t),
                (function (t, e) {
                    return e && ie(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderButton",
                        value: function (t) {
                            return (0, i.qy)(
                                ne ||
                                    (ne = (function (t, e) {
                                        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
                                    })(['\n            <md-button \n                .data="', '"\n                class="md-segmented-button__button"\n                .icon="', '"\n                .label="', '"\n                variant="outlined"\n                .type="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-button>\n        '])),
                                t,
                                v(t.icon || (t.selected && "check")),
                                v(t.label),
                                v(t.type),
                                v(t.selected),
                                v(t.disabled),
                                this.handleSegmentedButtonItemClick,
                            );
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t = this;
                            return this.items.map(function (e) {
                                return t.renderButton(e);
                            });
                        },
                    },
                    {
                        key: "connectedCallback",
                        value: function () {
                            !(function (t, e, n) {
                                var r = ce(ue(t.prototype), "connectedCallback", n);
                                return "function" == typeof r
                                    ? function (t) {
                                          return r.apply(n, t);
                                      }
                                    : r;
                            })(
                                e,
                                0,
                                this,
                            )([]),
                                this.classList.add("md-segmented-button");
                        },
                    },
                    {
                        key: "handleSegmentedButtonItemClick",
                        value: function (t) {
                            var e = t.currentTarget.data;
                            "single-select" === this.type
                                ? this.items.forEach(function (t) {
                                      t.selected = t === e;
                                  })
                                : (e.selected = !e.selected),
                                this.requestUpdate(),
                                this.emit("onSegmentedButtonItemClick", { event: t });
                        },
                    },
                ])
            );
        })(a.$);
    function me(t) {
        return (
            (me =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            me(t)
        );
    }
    function ge(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function we(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, ke(r.key), r);
        }
    }
    function Oe() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Oe = function () {
            return !!t;
        })();
    }
    function _e() {
        return (
            (_e =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = je(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            _e.apply(null, arguments)
        );
    }
    function je(t) {
        return (
            (je = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            je(t)
        );
    }
    function Se(t, e) {
        return (
            (Se = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Se(t, e)
        );
    }
    function ke(t) {
        var e = (function (t) {
            if ("object" != me(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != me(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == me(e) ? e : e + "";
    }
    se(be, "properties", { items: { type: Array }, type: { type: String } }), customElements.define("md-segmented-button", be);
    var Pe,
        Ee = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = je(e)),
                            (function (t, e) {
                                if (e && ("object" == me(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Oe() ? Reflect.construct(e, n || [], je(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).ripple = new bt(t, {})),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Se(t, e);
                })(e, t),
                (function (t, e) {
                    return e && we(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(he || (he = ge(["\n            ", "\n            ", "\n            ", "\n            ", "\n        "])), this.icon ? (0, i.qy)(pe || (pe = ge(['<md-icon class="md-chip__icon">', "</md-icon>"])), this.icon) : i.s6, this.avatar ? (0, i.qy)(ye || (ye = ge(['<md-image class="md-chip__avatar" .circular="', '" .src="', '"></md-image>'])), !0, this.avatar) : i.s6, this.label ? (0, i.qy)(de || (de = ge(['<div class="md-chip__label">', "</div>"])), this.label) : i.s6, this.action ? (0, i.qy)(ve || (ve = ge(['<md-icon-button \n                class="md-chip__action" \n                .icon="', '" \n                .rippleOptions="', '"\n                @click="', '"></md-icon-button>'])), this.action, { radius: 24 }, this.handleChipActionClick) : i.s6);
                        },
                    },
                    {
                        key: "connectedCallback",
                        value: function () {
                            !(function (t, e, n) {
                                var r = _e(je(t.prototype), "connectedCallback", n);
                                return "function" == typeof r
                                    ? function (t) {
                                          return r.apply(n, t);
                                      }
                                    : r;
                            })(
                                e,
                                0,
                                this,
                            )([]),
                                this.classList.add("md-chip");
                        },
                    },
                    {
                        key: "handleChipActionClick",
                        value: function (t) {
                            this.emit("onChipActionClick", { event: t });
                        },
                    },
                ])
            );
        })(a.$);
    function xe(t) {
        return (
            (xe =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            xe(t)
        );
    }
    function Le(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Ie(r.key), r);
        }
    }
    function Ce() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Ce = function () {
            return !!t;
        })();
    }
    function Te() {
        return (
            (Te =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Re(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Te.apply(null, arguments)
        );
    }
    function Re(t) {
        return (
            (Re = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Re(t)
        );
    }
    function Ae(t, e) {
        return (
            (Ae = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Ae(t, e)
        );
    }
    function Be(t, e, n) {
        return (e = Ie(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function Ie(t) {
        var e = (function (t) {
            if ("object" != xe(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != xe(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == xe(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = ke(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Ee, "properties", { icon: { type: String }, avatar: { type: String }, label: { type: String }, action: { type: String }, selected: { type: Boolean, reflect: !0 }, disabled: { type: Boolean, reflect: !0 } }),
        customElements.define("md-chip", Ee);
    var Ne,
        $e = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    Be(
                        (t = (function (t, e, n) {
                            return (
                                (e = Re(e)),
                                (function (t, e) {
                                    if (e && ("object" == xe(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, Ce() ? Reflect.construct(e, n || [], Re(t).constructor) : e.apply(t, n))
                            );
                        })(this, e)),
                        "types",
                        ["single-select", "multi-select"],
                    ),
                    (t.type = "single-select"),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ae(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Le(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderChip",
                        value: function (t) {
                            return (0, i.qy)(
                                Pe ||
                                    (Pe = (function (t, e) {
                                        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
                                    })(['\n            <md-chip\n                .data="', '"\n                .icon="', '"\n                .avatar="', '"\n                .label="', '"\n                .action="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-chip>\n        '])),
                                t,
                                v(t.icon),
                                v(t.avatar),
                                v(t.label),
                                v(t.action),
                                v(t.selected),
                                v(t.disabled),
                                this.handleChipClick,
                            );
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t = this;
                            return this.items.map(function (e) {
                                return t.renderChip(e);
                            });
                        },
                    },
                    {
                        key: "connectedCallback",
                        value: function () {
                            !(function (t, e, n) {
                                var r = Te(Re(t.prototype), "connectedCallback", n);
                                return "function" == typeof r
                                    ? function (t) {
                                          return r.apply(n, t);
                                      }
                                    : r;
                            })(
                                e,
                                0,
                                this,
                            )([]),
                                this.classList.add("md-chips");
                        },
                    },
                    {
                        key: "handleChipClick",
                        value: function (t) {
                            var e = t.currentTarget.data;
                            "single-select" === this.type
                                ? this.items.forEach(function (t) {
                                      t.selected = e === t;
                                  })
                                : (e.selected = !e.selected),
                                this.requestUpdate(),
                                this.emit("onChipClick", { event: t });
                        },
                    },
                ])
            );
        })(a.$);
    function qe(t) {
        return (
            (qe =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            qe(t)
        );
    }
    function De(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Me(r.key), r);
        }
    }
    function Ge() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Ge = function () {
            return !!t;
        })();
    }
    function Fe() {
        return (
            (Fe =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ze(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Fe.apply(null, arguments)
        );
    }
    function ze(t) {
        return (
            (ze = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            ze(t)
        );
    }
    function Ue(t, e) {
        return (
            (Ue = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Ue(t, e)
        );
    }
    function Me(t) {
        var e = (function (t) {
            if ("object" != qe(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != qe(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == qe(e) ? e : e + "";
    }
    Be($e, "properties", { items: { type: Array }, type: { type: String } }), customElements.define("md-chips", $e);
    var He,
        Ye = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = ze(e)),
                            (function (t, e) {
                                if (e && ("object" == qe(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Ge() ? Reflect.construct(e, n || [], ze(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).ripple = new bt(t, { container: ".md-checkbox__track", trigger: ".md-checkbox__native", unbounded: !0, radius: 40 })),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ue(t, e);
                })(e, t),
                (function (t, e) {
                    return e && De(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(
                                Ne ||
                                    (Ne = (function (t, e) {
                                        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
                                    })(['\n            <input \n                type="checkbox" \n                .name="', '"\n                .value="', '"\n                .indeterminate="', '"\n                .checked="', '"\n                class="md-checkbox__native"\n                @input="', '"\n            >\n            <div class="md-checkbox__track">\n                <div class="md-checkbox__thumb"></div>\n            </div>\n        '])),
                                v(this.name),
                                v(this.value),
                                v(this.indeterminate),
                                v(this.checked),
                                this.handleCheckboxNativeInput,
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value: function () {
                            !(function (t, e, n) {
                                var r = Fe(ze(t.prototype), "connectedCallback", n);
                                return "function" == typeof r
                                    ? function (t) {
                                          return r.apply(n, t);
                                      }
                                    : r;
                            })(
                                e,
                                0,
                                this,
                            )([]),
                                this.classList.add("md-checkbox");
                        },
                    },
                    {
                        key: "handleCheckboxNativeInput",
                        value: function (t) {
                            var e = t.currentTarget;
                            (this.indeterminate = e.indeterminate), (this.checked = e.checked), this.emit("onCheckboxNativeInput", { event: t });
                        },
                    },
                ])
            );
        })(a.$);
    function We(t) {
        return (
            (We =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            We(t)
        );
    }
    function Ve(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Qe(r.key), r);
        }
    }
    function Xe() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Xe = function () {
            return !!t;
        })();
    }
    function Je() {
        return (
            (Je =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Ze(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Je.apply(null, arguments)
        );
    }
    function Ze(t) {
        return (
            (Ze = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Ze(t)
        );
    }
    function Ke(t, e) {
        return (
            (Ke = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Ke(t, e)
        );
    }
    function Qe(t) {
        var e = (function (t) {
            if ("object" != We(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != We(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == We(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Me(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Ye, "properties", { name: { type: String }, value: { type: String }, indeterminate: { type: Boolean }, checked: { type: Boolean } }),
        customElements.define("md-checkbox", Ye);
    var tn,
        en,
        nn = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = Ze(e)),
                            (function (t, e) {
                                if (e && ("object" == We(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Xe() ? Reflect.construct(e, n || [], Ze(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).ripple = new bt(t, { container: ".md-radio-button__track", trigger: ".md-radio-button__native", unbounded: !0, radius: 40 })),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ke(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Ve(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(
                                He ||
                                    (He = (function (t, e) {
                                        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
                                    })(['\n            <input \n                type="radio" \n                .name="', '"\n                .value="', '"\n                .indeterminate="', '"\n                .checked="', '"\n                class="md-radio-button__native"\n                @input="', '"\n            >\n            <div class="md-radio-button__track">\n                <div class="md-radio-button__thumb"></div>\n            </div>\n        '])),
                                v(this.name),
                                v(this.value),
                                v(this.indeterminate),
                                v(this.checked),
                                this.handleRadioButtonNativeInput,
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value: function () {
                            !(function (t, e, n) {
                                var r = Je(Ze(t.prototype), "connectedCallback", n);
                                return "function" == typeof r
                                    ? function (t) {
                                          return r.apply(n, t);
                                      }
                                    : r;
                            })(
                                e,
                                0,
                                this,
                            )([]),
                                this.classList.add("md-radio-button");
                        },
                    },
                    {
                        key: "handleRadioButtonNativeInput",
                        value: function (t) {
                            var e = t.currentTarget;
                            (this.indeterminate = e.indeterminate), (this.checked = e.checked), this.emit("onRadioButtonNativeInput", { event: t });
                        },
                    },
                ])
            );
        })(a.$);
    function rn(t) {
        return (
            (rn =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            rn(t)
        );
    }
    function on(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function an(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, fn(r.key), r);
        }
    }
    function cn() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (cn = function () {
            return !!t;
        })();
    }
    function un() {
        return (
            (un =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ln(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            un.apply(null, arguments)
        );
    }
    function ln(t) {
        return (
            (ln = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            ln(t)
        );
    }
    function sn(t, e) {
        return (
            (sn = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            sn(t, e)
        );
    }
    function fn(t) {
        var e = (function (t) {
            if ("object" != rn(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != rn(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == rn(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Qe(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(nn, "properties", { name: { type: String }, value: { type: String }, indeterminate: { type: Boolean }, checked: { type: Boolean } }),
        customElements.define("md-radio-button", nn);
    var hn = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                ((t = (function (t, e, n) {
                    return (
                        (e = ln(e)),
                        (function (t, e) {
                            if (e && ("object" == rn(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, cn() ? Reflect.construct(e, n || [], ln(t).constructor) : e.apply(t, n))
                    );
                })(this, e)).ripple = new bt(t, { container: ".md-switch__thumb", trigger: ".md-switch__native", unbounded: !0, radius: 40, centered: !0 })),
                t
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && sn(t, e);
            })(e, t),
            (function (t, e) {
                return e && an(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "render",
                    value: function () {
                        var t;
                        return (0, i.qy)(tn || (tn = on(['\n            <input \n                type="checkbox" \n                .name="', '"\n                .value="', '"\n                .indeterminate="', '"\n                .checked="', '"\n                class="md-switch__native"\n                @input="', '"\n            >\n            <div class="md-switch__track">\n                <div class="md-switch__thumb">', "</div>\n            </div>\n        "])), v(this.name), v(this.value), v(this.indeterminate), v(this.checked), this.handleSwitchNativeInput, null !== (t = this.icons) && void 0 !== t && t.length ? (0, i.qy)(en || (en = on(['<md-icon class="md-switch__icon">', "</md-icon>"])), this.icons[~~this.checked]) : i.s6);
                    },
                },
                {
                    key: "connectedCallback",
                    value: function () {
                        !(function (t, e, n) {
                            var r = un(ln(t.prototype), "connectedCallback", n);
                            return "function" == typeof r
                                ? function (t) {
                                      return r.apply(n, t);
                                  }
                                : r;
                        })(
                            e,
                            0,
                            this,
                        )([]),
                            this.classList.add("md-switch"),
                            this.style.setProperty("--md-comp-switch-thumb-transition-property", "none");
                    },
                },
                {
                    key: "handleSwitchNativeInput",
                    value: function (t) {
                        this.style.removeProperty("--md-comp-switch-thumb-transition-property");
                        var e = t.currentTarget;
                        (this.indeterminate = e.indeterminate), (this.checked = e.checked), this.emit("onSwitchNativeInput", { event: t });
                    },
                },
            ])
        );
    })(a.$);
    function pn(t) {
        return (
            (pn =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            pn(t)
        );
    }
    function yn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, dn(r.key), r);
        }
    }
    function dn(t) {
        var e = (function (t) {
            if ("object" != pn(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != pn(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == pn(e) ? e : e + "";
    }
    function vn() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (vn = function () {
            return !!t;
        })();
    }
    function bn() {
        return (
            (bn =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = mn(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            bn.apply(null, arguments)
        );
    }
    function mn(t) {
        return (
            (mn = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            mn(t)
        );
    }
    function gn(t, e) {
        return (
            (gn = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            gn(t, e)
        );
    }
    !(function (t, e, n) {
        (e = fn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(hn, "properties", { name: { type: String }, value: { type: String }, indeterminate: { type: Boolean }, checked: { type: Boolean }, icons: { type: Array } }),
        customElements.define("md-switch", hn);
    var wn,
        On,
        _n,
        jn,
        Sn,
        kn,
        Pn,
        En,
        xn,
        Ln,
        Cn,
        Tn,
        Rn,
        An,
        Bn,
        In,
        Nn = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (function (t, e, n) {
                        return (
                            (e = mn(e)),
                            (function (t, e) {
                                if (e && ("object" == pn(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, vn() ? Reflect.construct(e, n || [], mn(t).constructor) : e.apply(t, n))
                        );
                    })(this, e, arguments)
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && gn(t, e);
                })(e, t),
                (function (t, e) {
                    return e && yn(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "connectedCallback",
                        value: function () {
                            !(function (t, e, n) {
                                var r = bn(mn(t.prototype), "connectedCallback", n);
                                return "function" == typeof r
                                    ? function (t) {
                                          return r.apply(n, t);
                                      }
                                    : r;
                            })(
                                e,
                                0,
                                this,
                            )([]),
                                this.classList.add("md-list__row");
                        },
                    },
                ])
            );
        })(a.$);
    function $n(t) {
        return (
            ($n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            $n(t)
        );
    }
    function qn() {
        qn = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == $n(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError($n(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function Dn(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Gn(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise(function (r, o) {
                var i = t.apply(e, n);
                function a(t) {
                    Dn(i, r, o, a, c, "next", t);
                }
                function c(t) {
                    Dn(i, r, o, a, c, "throw", t);
                }
                a(void 0);
            });
        };
    }
    function Fn(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function zn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Vn(r.key), r);
        }
    }
    function Un() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Un = function () {
            return !!t;
        })();
    }
    function Mn(t, e, n, r) {
        var o = Hn(Yn(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Hn() {
        return (
            (Hn =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Yn(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Hn.apply(null, arguments)
        );
    }
    function Yn(t) {
        return (
            (Yn = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Yn(t)
        );
    }
    function Wn(t, e) {
        return (
            (Wn = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Wn(t, e)
        );
    }
    function Vn(t) {
        var e = (function (t) {
            if ("object" != $n(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != $n(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == $n(e) ? e : e + "";
    }
    customElements.define("md-list-row", Nn);
    var Xn,
        Jn = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = Yn(e)),
                            (function (t, e) {
                                if (e && ("object" == $n(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Un() ? Reflect.construct(e, n || [], Yn(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).rippleOptions = {}),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Wn(t, e);
                })(e, t),
                (function (t, e) {
                    return e && zn(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(wn || (wn = Fn(["\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        "])), this.leadingCheckbox ? (0, i.qy)(On || (On = Fn(['<md-checkbox class="md-list__checkbox" .checked="', '"></md-checkbox>'])), this.selected) : i.s6, this.leadingRadioButton ? (0, i.qy)(_n || (_n = Fn(['<md-radio-button class="md-list__radio-button" .checked="', '"></md-radio-button>'])), this.selected) : i.s6, this.leadingSwitch ? (0, i.qy)(jn || (jn = Fn(['<md-switch class="md-list__switch" .checked="', '"></md-switch>'])), this.selected) : i.s6, this.avatar ? (0, i.qy)(Sn || (Sn = Fn(['<md-image class="md-list__avatar" .src="', '" circular></md-image>'])), v(this.avatar)) : i.s6, this.image ? (0, i.qy)(kn || (kn = Fn(['<md-image class="md-list__image" .src="', '"></md-image>'])), v(this.image)) : i.s6, this.video ? (0, i.qy)(Pn || (Pn = Fn(['<md-image class="md-list__video" .src="', '" ratio="3/2"></md-image>'])), v(this.video)) : i.s6, this.icon ? (0, i.qy)(En || (En = Fn(['<md-icon class="md-list__icon">', "</md-icon>"])), this.icon) : i.s6, this.label || this.sublabel ? (0, i.qy)(xn || (xn = Fn(['\n                <div class="md-list__labels">\n                    ', "\n                    ", "\n                </div>\n            "])), this.label ? (0, i.qy)(Ln || (Ln = Fn(['<div class="md-list__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(Cn || (Cn = Fn(['<div class="md-list__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6, this.text ? (0, i.qy)(Tn || (Tn = Fn(['<div class="md-list__text">', "</div>"])), this.text) : i.s6, this.trailingCheckbox ? (0, i.qy)(Rn || (Rn = Fn(['<md-checkbox class="md-list__checkbox" .checked="', '"></md-checkbox>'])), this.selected) : i.s6, this.trailingRadioButton ? (0, i.qy)(An || (An = Fn(['<md-radio-button class="md-list__radio-button" .checked="', '"></md-radio-button>'])), this.selected) : i.s6, this.trailingSwitch ? (0, i.qy)(Bn || (Bn = Fn(['<md-switch class="md-list__switch" .checked="', '"></md-switch>'])), this.selected) : i.s6, void 0 !== this.badge ? (0, i.qy)(In || (In = Fn(['<md-badge class="md-list__badge" .label="', '"></md-badge>'])), this.badge) : i.s6);
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((r = Gn(
                                qn().mark(function t() {
                                    var n;
                                    return qn().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return Mn(e, "connectedCallback", this, 3)([]), this.classList.add("md-list__item"), (t.next = 4), this.updateComplete;
                                                    case 4:
                                                        this.sublabel && ((n = this.querySelector(".md-list__sublabel")).scrollHeight > n.clientHeight ? this.classList.add("md-list__item--three-line") : this.classList.add("md-list__item--two-line")), (this.ripple = new bt(this, this.rippleOptions));
                                                    case 6:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return r.apply(this, arguments);
                            }),
                    },
                    {
                        key: "updated",
                        value:
                            ((n = Gn(
                                qn().mark(function t(n) {
                                    return qn().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        Mn(e, "updated", this, 3)([n]), n.has("icon") && this.classList.toggle("md-list__item--with-icon", !!this.icon), n.has("selected") && this.selected && this.emit("onListItemSelected", { listItem: this });
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function (t) {
                                return n.apply(this, arguments);
                            }),
                    },
                ])
            );
            var n, r;
        })(a.$);
    function Zn(t) {
        return (
            (Zn =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Zn(t)
        );
    }
    function Kn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, or(r.key), r);
        }
    }
    function Qn() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Qn = function () {
            return !!t;
        })();
    }
    function tr() {
        return (
            (tr =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = er(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            tr.apply(null, arguments)
        );
    }
    function er(t) {
        return (
            (er = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            er(t)
        );
    }
    function nr(t, e) {
        return (
            (nr = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            nr(t, e)
        );
    }
    function rr(t, e, n) {
        return (e = or(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function or(t) {
        var e = (function (t) {
            if ("object" != Zn(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Zn(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Zn(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Vn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Jn, "properties", { leadingCheckbox: { type: Boolean }, leadingRadioButton: { type: Boolean }, leadingSwitch: { type: Boolean }, avatar: { type: String }, image: { type: String }, video: { type: String }, icon: { type: String }, label: { type: String }, sublabel: { type: String }, text: { type: String }, trailingCheckbox: { type: Boolean }, trailingRadioButton: { type: Boolean }, trailingSwitch: { type: Boolean }, selected: { type: Boolean, reflect: !0 }, disabled: { type: Boolean, reflect: !0 }, routerLink: { type: String, reflect: !0 }, rippleOptions: { type: Object }, badge: { type: Number } }),
        customElements.define("md-list-item", Jn);
    var ir = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                rr(
                    (t = (function (t, e, n) {
                        return (
                            (e = er(e)),
                            (function (t, e) {
                                if (e && ("object" == Zn(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Qn() ? Reflect.construct(e, n || [], er(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)),
                    "types",
                    ["single-select", "multi-select"],
                ),
                (t.items = []),
                (t.type = "single-select"),
                t
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && nr(t, e);
            })(e, t),
            (function (t, e) {
                return e && Kn(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "renderListItem",
                    value: function (t) {
                        return (0, i.qy)(
                            Xn ||
                                (Xn = (function (t, e) {
                                    return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
                                })(['\n            <md-list-row>\n                <md-list-item\n                    .data="', '"\n                    .avatar="', '"\n                    .image="', '"\n                    .video="', '"\n                    .icon="', '"\n                    .label="', '"\n                    .sublabel="', '"\n                    .text="', '"\n                    .leadingCheckbox="', '"\n                    .leadingRadioButton="', '"\n                    .leadingSwitch="', '"\n                    .trailingCheckbox="', '"\n                    .trailingRadioButton="', '"\n                    .trailingSwitch="', '"\n                    .selected="', '"\n                    .disabled="', '"\n                    .routerLink="', '"\n                    .rippleOptions="', '"\n                    .badge="', '"\n                    @click="', '"\n                    @onCheckboxNativeInput="', '"\n                    @onRadioButtonNativeInput="', '"\n                    @onSwitchNativeInput="', '"\n                ></md-list-item>\n            </md-list-row>\n        '])),
                            t,
                            v(t.avatar),
                            v(t.image),
                            v(t.video),
                            v(t.icon),
                            v(t.label),
                            v(t.sublabel),
                            v(t.text),
                            v(t.leadingCheckbox),
                            v(t.leadingRadioButton),
                            v(t.leadingSwitch),
                            v(t.trailingCheckbox),
                            v(t.trailingRadioButton),
                            v(t.trailingSwitch),
                            v(t.selected),
                            v(t.disabled),
                            v(t.routerLink),
                            v(t.rippleOptions || this.rippleOptions),
                            v(t.badge),
                            this.handleListItemClick,
                            this.handleListItemCheckboxNativeInput,
                            this.handleListItemRadioButtonNativeInput,
                            this.handleListItemSwitchNativeInput,
                        );
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var t = this;
                        return this.items.map(function (e) {
                            return t.renderListItem(e);
                        });
                    },
                },
                {
                    key: "connectedCallback",
                    value: function () {
                        !(function (t, e, n) {
                            var r = tr(er(t.prototype), "connectedCallback", n);
                            return "function" == typeof r
                                ? function (t) {
                                      return r.apply(n, t);
                                  }
                                : r;
                        })(
                            e,
                            0,
                            this,
                        )([]),
                            this.classList.add("md-list");
                    },
                },
                {
                    key: "handleListItemClick",
                    value: function (t) {
                        if (!t.target.closest(".md-list__checkbox,.md-list__radio-button,.md-list__switch")) {
                            var e = t.currentTarget.data;
                            "single-select" === this.type ? this.singleSelect(e) : this.multiSelect(e), this.requestUpdate(), this.emit("onListItemClick", { event: t });
                        }
                    },
                },
                {
                    key: "multiSelect",
                    value: function (t) {
                        t.selected = !t.selected;
                    },
                },
                {
                    key: "singleSelect",
                    value: function (t) {
                        this.items.forEach(function (e) {
                            e.selected = e === t;
                        });
                    },
                },
                {
                    key: "handleListItemCheckboxNativeInput",
                    value: function (t) {
                        var e = t.currentTarget.data;
                        this.multiSelect(e), this.requestUpdate(), this.emit("onListItemCheckboxNativeInput", { event: t });
                    },
                },
                {
                    key: "handleListItemRadioButtonNativeInput",
                    value: function (t) {
                        var e = t.currentTarget.data;
                        this.singleSelect(e), this.requestUpdate(), this.emit("onListItemRadioButtonNativeInput", { event: t });
                    },
                },
                {
                    key: "handleListItemSwitchNativeInput",
                    value: function (t) {
                        var e = t.currentTarget.data;
                        this.multiSelect(e), this.requestUpdate(), this.emit("onListItemSwitchNativeInput", { event: t });
                    },
                },
            ])
        );
    })(a.$);
    function ar(t) {
        return (
            (ar =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            ar(t)
        );
    }
    function cr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, ur(r.key), r);
        }
    }
    function ur(t) {
        var e = (function (t) {
            if ("object" != ar(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != ar(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == ar(e) ? e : e + "";
    }
    function lr() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (lr = function () {
            return !!t;
        })();
    }
    function sr() {
        return (
            (sr =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = fr(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            sr.apply(null, arguments)
        );
    }
    function fr(t) {
        return (
            (fr = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            fr(t)
        );
    }
    function hr(t, e) {
        return (
            (hr = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            hr(t, e)
        );
    }
    rr(ir, "properties", { items: { type: Array }, type: { type: String }, rippleOptions: { type: Object } }), customElements.define("md-list", ir);
    var pr,
        yr,
        dr,
        vr,
        br,
        mr = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (function (t, e, n) {
                        return (
                            (e = fr(e)),
                            (function (t, e) {
                                if (e && ("object" == ar(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, lr() ? Reflect.construct(e, n || [], fr(t).constructor) : e.apply(t, n))
                        );
                    })(this, e, arguments)
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && hr(t, e);
                })(e, t),
                (function (t, e) {
                    return e && cr(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "connectedCallback",
                        value: function () {
                            !(function (t, e, n) {
                                var r = sr(fr(t.prototype), "connectedCallback", n);
                                return "function" == typeof r
                                    ? function (t) {
                                          return r.apply(n, t);
                                      }
                                    : r;
                            })(
                                e,
                                0,
                                this,
                            )([]),
                                this.classList.add("md-tree__row");
                        },
                    },
                ])
            );
        })(a.$);
    function gr(t) {
        return (
            (gr =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            gr(t)
        );
    }
    function wr() {
        wr = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == gr(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(gr(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function Or(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function _r(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise(function (r, o) {
                var i = t.apply(e, n);
                function a(t) {
                    Or(i, r, o, a, c, "next", t);
                }
                function c(t) {
                    Or(i, r, o, a, c, "throw", t);
                }
                a(void 0);
            });
        };
    }
    function jr(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Sr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Cr(r.key), r);
        }
    }
    function kr() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (kr = function () {
            return !!t;
        })();
    }
    function Pr(t, e, n, r) {
        var o = Er(xr(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Er() {
        return (
            (Er =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = xr(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Er.apply(null, arguments)
        );
    }
    function xr(t) {
        return (
            (xr = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            xr(t)
        );
    }
    function Lr(t, e) {
        return (
            (Lr = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Lr(t, e)
        );
    }
    function Cr(t) {
        var e = (function (t) {
            if ("object" != gr(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != gr(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == gr(e) ? e : e + "";
    }
    customElements.define("md-tree-row", mr);
    var Tr,
        Rr = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = xr(e)),
                            (function (t, e) {
                                if (e && ("object" == gr(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, kr() ? Reflect.construct(e, n || [], xr(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).ripple = new bt(t, {})),
                    (t.actions = ["keyboard_arrow_right", "keyboard_arrow_down"]),
                    (t.nodeIcons = ["folder", "folder_open"]),
                    (t.leafIcons = ["draft", "draft"]),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Lr(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Sr(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "action",
                        get: function () {
                            var t, e;
                            if (null !== (t = this.actions) && void 0 !== t && t.length) return null !== (e = this.data.children) && void 0 !== e && e.length ? this.actions[~~this.expanded] : [" ", ""][~~(0 === this.indent)];
                        },
                    },
                    {
                        key: "icon",
                        get: function () {
                            var t, e;
                            if (null !== (t = this.leafIcons) && void 0 !== t && t.length) return null !== (e = this.data.children) && void 0 !== e && e.length ? this.nodeIcons[~~this.expanded] : this.leafIcons[~~this.selected];
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(
                                pr || (pr = jr(["\n            ", "\n            ", "\n            ", "\n            ", "\n        "])),
                                Array.from({ length: this.indent }, function () {
                                    return (0, i.qy)(yr || (yr = jr(['<div class="md-tree__indent"></div>'])));
                                }),
                                this.action ? (0, i.qy)(dr || (dr = jr(['<md-icon class="md-tree__action">', "</md-icon>"])), this.action) : i.s6,
                                this.icon ? (0, i.qy)(vr || (vr = jr(['<md-icon class="md-tree__icon">', "</md-icon>"])), this.icon) : i.s6,
                                this.label ? (0, i.qy)(br || (br = jr(['<div class="md-tree__label">', "</div>"])), this.label) : i.s6,
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((r = _r(
                                wr().mark(function t() {
                                    return wr().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        Pr(e, "connectedCallback", this, 3)([]), this.classList.add("md-tree__item");
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return r.apply(this, arguments);
                            }),
                    },
                    {
                        key: "updated",
                        value:
                            ((n = _r(
                                wr().mark(function t(n) {
                                    return wr().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        Pr(e, "updated", this, 3)([n]), n.has("selected") && this.selected && this.emit("onTreeItemSelected", { treeItem: this });
                                                    case 2:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function (t) {
                                return n.apply(this, arguments);
                            }),
                    },
                ])
            );
            var n, r;
        })(a.$);
    function Ar(t) {
        return (
            (Ar =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Ar(t)
        );
    }
    function Br(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    function Ir() {
        Ir = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == Ar(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(Ar(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function Nr(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function $r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Ur(r.key), r);
        }
    }
    function qr() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (qr = function () {
            return !!t;
        })();
    }
    function Dr(t, e, n, r) {
        var o = Gr(Fr(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Gr() {
        return (
            (Gr =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Fr(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Gr.apply(null, arguments)
        );
    }
    function Fr(t) {
        return (
            (Fr = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Fr(t)
        );
    }
    function zr(t, e) {
        return (
            (zr = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            zr(t, e)
        );
    }
    function Ur(t) {
        var e = (function (t) {
            if ("object" != Ar(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Ar(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Ar(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Cr(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Rr, "properties", { selected: { type: Boolean, reflect: !0 }, expanded: { type: Boolean, reflect: !0 }, indent: { type: String }, actions: { type: Array }, nodeIcons: { type: Array }, leafIcons: { type: Array }, label: { type: String }, routerLink: { type: String, reflect: !0 } }),
        customElements.define("md-tree-item", Rr);
    var Mr = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                ((t = (function (t, e, n) {
                    return (
                        (e = Fr(e)),
                        (function (t, e) {
                            if (e && ("object" == Ar(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, qr() ? Reflect.construct(e, n || [], Fr(t).constructor) : e.apply(t, n))
                    );
                })(this, e)).items = []),
                (t.items2 = []),
                t
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && zr(t, e);
            })(e, t),
            (function (t, e) {
                return e && $r(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "renderTreeItem",
                    value: function (t) {
                        return (0, i.qy)(
                            Tr ||
                                (Tr = (function (t, e) {
                                    return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
                                })(['\n            <md-tree-row>\n                <md-tree-item\n                    .data="', '"\n                    .selected="', '"\n                    .expanded="', '"\n                    .indent="', '"\n                    .actions="', '"\n                    .nodeIcons="', '"\n                    .leafIcons="', '"\n                    .label="', '"\n                    .routerLink="', '"\n                    @click="', '"\n                ></md-tree-item>\n            </md-tree-row>\n        '])),
                            t,
                            v(t.selected),
                            v(t.expanded),
                            v(t.indent),
                            v(t.actions),
                            v(t.nodeIcons),
                            v(t.leafIcons),
                            v(t.label),
                            v(t.routerLink),
                            this.handleTreeItemClick,
                        );
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var t = this;
                        return this.items2
                            .filter(function (t) {
                                return t.visible;
                            })
                            .map(function (e) {
                                return t.renderTreeItem(e);
                            });
                    },
                },
                {
                    key: "connectedCallback",
                    value: function () {
                        Dr(e, "connectedCallback", this, 3)([]), this.classList.add("md-tree");
                    },
                },
                {
                    key: "updated",
                    value:
                        ((n = (function (t) {
                            return function () {
                                var e = this,
                                    n = arguments;
                                return new Promise(function (r, o) {
                                    var i = t.apply(e, n);
                                    function a(t) {
                                        Nr(i, r, o, a, c, "next", t);
                                    }
                                    function c(t) {
                                        Nr(i, r, o, a, c, "throw", t);
                                    }
                                    a(void 0);
                                });
                            };
                        })(
                            Ir().mark(function t(n) {
                                return Ir().wrap(
                                    function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    if ((Dr(e, "updated", this, 3)([n]), !n.has("items"))) {
                                                        t.next = 5;
                                                        break;
                                                    }
                                                    return (t.next = 4), this.updateComplete;
                                                case 4:
                                                    this.items2 = this.flatten(this.items).items2;
                                                case 5:
                                                case "end":
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    this,
                                );
                            }),
                        )),
                        function (t) {
                            return n.apply(this, arguments);
                        }),
                },
                {
                    key: "flatten",
                    value: function (t, e) {
                        var n,
                            r = this,
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            i = [];
                        return (
                            t.forEach(function (t) {
                                var a;
                                if (((t.parent = e), (t.indent = o), 0 === o && (t.visible = !0), (t.expanded || t.selected) && (n = !0), i.push(t), null !== (a = t.children) && void 0 !== a && a.length)) {
                                    var c = r.flatten(t.children, t, o + 1);
                                    c.expanded && ((n = c.expanded), (t.expanded = n), r.toggle(t)),
                                        i.push.apply(
                                            i,
                                            (function (t) {
                                                return (
                                                    (function (t) {
                                                        if (Array.isArray(t)) return Br(t);
                                                    })(t) ||
                                                    (function (t) {
                                                        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                                                    })(t) ||
                                                    (function (t, e) {
                                                        if (t) {
                                                            if ("string" == typeof t) return Br(t, e);
                                                            var n = {}.toString.call(t).slice(8, -1);
                                                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Br(t, e) : void 0;
                                                        }
                                                    })(t) ||
                                                    (function () {
                                                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                    })()
                                                );
                                            })(c.items2),
                                        );
                                }
                            }),
                            { expanded: n, items2: i }
                        );
                    },
                },
                {
                    key: "toggle",
                    value: function (t) {
                        var e = this;
                        t.children.forEach(function (n) {
                            var r;
                            (n.visible = t.expanded), t.visible || (n.visible = t.visible), null !== (r = n.children) && void 0 !== r && r.length && e.toggle(n);
                        });
                    },
                },
                {
                    key: "handleTreeItemClick",
                    value: function (t) {
                        var e,
                            n = t.target.closest(".md-tree__action"),
                            r = t.currentTarget.data;
                        n && null !== (e = r.children) && void 0 !== e && e.length && ((r.expanded = !r.expanded), this.toggle(r)),
                            this.items2.forEach(function (t) {
                                t.selected = t === r;
                            }),
                            this.requestUpdate(),
                            this.emit("onTreeItemClick", { event: t });
                    },
                },
            ])
        );
        var n;
    })(a.$);
    function Hr(t) {
        return (
            (Hr =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Hr(t)
        );
    }
    function Yr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Wr(r.key), r);
        }
    }
    function Wr(t) {
        var e = (function (t) {
            if ("object" != Hr(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Hr(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Hr(e) ? e : e + "";
    }
    function Vr() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Vr = function () {
            return !!t;
        })();
    }
    function Xr() {
        return (
            (Xr =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Jr(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Xr.apply(null, arguments)
        );
    }
    function Jr(t) {
        return (
            (Jr = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Jr(t)
        );
    }
    function Zr(t, e) {
        return (
            (Zr = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Zr(t, e)
        );
    }
    !(function (t, e, n) {
        (e = Ur(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Mr, "properties", { items: { type: Array }, items2: { type: Array } }),
        customElements.define("md-tree", Mr);
    var Kr,
        Qr,
        to,
        eo,
        no,
        ro,
        oo,
        io = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (function (t, e, n) {
                        return (
                            (e = Jr(e)),
                            (function (t, e) {
                                if (e && ("object" == Hr(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Vr() ? Reflect.construct(e, n || [], Jr(t).constructor) : e.apply(t, n))
                        );
                    })(this, e, arguments)
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Zr(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Yr(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "connectedCallback",
                        value: function () {
                            !(function (t, e, n) {
                                var r = Xr(Jr(t.prototype), "connectedCallback", n);
                                return "function" == typeof r
                                    ? function (t) {
                                          return r.apply(n, t);
                                      }
                                    : r;
                            })(
                                e,
                                0,
                                this,
                            )([]),
                                this.classList.add("md-navigation-list__row");
                        },
                    },
                ])
            );
        })(a.$);
    function ao(t) {
        return (
            (ao =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            ao(t)
        );
    }
    function co() {
        co = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == ao(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(ao(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function uo(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function lo(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise(function (r, o) {
                var i = t.apply(e, n);
                function a(t) {
                    uo(i, r, o, a, c, "next", t);
                }
                function c(t) {
                    uo(i, r, o, a, c, "throw", t);
                }
                a(void 0);
            });
        };
    }
    function so(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function fo(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, mo(r.key), r);
        }
    }
    function ho() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (ho = function () {
            return !!t;
        })();
    }
    function po(t, e, n, r) {
        var o = yo(vo(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function yo() {
        return (
            (yo =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = vo(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            yo.apply(null, arguments)
        );
    }
    function vo(t) {
        return (
            (vo = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            vo(t)
        );
    }
    function bo(t, e) {
        return (
            (bo = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            bo(t, e)
        );
    }
    function mo(t) {
        var e = (function (t) {
            if ("object" != ao(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != ao(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == ao(e) ? e : e + "";
    }
    customElements.define("md-navigation-list-row", io);
    var go,
        wo = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = vo(e)),
                            (function (t, e) {
                                if (e && ("object" == ao(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, ho() ? Reflect.construct(e, n || [], vo(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).rippleOptions = {}),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && bo(t, e);
                })(e, t),
                (function (t, e) {
                    return e && fo(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(Kr || (Kr = so(["\n            ", "\n            ", "\n            ", "\n            ", "\n        "])), this.icon ? (0, i.qy)(Qr || (Qr = so(['<md-icon class="md-navigation-list__icon">', "</md-icon>"])), this.icon) : i.s6, this.label || this.sublabel ? (0, i.qy)(to || (to = so(['\n                <div class="md-navigation-list__labels">\n                    ', "\n                    ", "\n                </div>\n            "])), this.label ? (0, i.qy)(eo || (eo = so(['<div class="md-navigation-list__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(no || (no = so(['<div class="md-navigation-list__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6, this.text ? (0, i.qy)(ro || (ro = so(['<div class="md-navigation-list__text">', "</div>"])), this.text) : i.s6, void 0 !== this.badge ? (0, i.qy)(oo || (oo = so(['<md-badge class="md-navigation-list__badge" .label="', '"></md-badge>'])), this.badge) : i.s6);
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((r = lo(
                                co().mark(function t() {
                                    return co().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return po(e, "connectedCallback", this, 3)([]), this.classList.add("md-navigation-list__item"), (t.next = 4), this.updateComplete;
                                                    case 4:
                                                        this.ripple = new bt(this, this.rippleOptions);
                                                    case 5:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return r.apply(this, arguments);
                            }),
                    },
                    {
                        key: "updated",
                        value:
                            ((n = lo(
                                co().mark(function t(n) {
                                    return co().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        po(e, "updated", this, 3)([n]), n.has("icon") && this.classList.toggle("md-navigation-list__item--with-icon", !!this.icon), n.has("selected") && this.selected && this.emit("onNavigationListItemSelected", { navigationListItem: this });
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function (t) {
                                return n.apply(this, arguments);
                            }),
                    },
                ])
            );
            var n, r;
        })(a.$);
    function Oo(t) {
        return (
            (Oo =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Oo(t)
        );
    }
    function _o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Eo(r.key), r);
        }
    }
    function jo() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (jo = function () {
            return !!t;
        })();
    }
    function So() {
        return (
            (So =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ko(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            So.apply(null, arguments)
        );
    }
    function ko(t) {
        return (
            (ko = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            ko(t)
        );
    }
    function Po(t, e) {
        return (
            (Po = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Po(t, e)
        );
    }
    function Eo(t) {
        var e = (function (t) {
            if ("object" != Oo(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Oo(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Oo(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = mo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(wo, "properties", { icon: { type: String }, label: { type: String }, sublabel: { type: String }, selected: { type: Boolean, reflect: !0 }, disabled: { type: Boolean, reflect: !0 }, routerLink: { type: String, reflect: !0 }, rippleOptions: { type: Object }, badge: { type: Number } }),
        customElements.define("md-navigation-list-item", wo);
    var xo,
        Lo,
        Co,
        To,
        Ro,
        Ao,
        Bo,
        Io = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = ko(e)),
                            (function (t, e) {
                                if (e && ("object" == Oo(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, jo() ? Reflect.construct(e, n || [], ko(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).items = []),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Po(t, e);
                })(e, t),
                (function (t, e) {
                    return e && _o(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderNavigationListItem",
                        value: function (t) {
                            return (0, i.qy)(
                                go ||
                                    (go = (function (t, e) {
                                        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
                                    })(['\n            <md-navigation-list-row>\n                <md-navigation-list-item\n                    .data="', '"\n                    .icon="', '"\n                    .label="', '"\n                    .selected="', '"\n                    .disabled="', '"\n                    .routerLink="', '"\n                    .rippleOptions="', '"\n                    .badge="', '"\n                    @click="', '"\n                    \n                ></md-navigation-list-item>\n            </md-navigation-list-row>\n        '])),
                                t,
                                v(t.icon),
                                v(t.label),
                                v(t.selected),
                                v(t.disabled),
                                v(t.routerLink),
                                v(t.rippleOptions || this.rippleOptions),
                                v(t.badge),
                                this.handleNavigationListItemClick,
                            );
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t = this;
                            return this.items.map(function (e) {
                                return t.renderNavigationListItem(e);
                            });
                        },
                    },
                    {
                        key: "connectedCallback",
                        value: function () {
                            !(function (t, e, n) {
                                var r = So(ko(t.prototype), "connectedCallback", n);
                                return "function" == typeof r
                                    ? function (t) {
                                          return r.apply(n, t);
                                      }
                                    : r;
                            })(
                                e,
                                0,
                                this,
                            )([]),
                                this.classList.add("md-navigation-list"),
                                this.style.setProperty("--md-comp-navigation-list-icon-animation", "none");
                        },
                    },
                    {
                        key: "handleNavigationListItemClick",
                        value: function (t) {
                            this.style.removeProperty("--md-comp-navigation-list-icon-animation");
                            var e = t.currentTarget.data;
                            this.singleSelect(e), this.requestUpdate(), this.emit("onNavigationListItemClick", { event: t });
                        },
                    },
                    {
                        key: "singleSelect",
                        value: function (t) {
                            this.items.forEach(function (e) {
                                e.selected = e === t;
                            });
                        },
                    },
                ])
            );
        })(a.$);
    function No(t) {
        return (
            (No =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            No(t)
        );
    }
    function $o() {
        $o = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == No(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(No(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function qo(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Do(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise(function (r, o) {
                var i = t.apply(e, n);
                function a(t) {
                    qo(i, r, o, a, c, "next", t);
                }
                function c(t) {
                    qo(i, r, o, a, c, "throw", t);
                }
                a(void 0);
            });
        };
    }
    function Go(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Fo(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Wo(r.key), r);
        }
    }
    function zo() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (zo = function () {
            return !!t;
        })();
    }
    function Uo(t, e, n, r) {
        var o = Mo(Ho(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Mo() {
        return (
            (Mo =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Ho(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Mo.apply(null, arguments)
        );
    }
    function Ho(t) {
        return (
            (Ho = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Ho(t)
        );
    }
    function Yo(t, e) {
        return (
            (Yo = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Yo(t, e)
        );
    }
    function Wo(t) {
        var e = (function (t) {
            if ("object" != No(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != No(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == No(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Eo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Io, "properties", { items: { type: Array }, rippleOptions: { type: Object } }),
        customElements.define("md-navigation-list", Io);
    var Vo,
        Xo = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = Ho(e)),
                            (function (t, e) {
                                if (e && ("object" == No(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, zo() ? Reflect.construct(e, n || [], Ho(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).rippleOptions = {}),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Yo(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Fo(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(xo || (xo = Go(["\n            ", "\n            ", "\n            ", "\n            ", "\n        "])), this.icon ? (0, i.qy)(Lo || (Lo = Go(['<md-icon class="md-tab__icon">', "</md-icon>"])), this.icon) : i.s6, this.label || this.sublabel ? (0, i.qy)(Co || (Co = Go(['\n                <div class="md-tab__labels">\n                    ', "\n                    ", "\n                </div>\n            "])), this.label ? (0, i.qy)(To || (To = Go(['<div class="md-tab__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(Ro || (Ro = Go(['<div class="md-tab__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6, this.text ? (0, i.qy)(Ao || (Ao = Go(['<div class="md-tab__text">', "</div>"])), this.text) : i.s6, void 0 !== this.badge ? (0, i.qy)(Bo || (Bo = Go(['<md-badge class="md-tab__badge" .label="', '"></md-badge>'])), this.badge) : i.s6);
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((r = Do(
                                $o().mark(function t() {
                                    return $o().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return Uo(e, "connectedCallback", this, 3)([]), this.classList.add("md-tab"), (t.next = 4), this.updateComplete;
                                                    case 4:
                                                        this.ripple = new bt(this, this.rippleOptions);
                                                    case 5:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return r.apply(this, arguments);
                            }),
                    },
                    {
                        key: "updated",
                        value:
                            ((n = Do(
                                $o().mark(function t(n) {
                                    return $o().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        Uo(e, "updated", this, 3)([n]), n.has("icon") && this.classList.toggle("md-tab--with-icon", !!this.icon), n.has("selected") && this.selected && this.emit("onTabSelected", { tab: this });
                                                    case 3:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function (t) {
                                return n.apply(this, arguments);
                            }),
                    },
                ])
            );
            var n, r;
        })(a.$);
    function Jo(t) {
        return (
            (Jo =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Jo(t)
        );
    }
    function Zo() {
        Zo = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == Jo(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(Jo(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function Ko(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Qo(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, ai(r.key), r);
        }
    }
    function ti() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (ti = function () {
            return !!t;
        })();
    }
    function ei(t, e, n, r) {
        var o = ni(ri(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function ni() {
        return (
            (ni =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ri(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            ni.apply(null, arguments)
        );
    }
    function ri(t) {
        return (
            (ri = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            ri(t)
        );
    }
    function oi(t, e) {
        return (
            (oi = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            oi(t, e)
        );
    }
    function ii(t, e, n) {
        return (e = ai(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function ai(t) {
        var e = (function (t) {
            if ("object" != Jo(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Jo(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Jo(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Wo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Xo, "properties", { icon: { type: String }, label: { type: String }, sublabel: { type: String }, selected: { type: Boolean, reflect: !0 }, disabled: { type: Boolean, reflect: !0 }, routerLink: { type: String, reflect: !0 }, rippleOptions: { type: Object }, badge: { type: Number } }),
        customElements.define("md-tab", Xo);
    var ci = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                ii(
                    (t = (function (t, e, n) {
                        return (
                            (e = ri(e)),
                            (function (t, e) {
                                if (e && ("object" == Jo(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, ti() ? Reflect.construct(e, n || [], ri(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)),
                    "variants",
                    ["primary", "secondary"],
                ),
                (t.items = []),
                (t.variant = "primary"),
                t
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && oi(t, e);
            })(e, t),
            (function (t, e) {
                return e && Qo(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "renderTab",
                    value: function (t) {
                        return (0, i.qy)(
                            Vo ||
                                (Vo = (function (t, e) {
                                    return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
                                })(['\n            <md-tab\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .selected="', '"\n                .disabled="', '"\n                .routerLink="', '"\n                .rippleOptions="', '"\n                .badge="', '"\n                @click="', '"\n                @onTabSelected="', '"\n            ></md-tab>\n        '])),
                            t,
                            v(t.icon),
                            v(t.label),
                            v(t.selected),
                            v(t.disabled),
                            v(t.routerLink),
                            v(t.rippleOptions || this.rippleOptions),
                            v(t.badge),
                            this.handleTabClick,
                            this.handleTabSelected,
                        );
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var t = this;
                        return this.items.map(function (e) {
                            return t.renderTab(e);
                        });
                    },
                },
                {
                    key: "connectedCallback",
                    value: function () {
                        ei(e, "connectedCallback", this, 3)([]), this.classList.add("md-tabs"), this.style.setProperty("--md-comp-tabs-indicator-transition-property", "none");
                    },
                },
                {
                    key: "updated",
                    value: function (t) {
                        var n = this;
                        ei(e, "updated", this, 3)([t]),
                            t.has("variant") &&
                                this.variants.forEach(function (t) {
                                    n.classList.toggle("md-tabs--".concat(t), t === n.variant);
                                });
                    },
                },
                {
                    key: "handleTabClick",
                    value: function (t) {
                        this.style.removeProperty("--md-comp-tabs-indicator-transition-property");
                        var e = t.currentTarget.data;
                        this.singleSelect(e), this.requestUpdate(), this.emit("onTabClick", { event: t });
                    },
                },
                {
                    key: "singleSelect",
                    value: function (t) {
                        this.items.forEach(function (e) {
                            e.selected = e === t;
                        });
                    },
                },
                {
                    key: "handleTabSelected",
                    value:
                        ((n = (function (t) {
                            return function () {
                                var e = this,
                                    n = arguments;
                                return new Promise(function (r, o) {
                                    var i = t.apply(e, n);
                                    function a(t) {
                                        Ko(i, r, o, a, c, "next", t);
                                    }
                                    function c(t) {
                                        Ko(i, r, o, a, c, "throw", t);
                                    }
                                    a(void 0);
                                });
                            };
                        })(
                            Zo().mark(function t(e) {
                                var n, r, o, i, a, c, u, l;
                                return Zo().wrap(
                                    function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    this.classList.contains("md-tabs") && ((r = e.detail.tab), (o = r.data), (this.currIndex = this.items.indexOf(o)), (this.prevIndex = null !== (n = this.prevIndex) && void 0 !== n ? n : this.currIndex), (i = this.currIndex > this.prevIndex ? "right" : "left"), this.classList.remove("md-tabs--left"), this.classList.remove("md-tabs--right"), this.classList.add("md-tabs--" + i), (this.prevIndex = this.currIndex), (a = r.offsetLeft), (c = this.clientWidth - (a + r.clientWidth)), this.classList.contains("md-tabs--primary") && ((u = r.querySelector(".md-tab__label")), (a = u.offsetLeft + r.offsetLeft), (c = this.clientWidth - (a + u.clientWidth)), r.classList.contains("md-tab--with-icon") || ((l = r.querySelector(".md-tab__badge")) && (c = this.clientWidth - (l.offsetLeft + r.offsetLeft + l.clientWidth)))), this.style.setProperty("--md-comp-tabs-indicator-left", a + "px"), this.style.setProperty("--md-comp-tabs-indicator-right", c + "px"));
                                                case 1:
                                                case "end":
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    this,
                                );
                            }),
                        )),
                        function (t) {
                            return n.apply(this, arguments);
                        }),
                },
            ])
        );
        var n;
    })(a.$);
    function ui(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    ii(ci, "properties", { items: { type: Array }, rippleOptions: { type: Object }, variant: { type: String } }), customElements.define("md-tabs", ci);
    var li,
        si,
        fi,
        hi,
        pi,
        yi,
        di,
        vi,
        bi,
        mi,
        gi,
        wi,
        Oi,
        _i,
        ji,
        Si = function (t, e, n) {
            var r,
                o = (function (t, e) {
                    var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                    if (!n) {
                        if (
                            Array.isArray(t) ||
                            (n = (function (t, e) {
                                if (t) {
                                    if ("string" == typeof t) return ui(t, e);
                                    var n = {}.toString.call(t).slice(8, -1);
                                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ui(t, e) : void 0;
                                }
                            })(t)) ||
                            (e && t && "number" == typeof t.length)
                        ) {
                            n && (t = n);
                            var r = 0,
                                o = function () {};
                            return {
                                s: o,
                                n: function () {
                                    return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                                },
                                e: function (t) {
                                    throw t;
                                },
                                f: o,
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var i,
                        a = !0,
                        c = !1;
                    return {
                        s: function () {
                            n = n.call(t);
                        },
                        n: function () {
                            var t = n.next();
                            return (a = t.done), t;
                        },
                        e: function (t) {
                            (c = !0), (i = t);
                        },
                        f: function () {
                            try {
                                a || null == n.return || n.return();
                            } finally {
                                if (c) throw i;
                            }
                        },
                    };
                })(e);
            try {
                for (o.s(); !(r = o.n()).done; ) {
                    var i = r.value;
                    if (i[0] === t) return (0, i[1])();
                }
            } catch (t) {
                o.e(t);
            } finally {
                o.f();
            }
            return null == n ? void 0 : n();
        };
    function ki(t) {
        return (
            (ki =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            ki(t)
        );
    }
    function Pi(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Ei(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Ri(r.key), r);
        }
    }
    function xi() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (xi = function () {
            return !!t;
        })();
    }
    function Li() {
        return (
            (Li =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Ci(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Li.apply(null, arguments)
        );
    }
    function Ci(t) {
        return (
            (Ci = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Ci(t)
        );
    }
    function Ti(t, e) {
        return (
            (Ti = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Ti(t, e)
        );
    }
    function Ri(t) {
        var e = (function (t) {
            if ("object" != ki(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != ki(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == ki(e) ? e : e + "";
    }
    var Ai = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                ((t = (function (t, e, n) {
                    return (
                        (e = Ci(e)),
                        (function (t, e) {
                            if (e && ("object" == ki(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, xi() ? Reflect.construct(e, n || [], Ci(t).constructor) : e.apply(t, n))
                    );
                })(this, e)).body = Array.from(t.childNodes)),
                t
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ti(t, e);
            })(e, t),
            (function (t, e) {
                return e && Ei(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "renderIcon",
                    value: function (t) {
                        return (0, i.qy)(li || (li = Pi(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                    },
                },
                {
                    key: "renderIconButton",
                    value: function (t) {
                        return (0, i.qy)(si || (si = Pi(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleCardIconButtonClick);
                    },
                },
                {
                    key: "renderButton",
                    value: function (t) {
                        return (0, i.qy)(fi || (fi = Pi(['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '])), t, v(t.icon), v(t.label), v(t.variant), v(t.type), v(t.disabled), v(t.selected), this.handleCardButtonClick);
                    },
                },
                {
                    key: "renderSpacer",
                    value: function (t) {
                        return (0, i.qy)(hi || (hi = Pi(['\n            <div class="md-card__spacer"></div>\n        '])));
                    },
                },
                {
                    key: "renderItem",
                    value: function (t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                        return Si(
                            t.component || n,
                            [
                                [
                                    "icon",
                                    function () {
                                        return e.renderIcon(t);
                                    },
                                ],
                                [
                                    "icon-button",
                                    function () {
                                        return e.renderIconButton(t);
                                    },
                                ],
                                [
                                    "button",
                                    function () {
                                        return e.renderButton(t);
                                    },
                                ],
                                [
                                    "spacer",
                                    function () {
                                        return e.renderSpacer(t);
                                    },
                                ],
                            ],
                            function () {
                                return i.s6;
                            },
                        );
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var t,
                            e,
                            n,
                            r,
                            o,
                            a,
                            c,
                            u,
                            l,
                            s = this;
                        return (0, i.qy)(
                            pi || (pi = Pi(["\n            ", "\n            ", "\n        "])),
                            (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                ? (0, i.qy)(
                                      yi || (yi = Pi(['\n                <div class="md-card__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                      null !== (n = this.icons) && void 0 !== n && n.length
                                          ? (0, i.qy)(
                                                di || (di = Pi(['\n                        <div class="md-card__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                this.icons.map(function (t) {
                                                    return s.renderItem(t, "icon");
                                                }),
                                            )
                                          : i.s6,
                                      this.label || this.sublabel ? (0, i.qy)(vi || (vi = Pi(['\n                        <div class="md-card__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(bi || (bi = Pi(['<div class="md-card__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(mi || (mi = Pi(['<div class="md-card__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                      null !== (r = this.actions) && void 0 !== r && r.length
                                          ? (0, i.qy)(
                                                gi || (gi = Pi(['\n                        <div class="md-card__actions">\n                            ', "\n                        </div>    \n                    "])),
                                                this.actions.map(function (t) {
                                                    return s.renderItem(t, "icon-button");
                                                }),
                                            )
                                          : i.s6,
                                  )
                                : i.s6,
                            (null !== (o = this.body) && void 0 !== o && o.length) || (null !== (a = this.buttons) && void 0 !== a && a.length)
                                ? (0, i.qy)(
                                      wi || (wi = Pi(['\n                <div class="md-card__wrapper">\n                    ', "\n                    ", "\n                </div>\n            "])),
                                      null !== (c = this.body) && void 0 !== c && c.length ? (0, i.qy)(Oi || (Oi = Pi(['<div class="md-card__body">', "</div>"])), this.body) : i.s6,
                                      null !== (u = this.buttons) && void 0 !== u && u.length
                                          ? (0, i.qy)(
                                                _i || (_i = Pi(['\n                        <div class="md-card__footer">\n                            ', "\n                        </div>\n                    "])),
                                                null !== (l = this.buttons) && void 0 !== l && l.length
                                                    ? (0, i.qy)(
                                                          ji || (ji = Pi(['\n                                <div class="md-card__buttons">\n                                    ', "\n                                </div>    \n                            "])),
                                                          this.buttons.map(function (t) {
                                                              return s.renderItem(t, "button");
                                                          }),
                                                      )
                                                    : i.s6,
                                            )
                                          : i.s6,
                                  )
                                : i.s6,
                        );
                    },
                },
                {
                    key: "connectedCallback",
                    value: function () {
                        !(function (t, e, n) {
                            var r = Li(Ci(t.prototype), "connectedCallback", n);
                            return "function" == typeof r
                                ? function (t) {
                                      return r.apply(n, t);
                                  }
                                : r;
                        })(
                            e,
                            0,
                            this,
                        )([]),
                            this.classList.add("md-card");
                    },
                },
                {
                    key: "handleCardIconButtonClick",
                    value: function (t) {
                        this.emit("onCardIconButtonClick", { event: t });
                    },
                },
                {
                    key: "handleCardButtonClick",
                    value: function (t) {
                        this.emit("onCardButtonClick", { event: t });
                    },
                },
            ])
        );
    })(a.$);
    function Bi(t) {
        return (
            (Bi =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Bi(t)
        );
    }
    function Ii(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Fi(r.key), r);
        }
    }
    function Ni() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Ni = function () {
            return !!t;
        })();
    }
    function $i(t, e, n, r) {
        var o = qi(Di(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function qi() {
        return (
            (qi =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Di(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            qi.apply(null, arguments)
        );
    }
    function Di(t) {
        return (
            (Di = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Di(t)
        );
    }
    function Gi(t, e) {
        return (
            (Gi = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Gi(t, e)
        );
    }
    function Fi(t) {
        var e = (function (t) {
            if ("object" != Bi(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Bi(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Bi(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Ri(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Ai, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, buttons: { type: Array } }),
        customElements.define("md-card", Ai);
    var zi,
        Ui,
        Mi,
        Hi,
        Yi,
        Wi,
        Vi,
        Xi,
        Ji,
        Zi,
        Ki,
        Qi,
        ta,
        ea,
        na,
        ra = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (function (t, e, n) {
                        return (
                            (e = Di(e)),
                            (function (t, e) {
                                if (e && ("object" == Bi(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Ni() ? Reflect.construct(e, n || [], Di(t).constructor) : e.apply(t, n))
                        );
                    })(this, e, arguments)
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Gi(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Ii(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "connectedCallback",
                        value: function () {
                            $i(e, "connectedCallback", this, 3)([]), this.classList.add("md-scrim"), (this.handleScrimClick = this.handleScrimClick.bind(this)), this.addEventListener("click", this.handleScrimClick);
                        },
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            $i(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-scrim"), this.removeEventListener("click", this.handleScrimClick);
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            (this.open = !0), this.emit("onScrimShown");
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            (this.open = !1), this.emit("onScrimClosed");
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.open ? this.close() : this.show();
                        },
                    },
                    {
                        key: "handleScrimClick",
                        value: function (t) {
                            this.close(), this.emit("onScrimClick", { event: t });
                        },
                    },
                ])
            );
        })(a.$);
    function oa(t) {
        return (
            (oa =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            oa(t)
        );
    }
    function ia() {
        ia = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == oa(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(oa(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function aa(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function ca(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function ua(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, ya(r.key), r);
        }
    }
    function la() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (la = function () {
            return !!t;
        })();
    }
    function sa(t, e, n, r) {
        var o = fa(ha(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function fa() {
        return (
            (fa =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ha(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            fa.apply(null, arguments)
        );
    }
    function ha(t) {
        return (
            (ha = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            ha(t)
        );
    }
    function pa(t, e) {
        return (
            (pa = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            pa(t, e)
        );
    }
    function ya(t) {
        var e = (function (t) {
            if ("object" != oa(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != oa(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == oa(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Fi(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(ra, "properties", { open: { type: Boolean, reflect: !0 } }),
        customElements.define("md-scrim", ra);
    var da,
        va,
        ba,
        ma,
        ga,
        wa,
        Oa,
        _a,
        ja = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = ha(e)),
                            (function (t, e) {
                                if (e && ("object" == oa(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, la() ? Reflect.construct(e, n || [], ha(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).body = Array.from(t.childNodes)),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && pa(t, e);
                })(e, t),
                (function (t, e) {
                    return e && ua(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIcon",
                        value: function (t) {
                            return (0, i.qy)(zi || (zi = ca(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                        },
                    },
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(Ui || (Ui = ca(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleDialogIconButtonClick);
                        },
                    },
                    {
                        key: "renderButton",
                        value: function (t) {
                            return (0, i.qy)(Mi || (Mi = ca(['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '])), t, v(t.icon), v(t.label), v(t.variant), v(t.type), v(t.disabled), v(t.selected), this.handleDialogButtonClick);
                        },
                    },
                    {
                        key: "renderSpacer",
                        value: function (t) {
                            return (0, i.qy)(Hi || (Hi = ca(['\n            <div class="md-dialog__spacer"></div>\n        '])));
                        },
                    },
                    {
                        key: "renderItem",
                        value: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                            return Si(
                                t.component || n,
                                [
                                    [
                                        "icon",
                                        function () {
                                            return e.renderIcon(t);
                                        },
                                    ],
                                    [
                                        "icon-button",
                                        function () {
                                            return e.renderIconButton(t);
                                        },
                                    ],
                                    [
                                        "button",
                                        function () {
                                            return e.renderButton(t);
                                        },
                                    ],
                                    [
                                        "spacer",
                                        function () {
                                            return e.renderSpacer(t);
                                        },
                                    ],
                                ],
                                function () {
                                    return i.s6;
                                },
                            );
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t,
                                e,
                                n,
                                r,
                                o,
                                a,
                                c,
                                u,
                                l,
                                s = this;
                            return (0, i.qy)(
                                Yi || (Yi = ca(["\n            ", "\n            ", "\n        "])),
                                (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                    ? (0, i.qy)(
                                          Wi || (Wi = ca(['\n                <div class="md-dialog__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                          null !== (n = this.icons) && void 0 !== n && n.length
                                              ? (0, i.qy)(
                                                    Vi || (Vi = ca(['\n                        <div class="md-dialog__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.icons.map(function (t) {
                                                        return s.renderItem(t, "icon");
                                                    }),
                                                )
                                              : i.s6,
                                          this.label || this.sublabel ? (0, i.qy)(Xi || (Xi = ca(['\n                        <div class="md-dialog__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(Ji || (Ji = ca(['<div class="md-dialog__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(Zi || (Zi = ca(['<div class="md-dialog__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                          null !== (r = this.actions) && void 0 !== r && r.length
                                              ? (0, i.qy)(
                                                    Ki || (Ki = ca(['\n                        <div class="md-dialog__actions">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.actions.map(function (t) {
                                                        return s.renderItem(t, "icon-button");
                                                    }),
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                                (null !== (o = this.body) && void 0 !== o && o.length) || (null !== (a = this.buttons) && void 0 !== a && a.length)
                                    ? (0, i.qy)(
                                          Qi || (Qi = ca(['\n                <div class="md-dialog__wrapper">\n                    ', "\n                    ", "\n                </div>\n            "])),
                                          null !== (c = this.body) && void 0 !== c && c.length ? (0, i.qy)(ta || (ta = ca(['<div class="md-dialog__body">', "</div>"])), this.body) : i.s6,
                                          null !== (u = this.buttons) && void 0 !== u && u.length
                                              ? (0, i.qy)(
                                                    ea || (ea = ca(['\n                        <div class="md-dialog__footer">\n                            ', "\n                        </div>\n                    "])),
                                                    null !== (l = this.buttons) && void 0 !== l && l.length
                                                        ? (0, i.qy)(
                                                              na || (na = ca(['\n                                <div class="md-dialog__buttons">\n                                    ', "\n                                </div>    \n                            "])),
                                                              this.buttons.map(function (t) {
                                                                  return s.renderItem(t, "button");
                                                              }),
                                                          )
                                                        : i.s6,
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((n = (function (t) {
                                return function () {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function (r, o) {
                                        var i = t.apply(e, n);
                                        function a(t) {
                                            aa(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            aa(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                ia().mark(function t() {
                                    return ia().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return sa(e, "connectedCallback", this, 3)([]), (this.dialogScrim = document.createElement("md-scrim")), this.parentElement.insertBefore(this.dialogScrim, this.nextElementSibling), (this.handleDialogScrimClosed = this.handleDialogScrimClosed.bind(this)), this.dialogScrim.addEventListener("onScrimClosed", this.handleDialogScrimClosed), this.open && this.dialogScrim.show(), this.classList.add("md-dialog"), this.style.setProperty("--md-comp-dialog-animation", "none"), (t.next = 10), this.updateComplete;
                                                    case 10:
                                                        this.style.setProperty("--md-comp-dialog-height", this.clientHeight + "px"), this.style.setProperty("--md-comp-dialog-width", this.clientWidth + "px");
                                                    case 12:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return n.apply(this, arguments);
                            }),
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            sa(e, "disconnectedCallback", this, 3)([]), this.dialogScrim.removeEventListener("onScrimClosed", this.handleDialogScrimClosed), this.dialogScrim.remove(), this.classList.remove("md-dialog");
                        },
                    },
                    {
                        key: "handleDialogIconButtonClick",
                        value: function (t) {
                            this.emit("onDialogIconButtonClick", { event: t });
                        },
                    },
                    {
                        key: "handleDialogButtonClick",
                        value: function (t) {
                            this.emit("onDialogButtonClick", { event: t });
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            this.style.removeProperty("--md-comp-dialog-animation"), this.dialogScrim.show(), (this.open = !0), this.emit("onDialogShown");
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            this.style.removeProperty("--md-comp-dialog-animation"), (this.open = !1), this.dialogScrim.close(), this.emit("onDialogClosed");
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.open ? this.close() : this.show();
                        },
                    },
                    {
                        key: "handleDialogScrimClosed",
                        value: function (t) {
                            this.open && this.close(), this.emit("onDialogScrimClosed", { event: t });
                        },
                    },
                ])
            );
            var n;
        })(a.$);
    function Sa(t) {
        return (
            (Sa =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Sa(t)
        );
    }
    function ka(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Pa(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Ra(r.key), r);
        }
    }
    function Ea() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Ea = function () {
            return !!t;
        })();
    }
    function xa(t, e, n, r) {
        var o = La(Ca(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function La() {
        return (
            (La =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Ca(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            La.apply(null, arguments)
        );
    }
    function Ca(t) {
        return (
            (Ca = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Ca(t)
        );
    }
    function Ta(t, e) {
        return (
            (Ta = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Ta(t, e)
        );
    }
    function Ra(t) {
        var e = (function (t) {
            if ("object" != Sa(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Sa(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Sa(e) ? e : e + "";
    }
    function Aa() {
        Aa = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == Sa(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(Sa(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function Ba(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Ia(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise(function (r, o) {
                var i = t.apply(e, n);
                function a(t) {
                    Ba(i, r, o, a, c, "next", t);
                }
                function c(t) {
                    Ba(i, r, o, a, c, "throw", t);
                }
                a(void 0);
            });
        };
    }
    !(function (t, e, n) {
        (e = ya(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(ja, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, buttons: { type: Array }, open: { type: Boolean, reflect: !0 } }),
        customElements.define("md-dialog", ja);
    var Na,
        $a,
        qa =
            ((Na = Promise.resolve()),
            ($a = (function () {
                var t = Ia(
                    Aa().mark(function t(e) {
                        return Aa().wrap(
                            function (t) {
                                for (;;)
                                    switch ((t.prev = t.next)) {
                                        case 0:
                                            return (t.prev = 0), (t.next = 3), Na;
                                        case 3:
                                            return (t.prev = 3), t.abrupt("return", e());
                                        case 6:
                                        case "end":
                                            return t.stop();
                                    }
                            },
                            t,
                            null,
                            [[0, , 3, 6]],
                        );
                    }),
                );
                return function (e) {
                    return t.apply(this, arguments);
                };
            })()),
            function (t) {
                return (Na = $a(t));
            }),
        Da = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = Ca(e)),
                            (function (t, e) {
                                if (e && ("object" == Sa(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Ea() ? Reflect.construct(e, n || [], Ca(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).body = Array.from(t.childNodes)),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ta(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Pa(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIcon",
                        value: function (t) {
                            return (0, i.qy)(da || (da = ka(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                        },
                    },
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(va || (va = ka(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleSnackbarIconButtonClick);
                        },
                    },
                    {
                        key: "renderButton",
                        value: function (t) {
                            return (0, i.qy)(ba || (ba = ka(['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '])), t, v(t.icon), v(t.label), v(t.variant), v(t.type), v(t.disabled), v(t.selected), this.handleSnackbarButtonClick);
                        },
                    },
                    {
                        key: "renderSpacer",
                        value: function (t) {
                            return (0, i.qy)(ma || (ma = ka(['\n            <div class="md-snackbar__spacer"></div>\n        '])));
                        },
                    },
                    {
                        key: "renderItem",
                        value: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                            return Si(
                                t.component || n,
                                [
                                    [
                                        "icon",
                                        function () {
                                            return e.renderIcon(t);
                                        },
                                    ],
                                    [
                                        "icon-button",
                                        function () {
                                            return e.renderIconButton(t);
                                        },
                                    ],
                                    [
                                        "button",
                                        function () {
                                            return e.renderButton(t);
                                        },
                                    ],
                                    [
                                        "spacer",
                                        function () {
                                            return e.renderSpacer(t);
                                        },
                                    ],
                                ],
                                function () {
                                    return i.s6;
                                },
                            );
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t,
                                e,
                                n,
                                r = this;
                            return (0, i.qy)(
                                ga || (ga = ka(["\n            ", "\n            ", "\n        "])),
                                null !== (t = this.body) && void 0 !== t && t.length ? (0, i.qy)(wa || (wa = ka(['<div class="md-snackbar__body">', "</div>"])), this.body) : i.s6,
                                null !== (e = this.buttons) && void 0 !== e && e.length
                                    ? (0, i.qy)(
                                          Oa || (Oa = ka(['\n                <div class="md-snackbar__footer">\n                    ', "\n                </div>\n            "])),
                                          null !== (n = this.buttons) && void 0 !== n && n.length
                                              ? (0, i.qy)(
                                                    _a || (_a = ka(['\n                        <div class="md-snackbar__buttons">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.buttons.map(function (t) {
                                                        return r.renderItem(t, "button");
                                                    }),
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((n = Ia(
                                Aa().mark(function t() {
                                    return Aa().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return xa(e, "connectedCallback", this, 3)([]), this.classList.add("md-snackbar"), this.style.setProperty("--md-comp-snackbar-animation", "none"), (t.next = 5), this.updateComplete;
                                                    case 5:
                                                        this.style.setProperty("--md-comp-snackbar-height", this.clientHeight + "px"), this.style.setProperty("--md-comp-snackbar-width", this.clientWidth + "px");
                                                    case 7:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return n.apply(this, arguments);
                            }),
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            xa(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-snackbar");
                        },
                    },
                    {
                        key: "handleSnackbarIconButtonClick",
                        value: function (t) {
                            this.emit("onSnackbarIconButtonClick", { event: t });
                        },
                    },
                    {
                        key: "handleSnackbarButtonClick",
                        value: function (t) {
                            this.emit("onSnackbarButtonClick", { event: t });
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            var t = this;
                            qa(function () {
                                return new Promise(function (e) {
                                    var n = setTimeout(function () {
                                            t.close();
                                        }, 4e3),
                                        r = function () {
                                            clearTimeout(n), t.removeEventListener("onSnackbarClosed", r), e();
                                        };
                                    t.addEventListener("onSnackbarClosed", r), t.style.removeProperty("--md-comp-snackbar-animation"), (t.open = !0), t.emit("onSnackbarShown");
                                });
                            });
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            var t = this;
                            this.style.removeProperty("--md-comp-snackbar-animation"), (this.open = !1);
                            var e = function (n) {
                                "snackbar-in" === n.animationName && (t.removeEventListener("animationend", e), t.emit("onSnackbarClosed"));
                            };
                            this.addEventListener("animationend", e);
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.open ? this.close() : this.show();
                        },
                    },
                ])
            );
            var n;
        })(a.$);
    function Ga(t) {
        return (
            (Ga =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Ga(t)
        );
    }
    function Fa(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, za(r.key), r);
        }
    }
    function za(t) {
        var e = (function (t) {
            if ("object" != Ga(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Ga(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Ga(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Ra(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Da, "properties", { icons: { type: Array }, actions: { type: Array }, buttons: { type: Array }, open: { type: Boolean, reflect: !0 } }),
        customElements.define("md-snackbar", Da);
    var Ua,
        Ma,
        Ha,
        Ya,
        Wa,
        Va,
        Xa,
        Ja,
        Za,
        Ka,
        Qa,
        tc,
        ec,
        nc,
        rc,
        oc = (function () {
            return (function (t, e) {
                return e && Fa(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(
                function t() {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        (function (t, e, n) {
                            (e = za(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
                        })(this, "methods", {
                            "top-end": function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = t.containerRect,
                                    n = t.triggerRect,
                                    r = t.offset;
                                return { left: n.right - e.width, top: n.top - e.height - r };
                            },
                            top: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = t.containerRect,
                                    n = t.triggerRect,
                                    r = t.offset;
                                return { left: n.left - (e.width - n.width) / 2, top: n.top - e.height - r };
                            },
                            "top-start": function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = t.containerRect,
                                    n = t.triggerRect,
                                    r = t.offset;
                                return { left: n.left, top: n.top - e.height - r };
                            },
                            "top-right": function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = t.containerRect,
                                    n = t.triggerRect,
                                    r = t.offset;
                                return { left: n.right + r, top: n.top - e.height - r };
                            },
                            "right-end": function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = t.containerRect,
                                    n = t.triggerRect,
                                    r = t.offset;
                                return { left: n.right + r, top: n.bottom - e.height };
                            },
                            right: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = t.containerRect,
                                    n = t.triggerRect,
                                    r = t.offset;
                                return { left: n.right + r, top: n.top - (e.height - n.height) / 2 };
                            },
                            "right-start": function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = (t.containerRect, t.triggerRect),
                                    n = t.offset;
                                return { left: e.right + n, top: e.top };
                            },
                            "bottom-right": function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = (t.containerRect, t.triggerRect),
                                    n = t.offset;
                                return { left: e.right + n, top: e.bottom + n };
                            },
                            "bottom-start": function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = (t.containerRect, t.triggerRect),
                                    n = t.offset;
                                return { left: e.left, top: e.bottom + n };
                            },
                            bottom: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = t.containerRect,
                                    n = t.triggerRect,
                                    r = t.offset;
                                return { left: n.left - (e.width - n.width) / 2, top: n.bottom + r };
                            },
                            "bottom-end": function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = t.containerRect,
                                    n = t.triggerRect,
                                    r = t.offset;
                                return { left: n.right - e.width, top: n.bottom + r };
                            },
                            "bottom-left": function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = t.containerRect,
                                    n = t.triggerRect,
                                    r = t.offset;
                                return { left: n.left - e.width - r, top: n.bottom + r };
                            },
                            "left-start": function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = t.containerRect,
                                    n = t.triggerRect,
                                    r = t.offset;
                                return { left: n.left - e.width - r, top: n.top };
                            },
                            left: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = t.containerRect,
                                    n = t.triggerRect,
                                    r = t.offset;
                                return { left: n.left - e.width - r, top: n.top - (e.height - n.height) / 2 };
                            },
                            "left-end": function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = t.containerRect,
                                    n = t.triggerRect,
                                    r = t.offset;
                                return { left: n.left - e.width - r, top: n.bottom - e.height };
                            },
                            "top-left": function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = t.containerRect,
                                    n = t.triggerRect,
                                    r = t.offset;
                                return { left: n.left - e.width - r, top: n.top - e.height - r };
                            },
                        });
                },
                [
                    {
                        key: "show",
                        value: function () {
                            for (var t, e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = n.container, o = void 0 === r ? void 0 : r, i = n.trigger, a = void 0 === i ? void 0 : i, c = n.boundary, u = void 0 === c ? this.closestScrollable(o) : c, l = n.offset, s = void 0 === l ? 0 : l, f = n.placements, h = void 0 === f ? ["top-end", "top", "top-start", "top-right", "right-end", "right", "right-start", "bottom-right", "bottom-start", "bottom", "bottom-end", "bottom-left", "left-start", "left", "left-end", "top-left"] : f, p = 0; p < h.length; p++) {
                                var y = this.methods[h[p]],
                                    d = o.getBoundingClientRect(),
                                    v = a.getBoundingClientRect(),
                                    b = u.getBoundingClientRect(),
                                    m = y({ triggerRect: v, containerRect: d, offset: s });
                                (t = m.left), (e = m.top);
                                var g = t + d.width,
                                    w = e + d.height;
                                if (!(t < b.left || e < b.top || g > b.right || w > b.bottom)) break;
                            }
                            o.style.setProperty("left", t + "px"), o.style.setProperty("top", e + "px");
                        },
                    },
                    {
                        key: "closestScrollable",
                        value: function (t) {
                            for (var e = t; e; ) {
                                var n = window.getComputedStyle(e);
                                if ("auto" === n.overflow || "scroll" === n.overflow || "auto" === n.overflowY || "scroll" === n.overflowY || e.scrollHeight > e.clientHeight) return e;
                                e = e.parentElement;
                            }
                            return null;
                        },
                    },
                ],
            );
        })();
    function ic(t) {
        return (
            (ic =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            ic(t)
        );
    }
    function ac(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
                (r = r.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }
    function cc(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function uc(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, dc(r.key), r);
        }
    }
    function lc() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (lc = function () {
            return !!t;
        })();
    }
    function sc(t, e, n, r) {
        var o = fc(hc(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function fc() {
        return (
            (fc =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = hc(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            fc.apply(null, arguments)
        );
    }
    function hc(t) {
        return (
            (hc = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            hc(t)
        );
    }
    function pc(t, e) {
        return (
            (pc = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            pc(t, e)
        );
    }
    function yc(t, e, n) {
        return (e = dc(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function dc(t) {
        var e = (function (t) {
            if ("object" != ic(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != ic(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == ic(e) ? e : e + "";
    }
    var vc,
        bc,
        mc,
        gc,
        wc,
        Oc,
        _c,
        jc,
        Sc,
        kc,
        Pc,
        Ec,
        xc,
        Lc,
        Cc,
        Tc = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = hc(e)),
                            (function (t, e) {
                                if (e && ("object" == ic(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, lc() ? Reflect.construct(e, n || [], hc(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).body = Array.from(t.childNodes)),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && pc(t, e);
                })(e, t),
                (function (t, e) {
                    return e && uc(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIcon",
                        value: function (t) {
                            return (0, i.qy)(Ua || (Ua = cc(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                        },
                    },
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(Ma || (Ma = cc(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleTooltipIconButtonClick);
                        },
                    },
                    {
                        key: "renderButton",
                        value: function (t) {
                            return (0, i.qy)(Ha || (Ha = cc(['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '])), t, v(t.icon), v(t.label), v(t.variant), v(t.type), v(t.disabled), v(t.selected), this.handleTooltipButtonClick);
                        },
                    },
                    {
                        key: "renderSpacer",
                        value: function (t) {
                            return (0, i.qy)(Ya || (Ya = cc(['\n            <div class="md-tooltip__spacer"></div>\n        '])));
                        },
                    },
                    {
                        key: "renderItem",
                        value: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                            return Si(
                                t.component || n,
                                [
                                    [
                                        "icon",
                                        function () {
                                            return e.renderIcon(t);
                                        },
                                    ],
                                    [
                                        "icon-button",
                                        function () {
                                            return e.renderIconButton(t);
                                        },
                                    ],
                                    [
                                        "button",
                                        function () {
                                            return e.renderButton(t);
                                        },
                                    ],
                                    [
                                        "spacer",
                                        function () {
                                            return e.renderSpacer(t);
                                        },
                                    ],
                                ],
                                function () {
                                    return i.s6;
                                },
                            );
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t,
                                e,
                                n,
                                r,
                                o,
                                a,
                                c,
                                u,
                                l,
                                s = this;
                            return (0, i.qy)(
                                Wa || (Wa = cc(["\n            ", "\n            ", "\n        "])),
                                (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                    ? (0, i.qy)(
                                          Va || (Va = cc(['\n                <div class="md-tooltip__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                          null !== (n = this.icons) && void 0 !== n && n.length
                                              ? (0, i.qy)(
                                                    Xa || (Xa = cc(['\n                        <div class="md-tooltip__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.icons.map(function (t) {
                                                        return s.renderItem(t, "icon");
                                                    }),
                                                )
                                              : i.s6,
                                          this.label || this.sublabel ? (0, i.qy)(Ja || (Ja = cc(['\n                        <div class="md-tooltip__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(Za || (Za = cc(['<div class="md-tooltip__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(Ka || (Ka = cc(['<div class="md-tooltip__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                          null !== (r = this.actions) && void 0 !== r && r.length
                                              ? (0, i.qy)(
                                                    Qa || (Qa = cc(['\n                        <div class="md-tooltip__actions">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.actions.map(function (t) {
                                                        return s.renderItem(t, "icon-button");
                                                    }),
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                                (null !== (o = this.body) && void 0 !== o && o.length) || (null !== (a = this.buttons) && void 0 !== a && a.length)
                                    ? (0, i.qy)(
                                          tc || (tc = cc(['\n                <div class="md-tooltip__wrapper">\n                    ', "\n                    ", "\n                </div>\n            "])),
                                          null !== (c = this.body) && void 0 !== c && c.length ? (0, i.qy)(ec || (ec = cc(['<div class="md-tooltip__body">', "</div>"])), this.body) : i.s6,
                                          null !== (u = this.buttons) && void 0 !== u && u.length
                                              ? (0, i.qy)(
                                                    nc || (nc = cc(['\n                        <div class="md-tooltip__footer">\n                            ', "\n                        </div>\n                    "])),
                                                    null !== (l = this.buttons) && void 0 !== l && l.length
                                                        ? (0, i.qy)(
                                                              rc || (rc = cc(['\n                                <div class="md-tooltip__buttons">\n                                    ', "\n                                </div>    \n                            "])),
                                                              this.buttons.map(function (t) {
                                                                  return s.renderItem(t, "button");
                                                              }),
                                                          )
                                                        : i.s6,
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value: function () {
                            sc(e, "connectedCallback", this, 3)([]), this.classList.add("md-tooltip");
                        },
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            sc(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-tooltip");
                        },
                    },
                    {
                        key: "handleTooltipIconButtonClick",
                        value: function (t) {
                            this.emit("onTooltipIconButtonClick", { event: t });
                        },
                    },
                    {
                        key: "handleTooltipButtonClick",
                        value: function (t) {
                            this.emit("onTooltipButtonClick", { event: t });
                        },
                    },
                    {
                        key: "show",
                        value: function (t) {
                            (t = (function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2
                                        ? ac(Object(n), !0).forEach(function (e) {
                                              yc(t, e, n[e]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                          : ac(Object(n)).forEach(function (e) {
                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                            });
                                }
                                return t;
                            })({ container: this, placements: ["bottom", "top", "right", "left", "top-right", "bottom-right", "top-left", "bottom-left"], offset: 8 }, t)),
                                (this.open = !0),
                                (this.popper = new oc()),
                                this.popper.show(t),
                                this.emit("onTooltipShown");
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            (this.open = !1), this.emit("onTooltipClosed");
                        },
                    },
                    {
                        key: "toggle",
                        value: function (t) {
                            this.open ? this.close() : this.show(t);
                        },
                    },
                ])
            );
        })(a.$);
    function Rc(t) {
        return (
            (Rc =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Rc(t)
        );
    }
    function Ac() {
        Ac = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == Rc(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(Rc(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function Bc(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Ic(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Nc(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Uc(r.key), r);
        }
    }
    function $c() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return ($c = function () {
            return !!t;
        })();
    }
    function qc(t, e, n, r) {
        var o = Dc(Gc(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Dc() {
        return (
            (Dc =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Gc(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Dc.apply(null, arguments)
        );
    }
    function Gc(t) {
        return (
            (Gc = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Gc(t)
        );
    }
    function Fc(t, e) {
        return (
            (Fc = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Fc(t, e)
        );
    }
    function zc(t, e, n) {
        return (e = Uc(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function Uc(t) {
        var e = (function (t) {
            if ("object" != Rc(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Rc(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Rc(e) ? e : e + "";
    }
    yc(Tc, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, buttons: { type: Array }, open: { type: Boolean, reflect: !0 } }), customElements.define("md-tooltip", Tc);
    var Mc,
        Hc,
        Yc,
        Wc,
        Vc,
        Xc,
        Jc,
        Zc,
        Kc,
        Qc,
        tu,
        eu,
        nu,
        ru,
        ou,
        iu = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    zc(
                        (t = (function (t, e, n) {
                            return (
                                (e = Gc(e)),
                                (function (t, e) {
                                    if (e && ("object" == Rc(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, $c() ? Reflect.construct(e, n || [], Gc(t).constructor) : e.apply(t, n))
                            );
                        })(this, e)),
                        "regions",
                        ["north", "east", "south", "west", "center"],
                    ),
                    (t.body = Array.from(t.childNodes)),
                    (t.region = "center"),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Fc(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Nc(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIcon",
                        value: function (t) {
                            return (0, i.qy)(vc || (vc = Ic(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                        },
                    },
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(bc || (bc = Ic(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleSheetIconButtonClick);
                        },
                    },
                    {
                        key: "renderButton",
                        value: function (t) {
                            return (0, i.qy)(mc || (mc = Ic(['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '])), t, v(t.icon), v(t.label), v(t.variant), v(t.type), v(t.disabled), v(t.selected), this.handleSheetButtonClick);
                        },
                    },
                    {
                        key: "renderSpacer",
                        value: function (t) {
                            return (0, i.qy)(gc || (gc = Ic(['\n            <div class="md-sheet__spacer"></div>\n        '])));
                        },
                    },
                    {
                        key: "renderItem",
                        value: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                            return Si(
                                t.component || n,
                                [
                                    [
                                        "icon",
                                        function () {
                                            return e.renderIcon(t);
                                        },
                                    ],
                                    [
                                        "icon-button",
                                        function () {
                                            return e.renderIconButton(t);
                                        },
                                    ],
                                    [
                                        "button",
                                        function () {
                                            return e.renderButton(t);
                                        },
                                    ],
                                    [
                                        "spacer",
                                        function () {
                                            return e.renderSpacer(t);
                                        },
                                    ],
                                ],
                                function () {
                                    return i.s6;
                                },
                            );
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t,
                                e,
                                n,
                                r,
                                o,
                                a,
                                c,
                                u,
                                l,
                                s = this;
                            return (0, i.qy)(
                                wc || (wc = Ic(["\n            ", "\n            ", "\n        "])),
                                (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                    ? (0, i.qy)(
                                          Oc || (Oc = Ic(['\n                <div class="md-sheet__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                          null !== (n = this.icons) && void 0 !== n && n.length
                                              ? (0, i.qy)(
                                                    _c || (_c = Ic(['\n                        <div class="md-sheet__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.icons.map(function (t) {
                                                        return s.renderItem(t, "icon");
                                                    }),
                                                )
                                              : i.s6,
                                          this.label || this.sublabel ? (0, i.qy)(jc || (jc = Ic(['\n                        <div class="md-sheet__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(Sc || (Sc = Ic(['<div class="md-sheet__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(kc || (kc = Ic(['<div class="md-sheet__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                          null !== (r = this.actions) && void 0 !== r && r.length
                                              ? (0, i.qy)(
                                                    Pc || (Pc = Ic(['\n                        <div class="md-sheet__actions">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.actions.map(function (t) {
                                                        return s.renderItem(t, "icon-button");
                                                    }),
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                                (null !== (o = this.body) && void 0 !== o && o.length) || (null !== (a = this.buttons) && void 0 !== a && a.length)
                                    ? (0, i.qy)(
                                          Ec || (Ec = Ic(['\n                <div class="md-sheet__wrapper">\n                    ', "\n                    ", "\n                </div>\n            "])),
                                          null !== (c = this.body) && void 0 !== c && c.length ? (0, i.qy)(xc || (xc = Ic(['<div class="md-sheet__body">', "</div>"])), this.body) : i.s6,
                                          null !== (u = this.buttons) && void 0 !== u && u.length
                                              ? (0, i.qy)(
                                                    Lc || (Lc = Ic(['\n                        <div class="md-sheet__footer">\n                            ', "\n                        </div>\n                    "])),
                                                    null !== (l = this.buttons) && void 0 !== l && l.length
                                                        ? (0, i.qy)(
                                                              Cc || (Cc = Ic(['\n                                <div class="md-sheet__buttons">\n                                    ', "\n                                </div>    \n                            "])),
                                                              this.buttons.map(function (t) {
                                                                  return s.renderItem(t, "button");
                                                              }),
                                                          )
                                                        : i.s6,
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((n = (function (t) {
                                return function () {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function (r, o) {
                                        var i = t.apply(e, n);
                                        function a(t) {
                                            Bc(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            Bc(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                Ac().mark(function t() {
                                    return Ac().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return qc(e, "connectedCallback", this, 3)([]), (this.sheetScrim = document.createElement("md-scrim")), this.parentElement.insertBefore(this.sheetScrim, this.nextElementSibling), (this.handleSheetScrimClosed = this.handleSheetScrimClosed.bind(this)), this.sheetScrim.addEventListener("onScrimClosed", this.handleSheetScrimClosed), this.modal && this.open && this.sheetScrim.show(), this.classList.add("md-sheet"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 10), this.updateComplete;
                                                    case 10:
                                                        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px"), this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
                                                    case 12:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return n.apply(this, arguments);
                            }),
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            qc(e, "disconnectedCallback", this, 3)([]), this.sheetScrim.removeEventListener("onScrimClosed", this.handleSheetScrimClosed), this.sheetScrim.remove(), this.classList.remove("md-sheet"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            var n = this;
                            qc(e, "updated", this, 3)([t]),
                                t.has("region") &&
                                    this.regions.forEach(function (t) {
                                        n.classList.toggle("md-sheet--".concat(t), t === n.region);
                                    }),
                                t.has("modal") && this.classList.toggle("md-sheet--modal", !!this.modal);
                        },
                    },
                    {
                        key: "handleSheetIconButtonClick",
                        value: function (t) {
                            this.emit("onSheetIconButtonClick", { event: t });
                        },
                    },
                    {
                        key: "handleSheetButtonClick",
                        value: function (t) {
                            this.emit("onSheetButtonClick", { event: t });
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), this.modal && this.sheetScrim.show(), (this.open = !0), this.emit("onSheetShown");
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), (this.open = !1), this.sheetScrim.open && this.sheetScrim.close(), this.emit("onSheetClosed");
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.open ? this.close() : this.show();
                        },
                    },
                    {
                        key: "handleSheetScrimClosed",
                        value: function (t) {
                            this.open && this.close(), this.emit("onSheetScrimClosed", { event: t });
                        },
                    },
                ])
            );
            var n;
        })(a.$);
    function au(t) {
        return (
            (au =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            au(t)
        );
    }
    function cu() {
        cu = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == au(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(au(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function uu(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function lu(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function su(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, vu(r.key), r);
        }
    }
    function fu() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (fu = function () {
            return !!t;
        })();
    }
    function hu(t, e, n, r) {
        var o = pu(yu(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function pu() {
        return (
            (pu =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = yu(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            pu.apply(null, arguments)
        );
    }
    function yu(t) {
        return (
            (yu = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            yu(t)
        );
    }
    function du(t, e) {
        return (
            (du = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            du(t, e)
        );
    }
    function vu(t) {
        var e = (function (t) {
            if ("object" != au(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != au(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == au(e) ? e : e + "";
    }
    zc(iu, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, buttons: { type: Array }, open: { type: Boolean, reflect: !0 }, region: { type: String }, modal: { type: Boolean, reflect: !0 } }), customElements.define("md-sheet", iu);
    var bu,
        mu,
        gu,
        wu,
        Ou,
        _u,
        ju,
        Su,
        ku,
        Pu,
        Eu,
        xu,
        Lu,
        Cu,
        Tu,
        Ru = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = yu(e)),
                            (function (t, e) {
                                if (e && ("object" == au(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, fu() ? Reflect.construct(e, n || [], yu(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).body = Array.from(t.childNodes)),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && du(t, e);
                })(e, t),
                (function (t, e) {
                    return e && su(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIcon",
                        value: function (t) {
                            return (0, i.qy)(Mc || (Mc = lu(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                        },
                    },
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(Hc || (Hc = lu(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleBottomSheetIconButtonClick);
                        },
                    },
                    {
                        key: "renderButton",
                        value: function (t) {
                            return (0, i.qy)(Yc || (Yc = lu(['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '])), t, v(t.icon), v(t.label), v(t.variant), v(t.type), v(t.disabled), v(t.selected), this.handleBottomSheetButtonClick);
                        },
                    },
                    {
                        key: "renderSpacer",
                        value: function (t) {
                            return (0, i.qy)(Wc || (Wc = lu(['\n            <div class="md-bottom-sheet__spacer"></div>\n        '])));
                        },
                    },
                    {
                        key: "renderItem",
                        value: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                            return Si(
                                t.component || n,
                                [
                                    [
                                        "icon",
                                        function () {
                                            return e.renderIcon(t);
                                        },
                                    ],
                                    [
                                        "icon-button",
                                        function () {
                                            return e.renderIconButton(t);
                                        },
                                    ],
                                    [
                                        "button",
                                        function () {
                                            return e.renderButton(t);
                                        },
                                    ],
                                    [
                                        "spacer",
                                        function () {
                                            return e.renderSpacer(t);
                                        },
                                    ],
                                ],
                                function () {
                                    return i.s6;
                                },
                            );
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t,
                                e,
                                n,
                                r,
                                o,
                                a,
                                c,
                                u,
                                l,
                                s = this;
                            return (0, i.qy)(
                                Vc || (Vc = lu(["\n            ", "\n            ", "\n        "])),
                                (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                    ? (0, i.qy)(
                                          Xc || (Xc = lu(['\n                <div class="md-bottom-sheet__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                          null !== (n = this.icons) && void 0 !== n && n.length
                                              ? (0, i.qy)(
                                                    Jc || (Jc = lu(['\n                        <div class="md-bottom-sheet__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.icons.map(function (t) {
                                                        return s.renderItem(t, "icon");
                                                    }),
                                                )
                                              : i.s6,
                                          this.label || this.sublabel ? (0, i.qy)(Zc || (Zc = lu(['\n                        <div class="md-bottom-sheet__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(Kc || (Kc = lu(['<div class="md-bottom-sheet__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(Qc || (Qc = lu(['<div class="md-bottom-sheet__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                          null !== (r = this.actions) && void 0 !== r && r.length
                                              ? (0, i.qy)(
                                                    tu || (tu = lu(['\n                        <div class="md-bottom-sheet__actions">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.actions.map(function (t) {
                                                        return s.renderItem(t, "icon-button");
                                                    }),
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                                (null !== (o = this.body) && void 0 !== o && o.length) || (null !== (a = this.buttons) && void 0 !== a && a.length)
                                    ? (0, i.qy)(
                                          eu || (eu = lu(['\n                <div class="md-bottom-sheet__wrapper">\n                    ', "\n                    ", "\n                </div>\n            "])),
                                          null !== (c = this.body) && void 0 !== c && c.length ? (0, i.qy)(nu || (nu = lu(['<div class="md-bottom-sheet__body">', "</div>"])), this.body) : i.s6,
                                          null !== (u = this.buttons) && void 0 !== u && u.length
                                              ? (0, i.qy)(
                                                    ru || (ru = lu(['\n                        <div class="md-bottom-sheet__footer">\n                            ', "\n                        </div>\n                    "])),
                                                    null !== (l = this.buttons) && void 0 !== l && l.length
                                                        ? (0, i.qy)(
                                                              ou || (ou = lu(['\n                                <div class="md-bottom-sheet__buttons">\n                                    ', "\n                                </div>    \n                            "])),
                                                              this.buttons.map(function (t) {
                                                                  return s.renderItem(t, "button");
                                                              }),
                                                          )
                                                        : i.s6,
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((n = (function (t) {
                                return function () {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function (r, o) {
                                        var i = t.apply(e, n);
                                        function a(t) {
                                            uu(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            uu(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                cu().mark(function t() {
                                    return cu().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return hu(e, "connectedCallback", this, 3)([]), (this.bottomSheetScrim = document.createElement("md-scrim")), this.parentElement.insertBefore(this.bottomSheetScrim, this.nextElementSibling), (this.handleBottomSheetScrimClosed = this.handleBottomSheetScrimClosed.bind(this)), this.bottomSheetScrim.addEventListener("onScrimClosed", this.handleBottomSheetScrimClosed), this.modal && this.open && this.bottomSheetScrim.show(), this.classList.add("md-bottom-sheet"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 10), this.updateComplete;
                                                    case 10:
                                                        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px"), this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
                                                    case 12:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return n.apply(this, arguments);
                            }),
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            hu(e, "disconnectedCallback", this, 3)([]), this.bottomSheetScrim.removeEventListener("onScrimClosed", this.handleBottomSheetScrimClosed), this.bottomSheetScrim.remove(), this.classList.remove("md-bottom-sheet"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            hu(e, "updated", this, 3)([t]), t.has("modal") && this.classList.toggle("md-bottom-sheet--modal", !!this.modal);
                        },
                    },
                    {
                        key: "handleBottomSheetIconButtonClick",
                        value: function (t) {
                            this.emit("onBottomSheetIconButtonClick", { event: t });
                        },
                    },
                    {
                        key: "handleBottomSheetButtonClick",
                        value: function (t) {
                            this.emit("onBottomSheetButtonClick", { event: t });
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), this.modal && this.bottomSheetScrim.show(), (this.open = !0), this.emit("onBottomSheetShown");
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), (this.open = !1), this.bottomSheetScrim.open && this.bottomSheetScrim.close(), this.emit("onBottomSheetClosed");
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.open ? this.close() : this.show();
                        },
                    },
                    {
                        key: "handleBottomSheetScrimClosed",
                        value: function (t) {
                            this.open && this.close(), this.emit("onBottomSheetScrimClosed", { event: t });
                        },
                    },
                ])
            );
            var n;
        })(a.$);
    function Au(t) {
        return (
            (Au =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Au(t)
        );
    }
    function Bu() {
        Bu = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == Au(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(Au(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function Iu(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Nu(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function $u(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Uu(r.key), r);
        }
    }
    function qu() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (qu = function () {
            return !!t;
        })();
    }
    function Du(t, e, n, r) {
        var o = Gu(Fu(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Gu() {
        return (
            (Gu =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Fu(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Gu.apply(null, arguments)
        );
    }
    function Fu(t) {
        return (
            (Fu = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Fu(t)
        );
    }
    function zu(t, e) {
        return (
            (zu = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            zu(t, e)
        );
    }
    function Uu(t) {
        var e = (function (t) {
            if ("object" != Au(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Au(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Au(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = vu(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Ru, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, buttons: { type: Array }, open: { type: Boolean, reflect: !0 }, modal: { type: Boolean, reflect: !0 } }),
        customElements.define("md-bottom-sheet", Ru);
    var Mu,
        Hu,
        Yu,
        Wu,
        Vu = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = Fu(e)),
                            (function (t, e) {
                                if (e && ("object" == Au(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, qu() ? Reflect.construct(e, n || [], Fu(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).body = Array.from(t.childNodes)),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && zu(t, e);
                })(e, t),
                (function (t, e) {
                    return e && $u(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIcon",
                        value: function (t) {
                            return (0, i.qy)(bu || (bu = Nu(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                        },
                    },
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(mu || (mu = Nu(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleSideSheetIconButtonClick);
                        },
                    },
                    {
                        key: "renderButton",
                        value: function (t) {
                            return (0, i.qy)(gu || (gu = Nu(['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '])), t, v(t.icon), v(t.label), v(t.variant), v(t.type), v(t.disabled), v(t.selected), this.handleSideSheetButtonClick);
                        },
                    },
                    {
                        key: "renderSpacer",
                        value: function (t) {
                            return (0, i.qy)(wu || (wu = Nu(['\n            <div class="md-side-sheet__spacer"></div>\n        '])));
                        },
                    },
                    {
                        key: "renderItem",
                        value: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                            return Si(
                                t.component || n,
                                [
                                    [
                                        "icon",
                                        function () {
                                            return e.renderIcon(t);
                                        },
                                    ],
                                    [
                                        "icon-button",
                                        function () {
                                            return e.renderIconButton(t);
                                        },
                                    ],
                                    [
                                        "button",
                                        function () {
                                            return e.renderButton(t);
                                        },
                                    ],
                                    [
                                        "spacer",
                                        function () {
                                            return e.renderSpacer(t);
                                        },
                                    ],
                                ],
                                function () {
                                    return i.s6;
                                },
                            );
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t,
                                e,
                                n,
                                r,
                                o,
                                a,
                                c,
                                u,
                                l,
                                s = this;
                            return (0, i.qy)(
                                Ou || (Ou = Nu(["\n            ", "\n            ", "\n        "])),
                                (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                    ? (0, i.qy)(
                                          _u || (_u = Nu(['\n                <div class="md-side-sheet__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                          null !== (n = this.icons) && void 0 !== n && n.length
                                              ? (0, i.qy)(
                                                    ju || (ju = Nu(['\n                        <div class="md-side-sheet__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.icons.map(function (t) {
                                                        return s.renderItem(t, "icon");
                                                    }),
                                                )
                                              : i.s6,
                                          this.label || this.sublabel ? (0, i.qy)(Su || (Su = Nu(['\n                        <div class="md-side-sheet__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(ku || (ku = Nu(['<div class="md-side-sheet__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(Pu || (Pu = Nu(['<div class="md-side-sheet__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                          null !== (r = this.actions) && void 0 !== r && r.length
                                              ? (0, i.qy)(
                                                    Eu || (Eu = Nu(['\n                        <div class="md-side-sheet__actions">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.actions.map(function (t) {
                                                        return s.renderItem(t, "icon-button");
                                                    }),
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                                (null !== (o = this.body) && void 0 !== o && o.length) || (null !== (a = this.buttons) && void 0 !== a && a.length)
                                    ? (0, i.qy)(
                                          xu || (xu = Nu(['\n                <div class="md-side-sheet__wrapper">\n                    ', "\n                    ", "\n                </div>\n            "])),
                                          null !== (c = this.body) && void 0 !== c && c.length ? (0, i.qy)(Lu || (Lu = Nu(['<div class="md-side-sheet__body">', "</div>"])), this.body) : i.s6,
                                          null !== (u = this.buttons) && void 0 !== u && u.length
                                              ? (0, i.qy)(
                                                    Cu || (Cu = Nu(['\n                        <div class="md-side-sheet__footer">\n                            ', "\n                        </div>\n                    "])),
                                                    null !== (l = this.buttons) && void 0 !== l && l.length
                                                        ? (0, i.qy)(
                                                              Tu || (Tu = Nu(['\n                                <div class="md-side-sheet__buttons">\n                                    ', "\n                                </div>    \n                            "])),
                                                              this.buttons.map(function (t) {
                                                                  return s.renderItem(t, "button");
                                                              }),
                                                          )
                                                        : i.s6,
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((n = (function (t) {
                                return function () {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function (r, o) {
                                        var i = t.apply(e, n);
                                        function a(t) {
                                            Iu(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            Iu(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                Bu().mark(function t() {
                                    return Bu().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return Du(e, "connectedCallback", this, 3)([]), (this.sideSheetScrim = document.createElement("md-scrim")), this.parentElement.insertBefore(this.sideSheetScrim, this.nextElementSibling), (this.handleSideSheetScrimClosed = this.handleSideSheetScrimClosed.bind(this)), this.sideSheetScrim.addEventListener("onScrimClosed", this.handleSideSheetScrimClosed), this.modal && this.open && this.sideSheetScrim.show(), this.classList.add("md-side-sheet"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 10), this.updateComplete;
                                                    case 10:
                                                        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px"), this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
                                                    case 12:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return n.apply(this, arguments);
                            }),
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            Du(e, "disconnectedCallback", this, 3)([]), this.sideSheetScrim.removeEventListener("onScrimClosed", this.handleSideSheetScrimClosed), this.sideSheetScrim.remove(), this.classList.remove("md-side-sheet"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            Du(e, "updated", this, 3)([t]), t.has("modal") && this.classList.toggle("md-side-sheet--modal", !!this.modal);
                        },
                    },
                    {
                        key: "handleSideSheetIconButtonClick",
                        value: function (t) {
                            this.emit("onSideSheetIconButtonClick", { event: t });
                        },
                    },
                    {
                        key: "handleSideSheetButtonClick",
                        value: function (t) {
                            this.emit("onSideSheetButtonClick", { event: t });
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), this.modal && this.sideSheetScrim.show(), (this.open = !0), this.emit("onSideSheetShown");
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), (this.open = !1), this.sideSheetScrim.open && this.sideSheetScrim.close(), this.emit("onSideSheetClosed");
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.open ? this.close() : this.show();
                        },
                    },
                    {
                        key: "handleSideSheetScrimClosed",
                        value: function (t) {
                            this.open && this.close(), this.emit("onSideSheetScrimClosed", { event: t });
                        },
                    },
                ])
            );
            var n;
        })(a.$);
    function Xu(t) {
        return (
            (Xu =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Xu(t)
        );
    }
    function Ju() {
        Ju = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == Xu(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(Xu(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function Zu(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Ku(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Qu(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, il(r.key), r);
        }
    }
    function tl() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (tl = function () {
            return !!t;
        })();
    }
    function el(t, e, n, r) {
        var o = nl(rl(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function nl() {
        return (
            (nl =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = rl(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            nl.apply(null, arguments)
        );
    }
    function rl(t) {
        return (
            (rl = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            rl(t)
        );
    }
    function ol(t, e) {
        return (
            (ol = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            ol(t, e)
        );
    }
    function il(t) {
        var e = (function (t) {
            if ("object" != Xu(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Xu(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Xu(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Uu(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Vu, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, buttons: { type: Array }, open: { type: Boolean, reflect: !0 }, modal: { type: Boolean, reflect: !0 } }),
        customElements.define("md-side-sheet", Vu);
    var al,
        cl,
        ul,
        ll,
        sl,
        fl,
        hl,
        pl = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (function (t, e, n) {
                        return (
                            (e = rl(e)),
                            (function (t, e) {
                                if (e && ("object" == Xu(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, tl() ? Reflect.construct(e, n || [], rl(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && ol(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Qu(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(Mu || (Mu = Ku(['\n            <md-icon-button\n                class="md-bottom-app-bar__action"\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleBottomAppBarIconButtonClick);
                        },
                    },
                    {
                        key: "renderFab",
                        value: function (t) {
                            var e, n;
                            return (0, i.qy)(Hu || (Hu = Ku(['\n            <md-fab\n                class="md-bottom-app-bar__fab"\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .type="', '"\n                .size="', '"\n                .variant="', '"\n                @click="', '"\n            ></md-fab>\n        '])), t, v(null !== (e = null == t ? void 0 : t.icon) && void 0 !== e ? e : t), v(null == t ? void 0 : t.label), v(null == t ? void 0 : t.type), v(null == t ? void 0 : t.size), v(null !== (n = null == t ? void 0 : t.variant) && void 0 !== n ? n : "unelevated"), this.handleBottomAppBarFabClick);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t,
                                e = this;
                            return (0, i.qy)(
                                Yu || (Yu = Ku(["\n            ", "\n            ", "\n        "])),
                                null !== (t = this.actions) && void 0 !== t && t.length
                                    ? (0, i.qy)(
                                          Wu || (Wu = Ku(['\n                <div class="md-bottom-app-bar__actions">\n                    ', "\n                </div>    \n            "])),
                                          this.actions.map(function (t) {
                                              return e.renderIconButton(t);
                                          }),
                                      )
                                    : i.s6,
                                this.fab ? this.renderFab(this.fab) : i.s6,
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((n = (function (t) {
                                return function () {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function (r, o) {
                                        var i = t.apply(e, n);
                                        function a(t) {
                                            Zu(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            Zu(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                Ju().mark(function t() {
                                    return Ju().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return el(e, "connectedCallback", this, 3)([]), this.classList.add("md-bottom-app-bar"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 5), this.updateComplete;
                                                    case 5:
                                                        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px"), this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
                                                    case 7:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return n.apply(this, arguments);
                            }),
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            el(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-bottom-app-bar"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            el(e, "updated", this, 3)([t]);
                        },
                    },
                    {
                        key: "handleBottomAppBarIconButtonClick",
                        value: function (t) {
                            this.emit("onBottomAppBarIconButtonClick", { event: t });
                        },
                    },
                    {
                        key: "handleBottomAppBarFabClick",
                        value: function (t) {
                            this.emit("onBottomAppBarFabClick", { event: t });
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), (this.open = !0), this.emit("onBottomAppBarShown");
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), (this.open = !1), this.emit("onBottomAppBarClosed");
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.open ? this.close() : this.show();
                        },
                    },
                ])
            );
            var n;
        })(a.$);
    function yl(t) {
        return (
            (yl =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            yl(t)
        );
    }
    function dl() {
        dl = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == yl(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(yl(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function vl(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function bl(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function ml(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Sl(r.key), r);
        }
    }
    function gl() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (gl = function () {
            return !!t;
        })();
    }
    function wl(t, e, n, r) {
        var o = Ol(_l(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Ol() {
        return (
            (Ol =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = _l(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Ol.apply(null, arguments)
        );
    }
    function _l(t) {
        return (
            (_l = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            _l(t)
        );
    }
    function jl(t, e) {
        return (
            (jl = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            jl(t, e)
        );
    }
    function Sl(t) {
        var e = (function (t) {
            if ("object" != yl(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != yl(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == yl(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = il(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(pl, "properties", { actions: { type: Array }, fab: { type: String }, open: { type: Boolean, reflect: !0 } }),
        customElements.define("md-bottom-app-bar", pl);
    var kl,
        Pl = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (function (t, e, n) {
                        return (
                            (e = _l(e)),
                            (function (t, e) {
                                if (e && ("object" == yl(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, gl() ? Reflect.construct(e, n || [], _l(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && jl(t, e);
                })(e, t),
                (function (t, e) {
                    return e && ml(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(al || (al = bl(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleTopAppBarIconButtonClick);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t,
                                e,
                                n = this;
                            return (0, i.qy)(
                                cl || (cl = bl(["\n            ", "\n            ", "\n            ", "\n        "])),
                                null !== (t = this.leadingActions) && void 0 !== t && t.length
                                    ? (0, i.qy)(
                                          ul || (ul = bl(['\n                <div class="md-top-app-bar__actions">\n                    ', "\n                </div>    \n            "])),
                                          this.leadingActions.map(function (t) {
                                              return n.renderIconButton(t);
                                          }),
                                      )
                                    : i.s6,
                                this.label || this.sublabel ? (0, i.qy)(ll || (ll = bl(['\n                <div class="md-top-app-bar__labels">\n                    ', "\n                    ", "\n                </div>\n            "])), this.label ? (0, i.qy)(sl || (sl = bl(['<div class="md-top-app-bar__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(fl || (fl = bl(['<div class="md-top-app-bar__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                null !== (e = this.trailingActions) && void 0 !== e && e.length
                                    ? (0, i.qy)(
                                          hl || (hl = bl(['\n                <div class="md-top-app-bar__actions">\n                    ', "\n                </div>    \n            "])),
                                          this.trailingActions.map(function (t) {
                                              return n.renderIconButton(t);
                                          }),
                                      )
                                    : i.s6,
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((n = (function (t) {
                                return function () {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function (r, o) {
                                        var i = t.apply(e, n);
                                        function a(t) {
                                            vl(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            vl(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                dl().mark(function t() {
                                    return dl().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return wl(e, "connectedCallback", this, 3)([]), this.classList.add("md-top-app-bar"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 5), this.updateComplete;
                                                    case 5:
                                                        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px"), this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
                                                    case 7:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return n.apply(this, arguments);
                            }),
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            wl(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-top-app-bar"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            wl(e, "updated", this, 3)([t]);
                        },
                    },
                    {
                        key: "handleTopAppBarIconButtonClick",
                        value: function (t) {
                            this.emit("onTopAppBarIconButtonClick", { event: t });
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), (this.open = !0), this.emit("onTopAppBarShown");
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), (this.open = !1), this.emit("onTopAppBarClosed");
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.open ? this.close() : this.show();
                        },
                    },
                ])
            );
            var n;
        })(a.$);
    function El(t) {
        return (
            (El =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            El(t)
        );
    }
    function xl() {
        xl = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == El(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(El(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function Ll(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Cl(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Nl(r.key), r);
        }
    }
    function Tl() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Tl = function () {
            return !!t;
        })();
    }
    function Rl(t, e, n, r) {
        var o = Al(Bl(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Al() {
        return (
            (Al =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Bl(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Al.apply(null, arguments)
        );
    }
    function Bl(t) {
        return (
            (Bl = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Bl(t)
        );
    }
    function Il(t, e) {
        return (
            (Il = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Il(t, e)
        );
    }
    function Nl(t) {
        var e = (function (t) {
            if ("object" != El(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != El(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == El(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Sl(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Pl, "properties", { leadingActions: { type: Array }, label: { type: String }, sublabel: { type: String }, trailingActions: { type: Array }, open: { type: Boolean, reflect: !0 } }),
        customElements.define("md-top-app-bar", Pl);
    var $l,
        ql,
        Dl,
        Gl,
        Fl,
        zl,
        Ul,
        Ml,
        Hl,
        Yl,
        Wl,
        Vl = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = Bl(e)),
                            (function (t, e) {
                                if (e && ("object" == El(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Tl() ? Reflect.construct(e, n || [], Bl(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).items = []),
                    (t.rippleOptions = { container: ".md-navigation-list__icon" }),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Il(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Cl(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(
                                kl ||
                                    (kl = (function (t, e) {
                                        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
                                    })(['\n            <md-navigation-list\n                .rippleOptions="', '"\n                .items="', '"\n            ></md-navigation-list>\n        '])),
                                this.rippleOptions,
                                this.items,
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((n = (function (t) {
                                return function () {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function (r, o) {
                                        var i = t.apply(e, n);
                                        function a(t) {
                                            Ll(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            Ll(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                xl().mark(function t() {
                                    return xl().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return Rl(e, "connectedCallback", this, 3)([]), this.classList.add("md-navigation-bar"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 5), this.updateComplete;
                                                    case 5:
                                                        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px"), this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
                                                    case 7:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return n.apply(this, arguments);
                            }),
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            Rl(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-navigation-bar"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            Rl(e, "updated", this, 3)([t]);
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), (this.open = !0), this.emit("onNavigationBarShown");
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), (this.open = !1), this.emit("onNavigationBarClosed");
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.open ? this.close() : this.show();
                        },
                    },
                ])
            );
            var n;
        })(a.$);
    function Xl(t) {
        return (
            (Xl =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Xl(t)
        );
    }
    function Jl() {
        Jl = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == Xl(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(Xl(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function Zl(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Kl(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Ql(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, as(r.key), r);
        }
    }
    function ts() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (ts = function () {
            return !!t;
        })();
    }
    function es(t, e, n, r) {
        var o = ns(rs(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function ns() {
        return (
            (ns =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = rs(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            ns.apply(null, arguments)
        );
    }
    function rs(t) {
        return (
            (rs = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            rs(t)
        );
    }
    function os(t, e) {
        return (
            (os = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            os(t, e)
        );
    }
    function is(t, e, n) {
        return (e = as(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function as(t) {
        var e = (function (t) {
            if ("object" != Xl(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Xl(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Xl(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Nl(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Vl, "properties", { open: { type: Boolean, reflect: !0 }, items: { type: Array } }),
        customElements.define("md-navigation-bar", Vl);
    var cs,
        us,
        ls,
        ss,
        fs,
        hs,
        ps,
        ys,
        ds,
        vs = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    is(
                        (t = (function (t, e, n) {
                            return (
                                (e = rs(e)),
                                (function (t, e) {
                                    if (e && ("object" == Xl(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, ts() ? Reflect.construct(e, n || [], rs(t).constructor) : e.apply(t, n))
                            );
                        })(this, e)),
                        "views",
                        ["flat", "tree"],
                    ),
                    (t.view = "flat"),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && os(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Ql(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIcon",
                        value: function (t) {
                            return (0, i.qy)($l || ($l = Kl(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                        },
                    },
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(ql || (ql = Kl(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleNavigationDrawerIconButtonClick);
                        },
                    },
                    {
                        key: "renderItem",
                        value: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                            return Si(
                                t.component || n,
                                [
                                    [
                                        "icon",
                                        function () {
                                            return e.renderIcon(t);
                                        },
                                    ],
                                    [
                                        "icon-button",
                                        function () {
                                            return e.renderIconButton(t);
                                        },
                                    ],
                                ],
                                function () {
                                    return i.s6;
                                },
                            );
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t,
                                e,
                                n,
                                r,
                                o = this;
                            return (0, i.qy)(
                                Dl || (Dl = Kl(["\n            ", '\n            <div class="md-navigation-drawer__wrapper">\n                <div class="md-navigation-drawer__body">\n                    ', "\n                </div>\n            </div>\n        "])),
                                (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                    ? (0, i.qy)(
                                          Gl || (Gl = Kl(['\n                <div class="md-navigation-drawer__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                          null !== (n = this.icons) && void 0 !== n && n.length
                                              ? (0, i.qy)(
                                                    Fl || (Fl = Kl(['\n                        <div class="md-navigation-drawer__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.icons.map(function (t) {
                                                        return o.renderItem(t, "icon");
                                                    }),
                                                )
                                              : i.s6,
                                          this.label || this.sublabel ? (0, i.qy)(zl || (zl = Kl(['\n                        <div class="md-navigation-drawer__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(Ul || (Ul = Kl(['<div class="md-navigation-drawer__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(Ml || (Ml = Kl(['<div class="md-navigation-drawer__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                          null !== (r = this.actions) && void 0 !== r && r.length
                                              ? (0, i.qy)(
                                                    Hl || (Hl = Kl(['\n                        <div class="md-navigation-drawer__actions">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.actions.map(function (t) {
                                                        return o.renderItem(t, "icon-button");
                                                    }),
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                                "flat" === this.view ? (0, i.qy)(Yl || (Yl = Kl(['\n                        <md-navigation-list .items="', '"></md-navigation-list>\n                    '])), this.items) : (0, i.qy)(Wl || (Wl = Kl(['\n                        <md-tree .items="', '"></md-tree>\n                    '])), this.items),
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((n = (function (t) {
                                return function () {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function (r, o) {
                                        var i = t.apply(e, n);
                                        function a(t) {
                                            Zl(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            Zl(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                Jl().mark(function t() {
                                    return Jl().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return es(e, "connectedCallback", this, 3)([]), (this.navigationDrawerScrim = document.createElement("md-scrim")), this.parentElement.insertBefore(this.navigationDrawerScrim, this.nextElementSibling), (this.handleNavigationDrawerScrimClosed = this.handleNavigationDrawerScrimClosed.bind(this)), this.navigationDrawerScrim.addEventListener("onScrimClosed", this.handleNavigationDrawerScrimClosed), this.modal && this.open && this.navigationDrawerScrim.show(), this.classList.add("md-navigation-drawer"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 10), this.updateComplete;
                                                    case 10:
                                                        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px"), this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
                                                    case 12:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return n.apply(this, arguments);
                            }),
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            es(e, "disconnectedCallback", this, 3)([]), this.navigationDrawerScrim.removeEventListener("onScrimClosed", this.handleNavigationDrawerScrimClosed), this.navigationDrawerScrim.remove(), this.classList.remove("md-navigation-drawer"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            var n = this;
                            es(e, "updated", this, 3)([t]),
                                t.has("region") &&
                                    this.regions.forEach(function (t) {
                                        n.classList.toggle("md-navigation-drawer--".concat(t), t === n.region);
                                    }),
                                t.has("modal") && this.classList.toggle("md-navigation-drawer--modal", !!this.modal);
                        },
                    },
                    {
                        key: "handleNavigationDrawerIconButtonClick",
                        value: function (t) {
                            this.emit("onNavigationDrawerIconButtonClick", { event: t });
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), this.modal && this.navigationDrawerScrim.show(), (this.open = !0), this.emit("onNavigationDrawerShown");
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), (this.open = !1), this.navigationDrawerScrim.open && this.navigationDrawerScrim.close(), this.emit("onNavigationDrawerClosed");
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.open ? this.close() : this.show();
                        },
                    },
                    {
                        key: "handleNavigationDrawerScrimClosed",
                        value: function (t) {
                            this.open && this.close(), this.emit("onNavigationDrawerScrimClosed", { event: t });
                        },
                    },
                ])
            );
            var n;
        })(a.$);
    function bs(t) {
        return (
            (bs =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            bs(t)
        );
    }
    function ms() {
        ms = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == bs(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(bs(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function gs(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function ws(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Os(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Es(r.key), r);
        }
    }
    function _s() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (_s = function () {
            return !!t;
        })();
    }
    function js(t, e, n, r) {
        var o = Ss(ks(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Ss() {
        return (
            (Ss =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ks(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Ss.apply(null, arguments)
        );
    }
    function ks(t) {
        return (
            (ks = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            ks(t)
        );
    }
    function Ps(t, e) {
        return (
            (Ps = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Ps(t, e)
        );
    }
    function Es(t) {
        var e = (function (t) {
            if ("object" != bs(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != bs(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == bs(e) ? e : e + "";
    }
    is(vs, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, items: { type: Array }, open: { type: Boolean, reflect: !0 }, modal: { type: Boolean, reflect: !0 }, view: { type: String } }), customElements.define("md-navigation-drawer", vs);
    var xs,
        Ls = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = ks(e)),
                            (function (t, e) {
                                if (e && ("object" == bs(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, _s() ? Reflect.construct(e, n || [], ks(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).items = []),
                    (t.rippleOptions = { container: ".md-navigation-list__icon" }),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ps(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Os(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIcon",
                        value: function (t) {
                            return (0, i.qy)(cs || (cs = ws(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                        },
                    },
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(us || (us = ws(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleNavigationRailIconButtonClick);
                        },
                    },
                    {
                        key: "renderItem",
                        value: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                            return Si(
                                t.component || n,
                                [
                                    [
                                        "icon",
                                        function () {
                                            return e.renderIcon(t);
                                        },
                                    ],
                                    [
                                        "icon-button",
                                        function () {
                                            return e.renderIconButton(t);
                                        },
                                    ],
                                ],
                                function () {
                                    return i.s6;
                                },
                            );
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t,
                                e,
                                n,
                                r,
                                o = this;
                            return (0, i.qy)(
                                ls || (ls = ws(["\n            ", '\n            <div class="md-navigation-rail__wrapper">\n                <div class="md-navigation-rail__body">\n                    <md-navigation-list\n                        .rippleOptions="', '"\n                        .items="', '"\n                    ></md-navigation-list>\n                </div>\n            </div>\n        '])),
                                (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                    ? (0, i.qy)(
                                          ss || (ss = ws(['\n                <div class="md-navigation-rail__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                          null !== (n = this.icons) && void 0 !== n && n.length
                                              ? (0, i.qy)(
                                                    fs || (fs = ws(['\n                        <div class="md-navigation-rail__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.icons.map(function (t) {
                                                        return o.renderItem(t, "icon");
                                                    }),
                                                )
                                              : i.s6,
                                          this.label || this.sublabel ? (0, i.qy)(hs || (hs = ws(['\n                        <div class="md-navigation-rail__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(ps || (ps = ws(['<div class="md-navigation-rail__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(ys || (ys = ws(['<div class="md-navigation-rail__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                          null !== (r = this.actions) && void 0 !== r && r.length
                                              ? (0, i.qy)(
                                                    ds || (ds = ws(['\n                        <div class="md-navigation-rail__actions">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.actions.map(function (t) {
                                                        return o.renderItem(t, "icon-button");
                                                    }),
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                                this.rippleOptions,
                                this.items,
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((n = (function (t) {
                                return function () {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function (r, o) {
                                        var i = t.apply(e, n);
                                        function a(t) {
                                            gs(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            gs(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                ms().mark(function t() {
                                    return ms().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return js(e, "connectedCallback", this, 3)([]), this.classList.add("md-navigation-rail"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 5), this.updateComplete;
                                                    case 5:
                                                        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px"), this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
                                                    case 7:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return n.apply(this, arguments);
                            }),
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            js(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-navigation-rail"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            js(e, "updated", this, 3)([t]);
                        },
                    },
                    {
                        key: "handleNavigationRailIconButtonClick",
                        value: function (t) {
                            this.emit("onNavigationRailIconButtonClick", { event: t });
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), (this.open = !0), this.emit("onNavigationRailShown");
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            this.style.removeProperty("--md-comp-sheet-animation"), (this.open = !1), this.emit("onNavigationRailClosed");
                        },
                    },
                    {
                        key: "toggle",
                        value: function () {
                            this.open ? this.close() : this.show();
                        },
                    },
                ])
            );
            var n;
        })(a.$);
    function Cs(t) {
        return (
            (Cs =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Cs(t)
        );
    }
    function Ts(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
                (r = r.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }
    function Rs() {
        Rs = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == Cs(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(Cs(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function As(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Bs(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Fs(r.key), r);
        }
    }
    function Is() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Is = function () {
            return !!t;
        })();
    }
    function Ns(t, e, n, r) {
        var o = $s(qs(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function $s() {
        return (
            ($s =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = qs(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            $s.apply(null, arguments)
        );
    }
    function qs(t) {
        return (
            (qs = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            qs(t)
        );
    }
    function Ds(t, e) {
        return (
            (Ds = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Ds(t, e)
        );
    }
    function Gs(t, e, n) {
        return (e = Fs(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function Fs(t) {
        var e = (function (t) {
            if ("object" != Cs(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Cs(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Cs(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Es(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Ls, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, items: { type: Array }, open: { type: Boolean, reflect: !0 } }),
        customElements.define("md-navigation-rail", Ls);
    var zs,
        Us,
        Ms = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = qs(e)),
                            (function (t, e) {
                                if (e && ("object" == Cs(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Is() ? Reflect.construct(e, n || [], qs(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).items = []),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ds(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Bs(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(
                                xs ||
                                    (xs = (function (t, e) {
                                        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
                                    })(['\n            <md-navigation-list\n                .items="', '"\n            ></md-navigation-list>\n        '])),
                                this.items,
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((n = (function (t) {
                                return function () {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function (r, o) {
                                        var i = t.apply(e, n);
                                        function a(t) {
                                            As(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            As(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                Rs().mark(function t() {
                                    return Rs().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return Ns(e, "connectedCallback", this, 3)([]), this.classList.add("md-menu"), this.style.setProperty("--md-comp-menu-animation", "none"), (t.next = 5), this.updateComplete;
                                                    case 5:
                                                        this.style.setProperty("--md-comp-menu-height", this.clientHeight + "px"), this.style.setProperty("--md-comp-menu-width", this.clientWidth + "px");
                                                    case 7:
                                                    case "end":
                                                        return t.stop();
                                                }
                                        },
                                        t,
                                        this,
                                    );
                                }),
                            )),
                            function () {
                                return n.apply(this, arguments);
                            }),
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            Ns(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-menu");
                        },
                    },
                    {
                        key: "show",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.style.removeProperty("--md-comp-menu-animation"),
                                (t = (function (t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var n = null != arguments[e] ? arguments[e] : {};
                                        e % 2
                                            ? Ts(Object(n), !0).forEach(function (e) {
                                                  Gs(t, e, n[e]);
                                              })
                                            : Object.getOwnPropertyDescriptors
                                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                              : Ts(Object(n)).forEach(function (e) {
                                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                });
                                    }
                                    return t;
                                })({ container: this, placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top", "right-start", "right-end", "right", "left-start", "left-end", "left"] }, t)),
                                (this.open = !0),
                                (this.popper = new oc()),
                                this.popper.show(t),
                                this.emit("onMenuShown");
                        },
                    },
                    {
                        key: "close",
                        value: function () {
                            this.style.removeProperty("--md-comp-menu-animation"), (this.open = !1), this.emit("onMenuClosed");
                        },
                    },
                    {
                        key: "toggle",
                        value: function (t) {
                            this.open ? this.close() : this.show(t);
                        },
                    },
                ])
            );
            var n;
        })(a.$);
    function Hs(t) {
        return (
            (Hs =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Hs(t)
        );
    }
    function Ys(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Ws(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, tf(r.key), r);
        }
    }
    function Vs() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Vs = function () {
            return !!t;
        })();
    }
    function Xs(t, e, n, r) {
        var o = Js(Zs(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Js() {
        return (
            (Js =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Zs(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Js.apply(null, arguments)
        );
    }
    function Zs(t) {
        return (
            (Zs = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Zs(t)
        );
    }
    function Ks(t, e) {
        return (
            (Ks = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Ks(t, e)
        );
    }
    function Qs(t, e, n) {
        return (e = tf(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function tf(t) {
        var e = (function (t) {
            if ("object" != Hs(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Hs(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Hs(e) ? e : e + "";
    }
    Gs(Ms, "properties", { open: { type: Boolean, reflect: !0 }, items: { type: Array } }), customElements.define("md-menu", Ms);
    var ef = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                Qs(
                    (t = (function (t, e, n) {
                        return (
                            (e = Zs(e)),
                            (function (t, e) {
                                if (e && ("object" == Hs(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Vs() ? Reflect.construct(e, n || [], Zs(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)),
                    "variants",
                    ["circular"],
                ),
                (t.max = 100),
                (t.value = 0),
                t
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ks(t, e);
            })(e, t),
            (function (t, e) {
                return e && Ws(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "renderProgressIndicatorNative",
                    value: function () {
                        return (0, i.qy)(zs || (zs = Ys(['\n            <progress \n                class="md-progress-indicator__native"\n                max="', '"\n                value="', '"\n            ></progress>\n        '])), this.max, this.value);
                    },
                },
                {
                    key: "renderProgressIndicatorCircular",
                    value: function () {
                        return (this.r = 45), (this.strokeWidth = 10), (this.strokeDasharray = 2 * Math.PI * this.r), (this.strokeDashoffset = this.strokeDasharray * (1 - this.value / 100)), (0, i.qy)(Us || (Us = Ys(['\n            <div class="md-progress-indicator__wrapper">\n                <svg class="md-progress-indicator__track" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n                    <circle \n                        cx="50" \n                        cy="50" \n                        r="', '" \n                        fill="transparent" \n                        stroke="var(--md-sys-color-secondary-container)" \n                        stroke-width="', '"\n                        stroke-linecap="round"\n                        stroke-dasharray="', '"\n                        stroke-dashoffset="0"\n                    />\n                </svg>\n                <svg class="md-progress-indicator__indicator" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n                    <circle \n                        cx="50" \n                        cy="50" \n                        r="', '" \n                        fill="transparent" \n                        stroke="var(--md-sys-color-primary)" \n                        stroke-width="', '"\n                        stroke-linecap="round"\n                        stroke-dasharray="', '"\n                        stroke-dashoffset="', '"\n                    />\n                </svg>\n            </div>\n        '])), this.r, this.strokeWidth, this.strokeDasharray, this.r, this.strokeWidth, this.strokeDasharray, this.strokeDashoffset);
                    },
                },
                {
                    key: "render",
                    value: function () {
                        return "circular" === this.variant ? this.renderProgressIndicatorCircular() : this.renderProgressIndicatorNative();
                    },
                },
                {
                    key: "connectedCallback",
                    value: function () {
                        Xs(e, "connectedCallback", this, 3)([]), this.classList.add("md-progress-indicator");
                    },
                },
                {
                    key: "updated",
                    value: function (t) {
                        var n = this;
                        Xs(e, "updated", this, 3)([t]),
                            t.has("variant") &&
                                this.variants.forEach(function (t) {
                                    n.classList.toggle("md-progress-indicator--".concat(t), n.variant === t);
                                });
                    },
                },
            ])
        );
    })(a.$);
    function nf(t) {
        return (
            (nf =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            nf(t)
        );
    }
    function rf(t, e) {
        if (t) {
            if ("string" == typeof t) return of(t, e);
            var n = {}.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? of(t, e) : void 0;
        }
    }
    function of(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    function af(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, cf(r.key), r);
        }
    }
    function cf(t) {
        var e = (function (t) {
            if ("object" != nf(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != nf(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == nf(e) ? e : e + "";
    }
    function uf() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (uf = function () {
            return !!t;
        })();
    }
    function lf(t) {
        return (
            (lf = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            lf(t)
        );
    }
    function sf(t, e) {
        return (
            (sf = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            sf(t, e)
        );
    }
    Qs(ef, "properties", { variant: { type: String }, max: { type: Number }, value: { type: Number } }), customElements.define("md-progress-indicator", ef);
    var ff,
        hf,
        pf = O(
            (function (t) {
                function e(t) {
                    var n, r;
                    if (
                        ((function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        (r = (function (t, e, n) {
                            return (
                                (e = lf(e)),
                                (function (t, e) {
                                    if (e && ("object" == nf(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, uf() ? Reflect.construct(e, n || [], lf(t).constructor) : e.apply(t, n))
                            );
                        })(this, e, [t])),
                        1 !== t.type || "class" !== t.name || (null === (n = t.strings) || void 0 === n ? void 0 : n.length) > 2)
                    )
                        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
                    return r;
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && sf(t, e);
                    })(e, t),
                    (function (t, e) {
                        return e && af(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                    })(e, [
                        {
                            key: "render",
                            value: function (t) {
                                return (
                                    " " +
                                    Object.keys(t)
                                        .filter(function (e) {
                                            return t[e];
                                        })
                                        .join(" ") +
                                    " "
                                );
                            },
                        },
                        {
                            key: "update",
                            value: function (t, e) {
                                var n = (function (t, e) {
                                    return (
                                        (function (t) {
                                            if (Array.isArray(t)) return t;
                                        })(t) ||
                                        (function (t, e) {
                                            var n = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                                            if (null != n) {
                                                var r,
                                                    o,
                                                    i,
                                                    a,
                                                    c = [],
                                                    u = !0,
                                                    l = !1;
                                                try {
                                                    if (((i = (n = n.call(t)).next), 0 === e)) {
                                                        if (Object(n) !== n) return;
                                                        u = !1;
                                                    } else for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== e); u = !0);
                                                } catch (t) {
                                                    (l = !0), (o = t);
                                                } finally {
                                                    try {
                                                        if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                                                    } finally {
                                                        if (l) throw o;
                                                    }
                                                }
                                                return c;
                                            }
                                        })(t, e) ||
                                        rf(t, e) ||
                                        (function () {
                                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                        })()
                                    );
                                })(e, 1)[0];
                                if (void 0 === this.st) {
                                    for (var r in ((this.st = new Set()),
                                    void 0 !== t.strings &&
                                        (this.nt = new Set(
                                            t.strings
                                                .join(" ")
                                                .split(/\s/)
                                                .filter(function (t) {
                                                    return "" !== t;
                                                }),
                                        )),
                                    n)) {
                                        var o;
                                        n[r] && (null === (o = this.nt) || void 0 === o || !o.has(r)) && this.st.add(r);
                                    }
                                    return this.render(n);
                                }
                                var i,
                                    a = t.element.classList,
                                    c = (function (t) {
                                        var e = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                                        if (!e) {
                                            if (Array.isArray(t) || (e = rf(t))) {
                                                e && (t = e);
                                                var n = 0,
                                                    r = function () {};
                                                return {
                                                    s: r,
                                                    n: function () {
                                                        return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
                                                    },
                                                    e: function (t) {
                                                        throw t;
                                                    },
                                                    f: r,
                                                };
                                            }
                                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                        }
                                        var o,
                                            i = !0,
                                            a = !1;
                                        return {
                                            s: function () {
                                                e = e.call(t);
                                            },
                                            n: function () {
                                                var t = e.next();
                                                return (i = t.done), t;
                                            },
                                            e: function (t) {
                                                (a = !0), (o = t);
                                            },
                                            f: function () {
                                                try {
                                                    i || null == e.return || e.return();
                                                } finally {
                                                    if (a) throw o;
                                                }
                                            },
                                        };
                                    })(this.st);
                                try {
                                    for (c.s(); !(i = c.n()).done; ) {
                                        var u = i.value;
                                        u in n || (a.remove(u), this.st.delete(u));
                                    }
                                } catch (t) {
                                    c.e(t);
                                } finally {
                                    c.f();
                                }
                                for (var l in n) {
                                    var s,
                                        f = !!n[l];
                                    f === this.st.has(l) || (null === (s = this.nt) || void 0 === s ? void 0 : s.has(l)) || (f ? (a.add(l), this.st.add(l)) : (a.remove(l), this.st.delete(l)));
                                }
                                return d.c0;
                            },
                        },
                    ])
                );
            })(_),
        );
    function yf(t) {
        return (
            (yf =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            yf(t)
        );
    }
    function df(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function vf(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, jf(r.key), r);
        }
    }
    function bf() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (bf = function () {
            return !!t;
        })();
    }
    function mf(t, e, n, r) {
        var o = gf(wf(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function gf() {
        return (
            (gf =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = wf(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            gf.apply(null, arguments)
        );
    }
    function wf(t) {
        return (
            (wf = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            wf(t)
        );
    }
    function Of(t, e) {
        return (
            (Of = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Of(t, e)
        );
    }
    function _f(t, e, n) {
        return (e = jf(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function jf(t) {
        var e = (function (t) {
            if ("object" != yf(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != yf(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == yf(e) ? e : e + "";
    }
    var Sf = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                _f(
                    (t = (function (t, e, n) {
                        return (
                            (e = wf(e)),
                            (function (t, e) {
                                if (e && ("object" == yf(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, bf() ? Reflect.construct(e, n || [], wf(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)),
                    "variants",
                    ["centered", "continuous", "discrete", "range-selection"],
                ),
                (t.min = 0),
                (t.max = 100),
                (t.step = 1),
                t
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Of(t, e);
            })(e, t),
            (function (t, e) {
                return e && vf(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "indicators",
                    get: function () {
                        return "centered" === this.variant ? 3 : "continuous" === this.variant ? 1 : "discrete" === this.variant ? this.max / this.step + 1 : "range-selection" === this.variant ? 2 : void 0;
                    },
                },
                {
                    key: "renderSliderWrapper",
                    value: function (t, e) {
                        var n = this;
                        return (0, i.qy)(
                            ff || (ff = df(['\n            <div class="md-slider__wrapper">\n                <input \n                    type="range" \n                    class="md-slider__native"\n                    .data="', '"\n                    .min="', '"\n                    .max="', '"\n                    .step="', '"\n                    .value="', '"\n                    @input="', '"\n                >\n                <div class="md-slider__indicators">\n                    ', '\n                </div>\n                <output class="md-slider__value">', "</output>\n            </div>\n        "])),
                            { index: e },
                            v(this.min),
                            v(this.max),
                            v(this.step),
                            v(t),
                            this.handleSliderNativeInput,
                            Array.from({ length: this.indicators }, function (e, r) {
                                return (0, i.qy)(hf || (hf = df(['\n                        <div class="', '"></div>\n                    '])), pf({ "md-slider__indicator": !0, "md-slider__indicator--activated": t >= n.step * r }));
                            }),
                            t,
                        );
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var t = this;
                        return this.value.map(function (e, n) {
                            return t.renderSliderWrapper(e, n);
                        });
                    },
                },
                {
                    key: "connectedCallback",
                    value: function () {
                        mf(e, "connectedCallback", this, 3)([]), this.classList.add("md-slider"), void 0 === this.value && (this.value = [this.max < this.min ? this.min : this.min + (this.max - this.min) / 2]), this.value[0] < 0 ? (this.variant = "centered") : this.step > 1 ? (this.variant = "discrete") : this.value.length > 1 ? (this.variant = "range-selection") : (this.variant = "continuous"), this.updateValue();
                    },
                },
                {
                    key: "updated",
                    value: function (t) {
                        var n = this;
                        mf(e, "updated", this, 3)([t]),
                            t.has("variant") &&
                                this.variants.forEach(function (t) {
                                    n.classList.toggle("md-slider--".concat(t), t === n.variant);
                                });
                    },
                },
                {
                    key: "sliderNatives",
                    get: function () {
                        return this.querySelectorAll(".md-slider__native");
                    },
                },
                {
                    key: "handleSliderNativeInput",
                    value: function (t) {
                        var e = t.currentTarget,
                            n = e.data;
                        this.value.length > 1 && ((this.sliderNatives[0].value = Math.min(this.sliderNatives[0].value, this.value[1])), (this.sliderNatives[1].value = Math.max(this.sliderNatives[1].value, this.value[0]))), (this.value[n.index] = Number(e.value)), (e.value = this.value[n.index]), this.updateValue(), this.requestUpdate(), this.emit("onSliderNativeInput", { event: t });
                    },
                },
                {
                    key: "updateValue",
                    value: function () {
                        var t = this;
                        this.value.forEach(function (e, n) {
                            t.style.setProperty("--md-comp-slider-value".concat(n), t.percentage(e));
                        });
                    },
                },
                {
                    key: "percentage",
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.min;
                        return (t - e) / ((arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.max) - e);
                    },
                },
            ])
        );
    })(a.$);
    function kf(t) {
        return (
            (kf =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            kf(t)
        );
    }
    function Pf() {
        Pf = function () {
            return e;
        };
        var t,
            e = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
                Object.defineProperty ||
                function (t, e, n) {
                    t[e] = n.value;
                },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
        function l(t, e, n) {
            return Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
            l({}, "");
        } catch (t) {
            l = function (t, e, n) {
                return (t[e] = n);
            };
        }
        function s(t, e, n, r) {
            var i = e && e.prototype instanceof b ? e : b,
                a = Object.create(i.prototype),
                c = new C(r || []);
            return o(a, "_invoke", { value: P(t, n, c) }), a;
        }
        function f(t, e, n) {
            try {
                return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
                return { type: "throw", arg: t };
            }
        }
        e.wrap = s;
        var h = "suspendedStart",
            p = "suspendedYield",
            y = "executing",
            d = "completed",
            v = {};
        function b() {}
        function m() {}
        function g() {}
        var w = {};
        l(w, a, function () {
            return this;
        });
        var O = Object.getPrototypeOf,
            _ = O && O(O(T([])));
        _ && _ !== n && r.call(_, a) && (w = _);
        var j = (g.prototype = b.prototype = Object.create(w));
        function S(t) {
            ["next", "throw", "return"].forEach(function (e) {
                l(t, e, function (t) {
                    return this._invoke(e, t);
                });
            });
        }
        function k(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == kf(s) && r.call(s, "__await")
                        ? e.resolve(s.__await).then(
                              function (t) {
                                  n("next", t, a, c);
                              },
                              function (t) {
                                  n("throw", t, a, c);
                              },
                          )
                        : e.resolve(s).then(
                              function (t) {
                                  (l.value = t), a(l);
                              },
                              function (t) {
                                  return n("throw", t, a, c);
                              },
                          );
                }
                c(u.arg);
            }
            var i;
            o(this, "_invoke", {
                value: function (t, r) {
                    function o() {
                        return new e(function (e, o) {
                            n(t, r, e, o);
                        });
                    }
                    return (i = i ? i.then(o, o) : o());
                },
            });
        }
        function P(e, n, r) {
            var o = h;
            return function (i, a) {
                if (o === y) throw Error("Generator is already running");
                if (o === d) {
                    if ("throw" === i) throw a;
                    return { value: t, done: !0 };
                }
                for (r.method = i, r.arg = a; ; ) {
                    var c = r.delegate;
                    if (c) {
                        var u = E(c, r);
                        if (u) {
                            if (u === v) continue;
                            return u;
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if (o === h) throw ((o = d), r.arg);
                        r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    o = y;
                    var l = f(e, n, r);
                    if ("normal" === l.type) {
                        if (((o = r.done ? d : p), l.arg === v)) continue;
                        return { value: l.arg, done: r.done };
                    }
                    "throw" === l.type && ((o = d), (r.method = "throw"), (r.arg = l.arg));
                }
            };
        }
        function E(e, n) {
            var r = n.method,
                o = e.iterator[r];
            if (o === t) return (n.delegate = null), ("throw" === r && e.iterator.return && ((n.method = "return"), (n.arg = t), E(e, n), "throw" === n.method)) || ("return" !== r && ((n.method = "throw"), (n.arg = new TypeError("The iterator does not provide a '" + r + "' method")))), v;
            var i = f(o, e.iterator, n.arg);
            if ("throw" === i.type) return (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), v;
            var a = i.arg;
            return a ? (a.done ? ((n[e.resultName] = a.value), (n.next = e.nextLoc), "return" !== n.method && ((n.method = "next"), (n.arg = t)), (n.delegate = null), v) : a) : ((n.method = "throw"), (n.arg = new TypeError("iterator result is not an object")), (n.delegate = null), v);
        }
        function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function L(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(x, this), this.reset(!0);
        }
        function T(e) {
            if (e || "" === e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var o = -1,
                        i = function n() {
                            for (; ++o < e.length; ) if (r.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                            return (n.value = t), (n.done = !0), n;
                        };
                    return (i.next = i);
                }
            }
            throw new TypeError(kf(e) + " is not iterable");
        }
        return (
            (m.prototype = g),
            o(j, "constructor", { value: g, configurable: !0 }),
            o(g, "constructor", { value: m, configurable: !0 }),
            (m.displayName = l(g, u, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
            }),
            (e.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(j)), t;
            }),
            (e.awrap = function (t) {
                return { __await: t };
            }),
            S(k.prototype),
            l(k.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new k(s(t, n, r, o), i);
                return e.isGeneratorFunction(n)
                    ? a
                    : a.next().then(function (t) {
                          return t.done ? t.value : a.next();
                      });
            }),
            S(j),
            l(j, u, "Generator"),
            l(j, a, function () {
                return this;
            }),
            l(j, "toString", function () {
                return "[object Generator]";
            }),
            (e.keys = function (t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return (
                    n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var r = n.pop();
                            if (r in e) return (t.value = r), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                    }
                );
            }),
            (e.values = T),
            (C.prototype = {
                constructor: C,
                reset: function (e) {
                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = t), this.tryEntries.forEach(L), !e)) for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval;
                },
                dispatchException: function (e) {
                    if (this.done) throw e;
                    var n = this;
                    function o(r, o) {
                        return (c.type = "throw"), (c.arg = e), (n.next = r), o && ((n.method = "next"), (n.arg = t)), !!o;
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break;
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a);
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? (this.next = t.arg) : "return" === t.type ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end")) : "normal" === t.type && e && (this.next = e), v;
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), L(n), v;
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                L(n);
                            }
                            return o;
                        }
                    }
                    throw Error("illegal catch attempt");
                },
                delegateYield: function (e, n, r) {
                    return (this.delegate = { iterator: T(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
                },
            }),
            e
        );
    }
    function Ef(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function xf(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise(function (r, o) {
                var i = t.apply(e, n);
                function a(t) {
                    Ef(i, r, o, a, c, "next", t);
                }
                function c(t) {
                    Ef(i, r, o, a, c, "throw", t);
                }
                a(void 0);
            });
        };
    }
    function Lf(t) {
        return (
            (function (t) {
                if (Array.isArray(t)) return Bf(t);
            })(t) ||
            (function (t) {
                if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
            })(t) ||
            Af(t) ||
            (function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function Cf(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
                (r = r.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }
    function Tf(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
                ? Cf(Object(n), !0).forEach(function (e) {
                      Nf(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                  : Cf(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
        }
        return t;
    }
    function Rf(t, e) {
        var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = Af(t)) || (e && t && "number" == typeof t.length)) {
                n && (t = n);
                var r = 0,
                    o = function () {};
                return {
                    s: o,
                    n: function () {
                        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
                    },
                    e: function (t) {
                        throw t;
                    },
                    f: o,
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var i,
            a = !0,
            c = !1;
        return {
            s: function () {
                n = n.call(t);
            },
            n: function () {
                var t = n.next();
                return (a = t.done), t;
            },
            e: function (t) {
                (c = !0), (i = t);
            },
            f: function () {
                try {
                    a || null == n.return || n.return();
                } finally {
                    if (c) throw i;
                }
            },
        };
    }
    function Af(t, e) {
        if (t) {
            if ("string" == typeof t) return Bf(t, e);
            var n = {}.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Bf(t, e) : void 0;
        }
    }
    function Bf(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    function If(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, $f(r.key), r);
        }
    }
    function Nf(t, e, n) {
        return (e = $f(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function $f(t) {
        var e = (function (t) {
            if ("object" != kf(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != kf(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == kf(e) ? e : e + "";
    }
    _f(Sf, "properties", {
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        variant: { type: String },
        value: {
            type: String,
            converter: {
                fromAttribute: function (t, e) {
                    return [].concat(JSON.parse(t));
                },
                toAttribute: function (t, e) {
                    return JSON.stringify(t);
                },
            },
        },
    }),
        customElements.define("md-slider", Sf);
    var qf,
        Df = (function () {
            function t() {
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t);
            }
            return (function (t, e, n) {
                return n && If(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(t, 0, [
                {
                    key: "get",
                    value: function () {
                        var t,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.pathname,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.routes,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                            i = Rf(n);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var a,
                                    c,
                                    u = t.value;
                                u.regexp || ((u.parent = r), (u.pathname = ((null !== (c = null == r ? void 0 : r.pathname) && void 0 !== c ? c : "") + "/" + u.path).replace(/\/+/g, "/")), (u.regexp = new RegExp("^" + u.pathname.replace(/\:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/, "(?:.*)") + "(?:/?$)", "i")));
                                var l = e.match(u.regexp);
                                if (l) return (this.params = Tf({}, null == l ? void 0 : l.groups)), [].concat(Lf(o), [u]);
                                if (null != u && null !== (a = u.children) && void 0 !== a && a.length) {
                                    var s = this.get(e, u.children, u, [].concat(Lf(o), [u]));
                                    if (s) return s;
                                }
                            }
                        } catch (t) {
                            i.e(t);
                        } finally {
                            i.f();
                        }
                    },
                },
                {
                    key: "pathname",
                    get: function () {
                        return this.options.historyApiFallback ? window.location.pathname : window.location.hash.replace(/^#/, "").replace(/\?[^\?]+/, "") || "/";
                    },
                },
                {
                    key: "handleNavigation",
                    value:
                        ((o = xf(
                            Pf().mark(function t(e) {
                                var n, r, o, i, a, c;
                                return Pf().wrap(
                                    function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    this.emit("onRouterCurrentEntryChange"), this.setController(), (n = this.get()), this.emit("onRouterNavigate"), (r = Rf(n)), (t.prev = 5), r.s();
                                                case 7:
                                                    if ((o = r.n()).done) {
                                                        t.next = 29;
                                                        break;
                                                    }
                                                    if (!(i = o.value).beforeLoad) {
                                                        t.next = 19;
                                                        break;
                                                    }
                                                    return (t.prev = 10), (t.next = 13), this.handleBeforeLoad(i);
                                                case 13:
                                                    t.next = 19;
                                                    break;
                                                case 15:
                                                    return (t.prev = 15), (t.t0 = t.catch(10)), this.emit("onRouterNavigateError"), t.abrupt("break", 29);
                                                case 19:
                                                    return (t.next = 21), this.loadComponent(i);
                                                case 21:
                                                    return (a = this.setContainer(i)), (t.next = 24), this.getOutlet(a, i);
                                                case 24:
                                                    (c = t.sent), this.renderComponent(i, c), this.removeComponent(n);
                                                case 27:
                                                    t.next = 7;
                                                    break;
                                                case 29:
                                                    t.next = 34;
                                                    break;
                                                case 31:
                                                    (t.prev = 31), (t.t1 = t.catch(5)), r.e(t.t1);
                                                case 34:
                                                    return (t.prev = 34), r.f(), t.finish(34);
                                                case 37:
                                                    this.emit("onRouterNavigateSuccess");
                                                case 38:
                                                case "end":
                                                    return t.stop();
                                            }
                                    },
                                    t,
                                    this,
                                    [
                                        [5, 31, 34, 37],
                                        [10, 15],
                                    ],
                                );
                            }),
                        )),
                        function (t) {
                            return o.apply(this, arguments);
                        }),
                },
                {
                    key: "removeComponent",
                    value: function (t) {
                        for (
                            var e = Array.from(document.body.querySelectorAll("md-outlet")),
                                n = function () {
                                    for (var n = o[r].nextElementSibling; n; )
                                        e.find(function (t) {
                                            return t === n;
                                        }) ||
                                            t.find(function (t) {
                                                return t.component === n;
                                            }) ||
                                            n.remove(),
                                            (n = n.nextElementSibling);
                                },
                                r = 0,
                                o = e;
                            r < o.length;
                            r++
                        )
                            n();
                    },
                },
                {
                    key: "renderComponent",
                    value: function (t, e) {
                        t.component.isConnected || e.parentElement.insertBefore(t.component, e.nextElementSibling);
                    },
                },
                {
                    key: "getOutlet",
                    value:
                        ((r = xf(
                            Pf().mark(function t(e, n) {
                                return Pf().wrap(function (t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (
                                                    (t.next = 2),
                                                    new Promise(function (t) {
                                                        var r,
                                                            o,
                                                            i = "md-outlet:not([name])",
                                                            a = e;
                                                        n.outlet && ((i = 'md-outlet[name="'.concat(n.outlet, '"]')), (a = document.body));
                                                        var c = function () {
                                                            (o = a.querySelector(i)) && (r && r.disconnect(), t(o));
                                                        };
                                                        (r = new MutationObserver(c)).observe(a, { subtree: !0, childList: !0 }), c();
                                                    })
                                                );
                                            case 2:
                                                return t.abrupt("return", t.sent);
                                            case 3:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            }),
                        )),
                        function (t, e) {
                            return r.apply(this, arguments);
                        }),
                },
                {
                    key: "setContainer",
                    value: function (t) {
                        var e;
                        return (null === (e = t.parent) || void 0 === e ? void 0 : e.component) || document.body;
                    },
                },
                {
                    key: "loadComponent",
                    value:
                        ((n = xf(
                            Pf().mark(function t(e) {
                                return Pf().wrap(function (t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                if (e.component) {
                                                    t.next = 4;
                                                    break;
                                                }
                                                return (t.next = 3), e.load();
                                            case 3:
                                                e.component = t.sent;
                                            case 4:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            }),
                        )),
                        function (t) {
                            return n.apply(this, arguments);
                        }),
                },
                {
                    key: "handleBeforeLoad",
                    value:
                        ((e = xf(
                            Pf().mark(function t(e) {
                                var n = this;
                                return Pf().wrap(function (t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                return (
                                                    (t.next = 2),
                                                    new Promise(function (t, r) {
                                                        var o = function (e) {
                                                            e ? r(e) : t();
                                                        };
                                                        n.controller.signal.addEventListener("abort", o), e.beforeLoad(o);
                                                    })
                                                );
                                            case 2:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            }),
                        )),
                        function (t) {
                            return e.apply(this, arguments);
                        }),
                },
                {
                    key: "setController",
                    value: function () {
                        this.controller && !this.controller.signal.aborted && this.controller.abort(), (!this.controller || (this.controller && this.controller.signal.aborted)) && (this.controller = new AbortController());
                    },
                },
                {
                    key: "navigate",
                    value: function (t) {
                        this.options.historyApiFallback ? window.history.pushState({}, "", t) : (window.location.hash = t);
                    },
                },
                {
                    key: "handleNavigate",
                    value: function (e) {
                        var n = e.target.closest("[routerLink]");
                        if (n) {
                            var r = n.getAttribute("routerLink");
                            t.navigate(r);
                        }
                    },
                },
                {
                    key: "emit",
                    value: function (t, e) {
                        var n = new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: e });
                        window.dispatchEvent(n);
                    },
                },
                {
                    key: "use",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (((this.routes = e), (this.options = Tf({ historyApiFallback: !1 }, n)), window.addEventListener("load", this.handleNavigation.bind(this)), this.options.historyApiFallback)) {
                            window.addEventListener("popstate", this.handleNavigation.bind(this));
                            var r = window.history.pushState;
                            window.history.pushState = function () {
                                r.apply(this, arguments), t.emit("popstate");
                            };
                        } else window.addEventListener("hashchange", this.handleNavigation.bind(this));
                        window.addEventListener("click", this.handleNavigate.bind(this));
                    },
                },
            ]);
            var e, n, r, o;
        })();
    function Gf(t) {
        return (
            (Gf =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Gf(t)
        );
    }
    function Ff(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, zf(r.key), r);
        }
    }
    function zf(t) {
        var e = (function (t) {
            if ("object" != Gf(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Gf(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Gf(e) ? e : e + "";
    }
    function Uf() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Uf = function () {
            return !!t;
        })();
    }
    function Mf(t) {
        return (
            (Mf = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Mf(t)
        );
    }
    function Hf(t, e) {
        return (
            (Hf = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Hf(t, e)
        );
    }
    Nf(Df, "params", {}), Nf(Df, "routes", []), Nf(Df, "options", {});
    var Yf = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                ((t = (function (t, e, n) {
                    return (
                        (e = Mf(e)),
                        (function (t, e) {
                            if (e && ("object" == Gf(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, Uf() ? Reflect.construct(e, n || [], Mf(t).constructor) : e.apply(t, n))
                    );
                })(this, e)).items = [
                    {
                        label: "Layout",
                        children: [
                            { label: "Grid", routerLink: "/layout-grid" },
                            { label: "Border", routerLink: "/layout-border" },
                        ],
                    },
                    { label: "Icon", routerLink: "/icon" },
                    { label: "Image", routerLink: "/image" },
                    { label: "Badge", routerLink: "/badge" },
                    { label: "Button", routerLink: "/button" },
                    { label: "Fab", routerLink: "/fab" },
                    { label: "Icon Button", routerLink: "/icon-button" },
                    { label: "Segmented Button", routerLink: "/segmented-button" },
                    { label: "Checkbox", routerLink: "/checkbox" },
                    { label: "Radio Button", routerLink: "/radio-button" },
                    { label: "Switch", routerLink: "/switch" },
                    { label: "Card", routerLink: "/card" },
                    { label: "Scrim", routerLink: "/scrim" },
                    { label: "Dialog", routerLink: "/dialog" },
                    {
                        label: "Sheet",
                        children: [
                            { label: "Default", routerLink: "/sheet" },
                            { label: "Modal", routerLink: "/sheet-modal" },
                            { label: "Side Sheet", routerLink: "/side-sheet" },
                            { label: "Side Sheet Modal", routerLink: "/side-sheet-modal" },
                            { label: "Bottom Sheet", routerLink: "/bottom-sheet" },
                            { label: "Bottom Sheet Modal", routerLink: "/bottom-sheet-modal" },
                        ],
                    },
                    { label: "List", routerLink: "/list" },
                    { label: "Tooltip", routerLink: "/tooltip" },
                    { label: "Tree", routerLink: "/tree" },
                    { label: "Bottom App Bar", routerLink: "/bottom-app-bar" },
                    { label: "Top App Bar", routerLink: "/top-app-bar" },
                    { label: "Tabs", routerLink: "/tabs" },
                    {
                        label: "Navigation Bar",
                        children: [
                            { label: "Default", routerLink: "/navigation-bar" },
                            { label: "No Label", routerLink: "/navigation-bar-no-label" },
                        ],
                    },
                    {
                        label: "Navigation Drawer",
                        children: [
                            { label: "Default", routerLink: "/navigation-drawer" },
                            { label: "No Icon", routerLink: "/navigation-drawer-no-icon" },
                            { label: "Modal", routerLink: "/navigation-drawer-modal" },
                        ],
                    },
                    {
                        label: "Navigation Rail",
                        children: [
                            { label: "Default", routerLink: "/navigation-rail" },
                            { label: "No Label", routerLink: "/navigation-rail-no-label" },
                        ],
                    },
                    { label: "Menu", routerLink: "/menu" },
                    { label: "Progress Indicator", routerLink: "/progress-indicator" },
                    { label: "Slider", routerLink: "/slider" },
                    { label: "Chips", routerLink: "/chips" },
                    { label: "Snackbar", routerLink: "/snackbar" },
                ]),
                t.items.sort(function (t, e) {
                    return t.children && !e.children ? -1 : !t.children && e.children ? 1 : t.label.localeCompare(e.label);
                }),
                (function t(e) {
                    e.forEach(function (e) {
                        var n;
                        (e.selected = e.routerLink === Df.pathname), null !== (n = e.children) && void 0 !== n && n.length && t(e.children);
                    });
                })(t.items),
                (t.leadingActions = [{ icon: "menu" }]),
                t
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Hf(t, e);
            })(e, t),
            (function (t, e) {
                return e && Ff(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "render",
                    value: function () {
                        return (0, i.qy)(
                            qf ||
                                (qf = (function (t, e) {
                                    return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
                                })(['\n            <div class="md-layout__border">\n                <md-top-app-bar\n                    class="demo-main-top-app-bar"\n                    open\n                    label="Material 3"\n                    .leadingActions="', '"\n                    @onTopAppBarIconButtonClick="', '"\n                ></md-top-app-bar>\n                <md-navigation-drawer\n                    id="navigationDrawer"\n                    view="tree"\n                    .items="', '"\n                    @onTreeItemClick="', '"\n                ></md-navigation-drawer>\n                <md-sheet region="center">\n                    <md-outlet></md-outlet>\n                </md-sheet>\n            </div>\n        '])),
                            this.leadingActions,
                            function () {
                                return navigationDrawer.toggle();
                            },
                            this.items,
                            function () {},
                        );
                    },
                },
            ])
        );
    })(a.$);
    customElements.define("demo-main", Yf);
    const Wf = document.createElement("demo-main");
    function Vf(t) {
        return (
            (Vf =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Vf(t)
        );
    }
    var Xf;
    function Jf(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Zf(r.key), r);
        }
    }
    function Zf(t) {
        var e = (function (t) {
            if ("object" != Vf(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Vf(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Vf(e) ? e : e + "";
    }
    function Kf() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Kf = function () {
            return !!t;
        })();
    }
    function Qf(t) {
        return (
            (Qf = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Qf(t)
        );
    }
    function th(t, e) {
        return (
            (th = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            th(t, e)
        );
    }
    var eh = (function (t) {
        function e() {
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                (function (t, e, n) {
                    return (
                        (e = Qf(e)),
                        (function (t, e) {
                            if (e && ("object" == Vf(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, Kf() ? Reflect.construct(e, n || [], Qf(t).constructor) : e.apply(t, n))
                    );
                })(this, e, arguments)
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && th(t, e);
            })(e, t),
            (function (t, e) {
                return e && Jf(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "render",
                    value: function () {
                        return (0, i.qy)(
                            Xf ||
                                (Xf = (function (t, e) {
                                    return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
                                })(["\n            <h1>Error</h1>\n            <md-outlet></md-outlet>\n        "])),
                        );
                    },
                },
            ])
        );
    })(a.$);
    customElements.define("demo-error", eh);
    const nh = document.createElement("demo-error");
    Df.use([
        {
            path: "",
            component: Wf,
            children: [
                {
                    path: "layout-grid",
                    load: function () {
                        return o
                            .e(874)
                            .then(o.bind(o, 874))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "layout-border",
                    load: function () {
                        return o
                            .e(86)
                            .then(o.bind(o, 86))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "icon",
                    load: function () {
                        return o
                            .e(78)
                            .then(o.bind(o, 78))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "image",
                    load: function () {
                        return o
                            .e(466)
                            .then(o.bind(o, 466))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "badge",
                    load: function () {
                        return o
                            .e(526)
                            .then(o.bind(o, 526))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "button",
                    load: function () {
                        return o
                            .e(80)
                            .then(o.bind(o, 80))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "fab",
                    load: function () {
                        return o
                            .e(54)
                            .then(o.bind(o, 54))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "icon-button",
                    load: function () {
                        return o
                            .e(734)
                            .then(o.bind(o, 734))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "segmented-button",
                    load: function () {
                        return o
                            .e(254)
                            .then(o.bind(o, 254))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "checkbox",
                    load: function () {
                        return o
                            .e(774)
                            .then(o.bind(o, 774))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "radio-button",
                    load: function () {
                        return o
                            .e(60)
                            .then(o.bind(o, 60))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "switch",
                    load: function () {
                        return o
                            .e(736)
                            .then(o.bind(o, 736))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "card",
                    load: function () {
                        return o
                            .e(24)
                            .then(o.bind(o, 24))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "scrim",
                    load: function () {
                        return o
                            .e(974)
                            .then(o.bind(o, 974))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "dialog",
                    load: function () {
                        return o
                            .e(300)
                            .then(o.bind(o, 300))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "sheet",
                    load: function () {
                        return o
                            .e(790)
                            .then(o.bind(o, 790))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "sheet-modal",
                    load: function () {
                        return o
                            .e(794)
                            .then(o.bind(o, 794))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "list",
                    load: function () {
                        return o
                            .e(220)
                            .then(o.bind(o, 220))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "tooltip",
                    load: function () {
                        return o
                            .e(662)
                            .then(o.bind(o, 662))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "tree",
                    load: function () {
                        return o
                            .e(411)
                            .then(o.bind(o, 792))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "bottom-app-bar",
                    load: function () {
                        return o
                            .e(190)
                            .then(o.bind(o, 190))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "top-app-bar",
                    load: function () {
                        return o
                            .e(146)
                            .then(o.bind(o, 146))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "navigation-list",
                    load: function () {
                        return o
                            .e(142)
                            .then(o.bind(o, 142))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "tabs",
                    load: function () {
                        return o
                            .e(276)
                            .then(o.bind(o, 276))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "navigation-bar",
                    load: function () {
                        return o
                            .e(892)
                            .then(o.bind(o, 892))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "navigation-bar-no-label",
                    load: function () {
                        return o
                            .e(465)
                            .then(o.bind(o, 465))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "navigation-drawer",
                    load: function () {
                        return o
                            .e(938)
                            .then(o.bind(o, 938))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "navigation-drawer-no-icon",
                    load: function () {
                        return o
                            .e(956)
                            .then(o.bind(o, 956))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "navigation-drawer-modal",
                    load: function () {
                        return o
                            .e(566)
                            .then(o.bind(o, 566))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "navigation-rail",
                    load: function () {
                        return o
                            .e(214)
                            .then(o.bind(o, 214))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "navigation-rail-no-label",
                    load: function () {
                        return o
                            .e(67)
                            .then(o.bind(o, 67))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "menu",
                    load: function () {
                        return o
                            .e(833)
                            .then(o.bind(o, 833))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "progress-indicator",
                    load: function () {
                        return o
                            .e(70)
                            .then(o.bind(o, 70))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "slider",
                    load: function () {
                        return o
                            .e(514)
                            .then(o.bind(o, 514))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "test",
                    load: function () {
                        return o
                            .e(244)
                            .then(o.bind(o, 244))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "side-sheet",
                    load: function () {
                        return o
                            .e(866)
                            .then(o.bind(o, 866))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "side-sheet-modal",
                    load: function () {
                        return o
                            .e(430)
                            .then(o.bind(o, 430))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "bottom-sheet",
                    load: function () {
                        return o
                            .e(522)
                            .then(o.bind(o, 522))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "bottom-sheet-modal",
                    load: function () {
                        return o
                            .e(470)
                            .then(o.bind(o, 470))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "chips",
                    load: function () {
                        return o
                            .e(510)
                            .then(o.bind(o, 510))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
                {
                    path: "snackbar",
                    load: function () {
                        return o
                            .e(326)
                            .then(o.bind(o, 326))
                            .then(function (t) {
                                return t.default;
                            });
                    },
                },
            ],
        },
        { path: "*", component: nh },
    ]);
})();
