"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [220],
    {
        220: (e, t, l) => {
            l.r(t), l.d(t, { default: () => r });
            var n,
                i = l(420);
            function a(e) {
                return (
                    (a =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    a(e)
                );
            }
            function o(e, t) {
                for (var l = 0; l < t.length; l++) {
                    var n = t[l];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, u(n.key), n);
                }
            }
            function u(e) {
                var t = (function (e) {
                    if ("object" != a(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var l = t.call(e, "string");
                        if ("object" != a(l)) return l;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == a(t) ? t : t + "";
            }
            function d() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (d = function () {
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
            function c(e, t) {
                return (
                    (c = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    c(e, t)
                );
            }
            var s = (function (e) {
                function t() {
                    return (
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                        (function (e, t, l) {
                            return (
                                (t = m(t)),
                                (function (e, t) {
                                    if (t && ("object" == a(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    })(e);
                                })(e, d() ? Reflect.construct(t, l || [], m(e).constructor) : t.apply(e, l))
                            );
                        })(this, t, arguments)
                    );
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && c(e, t);
                    })(t, e),
                    (l = t),
                    (u = [
                        {
                            key: "render",
                            value: function () {
                                return (0, i.qy)(
                                    n || ((e = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list\n                            .items="', '"\n                        ></md-list>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list\n                            .items="', '"\n                            type="multi-select"\n                        ></md-list>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list\n                            .items="', '"\n                        ></md-list>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list\n                            .items="', '"\n                            type="multi-select"\n                        ></md-list>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list\n                            .items="', '"\n                        ></md-list>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list\n                            .items="', '"\n                            type="multi-select"\n                        ></md-list>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list\n                            .items="', '"\n                        ></md-list>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list\n                            .items="', '"\n                            type="multi-select"\n                        ></md-list>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list .items="', '"></md-list>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list\n                            .items="', '"\n                            type="multi-select"\n                        ></md-list>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list\n                            .items="', '"\n                            type="multi-select"\n                        ></md-list>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list\n                            .items="', '"\n                            type="multi-select"\n                        ></md-list>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list\n                            .items="', '"\n                        ></md-list>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list\n                            .items="', '"\n                        ></md-list>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list\n                            .items="', '"\n                        ></md-list>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-list\n                            .items="', '"\n                        ></md-list>\n                    </div>\n                </div>\n            </div>\n        ']), t || (t = e.slice(0)), (n = Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })))),
                                    [
                                        { avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                        { avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text" },
                                        { avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline" },
                                    ],
                                    [
                                        { trailingCheckbox: !0, avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                        { trailingCheckbox: !0, avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text" },
                                        { trailingCheckbox: !0, avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline" },
                                    ],
                                    [
                                        { image: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                        { image: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text" },
                                        { image: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline" },
                                    ],
                                    [
                                        { trailingCheckbox: !0, image: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                        { trailingCheckbox: !0, image: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text" },
                                        { trailingCheckbox: !0, image: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline" },
                                    ],
                                    [
                                        { video: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                        { video: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text" },
                                        { video: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline" },
                                    ],
                                    [
                                        { trailingCheckbox: !0, video: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                        { trailingCheckbox: !0, video: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text" },
                                        { trailingCheckbox: !0, video: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline" },
                                    ],
                                    [
                                        { icon: "image", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                        { icon: "image", label: "Headline", sublabel: "Supporting text" },
                                        { icon: "image", label: "Headline" },
                                    ],
                                    [
                                        { trailingCheckbox: !0, icon: "image", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                        { trailingCheckbox: !0, icon: "image", label: "Headline", sublabel: "Supporting text" },
                                        { trailingCheckbox: !0, icon: "image", label: "Headline" },
                                    ],
                                    [{ label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" }, { label: "Headline", sublabel: "Supporting text" }, { label: "Headline" }],
                                    [
                                        { trailingCheckbox: !0, label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                        { trailingCheckbox: !0, label: "Headline", sublabel: "Supporting text" },
                                        { trailingCheckbox: !0, label: "Headline" },
                                    ],
                                    [
                                        { leadingCheckbox: !0, label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                        { leadingCheckbox: !0, label: "Headline", sublabel: "Supporting text" },
                                        { leadingCheckbox: !0, label: "Headline" },
                                    ],
                                    [
                                        { text: "100+", leadingCheckbox: !0, label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                        { text: "100+", leadingCheckbox: !0, label: "Headline", sublabel: "Supporting text" },
                                        { text: "100+", leadingCheckbox: !0, label: "Headline" },
                                    ],
                                    [
                                        { leadingRadioButton: !0, label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                        { leadingRadioButton: !0, label: "Headline", sublabel: "Supporting text" },
                                        { leadingRadioButton: !0, label: "Headline" },
                                    ],
                                    [
                                        { text: "100+", leadingRadioButton: !0, label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                        { text: "100+", leadingRadioButton: !0, label: "Headline", sublabel: "Supporting text" },
                                        { text: "100+", leadingRadioButton: !0, label: "Headline" },
                                    ],
                                    [
                                        { trailingSwitch: !0, label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                        { trailingSwitch: !0, label: "Headline", sublabel: "Supporting text" },
                                        { trailingSwitch: !0, label: "Headline" },
                                    ],
                                    [
                                        { icon: "image", trailingSwitch: !0, label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                        { icon: "image", trailingSwitch: !0, label: "Headline", sublabel: "Supporting text" },
                                        { icon: "image", trailingSwitch: !0, label: "Headline" },
                                    ],
                                );
                                var e, t;
                            },
                        },
                    ]),
                    u && o(l.prototype, u),
                    Object.defineProperty(l, "prototype", { writable: !1 }),
                    l
                );
                var l, u;
            })(l(548).$);
            customElements.define("demo-list", s);
            const r = document.createElement("demo-list");
        },
    },
]);
