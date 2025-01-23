"use strict";
(self.webpackChunkwebpack_project = self.webpackChunkwebpack_project || []).push([
    [146],
    {
        146: (e, t, r) => {
            r.r(t), r.d(t, { default: () => b });
            var n,
                o = r(420);
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
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, u(n.key), n);
                }
            }
            function u(e) {
                var t = (function (e) {
                    if ("object" != i(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, "string");
                        if ("object" != i(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == i(t) ? t : t + "";
            }
            function a() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (a = function () {
                    return !!e;
                })();
            }
            function p(e) {
                return (
                    (p = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    p(e)
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
            var l = (function (e) {
                function t() {
                    return (
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                        (function (e, t, r) {
                            return (
                                (t = p(t)),
                                (function (e, t) {
                                    if (t && ("object" == i(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    })(e);
                                })(e, a() ? Reflect.construct(t, r || [], p(e).constructor) : t.apply(e, r))
                            );
                        })(this, t, arguments)
                    );
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && f(e, t);
                    })(t, e),
                    (r = t),
                    (u = [
                        {
                            key: "render",
                            value: function () {
                                return (0, o.qy)(n || ((e = ['\n            <div class="md-layout__border">\n                <md-top-app-bar open id="topAppBar1" label="North" .leadingActions="', '" .trailingActions="', '"></md-top-app-bar>\n                <md-sheet region="center">\n                    <div class="md-layout">\n                        <md-button variant="filled-tonal" label="Toggle Top App Bar" @click="', '"></md-button>\n                    </div>\n                </md-sheet>\n            </div>\n        ']), t || (t = e.slice(0)), (n = Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })))), [{ icon: "image" }], [{ icon: "image" }, { icon: "image" }, { icon: "image" }], function () {
                                    return topAppBar1.toggle();
                                });
                                var e, t;
                            },
                        },
                    ]),
                    u && c(r.prototype, u),
                    Object.defineProperty(r, "prototype", { writable: !1 }),
                    r
                );
                var r, u;
            })(r(548).$);
            customElements.define("demo-top-app-bar", l);
            const b = document.createElement("demo-top-app-bar");
        },
    },
]);
