"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [70],
    {
        70: (t, e, n) => {
            n.r(e), n.d(e, { default: () => s });
            var o,
                r = n(420);
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
                    var o = e[n];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, u(o.key), o);
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
            function d(t, e) {
                return (
                    (d = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    d(t, e)
                );
            }
            var m = (function (t) {
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
                                })(t, a() ? Reflect.construct(e, n || [], l(t).constructor) : e.apply(t, n))
                            );
                        })(this, e, arguments)
                    );
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && d(t, e);
                    })(e, t),
                    (n = e),
                    (u = [
                        {
                            key: "render",
                            value: function () {
                                return (0, r.qy)(o || ((t = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-progress-indicator></md-progress-indicator>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-progress-indicator value="50"></md-progress-indicator>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-progress-indicator value="100"></md-progress-indicator>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-progress-indicator variant="circular"></md-progress-indicator>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-progress-indicator\n                            value="50"\n                            variant="circular"\n                        ></md-progress-indicator>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-progress-indicator\n                            value="100"\n                            variant="circular"\n                        ></md-progress-indicator>\n                    </div>\n                </div>\n            </div>\n        ']), e || (e = t.slice(0)), (o = Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } })))));
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
            customElements.define("demo-progress-indicator", m);
            const s = document.createElement("demo-progress-indicator");
        },
    },
]);
