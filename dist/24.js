"use strict";
(self.webpackChunkwebpack_project = self.webpackChunkwebpack_project || []).push([
    [24],
    {
        24: (e, o, n) => {
            n.r(o), n.d(o, { default: () => b });
            var t,
                c = n(420);
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
            function l(e, o) {
                for (var n = 0; n < o.length; n++) {
                    var t = o[n];
                    (t.enumerable = t.enumerable || !1), (t.configurable = !0), "value" in t && (t.writable = !0), Object.defineProperty(e, d(t.key), t);
                }
            }
            function d(e) {
                var o = (function (e) {
                    if ("object" != a(e) || !e) return e;
                    var o = e[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(e, "string");
                        if ("object" != a(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == a(o) ? o : o + "";
            }
            function m() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (m = function () {
                    return !!e;
                })();
            }
            function i(e) {
                return (
                    (i = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    i(e)
                );
            }
            function u(e, o) {
                return (
                    (u = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, o) {
                              return (e.__proto__ = o), e;
                          }),
                    u(e, o)
                );
            }
            var r = (function (e) {
                function o() {
                    return (
                        (function (e, o) {
                            if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
                        })(this, o),
                        (function (e, o, n) {
                            return (
                                (o = i(o)),
                                (function (e, o) {
                                    if (o && ("object" == a(o) || "function" == typeof o)) return o;
                                    if (void 0 !== o) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    })(e);
                                })(e, m() ? Reflect.construct(o, n || [], i(e).constructor) : o.apply(e, n))
                            );
                        })(this, o, arguments)
                    );
                }
                return (
                    (function (e, o) {
                        if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(o && o.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), o && u(e, o);
                    })(o, e),
                    (n = o),
                    (d = [
                        {
                            key: "render",
                            value: function () {
                                return (0, c.qy)(t || ((e = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card> body </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card label="Label"> body </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card label="Label" sublabel="Sublabel"> body </md-card>\n                    </div>\n\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card .icons="', '"> body </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card label="Label" .icons="', '"> body </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card label="Label" sublabel="Sublabel" .icons="', '"> body </md-card>\n                    </div>\n\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card .icons="', '" .actions="', '"> body </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card label="Label" .icons="', '" .actions="', '"> body </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card label="Label" sublabel="Sublabel" .icons="', '" .actions="', '"> body </md-card>\n                    </div>\n\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card .icons="', '" .actions="', '" .buttons="', '"> body </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card label="Label" .icons="', '" .actions="', '" .buttons="', '"> body </md-card>\n                    </div>\n                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-card label="Label" sublabel="Sublabel" .icons="', '" .actions="', '" .buttons="', '"> body </md-card>\n                    </div>\n                </div>\n            </div>\n        ']), o || (o = e.slice(0)), (t = Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(o) } })))), [{ icon: "image" }], [{ icon: "image" }], [{ icon: "image" }], [{ icon: "image" }], [{ icon: "image" }, { icon: "image" }], [{ icon: "image" }], [{ icon: "image" }, { icon: "image" }], [{ icon: "image" }], [{ icon: "image" }, { icon: "image" }], [{ icon: "image" }], [{ icon: "image" }, { icon: "image" }], [{ component: "spacer" }, { label: "Label" }, { label: "Label" }], [{ icon: "image" }], [{ icon: "image" }, { icon: "image" }], [{ component: "spacer" }, { label: "Label" }, { label: "Label" }], [{ icon: "image" }], [{ icon: "image" }, { icon: "image" }], [{ component: "spacer" }, { label: "Label" }, { label: "Label" }]);
                                var e, o;
                            },
                        },
                    ]),
                    d && l(n.prototype, d),
                    Object.defineProperty(n, "prototype", { writable: !1 }),
                    n
                );
                var n, d;
            })(n(548).$);
            customElements.define("demo-card", r);
            const b = document.createElement("demo-card");
        },
    },
]);
