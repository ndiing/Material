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
                    P = function () {
                        return S.createComment("");
                    },
                    k = function (t) {
                        return null === t || ("object" != v(t) && "function" != typeof t);
                    },
                    E = Array.isArray,
                    x = "[ \t\n\f\r]",
                    L = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
                    C = /-->/g,
                    T = />/g,
                    A = RegExp(">|".concat(x, "(?:([^\\s\"'>=/]+)(").concat(x, "*=").concat(x, "*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"), "g"),
                    R = /'/g,
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
                            for (var u = t[c], l = void 0, s = void 0, f = -1, h = 0; h < u.length && ((a.lastIndex = h), null !== (s = a.exec(u))); ) (h = a.lastIndex), a === L ? ("!--" === s[1] ? (a = C) : void 0 !== s[1] ? (a = T) : void 0 !== s[2] ? (I.test(s[2]) && (n = RegExp("</" + s[2], "g")), (a = A)) : void 0 !== s[3] && (a = A)) : a === A ? (">" === s[0] ? ((a = null != n ? n : L), (f = -1)) : void 0 === s[1] ? (f = -2) : ((f = a.lastIndex - s[2].length), (l = s[1]), (a = void 0 === s[3] ? A : '"' === s[3] ? B : R))) : a === B || a === R ? (a = A) : a === C || a === T ? (a = L) : ((a = A), (n = void 0));
                            var p = a === A && t[c + 1].startsWith("/>") ? " " : "";
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
                                                        var k = v[c++],
                                                            E = r.getAttribute(S).split(O),
                                                            x = /([.?@])?(.*)/.exec(k);
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
                                                for (var T = 0; T < C; T++) r.append(L[T], P()), F.nextNode(), p.push({ type: 2, index: ++a });
                                                r.append(L[C], P());
                                            }
                                        }
                                    } else if (8 === r.nodeType)
                                        if (r.data === _) p.push({ type: 2, index: a });
                                        else for (var A = -1; -1 !== (A = r.data.indexOf(O, A + 1)); ) p.push({ type: 7, index: a }), (A += O.length - 1);
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
                        s = k(e) ? void 0 : e._$litDirective$;
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
                                        k(t)
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
                                    this._$AH !== D && k(this._$AH) ? (this._$AA.nextSibling.data = t) : this.T(S.createTextNode(t)), (this._$AH = t);
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
                                            i === o.length ? o.push((n = new t(this.O(P()), this.O(P()), this, this.options))) : (n = o[i]), n._$AI(c), i++;
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
                                        if (void 0 === o) (t = H(this, t, e, 0)), (i = !k(t) || (t !== this._$AH && t !== q)) && (this._$AH = t);
                                        else {
                                            var a,
                                                c,
                                                u = t;
                                            for (t = o[0], a = 0; a < o.length - 1; a++) (c = H(this, u[n + a], e, a)) === q && (c = this._$AH[a]), i || (i = !k(c) || c !== this._$AH[a]), c === D ? (t = D) : t !== D && (t += (null != c ? c : "") + o[a + 1]), (this._$AH[a] = c);
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
                        o._$litPart$ = i = new W(e.insertBefore(P(), c), c, void 0, null != n ? n : {});
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
                            if (Array.isArray(t)) return P(t);
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
                            c = new A(r || []);
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
                        S = j && j(j(R([])));
                    S && S !== n && r.call(S, a) && (_ = S);
                    var P = (w.prototype = b.prototype = Object.create(_));
                    function k(t) {
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
                    function A(t) {
                        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(C, this), this.reset(!0);
                    }
                    function R(e) {
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
                        o(P, "constructor", { value: w, configurable: !0 }),
                        o(w, "constructor", { value: g, configurable: !0 }),
                        (g.displayName = l(w, u, "GeneratorFunction")),
                        (e.isGeneratorFunction = function (t) {
                            var e = "function" == typeof t && t.constructor;
                            return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name));
                        }),
                        (e.mark = function (t) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : ((t.__proto__ = w), l(t, u, "GeneratorFunction")), (t.prototype = Object.create(P)), t;
                        }),
                        (e.awrap = function (t) {
                            return { __await: t };
                        }),
                        k(E.prototype),
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
                        k(P),
                        l(P, u, "Generator"),
                        l(P, a, function () {
                            return this;
                        }),
                        l(P, "toString", function () {
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
                        (e.values = R),
                        (A.prototype = {
                            constructor: A,
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
                                return (this.delegate = { iterator: R(e), resultName: n, nextLoc: r }), "next" === this.method && (this.arg = t), v;
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
                        if ("string" == typeof t) return P(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? P(t, e) : void 0;
                    }
                }
                function P(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                    return r;
                }
                function k(t, e) {
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
                var A = Object.is,
                    R = Object.defineProperty,
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
                        return !A(t, e);
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
                            return e && k(t.prototype, e), n && k(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
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
                                            void 0 !== r && R(this.prototype, t, r);
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
            if ("string" == typeof t) return P(t, e);
            var n = {}.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? P(t, e) : void 0;
        }
    }
    function P(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    function k(t, e) {
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
        A = "important",
        R = " !" + A,
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
                        return e && k(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
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
                                        var l = "string" == typeof u && u.endsWith(R);
                                        c.includes("-") || l ? r.setProperty(c, l ? u.slice(0, -11) : u, l ? A : "") : (r[c] = u);
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
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
        function k(e, n, r) {
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function Pt(t, e) {
        return (
            (Pt = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Pt(t, e)
        );
    }
    function kt(t, e, n) {
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
                    kt(
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
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Pt(t, e);
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
    function At(t) {
        return (
            (At =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            At(t)
        );
    }
    function Rt(t, e) {
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
            if ("object" != At(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != At(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == At(e) ? e : e + "";
    }
    kt(Tt, "properties", { icon: { type: String }, label: { type: String }, variant: { type: String }, type: { type: String }, disabled: { type: Boolean, reflect: !0 }, selected: { type: Boolean, reflect: !0 } }), customElements.define("md-button", Tt);
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
                                    if (e && ("object" == At(e) || "function" == typeof e)) return e;
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
                            return (0, i.qy)(xt || (xt = Rt(["\n            ", "\n            ", "\n        "])), this.icon ? (0, i.qy)(Lt || (Lt = Rt(['<md-icon class="md-fab__icon">', "</md-icon>"])), this.icon) : i.s6, this.label ? (0, i.qy)(Ct || (Ct = Rt(['<div class="md-fab__label">', "</div>"])), this.label) : i.s6);
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
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Wt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, te(r.key), r);
        }
    }
    function Vt() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Vt = function () {
            return !!t;
        })();
    }
    function Xt(t, e, n, r) {
        var o = Jt(Zt(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Jt() {
        return (
            (Jt =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Zt(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Jt.apply(null, arguments)
        );
    }
    function Zt(t) {
        return (
            (Zt = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Zt(t)
        );
    }
    function Kt(t, e) {
        return (
            (Kt = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Kt(t, e)
        );
    }
    function Qt(t, e, n) {
        return (e = te(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function te(t) {
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
    var ee,
        ne = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    Qt(
                        (t = (function (t, e, n) {
                            return (
                                (e = Zt(e)),
                                (function (t, e) {
                                    if (e && ("object" == Ht(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, Vt() ? Reflect.construct(e, n || [], Zt(t).constructor) : e.apply(t, n))
                            );
                        })(this, e)),
                        "variants",
                        ["filled", "filled-tonal", "outlined"],
                    ),
                    (t.type = "icon-button"),
                    (t.ripple = new bt(t, { trigger: ".md-icon-button__native", unbounded: !0, radius: 40 })),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Kt(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Wt(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(zt || (zt = Yt(['\n            <button \n                class="md-icon-button__native"\n                .type="', '"\n            >icon-button</button>\n            ', "\n        "])), v(this.type), this.icon ? (0, i.qy)(Ut || (Ut = Yt(['<md-icon class="md-icon-button__icon">', "</md-icon>"])), this.icon) : i.s6);
                        },
                    },
                    {
                        key: "connectedCallback",
                        value: function () {
                            Xt(e, "connectedCallback", this, 3)([]), this.classList.add("md-icon-button"), (this.handleIconButtonClick = this.handleIconButtonClick.bind(this)), this.addEventListener("click", this.handleIconButtonClick);
                        },
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            Xt(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-icon-button"), this.removeEventListener("click", this.handleIconButtonClick);
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            var n = this;
                            Xt(e, "updated", this, 3)([t]),
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
    function re(t) {
        return (
            (re =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            re(t)
        );
    }
    function oe(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, se(r.key), r);
        }
    }
    function ie() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (ie = function () {
            return !!t;
        })();
    }
    function ae() {
        return (
            (ae =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ce(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            ae.apply(null, arguments)
        );
    }
    function ce(t) {
        return (
            (ce = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            ce(t)
        );
    }
    function ue(t, e) {
        return (
            (ue = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            ue(t, e)
        );
    }
    function le(t, e, n) {
        return (e = se(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function se(t) {
        var e = (function (t) {
            if ("object" != re(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != re(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == re(e) ? e : e + "";
    }
    Qt(ne, "properties", { icon: { type: String }, variant: { type: String }, type: { type: String }, toggle: { type: Boolean, reflect: !0 }, selected: { type: Boolean, reflect: !0 }, disabled: { type: Boolean, reflect: !0 } }), customElements.define("md-icon-button", ne);
    var fe,
        he = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    le(
                        (t = (function (t, e, n) {
                            return (
                                (e = ce(e)),
                                (function (t, e) {
                                    if (e && ("object" == re(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, ie() ? Reflect.construct(e, n || [], ce(t).constructor) : e.apply(t, n))
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
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && ue(t, e);
                })(e, t),
                (function (t, e) {
                    return e && oe(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderButton",
                        value: function (t) {
                            return (0, i.qy)(
                                ee ||
                                    (ee = (function (t, e) {
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
                                var r = ae(ce(t.prototype), "connectedCallback", n);
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
    function pe(t) {
        return (
            (pe =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            pe(t)
        );
    }
    function ye(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, ge(r.key), r);
        }
    }
    function de() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (de = function () {
            return !!t;
        })();
    }
    function ve() {
        return (
            (ve =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = be(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            ve.apply(null, arguments)
        );
    }
    function be(t) {
        return (
            (be = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            be(t)
        );
    }
    function me(t, e) {
        return (
            (me = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            me(t, e)
        );
    }
    function ge(t) {
        var e = (function (t) {
            if ("object" != pe(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != pe(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == pe(e) ? e : e + "";
    }
    le(he, "properties", { items: { type: Array }, type: { type: String } }), customElements.define("md-segmented-button", he);
    var we,
        Oe = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = be(e)),
                            (function (t, e) {
                                if (e && ("object" == pe(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, de() ? Reflect.construct(e, n || [], be(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).ripple = new bt(t, { container: ".md-checkbox__track", trigger: ".md-checkbox__native", unbounded: !0, radius: 40 })),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && me(t, e);
                })(e, t),
                (function (t, e) {
                    return e && ye(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(
                                fe ||
                                    (fe = (function (t, e) {
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
                                var r = ve(be(t.prototype), "connectedCallback", n);
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
    function _e(t) {
        return (
            (_e =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            _e(t)
        );
    }
    function je(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, xe(r.key), r);
        }
    }
    function Se() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Se = function () {
            return !!t;
        })();
    }
    function Pe() {
        return (
            (Pe =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ke(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Pe.apply(null, arguments)
        );
    }
    function ke(t) {
        return (
            (ke = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            ke(t)
        );
    }
    function Ee(t, e) {
        return (
            (Ee = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Ee(t, e)
        );
    }
    function xe(t) {
        var e = (function (t) {
            if ("object" != _e(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != _e(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == _e(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = ge(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Oe, "properties", { name: { type: String }, value: { type: String }, indeterminate: { type: Boolean }, checked: { type: Boolean } }),
        customElements.define("md-checkbox", Oe);
    var Le,
        Ce,
        Te = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = ke(e)),
                            (function (t, e) {
                                if (e && ("object" == _e(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Se() ? Reflect.construct(e, n || [], ke(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).ripple = new bt(t, { container: ".md-radio-button__track", trigger: ".md-radio-button__native", unbounded: !0, radius: 40 })),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ee(t, e);
                })(e, t),
                (function (t, e) {
                    return e && je(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(
                                we ||
                                    (we = (function (t, e) {
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
                                var r = Pe(ke(t.prototype), "connectedCallback", n);
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
    function Ae(t) {
        return (
            (Ae =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Ae(t)
        );
    }
    function Re(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Be(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, De(r.key), r);
        }
    }
    function Ie() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Ie = function () {
            return !!t;
        })();
    }
    function Ne() {
        return (
            (Ne =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = $e(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Ne.apply(null, arguments)
        );
    }
    function $e(t) {
        return (
            ($e = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            $e(t)
        );
    }
    function qe(t, e) {
        return (
            (qe = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            qe(t, e)
        );
    }
    function De(t) {
        var e = (function (t) {
            if ("object" != Ae(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Ae(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Ae(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = xe(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Te, "properties", { name: { type: String }, value: { type: String }, indeterminate: { type: Boolean }, checked: { type: Boolean } }),
        customElements.define("md-radio-button", Te);
    var Ge = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                ((t = (function (t, e, n) {
                    return (
                        (e = $e(e)),
                        (function (t, e) {
                            if (e && ("object" == Ae(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, Ie() ? Reflect.construct(e, n || [], $e(t).constructor) : e.apply(t, n))
                    );
                })(this, e)).ripple = new bt(t, { container: ".md-switch__thumb", trigger: ".md-switch__native", unbounded: !0, radius: 40, centered: !0 })),
                t
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && qe(t, e);
            })(e, t),
            (function (t, e) {
                return e && Be(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "render",
                    value: function () {
                        var t;
                        return (0, i.qy)(Le || (Le = Re(['\n            <input \n                type="checkbox" \n                .name="', '"\n                .value="', '"\n                .indeterminate="', '"\n                .checked="', '"\n                class="md-switch__native"\n                @input="', '"\n            >\n            <div class="md-switch__track">\n                <div class="md-switch__thumb">', "</div>\n            </div>\n        "])), v(this.name), v(this.value), v(this.indeterminate), v(this.checked), this.handleSwitchNativeInput, null !== (t = this.icons) && void 0 !== t && t.length ? (0, i.qy)(Ce || (Ce = Re(['<md-icon class="md-switch__icon">', "</md-icon>"])), this.icons[~~this.checked]) : i.s6);
                    },
                },
                {
                    key: "connectedCallback",
                    value: function () {
                        !(function (t, e, n) {
                            var r = Ne($e(t.prototype), "connectedCallback", n);
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
    function Fe(t) {
        return (
            (Fe =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Fe(t)
        );
    }
    function ze(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Ue(r.key), r);
        }
    }
    function Ue(t) {
        var e = (function (t) {
            if ("object" != Fe(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Fe(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Fe(e) ? e : e + "";
    }
    function Me() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Me = function () {
            return !!t;
        })();
    }
    function He() {
        return (
            (He =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Ye(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            He.apply(null, arguments)
        );
    }
    function Ye(t) {
        return (
            (Ye = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Ye(t)
        );
    }
    function We(t, e) {
        return (
            (We = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            We(t, e)
        );
    }
    !(function (t, e, n) {
        (e = De(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Ge, "properties", { name: { type: String }, value: { type: String }, indeterminate: { type: Boolean }, checked: { type: Boolean }, icons: { type: Array } }),
        customElements.define("md-switch", Ge);
    var Ve,
        Xe,
        Je,
        Ze,
        Ke,
        Qe,
        tn,
        en,
        nn,
        rn,
        on,
        an,
        cn,
        un,
        ln,
        sn,
        fn = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (function (t, e, n) {
                        return (
                            (e = Ye(e)),
                            (function (t, e) {
                                if (e && ("object" == Fe(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Me() ? Reflect.construct(e, n || [], Ye(t).constructor) : e.apply(t, n))
                        );
                    })(this, e, arguments)
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && We(t, e);
                })(e, t),
                (function (t, e) {
                    return e && ze(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "connectedCallback",
                        value: function () {
                            !(function (t, e, n) {
                                var r = He(Ye(t.prototype), "connectedCallback", n);
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
    function hn(t) {
        return (
            (hn =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            hn(t)
        );
    }
    function pn() {
        pn = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == hn(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError(hn(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function yn(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function dn(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise(function (r, o) {
                var i = t.apply(e, n);
                function a(t) {
                    yn(i, r, o, a, c, "next", t);
                }
                function c(t) {
                    yn(i, r, o, a, c, "throw", t);
                }
                a(void 0);
            });
        };
    }
    function vn(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function bn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, jn(r.key), r);
        }
    }
    function mn() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (mn = function () {
            return !!t;
        })();
    }
    function gn(t, e, n, r) {
        var o = wn(On(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function wn() {
        return (
            (wn =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = On(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            wn.apply(null, arguments)
        );
    }
    function On(t) {
        return (
            (On = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            On(t)
        );
    }
    function _n(t, e) {
        return (
            (_n = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            _n(t, e)
        );
    }
    function jn(t) {
        var e = (function (t) {
            if ("object" != hn(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != hn(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == hn(e) ? e : e + "";
    }
    customElements.define("md-list-row", fn);
    var Sn,
        Pn = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = On(e)),
                            (function (t, e) {
                                if (e && ("object" == hn(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, mn() ? Reflect.construct(e, n || [], On(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).rippleOptions = {}),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && _n(t, e);
                })(e, t),
                (function (t, e) {
                    return e && bn(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(Ve || (Ve = vn(["\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n        "])), this.leadingCheckbox ? (0, i.qy)(Xe || (Xe = vn(['<md-checkbox class="md-list__checkbox" .checked="', '"></md-checkbox>'])), this.selected) : i.s6, this.leadingRadioButton ? (0, i.qy)(Je || (Je = vn(['<md-radio-button class="md-list__radio-button" .checked="', '"></md-radio-button>'])), this.selected) : i.s6, this.leadingSwitch ? (0, i.qy)(Ze || (Ze = vn(['<md-switch class="md-list__switch" .checked="', '"></md-switch>'])), this.selected) : i.s6, this.avatar ? (0, i.qy)(Ke || (Ke = vn(['<md-image class="md-list__avatar" .src="', '" circular></md-image>'])), v(this.avatar)) : i.s6, this.image ? (0, i.qy)(Qe || (Qe = vn(['<md-image class="md-list__image" .src="', '"></md-image>'])), v(this.image)) : i.s6, this.video ? (0, i.qy)(tn || (tn = vn(['<md-image class="md-list__video" .src="', '" ratio="3/2"></md-image>'])), v(this.video)) : i.s6, this.icon ? (0, i.qy)(en || (en = vn(['<md-icon class="md-list__icon">', "</md-icon>"])), this.icon) : i.s6, this.label || this.sublabel ? (0, i.qy)(nn || (nn = vn(['\n                <div class="md-list__labels">\n                    ', "\n                    ", "\n                </div>\n            "])), this.label ? (0, i.qy)(rn || (rn = vn(['<div class="md-list__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(on || (on = vn(['<div class="md-list__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6, this.text ? (0, i.qy)(an || (an = vn(['<div class="md-list__text">', "</div>"])), this.text) : i.s6, this.trailingCheckbox ? (0, i.qy)(cn || (cn = vn(['<md-checkbox class="md-list__checkbox" .checked="', '"></md-checkbox>'])), this.selected) : i.s6, this.trailingRadioButton ? (0, i.qy)(un || (un = vn(['<md-radio-button class="md-list__radio-button" .checked="', '"></md-radio-button>'])), this.selected) : i.s6, this.trailingSwitch ? (0, i.qy)(ln || (ln = vn(['<md-switch class="md-list__switch" .checked="', '"></md-switch>'])), this.selected) : i.s6, void 0 !== this.badge ? (0, i.qy)(sn || (sn = vn(['<md-badge class="md-list__badge" .label="', '"></md-badge>'])), this.badge) : i.s6);
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((r = dn(
                                pn().mark(function t() {
                                    var n;
                                    return pn().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return gn(e, "connectedCallback", this, 3)([]), this.classList.add("md-list__item"), (t.next = 4), this.updateComplete;
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
                            ((n = dn(
                                pn().mark(function t(n) {
                                    return pn().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        gn(e, "updated", this, 3)([n]), n.has("icon") && this.classList.toggle("md-list__item--with-icon", !!this.icon), n.has("selected") && this.selected && this.emit("onListItemSelected", { listItem: this });
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
    function kn(t) {
        return (
            (kn =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            kn(t)
        );
    }
    function En(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Rn(r.key), r);
        }
    }
    function xn() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (xn = function () {
            return !!t;
        })();
    }
    function Ln() {
        return (
            (Ln =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Cn(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Ln.apply(null, arguments)
        );
    }
    function Cn(t) {
        return (
            (Cn = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Cn(t)
        );
    }
    function Tn(t, e) {
        return (
            (Tn = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Tn(t, e)
        );
    }
    function An(t, e, n) {
        return (e = Rn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function Rn(t) {
        var e = (function (t) {
            if ("object" != kn(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != kn(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == kn(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = jn(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Pn, "properties", { leadingCheckbox: { type: Boolean }, leadingRadioButton: { type: Boolean }, leadingSwitch: { type: Boolean }, avatar: { type: String }, image: { type: String }, video: { type: String }, icon: { type: String }, label: { type: String }, sublabel: { type: String }, text: { type: String }, trailingCheckbox: { type: Boolean }, trailingRadioButton: { type: Boolean }, trailingSwitch: { type: Boolean }, selected: { type: Boolean, reflect: !0 }, disabled: { type: Boolean, reflect: !0 }, routerLink: { type: String, reflect: !0 }, rippleOptions: { type: Object }, badge: { type: Number } }),
        customElements.define("md-list-item", Pn);
    var Bn = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                An(
                    (t = (function (t, e, n) {
                        return (
                            (e = Cn(e)),
                            (function (t, e) {
                                if (e && ("object" == kn(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, xn() ? Reflect.construct(e, n || [], Cn(t).constructor) : e.apply(t, n))
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
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Tn(t, e);
            })(e, t),
            (function (t, e) {
                return e && En(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "renderListItem",
                    value: function (t) {
                        return (0, i.qy)(
                            Sn ||
                                (Sn = (function (t, e) {
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
                            var r = Ln(Cn(t.prototype), "connectedCallback", n);
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
    function In(t) {
        return (
            (In =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            In(t)
        );
    }
    function Nn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, $n(r.key), r);
        }
    }
    function $n(t) {
        var e = (function (t) {
            if ("object" != In(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != In(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == In(e) ? e : e + "";
    }
    function qn() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (qn = function () {
            return !!t;
        })();
    }
    function Dn() {
        return (
            (Dn =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Gn(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Dn.apply(null, arguments)
        );
    }
    function Gn(t) {
        return (
            (Gn = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Gn(t)
        );
    }
    function Fn(t, e) {
        return (
            (Fn = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Fn(t, e)
        );
    }
    An(Bn, "properties", { items: { type: Array }, type: { type: String }, rippleOptions: { type: Object } }), customElements.define("md-list", Bn);
    var zn,
        Un,
        Mn,
        Hn,
        Yn,
        Wn = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (function (t, e, n) {
                        return (
                            (e = Gn(e)),
                            (function (t, e) {
                                if (e && ("object" == In(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, qn() ? Reflect.construct(e, n || [], Gn(t).constructor) : e.apply(t, n))
                        );
                    })(this, e, arguments)
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Fn(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Nn(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "connectedCallback",
                        value: function () {
                            !(function (t, e, n) {
                                var r = Dn(Gn(t.prototype), "connectedCallback", n);
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
    function Vn(t) {
        return (
            (Vn =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Vn(t)
        );
    }
    function Xn() {
        Xn = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == Vn(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError(Vn(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function Jn(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Zn(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise(function (r, o) {
                var i = t.apply(e, n);
                function a(t) {
                    Jn(i, r, o, a, c, "next", t);
                }
                function c(t) {
                    Jn(i, r, o, a, c, "throw", t);
                }
                a(void 0);
            });
        };
    }
    function Kn(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Qn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, ir(r.key), r);
        }
    }
    function tr() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (tr = function () {
            return !!t;
        })();
    }
    function er(t, e, n, r) {
        var o = nr(rr(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function nr() {
        return (
            (nr =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = rr(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            nr.apply(null, arguments)
        );
    }
    function rr(t) {
        return (
            (rr = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            rr(t)
        );
    }
    function or(t, e) {
        return (
            (or = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            or(t, e)
        );
    }
    function ir(t) {
        var e = (function (t) {
            if ("object" != Vn(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Vn(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Vn(e) ? e : e + "";
    }
    customElements.define("md-tree-row", Wn);
    var ar,
        cr = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = rr(e)),
                            (function (t, e) {
                                if (e && ("object" == Vn(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, tr() ? Reflect.construct(e, n || [], rr(t).constructor) : e.apply(t, n))
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
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && or(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Qn(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
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
                                zn || (zn = Kn(["\n            ", "\n            ", "\n            ", "\n            ", "\n        "])),
                                Array.from({ length: this.indent }, function () {
                                    return (0, i.qy)(Un || (Un = Kn(['<div class="md-tree__indent"></div>'])));
                                }),
                                this.action ? (0, i.qy)(Mn || (Mn = Kn(['<md-icon class="md-tree__action">', "</md-icon>"])), this.action) : i.s6,
                                this.icon ? (0, i.qy)(Hn || (Hn = Kn(['<md-icon class="md-tree__icon">', "</md-icon>"])), this.icon) : i.s6,
                                this.label ? (0, i.qy)(Yn || (Yn = Kn(['<div class="md-tree__label">', "</div>"])), this.label) : i.s6,
                            );
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((r = Zn(
                                Xn().mark(function t() {
                                    return Xn().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        er(e, "connectedCallback", this, 3)([]), this.classList.add("md-tree__item");
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
                            ((n = Zn(
                                Xn().mark(function t(n) {
                                    return Xn().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        er(e, "updated", this, 3)([n]), n.has("selected") && this.selected && this.emit("onTreeItemSelected", { treeItem: this });
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
    function ur(t) {
        return (
            (ur =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            ur(t)
        );
    }
    function lr(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    function sr() {
        sr = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == ur(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError(ur(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function fr(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function hr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, mr(r.key), r);
        }
    }
    function pr() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (pr = function () {
            return !!t;
        })();
    }
    function yr(t, e, n, r) {
        var o = dr(vr(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function dr() {
        return (
            (dr =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = vr(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            dr.apply(null, arguments)
        );
    }
    function vr(t) {
        return (
            (vr = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            vr(t)
        );
    }
    function br(t, e) {
        return (
            (br = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            br(t, e)
        );
    }
    function mr(t) {
        var e = (function (t) {
            if ("object" != ur(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != ur(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == ur(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = ir(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(cr, "properties", { selected: { type: Boolean, reflect: !0 }, expanded: { type: Boolean, reflect: !0 }, indent: { type: String }, actions: { type: Array }, nodeIcons: { type: Array }, leafIcons: { type: Array }, label: { type: String }, routerLink: { type: String, reflect: !0 } }),
        customElements.define("md-tree-item", cr);
    var gr = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                ((t = (function (t, e, n) {
                    return (
                        (e = vr(e)),
                        (function (t, e) {
                            if (e && ("object" == ur(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, pr() ? Reflect.construct(e, n || [], vr(t).constructor) : e.apply(t, n))
                    );
                })(this, e)).items = []),
                (t.items2 = []),
                t
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && br(t, e);
            })(e, t),
            (function (t, e) {
                return e && hr(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "renderTreeItem",
                    value: function (t) {
                        return (0, i.qy)(
                            ar ||
                                (ar = (function (t, e) {
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
                        yr(e, "connectedCallback", this, 3)([]), this.classList.add("md-tree");
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
                                        fr(i, r, o, a, c, "next", t);
                                    }
                                    function c(t) {
                                        fr(i, r, o, a, c, "throw", t);
                                    }
                                    a(void 0);
                                });
                            };
                        })(
                            sr().mark(function t(n) {
                                return sr().wrap(
                                    function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    if ((yr(e, "updated", this, 3)([n]), !n.has("items"))) {
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
                                                        if (Array.isArray(t)) return lr(t);
                                                    })(t) ||
                                                    (function (t) {
                                                        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                                                    })(t) ||
                                                    (function (t, e) {
                                                        if (t) {
                                                            if ("string" == typeof t) return lr(t, e);
                                                            var n = {}.toString.call(t).slice(8, -1);
                                                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? lr(t, e) : void 0;
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
    function wr(t) {
        return (
            (wr =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            wr(t)
        );
    }
    function Or(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, _r(r.key), r);
        }
    }
    function _r(t) {
        var e = (function (t) {
            if ("object" != wr(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != wr(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == wr(e) ? e : e + "";
    }
    function jr() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (jr = function () {
            return !!t;
        })();
    }
    function Sr() {
        return (
            (Sr =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Pr(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Sr.apply(null, arguments)
        );
    }
    function Pr(t) {
        return (
            (Pr = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Pr(t)
        );
    }
    function kr(t, e) {
        return (
            (kr = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            kr(t, e)
        );
    }
    !(function (t, e, n) {
        (e = mr(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(gr, "properties", { items: { type: Array }, items2: { type: Array } }),
        customElements.define("md-tree", gr);
    var Er,
        xr,
        Lr,
        Cr,
        Tr,
        Ar,
        Rr,
        Br = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (function (t, e, n) {
                        return (
                            (e = Pr(e)),
                            (function (t, e) {
                                if (e && ("object" == wr(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, jr() ? Reflect.construct(e, n || [], Pr(t).constructor) : e.apply(t, n))
                        );
                    })(this, e, arguments)
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && kr(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Or(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "connectedCallback",
                        value: function () {
                            !(function (t, e, n) {
                                var r = Sr(Pr(t.prototype), "connectedCallback", n);
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
    function Ir(t) {
        return (
            (Ir =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Ir(t)
        );
    }
    function Nr() {
        Nr = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == Ir(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError(Ir(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function $r(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function qr(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise(function (r, o) {
                var i = t.apply(e, n);
                function a(t) {
                    $r(i, r, o, a, c, "next", t);
                }
                function c(t) {
                    $r(i, r, o, a, c, "throw", t);
                }
                a(void 0);
            });
        };
    }
    function Dr(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Gr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Yr(r.key), r);
        }
    }
    function Fr() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Fr = function () {
            return !!t;
        })();
    }
    function zr(t, e, n, r) {
        var o = Ur(Mr(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Ur() {
        return (
            (Ur =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Mr(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Ur.apply(null, arguments)
        );
    }
    function Mr(t) {
        return (
            (Mr = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Mr(t)
        );
    }
    function Hr(t, e) {
        return (
            (Hr = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Hr(t, e)
        );
    }
    function Yr(t) {
        var e = (function (t) {
            if ("object" != Ir(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Ir(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Ir(e) ? e : e + "";
    }
    customElements.define("md-navigation-list-row", Br);
    var Wr,
        Vr = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = Mr(e)),
                            (function (t, e) {
                                if (e && ("object" == Ir(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Fr() ? Reflect.construct(e, n || [], Mr(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).rippleOptions = {}),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Hr(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Gr(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(Er || (Er = Dr(["\n            ", "\n            ", "\n            ", "\n            ", "\n        "])), this.icon ? (0, i.qy)(xr || (xr = Dr(['<md-icon class="md-navigation-list__icon">', "</md-icon>"])), this.icon) : i.s6, this.label || this.sublabel ? (0, i.qy)(Lr || (Lr = Dr(['\n                <div class="md-navigation-list__labels">\n                    ', "\n                    ", "\n                </div>\n            "])), this.label ? (0, i.qy)(Cr || (Cr = Dr(['<div class="md-navigation-list__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(Tr || (Tr = Dr(['<div class="md-navigation-list__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6, this.text ? (0, i.qy)(Ar || (Ar = Dr(['<div class="md-navigation-list__text">', "</div>"])), this.text) : i.s6, void 0 !== this.badge ? (0, i.qy)(Rr || (Rr = Dr(['<md-badge class="md-navigation-list__badge" .label="', '"></md-badge>'])), this.badge) : i.s6);
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((r = qr(
                                Nr().mark(function t() {
                                    return Nr().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return zr(e, "connectedCallback", this, 3)([]), this.classList.add("md-navigation-list__item"), (t.next = 4), this.updateComplete;
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
                            ((n = qr(
                                Nr().mark(function t(n) {
                                    return Nr().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        zr(e, "updated", this, 3)([n]), n.has("icon") && this.classList.toggle("md-navigation-list__item--with-icon", !!this.icon), n.has("selected") && this.selected && this.emit("onNavigationListItemSelected", { navigationListItem: this });
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
    function Xr(t) {
        return (
            (Xr =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Xr(t)
        );
    }
    function Jr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, eo(r.key), r);
        }
    }
    function Zr() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Zr = function () {
            return !!t;
        })();
    }
    function Kr() {
        return (
            (Kr =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Qr(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Kr.apply(null, arguments)
        );
    }
    function Qr(t) {
        return (
            (Qr = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Qr(t)
        );
    }
    function to(t, e) {
        return (
            (to = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            to(t, e)
        );
    }
    function eo(t) {
        var e = (function (t) {
            if ("object" != Xr(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Xr(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Xr(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Yr(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Vr, "properties", { icon: { type: String }, label: { type: String }, sublabel: { type: String }, selected: { type: Boolean, reflect: !0 }, disabled: { type: Boolean, reflect: !0 }, routerLink: { type: String, reflect: !0 }, rippleOptions: { type: Object }, badge: { type: Number } }),
        customElements.define("md-navigation-list-item", Vr);
    var no,
        ro,
        oo,
        io,
        ao,
        co,
        uo,
        lo = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = Qr(e)),
                            (function (t, e) {
                                if (e && ("object" == Xr(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Zr() ? Reflect.construct(e, n || [], Qr(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).items = []),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && to(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Jr(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderNavigationListItem",
                        value: function (t) {
                            return (0, i.qy)(
                                Wr ||
                                    (Wr = (function (t, e) {
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
                                var r = Kr(Qr(t.prototype), "connectedCallback", n);
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
    function so(t) {
        return (
            (so =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            so(t)
        );
    }
    function fo() {
        fo = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == so(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError(so(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function ho(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function po(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise(function (r, o) {
                var i = t.apply(e, n);
                function a(t) {
                    ho(i, r, o, a, c, "next", t);
                }
                function c(t) {
                    ho(i, r, o, a, c, "throw", t);
                }
                a(void 0);
            });
        };
    }
    function yo(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function vo(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, _o(r.key), r);
        }
    }
    function bo() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (bo = function () {
            return !!t;
        })();
    }
    function mo(t, e, n, r) {
        var o = go(wo(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function go() {
        return (
            (go =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = wo(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            go.apply(null, arguments)
        );
    }
    function wo(t) {
        return (
            (wo = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            wo(t)
        );
    }
    function Oo(t, e) {
        return (
            (Oo = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Oo(t, e)
        );
    }
    function _o(t) {
        var e = (function (t) {
            if ("object" != so(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != so(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == so(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = eo(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(lo, "properties", { items: { type: Array }, rippleOptions: { type: Object } }),
        customElements.define("md-navigation-list", lo);
    var jo,
        So = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = wo(e)),
                            (function (t, e) {
                                if (e && ("object" == so(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, bo() ? Reflect.construct(e, n || [], wo(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).rippleOptions = {}),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Oo(t, e);
                })(e, t),
                (function (t, e) {
                    return e && vo(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(no || (no = yo(["\n            ", "\n            ", "\n            ", "\n            ", "\n        "])), this.icon ? (0, i.qy)(ro || (ro = yo(['<md-icon class="md-tab__icon">', "</md-icon>"])), this.icon) : i.s6, this.label || this.sublabel ? (0, i.qy)(oo || (oo = yo(['\n                <div class="md-tab__labels">\n                    ', "\n                    ", "\n                </div>\n            "])), this.label ? (0, i.qy)(io || (io = yo(['<div class="md-tab__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(ao || (ao = yo(['<div class="md-tab__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6, this.text ? (0, i.qy)(co || (co = yo(['<div class="md-tab__text">', "</div>"])), this.text) : i.s6, void 0 !== this.badge ? (0, i.qy)(uo || (uo = yo(['<md-badge class="md-tab__badge" .label="', '"></md-badge>'])), this.badge) : i.s6);
                        },
                    },
                    {
                        key: "connectedCallback",
                        value:
                            ((r = po(
                                fo().mark(function t() {
                                    return fo().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return mo(e, "connectedCallback", this, 3)([]), this.classList.add("md-tab"), (t.next = 4), this.updateComplete;
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
                            ((n = po(
                                fo().mark(function t(n) {
                                    return fo().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        mo(e, "updated", this, 3)([n]), n.has("icon") && this.classList.toggle("md-tab--with-icon", !!this.icon), n.has("selected") && this.selected && this.emit("onTabSelected", { tab: this });
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
    function Po(t) {
        return (
            (Po =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Po(t)
        );
    }
    function ko() {
        ko = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == Po(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError(Po(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function Eo(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function xo(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Io(r.key), r);
        }
    }
    function Lo() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Lo = function () {
            return !!t;
        })();
    }
    function Co(t, e, n, r) {
        var o = To(Ao(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function To() {
        return (
            (To =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Ao(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            To.apply(null, arguments)
        );
    }
    function Ao(t) {
        return (
            (Ao = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Ao(t)
        );
    }
    function Ro(t, e) {
        return (
            (Ro = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Ro(t, e)
        );
    }
    function Bo(t, e, n) {
        return (e = Io(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function Io(t) {
        var e = (function (t) {
            if ("object" != Po(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Po(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Po(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = _o(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(So, "properties", { icon: { type: String }, label: { type: String }, sublabel: { type: String }, selected: { type: Boolean, reflect: !0 }, disabled: { type: Boolean, reflect: !0 }, routerLink: { type: String, reflect: !0 }, rippleOptions: { type: Object }, badge: { type: Number } }),
        customElements.define("md-tab", So);
    var No = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                Bo(
                    (t = (function (t, e, n) {
                        return (
                            (e = Ao(e)),
                            (function (t, e) {
                                if (e && ("object" == Po(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Lo() ? Reflect.construct(e, n || [], Ao(t).constructor) : e.apply(t, n))
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
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ro(t, e);
            })(e, t),
            (function (t, e) {
                return e && xo(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "renderTab",
                    value: function (t) {
                        return (0, i.qy)(
                            jo ||
                                (jo = (function (t, e) {
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
                        Co(e, "connectedCallback", this, 3)([]), this.classList.add("md-tabs"), this.style.setProperty("--md-comp-tabs-indicator-transition-property", "none");
                    },
                },
                {
                    key: "updated",
                    value: function (t) {
                        var n = this;
                        Co(e, "updated", this, 3)([t]),
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
                                        Eo(i, r, o, a, c, "next", t);
                                    }
                                    function c(t) {
                                        Eo(i, r, o, a, c, "throw", t);
                                    }
                                    a(void 0);
                                });
                            };
                        })(
                            ko().mark(function t(e) {
                                var n, r, o, i, a, c, u, l;
                                return ko().wrap(
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
    function $o(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    Bo(No, "properties", { items: { type: Array }, rippleOptions: { type: Object }, variant: { type: String } }), customElements.define("md-tabs", No);
    var qo,
        Do,
        Go,
        Fo,
        zo,
        Uo,
        Mo,
        Ho,
        Yo,
        Wo,
        Vo,
        Xo,
        Jo,
        Zo,
        Ko,
        Qo = function (t, e, n) {
            var r,
                o = (function (t, e) {
                    var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                    if (!n) {
                        if (
                            Array.isArray(t) ||
                            (n = (function (t, e) {
                                if (t) {
                                    if ("string" == typeof t) return $o(t, e);
                                    var n = {}.toString.call(t).slice(8, -1);
                                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $o(t, e) : void 0;
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
    function ti(t) {
        return (
            (ti =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            ti(t)
        );
    }
    function ei(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function ni(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, ci(r.key), r);
        }
    }
    function ri() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (ri = function () {
            return !!t;
        })();
    }
    function oi() {
        return (
            (oi =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ii(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            oi.apply(null, arguments)
        );
    }
    function ii(t) {
        return (
            (ii = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            ii(t)
        );
    }
    function ai(t, e) {
        return (
            (ai = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            ai(t, e)
        );
    }
    function ci(t) {
        var e = (function (t) {
            if ("object" != ti(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != ti(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == ti(e) ? e : e + "";
    }
    var ui = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                ((t = (function (t, e, n) {
                    return (
                        (e = ii(e)),
                        (function (t, e) {
                            if (e && ("object" == ti(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, ri() ? Reflect.construct(e, n || [], ii(t).constructor) : e.apply(t, n))
                    );
                })(this, e)).body = Array.from(t.childNodes)),
                t
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && ai(t, e);
            })(e, t),
            (function (t, e) {
                return e && ni(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "renderIcon",
                    value: function (t) {
                        return (0, i.qy)(qo || (qo = ei(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                    },
                },
                {
                    key: "renderIconButton",
                    value: function (t) {
                        return (0, i.qy)(Do || (Do = ei(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleCardIconButtonClick);
                    },
                },
                {
                    key: "renderButton",
                    value: function (t) {
                        return (0, i.qy)(Go || (Go = ei(['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '])), t, v(t.icon), v(t.label), v(t.variant), v(t.type), v(t.disabled), v(t.selected), this.handleCardButtonClick);
                    },
                },
                {
                    key: "renderSpacer",
                    value: function (t) {
                        return (0, i.qy)(Fo || (Fo = ei(['\n            <div class="md-card__spacer"></div>\n        '])));
                    },
                },
                {
                    key: "renderItem",
                    value: function (t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                        return Qo(
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
                            zo || (zo = ei(["\n            ", "\n            ", "\n        "])),
                            (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                ? (0, i.qy)(
                                      Uo || (Uo = ei(['\n                <div class="md-card__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                      null !== (n = this.icons) && void 0 !== n && n.length
                                          ? (0, i.qy)(
                                                Mo || (Mo = ei(['\n                        <div class="md-card__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                this.icons.map(function (t) {
                                                    return s.renderItem(t, "icon");
                                                }),
                                            )
                                          : i.s6,
                                      this.label || this.sublabel ? (0, i.qy)(Ho || (Ho = ei(['\n                        <div class="md-card__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(Yo || (Yo = ei(['<div class="md-card__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(Wo || (Wo = ei(['<div class="md-card__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                      null !== (r = this.actions) && void 0 !== r && r.length
                                          ? (0, i.qy)(
                                                Vo || (Vo = ei(['\n                        <div class="md-card__actions">\n                            ', "\n                        </div>    \n                    "])),
                                                this.actions.map(function (t) {
                                                    return s.renderItem(t, "icon-button");
                                                }),
                                            )
                                          : i.s6,
                                  )
                                : i.s6,
                            (null !== (o = this.body) && void 0 !== o && o.length) || (null !== (a = this.buttons) && void 0 !== a && a.length)
                                ? (0, i.qy)(
                                      Xo || (Xo = ei(['\n                <div class="md-card__wrapper">\n                    ', "\n                    ", "\n                </div>\n            "])),
                                      null !== (c = this.body) && void 0 !== c && c.length ? (0, i.qy)(Jo || (Jo = ei(['<div class="md-card__body">', "</div>"])), this.body) : i.s6,
                                      null !== (u = this.buttons) && void 0 !== u && u.length
                                          ? (0, i.qy)(
                                                Zo || (Zo = ei(['\n                        <div class="md-card__footer">\n                            ', "\n                        </div>\n                    "])),
                                                null !== (l = this.buttons) && void 0 !== l && l.length
                                                    ? (0, i.qy)(
                                                          Ko || (Ko = ei(['\n                                <div class="md-card__buttons">\n                                    ', "\n                                </div>    \n                            "])),
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
                            var r = oi(ii(t.prototype), "connectedCallback", n);
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
    function li(t) {
        return (
            (li =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            li(t)
        );
    }
    function si(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, vi(r.key), r);
        }
    }
    function fi() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (fi = function () {
            return !!t;
        })();
    }
    function hi(t, e, n, r) {
        var o = pi(yi(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function pi() {
        return (
            (pi =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = yi(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            pi.apply(null, arguments)
        );
    }
    function yi(t) {
        return (
            (yi = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            yi(t)
        );
    }
    function di(t, e) {
        return (
            (di = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            di(t, e)
        );
    }
    function vi(t) {
        var e = (function (t) {
            if ("object" != li(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != li(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == li(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = ci(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(ui, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, buttons: { type: Array } }),
        customElements.define("md-card", ui);
    var bi,
        mi,
        gi,
        wi,
        Oi,
        _i,
        ji,
        Si,
        Pi,
        ki,
        Ei,
        xi,
        Li,
        Ci,
        Ti,
        Ai = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (function (t, e, n) {
                        return (
                            (e = yi(e)),
                            (function (t, e) {
                                if (e && ("object" == li(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, fi() ? Reflect.construct(e, n || [], yi(t).constructor) : e.apply(t, n))
                        );
                    })(this, e, arguments)
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && di(t, e);
                })(e, t),
                (function (t, e) {
                    return e && si(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "connectedCallback",
                        value: function () {
                            hi(e, "connectedCallback", this, 3)([]), this.classList.add("md-scrim"), (this.handleScrimClick = this.handleScrimClick.bind(this)), this.addEventListener("click", this.handleScrimClick);
                        },
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            hi(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-scrim"), this.removeEventListener("click", this.handleScrimClick);
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
    function Ri(t) {
        return (
            (Ri =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Ri(t)
        );
    }
    function Bi() {
        Bi = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == Ri(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError(Ri(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function Ii(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Ni(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function $i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Ui(r.key), r);
        }
    }
    function qi() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (qi = function () {
            return !!t;
        })();
    }
    function Di(t, e, n, r) {
        var o = Gi(Fi(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Gi() {
        return (
            (Gi =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Fi(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Gi.apply(null, arguments)
        );
    }
    function Fi(t) {
        return (
            (Fi = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Fi(t)
        );
    }
    function zi(t, e) {
        return (
            (zi = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            zi(t, e)
        );
    }
    function Ui(t) {
        var e = (function (t) {
            if ("object" != Ri(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Ri(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Ri(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = vi(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Ai, "properties", { open: { type: Boolean, reflect: !0 } }),
        customElements.define("md-scrim", Ai);
    var Mi = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                ((t = (function (t, e, n) {
                    return (
                        (e = Fi(e)),
                        (function (t, e) {
                            if (e && ("object" == Ri(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, qi() ? Reflect.construct(e, n || [], Fi(t).constructor) : e.apply(t, n))
                    );
                })(this, e)).body = Array.from(t.childNodes)),
                t
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && zi(t, e);
            })(e, t),
            (function (t, e) {
                return e && $i(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "renderIcon",
                    value: function (t) {
                        return (0, i.qy)(bi || (bi = Ni(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                    },
                },
                {
                    key: "renderIconButton",
                    value: function (t) {
                        return (0, i.qy)(mi || (mi = Ni(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleDialogIconButtonClick);
                    },
                },
                {
                    key: "renderButton",
                    value: function (t) {
                        return (0, i.qy)(gi || (gi = Ni(['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '])), t, v(t.icon), v(t.label), v(t.variant), v(t.type), v(t.disabled), v(t.selected), this.handleDialogButtonClick);
                    },
                },
                {
                    key: "renderSpacer",
                    value: function (t) {
                        return (0, i.qy)(wi || (wi = Ni(['\n            <div class="md-dialog__spacer"></div>\n        '])));
                    },
                },
                {
                    key: "renderItem",
                    value: function (t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                        return Qo(
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
                            Oi || (Oi = Ni(["\n            ", "\n            ", "\n        "])),
                            (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                ? (0, i.qy)(
                                      _i || (_i = Ni(['\n                <div class="md-dialog__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                      null !== (n = this.icons) && void 0 !== n && n.length
                                          ? (0, i.qy)(
                                                ji || (ji = Ni(['\n                        <div class="md-dialog__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                this.icons.map(function (t) {
                                                    return s.renderItem(t, "icon");
                                                }),
                                            )
                                          : i.s6,
                                      this.label || this.sublabel ? (0, i.qy)(Si || (Si = Ni(['\n                        <div class="md-dialog__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(Pi || (Pi = Ni(['<div class="md-dialog__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(ki || (ki = Ni(['<div class="md-dialog__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                      null !== (r = this.actions) && void 0 !== r && r.length
                                          ? (0, i.qy)(
                                                Ei || (Ei = Ni(['\n                        <div class="md-dialog__actions">\n                            ', "\n                        </div>    \n                    "])),
                                                this.actions.map(function (t) {
                                                    return s.renderItem(t, "icon-button");
                                                }),
                                            )
                                          : i.s6,
                                  )
                                : i.s6,
                            (null !== (o = this.body) && void 0 !== o && o.length) || (null !== (a = this.buttons) && void 0 !== a && a.length)
                                ? (0, i.qy)(
                                      xi || (xi = Ni(['\n                <div class="md-dialog__wrapper">\n                    ', "\n                    ", "\n                </div>\n            "])),
                                      null !== (c = this.body) && void 0 !== c && c.length ? (0, i.qy)(Li || (Li = Ni(['<div class="md-dialog__body">', "</div>"])), this.body) : i.s6,
                                      null !== (u = this.buttons) && void 0 !== u && u.length
                                          ? (0, i.qy)(
                                                Ci || (Ci = Ni(['\n                        <div class="md-dialog__footer">\n                            ', "\n                        </div>\n                    "])),
                                                null !== (l = this.buttons) && void 0 !== l && l.length
                                                    ? (0, i.qy)(
                                                          Ti || (Ti = Ni(['\n                                <div class="md-dialog__buttons">\n                                    ', "\n                                </div>    \n                            "])),
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
                                        Ii(i, r, o, a, c, "next", t);
                                    }
                                    function c(t) {
                                        Ii(i, r, o, a, c, "throw", t);
                                    }
                                    a(void 0);
                                });
                            };
                        })(
                            Bi().mark(function t() {
                                return Bi().wrap(
                                    function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    return Di(e, "connectedCallback", this, 3)([]), (this.dialogScrim = document.createElement("md-scrim")), this.parentElement.insertBefore(this.dialogScrim, this.nextElementSibling), (this.handleDialogScrimClosed = this.handleDialogScrimClosed.bind(this)), this.dialogScrim.addEventListener("onScrimClosed", this.handleDialogScrimClosed), this.open && this.dialogScrim.show(), this.classList.add("md-dialog"), this.style.setProperty("--md-comp-dialog-animation", "none"), (t.next = 10), this.updateComplete;
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
                        Di(e, "disconnectedCallback", this, 3)([]), this.dialogScrim.removeEventListener("onScrimClosed", this.handleDialogScrimClosed), this.dialogScrim.remove(), this.classList.remove("md-dialog");
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
    function Hi(t) {
        return (
            (Hi =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Hi(t)
        );
    }
    function Yi(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Wi(r.key), r);
        }
    }
    function Wi(t) {
        var e = (function (t) {
            if ("object" != Hi(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Hi(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Hi(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Ui(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Mi, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, buttons: { type: Array }, open: { type: Boolean, reflect: !0 } }),
        customElements.define("md-dialog", Mi);
    var Vi,
        Xi,
        Ji,
        Zi,
        Ki,
        Qi,
        ta,
        ea,
        na,
        ra,
        oa,
        ia,
        aa,
        ca,
        ua,
        la = (function () {
            return (function (t, e) {
                return e && Yi(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(
                function t() {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        (function (t, e, n) {
                            (e = Wi(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
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
    function sa(t) {
        return (
            (sa =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            sa(t)
        );
    }
    function fa(t, e) {
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
    function ha(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function pa(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, wa(r.key), r);
        }
    }
    function ya() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (ya = function () {
            return !!t;
        })();
    }
    function da(t, e, n, r) {
        var o = va(ba(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function va() {
        return (
            (va =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ba(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            va.apply(null, arguments)
        );
    }
    function ba(t) {
        return (
            (ba = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            ba(t)
        );
    }
    function ma(t, e) {
        return (
            (ma = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            ma(t, e)
        );
    }
    function ga(t, e, n) {
        return (e = wa(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function wa(t) {
        var e = (function (t) {
            if ("object" != sa(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != sa(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == sa(e) ? e : e + "";
    }
    var Oa,
        _a,
        ja,
        Sa,
        Pa,
        ka,
        Ea,
        xa,
        La,
        Ca,
        Ta,
        Aa,
        Ra,
        Ba,
        Ia,
        Na = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = ba(e)),
                            (function (t, e) {
                                if (e && ("object" == sa(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, ya() ? Reflect.construct(e, n || [], ba(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).body = Array.from(t.childNodes)),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && ma(t, e);
                })(e, t),
                (function (t, e) {
                    return e && pa(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIcon",
                        value: function (t) {
                            return (0, i.qy)(Vi || (Vi = ha(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                        },
                    },
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(Xi || (Xi = ha(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleTooltipIconButtonClick);
                        },
                    },
                    {
                        key: "renderButton",
                        value: function (t) {
                            return (0, i.qy)(Ji || (Ji = ha(['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '])), t, v(t.icon), v(t.label), v(t.variant), v(t.type), v(t.disabled), v(t.selected), this.handleTooltipButtonClick);
                        },
                    },
                    {
                        key: "renderSpacer",
                        value: function (t) {
                            return (0, i.qy)(Zi || (Zi = ha(['\n            <div class="md-tooltip__spacer"></div>\n        '])));
                        },
                    },
                    {
                        key: "renderItem",
                        value: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                            return Qo(
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
                                Ki || (Ki = ha(["\n            ", "\n            ", "\n        "])),
                                (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                    ? (0, i.qy)(
                                          Qi || (Qi = ha(['\n                <div class="md-tooltip__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                          null !== (n = this.icons) && void 0 !== n && n.length
                                              ? (0, i.qy)(
                                                    ta || (ta = ha(['\n                        <div class="md-tooltip__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.icons.map(function (t) {
                                                        return s.renderItem(t, "icon");
                                                    }),
                                                )
                                              : i.s6,
                                          this.label || this.sublabel ? (0, i.qy)(ea || (ea = ha(['\n                        <div class="md-tooltip__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(na || (na = ha(['<div class="md-tooltip__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(ra || (ra = ha(['<div class="md-tooltip__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                          null !== (r = this.actions) && void 0 !== r && r.length
                                              ? (0, i.qy)(
                                                    oa || (oa = ha(['\n                        <div class="md-tooltip__actions">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.actions.map(function (t) {
                                                        return s.renderItem(t, "icon-button");
                                                    }),
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                                (null !== (o = this.body) && void 0 !== o && o.length) || (null !== (a = this.buttons) && void 0 !== a && a.length)
                                    ? (0, i.qy)(
                                          ia || (ia = ha(['\n                <div class="md-tooltip__wrapper">\n                    ', "\n                    ", "\n                </div>\n            "])),
                                          null !== (c = this.body) && void 0 !== c && c.length ? (0, i.qy)(aa || (aa = ha(['<div class="md-tooltip__body">', "</div>"])), this.body) : i.s6,
                                          null !== (u = this.buttons) && void 0 !== u && u.length
                                              ? (0, i.qy)(
                                                    ca || (ca = ha(['\n                        <div class="md-tooltip__footer">\n                            ', "\n                        </div>\n                    "])),
                                                    null !== (l = this.buttons) && void 0 !== l && l.length
                                                        ? (0, i.qy)(
                                                              ua || (ua = ha(['\n                                <div class="md-tooltip__buttons">\n                                    ', "\n                                </div>    \n                            "])),
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
                            da(e, "connectedCallback", this, 3)([]), this.classList.add("md-tooltip");
                        },
                    },
                    {
                        key: "disconnectedCallback",
                        value: function () {
                            da(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-tooltip");
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
                                        ? fa(Object(n), !0).forEach(function (e) {
                                              ga(t, e, n[e]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                          : fa(Object(n)).forEach(function (e) {
                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                            });
                                }
                                return t;
                            })({ container: this, placements: ["bottom", "top", "right", "left", "top-right", "bottom-right", "top-left", "bottom-left"], offset: 8 }, t)),
                                (this.open = !0),
                                (this.popper = new la()),
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
    function $a(t) {
        return (
            ($a =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            $a(t)
        );
    }
    function qa() {
        qa = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == $a(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError($a(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function Da(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Ga(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Fa(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Va(r.key), r);
        }
    }
    function za() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (za = function () {
            return !!t;
        })();
    }
    function Ua(t, e, n, r) {
        var o = Ma(Ha(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Ma() {
        return (
            (Ma =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Ha(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Ma.apply(null, arguments)
        );
    }
    function Ha(t) {
        return (
            (Ha = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Ha(t)
        );
    }
    function Ya(t, e) {
        return (
            (Ya = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Ya(t, e)
        );
    }
    function Wa(t, e, n) {
        return (e = Va(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function Va(t) {
        var e = (function (t) {
            if ("object" != $a(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != $a(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == $a(e) ? e : e + "";
    }
    ga(Na, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, buttons: { type: Array }, open: { type: Boolean, reflect: !0 } }), customElements.define("md-tooltip", Na);
    var Xa,
        Ja,
        Za,
        Ka,
        Qa,
        tc,
        ec,
        nc,
        rc,
        oc,
        ic,
        ac,
        cc,
        uc,
        lc,
        sc = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    Wa(
                        (t = (function (t, e, n) {
                            return (
                                (e = Ha(e)),
                                (function (t, e) {
                                    if (e && ("object" == $a(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, za() ? Reflect.construct(e, n || [], Ha(t).constructor) : e.apply(t, n))
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
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ya(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Fa(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIcon",
                        value: function (t) {
                            return (0, i.qy)(Oa || (Oa = Ga(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                        },
                    },
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(_a || (_a = Ga(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleSheetIconButtonClick);
                        },
                    },
                    {
                        key: "renderButton",
                        value: function (t) {
                            return (0, i.qy)(ja || (ja = Ga(['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '])), t, v(t.icon), v(t.label), v(t.variant), v(t.type), v(t.disabled), v(t.selected), this.handleSheetButtonClick);
                        },
                    },
                    {
                        key: "renderSpacer",
                        value: function (t) {
                            return (0, i.qy)(Sa || (Sa = Ga(['\n            <div class="md-sheet__spacer"></div>\n        '])));
                        },
                    },
                    {
                        key: "renderItem",
                        value: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                            return Qo(
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
                                Pa || (Pa = Ga(["\n            ", "\n            ", "\n        "])),
                                (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                    ? (0, i.qy)(
                                          ka || (ka = Ga(['\n                <div class="md-sheet__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                          null !== (n = this.icons) && void 0 !== n && n.length
                                              ? (0, i.qy)(
                                                    Ea || (Ea = Ga(['\n                        <div class="md-sheet__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.icons.map(function (t) {
                                                        return s.renderItem(t, "icon");
                                                    }),
                                                )
                                              : i.s6,
                                          this.label || this.sublabel ? (0, i.qy)(xa || (xa = Ga(['\n                        <div class="md-sheet__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(La || (La = Ga(['<div class="md-sheet__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(Ca || (Ca = Ga(['<div class="md-sheet__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                          null !== (r = this.actions) && void 0 !== r && r.length
                                              ? (0, i.qy)(
                                                    Ta || (Ta = Ga(['\n                        <div class="md-sheet__actions">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.actions.map(function (t) {
                                                        return s.renderItem(t, "icon-button");
                                                    }),
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                                (null !== (o = this.body) && void 0 !== o && o.length) || (null !== (a = this.buttons) && void 0 !== a && a.length)
                                    ? (0, i.qy)(
                                          Aa || (Aa = Ga(['\n                <div class="md-sheet__wrapper">\n                    ', "\n                    ", "\n                </div>\n            "])),
                                          null !== (c = this.body) && void 0 !== c && c.length ? (0, i.qy)(Ra || (Ra = Ga(['<div class="md-sheet__body">', "</div>"])), this.body) : i.s6,
                                          null !== (u = this.buttons) && void 0 !== u && u.length
                                              ? (0, i.qy)(
                                                    Ba || (Ba = Ga(['\n                        <div class="md-sheet__footer">\n                            ', "\n                        </div>\n                    "])),
                                                    null !== (l = this.buttons) && void 0 !== l && l.length
                                                        ? (0, i.qy)(
                                                              Ia || (Ia = Ga(['\n                                <div class="md-sheet__buttons">\n                                    ', "\n                                </div>    \n                            "])),
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
                                            Da(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            Da(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                qa().mark(function t() {
                                    return qa().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return Ua(e, "connectedCallback", this, 3)([]), (this.sheetScrim = document.createElement("md-scrim")), this.parentElement.insertBefore(this.sheetScrim, this.nextElementSibling), (this.handleSheetScrimClosed = this.handleSheetScrimClosed.bind(this)), this.sheetScrim.addEventListener("onScrimClosed", this.handleSheetScrimClosed), this.modal && this.open && this.sheetScrim.show(), this.classList.add("md-sheet"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 10), this.updateComplete;
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
                            Ua(e, "disconnectedCallback", this, 3)([]), this.sheetScrim.removeEventListener("onScrimClosed", this.handleSheetScrimClosed), this.sheetScrim.remove(), this.classList.remove("md-sheet"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            var n = this;
                            Ua(e, "updated", this, 3)([t]),
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
    function fc(t) {
        return (
            (fc =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            fc(t)
        );
    }
    function hc() {
        hc = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == fc(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError(fc(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function pc(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function yc(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function dc(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Oc(r.key), r);
        }
    }
    function vc() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (vc = function () {
            return !!t;
        })();
    }
    function bc(t, e, n, r) {
        var o = mc(gc(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function mc() {
        return (
            (mc =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = gc(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            mc.apply(null, arguments)
        );
    }
    function gc(t) {
        return (
            (gc = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            gc(t)
        );
    }
    function wc(t, e) {
        return (
            (wc = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            wc(t, e)
        );
    }
    function Oc(t) {
        var e = (function (t) {
            if ("object" != fc(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != fc(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == fc(e) ? e : e + "";
    }
    Wa(sc, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, buttons: { type: Array }, open: { type: Boolean, reflect: !0 }, region: { type: String }, modal: { type: Boolean, reflect: !0 } }), customElements.define("md-sheet", sc);
    var _c,
        jc,
        Sc,
        Pc,
        kc,
        Ec,
        xc,
        Lc,
        Cc,
        Tc,
        Ac,
        Rc,
        Bc,
        Ic,
        Nc,
        $c = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = gc(e)),
                            (function (t, e) {
                                if (e && ("object" == fc(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, vc() ? Reflect.construct(e, n || [], gc(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).body = Array.from(t.childNodes)),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && wc(t, e);
                })(e, t),
                (function (t, e) {
                    return e && dc(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIcon",
                        value: function (t) {
                            return (0, i.qy)(Xa || (Xa = yc(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                        },
                    },
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(Ja || (Ja = yc(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleBottomSheetIconButtonClick);
                        },
                    },
                    {
                        key: "renderButton",
                        value: function (t) {
                            return (0, i.qy)(Za || (Za = yc(['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '])), t, v(t.icon), v(t.label), v(t.variant), v(t.type), v(t.disabled), v(t.selected), this.handleBottomSheetButtonClick);
                        },
                    },
                    {
                        key: "renderSpacer",
                        value: function (t) {
                            return (0, i.qy)(Ka || (Ka = yc(['\n            <div class="md-bottom-sheet__spacer"></div>\n        '])));
                        },
                    },
                    {
                        key: "renderItem",
                        value: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                            return Qo(
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
                                Qa || (Qa = yc(["\n            ", "\n            ", "\n        "])),
                                (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                    ? (0, i.qy)(
                                          tc || (tc = yc(['\n                <div class="md-bottom-sheet__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                          null !== (n = this.icons) && void 0 !== n && n.length
                                              ? (0, i.qy)(
                                                    ec || (ec = yc(['\n                        <div class="md-bottom-sheet__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.icons.map(function (t) {
                                                        return s.renderItem(t, "icon");
                                                    }),
                                                )
                                              : i.s6,
                                          this.label || this.sublabel ? (0, i.qy)(nc || (nc = yc(['\n                        <div class="md-bottom-sheet__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(rc || (rc = yc(['<div class="md-bottom-sheet__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(oc || (oc = yc(['<div class="md-bottom-sheet__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                          null !== (r = this.actions) && void 0 !== r && r.length
                                              ? (0, i.qy)(
                                                    ic || (ic = yc(['\n                        <div class="md-bottom-sheet__actions">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.actions.map(function (t) {
                                                        return s.renderItem(t, "icon-button");
                                                    }),
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                                (null !== (o = this.body) && void 0 !== o && o.length) || (null !== (a = this.buttons) && void 0 !== a && a.length)
                                    ? (0, i.qy)(
                                          ac || (ac = yc(['\n                <div class="md-bottom-sheet__wrapper">\n                    ', "\n                    ", "\n                </div>\n            "])),
                                          null !== (c = this.body) && void 0 !== c && c.length ? (0, i.qy)(cc || (cc = yc(['<div class="md-bottom-sheet__body">', "</div>"])), this.body) : i.s6,
                                          null !== (u = this.buttons) && void 0 !== u && u.length
                                              ? (0, i.qy)(
                                                    uc || (uc = yc(['\n                        <div class="md-bottom-sheet__footer">\n                            ', "\n                        </div>\n                    "])),
                                                    null !== (l = this.buttons) && void 0 !== l && l.length
                                                        ? (0, i.qy)(
                                                              lc || (lc = yc(['\n                                <div class="md-bottom-sheet__buttons">\n                                    ', "\n                                </div>    \n                            "])),
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
                                            pc(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            pc(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                hc().mark(function t() {
                                    return hc().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return bc(e, "connectedCallback", this, 3)([]), (this.bottomSheetScrim = document.createElement("md-scrim")), this.parentElement.insertBefore(this.bottomSheetScrim, this.nextElementSibling), (this.handleBottomSheetScrimClosed = this.handleBottomSheetScrimClosed.bind(this)), this.bottomSheetScrim.addEventListener("onScrimClosed", this.handleBottomSheetScrimClosed), this.modal && this.open && this.bottomSheetScrim.show(), this.classList.add("md-bottom-sheet"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 10), this.updateComplete;
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
                            bc(e, "disconnectedCallback", this, 3)([]), this.bottomSheetScrim.removeEventListener("onScrimClosed", this.handleBottomSheetScrimClosed), this.bottomSheetScrim.remove(), this.classList.remove("md-bottom-sheet"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            bc(e, "updated", this, 3)([t]), t.has("modal") && this.classList.toggle("md-bottom-sheet--modal", !!this.modal);
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
    function qc(t) {
        return (
            (qc =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            qc(t)
        );
    }
    function Dc() {
        Dc = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == qc(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError(qc(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function Gc(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Fc(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function zc(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Vc(r.key), r);
        }
    }
    function Uc() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Uc = function () {
            return !!t;
        })();
    }
    function Mc(t, e, n, r) {
        var o = Hc(Yc(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Hc() {
        return (
            (Hc =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Yc(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Hc.apply(null, arguments)
        );
    }
    function Yc(t) {
        return (
            (Yc = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Yc(t)
        );
    }
    function Wc(t, e) {
        return (
            (Wc = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Wc(t, e)
        );
    }
    function Vc(t) {
        var e = (function (t) {
            if ("object" != qc(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != qc(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == qc(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Oc(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })($c, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, buttons: { type: Array }, open: { type: Boolean, reflect: !0 }, modal: { type: Boolean, reflect: !0 } }),
        customElements.define("md-bottom-sheet", $c);
    var Xc,
        Jc,
        Zc,
        Kc,
        Qc = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = Yc(e)),
                            (function (t, e) {
                                if (e && ("object" == qc(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Uc() ? Reflect.construct(e, n || [], Yc(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).body = Array.from(t.childNodes)),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Wc(t, e);
                })(e, t),
                (function (t, e) {
                    return e && zc(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIcon",
                        value: function (t) {
                            return (0, i.qy)(_c || (_c = Fc(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                        },
                    },
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(jc || (jc = Fc(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleSideSheetIconButtonClick);
                        },
                    },
                    {
                        key: "renderButton",
                        value: function (t) {
                            return (0, i.qy)(Sc || (Sc = Fc(['\n            <md-button\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .variant="', '"\n                .type="', '"\n                .disabled="', '"\n                .selected="', '"\n                @click="', '"\n            ></md-button>\n        '])), t, v(t.icon), v(t.label), v(t.variant), v(t.type), v(t.disabled), v(t.selected), this.handleSideSheetButtonClick);
                        },
                    },
                    {
                        key: "renderSpacer",
                        value: function (t) {
                            return (0, i.qy)(Pc || (Pc = Fc(['\n            <div class="md-side-sheet__spacer"></div>\n        '])));
                        },
                    },
                    {
                        key: "renderItem",
                        value: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                            return Qo(
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
                                kc || (kc = Fc(["\n            ", "\n            ", "\n        "])),
                                (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                    ? (0, i.qy)(
                                          Ec || (Ec = Fc(['\n                <div class="md-side-sheet__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                          null !== (n = this.icons) && void 0 !== n && n.length
                                              ? (0, i.qy)(
                                                    xc || (xc = Fc(['\n                        <div class="md-side-sheet__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.icons.map(function (t) {
                                                        return s.renderItem(t, "icon");
                                                    }),
                                                )
                                              : i.s6,
                                          this.label || this.sublabel ? (0, i.qy)(Lc || (Lc = Fc(['\n                        <div class="md-side-sheet__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(Cc || (Cc = Fc(['<div class="md-side-sheet__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(Tc || (Tc = Fc(['<div class="md-side-sheet__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                          null !== (r = this.actions) && void 0 !== r && r.length
                                              ? (0, i.qy)(
                                                    Ac || (Ac = Fc(['\n                        <div class="md-side-sheet__actions">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.actions.map(function (t) {
                                                        return s.renderItem(t, "icon-button");
                                                    }),
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                                (null !== (o = this.body) && void 0 !== o && o.length) || (null !== (a = this.buttons) && void 0 !== a && a.length)
                                    ? (0, i.qy)(
                                          Rc || (Rc = Fc(['\n                <div class="md-side-sheet__wrapper">\n                    ', "\n                    ", "\n                </div>\n            "])),
                                          null !== (c = this.body) && void 0 !== c && c.length ? (0, i.qy)(Bc || (Bc = Fc(['<div class="md-side-sheet__body">', "</div>"])), this.body) : i.s6,
                                          null !== (u = this.buttons) && void 0 !== u && u.length
                                              ? (0, i.qy)(
                                                    Ic || (Ic = Fc(['\n                        <div class="md-side-sheet__footer">\n                            ', "\n                        </div>\n                    "])),
                                                    null !== (l = this.buttons) && void 0 !== l && l.length
                                                        ? (0, i.qy)(
                                                              Nc || (Nc = Fc(['\n                                <div class="md-side-sheet__buttons">\n                                    ', "\n                                </div>    \n                            "])),
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
                                            Gc(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            Gc(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                Dc().mark(function t() {
                                    return Dc().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return Mc(e, "connectedCallback", this, 3)([]), (this.sideSheetScrim = document.createElement("md-scrim")), this.parentElement.insertBefore(this.sideSheetScrim, this.nextElementSibling), (this.handleSideSheetScrimClosed = this.handleSideSheetScrimClosed.bind(this)), this.sideSheetScrim.addEventListener("onScrimClosed", this.handleSideSheetScrimClosed), this.modal && this.open && this.sideSheetScrim.show(), this.classList.add("md-side-sheet"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 10), this.updateComplete;
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
                            Mc(e, "disconnectedCallback", this, 3)([]), this.sideSheetScrim.removeEventListener("onScrimClosed", this.handleSideSheetScrimClosed), this.sideSheetScrim.remove(), this.classList.remove("md-side-sheet"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            Mc(e, "updated", this, 3)([t]), t.has("modal") && this.classList.toggle("md-side-sheet--modal", !!this.modal);
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
    function tu(t) {
        return (
            (tu =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            tu(t)
        );
    }
    function eu() {
        eu = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == tu(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError(tu(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function nu(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function ru(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function ou(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, su(r.key), r);
        }
    }
    function iu() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (iu = function () {
            return !!t;
        })();
    }
    function au(t, e, n, r) {
        var o = cu(uu(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function cu() {
        return (
            (cu =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = uu(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            cu.apply(null, arguments)
        );
    }
    function uu(t) {
        return (
            (uu = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            uu(t)
        );
    }
    function lu(t, e) {
        return (
            (lu = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            lu(t, e)
        );
    }
    function su(t) {
        var e = (function (t) {
            if ("object" != tu(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != tu(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == tu(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Vc(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Qc, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, buttons: { type: Array }, open: { type: Boolean, reflect: !0 }, modal: { type: Boolean, reflect: !0 } }),
        customElements.define("md-side-sheet", Qc);
    var fu,
        hu,
        pu,
        yu,
        du,
        vu,
        bu,
        mu = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (function (t, e, n) {
                        return (
                            (e = uu(e)),
                            (function (t, e) {
                                if (e && ("object" == tu(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, iu() ? Reflect.construct(e, n || [], uu(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && lu(t, e);
                })(e, t),
                (function (t, e) {
                    return e && ou(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(Xc || (Xc = ru(['\n            <md-icon-button\n                class="md-bottom-app-bar__action"\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleBottomAppBarIconButtonClick);
                        },
                    },
                    {
                        key: "renderFab",
                        value: function (t) {
                            var e, n;
                            return (0, i.qy)(Jc || (Jc = ru(['\n            <md-fab\n                class="md-bottom-app-bar__fab"\n                .data="', '"\n                .icon="', '"\n                .label="', '"\n                .type="', '"\n                .size="', '"\n                .variant="', '"\n                @click="', '"\n            ></md-fab>\n        '])), t, v(null !== (e = null == t ? void 0 : t.icon) && void 0 !== e ? e : t), v(null == t ? void 0 : t.label), v(null == t ? void 0 : t.type), v(null == t ? void 0 : t.size), v(null !== (n = null == t ? void 0 : t.variant) && void 0 !== n ? n : "unelevated"), this.handleBottomAppBarFabClick);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t,
                                e = this;
                            return (0, i.qy)(
                                Zc || (Zc = ru(["\n            ", "\n            ", "\n        "])),
                                null !== (t = this.actions) && void 0 !== t && t.length
                                    ? (0, i.qy)(
                                          Kc || (Kc = ru(['\n                <div class="md-bottom-app-bar__actions">\n                    ', "\n                </div>    \n            "])),
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
                                            nu(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            nu(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                eu().mark(function t() {
                                    return eu().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return au(e, "connectedCallback", this, 3)([]), this.classList.add("md-bottom-app-bar"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 5), this.updateComplete;
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
                            au(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-bottom-app-bar"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            au(e, "updated", this, 3)([t]);
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
    function gu(t) {
        return (
            (gu =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            gu(t)
        );
    }
    function wu() {
        wu = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == gu(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError(gu(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function Ou(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function _u(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function ju(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Lu(r.key), r);
        }
    }
    function Su() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Su = function () {
            return !!t;
        })();
    }
    function Pu(t, e, n, r) {
        var o = ku(Eu(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function ku() {
        return (
            (ku =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Eu(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            ku.apply(null, arguments)
        );
    }
    function Eu(t) {
        return (
            (Eu = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Eu(t)
        );
    }
    function xu(t, e) {
        return (
            (xu = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            xu(t, e)
        );
    }
    function Lu(t) {
        var e = (function (t) {
            if ("object" != gu(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != gu(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == gu(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = su(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(mu, "properties", { actions: { type: Array }, fab: { type: String }, open: { type: Boolean, reflect: !0 } }),
        customElements.define("md-bottom-app-bar", mu);
    var Cu,
        Tu = (function (t) {
            function e() {
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    (function (t, e, n) {
                        return (
                            (e = Eu(e)),
                            (function (t, e) {
                                if (e && ("object" == gu(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Su() ? Reflect.construct(e, n || [], Eu(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && xu(t, e);
                })(e, t),
                (function (t, e) {
                    return e && ju(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(fu || (fu = _u(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleTopAppBarIconButtonClick);
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var t,
                                e,
                                n = this;
                            return (0, i.qy)(
                                hu || (hu = _u(["\n            ", "\n            ", "\n            ", "\n        "])),
                                null !== (t = this.leadingActions) && void 0 !== t && t.length
                                    ? (0, i.qy)(
                                          pu || (pu = _u(['\n                <div class="md-top-app-bar__actions">\n                    ', "\n                </div>    \n            "])),
                                          this.leadingActions.map(function (t) {
                                              return n.renderIconButton(t);
                                          }),
                                      )
                                    : i.s6,
                                this.label || this.sublabel ? (0, i.qy)(yu || (yu = _u(['\n                <div class="md-top-app-bar__labels">\n                    ', "\n                    ", "\n                </div>\n            "])), this.label ? (0, i.qy)(du || (du = _u(['<div class="md-top-app-bar__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(vu || (vu = _u(['<div class="md-top-app-bar__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                null !== (e = this.trailingActions) && void 0 !== e && e.length
                                    ? (0, i.qy)(
                                          bu || (bu = _u(['\n                <div class="md-top-app-bar__actions">\n                    ', "\n                </div>    \n            "])),
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
                                            Ou(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            Ou(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                wu().mark(function t() {
                                    return wu().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return Pu(e, "connectedCallback", this, 3)([]), this.classList.add("md-top-app-bar"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 5), this.updateComplete;
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
                            Pu(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-top-app-bar"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            Pu(e, "updated", this, 3)([t]);
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
    function Ru() {
        Ru = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
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
        function k(e, n, r) {
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function Bu(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Iu(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Fu(r.key), r);
        }
    }
    function Nu() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Nu = function () {
            return !!t;
        })();
    }
    function $u(t, e, n, r) {
        var o = qu(Du(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function qu() {
        return (
            (qu =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Du(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            qu.apply(null, arguments)
        );
    }
    function Du(t) {
        return (
            (Du = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Du(t)
        );
    }
    function Gu(t, e) {
        return (
            (Gu = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Gu(t, e)
        );
    }
    function Fu(t) {
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
        (e = Lu(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Tu, "properties", { leadingActions: { type: Array }, label: { type: String }, sublabel: { type: String }, trailingActions: { type: Array }, open: { type: Boolean, reflect: !0 } }),
        customElements.define("md-top-app-bar", Tu);
    var zu,
        Uu,
        Mu,
        Hu,
        Yu,
        Wu,
        Vu,
        Xu,
        Ju,
        Zu,
        Ku,
        Qu = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = Du(e)),
                            (function (t, e) {
                                if (e && ("object" == Au(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Nu() ? Reflect.construct(e, n || [], Du(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).items = []),
                    (t.rippleOptions = { container: ".md-navigation-list__icon" }),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Gu(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Iu(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(
                                Cu ||
                                    (Cu = (function (t, e) {
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
                                            Bu(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            Bu(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                Ru().mark(function t() {
                                    return Ru().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return $u(e, "connectedCallback", this, 3)([]), this.classList.add("md-navigation-bar"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 5), this.updateComplete;
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
                            $u(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-navigation-bar"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            $u(e, "updated", this, 3)([t]);
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
    function tl(t) {
        return (
            (tl =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            tl(t)
        );
    }
    function el() {
        el = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == tl(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError(tl(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function nl(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function rl(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function ol(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, fl(r.key), r);
        }
    }
    function il() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (il = function () {
            return !!t;
        })();
    }
    function al(t, e, n, r) {
        var o = cl(ul(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function cl() {
        return (
            (cl =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ul(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            cl.apply(null, arguments)
        );
    }
    function ul(t) {
        return (
            (ul = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            ul(t)
        );
    }
    function ll(t, e) {
        return (
            (ll = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            ll(t, e)
        );
    }
    function sl(t, e, n) {
        return (e = fl(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function fl(t) {
        var e = (function (t) {
            if ("object" != tl(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != tl(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == tl(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Fu(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Qu, "properties", { open: { type: Boolean, reflect: !0 }, items: { type: Array } }),
        customElements.define("md-navigation-bar", Qu);
    var hl,
        pl,
        yl,
        dl,
        vl,
        bl,
        ml,
        gl,
        wl,
        Ol = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    sl(
                        (t = (function (t, e, n) {
                            return (
                                (e = ul(e)),
                                (function (t, e) {
                                    if (e && ("object" == tl(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, il() ? Reflect.construct(e, n || [], ul(t).constructor) : e.apply(t, n))
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
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && ll(t, e);
                })(e, t),
                (function (t, e) {
                    return e && ol(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIcon",
                        value: function (t) {
                            return (0, i.qy)(zu || (zu = rl(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                        },
                    },
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(Uu || (Uu = rl(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleNavigationDrawerIconButtonClick);
                        },
                    },
                    {
                        key: "renderItem",
                        value: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                            return Qo(
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
                                Mu || (Mu = rl(["\n            ", '\n            <div class="md-navigation-drawer__wrapper">\n                <div class="md-navigation-drawer__body">\n                    ', "\n                </div>\n            </div>\n        "])),
                                (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                    ? (0, i.qy)(
                                          Hu || (Hu = rl(['\n                <div class="md-navigation-drawer__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                          null !== (n = this.icons) && void 0 !== n && n.length
                                              ? (0, i.qy)(
                                                    Yu || (Yu = rl(['\n                        <div class="md-navigation-drawer__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.icons.map(function (t) {
                                                        return o.renderItem(t, "icon");
                                                    }),
                                                )
                                              : i.s6,
                                          this.label || this.sublabel ? (0, i.qy)(Wu || (Wu = rl(['\n                        <div class="md-navigation-drawer__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(Vu || (Vu = rl(['<div class="md-navigation-drawer__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(Xu || (Xu = rl(['<div class="md-navigation-drawer__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                          null !== (r = this.actions) && void 0 !== r && r.length
                                              ? (0, i.qy)(
                                                    Ju || (Ju = rl(['\n                        <div class="md-navigation-drawer__actions">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.actions.map(function (t) {
                                                        return o.renderItem(t, "icon-button");
                                                    }),
                                                )
                                              : i.s6,
                                      )
                                    : i.s6,
                                "flat" === this.view ? (0, i.qy)(Zu || (Zu = rl(['\n                        <md-navigation-list .items="', '"></md-navigation-list>\n                    '])), this.items) : (0, i.qy)(Ku || (Ku = rl(['\n                        <md-tree .items="', '"></md-tree>\n                    '])), this.items),
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
                                            nl(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            nl(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                el().mark(function t() {
                                    return el().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return al(e, "connectedCallback", this, 3)([]), (this.navigationDrawerScrim = document.createElement("md-scrim")), this.parentElement.insertBefore(this.navigationDrawerScrim, this.nextElementSibling), (this.handleNavigationDrawerScrimClosed = this.handleNavigationDrawerScrimClosed.bind(this)), this.navigationDrawerScrim.addEventListener("onScrimClosed", this.handleNavigationDrawerScrimClosed), this.modal && this.open && this.navigationDrawerScrim.show(), this.classList.add("md-navigation-drawer"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 10), this.updateComplete;
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
                            al(e, "disconnectedCallback", this, 3)([]), this.navigationDrawerScrim.removeEventListener("onScrimClosed", this.handleNavigationDrawerScrimClosed), this.navigationDrawerScrim.remove(), this.classList.remove("md-navigation-drawer"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            var n = this;
                            al(e, "updated", this, 3)([t]),
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
    function _l(t) {
        return (
            (_l =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            _l(t)
        );
    }
    function jl() {
        jl = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == _l(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError(_l(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function Sl(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Pl(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function kl(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Al(r.key), r);
        }
    }
    function El() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (El = function () {
            return !!t;
        })();
    }
    function xl(t, e, n, r) {
        var o = Ll(Cl(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function Ll() {
        return (
            (Ll =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Cl(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            Ll.apply(null, arguments)
        );
    }
    function Cl(t) {
        return (
            (Cl = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Cl(t)
        );
    }
    function Tl(t, e) {
        return (
            (Tl = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Tl(t, e)
        );
    }
    function Al(t) {
        var e = (function (t) {
            if ("object" != _l(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != _l(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == _l(e) ? e : e + "";
    }
    sl(Ol, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, items: { type: Array }, open: { type: Boolean, reflect: !0 }, modal: { type: Boolean, reflect: !0 }, view: { type: String } }), customElements.define("md-navigation-drawer", Ol);
    var Rl,
        Bl = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = Cl(e)),
                            (function (t, e) {
                                if (e && ("object" == _l(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, El() ? Reflect.construct(e, n || [], Cl(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).items = []),
                    (t.rippleOptions = { container: ".md-navigation-list__icon" }),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Tl(t, e);
                })(e, t),
                (function (t, e) {
                    return e && kl(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "renderIcon",
                        value: function (t) {
                            return (0, i.qy)(hl || (hl = Pl(['\n            <md-icon\n                .data="', '"\n            >', "</md-icon>\n        "])), t, t.icon);
                        },
                    },
                    {
                        key: "renderIconButton",
                        value: function (t) {
                            return (0, i.qy)(pl || (pl = Pl(['\n            <md-icon-button\n                .data="', '"\n                .icon="', '"\n                .variant="', '"\n                .type="', '"\n                .toggle="', '"\n                .selected="', '"\n                .disabled="', '"\n                @click="', '"\n            ></md-icon-button>\n        '])), t, v(t.icon), v(t.variant), v(t.type), v(t.toggle), v(t.selected), v(t.disabled), this.handleNavigationRailIconButtonClick);
                        },
                    },
                    {
                        key: "renderItem",
                        value: function (t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "icon";
                            return Qo(
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
                                yl || (yl = Pl(["\n            ", '\n            <div class="md-navigation-rail__wrapper">\n                <div class="md-navigation-rail__body">\n                    <md-navigation-list\n                        .rippleOptions="', '"\n                        .items="', '"\n                    ></md-navigation-list>\n                </div>\n            </div>\n        '])),
                                (null !== (t = this.icons) && void 0 !== t && t.length) || this.label || this.sublabel || (null !== (e = this.actions) && void 0 !== e && e.length)
                                    ? (0, i.qy)(
                                          dl || (dl = Pl(['\n                <div class="md-navigation-rail__header">\n                    ', "\n                    ", "\n                    ", "\n                </div>\n            "])),
                                          null !== (n = this.icons) && void 0 !== n && n.length
                                              ? (0, i.qy)(
                                                    vl || (vl = Pl(['\n                        <div class="md-navigation-rail__icons">\n                            ', "\n                        </div>    \n                    "])),
                                                    this.icons.map(function (t) {
                                                        return o.renderItem(t, "icon");
                                                    }),
                                                )
                                              : i.s6,
                                          this.label || this.sublabel ? (0, i.qy)(bl || (bl = Pl(['\n                        <div class="md-navigation-rail__labels">\n                            ', "\n                            ", "\n                        </div>\n                    "])), this.label ? (0, i.qy)(ml || (ml = Pl(['<div class="md-navigation-rail__label">', "</div>"])), this.label) : i.s6, this.sublabel ? (0, i.qy)(gl || (gl = Pl(['<div class="md-navigation-rail__sublabel">', "</div>"])), this.sublabel) : i.s6) : i.s6,
                                          null !== (r = this.actions) && void 0 !== r && r.length
                                              ? (0, i.qy)(
                                                    wl || (wl = Pl(['\n                        <div class="md-navigation-rail__actions">\n                            ', "\n                        </div>    \n                    "])),
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
                                            Sl(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            Sl(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                jl().mark(function t() {
                                    return jl().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return xl(e, "connectedCallback", this, 3)([]), this.classList.add("md-navigation-rail"), this.style.setProperty("--md-comp-sheet-animation", "none"), (t.next = 5), this.updateComplete;
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
                            xl(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-navigation-rail"), this.style.setProperty("--md-comp-sheet-animation", "none");
                        },
                    },
                    {
                        key: "updated",
                        value: function (t) {
                            xl(e, "updated", this, 3)([t]);
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
    function Il(t) {
        return (
            (Il =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Il(t)
        );
    }
    function Nl(t, e) {
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
    function $l() {
        $l = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == Il(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError(Il(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function ql(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function Dl(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Yl(r.key), r);
        }
    }
    function Gl() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Gl = function () {
            return !!t;
        })();
    }
    function Fl(t, e, n, r) {
        var o = zl(Ul(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function zl() {
        return (
            (zl =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Ul(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            zl.apply(null, arguments)
        );
    }
    function Ul(t) {
        return (
            (Ul = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Ul(t)
        );
    }
    function Ml(t, e) {
        return (
            (Ml = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Ml(t, e)
        );
    }
    function Hl(t, e, n) {
        return (e = Yl(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function Yl(t) {
        var e = (function (t) {
            if ("object" != Il(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Il(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Il(e) ? e : e + "";
    }
    !(function (t, e, n) {
        (e = Al(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
    })(Bl, "properties", { icons: { type: Array }, actions: { type: Array }, label: { type: String }, sublabel: { type: String }, items: { type: Array }, open: { type: Boolean, reflect: !0 } }),
        customElements.define("md-navigation-rail", Bl);
    var Wl,
        Vl,
        Xl = (function (t) {
            function e() {
                var t;
                return (
                    (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                    ((t = (function (t, e, n) {
                        return (
                            (e = Ul(e)),
                            (function (t, e) {
                                if (e && ("object" == Il(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Gl() ? Reflect.construct(e, n || [], Ul(t).constructor) : e.apply(t, n))
                        );
                    })(this, e)).items = []),
                    t
                );
            }
            return (
                (function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ml(t, e);
                })(e, t),
                (function (t, e) {
                    return e && Dl(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
                })(e, [
                    {
                        key: "render",
                        value: function () {
                            return (0, i.qy)(
                                Rl ||
                                    (Rl = (function (t, e) {
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
                                            ql(i, r, o, a, c, "next", t);
                                        }
                                        function c(t) {
                                            ql(i, r, o, a, c, "throw", t);
                                        }
                                        a(void 0);
                                    });
                                };
                            })(
                                $l().mark(function t() {
                                    return $l().wrap(
                                        function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return Fl(e, "connectedCallback", this, 3)([]), this.classList.add("md-menu"), this.style.setProperty("--md-comp-menu-animation", "none"), (t.next = 5), this.updateComplete;
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
                            Fl(e, "disconnectedCallback", this, 3)([]), this.classList.remove("md-menu");
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
                                            ? Nl(Object(n), !0).forEach(function (e) {
                                                  Hl(t, e, n[e]);
                                              })
                                            : Object.getOwnPropertyDescriptors
                                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                              : Nl(Object(n)).forEach(function (e) {
                                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                });
                                    }
                                    return t;
                                })({ container: this, placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top", "right-start", "right-end", "right", "left-start", "left-end", "left"] }, t)),
                                (this.open = !0),
                                (this.popper = new la()),
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
    function Jl(t) {
        return (
            (Jl =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Jl(t)
        );
    }
    function Zl(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function Kl(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, is(r.key), r);
        }
    }
    function Ql() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Ql = function () {
            return !!t;
        })();
    }
    function ts(t, e, n, r) {
        var o = es(ns(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function es() {
        return (
            (es =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = ns(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            es.apply(null, arguments)
        );
    }
    function ns(t) {
        return (
            (ns = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            ns(t)
        );
    }
    function rs(t, e) {
        return (
            (rs = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            rs(t, e)
        );
    }
    function os(t, e, n) {
        return (e = is(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function is(t) {
        var e = (function (t) {
            if ("object" != Jl(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Jl(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Jl(e) ? e : e + "";
    }
    Hl(Xl, "properties", { open: { type: Boolean, reflect: !0 }, items: { type: Array } }), customElements.define("md-menu", Xl);
    var as = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                os(
                    (t = (function (t, e, n) {
                        return (
                            (e = ns(e)),
                            (function (t, e) {
                                if (e && ("object" == Jl(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Ql() ? Reflect.construct(e, n || [], ns(t).constructor) : e.apply(t, n))
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
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && rs(t, e);
            })(e, t),
            (function (t, e) {
                return e && Kl(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "renderProgressIndicatorNative",
                    value: function () {
                        return (0, i.qy)(Wl || (Wl = Zl(['\n            <progress \n                class="md-progress-indicator__native"\n                max="', '"\n                value="', '"\n            ></progress>\n        '])), this.max, this.value);
                    },
                },
                {
                    key: "renderProgressIndicatorCircular",
                    value: function () {
                        return (this.r = 45), (this.strokeWidth = 10), (this.strokeDasharray = 2 * Math.PI * this.r), (this.strokeDashoffset = this.strokeDasharray * (1 - this.value / 100)), (0, i.qy)(Vl || (Vl = Zl(['\n            <div class="md-progress-indicator__wrapper">\n                <svg class="md-progress-indicator__track" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n                    <circle \n                        cx="50" \n                        cy="50" \n                        r="', '" \n                        fill="transparent" \n                        stroke="var(--md-sys-color-secondary-container)" \n                        stroke-width="', '"\n                        stroke-linecap="round"\n                        stroke-dasharray="', '"\n                        stroke-dashoffset="0"\n                    />\n                </svg>\n                <svg class="md-progress-indicator__indicator" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n                    <circle \n                        cx="50" \n                        cy="50" \n                        r="', '" \n                        fill="transparent" \n                        stroke="var(--md-sys-color-primary)" \n                        stroke-width="', '"\n                        stroke-linecap="round"\n                        stroke-dasharray="', '"\n                        stroke-dashoffset="', '"\n                    />\n                </svg>\n            </div>\n        '])), this.r, this.strokeWidth, this.strokeDasharray, this.r, this.strokeWidth, this.strokeDasharray, this.strokeDashoffset);
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
                        ts(e, "connectedCallback", this, 3)([]), this.classList.add("md-progress-indicator");
                    },
                },
                {
                    key: "updated",
                    value: function (t) {
                        var n = this;
                        ts(e, "updated", this, 3)([t]),
                            t.has("variant") &&
                                this.variants.forEach(function (t) {
                                    n.classList.toggle("md-progress-indicator--".concat(t), n.variant === t);
                                });
                    },
                },
            ])
        );
    })(a.$);
    function cs(t) {
        return (
            (cs =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            cs(t)
        );
    }
    function us(t, e) {
        if (t) {
            if ("string" == typeof t) return ls(t, e);
            var n = {}.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ls(t, e) : void 0;
        }
    }
    function ls(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    function ss(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, fs(r.key), r);
        }
    }
    function fs(t) {
        var e = (function (t) {
            if ("object" != cs(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != cs(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == cs(e) ? e : e + "";
    }
    function hs() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (hs = function () {
            return !!t;
        })();
    }
    function ps(t) {
        return (
            (ps = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            ps(t)
        );
    }
    function ys(t, e) {
        return (
            (ys = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            ys(t, e)
        );
    }
    os(as, "properties", { variant: { type: String }, max: { type: Number }, value: { type: Number } }), customElements.define("md-progress-indicator", as);
    var ds,
        vs,
        bs = O(
            (function (t) {
                function e(t) {
                    var n, r;
                    if (
                        ((function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        (r = (function (t, e, n) {
                            return (
                                (e = ps(e)),
                                (function (t, e) {
                                    if (e && ("object" == cs(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, hs() ? Reflect.construct(e, n || [], ps(t).constructor) : e.apply(t, n))
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
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && ys(t, e);
                    })(e, t),
                    (function (t, e) {
                        return e && ss(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
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
                                        us(t, e) ||
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
                                            if (Array.isArray(t) || (e = us(t))) {
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
    function ms(t) {
        return (
            (ms =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            ms(t)
        );
    }
    function gs(t, e) {
        return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
    }
    function ws(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Es(r.key), r);
        }
    }
    function Os() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Os = function () {
            return !!t;
        })();
    }
    function _s(t, e, n, r) {
        var o = js(Ss(1 & r ? t.prototype : t), e, n);
        return 2 & r && "function" == typeof o
            ? function (t) {
                  return o.apply(n, t);
              }
            : o;
    }
    function js() {
        return (
            (js =
                "undefined" != typeof Reflect && Reflect.get
                    ? Reflect.get.bind()
                    : function (t, e, n) {
                          var r = (function (t, e) {
                              for (; !{}.hasOwnProperty.call(t, e) && null !== (t = Ss(t)); );
                              return t;
                          })(t, e);
                          if (r) {
                              var o = Object.getOwnPropertyDescriptor(r, e);
                              return o.get ? o.get.call(arguments.length < 3 ? t : n) : o.value;
                          }
                      }),
            js.apply(null, arguments)
        );
    }
    function Ss(t) {
        return (
            (Ss = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Ss(t)
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
    function ks(t, e, n) {
        return (e = Es(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function Es(t) {
        var e = (function (t) {
            if ("object" != ms(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != ms(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == ms(e) ? e : e + "";
    }
    var xs = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                ks(
                    (t = (function (t, e, n) {
                        return (
                            (e = Ss(e)),
                            (function (t, e) {
                                if (e && ("object" == ms(e) || "function" == typeof e)) return e;
                                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                return (function (t) {
                                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return t;
                                })(t);
                            })(t, Os() ? Reflect.construct(e, n || [], Ss(t).constructor) : e.apply(t, n))
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
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Ps(t, e);
            })(e, t),
            (function (t, e) {
                return e && ws(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
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
                            ds || (ds = gs(['\n            <div class="md-slider__wrapper">\n                <input \n                    type="range" \n                    class="md-slider__native"\n                    .data="', '"\n                    .min="', '"\n                    .max="', '"\n                    .step="', '"\n                    .value="', '"\n                    @input="', '"\n                >\n                <div class="md-slider__indicators">\n                    ', '\n                </div>\n                <output class="md-slider__value">', "</output>\n            </div>\n        "])),
                            { index: e },
                            v(this.min),
                            v(this.max),
                            v(this.step),
                            v(t),
                            this.handleSliderNativeInput,
                            Array.from({ length: this.indicators }, function (e, r) {
                                return (0, i.qy)(vs || (vs = gs(['\n                        <div class="', '"></div>\n                    '])), bs({ "md-slider__indicator": !0, "md-slider__indicator--activated": t >= n.step * r }));
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
                        _s(e, "connectedCallback", this, 3)([]), this.classList.add("md-slider"), void 0 === this.value && (this.value = [this.max < this.min ? this.min : this.min + (this.max - this.min) / 2]), this.value[0] < 0 ? (this.variant = "centered") : this.step > 1 ? (this.variant = "discrete") : this.value.length > 1 ? (this.variant = "range-selection") : (this.variant = "continuous"), this.updateValue();
                    },
                },
                {
                    key: "updated",
                    value: function (t) {
                        var n = this;
                        _s(e, "updated", this, 3)([t]),
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
    function Ls(t) {
        return (
            (Ls =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Ls(t)
        );
    }
    function Cs() {
        Cs = function () {
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
            return o(a, "_invoke", { value: k(t, n, c) }), a;
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
        function P(t, e) {
            function n(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == Ls(s) && r.call(s, "__await")
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
        function k(e, n, r) {
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
            throw new TypeError(Ls(e) + " is not iterable");
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
            S(P.prototype),
            l(P.prototype, c, function () {
                return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new P(s(t, n, r, o), i);
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
    function Ts(t, e, n, r, o, i, a) {
        try {
            var c = t[i](a),
                u = c.value;
        } catch (t) {
            return void n(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
    }
    function As(t) {
        return function () {
            var e = this,
                n = arguments;
            return new Promise(function (r, o) {
                var i = t.apply(e, n);
                function a(t) {
                    Ts(i, r, o, a, c, "next", t);
                }
                function c(t) {
                    Ts(i, r, o, a, c, "throw", t);
                }
                a(void 0);
            });
        };
    }
    function Rs(t) {
        return (
            (function (t) {
                if (Array.isArray(t)) return qs(t);
            })(t) ||
            (function (t) {
                if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
            })(t) ||
            $s(t) ||
            (function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function Bs(t, e) {
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
    function Is(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
                ? Bs(Object(n), !0).forEach(function (e) {
                      Gs(t, e, n[e]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                  : Bs(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
        }
        return t;
    }
    function Ns(t, e) {
        var n = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = $s(t)) || (e && t && "number" == typeof t.length)) {
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
    function $s(t, e) {
        if (t) {
            if ("string" == typeof t) return qs(t, e);
            var n = {}.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qs(t, e) : void 0;
        }
    }
    function qs(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    function Ds(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Fs(r.key), r);
        }
    }
    function Gs(t, e, n) {
        return (e = Fs(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
    }
    function Fs(t) {
        var e = (function (t) {
            if ("object" != Ls(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Ls(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Ls(e) ? e : e + "";
    }
    ks(xs, "properties", {
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
        customElements.define("md-slider", xs);
    var zs,
        Us = (function () {
            function t() {
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t);
            }
            return (function (t, e, n) {
                return n && Ds(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(t, 0, [
                {
                    key: "get",
                    value: function () {
                        var t,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.pathname,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.routes,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                            i = Ns(n);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var a,
                                    c,
                                    u = t.value;
                                u.regexp || ((u.parent = r), (u.pathname = ((null !== (c = null == r ? void 0 : r.pathname) && void 0 !== c ? c : "") + "/" + u.path).replace(/\/+/g, "/")), (u.regexp = new RegExp("^" + u.pathname.replace(/\:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/, "(?:.*)") + "(?:/?$)", "i")));
                                var l = e.match(u.regexp);
                                if (l) return (this.params = Is({}, null == l ? void 0 : l.groups)), [].concat(Rs(o), [u]);
                                if (null != u && null !== (a = u.children) && void 0 !== a && a.length) {
                                    var s = this.get(e, u.children, u, [].concat(Rs(o), [u]));
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
                        ((o = As(
                            Cs().mark(function t(e) {
                                var n, r, o, i, a, c;
                                return Cs().wrap(
                                    function (t) {
                                        for (;;)
                                            switch ((t.prev = t.next)) {
                                                case 0:
                                                    this.emit("onRouterCurrentEntryChange"), this.setController(), (n = this.get()), this.emit("onRouterNavigate"), (r = Ns(n)), (t.prev = 5), r.s();
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
                        ((r = As(
                            Cs().mark(function t(e, n) {
                                return Cs().wrap(function (t) {
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
                        ((n = As(
                            Cs().mark(function t(e) {
                                return Cs().wrap(function (t) {
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
                        ((e = As(
                            Cs().mark(function t(e) {
                                var n = this;
                                return Cs().wrap(function (t) {
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
                        if (((this.routes = e), (this.options = Is({ historyApiFallback: !1 }, n)), window.addEventListener("load", this.handleNavigation.bind(this)), this.options.historyApiFallback)) {
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
    function Ms(t) {
        return (
            (Ms =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Ms(t)
        );
    }
    function Hs(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Ys(r.key), r);
        }
    }
    function Ys(t) {
        var e = (function (t) {
            if ("object" != Ms(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Ms(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Ms(e) ? e : e + "";
    }
    function Ws() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (Ws = function () {
            return !!t;
        })();
    }
    function Vs(t) {
        return (
            (Vs = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Vs(t)
        );
    }
    function Xs(t, e) {
        return (
            (Xs = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            Xs(t, e)
        );
    }
    Gs(Us, "params", {}), Gs(Us, "routes", []), Gs(Us, "options", {});
    var Js = (function (t) {
        function e() {
            var t;
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                ((t = (function (t, e, n) {
                    return (
                        (e = Vs(e)),
                        (function (t, e) {
                            if (e && ("object" == Ms(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, Ws() ? Reflect.construct(e, n || [], Vs(t).constructor) : e.apply(t, n))
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
                ]),
                t.items.sort(function (t, e) {
                    return t.children && !e.children ? -1 : !t.children && e.children ? 1 : t.label.localeCompare(e.label);
                }),
                (function t(e) {
                    e.forEach(function (e) {
                        var n;
                        (e.selected = e.routerLink === Us.pathname), null !== (n = e.children) && void 0 !== n && n.length && t(e.children);
                    });
                })(t.items),
                (t.leadingActions = [{ icon: "menu" }]),
                t
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Xs(t, e);
            })(e, t),
            (function (t, e) {
                return e && Hs(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "render",
                    value: function () {
                        return (0, i.qy)(
                            zs ||
                                (zs = (function (t, e) {
                                    return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
                                })(['\n            <div class="md-layout__border">\n                <md-top-app-bar class="demo-main-top-app-bar" open label="Material 3" .leadingActions="', '" @onTopAppBarIconButtonClick="', '"></md-top-app-bar>\n                <md-navigation-drawer id="navigationDrawer" view="tree" .items="', '" @onTreeItemClick="', '"></md-navigation-drawer>\n                <md-sheet region="center">\n                    <md-outlet></md-outlet>\n                </md-sheet>\n            </div>\n        '])),
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
    customElements.define("demo-main", Js);
    const Zs = document.createElement("demo-main");
    function Ks(t) {
        return (
            (Ks =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      }),
            Ks(t)
        );
    }
    var Qs;
    function tf(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, ef(r.key), r);
        }
    }
    function ef(t) {
        var e = (function (t) {
            if ("object" != Ks(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var n = e.call(t, "string");
                if ("object" != Ks(n)) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(t);
        })(t);
        return "symbol" == Ks(e) ? e : e + "";
    }
    function nf() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        } catch (t) {}
        return (nf = function () {
            return !!t;
        })();
    }
    function rf(t) {
        return (
            (rf = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            rf(t)
        );
    }
    function of(t, e) {
        return (
            (of = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                      return (t.__proto__ = e), t;
                  }),
            of(t, e)
        );
    }
    var af = (function (t) {
        function e() {
            return (
                (function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, e),
                (function (t, e, n) {
                    return (
                        (e = rf(e)),
                        (function (t, e) {
                            if (e && ("object" == Ks(e) || "function" == typeof e)) return e;
                            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                            return (function (t) {
                                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t;
                            })(t);
                        })(t, nf() ? Reflect.construct(e, n || [], rf(t).constructor) : e.apply(t, n))
                    );
                })(this, e, arguments)
            );
        }
        return (
            (function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && of(t, e);
            })(e, t),
            (function (t, e) {
                return e && tf(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            })(e, [
                {
                    key: "render",
                    value: function () {
                        return (0, i.qy)(
                            Qs ||
                                (Qs = (function (t, e) {
                                    return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }));
                                })(["\n            <h1>Error</h1>\n            <md-outlet></md-outlet>\n        "])),
                        );
                    },
                },
            ])
        );
    })(a.$);
    customElements.define("demo-error", af);
    const cf = document.createElement("demo-error");
    Us.use([
        {
            path: "",
            component: Zs,
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
            ],
        },
        { path: "*", component: cf },
    ]);
})();
