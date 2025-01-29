"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [466],
    {
        466: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var r,
                a = i(420);
            function n(e) {
                return (
                    (n =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    n(e)
                );
            }
            function c(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, o(r.key), r);
                }
            }
            function o(e) {
                var t = (function (e) {
                    if ("object" != n(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var i = t.call(e, "string");
                        if ("object" != n(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == n(t) ? t : t + "";
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
            function m(e, t) {
                return (
                    (m = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    m(e, t)
                );
            }
            var p = (function (e) {
                function t() {
                    return (
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                        (function (e, t, i) {
                            return (
                                (t = s(t)),
                                (function (e, t) {
                                    if (t && ("object" == n(t) || "function" == typeof t)) return t;
                                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    })(e);
                                })(e, d() ? Reflect.construct(t, i || [], s(e).constructor) : t.apply(e, i))
                            );
                        })(this, t, arguments)
                    );
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && m(e, t);
                    })(t, e),
                    (i = t),
                    (o = [
                        {
                            key: "render",
                            value: function () {
                                return (0, a.qy)(r || ((e = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-image style="width:64px;" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-image style="width:64px;" ratio="16/9" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="width:64px;" ratio="3/2" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="width:64px;" ratio="4/3" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="width:64px;" ratio="1/1" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="width:64px;" ratio="3/4" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="width:64px;" ratio="2/3" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-image style="height:64px;" ratio="16/9" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="height:64px;" ratio="3/2" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="height:64px;" ratio="4/3" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="height:64px;" ratio="1/1" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="height:64px;" ratio="3/4" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="height:64px;" ratio="2/3" src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-image style="width:64px;" ratio="16/9" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="width:64px;" ratio="3/2" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="width:64px;" ratio="4/3" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="width:64px;" ratio="1/1" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="width:64px;" ratio="3/4" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="width:64px;" ratio="2/3" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                    </div>\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-image style="height:64px;" ratio="16/9" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="height:64px;" ratio="3/2" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="height:64px;" ratio="4/3" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="height:64px;" ratio="1/1" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="height:64px;" ratio="3/4" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                        <md-image style="height:64px;" ratio="2/3" circular src="https://api.dicebear.com/9.x/icons/svg?seed=Andrea"></md-image>\n                    </div>\n                </div>\n            </div>\n        ']), t || (t = e.slice(0)), (r = Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })))));
                                var e, t;
                            },
                        },
                    ]),
                    o && c(i.prototype, o),
                    Object.defineProperty(i, "prototype", { writable: !1 }),
                    i
                );
                var i, o;
            })(i(548).$);
            customElements.define("demo-image", p);
            const l = document.createElement("demo-image");
        },
    },
]);
