"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [790],
    {
        790: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var r,
                o = n(420);
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
            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, u(r.key), r);
                }
            }
            function u(e) {
                var t = (function (e) {
                    if ("object" != i(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var n = t.call(e, "string");
                        if ("object" != i(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == i(t) ? t : t + "";
            }
            function c() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (c = function () {
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
            var s = (function (e) {
                function t() {
                    return (
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                        (function (e, t, n) {
                            return (
                                (t = a(t)),
                                (function (e, t) {
                                    if (t && ("object" == i(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    })(e);
                                })(e, c() ? Reflect.construct(t, n || [], a(e).constructor) : t.apply(e, n))
                            );
                        })(this, t, arguments)
                    );
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && f(e, t);
                    })(t, e),
                    (n = t),
                    (u = [
                        {
                            key: "render",
                            value: function () {
                                return (0, o.qy)(
                                    r || ((e = ['\n            <div class="md-layout__border">\n                <md-sheet style="height:80px;" id="sheet1" region="north" label="North"></md-sheet>\n                <md-sheet style="width:256px;" id="sheet2" region="east" label="East"></md-sheet>\n                <md-sheet style="height:80px;" id="sheet3" region="south" label="South"></md-sheet>\n                <md-sheet style="width:256px;" id="sheet4" region="west" label="West"></md-sheet>\n                <md-sheet region="center">\n                    <div class="md-layout">\n                        <md-button variant="filled-tonal" label="Toggle Sheet North" @click="', '"></md-button>\n                        <md-button variant="filled-tonal" label="Toggle Sheet East" @click="', '"></md-button>\n                        <md-button variant="filled-tonal" label="Toggle Sheet South" @click="', '"></md-button>\n                        <md-button variant="filled-tonal" label="Toggle Sheet West" @click="', '"></md-button>\n                    </div>\n                </md-sheet>\n            </div>\n        ']), t || (t = e.slice(0)), (r = Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })))),
                                    function () {
                                        return sheet1.toggle();
                                    },
                                    function () {
                                        return sheet2.toggle();
                                    },
                                    function () {
                                        return sheet3.toggle();
                                    },
                                    function () {
                                        return sheet4.toggle();
                                    },
                                );
                                var e, t;
                            },
                        },
                    ]),
                    u && l(n.prototype, u),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, u;
            })(n(548).$);
            customElements.define("demo-sheet", s);
            const d = document.createElement("demo-sheet");
        },
    },
]);
