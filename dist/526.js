"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [526],
    {
        526: (e, t, n) => {
            n.r(t), n.d(t, { default: () => m });
            var o,
                r = n(420);
            function u(e) {
                return (
                    (u =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    u(e)
                );
            }
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, c(o.key), o);
                }
            }
            function c(e) {
                var t = (function (e) {
                    if ("object" != u(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var n = t.call(e, "string");
                        if ("object" != u(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == u(t) ? t : t + "";
            }
            function a() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (a = function () {
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
            function d(e, t) {
                return (
                    (d = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    d(e, t)
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
                                (t = l(t)),
                                (function (e, t) {
                                    if (t && ("object" == u(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    })(e);
                                })(e, a() ? Reflect.construct(t, n || [], l(e).constructor) : t.apply(e, n))
                            );
                        })(this, t, arguments)
                    );
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && d(e, t);
                    })(t, e),
                    (n = t),
                    (c = [
                        {
                            key: "render",
                            value: function () {
                                return (0, r.qy)(o || ((e = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-badge label=""></md-badge>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-badge label="1"></md-badge>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-badge label="1000"></md-badge>\n                    </div>\n                </div>\n            </div>\n        ']), t || (t = e.slice(0)), (o = Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })))));
                                var e, t;
                            },
                        },
                    ]),
                    c && i(n.prototype, c),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, c;
            })(n(548).$);
            customElements.define("demo-badge", f);
            const m = document.createElement("demo-badge");
        },
    },
]);
