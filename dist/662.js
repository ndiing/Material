"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [662],
    {
        662: (t, n, o) => {
            o.r(n), o.d(n, { default: () => m });
            var e,
                i = o(420);
            function r(t) {
                return (
                    (r =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    r(t)
                );
            }
            function l(t, n) {
                for (var o = 0; o < n.length; o++) {
                    var e = n[o];
                    (e.enumerable = e.enumerable || !1), (e.configurable = !0), "value" in e && (e.writable = !0), Object.defineProperty(t, u(e.key), e);
                }
            }
            function u(t) {
                var n = (function (t) {
                    if ("object" != r(t) || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(t, "string");
                        if ("object" != r(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(t);
                })(t);
                return "symbol" == r(n) ? n : n + "";
            }
            function c() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (t) {}
                return (c = function () {
                    return !!t;
                })();
            }
            function a(t) {
                return (
                    (a = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    a(t)
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
            var p = (function (t) {
                function n() {
                    return (
                        (function (t, n) {
                            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
                        })(this, n),
                        (function (t, n, o) {
                            return (
                                (n = a(n)),
                                (function (t, n) {
                                    if (n && ("object" == r(n) || "function" == typeof n)) return n;
                                    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, c() ? Reflect.construct(n, o || [], a(t).constructor) : n.apply(t, o))
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
                                return (0, i.qy)(
                                    e || ((t = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-tooltip\n                            style="width:344px;"\n                            id="tooltip1"\n                            label="Rich tooltip"\n                            .buttons="', '"\n                            @onTooltipButtonClick="', '"\n                            >Rich tooltips bring attention to particular element of feature that warrants the user\'s focus.</md-tooltip\n                        >\n                        <md-button\n                            id="button1"\n                            variant="filled-tonal"\n                            label="Toggle Rich tooltip 1"\n                            @click="', '"\n                        ></md-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-tooltip\n                            style="width:344px;"\n                            id="tooltip2"\n                            label="Rich tooltip"\n                            .buttons="', '"\n                            @onTooltipButtonClick="', '"\n                            >Rich tooltips bring attention to particular element of feature that warrants the user\'s focus.</md-tooltip\n                        >\n                        <md-button\n                            id="button2"\n                            variant="filled-tonal"\n                            label="Toggle Rich tooltip 2"\n                            @click="', '"\n                        ></md-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-tooltip\n                            style="width:344px;"\n                            id="tooltip3"\n                            label="Rich tooltip"\n                            >Rich tooltips bring attention to particular element of feature that warrants the user\'s focus.</md-tooltip\n                        >\n                        <md-button\n                            id="button3"\n                            variant="filled-tonal"\n                            label="Toggle Rich tooltip 3"\n                            @click="', '"\n                        ></md-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-tooltip\n                            style="width:344px;"\n                            id="tooltip4"\n                            .buttons="', '"\n                            @onTooltipButtonClick="', '"\n                            >Rich tooltips bring attention to particular element of feature that warrants the user\'s focus.</md-tooltip\n                        >\n                        <md-button\n                            id="button4"\n                            variant="filled-tonal"\n                            label="Toggle Rich tooltip 4"\n                            @click="', '"\n                        ></md-button>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-tooltip\n                            style="width:344px;"\n                            id="tooltip5"\n                            .buttons="', '"\n                            @onTooltipButtonClick="', '"\n                            >Rich tooltips bring attention to particular element of feature that warrants the user\'s focus.</md-tooltip\n                        >\n                        <md-button\n                            id="button5"\n                            variant="filled-tonal"\n                            label="Toggle Rich tooltip 5"\n                            @click="', '"\n                        ></md-button>\n                    </div>\n                </div>\n            </div>\n        ']), n || (n = t.slice(0)), (e = Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(n) } })))),
                                    [{ label: "Action" }, { label: "Action" }],
                                    function () {
                                        return tooltip1.toggle({ trigger: button1 });
                                    },
                                    function () {
                                        return tooltip1.toggle({ trigger: button1 });
                                    },
                                    [{ label: "Action" }],
                                    function () {
                                        return tooltip2.toggle({ trigger: button2 });
                                    },
                                    function () {
                                        return tooltip2.toggle({ trigger: button2 });
                                    },
                                    function () {
                                        return tooltip3.toggle({ trigger: button3 });
                                    },
                                    [{ label: "Action" }],
                                    function () {
                                        return tooltip4.toggle({ trigger: button4 });
                                    },
                                    function () {
                                        return tooltip4.toggle({ trigger: button4 });
                                    },
                                    [{ label: "Action" }, { label: "Action" }],
                                    function () {
                                        return tooltip5.toggle({ trigger: button5 });
                                    },
                                    function () {
                                        return tooltip5.toggle({ trigger: button5 });
                                    },
                                );
                                var t, n;
                            },
                        },
                    ]),
                    u && l(o.prototype, u),
                    Object.defineProperty(o, "prototype", { writable: !1 }),
                    o
                );
                var o, u;
            })(o(548).$);
            customElements.define("demo-tooltip", p);
            const m = document.createElement("demo-tooltip");
        },
    },
]);
