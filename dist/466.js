"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [466],
    {
        466: (e, n, t) => {
            t.r(n), t.d(n, { default: () => l });
            var i,
                r = t(420);
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
            function c(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i);
                }
            }
            function o(e) {
                var n = (function (e) {
                    if ("object" != a(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var t = n.call(e, "string");
                        if ("object" != a(t)) return t;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == a(n) ? n : n + "";
            }
            function d() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (d = function () {
                    return !!e;
                })();
            }
            function s(e) {
                return (
                    (s = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    s(e)
                );
            }
            function m(e, n) {
                return (
                    (m = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, n) {
                              return (e.__proto__ = n), e;
                          }),
                    m(e, n)
                );
            }
            var p = (function (e) {
                function n() {
                    return (
                        (function (e, n) {
                            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
                        })(this, n),
                        (function (e, n, t) {
                            return (
                                (n = s(n)),
                                (function (e, n) {
                                    if (n && ("object" == a(n) || "function" == typeof n)) return n;
                                    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    })(e);
                                })(e, d() ? Reflect.construct(n, t || [], s(e).constructor) : n.apply(e, t))
                            );
                        })(this, n, arguments)
                    );
                }
                return (
                    (function (e, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(n && n.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), n && m(e, n);
                    })(n, e),
                    (t = n),
                    (o = [
                        {
                            key: "render",
                            value: function () {
                                return (0, r.qy)(i || ((e = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-image\n                            style="width:64px;"\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-image\n                            style="width:64px;"\n                            ratio="16/9"\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="width:64px;"\n                            ratio="3/2"\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="width:64px;"\n                            ratio="4/3"\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="width:64px;"\n                            ratio="1/1"\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="width:64px;"\n                            ratio="3/4"\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="width:64px;"\n                            ratio="2/3"\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-image\n                            style="height:64px;"\n                            ratio="16/9"\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="height:64px;"\n                            ratio="3/2"\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="height:64px;"\n                            ratio="4/3"\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="height:64px;"\n                            ratio="1/1"\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="height:64px;"\n                            ratio="3/4"\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="height:64px;"\n                            ratio="2/3"\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-image\n                            style="width:64px;"\n                            ratio="16/9"\n                            circular\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="width:64px;"\n                            ratio="3/2"\n                            circular\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="width:64px;"\n                            ratio="4/3"\n                            circular\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="width:64px;"\n                            ratio="1/1"\n                            circular\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="width:64px;"\n                            ratio="3/4"\n                            circular\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="width:64px;"\n                            ratio="2/3"\n                            circular\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-image\n                            style="height:64px;"\n                            ratio="16/9"\n                            circular\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="height:64px;"\n                            ratio="3/2"\n                            circular\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="height:64px;"\n                            ratio="4/3"\n                            circular\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="height:64px;"\n                            ratio="1/1"\n                            circular\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="height:64px;"\n                            ratio="3/4"\n                            circular\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                        <md-image\n                            style="height:64px;"\n                            ratio="2/3"\n                            circular\n                            src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"\n                        ></md-image>\n                    </div>\n                </div>\n            </div>\n        ']), n || (n = e.slice(0)), (i = Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } })))));
                                var e, n;
                            },
                        },
                    ]),
                    o && c(t.prototype, o),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    t
                );
                var t, o;
            })(t(548).$);
            customElements.define("demo-image", p);
            const l = document.createElement("demo-image");
        },
    },
]);
