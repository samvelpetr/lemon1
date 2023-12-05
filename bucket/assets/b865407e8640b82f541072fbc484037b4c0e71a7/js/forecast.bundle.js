(() => {
	var e = {
			7111: (e, t, r) => {
				var n = r(6733),
					o = r(9821),
					i = TypeError;e.exports = function(e) {
					if(n(e)) return e;
					throw i(o(e) + " is not a function")
				}
			},
			1176: (e, t, r) => {
				var n = r(5052),
					o = String,
					i = TypeError;e.exports = function(e) {
					if(n(e)) return e;
					throw i(o(e) + " is not an object")
				}
			},
			9540: (e, t, r) => {
				var n = r(905),
					o = r(3231),
					i = r(9646),
					c = function(e) {
						return function(t, r, c) {
							var s, a = n(t),
								l = i(a),
								u = o(c, l);
							if(e && r != r) {
								for(; l > u;)
									if((s = a[u++]) != s) return !0
							} else
								for(; l > u; u++)
									if((e || u in a) && a[u] === r) return e || u || 0; return !e && -1
						}
					};e.exports = {
					includes: c(!0),
					indexOf: c(!1)
				}
			},
			6554: (e, t, r) => {
				"use strict";
				var n = r(7400),
					o = r(3718),
					i = TypeError,
					c = Object.getOwnPropertyDescriptor,
					s = n && ! function() {
						if(void 0 !== this) return !0;
						try {
							Object.defineProperty([], "length", {
								writable: !1
							}).length = 1
						} catch(e) {
							return e instanceof TypeError
						}
					}();e.exports = s ? function(e, t) {
					if(o(e) && !c(e, "length").writable) throw i("Cannot set read only .length");
					return e.length = t
				} : function(e, t) {
					return e.length = t
				}
			},
			7079: (e, t, r) => {
				var n = r(5968),
					o = n({}.toString),
					i = n("".slice);e.exports = function(e) {
					return i(o(e), 8, -1)
				}
			},
			7081: (e, t, r) => {
				var n = r(8270),
					o = r(4826),
					i = r(7933),
					c = r(1787);e.exports = function(e, t, r) {
					for(var s = o(t), a = c.f, l = i.f, u = 0; u < s.length; u++) {
						var p = s[u];
						n(e, p) || r && n(r, p) || a(e, p, l(t, p))
					}
				}
			},
			5762: (e, t, r) => {
				var n = r(7400),
					o = r(1787),
					i = r(5358);e.exports = n ? function(e, t, r) {
					return o.f(e, t, i(1, r))
				} : function(e, t, r) {
					return e[t] = r, e
				}
			},
			5358: e => {
				e.exports = function(e, t) {
					return {
						enumerable: !(1 & e),
						configurable: !(2 & e),
						writable: !(4 & e),
						value: t
					}
				}
			},
			4768: (e, t, r) => {
				var n = r(6733),
					o = r(1787),
					i = r(6039),
					c = r(8400);e.exports = function(e, t, r, s) {
					s || (s = {});
					var a = s.enumerable,
						l = void 0 !== s.name ? s.name : t;
					if(n(r) && i(r, l, s), s.global) a ? e[t] = r : c(t, r);
					else {
						try {
							s.unsafe ? e[t] && (a = !0) : delete e[t]
						} catch(e) {}
						a ? e[t] = r : o.f(e, t, {
							value: r,
							enumerable: !1,
							configurable: !s.nonConfigurable,
							writable: !s.nonWritable
						})
					}
					return e
				}
			},
			8400: (e, t, r) => {
				var n = r(9859),
					o = Object.defineProperty;e.exports = function(e, t) {
					try {
						o(n, e, {
							value: t,
							configurable: !0,
							writable: !0
						})
					} catch(r) {
						n[e] = t
					}
					return t
				}
			},
			7400: (e, t, r) => {
				var n = r(4229);e.exports = !n((function() {
					return 7 != Object.defineProperty({}, 1, {
						get: function() {
							return 7
						}
					})[1]
				}))
			},
			3777: e => {
				var t = "object" == typeof document && document.all,
					r = void 0 === t && void 0 !== t;e.exports = {
					all: t,
					IS_HTMLDDA: r
				}
			},
			2635: (e, t, r) => {
				var n = r(9859),
					o = r(5052),
					i = n.document,
					c = o(i) && o(i.createElement);e.exports = function(e) {
					return c ? i.createElement(e) : {}
				}
			},
			3064: e => {
				var t = TypeError;e.exports = function(e) {
					if(e > 9007199254740991) throw t("Maximum allowed index exceeded");
					return e
				}
			},
			598: e => {
				e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
			},
			6358: (e, t, r) => {
				var n, o, i = r(9859),
					c = r(598),
					s = i.process,
					a = i.Deno,
					l = s && s.versions || a && a.version,
					u = l && l.v8;u && (o = (n = u.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
				!o && c && (!(n = c.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = c.match(/Chrome\/(\d+)/)) && (o = +n[1]),
				e.exports = o
			},
			3837: e => {
				e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
			},
			3103: (e, t, r) => {
				var n = r(9859),
					o = r(7933).f,
					i = r(5762),
					c = r(4768),
					s = r(8400),
					a = r(7081),
					l = r(6541);e.exports = function(e, t) {
					var r, u, p, d, m, f = e.target,
						b = e.global,
						h = e.stat;
					if(r = b ? n : h ? n[f] || s(f, {}) : (n[f] || {}).prototype)
						for(u in t) {
							if(d = t[u], p = e.dontCallGetSet ? (m = o(r, u)) && m.value : r[u], !l(b ? u : f + (h ? "." : "#") + u, e.forced) && void 0 !== p) {
								if(typeof d == typeof p) continue;
								a(d, p)
							}(e.sham || p && p.sham) && i(d, "sham", !0), c(r, u, d, e)
						}
				}
			},
			4229: e => {
				e.exports = function(e) {
					try {
						return !!e()
					} catch(e) {
						return !0
					}
				}
			},
			7188: (e, t, r) => {
				var n = r(4229);e.exports = !n((function() {
					var e = function() {}.bind();
					return "function" != typeof e || e.hasOwnProperty("prototype")
				}))
			},
			266: (e, t, r) => {
				var n = r(7188),
					o = Function.prototype.call;e.exports = n ? o.bind(o) : function() {
					return o.apply(o, arguments)
				}
			},
			1805: (e, t, r) => {
				var n = r(7400),
					o = r(8270),
					i = Function.prototype,
					c = n && Object.getOwnPropertyDescriptor,
					s = o(i, "name"),
					a = s && "something" === function() {}.name,
					l = s && (!n || n && c(i, "name").configurable);e.exports = {
					EXISTS: s,
					PROPER: a,
					CONFIGURABLE: l
				}
			},
			5968: (e, t, r) => {
				var n = r(7188),
					o = Function.prototype,
					i = o.call,
					c = n && o.bind.bind(i, i);e.exports = n ? c : function(e) {
					return function() {
						return i.apply(e, arguments)
					}
				}
			},
			1333: (e, t, r) => {
				var n = r(9859),
					o = r(6733);e.exports = function(e, t) {
					return arguments.length < 2 ? (r = n[e], o(r) ? r : void 0) : n[e] && n[e][t];
					var r
				}
			},
			5300: (e, t, r) => {
				var n = r(7111),
					o = r(9650);e.exports = function(e, t) {
					var r = e[t];
					return o(r) ? void 0 : n(r)
				}
			},
			9859: (e, t, r) => {
				var n = function(e) {
					return e && e.Math == Math && e
				};e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || function() {
					return this
				}() || Function("return this")()
			},
			8270: (e, t, r) => {
				var n = r(5968),
					o = r(2991),
					i = n({}.hasOwnProperty);e.exports = Object.hasOwn || function(e, t) {
					return i(o(e), t)
				}
			},
			5977: e => {
				e.exports = {}
			},
			4394: (e, t, r) => {
				var n = r(7400),
					o = r(4229),
					i = r(2635);e.exports = !n && !o((function() {
					return 7 != Object.defineProperty(i("div"), "a", {
						get: function() {
							return 7
						}
					}).a
				}))
			},
			9337: (e, t, r) => {
				var n = r(5968),
					o = r(4229),
					i = r(7079),
					c = Object,
					s = n("".split);e.exports = o((function() {
					return !c("z").propertyIsEnumerable(0)
				})) ? function(e) {
					return "String" == i(e) ? s(e, "") : c(e)
				} : c
			},
			8511: (e, t, r) => {
				var n = r(5968),
					o = r(6733),
					i = r(5353),
					c = n(Function.toString);o(i.inspectSource) || (i.inspectSource = function(e) {
					return c(e)
				}),
				e.exports = i.inspectSource
			},
			6407: (e, t, r) => {
				var n, o, i, c = r(1180),
					s = r(9859),
					a = r(5052),
					l = r(5762),
					u = r(8270),
					p = r(5353),
					d = r(4399),
					m = r(5977),
					f = "Object already initialized",
					b = s.TypeError,
					h = s.WeakMap;
				if(c || p.state) {
					var v = p.state || (p.state = new h);
					v.get = v.get, v.has = v.has, v.set = v.set, n = function(e, t) {
						if(v.has(e)) throw b(f);
						return t.facade = e, v.set(e, t), t
					}, o = function(e) {
						return v.get(e) || {}
					}, i = function(e) {
						return v.has(e)
					}
				} else {
					var g = d("state");
					m[g] = !0, n = function(e, t) {
						if(u(e, g)) throw b(f);
						return t.facade = e, l(e, g, t), t
					}, o = function(e) {
						return u(e, g) ? e[g] : {}
					}, i = function(e) {
						return u(e, g)
					}
				}
				e.exports = {
					set: n,
					get: o,
					has: i,
					enforce: function(e) {
						return i(e) ? o(e) : n(e, {})
					},
					getterFor: function(e) {
						return function(t) {
							var r;
							if(!a(t) || (r = o(t)).type !== e) throw b("Incompatible receiver, " + e + " required");
							return r
						}
					}
				}
			},
			3718: (e, t, r) => {
				var n = r(7079);e.exports = Array.isArray || function(e) {
					return "Array" == n(e)
				}
			},
			6733: (e, t, r) => {
				var n = r(3777),
					o = n.all;e.exports = n.IS_HTMLDDA ? function(e) {
					return "function" == typeof e || e === o
				} : function(e) {
					return "function" == typeof e
				}
			},
			6541: (e, t, r) => {
				var n = r(4229),
					o = r(6733),
					i = /#|\.prototype\./,
					c = function(e, t) {
						var r = a[s(e)];
						return r == u || r != l && (o(t) ? n(t) : !!t)
					},
					s = c.normalize = function(e) {
						return String(e).replace(i, ".").toLowerCase()
					},
					a = c.data = {},
					l = c.NATIVE = "N",
					u = c.POLYFILL = "P";e.exports = c
			},
			9650: e => {
				e.exports = function(e) {
					return null == e
				}
			},
			5052: (e, t, r) => {
				var n = r(6733),
					o = r(3777),
					i = o.all;e.exports = o.IS_HTMLDDA ? function(e) {
					return "object" == typeof e ? null !== e : n(e) || e === i
				} : function(e) {
					return "object" == typeof e ? null !== e : n(e)
				}
			},
			4231: e => {
				e.exports = !1
			},
			9395: (e, t, r) => {
				var n = r(1333),
					o = r(6733),
					i = r(1321),
					c = r(6969),
					s = Object;e.exports = c ? function(e) {
					return "symbol" == typeof e
				} : function(e) {
					var t = n("Symbol");
					return o(t) && i(t.prototype, s(e))
				}
			},
			9646: (e, t, r) => {
				var n = r(4237);e.exports = function(e) {
					return n(e.length)
				}
			},
			6039: (e, t, r) => {
				var n = r(5968),
					o = r(4229),
					i = r(6733),
					c = r(8270),
					s = r(7400),
					a = r(1805).CONFIGURABLE,
					l = r(8511),
					u = r(6407),
					p = u.enforce,
					d = u.get,
					m = String,
					f = Object.defineProperty,
					b = n("".slice),
					h = n("".replace),
					v = n([].join),
					g = s && !o((function() {
						return 8 !== f((function() {}), "length", {
							value: 8
						}).length
					})),
					y = String(String).split("String"),
					_ = e.exports = function(e, t, r) {
						"Symbol(" === b(m(t), 0, 7) && (t = "[" + h(m(t), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!c(e, "name") || a && e.name !== t) && (s ? f(e, "name", {
							value: t,
							configurable: !0
						}) : e.name = t), g && r && c(r, "arity") && e.length !== r.arity && f(e, "length", {
							value: r.arity
						});
						try {
							r && c(r, "constructor") && r.constructor ? s && f(e, "prototype", {
								writable: !1
							}) : e.prototype && (e.prototype = void 0)
						} catch(e) {}
						var n = p(e);
						return c(n, "source") || (n.source = v(y, "string" == typeof t ? t : "")), e
					};Function.prototype.toString = _((function() {
					return i(this) && d(this).source || l(this)
				}), "toString")
			},
			917: e => {
				var t = Math.ceil,
					r = Math.floor;e.exports = Math.trunc || function(e) {
					var n = +e;
					return(n > 0 ? r : t)(n)
				}
			},
			1787: (e, t, r) => {
				var n = r(7400),
					o = r(4394),
					i = r(7137),
					c = r(1176),
					s = r(9310),
					a = TypeError,
					l = Object.defineProperty,
					u = Object.getOwnPropertyDescriptor,
					p = "enumerable",
					d = "configurable",
					m = "writable";t.f = n ? i ? function(e, t, r) {
					if(c(e), t = s(t), c(r), "function" == typeof e && "prototype" === t && "value" in r && m in r && !r[m]) {
						var n = u(e, t);
						n && n[m] && (e[t] = r.value, r = {
							configurable: d in r ? r[d] : n[d],
							enumerable: p in r ? r[p] : n[p],
							writable: !1
						})
					}
					return l(e, t, r)
				} : l : function(e, t, r) {
					if(c(e), t = s(t), c(r), o) try {
						return l(e, t, r)
					} catch(e) {}
					if("get" in r || "set" in r) throw a("Accessors not supported");
					return "value" in r && (e[t] = r.value), e
				}
			},
			7933: (e, t, r) => {
				var n = r(7400),
					o = r(266),
					i = r(9195),
					c = r(5358),
					s = r(905),
					a = r(9310),
					l = r(8270),
					u = r(4394),
					p = Object.getOwnPropertyDescriptor;t.f = n ? p : function(e, t) {
					if(e = s(e), t = a(t), u) try {
						return p(e, t)
					} catch(e) {}
					if(l(e, t)) return c(!o(i.f, e, t), e[t])
				}
			},
			8151: (e, t, r) => {
				var n = r(140),
					o = r(3837).concat("length", "prototype");t.f = Object.getOwnPropertyNames || function(e) {
					return n(e, o)
				}
			},
			894: (e, t) => {
				t.f = Object.getOwnPropertySymbols
			},
			1321: (e, t, r) => {
				var n = r(5968);e.exports = n({}.isPrototypeOf)
			},
			140: (e, t, r) => {
				var n = r(5968),
					o = r(8270),
					i = r(905),
					c = r(9540).indexOf,
					s = r(5977),
					a = n([].push);e.exports = function(e, t) {
					var r, n = i(e),
						l = 0,
						u = [];
					for(r in n) !o(s, r) && o(n, r) && a(u, r);
					for(; t.length > l;) o(n, r = t[l++]) && (~c(u, r) || a(u, r));
					return u
				}
			},
			9195: (e, t) => {
				"use strict";
				var r = {}.propertyIsEnumerable,
					n = Object.getOwnPropertyDescriptor,
					o = n && !r.call({
						1: 2
					}, 1);t.f = o ? function(e) {
					var t = n(this, e);
					return !!t && t.enumerable
				} : r
			},
			2914: (e, t, r) => {
				var n = r(266),
					o = r(6733),
					i = r(5052),
					c = TypeError;e.exports = function(e, t) {
					var r, s;
					if("string" === t && o(r = e.toString) && !i(s = n(r, e))) return s;
					if(o(r = e.valueOf) && !i(s = n(r, e))) return s;
					if("string" !== t && o(r = e.toString) && !i(s = n(r, e))) return s;
					throw c("Can't convert object to primitive value")
				}
			},
			4826: (e, t, r) => {
				var n = r(1333),
					o = r(5968),
					i = r(8151),
					c = r(894),
					s = r(1176),
					a = o([].concat);e.exports = n("Reflect", "ownKeys") || function(e) {
					var t = i.f(s(e)),
						r = c.f;
					return r ? a(t, r(e)) : t
				}
			},
			8885: (e, t, r) => {
				var n = r(9650),
					o = TypeError;e.exports = function(e) {
					if(n(e)) throw o("Can't call method on " + e);
					return e
				}
			},
			4399: (e, t, r) => {
				var n = r(3036),
					o = r(1441),
					i = n("keys");e.exports = function(e) {
					return i[e] || (i[e] = o(e))
				}
			},
			5353: (e, t, r) => {
				var n = r(9859),
					o = r(8400),
					i = "__core-js_shared__",
					c = n[i] || o(i, {});e.exports = c
			},
			3036: (e, t, r) => {
				var n = r(4231),
					o = r(5353);
				(e.exports = function(e, t) {
					return o[e] || (o[e] = void 0 !== t ? t : {})
				})("versions", []).push({
					version: "3.30.1",
					mode: n ? "pure" : "global",
					copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
					license: "https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",
					source: "https://github.com/zloirock/core-js"
				})
			},
			4860: (e, t, r) => {
				var n = r(6358),
					o = r(4229);e.exports = !!Object.getOwnPropertySymbols && !o((function() {
					var e = Symbol();
					return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && n && n < 41
				}))
			},
			3231: (e, t, r) => {
				var n = r(3329),
					o = Math.max,
					i = Math.min;e.exports = function(e, t) {
					var r = n(e);
					return r < 0 ? o(r + t, 0) : i(r, t)
				}
			},
			905: (e, t, r) => {
				var n = r(9337),
					o = r(8885);e.exports = function(e) {
					return n(o(e))
				}
			},
			3329: (e, t, r) => {
				var n = r(917);e.exports = function(e) {
					var t = +e;
					return t != t || 0 === t ? 0 : n(t)
				}
			},
			4237: (e, t, r) => {
				var n = r(3329),
					o = Math.min;e.exports = function(e) {
					return e > 0 ? o(n(e), 9007199254740991) : 0
				}
			},
			2991: (e, t, r) => {
				var n = r(8885),
					o = Object;e.exports = function(e) {
					return o(n(e))
				}
			},
			2066: (e, t, r) => {
				var n = r(266),
					o = r(5052),
					i = r(9395),
					c = r(5300),
					s = r(2914),
					a = r(95),
					l = TypeError,
					u = a("toPrimitive");e.exports = function(e, t) {
					if(!o(e) || i(e)) return e;
					var r, a = c(e, u);
					if(a) {
						if(void 0 === t && (t = "default"), r = n(a, e, t), !o(r) || i(r)) return r;
						throw l("Can't convert object to primitive value")
					}
					return void 0 === t && (t = "number"), s(e, t)
				}
			},
			9310: (e, t, r) => {
				var n = r(2066),
					o = r(9395);e.exports = function(e) {
					var t = n(e, "string");
					return o(t) ? t : t + ""
				}
			},
			9821: e => {
				var t = String;e.exports = function(e) {
					try {
						return t(e)
					} catch(e) {
						return "Object"
					}
				}
			},
			1441: (e, t, r) => {
				var n = r(5968),
					o = 0,
					i = Math.random(),
					c = n(1..toString);e.exports = function(e) {
					return "Symbol(" + (void 0 === e ? "" : e) + ")_" + c(++o + i, 36)
				}
			},
			6969: (e, t, r) => {
				var n = r(4860);e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
			},
			7137: (e, t, r) => {
				var n = r(7400),
					o = r(4229);e.exports = n && o((function() {
					return 42 != Object.defineProperty((function() {}), "prototype", {
						value: 42,
						writable: !1
					}).prototype
				}))
			},
			1180: (e, t, r) => {
				var n = r(9859),
					o = r(6733),
					i = n.WeakMap;e.exports = o(i) && /native code/.test(String(i))
			},
			95: (e, t, r) => {
				var n = r(9859),
					o = r(3036),
					i = r(8270),
					c = r(1441),
					s = r(4860),
					a = r(6969),
					l = n.Symbol,
					u = o("wks"),
					p = a ? l.for || l : l && l.withoutSetter || c;e.exports = function(e) {
					return i(u, e) || (u[e] = s && i(l, e) ? l[e] : p("Symbol." + e)), u[e]
				}
			},
			6728: (e, t, r) => {
				"use strict";
				var n = r(3103),
					o = r(2991),
					i = r(9646),
					c = r(6554),
					s = r(3064);n({
					target: "Array",
					proto: !0,
					arity: 1,
					forced: r(4229)((function() {
						return 4294967297 !== [].push.call({
							length: 4294967296
						}, 1)
					})) || ! function() {
						try {
							Object.defineProperty([], "length", {
								writable: !1
							}).push()
						} catch(e) {
							return e instanceof TypeError
						}
					}()
				}, {
					push: function(e) {
						var t = o(this),
							r = i(t),
							n = arguments.length;
						s(r + n);
						for(var a = 0; a < n; a++) t[r] = arguments[a], r++;
						return c(t, r), r
					}
				})
			}
		},
		t = {};

	function r(n) {
		var o = t[n];
		if(void 0 !== o) return o.exports;
		var i = t[n] = {
			exports: {}
		};
		return e[n](i, i.exports, r), i.exports
	}
	r.g = function() {
		if("object" == typeof globalThis) return globalThis;
		try {
			return this || new Function("return this")()
		} catch(e) {
			if("object" == typeof window) return window
		}
	}(),
	(() => {
		"use strict";

		function e() {
			const e = window.pa;
			return !(!e || !e.privacy) && "optin" === e.privacy.getMode()
		}

		function t(e, t) {
			const r = window.pa;
			r && r.sendEvent(e, t)
		}
		r(6728);
		const n = (e, t) => {
				const r = Element.prototype;
				return(r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || function(e) {
					return -1 !== [].indexOf.call(document.querySelectorAll(e), this)
				}).call(e, t)
			},
			o = (e, t) => {
				if(Element.prototype.closest) return e.closest(t);
				let r = e;do {
					if(n(r, t)) return r;
					r = r.parentElement || r.parentNode
				} while (null !== r && 1 === r.nodeType);
				return null
			};

		function i(r, n) {
			! function() {
				let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				(arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || e()) && t("publisher.impression", {
					onsitead_type: "Publisher",
					...r
				})
			}({
				onsitead_campaign: "bandeau abandonniste"
			});
			const o = {
				"offre: type": n.querySelector("[data-formula-name]").dataset.formulaName
			};
			1 === r.version ? o["tech: ab-test"] = "A" : 2 === r.version && (o["tech: ab-test"] = "B"), s("bandeau abandonniste", o)
		}

		function c(r, n) {
			! function() {
				let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				(arguments.length > 1 && void 0 !== arguments[1] && arguments[1] || e()) && t("publisher.click", {
					onsitead_type: "Publisher",
					...r
				})
			}({
				onsitead_campaign: "bandeau abandonniste"
			});
			const i = {
				"offre: type": o(n, "[data-formula-name]").dataset.formulaName
			};
			1 === r.version ? i["tech: ab-test"] = "A" : 2 === r.version && (i["tech: ab-test"] = "B"), s("clic: bandeau abandonniste", i)
		}

		function s(e) {
			const t = new CustomEvent("lmdForecastRetargeting", {
				detail: {
					eventName: e,
					properties: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
				}
			});
			document.dispatchEvent(t)
		}
		const a = 1024;

		function l() {
			const e = new CustomEvent("lmdForecastRecirculation", {
				detail: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
			});
			document.dispatchEvent(e)
		}

		function u() {
			const e = window.lmd ? .analytics ? .piano ? .properties ? .type_de_page || "";
			return "Article" === e && "Teaser" === window.lmd ? .analytics ? .piano ? .properties ? .statut_article ? window.lmd.analytics.piano.properties.statut_article : e
		}
		const p = function() {
				const {
					search: e
				} = document.location;
				if(e.includes("lmd-show-dev-logs")) {
					for(var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
					console.log(r)
				}
			},
			d = e => {
				p(`getConsentForPurpose - type: ${e}`);
				const t = (() => {
					p("getPurposesFromCookie");
					let e = null;
					const t = document.cookie.match(/(^|;)\s*lmd_consent=([^;]+)/);
					if(t) {
						const r = JSON.parse(decodeURIComponent(t[2] ? t[2] : ""));
						r.purposes && (e = r.purposes)
					}
					return e
				})();
				return !(!t || !t[e]) && t[e]
			};

		function m() {
			if(!window.lmd.context.pageType) return "unknown";
			if(["Rubrique_Une", "Rubrique_Une_Abonnes"].includes(window.lmd.context.pageType)) return "home";
			if("recherche" === window.lmd.context.pageType) {
				const e = new URLSearchParams(window.location.search);
				return e && e.has("search_keywords") ? "search_results" : "search"
			}
			return "Element" === window.lmd.context.pageType ? "article" : "unknown"
		}

		function f() {
			const e = document.cookie.match(/(^|;)\s*lmd_consent=([^;]+)/);
			if(e) try {
				const t = JSON.parse(decodeURIComponent(e[2] ? e[2] : ""));
				if(t.purposes) return !0 === t.purposes.personalization
			} catch(e) {
				return !1
			}
			return !1
		}

		function b() {
			if(function(e, t) {
					const r = e.__forecast || (e.__forecast = {}),
						n = ((window.lmd || {}).hosts || {}).forecast || null;
					if(r.domain = n ? `https://${n}` : "https://forecast.lemonde.fr", !r.loaded) {
						const e = t.createElement("script");
						e.async = !0, e.src = `${r.domain}/sdk.js`;
						const n = t.getElementsByTagName("script")[0];
						n.parentNode.insertBefore(e, n), r.loaded = !0
					}
				}(window, document), window.__forecast.config = {
					consent: {
						collect: f(),
						display: !0,
						ads: (p("getAdsConsent"), d("ads"))
					},
					contentSelector: ".article__content",
					pageType: m(),
					zones: [{
						type: "to_read",
						selector: ".article__content .catcher a"
					}, {
						type: "most_read",
						selector: "#forecast_widget li a"
					}, {
						type: "article_bottom",
						selector: `section.article__siblings-container ${window.lmd.isAbo?"section":"div"} a`
					}],
					widgets: [{
						targetSelector: ".forecast-retargeting-banner",
						name: "retargeting_banner",
						type: "retargeting",
						expire: 604800,
						capping: 10,
						template: "retargeting",
						passLead: !0,
						visibilityTarget: "#js-relance-banner",
						options: {
							layout: "banner",
							lmdGeneralPlacement: u()
						},
						events: {
							load: () => {! function() {
									const e = new CustomEvent("lmdForecastRetargetingLoaded");
									document.dispatchEvent(e)
								}()
							},
							visible: (e, t) => {
								i(e, t),
								function() {
									const e = document.getElementById("js-relance-close"),
										t = document.getElementById("js-relance-banner");
									e && e.addEventListener("click", (e => {
										e.preventDefault(),
										function() {
											const e = document.getElementById("js-relance-banner");
											(function() {
												const e = window,
													t = document,
													r = t.documentElement,
													n = t.getElementsByTagName("body")[0],
													o = e.innerHeight || r.clientHeight || n.clientHeight;
												return {
													width: e.innerWidth || r.clientWidth || n.clientWidth,
													height: o
												}
											})().width >= a && e && e.classList.contains("message--shown") && e.classList.remove("message--shown")
										}(),
										t.dispatchEvent(new Event("close"))
									}))
								}()
							},
							click: (e, t) => {
								c(e, t.currentTarget)
							}
						}
					}, {
						targetSelector: ".forecast-retargeting-block",
						name: "retargeting_block",
						type: "retargeting",
						expire: 604800,
						capping: 10,
						template: "retargeting",
						passLead: !0,
						options: {
							layout: "bloc",
							lmdGeneralPlacement: u()
						},
						events: {
							visible: (e, t) => {
								i(e, t)
							},
							click: (e, t) => {
								c(e, t.currentTarget)
							}
						}
					}, {
						targetSelector: "#article_recos_premium",
						name: "article_bottom",
						template: "recommendations",
						passUrl: !0,
						options: {
							type: "weighted-top-next-articles",
							itemNumber: 16,
							skin: "list",
							excludedSections: "Le Monde in English",
							excludedSubsections: "The French Test"
						},
						events: {
							load: () => {
								const e = document.getElementById("article_recos_premium"),
									t = document.createElement("p");t.classList.add("article__siblings-title"),
								t.textContent = "Nos lecteurs ont lu ensuite",
								e.prepend(t),
								e.replaceWith(...e.childNodes)
							},
							visible: () => {
								l({
									name: "scroll: recos bas article",
									properties: {
										"tech: version": "topnext"
									}
								})
							},
							click: (e, t) => {
								l({
									name: "clic: recos bas article",
									properties: {
										"tech: version": "topnext"
									},
									linkElement: t.currentTarget
								})
							}
						},
						failovers: [{
							name: "article_bottom_failover_1",
							template: "article_bottom",
							passUrl: !0,
							options: {
								itemNumber: 16,
								skin: "list",
								excludedSections: "Le Monde in English",
								excludedSubsections: "The French Test"
							},
							events: {
								empty: () => {
									document.getElementById("article_recos_premium").parentElement.parentElement.remove()
								},
								load: () => {
									const e = document.getElementById("article_recos_premium"),
										t = document.createElement("p");t.classList.add("article__siblings-title"),
									t.textContent = "Dans la même rubrique",
									e.prepend(t),
									e.replaceWith(...e.childNodes)
								},
								visible: () => {
									l({
										name: "scroll: recos bas article",
										properties: {
											"tech: version": "memerubrique"
										}
									})
								},
								click: (e, t) => {
									l({
										name: "clic: recos bas article",
										properties: {
											"tech: version": "memerubrique"
										},
										linkElement: t.currentTarget
									})
								}
							}
						}]
					}, {
						targetSelector: "#article_recos_1",
						name: "article_bottom",
						template: "recommendations",
						passUrl: !0,
						options: {
							type: "weighted-top-next-articles",
							itemNumber: 7,
							skin: "thumbnails",
							excludedSections: "Le Monde in English",
							excludedSubsections: "The French Test"
						},
						events: {
							load: () => {
								const e = document.getElementById("article_recos_1"),
									t = document.createElement("p");t.classList.add("article__siblings-title", "article__siblings-title-forecast"),
								t.textContent = "Nos lecteurs ont lu ensuite",
								e.prepend(t),
								e.replaceWith(...e.childNodes)
							},
							visible: () => {
								l({
									name: "scroll: recos bas article",
									properties: {
										"tech: version": "topnext"
									}
								})
							},
							click: (e, t) => {
								l({
									name: "clic: recos bas article",
									properties: {
										"tech: version": "topnext"
									},
									linkElement: t.currentTarget
								})
							}
						},
						failovers: [{
							name: "article_bottom_failover_1",
							template: "article_bottom",
							passUrl: !0,
							options: {
								itemNumber: 7,
								skin: "thumbnails",
								excludedSections: "Le Monde in English",
								excludedSubsections: "The French Test"
							},
							events: {
								load: () => {
									const e = document.getElementById("article_recos_1"),
										t = document.createElement("p");t.classList.add("article__siblings-title"),
									t.textContent = "Dans la même rubrique",
									e.prepend(t),
									e.replaceWith(...e.childNodes)
								},
								visible: () => {
									l({
										name: "scroll: recos bas article",
										properties: {
											"tech: version": "memerubrique"
										}
									})
								},
								click: (e, t) => {
									l({
										name: "clic: recos bas article",
										properties: {
											"tech: version": "memerubrique"
										},
										linkElement: t.currentTarget
									})
								}
							}
						}]
					}, {
						targetSelector: "#article_recos_2",
						name: "article_bottom",
						template: "recommendations",
						passUrl: !0,
						options: {
							type: "weighted-top-next-articles",
							itemNumber: 7,
							offset: 7,
							skin: "thumbnails",
							excludedSections: "Le Monde in English",
							excludedSubsections: "The French Test"
						},
						events: {
							load: () => {
								const e = document.getElementById("article_recos_2");e.replaceWith(...e.childNodes)
							},
							click: (e, t) => {
								l({
									name: "clic: recos bas article",
									properties: {
										"tech: version": "topnext"
									},
									linkElement: t.currentTarget
								})
							}
						},
						failovers: [{
							name: "article_bottom_failover_1",
							template: "article_bottom",
							passUrl: !0,
							options: {
								itemNumber: 7,
								offset: 7,
								skin: "thumbnails",
								excludedSections: "Le Monde in English",
								excludedSubsections: "The French Test"
							},
							events: {
								load: () => {
									const e = document.getElementById("article_recos_2");e.replaceWith(...e.childNodes)
								},
								click: (e, t) => {
									l({
										name: "clic: recos bas article",
										properties: {
											"tech: version": "memerubrique"
										},
										linkElement: t.currentTarget
									})
								}
							}
						}]
					}, {
						targetSelector: "#article_recos_3",
						name: "article_bottom",
						template: "recommendations",
						passUrl: !0,
						options: {
							type: "weighted-top-next-articles",
							itemNumber: 2,
							offset: 14,
							skin: "thumbnails",
							excludedSections: "Le Monde in English",
							excludedSubsections: "The French Test"
						},
						events: {
							load: () => {
								const e = document.getElementById("article_recos_3");e.replaceWith(...e.childNodes)
							},
							click: (e, t) => {
								l({
									name: "clic: recos bas article",
									properties: {
										"tech: version": "persoedito"
									},
									linkElement: t.currentTarget
								})
							}
						},
						failovers: [{
							name: "article_bottom_failover_1",
							template: "article_bottom",
							passUrl: !0,
							options: {
								itemNumber: 2,
								offset: 14,
								skin: "thumbnails",
								excludedSections: "Le Monde in English",
								excludedSubsections: "The French Test"
							},
							events: {
								load: () => {
									const e = document.getElementById("article_recos_3");e.replaceWith(...e.childNodes)
								},
								click: (e, t) => {
									l({
										name: "clic: recos bas article",
										properties: {
											"tech: version": "memerubrique"
										},
										linkElement: t.currentTarget
									})
								}
							}
						}]
					}, {
						targetSelector: "#article_recos_paywall_1",
						name: "article_bottom_paywall",
						template: "recommendations",
						passUrl: !0,
						options: {
							type: "weighted-top-next-articles",
							itemNumber: 3,
							skin: "thumbnails",
							excludedSections: "Le Monde in English",
							excludedSubsections: "The French Test"
						},
						events: {
							load: () => {
								const e = document.getElementById("article_recos_paywall_1"),
									t = document.createElement("h3");t.classList.add("paywall__articles-title"),
								t.textContent = "Nos lecteurs ont lu ensuite",
								e.prepend(t)
							},
							visible: () => {
								l({
									name: "scroll: recos bas article",
									properties: {
										"tech: version": "topnext"
									}
								})
							},
							click: (e, t) => {
								l({
									name: "clic: recos bas article",
									properties: {
										"tech: version": "topnext"
									},
									linkElement: t.currentTarget
								})
							}
						},
						failovers: [{
							name: "article_bottom_paywall_failover_1",
							template: "article_bottom",
							passUrl: !0,
							options: {
								skin: "thumbnails",
								itemNumber: 3,
								excludedSections: "Le Monde in English",
								excludedSubsections: "The French Test"
							},
							events: {
								load: () => {
									const e = document.getElementById("article_recos_paywall_1"),
										t = document.createElement("h3");t.classList.add("paywall__articles-title"),
									t.textContent = "Dans la même rubrique",
									e.prepend(t)
								},
								visible: () => {
									l({
										name: "scroll: recos bas article",
										properties: {
											"tech: version": "memerubrique"
										}
									})
								},
								click: (e, t) => {
									l({
										name: "clic: recos bas article",
										properties: {
											"tech: version": "memerubrique"
										},
										linkElement: t.currentTarget
									})
								}
							}
						}]
					}, {
						targetSelector: "#article_recos_paywall_2",
						name: "article_bottom_paywall",
						template: "recommendations",
						passUrl: !0,
						options: {
							type: "weighted-top-next-articles",
							itemNumber: 3,
							offset: 3,
							skin: "thumbnails",
							excludedSections: "Le Monde in English",
							excludedSubsections: "The French Test"
						},
						events: {
							click: (e, t) => {
								l({
									name: "clic: recos bas article",
									properties: {
										"tech: version": "topnext"
									},
									linkElement: t.currentTarget
								})
							}
						},
						failovers: [{
							name: "article_bottom_paywall_failover_1",
							template: "article_bottom",
							passUrl: !0,
							options: {
								skin: "thumbnails",
								itemNumber: 3,
								offset: 3,
								excludedSections: "Le Monde in English",
								excludedSubsections: "The French Test"
							},
							events: {
								click: (e, t) => {
									l({
										name: "clic: recos bas article",
										properties: {
											"tech: version": "memerubrique"
										},
										linkElement: t.currentTarget
									})
								}
							}
						}]
					}, {
						targetSelector: "#article_recos_paywall_1_abtest_bc",
						name: "article_bottom_paywall",
						passUrl: !0,
						template: "recommendations",
						options: {
							itemNumber: 2,
							skin: "list",
							type: "weighted-top-next-articles",
							excludedSections: "Le Monde in English",
							excludedSubsections: "The French Test"
						},
						failovers: [{
							name: "article_bottom_paywall_failover_1_abtest_bc",
							template: "article_bottom",
							passUrl: !0,
							options: {
								skin: "list",
								itemNumber: 2,
								excludedSections: "Le Monde in English",
								excludedSubsections: "The French Test"
							},
							events: {
								load: () => {
									const e = document.getElementById("article_recos_paywall_1_abtest_bc"),
										t = document.createElement("h3");t.classList.add("paywall__articles-title"),
									t.textContent = "Nos lecteurs ont lu ensuite",
									e.prepend(t)
								},
								visible: () => {
									l({
										name: "scroll: recos bas article",
										properties: {
											"tech: version": "memerubrique"
										}
									})
								},
								click: (e, t) => {
									l({
										name: "clic: recos bas article",
										properties: {
											"tech: version": "memerubrique"
										},
										linkElement: t.currentTarget
									})
								}
							}
						}]
					}, {
						targetSelector: "#article_recos_paywall_2_abtest_bc",
						name: "article_bottom_paywall",
						passUrl: !0,
						template: "recommendations",
						options: {
							type: "weighted-top-next-articles",
							skin: "list",
							itemNumber: 14,
							offset: 2,
							excludedSections: "Le Monde in English",
							excludedSubsections: "The French Test"
						},
						failovers: [{
							name: "article_bottom_paywall_failover_2_abtest_bc",
							passUrl: !0,
							template: "article_bottom",
							options: {
								skin: "list",
								itemNumber: 14,
								offset: 2,
								excludedSections: "Le Monde in English",
								excludedSubsections: "The French Test"
							},
							events: {
								visible: () => {
									l({
										name: "scroll: recos bas article",
										properties: {
											"tech: version": "memerubrique"
										}
									})
								},
								click: (e, t) => {
									l({
										name: "clic: recos bas article",
										properties: {
											"tech: version": "memerubrique"
										},
										linkElement: t.currentTarget
									})
								}
							}
						}]
					}]
				}, void 0 !== window.lmd.section) {
				const e = document.getElementById("forecast_widget");
				window.__forecast.config.widgets.push({
					targetSelector: "#forecast_widget",
					name: "most_read",
					template: "recommendations",
					options: {
						type: "weighted-top-articles",
						itemNumber: "3",
						excludedSections: "Le Monde in English",
						excludedSubsections: "The French Test",
						...e ? .dataset.title && {
							section: e.dataset.title
						}
					}
				})
			}
			if(window.lmd.user) {
				const {
					user: e
				} = window.lmd;
				window.__forecast.config.user = {
					beneficiary: e.beneficiary ? .join(","),
					countryCode: e.countryCode,
					formulaCode: e.code_selection,
					formulaIsForStudent: e.isStudent,
					formulaIsPromoOffer: e.promoOffer,
					id: e.id,
					isSubscriber: e.abo,
					payer: e.payer,
					referenceBasketId: e.referenceBasketId,
					subscriptionApp: e.subscriptionApp,
					subscriptionCardExpirationDate: e.expiryDate,
					subscriptionDevice: e.subscriptionDevice,
					subscriptionEndDate: e.endDate,
					subscriptionOrderDate: e.orderDate,
					subscriptionSource: e.subscriptionSource,
					subscriptionStartDate: e.beginDate,
					zipCode: e.postalCode
				}
			}
		}
		document.cookie.match(/(^|;)\s*lmd_consent=([^;]+)/) ? b() : document.addEventListener("gdprConsentGiven", (() => {
			b()
		}))
	})(),
	(() => {
		"use strict";

		function e(e) {
			const {
				version: t,
				feedback: r
			} = e.detail;
			!1 !== r || 1 !== t && 2 !== t || window.__forecast.launchComment()
		}
		let t = !1,
			r = !1;

		function n() {
			t = !0, window.__forecast.collectAdHover(), !0 === r && (window.focus(), r = !1)
		}

		function o() {
			t = !1
		}

		function i() {
			!0 === t && !1 === r && (window.__forecast.collectAdClick(), r = !0)
		}
		var c;document.getElementsByClassName("meta__social").length > 0 && window.addEventListener("lmdSocialShare", (e => {
			window.__forecast && function(e, t) {
				switch(t) {
					case "fb":
						e.launchShareFacebook();
						break;
					case "tw":
						e.launchShareTwitter();
						break;
					case "mail":
						e.launchShareMail();
						break;
					default:
						e.launchShare()
				}
			}(window.__forecast, e.detail.socialType)
		})),
		function() {
			if(window.__forecast && "home" !== window.lmd.typePage && !1 === (window.lmd.user && window.lmd.user.abo)) {
				const e = ["js-pave-haut", "js-pave-milieu", "js-pave-bas"];
				for(let t = 0; t < e.length; t += 1) {
					const r = document.getElementsByClassName(e[t])[0];
					r && (r.addEventListener("mouseenter", n), r.addEventListener("mouseleave", o))
				}
				window.addEventListener("blur", i)
			}
		}(),
		function(e) {
			let t = !0;
			for(var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
			return n.reduce(((e, r) => e && void 0 !== e[r] ? e[r] : (t = !1, null)), e), t
		}(window.lmd, "analytics", "amplitude", "pageType") && "commentaires" === window.lmd.analytics.amplitude.pageType && (c = document.getElementById("comment-form")) && c.addEventListener("commentPost", e.bind(void 0))
	})()
})();