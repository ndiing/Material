"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [326],
    {
        326: (n, t, e) => {
            e.r(t), e.d(t, { default: () => d });
            var o,
                r = e(420);
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
            function c(n, t) {
                for (var e = 0; e < t.length; e++) {
                    var o = t[e];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(n, l(o.key), o);
                }
            }
            function l(n) {
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
            function u(n) {
                return (
                    (u = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (n) {
                              return n.__proto__ || Object.getPrototypeOf(n);
                          }),
                    u(n)
                );
            }
            function b(n, t) {
                return (
                    (b = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (n, t) {
                              return (n.__proto__ = t), n;
                          }),
                    b(n, t)
                );
            }
            var s = (function (n) {
                function t() {
                    return (
                        (function (n, t) {
                            if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                        (function (n, t, e) {
                            return (
                                (t = u(t)),
                                (function (n, t) {
                                    if (t && ("object" == a(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (n) {
                                        if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return n;
                                    })(n);
                                })(n, i() ? Reflect.construct(t, e || [], u(n).constructor) : t.apply(n, e))
                            );
                        })(this, t, arguments)
                    );
                }
                return (
                    (function (n, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (n.prototype = Object.create(t && t.prototype, { constructor: { value: n, writable: !0, configurable: !0 } })), Object.defineProperty(n, "prototype", { writable: !1 }), t && b(n, t);
                    })(t, n),
                    (e = t),
                    (l = [
                        {
                            key: "render",
                            value: function () {
                                return (0, r.qy)(
                                    o || ((n = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-snackbar\n                            id="snackbar1"\n                            label="Label"\n                            @onSnackbarButtonClick="', '"\n                        >\n                            Single-line snackbar\n                        </md-snackbar>\n                        <md-button\n                            variant="filled-tonal"\n                            label="Toggle Snackbar"\n                            @click="', '"\n                        ></md-button>\n                    </div>\n\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-snackbar\n                            id="snackbar2"\n                            label="Label"\n                            @onSnackbarButtonClick="', '"\n                            .buttons="', '"\n                        >\n                            Single-line snackbar with action\n                        </md-snackbar>\n                        <md-button\n                            variant="filled-tonal"\n                            label="Toggle Snackbar"\n                            @click="', '"\n                        ></md-button>\n                    </div>\n\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-snackbar\n                            id="snackbar3"\n                            label="Label"\n                            @onSnackbarButtonClick="', '"\n                        >\n                            Two-line snackbar\n                            <br />without action\n                        </md-snackbar>\n                        <md-button\n                            variant="filled-tonal"\n                            label="Toggle Snackbar"\n                            @click="', '"\n                        ></md-button>\n                    </div>\n\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-snackbar\n                            id="snackbar4"\n                            label="Label"\n                            @onSnackbarButtonClick="', '"\n                            .buttons="', '"\n                        >\n                            Two-line snackbar\n                            <br />with action\n                        </md-snackbar>\n                        <md-button\n                            variant="filled-tonal"\n                            label="Toggle Snackbar"\n                            @click="', '"\n                        ></md-button>\n                    </div>\n\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-snackbar\n                            id="snackbar0"\n                            label="Label"\n                            @onSnackbarButtonClick="', '"\n                            .buttons="', '"\n                        >\n                            Two-line snackbar\n                            <br />with longer action\n                        </md-snackbar>\n                        <md-button\n                            variant="filled-tonal"\n                            label="Toggle Snackbar"\n                            @click="', '"\n                        ></md-button>\n                    </div>\n                </div>\n            </div>\n        ']), t || (t = n.slice(0)), (o = Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(t) } })))),
                                    function () {
                                        return snackbar1.close();
                                    },
                                    function () {
                                        return snackbar1.show();
                                    },
                                    function () {
                                        return snackbar2.close();
                                    },
                                    [{ component: "spacer" }, { label: "Action" }],
                                    function () {
                                        return snackbar2.show();
                                    },
                                    function () {
                                        return snackbar3.close();
                                    },
                                    function () {
                                        return snackbar3.show();
                                    },
                                    function () {
                                        return snackbar4.close();
                                    },
                                    [{ component: "spacer" }, { label: "Action" }],
                                    function () {
                                        return snackbar4.show();
                                    },
                                    function () {
                                        return snackbar0.close();
                                    },
                                    [{ component: "spacer" }, { label: "Longer action" }],
                                    function () {
                                        return snackbar0.show();
                                    },
                                );
                                var n, t;
                            },
                        },
                    ]),
                    l && c(e.prototype, l),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                );
                var e, l;
            })(e(548).$);
            customElements.define("demo-snackbar", s);
            const d = document.createElement("demo-snackbar");
        },
    },
]);
