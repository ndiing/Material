"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [80],
    {
        80: (t, e, n) => {
            n.r(e), n.d(e, { default: () => m });
            var o,
                l = n(420);
            function a(t) {
                return (
                    (a =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    a(t)
                );
            }
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, u(o.key), o);
                }
            }
            function u(t) {
                var e = (function (t) {
                    if ("object" != a(t) || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var n = e.call(t, "string");
                        if ("object" != a(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(t);
                })(t);
                return "symbol" == a(e) ? e : e + "";
            }
            function i() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (t) {}
                return (i = function () {
                    return !!t;
                })();
            }
            function d(t) {
                return (
                    (d = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    d(t)
                );
            }
            function c(t, e) {
                return (
                    (c = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    c(t, e)
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
                                (e = d(e)),
                                (function (t, e) {
                                    if (e && ("object" == a(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, i() ? Reflect.construct(e, n || [], d(t).constructor) : e.apply(t, n))
                            );
                        })(this, e, arguments)
                    );
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && c(t, e);
                    })(e, t),
                    (n = e),
                    (u = [
                        {
                            key: "render",
                            value: function () {
                                return (0, l.qy)(o || ((t = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-button variant="elevated" label="Label"></md-button>\n                        <md-button variant="elevated" icon="image" label="Label"></md-button>\n                        <md-button variant="elevated" disabled label="Label"></md-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-button variant="filled" label="Label"></md-button>\n                        <md-button variant="filled" icon="image" label="Label"></md-button>\n                        <md-button variant="filled" disabled label="Label"></md-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-button variant="filled-tonal" label="Label"></md-button>\n                        <md-button variant="filled-tonal" icon="image" label="Label"></md-button>\n                        <md-button variant="filled-tonal" disabled label="Label"></md-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-button variant="outlined" label="Label"></md-button>\n                        <md-button variant="outlined" icon="image" label="Label"></md-button>\n                        <md-button variant="outlined" disabled label="Label"></md-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-button label="Label"></md-button>\n                        <md-button icon="image" label="Label"></md-button>\n                        <md-button disabled label="Label"></md-button>\n                    </div>\n                </div>\n            </div>\n        ']), e || (e = t.slice(0)), (o = Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } })))));
                                var t, e;
                            },
                        },
                    ]),
                    u && r(n.prototype, u),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, u;
            })(n(548).$);
            customElements.define("demo-button", b);
            const m = document.createElement("demo-button");
        },
    },
]);
