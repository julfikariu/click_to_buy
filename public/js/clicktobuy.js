var WOW;
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, i, n, o) {
        return jQuery.easing[jQuery.easing.def](e, t, i, n, o)
    },
    easeInQuad: function(e, t, i, n, o) {
        return n * (t /= o) * t + i
    },
    easeOutQuad: function(e, t, i, n, o) {
        return -n * (t /= o) * (t - 2) + i
    },
    easeInOutQuad: function(e, t, i, n, o) {
        return (t /= o / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function(e, t, i, n, o) {
        return n * (t /= o) * t * t + i
    },
    easeOutCubic: function(e, t, i, n, o) {
        return n * ((t = t / o - 1) * t * t + 1) + i
    },
    easeInOutCubic: function(e, t, i, n, o) {
        return (t /= o / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function(e, t, i, n, o) {
        return n * (t /= o) * t * t * t + i
    },
    easeOutQuart: function(e, t, i, n, o) {
        return -n * ((t = t / o - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function(e, t, i, n, o) {
        return (t /= o / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function(e, t, i, n, o) {
        return n * (t /= o) * t * t * t * t + i
    },
    easeOutQuint: function(e, t, i, n, o) {
        return n * ((t = t / o - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function(e, t, i, n, o) {
        return (t /= o / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function(e, t, i, n, o) {
        return -n * Math.cos(t / o * (Math.PI / 2)) + n + i
    },
    easeOutSine: function(e, t, i, n, o) {
        return n * Math.sin(t / o * (Math.PI / 2)) + i
    },
    easeInOutSine: function(e, t, i, n, o) {
        return -n / 2 * (Math.cos(Math.PI * t / o) - 1) + i
    },
    easeInExpo: function(e, t, i, n, o) {
        return 0 == t ? i : n * Math.pow(2, 10 * (t / o - 1)) + i
    },
    easeOutExpo: function(e, t, i, n, o) {
        return t == o ? i + n : n * (1 - Math.pow(2, -10 * t / o)) + i
    },
    easeInOutExpo: function(e, t, i, n, o) {
        return 0 == t ? i : t == o ? i + n : (t /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --t)) + i
    },
    easeInCirc: function(e, t, i, n, o) {
        return -n * (Math.sqrt(1 - (t /= o) * t) - 1) + i
    },
    easeOutCirc: function(e, t, i, n, o) {
        return n * Math.sqrt(1 - (t = t / o - 1) * t) + i
    },
    easeInOutCirc: function(e, t, i, n, o) {
        return (t /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function(e, t, i, n, o) {
        var a = 1.70158,
            r = 0,
            s = n;
        if (0 == t) return i;
        if (1 == (t /= o)) return i + n;
        if (r || (r = .3 * o), s < Math.abs(n)) {
            s = n;
            a = r / 4
        } else a = r / (2 * Math.PI) * Math.asin(n / s);
        return -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - a) * (2 * Math.PI) / r) + i
    },
    easeOutElastic: function(e, t, i, n, o) {
        var a = 1.70158,
            r = 0,
            s = n;
        if (0 == t) return i;
        if (1 == (t /= o)) return i + n;
        if (r || (r = .3 * o), s < Math.abs(n)) {
            s = n;
            a = r / 4
        } else a = r / (2 * Math.PI) * Math.asin(n / s);
        return s * Math.pow(2, -10 * t) * Math.sin((t * o - a) * (2 * Math.PI) / r) + n + i
    },
    easeInOutElastic: function(e, t, i, n, o) {
        var a = 1.70158,
            r = 0,
            s = n;
        if (0 == t) return i;
        if (2 == (t /= o / 2)) return i + n;
        if (r || (r = o * (.3 * 1.5)), s < Math.abs(n)) {
            s = n;
            a = r / 4
        } else a = r / (2 * Math.PI) * Math.asin(n / s);
        return t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - a) * (2 * Math.PI) / r) * -.5 + i : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * o - a) * (2 * Math.PI) / r) * .5 + n + i
    },
    easeInBack: function(e, t, i, n, o, a) {
        return void 0 == a && (a = 1.70158), n * (t /= o) * t * ((a + 1) * t - a) + i
    },
    easeOutBack: function(e, t, i, n, o, a) {
        return void 0 == a && (a = 1.70158), n * ((t = t / o - 1) * t * ((a + 1) * t + a) + 1) + i
    },
    easeInOutBack: function(e, t, i, n, o, a) {
        return void 0 == a && (a = 1.70158), (t /= o / 2) < 1 ? n / 2 * (t * t * ((1 + (a *= 1.525)) * t - a)) + i : n / 2 * ((t -= 2) * t * ((1 + (a *= 1.525)) * t + a) + 2) + i
    },
    easeInBounce: function(e, t, i, n, o) {
        return n - jQuery.easing.easeOutBounce(e, o - t, 0, n, o) + i
    },
    easeOutBounce: function(e, t, i, n, o) {
        return (t /= o) < 1 / 2.75 ? n * (7.5625 * t * t) + i : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function(e, t, i, n, o) {
        return t < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - o, 0, n, o) + .5 * n + i
    }
}), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(e) {
    function t(e) {
        var t = e.length,
            n = i.type(e);
        return "function" !== n && !i.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    if (!e.jQuery) {
        var i = function(e, t) {
            return new i.fn.init(e, t)
        };
        i.isWindow = function(e) {
            return null != e && e == e.window
        }, i.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[r.call(e)] || "object" : typeof e
        }, i.isArray = Array.isArray || function(e) {
            return "array" === i.type(e)
        }, i.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return !1;
            try {
                if (e.constructor && !a.call(e, "constructor") && !a.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            for (t in e);
            return void 0 === t || a.call(e, t)
        }, i.each = function(e, i, n) {
            var o = 0,
                a = e.length,
                r = t(e);
            if (n) {
                if (r)
                    for (; a > o && !1 !== i.apply(e[o], n); o++);
                else
                    for (o in e)
                        if (!1 === i.apply(e[o], n)) break
            } else if (r)
                for (; a > o && !1 !== i.call(e[o], o, e[o]); o++);
            else
                for (o in e)
                    if (!1 === i.call(e[o], o, e[o])) break; return e
        }, i.data = function(e, t, o) {
            if (void 0 === o) {
                var a = (r = e[i.expando]) && n[r];
                if (void 0 === t) return a;
                if (a && t in a) return a[t]
            } else if (void 0 !== t) {
                var r = e[i.expando] || (e[i.expando] = ++i.uuid);
                return n[r] = n[r] || {}, n[r][t] = o, o
            }
        }, i.removeData = function(e, t) {
            var o = e[i.expando],
                a = o && n[o];
            a && i.each(t, function(e, t) {
                delete a[t]
            })
        }, i.extend = function() {
            var e, t, n, o, a, r, s = arguments[0] || {},
                l = 1,
                c = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== i.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)
                if (null != (a = arguments[l]))
                    for (o in a) e = s[o], s !== (n = a[o]) && (u && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1, r = e && i.isArray(e) ? e : []) : r = e && i.isPlainObject(e) ? e : {}, s[o] = i.extend(u, r, n)) : void 0 !== n && (s[o] = n));
            return s
        }, i.queue = function(e, n, o) {
            if (e) {
                n = (n || "fx") + "queue";
                var a = i.data(e, n);
                return o ? (!a || i.isArray(o) ? a = i.data(e, n, function(e, i) {
                    var n = i || [];
                    return null != e && (t(Object(e)) ? function(e, t) {
                        for (var i = +t.length, n = 0, o = e.length; i > n;) e[o++] = t[n++];
                        if (i != i)
                            for (; void 0 !== t[n];) e[o++] = t[n++];
                        e.length = o
                    }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
                }(o)) : a.push(o), a) : a || []
            }
        }, i.dequeue = function(e, t) {
            i.each(e.nodeType ? [e] : e, function(e, n) {
                t = t || "fx";
                var o = i.queue(n, t),
                    a = o.shift();
                "inprogress" === a && (a = o.shift()), a && ("fx" === t && o.unshift("inprogress"), a.call(n, function() {
                    i.dequeue(n, t)
                }))
            })
        }, i.fn = i.prototype = {
            init: function(e) {
                if (e.nodeType) return this[0] = e, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                    return e || document
                }
                var t = this[0],
                    e = e.apply(t),
                    n = this.offset(),
                    o = /^(?:body|html)$/i.test(e.nodeName) ? {
                        top: 0,
                        left: 0
                    } : i(e).offset();
                return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0, o.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: n.top - o.top,
                    left: n.left - o.left
                }
            }
        };
        var n = {};
        i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
        for (var o = {}, a = o.hasOwnProperty, r = o.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) o["[object " + s[l] + "]"] = s[l].toLowerCase();
        i.fn.init.prototype = i.fn, e.Velocity = {
            Utilities: i
        }
    }
}(window), function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, i, n) {
        function o(e) {
            return h.isWrapped(e) ? e = [].slice.call(e) : h.isNode(e) && (e = [e]), e
        }

        function a(e) {
            var t = u.data(e, "velocity");
            return null === t ? n : t
        }

        function r(e, i, n, o) {
            function a(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function r(e, t) {
                return 3 * t - 6 * e
            }

            function s(e) {
                return 3 * e
            }

            function l(e, t, i) {
                return ((a(t, i) * e + r(t, i)) * e + s(t)) * e
            }

            function c(e, t, i) {
                return 3 * a(t, i) * e * e + 2 * r(t, i) * e + s(t)
            }

            function u(t, i) {
                for (var o = 0; h > o; ++o) {
                    var a = c(i, e, n);
                    if (0 === a) return i;
                    i -= (l(i, e, n) - t) / a
                }
                return i
            }

            function d(t, i, o) {
                var a, r, s = 0;
                do {
                    (a = l(r = i + (o - i) / 2, e, n) - t) > 0 ? o = r : i = r
                } while (Math.abs(a) > m && ++s < v);
                return r
            }

            function p() {
                k = !0, (e != i || n != o) && function() {
                    for (var t = 0; g > t; ++t) x[t] = l(t * y, e, n)
                }()
            }
            var h = 4,
                f = .001,
                m = 1e-7,
                v = 10,
                g = 11,
                y = 1 / (g - 1),
                b = "Float32Array" in t;
            if (4 !== arguments.length) return !1;
            for (var w = 0; 4 > w; ++w)
                if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
            e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
            var x = b ? new Float32Array(g) : new Array(g),
                k = !1,
                S = function(t) {
                    return k || p(), e === i && n === o ? t : 0 === t ? 0 : 1 === t ? 1 : l(function(t) {
                        for (var i = 0, o = 1, a = g - 1; o != a && x[o] <= t; ++o) i += y;
                        var r = i + (t - x[--o]) / (x[o + 1] - x[o]) * y,
                            s = c(r, e, n);
                        return s >= f ? u(t, r) : 0 == s ? r : d(t, i, i + y)
                    }(t), i, o)
                };
            S.getControlPoints = function() {
                return [{
                    x: e,
                    y: i
                }, {
                    x: n,
                    y: o
                }]
            };
            var C = "generateBezier(" + [e, i, n, o] + ")";
            return S.toString = function() {
                return C
            }, S
        }

        function s(e, t) {
            var i = e;
            return h.isString(e) ? g.Easings[e] || (i = !1) : i = h.isArray(e) && 1 === e.length ? function(e) {
                return function(t) {
                    return Math.round(t * e) * (1 / e)
                }
            }.apply(null, e) : h.isArray(e) && 2 === e.length ? y.apply(null, e.concat([t])) : !(!h.isArray(e) || 4 !== e.length) && r.apply(null, e), !1 === i && (i = g.Easings[g.defaults.easing] ? g.defaults.easing : v), i
        }

        function l(e) {
            if (e) {
                var t = (new Date).getTime(),
                    i = g.State.calls.length;
                i > 1e4 && (g.State.calls = function(e) {
                    for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
                        var o = e[t];
                        o && n.push(o)
                    }
                    return n
                }(g.State.calls));
                for (var o = 0; i > o; o++)
                    if (g.State.calls[o]) {
                        var r = g.State.calls[o],
                            s = r[0],
                            d = r[2],
                            p = r[3],
                            f = !!p,
                            m = null;
                        p || (p = g.State.calls[o][3] = t - 16);
                        for (var v = Math.min((t - p) / d.duration, 1), y = 0, w = s.length; w > y; y++) {
                            var k = s[y],
                                S = k.element;
                            if (a(S)) {
                                var C = !1;
                                if (d.display !== n && null !== d.display && "none" !== d.display) {
                                    if ("flex" === d.display) {
                                        u.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(e, t) {
                                            b.setPropertyValue(S, "display", t)
                                        })
                                    }
                                    b.setPropertyValue(S, "display", d.display)
                                }
                                for (var T in d.visibility !== n && "hidden" !== d.visibility && b.setPropertyValue(S, "visibility", d.visibility), k)
                                    if ("element" !== T) {
                                        var O, M = k[T],
                                            P = h.isString(M.easing) ? g.Easings[M.easing] : M.easing;
                                        if (1 === v) O = M.endValue;
                                        else {
                                            var E = M.endValue - M.startValue;
                                            if (O = M.startValue + E * P(v, d, E), !f && O === M.currentValue) continue
                                        }
                                        if (M.currentValue = O, "tween" === T) m = O;
                                        else {
                                            if (b.Hooks.registered[T]) {
                                                var A = b.Hooks.getRoot(T),
                                                    $ = a(S).rootPropertyValueCache[A];
                                                $ && (M.rootPropertyValue = $)
                                            }
                                            var I = b.setPropertyValue(S, T, M.currentValue + (0 === parseFloat(O) ? "" : M.unitType), M.rootPropertyValue, M.scrollData);
                                            b.Hooks.registered[T] && (a(S).rootPropertyValueCache[A] = b.Normalizations.registered[A] ? b.Normalizations.registered[A]("extract", null, I[1]) : I[1]), "transform" === I[0] && (C = !0)
                                        }
                                    }
                                d.mobileHA && a(S).transformCache.translate3d === n && (a(S).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && b.flushTransformCache(S)
                            }
                        }
                        d.display !== n && "none" !== d.display && (g.State.calls[o][2].display = !1), d.visibility !== n && "hidden" !== d.visibility && (g.State.calls[o][2].visibility = !1), d.progress && d.progress.call(r[1], r[1], v, Math.max(0, p + d.duration - t), p, m), 1 === v && c(o)
                    }
            }
            g.State.isTicking && x(l)
        }

        function c(e, t) {
            if (!g.State.calls[e]) return !1;
            for (var i = g.State.calls[e][0], o = g.State.calls[e][1], r = g.State.calls[e][2], s = g.State.calls[e][4], l = !1, c = 0, d = i.length; d > c; c++) {
                var p = i[c].element;
                if (t || r.loop || ("none" === r.display && b.setPropertyValue(p, "display", r.display), "hidden" === r.visibility && b.setPropertyValue(p, "visibility", r.visibility)), !0 !== r.loop && (u.queue(p)[1] === n || !/\.velocityQueueEntryFlag/i.test(u.queue(p)[1])) && a(p)) {
                    a(p).isAnimating = !1, a(p).rootPropertyValueCache = {};
                    var h = !1;
                    u.each(b.Lists.transforms3D, function(e, t) {
                        var i = /^scale/.test(t) ? 1 : 0,
                            o = a(p).transformCache[t];
                        a(p).transformCache[t] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (h = !0, delete a(p).transformCache[t])
                    }), r.mobileHA && (h = !0, delete a(p).transformCache.translate3d), h && b.flushTransformCache(p), b.Values.removeClass(p, "velocity-animating")
                }
                if (!t && r.complete && !r.loop && c === d - 1) try {
                    r.complete.call(o, o)
                } catch (e) {
                    setTimeout(function() {
                        throw e
                    }, 1)
                }
                s && !0 !== r.loop && s(o), a(p) && !0 === r.loop && !t && (u.each(a(p).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), g(p, "reverse", {
                    loop: !0,
                    delay: r.delay
                })), !1 !== r.queue && u.dequeue(p, r.queue)
            }
            g.State.calls[e] = !1;
            for (var f = 0, m = g.State.calls.length; m > f; f++)
                if (!1 !== g.State.calls[f]) {
                    l = !0;
                    break
                }!1 === l && (g.State.isTicking = !1, delete g.State.calls, g.State.calls = [])
        }
        var u, d = function() {
                if (i.documentMode) return i.documentMode;
                for (var e = 7; e > 4; e--) {
                    var t = i.createElement("div");
                    if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                }
                return n
            }(),
            p = function() {
                var e = 0;
                return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                    var i, n = (new Date).getTime();
                    return i = Math.max(0, 16 - (n - e)), e = n + i, setTimeout(function() {
                        t(n + i)
                    }, i)
                }
            }(),
            h = {
                isString: function(e) {
                    return "string" == typeof e
                },
                isArray: Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isFunction: function(e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                },
                isNode: function(e) {
                    return e && e.nodeType
                },
                isNodeList: function(e) {
                    return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                },
                isWrapped: function(e) {
                    return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                },
                isSVG: function(e) {
                    return t.SVGElement && e instanceof t.SVGElement
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                }
            },
            f = !1;
        if (e.fn && e.fn.jquery ? (u = e, f = !0) : u = t.Velocity.Utilities, 8 >= d && !f) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (!(7 >= d)) {
            var m = 400,
                v = "swing",
                g = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: t.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: i.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: u,
                    Redirects: {},
                    Easings: {},
                    Promise: t.Promise,
                    defaults: {
                        queue: "",
                        duration: m,
                        easing: v,
                        begin: n,
                        complete: n,
                        progress: n,
                        display: n,
                        visibility: n,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function(e) {
                        u.data(e, "velocity", {
                            isSVG: h.isSVG(e),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 2,
                        patch: 2
                    },
                    debug: !1
                };
            t.pageYOffset !== n ? (g.State.scrollAnchor = t, g.State.scrollPropertyLeft = "pageXOffset", g.State.scrollPropertyTop = "pageYOffset") : (g.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, g.State.scrollPropertyLeft = "scrollLeft", g.State.scrollPropertyTop = "scrollTop");
            var y = function() {
                function e(e) {
                    return -e.tension * e.x - e.friction * e.v
                }

                function t(t, i, n) {
                    var o = {
                        x: t.x + n.dx * i,
                        v: t.v + n.dv * i,
                        tension: t.tension,
                        friction: t.friction
                    };
                    return {
                        dx: o.v,
                        dv: e(o)
                    }
                }

                function i(i, n) {
                    var o = {
                            dx: i.v,
                            dv: e(i)
                        },
                        a = t(i, .5 * n, o),
                        r = t(i, .5 * n, a),
                        s = t(i, n, r),
                        l = 1 / 6 * (o.dx + 2 * (a.dx + r.dx) + s.dx),
                        c = 1 / 6 * (o.dv + 2 * (a.dv + r.dv) + s.dv);
                    return i.x = i.x + l * n, i.v = i.v + c * n, i
                }
                return function e(t, n, o) {
                    var a, r, s, l = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        c = [0],
                        u = 0;
                    for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, o = o || null, l.tension = t, l.friction = n, (a = null !== o) ? r = (u = e(t, n)) / o * .016 : r = .016; s = i(s || l, r), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
                    return a ? function(e) {
                        return c[e * (c.length - 1) | 0]
                    } : u
                }
            }();
            g.Easings = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                spring: function(e) {
                    return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                }
            }, u.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(e, t) {
                g.Easings[t[0]] = r.apply(null, t[1])
            });
            var b = g.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var e = 0; e < b.Lists.colors.length; e++) {
                            var t = "color" === b.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                            b.Hooks.templates[b.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                        }
                        var i, n, o;
                        if (d)
                            for (i in b.Hooks.templates) {
                                o = (n = b.Hooks.templates[i])[0].split(" ");
                                var a = n[1].match(b.RegEx.valueSplit);
                                "Color" === o[0] && (o.push(o.shift()), a.push(a.shift()), b.Hooks.templates[i] = [o.join(" "), a.join(" ")])
                            }
                        for (i in b.Hooks.templates)
                            for (var e in o = (n = b.Hooks.templates[i])[0].split(" ")) {
                                var r = i + o[e],
                                    s = e;
                                b.Hooks.registered[r] = [i, s]
                            }
                    },
                    getRoot: function(e) {
                        var t = b.Hooks.registered[e];
                        return t ? t[0] : e
                    },
                    cleanRootPropertyValue: function(e, t) {
                        return b.RegEx.valueUnwrap.test(t) && (t = t.match(b.RegEx.valueUnwrap)[1]), b.Values.isCSSNullValue(t) && (t = b.Hooks.templates[e][1]), t
                    },
                    extractValue: function(e, t) {
                        var i = b.Hooks.registered[e];
                        if (i) {
                            var n = i[0],
                                o = i[1];
                            return (t = b.Hooks.cleanRootPropertyValue(n, t)).toString().match(b.RegEx.valueSplit)[o]
                        }
                        return t
                    },
                    injectValue: function(e, t, i) {
                        var n = b.Hooks.registered[e];
                        if (n) {
                            var o, a = n[0],
                                r = n[1];
                            return (o = (i = b.Hooks.cleanRootPropertyValue(a, i)).toString().match(b.RegEx.valueSplit))[r] = t, o.join(" ")
                        }
                        return i
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(e, t, i) {
                            switch (e) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var n;
                                    return b.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : n = (n = i.toString().match(b.RegEx.valueUnwrap)) ? n[1].replace(/,(\s+)?/g, " ") : i, n;
                                case "inject":
                                    return "rect(" + i + ")"
                            }
                        },
                        blur: function(e, t, i) {
                            switch (e) {
                                case "name":
                                    return g.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var n = parseFloat(i);
                                    if (!n && 0 !== n) {
                                        var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        n = o ? o[1] : 0
                                    }
                                    return n;
                                case "inject":
                                    return parseFloat(i) ? "blur(" + i + ")" : "none"
                            }
                        },
                        opacity: function(e, t, i) {
                            if (8 >= d) switch (e) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return n ? n[1] / 100 : 1;
                                case "inject":
                                    return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                            } else switch (e) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                case "inject":
                                    return i
                            }
                        }
                    },
                    register: function() {
                        9 >= d || g.State.isGingerbread || (b.Lists.transformsBase = b.Lists.transformsBase.concat(b.Lists.transforms3D));
                        for (var e = 0; e < b.Lists.transformsBase.length; e++) ! function() {
                            var t = b.Lists.transformsBase[e];
                            b.Normalizations.registered[t] = function(e, i, o) {
                                switch (e) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return a(i) === n || a(i).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : a(i).transformCache[t].replace(/[()]/g, "");
                                    case "inject":
                                        var r = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                            case "translate":
                                                r = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                break;
                                            case "scal":
                                            case "scale":
                                                g.State.isAndroid && a(i).transformCache[t] === n && 1 > o && (o = 1), r = !/(\d)$/i.test(o);
                                                break;
                                            case "skew":
                                                r = !/(deg|\d)$/i.test(o);
                                                break;
                                            case "rotate":
                                                r = !/(deg|\d)$/i.test(o)
                                        }
                                        return r || (a(i).transformCache[t] = "(" + o + ")"), a(i).transformCache[t]
                                }
                            }
                        }();
                        for (e = 0; e < b.Lists.colors.length; e++) ! function() {
                            var t = b.Lists.colors[e];
                            b.Normalizations.registered[t] = function(e, i, o) {
                                switch (e) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        var a;
                                        if (b.RegEx.wrappedValueAlreadyExtracted.test(o)) a = o;
                                        else {
                                            var r, s = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(o) ? r = s[o] !== n ? s[o] : s.black : b.RegEx.isHex.test(o) ? r = "rgb(" + b.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (r = s.black), a = (r || o).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= d || 3 !== a.split(" ").length || (a += " 1"), a;
                                    case "inject":
                                        return 8 >= d ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                },
                Names: {
                    camelCase: function(e) {
                        return e.replace(/-(\w)/g, function(e, t) {
                            return t.toUpperCase()
                        })
                    },
                    SVGAttribute: function(e) {
                        var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (d || g.State.isAndroid && !g.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                    },
                    prefixCheck: function(e) {
                        if (g.State.prefixMatches[e]) return [g.State.prefixMatches[e], !0];
                        for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; n > i; i++) {
                            var o;
                            if (o = 0 === i ? e : t[i] + e.replace(/^\w/, function(e) {
                                return e.toUpperCase()
                            }), h.isString(g.State.prefixElement.style[o])) return g.State.prefixMatches[e] = o, [o, !0]
                        }
                        return [e, !1]
                    }
                },
                Values: {
                    hexToRgb: function(e) {
                        var t;
                        return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, i, n) {
                            return t + t + i + i + n + n
                        }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(e) {
                        return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                    },
                    getUnitType: function(e) {
                        return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                    },
                    getDisplayType: function(e) {
                        var t = e && e.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                    },
                    addClass: function(e, t) {
                        e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                    },
                    removeClass: function(e, t) {
                        e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function(e, i, o, r) {
                    function s(e, i) {
                        function o() {
                            p && b.setPropertyValue(e, "display", "none")
                        }
                        var l = 0;
                        if (8 >= d) l = u.css(e, i);
                        else {
                            var c, p = !1;
                            if (/^(width|height)$/.test(i) && 0 === b.getPropertyValue(e, "display") && (p = !0, b.setPropertyValue(e, "display", b.Values.getDisplayType(e))), !r) {
                                if ("height" === i && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var h = e.offsetHeight - (parseFloat(b.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingBottom")) || 0);
                                    return o(), h
                                }
                                if ("width" === i && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                    var f = e.offsetWidth - (parseFloat(b.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingRight")) || 0);
                                    return o(), f
                                }
                            }
                            c = a(e) === n ? t.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === i && (i = "borderTopColor"), ("" === (l = 9 === d && "filter" === i ? c.getPropertyValue(i) : c[i]) || null === l) && (l = e.style[i]), o()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                            var m = s(e, "position");
                            ("fixed" === m || "absolute" === m && /top|left/i.test(i)) && (l = u(e).position()[i] + "px")
                        }
                        return l
                    }
                    var l;
                    if (b.Hooks.registered[i]) {
                        var c = i,
                            p = b.Hooks.getRoot(c);
                        o === n && (o = b.getPropertyValue(e, b.Names.prefixCheck(p)[0])), b.Normalizations.registered[p] && (o = b.Normalizations.registered[p]("extract", e, o)), l = b.Hooks.extractValue(c, o)
                    } else if (b.Normalizations.registered[i]) {
                        var h, f;
                        "transform" !== (h = b.Normalizations.registered[i]("name", e)) && (f = s(e, b.Names.prefixCheck(h)[0]), b.Values.isCSSNullValue(f) && b.Hooks.templates[i] && (f = b.Hooks.templates[i][1])), l = b.Normalizations.registered[i]("extract", e, f)
                    }
                    if (!/^[\d-]/.test(l))
                        if (a(e) && a(e).isSVG && b.Names.SVGAttribute(i))
                            if (/^(height|width)$/i.test(i)) try {
                                l = e.getBBox()[i]
                            } catch (e) {
                                l = 0
                            } else l = e.getAttribute(i);
                        else l = s(e, b.Names.prefixCheck(i)[0]);
                    return b.Values.isCSSNullValue(l) && (l = 0), g.debug >= 2 && console.log("Get " + i + ": " + l), l
                },
                setPropertyValue: function(e, i, n, o, r) {
                    var s = i;
                    if ("scroll" === i) r.container ? r.container["scroll" + r.direction] = n : "Left" === r.direction ? t.scrollTo(n, r.alternateValue) : t.scrollTo(r.alternateValue, n);
                    else if (b.Normalizations.registered[i] && "transform" === b.Normalizations.registered[i]("name", e)) b.Normalizations.registered[i]("inject", e, n), s = "transform", n = a(e).transformCache[i];
                    else {
                        if (b.Hooks.registered[i]) {
                            var l = i,
                                c = b.Hooks.getRoot(i);
                            o = o || b.getPropertyValue(e, c), n = b.Hooks.injectValue(l, n, o), i = c
                        }
                        if (b.Normalizations.registered[i] && (n = b.Normalizations.registered[i]("inject", e, n), i = b.Normalizations.registered[i]("name", e)), s = b.Names.prefixCheck(i)[0], 8 >= d) try {
                            e.style[s] = n
                        } catch (e) {
                            g.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                        } else a(e) && a(e).isSVG && b.Names.SVGAttribute(i) ? e.setAttribute(i, n) : e.style[s] = n;
                        g.debug >= 2 && console.log("Set " + i + " (" + s + "): " + n)
                    }
                    return [s, n]
                },
                flushTransformCache: function(e) {
                    function t(t) {
                        return parseFloat(b.getPropertyValue(e, t))
                    }
                    var i = "";
                    if ((d || g.State.isAndroid && !g.State.isChrome) && a(e).isSVG) {
                        var n = {
                            translate: [t("translateX"), t("translateY")],
                            skewX: [t("skewX")],
                            skewY: [t("skewY")],
                            scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                            rotate: [t("rotateZ"), 0, 0]
                        };
                        u.each(a(e).transformCache, function(e) {
                            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (i += e + "(" + n[e].join(" ") + ") ", delete n[e])
                        })
                    } else {
                        var o, r;
                        u.each(a(e).transformCache, function(t) {
                            return o = a(e).transformCache[t], "transformPerspective" === t ? (r = o, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void(i += t + o + " "))
                        }), r && (i = "perspective" + r + " " + i)
                    }
                    b.setPropertyValue(e, "transform", i)
                }
            };
            b.Hooks.register(), b.Normalizations.register(), g.hook = function(e, t, i) {
                var r = n;
                return e = o(e), u.each(e, function(e, o) {
                    if (a(o) === n && g.init(o), i === n) r === n && (r = g.CSS.getPropertyValue(o, t));
                    else {
                        var s = g.CSS.setPropertyValue(o, t, i);
                        "transform" === s[0] && g.CSS.flushTransformCache(o), r = s
                    }
                }), r
            };
            var w = function() {
                function e() {
                    return d ? M.promise || null : p
                }

                function r() {
                    function e(e) {
                        function p(e, t) {
                            var i = n,
                                o = n,
                                a = n;
                            return h.isArray(e) ? (i = e[0], !h.isArray(e[1]) && /^[\d-]/.test(e[1]) || h.isFunction(e[1]) || b.RegEx.isHex.test(e[1]) ? a = e[1] : (h.isString(e[1]) && !b.RegEx.isHex.test(e[1]) || h.isArray(e[1])) && (o = t ? e[1] : s(e[1], c.duration), e[2] !== n && (a = e[2]))) : i = e, t || (o = o || c.easing), h.isFunction(i) && (i = i.call(r, C, S)), h.isFunction(a) && (a = a.call(r, C, S)), [i || 0, o, a]
                        }

                        function f(e, t) {
                            var i, n;
                            return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                return i = e, ""
                            }), i || (i = b.Values.getUnitType(e)), [n, i]
                        }

                        function m() {
                            var e = {
                                    myParent: r.parentNode || i.body,
                                    position: b.getPropertyValue(r, "position"),
                                    fontSize: b.getPropertyValue(r, "fontSize")
                                },
                                n = e.position === D.lastPosition && e.myParent === D.lastParent,
                                o = e.fontSize === D.lastFontSize;
                            D.lastParent = e.myParent, D.lastPosition = e.position, D.lastFontSize = e.fontSize;
                            var s = 100,
                                l = {};
                            if (o && n) l.emToPx = D.lastEmToPx, l.percentToPxWidth = D.lastPercentToPxWidth, l.percentToPxHeight = D.lastPercentToPxHeight;
                            else {
                                var c = a(r).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                g.init(c), e.myParent.appendChild(c), u.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                    g.CSS.setPropertyValue(c, t, "hidden")
                                }), g.CSS.setPropertyValue(c, "position", e.position), g.CSS.setPropertyValue(c, "fontSize", e.fontSize), g.CSS.setPropertyValue(c, "boxSizing", "content-box"), u.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                    g.CSS.setPropertyValue(c, t, s + "%")
                                }), g.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = D.lastPercentToPxWidth = (parseFloat(b.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = D.lastPercentToPxHeight = (parseFloat(b.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = D.lastEmToPx = (parseFloat(b.getPropertyValue(c, "paddingLeft")) || 1) / s, e.myParent.removeChild(c)
                            }
                            return null === D.remToPx && (D.remToPx = parseFloat(b.getPropertyValue(i.body, "fontSize")) || 16), null === D.vwToPx && (D.vwToPx = parseFloat(t.innerWidth) / 100, D.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = D.remToPx, l.vwToPx = D.vwToPx, l.vhToPx = D.vhToPx, g.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), r), l
                        }
                        if (c.begin && 0 === C) try {
                            c.begin.call(v, v)
                        } catch (e) {
                            setTimeout(function() {
                                throw e
                            }, 1)
                        }
                        if ("scroll" === O) {
                            var w, k, T, P = /^x$/i.test(c.axis) ? "Left" : "Top",
                                E = parseFloat(c.offset) || 0;
                            c.container ? h.isWrapped(c.container) || h.isNode(c.container) ? (c.container = c.container[0] || c.container, T = (w = c.container["scroll" + P]) + u(r).position()[P.toLowerCase()] + E) : c.container = null : (w = g.State.scrollAnchor[g.State["scrollProperty" + P]], k = g.State.scrollAnchor[g.State["scrollProperty" + ("Left" === P ? "Top" : "Left")]], T = u(r).offset()[P.toLowerCase()] + E), d = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: w,
                                    currentValue: w,
                                    endValue: T,
                                    unitType: "",
                                    easing: c.easing,
                                    scrollData: {
                                        container: c.container,
                                        direction: P,
                                        alternateValue: k
                                    }
                                },
                                element: r
                            }, g.debug && console.log("tweensContainer (scroll): ", d.scroll, r)
                        } else if ("reverse" === O) {
                            if (!a(r).tweensContainer) return void u.dequeue(r, c.queue);
                            "none" === a(r).opts.display && (a(r).opts.display = "auto"), "hidden" === a(r).opts.visibility && (a(r).opts.visibility = "visible"), a(r).opts.loop = !1, a(r).opts.begin = null, a(r).opts.complete = null, x.easing || delete c.easing, x.duration || delete c.duration, c = u.extend({}, a(r).opts, c);
                            var A = u.extend(!0, {}, a(r).tweensContainer);
                            for (var $ in A)
                                if ("element" !== $) {
                                    var I = A[$].startValue;
                                    A[$].startValue = A[$].currentValue = A[$].endValue, A[$].endValue = I, h.isEmptyObject(x) || (A[$].easing = c.easing), g.debug && console.log("reverse tweensContainer (" + $ + "): " + JSON.stringify(A[$]), r)
                                }
                            d = A
                        } else if ("start" === O) {
                            for (var _ in a(r).tweensContainer && !0 === a(r).isAnimating && (A = a(r).tweensContainer), u.each(y, function(e, t) {
                                if (RegExp("^" + b.Lists.colors.join("$|^") + "$").test(e)) {
                                    var i = p(t, !0),
                                        o = i[0],
                                        a = i[1],
                                        r = i[2];
                                    if (b.RegEx.isHex.test(o)) {
                                        for (var s = ["Red", "Green", "Blue"], l = b.Values.hexToRgb(o), c = r ? b.Values.hexToRgb(r) : n, u = 0; u < s.length; u++) {
                                            var d = [l[u]];
                                            a && d.push(a), c !== n && d.push(c[u]), y[e + s[u]] = d
                                        }
                                        delete y[e]
                                    }
                                }
                            }), y) {
                                var R = p(y[_]),
                                    W = R[0],
                                    V = R[1],
                                    H = R[2];
                                _ = b.Names.camelCase(_);
                                var F = b.Hooks.getRoot(_),
                                    Y = !1;
                                if (a(r).isSVG || "tween" === F || !1 !== b.Names.prefixCheck(F)[1] || b.Normalizations.registered[F] !== n) {
                                    (c.display !== n && null !== c.display && "none" !== c.display || c.visibility !== n && "hidden" !== c.visibility) && /opacity|filter/.test(_) && !H && 0 !== W && (H = 0), c._cacheValues && A && A[_] ? (H === n && (H = A[_].endValue + A[_].unitType), Y = a(r).rootPropertyValueCache[F]) : b.Hooks.registered[_] ? H === n ? (Y = b.getPropertyValue(r, F), H = b.getPropertyValue(r, _, Y)) : Y = b.Hooks.templates[F][1] : H === n && (H = b.getPropertyValue(r, _));
                                    var X, N, j, z = !1;
                                    if (H = (X = f(_, H))[0], j = X[1], W = (X = f(_, W))[0].replace(/^([+-\/*])=/, function(e, t) {
                                        return z = t, ""
                                    }), N = X[1], H = parseFloat(H) || 0, W = parseFloat(W) || 0, "%" === N && (/^(fontSize|lineHeight)$/.test(_) ? (W /= 100, N = "em") : /^scale/.test(_) ? (W /= 100, N = "") : /(Red|Green|Blue)$/i.test(_) && (W = W / 100 * 255, N = "")), /[\/*]/.test(z)) N = j;
                                    else if (j !== N && 0 !== H)
                                        if (0 === W) N = j;
                                        else {
                                            o = o || m();
                                            var B = /margin|padding|left|right|width|text|word|letter/i.test(_) || /X$/.test(_) || "x" === _ ? "x" : "y";
                                            switch (j) {
                                                case "%":
                                                    H *= "x" === B ? o.percentToPxWidth : o.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    H *= o[j + "ToPx"]
                                            }
                                            switch (N) {
                                                case "%":
                                                    H *= 1 / ("x" === B ? o.percentToPxWidth : o.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    H *= 1 / o[N + "ToPx"]
                                            }
                                        }
                                    switch (z) {
                                        case "+":
                                            W = H + W;
                                            break;
                                        case "-":
                                            W = H - W;
                                            break;
                                        case "*":
                                            W *= H;
                                            break;
                                        case "/":
                                            W = H / W
                                    }
                                    d[_] = {
                                        rootPropertyValue: Y,
                                        startValue: H,
                                        currentValue: H,
                                        endValue: W,
                                        unitType: N,
                                        easing: V
                                    }, g.debug && console.log("tweensContainer (" + _ + "): " + JSON.stringify(d[_]), r)
                                } else g.debug && console.log("Skipping [" + F + "] due to a lack of browser support.")
                            }
                            d.element = r
                        }
                        d.element && (b.Values.addClass(r, "velocity-animating"), L.push(d), "" === c.queue && (a(r).tweensContainer = d, a(r).opts = c), a(r).isAnimating = !0, C === S - 1 ? (g.State.calls.push([L, v, c, null, M.resolver]), !1 === g.State.isTicking && (g.State.isTicking = !0, l())) : C++)
                    }
                    var o, r = this,
                        c = u.extend({}, g.defaults, x),
                        d = {};
                    switch (a(r) === n && g.init(r), parseFloat(c.delay) && !1 !== c.queue && u.queue(r, c.queue, function(e) {
                        g.velocityQueueEntryFlag = !0, a(r).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(c.delay)),
                            next: e
                        }
                    }), c.duration.toString().toLowerCase()) {
                        case "fast":
                            c.duration = 200;
                            break;
                        case "normal":
                            c.duration = m;
                            break;
                        case "slow":
                            c.duration = 600;
                            break;
                        default:
                            c.duration = parseFloat(c.duration) || 1
                    }!1 !== g.mock && (!0 === g.mock ? c.duration = c.delay = 1 : (c.duration *= parseFloat(g.mock) || 1, c.delay *= parseFloat(g.mock) || 1)), c.easing = s(c.easing, c.duration), c.begin && !h.isFunction(c.begin) && (c.begin = null), c.progress && !h.isFunction(c.progress) && (c.progress = null), c.complete && !h.isFunction(c.complete) && (c.complete = null), c.display !== n && null !== c.display && (c.display = c.display.toString().toLowerCase(), "auto" === c.display && (c.display = g.CSS.Values.getDisplayType(r))), c.visibility !== n && null !== c.visibility && (c.visibility = c.visibility.toString().toLowerCase()), c.mobileHA = c.mobileHA && g.State.isMobile && !g.State.isGingerbread, !1 === c.queue ? c.delay ? setTimeout(e, c.delay) : e() : u.queue(r, c.queue, function(t, i) {
                        return !0 === i ? (M.promise && M.resolver(v), !0) : (g.velocityQueueEntryFlag = !0, void e())
                    }), "" !== c.queue && "fx" !== c.queue || "inprogress" === u.queue(r)[0] || u.dequeue(r)
                }
                var d, p, f, v, y, x, k = arguments[0] && (arguments[0].p || u.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || h.isString(arguments[0].properties));
                if (h.isWrapped(this) ? (d = !1, f = 0, v = this, p = this) : (d = !0, f = 1, v = k ? arguments[0].elements || arguments[0].e : arguments[0]), v = o(v)) {
                    k ? (y = arguments[0].properties || arguments[0].p, x = arguments[0].options || arguments[0].o) : (y = arguments[f], x = arguments[f + 1]);
                    var S = v.length,
                        C = 0;
                    if (!/^(stop|finish)$/i.test(y) && !u.isPlainObject(x)) {
                        x = {};
                        for (var T = f + 1; T < arguments.length; T++) h.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? h.isString(arguments[T]) || h.isArray(arguments[T]) ? x.easing = arguments[T] : h.isFunction(arguments[T]) && (x.complete = arguments[T]) : x.duration = arguments[T]
                    }
                    var O, M = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    switch (d && g.Promise && (M.promise = new g.Promise(function(e, t) {
                        M.resolver = e, M.rejecter = t
                    })), y) {
                        case "scroll":
                            O = "scroll";
                            break;
                        case "reverse":
                            O = "reverse";
                            break;
                        case "finish":
                        case "stop":
                            u.each(v, function(e, t) {
                                a(t) && a(t).delayTimer && (clearTimeout(a(t).delayTimer.setTimeout), a(t).delayTimer.next && a(t).delayTimer.next(), delete a(t).delayTimer)
                            });
                            var P = [];
                            return u.each(g.State.calls, function(e, t) {
                                t && u.each(t[1], function(i, o) {
                                    var r = x === n ? "" : x;
                                    return !0 !== r && t[2].queue !== r && (x !== n || !1 !== t[2].queue) || void u.each(v, function(i, n) {
                                        n === o && ((!0 === x || h.isString(x)) && (u.each(u.queue(n, h.isString(x) ? x : ""), function(e, t) {
                                            h.isFunction(t) && t(null, !0)
                                        }), u.queue(n, h.isString(x) ? x : "", [])), "stop" === y ? (a(n) && a(n).tweensContainer && !1 !== r && u.each(a(n).tweensContainer, function(e, t) {
                                            t.endValue = t.currentValue
                                        }), P.push(e)) : "finish" === y && (t[2].duration = 1))
                                    })
                                })
                            }), "stop" === y && (u.each(P, function(e, t) {
                                c(t, !0)
                            }), M.promise && M.resolver(v)), e();
                        default:
                            if (!u.isPlainObject(y) || h.isEmptyObject(y)) {
                                if (h.isString(y) && g.Redirects[y]) {
                                    var E = (_ = u.extend({}, x)).duration,
                                        A = _.delay || 0;
                                    return !0 === _.backwards && (v = u.extend(!0, [], v).reverse()), u.each(v, function(e, t) {
                                        parseFloat(_.stagger) ? _.delay = A + parseFloat(_.stagger) * e : h.isFunction(_.stagger) && (_.delay = A + _.stagger.call(t, e, S)), _.drag && (_.duration = parseFloat(E) || (/^(callout|transition)/.test(y) ? 1e3 : m), _.duration = Math.max(_.duration * (_.backwards ? 1 - e / S : (e + 1) / S), .75 * _.duration, 200)), g.Redirects[y].call(t, t, _ || {}, e, S, v, M.promise ? M : n)
                                    }), e()
                                }
                                var $ = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return M.promise ? M.rejecter(new Error($)) : console.log($), e()
                            }
                            O = "start"
                    }
                    var I, _, D = {
                            lastParent: null,
                            lastPosition: null,
                            lastFontSize: null,
                            lastPercentToPxWidth: null,
                            lastPercentToPxHeight: null,
                            lastEmToPx: null,
                            remToPx: null,
                            vwToPx: null,
                            vhToPx: null
                        },
                        L = [];
                    if (u.each(v, function(e, t) {
                        h.isNode(t) && r.call(t)
                    }), (_ = u.extend({}, g.defaults, x)).loop = parseInt(_.loop), I = 2 * _.loop - 1, _.loop)
                        for (var R = 0; I > R; R++) {
                            var W = {
                                delay: _.delay,
                                progress: _.progress
                            };
                            R === I - 1 && (W.display = _.display, W.visibility = _.visibility, W.complete = _.complete), w(v, "reverse", W)
                        }
                    return e()
                }
            };
            (g = u.extend(w, g)).animate = w;
            var x = t.requestAnimationFrame || p;
            return g.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() {
                i.hidden ? (x = function(e) {
                    return setTimeout(function() {
                        e(!0)
                    }, 16)
                }, l()) : x = t.requestAnimationFrame || p
            }), e.Velocity = g, e !== t && (e.fn.velocity = w, e.fn.velocity.defaults = g.defaults), u.each(["Down", "Up"], function(e, t) {
                g.Redirects["slide" + t] = function(e, i, o, a, r, s) {
                    var l = u.extend({}, i),
                        c = l.begin,
                        d = l.complete,
                        p = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        h = {};
                    l.display === n && (l.display = "Down" === t ? "inline" === g.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                        for (var i in c && c.call(r, r), p) {
                            h[i] = e.style[i];
                            var n = g.CSS.getPropertyValue(e, i);
                            p[i] = "Down" === t ? [n, 0] : [0, n]
                        }
                        h.overflow = e.style.overflow, e.style.overflow = "hidden"
                    }, l.complete = function() {
                        for (var t in h) e.style[t] = h[t];
                        d && d.call(r, r), s && s.resolver(r)
                    }, g(e, p, l)
                }
            }), u.each(["In", "Out"], function(e, t) {
                g.Redirects["fade" + t] = function(e, i, o, a, r, s) {
                    var l = u.extend({}, i),
                        c = {
                            opacity: "In" === t ? 1 : 0
                        },
                        d = l.complete;
                    l.complete = o !== a - 1 ? l.begin = null : function() {
                        d && d.call(r, r), s && s.resolver(r)
                    }, l.display === n && (l.display = "In" === t ? "auto" : "none"), g(this, c, l)
                }
            }), g
        }
        jQuery.fn.velocity = jQuery.fn.animate
    }(window.jQuery || window.Zepto || window, window, document)
})),
    function(e) {
        WOW = function() {
            return {
                init: function() {
                    var t = [],
                        i = 1;

                    function n() {
                        var i = window.innerHeight,
                            n = window.scrollY;
                        e(".wow").each(function() {
                            if ("visible" != e(this).css("visibility") && (i + n - 100 > o(this) && n < o(this) || i + n - 100 > o(this) + e(this).height() && n < o(this) + e(this).height() || i + n == e(document).height() && o(this) + 100 > e(document).height())) {
                                var a = e(this).index(".wow"),
                                    r = e(this).attr("data-wow-delay");
                                if (r) {
                                    r = e(this).attr("data-wow-delay").slice(0, -1);
                                    var s = this;
                                    parseFloat(r);
                                    e(s).addClass("animated"), e(s).css({
                                        visibility: "visible"
                                    }), e(s).css({
                                        "animation-delay": r
                                    }), e(s).css({
                                        "animation-name": t[a]
                                    });
                                    var l = 1e3 * e(this).css("animation-duration").slice(0, -1);
                                    e(this).attr("data-wow-delay") && (l += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                                    s = this;
                                    setTimeout(function() {
                                        e(s).removeClass("animated")
                                    }, l)
                                } else {
                                    e(this).addClass("animated"), e(this).css({
                                        visibility: "visible"
                                    }), e(this).css({
                                        "animation-name": t[a]
                                    });
                                    l = 1e3 * e(this).css("animation-duration").slice(0, -1), s = this;
                                    setTimeout(function() {
                                        e(s).removeClass("animated")
                                    }, l)
                                }
                            }
                        })
                    }

                    function o(e) {
                        var t = e.getBoundingClientRect(),
                            i = document.body,
                            n = document.documentElement,
                            o = window.pageYOffset || n.scrollTop || i.scrollTop,
                            a = n.clientTop || i.clientTop || 0,
                            r = t.top + o - a;
                        return Math.round(r)
                    }
                    e(".wow").each(function() {
                        e(this).css({
                            visibility: "hidden"
                        }), t[e(this).index(".wow")] = e(this).css("animation-name"), e(this).css({
                            "animation-name": "none"
                        })
                    }), e(window).scroll(function() {
                        var t, a;
                        i ? (t = window.innerHeight, a = window.scrollY, e(".wow.animated").each(function() {
                            if (t + a - 100 > o(this) && a > o(this) + 100 || t + a - 100 < o(this) && a < o(this) + 100 || o(this) + e(this).height > e(document).height() - 100) e(this).removeClass("animated"), e(this).css({
                                "animation-name": "none"
                            }), e(this).css({
                                visibility: "hidden"
                            });
                            else {
                                var i = 1e3 * e(this).css("animation-duration").slice(0, -1);
                                e(this).attr("data-wow-delay") && (i += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                                var n = this;
                                setTimeout(function() {
                                    e(n).removeClass("animated")
                                }, i)
                            }
                        }), n(), i--) : n()
                    }), e(".wow").each(function() {
                        var i = e(this).index(".wow"),
                            n = e(this).attr("data-wow-delay");
                        n ? (n = e(this).attr("data-wow-delay").slice(0, -1), parseFloat(n), e(this).addClass("animated"), e(this).css({
                            visibility: "visible"
                        }), e(this).css({
                            "animation-delay": n + "s"
                        }), e(this).css({
                            "animation-name": t[i]
                        })) : (e(this).addClass("animated"), e(this).css({
                            visibility: "visible"
                        }), e(this).css({
                            "animation-name": t[i]
                        }))
                    })
                }
            }
        }
    }(jQuery),
    function(e) {
        e(window).on("scroll", function() {
            var t = e(".navbar");
            t.length && (t.offset().top > 50 ? e(".scrolling-navbar").addClass("top-nav-collapse") : e(".scrolling-navbar").removeClass("top-nav-collapse"))
        })
    }(jQuery),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function() {
            return e.Waves = t.call(e), e.Waves
        }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
    }("object" == typeof global ? global : this, function() {
        "use strict";
        var e = e || {},
            t = document.querySelectorAll.bind(document),
            i = Object.prototype.toString,
            n = "ontouchstart" in window;

        function o(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }

        function a(e) {
            var n, a = i.call(e);
            return "[object String]" === a ? t(e) : o(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(a) && e.hasOwnProperty("length") ? e : o(n = e) && n.nodeType > 0 ? [e] : []
        }

        function r(e) {
            var t, i, n = {
                    top: 0,
                    left: 0
                },
                o = e && e.ownerDocument;
            return t = o.documentElement, void 0 !== e.getBoundingClientRect && (n = e.getBoundingClientRect()), i = function(e) {
                return null !== (t = e) && t === t.window ? e : 9 === e.nodeType && e.defaultView;
                var t
            }(o), {
                top: n.top + i.pageYOffset - t.clientTop,
                left: n.left + i.pageXOffset - t.clientLeft
            }
        }

        function s(e) {
            var t = "";
            for (var i in e) e.hasOwnProperty(i) && (t += i + ":" + e[i] + ";");
            return t
        }
        var l = {
                duration: 750,
                delay: 200,
                show: function(e, t, i) {
                    if (2 === e.button) return !1;
                    t = t || this;
                    var n = document.createElement("div");
                    n.className = "waves-ripple waves-rippling", t.appendChild(n);
                    var o = r(t),
                        a = 0,
                        c = 0;
                    "touches" in e && e.touches.length ? (a = e.touches[0].pageY - o.top, c = e.touches[0].pageX - o.left) : (a = e.pageY - o.top, c = e.pageX - o.left), c = c >= 0 ? c : 0, a = a >= 0 ? a : 0;
                    var u = "scale(" + t.clientWidth / 100 * 3 + ")",
                        d = "translate(0,0)";
                    i && (d = "translate(" + i.x + "px, " + i.y + "px)"), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-x", c), n.setAttribute("data-y", a), n.setAttribute("data-scale", u), n.setAttribute("data-translate", d);
                    var p = {
                        top: a + "px",
                        left: c + "px"
                    };
                    n.classList.add("waves-notransition"), n.setAttribute("style", s(p)), n.classList.remove("waves-notransition"), p["-webkit-transform"] = u + " " + d, p["-moz-transform"] = u + " " + d, p["-ms-transform"] = u + " " + d, p["-o-transform"] = u + " " + d, p.transform = u + " " + d, p.opacity = "1";
                    var h = "mousemove" === e.type ? 2500 : l.duration;
                    p["-webkit-transition-duration"] = h + "ms", p["-moz-transition-duration"] = h + "ms", p["-o-transition-duration"] = h + "ms", p["transition-duration"] = h + "ms", n.setAttribute("style", s(p))
                },
                hide: function(e, t) {
                    for (var i = (t = t || this).getElementsByClassName("waves-rippling"), o = 0, a = i.length; o < a; o++) u(e, t, i[o]);
                    n && (t.removeEventListener("touchend", l.hide), t.removeEventListener("touchcancel", l.hide)), t.removeEventListener("mouseup", l.hide), t.removeEventListener("mouseleave", l.hide)
                }
            },
            c = {
                input: function(e) {
                    var t = e.parentNode;
                    if ("span" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var i = document.createElement("span");
                        i.className = "waves-input-wrapper", t.replaceChild(i, e), i.appendChild(e)
                    }
                },
                img: function(e) {
                    var t = e.parentNode;
                    if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var i = document.createElement("i");
                        t.replaceChild(i, e), i.appendChild(e)
                    }
                }
            };

        function u(e, t, i) {
            if (i) {
                i.classList.remove("waves-rippling");
                var n = i.getAttribute("data-x"),
                    o = i.getAttribute("data-y"),
                    a = i.getAttribute("data-scale"),
                    r = i.getAttribute("data-translate"),
                    c = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
                c < 0 && (c = 0), "mousemove" === e.type && (c = 150);
                var u = "mousemove" === e.type ? 2500 : l.duration;
                setTimeout(function() {
                    var e = {
                        top: o + "px",
                        left: n + "px",
                        opacity: "0",
                        "-webkit-transition-duration": u + "ms",
                        "-moz-transition-duration": u + "ms",
                        "-o-transition-duration": u + "ms",
                        "transition-duration": u + "ms",
                        "-webkit-transform": a + " " + r,
                        "-moz-transform": a + " " + r,
                        "-ms-transform": a + " " + r,
                        "-o-transform": a + " " + r,
                        transform: a + " " + r
                    };
                    i.setAttribute("style", s(e)), setTimeout(function() {
                        try {
                            t.removeChild(i)
                        } catch (e) {
                            return !1
                        }
                    }, u)
                }, c)
            }
        }
        var d = {
            touches: 0,
            allowEvent: function(e) {
                var t = !0;
                return /^(mousedown|mousemove)$/.test(e.type) && d.touches && (t = !1), t
            },
            registerEvent: function(e) {
                var t = e.type;
                "touchstart" === t ? d.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function() {
                    d.touches && (d.touches -= 1)
                }, 500)
            }
        };

        function p(e) {
            var t = function(e) {
                if (!1 === d.allowEvent(e)) return null;
                for (var t = null, i = e.target || e.srcElement; i.parentElement;) {
                    if (!(i instanceof SVGElement) && i.classList.contains("waves-effect")) {
                        t = i;
                        break
                    }
                    i = i.parentElement
                }
                return t
            }(e);
            if (null !== t) {
                if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled")) return;
                if (d.registerEvent(e), "touchstart" === e.type && l.delay) {
                    var i = !1,
                        o = setTimeout(function() {
                            o = null, l.show(e, t)
                        }, l.delay),
                        a = function(n) {
                            o && (clearTimeout(o), o = null, l.show(e, t)), i || (i = !0, l.hide(n, t)), s()
                        },
                        r = function(e) {
                            o && (clearTimeout(o), o = null), a(e), s()
                        };
                    t.addEventListener("touchmove", r, !1), t.addEventListener("touchend", a, !1), t.addEventListener("touchcancel", a, !1);
                    var s = function() {
                        t.removeEventListener("touchmove", r), t.removeEventListener("touchend", a), t.removeEventListener("touchcancel", a)
                    }
                } else l.show(e, t), n && (t.addEventListener("touchend", l.hide, !1), t.addEventListener("touchcancel", l.hide, !1)), t.addEventListener("mouseup", l.hide, !1), t.addEventListener("mouseleave", l.hide, !1)
            }
        }
        return e.init = function(e) {
            var t = document.body;
            "duration" in (e = e || {}) && (l.duration = e.duration), "delay" in e && (l.delay = e.delay), n && (t.addEventListener("touchstart", p, !1), t.addEventListener("touchcancel", d.registerEvent, !1), t.addEventListener("touchend", d.registerEvent, !1)), t.addEventListener("mousedown", p, !1)
        }, e.attach = function(e, t) {
            var n, o;
            e = a(e), "[object Array]" === i.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
            for (var r = 0, s = e.length; r < s; r++) o = (n = e[r]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (c[o](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + t)
        }, e.ripple = function(e, t) {
            var i = (e = a(e)).length;
            if ((t = t || {}).wait = t.wait || 0, t.position = t.position || null, i)
                for (var n, o, s, c = {}, u = 0, d = {
                    type: "mousedown",
                    button: 1
                }, p = function(e, t) {
                    return function() {
                        l.hide(e, t)
                    }
                }; u < i; u++)
                    if (n = e[u], o = t.position || {
                        x: n.clientWidth / 2,
                        y: n.clientHeight / 2
                    }, s = r(n), c.x = s.left + o.x, c.y = s.top + o.y, d.pageX = c.x, d.pageY = c.y, l.show(d, n), t.wait >= 0 && null !== t.wait) {
                        setTimeout(p({
                            type: "mouseup",
                            button: 1
                        }, n), t.wait)
                    }
        }, e.calm = function(e) {
            for (var t = {
                type: "mouseup",
                button: 1
            }, i = 0, n = (e = a(e)).length; i < n; i++) l.hide(t, e[i])
        }, e.displayEffect = function(t) {
            console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), e.init(t)
        }, e
    }), Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".chip", ["waves-effect"]), Waves.attach(".view a .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init();
var _this = void 0;
! function(e) {
    var t, i, n = "".concat(["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function(e) {
            return "input[type=".concat(e, "]")
        }).join(", "), ", textarea"),
        o = function(e) {
            var t = e.siblings("label, i"),
                i = e.val().length,
                n = e.attr("placeholder");
            t["".concat(i || n ? "add" : "remove", "Class")]("active")
        },
        a = function(e) {
            if (e.hasClass("validate")) {
                var t = e.val(),
                    i = !t.length,
                    n = !e[0].validity.badInput;
                if (i && n) e.removeClass("valid").removeClass("invalid");
                else {
                    var o = e.is(":valid"),
                        a = Number(e.attr("length")) || 0;
                    o && (!a || a > t.length) ? e.removeClass("invalid").addClass("valid") : e.removeClass("valid").addClass("invalid")
                }
            }
        },
        r = function() {
            var t = e(_this);
            if (t.val().length) {
                var i = e(".hiddendiv"),
                    n = t.css("font-family"),
                    o = t.css("font-size");
                o && i.css("font-size", o), n && i.css("font-family", n), "off" === t.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text("".concat(t.val(), "\n"));
                var a = i.html().replace(/\n/g, "<br>");
                i.html(a), i.css("width", t.is(":visible") ? t.width() : e(window).width() / 2), t.css("height", i.height())
            }
        };
    e(n).each(function(t, i) {
        var n = e(i),
            a = n.siblings("label, i");
        o(n), i.validity.badInput && a.addClass("active")
    }), e(document).on("focus", n, function(t) {
        e(t.target).siblings("label, i").addClass("active")
    }), e(document).on("blur", n, function(t) {
        var i = e(t.target),
            n = !i.val(),
            o = !t.target.validity.badInput,
            r = void 0 === i.attr("placeholder");
        n && o && r && i.siblings("label, i").removeClass("active"), a(i)
    }), e(document).on("change", n, function(t) {
        var i = e(t.target);
        o(i), a(i)
    }), e("input[autofocus]").siblings("label, i").addClass("active"), e(document).on("reset", function(t) {
        var i = e(t.target);
        i.is("form") && (i.find(n).removeClass("valid").removeClass("invalid").each(function(t, i) {
            var n = e(i),
                o = !n.val(),
                a = !n.attr("placeholder");
            o && a && n.siblings("label, i").removeClass("active")
        }), i.find("select.initialized").each(function(t, i) {
            var n = e(i),
                o = n.siblings("input.select-dropdown"),
                a = n.children("[selected]").val();
            n.val(a), o.val(a)
        }))
    }), (i = e(".md-textarea-auto")).length && (t = window.attachEvent ? function(e, t, i) {
        e.attachEvent("on".concat(t), i)
    } : function(e, t, i) {
        e.addEventListener(t, i, !1)
    }, i.each(function() {
        var e = this;

        function i() {
            e.style.height = "auto", e.style.height = "".concat(e.scrollHeight, "px")
        }

        function n() {
            window.setTimeout(i, 0)
        }
        t(e, "change", i), t(e, "cut", n), t(e, "paste", n), t(e, "drop", n), t(e, "keydown", n), i()
    }));
    var s = e("body");
    if (!e(".hiddendiv").first().length) {
        var l = e('<div class="hiddendiv common"></div>');
        s.append(l)
    }
    e(".materialize-textarea").each(r), s.on("keyup keydown", ".materialize-textarea", r)
}(jQuery),
    function(e) {
        e(document).on("click.card", ".card", function(t) {
            if (e(this).find(".card-reveal").length) {
                var i = e(t.target),
                    n = i.is(".card-reveal .card-title"),
                    o = i.is(".card-reveal .card-title i"),
                    a = i.is(".card .activator"),
                    r = i.is(".card .activator i");
                n || o ? e(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function() {
                        e(this).css({
                            display: "none"
                        })
                    }
                }) : (a || r) && e(this).find(".card-reveal").css({
                    display: "block"
                }).velocity("stop", !1).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                })
            }
        }), e(".rotate-btn").on("click", function() {
            var t = e(this).attr("data-card");
            e("#".concat(t)).toggleClass("flipped")
        }), e(window).on("load", function() {
            var t = e(".front").outerHeight(),
                i = e(".back").outerHeight();
            t > i ? e(".card-wrapper, .back").height(t) : t > i ? e(".card-wrapper, .front").height(i) : e(".card-wrapper").height(i)
        }), e(".card-share > a").on("click", function(t) {
            t.preventDefault(), e(this).toggleClass("share-expanded").parent().find("div").toggleClass("social-reveal-active")
        })
    }(jQuery), $(".map-card").click(function() {
    $(".card-body").toggleClass("closed")
});
var SMOOTH_SCROLL_DURATION = 700;
$(".smooth-scroll").on("click", "a", function() {
    var e = $(this).attr("href");
    if (void 0 !== e && 0 === e.indexOf("#")) {
        var t = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0,
            i = $(this).parentsUntil(".smooth-scroll").last().parent().attr("data-allow-hashes");
        return $("body,html").animate({
            scrollTop: $(e).offset().top - t
        }, SMOOTH_SCROLL_DURATION), void 0 !== i && !1 !== i && history.replaceState(null, null, e), !1
    }
}),
    function(e) {
        e.fn.scrollTo = function(t) {
            return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
        }, e.fn.dropdown = function(t) {
            this.each(function() {
                var i = e(this),
                    n = e.extend({}, e.fn.dropdown.defaults, t),
                    o = !1,
                    a = e("#".concat(i.attr("data-activates")));

                function r() {
                    void 0 !== i.data("induration") && (n.inDuration = i.data("inDuration")), void 0 !== i.data("outduration") && (n.outDuration = i.data("outDuration")), void 0 !== i.data("constrainwidth") && (n.constrain_width = i.data("constrainwidth")), void 0 !== i.data("hover") && (n.hover = i.data("hover")), void 0 !== i.data("gutter") && (n.gutter = i.data("gutter")), void 0 !== i.data("beloworigin") && (n.belowOrigin = i.data("beloworigin")), void 0 !== i.data("alignment") && (n.alignment = i.data("alignment"))
                }

                function s(t) {
                    "focus" === t && (o = !0), r(), a.addClass("active"), i.addClass("active"), !0 === n.constrain_width ? a.css("width", i.outerWidth()) : a.css("white-space", "nowrap");
                    var s = window.innerHeight,
                        l = i.innerHeight(),
                        c = i.offset().left,
                        u = i.offset().top - e(window).scrollTop(),
                        d = n.alignment,
                        p = 0,
                        h = 0,
                        f = 0;
                    !0 === n.belowOrigin && (f = l);
                    var m = 0,
                        v = i.parent();
                    if (!v.is("body") && v[0].scrollHeight > v[0].clientHeight && (m = v[0].scrollTop), c + a.innerWidth() > e(window).width() ? d = "right" : c - a.innerWidth() + i.innerWidth() < 0 && (d = "left"), u + a.innerHeight() > s)
                        if (u + l - a.innerHeight() < 0) {
                            var g = s - u - f;
                            a.css("max-height", g)
                        } else f || (f += l), f -= a.innerHeight();
                    if ("left" === d) p = n.gutter, h = i.position().left + p;
                    else if ("right" === d) {
                        h = i.position().left + i.outerWidth() - a.outerWidth() + (p = -n.gutter)
                    }
                    a.css({
                        position: "absolute",
                        top: i.position().top + f + m,
                        left: h
                    }), a.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: n.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1,
                        scrollTop: 0
                    }, {
                        queue: !1,
                        duration: n.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function l() {
                    o = !1, a.fadeOut(n.outDuration), a.removeClass("active"), i.removeClass("active"), setTimeout(function() {
                        a.css("max-height", "")
                    }, n.outDuration)
                }
                if (r(), i.after(a), n.hover) {
                    var c = !1;
                    i.unbind("click.".concat(i.attr("id"))), i.on("mouseenter", function() {
                        !1 === c && (s(), c = !0)
                    }), i.on("mouseleave", function(t) {
                        var i = t.toElement || t.relatedTarget;
                        e(i).closest(".dropdown-content").is(a) || (a.stop(!0, !0), l(), c = !1)
                    }), a.on("mouseleave", function(t) {
                        var n = t.toElement || t.relatedTarget;
                        e(n).closest(".dropdown-button").is(i) || (a.stop(!0, !0), l(), c = !1)
                    })
                } else i.unbind("click.".concat(i.attr("id"))), i.bind("click.".concat(i.attr("id")), function(t) {
                    o || (i[0] !== t.currentTarget || i.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? i.hasClass("active") && (l(), e(document).unbind("click.".concat(a.attr("id"), " touchstart.").concat(a.attr("id")))) : (t.preventDefault(), s("click")), a.hasClass("active") && e(document).bind("click.".concat(a.attr("id"), " touchstart.").concat(a.attr("id")), function(t) {
                        a.is(t.target) || i.is(t.target) || i.find(t.target).length || (l(), e(document).unbind("click.".concat(a.attr("id"), " touchstart.").concat(a.attr("id"))))
                    }))
                });
                i.on("open", function(e, t) {
                    s(t)
                }), i.on("close", l)
            })
        }, e.fn.dropdown.defaults = {
            inDuration: 300,
            outDuration: 225,
            constrain_width: !0,
            hover: !1,
            gutter: 0,
            belowOrigin: !1,
            alignment: "left"
        }, e(".dropdown-button").dropdown(), e.fn.mdbDropSearch = function(t) {
            var i = e(this).find("input");
            this.filter(function(t, n) {
                e(n).on("keyup", function() {
                    for (var e = i.closest("div[id]").find("a, li"), t = 0; t < e.length; t++) e.eq(t).html().toUpperCase().indexOf(i.val().toUpperCase()) > -1 ? e.eq(t).css({
                        display: ""
                    }) : e.eq(t).css({
                        display: "none"
                    })
                })
            });
            var n = e.extend({
                color: "#000",
                backgroundColor: "",
                fontSize: ".9rem",
                fontWeight: "400",
                borderRadius: "",
                borderColor: ""
            }, t);
            return this.css({
                color: n.color,
                backgroundColor: n.backgroundColor,
                fontSize: n.fontSize,
                fontWeight: n.fontWeight,
                borderRadius: n.borderRadius,
                border: n.border,
                margin: n.margin
            })
        }
    }(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");

function dropdownEffectData(e) {
    var t = "fadeIn",
        i = "fadeOut",
        n = $(e),
        o = $(".dropdown-menu", e),
        a = n.parents("ul.nav");
    return a.height > 0 && (t = a.data("dropdown-in") || null, i = a.data("dropdown-out") || null), {
        target: e,
        dropdown: n,
        dropdownMenu: o,
        effectIn: o.data("dropdown-in") || t,
        effectOut: o.data("dropdown-out") || i
    }
}

function dropdownEffectStart(e, t) {
    t && (e.dropdown.addClass("dropdown-animating"), e.dropdownMenu.addClass(["animated", t].join(" ")))
}

function dropdownEffectEnd(e, t) {
    e.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
        e.dropdown.removeClass("dropdown-animating"), e.dropdownMenu.removeClass(["animated", e.effectIn, e.effectOut].join(" ")), "function" == typeof t && t()
    })
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}
dropdownSelectors.on({
    "show.bs.dropdown": function() {
        var e = dropdownEffectData(this);
        dropdownEffectStart(e, e.effectIn)
    },
    "shown.bs.dropdown": function() {
        var e = dropdownEffectData(this);
        e.effectIn && e.effectOut && dropdownEffectEnd(e)
    },
    "hide.bs.dropdown": function(e) {
        var t = dropdownEffectData(this);
        t.effectOut && (e.preventDefault(), dropdownEffectStart(t, t.effectOut), dropdownEffectEnd(t, function() {
            t.dropdown.removeClass("show"), t.dropdownMenu.removeClass("show")
        }))
    }
}),
    function(e) {
        var t = this;
        e(document).ready(function() {
            e(document).on("mouseenter", ".fixed-action-btn", function() {
                var t = e(this);
                i(t)
            }), e(document).on("mouseleave", ".fixed-action-btn", function() {
                var t = e(this);
                n(t)
            }), e(document).on("click", ".fixed-action-btn > a", function() {
                var t = e(this).parent();
                t.hasClass("active") ? i(t) : n(t), t.hasClass("active") ? n(t) : i(t)
            })
        }), e.fn.extend({
            openFAB: function() {
                i(e(this))
            },
            closeFAB: function() {
                n(e(this))
            }
        });
        var i = function(e) {
                var t = e;
                t.hasClass("active") || (t.addClass("active"), document.querySelectorAll("ul .btn-floating").forEach(function(e) {
                    e.classList.add("shown")
                }))
            },
            n = function(e) {
                e.removeClass("active"), document.querySelectorAll("ul .btn-floating").forEach(function(e) {
                    e.classList.remove("shown")
                })
            };
        e(".fixed-action-btn:not(.smooth-scroll) > .btn-floating").on("click", function(o) {
            if (!e(t).hasClass("smooth-scroll")) return o.preventDefault(), a = e(".fixed-action-btn"), (r = a).hasClass("active") ? n(r) : i(r), !1;
            var a, r
        })
    }(jQuery),
    function(e) {
        var t = 240,
            i = 1440,
            n = 300,
            o = 200,
            a = 50,
            r = 200,
            s = "easeOutQuad",
            l = "easeOutCubic",
            c = !0,
            u = !1,
            d = function() {
                function d(p, h) {
                    _classCallCheck(this, d), this.defaults = {
                        menuWidth: t,
                        edge: "left",
                        closeOnClick: !1,
                        breakpoint: i,
                        timeDurationOpen: n,
                        timeDurationClose: o,
                        timeDurationOverlayOpen: a,
                        timeDurationOverlayClose: r,
                        easingOpen: s,
                        easingClose: l,
                        showOverlay: c,
                        showCloseButton: u
                    }, this.$element = p, this.$elementCloned = p.clone().css({
                        display: "inline-block",
                        lineHeight: "24px"
                    }), this.options = this.assignOptions(h), this.menuOut = !1, this.lastTouchVelocity = {
                        x: {
                            startPosition: 0,
                            startTime: 0,
                            endPosition: 0,
                            endTime: 0
                        }
                    }, this.$body = e("body"), this.$menu = e("#".concat(this.$element.attr("data-activates"))), this.$sidenavOverlay = e("#sidenav-overlay"), this.$dragTarget = e('<div class="drag-target"></div>'), this.$body.append(this.$dragTarget), this.init()
                }
                return _createClass(d, [{
                    key: "init",
                    value: function() {
                        this.setMenuWidth(), this.setMenuTranslation(), this.closeOnClick(), this.openOnClick(), this.bindTouchEvents(), this.showCloseButton()
                    }
                }, {
                    key: "bindTouchEvents",
                    value: function() {
                        var e = this;
                        this.$dragTarget.on("click", function() {
                            e.removeMenu()
                        }), this.$elementCloned.on("click", function() {
                            e.removeMenu()
                        }), this.$dragTarget.on("touchstart", function(t) {
                            e.lastTouchVelocity.x.startPosition = t.touches[0].clientX, e.lastTouchVelocity.x.startTime = Date.now()
                        }), this.$dragTarget.on("touchmove", this.touchmoveEventHandler.bind(this)), this.$dragTarget.on("touchend", this.touchendEventHandler.bind(this))
                    }
                }, {
                    key: "touchmoveEventHandler",
                    value: function(e) {
                        if ("touchmove" === e.type) {
                            var t = e.touches[0],
                                i = t.clientX;
                            Date.now() - this.lastTouchVelocity.x.startTime > 20 && (this.lastTouchVelocity.x.startPosition = t.clientX, this.lastTouchVelocity.x.startTime = Date.now()), this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (i > this.options.menuWidth ? i = this.options.menuWidth : i < 0 && (i = 0)), this.translateSidenavX(i), this.updateOverlayOpacity(i)
                        }
                    }
                }, {
                    key: "panEventHandler",
                    value: function(e) {
                        if ("touch" === e.gesture.pointerType) {
                            var t = e.gesture.center.x;
                            this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (t > this.options.menuWidth ? t = this.options.menuWidth : t < 0 && (t = 0)), this.translateSidenavX(t), this.updateOverlayOpacity(t)
                        }
                    }
                }, {
                    key: "translateSidenavX",
                    value: function(e) {
                        if ("left" === this.options.edge) {
                            var t = e >= this.options.menuWidth / 2;
                            this.menuOut = t, this.$menu.css("transform", "translateX(".concat(e - this.options.menuWidth, "px)"))
                        } else {
                            var i = e < window.innerWidth - this.options.menuWidth / 2;
                            this.menuOut = i;
                            var n = e - this.options.menuWidth / 2;
                            n < 0 && (n = 0), this.$menu.css("transform", "translateX(".concat(n, "px)"))
                        }
                    }
                }, {
                    key: "updateOverlayOpacity",
                    value: function(e) {
                        var t;
                        t = "left" === this.options.edge ? e / this.options.menuWidth : Math.abs((e - window.innerWidth) / this.options.menuWidth), this.$sidenavOverlay.velocity({
                            opacity: t
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: this.options.easingOpen
                        })
                    }
                }, {
                    key: "buildSidenavOverlay",
                    value: function() {
                        var t = this;
                        !0 === this.options.showOverlay && (this.$sidenavOverlay = e('<div id="sidenav-overlay"></div>'), this.$sidenavOverlay.css("opacity", 0).on("click", function() {
                            t.removeMenu()
                        }), this.$body.append(this.$sidenavOverlay))
                    }
                }, {
                    key: "disableScrolling",
                    value: function() {
                        var e = this.$body.innerWidth();
                        this.$body.css("overflow", "hidden"), this.$body.width(e)
                    }
                }, {
                    key: "touchendEventHandler",
                    value: function(e) {
                        if ("touchend" === e.type) {
                            var t = e.changedTouches[0];
                            this.lastTouchVelocity.x.endTime = Date.now(), this.lastTouchVelocity.x.endPosition = t.clientX;
                            var i = this.calculateTouchVelocityX(),
                                n = t.clientX,
                                o = n - this.options.menuWidth,
                                a = n - this.options.menuWidth / 2;
                            o > 0 && (o = 0), a < 0 && (a = 0), "left" === this.options.edge ? (this.menuOut && i <= .3 || i < -.5 ? (0 !== o && this.translateMenuX([0, o], "300"), this.showSidenavOverlay()) : (!this.menuOut || i > .3) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.menuWidth - 10, o], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : this.menuOut && i >= -.3 || i > .5 ? (this.translateMenuX([0, a], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!this.menuOut || i < -.3) && (this.enableScrolling(), this.translateMenuX([this.options.menuWidth + 10, a], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }
                }, {
                    key: "calculateTouchVelocityX",
                    value: function() {
                        return Math.abs(this.lastTouchVelocity.x.endPosition - this.lastTouchVelocity.x.startPosition) / Math.abs(this.lastTouchVelocity.x.endTime - this.lastTouchVelocity.x.startTime)
                    }
                }, {
                    key: "panendEventHandler",
                    value: function(e) {
                        if ("touch" === e.gesture.pointerType) {
                            var t = e.gesture.velocityX,
                                i = e.gesture.center.x,
                                n = i - this.options.menuWidth,
                                o = i - this.options.menuWidth / 2;
                            n > 0 && (n = 0), o < 0 && (o = 0), "left" === this.options.edge ? (this.menuOut && t <= .3 || t < -.5 ? (0 !== n && this.translateMenuX([0, n], "300"), this.showSidenavOverlay()) : (!this.menuOut || t > .3) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.menuWidth - 10, n], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : this.menuOut && t >= -.3 || t > .5 ? (this.translateMenuX([0, o], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!this.menuOut || t < -.3) && (this.enableScrolling(), this.translateMenuX([this.options.menuWidth + 10, o], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }
                }, {
                    key: "translateMenuX",
                    value: function(e, t) {
                        this.$menu.velocity({
                            translateX: e
                        }, {
                            duration: "string" == typeof t ? Number(t) : t,
                            queue: !1,
                            easing: this.options.easingOpen
                        })
                    }
                }, {
                    key: "hideSidenavOverlay",
                    value: function() {
                        this.$sidenavOverlay.velocity({
                            opacity: 0
                        }, {
                            duration: this.options.timeDurationOverlayClose,
                            queue: !1,
                            easing: this.options.easingOpen,
                            complete: function() {
                                e(this).remove()
                            }
                        }), this.$sidenavOverlay = e()
                    }
                }, {
                    key: "showSidenavOverlay",
                    value: function() {
                        this.$sidenavOverlay.velocity({
                            opacity: 1
                        }, {
                            duration: this.options.timeDurationOverlayOpen,
                            queue: !1,
                            easing: this.options.easingOpen
                        })
                    }
                }, {
                    key: "enableScrolling",
                    value: function() {
                        this.$body.css({
                            overflow: "",
                            width: ""
                        })
                    }
                }, {
                    key: "openOnClick",
                    value: function() {
                        var t = this;
                        this.$element.on("click", function(i) {
                            if (i.preventDefault(), !0 === t.menuOut) t.menuOut = !1, t.removeMenu();
                            else {
                                t.menuOut = !0, !0 === t.options.showOverlay ? (t.$sidenavOverlay = e('<div id="sidenav-overlay"></div>'), t.$body.append(t.$sidenavOverlay)) : t.showCloseButton();
                                var n = [];
                                n = "left" === t.options.edge ? [0, -1 * t.options.MENU_WIDTH] : [0, t.options.MENU_WIDTH], t.$menu.velocity({
                                    translateX: n
                                }, {
                                    duration: t.options.timeDurationOpen,
                                    queue: !1,
                                    easing: t.options.easingOpen
                                }), t.$sidenavOverlay.on("click", function() {
                                    t.removeMenu()
                                })
                            }
                        })
                    }
                }, {
                    key: "closeOnClick",
                    value: function() {
                        var e = this;
                        !0 === this.options.closeOnClick && this.$menu.on("click", "a:not(.collapsible-header)", function() {
                            e.removeMenu()
                        })
                    }
                }, {
                    key: "showCloseButton",
                    value: function() {
                        !0 === this.options.showCloseButton && (this.$menu.prepend(this.$elementCloned), this.$menu.find(".logo-wrapper").css({
                            borderTop: "1px solid rgba(153,153,153,.3)"
                        }))
                    }
                }, {
                    key: "setMenuTranslation",
                    value: function() {
                        var t = this;
                        "left" === this.options.edge ? (this.$menu.css("transform", "translateX(-100%)"), this.$dragTarget.css({
                            left: 0
                        })) : (this.$menu.addClass("right-aligned").css("transform", "translateX(100%)"), this.$dragTarget.css({
                            right: 0
                        })), this.$menu.hasClass("fixed") && (window.innerWidth > this.options.breakpoint && this.$menu.css("transform", "translateX(0)"), e(window).resize(function() {
                            if (window.innerWidth > t.options.breakpoint) t.$sidenavOverlay.length ? t.removeMenu(!0) : t.$menu.css("transform", "translateX(0%)");
                            else if (!1 === t.menuOut) {
                                var e = "left" === t.options.edge ? "-100" : "100";
                                t.$menu.css("transform", "translateX(".concat(e, "%)"))
                            }
                        }))
                    }
                }, {
                    key: "setMenuWidth",
                    value: function() {
                        var i = e("#".concat(this.$menu.attr("id"))).find("> .sidenav-bg");
                        this.options.menuWidth !== t && (this.$menu.css("width", this.options.menuWidth), i.css("width", this.options.menuWidth))
                    }
                }, {
                    key: "assignOptions",
                    value: function(t) {
                        return e.extend({}, this.defaults, t)
                    }
                }, {
                    key: "removeMenu",
                    value: function(e) {
                        var t = this;
                        this.$body.css({
                            overflow: "",
                            width: ""
                        }), this.$menu.velocity({
                            translateX: "left" === this.options.edge ? "-100%" : "100%"
                        }, {
                            duration: this.options.timeDurationClose,
                            queue: !1,
                            easing: this.options.easingClose,
                            complete: function() {
                                !0 === e && (t.$menu.removeAttr("style"), t.$menu.css("width", t.options.menuWidth))
                            }
                        }), this.hideSidenavOverlay()
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.trigger("click")
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.trigger("click")
                    }
                }]), d
            }();
        e.fn.sideNav = function(t) {
            return this.each(function() {
                new d(e(this), t)
            })
        }
    }(jQuery), $(function() {
    $("#toggle").click(function() {
        $("#slide-out").hasClass("slim") ? ($("#slide-out").removeClass("slim"), $(".sv-slim-icon").removeClass("fa-angle-double-right").addClass("fa-angle-double-left")) : ($("#slide-out").addClass("slim"), $(".sv-slim-icon").removeClass("fa-angle-double-left").addClass("fa-angle-double-right"))
    })
}),
    function(e) {
        e.fn.collapsible = function(t) {
            var i = {
                accordion: void 0
            };

            function n(t, i) {
                $panelHeaders = t.find("> li > .collapsible-header"), i.hasClass("active") ? i.parent().addClass("active") : i.parent().removeClass("active"), i.parent().hasClass("active") ? i.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : i.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }), $panelHeaders.not(i).removeClass("active").parent().removeClass("active"), $panelHeaders.not(i).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                })
            }

            function o(t) {
                t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                })
            }

            function a(e) {
                return r(e).length > 0
            }

            function r(e) {
                return e.closest("li > .collapsible-header")
            }
            return t = e.extend(i, t), this.each(function() {
                var i = e(this),
                    s = e(this).find("> li > .collapsible-header"),
                    l = i.data("collapsible");
                i.off("click.collapse", ".collapsible-header"), s.off("click.collapse"), t.accordion || "accordion" === l || void 0 === l ? ((s = i.find("> li > .collapsible-header")).on("click.collapse", function(t) {
                    var o = e(t.target);
                    a(o) && (o = r(o)), o.toggleClass("active"), n(i, o)
                }), n(i, s.filter(".active").first())) : s.each(function() {
                    e(this).on("click.collapse", function(t) {
                        var i = e(t.target);
                        a(i) && (i = r(i)), i.toggleClass("active"), o(i)
                    }), e(this).hasClass("active") && o(e(this))
                })
            })
        }, e(".collapsible").collapsible()
    }(jQuery),
    function(e) {
        var t, i = function() {
            function t(i, n) {
                _classCallCheck(this, t), this.options = n, this.$nativeSelect = i, this.isMultiple = Boolean(this.$nativeSelect.attr("multiple")), this.isSearchable = Boolean(this.$nativeSelect.attr("searchable")), this.isRequired = Boolean(this.$nativeSelect.attr("required")), this.uuid = this._randomUUID(), this.$selectWrapper = e('<div class="select-wrapper"></div>'), this.$materialOptionsList = e('<ul id="select-options-'.concat(this.uuid, '" class="dropdown-content select-dropdown w-100 ').concat(this.isMultiple ? "multiple-select-dropdown" : "", '"></ul>')), this.$materialSelectInitialOption = i.find("option:selected").html() || i.find("option:first").html() || "", this.$nativeSelectChildren = this.$nativeSelect.children("option, optgroup"), this.$materialSelect = e('<input type="text" class="select-dropdown" readonly="true" '.concat(this.$nativeSelect.is(":disabled") ? "disabled" : "", ' data-activates="select-options-').concat(this.uuid, '" value=""/>')), this.$dropdownIcon = e('<span class="caret">&#9660;</span>'), this.$searchInput = null, this.$toggleAll = e('<li class="select-toggle-all"><span><input type="checkbox" class="form-check-input"><label>Select all</label></span></li>'), this.valuesSelected = [], this.keyCodes = {
                    tab: 9,
                    esc: 27,
                    enter: 13,
                    arrowUp: 38,
                    arrowDown: 40
                }, t.mutationObservers = []
            }
            return _createClass(t, [{
                key: "init",
                value: function() {
                    if (Boolean(this.$nativeSelect.data("select-id")) && this._removeMaterialWrapper(), "destroy" !== this.options) {
                        this.$nativeSelect.data("select-id", this.uuid), this.$selectWrapper.addClass(this.$nativeSelect.attr("class"));
                        var e = this.$materialSelectInitialOption.replace(/"/g, "&quot;");
                        this.$materialSelect.val(e), this.renderMaterialSelect(), this.bindEvents(), this.isRequired && this.enableValidation()
                    } else this.$nativeSelect.data("select-id", null).removeClass("initialized")
                }
            }, {
                key: "debounce",
                value: function(e, t, i) {
                    var n;
                    return function() {
                        var o = this,
                            a = arguments,
                            r = i && !n;
                        clearTimeout(n), n = setTimeout(function() {
                            n = null, i || e.apply(o, a)
                        }, t), r && e.apply(o, a)
                    }
                }
            }, {
                key: "_removeMaterialWrapper",
                value: function() {
                    var t = this.$nativeSelect.data("select-id");
                    this.$nativeSelect.parent().find("span.caret").remove(), this.$nativeSelect.parent().find("input").remove(), this.$nativeSelect.unwrap(), e("ul#select-options-".concat(t)).remove()
                }
            }, {
                key: "renderMaterialSelect",
                value: function() {
                    var t = this;
                    if (this.$nativeSelect.before(this.$selectWrapper), this.appendDropdownIcon(), this.appendMaterialSelect(), this.appendMaterialOptionsList(), this.appendNativeSelect(), this.appendSaveSelectButton(), this.$nativeSelect.is(":disabled") || this.$materialSelect.dropdown({
                        hover: !1,
                        closeOnClick: !1
                    }), !1 !== this.$nativeSelect.data("inherit-tabindex") && this.$materialSelect.attr("tabindex", this.$nativeSelect.attr("tabindex")), this.isMultiple) this.$nativeSelect.find("option:selected:not(:disabled)").each(function(i, n) {
                        var o = e(n).index();
                        t._toggleSelectedValue(o), t.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(o).find(":checkbox").prop("checked", !0)
                    });
                    else {
                        var i = this.$nativeSelect.find("option:selected").index();
                        this.$materialOptionsList.find("li").eq(i).addClass("active")
                    }
                    this.$nativeSelect.addClass("initialized")
                }
            }, {
                key: "appendDropdownIcon",
                value: function() {
                    this.$nativeSelect.is(":disabled") && this.$dropdownIcon.addClass("disabled"), this.$selectWrapper.append(this.$dropdownIcon)
                }
            }, {
                key: "appendMaterialSelect",
                value: function() {
                    this.$selectWrapper.append(this.$materialSelect)
                }
            }, {
                key: "appendMaterialOptionsList",
                value: function() {
                    this.isSearchable && this.appendSearchInputOption(), this.buildMaterialOptions(), this.isMultiple && this.appendToggleAllCheckbox(), this.$selectWrapper.append(this.$materialOptionsList)
                }
            }, {
                key: "appendNativeSelect",
                value: function() {
                    this.$nativeSelect.appendTo(this.$selectWrapper)
                }
            }, {
                key: "appendSearchInputOption",
                value: function() {
                    var t = this.$nativeSelect.attr("searchable");
                    this.$searchInput = e('<span class="search-wrap ml-2"><div class="md-form mt-0"><input type="text" class="search form-control w-100 d-block" placeholder="'.concat(t, '"></div></span>')), this.$materialOptionsList.append(this.$searchInput)
                }
            }, {
                key: "appendToggleAllCheckbox",
                value: function() {
                    this.$materialOptionsList.find("li.disabled").first().after(this.$toggleAll)
                }
            }, {
                key: "appendSaveSelectButton",
                value: function() {
                    this.$selectWrapper.parent().find("button.btn-save").appendTo(this.$materialOptionsList)
                }
            }, {
                key: "buildMaterialOptions",
                value: function() {
                    var t = this;
                    this.$nativeSelectChildren.each(function(i, n) {
                        var o = e(n);
                        if (o.is("option")) t.buildSingleOption(o, t.isMultiple ? "multiple" : "");
                        else if (o.is("optgroup")) {
                            var a = e('<li class="optgroup"><span>'.concat(o.attr("label"), "</span></li>"));
                            t.$materialOptionsList.append(a), o.children("option").each(function(i, n) {
                                t.buildSingleOption(e(n), "optgroup-option")
                            })
                        }
                    })
                }
            }, {
                key: "buildSingleOption",
                value: function(t, i) {
                    var n = t.is(":disabled") ? "disabled" : "",
                        o = "optgroup-option" === i ? "optgroup-option" : "",
                        a = t.data("icon"),
                        r = t.data("fas") ? '<i class="fas fa-'.concat(t.data("fas"), '"></i> ') : "",
                        s = t.attr("class"),
                        l = a ? '<img alt="" src="'.concat(a, '" class="').concat(s, '">') : "",
                        c = this.isMultiple ? '<input type="checkbox" class="form-check-input" '.concat(n, "/><label></label>") : "";
                    this.$materialOptionsList.append(e('<li class="'.concat(n, " ").concat(o, '">').concat(l, '<span class="filtrable">').concat(c).concat(r).concat(t.html(), "</span></li>")))
                }
            }, {
                key: "enableValidation",
                value: function() {
                    this.$nativeSelect.css({
                        position: "absolute",
                        top: "1rem",
                        left: "0",
                        height: "0",
                        width: "0",
                        opacity: "0",
                        padding: "0",
                        "pointer-events": "none"
                    }), -1 === this.$nativeSelect.attr("style").indexOf("inline!important") && this.$nativeSelect.attr("style", "".concat(this.$nativeSelect.attr("style"), " display: inline!important;")), this.$nativeSelect.attr("tabindex", -1), this.$nativeSelect.data("inherit-tabindex", !1)
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var i = this,
                        n = new MutationObserver(this._onMutationObserverChange.bind(this));
                    n.observe(this.$nativeSelect.get(0), {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }), n.customId = this.uuid, n.customStatus = "observing", t.clearMutationObservers(), t.mutationObservers.push(n), this.$nativeSelect.parent().find("button.btn-save").on("click", this._onSaveSelectBtnClick), this.$materialSelect.on("focus", this.debounce(this._onMaterialSelectFocus.bind(this), 300)), this.$materialSelect.on("click", this._onMaterialSelectClick.bind(this)), this.$materialSelect.on("blur", this._onMaterialSelectBlur.bind(this)), this.$materialSelect.on("keydown", this._onMaterialSelectKeydown.bind(this)), this.$toggleAll.on("click", this._onToggleAllClick.bind(this)), this.$materialOptionsList.on("mousedown", this._onEachMaterialOptionMousedown.bind(this)), this.$materialOptionsList.find("li:not(.optgroup)").not(this.$toggleAll).each(function(t, n) {
                        e(n).on("click", i._onEachMaterialOptionClick.bind(i, t, n))
                    }), !this.isMultiple && this.isSearchable && this.$materialOptionsList.find("li").on("click", this._onSingleMaterialOptionClick.bind(this)), this.isSearchable && this.$searchInput.find(".search").on("keyup", this._onSearchInputKeyup), e("html").on("click", this._onHTMLClick.bind(this))
                }
            }, {
                key: "_onMutationObserverChange",
                value: function(i) {
                    i.forEach(function(i) {
                        var n = e(i.target).closest("select");
                        !0 !== n.data("stop-refresh") && ("childList" === i.type || "attributes" === i.type && e(i.target).is("option")) && (t.clearMutationObservers(), n.materialSelect("destroy"), n.materialSelect())
                    })
                }
            }, {
                key: "_onSaveSelectBtnClick",
                value: function() {
                    e("input.select-dropdown").trigger("close")
                }
            }, {
                key: "_onEachMaterialOptionClick",
                value: function(t, i, n) {
                    n.stopPropagation();
                    var o = e(i);
                    if (!o.hasClass("disabled") && !o.hasClass("optgroup")) {
                        var a = !0;
                        if (this.isMultiple) {
                            o.find('input[type="checkbox"]').prop("checked", function(e, t) {
                                return !t
                            });
                            var r = Boolean(this.$nativeSelect.find("optgroup").length),
                                s = this._isToggleAllPresent() ? o.index() - 1 : o.index();
                            a = this.isSearchable && r ? this._toggleSelectedValue(s - o.prevAll(".optgroup").length - 1) : this.isSearchable ? this._toggleSelectedValue(s - 1) : r ? this._toggleSelectedValue(s - o.prevAll(".optgroup").length) : this._toggleSelectedValue(s), this._isToggleAllPresent() && this._updateToggleAllOption(), this.$materialSelect.trigger("focus")
                        } else this.$materialOptionsList.find("li").removeClass("active"), o.toggleClass("active"), this.$materialSelect.val(o.text()), this.$materialSelect.trigger("close");
                        this._selectSingleOption(o), this.$nativeSelect.data("stop-refresh", !0), this.$nativeSelect.find("option").eq(t).prop("selected", a), this.$nativeSelect.removeData("stop-refresh"), this._triggerChangeOnNativeSelect(), "function" == typeof this.options && this.options()
                    }
                }
            }, {
                key: "_triggerChangeOnNativeSelect",
                value: function() {
                    var e = new KeyboardEvent("change", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    this.$nativeSelect.get(0).dispatchEvent(e)
                }
            }, {
                key: "_onMaterialSelectFocus",
                value: function(t) {
                    var i = e(t.target);
                    if (e("ul.select-dropdown").not(this.$materialOptionsList.get(0)).is(":visible") && e("input.select-dropdown").trigger("close"), !this.$materialOptionsList.is(":visible")) {
                        i.trigger("open", ["focus"]);
                        var n = i.val(),
                            o = this.$materialOptionsList.find("li").filter(function() {
                                return e(this).text().toLowerCase() === n.toLowerCase()
                            })[0];
                        this._selectSingleOption(o)
                    }
                }
            }, {
                key: "_onMaterialSelectClick",
                value: function(e) {
                    e.stopPropagation()
                }
            }, {
                key: "_onMaterialSelectBlur",
                value: function(t) {
                    var i = e(t);
                    this.isMultiple || this.isSearchable || i.trigger("close"), this.$materialOptionsList.find("li.selected").removeClass("selected")
                }
            }, {
                key: "_onSingleMaterialOptionClick",
                value: function() {
                    this.$materialSelect.trigger("close")
                }
            }, {
                key: "_onEachMaterialOptionMousedown",
                value: function(t) {
                    var i = t.target;
                    e(".modal-content").find(this.$materialOptionsList).length && i.scrollHeight > i.offsetHeight && t.preventDefault()
                }
            }, {
                key: "_onHTMLClick",
                value: function(t) {
                    e(t.target).closest("#select-options-".concat(this.uuid)).length || this.$materialSelect.trigger("close")
                }
            }, {
                key: "_onToggleAllClick",
                value: function() {
                    var t = this,
                        i = e(this.$toggleAll).find('input[type="checkbox"]').first(),
                        n = !e(i).prop("checked");
                    e(i).prop("checked", n), this.$materialOptionsList.find("li:not(.optgroup):not(.disabled):not(.select-toggle-all)").each(function(i, o) {
                        var a = e(o).find('input[type="checkbox"]');
                        n && a.is(":checked") || !n && !a.is(":checked") || (t._isToggleAllPresent() && i++, a.prop("checked", n), t.$nativeSelect.find("option").eq(i).prop("selected", n), n ? e(o).removeClass("active") : e(o).addClass("active"), t._toggleSelectedValue(i), t._selectOption(o), t._setValueToMaterialSelect())
                    }), this.$nativeSelect.data("stop-refresh", !0), this._triggerChangeOnNativeSelect(), this.$nativeSelect.removeData("stop-refresh")
                }
            }, {
                key: "_onMaterialSelectKeydown",
                value: function(t) {
                    var i = e(t.target),
                        n = t.which === this.keyCodes.tab,
                        o = t.which === this.keyCodes.esc,
                        a = t.which === this.keyCodes.enter,
                        r = t.which === this.keyCodes.arrowUp,
                        s = t.which === this.keyCodes.arrowDown,
                        l = this.$materialOptionsList.is(":visible");
                    n ? this._handleTabKey(i) : !s || l ? a && !l || (t.preventDefault(), a ? this._handleEnterKey(i) : s ? this._handleArrowDownKey() : r ? this._handleArrowUpKey() : o ? this._handleEscKey(i) : this._handleLetterKey(t)) : i.trigger("open")
                }
            }, {
                key: "_handleTabKey",
                value: function(e) {
                    this._handleEscKey(e)
                }
            }, {
                key: "_handleEnterKey",
                value: function(t) {
                    var i = e(t);
                    this.$materialOptionsList.find("li.selected:not(.disabled)").trigger("click"), this.isMultiple || i.trigger("close")
                }
            }, {
                key: "_handleArrowDownKey",
                value: function() {
                    var e = this.$materialOptionsList.find("li").not(".disabled").not(".select-toggle-all").first(),
                        t = this.$materialOptionsList.find("li").not(".disabled").not(".select-toggle-all").last(),
                        i = this.$materialOptionsList.find("li.selected").length > 0,
                        n = i ? this.$materialOptionsList.find("li.selected") : e,
                        o = n.is(t) || !i ? n : n.next("li:not(.disabled)");
                    this._selectSingleOption(o), this.$materialOptionsList.find("li").removeClass("active"), o.toggleClass("active")
                }
            }, {
                key: "_handleArrowUpKey",
                value: function() {
                    var e = this.$materialOptionsList.find("li").not(".disabled").not(".select-toggle-all").first(),
                        t = this.$materialOptionsList.find("li").not(".disabled").not(".select-toggle-all").last(),
                        i = this.$materialOptionsList.find("li.selected").length > 0,
                        n = i ? this.$materialOptionsList.find("li.selected") : t,
                        o = n.is(e) || !i ? n : n.prev("li:not(.disabled)");
                    this._selectSingleOption(o), this.$materialOptionsList.find("li").removeClass("active"), o.toggleClass("active")
                }
            }, {
                key: "_handleEscKey",
                value: function(t) {
                    e(t).trigger("close")
                }
            }, {
                key: "_handleLetterKey",
                value: function(t) {
                    var i = this,
                        n = "",
                        o = String.fromCharCode(t.which).toLowerCase(),
                        a = Object.keys(this.keyCodes).map(function(e) {
                            return i.keyCodes[e]
                        });
                    if (o && -1 === a.indexOf(t.which)) {
                        n += o;
                        var r = this.$materialOptionsList.find("li").filter(function() {
                            return -1 !== e(this).text().toLowerCase().indexOf(n)
                        }).first();
                        this.isMultiple || this.$materialOptionsList.find("li").removeClass("active"), r.addClass("active"), this._selectSingleOption(r)
                    }
                }
            }, {
                key: "_onSearchInputKeyup",
                value: function(t) {
                    var i = e(t.target),
                        n = i.closest("ul"),
                        o = i.val();
                    n.find("li span.filtrable").each(function() {
                        var t = e(this);
                        "string" == typeof this.outerHTML && (this.textContent.toLowerCase().includes(o.toLowerCase()) ? t.show().parent().show() : t.hide().parent().hide())
                    })
                }
            }, {
                key: "_isToggleAllPresent",
                value: function() {
                    return this.$materialOptionsList.find(this.$toggleAll).length
                }
            }, {
                key: "_updateToggleAllOption",
                value: function() {
                    var e = this.$materialOptionsList.find("li").not(".select-toggle-all, .disabled").find("[type=checkbox]"),
                        t = e.filter(":checked"),
                        i = this.$toggleAll.find("[type=checkbox]").is(":checked");
                    t.length !== e.length || i ? t.length < e.length && i && this.$toggleAll.find("[type=checkbox]").prop("checked", !1) : this.$toggleAll.find("[type=checkbox]").prop("checked", !0)
                }
            }, {
                key: "_toggleSelectedValue",
                value: function(e) {
                    var t = this.valuesSelected.indexOf(e),
                        i = -1 !== t;
                    return i ? this.valuesSelected.splice(t, 1) : this.valuesSelected.push(e), this.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(e).toggleClass("active"), this.$nativeSelect.find("option").eq(e).prop("selected", !i), this._setValueToMaterialSelect(), !i
                }
            }, {
                key: "_selectSingleOption",
                value: function(e) {
                    this.$materialOptionsList.find("li.selected").removeClass("selected"), this._selectOption(e)
                }
            }, {
                key: "_selectOption",
                value: function(t) {
                    e(t).addClass("selected")
                }
            }, {
                key: "_setValueToMaterialSelect",
                value: function() {
                    for (var e = "", t = this.valuesSelected.length, i = 0; i < t; i++) {
                        var n = this.$nativeSelect.find("option").eq(this.valuesSelected[i]).text();
                        e += ", ".concat(n)
                    }
                    0 === (e = t >= 5 ? "".concat(t, " options selected") : e.substring(2)).length && (e = this.$nativeSelect.find("option:disabled").eq(0).text()), this.$nativeSelect.siblings("input.select-dropdown").val(e)
                }
            }, {
                key: "_randomUUID",
                value: function() {
                    var e = (new Date).getTime();
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                        var i = (e + 16 * Math.random()) % 16 | 0;
                        return e = Math.floor(e / 16), ("x" === t ? i : 3 & i | 8).toString(16)
                    })
                }
            }], [{
                key: "clearMutationObservers",
                value: function() {
                    t.mutationObservers.forEach(function(e) {
                        e.disconnect(), e.customStatus = "stopped"
                    })
                }
            }]), t
        }();
        e.fn.materialSelect = function(t) {
            e(this).not(".browser-default").not(".custom-select").each(function() {
                new i(e(this), t).init()
            })
        }, e.fn.material_select = e.fn.materialSelect, t = e.fn.val, e.fn.val = function(e) {
            if (!arguments.length) return t.call(this);
            if (!0 !== this.data("stop-refresh") && this.hasClass("mdb-select") && this.hasClass("initialized") && !this.hasClass("browser-default") && !this.hasClass("custom-select")) {
                i.clearMutationObservers(), this.materialSelect("destroy");
                var n = t.call(this, e);
                return this.materialSelect(), n
            }
            return t.call(this, e)
        }
    }(jQuery), jQuery("select").siblings("input.select-dropdown").on("mousedown", function(e) {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) && e.preventDefault()
}),
    function(e) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
    }(function(e) {
        var t = e(window),
            i = e(document),
            n = e(document.documentElement),
            o = null != document.documentElement.style.transition;

        function a(t, l, u, d) {
            if (!t) return a;
            var p = !1,
                h = {
                    id: t.id || "P" + Math.abs(~~(Math.random() * new Date))
                },
                f = u ? e.extend(!0, {}, u.defaults, d) : d || {},
                m = e.extend({}, a.klasses(), f.klass),
                v = e(t),
                g = function() {
                    return this.start()
                },
                y = g.prototype = {
                    constructor: g,
                    $node: v,
                    start: function() {
                        return h && h.start ? y : (h.methods = {}, h.start = !0, h.open = !1, h.type = t.type, t.autofocus = t == c(), t.readOnly = !f.editable, t.id = t.id || h.id, "text" != t.type && (t.type = "text"), y.component = new u(y, f), y.$root = e('<div class="' + m.picker + '" id="' + t.id + '_root" />'), s(y.$root[0], "hidden", !0), y.$holder = e(b()).appendTo(y.$root), w(), f.formatSubmit && function() {
                            var i;
                            !0 === f.hiddenName ? (i = t.name, t.name = "") : i = (i = ["string" == typeof f.hiddenPrefix ? f.hiddenPrefix : "", "string" == typeof f.hiddenSuffix ? f.hiddenSuffix : "_submit"])[0] + t.name + i[1];
                            y._hidden = e('<input type=hidden name="' + i + '"' + (v.data("value") || t.value ? ' value="' + y.get("select", f.formatSubmit) + '"' : "") + ">")[0], v.on("change." + h.id, function() {
                                y._hidden.value = t.value ? y.get("select", f.formatSubmit) : ""
                            })
                        }(), function() {
                            v.data(l, y).addClass(m.input).val(v.data("value") ? y.get("select", f.format) : t.value), f.editable || v.on("focus." + h.id + " click." + h.id, (e = function(e) {
                                e.preventDefault(), y.open()
                            }, i = 300, function() {
                                var t = this,
                                    a = arguments,
                                    r = n && !o;
                                clearTimeout(o), o = setTimeout(function() {
                                    o = null, n || e.apply(t, a)
                                }, i), r && e.apply(t, a)
                            })).on("keydown." + h.id, k);
                            var e, i, n, o;
                            s(t, {
                                haspopup: !0,
                                expanded: !1,
                                readonly: !1,
                                owns: t.id + "_root"
                            })
                        }(), f.containerHidden ? e(f.containerHidden).append(y._hidden) : v.after(y._hidden), f.container ? e(f.container).append(y.$root) : v.after(y.$root), y.on({
                            start: y.component.onStart,
                            render: y.component.onRender,
                            stop: y.component.onStop,
                            open: y.component.onOpen,
                            close: y.component.onClose,
                            set: y.component.onSet
                        }).on({
                            start: f.onStart,
                            render: f.onRender,
                            stop: f.onStop,
                            open: f.onOpen,
                            close: f.onClose,
                            set: f.onSet
                        }), p = function(e) {
                            var t;
                            e.currentStyle ? t = e.currentStyle.position : window.getComputedStyle && (t = getComputedStyle(e).position);
                            return "fixed" == t
                        }(y.$holder[0]), t.autofocus && y.open(), y.trigger("start").trigger("render"))
                    },
                    render: function(t) {
                        return t ? (y.$holder = e(b()), w(), y.$root.html(y.$holder)) : y.$root.find("." + m.box).html(y.component.nodes(h.open)), y.trigger("render")
                    },
                    stop: function() {
                        return h.start ? (y.close(), y._hidden && y._hidden.parentNode.removeChild(y._hidden), y.$root.remove(), v.removeClass(m.input).removeData(l), setTimeout(function() {
                            v.off("." + h.id)
                        }, 0), t.type = h.type, t.readOnly = !1, y.trigger("stop"), h.methods = {}, h.start = !1, y) : y
                    },
                    open: function(l) {
                        return h.open ? y : (v.addClass(m.active), s(t, "expanded", !0), setTimeout(function() {
                            y.$root.addClass(m.opened), s(y.$root[0], "hidden", !1)
                        }, 0), !1 !== l && (h.open = !0, p && n.css("overflow", "hidden").css("padding-right", "+=" + r()), p && o ? y.$holder.find("." + m.frame).one("transitionend", function() {
                            y.$holder[0].focus()
                        }) : y.$holder[0].focus(), i.on("click." + h.id + " focusin." + h.id, function(e) {
                            var i = e.target;
                            i != t && i != document && 3 != e.which && y.close(i === y.$holder[0])
                        }).on("keydown." + h.id, function(t) {
                            var i = t.keyCode,
                                n = y.component.key[i],
                                o = t.target;
                            27 == i ? y.close(!0) : o != y.$holder[0] || !n && 13 != i ? e.contains(y.$root[0], o) && 13 == i && (t.preventDefault(), o.click()) : (t.preventDefault(), n ? a._.trigger(y.component.key.go, y, [a._.trigger(n)]) : y.$root.find("." + m.highlighted).hasClass(m.disabled) || (y.set("select", y.component.item.highlight), f.closeOnSelect && y.close(!0)))
                        })), y.trigger("open"))
                    },
                    close: function(e) {
                        return e && (f.editable ? t.focus() : (y.$holder.off("focus.toOpen").focus(), setTimeout(function() {
                            y.$holder.on("focus.toOpen", x)
                        }, 0))), v.removeClass(m.active), s(t, "expanded", !1), setTimeout(function() {
                            y.$root.removeClass(m.opened + " " + m.focused), s(y.$root[0], "hidden", !0)
                        }, 0), h.open ? (h.open = !1, p && n.css("overflow", "").css("padding-right", "-=" + r()), i.off("." + h.id), y.trigger("close")) : y
                    },
                    clear: function(e) {
                        return y.set("clear", null, e)
                    },
                    set: function(t, i, n) {
                        var o, a, r = e.isPlainObject(t),
                            s = r ? t : {};
                        if (n = r && e.isPlainObject(i) ? i : n || {}, t) {
                            for (o in r || (s[t] = i), s) a = s[o], o in y.component.item && (void 0 === a && (a = null), y.component.set(o, a, n)), "select" != o && "clear" != o || v.val("clear" == o ? "" : y.get(o, f.format)).trigger("change");
                            y.render()
                        }
                        return n.muted ? y : y.trigger("set", s)
                    },
                    get: function(e, i) {
                        if (null != h[e = e || "value"]) return h[e];
                        if ("valueSubmit" == e) {
                            if (y._hidden) return y._hidden.value;
                            e = "value"
                        }
                        if ("value" == e) return t.value;
                        if (e in y.component.item) {
                            if ("string" == typeof i) {
                                var n = y.component.get(e);
                                return n ? a._.trigger(y.component.formats.toString, y.component, [i, n]) : ""
                            }
                            return y.component.get(e)
                        }
                    },
                    on: function(t, i, n) {
                        var o, a, r = e.isPlainObject(t),
                            s = r ? t : {};
                        if (t)
                            for (o in r || (s[t] = i), s) a = s[o], n && (o = "_" + o), h.methods[o] = h.methods[o] || [], h.methods[o].push(a);
                        return y
                    },
                    off: function() {
                        var e, t, i = arguments;
                        for (e = 0, namesCount = i.length; e < namesCount; e += 1)(t = i[e]) in h.methods && delete h.methods[t];
                        return y
                    },
                    trigger: function(e, t) {
                        var i = function(e) {
                            var i = h.methods[e];
                            i && i.map(function(e) {
                                a._.trigger(e, y, [t])
                            })
                        };
                        return i("_" + e), i(e), y
                    }
                };

            function b() {
                return a._.node("div", a._.node("div", a._.node("div", a._.node("div", y.component.nodes(h.open), m.box), m.wrap), m.frame), m.holder, 'tabindex="-1"')
            }

            function w() {
                y.$holder.on({
                    keydown: k,
                    "focus.toOpen": x,
                    blur: function() {
                        v.removeClass(m.target)
                    },
                    focusin: function(e) {
                        y.$root.removeClass(m.focused), e.stopPropagation()
                    },
                    "mousedown click": function(t) {
                        var i = t.target;
                        i != y.$holder[0] && (t.stopPropagation(), "mousedown" != t.type || e(i).is("input, select, textarea, button, option") || (t.preventDefault(), y.$holder[0].focus()))
                    }
                }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                    var t = e(this),
                        i = t.data(),
                        n = t.hasClass(m.navDisabled) || t.hasClass(m.disabled),
                        o = c();
                    o = o && (o.type || o.href), (n || o && !e.contains(y.$root[0], o)) && y.$holder[0].focus(), !n && i.nav ? y.set("highlight", y.component.item.highlight, {
                        nav: i.nav
                    }) : !n && "pick" in i ? (y.set("select", i.pick), f.closeOnSelect && y.close(!0)) : i.clear ? (y.clear(), f.closeOnClear && y.close(!0)) : i.close && y.close(!0)
                })
            }

            function x(e) {
                e.stopPropagation(), v.addClass(m.target), y.$root.addClass(m.focused), y.open()
            }

            function k(e) {
                var t = e.keyCode,
                    i = /^(8|46)$/.test(t);
                if (27 == t) return y.close(!0), !1;
                (32 == t || i || !h.open && y.component.key[t]) && (e.preventDefault(), e.stopPropagation(), i ? y.clear().close() : y.open())
            }
            return new g
        }

        function r() {
            if (n.height() <= t.height()) return 0;
            var i = e('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                o = i[0].offsetWidth;
            i.css("overflow", "scroll");
            var a = e('<div style="width:100%" />').appendTo(i)[0].offsetWidth;
            return i.remove(), o - a
        }

        function s(t, i, n) {
            if (e.isPlainObject(i))
                for (var o in i) l(t, o, i[o]);
            else l(t, i, n)
        }

        function l(e, t, i) {
            e.setAttribute(("role" == t ? "" : "aria-") + t, i)
        }

        function c() {
            try {
                return document.activeElement
            } catch (e) {}
        }
        return a.klasses = function(e) {
            return {
                picker: e = e || "picker",
                opened: e + "--opened",
                focused: e + "--focused",
                input: e + "__input",
                active: e + "__input--active",
                target: e + "__input--target",
                holder: e + "__holder",
                frame: e + "__frame",
                wrap: e + "__wrap",
                box: e + "__box"
            }
        }, a._ = {
            group: function(e) {
                for (var t, i = "", n = a._.trigger(e.min, e); n <= a._.trigger(e.max, e, [n]); n += e.i) t = a._.trigger(e.item, e, [n]), i += a._.node(e.node, t[0], t[1], t[2]);
                return i
            },
            node: function(t, i, n, o) {
                return i ? (i = e.isArray(i) ? i.join("") : i, "<" + t + (n = n ? ' class="' + n + '"' : "") + (o = o ? " " + o : "") + ">" + i + "</" + t + ">") : ""
            },
            lead: function(e) {
                return (e < 10 ? "0" : "") + e
            },
            trigger: function(e, t, i) {
                return "function" == typeof e ? e.apply(t, i || []) : e
            },
            digits: function(e) {
                return /\d/.test(e[1]) ? 2 : 1
            },
            isDate: function(e) {
                return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
            },
            isInteger: function(e) {
                return {}.toString.call(e).indexOf("Number") > -1 && e % 1 == 0
            },
            ariaAttr: function(t, i) {
                e.isPlainObject(t) || (t = {
                    attribute: i
                });
                for (var n in i = "", t) {
                    var o = ("role" == n ? "" : "aria-") + n,
                        a = t[n];
                    i += null == a ? "" : o + '="' + t[n] + '"'
                }
                return i
            }
        }, a.extend = function(t, i) {
            e.fn[t] = function(n, o) {
                var r = this.data(t);
                return "picker" == n ? r : r && "string" == typeof n ? a._.trigger(r[n], r, [o]) : this.each(function() {
                    e(this).data(t) || new a(this, t, i, n)
                })
            }, e.fn[t].defaults = i.defaults
        }, a
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
    }(function(e, t) {
        var i, n = e._;

        function o(e, t) {
            var i, n = this,
                o = e.$node[0],
                a = o.value,
                r = e.$node.data("value"),
                s = r || a,
                l = r ? t.formatSubmit : t.format,
                c = function() {
                    return o.currentStyle ? "rtl" == o.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
                };
            n.settings = t, n.$node = e.$node, n.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            }, n.item = {}, n.item.clear = null, n.item.disable = (t.disable || []).slice(0), n.item.enable = -(!0 === (i = n.item.disable)[0] ? i.shift() : -1), n.set("min", t.min).set("max", t.max).set("now"), s ? n.set("select", s, {
                format: l,
                defaultValue: !0
            }) : n.set("select", null).set("highlight", n.item.now), n.key = {
                40: 7,
                38: -7,
                39: function() {
                    return c() ? -1 : 1
                },
                37: function() {
                    return c() ? 1 : -1
                },
                go: function(e) {
                    var t = n.item.highlight,
                        i = new Date(t.year, t.month, t.date + e);
                    n.set("highlight", i, {
                        interval: e
                    }), this.render()
                }
            }, e.on("render", function() {
                e.$root.find("." + t.klass.selectMonth).on("change", function() {
                    var i = this.value;
                    i && (e.set("highlight", [e.get("view").year, i, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
                }), e.$root.find("." + t.klass.selectYear).on("change", function() {
                    var i = this.value;
                    i && (e.set("highlight", [i, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
                })
            }, 1).on("open", function() {
                var i = "";
                n.disabled(n.get("now")) && (i = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + i + ", select").attr("disabled", !1)
            }, 1).on("close", function() {
                e.$root.find("button, select").attr("disabled", !0)
            }, 1)
        }
        o.prototype.set = function(e, t, i) {
            var n = this,
                o = n.item;
            return null === t ? ("clear" == e && (e = "select"), o[e] = t, n) : (o["enable" == e ? "disable" : "flip" == e ? "enable" : e] = n.queue[e].split(" ").map(function(o) {
                return t = n[o](e, t, i)
            }).pop(), "select" == e ? n.set("highlight", o.select, i) : "highlight" == e ? n.set("view", o.highlight, i) : e.match(/^(flip|min|max|disable|enable)$/) && (o.select && n.disabled(o.select) && n.set("select", o.select, i), o.highlight && n.disabled(o.highlight) && n.set("highlight", o.highlight, i)), n)
        }, o.prototype.get = function(e) {
            return this.item[e]
        }, o.prototype.create = function(e, i, o) {
            var a;
            return (i = void 0 === i ? e : i) == -1 / 0 || i == 1 / 0 ? a = i : t.isPlainObject(i) && n.isInteger(i.pick) ? i = i.obj : t.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = n.isDate(i) ? i : this.create().obj) : i = n.isInteger(i) || n.isDate(i) ? this.normalize(new Date(i), o) : this.now(e, i, o), {
                year: a || i.getFullYear(),
                month: a || i.getMonth(),
                date: a || i.getDate(),
                day: a || i.getDay(),
                obj: a || i,
                pick: a || i.getTime()
            }
        }, o.prototype.createRange = function(e, i) {
            var o = this,
                a = function(e) {
                    return !0 === e || t.isArray(e) || n.isDate(e) ? o.create(e) : e
                };
            return n.isInteger(e) || (e = a(e)), n.isInteger(i) || (i = a(i)), n.isInteger(e) && t.isPlainObject(i) ? e = [i.year, i.month, i.date + e] : n.isInteger(i) && t.isPlainObject(e) && (i = [e.year, e.month, e.date + i]), {
                from: a(e),
                to: a(i)
            }
        }, o.prototype.withinRange = function(e, t) {
            return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
        }, o.prototype.overlapRanges = function(e, t) {
            return e = this.createRange(e.from, e.to), t = this.createRange(t.from, t.to), this.withinRange(e, t.from) || this.withinRange(e, t.to) || this.withinRange(t, e.from) || this.withinRange(t, e.to)
        }, o.prototype.now = function(e, t, i) {
            return t = new Date, i && i.rel && t.setDate(t.getDate() + i.rel), this.normalize(t, i)
        }, o.prototype.navigate = function(e, i, n) {
            var o, a, r, s, l = t.isArray(i),
                c = t.isPlainObject(i),
                u = this.item.view;
            if (l || c) {
                for (c ? (a = i.year, r = i.month, s = i.date) : (a = +i[0], r = +i[1], s = +i[2]), n && n.nav && u && u.month !== r && (a = u.year, r = u.month), a = (o = new Date(a, r + (n && n.nav ? n.nav : 0), 1)).getFullYear(), r = o.getMonth(); new Date(a, r, s).getMonth() !== r;) s -= 1;
                i = [a, r, s]
            }
            return i
        }, o.prototype.normalize = function(e) {
            return e.setHours(0, 0, 0, 0), e
        }, o.prototype.measure = function(e, t) {
            return t ? "string" == typeof t ? t = this.parse(e, t) : n.isInteger(t) && (t = this.now(e, t, {
                rel: t
            })) : t = "min" == e ? -1 / 0 : 1 / 0, t
        }, o.prototype.viewset = function(e, t) {
            return this.create([t.year, t.month, 1])
        }, o.prototype.validate = function(e, i, o) {
            var a, r, s, l, c = this,
                u = i,
                d = o && o.interval ? o.interval : 1,
                p = -1 === c.item.enable,
                h = c.item.min,
                f = c.item.max,
                m = p && c.item.disable.filter(function(e) {
                    if (t.isArray(e)) {
                        var o = c.create(e).pick;
                        o < i.pick ? a = !0 : o > i.pick && (r = !0)
                    }
                    return n.isInteger(e)
                }).length;
            if ((!o || !o.nav && !o.defaultValue) && (!p && c.disabled(i) || p && c.disabled(i) && (m || a || r) || !p && (i.pick <= h.pick || i.pick >= f.pick)))
                for (p && !m && (!r && d > 0 || !a && d < 0) && (d *= -1); c.disabled(i) && (Math.abs(d) > 1 && (i.month < u.month || i.month > u.month) && (i = u, d = d > 0 ? 1 : -1), i.pick <= h.pick ? (s = !0, d = 1, i = c.create([h.year, h.month, h.date + (i.pick === h.pick ? 0 : -1)])) : i.pick >= f.pick && (l = !0, d = -1, i = c.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : 1)])), !s || !l);) i = c.create([i.year, i.month, i.date + d]);
            return i
        }, o.prototype.disabled = function(e) {
            var i = this,
                o = i.item.disable.filter(function(o) {
                    return n.isInteger(o) ? e.day === (i.settings.firstDay ? o : o - 1) % 7 : t.isArray(o) || n.isDate(o) ? e.pick === i.create(o).pick : t.isPlainObject(o) ? i.withinRange(o, e) : void 0
                });
            return o = o.length && !o.filter(function(e) {
                return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
            }).length, -1 === i.item.enable ? !o : o || e.pick < i.item.min.pick || e.pick > i.item.max.pick
        }, o.prototype.parse = function(e, t, i) {
            var o = this,
                a = {};
            return t && "string" == typeof t ? (i && i.format || ((i = i || {}).format = o.settings.format), o.formats.toArray(i.format).map(function(e) {
                var i = o.formats[e],
                    r = i ? n.trigger(i, o, [t, a]) : e.replace(/^!/, "").length;
                i && (a[e] = t.substr(0, r)), t = t.substr(r)
            }), [a.yyyy || a.yy, +(a.mm || a.m) - 1, a.dd || a.d]) : t
        }, o.prototype.formats = function() {
            function e(e, t, i) {
                var n = e.match(/[^\x00-\x7F]+|\w+/)[0];
                return i.mm || i.m || (i.m = t.indexOf(n) + 1), n.length
            }

            function t(e) {
                return e.match(/\w+/)[0].length
            }
            return {
                d: function(e, t) {
                    return e ? n.digits(e) : t.date
                },
                dd: function(e, t) {
                    return e ? 2 : n.lead(t.date)
                },
                ddd: function(e, i) {
                    return e ? t(e) : this.settings.weekdaysShort[i.day]
                },
                dddd: function(e, i) {
                    return e ? t(e) : this.settings.weekdaysFull[i.day]
                },
                m: function(e, t) {
                    return e ? n.digits(e) : t.month + 1
                },
                mm: function(e, t) {
                    return e ? 2 : n.lead(t.month + 1)
                },
                mmm: function(t, i) {
                    var n = this.settings.monthsShort;
                    return t ? e(t, n, i) : n[i.month]
                },
                mmmm: function(t, i) {
                    var n = this.settings.monthsFull;
                    return t ? e(t, n, i) : n[i.month]
                },
                yy: function(e, t) {
                    return e ? 2 : ("" + t.year).slice(2)
                },
                yyyy: function(e, t) {
                    return e ? 4 : t.year
                },
                toArray: function(e) {
                    return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                },
                toString: function(e, t) {
                    var i = this;
                    return i.formats.toArray(e).map(function(e) {
                        return n.trigger(i.formats[e], i, [0, t]) || e.replace(/^!/, "")
                    }).join("")
                }
            }
        }(), o.prototype.isDateExact = function(e, i) {
            return n.isInteger(e) && n.isInteger(i) || "boolean" == typeof e && "boolean" == typeof i ? e === i : (n.isDate(e) || t.isArray(e)) && (n.isDate(i) || t.isArray(i)) ? this.create(e).pick === this.create(i).pick : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && (this.isDateExact(e.from, i.from) && this.isDateExact(e.to, i.to))
        }, o.prototype.isDateOverlap = function(e, i) {
            var o = this.settings.firstDay ? 1 : 0;
            return n.isInteger(e) && (n.isDate(i) || t.isArray(i)) ? (e = e % 7 + o) === this.create(i).day + 1 : n.isInteger(i) && (n.isDate(e) || t.isArray(e)) ? (i = i % 7 + o) === this.create(e).day + 1 : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && this.overlapRanges(e, i)
        }, o.prototype.flipEnable = function(e) {
            var t = this.item;
            t.enable = e || (-1 == t.enable ? 1 : -1)
        }, o.prototype.deactivate = function(e, i) {
            var o = this,
                a = o.item.disable.slice(0);
            return "flip" == i ? o.flipEnable() : !1 === i ? (o.flipEnable(1), a = []) : !0 === i ? (o.flipEnable(-1), a = []) : i.map(function(e) {
                for (var i, r = 0; r < a.length; r += 1)
                    if (o.isDateExact(e, a[r])) {
                        i = !0;
                        break
                    }
                i || (n.isInteger(e) || n.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && a.push(e)
            }), a
        }, o.prototype.activate = function(e, i) {
            var o = this,
                a = o.item.disable,
                r = a.length;
            return "flip" == i ? o.flipEnable() : !0 === i ? (o.flipEnable(1), a = []) : !1 === i ? (o.flipEnable(-1), a = []) : i.map(function(e) {
                var i, s, l, c;
                for (l = 0; l < r; l += 1) {
                    if (s = a[l], o.isDateExact(s, e)) {
                        i = a[l] = null, c = !0;
                        break
                    }
                    if (o.isDateOverlap(s, e)) {
                        t.isPlainObject(e) ? (e.inverted = !0, i = e) : t.isArray(e) ? (i = e)[3] || i.push("inverted") : n.isDate(e) && (i = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                        break
                    }
                }
                if (i)
                    for (l = 0; l < r; l += 1)
                        if (o.isDateExact(a[l], e)) {
                            a[l] = null;
                            break
                        }
                if (c)
                    for (l = 0; l < r; l += 1)
                        if (o.isDateOverlap(a[l], e)) {
                            a[l] = null;
                            break
                        }
                i && a.push(i)
            }), a.filter(function(e) {
                return null != e
            })
        }, o.prototype.nodes = function(e) {
            var t, i, o = this,
                a = o.settings,
                r = o.item,
                s = r.now,
                l = r.select,
                c = r.highlight,
                u = r.view,
                d = r.disable,
                p = r.min,
                h = r.max,
                f = (t = (a.showWeekdaysFull ? a.weekdaysFull : a.weekdaysShort).slice(0), i = a.weekdaysFull.slice(0), a.firstDay && (t.push(t.shift()), i.push(i.shift())), n.node("thead", n.node("tr", n.group({
                    min: 0,
                    max: 6,
                    i: 1,
                    node: "th",
                    item: function(e) {
                        return [t[e], a.klass.weekdays, 'scope=col title="' + i[e] + '"']
                    }
                })))),
                m = function(e) {
                    return n.node("div", " ", a.klass["nav" + (e ? "Next" : "Prev")] + (e && u.year >= h.year && u.month >= h.month || !e && u.year <= p.year && u.month <= p.month ? " " + a.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + n.ariaAttr({
                        role: "button",
                        controls: o.$node[0].id + "_table"
                    }) + ' title="' + (e ? a.labelMonthNext : a.labelMonthPrev) + '"')
                },
                v = function() {
                    var t = a.showMonthsShort ? a.monthsShort : a.monthsFull;
                    return a.selectMonths ? n.node("select", n.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: "option",
                        item: function(e) {
                            return [t[e], 0, "value=" + e + (u.month == e ? " selected" : "") + (u.year == p.year && e < p.month || u.year == h.year && e > h.month ? " disabled" : "")]
                        }
                    }), a.klass.selectMonth, (e ? "" : "disabled") + " " + n.ariaAttr({
                        controls: o.$node[0].id + "_table"
                    }) + ' title="' + a.labelMonthSelect + '"') : n.node("div", t[u.month], a.klass.month)
                },
                g = function() {
                    var t = u.year,
                        i = !0 === a.selectYears ? 5 : ~~(a.selectYears / 2);
                    if (i) {
                        var r = p.year,
                            s = h.year,
                            l = t - i,
                            c = t + i;
                        if (r > l && (c += r - l, l = r), s < c) {
                            var d = l - r,
                                f = c - s;
                            l -= d > f ? f : d, c = s
                        }
                        return n.node("select", n.group({
                            min: l,
                            max: c,
                            i: 1,
                            node: "option",
                            item: function(e) {
                                return [e, 0, "value=" + e + (t == e ? " selected" : "")]
                            }
                        }), a.klass.selectYear, (e ? "" : "disabled") + " " + n.ariaAttr({
                            controls: o.$node[0].id + "_table"
                        }) + ' title="' + a.labelYearSelect + '"')
                    }
                    return n.node("div", t, a.klass.year)
                };
            return n.node("div", (a.selectYears ? g() + v() : v() + g()) + m() + m(1), a.klass.header) + n.node("table", f + n.node("tbody", n.group({
                min: 0,
                max: 5,
                i: 1,
                node: "tr",
                item: function(e) {
                    var t = a.firstDay && 0 === o.create([u.year, u.month, 1]).day ? -7 : 0;
                    return [n.group({
                        min: 7 * e - u.day + t + 1,
                        max: function() {
                            return this.min + 7 - 1
                        },
                        i: 1,
                        node: "td",
                        item: function(e) {
                            e = o.create([u.year, u.month, e + (a.firstDay ? 1 : 0)]);
                            var t, i = l && l.pick == e.pick,
                                r = c && c.pick == e.pick,
                                f = d && o.disabled(e) || e.pick < p.pick || e.pick > h.pick,
                                m = n.trigger(o.formats.toString, o, [a.format, e]);
                            return [n.node("div", e.date, (t = [a.klass.day], t.push(u.month == e.month ? a.klass.infocus : a.klass.outfocus), s.pick == e.pick && t.push(a.klass.now), i && t.push(a.klass.selected), r && t.push(a.klass.highlighted), f && t.push(a.klass.disabled), t.join(" ")), "data-pick=" + e.pick + " " + n.ariaAttr({
                                role: "gridcell",
                                label: m,
                                selected: !(!i || o.$node.val() !== m) || null,
                                activedescendant: !!r || null,
                                disabled: !!f || null
                            })), "", n.ariaAttr({
                                role: "presentation"
                            })]
                        }
                    })]
                }
            })), a.klass.table, 'id="' + o.$node[0].id + '_table" ' + n.ariaAttr({
                role: "grid",
                controls: o.$node[0].id,
                readonly: !0
            })) + n.node("div", n.node("button", a.today, a.klass.buttonToday, "type=button data-pick=" + s.pick + (e && !o.disabled(s) ? "" : " disabled") + " " + n.ariaAttr({
                controls: o.$node[0].id
            })) + n.node("button", a.clear, a.klass.buttonClear, "type=button data-clear=1" + (e ? "" : " disabled") + " " + n.ariaAttr({
                controls: o.$node[0].id
            })) + n.node("button", a.close, a.klass.buttonClose, "type=button data-close=true " + (e ? "" : " disabled") + " " + n.ariaAttr({
                controls: o.$node[0].id
            })), a.klass.footer)
        }, o.defaults = {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            today: "Today",
            clear: "Clear",
            close: "Close",
            closeOnSelect: !0,
            closeOnClear: !0,
            format: "d mmmm, yyyy",
            klass: {
                table: (i = e.klasses().picker + "__") + "table",
                header: i + "header",
                navPrev: i + "nav--prev",
                navNext: i + "nav--next",
                navDisabled: i + "nav--disabled",
                month: i + "month",
                year: i + "year",
                selectMonth: i + "select--month",
                selectYear: i + "select--year",
                weekdays: i + "weekday",
                day: i + "day",
                disabled: i + "day--disabled",
                selected: i + "day--selected",
                highlighted: i + "day--highlighted",
                now: i + "day--today",
                infocus: i + "day--infocus",
                outfocus: i + "day--outfocus",
                footer: i + "footer",
                buttonClear: i + "button--clear",
                buttonToday: i + "button--today",
                buttonClose: i + "button--close"
            }
        }, e.extend("pickadate", o)
    }), $.extend($.fn.pickadate.defaults, {
    selectMonths: !0,
    selectYears: 15,
    onRender: function() {
        var e = this.$root,
            t = this.get("highlight", "yyyy"),
            i = this.get("highlight", "dd"),
            n = this.get("highlight", "mmm"),
            o = this.get("highlight", "dddd");
        e.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + o + '</div><div class="picker__month-display"><div>' + n + '</div></div><div class="picker__day-display"><div>' + i + '</div></div><div    class="picker__year-display"><div>' + t + "</div></div></div>")
    }
}),
    function() {
        var e, t, i, n = window.jQuery,
            o = n(window),
            a = n(document),
            r = "http://www.w3.org/2000/svg",
            s = "SVGAngle" in window && ((t = document.createElement("div")).innerHTML = "<svg/>", e = (t.firstChild && t.firstChild.namespaceURI) == r, t.innerHTML = "", e),
            l = "transition" in (i = document.createElement("div").style) || "WebkitTransition" in i || "MozTransition" in i || "msTransition" in i || "OTransition" in i,
            c = "ontouchstart" in window,
            u = "mousedown" + (c ? " touchstart" : ""),
            d = "mousemove.clockpicker" + (c ? " touchmove.clockpicker" : ""),
            p = "mouseup.clockpicker" + (c ? " touchend.clockpicker" : ""),
            h = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null;

        function f(e) {
            return document.createElementNS(r, e)
        }

        function m(e, t, i) {
            var n;
            return function() {
                var o = this,
                    a = arguments,
                    r = i && !n;
                clearTimeout(n), n = setTimeout(function() {
                    n = null, i || e.apply(o, a)
                }, t), r && e.apply(o, a)
            }
        }

        function v(e) {
            return (e < 10 ? "0" : "") + e
        }
        var g = 0;
        var y = 135,
            b = 110,
            w = 80,
            x = 20,
            k = 2 * y,
            S = l ? 350 : 1,
            C = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");

        function T(e, t) {
            var i, o, r = n(C),
                l = r.find(".clockpicker-plate"),
                c = r.find(".picker__holder"),
                h = r.find(".clockpicker-hours"),
                T = r.find(".clockpicker-minutes"),
                M = r.find(".clockpicker-am-pm-block"),
                P = "INPUT" === e.prop("tagName"),
                E = P ? e : e.find("input"),
                A = (E.prop("type"), n("label[for=" + E.attr("id") + "]")),
                $ = this;
            if (this.id = (o = ++g + "", (i = "cp") ? i + o : o), this.element = e, this.holder = c, this.options = t, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = P, this.input = E, this.label = A, this.popover = r, this.plate = l, this.hoursView = h, this.minutesView = T, this.amPmBlock = M, this.spanHours = r.find(".clockpicker-span-hours"), this.spanMinutes = r.find(".clockpicker-span-minutes"), this.spanAmPm = r.find(".clockpicker-span-am-pm"), this.footer = r.find(".picker__footer"), this.amOrPm = "", t.twelvehour) {
                var I = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
                n(I);
                t.ampmclickable ? (this.spanAmPm.empty(), n('<div id="click-am">AM</div>').on("click", function() {
                    $.spanAmPm.children("#click-am").addClass("text-primary"), $.spanAmPm.children("#click-pm").removeClass("text-primary"), $.amOrPm = "AM"
                }).appendTo(this.spanAmPm), n('<div id="click-pm">PM</div>').on("click", function() {
                    $.spanAmPm.children("#click-pm").addClass("text-primary"), $.spanAmPm.children("#click-am").removeClass("text-primary"), $.amOrPm = "PM"
                }).appendTo(this.spanAmPm)) : (n('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function() {
                    $.amOrPm = "AM", $.amPmBlock.children(".pm-button").removeClass("active"), $.amPmBlock.children(".am-button").addClass("active"), $.spanAmPm.empty().append("AM")
                }).appendTo(this.amPmBlock), n('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function() {
                    $.amOrPm = "PM", $.amPmBlock.children(".am-button").removeClass("active"), $.amPmBlock.children(".pm-button").addClass("active"), $.spanAmPm.empty().append("PM")
                }).appendTo(this.amPmBlock))
            }
            t.darktheme && r.addClass("darktheme"), n('<button type="button" class="btn btn-flat clockpicker-button" tabindex="' + (t.twelvehour ? "3" : "1") + '">' + t.donetext + "</button>").click(n.proxy(this.done, this)).appendTo(this.footer), n('<button type="button" class="btn btn-flat clockpicker-button" tabindex="' + (t.twelvehour ? "4" : "2") + '">' + t.cleartext + "</button>").click(n.proxy(this.clearInput, this)).appendTo(this.footer), this.spanHours.click(n.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(n.proxy(this.toggleView, this, "minutes")), E.on("focus.clockpicker click.clockpicker", m(n.proxy(this.show, this), 300));
            var _, D, L, R, W = n('<div class="clockpicker-tick"></div>');
            if (t.twelvehour)
                for (_ = 0; _ < 12; _ += t.hourstep) D = W.clone(), L = _ / 6 * Math.PI, R = b, D.css("font-size", "140%"), D.css({
                    left: y + Math.sin(L) * R - x,
                    top: y - Math.cos(L) * R - x
                }), D.html(0 === _ ? 12 : _), h.append(D), D.on(u, F);
            else
                for (_ = 0; _ < 24; _ += t.hourstep) {
                    D = W.clone(), L = _ / 6 * Math.PI;
                    var V = _ > 0 && _ < 13;
                    R = V ? w : b, D.css({
                        left: y + Math.sin(L) * R - x,
                        top: y - Math.cos(L) * R - x
                    }), V && D.css("font-size", "120%"), D.html(0 === _ ? "00" : _), h.append(D), D.on(u, F)
                }
            var H = Math.max(t.minutestep, 5);
            for (_ = 0; _ < 60; _ += H)
                for (_ = 0; _ < 60; _ += 5) D = W.clone(), L = _ / 30 * Math.PI, D.css({
                    left: y + Math.sin(L) * b - x,
                    top: y - Math.cos(L) * b - x
                }), D.css("font-size", "140%"), D.html(v(_)), T.append(D), D.on(u, F);

            function F(e, i) {
                var n = l.offset(),
                    o = /^touch/.test(e.type),
                    r = n.left + y,
                    c = n.top + y,
                    u = (o ? e.originalEvent.touches[0] : e).pageX - r,
                    h = (o ? e.originalEvent.touches[0] : e).pageY - c,
                    f = Math.sqrt(u * u + h * h),
                    m = !1;
                if (!i || !(f < b - x || f > b + x)) {
                    e.preventDefault();
                    var v = setTimeout(function() {
                        $.popover.addClass("clockpicker-moving")
                    }, 200);
                    s && l.append($.canvas), $.setHand(u, h, !i, !0), a.off(d).on(d, function(e) {
                        e.preventDefault();
                        var t = /^touch/.test(e.type),
                            i = (t ? e.originalEvent.touches[0] : e).pageX - r,
                            n = (t ? e.originalEvent.touches[0] : e).pageY - c;
                        (m || i !== u || n !== h) && (m = !0, $.setHand(i, n, !1, !0))
                    }), a.off(p).on(p, function(e) {
                        a.off(p), e.preventDefault();
                        var n = /^touch/.test(e.type),
                            o = (n ? e.originalEvent.changedTouches[0] : e).pageX - r,
                            s = (n ? e.originalEvent.changedTouches[0] : e).pageY - c;
                        (i || m) && o === u && s === h && $.setHand(o, s), "hours" === $.currentView ? $.toggleView("minutes", S / 2) : t.autoclose && ($.minutesView.addClass("clockpicker-dial-out"), setTimeout(function() {
                            $.done()
                        }, S / 2)), l.prepend(Y), clearTimeout(v), $.popover.removeClass("clockpicker-moving"), a.off(d)
                    })
                }
            }
            if (l.on(u, function(e) {
                0 === n(e.target).closest(".clockpicker-tick").length && F(e, !0)
            }), s) {
                var Y = r.find(".clockpicker-canvas"),
                    X = f("svg");
                X.setAttribute("class", "clockpicker-svg"), X.setAttribute("width", k), X.setAttribute("height", k);
                var N = f("g");
                N.setAttribute("transform", "translate(" + y + "," + y + ")");
                var j = f("circle");
                j.setAttribute("class", "clockpicker-canvas-bearing"), j.setAttribute("cx", 0), j.setAttribute("cy", 0), j.setAttribute("r", 2);
                var z = f("line");
                z.setAttribute("x1", 0), z.setAttribute("y1", 0);
                var B = f("circle");
                B.setAttribute("class", "clockpicker-canvas-bg"), B.setAttribute("r", x);
                var q = f("circle");
                q.setAttribute("class", "clockpicker-canvas-fg"), q.setAttribute("r", 5), N.appendChild(z), N.appendChild(B), N.appendChild(q), N.appendChild(j), X.appendChild(N), Y.append(X), this.hand = z, this.bg = B, this.fg = q, this.bearing = j, this.g = N, this.canvas = Y
            }
            O(this.options.init)
        }

        function O(e) {
            e && "function" == typeof e && e()
        }
        T.DEFAULTS = {
            default: "",
            fromnow: 0,
            donetext: "Done",
            cleartext: "Clear",
            autoclose: !1,
            ampmclickable: !1,
            darktheme: !1,
            twelvehour: !1,
            vibrate: !0,
            hourstep: 1,
            minutestep: 1,
            ampmSubmit: !1
        }, T.prototype.toggle = function() {
            this[this.isShown ? "hide" : "show"]()
        }, T.prototype.locate = function() {
            var e = this.element,
                t = this.popover;
            e.offset(), e.outerWidth(), e.outerHeight(), this.options.align;
            t.show()
        }, T.prototype.parseInputValue = function() {
            var e = this.input.prop("value") || this.options.default || "";
            if ("now" === e && (e = new Date(+new Date + this.options.fromnow)), e instanceof Date && (e = e.getHours() + ":" + e.getMinutes()), e = e.split(":"), this.hours = +e[0] || 0, this.minutes = +(e[1] + "").replace(/\D/g, "") || 0, this.hours = Math.round(this.hours / this.options.hourstep) * this.options.hourstep, this.minutes = Math.round(this.minutes / this.options.minutestep) * this.options.minutestep, this.options.twelvehour) {
                var t = (e[1] + "").replace(/\d+/g, "").toLowerCase();
                this.amOrPm = this.hours > 12 || "pm" === t ? "PM" : "AM"
            }
        }, T.prototype.show = function(e) {
            if (!this.isShown) {
                O(this.options.beforeShow), n(":input").each(function() {
                    n(this).attr("tabindex", -1)
                });
                var t = this;
                this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), n(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), o.on("resize.clockpicker" + this.id, function() {
                    t.isShown && t.locate()
                }), this.isAppended = !0), this.parseInputValue(), this.spanHours.html(v(this.hours)), this.spanMinutes.html(v(this.minutes)), this.options.twelvehour && this.spanAmPm.empty().append(this.amOrPm), this.toggleView("hours"), this.locate(), this.isShown = !0, a.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, m(function(e) {
                    var i = n(e.target);
                    0 === i.closest(t.popover.find(".picker__wrap")).length && 0 === i.closest(t.input).length && t.hide()
                }, 300)), a.on("keyup.clockpicker." + this.id, m(function(e) {
                    27 === e.keyCode && t.hide()
                }, 300)), O(this.options.afterShow)
            }
        }, T.prototype.hide = function() {
            O(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), n(document.body).css("overflow", "visible"), this.isShown = !1, n(":input").each(function(e) {
                n(this).attr("tabindex", e + 1)
            }), a.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), a.off("keyup.clockpicker." + this.id), this.popover.hide(), O(this.options.afterHide)
        }, T.prototype.toggleView = function(e, t) {
            var i = !1;
            "minutes" === e && "visible" === n(this.hoursView).css("visibility") && (O(this.options.beforeHourSelect), i = !0);
            var o = "hours" === e,
                a = o ? this.hoursView : this.minutesView,
                r = o ? this.minutesView : this.hoursView;
            this.currentView = e, this.spanHours.toggleClass("text-primary", o), this.spanMinutes.toggleClass("text-primary", !o), r.addClass("clockpicker-dial-out"), a.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(t), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function() {
                r.css("visibility", "hidden")
            }, S), i && O(this.options.afterHourSelect)
        }, T.prototype.resetClock = function(e) {
            var t = this.currentView,
                i = this[t],
                n = "hours" === t,
                o = i * (Math.PI / (n ? 6 : 30)),
                a = n && i > 0 && i < 13 ? w : b,
                r = Math.sin(o) * a,
                l = -Math.cos(o) * a,
                c = this;
            s && e ? (c.canvas.addClass("clockpicker-canvas-out"), setTimeout(function() {
                c.canvas.removeClass("clockpicker-canvas-out"), c.setHand(r, l)
            }, e)) : this.setHand(r, l)
        }, T.prototype.setHand = function(e, t, i, o) {
            var a, r, l = Math.atan2(e, -t),
                c = "hours" === this.currentView,
                u = Math.sqrt(e * e + t * t),
                d = this.options,
                p = c && u < (b + w) / 2,
                f = p ? w : b;
            if (a = c ? d.hourstep / 6 * Math.PI : d.minutestep / 30 * Math.PI, d.twelvehour && (f = b), l < 0 && (l = 2 * Math.PI + l), l = (r = Math.round(l / a)) * a, c ? (r *= d.hourstep, d.twelvehour || !p != r > 0 || (r += 12), d.twelvehour && 0 === r && (r = 12), 24 === r && (r = 0)) : 60 === (r *= d.minutestep) && (r = 0), c ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : r % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== r && h && this.options.vibrate && (this.vibrateTimer || (navigator[h](10), this.vibrateTimer = setTimeout(n.proxy(function() {
                this.vibrateTimer = null
            }, this), 100))), this[this.currentView] = r, this[c ? "spanHours" : "spanMinutes"].html(v(r)), s) {
                o || !c && r % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
                var m = Math.sin(l) * f,
                    g = -Math.cos(l) * f;
                this.hand.setAttribute("x2", m), this.hand.setAttribute("y2", g), this.bg.setAttribute("cx", m), this.bg.setAttribute("cy", g), this.fg.setAttribute("cx", m), this.fg.setAttribute("cy", g)
            } else this[c ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function() {
                var e = n(this);
                e.toggleClass("active", r === +e.html())
            })
        }, T.prototype.clearInput = function() {
            this.input.val(""), this.hide(), this.options.afterDone && "function" == typeof this.options.afterDone && this.options.afterDone(this.input, null)
        }, T.prototype.getTime = function(e) {
            this.parseInputValue();
            var t = this.hours;
            this.options.twelvehour && t < 12 && "PM" === this.amOrPm && (t += 12);
            var i = new Date;
            return i.setMinutes(this.minutes), i.setHours(t), i.setSeconds(0), e && e.apply(this.element, i) || i
        }, T.prototype.done = function() {
            O(this.options.beforeDone), this.hide(), this.label.addClass("active");
            var e = this.input.prop("value"),
                t = this.hours,
                i = ":" + v(this.minutes);
            this.isHTML5 && this.options.twelvehour && (this.hours < 12 && "PM" === this.amOrPm && (t += 12), 12 === this.hours && "AM" === this.amOrPm && (t = 0)), i = v(t) + i, !this.isHTML5 && this.options.twelvehour && (i += this.amOrPm), this.input.prop("value", i), i !== e && (this.input.trigger("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), O(this.options.afterDone)
        }, T.prototype.remove = function() {
            this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (o.off("resize.clockpicker" + this.id), this.popover.remove())
        }, n.fn.pickatime = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);

            function i() {
                var i = n(this),
                    o = i.data("clockpicker");
                if (o) "function" == typeof o[e] && o[e].apply(o, t);
                else {
                    var a = n.extend({}, T.DEFAULTS, i.data(), "object" == typeof e && e);
                    i.data("clockpicker", new T(i, a))
                }
            }
            if (1 == this.length) {
                var o = i.apply(this[0]);
                return void 0 !== o ? o : this
            }
            return this.each(i)
        }
    }(),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
    }(this, function() {
        "use strict";
        return function(e, t, i, n) {
            var o = {
                features: null,
                bind: function(e, t, i, n) {
                    var o = (n ? "remove" : "add") + "EventListener";
                    t = t.split(" ");
                    for (var a = 0; a < t.length; a++) t[a] && e[o](t[a], i, !1)
                },
                isArray: function(e) {
                    return e instanceof Array
                },
                createEl: function(e, t) {
                    var i = document.createElement(t || "div");
                    return e && (i.className = e), i
                },
                getScrollY: function() {
                    var e = window.pageYOffset;
                    return void 0 !== e ? e : document.documentElement.scrollTop
                },
                unbind: function(e, t, i) {
                    o.bind(e, t, i, !0)
                },
                removeClass: function(e, t) {
                    var i = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                },
                addClass: function(e, t) {
                    o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
                },
                hasClass: function(e, t) {
                    return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                },
                getChildByClass: function(e, t) {
                    for (var i = e.firstChild; i;) {
                        if (o.hasClass(i, t)) return i;
                        i = i.nextSibling
                    }
                },
                arraySearch: function(e, t, i) {
                    for (var n = e.length; n--;)
                        if (e[n][i] === t) return n;
                    return -1
                },
                extend: function(e, t, i) {
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            if (i && e.hasOwnProperty(n)) continue;
                            e[n] = t[n]
                        }
                },
                easing: {
                    sine: {
                        out: function(e) {
                            return Math.sin(e * (Math.PI / 2))
                        },
                        inOut: function(e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2
                        }
                    },
                    cubic: {
                        out: function(e) {
                            return --e * e * e + 1
                        }
                    }
                },
                detectFeatures: function() {
                    if (o.features) return o.features;
                    var e = o.createEl().style,
                        t = "",
                        i = {};
                    if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                        var n = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && 8 > a && (i.isOldIOSPhone = !0)
                        }
                        var r = n.match(/Android\s([0-9\.]*)/),
                            s = r ? r[1] : 0;
                        (s = parseFloat(s)) >= 1 && (4.4 > s && (i.isOldAndroid = !0), i.androidVersion = s), i.isMobileOpera = /opera mini|opera mobi/i.test(n)
                    }
                    for (var l, c, u = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], p = 0; 4 > p; p++) {
                        t = d[p];
                        for (var h = 0; 3 > h; h++) l = u[h], c = t + (t ? l.charAt(0).toUpperCase() + l.slice(1) : l), !i[l] && c in e && (i[l] = c);
                        t && !i.raf && (t = t.toLowerCase(), i.raf = window[t + "RequestAnimationFrame"], i.raf && (i.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]))
                    }
                    if (!i.raf) {
                        var f = 0;
                        i.raf = function(e) {
                            var t = (new Date).getTime(),
                                i = Math.max(0, 16 - (t - f)),
                                n = window.setTimeout(function() {
                                    e(t + i)
                                }, i);
                            return f = t + i, n
                        }, i.caf = function(e) {
                            clearTimeout(e)
                        }
                    }
                    return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
                }
            };
            o.detectFeatures(), o.features.oldIE && (o.bind = function(e, t, i, n) {
                t = t.split(" ");
                for (var o, a = (n ? "detach" : "attach") + "Event", r = function() {
                    i.handleEvent.call(i)
                }, s = 0; s < t.length; s++)
                    if (o = t[s])
                        if ("object" == typeof i && i.handleEvent) {
                            if (n) {
                                if (!i["oldIE" + o]) return !1
                            } else i["oldIE" + o] = r;
                            e[a]("on" + o, i["oldIE" + o])
                        } else e[a]("on" + o, i)
            });
            var a = this,
                r = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: .75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function(e) {
                        return "A" === e.tagName
                    },
                    getDoubleTapZoom: function(e, t) {
                        return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit"
                };
            o.extend(r, n);
            var s, l, c, u, d, p, h, f, m, v, g, y, b, w, x, k, S, C, T, O, M, P, E, A, $, I, _, D, L, R, W, V, H, F, Y, X, N, j, z, B, q, U, Z, K, Q, G, J, ee, te, ie, ne, oe, ae, re, se, le = {
                    x: 0,
                    y: 0
                },
                ce = {
                    x: 0,
                    y: 0
                },
                ue = {
                    x: 0,
                    y: 0
                },
                de = {},
                pe = 0,
                he = {},
                fe = {
                    x: 0,
                    y: 0
                },
                me = 0,
                ve = !0,
                ge = [],
                ye = {},
                be = !1,
                we = function(e, t) {
                    o.extend(a, t.publicMethods), ge.push(e)
                },
                xe = function(e) {
                    var t = Ft();
                    return e > t - 1 ? e - t : 0 > e ? t + e : e
                },
                ke = {},
                Se = function(e, t) {
                    return ke[e] || (ke[e] = []), ke[e].push(t)
                },
                Ce = function(e) {
                    var t = ke[e];
                    if (t) {
                        var i = Array.prototype.slice.call(arguments);
                        i.shift();
                        for (var n = 0; n < t.length; n++) t[n].apply(a, i)
                    }
                },
                Te = function() {
                    return (new Date).getTime()
                },
                Oe = function(e) {
                    ae = e, a.bg.style.opacity = e * r.bgOpacity
                },
                Me = function(e, t, i, n, o) {
                    (!be || o && o !== a.currItem) && (n /= o ? o.fitRatio : a.currItem.fitRatio), e[P] = y + t + "px, " + i + "px" + b + " scale(" + n + ")"
                },
                Pe = function(e) {
                    ee && (e && (v > a.currItem.fitRatio ? be || (Zt(a.currItem, !1, !0), be = !0) : be && (Zt(a.currItem), be = !1)), Me(ee, ue.x, ue.y, v))
                },
                Ee = function(e) {
                    e.container && Me(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
                },
                Ae = function(e, t) {
                    t[P] = y + e + "px, 0px" + b
                },
                $e = function(e, t) {
                    if (!r.loop && t) {
                        var i = u + (fe.x * pe - e) / fe.x,
                            n = Math.round(e - ct.x);
                        (0 > i && n > 0 || i >= Ft() - 1 && 0 > n) && (e = ct.x + n * r.mainScrollEndFriction)
                    }
                    ct.x = e, Ae(e, d)
                },
                Ie = function(e, t) {
                    var i = ut[e] - he[e];
                    return ce[e] + le[e] + i - i * (t / g)
                },
                _e = function(e, t) {
                    e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
                },
                De = function(e) {
                    e.x = Math.round(e.x), e.y = Math.round(e.y)
                },
                Le = null,
                Re = function() {
                    Le && (o.unbind(document, "mousemove", Re), o.addClass(e, "pswp--has_mouse"), r.mouseUsed = !0, Ce("mouseUsed")), Le = setTimeout(function() {
                        Le = null
                    }, 100)
                },
                We = function(e, t) {
                    var i = zt(a.currItem, de, e);
                    return t && (J = i), i
                },
                Ve = function(e) {
                    return e || (e = a.currItem), e.initialZoomLevel
                },
                He = function(e) {
                    return e || (e = a.currItem), e.w > 0 ? r.maxSpreadZoom : 1
                },
                Fe = function(e, t, i, n) {
                    return n === a.currItem.initialZoomLevel ? (i[e] = a.currItem.initialPosition[e], !0) : (i[e] = Ie(e, n), i[e] > t.min[e] ? (i[e] = t.min[e], !0) : i[e] < t.max[e] && (i[e] = t.max[e], !0))
                },
                Ye = function(e) {
                    var t = "";
                    r.escKey && 27 === e.keyCode ? t = "close" : r.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a[t]()))
                },
                Xe = function(e) {
                    e && (q || B || te || X) && (e.preventDefault(), e.stopPropagation())
                },
                Ne = function() {
                    a.setScrollOffset(0, o.getScrollY())
                },
                je = {},
                ze = 0,
                Be = function(e) {
                    je[e] && (je[e].raf && I(je[e].raf), ze--, delete je[e])
                },
                qe = function(e) {
                    je[e] && Be(e), je[e] || (ze++, je[e] = {})
                },
                Ue = function() {
                    for (var e in je) je.hasOwnProperty(e) && Be(e)
                },
                Ze = function(e, t, i, n, o, a, r) {
                    var s, l = Te();
                    qe(e);
                    var c = function() {
                        if (je[e]) {
                            if ((s = Te() - l) >= n) return Be(e), a(i), void(r && r());
                            a((i - t) * o(s / n) + t), je[e].raf = $(c)
                        }
                    };
                    c()
                },
                Ke = {
                    shout: Ce,
                    listen: Se,
                    viewportSize: de,
                    options: r,
                    isMainScrollAnimating: function() {
                        return te
                    },
                    getZoomLevel: function() {
                        return v
                    },
                    getCurrentIndex: function() {
                        return u
                    },
                    isDragging: function() {
                        return j
                    },
                    isZooming: function() {
                        return Q
                    },
                    setScrollOffset: function(e, t) {
                        he.x = e, R = he.y = t, Ce("updateScrollOffset", he)
                    },
                    applyZoomPan: function(e, t, i, n) {
                        ue.x = t, ue.y = i, v = e, Pe(n)
                    },
                    init: function() {
                        if (!s && !l) {
                            var i;
                            a.framework = o, a.template = e, a.bg = o.getChildByClass(e, "pswp__bg"), _ = e.className, s = !0, W = o.detectFeatures(), $ = W.raf, I = W.caf, P = W.transform, L = W.oldIE, a.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), a.container = o.getChildByClass(a.scrollWrap, "pswp__container"), d = a.container.style, a.itemHolders = k = [{
                                el: a.container.children[0],
                                wrap: 0,
                                index: -1
                            }, {
                                el: a.container.children[1],
                                wrap: 0,
                                index: -1
                            }, {
                                el: a.container.children[2],
                                wrap: 0,
                                index: -1
                            }], k[0].el.style.display = k[2].el.style.display = "none",
                                function() {
                                    if (P) {
                                        var t = W.perspective && !A;
                                        return y = "translate" + (t ? "3d(" : "("), void(b = W.perspective ? ", 0px)" : ")")
                                    }
                                    P = "left", o.addClass(e, "pswp--ie"), Ae = function(e, t) {
                                        t.left = e + "px"
                                    }, Ee = function(e) {
                                        var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                                            i = e.container.style,
                                            n = t * e.w,
                                            o = t * e.h;
                                        i.width = n + "px", i.height = o + "px", i.left = e.initialPosition.x + "px", i.top = e.initialPosition.y + "px"
                                    }, Pe = function() {
                                        if (ee) {
                                            var e = ee,
                                                t = a.currItem,
                                                i = t.fitRatio > 1 ? 1 : t.fitRatio,
                                                n = i * t.w,
                                                o = i * t.h;
                                            e.width = n + "px", e.height = o + "px", e.left = ue.x + "px", e.top = ue.y + "px"
                                        }
                                    }
                                }(), m = {
                                resize: a.updateSize,
                                scroll: Ne,
                                keydown: Ye,
                                click: Xe
                            };
                            var n = W.isOldIOSPhone || W.isOldAndroid || W.isMobileOpera;
                            for (W.animationName && W.transform && !n || (r.showAnimationDuration = r.hideAnimationDuration = 0), i = 0; i < ge.length; i++) a["init" + ge[i]]();
                            t && (a.ui = new t(a, o)).init(), Ce("firstUpdate"), u = u || r.index || 0, (isNaN(u) || 0 > u || u >= Ft()) && (u = 0), a.currItem = Ht(u), (W.isOldIOSPhone || W.isOldAndroid) && (ve = !1), e.setAttribute("aria-hidden", "false"), r.modal && (ve ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === R && (Ce("initialLayout"), R = D = o.getScrollY());
                            var c = "pswp--open ";
                            for (r.mainClass && (c += r.mainClass + " "), r.showHideOpacity && (c += "pswp--animate_opacity "), c += A ? "pswp--touch" : "pswp--notouch", c += W.animationName ? " pswp--css_animation" : "", c += W.svg ? " pswp--svg" : "", o.addClass(e, c), a.updateSize(), p = -1, me = null, i = 0; 3 > i; i++) Ae((i + p) * fe.x, k[i].el.style);
                            L || o.bind(a.scrollWrap, f, a), Se("initialZoomInEnd", function() {
                                a.setContent(k[0], u - 1), a.setContent(k[2], u + 1), k[0].el.style.display = k[2].el.style.display = "block", r.focus && e.focus(), o.bind(document, "keydown", a), W.transform && o.bind(a.scrollWrap, "click", a), r.mouseUsed || o.bind(document, "mousemove", Re), o.bind(window, "resize scroll", a), Ce("bindEvents")
                            }), a.setContent(k[1], u), a.updateCurrItem(), Ce("afterInit"), ve || (w = setInterval(function() {
                                ze || j || Q || v !== a.currItem.initialZoomLevel || a.updateSize()
                            }, 1e3)), o.addClass(e, "pswp--visible")
                        }
                    },
                    close: function() {
                        s && (s = !1, l = !0, Ce("close"), o.unbind(window, "resize", a), o.unbind(window, "scroll", m.scroll), o.unbind(document, "keydown", a), o.unbind(document, "mousemove", Re), W.transform && o.unbind(a.scrollWrap, "click", a), j && o.unbind(window, h, a), Ce("unbindEvents"), Yt(a.currItem, null, !0, a.destroy))
                    },
                    destroy: function() {
                        Ce("destroy"), Lt && clearTimeout(Lt), e.setAttribute("aria-hidden", "true"), e.className = _, w && clearInterval(w), o.unbind(a.scrollWrap, f, a), o.unbind(window, "scroll", a), ht(), Ue(), ke = null
                    },
                    panTo: function(e, t, i) {
                        i || (e > J.min.x ? e = J.min.x : e < J.max.x && (e = J.max.x), t > J.min.y ? t = J.min.y : t < J.max.y && (t = J.max.y)), ue.x = e, ue.y = t, Pe()
                    },
                    handleEvent: function(e) {
                        e = e || window.event, m[e.type] && m[e.type](e)
                    },
                    goTo: function(e) {
                        var t = (e = xe(e)) - u;
                        me = t, u = e, a.currItem = Ht(u), pe -= t, $e(fe.x * pe), Ue(), te = !1, a.updateCurrItem()
                    },
                    next: function() {
                        a.goTo(u + 1)
                    },
                    prev: function() {
                        a.goTo(u - 1)
                    },
                    updateCurrZoomItem: function(e) {
                        if (e && Ce("beforeChange", 0), k[1].el.children.length) {
                            var t = k[1].el.children[0];
                            ee = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                        } else ee = null;
                        J = a.currItem.bounds, g = v = a.currItem.initialZoomLevel, ue.x = J.center.x, ue.y = J.center.y, e && Ce("afterChange")
                    },
                    invalidateCurrItems: function() {
                        x = !0;
                        for (var e = 0; 3 > e; e++) k[e].item && (k[e].item.needsUpdate = !0)
                    },
                    updateCurrItem: function(e) {
                        if (0 !== me) {
                            var t, i = Math.abs(me);
                            if (!(e && 2 > i)) {
                                a.currItem = Ht(u), be = !1, Ce("beforeChange", me), i >= 3 && (p += me + (me > 0 ? -3 : 3), i = 3);
                                for (var n = 0; i > n; n++) me > 0 ? (t = k.shift(), k[2] = t, Ae((++p + 2) * fe.x, t.el.style), a.setContent(t, u - i + n + 1 + 1)) : (t = k.pop(), k.unshift(t), Ae(--p * fe.x, t.el.style), a.setContent(t, u + i - n - 1 - 1));
                                if (ee && 1 === Math.abs(me)) {
                                    var o = Ht(S);
                                    o.initialZoomLevel !== v && (zt(o, de), Zt(o), Ee(o))
                                }
                                me = 0, a.updateCurrZoomItem(), S = u, Ce("afterChange")
                            }
                        }
                    },
                    updateSize: function(t) {
                        if (!ve && r.modal) {
                            var i = o.getScrollY();
                            if (R !== i && (e.style.top = i + "px", R = i), !t && ye.x === window.innerWidth && ye.y === window.innerHeight) return;
                            ye.x = window.innerWidth, ye.y = window.innerHeight, e.style.height = ye.y + "px"
                        }
                        if (de.x = a.scrollWrap.clientWidth, de.y = a.scrollWrap.clientHeight, Ne(), fe.x = de.x + Math.round(de.x * r.spacing), fe.y = de.y, $e(fe.x * pe), Ce("beforeResize"), void 0 !== p) {
                            for (var n, s, l, c = 0; 3 > c; c++) n = k[c], Ae((c + p) * fe.x, n.el.style), l = u + c - 1, r.loop && Ft() > 2 && (l = xe(l)), (s = Ht(l)) && (x || s.needsUpdate || !s.bounds) ? (a.cleanSlide(s), a.setContent(n, l), 1 === c && (a.currItem = s, a.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === n.index && l >= 0 && a.setContent(n, l), s && s.container && (zt(s, de), Zt(s), Ee(s));
                            x = !1
                        }
                        g = v = a.currItem.initialZoomLevel, (J = a.currItem.bounds) && (ue.x = J.center.x, ue.y = J.center.y, Pe(!0)), Ce("resize")
                    },
                    zoomTo: function(e, t, i, n, a) {
                        t && (g = v, ut.x = Math.abs(t.x) - ue.x, ut.y = Math.abs(t.y) - ue.y, _e(ce, ue));
                        var r = We(e, !1),
                            s = {};
                        Fe("x", r, s, e), Fe("y", r, s, e);
                        var l = v,
                            c = ue.x,
                            u = ue.y;
                        De(s);
                        var d = function(t) {
                            1 === t ? (v = e, ue.x = s.x, ue.y = s.y) : (v = (e - l) * t + l, ue.x = (s.x - c) * t + c, ue.y = (s.y - u) * t + u), a && a(t), Pe(1 === t)
                        };
                        i ? Ze("customZoomTo", 0, 1, i, n || o.easing.sine.inOut, d) : d(1)
                    }
                },
                Qe = {},
                Ge = {},
                Je = {},
                et = {},
                tt = {},
                it = [],
                nt = {},
                ot = [],
                at = {},
                rt = 0,
                st = {
                    x: 0,
                    y: 0
                },
                lt = 0,
                ct = {
                    x: 0,
                    y: 0
                },
                ut = {
                    x: 0,
                    y: 0
                },
                dt = {
                    x: 0,
                    y: 0
                },
                pt = function(e, t) {
                    return at.x = Math.abs(e.x - t.x), at.y = Math.abs(e.y - t.y), Math.sqrt(at.x * at.x + at.y * at.y)
                },
                ht = function() {
                    U && (I(U), U = null)
                },
                ft = function() {
                    j && (U = $(ft), Pt())
                },
                mt = function(e, t) {
                    return !(!e || e === document) && !(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : mt(e.parentNode, t))
                },
                vt = {},
                gt = function(e, t) {
                    return vt.prevent = !mt(e.target, r.isClickableElement), Ce("preventDragEvent", e, t, vt), vt.prevent
                },
                yt = function(e, t) {
                    return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
                },
                bt = function(e, t, i) {
                    i.x = .5 * (e.x + t.x), i.y = .5 * (e.y + t.y)
                },
                wt = function() {
                    var e = ue.y - a.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (de.y / 2))
                },
                xt = {},
                kt = {},
                St = [],
                Ct = function(e) {
                    for (; St.length > 0;) St.pop();
                    return E ? (se = 0, it.forEach(function(e) {
                        0 === se ? St[0] = e : 1 === se && (St[1] = e), se++
                    })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (St[0] = yt(e.touches[0], xt), e.touches.length > 1 && (St[1] = yt(e.touches[1], kt))) : (xt.x = e.pageX, xt.y = e.pageY, xt.id = "", St[0] = xt), St
                },
                Tt = function(e, t) {
                    var i, n, o, s, l = ue[e] + t[e],
                        c = t[e] > 0,
                        u = ct.x + t.x,
                        d = ct.x - nt.x;
                    return i = l > J.min[e] || l < J.max[e] ? r.panEndFriction : 1, l = ue[e] + t[e] * i, !r.allowPanToNext && v !== a.currItem.initialZoomLevel || (ee ? "h" !== ie || "x" !== e || B || (c ? (l > J.min[e] && (i = r.panEndFriction, J.min[e], n = J.min[e] - ce[e]), (0 >= n || 0 > d) && Ft() > 1 ? (s = u, 0 > d && u > nt.x && (s = nt.x)) : J.min.x !== J.max.x && (o = l)) : (l < J.max[e] && (i = r.panEndFriction, J.max[e], n = ce[e] - J.max[e]), (0 >= n || d > 0) && Ft() > 1 ? (s = u, d > 0 && u < nt.x && (s = nt.x)) : J.min.x !== J.max.x && (o = l))) : s = u, "x" !== e) ? void(te || Z || v > a.currItem.fitRatio && (ue[e] += t[e] * i)) : (void 0 !== s && ($e(s, !0), Z = s !== nt.x), J.min.x !== J.max.x && (void 0 !== o ? ue.x = o : Z || (ue.x += t.x * i)), void 0 !== s)
                },
                Ot = function(e) {
                    if (!("mousedown" === e.type && e.button > 0)) {
                        if (Vt) return void e.preventDefault();
                        if (!N || "mousedown" !== e.type) {
                            if (gt(e, !0) && e.preventDefault(), Ce("pointerDown"), E) {
                                var t = o.arraySearch(it, e.pointerId, "id");
                                0 > t && (t = it.length), it[t] = {
                                    x: e.pageX,
                                    y: e.pageY,
                                    id: e.pointerId
                                }
                            }
                            var i = Ct(e),
                                n = i.length;
                            K = null, Ue(), j && 1 !== n || (j = ne = !0, o.bind(window, h, a), Y = re = oe = X = Z = q = z = B = !1, ie = null, Ce("firstTouchStart", i), _e(ce, ue), le.x = le.y = 0, _e(et, i[0]), _e(tt, et), nt.x = fe.x * pe, ot = [{
                                x: et.x,
                                y: et.y
                            }], H = V = Te(), We(v, !0), ht(), ft()), !Q && n > 1 && !te && !Z && (g = v, B = !1, Q = z = !0, le.y = le.x = 0, _e(ce, ue), _e(Qe, i[0]), _e(Ge, i[1]), bt(Qe, Ge, dt), ut.x = Math.abs(dt.x) - ue.x, ut.y = Math.abs(dt.y) - ue.y, G = pt(Qe, Ge))
                        }
                    }
                },
                Mt = function(e) {
                    if (e.preventDefault(), E) {
                        var t = o.arraySearch(it, e.pointerId, "id");
                        if (t > -1) {
                            var i = it[t];
                            i.x = e.pageX, i.y = e.pageY
                        }
                    }
                    if (j) {
                        var n = Ct(e);
                        if (ie || q || Q) K = n;
                        else if (ct.x !== fe.x * pe) ie = "h";
                        else {
                            var a = Math.abs(n[0].x - et.x) - Math.abs(n[0].y - et.y);
                            Math.abs(a) >= 10 && (ie = a > 0 ? "h" : "v", K = n)
                        }
                    }
                },
                Pt = function() {
                    if (K) {
                        var e = K.length;
                        if (0 !== e)
                            if (_e(Qe, K[0]), Je.x = Qe.x - et.x, Je.y = Qe.y - et.y, Q && e > 1) {
                                if (et.x = Qe.x, et.y = Qe.y, !Je.x && !Je.y && function(e, t) {
                                    return e.x === t.x && e.y === t.y
                                }(K[1], Ge)) return;
                                _e(Ge, K[1]), B || (B = !0, Ce("zoomGestureStarted"));
                                var t = pt(Qe, Ge),
                                    i = _t(t);
                                i > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (re = !0);
                                var n = 1,
                                    o = Ve(),
                                    s = He();
                                if (o > i)
                                    if (r.pinchToClose && !re && g <= a.currItem.initialZoomLevel) {
                                        var l = 1 - (o - i) / (o / 1.2);
                                        Oe(l), Ce("onPinchClose", l), oe = !0
                                    } else(n = (o - i) / o) > 1 && (n = 1), i = o - n * (o / 3);
                                else i > s && ((n = (i - s) / (6 * o)) > 1 && (n = 1), i = s + n * o);
                                0 > n && (n = 0), bt(Qe, Ge, st), le.x += st.x - dt.x, le.y += st.y - dt.y, _e(dt, st), ue.x = Ie("x", i), ue.y = Ie("y", i), Y = i > v, v = i, Pe()
                            } else {
                                if (!ie) return;
                                if (ne && (ne = !1, Math.abs(Je.x) >= 10 && (Je.x -= K[0].x - tt.x), Math.abs(Je.y) >= 10 && (Je.y -= K[0].y - tt.y)), et.x = Qe.x, et.y = Qe.y, 0 === Je.x && 0 === Je.y) return;
                                if ("v" === ie && r.closeOnVerticalDrag && "fit" === r.scaleMode && v === a.currItem.initialZoomLevel) {
                                    le.y += Je.y, ue.y += Je.y;
                                    var c = wt();
                                    return X = !0, Ce("onVerticalDrag", c), Oe(c), void Pe()
                                }(function(e, t, i) {
                                    if (e - H > 50) {
                                        var n = ot.length > 2 ? ot.shift() : {};
                                        n.x = t, n.y = i, ot.push(n), H = e
                                    }
                                })(Te(), Qe.x, Qe.y), q = !0, J = a.currItem.bounds, Tt("x", Je) || (Tt("y", Je), De(ue), Pe())
                            }
                    }
                },
                Et = function(e) {
                    if (W.isOldAndroid) {
                        if (N && "mouseup" === e.type) return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(N), N = setTimeout(function() {
                            N = 0
                        }, 600))
                    }
                    var t;
                    if (Ce("pointerUp"), gt(e, !1) && e.preventDefault(), E) {
                        var i = o.arraySearch(it, e.pointerId, "id");
                        i > -1 && (t = it.splice(i, 1)[0], navigator.pointerEnabled ? t.type = e.pointerType || "mouse" : (t.type = {
                            4: "mouse",
                            2: "touch",
                            3: "pen"
                        }[e.pointerType], t.type || (t.type = e.pointerType || "mouse")))
                    }
                    var n, s = Ct(e),
                        l = s.length;
                    if ("mouseup" === e.type && (l = 0), 2 === l) return K = null, !0;
                    1 === l && _e(tt, s[0]), 0 !== l || ie || te || (t || ("mouseup" === e.type ? t = {
                        x: e.pageX,
                        y: e.pageY,
                        type: "mouse"
                    } : e.changedTouches && e.changedTouches[0] && (t = {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY,
                        type: "touch"
                    })), Ce("touchRelease", e, t));
                    var c = -1;
                    if (0 === l && (j = !1, o.unbind(window, h, a), ht(), Q ? c = 0 : -1 !== lt && (c = Te() - lt)), lt = 1 === l ? Te() : -1, n = -1 !== c && 150 > c ? "zoom" : "swipe", Q && 2 > l && (Q = !1, 1 === l && (n = "zoomPointerUp"), Ce("zoomGestureEnded")), K = null, q || B || te || X)
                        if (Ue(), F || (F = At()), F.calculateSwipeSpeed("x"), X)
                            if (wt() < r.verticalDragRange) a.close();
                            else {
                                var u = ue.y,
                                    d = ae;
                                Ze("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(e) {
                                    ue.y = (a.currItem.initialPosition.y - u) * e + u, Oe((1 - d) * e + d), Pe()
                                }), Ce("onVerticalDrag", 1)
                            } else {
                            if ((Z || te) && 0 === l) {
                                if (It(n, F)) return;
                                n = "zoomPointerUp"
                            }
                            if (!te) return "swipe" !== n ? void Dt() : void(!Z && v > a.currItem.fitRatio && $t(F))
                        }
                },
                At = function() {
                    var e, t, i = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function(n) {
                            ot.length > 1 ? (e = Te() - H + 50, t = ot[ot.length - 2][n]) : (e = Te() - V, t = tt[n]), i.lastFlickOffset[n] = et[n] - t, i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]), i.lastFlickDist[n] > 20 ? i.lastFlickSpeed[n] = i.lastFlickOffset[n] / e : i.lastFlickSpeed[n] = 0, Math.abs(i.lastFlickSpeed[n]) < .1 && (i.lastFlickSpeed[n] = 0), i.slowDownRatio[n] = .95, i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n], i.speedDecelerationRatio[n] = 1
                        },
                        calculateOverBoundsAnimOffset: function(e, t) {
                            i.backAnimStarted[e] || (ue[e] > J.min[e] ? i.backAnimDestination[e] = J.min[e] : ue[e] < J.max[e] && (i.backAnimDestination[e] = J.max[e]), void 0 !== i.backAnimDestination[e] && (i.slowDownRatio[e] = .7, i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e], i.speedDecelerationRatioAbs[e] < .05 && (i.lastFlickSpeed[e] = 0, i.backAnimStarted[e] = !0, Ze("bounceZoomPan" + e, ue[e], i.backAnimDestination[e], t || 300, o.easing.sine.out, function(t) {
                                ue[e] = t, Pe()
                            }))))
                        },
                        calculateAnimOffset: function(e) {
                            i.backAnimStarted[e] || (i.speedDecelerationRatio[e] = i.speedDecelerationRatio[e] * (i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10), i.speedDecelerationRatioAbs[e] = Math.abs(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]), i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff, ue[e] += i.distanceOffset[e])
                        },
                        panAnimLoop: function() {
                            return je.zoomPan && (je.zoomPan.raf = $(i.panAnimLoop), i.now = Te(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), Pe(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05) ? (ue.x = Math.round(ue.x), ue.y = Math.round(ue.y), Pe(), void Be("zoomPan")) : void 0
                        }
                    };
                    return i
                },
                $t = function(e) {
                    return e.calculateSwipeSpeed("y"), J = a.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (qe("zoomPan"), e.lastNow = Te(), void e.panAnimLoop())
                },
                It = function(e, t) {
                    var i, n, s;
                    if (te || (rt = u), "swipe" === e) {
                        var l = et.x - tt.x,
                            c = t.lastFlickDist.x < 10;
                        l > 30 && (c || t.lastFlickOffset.x > 20) ? n = -1 : -30 > l && (c || t.lastFlickOffset.x < -20) && (n = 1)
                    }
                    n && (0 > (u += n) ? (u = r.loop ? Ft() - 1 : 0, s = !0) : u >= Ft() && (u = r.loop ? 0 : Ft() - 1, s = !0), (!s || r.loop) && (me += n, pe -= n, i = !0));
                    var d, p = fe.x * pe,
                        h = Math.abs(p - ct.x);
                    return i || p > ct.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? h / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, rt === u && (i = !1), te = !0, Ce("mainScrollAnimStart"), Ze("mainScroll", ct.x, p, d, o.easing.cubic.out, $e, function() {
                        Ue(), te = !1, rt = -1, (i || rt !== u) && a.updateCurrItem(), Ce("mainScrollAnimComplete")
                    }), i && a.updateCurrItem(!0), i
                },
                _t = function(e) {
                    return 1 / G * e * g
                },
                Dt = function() {
                    var e = v,
                        t = Ve(),
                        i = He();
                    t > v ? e = t : v > i && (e = i);
                    var n, r = ae;
                    return oe && !Y && !re && t > v ? (a.close(), !0) : (oe && (n = function(e) {
                        Oe((1 - r) * e + r)
                    }), a.zoomTo(e, 0, 200, o.easing.cubic.out, n), !0)
                };
            we("Gestures", {
                publicMethods: {
                    initGestures: function() {
                        var e = function(e, t, i, n, o) {
                            C = e + t, T = e + i, O = e + n, M = o ? e + o : ""
                        };
                        (E = W.pointerEvent) && W.touch && (W.touch = !1), E ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : W.touch ? (e("touch", "start", "move", "end", "cancel"), A = !0) : e("mouse", "down", "move", "up"), h = T + " " + O + " " + M, f = C, E && !A && (A = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice = A, m[C] = Ot, m[T] = Mt, m[O] = Et, M && (m[M] = m[O]), W.touch && (f += " mousedown", h += " mousemove mouseup", m.mousedown = m[C], m.mousemove = m[T], m.mouseup = m[O]), A || (r.allowPanToNext = !1)
                    }
                }
            });
            var Lt, Rt, Wt, Vt, Ht, Ft, Yt = function(t, i, n, s) {
                    var l;
                    Lt && clearTimeout(Lt), Vt = !0, Wt = !0, t.initialLayout ? (l = t.initialLayout, t.initialLayout = null) : l = r.getThumbBoundsFn && r.getThumbBoundsFn(u);
                    var d = n ? r.hideAnimationDuration : r.showAnimationDuration,
                        p = function() {
                            Be("initialZoom"), n ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) : (Oe(1), i && (i.style.display = "block"), o.addClass(e, "pswp--animated-in"), Ce("initialZoom" + (n ? "OutEnd" : "InEnd"))), s && s(), Vt = !1
                        };
                    if (!d || !l || void 0 === l.x) return Ce("initialZoom" + (n ? "Out" : "In")), v = t.initialZoomLevel, _e(ue, t.initialPosition), Pe(), e.style.opacity = n ? 0 : 1, Oe(1), void(d ? setTimeout(function() {
                        p()
                    }, d) : p());
                    ! function() {
                        var i = c,
                            s = !a.currItem.src || a.currItem.loadError || r.showHideOpacity;
                        t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), n || (v = l.w / t.w, ue.x = l.x, ue.y = l.y - D, a[s ? "template" : "bg"].style.opacity = .001, Pe()), qe("initialZoom"), n && !i && o.removeClass(e, "pswp--animated-in"), s && (n ? o[(i ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() {
                            o.addClass(e, "pswp--animate_opacity")
                        }, 30)), Lt = setTimeout(function() {
                            if (Ce("initialZoom" + (n ? "Out" : "In")), n) {
                                var a = l.w / t.w,
                                    r = {
                                        x: ue.x,
                                        y: ue.y
                                    },
                                    c = v,
                                    u = ae,
                                    h = function(t) {
                                        1 === t ? (v = a, ue.x = l.x, ue.y = l.y - R) : (v = (a - c) * t + c, ue.x = (l.x - r.x) * t + r.x, ue.y = (l.y - R - r.y) * t + r.y), Pe(), s ? e.style.opacity = 1 - t : Oe(u - t * u)
                                    };
                                i ? Ze("initialZoom", 0, 1, d, o.easing.cubic.out, h, p) : (h(1), Lt = setTimeout(p, d + 20))
                            } else v = t.initialZoomLevel, _e(ue, t.initialPosition), Pe(), Oe(1), s ? e.style.opacity = 1 : Oe(1), Lt = setTimeout(p, d + 20)
                        }, n ? 25 : 90)
                    }()
                },
                Xt = {},
                Nt = [],
                jt = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function() {
                        return Rt.length
                    }
                },
                zt = function(e, t, i) {
                    if (e.src && !e.loadError) {
                        var n = !i;
                        if (n && (e.vGap || (e.vGap = {
                            top: 0,
                            bottom: 0
                        }), Ce("parseVerticalMargin", e)), Xt.x = t.x, Xt.y = t.y - e.vGap.top - e.vGap.bottom, n) {
                            var o = Xt.x / e.w,
                                a = Xt.y / e.h;
                            e.fitRatio = a > o ? o : a;
                            var s = r.scaleMode;
                            "orig" === s ? i = 1 : "fit" === s && (i = e.fitRatio), i > 1 && (i = 1), e.initialZoomLevel = i, e.bounds || (e.bounds = {
                                center: {
                                    x: 0,
                                    y: 0
                                },
                                max: {
                                    x: 0,
                                    y: 0
                                },
                                min: {
                                    x: 0,
                                    y: 0
                                }
                            })
                        }
                        if (!i) return;
                        return function(e, t, i) {
                            var n = e.bounds;
                            n.center.x = Math.round((Xt.x - t) / 2), n.center.y = Math.round((Xt.y - i) / 2) + e.vGap.top, n.max.x = t > Xt.x ? Math.round(Xt.x - t) : n.center.x, n.max.y = i > Xt.y ? Math.round(Xt.y - i) + e.vGap.top : n.center.y, n.min.x = t > Xt.x ? 0 : n.center.x, n.min.y = i > Xt.y ? e.vGap.top : n.center.y
                        }(e, e.w * i, e.h * i), n && i === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
                    }
                    return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    }, e.initialPosition = e.bounds.center, e.bounds
                },
                Bt = function(e, t, i, n, o, r) {
                    t.loadError || n && (t.imageAppended = !0, Zt(t, n, t === a.currItem && be), i.appendChild(n), r && setTimeout(function() {
                        t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                    }, 500))
                },
                qt = function(e) {
                    e.loading = !0, e.loaded = !1;
                    var t = e.img = o.createEl("pswp__img", "img"),
                        i = function() {
                            e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                        };
                    return t.onload = i, t.onerror = function() {
                        e.loadError = !0, i()
                    }, t.src = e.src, t
                },
                Ut = function(e, t) {
                    return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = r.errorMsg.replace("%url%", e.src), !0) : void 0
                },
                Zt = function(e, t, i) {
                    if (e.src) {
                        t || (t = e.container.lastChild);
                        var n = i ? e.w : Math.round(e.w * e.fitRatio),
                            o = i ? e.h : Math.round(e.h * e.fitRatio);
                        e.placeholder && !e.loaded && (e.placeholder.style.width = n + "px", e.placeholder.style.height = o + "px"), t.style.width = n + "px", t.style.height = o + "px"
                    }
                },
                Kt = function() {
                    if (Nt.length) {
                        for (var e, t = 0; t < Nt.length; t++)(e = Nt[t]).holder.index === e.index && Bt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                        Nt = []
                    }
                };
            we("Controller", {
                publicMethods: {
                    lazyLoadItem: function(e) {
                        e = xe(e);
                        var t = Ht(e);
                        t && (!t.loaded && !t.loading || x) && (Ce("gettingData", e, t), t.src && qt(t))
                    },
                    initController: function() {
                        o.extend(r, jt, !0), a.items = Rt = i, Ht = a.getItemAt, Ft = r.getNumItemsFn, r.loop, Ft() < 3 && (r.loop = !1), Se("beforeChange", function(e) {
                            var t, i = r.preload,
                                n = null === e || e >= 0,
                                o = Math.min(i[0], Ft()),
                                s = Math.min(i[1], Ft());
                            for (t = 1;
                                 (n ? s : o) >= t; t++) a.lazyLoadItem(u + t);
                            for (t = 1;
                                 (n ? o : s) >= t; t++) a.lazyLoadItem(u - t)
                        }), Se("initialLayout", function() {
                            a.currItem.initialLayout = r.getThumbBoundsFn && r.getThumbBoundsFn(u)
                        }), Se("mainScrollAnimComplete", Kt), Se("initialZoomInEnd", Kt), Se("destroy", function() {
                            for (var e, t = 0; t < Rt.length; t++)(e = Rt[t]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                            Nt = null
                        })
                    },
                    getItemAt: function(e) {
                        return e >= 0 && void 0 !== Rt[e] && Rt[e]
                    },
                    allowProgressiveImg: function() {
                        return r.forceProgressiveLoading || !A || r.mouseUsed || screen.width > 1200
                    },
                    setContent: function(e, t) {
                        r.loop && (t = xe(t));
                        var i = a.getItemAt(e.index);
                        i && (i.container = null);
                        var n, l = a.getItemAt(t);
                        if (l) {
                            Ce("gettingData", t, l), e.index = t, e.item = l;
                            var c = l.container = o.createEl("pswp__zoom-wrap");
                            if (!l.src && l.html && (l.html.tagName ? c.appendChild(l.html) : c.innerHTML = l.html), Ut(l), zt(l, de), !l.src || l.loadError || l.loaded) l.src && !l.loadError && ((n = o.createEl("pswp__img", "img")).style.opacity = 1, n.src = l.src, Zt(l, n), Bt(0, l, c, n));
                            else {
                                if (l.loadComplete = function(i) {
                                    if (s) {
                                        if (e && e.index === t) {
                                            if (Ut(i, !0)) return i.loadComplete = i.img = null, zt(i, de), Ee(i), void(e.index === u && a.updateCurrZoomItem());
                                            i.imageAppended ? !Vt && i.placeholder && (i.placeholder.style.display = "none", i.placeholder = null) : W.transform && (te || Vt) ? Nt.push({
                                                item: i,
                                                baseDiv: c,
                                                img: i.img,
                                                index: t,
                                                holder: e,
                                                clearPlaceholder: !0
                                            }) : Bt(0, i, c, i.img, 0, !0)
                                        }
                                        i.loadComplete = null, i.img = null, Ce("imageLoadComplete", t, i)
                                    }
                                }, o.features.transform) {
                                    var d = "pswp__img pswp__img--placeholder";
                                    d += l.msrc ? "" : " pswp__img--placeholder--blank";
                                    var p = o.createEl(d, l.msrc ? "img" : "");
                                    l.msrc && (p.src = l.msrc), Zt(l, p), c.appendChild(p), l.placeholder = p
                                }
                                l.loading || qt(l), a.allowProgressiveImg() && (!Wt && W.transform ? Nt.push({
                                    item: l,
                                    baseDiv: c,
                                    img: l.img,
                                    index: t,
                                    holder: e
                                }) : Bt(0, l, c, l.img, 0, !0))
                            }
                            Wt || t !== u ? Ee(l) : (ee = c.style, Yt(l, n || l.img)), e.el.innerHTML = "", e.el.appendChild(c)
                        } else e.el.innerHTML = ""
                    },
                    cleanSlide: function(e) {
                        e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                    }
                }
            });
            var Qt, Gt, Jt = {},
                ei = function(e, t, i) {
                    var n = document.createEvent("CustomEvent"),
                        o = {
                            origEvent: e,
                            target: e.target,
                            releasePoint: t,
                            pointerType: i || "touch"
                        };
                    n.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(n)
                };
            we("Tap", {
                publicMethods: {
                    initTap: function() {
                        Se("firstTouchStart", a.onTapStart), Se("touchRelease", a.onTapRelease), Se("destroy", function() {
                            Jt = {}, Qt = null
                        })
                    },
                    onTapStart: function(e) {
                        e.length > 1 && (clearTimeout(Qt), Qt = null)
                    },
                    onTapRelease: function(e, t) {
                        if (t && !q && !z && !ze) {
                            var i = t;
                            if (Qt && (clearTimeout(Qt), Qt = null, function(e, t) {
                                return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
                            }(i, Jt))) return void Ce("doubleTap", i);
                            if ("mouse" === t.type) return void ei(e, t, "mouse");
                            if ("BUTTON" === e.target.tagName.toUpperCase() || o.hasClass(e.target, "pswp__single-tap")) return void ei(e, t);
                            _e(Jt, i), Qt = setTimeout(function() {
                                ei(e, t), Qt = null
                            }, 300)
                        }
                    }
                }
            }), we("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function() {
                        L || (A ? Se("mouseUsed", function() {
                            a.setupDesktopZoom()
                        }) : a.setupDesktopZoom(!0))
                    },
                    setupDesktopZoom: function(t) {
                        Gt = {};
                        var i = "wheel mousewheel DOMMouseScroll";
                        Se("bindEvents", function() {
                            o.bind(e, i, a.handleMouseWheel)
                        }), Se("unbindEvents", function() {
                            Gt && o.unbind(e, i, a.handleMouseWheel)
                        }), a.mouseZoomedIn = !1;
                        var n, r = function() {
                                a.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), a.mouseZoomedIn = !1), 1 > v ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), s()
                            },
                            s = function() {
                                n && (o.removeClass(e, "pswp--dragging"), n = !1)
                            };
                        Se("resize", r), Se("afterChange", r), Se("pointerDown", function() {
                            a.mouseZoomedIn && (n = !0, o.addClass(e, "pswp--dragging"))
                        }), Se("pointerUp", s), t || r()
                    },
                    handleMouseWheel: function(e) {
                        if (v <= a.currItem.fitRatio) return r.modal && (!r.closeOnScroll || ze || j ? e.preventDefault() : P && Math.abs(e.deltaY) > 2 && (c = !0, a.close())), !0;
                        if (e.stopPropagation(), Gt.x = 0, "deltaX" in e) 1 === e.deltaMode ? (Gt.x = 18 * e.deltaX, Gt.y = 18 * e.deltaY) : (Gt.x = e.deltaX, Gt.y = e.deltaY);
                        else if ("wheelDelta" in e) e.wheelDeltaX && (Gt.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? Gt.y = -.16 * e.wheelDeltaY : Gt.y = -.16 * e.wheelDelta;
                        else {
                            if (!("detail" in e)) return;
                            Gt.y = e.detail
                        }
                        We(v, !0);
                        var t = ue.x - Gt.x,
                            i = ue.y - Gt.y;
                        (r.modal || t <= J.min.x && t >= J.max.x && i <= J.min.y && i >= J.max.y) && e.preventDefault(), a.panTo(t, i)
                    },
                    toggleDesktopZoom: function(t) {
                        t = t || {
                            x: de.x / 2 + he.x,
                            y: de.y / 2 + he.y
                        };
                        var i = r.getDoubleTapZoom(!0, a.currItem),
                            n = v === i;
                        a.mouseZoomedIn = !n, a.zoomTo(n ? a.currItem.initialZoomLevel : i, t, 333), o[(n ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                    }
                }
            });
            var ti, ii, ni, oi, ai, ri, si, li, ci, ui, di, pi, hi = {
                    history: !0,
                    galleryUID: 1
                },
                fi = function() {
                    return di.hash.substring(1)
                },
                mi = function() {
                    ti && clearTimeout(ti), ni && clearTimeout(ni)
                },
                vi = function() {
                    var e = fi(),
                        t = {};
                    if (e.length < 5) return t;
                    var i, n = e.split("&");
                    for (i = 0; i < n.length; i++)
                        if (n[i]) {
                            var o = n[i].split("=");
                            o.length < 2 || (t[o[0]] = o[1])
                        }
                    if (r.galleryPIDs) {
                        var a = t.pid;
                        for (t.pid = 0, i = 0; i < Rt.length; i++)
                            if (Rt[i].pid === a) {
                                t.pid = i;
                                break
                            }
                    } else t.pid = parseInt(t.pid, 10) - 1;
                    return t.pid < 0 && (t.pid = 0), t
                },
                gi = function() {
                    if (ni && clearTimeout(ni), ze || j) ni = setTimeout(gi, 500);
                    else {
                        oi ? clearTimeout(ii) : oi = !0;
                        var e = u + 1,
                            t = Ht(u);
                        t.hasOwnProperty("pid") && (e = t.pid);
                        var i = si + "&gid=" + r.galleryUID + "&pid=" + e;
                        li || -1 === di.hash.indexOf(i) && (ui = !0);
                        var n = di.href.split("#")[0] + "#" + i;
                        pi ? "#" + i !== window.location.hash && history[li ? "replaceState" : "pushState"]("", document.title, n) : li ? di.replace(n) : di.hash = i, li = !0, ii = setTimeout(function() {
                            oi = !1
                        }, 60)
                    }
                };
            we("History", {
                publicMethods: {
                    initHistory: function() {
                        if (o.extend(r, hi, !0), r.history) {
                            di = window.location, ui = !1, ci = !1, li = !1, si = fi(), pi = "pushState" in history, si.indexOf("gid=") > -1 && (si = (si = si.split("&gid=")[0]).split("?gid=")[0]), Se("afterChange", a.updateURL), Se("unbindEvents", function() {
                                o.unbind(window, "hashchange", a.onHashChange)
                            });
                            var e = function() {
                                ri = !0, ci || (ui ? history.back() : si ? di.hash = si : pi ? history.pushState("", document.title, di.pathname + di.search) : di.hash = ""), mi()
                            };
                            Se("unbindEvents", function() {
                                c && e()
                            }), Se("destroy", function() {
                                ri || e()
                            }), Se("firstUpdate", function() {
                                u = vi().pid
                            });
                            var t = si.indexOf("pid=");
                            t > -1 && "&" === (si = si.substring(0, t)).slice(-1) && (si = si.slice(0, -1)), setTimeout(function() {
                                s && o.bind(window, "hashchange", a.onHashChange)
                            }, 40)
                        }
                    },
                    onHashChange: function() {
                        return fi() === si ? (ci = !0, void a.close()) : void(oi || (ai = !0, a.goTo(vi().pid), ai = !1))
                    },
                    updateURL: function() {
                        mi(), ai || (li ? ti = setTimeout(gi, 800) : gi())
                    }
                }
            }), o.extend(a, Ke)
        }
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
    }(this, function() {
        "use strict";
        return function(e, t) {
            var i, n, o, a, r, s, l, c, u, d, p, h, f, m, v, g, y, b, w = this,
                x = !1,
                k = !0,
                S = !0,
                C = {
                    barsSize: {
                        top: 44,
                        bottom: "auto"
                    },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function(e, t) {
                        return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [{
                        id: "facebook",
                        label: "Share on Facebook",
                        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                    }, {
                        id: "twitter",
                        label: "Tweet",
                        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                    }, {
                        id: "pinterest",
                        label: "Pin it",
                        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                    }, {
                        id: "download",
                        label: "Download image",
                        url: "{{raw_image_url}}",
                        download: !0
                    }],
                    getImageURLForShare: function() {
                        return e.currItem.src || ""
                    },
                    getPageURLForShare: function() {
                        return window.location.href
                    },
                    getTextForShare: function() {
                        return e.currItem.title || ""
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200
                },
                T = function(e) {
                    if (g) return !0;
                    e = e || window.event, v.timeToIdle && v.mouseUsed && !u && L();
                    for (var i, n, o = (e.target || e.srcElement).getAttribute("class") || "", a = 0; a < H.length; a++)(i = H[a]).onTap && o.indexOf("pswp__" + i.name) > -1 && (i.onTap(), n = !0);
                    if (n) {
                        e.stopPropagation && e.stopPropagation(), g = !0;
                        var r = t.features.isOldAndroid ? 600 : 30;
                        setTimeout(function() {
                            g = !1
                        }, r)
                    }
                },
                O = function() {
                    return !e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth
                },
                M = function(e, i, n) {
                    t[(n ? "add" : "remove") + "Class"](e, "pswp__" + i)
                },
                P = function() {
                    var e = 1 === v.getNumItemsFn();
                    e !== m && (M(n, "ui--one-slide", e), m = e)
                },
                E = function() {
                    M(l, "share-modal--hidden", S)
                },
                A = function() {
                    return (S = !S) ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() {
                        S && E()
                    }, 300)) : (E(), setTimeout(function() {
                        S || t.addClass(l, "pswp__share-modal--fade-in")
                    }, 30)), S || I(), !1
                },
                $ = function(t) {
                    var i = (t = t || window.event).target || t.srcElement;
                    return e.shout("shareLinkClick", t, i), !(!i.href || !i.hasAttribute("download") && (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), S || A(), 1))
                },
                I = function() {
                    for (var e, t, i, n, o = "", a = 0; a < v.shareButtons.length; a++) e = v.shareButtons[a], t = v.getImageURLForShare(e), i = v.getPageURLForShare(e), n = v.getTextForShare(e), o += '<a href="' + e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(t)).replace("{{raw_image_url}}", t).replace("{{text}}", encodeURIComponent(n)) + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", v.parseShareButtonOut && (o = v.parseShareButtonOut(e, o));
                    l.children[0].innerHTML = o, l.children[0].onclick = $
                },
                _ = function(e) {
                    for (var i = 0; i < v.closeElClasses.length; i++)
                        if (t.hasClass(e, "pswp__" + v.closeElClasses[i])) return !0
                },
                D = 0,
                L = function() {
                    clearTimeout(b), D = 0, u && w.setIdle(!1)
                },
                R = function(e) {
                    var t = (e = e || window.event).relatedTarget || e.toElement;
                    t && "HTML" !== t.nodeName || (clearTimeout(b), b = setTimeout(function() {
                        w.setIdle(!0)
                    }, v.timeToIdleOutside))
                },
                W = function(e) {
                    h !== e && (M(p, "preloader--active", !e), h = e)
                },
                V = function(e) {
                    var i = e.vGap;
                    if (O()) {
                        var r = v.barsSize;
                        if (v.captionEl && "auto" === r.bottom)
                            if (a || ((a = t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl("pswp__caption__center")), n.insertBefore(a, o), t.addClass(n, "pswp__ui--fit")), v.addCaptionHTMLFn(e, a, !0)) {
                                var s = a.clientHeight;
                                i.bottom = parseInt(s, 10) || 44
                            } else i.bottom = r.top;
                        else i.bottom = "auto" === r.bottom ? 0 : r.bottom;
                        i.top = r.top
                    } else i.top = i.bottom = 0
                },
                H = [{
                    name: "caption",
                    option: "captionEl",
                    onInit: function(e) {
                        o = e
                    }
                }, {
                    name: "share-modal",
                    option: "shareEl",
                    onInit: function(e) {
                        l = e
                    },
                    onTap: function() {
                        A()
                    }
                }, {
                    name: "button--share",
                    option: "shareEl",
                    onInit: function(e) {
                        s = e
                    },
                    onTap: function() {
                        A()
                    }
                }, {
                    name: "button--zoom",
                    option: "zoomEl",
                    onTap: e.toggleDesktopZoom
                }, {
                    name: "counter",
                    option: "counterEl",
                    onInit: function(e) {
                        r = e
                    }
                }, {
                    name: "button--close",
                    option: "closeEl",
                    onTap: e.close
                }, {
                    name: "button--arrow--left",
                    option: "arrowEl",
                    onTap: e.prev
                }, {
                    name: "button--arrow--right",
                    option: "arrowEl",
                    onTap: e.next
                }, {
                    name: "button--fs",
                    option: "fullscreenEl",
                    onTap: function() {
                        i.isFullscreen() ? i.exit() : i.enter()
                    }
                }, {
                    name: "preloader",
                    option: "preloaderEl",
                    onInit: function(e) {
                        p = e
                    }
                }];
            w.init = function() {
                t.extend(e.options, C, !0), v = e.options, n = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen,
                    function() {
                        var e;
                        d("onVerticalDrag", function(e) {
                            k && .95 > e ? w.hideControls() : !k && e >= .95 && w.showControls()
                        }), d("onPinchClose", function(t) {
                            k && .9 > t ? (w.hideControls(), e = !0) : e && !k && t > .9 && w.showControls()
                        }), d("zoomGestureEnded", function() {
                            (e = !1) && !k && w.showControls()
                        })
                    }(), d("beforeChange", w.update), d("doubleTap", function(t) {
                    var i = e.currItem.initialZoomLevel;
                    e.getZoomLevel() !== i ? e.zoomTo(i, t, 333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333)
                }), d("preventDragEvent", function(e, t, i) {
                    var n = e.target || e.srcElement;
                    n && n.getAttribute("class") && e.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (i.prevent = !1)
                }), d("bindEvents", function() {
                    t.bind(n, "pswpTap click", T), t.bind(e.scrollWrap, "pswpTap", w.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", w.onMouseOver)
                }), d("unbindEvents", function() {
                    S || A(), y && clearInterval(y), t.unbind(document, "mouseout", R), t.unbind(document, "mousemove", L), t.unbind(n, "pswpTap click", T), t.unbind(e.scrollWrap, "pswpTap", w.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", w.onMouseOver), i && (t.unbind(document, i.eventK, w.updateFullscreen), i.isFullscreen() && (v.hideAnimationDuration = 0, i.exit()), i = null)
                }), d("destroy", function() {
                    v.captionEl && (a && n.removeChild(a), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(n, "pswp__ui--over-close"), t.addClass(n, "pswp__ui--hidden"), w.setIdle(!1)
                }), v.showAnimationDuration || t.removeClass(n, "pswp__ui--hidden"), d("initialZoomIn", function() {
                    v.showAnimationDuration && t.removeClass(n, "pswp__ui--hidden")
                }), d("initialZoomOut", function() {
                    t.addClass(n, "pswp__ui--hidden")
                }), d("parseVerticalMargin", V),
                    function() {
                        var e, i, o, a = function(n) {
                            if (n)
                                for (var a = n.length, r = 0; a > r; r++) {
                                    e = n[r], i = e.className;
                                    for (var s = 0; s < H.length; s++) o = H[s], i.indexOf("pswp__" + o.name) > -1 && (v[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                                }
                        };
                        a(n.children);
                        var r = t.getChildByClass(n, "pswp__top-bar");
                        r && a(r.children)
                    }(), v.shareEl && s && l && (S = !0), P(), v.timeToIdle && d("mouseUsed", function() {
                    t.bind(document, "mousemove", L), t.bind(document, "mouseout", R), y = setInterval(function() {
                        2 == ++D && w.setIdle(!0)
                    }, v.timeToIdle / 2)
                }), v.fullscreenEl && !t.features.isOldAndroid && (i || (i = w.getFullscreenAPI()), i ? (t.bind(document, i.eventK, w.updateFullscreen), w.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs")), v.preloaderEl && (W(!0), d("beforeChange", function() {
                    clearTimeout(f), f = setTimeout(function() {
                        e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && W(!1) : W(!0)
                    }, v.loadingIndicatorDelay)
                }), d("imageLoadComplete", function(t, i) {
                    e.currItem === i && W(!0)
                }))
            }, w.setIdle = function(e) {
                u = e, M(n, "ui--idle", e)
            }, w.update = function() {
                k && e.currItem ? (w.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, o), M(o, "caption--empty", !e.currItem.title)), x = !0) : x = !1, S || A(), P()
            }, w.updateFullscreen = function(n) {
                n && setTimeout(function() {
                    e.setScrollOffset(0, t.getScrollY())
                }, 50), t[(i.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
            }, w.updateIndexIndicator = function() {
                v.counterEl && (r.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn())
            }, w.onGlobalTap = function(i) {
                var n = (i = i || window.event).target || i.srcElement;
                if (!g)
                    if (i.detail && "mouse" === i.detail.pointerType) {
                        if (_(n)) return void e.close();
                        t.hasClass(n, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(i.detail.releasePoint))
                    } else if (v.tapToToggleControls && (k ? w.hideControls() : w.showControls()), v.tapToClose && (t.hasClass(n, "pswp__img") || _(n))) return void e.close()
            }, w.onMouseOver = function(e) {
                var t = (e = e || window.event).target || e.srcElement;
                M(n, "ui--over-close", _(t))
            }, w.hideControls = function() {
                t.addClass(n, "pswp__ui--hidden"), k = !1
            }, w.showControls = function() {
                k = !0, x || w.update(), t.removeClass(n, "pswp__ui--hidden")
            }, w.supportsFullscreen = function() {
                var e = document;
                return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
            }, w.getFullscreenAPI = function() {
                var t, i = document.documentElement,
                    n = "fullscreenchange";
                return i.requestFullscreen ? t = {
                    enterK: "requestFullscreen",
                    exitK: "exitFullscreen",
                    elementK: "fullscreenElement",
                    eventK: n
                } : i.mozRequestFullScreen ? t = {
                    enterK: "mozRequestFullScreen",
                    exitK: "mozCancelFullScreen",
                    elementK: "mozFullScreenElement",
                    eventK: "moz" + n
                } : i.webkitRequestFullscreen ? t = {
                    enterK: "webkitRequestFullscreen",
                    exitK: "webkitExitFullscreen",
                    elementK: "webkitFullscreenElement",
                    eventK: "webkit" + n
                } : i.msRequestFullscreen && (t = {
                    enterK: "msRequestFullscreen",
                    exitK: "msExitFullscreen",
                    elementK: "msFullscreenElement",
                    eventK: "MSFullscreenChange"
                }), t && (t.enter = function() {
                    return c = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                }, t.exit = function() {
                    return v.closeOnScroll = c, document[this.exitK]()
                }, t.isFullscreen = function() {
                    return document[this.elementK]
                }), t
            }
        }
    });
var initPhotoSwipeFromDOM = function(e) {
    for (var t = function(e) {
        (e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1;
        var t = function e(t, i) {
            return t && (i(t) ? t : e(t.parentNode, i))
        }(e.target || e.srcElement, function(e) {
            return e.tagName && "FIGURE" === e.tagName.toUpperCase()
        });
        if (t) {
            for (var n, o = t.parentNode, a = t.parentNode.childNodes, r = a.length, s = 0, l = 0; l < r; l++)
                if (1 === a[l].nodeType) {
                    if (a[l] === t) {
                        n = s;
                        break
                    }
                    s++
                }
            return n >= 0 && i(n, o), !1
        }
    }, i = function(e, t, i, n) {
        var o, a, r = document.querySelectorAll(".pswp")[0];
        if (a = function(e) {
            for (var t, i, n, o, a = e.childNodes, r = a.length, s = [], l = 0; l < r; l++) 1 === (t = a[l]).nodeType && (n = (i = t.children[0]).getAttribute("data-size").split("x"), o = {
                src: i.getAttribute("href"),
                w: parseInt(n[0], 10),
                h: parseInt(n[1], 10)
            }, t.children.length > 1 && (o.title = t.children[1].innerHTML), i.children.length > 0 && (o.msrc = i.children[0].getAttribute("src")), o.el = t, s.push(o));
            return s
        }(t), o = {
            galleryUID: t.getAttribute("data-pswp-uid"),
            getThumbBoundsFn: function(e) {
                var t = a[e].el.getElementsByTagName("img")[0],
                    i = window.pageYOffset || document.documentElement.scrollTop,
                    n = t.getBoundingClientRect();
                return {
                    x: n.left,
                    y: n.top + i,
                    w: n.width
                }
            }
        }, n)
            if (o.galleryPIDs) {
                for (var s = 0; s < a.length; s++)
                    if (a[s].pid == e) {
                        o.index = s;
                        break
                    }
            } else o.index = parseInt(e, 10) - 1;
        else o.index = parseInt(e, 10);
        isNaN(o.index) || (i && (o.showAnimationDuration = 0), new PhotoSwipe(r, PhotoSwipeUI_Default, a, o).init())
    }, n = document.querySelectorAll(e), o = 0, a = n.length; o < a; o++) n[o].setAttribute("data-pswp-uid", o + 1), n[o].onclick = t;
    var r = function() {
        var e = window.location.hash.substring(1),
            t = {};
        if (e.length < 5) return t;
        for (var i = e.split("&"), n = 0; n < i.length; n++)
            if (i[n]) {
                var o = i[n].split("=");
                o.length < 2 || (t[o[0]] = o[1])
            }
        return t.gid && (t.gid = parseInt(t.gid, 10)), t
    }();
    r.pid && r.gid && i(r.pid, n[r.gid - 1], !0, !0)
};

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t), i && _defineProperties(e, i), e
}
initPhotoSwipeFromDOM(".mdb-lightbox"),
    function(e) {
        e.fn.sticky = function(t) {
            var i = e.extend({}, {
                topSpacing: 0,
                zIndex: "",
                stopper: ".sticky-stopper",
                stickyClass: !1
            }, t);
            var n = "number" == typeof i.zIndex;
            var o = 0 < e(i.stopper).length || "number" == typeof i.stopper;
            return this.each(function() {
                var t = e(this),
                    a = t.outerHeight(),
                    r = t.outerWidth(),
                    s = i.topSpacing,
                    l = i.zIndex,
                    c = t.offset().top - s,
                    u = e("<div></div>").width(r).height(a).addClass("sticky-placeholder"),
                    d = i.stopper,
                    p = e(window);

                function h() {
                    var r = p.scrollTop(),
                        h = d,
                        f = t.parent().width();
                    (u.width(f), o && "string" == typeof d) && (h = e(d).offset().top - a - s);
                    if (c < r) {
                        if (i.stickyClass && t.addClass(i.stickyClass), t.after(u).css({
                            position: "fixed",
                            top: s,
                            width: f
                        }), n && t.css({
                            zIndex: l
                        }), o && h < r) {
                            var m = h - r + s;
                            t.css({
                                top: m
                            })
                        }
                    } else i.stickyClass && t.removeClass(i.stickyClass), t.css({
                        position: "static",
                        top: null,
                        left: null,
                        width: "auto"
                    }), u.remove()
                }
                p.innerHeight() > a && (p.bind("scroll", h), p.bind("load", h), p.bind("resize", h))
            })
        }
    }(jQuery),
    function e(t, i, n) {
        function o(r, s) {
            if (!i[r]) {
                if (!t[r]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(r, !0);
                    if (a) return a(r, !0);
                    var c = new Error("Cannot find module '" + r + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = i[r] = {
                    exports: {}
                };
                t[r][0].call(u.exports, function(e) {
                    var i = t[r][1][e];
                    return o(i || e)
                }, u, u.exports, e, t, i, n)
            }
            return i[r].exports
        }
        for (var a = "function" == typeof require && require, r = 0; r < n.length; r++) o(n[r]);
        return o
    }({
        1: [function(e, t, i) {
            "use strict";
            var n = e("../main");
            "function" == typeof define && define.amd ? define(n) : (window.PerfectScrollbar = n, void 0 === window.Ps && (window.Ps = n))
        }, {
            "../main": 7
        }],
        2: [function(e, t, i) {
            "use strict";
            i.add = function(e, t) {
                e.classList ? e.classList.add(t) : function(e, t) {
                    var i = e.className.split(" ");
                    i.indexOf(t) < 0 && i.push(t), e.className = i.join(" ")
                }(e, t)
            }, i.remove = function(e, t) {
                e.classList ? e.classList.remove(t) : function(e, t) {
                    var i = e.className.split(" "),
                        n = i.indexOf(t);
                    n >= 0 && i.splice(n, 1), e.className = i.join(" ")
                }(e, t)
            }, i.list = function(e) {
                return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
            }
        }, {}],
        3: [function(e, t, i) {
            "use strict";
            var n = {
                e: function(e, t) {
                    var i = document.createElement(e);
                    return i.className = t, i
                },
                appendTo: function(e, t) {
                    return t.appendChild(e), e
                }
            };
            n.css = function(e, t, i) {
                return "object" == typeof t ? function(e, t) {
                    for (var i in t) {
                        var n = t[i];
                        "number" == typeof n && (n = n.toString() + "px"), e.style[i] = n
                    }
                    return e
                }(e, t) : void 0 === i ? function(e, t) {
                    return window.getComputedStyle(e)[t]
                }(e, t) : function(e, t, i) {
                    return "number" == typeof i && (i = i.toString() + "px"), e.style[t] = i, e
                }(e, t, i)
            }, n.matches = function(e, t) {
                return void 0 !== e.matches ? e.matches(t) : void 0 !== e.matchesSelector ? e.matchesSelector(t) : void 0 !== e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : void 0 !== e.mozMatchesSelector ? e.mozMatchesSelector(t) : void 0 !== e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
            }, n.remove = function(e) {
                void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
            }, n.queryChildren = function(e, t) {
                return Array.prototype.filter.call(e.childNodes, function(e) {
                    return n.matches(e, t)
                })
            }, t.exports = n
        }, {}],
        4: [function(e, t, i) {
            "use strict";
            var n = function(e) {
                this.element = e, this.events = {}
            };
            n.prototype.bind = function(e, t) {
                void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
            }, n.prototype.unbind = function(e, t) {
                var i = void 0 !== t;
                this.events[e] = this.events[e].filter(function(n) {
                    return !(!i || n === t) || (this.element.removeEventListener(e, n, !1), !1)
                }, this)
            }, n.prototype.unbindAll = function() {
                for (var e in this.events) this.unbind(e)
            };
            var o = function() {
                this.eventElements = []
            };
            o.prototype.eventElement = function(e) {
                var t = this.eventElements.filter(function(t) {
                    return t.element === e
                })[0];
                return void 0 === t && (t = new n(e), this.eventElements.push(t)), t
            }, o.prototype.bind = function(e, t, i) {
                this.eventElement(e).bind(t, i)
            }, o.prototype.unbind = function(e, t, i) {
                this.eventElement(e).unbind(t, i)
            }, o.prototype.unbindAll = function() {
                for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
            }, o.prototype.once = function(e, t, i) {
                var n = this.eventElement(e),
                    o = function(e) {
                        n.unbind(t, o), i(e)
                    };
                n.bind(t, o)
            }, t.exports = o
        }, {}],
        5: [function(e, t, i) {
            "use strict";
            t.exports = function() {
                function e() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return function() {
                    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                }
            }()
        }, {}],
        6: [function(e, t, i) {
            "use strict";

            function n(e) {
                return function(t, i) {
                    e(t, "ps--in-scrolling"), void 0 !== i ? e(t, "ps--" + i) : (e(t, "ps--x"), e(t, "ps--y"))
                }
            }
            var o = e("./class"),
                a = e("./dom"),
                r = i.toInt = function(e) {
                    return parseInt(e, 10) || 0
                },
                s = i.clone = function(e) {
                    if (e) {
                        if (Array.isArray(e)) return e.map(s);
                        if ("object" == typeof e) {
                            var t = {};
                            for (var i in e) t[i] = s(e[i]);
                            return t
                        }
                        return e
                    }
                    return null
                };
            i.extend = function(e, t) {
                var i = s(e);
                for (var n in t) i[n] = s(t[n]);
                return i
            }, i.isEditable = function(e) {
                return a.matches(e, "input,[contenteditable]") || a.matches(e, "select,[contenteditable]") || a.matches(e, "textarea,[contenteditable]") || a.matches(e, "button,[contenteditable]")
            }, i.removePsClasses = function(e) {
                for (var t = o.list(e), i = 0; i < t.length; i++) {
                    var n = t[i];
                    0 === n.indexOf("ps-") && o.remove(e, n)
                }
            }, i.outerWidth = function(e) {
                return r(a.css(e, "width")) + r(a.css(e, "paddingLeft")) + r(a.css(e, "paddingRight")) + r(a.css(e, "borderLeftWidth")) + r(a.css(e, "borderRightWidth"))
            }, i.startScrolling = n(o.add), i.stopScrolling = n(o.remove), i.env = {
                isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
            }
        }, {
            "./class": 2,
            "./dom": 3
        }],
        7: [function(e, t, i) {
            "use strict";
            var n = e("./plugin/destroy"),
                o = e("./plugin/initialize"),
                a = e("./plugin/update");
            t.exports = {
                initialize: o,
                update: a,
                destroy: n
            }
        }, {
            "./plugin/destroy": 9,
            "./plugin/initialize": 17,
            "./plugin/update": 21
        }],
        8: [function(e, t, i) {
            "use strict";
            t.exports = {
                handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
                maxScrollbarLength: null,
                minScrollbarLength: null,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                swipePropagation: !0,
                swipeEasing: !0,
                useBothWheelAxes: !1,
                wheelPropagation: !1,
                wheelSpeed: 1,
                theme: "default"
            }
        }, {}],
        9: [function(e, t, i) {
            "use strict";
            var n = e("../lib/helper"),
                o = e("../lib/dom"),
                a = e("./instances");
            t.exports = function(e) {
                var t = a.get(e);
                t && (t.event.unbindAll(), o.remove(t.scrollbarX), o.remove(t.scrollbarY), o.remove(t.scrollbarXRail), o.remove(t.scrollbarYRail), n.removePsClasses(e), a.remove(e))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18
        }],
        10: [function(e, t, i) {
            "use strict";
            var n = e("../instances"),
                o = e("../update-geometry"),
                a = e("../update-scroll");
            t.exports = function(e) {
                ! function(e, t) {
                    function i(e) {
                        return e.getBoundingClientRect()
                    }
                    var n = function(e) {
                        e.stopPropagation()
                    };
                    t.event.bind(t.scrollbarY, "click", n), t.event.bind(t.scrollbarYRail, "click", function(n) {
                        var r = n.pageY - window.pageYOffset - i(t.scrollbarYRail).top > t.scrollbarYTop ? 1 : -1;
                        a(e, "top", e.scrollTop + r * t.containerHeight), o(e), n.stopPropagation()
                    }), t.event.bind(t.scrollbarX, "click", n), t.event.bind(t.scrollbarXRail, "click", function(n) {
                        var r = n.pageX - window.pageXOffset - i(t.scrollbarXRail).left > t.scrollbarXLeft ? 1 : -1;
                        a(e, "left", e.scrollLeft + r * t.containerWidth), o(e), n.stopPropagation()
                    })
                }(e, n.get(e))
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        11: [function(e, t, i) {
            "use strict";
            var n = e("../../lib/helper"),
                o = e("../../lib/dom"),
                a = e("../instances"),
                r = e("../update-geometry"),
                s = e("../update-scroll");
            t.exports = function(e) {
                var t = a.get(e);
                (function(e, t) {
                    function i(i) {
                        var o = a + i * t.railXRatio,
                            r = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
                        t.scrollbarXLeft = o < 0 ? 0 : o > r ? r : o;
                        var l = n.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
                        s(e, "left", l)
                    }
                    var a = null,
                        l = null,
                        c = function(t) {
                            i(t.pageX - l), r(e), t.stopPropagation(), t.preventDefault()
                        },
                        u = function() {
                            n.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", c)
                        };
                    t.event.bind(t.scrollbarX, "mousedown", function(i) {
                        l = i.pageX, a = n.toInt(o.css(t.scrollbarX, "left")) * t.railXRatio, n.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", c), t.event.once(t.ownerDocument, "mouseup", u), i.stopPropagation(), i.preventDefault()
                    })
                })(e, t),
                    function(e, t) {
                        function i(i) {
                            var o = a + i * t.railYRatio,
                                r = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                            t.scrollbarYTop = o < 0 ? 0 : o > r ? r : o;
                            var l = n.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
                            s(e, "top", l)
                        }
                        var a = null,
                            l = null,
                            c = function(t) {
                                i(t.pageY - l), r(e), t.stopPropagation(), t.preventDefault()
                            },
                            u = function() {
                                n.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", c)
                            };
                        t.event.bind(t.scrollbarY, "mousedown", function(i) {
                            l = i.pageY, a = n.toInt(o.css(t.scrollbarY, "top")) * t.railYRatio, n.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", c), t.event.once(t.ownerDocument, "mouseup", u), i.stopPropagation(), i.preventDefault()
                        })
                    }(e, t)
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        12: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                var i = !1;
                t.event.bind(e, "mouseenter", function() {
                    i = !0
                }), t.event.bind(e, "mouseleave", function() {
                    i = !1
                });
                t.event.bind(t.ownerDocument, "keydown", function(n) {
                    if (!(n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented)) {
                        var r = a.matches(t.scrollbarX, ":focus") || a.matches(t.scrollbarY, ":focus");
                        if (i || r) {
                            var c = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                            if (c) {
                                if ("IFRAME" === c.tagName) c = c.contentDocument.activeElement;
                                else
                                    for (; c.shadowRoot;) c = c.shadowRoot.activeElement;
                                if (o.isEditable(c)) return
                            }
                            var u = 0,
                                d = 0;
                            switch (n.which) {
                                case 37:
                                    u = n.metaKey ? -t.contentWidth : n.altKey ? -t.containerWidth : -30;
                                    break;
                                case 38:
                                    d = n.metaKey ? t.contentHeight : n.altKey ? t.containerHeight : 30;
                                    break;
                                case 39:
                                    u = n.metaKey ? t.contentWidth : n.altKey ? t.containerWidth : 30;
                                    break;
                                case 40:
                                    d = n.metaKey ? -t.contentHeight : n.altKey ? -t.containerHeight : -30;
                                    break;
                                case 33:
                                    d = 90;
                                    break;
                                case 32:
                                    d = n.shiftKey ? 90 : -90;
                                    break;
                                case 34:
                                    d = -90;
                                    break;
                                case 35:
                                    d = n.ctrlKey ? -t.contentHeight : -t.containerHeight;
                                    break;
                                case 36:
                                    d = n.ctrlKey ? e.scrollTop : t.containerHeight;
                                    break;
                                default:
                                    return
                            }
                            l(e, "top", e.scrollTop - d), l(e, "left", e.scrollLeft + u), s(e),
                            function(i, n) {
                                var o = e.scrollTop;
                                if (0 === i) {
                                    if (!t.scrollbarYActive) return !1;
                                    if (0 === o && n > 0 || o >= t.contentHeight - t.containerHeight && n < 0) return !t.settings.wheelPropagation
                                }
                                var a = e.scrollLeft;
                                if (0 === n) {
                                    if (!t.scrollbarXActive) return !1;
                                    if (0 === a && i < 0 || a >= t.contentWidth - t.containerWidth && i > 0) return !t.settings.wheelPropagation
                                }
                                return !0
                            }(u, d) && n.preventDefault()
                        }
                    }
                })
            }
            var o = e("../../lib/helper"),
                a = e("../../lib/dom"),
                r = e("../instances"),
                s = e("../update-geometry"),
                l = e("../update-scroll");
            t.exports = function(e) {
                n(e, r.get(e))
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        13: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                function i(i) {
                    var o = function(e) {
                            var t = e.deltaX,
                                i = -1 * e.deltaY;
                            return void 0 !== t && void 0 !== i || (t = -1 * e.wheelDeltaX / 6, i = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, i *= 10), t != t && i != i && (t = 0, i = e.wheelDelta), e.shiftKey ? [-i, -t] : [t, i]
                        }(i),
                        s = o[0],
                        l = o[1];
                    (function(t, i) {
                        var n = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                        if (n) {
                            var o = window.getComputedStyle(n);
                            if (![o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) return !1;
                            var a = n.scrollHeight - n.clientHeight;
                            if (a > 0 && !(0 === n.scrollTop && i > 0 || n.scrollTop === a && i < 0)) return !0;
                            var r = n.scrollLeft - n.clientWidth;
                            if (r > 0 && !(0 === n.scrollLeft && t < 0 || n.scrollLeft === r && t > 0)) return !0
                        }
                        return !1
                    })(s, l) || (n = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (r(e, "top", l ? e.scrollTop - l * t.settings.wheelSpeed : e.scrollTop + s * t.settings.wheelSpeed), n = !0) : t.scrollbarXActive && !t.scrollbarYActive && (r(e, "left", s ? e.scrollLeft + s * t.settings.wheelSpeed : e.scrollLeft - l * t.settings.wheelSpeed), n = !0) : (r(e, "top", e.scrollTop - l * t.settings.wheelSpeed), r(e, "left", e.scrollLeft + s * t.settings.wheelSpeed)), a(e), (n = n || function(i, n) {
                        var o = e.scrollTop;
                        if (0 === i) {
                            if (!t.scrollbarYActive) return !1;
                            if (0 === o && n > 0 || o >= t.contentHeight - t.containerHeight && n < 0) return !t.settings.wheelPropagation
                        }
                        var a = e.scrollLeft;
                        if (0 === n) {
                            if (!t.scrollbarXActive) return !1;
                            if (0 === a && i < 0 || a >= t.contentWidth - t.containerWidth && i > 0) return !t.settings.wheelPropagation
                        }
                        return !0
                    }(s, l)) && (i.stopPropagation(), i.preventDefault()))
                }
                var n = !1;
                void 0 !== window.onwheel ? t.event.bind(e, "wheel", i) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", i)
            }
            var o = e("../instances"),
                a = e("../update-geometry"),
                r = e("../update-scroll");
            t.exports = function(e) {
                n(e, o.get(e))
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        14: [function(e, t, i) {
            "use strict";
            var n = e("../instances"),
                o = e("../update-geometry");
            t.exports = function(e) {
                ! function(e, t) {
                    t.event.bind(e, "scroll", function() {
                        o(e)
                    })
                }(e, n.get(e))
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19
        }],
        15: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                function i() {
                    l || (l = setInterval(function() {
                        return a.get(e) ? (s(e, "top", e.scrollTop + c.top), s(e, "left", e.scrollLeft + c.left), void r(e)) : void clearInterval(l)
                    }, 50))
                }

                function n() {
                    l && (clearInterval(l), l = null), o.stopScrolling(e)
                }
                var l = null,
                    c = {
                        top: 0,
                        left: 0
                    },
                    u = !1;
                t.event.bind(t.ownerDocument, "selectionchange", function() {
                    e.contains(function() {
                        var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                        return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
                    }()) ? u = !0 : (u = !1, n())
                }), t.event.bind(window, "mouseup", function() {
                    u && (u = !1, n())
                }), t.event.bind(window, "keyup", function() {
                    u && (u = !1, n())
                }), t.event.bind(window, "mousemove", function(t) {
                    if (u) {
                        var a = {
                                x: t.pageX,
                                y: t.pageY
                            },
                            r = {
                                left: e.offsetLeft,
                                right: e.offsetLeft + e.offsetWidth,
                                top: e.offsetTop,
                                bottom: e.offsetTop + e.offsetHeight
                            };
                        a.x < r.left + 3 ? (c.left = -5, o.startScrolling(e, "x")) : a.x > r.right - 3 ? (c.left = 5, o.startScrolling(e, "x")) : c.left = 0, a.y < r.top + 3 ? (c.top = r.top + 3 - a.y < 5 ? -5 : -20, o.startScrolling(e, "y")) : a.y > r.bottom - 3 ? (c.top = a.y - r.bottom + 3 < 5 ? 5 : 20, o.startScrolling(e, "y")) : c.top = 0, 0 === c.top && 0 === c.left ? n() : i()
                    }
                })
            }
            var o = e("../../lib/helper"),
                a = e("../instances"),
                r = e("../update-geometry"),
                s = e("../update-scroll");
            t.exports = function(e) {
                n(e, a.get(e))
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        16: [function(e, t, i) {
            "use strict";
            var n = e("../../lib/helper"),
                o = e("../instances"),
                a = e("../update-geometry"),
                r = e("../update-scroll");
            t.exports = function(e) {
                (n.env.supportsTouch || n.env.supportsIePointer) && function(e, t, i, n) {
                    function s(i, n) {
                        var o = e.scrollTop,
                            a = e.scrollLeft,
                            r = Math.abs(i),
                            s = Math.abs(n);
                        if (s > r) {
                            if (n < 0 && o === t.contentHeight - t.containerHeight || n > 0 && 0 === o) return !t.settings.swipePropagation
                        } else if (r > s && (i < 0 && a === t.contentWidth - t.containerWidth || i > 0 && 0 === a)) return !t.settings.swipePropagation;
                        return !0
                    }

                    function l(t, i) {
                        r(e, "top", e.scrollTop - i), r(e, "left", e.scrollLeft - t), a(e)
                    }

                    function c() {
                        w = !0
                    }

                    function u() {
                        w = !1
                    }

                    function d(e) {
                        return e.targetTouches ? e.targetTouches[0] : e
                    }

                    function p(e) {
                        return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
                    }

                    function h(e) {
                        if (p(e)) {
                            x = !0;
                            var t = d(e);
                            v.pageX = t.pageX, v.pageY = t.pageY, g = (new Date).getTime(), null !== b && clearInterval(b), e.stopPropagation()
                        }
                    }

                    function f(e) {
                        if (!x && t.settings.swipePropagation && h(e), !w && x && p(e)) {
                            var i = d(e),
                                n = {
                                    pageX: i.pageX,
                                    pageY: i.pageY
                                },
                                o = n.pageX - v.pageX,
                                a = n.pageY - v.pageY;
                            l(o, a), v = n;
                            var r = (new Date).getTime(),
                                c = r - g;
                            c > 0 && (y.x = o / c, y.y = a / c, g = r), s(o, a) && (e.stopPropagation(), e.preventDefault())
                        }
                    }

                    function m() {
                        !w && x && (x = !1, t.settings.swipeEasing && (clearInterval(b), b = setInterval(function() {
                            return o.get(e) && (y.x || y.y) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(b)
                        }, 10)))
                    }
                    var v = {},
                        g = 0,
                        y = {},
                        b = null,
                        w = !1,
                        x = !1;
                    i ? (t.event.bind(window, "touchstart", c), t.event.bind(window, "touchend", u), t.event.bind(e, "touchstart", h), t.event.bind(e, "touchmove", f), t.event.bind(e, "touchend", m)) : n && (window.PointerEvent ? (t.event.bind(window, "pointerdown", c), t.event.bind(window, "pointerup", u), t.event.bind(e, "pointerdown", h), t.event.bind(e, "pointermove", f), t.event.bind(e, "pointerup", m)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", c), t.event.bind(window, "MSPointerUp", u), t.event.bind(e, "MSPointerDown", h), t.event.bind(e, "MSPointerMove", f), t.event.bind(e, "MSPointerUp", m)))
                }(e, o.get(e), n.env.supportsTouch, n.env.supportsIePointer)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        17: [function(e, t, i) {
            "use strict";
            var n = e("../lib/helper"),
                o = e("../lib/class"),
                a = e("./instances"),
                r = e("./update-geometry"),
                s = {
                    "click-rail": e("./handler/click-rail"),
                    "drag-scrollbar": e("./handler/drag-scrollbar"),
                    keyboard: e("./handler/keyboard"),
                    wheel: e("./handler/mouse-wheel"),
                    touch: e("./handler/touch"),
                    selection: e("./handler/selection")
                },
                l = e("./handler/native-scroll");
            t.exports = function(e, t) {
                t = "object" == typeof t ? t : {}, o.add(e, "ps");
                var i = a.add(e);
                i.settings = n.extend(i.settings, t), o.add(e, "ps--theme_" + i.settings.theme), i.settings.handlers.forEach(function(t) {
                    s[t](e)
                }), l(e), r(e)
            }
        }, {
            "../lib/class": 2,
            "../lib/helper": 6,
            "./handler/click-rail": 10,
            "./handler/drag-scrollbar": 11,
            "./handler/keyboard": 12,
            "./handler/mouse-wheel": 13,
            "./handler/native-scroll": 14,
            "./handler/selection": 15,
            "./handler/touch": 16,
            "./instances": 18,
            "./update-geometry": 19
        }],
        18: [function(e, t, i) {
            "use strict";

            function n(e) {
                return e.getAttribute("data-ps-id")
            }
            var o = e("../lib/helper"),
                a = e("../lib/class"),
                r = e("./default-setting"),
                s = e("../lib/dom"),
                l = e("../lib/event-manager"),
                c = e("../lib/guid"),
                u = {};
            i.add = function(e) {
                var t = c();
                return function(e, t) {
                    e.setAttribute("data-ps-id", t)
                }(e, t), u[t] = new function(e) {
                    function t() {
                        a.add(e, "ps--focus")
                    }

                    function i() {
                        a.remove(e, "ps--focus")
                    }
                    var n = this;
                    n.settings = o.clone(r), n.containerWidth = null, n.containerHeight = null, n.contentWidth = null, n.contentHeight = null, n.isRtl = "rtl" === s.css(e, "direction"), n.isNegativeScroll = function() {
                        var t, i = e.scrollLeft;
                        return e.scrollLeft = -1, t = e.scrollLeft < 0, e.scrollLeft = i, t
                    }(), n.negativeScrollAdjustment = n.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, n.event = new l, n.ownerDocument = e.ownerDocument || document, n.scrollbarXRail = s.appendTo(s.e("div", "ps__scrollbar-x-rail"), e), n.scrollbarX = s.appendTo(s.e("div", "ps__scrollbar-x"), n.scrollbarXRail), n.scrollbarX.setAttribute("tabindex", 0), n.event.bind(n.scrollbarX, "focus", t), n.event.bind(n.scrollbarX, "blur", i), n.scrollbarXActive = null, n.scrollbarXWidth = null, n.scrollbarXLeft = null, n.scrollbarXBottom = o.toInt(s.css(n.scrollbarXRail, "bottom")), n.isScrollbarXUsingBottom = n.scrollbarXBottom == n.scrollbarXBottom, n.scrollbarXTop = n.isScrollbarXUsingBottom ? null : o.toInt(s.css(n.scrollbarXRail, "top")), n.railBorderXWidth = o.toInt(s.css(n.scrollbarXRail, "borderLeftWidth")) + o.toInt(s.css(n.scrollbarXRail, "borderRightWidth")), s.css(n.scrollbarXRail, "display", "block"), n.railXMarginWidth = o.toInt(s.css(n.scrollbarXRail, "marginLeft")) + o.toInt(s.css(n.scrollbarXRail, "marginRight")), s.css(n.scrollbarXRail, "display", ""), n.railXWidth = null, n.railXRatio = null, n.scrollbarYRail = s.appendTo(s.e("div", "ps__scrollbar-y-rail"), e), n.scrollbarY = s.appendTo(s.e("div", "ps__scrollbar-y"), n.scrollbarYRail), n.scrollbarY.setAttribute("tabindex", 0), n.event.bind(n.scrollbarY, "focus", t), n.event.bind(n.scrollbarY, "blur", i), n.scrollbarYActive = null, n.scrollbarYHeight = null, n.scrollbarYTop = null, n.scrollbarYRight = o.toInt(s.css(n.scrollbarYRail, "right")), n.isScrollbarYUsingRight = n.scrollbarYRight == n.scrollbarYRight, n.scrollbarYLeft = n.isScrollbarYUsingRight ? null : o.toInt(s.css(n.scrollbarYRail, "left")), n.scrollbarYOuterWidth = n.isRtl ? o.outerWidth(n.scrollbarY) : null, n.railBorderYWidth = o.toInt(s.css(n.scrollbarYRail, "borderTopWidth")) + o.toInt(s.css(n.scrollbarYRail, "borderBottomWidth")), s.css(n.scrollbarYRail, "display", "block"), n.railYMarginHeight = o.toInt(s.css(n.scrollbarYRail, "marginTop")) + o.toInt(s.css(n.scrollbarYRail, "marginBottom")), s.css(n.scrollbarYRail, "display", ""), n.railYHeight = null, n.railYRatio = null
                }(e), u[t]
            }, i.remove = function(e) {
                delete u[n(e)],
                    function(e) {
                        e.removeAttribute("data-ps-id")
                    }(e)
            }, i.get = function(e) {
                return u[n(e)]
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/event-manager": 4,
            "../lib/guid": 5,
            "../lib/helper": 6,
            "./default-setting": 8
        }],
        19: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
            }
            var o = e("../lib/helper"),
                a = e("../lib/class"),
                r = e("../lib/dom"),
                s = e("./instances"),
                l = e("./update-scroll");
            t.exports = function(e) {
                var t, i = s.get(e);
                i.containerWidth = e.clientWidth, i.containerHeight = e.clientHeight, i.contentWidth = e.scrollWidth, i.contentHeight = e.scrollHeight, e.contains(i.scrollbarXRail) || ((t = r.queryChildren(e, ".ps__scrollbar-x-rail")).length > 0 && t.forEach(function(e) {
                    r.remove(e)
                }), r.appendTo(i.scrollbarXRail, e)), e.contains(i.scrollbarYRail) || ((t = r.queryChildren(e, ".ps__scrollbar-y-rail")).length > 0 && t.forEach(function(e) {
                    r.remove(e)
                }), r.appendTo(i.scrollbarYRail, e)), !i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth ? (i.scrollbarXActive = !0, i.railXWidth = i.containerWidth - i.railXMarginWidth, i.railXRatio = i.containerWidth / i.railXWidth, i.scrollbarXWidth = n(i, o.toInt(i.railXWidth * i.containerWidth / i.contentWidth)), i.scrollbarXLeft = o.toInt((i.negativeScrollAdjustment + e.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth))) : i.scrollbarXActive = !1, !i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight ? (i.scrollbarYActive = !0, i.railYHeight = i.containerHeight - i.railYMarginHeight, i.railYRatio = i.containerHeight / i.railYHeight, i.scrollbarYHeight = n(i, o.toInt(i.railYHeight * i.containerHeight / i.contentHeight)), i.scrollbarYTop = o.toInt(e.scrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight))) : i.scrollbarYActive = !1, i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth && (i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth), i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight && (i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight),
                    function(e, t) {
                        var i = {
                            width: t.railXWidth
                        };
                        t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : i.left = e.scrollLeft, t.isScrollbarXUsingBottom ? i.bottom = t.scrollbarXBottom - e.scrollTop : i.top = t.scrollbarXTop + e.scrollTop, r.css(t.scrollbarXRail, i);
                        var n = {
                            top: e.scrollTop,
                            height: t.railYHeight
                        };
                        t.isScrollbarYUsingRight ? t.isRtl ? n.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : n.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : n.left = t.scrollbarYLeft + e.scrollLeft, r.css(t.scrollbarYRail, n), r.css(t.scrollbarX, {
                            left: t.scrollbarXLeft,
                            width: t.scrollbarXWidth - t.railBorderXWidth
                        }), r.css(t.scrollbarY, {
                            top: t.scrollbarYTop,
                            height: t.scrollbarYHeight - t.railBorderYWidth
                        })
                    }(e, i), i.scrollbarXActive ? a.add(e, "ps--active-x") : (a.remove(e, "ps--active-x"), i.scrollbarXWidth = 0, i.scrollbarXLeft = 0, l(e, "left", 0)), i.scrollbarYActive ? a.add(e, "ps--active-y") : (a.remove(e, "ps--active-y"), i.scrollbarYHeight = 0, i.scrollbarYTop = 0, l(e, "top", 0))
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-scroll": 20
        }],
        20: [function(e, t, i) {
            "use strict";
            var n = e("./instances"),
                o = function(e) {
                    var t = document.createEvent("Event");
                    return t.initEvent(e, !0, !0), t
                };
            t.exports = function(e, t, i) {
                if (void 0 === e) throw "You must provide an element to the update-scroll function";
                if (void 0 === t) throw "You must provide an axis to the update-scroll function";
                if (void 0 === i) throw "You must provide a value to the update-scroll function";
                "top" === t && i <= 0 && (e.scrollTop = i = 0, e.dispatchEvent(o("ps-y-reach-start"))), "left" === t && i <= 0 && (e.scrollLeft = i = 0, e.dispatchEvent(o("ps-x-reach-start")));
                var a = n.get(e);
                "top" === t && i >= a.contentHeight - a.containerHeight && ((i = a.contentHeight - a.containerHeight) - e.scrollTop <= 1 ? i = e.scrollTop : e.scrollTop = i, e.dispatchEvent(o("ps-y-reach-end"))), "left" === t && i >= a.contentWidth - a.containerWidth && ((i = a.contentWidth - a.containerWidth) - e.scrollLeft <= 1 ? i = e.scrollLeft : e.scrollLeft = i, e.dispatchEvent(o("ps-x-reach-end"))), void 0 === a.lastTop && (a.lastTop = e.scrollTop), void 0 === a.lastLeft && (a.lastLeft = e.scrollLeft), "top" === t && i < a.lastTop && e.dispatchEvent(o("ps-scroll-up")), "top" === t && i > a.lastTop && e.dispatchEvent(o("ps-scroll-down")), "left" === t && i < a.lastLeft && e.dispatchEvent(o("ps-scroll-left")), "left" === t && i > a.lastLeft && e.dispatchEvent(o("ps-scroll-right")), "top" === t && i !== a.lastTop && (e.scrollTop = a.lastTop = i, e.dispatchEvent(o("ps-scroll-y"))), "left" === t && i !== a.lastLeft && (e.scrollLeft = a.lastLeft = i, e.dispatchEvent(o("ps-scroll-x")))
            }
        }, {
            "./instances": 18
        }],
        21: [function(e, t, i) {
            "use strict";
            var n = e("../lib/helper"),
                o = e("../lib/dom"),
                a = e("./instances"),
                r = e("./update-geometry"),
                s = e("./update-scroll");
            t.exports = function(e) {
                var t = a.get(e);
                t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, o.css(t.scrollbarXRail, "display", "block"), o.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = n.toInt(o.css(t.scrollbarXRail, "marginLeft")) + n.toInt(o.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = n.toInt(o.css(t.scrollbarYRail, "marginTop")) + n.toInt(o.css(t.scrollbarYRail, "marginBottom")), o.css(t.scrollbarXRail, "display", "none"), o.css(t.scrollbarYRail, "display", "none"), r(e), s(e, "top", e.scrollTop), s(e, "left", e.scrollLeft), o.css(t.scrollbarXRail, "display", ""), o.css(t.scrollbarYRail, "display", ""))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-geometry": 19,
            "./update-scroll": 20
        }]
    }, {}, [1]),
    function(e) {
        var t = {},
            i = "",
            n = "",
            o = "#ced4da",
            a = "1px solid #4285f4",
            r = "1px solid #ced4da",
            s = "0 1px 0 0 #4285f4",
            l = "",
            c = function() {
                function c(u, d) {
                    _classCallCheck(this, c), this.defaults = {
                        data: t,
                        dataColor: i,
                        xColor: n,
                        xBlurColor: o,
                        inputFocus: a,
                        inputBlur: r,
                        inputFocusShadow: s,
                        inputBlurShadow: l
                    }, this.$input = u, this.options = this.assignOptions(d), this.$clearButton = e(".mdb-autocomplete-clear"), this.$autocompleteWrap = e('<ul class="mdb-autocomplete-wrap"></ul>'), this.init()
                }
                return _createClass(c, [{
                    key: "init",
                    value: function() {
                        this.setData(), this.inputFocus(), this.inputBlur(), this.inputKeyupData(), this.inputLiClick(), this.clearAutocomplete()
                    }
                }, {
                    key: "assignOptions",
                    value: function(t) {
                        return e.extend({}, this.defaults, t)
                    }
                }, {
                    key: "setData",
                    value: function() {
                        Object.keys(this.options.data).length && this.$autocompleteWrap.insertAfter(this.$input)
                    }
                }, {
                    key: "inputFocus",
                    value: function() {
                        var e = this;
                        this.$input.on("focus", function() {
                            e.$input.css("border-bottom", e.options.inputFocus), e.$input.css("box-shadow", e.options.inputFocusShadow)
                        })
                    }
                }, {
                    key: "inputBlur",
                    value: function() {
                        var e = this;
                        this.$input.on("blur", function() {
                            e.$input.css("border-bottom", e.options.inputBlur), e.$input.css("box-shadow", e.options.inputBlurShadow)
                        })
                    }
                }, {
                    key: "inputKeyupData",
                    value: function() {
                        var t = this;
                        this.$input.on("keyup", function(i) {
                            var n = t.$input.val();
                            if (t.$autocompleteWrap.empty(), n.length)
                                for (var o in t.options.data)
                                    if (-1 !== t.options.data[o].toLowerCase().indexOf(n.toLowerCase())) {
                                        var a = e("<li>".concat(t.options.data[o], "</li>"));
                                        t.$autocompleteWrap.append(a)
                                    }
                            13 === i.which && (t.$autocompleteWrap.children(":first").trigger("click"), t.$autocompleteWrap.empty()), 0 === n.length ? t.$input.parent().find(".mdb-autocomplete-clear").css("visibility", "hidden") : t.$input.parent().find(".mdb-autocomplete-clear").css("visibility", "visible"), t.$autocompleteWrap.children().css("color", t.options.dataColor)
                        })
                    }
                }, {
                    key: "inputLiClick",
                    value: function() {
                        var t = this;
                        this.$autocompleteWrap.on("click", "li", function(i) {
                            i.preventDefault(), t.$input.val(e(i.target).text()), t.$autocompleteWrap.empty()
                        })
                    }
                }, {
                    key: "clearAutocomplete",
                    value: function() {
                        var t = this;
                        this.$clearButton.on("click", function(i) {
                            i.preventDefault();
                            var n = e(i.currentTarget);
                            n.parent().find(".mdb-autocomplete").val(""), n.css("visibility", "hidden"), t.$autocompleteWrap.empty(), n.parent().find("label").removeClass("active")
                        })
                    }
                }, {
                    key: "changeSVGcolors",
                    value: function() {
                        this.$input.hasClass("mdb-autocomplete") && (this.$input.on("click keyup", function(t) {
                            t.preventDefault(), e(t.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill", xColor)
                        }), this.$input.on("blur", function(t) {
                            t.preventDefault(), e(t.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill", xBlurColor)
                        }))
                    }
                }]), c
            }();
        e.fn.mdbAutocomplete = function(t) {
            return this.each(function() {
                new c(e(this), t)
            })
        }, e.fn.mdb_autocomplete = e.fn.mdbAutocomplete
    }(jQuery),
    function(e) {
        e("body").on("shown.bs.modal", ".modal", function() {
            e(".modal-backdrop").length || ($modal_dialog = e(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && (e(this).addClass("modal-scrolling"), e("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && (e(this).addClass("modal-content-clickable"), e("body").addClass("scrollable")))
        }), e("body").on("hidden.bs.modal", ".modal", function() {
            e("body").removeClass("scrollable")
        })
    }(jQuery),
    function(e) {
        e(".input-default-wrapper").on("change", ".input-default-js", function(t) {
            var i = e(t.target),
                n = i.next("label"),
                o = i[0].files,
                a = "";
            o && o.length > 1 ? a = (i.attr("data-multiple-target") || "").replace("{target}", o.length) : t.target.value && (a = t.target.value.split("\\").pop()), a ? n.find(".span-choose-file").html(a) : n.html(n.html())
        })
    }(jQuery);