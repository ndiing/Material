"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [956],
    {
        956: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r,
                o = n(420);
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
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, c(r.key), r);
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
            function u() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (u = function () {
                    return !!e;
                })();
            }
            function l(e) {
                return (
                    (l = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    l(e)
                );
            }
            function f(e, t) {
                return (
                    (f = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    f(e, t)
                );
            }
            var b = (function (e) {
                function t() {
                    return (
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                        (function (e, t, n) {
                            return (
                                (t = l(t)),
                                (function (e, t) {
                                    if (t && ("object" == i(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    })(e);
                                })(e, u() ? Reflect.construct(t, n || [], l(e).constructor) : t.apply(e, n))
                            );
                        })(this, t, arguments)
                    );
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && f(e, t);
                    })(t, e),
                    (n = t),
                    (c = [
                        {
                            key: "render",
                            value: function () {
                                return (0, o.qy)(
                                    r || ((e = ['\n            <div class="md-layout__border">\n                <md-navigation-drawer\n                    open\n                    id="navigationDrawer1"\n                    .items="', '"\n                ></md-navigation-drawer>\n                <md-sheet region="center">\n                    <div class="md-layout">\n                        <md-button variant="filled-tonal" label="Toggle Navigation Drawer" @click="', '"></md-button>\n                    </div>\n                </md-sheet>\n            </div>\n        ']), t || (t = e.slice(0)), (r = Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })))),
                                    [
                                        { label: "Item 1", selected: !0 },
                                        { label: "Item 2", badge: 0 },
                                        { label: "Item 3", badge: 1 },
                                        { label: "Item 4", badge: 1e3 },
                                    ],
                                    function () {
                                        return navigationDrawer1.toggle();
                                    },
                                );
                                var e, t;
                            },
                        },
                    ]),
                    c && a(n.prototype, c),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, c;
            })(n(548).$);
            customElements.define("demo-navigation-drawer-no-icon", b);
            const s = document.createElement("demo-navigation-drawer-no-icon");
        },
    },
]);
