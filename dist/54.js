"use strict";
(self.webpackChunkwebpack_project = self.webpackChunkwebpack_project || []).push([
    [54],
    {
        54: (e, n, t) => {
            t.r(n), t.d(n, { default: () => f });
            var o,
                a = t(420);
            function u(e) {
                return (
                    (u =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    u(e)
                );
            }
            function c(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var o = n[t];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, r(o.key), o);
                }
            }
            function r(e) {
                var n = (function (e) {
                    if ("object" != u(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var t = n.call(e, "string");
                        if ("object" != u(t)) return t;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == u(n) ? n : n + "";
            }
            function l() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (l = function () {
                    return !!e;
                })();
            }
            function m(e) {
                return (
                    (m = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    m(e)
                );
            }
            function d(e, n) {
                return (
                    (d = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, n) {
                              return (e.__proto__ = n), e;
                          }),
                    d(e, n)
                );
            }
            var i = (function (e) {
                function n() {
                    return (
                        (function (e, n) {
                            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
                        })(this, n),
                        (function (e, n, t) {
                            return (
                                (n = m(n)),
                                (function (e, n) {
                                    if (n && ("object" == u(n) || "function" == typeof n)) return n;
                                    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    })(e);
                                })(e, l() ? Reflect.construct(n, t || [], m(e).constructor) : n.apply(e, t))
                            );
                        })(this, n, arguments)
                    );
                }
                return (
                    (function (e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(n && n.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), n && d(e, n);
                    })(n, e),
                    (t = n),
                    (r = [
                        {
                            key: "render",
                            value: function () {
                                return (0, a.qy)(o || ((e = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab icon="image"></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab size="small" icon="image"></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab size="large" icon="image"></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab type="extended" icon="image" label="Label"></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab type="extended" label="Label"></md-fab>\n                    </div>\n\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab variant="unelevated" icon="image"></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab variant="unelevated" size="small" icon="image"></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab variant="unelevated" size="large" icon="image"></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab variant="unelevated" type="extended" icon="image" label="Label"></md-fab>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-fab variant="unelevated" type="extended" label="Label"></md-fab>\n                    </div>\n                </div>\n            </div>\n        ']), n || (n = e.slice(0)), (o = Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } })))));
                                var e, n;
                            },
                        },
                    ]),
                    r && c(t.prototype, r),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    t
                );
                var t, r;
            })(t(548).$);
            customElements.define("demo-fab", i);
            const f = document.createElement("demo-fab");
        },
    },
]);
