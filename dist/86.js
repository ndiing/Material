"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [86],
    {
        86: (t, e, r) => {
            r.r(e), r.d(e, { default: () => y });
            var n,
                o = r(420);
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
            function u(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, c(n.key), n);
                }
            }
            function c(t) {
                var e = (function (t) {
                    if ("object" != i(t) || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var r = e.call(t, "string");
                        if ("object" != i(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(t);
                })(t);
                return "symbol" == i(e) ? e : e + "";
            }
            function a() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (t) {}
                return (a = function () {
                    return !!t;
                })();
            }
            function l(t) {
                return (
                    (l = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    l(t)
                );
            }
            function f(t, e) {
                return (
                    (f = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    f(t, e)
                );
            }
            var s = (function (t) {
                function e() {
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        (function (t, e, r) {
                            return (
                                (e = l(e)),
                                (function (t, e) {
                                    if (e && ("object" == i(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, a() ? Reflect.construct(e, r || [], l(t).constructor) : e.apply(t, r))
                            );
                        })(this, e, arguments)
                    );
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && f(t, e);
                    })(e, t),
                    (r = e),
                    (c = [
                        {
                            key: "render",
                            value: function () {
                                return (0, o.qy)(n || ((t = ['\n            <div class="md-layout">\n                <div class="md-layout__border">\n                    <div class="md-layout__north">north</div>\n                    <div class="md-layout__east">east</div>\n                    <div class="md-layout__south">south</div>\n                    <div class="md-layout__west">west</div>\n                    <div class="md-layout__center">center</div>\n                </div>\n            </div>\n        ']), e || (e = t.slice(0)), (n = Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } })))));
                                var t, e;
                            },
                        },
                    ]),
                    c && u(r.prototype, c),
                    Object.defineProperty(r, "prototype", { writable: !1 }),
                    r
                );
                var r, c;
            })(r(548).$);
            customElements.define("demo-layout-border", s);
            const y = document.createElement("demo-layout-border");
        },
    },
]);
