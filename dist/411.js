"use strict";
(self.webpackChunk_ndiinginc_material = self.webpackChunk_ndiinginc_material || []).push([
    [411],
    {
        792: (e, l, t) => {
            t.r(l), t.d(l, { default: () => I });
            var r,
                n = t(420);
            function i(e) {
                return (
                    (i =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    i(e)
                );
            }
            function c(e, l) {
                for (var t = 0; t < l.length; t++) {
                    var r = l[t];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, a(r.key), r);
                }
            }
            function a(e) {
                var l = (function (e) {
                    if ("object" != i(e) || !e) return e;
                    var l = e[Symbol.toPrimitive];
                    if (void 0 !== l) {
                        var t = l.call(e, "string");
                        if ("object" != i(t)) return t;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                })(e);
                return "symbol" == i(l) ? l : l + "";
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
            function b(e, l) {
                return (
                    (b = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, l) {
                              return (e.__proto__ = l), e;
                          }),
                    b(e, l)
                );
            }
            var h = (function (e) {
                function l() {
                    var e;
                    return (
                        (function (e, l) {
                            if (!(e instanceof l)) throw new TypeError("Cannot call a class as a function");
                        })(this, l),
                        ((e = (function (e, l, t) {
                            return (
                                (l = m(l)),
                                (function (e, l) {
                                    if (l && ("object" == i(l) || "function" == typeof l)) return l;
                                    if (void 0 !== l) throw new TypeError("Derived constructors may only return object or undefined");
                                    return (function (e) {
                                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e;
                                    })(e);
                                })(e, d() ? Reflect.construct(l, t || [], m(e).constructor) : l.apply(e, t))
                            );
                        })(this, l)).items = [
                            {
                                label: "Item 1",
                                children: [
                                    {
                                        label: "Item 1.1",
                                        children: [
                                            {
                                                label: "Item 1.1.1",
                                                expanded: !0,
                                                children: [
                                                    { label: "Item 1.1.1.1", children: [] },
                                                    { label: "Item 1.1.1.2", children: [] },
                                                    { label: "Item 1.1.1.3", children: [] },
                                                    { label: "Item 1.1.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 1.1.2",
                                                children: [
                                                    { label: "Item 1.1.2.1", children: [] },
                                                    { label: "Item 1.1.2.2", children: [] },
                                                    { label: "Item 1.1.2.3", children: [] },
                                                    { label: "Item 1.1.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 1.1.3",
                                                children: [
                                                    { label: "Item 1.1.3.1", children: [] },
                                                    { label: "Item 1.1.3.2", children: [] },
                                                    { label: "Item 1.1.3.3", children: [] },
                                                    { label: "Item 1.1.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 1.1.4",
                                                children: [
                                                    { label: "Item 1.1.4.1", children: [] },
                                                    { label: "Item 1.1.4.2", children: [] },
                                                    { label: "Item 1.1.4.3", children: [] },
                                                    { label: "Item 1.1.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Item 1.2",
                                        children: [
                                            {
                                                label: "Item 1.2.1",
                                                children: [
                                                    { label: "Item 1.2.1.1", selected: !0, children: [] },
                                                    { label: "Item 1.2.1.2", children: [] },
                                                    { label: "Item 1.2.1.3", children: [] },
                                                    { label: "Item 1.2.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 1.2.2",
                                                children: [
                                                    { label: "Item 1.2.2.1", children: [] },
                                                    { label: "Item 1.2.2.2", children: [] },
                                                    { label: "Item 1.2.2.3", children: [] },
                                                    { label: "Item 1.2.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 1.2.3",
                                                children: [
                                                    { label: "Item 1.2.3.1", children: [] },
                                                    { label: "Item 1.2.3.2", children: [] },
                                                    { label: "Item 1.2.3.3", children: [] },
                                                    { label: "Item 1.2.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 1.2.4",
                                                children: [
                                                    { label: "Item 1.2.4.1", children: [] },
                                                    { label: "Item 1.2.4.2", children: [] },
                                                    { label: "Item 1.2.4.3", children: [] },
                                                    { label: "Item 1.2.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Item 1.3",
                                        children: [
                                            {
                                                label: "Item 1.3.1",
                                                children: [
                                                    { label: "Item 1.3.1.1", children: [] },
                                                    { label: "Item 1.3.1.2", children: [] },
                                                    { label: "Item 1.3.1.3", children: [] },
                                                    { label: "Item 1.3.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 1.3.2",
                                                children: [
                                                    { label: "Item 1.3.2.1", children: [] },
                                                    { label: "Item 1.3.2.2", children: [] },
                                                    { label: "Item 1.3.2.3", children: [] },
                                                    { label: "Item 1.3.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 1.3.3",
                                                children: [
                                                    { label: "Item 1.3.3.1", children: [] },
                                                    { label: "Item 1.3.3.2", children: [] },
                                                    { label: "Item 1.3.3.3", children: [] },
                                                    { label: "Item 1.3.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 1.3.4",
                                                children: [
                                                    { label: "Item 1.3.4.1", children: [] },
                                                    { label: "Item 1.3.4.2", children: [] },
                                                    { label: "Item 1.3.4.3", children: [] },
                                                    { label: "Item 1.3.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Item 1.4",
                                        children: [
                                            {
                                                label: "Item 1.4.1",
                                                children: [
                                                    { label: "Item 1.4.1.1", children: [] },
                                                    { label: "Item 1.4.1.2", children: [] },
                                                    { label: "Item 1.4.1.3", children: [] },
                                                    { label: "Item 1.4.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 1.4.2",
                                                children: [
                                                    { label: "Item 1.4.2.1", children: [] },
                                                    { label: "Item 1.4.2.2", children: [] },
                                                    { label: "Item 1.4.2.3", children: [] },
                                                    { label: "Item 1.4.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 1.4.3",
                                                children: [
                                                    { label: "Item 1.4.3.1", children: [] },
                                                    { label: "Item 1.4.3.2", children: [] },
                                                    { label: "Item 1.4.3.3", children: [] },
                                                    { label: "Item 1.4.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 1.4.4",
                                                children: [
                                                    { label: "Item 1.4.4.1", children: [] },
                                                    { label: "Item 1.4.4.2", children: [] },
                                                    { label: "Item 1.4.4.3", children: [] },
                                                    { label: "Item 1.4.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                label: "Item 2",
                                children: [
                                    {
                                        label: "Item 2.1",
                                        children: [
                                            {
                                                label: "Item 2.1.1",
                                                children: [
                                                    { label: "Item 2.1.1.1", children: [] },
                                                    { label: "Item 2.1.1.2", children: [] },
                                                    { label: "Item 2.1.1.3", children: [] },
                                                    { label: "Item 2.1.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 2.1.2",
                                                children: [
                                                    { label: "Item 2.1.2.1", children: [] },
                                                    { label: "Item 2.1.2.2", children: [] },
                                                    { label: "Item 2.1.2.3", children: [] },
                                                    { label: "Item 2.1.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 2.1.3",
                                                children: [
                                                    { label: "Item 2.1.3.1", children: [] },
                                                    { label: "Item 2.1.3.2", children: [] },
                                                    { label: "Item 2.1.3.3", children: [] },
                                                    { label: "Item 2.1.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 2.1.4",
                                                children: [
                                                    { label: "Item 2.1.4.1", children: [] },
                                                    { label: "Item 2.1.4.2", children: [] },
                                                    { label: "Item 2.1.4.3", children: [] },
                                                    { label: "Item 2.1.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Item 2.2",
                                        children: [
                                            {
                                                label: "Item 2.2.1",
                                                children: [
                                                    { label: "Item 2.2.1.1", children: [] },
                                                    { label: "Item 2.2.1.2", children: [] },
                                                    { label: "Item 2.2.1.3", children: [] },
                                                    { label: "Item 2.2.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 2.2.2",
                                                children: [
                                                    { label: "Item 2.2.2.1", children: [] },
                                                    { label: "Item 2.2.2.2", children: [] },
                                                    { label: "Item 2.2.2.3", children: [] },
                                                    { label: "Item 2.2.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 2.2.3",
                                                children: [
                                                    { label: "Item 2.2.3.1", children: [] },
                                                    { label: "Item 2.2.3.2", children: [] },
                                                    { label: "Item 2.2.3.3", children: [] },
                                                    { label: "Item 2.2.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 2.2.4",
                                                children: [
                                                    { label: "Item 2.2.4.1", children: [] },
                                                    { label: "Item 2.2.4.2", children: [] },
                                                    { label: "Item 2.2.4.3", children: [] },
                                                    { label: "Item 2.2.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Item 2.3",
                                        children: [
                                            {
                                                label: "Item 2.3.1",
                                                children: [
                                                    { label: "Item 2.3.1.1", children: [] },
                                                    { label: "Item 2.3.1.2", children: [] },
                                                    { label: "Item 2.3.1.3", children: [] },
                                                    { label: "Item 2.3.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 2.3.2",
                                                children: [
                                                    { label: "Item 2.3.2.1", children: [] },
                                                    { label: "Item 2.3.2.2", children: [] },
                                                    { label: "Item 2.3.2.3", children: [] },
                                                    { label: "Item 2.3.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 2.3.3",
                                                children: [
                                                    { label: "Item 2.3.3.1", children: [] },
                                                    { label: "Item 2.3.3.2", children: [] },
                                                    { label: "Item 2.3.3.3", children: [] },
                                                    { label: "Item 2.3.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 2.3.4",
                                                children: [
                                                    { label: "Item 2.3.4.1", children: [] },
                                                    { label: "Item 2.3.4.2", children: [] },
                                                    { label: "Item 2.3.4.3", children: [] },
                                                    { label: "Item 2.3.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Item 2.4",
                                        children: [
                                            {
                                                label: "Item 2.4.1",
                                                children: [
                                                    { label: "Item 2.4.1.1", children: [] },
                                                    { label: "Item 2.4.1.2", children: [] },
                                                    { label: "Item 2.4.1.3", children: [] },
                                                    { label: "Item 2.4.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 2.4.2",
                                                children: [
                                                    { label: "Item 2.4.2.1", children: [] },
                                                    { label: "Item 2.4.2.2", children: [] },
                                                    { label: "Item 2.4.2.3", children: [] },
                                                    { label: "Item 2.4.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 2.4.3",
                                                children: [
                                                    { label: "Item 2.4.3.1", children: [] },
                                                    { label: "Item 2.4.3.2", children: [] },
                                                    { label: "Item 2.4.3.3", children: [] },
                                                    { label: "Item 2.4.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 2.4.4",
                                                children: [
                                                    { label: "Item 2.4.4.1", children: [] },
                                                    { label: "Item 2.4.4.2", children: [] },
                                                    { label: "Item 2.4.4.3", children: [] },
                                                    { label: "Item 2.4.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                label: "Item 3",
                                children: [
                                    {
                                        label: "Item 3.1",
                                        children: [
                                            {
                                                label: "Item 3.1.1",
                                                children: [
                                                    { label: "Item 3.1.1.1", children: [] },
                                                    { label: "Item 3.1.1.2", children: [] },
                                                    { label: "Item 3.1.1.3", children: [] },
                                                    { label: "Item 3.1.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 3.1.2",
                                                children: [
                                                    { label: "Item 3.1.2.1", children: [] },
                                                    { label: "Item 3.1.2.2", children: [] },
                                                    { label: "Item 3.1.2.3", children: [] },
                                                    { label: "Item 3.1.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 3.1.3",
                                                children: [
                                                    { label: "Item 3.1.3.1", children: [] },
                                                    { label: "Item 3.1.3.2", children: [] },
                                                    { label: "Item 3.1.3.3", children: [] },
                                                    { label: "Item 3.1.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 3.1.4",
                                                children: [
                                                    { label: "Item 3.1.4.1", children: [] },
                                                    { label: "Item 3.1.4.2", children: [] },
                                                    { label: "Item 3.1.4.3", children: [] },
                                                    { label: "Item 3.1.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Item 3.2",
                                        children: [
                                            {
                                                label: "Item 3.2.1",
                                                children: [
                                                    { label: "Item 3.2.1.1", children: [] },
                                                    { label: "Item 3.2.1.2", children: [] },
                                                    { label: "Item 3.2.1.3", children: [] },
                                                    { label: "Item 3.2.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 3.2.2",
                                                children: [
                                                    { label: "Item 3.2.2.1", children: [] },
                                                    { label: "Item 3.2.2.2", children: [] },
                                                    { label: "Item 3.2.2.3", children: [] },
                                                    { label: "Item 3.2.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 3.2.3",
                                                children: [
                                                    { label: "Item 3.2.3.1", children: [] },
                                                    { label: "Item 3.2.3.2", children: [] },
                                                    { label: "Item 3.2.3.3", children: [] },
                                                    { label: "Item 3.2.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 3.2.4",
                                                children: [
                                                    { label: "Item 3.2.4.1", children: [] },
                                                    { label: "Item 3.2.4.2", children: [] },
                                                    { label: "Item 3.2.4.3", children: [] },
                                                    { label: "Item 3.2.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Item 3.3",
                                        children: [
                                            {
                                                label: "Item 3.3.1",
                                                children: [
                                                    { label: "Item 3.3.1.1", children: [] },
                                                    { label: "Item 3.3.1.2", children: [] },
                                                    { label: "Item 3.3.1.3", children: [] },
                                                    { label: "Item 3.3.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 3.3.2",
                                                children: [
                                                    { label: "Item 3.3.2.1", children: [] },
                                                    { label: "Item 3.3.2.2", children: [] },
                                                    { label: "Item 3.3.2.3", children: [] },
                                                    { label: "Item 3.3.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 3.3.3",
                                                children: [
                                                    { label: "Item 3.3.3.1", children: [] },
                                                    { label: "Item 3.3.3.2", children: [] },
                                                    { label: "Item 3.3.3.3", children: [] },
                                                    { label: "Item 3.3.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 3.3.4",
                                                children: [
                                                    { label: "Item 3.3.4.1", children: [] },
                                                    { label: "Item 3.3.4.2", children: [] },
                                                    { label: "Item 3.3.4.3", children: [] },
                                                    { label: "Item 3.3.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Item 3.4",
                                        children: [
                                            {
                                                label: "Item 3.4.1",
                                                children: [
                                                    { label: "Item 3.4.1.1", children: [] },
                                                    { label: "Item 3.4.1.2", children: [] },
                                                    { label: "Item 3.4.1.3", children: [] },
                                                    { label: "Item 3.4.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 3.4.2",
                                                children: [
                                                    { label: "Item 3.4.2.1", children: [] },
                                                    { label: "Item 3.4.2.2", children: [] },
                                                    { label: "Item 3.4.2.3", children: [] },
                                                    { label: "Item 3.4.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 3.4.3",
                                                children: [
                                                    { label: "Item 3.4.3.1", children: [] },
                                                    { label: "Item 3.4.3.2", children: [] },
                                                    { label: "Item 3.4.3.3", children: [] },
                                                    { label: "Item 3.4.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 3.4.4",
                                                children: [
                                                    { label: "Item 3.4.4.1", children: [] },
                                                    { label: "Item 3.4.4.2", children: [] },
                                                    { label: "Item 3.4.4.3", children: [] },
                                                    { label: "Item 3.4.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                label: "Item 4",
                                children: [
                                    {
                                        label: "Item 4.1",
                                        children: [
                                            {
                                                label: "Item 4.1.1",
                                                children: [
                                                    { label: "Item 4.1.1.1", children: [] },
                                                    { label: "Item 4.1.1.2", children: [] },
                                                    { label: "Item 4.1.1.3", children: [] },
                                                    { label: "Item 4.1.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 4.1.2",
                                                children: [
                                                    { label: "Item 4.1.2.1", children: [] },
                                                    { label: "Item 4.1.2.2", children: [] },
                                                    { label: "Item 4.1.2.3", children: [] },
                                                    { label: "Item 4.1.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 4.1.3",
                                                children: [
                                                    { label: "Item 4.1.3.1", children: [] },
                                                    { label: "Item 4.1.3.2", children: [] },
                                                    { label: "Item 4.1.3.3", children: [] },
                                                    { label: "Item 4.1.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 4.1.4",
                                                children: [
                                                    { label: "Item 4.1.4.1", children: [] },
                                                    { label: "Item 4.1.4.2", children: [] },
                                                    { label: "Item 4.1.4.3", children: [] },
                                                    { label: "Item 4.1.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Item 4.2",
                                        children: [
                                            {
                                                label: "Item 4.2.1",
                                                children: [
                                                    { label: "Item 4.2.1.1", children: [] },
                                                    { label: "Item 4.2.1.2", children: [] },
                                                    { label: "Item 4.2.1.3", children: [] },
                                                    { label: "Item 4.2.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 4.2.2",
                                                children: [
                                                    { label: "Item 4.2.2.1", children: [] },
                                                    { label: "Item 4.2.2.2", children: [] },
                                                    { label: "Item 4.2.2.3", children: [] },
                                                    { label: "Item 4.2.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 4.2.3",
                                                children: [
                                                    { label: "Item 4.2.3.1", children: [] },
                                                    { label: "Item 4.2.3.2", children: [] },
                                                    { label: "Item 4.2.3.3", children: [] },
                                                    { label: "Item 4.2.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 4.2.4",
                                                children: [
                                                    { label: "Item 4.2.4.1", children: [] },
                                                    { label: "Item 4.2.4.2", children: [] },
                                                    { label: "Item 4.2.4.3", children: [] },
                                                    { label: "Item 4.2.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Item 4.3",
                                        children: [
                                            {
                                                label: "Item 4.3.1",
                                                children: [
                                                    { label: "Item 4.3.1.1", children: [] },
                                                    { label: "Item 4.3.1.2", children: [] },
                                                    { label: "Item 4.3.1.3", children: [] },
                                                    { label: "Item 4.3.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 4.3.2",
                                                children: [
                                                    { label: "Item 4.3.2.1", children: [] },
                                                    { label: "Item 4.3.2.2", children: [] },
                                                    { label: "Item 4.3.2.3", children: [] },
                                                    { label: "Item 4.3.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 4.3.3",
                                                children: [
                                                    { label: "Item 4.3.3.1", children: [] },
                                                    { label: "Item 4.3.3.2", children: [] },
                                                    { label: "Item 4.3.3.3", children: [] },
                                                    { label: "Item 4.3.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 4.3.4",
                                                children: [
                                                    { label: "Item 4.3.4.1", children: [] },
                                                    { label: "Item 4.3.4.2", children: [] },
                                                    { label: "Item 4.3.4.3", children: [] },
                                                    { label: "Item 4.3.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        label: "Item 4.4",
                                        children: [
                                            {
                                                label: "Item 4.4.1",
                                                children: [
                                                    { label: "Item 4.4.1.1", children: [] },
                                                    { label: "Item 4.4.1.2", children: [] },
                                                    { label: "Item 4.4.1.3", children: [] },
                                                    { label: "Item 4.4.1.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 4.4.2",
                                                children: [
                                                    { label: "Item 4.4.2.1", children: [] },
                                                    { label: "Item 4.4.2.2", children: [] },
                                                    { label: "Item 4.4.2.3", children: [] },
                                                    { label: "Item 4.4.2.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 4.4.3",
                                                children: [
                                                    { label: "Item 4.4.3.1", children: [] },
                                                    { label: "Item 4.4.3.2", children: [] },
                                                    { label: "Item 4.4.3.3", children: [] },
                                                    { label: "Item 4.4.3.4", children: [] },
                                                ],
                                            },
                                            {
                                                label: "Item 4.4.4",
                                                expanded: !0,
                                                children: [
                                                    { label: "Item 4.4.4.1", children: [] },
                                                    { label: "Item 4.4.4.2", children: [] },
                                                    { label: "Item 4.4.4.3", children: [] },
                                                    { label: "Item 4.4.4.4", children: [] },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ]),
                        e
                    );
                }
                return (
                    (function (e, l) {
                        if ("function" != typeof l && null !== l) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(l && l.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), l && b(e, l);
                    })(l, e),
                    (t = l),
                    (a = [
                        {
                            key: "render",
                            value: function () {
                                return (0, n.qy)(r || ((e = ['\n            <div class="md-layout">\n                <div class="md-layout__grid">\n                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">\n                        <md-tree .items="', '"></md-tree>\n                    </div>\n                </div>\n            </div>\n        ']), l || (l = e.slice(0)), (r = Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(l) } })))), this.items);
                                var e, l;
                            },
                        },
                    ]),
                    a && c(t.prototype, a),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    t
                );
                var t, a;
            })(t(548).$);
            customElements.define("demo-tree", h);
            const I = document.createElement("demo-tree");
        },
    },
]);
