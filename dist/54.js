"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [54],
    {
        54: (n, e, t) => {
            t.r(e), t.d(e, { default: () => f });
            var o,
                a = t(420);
            function u(n) {
                return (
                    (u =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (n) {
                                  return typeof n;
                              }
                            : function (n) {
                                  return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
                              }),
                    u(n)
                );
            }
            function r(n, e) {
                for (var t = 0; t < e.length; t++) {
                    var o = e[t];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(n, c(o.key), o);
                }
            }
            function c(n) {
                var e = (function (n) {
                    if ("object" != u(n) || !n) return n;
                    var e = n[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var t = e.call(n, "string");
                        if ("object" != u(t)) return t;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(n);
                })(n);
                return "symbol" == u(e) ? e : e + "";
            }
            function l() {
                try {
                    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (n) {}
                return (l = function () {
                    return !!n;
                })();
            }
            function i(n) {
                return (
                    (i = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (n) {
                              return n.__proto__ || Object.getPrototypeOf(n);
                          }),
                    i(n)
                );
            }
            function m(n, e) {
                return (
                    (m = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (n, e) {
                              return (n.__proto__ = e), n;
                          }),
                    m(n, e)
                );
            }
            var d = (function (n) {
                function e() {
                    return (
                        (function (n, e) {
                            if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        (function (n, e, t) {
                            return (
                                (e = i(e)),
                                (function (n, e) {
                                    if (e && ("object" == u(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (n) {
                                        if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return n;
                                    })(n);
                                })(n, l() ? Reflect.construct(e, t || [], i(n).constructor) : e.apply(n, t))
                            );
                        })(this, e, arguments)
                    );
                }
                return (
                    (function (n, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } })), Object.defineProperty(n, "prototype", { writable: !1 }), e && m(n, e);
                    })(e, n),
                    (t = e),
                    (c = [
                        {
                            key: "render",
                            value: function () {
                                return (0, a.qy)(o || ((n = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab icon="image"></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab\n                            size="small"\n                            icon="image"\n                        ></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab\n                            size="large"\n                            icon="image"\n                        ></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab\n                            type="extended"\n                            icon="image"\n                            label="Label"\n                        ></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab\n                            type="extended"\n                            label="Label"\n                        ></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab\n                            variant="unelevated"\n                            icon="image"\n                        ></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab\n                            variant="unelevated"\n                            size="small"\n                            icon="image"\n                        ></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab\n                            variant="unelevated"\n                            size="large"\n                            icon="image"\n                        ></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab\n                            variant="unelevated"\n                            type="extended"\n                            icon="image"\n                            label="Label"\n                        ></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab\n                            variant="unelevated"\n                            type="extended"\n                            label="Label"\n                        ></md-fab>\n                    </div>\n                </div>\n            </div>\n        ']), e || (e = n.slice(0)), (o = Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } })))));
                                var n, e;
                            },
                        },
                    ]),
                    c && r(t.prototype, c),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    t
                );
                var t, c;
            })(t(548).$);
            customElements.define("demo-fab", d);
            const f = document.createElement("demo-fab");
        },
    },
]);
