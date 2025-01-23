"use strict";
(self.webpackChunkwebpack_project = self.webpackChunkwebpack_project || []).push([
    [974],
    {
        974: (t, e, r) => {
            r.r(e), r.d(e, { default: () => s });
            var n,
                o = r(420);
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
            function i(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, u(n.key), n);
                }
            }
            function u(t) {
                var e = (function (t) {
                    if ("object" != c(t) || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var r = e.call(t, "string");
                        if ("object" != c(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(t);
                })(t);
                return "symbol" == c(e) ? e : e + "";
            }
            function l() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (t) {}
                return (l = function () {
                    return !!t;
                })();
            }
            function f(t) {
                return (
                    (f = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    f(t)
                );
            }
            function a(t, e) {
                return (
                    (a = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    a(t, e)
                );
            }
            var p = (function (t) {
                function e() {
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        (function (t, e, r) {
                            return (
                                (e = f(e)),
                                (function (t, e) {
                                    if (e && ("object" == c(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, l() ? Reflect.construct(e, r || [], f(t).constructor) : e.apply(t, r))
                            );
                        })(this, e, arguments)
                    );
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && a(t, e);
                    })(e, t),
                    (r = e),
                    (u = [
                        {
                            key: "render",
                            value: function () {
                                return (0, o.qy)(n || ((t = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-scrim id="scrim1"></md-scrim>\n                        <md-button variant="filled-tonal" label="Toggle Scrim" @click="', '"></md-button>\n                    </div>\n                </div>\n            </div>\n        ']), e || (e = t.slice(0)), (n = Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } })))), function () {
                                    return scrim1.toggle();
                                });
                                var t, e;
                            },
                        },
                    ]),
                    u && i(r.prototype, u),
                    Object.defineProperty(r, "prototype", { writable: !1 }),
                    r
                );
                var r, u;
            })(r(548).$);
            customElements.define("demo-scrim", p);
            const s = document.createElement("demo-scrim");
        },
    },
]);
