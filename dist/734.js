"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [734],
    {
        734: (t, n, o) => {
            o.r(n), o.d(n, { default: () => b });
            var e,
                i = o(420);
            function c(t) {
                return (
                    (c =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    c(t)
                );
            }
            function r(t, n) {
                for (var o = 0; o < n.length; o++) {
                    var e = n[o];
                    (e.enumerable = e.enumerable || !1), (e.configurable = !0), "value" in e && (e.writable = !0), Object.defineProperty(t, u(e.key), e);
                }
            }
            function u(t) {
                var n = (function (t) {
                    if ("object" != c(t) || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(t, "string");
                        if ("object" != c(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(t);
                })(t);
                return "symbol" == c(n) ? n : n + "";
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
            function d(t, n) {
                return (
                    (d = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, n) {
                              return (t.__proto__ = n), t;
                          }),
                    d(t, n)
                );
            }
            var m = (function (t) {
                function n() {
                    return (
                        (function (t, n) {
                            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
                        })(this, n),
                        (function (t, n, o) {
                            return (
                                (n = l(n)),
                                (function (t, n) {
                                    if (n && ("object" == c(n) || "function" == typeof n)) return n;
                                    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, a() ? Reflect.construct(n, o || [], l(t).constructor) : n.apply(t, o))
                            );
                        })(this, n, arguments)
                    );
                }
                return (
                    (function (t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(n && n.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), n && d(t, n);
                    })(n, t),
                    (o = n),
                    (u = [
                        {
                            key: "render",
                            value: function () {
                                return (0, i.qy)(e || ((t = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-icon-button variant="filled" icon="image"></md-icon-button>\n                        <md-icon-button variant="filled" icon="image" toggle></md-icon-button>\n                        <md-icon-button variant="filled" icon="image" toggle selected></md-icon-button>\n                        <md-icon-button variant="filled" icon="image" disabled></md-icon-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-icon-button variant="filled-tonal" icon="image"></md-icon-button>\n                        <md-icon-button variant="filled-tonal" icon="image" toggle></md-icon-button>\n                        <md-icon-button variant="filled-tonal" icon="image" toggle selected></md-icon-button>\n                        <md-icon-button variant="filled-tonal" icon="image" disabled></md-icon-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-icon-button variant="outlined" icon="image"></md-icon-button>\n                        <md-icon-button variant="outlined" icon="image" toggle></md-icon-button>\n                        <md-icon-button variant="outlined" icon="image" toggle selected></md-icon-button>\n                        <md-icon-button variant="outlined" icon="image" disabled></md-icon-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-icon-button icon="image"></md-icon-button>\n                        <md-icon-button icon="image" toggle></md-icon-button>\n                        <md-icon-button icon="image" toggle selected></md-icon-button>\n                        <md-icon-button icon="image" disabled></md-icon-button>\n                    </div>\n                </div>\n            </div>\n        ']), n || (n = t.slice(0)), (e = Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(n) } })))));
                                var t, n;
                            },
                        },
                    ]),
                    u && r(o.prototype, u),
                    Object.defineProperty(o, "prototype", { writable: !1 }),
                    o
                );
                var o, u;
            })(o(548).$);
            customElements.define("demo-icon-button", m);
            const b = document.createElement("demo-icon-button");
        },
    },
]);
