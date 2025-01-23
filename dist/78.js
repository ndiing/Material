"use strict";
(self.webpackChunkwebpack_project = self.webpackChunkwebpack_project || []).push([
    [78],
    {
        78: (e, t, n) => {
            n.r(t), n.d(t, { default: () => y });
            var r,
                o = n(420);
            function c(e) {
                return (
                    (c =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    c(e)
                );
            }
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, u(r.key), r);
                }
            }
            function u(e) {
                var t = (function (e) {
                    if ("object" != c(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var n = t.call(e, "string");
                        if ("object" != c(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == c(t) ? t : t + "";
            }
            function f() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (f = function () {
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
            var p = (function (e) {
                function t() {
                    return (
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                        (function (e, t, n) {
                            return (
                                (t = a(t)),
                                (function (e, t) {
                                    if (t && ("object" == c(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    })(e);
                                })(e, f() ? Reflect.construct(t, n || [], a(e).constructor) : t.apply(e, n))
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
                    (u = [
                        {
                            key: "render",
                            value: function () {
                                return (0, o.qy)(r || ((e = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-icon>image</md-icon>\n                    </div>\n                </div>\n            </div>\n        ']), t || (t = e.slice(0)), (r = Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })))));
                                var e, t;
                            },
                        },
                    ]),
                    u && i(n.prototype, u),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, u;
            })(n(548).$);
            customElements.define("demo-icon", p);
            const y = document.createElement("demo-icon");
        },
    },
]);
