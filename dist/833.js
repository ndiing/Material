"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [833],
    {
        5214: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var o,
                r = n(420);
            function i(e) {
                return (
                    (i =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    i(e)
                );
            }
            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, c(o.key), o);
                }
            }
            function c(e) {
                var t = (function (e) {
                    if ("object" != i(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var n = t.call(e, "string");
                        if ("object" != i(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == i(t) ? t : t + "";
            }
            function l() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (l = function () {
                    return !!e;
                })();
            }
            function a(e) {
                return (
                    (a = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    a(e)
                );
            }
            function m(e, t) {
                return (
                    (m = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    m(e, t)
                );
            }
            var f = (function (e) {
                function t() {
                    return (
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                        (function (e, t, n) {
                            return (
                                (t = a(t)),
                                (function (e, t) {
                                    if (t && ("object" == i(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    })(e);
                                })(e, l() ? Reflect.construct(t, n || [], a(e).constructor) : t.apply(e, n))
                            );
                        })(this, t, arguments)
                    );
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && m(e, t);
                    })(t, e),
                    (n = t),
                    (c = [
                        {
                            key: "render",
                            value: function () {
                                return (0, r.qy)(
                                    o || ((e = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-menu\n                            id="menu1"\n                            .items="', '"\n                        ></md-menu>\n                        <md-button\n                            id="button1"\n                            variant="filled-tonal"\n                            label="Toggle Menu"\n                            @click="', '"\n                        ></md-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-menu\n                            id="menu2"\n                            .items="', '"\n                        ></md-menu>\n                        <md-button\n                            id="button2"\n                            variant="filled-tonal"\n                            label="Toggle Menu"\n                            @click="', '"\n                        ></md-button>\n                    </div>\n                </div>\n            </div>\n        ']), t || (t = e.slice(0)), (o = Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })))),
                                    [
                                        { label: "Item 1", selected: !0 },
                                        { label: "Item 2", badge: 0 },
                                        { label: "Item 3", badge: 1 },
                                        { label: "Item 4", badge: 1e3 },
                                    ],
                                    function () {
                                        return menu1.toggle({ trigger: button1 });
                                    },
                                    [
                                        { icon: "image", label: "Item 1", selected: !0 },
                                        { icon: "image", label: "Item 2", badge: 0 },
                                        { icon: "image", label: "Item 3", badge: 1 },
                                        { icon: "image", label: "Item 4", badge: 1e3 },
                                    ],
                                    function () {
                                        return menu2.toggle({ trigger: button2 });
                                    },
                                );
                                var e, t;
                            },
                        },
                    ]),
                    c && u(n.prototype, c),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, c;
            })(n(8548).$);
            customElements.define("demo-menu", f);
            const d = document.createElement("demo-menu");
        },
    },
]);
