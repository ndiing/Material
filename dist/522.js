"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [522],
    {
        522: (t, e, n) => {
            n.r(e), n.d(e, { default: () => s });
            var r,
                o = n(420);
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
            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, u(r.key), r);
                }
            }
            function u(t) {
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
            function f() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (t) {}
                return (f = function () {
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
            function a(t, e) {
                return (
                    (a = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    a(t, e)
                );
            }
            var b = (function (t) {
                function e() {
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        (function (t, e, n) {
                            return (
                                (e = l(e)),
                                (function (t, e) {
                                    if (e && ("object" == i(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, f() ? Reflect.construct(e, n || [], l(t).constructor) : e.apply(t, n))
                            );
                        })(this, e, arguments)
                    );
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && a(t, e);
                    })(e, t),
                    (n = e),
                    (u = [
                        {
                            key: "render",
                            value: function () {
                                return (0, o.qy)(r || ((t = ['\n            <div class="md-layout__border">\n                <md-bottom-sheet id="bottomSheet3">body</md-bottom-sheet>\n                <md-sheet region="center">\n                    <div class="md-layout">\n                        <md-button\n                            variant="filled-tonal"\n                            label="Toggle Bottom Sheet"\n                            @click="', '"\n                        ></md-button>\n                    </div>\n                </md-sheet>\n            </div>\n        ']), e || (e = t.slice(0)), (r = Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } })))), function () {
                                    return bottomSheet3.toggle();
                                });
                                var t, e;
                            },
                        },
                    ]),
                    u && c(n.prototype, u),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, u;
            })(n(548).$);
            customElements.define("demo-bottom-sheet", b);
            const s = document.createElement("demo-bottom-sheet");
        },
    },
]);
