"use strict";
(self.webpackChunkwebpack_project = self.webpackChunkwebpack_project || []).push([
    [465],
    {
        465: (e, t, n) => {
            n.r(t), n.d(t, { default: () => p });
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
            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, a(r.key), r);
                }
            }
            function a(e) {
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
            function f(e) {
                return (
                    (f = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    f(e)
                );
            }
            function l(e, t) {
                return (
                    (l = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    l(e, t)
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
                                (t = f(t)),
                                (function (e, t) {
                                    if (t && ("object" == i(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    })(e);
                                })(e, u() ? Reflect.construct(t, n || [], f(e).constructor) : t.apply(e, n))
                            );
                        })(this, t, arguments)
                    );
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && l(e, t);
                    })(t, e),
                    (n = t),
                    (a = [
                        {
                            key: "render",
                            value: function () {
                                return (0, o.qy)(
                                    r || ((e = ['\n            <div class="md-layout__border">\n                <md-navigation-bar\n                    id="navigationBar1"\n                    open\n                    .items="', '"\n                ></md-navigation-bar>\n                <md-sheet region="center">\n                    <div class="md-layout">\n                        <md-button variant="filled-tonal" label="Toggle Navigation Bar" @click="', '"></md-button>\n                    </div>\n                </md-sheet>\n            </div>\n        ']), t || (t = e.slice(0)), (r = Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })))),
                                    [
                                        { icon: "image", selected: !0 },
                                        { icon: "image", badge: 0 },
                                        { icon: "image", badge: 1 },
                                        { icon: "image", badge: 1e3 },
                                    ],
                                    function () {
                                        return navigationBar1.toggle();
                                    },
                                );
                                var e, t;
                            },
                        },
                    ]),
                    a && c(n.prototype, a),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, a;
            })(n(548).$);
            customElements.define("demo-navigation-bar-no-label", b);
            const p = document.createElement("demo-navigation-bar-no-label");
        },
    },
]);
