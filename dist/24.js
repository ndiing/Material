"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [24],
    {
        24: (n, e, o) => {
            o.r(e), o.d(e, { default: () => b });
            var t,
                a = o(420);
            function c(n) {
                return (
                    (c =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (n) {
                                  return typeof n;
                              }
                            : function (n) {
                                  return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
                              }),
                    c(n)
                );
            }
            function l(n, e) {
                for (var o = 0; o < e.length; o++) {
                    var t = e[o];
                    (t.enumerable = t.enumerable || !1), (t.configurable = !0), "value" in t && (t.writable = !0), Object.defineProperty(n, d(t.key), t);
                }
            }
            function d(n) {
                var e = (function (n) {
                    if ("object" != c(n) || !n) return n;
                    var e = n[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var o = e.call(n, "string");
                        if ("object" != c(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(n);
                })(n);
                return "symbol" == c(e) ? e : e + "";
            }
            function i() {
                try {
                    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (n) {}
                return (i = function () {
                    return !!n;
                })();
            }
            function m(n) {
                return (
                    (m = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (n) {
                              return n.__proto__ || Object.getPrototypeOf(n);
                          }),
                    m(n)
                );
            }
            function u(n, e) {
                return (
                    (u = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (n, e) {
                              return (n.__proto__ = e), n;
                          }),
                    u(n, e)
                );
            }
            var r = (function (n) {
                function e() {
                    return (
                        (function (n, e) {
                            if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        (function (n, e, o) {
                            return (
                                (e = m(e)),
                                (function (n, e) {
                                    if (e && ("object" == c(e) || "function" == typeof e)) return e;
                                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (n) {
                                        if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return n;
                                    })(n);
                                })(n, i() ? Reflect.construct(e, o || [], m(n).constructor) : e.apply(n, o))
                            );
                        })(this, e, arguments)
                    );
                }
                return (
                    (function (n, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } })), Object.defineProperty(n, "prototype", { writable: !1 }), e && u(n, e);
                    })(e, n),
                    (o = e),
                    (d = [
                        {
                            key: "render",
                            value: function () {
                                return (0, a.qy)(t || ((n = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card> body </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card label="Label"> body </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card\n                            label="Label"\n                            sublabel="Sublabel"\n                        >\n                            body\n                        </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card .icons="', '"> body </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card\n                            label="Label"\n                            .icons="', '"\n                        >\n                            body\n                        </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card\n                            label="Label"\n                            sublabel="Sublabel"\n                            .icons="', '"\n                        >\n                            body\n                        </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card\n                            .icons="', '"\n                            .actions="', '"\n                        >\n                            body\n                        </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card\n                            label="Label"\n                            .icons="', '"\n                            .actions="', '"\n                        >\n                            body\n                        </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card\n                            label="Label"\n                            sublabel="Sublabel"\n                            .icons="', '"\n                            .actions="', '"\n                        >\n                            body\n                        </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card\n                            .icons="', '"\n                            .actions="', '"\n                            .buttons="', '"\n                        >\n                            body\n                        </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card\n                            label="Label"\n                            .icons="', '"\n                            .actions="', '"\n                            .buttons="', '"\n                        >\n                            body\n                        </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card\n                            label="Label"\n                            sublabel="Sublabel"\n                            .icons="', '"\n                            .actions="', '"\n                            .buttons="', '"\n                        >\n                            body\n                        </md-card>\n                    </div>\n                </div>\n            </div>\n        ']), e || (e = n.slice(0)), (t = Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } })))), [{ icon: "image" }], [{ icon: "image" }], [{ icon: "image" }], [{ icon: "image" }], [{ icon: "image" }, { icon: "image" }], [{ icon: "image" }], [{ icon: "image" }, { icon: "image" }], [{ icon: "image" }], [{ icon: "image" }, { icon: "image" }], [{ icon: "image" }], [{ icon: "image" }, { icon: "image" }], [{ component: "spacer" }, { label: "Label" }, { label: "Label" }], [{ icon: "image" }], [{ icon: "image" }, { icon: "image" }], [{ component: "spacer" }, { label: "Label" }, { label: "Label" }], [{ icon: "image" }], [{ icon: "image" }, { icon: "image" }], [{ component: "spacer" }, { label: "Label" }, { label: "Label" }]);
                                var n, e;
                            },
                        },
                    ]),
                    d && l(o.prototype, d),
                    Object.defineProperty(o, "prototype", { writable: !1 }),
                    o
                );
                var o, d;
            })(o(548).$);
            customElements.define("demo-card", r);
            const b = document.createElement("demo-card");
        },
    },
]);
