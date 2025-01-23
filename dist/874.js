"use strict";
(self.webpackChunkwebpack_project = self.webpackChunkwebpack_project || []).push([
    [874],
    {
        874: (t, e, o) => {
            o.r(e), o.d(e, { default: () => y });
            var n,
                r = o(420);
            function u(t) {
                return (
                    (u =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    u(t)
                );
            }
            function c(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var n = e[o];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, i(n.key), n);
                }
            }
            function i(t) {
                var e = (function (t) {
                    if ("object" != u(t) || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var o = e.call(t, "string");
                        if ("object" != u(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(t);
                })(t);
                return "symbol" == u(e) ? e : e + "";
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
            function f(t, e) {
                return (
                    (f = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    f(t, e)
                );
            }
            var p = (function (t) {
                function e() {
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        (function (t, e, o) {
                            return (
                                (e = l(e)),
                                (function (t, e) {
                                    if (e && ("object" == u(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (t) {
                                        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t;
                                    })(t);
                                })(t, a() ? Reflect.construct(e, o || [], l(t).constructor) : e.apply(t, o))
                            );
                        })(this, e, arguments)
                    );
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && f(t, e);
                    })(e, t),
                    (o = e),
                    (i = [
                        {
                            key: "render",
                            value: function () {
                                return (0, r.qy)(n || ((t = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">4</div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">4</div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">4</div>\n                </div>\n            </div>\n        ']), e || (e = t.slice(0)), (n = Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } })))));
                                var t, e;
                            },
                        },
                    ]),
                    i && c(o.prototype, i),
                    Object.defineProperty(o, "prototype", { writable: !1 }),
                    o
                );
                var o, i;
            })(o(548).$);
            customElements.define("demo-layout-grid", p);
            const y = document.createElement("demo-layout-grid");
        },
    },
]);
