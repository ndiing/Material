"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [80],
    {
        80: (n, t, e) => {
            e.r(t), e.d(t, { default: () => m });
            var o,
                l = e(420);
            function a(n) {
                return (
                    (a =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (n) {
                                  return typeof n;
                              }
                            : function (n) {
                                  return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
                              }),
                    a(n)
                );
            }
            function r(n, t) {
                for (var e = 0; e < t.length; e++) {
                    var o = t[e];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(n, u(o.key), o);
                }
            }
            function u(n) {
                var t = (function (n) {
                    if ("object" != a(n) || !n) return n;
                    var t = n[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var e = t.call(n, "string");
                        if ("object" != a(e)) return e;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(n);
                })(n);
                return "symbol" == a(t) ? t : t + "";
            }
            function i() {
                try {
                    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (n) {}
                return (i = function () {
                    return !!n;
                })();
            }
            function d(n) {
                return (
                    (d = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (n) {
                              return n.__proto__ || Object.getPrototypeOf(n);
                          }),
                    d(n)
                );
            }
            function c(n, t) {
                return (
                    (c = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (n, t) {
                              return (n.__proto__ = t), n;
                          }),
                    c(n, t)
                );
            }
            var b = (function (n) {
                function t() {
                    return (
                        (function (n, t) {
                            if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                        (function (n, t, e) {
                            return (
                                (t = d(t)),
                                (function (n, t) {
                                    if (t && ("object" == a(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (n) {
                                        if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return n;
                                    })(n);
                                })(n, i() ? Reflect.construct(t, e || [], d(n).constructor) : t.apply(n, e))
                            );
                        })(this, t, arguments)
                    );
                }
                return (
                    (function (n, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (n.prototype = Object.create(t && t.prototype, { constructor: { value: n, writable: !0, configurable: !0 } })), Object.defineProperty(n, "prototype", { writable: !1 }), t && c(n, t);
                    })(t, n),
                    (e = t),
                    (u = [
                        {
                            key: "render",
                            value: function () {
                                return (0, l.qy)(o || ((n = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-button\n                            variant="elevated"\n                            label="Label"\n                        ></md-button>\n                        <md-button\n                            variant="elevated"\n                            icon="image"\n                            label="Label"\n                        ></md-button>\n                        <md-button\n                            variant="elevated"\n                            disabled\n                            label="Label"\n                        ></md-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-button\n                            variant="filled"\n                            label="Label"\n                        ></md-button>\n                        <md-button\n                            variant="filled"\n                            icon="image"\n                            label="Label"\n                        ></md-button>\n                        <md-button\n                            variant="filled"\n                            disabled\n                            label="Label"\n                        ></md-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-button\n                            variant="filled-tonal"\n                            label="Label"\n                        ></md-button>\n                        <md-button\n                            variant="filled-tonal"\n                            icon="image"\n                            label="Label"\n                        ></md-button>\n                        <md-button\n                            variant="filled-tonal"\n                            disabled\n                            label="Label"\n                        ></md-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-button\n                            variant="outlined"\n                            label="Label"\n                        ></md-button>\n                        <md-button\n                            variant="outlined"\n                            icon="image"\n                            label="Label"\n                        ></md-button>\n                        <md-button\n                            variant="outlined"\n                            disabled\n                            label="Label"\n                        ></md-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-button label="Label"></md-button>\n                        <md-button\n                            icon="image"\n                            label="Label"\n                        ></md-button>\n                        <md-button\n                            disabled\n                            label="Label"\n                        ></md-button>\n                    </div>\n                </div>\n            </div>\n        ']), t || (t = n.slice(0)), (o = Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(t) } })))));
                                var n, t;
                            },
                        },
                    ]),
                    u && r(e.prototype, u),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                );
                var e, u;
            })(e(548).$);
            customElements.define("demo-button", b);
            const m = document.createElement("demo-button");
        },
    },
]);
