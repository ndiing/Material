"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [142],
    {
        2142: (e, n, t) => {
            t.r(n), t.d(n, { default: () => s });
            var i,
                a = t(420);
            function o(e) {
                return (
                    (o =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    o(e)
                );
            }
            function l(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, m(i.key), i);
                }
            }
            function m(e) {
                var n = (function (e) {
                    if ("object" != o(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var t = n.call(e, "string");
                        if ("object" != o(t)) return t;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == o(n) ? n : n + "";
            }
            function c() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (c = function () {
                    return !!e;
                })();
            }
            function d(e) {
                return (
                    (d = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    d(e)
                );
            }
            function r(e, n) {
                return (
                    (r = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, n) {
                              return (e.__proto__ = n), e;
                          }),
                    r(e, n)
                );
            }
            var u = (function (e) {
                function n() {
                    return (
                        (function (e, n) {
                            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
                        })(this, n),
                        (function (e, n, t) {
                            return (
                                (n = d(n)),
                                (function (e, n) {
                                    if (n && ("object" == o(n) || "function" == typeof n)) return n;
                                    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    })(e);
                                })(e, c() ? Reflect.construct(n, t || [], d(e).constructor) : n.apply(e, t))
                            );
                        })(this, n, arguments)
                    );
                }
                return (
                    (function (e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(n && n.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), n && r(e, n);
                    })(n, e),
                    (t = n),
                    (m = [
                        {
                            key: "render",
                            value: function () {
                                return (0, a.qy)(
                                    i || ((e = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    \x3c!-- <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n<div class="md-menu">\n<md-navigation-list\n.items="', '"\n></md-navigation-list>\n</div>\n</div>\n<div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n<div class="md-menu">\n<md-navigation-list\n.items="', '"\n></md-navigation-list>\n</div>\n</div> --\x3e\n                    \x3c!-- <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n<div class="md-navigation-drawer">\n<md-navigation-list\n.items="', '"\n></md-navigation-list>\n</div>\n</div>\n<div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n<div class="md-navigation-drawer">\n<md-navigation-list\n.items="', '"\n></md-navigation-list>\n</div>\n</div> --\x3e\n                    \x3c!-- <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n<div class="md-navigation-rail">\n<md-navigation-list\n.rippleOptions="', '"\n.items="', '"\n></md-navigation-list>\n</div>\n</div>\n<div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n<div class="md-navigation-rail">\n<md-navigation-list\n.rippleOptions="', '"\n.items="', '"\n></md-navigation-list>\n</div>\n</div> --\x3e\n                    \x3c!-- <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n<div class="md-navigation-bar">\n<md-navigation-list\n.rippleOptions="', '"\n.items="', '"\n></md-navigation-list>\n</div>\n</div>\n<div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n<div class="md-navigation-bar">\n<md-navigation-list\n.rippleOptions="', '"\n.items="', '"\n></md-navigation-list>\n</div>\n</div> --\x3e\n                </div>\n            </div>\n        ']), n || (n = e.slice(0)), (i = Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } })))),
                                    [
                                        { label: "Item 1", selected: !0 },
                                        { label: "Item 2", badge: 0 },
                                        { label: "Item 3", badge: 1 },
                                        { label: "Item 4", badge: 1e3 },
                                    ],
                                    [
                                        { icon: "image", label: "Item 1", selected: !0 },
                                        { icon: "image", label: "Item 2", badge: 0 },
                                        { icon: "image", label: "Item 3", badge: 1 },
                                        { icon: "image", label: "Item 4", badge: 1e3 },
                                    ],
                                    [
                                        { label: "Item 1", selected: !0 },
                                        { label: "Item 2", badge: 0 },
                                        { label: "Item 3", badge: 1 },
                                        { label: "Item 4", badge: 1e3 },
                                    ],
                                    [
                                        { icon: "image", label: "Item 1", selected: !0 },
                                        { icon: "image", label: "Item 2", badge: 0 },
                                        { icon: "image", label: "Item 3", badge: 1 },
                                        { icon: "image", label: "Item 4", badge: 1e3 },
                                    ],
                                    { container: ".md-navigation-list__icon" },
                                    [
                                        { icon: "image", label: "Item 1", selected: !0 },
                                        { icon: "image", label: "Item 2", badge: 0 },
                                        { icon: "image", label: "Item 3", badge: 1 },
                                        { icon: "image", label: "Item 4", badge: 1e3 },
                                    ],
                                    { container: ".md-navigation-list__icon" },
                                    [
                                        { icon: "image", selected: !0 },
                                        { icon: "image", badge: 0 },
                                        { icon: "image", badge: 1 },
                                        { icon: "image", badge: 1e3 },
                                    ],
                                    { container: ".md-navigation-list__icon" },
                                    [
                                        { icon: "image", label: "Item 1", selected: !0 },
                                        { icon: "image", label: "Item 2", badge: 0 },
                                        { icon: "image", label: "Item 3", badge: 1 },
                                        { icon: "image", label: "Item 4", badge: 1e3 },
                                    ],
                                    { container: ".md-navigation-list__icon" },
                                    [
                                        { icon: "image", selected: !0 },
                                        { icon: "image", badge: 0 },
                                        { icon: "image", badge: 1 },
                                        { icon: "image", badge: 1e3 },
                                    ],
                                );
                                var e, n;
                            },
                        },
                    ]),
                    m && l(t.prototype, m),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    t
                );
                var t, m;
            })(t(8548).$);
            customElements.define("demo-navigation-list", u);
            const s = document.createElement("demo-navigation-list");
        },
    },
]);
