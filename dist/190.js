"use strict";
(self.webpackChunkwebpack_project = self.webpackChunkwebpack_project || []).push([
    [190],
    {
        190: (t, e, r) => {
            r.r(e), r.d(e, { default: () => b });
            var o,
                n = r(420);
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
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, u(o.key), o);
                }
            }
            function u(t) {
                var e = (function (t) {
                    if ("object" != i(t) || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var r = e.call(t, "string");
                        if ("object" != i(r)) return r;
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
            function p(t, e) {
                return (
                    (p = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    p(t, e)
                );
            }
            var l = (function (t) {
                function e() {
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        (function (t, e, r) {
                            return (
                                (e = f(e)),
                                (function (t, e) {
                                    if (e && ("object" == i(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, a() ? Reflect.construct(e, r || [], f(t).constructor) : e.apply(t, r))
                            );
                        })(this, e, arguments)
                    );
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && p(t, e);
                    })(e, t),
                    (r = e),
                    (u = [
                        {
                            key: "render",
                            value: function () {
                                return (0, n.qy)(o || ((t = ['\n            <div class="md-layout__border">\n                <md-bottom-app-bar id="bottomAppBar1" open .actions="', '" .fab="', '"></md-bottom-app-bar>\n                <md-sheet region="center">\n                    <div class="md-layout">\n                        <md-button variant="filled-tonal" label="Toggle Bottom App Bar" @click="', '"></md-button>\n                    </div>\n                </md-sheet>\n            </div>\n        ']), e || (e = t.slice(0)), (o = Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } })))), [{ icon: "image" }, { icon: "image" }, { icon: "image" }, { icon: "image" }], "image", function () {
                                    return bottomAppBar1.toggle();
                                });
                                var t, e;
                            },
                        },
                    ]),
                    u && c(r.prototype, u),
                    Object.defineProperty(r, "prototype", { writable: !1 }),
                    r
                );
                var r, u;
            })(r(548).$);
            customElements.define("demo-bottom-app-bar", l);
            const b = document.createElement("demo-bottom-app-bar");
        },
    },
]);
