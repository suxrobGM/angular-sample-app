(function (t) {
	function e(e) {
		for (var n, a, r = e[0], c = e[1], l = e[2], u = 0, m = []; u < r.length; u++) a = r[u], Object.prototype.hasOwnProperty.call(i, a) && i[a] && m.push(i[a][0]), i[a] = 0;
		for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
		d && d(e);
		while (m.length) m.shift()();
		return o.push.apply(o, l || []), s()
	}

	function s() {
		for (var t, e = 0; e < o.length; e++) {
			for (var s = o[e], n = !0, a = 1; a < s.length; a++) {
				var r = s[a];
				0 !== i[r] && (n = !1)
			}
			n && (o.splice(e--, 1), t = c(c.s = s[0]))
		}
		return t
	}
	var n = {},
		a = {
			app: 0
		},
		i = {
			app: 0
		},
		o = [];

	function r(t) {
		return c.p + "js/" + ({
			about: "about",
			admin: "admin",
			"beta-test": "beta-test",
			tracker: "tracker",
			dialogs: "dialogs",
			docs: "docs",
			"feed-setting": "feed-setting",
			feedback: "feedback",
			"fetch-readablestream": "fetch-readablestream",
			gallery: "gallery",
			hljs: "hljs",
			info: "info",
			lang: "lang",
			"megaposts-admin": "megaposts-admin",
			megaprojects: "megaprojects",
			"page-article-comments": "page-article-comments",
			"page-article~sandbox~user-articles-subpages": "page-article~sandbox~user-articles-subpages",
			"page-article": "page-article",
			sandbox: "sandbox",
			"user-articles-subpages": "user-articles-subpages",
			"page-company-admin~user-statistics": "page-company-admin~user-statistics",
			"page-company-admin": "page-company-admin",
			"user-statistics": "user-statistics",
			"page-company~page-flow~page-hub~page-user": "page-company~page-flow~page-hub~page-user",
			"page-company": "page-company",
			"page-flow~page-flows": "page-flow~page-flows",
			"page-flow": "page-flow",
			"page-hub": "page-hub",
			"page-user": "page-user",
			"page-error": "page-error",
			"page-feed-preview": "page-feed-preview",
			"page-flows": "page-flows",
			"page-my-feed": "page-my-feed",
			"page-ppa": "page-ppa",
			"page-technotext": "page-technotext",
			"page-user-comments": "page-user-comments",
			ppg: "ppg",
			publication: "publication",
			search: "search",
			"user-app": "user-app",
			"user-apps": "user-apps",
			"user-invites": "user-invites",
			"user-settings": "user-settings",
			"user-upgrade": "user-upgrade",
			voice: "voice",
			"web-streams-polyfill": "web-streams-polyfill",
			photoswipe: "photoswipe",
			"analytics-manual-en": "analytics-manual-en",
			"analytics-manual-ru": "analytics-manual-ru",
			apexCharts: "apexCharts",
			"company-localization-en": "company-localization-en",
			"company-localization-ru": "company-localization-ru",
			"requisites-terms-text-en": "requisites-terms-text-en",
			"requisites-terms-text-ru": "requisites-terms-text-ru",
			"wysiwig-icons": "wysiwig-icons",
			"fail-placeholder": "fail-placeholder"
		}[t] || t) + "." + {
			about: "b731f86e",
			admin: "cb8efb2e",
			"beta-test": "5453c175",
			"chunk-223b1983": "59882ec7",
			"chunk-2d0af40b": "5907e060",
			"chunk-2d0c0c0a": "6d5730f8",
			"chunk-2d0e5f94": "940ec896",
			"chunk-2d0e907e": "fc644050",
			"chunk-2d21042a": "ad341f9d",
			"chunk-2d2138c7": "c61c20c2",
			"chunk-2d21ab85": "4d06bd97",
			"chunk-2d222042": "bdf40a76",
			"chunk-2d228e2b": "26dea006",
			"chunk-4a00ea15": "4b61a814",
			"chunk-4b965a03": "1df512d5",
			"chunk-7cd89490": "ce0e5fb8",
			tracker: "22064503",
			"chunk-4f0b0fdc": "9e732553",
			"chunk-5cc902a5": "a522fe7c",
			"chunk-7b17c241": "e9add254",
			dialogs: "ab8d983e",
			docs: "5bf0d861",
			"feed-setting": "b9d120be",
			feedback: "31793668",
			"fetch-readablestream": "447ced77",
			gallery: "1c20c9dc",
			hljs: "e777f0cf",
			info: "94260cf6",
			lang: "f4320d1c",
			"megaposts-admin": "7fdf28a2",
			megaprojects: "a36d6f38",
			"page-article-comments": "c4d4bd86",
			"page-article~sandbox~user-articles-subpages": "6c20ebc4",
			"page-article": "5407d66e",
			sandbox: "8d667cb4",
			"user-articles-subpages": "88e8fed1",
			"page-company-admin~user-statistics": "1e46cc52",
			"page-company-admin": "3c60a9a2",
			"user-statistics": "fe11215e",
			"page-company~page-flow~page-hub~page-user": "ddb37200",
			"page-company": "fc99b081",
			"page-flow~page-flows": "4043508f",
			"page-flow": "19d9e230",
			"page-hub": "dcc22b26",
			"page-user": "6a3628c6",
			"page-error": "e0ed38ef",
			"page-feed-preview": "b6e17259",
			"page-flows": "794aaf1b",
			"page-my-feed": "e13435c0",
			"page-ppa": "9c876c64",
			"page-technotext": "67feb82a",
			"page-user-comments": "9fb4de73",
			ppg: "cd149609",
			publication: "8aa7ce11",
			search: "dc0a8974",
			"user-app": "6c45a988",
			"user-apps": "05e41bb8",
			"user-invites": "a55d4e6c",
			"user-settings": "cdfc5a27",
			"user-upgrade": "5627a968",
			voice: "28970dc3",
			"web-streams-polyfill": "ffcd5fe7",
			"chunk-2d0c84cf": "5ae55546",
			"chunk-2d2253a9": "05cc625f",
			"chunk-2d2300b8": "0afd6253",
			photoswipe: "2b48f110",
			"chunk-2ec2ea36": "9caf80a5",
			"chunk-6cbefb14": "ec2227a6",
			"analytics-manual-en": "39b634ce",
			"analytics-manual-ru": "7e041fc8",
			apexCharts: "e93d5aed",
			"chunk-2d0d607b": "b086cf9f",
			"company-localization-en": "387a26bb",
			"company-localization-ru": "d54e0421",
			"requisites-terms-text-en": "48367d0f",
			"requisites-terms-text-ru": "c6c2124a",
			"chunk-2d20f575": "00702849",
			"chunk-2d0b5996": "6213e76c",
			"wysiwig-icons": "26172690",
			"fail-placeholder": "a53590ad"
		}[t] + ".js"
	}

	function c(e) {
		if (n[e]) return n[e].exports;
		var s = n[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(s.exports, s, s.exports, c), s.l = !0, s.exports
	}
	c.e = function (t) {
		var e = [],
			s = {
				about: 1,
				admin: 1,
				"beta-test": 1,
				"chunk-223b1983": 1,
				"chunk-4a00ea15": 1,
				"chunk-4b965a03": 1,
				"chunk-7cd89490": 1,
				tracker: 1,
				"chunk-4f0b0fdc": 1,
				"chunk-5cc902a5": 1,
				"chunk-7b17c241": 1,
				dialogs: 1,
				docs: 1,
				"feed-setting": 1,
				feedback: 1,
				gallery: 1,
				info: 1,
				"megaposts-admin": 1,
				megaprojects: 1,
				"page-article-comments": 1,
				"page-article~sandbox~user-articles-subpages": 1,
				"page-article": 1,
				sandbox: 1,
				"user-articles-subpages": 1,
				"page-company-admin~user-statistics": 1,
				"page-company-admin": 1,
				"user-statistics": 1,
				"page-company~page-flow~page-hub~page-user": 1,
				"page-company": 1,
				"page-flow~page-flows": 1,
				"page-flow": 1,
				"page-hub": 1,
				"page-user": 1,
				"page-feed-preview": 1,
				"page-flows": 1,
				"page-my-feed": 1,
				"page-ppa": 1,
				"page-technotext": 1,
				"page-user-comments": 1,
				ppg: 1,
				publication: 1,
				search: 1,
				"user-app": 1,
				"user-apps": 1,
				"user-invites": 1,
				"user-settings": 1,
				"user-upgrade": 1,
				voice: 1,
				"chunk-2ec2ea36": 1,
				"chunk-6cbefb14": 1
			};
		a[t] ? e.push(a[t]) : 0 !== a[t] && s[t] && e.push(a[t] = new Promise((function (e, s) {
			for (var n = "css/" + ({
				about: "about",
				admin: "admin",
				"beta-test": "beta-test",
				tracker: "tracker",
				dialogs: "dialogs",
				docs: "docs",
				"feed-setting": "feed-setting",
				feedback: "feedback",
				"fetch-readablestream": "fetch-readablestream",
				gallery: "gallery",
				hljs: "hljs",
				info: "info",
				lang: "lang",
				"megaposts-admin": "megaposts-admin",
				megaprojects: "megaprojects",
				"page-article-comments": "page-article-comments",
				"page-article~sandbox~user-articles-subpages": "page-article~sandbox~user-articles-subpages",
				"page-article": "page-article",
				sandbox: "sandbox",
				"user-articles-subpages": "user-articles-subpages",
				"page-company-admin~user-statistics": "page-company-admin~user-statistics",
				"page-company-admin": "page-company-admin",
				"user-statistics": "user-statistics",
				"page-company~page-flow~page-hub~page-user": "page-company~page-flow~page-hub~page-user",
				"page-company": "page-company",
				"page-flow~page-flows": "page-flow~page-flows",
				"page-flow": "page-flow",
				"page-hub": "page-hub",
				"page-user": "page-user",
				"page-error": "page-error",
				"page-feed-preview": "page-feed-preview",
				"page-flows": "page-flows",
				"page-my-feed": "page-my-feed",
				"page-ppa": "page-ppa",
				"page-technotext": "page-technotext",
				"page-user-comments": "page-user-comments",
				ppg: "ppg",
				publication: "publication",
				search: "search",
				"user-app": "user-app",
				"user-apps": "user-apps",
				"user-invites": "user-invites",
				"user-settings": "user-settings",
				"user-upgrade": "user-upgrade",
				voice: "voice",
				"web-streams-polyfill": "web-streams-polyfill",
				photoswipe: "photoswipe",
				"analytics-manual-en": "analytics-manual-en",
				"analytics-manual-ru": "analytics-manual-ru",
				apexCharts: "apexCharts",
				"company-localization-en": "company-localization-en",
				"company-localization-ru": "company-localization-ru",
				"requisites-terms-text-en": "requisites-terms-text-en",
				"requisites-terms-text-ru": "requisites-terms-text-ru",
				"wysiwig-icons": "wysiwig-icons",
				"fail-placeholder": "fail-placeholder"
			}[t] || t) + "." + {
				about: "c5a1ada7",
				admin: "b7a20290",
				"beta-test": "dd088213",
				"chunk-223b1983": "7cd0e795",
				"chunk-2d0af40b": "31d6cfe0",
				"chunk-2d0c0c0a": "31d6cfe0",
				"chunk-2d0e5f94": "31d6cfe0",
				"chunk-2d0e907e": "31d6cfe0",
				"chunk-2d21042a": "31d6cfe0",
				"chunk-2d2138c7": "31d6cfe0",
				"chunk-2d21ab85": "31d6cfe0",
				"chunk-2d222042": "31d6cfe0",
				"chunk-2d228e2b": "31d6cfe0",
				"chunk-4a00ea15": "3761487b",
				"chunk-4b965a03": "a25c6187",
				"chunk-7cd89490": "9450cba6",
				tracker: "43e80d1c",
				"chunk-4f0b0fdc": "eea68b2f",
				"chunk-5cc902a5": "ca9b24a0",
				"chunk-7b17c241": "141c2bb5",
				dialogs: "a60ea021",
				docs: "afe22253",
				"feed-setting": "819b7856",
				feedback: "2a909ef6",
				"fetch-readablestream": "31d6cfe0",
				gallery: "6ace077c",
				hljs: "31d6cfe0",
				info: "315c6657",
				lang: "31d6cfe0",
				"megaposts-admin": "4d9f06c3",
				megaprojects: "4943704b",
				"page-article-comments": "598da169",
				"page-article~sandbox~user-articles-subpages": "f2f4a4e2",
				"page-article": "da00b463",
				sandbox: "62676185",
				"user-articles-subpages": "8cdc75b5",
				"page-company-admin~user-statistics": "c56b3a28",
				"page-company-admin": "a54c877b",
				"user-statistics": "22f392bd",
				"page-company~page-flow~page-hub~page-user": "660d9032",
				"page-company": "0e609162",
				"page-flow~page-flows": "1c84c2cf",
				"page-flow": "1b7ec600",
				"page-hub": "83dbcc8d",
				"page-user": "f826ab8f",
				"page-error": "31d6cfe0",
				"page-feed-preview": "9ea60ef3",
				"page-flows": "79587a62",
				"page-my-feed": "e0814d41",
				"page-ppa": "23188913",
				"page-technotext": "15b4fd2e",
				"page-user-comments": "987f63df",
				ppg: "436146b7",
				publication: "240435d6",
				search: "7a52c26b",
				"user-app": "fea5c8b7",
				"user-apps": "db904e43",
				"user-invites": "4a180ee7",
				"user-settings": "6b335e81",
				"user-upgrade": "0124e153",
				voice: "bcb0e804",
				"web-streams-polyfill": "31d6cfe0",
				"chunk-2d0c84cf": "31d6cfe0",
				"chunk-2d2253a9": "31d6cfe0",
				"chunk-2d2300b8": "31d6cfe0",
				photoswipe: "31d6cfe0",
				"chunk-2ec2ea36": "8bdb77d9",
				"chunk-6cbefb14": "3bc55046",
				"analytics-manual-en": "31d6cfe0",
				"analytics-manual-ru": "31d6cfe0",
				apexCharts: "31d6cfe0",
				"chunk-2d0d607b": "31d6cfe0",
				"company-localization-en": "31d6cfe0",
				"company-localization-ru": "31d6cfe0",
				"requisites-terms-text-en": "31d6cfe0",
				"requisites-terms-text-ru": "31d6cfe0",
				"chunk-2d20f575": "31d6cfe0",
				"chunk-2d0b5996": "31d6cfe0",
				"wysiwig-icons": "31d6cfe0",
				"fail-placeholder": "31d6cfe0"
			}[t] + ".css", i = c.p + n, o = document.getElementsByTagName("link"), r = 0; r < o.length; r++) {
				var l = o[r],
					u = l.getAttribute("data-href") || l.getAttribute("href");
				if ("stylesheet" === l.rel && (u === n || u === i)) return e()
			}
			var m = document.getElementsByTagName("style");
			for (r = 0; r < m.length; r++) {
				l = m[r], u = l.getAttribute("data-href");
				if (u === n || u === i) return e()
			}
			var d = document.createElement("link");
			d.rel = "stylesheet", d.type = "text/css", d.onload = e, d.onerror = function (e) {
				var n = e && e.target && e.target.src || i,
					o = new Error("Loading CSS chunk " + t + " failed.\n(" + n + ")");
				o.code = "CSS_CHUNK_LOAD_FAILED", o.request = n, delete a[t], d.parentNode.removeChild(d), s(o)
			}, d.href = i;
			var p = document.getElementsByTagName("head")[0];
			p.appendChild(d)
		})).then((function () {
			a[t] = 0
		})));
		var n = i[t];
		if (0 !== n)
			if (n) e.push(n[2]);
			else {
				var o = new Promise((function (e, s) {
					n = i[t] = [e, s]
				}));
				e.push(n[2] = o);
				var l, u = document.createElement("script");
				u.charset = "utf-8", u.timeout = 120, c.nc && u.setAttribute("nonce", c.nc), u.src = r(t);
				var m = new Error;
				l = function (e) {
					u.onerror = u.onload = null, clearTimeout(d);
					var s = i[t];
					if (0 !== s) {
						if (s) {
							var n = e && ("load" === e.type ? "missing" : e.type),
								a = e && e.target && e.target.src;
							m.message = "Loading chunk " + t + " failed.\n(" + n + ": " + a + ")", m.name = "ChunkLoadError", m.type = n, m.request = a, s[1](m)
						}
						i[t] = void 0
					}
				};
				var d = setTimeout((function () {
					l({
						type: "timeout",
						target: u
					})
				}), 12e4);
				u.onerror = u.onload = l, document.head.appendChild(u)
			} return Promise.all(e)
	}, c.m = t, c.c = n, c.d = function (t, e, s) {
		c.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: s
		})
	}, c.r = function (t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, c.t = function (t, e) {
		if (1 & e && (t = c(t)), 8 & e) return t;
		if (4 & e && "object" === typeof t && t && t.__esModule) return t;
		var s = Object.create(null);
		if (c.r(s), Object.defineProperty(s, "default", {
			enumerable: !0,
			value: t
		}), 2 & e && "string" != typeof t)
			for (var n in t) c.d(s, n, function (e) {
				return t[e]
			}.bind(null, n));
		return s
	}, c.n = function (t) {
		var e = t && t.__esModule ? function () {
			return t["default"]
		} : function () {
			return t
		};
		return c.d(e, "a", e), e
	}, c.o = function (t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, c.p = "https://localhost:7103/assets-habr/habr-web/", c.oe = function (t) {
		throw console.error(t), t
	};
	var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
		u = l.push.bind(l);
	l.push = e, l = l.slice();
	for (var m = 0; m < l.length; m++) e(l[m]);
	var d = u;
	o.push([0, "chunk-vendors"]), s()
})({
	0: function (t, e, s) {
		s("8f7e"), t.exports = s("a949")
	},
	"0140": function (t, e, s) { },
	"023f": function (t, e, s) { },
	"0272": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				ref: "sidebarWrapper",
				staticClass: "tm-layout-sidebar"
			}, [t.showAdv ? s("div", {
				ref: "adBlock",
				staticClass: "tm-layout-sidebar__ads",
				class: "tm-layout-sidebar__ads_" + t.scrollMode
			}, [t.userShowAdv && t.showAdv ? s("TMAdfoxBanner", {
				staticClass: "tm-layout-sidebar__banner tm-layout-sidebar__banner_top",
				attrs: {
					"adfox-id": "164725680533065327",
					"div-id": "sidebarBanner",
					params: {
						pp: "g",
						ps: "fnps",
						p2: "hnxd"
					},
					variant: "half-page"
				}
			}) : t._e()], 1) : s("div", {
				class: "tm-layout-sidebar__placeholder_" + t.scrollMode
			}), t._v(" "), s("div", {
				ref: "sidebar",
				staticClass: "tm-sexy-sidebar",
				class: "tm-sexy-sidebar_" + t.scrollMode,
				style: {
					"margin-top": t.sidebarMargin + "px"
				}
			}, [t._t("default"), t._v(" "), t.userShowAdv && t.showAdv ? s("TMAdfoxBanner", {
				staticClass: "tm-layout-sidebar__banner tm-layout-sidebar__banner_bottom",
				attrs: {
					"adfox-id": "164725691003361602",
					"div-id": "sidebarBannerBottom",
					params: {
						pp: "i",
						ps: "fnps",
						p2: "hnxg"
					},
					variant: "medium-rectangle"
				}
			}) : t._e()], 2)])
		},
			a = [],
			i = s("2f62"),
			o = s("882a");
		const r = "stick-top",
			c = "stick-bottom",
			l = "margin",
			u = "initial",
			m = 56;
		var d = {
			name: "TMLayoutSidebar",
			components: {
				TMAdfoxBanner: o["a"]
			},
			props: {
				showAdv: {
					type: Boolean,
					default: !1
				}
			},
			data() {
				return {
					prevScroll: 0,
					sidebarMargin: 0,
					scrollMode: u
				}
			},
			computed: {
				...Object(i["e"])("me", ["user"]),
				...Object(i["c"])("me", ["userShowAdv"]),
				scrollModeMarginOrInitial() {
					return -1 !== [l, u].indexOf(this.scrollMode)
				}
			},
			mounted() {
				requestAnimationFrame(() => {
					this.prevScroll = window.scrollY, this.handleScroll(), window.addEventListener("scroll", this.handleScroll, {
						passive: !0
					})
				})
			},
			beforeDestroy() {
				window.removeEventListener("scroll", this.handleScroll)
			},
			methods: {
				handleScroll() {
					const t = this.$refs.sidebar,
						e = document.querySelector(".tm-page__main > *");
					if (t && e) {
						const s = t.scrollHeight,
							n = window.innerHeight,
							a = e.scrollHeight;
						if (s <= n || s > a) return this.sidebarMargin = 0, void (this.scrollMode = r);
						const {
							prevScroll: i
						} = this, {
							scrollY: o
						} = window, u = i > o, d = i < o, p = t.getBoundingClientRect(), _ = p.y, h = s + _;
						d && (this.scrollModeMarginOrInitial && h < n && (this.sidebarMargin = 0, this.scrollMode = c), this.scrollMode === r && (this.sidebarMargin = t.offsetTop, this.scrollMode = l)), u && (this.scrollMode === c && (this.sidebarMargin = t.offsetTop, this.scrollMode = l), this.scrollModeMarginOrInitial && _ - m >= 0 && (this.sidebarMargin = 0, this.scrollMode = r)), this.prevScroll = o
					}
				}
			}
		},
			p = d,
			_ = (s("207f"), s("2877")),
			h = Object(_["a"])(p, n, a, !1, null, null, null);
		e["a"] = h.exports
	},
	"02c5": function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return a
		}));
		const n = "https://localhost:7103",
			a = (t, e = n) => {
				const s = new URL(t, e);
				return `${s.origin}${s.pathname}`
			}
	},
	"034b": function (t, e, s) {
		"use strict";
		s("3658")
	},
	"0414": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return t.useRegularLink ? s("a", {
				ref: "link",
				attrs: {
					href: t.$router.resolve(t.route).href
				}
			}, [t._t("default")], 2) : s("router-link", {
				ref: "link",
				attrs: {
					"active-class": "",
					"exact-active-class": "",
					to: t.route
				}
			}, [t._t("default")], 2)
		},
			a = [],
			i = s("9f2e"),
			o = {
				name: "TMArticleCommentsLink",
				props: {
					article: {
						type: Object,
						required: !0,
						validator(t) {
							return "id" in t && (!!["article", "news", "megaproject", "sandbox", "unknown"].includes(t.postType) && (!t.isCorporative || !!t.hubs && t.hubs.some(t => "corporative" === t.type)))
						}
					},
					commentId: {
						type: [String, Number],
						default: null
					},
					firstUnread: Boolean
				},
				computed: {
					useRegularLink() {
						return !!this.commentId
					},
					route() {
						const t = Object(i["b"])(this.article, this.langOptions.hl);
						return this.commentId && (t.hash = "#comment_" + this.commentId), this.firstUnread && (t.hash = "#first_unread"), t
					}
				},
				methods: {
					click() {
						this.useRegularLink ? this.$el.click() : this.$refs.link.$el.click()
					}
				}
			},
			r = o,
			c = s("2877"),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"0578": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return t.isMounted ? s("FormBuilder", t._g(t._b({
				attrs: {
					"initial-data": t.value || t.initialData
				},
				on: {
					"update:data": function (e) {
						return t.$emit("input", e)
					}
				},
				scopedSlots: t._u([t._l(t.$scopedSlots, (function (e, s) {
					return {
						key: s,
						fn: function (e) {
							return [t._t(s, null, null, e)]
						}
					}
				}))], null, !0)
			}, "FormBuilder", t.$attrs, !1), t.$listeners)) : s("TMPlaceholder", {
				attrs: {
					times: 2,
					type: "form"
				}
			})
		},
			a = [],
			i = s("5188"),
			o = {
				name: "TMFormBuilder",
				components: {
					TMPlaceholder: i["a"],
					FormBuilder: () => s.e("chunk-2d0c0c0a").then(s.t.bind(null, "42b8", 7))
				},
				props: {
					value: {
						type: Object,
						default: null
					},
					initialData: {
						type: Object,
						default: null
					}
				},
				data() {
					return {
						isMounted: !1
					}
				},
				mounted() {
					this.isMounted = !0
				}
			},
			r = o,
			c = s("2877"),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"05be": function (t, e, s) {
		"use strict";
		s("a5cd")
	},
	"06ce": function (t, e, s) { },
	"0702": function (t, e, s) {
		"use strict";
		s("0b6c")
	},
	"071c": function (t, e, s) { },
	"073b": function (t, e, s) { },
	"0810": function (t, e, s) { },
	"084a": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMCommentsWrapper", {
				attrs: {
					"comments-count": t.commentsCount
				},
				scopedSlots: t._u([{
					key: "headerAside",
					fn: function () {
						return [t._t("headerAside")]
					},
					proxy: !0
				}, {
					key: "default",
					fn: function () {
						return [t.isLoading ? s("TMPlaceholder", {
							attrs: {
								times: 3,
								type: "comment"
							}
						}) : [t._t("body"), t._v(" "), t.pinnedComments && t.pinnedComments.length ? s("TMPinnedComments", {
							attrs: {
								"can-pin-unpin-comment": t.canPinUnpinComment,
								"complaint-action": t.complaintAction,
								"favorite-action": t.favoriteAction,
								"get-comment-link": t.getCommentLink,
								"pinned-comments": t.pinnedComments,
								"show-moderation-controls": t.showModerationControls,
								"vote-action": t.voteAction
							},
							on: {
								commentDelete: function (e) {
									return t.$emit("commentDelete", e)
								},
								expandLimiter: function (e) {
									return t.$emit("expandLimiter", e)
								},
								moderate: t.moderateReadAndComment,
								pinUnpinComment: function (e) {
									return t.$emit("pinUnpinComment", e)
								},
								showComplaintForm: t.showComplaintForm,
								showEditForm: t.showEditForm
							},
							scopedSlots: t._u([t.formTarget && t.formTarget.isPinnedSection ? {
								key: "footer",
								fn: function (e) {
									var n = e.comment;
									return [t.formTarget.commentId === n.id && "edit" === t.formTarget.type ? s("div", {
										staticClass: "tm-comments__reply-form"
									}, [s("div", {
										staticClass: "tm-comments__reply-form-wrapper"
									}, [s("button", {
										staticClass: "tm-comments__close-button",
										attrs: {
											title: t.msg("CLOSE")
										},
										on: {
											click: function (e) {
												return t.closeForm()
											}
										}
									}, [s("TMSvgImg", {
										attrs: {
											id: "close",
											size: 12
										}
									})], 1), t._v(" "), s("TMCommentEditForm", {
										attrs: {
											comment: n,
											"edit-action": t.editAction,
											"post-id": t.postId
										},
										on: {
											close: t.closeForm,
											delete: function (e) {
												return t.onDeleteComment(n.id)
											}
										}
									})], 1)]) : t._e()]
								}
							} : null], null, !0)
						}) : t._e(), t._v(" "), t.comments.length ? [s("div", {
							ref: "commentsList",
							staticClass: "tm-comments__tree",
							attrs: {
								"data-comments-list": ""
							}
						}, t._l(t.comments, (function (e) {
							return s("TMCommentThread", {
								key: e.id,
								attrs: {
									"can-pin-unpin-comment": t.canPinUnpinComment,
									comment: e,
									"comment-component": t.commentComponent,
									"complaint-action": t.complaintAction,
									"favorite-action": t.favoriteAction,
									"get-comment-link": t.getCommentLink,
									"show-moderation-controls": t.showModerationControls,
									"vote-action": t.voteAction
								},
								on: {
									commentDelete: function (e) {
										return t.$emit("commentDelete", e)
									},
									moderate: t.moderateReadAndComment,
									pinUnpinComment: function (e) {
										return t.$emit("pinUnpinComment", e)
									},
									showComplaintForm: t.showComplaintForm,
									showEditForm: t.showEditForm,
									showReplyForm: t.showReplyForm
								},
								scopedSlots: t._u([t.formTarget && !t.formTarget.isPinnedSection ? {
									key: "footer",
									fn: function (e) {
										var n = e.comment;
										return [t.formTarget.commentId === n.id ? ["reply" === t.formTarget.type ? s("div", {
											staticClass: "tm-comments__reply-form"
										}, [s("div", {
											staticClass: "tm-comments__reply-form-wrapper"
										}, [s("button", {
											staticClass: "tm-comments__close-button",
											attrs: {
												title: t.msg("CLOSE")
											},
											on: {
												click: function (e) {
													return t.closeForm()
												}
											}
										}, [s("TMSvgImg", {
											attrs: {
												id: "close",
												size: 12
											}
										})], 1), t._v(" "), t.isLoggedIn && t.unableToComment ? s("TMNotice", {
											attrs: {
												type: "negative"
											}
										}, [t._v("\n                      " + t._s(t.getCommentAccess.cantCommentReason) + "\n                    ")]) : s("TMCommentReplyForm", {
											attrs: {
												autofocus: "",
												"submit-action": t.commentSubmitAction,
												"target-comment": n
											},
											on: {
												close: t.closeForm
											}
										})], 1)]) : "edit" === t.formTarget.type ? s("div", {
											staticClass: "tm-comments__reply-form"
										}, [s("div", {
											staticClass: "tm-comments__reply-form-wrapper"
										}, [s("button", {
											staticClass: "tm-comments__close-button",
											attrs: {
												title: t.msg("CLOSE")
											},
											on: {
												click: function (e) {
													return t.closeForm()
												}
											}
										}, [s("TMSvgImg", {
											attrs: {
												id: "close",
												size: 12
											}
										})], 1), t._v(" "), s("TMCommentEditForm", {
											attrs: {
												comment: n,
												"edit-action": t.editAction,
												"post-id": t.postId
											},
											on: {
												close: t.closeForm,
												delete: function (e) {
													return t.onDeleteComment(n.id)
												}
											}
										})], 1)]) : t._e()] : t._e()]
									}
								} : null], null, !0)
							})
						})), 1)] : s("div", {
							staticClass: "tm-comments__empty"
						}, [s("span", {
							domProps: {
								innerHTML: t._s(t.msg("COMMENT_EMPTY"))
							}
						})]), t._v(" "), t._t("afterComments")], t._v(" "), s("Portal", {
							attrs: {
								to: "overlays"
							}
						}, [t.complaintCommentId ? s("TMPopup", {
							attrs: {
								title: t.msg("COMMENT_COMPLAINT_TITLE")
							},
							on: {
								close: function (e) {
									t.complaintCommentId = null
								}
							}
						}, [s("TMComplaintForm", {
							attrs: {
								autofocus: "true",
								"submit-action": function (e) {
									return t.commentComplaintAction(e, t.complaintCommentId)
								}
							}
						})], 1) : t._e()], 1)]
					},
					proxy: !0
				}, !t.isLoading && t.footerVisible ? {
					key: "footer",
					fn: function () {
						return [t.notice ? s("TMNotice", {
							staticClass: "tm-comments__comment-notice",
							attrs: {
								type: t.notice.type
							}
						}, [s("span", {
							domProps: {
								innerHTML: t._s(t.notice.message)
							}
						})]) : t.formTarget ? t._e() : s("TMCommentReplyForm", {
							attrs: {
								"submit-action": t.commentSubmitAction
							}
						})]
					},
					proxy: !0
				} : null], null, !0)
			})
		},
			a = [],
			i = s("2f62"),
			o = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return t.originalMessageLoaded ? s("TMCommentForm", {
					ref: "form",
					attrs: {
						autofocus: !0,
						"countdown-timer": t.timer,
						"initial-data": t.currentValue,
						"is-markdown": t.isMarkdown,
						"is-processing": t.disabled,
						label: t.msg("COMMENT_EDIT_FORM_TITLE"),
						readonly: t.disabled,
						"show-delete": "",
						value: t.currentValue
					},
					on: {
						close: function (e) {
							return t.$emit("close")
						},
						delete: function (e) {
							return t.$emit("delete", e)
						},
						preview: function (e) {
							return t.$emit("preview", e)
						},
						submit: t.onSubmit
					}
				}) : t._e()
			},
			r = [],
			c = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s(t.useMarkdown ? "form" : "div", {
					ref: "form",
					tag: "component",
					staticClass: "tm-comment-form",
					class: {
						"tm-comment-form_processing": t.isProcessing
					},
					on: {
						submit: function (e) {
							return e.preventDefault(), t.submitForm.apply(null, arguments)
						}
					}
				}, [s("div", {
					staticClass: "tm-comment-form__field"
				}, [t.label ? s("label", {
					ref: "label",
					staticClass: "tm-comment-form__label",
					domProps: {
						innerHTML: t._s(t.label)
					}
				}) : t._e(), t._v(" "), t.useMarkdown ? t.commentPreview ? s("TMComment", {
					staticClass: "tm-comment-form__preview",
					attrs: {
						comment: t.commentPreview
					}
				}) : s("textarea", t._g({
					directives: [{
						name: "model",
						rawName: "v-model",
						value: t.markdownSource,
						expression: "markdownSource"
					}, {
						name: "hotkey",
						rawName: "v-hotkey.stop",
						value: {
							c: t.scrollToCommentFormAndFocus
						},
						expression: "{ 'c': scrollToCommentFormAndFocus }",
						modifiers: {
							stop: !0
						}
					}],
					ref: "textarea",
					staticClass: "tm-comment-form__textarea",
					attrs: {
						autofocus: t.autofocus,
						cols: "30",
						rows: "5"
					},
					domProps: {
						value: t.markdownSource
					},
					on: {
						"!keydown": [function (e) {
							return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : e.ctrlKey ? (e.stopPropagation(), t.submit.apply(null, arguments)) : null
						}, function (e) {
							return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : e.metaKey ? (e.stopPropagation(), t.submit.apply(null, arguments)) : null
						}],
						input: function (e) {
							e.target.composing || (t.markdownSource = e.target.value)
						}
					}
				}, t.inputListeners)) : s("div", {
					directives: [{
						name: "hotkey",
						rawName: "v-hotkey.stop",
						value: {
							c: t.scrollToCommentFormAndFocus
						},
						expression: "{ 'c': scrollToCommentFormAndFocus }",
						modifiers: {
							stop: !0
						}
					}],
					staticClass: "tm-comment-form__editor",
					on: {
						"!keydown": [function (e) {
							return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : e.ctrlKey ? (e.stopPropagation(), t.submitForm.apply(null, arguments)) : null
						}, function (e) {
							return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : e.metaKey ? (e.stopPropagation(), t.submitForm.apply(null, arguments)) : null
						}]
					}
				}, [t.renderEditor ? s("WYSIWYG", {
					ref: "textarea",
					attrs: {
						"is-mobile": t.isMobile || t.isTouchDevice,
						lang: t.langOptions.hl,
						"props-config": t.WYSIWYGInitialProps,
						"use-test-ids": t.useTestIds
					},
					on: {
						loading: t.setFormLoading,
						update: t.onWYSIWYGUpdate
					}
				}) : t._e()], 1)], 1), t._v(" "), s("div", {
					staticClass: "tm-comment-form__controls"
				}, [s("div", {
					staticClass: "tm-comment-form__controls-buttons"
				}, [s("button", {
					ref: "submitButton",
					staticClass: "tm-comment-form__button tm-comment-form__button_send",
					attrs: {
						disabled: t.disableFormButtons
					},
					on: {
						click: t.submitForm
					}
				}, [t._v("\n        " + t._s(t.msg("COMMENT_ACTION_SEND")) + "\n      ")]), t._v(" "), t.useMarkdown ? s("button", {
					ref: "previewButton",
					staticClass: "tm-comment-form__button tm-comment-form__button_preview",
					attrs: {
						disabled: t.disableFormButtons,
						type: "button"
					},
					on: {
						click: t.togglePreview
					}
				}, [t._v("\n        " + t._s(t.commentPreview ? t.msg("COMMENT_ACTION_EDIT") : t.msg("COMMENT_ACTION_PREVIEW")) + "\n      ")]) : t._e(), t._v(" "), t.isSuperAdmin && t.showDelete ? s("button", {
					ref: "suspendButton",
					staticClass: "tm-comment-form__button tm-comment-form__button_delete",
					attrs: {
						disabled: t.disableFormButtons,
						type: "button"
					},
					on: {
						click: t.suspendComment
					}
				}, [t._v("\n        " + t._s(t.msg("COMMENT_ACTION_SUSPEND")) + "\n      ")]) : t._e()]), t._v(" "), s("div", {
					staticClass: "tm-comment-form__controls-meta"
				}, [t.countdownTimer ? s("span", {
					ref: "countdownTimer",
					staticClass: "tm-comment-form__countdown-timer"
				}, [t._v("\n        " + t._s(t.formattedCountdownTimer) + "\n      ")]) : t._e(), t._v(" "), s("TMLabeledCheckbox", {
					staticClass: "tm-comment-form__markdown-toggle",
					attrs: {
						disabled: !t.isTextareaEmpty,
						name: "useMarkdown"
					},
					model: {
						value: t.useMarkdown,
						callback: function (e) {
							t.useMarkdown = e
						},
						expression: "useMarkdown"
					}
				}, [t._v("\n        Markdown\n      ")]), t._v(" "), s("router-link", {
					staticClass: "tm-comment-form__markdown-help",
					attrs: {
						to: "/docs/help/wysiwyg/#markdown-comments"
					}
				}, [s("TMHelpIcon", {
					attrs: {
						title: t.msg("COMMENT_MARKDOWN_HELP")
					}
				})], 1)], 1)])])
			},
			l = [],
			u = s("2b0e"),
			m = s("90e1"),
			d = s("79f0"),
			p = s("4f8a"),
			_ = s("09f4");

		function h(t) {
			const e = Math.floor(parseInt(t, 10) / 3600),
				s = Math.floor(parseInt(t, 10) / 60) % 60,
				n = Math.floor(parseInt(t, 10)) % 60,
				a = t => {
					const e = t > 9 ? t : "0" + t;
					return e
				};
			return `${a(e)}:${a(s)}:${a(n)}`
		}
		var g = s("0a5f"),
			f = s("4dcc"),
			b = s("c551");
		u["default"].component("WYSIWYG", () => s.e("chunk-2d0e907e").then(s.t.bind(null, "8c96", 7)));
		const T = () => s.e("chunk-2d2138c7").then(s.t.bind(null, "acc2", 7));
		var v = {
			name: "TMCommentForm",
			components: {
				TMComment: d["a"],
				TMLabeledCheckbox: m["a"],
				TMHelpIcon: T
			},
			inheritAttrs: !1,
			props: {
				isProcessing: Boolean,
				autofocus: Boolean,
				countdownTimer: {
					type: Number,
					default: null
				},
				label: {
					type: String,
					default: null
				},
				showDelete: Boolean,
				initialData: {
					type: String,
					default: null
				},
				isMarkdown: Boolean
			},
			data() {
				return {
					renderEditor: !1,
					WYSIWYGInitialProps: {
						embedHost: "https://localhost:7103/embedd-srv-habr",
						imagesHost: Object(f["a"])("publication/upload", "v2"),
						mentionHost: Object(f["a"])("publication/suggest-mention", "v2"),
						imagesByUrlHost: Object(f["a"])("publication/upload-url", "v2"),
						extensions: [],
						initialJSON: this.initialData,
						autoFocus: this.autofocus
					},
					WYSIWYGData: {},
					WYSIWYGLoading: !1,
					useMarkdown: this.isMarkdown,
					markdownSource: this.initialData,
					commentPreview: null,
					previewLoading: !1
				}
			},
			computed: {
				...Object(i["c"])("me", ["isSuperAdmin"]),
				...Object(i["c"])("i18n", ["langOptions"]),
				...Object(i["c"])("global", ["isMobile"]),
				useTestIds() {
					return !1
				},
				disableFormButtons() {
					return this.isTextareaEmpty || this.WYSIWYGLoading || this.isProcessing || this.previewLoading
				},
				inputListeners() {
					return {
						...this.$listeners,
						input: t => {
							this.$emit("input", t.target.value)
						}
					}
				},
				isTouchDevice() {
					return Object(p["b"])()
				},
				isTextareaEmpty() {
					if (!this.useMarkdown) {
						const t = this.WYSIWYGData.json && this.WYSIWYGData.json.content.filter(t => "paragraph" !== t.type).length,
							e = this.WYSIWYGData.textContent || "";
						return !t && !e.trim().length
					}
					return !this.markdownSource
				},
				formattedCountdownTimer() {
					return h(this.countdownTimer)
				}
			},
			mounted() {
				Object(b["n"])().then(t => {
					const {
						wysiwygRuleRefs: {
							postComment: e
						}
					} = t;
					this.WYSIWYGInitialProps.extensions = e.elements, this.renderEditor = !0
				}), this.useMarkdown && this.autofocus && this.$refs.textarea.focus(), window.addEventListener("beforeunload", this.handlePageLeave)
			},
			beforeDestroy() {
				window.removeEventListener("beforeunload", this.handlePageLeave)
			},
			methods: {
				onWYSIWYGUpdate(t) {
					this.WYSIWYGData = t
				},
				setFormLoading(t) {
					this.WYSIWYGLoading = t
				},
				handlePageLeave(t) {
					if (!this.isTextareaEmpty) return t.preventDefault(), t.returnValue = "", !0
				},
				loadPreview() {
					this.previewLoading = !0;
					const t = {
						articleId: this.$route.params.id,
						parentId: null,
						text: {
							source: this.markdownSource,
							editorVersion: 2,
							isMarkdown: !0
						}
					};
					Object(g["q"])(this.$route.params.id, t).then(({
						data: t
					}) => {
						this.previewLoading = !1, this.commentPreview = t
					}).catch(t => {
						this.previewLoading = !0, this.$toast.error(t.message)
					})
				},
				clearPreview() {
					this.commentPreview = null
				},
				togglePreview() {
					this.commentPreview ? (this.clearPreview(), this.$nextTick(() => {
						this.$refs.textarea.focus()
					})) : this.loadPreview()
				},
				suspendComment() {
					const t = window.confirm(this.msg("COMMENT_ACTION_SUSPEND_CONFIRM"));
					t && this.$emit("delete", this.markdownSource)
				},
				submitForm() {
					this.isTextareaEmpty || (this.commentPreview = null, this.useMarkdown ? this.$emit("submit", {
						source: this.markdownSource,
						editorVersion: 2,
						isMarkdown: !0
					}) : this.$emit("submit", {
						source: JSON.stringify(this.WYSIWYGData.json),
						editorVersion: 2
					}))
				},
				scrollToCommentFormAndFocus(t) {
					this._inactive || (t.preventDefault(), Object(_["a"])(this.$refs.textarea.$el), this.useMarkdown ? this.$refs.textarea.focus() : this.$el.querySelector(".ProseMirror").focus())
				},
				reset() {
					this.renderEditor = !1, this.markdownSource = null, this.$refs.textarea.value = null, this.WYSIWYGData = {}, this.$nextTick(() => {
						this.renderEditor = !0
					})
				}
			}
		},
			E = v,
			S = (s("3fbf"), s("2877")),
			O = Object(S["a"])(E, c, l, !1, null, null, null),
			C = O.exports,
			I = {
				name: "TMCommentEditForm",
				components: {
					TMCommentForm: C
				},
				props: {
					postId: {
						type: String,
						required: !0
					},
					comment: {
						type: Object,
						required: !0
					},
					editAction: {
						type: Function,
						required: !0
					}
				},
				data() {
					return {
						currentValue: null,
						isMarkdown: null,
						originalMessageLoaded: !1,
						disabled: !1,
						timer: null,
						counter: null,
						interval: null
					}
				},
				created() {
					Object(g["i"])(this.postId, this.comment.id).then(t => {
						const {
							sourceMessage: e,
							isMarkdown: s
						} = t;
						this.currentValue = e, this.isMarkdown = s, this.originalMessageLoaded = !0, this.$nextTick(() => {
							Object(_["a"])(this.$refs.form.$el)
						}), this.startTimer(new Date(this.comment.timeEditAllowedTill))
					}).catch(t => {
						this.$toast.error(t.message)
					})
				},
				beforeDestroy() {
					clearInterval(this.interval)
				},
				methods: {
					startTimer(t) {
						this.timer = Math.trunc((t - new Date) / 1e3), this.interval = setInterval(this.countDown, 1e3)
					},
					countDown() {
						this.counter ? this.timer > 0 ? this.timer -= 1 : (clearInterval(this.interval), this.timer = null, this.counter = !1) : this.counter = !0
					},
					onSubmit(t) {
						this.disabled = !0, this.editAction({
							commentId: this.comment.id,
							value: t
						}).then(() => {
							this.disabled = !1
						}).catch(t => {
							throw this.disabled = !1, t
						})
					}
				}
			},
			A = I,
			y = Object(S["a"])(A, o, r, !1, null, null, null),
			L = y.exports,
			P = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMCommentForm", {
					ref: "form",
					attrs: {
						autofocus: t.autofocus,
						"initial-data": null,
						"is-markdown": t.isMarkdown,
						"is-processing": t.disabled,
						label: t.label,
						readonly: t.disabled,
						value: null
					},
					on: {
						close: function (e) {
							return t.$emit("close")
						},
						preview: function (e) {
							return t.$emit("preview", e)
						},
						submit: t.onSubmit
					}
				})
			},
			N = [],
			R = {
				name: "TMCommentReplyForm",
				components: {
					TMCommentForm: C
				},
				props: {
					autofocus: Boolean,
					submitAction: {
						type: Function,
						required: !0
					},
					targetComment: {
						type: Object,
						default: null
					}
				},
				data() {
					return {
						currentValue: null,
						disabled: !1
					}
				},
				computed: {
					...Object(i["e"])("me", ["user"]),
					isMarkdown() {
						return this.user.settings.miscSettings.useMarkdown
					},
					label() {
						if (!this.targetComment) return this.msg("COMMENT_BASE_FORM_TITLE");
						const t = this.targetComment.author.alias || this.targetComment.author.login,
							e = `&nbsp;<span class="tm-username">${t}</span>`;
						return `${this.msg("COMMENT_ACTION_REPLY")}${e}`
					},
					parentId() {
						return this.targetComment ? this.targetComment.id : null
					}
				},
				methods: {
					onSubmit(t) {
						this.disabled = !0, this.submitAction({
							value: t,
							parentId: this.parentId
						}).then(() => {
							this.$refs.form && this.$refs.form.reset(), this.disabled = !1, this.$emit("close")
						}).catch(t => {
							throw this.disabled = !1, t
						})
					}
				}
			},
			M = R,
			w = Object(S["a"])(M, P, N, !1, null, null, null),
			k = w.exports,
			j = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("section", {
					class: t.bem("tm-comment-thread", {
						"is-pinned": t.isPinnedSection
					})
				}, [t.isCollapsed ? [s("div", {
					staticClass: "tm-comment-thread__collapsed-root",
					attrs: {
						"data-comment-collapsed-thread": ""
					}
				}), t._v(" "), s("button", {
					staticClass: "tm-comment-thread__breadcrumbs tm-comment-thread__breadcrumbs_collapsed",
					class: t.indentBreadcrumbsClass,
					on: {
						click: t.toggleCollapse
					}
				}), t._v(" "), s("button", {
					staticClass: "tm-comment-thread__collapsed",
					class: t.indentClass,
					on: {
						click: t.toggleCollapse
					}
				}, [t._m(0), t._v(" "), s("div", {
					staticClass: "tm-comment-thread__collapsed-text",
					domProps: {
						textContent: t._s(t.collapsedText)
					}
				}), t._v(" "), s("div", {
					staticClass: "tm-comment-thread__collapsed-line"
				})])] : t._e(), t._v(" "), s(t.hasMounted && t.comment.isNew ? "div" : "LazyHydrate", {
					tag: "component",
					attrs: {
						"when-visible": ""
					}
				}, [s("article", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: !t.isCollapsed,
						expression: "!isCollapsed"
					}],
					class: t.bem("tm-comment-thread__comment", {
						"is-pinned": t.isPinnedSection
					})
				}, [s("a", {
					staticClass: "tm-comment-thread__target",
					attrs: {
						"data-comment-new": t.comment.isNew,
						name: t.isPinnedSection ? "pinned-comment_" + t.comment.id : "comment_" + t.comment.id
					}
				}), t._v(" "), t.comment.author && !t.isPinnedSection ? s("button", {
					staticClass: "tm-comment-thread__breadcrumbs",
					class: t.indentBreadcrumbsClass,
					on: {
						click: t.toggleCollapse
					}
				}, [s("div", {
					staticClass: "tm-comment-thread__circle"
				})]) : t._e(), t._v(" "), t.comment.author ? t._e() : s("span", {
					staticClass: "tm-comment-thread__ufo",
					class: t.indentClass,
					domProps: {
						textContent: t._s(t.msg("COMMENT_PLACEHOLDER_EMPTY"))
					}
				}), t._v(" "), t.comment.author ? [s("div", {
					class: t.indentClass,
					attrs: {
						"data-comment-body": t.comment.id
					}
				}, [s(t.commentComponent || t.$options.components.TMComment, {
					tag: "component",
					attrs: {
						comment: t.comment,
						"is-pinned-section": t.isPinnedSection,
						"user-popover-enabled": ""
					},
					scopedSlots: t._u([{
						key: "comment-link",
						fn: function (e) {
							var n = e.datetimeStr;
							return [s("a", {
								staticClass: "tm-comment-thread__comment-link",
								attrs: {
									href: "#comment_" + t.comment.id
								},
								on: {
									click: function (e) {
										return e.preventDefault(), t.navigateToComment(t.comment.id)
									}
								}
							}, [t._v("\n                " + t._s(t.msg("DATE_FORMAT", n)) + "\n                "), t.comment.timeChanged ? s("TMSvgImg", {
								staticClass: "tm-comment-thread__icon-pencil",
								attrs: {
									id: "pencil-small",
									title: t.msg("COMMENT_EDITED")
								}
							}) : t._e()], 1)]
						}
					}], null, !1, 395305334)
				}), t._v(" "), t._t("footer", (function () {
					return [t.comment.isSuspended ? t._e() : s("TMCommentFooter", {
						attrs: {
							comment: t.comment,
							"favorite-action": t.favoriteAction,
							"is-pinned-section": t.isPinnedSection,
							"popup-toggle-visible": t.popupEnabled,
							"show-moderation-controls": t.showModerationControls,
							"vote-action": t.voteAction
						},
						on: {
							moderate: function (e) {
								return t.$emit("moderate", {
									comment: t.comment,
									isApprove: e
								})
							},
							openPopup: t.togglePopup
						},
						scopedSlots: t._u([{
							key: "button",
							fn: function () {
								return [t.isPinnedSection ? s("button", {
									staticClass: "tm-comment-thread__button",
									attrs: {
										type: "button"
									},
									on: {
										click: function (e) {
											return e.preventDefault(), t.navigateToComment(t.comment.id, !0)
										}
									}
								}, [t._v("\n                  " + t._s(t.msg("COMMENT_ACTION_LOOK")) + "\n                ")]) : s("button", {
									staticClass: "tm-comment-thread__button",
									attrs: {
										type: "button"
									},
									on: {
										click: function (e) {
											return t.$emit("showReplyForm", t.comment)
										}
									}
								}, [t._v("\n                  " + t._s(t.msg("COMMENT_ACTION_REPLY")) + "\n                ")])]
							},
							proxy: !0
						}], null, !1, 3572725708)
					})]
				}), {
					comment: t.comment
				})], 2)] : t._e()], 2)]), t._v(" "), 0 === t.comment.children.length || t.isPinnedSection ? t._e() : [s("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: !t.isCollapsed,
						expression: "!isCollapsed"
					}],
					staticClass: "tm-comment-thread__children"
				}, t._l(t.comment.children, (function (e) {
					return s("TMCommentThread", t._g(t._b({
						key: e.id,
						attrs: {
							comment: e
						},
						scopedSlots: t._u([{
							key: "footer",
							fn: function (e) {
								var s = e.comment;
								return [t._t("footer", null, {
									comment: s
								})]
							}
						}], null, !0)
					}, "TMCommentThread", t.$props, !1), t.$listeners))
				})), 1)], t._v(" "), t.popupVisible ? s("TMCommentPopup", {
					attrs: {
						"can-pin-unpin-comment": t.canPinUnpinComment,
						"can-send-complaint": Boolean(t.complaintAction),
						comment: t.comment,
						"comment-editable": t.commentEditable,
						"comment-link": t.getCommentLink ? t.getCommentLink(t.comment) : null,
						"is-pinned-comment": t.comment.isPinned,
						target: t.popupTargetElement
					},
					on: {
						close: t.closePopup,
						collapseBranch: function (e) {
							t.toggleCollapse(t.comment), t.closePopup()
						},
						enterEditMode: function (e) {
							t.$emit("showEditForm", {
								comment: t.comment,
								isPinnedSection: t.isPinnedSection
							}), t.closePopup()
						},
						linkCopied: t.closePopup,
						pinUnpinComment: function (e) {
							t.$emit("pinUnpinComment", t.comment), t.closePopup()
						},
						sendComplaint: function (e) {
							t.$emit("showComplaintForm", t.comment), t.closePopup()
						}
					}
				}) : t._e()], 2)
			},
			D = [function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-comment-thread__circle-block"
				}, [s("div", {
					staticClass: "tm-comment-thread__circle tm-comment-thread__circle_active"
				})])
			}],
			x = s("8416"),
			B = s("da18"),
			$ = s("c499"),
			F = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMContextMenu", {
					attrs: {
						target: t.target
					},
					on: {
						close: function (e) {
							return t.$emit("close")
						}
					},
					scopedSlots: t._u([{
						key: "body",
						fn: function () {
							return [s("TMContextMenuList", [t.canPinUnpinComment ? s("TMContextMenuListItem", {
								nativeOn: {
									click: function (e) {
										return t.$emit("pinUnpinComment")
									}
								}
							}, [s("TMAlignCenter", {
								scopedSlots: t._u([{
									key: "start",
									fn: function () {
										return [s("TMSvgImg", {
											attrs: {
												id: "pin-unpin",
												size: "24"
											}
										})]
									},
									proxy: !0
								}, {
									key: "default",
									fn: function () {
										return [t._v("\n            " + t._s(t.isPinnedComment ? t.msg("COMMENT_ACTION_UNPIN_COMMENT") : t.msg("COMMENT_ACTION_PIN_COMMENT")) + "\n          ")]
									},
									proxy: !0
								}], null, !1, 108370405)
							})], 1) : t._e(), t._v(" "), !t.isTablet && t.isMobile && t.comment.level > 0 && t.comment.children.length ? s("TMContextMenuListItem", {
								nativeOn: {
									click: function (e) {
										return t.$emit("collapseBranch")
									}
								}
							}, [s("TMAlignCenter", {
								scopedSlots: t._u([{
									key: "start",
									fn: function () {
										return [s("TMSvgImg", {
											attrs: {
												id: "collapse",
												size: "24"
											}
										})]
									},
									proxy: !0
								}, {
									key: "default",
									fn: function () {
										return [t._v("\n            " + t._s(t.msg("COMMENT_ACTION_COLLAPSE_BRANCH")) + "\n          ")]
									},
									proxy: !0
								}], null, !1, 2982227464)
							})], 1) : t._e(), t._v(" "), t.commentLink ? s("TMContextMenuListItem", {
								nativeOn: {
									click: function (e) {
										return t.copyLink(t.comment)
									}
								}
							}, [s("TMAlignCenter", {
								scopedSlots: t._u([{
									key: "start",
									fn: function () {
										return [s("TMSvgImg", {
											attrs: {
												id: "copy",
												size: "24"
											}
										})]
									},
									proxy: !0
								}, {
									key: "default",
									fn: function () {
										return [t._v("\n            " + t._s(t.msg("COMMENT_ACTION_COPY_LINK")) + "\n          ")]
									},
									proxy: !0
								}], null, !1, 2522470812)
							})], 1) : t._e(), t._v(" "), t.commentEditable ? [t.isSuperAdmin && 1 === t.comment.editorVersion ? s("TMContextMenuListItem", {
								attrs: {
									href: t.getCp2EditFormLink(t.comment.id),
									tag: "a",
									target: "_blank"
								}
							}, [s("TMAlignCenter", {
								scopedSlots: t._u([{
									key: "start",
									fn: function () {
										return [s("TMSvgImg", {
											attrs: {
												id: "pencil",
												size: "24"
											}
										})]
									},
									proxy: !0
								}, {
									key: "default",
									fn: function () {
										return [t._v("\n              " + t._s(t.msg("COMMENT_ACTION_EDIT")) + "\n            ")]
									},
									proxy: !0
								}], null, !1, 2572253346)
							})], 1) : s("TMContextMenuListItem", {
								nativeOn: {
									click: function (e) {
										return t.$emit("enterEditMode")
									}
								}
							}, [s("TMAlignCenter", {
								scopedSlots: t._u([{
									key: "start",
									fn: function () {
										return [s("TMSvgImg", {
											attrs: {
												id: "pencil",
												size: "24"
											}
										})]
									},
									proxy: !0
								}, {
									key: "default",
									fn: function () {
										return [t._v("\n              " + t._s(t.msg("COMMENT_ACTION_EDIT")) + "\n            ")]
									},
									proxy: !0
								}], null, !1, 2572253346)
							})], 1)] : t._e(), t._v(" "), t.canSendComplaint && !t.comment.isSuspended ? s("TMContextMenuListItem", {
								nativeOn: {
									click: function (e) {
										return t.$emit("sendComplaint")
									}
								}
							}, [s("TMAlignCenter", [s("TMAlignCenter", {
								scopedSlots: t._u([{
									key: "start",
									fn: function () {
										return [s("TMSvgImg", {
											attrs: {
												id: "report",
												size: "24",
												title: t.msg("COMMENT_COMPLAINT_TITLE")
											}
										})]
									},
									proxy: !0
								}, {
									key: "default",
									fn: function () {
										return [t._v("\n              " + t._s(t.msg("COMMENT_COMPLAINT_TITLE")) + "\n            ")]
									},
									proxy: !0
								}], null, !1, 3826254862)
							})], 1)], 1) : t._e()], 2)]
						},
						proxy: !0
					}])
				})
			},
			G = [],
			U = s("1848"),
			V = s("84b8"),
			W = s("da31"),
			H = s("4043"),
			Y = s("b7d0"),
			q = s("1fa6"),
			K = {
				name: "TMCommentPopup",
				components: {
					TMAlignCenter: U["a"],
					TMContextMenuList: W["a"],
					TMContextMenuListItem: H["a"],
					TMContextMenu: V["a"],
					TMSvgImg: Y["a"]
				},
				props: {
					comment: {
						type: Object,
						required: !0
					},
					commentLink: {
						type: String,
						default: null
					},
					commentEditable: {
						type: Boolean,
						default: !1
					},
					canSendComplaint: {
						type: Boolean,
						default: !1
					},
					target: {
						type: null,
						required: !0
					},
					canPinUnpinComment: {
						type: Boolean,
						default: !1
					},
					isPinnedComment: {
						type: Boolean,
						required: !0
					}
				},
				computed: {
					...Object(i["c"])("global", ["isMobile", "isTablet"]),
					...Object(i["c"])("me", ["isSuperAdmin"])
				},
				methods: {
					copyLink() {
						try {
							Object(q["a"])(this.commentLink), this.$toast.success(this.msg("COMMENT_NOTICE_COPY_LINK_SUCCESS"))
						} catch (t) {
							this.$toast.error(this.msg("COMMENT_NOTICE_COPY_LINK_ERROR"))
						}
						this.$emit("linkCopied")
					},
					getCp2EditFormLink(t) {
						return "https://localhost:7103/kek/admin/comments_edit/?id=" + t
					}
				}
			},
			z = K,
			X = Object(S["a"])(z, F, G, !1, null, null, null),
			J = X.exports,
			Q = s("cee5"),
			Z = s("5d2c");
		let tt;
		const et = () => {
			if (tt) return tt;
			const t = localStorage.getItem("collapsedCommentIds");
			if (!t) return null;
			const e = JSON.parse(t);
			return tt = e, e
		};
		var st = {
			name: "TMCommentThread",
			components: {
				TMCommentPopup: J,
				TMComment: d["a"],
				TMCommentFooter: $["a"],
				LazyHydrate: x["a"],
				TMSvgImg: Y["a"]
			},
			props: {
				commentComponent: {
					type: Object,
					default: null
				},
				comment: {
					type: Object,
					required: !0
				},
				isAuthorized: {
					type: Boolean,
					default: !1
				},
				voteAction: {
					type: Function,
					default: null
				},
				complaintAction: {
					type: Function,
					default: null
				},
				getCommentLink: {
					type: Function,
					default: null
				},
				favoriteAction: {
					type: Function,
					default: null
				},
				isPinnedSection: {
					type: Boolean,
					default: !1
				},
				canPinUnpinComment: {
					type: Boolean,
					default: !1
				},
				showModerationControls: Boolean
			},
			data() {
				return {
					isCollapsed: !1,
					popupVisible: !1,
					popupTargetElement: null,
					hasMounted: !1
				}
			},
			computed: {
				collapsedText() {
					return this.msg("COMMENT_COLLAPSED", {
						count: this.hiddenCommentsCount
					})
				},
				hiddenCommentsCount() {
					return this.comment.children.reduce((function t(e, {
						children: s
					}) {
						return s.length ? s.reduce(t, e + 1) : e + 1
					}), 1)
				},
				indentClass() {
					if (this.isPinnedSection) return "";
					const t = 10,
						e = Math.min(this.comment.level, t);
					return "tm-comment-thread__indent_l-" + e
				},
				indentBreadcrumbsClass() {
					const t = 10,
						e = Math.min(this.comment.level, t);
					return "tm-comment-thread__indent_b_l-" + e
				},
				popupEnabled() {
					return Boolean(this.complaintAction || this.getCommentLink || this.commentEditable || this.comment.level > 0 && this.comment.children.length)
				},
				commentEditable() {
					return this.comment.isCanEdit && !this.comment.isSuspended
				}
			},
			mounted() {
				this.hasMounted = !0;
				const t = et();
				t && this.comment.id in t && (this.isCollapsed = !0)
			},
			methods: {
				toggleCollapse() {
					this.isCollapsed = !this.isCollapsed;
					const {
						id: t
					} = this.comment;
					if (this.isCollapsed) try {
						const e = JSON.parse(localStorage.getItem("collapsedCommentIds") || "{}");
						localStorage.setItem("collapsedCommentIds", JSON.stringify({
							...e,
							[t]: 1
						}))
					} catch (e) {
						localStorage.setItem("collapsedCommentIds", JSON.stringify({
							[t]: 1
						}))
					} else {
						const e = JSON.parse(localStorage.getItem("collapsedCommentIds") || "{}");
						delete e[t], localStorage.setItem("collapsedCommentIds", JSON.stringify(e))
					}
				},
				navigateToComment(t, e = !1) {
					e && !Object(Z["a"])(t) && this.$emit("expandLimiter");
					const s = "#comment_" + t;
					Object(Z["d"])(s).then(() => Object(B["a"])(s))
				},
				togglePopup() {
					this.popupVisible = !this.popupVisible;
					let t = null;
					t = this.isPinnedSection ? document.querySelector("[data-pinned-comments]") : document.querySelector("[data-comments-list]"), this.popupTargetElement = t.querySelector(`[data-comment-popup="${this.comment.id}"]`)
				},
				closePopup() {
					this.popupVisible = !1
				},
				bem: Q["a"]
			}
		},
			nt = st,
			at = (s("3931"), Object(S["a"])(nt, j, D, !1, null, null, null)),
			it = at.exports,
			ot = s("f15e"),
			rt = s("e314"),
			ct = s("e4d1"),
			lt = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("section", {
					staticClass: "tm-pinned-comments",
					attrs: {
						"data-pinned-comments": ""
					}
				}, [s("div", {
					staticClass: "tm-pinned-comments__header"
				}, [s("TMSvgImg", {
					staticClass: "tm-pinned-comments__icon",
					attrs: {
						id: "pinned",
						size: "24"
					}
				}), t._v(" "), s("span", {
					staticClass: "tm-pinned-comments__header-title"
				}, [t._v(" " + t._s(t.msg("COMMENTS_PINNED")) + " ")])], 1), t._v(" "), s("div", {
					staticClass: "tm-pinned-comments__wrapper"
				}, t._l(t.pinnedComments, (function (e) {
					return s("TMCommentThread", {
						key: e.id,
						attrs: {
							"can-pin-unpin-comment": t.canPinUnpinComment,
							comment: e,
							"complaint-action": t.complaintAction,
							"favorite-action": t.favoriteAction,
							"get-comment-link": t.getCommentLink,
							"is-pinned-section": !0,
							"show-moderation-controls": t.showModerationControls,
							"vote-action": t.voteAction
						},
						on: {
							commentDelete: function (e) {
								return t.$emit("commentDelete", e)
							},
							expandLimiter: function (e) {
								return t.$emit("expandLimiter", e)
							},
							moderate: function (e) {
								return t.$emit("moderate", e)
							},
							pinUnpinComment: function (e) {
								return t.$emit("pinUnpinComment", e)
							},
							showComplaintForm: function (e) {
								return t.$emit("showComplaintForm", e)
							},
							showEditForm: function (e) {
								return t.$emit("showEditForm", e)
							}
						},
						scopedSlots: t._u([{
							key: "footer",
							fn: function (e) {
								var s = e.comment;
								return [t._t("footer", null, {
									comment: s
								})]
							}
						}], null, !0)
					}, [t._v(" "), t._t("footer", null, {
						comment: e
					})], 2)
				})), 1)])
			},
			ut = [],
			mt = {
				name: "TMPinnedComments",
				components: {
					TMCommentThread: it,
					TMSvgImg: Y["a"]
				},
				props: {
					pinnedComments: {
						type: Array,
						required: !0
					},
					voteAction: {
						type: Function,
						default: null
					},
					complaintAction: {
						type: Function,
						default: null
					},
					getCommentLink: {
						type: Function,
						default: null
					},
					favoriteAction: {
						type: Function,
						default: null
					},
					showModerationControls: Boolean,
					canPinUnpinComment: {
						type: Boolean,
						default: !1
					}
				}
			},
			dt = mt,
			pt = (s("8b39"), Object(S["a"])(dt, lt, ut, !1, null, null, null)),
			_t = pt.exports,
			ht = s("5188"),
			gt = s("badd"),
			ft = {
				name: "TMComments",
				components: {
					TMCommentsWrapper: ot["a"],
					TMCommentReplyForm: k,
					TMCommentEditForm: L,
					TMPlaceholder: ht["a"],
					TMSvgImg: Y["a"],
					TMNotice: ct["a"],
					TMComplaintForm: rt["a"],
					TMCommentThread: it,
					TMPopup: gt["a"],
					TMPinnedComments: _t
				},
				props: {
					comments: {
						type: Array,
						default: null
					},
					commentComponent: {
						type: Object,
						default: null
					},
					commentsCount: {
						type: [Number, String],
						default: null
					},
					pinnedComments: {
						type: Array,
						default: null
					},
					isLoading: {
						type: Boolean,
						default: !1
					},
					notice: {
						type: Object,
						default: null
					},
					commentSubmitAction: {
						type: Function,
						required: !0
					},
					voteAction: {
						type: Function,
						default: null
					},
					favoriteAction: {
						type: Function,
						default: null
					},
					complaintAction: {
						type: Function,
						default: null
					},
					getCommentLink: {
						type: Function,
						default: null
					},
					footerVisible: {
						type: Boolean,
						default: !0
					},
					showModerationControls: Boolean,
					canPinUnpinComment: {
						type: Boolean,
						default: !1
					}
				},
				data() {
					return {
						formTarget: null,
						firstUnreadId: null,
						complaintCommentId: null
					}
				},
				computed: {
					...Object(i["c"])("me", ["isLoggedIn", "isSuperAdmin"]),
					...Object(i["c"])("comments", ["getCommentAccess"]),
					postId() {
						return this.$route.params.id
					},
					unableToComment() {
						return !(!this.getCommentAccess || "boolean" !== typeof this.getCommentAccess.isCanComment) && !this.getCommentAccess.isCanComment
					},
					canSendComplaint() {
						return this.user && this.user.settings.permissionSettings.canAddComplaints || this.isSuperAdmin
					}
				},
				methods: {
					...Object(i["b"])("comments", ["updateComment", "moderateComment"]),
					editAction({
						commentId: t,
						value: e
					}) {
						const s = this.$route.params.id,
							n = {
								isMarkdown: !0,
								text: e,
								parentId: t,
								timestamp: (new Date).getTime()
							};
						return Object(g["d"])(s, t, n).then(({
							data: {
								comment: t
							}
						}) => {
							this.updateComment({
								articleId: s,
								comment: t
							}), this.closeForm()
						}).catch(t => {
							throw this.$toast.error(t.message), t
						})
					},
					commentComplaintAction(t, e) {
						return this.complaintAction({
							value: t,
							parentId: e
						}).then(() => {
							this.complaintCommentId = null
						})
					},
					moderateReadAndComment({
						comment: t,
						isApprove: e
					}) {
						return this.moderateComment({
							isApprove: e,
							commentId: t.id,
							postId: this.$route.params.id
						})
					},
					showReplyForm(t) {
						this.isLoggedIn ? this.formTarget = {
							commentId: t.id,
							type: "reply",
							isPinnedSection: !1
						} : this.$toast.error(this.msg("AUTH_REQUIRED"))
					},
					showEditForm({
						comment: t,
						isPinnedSection: e
					}) {
						this.formTarget = {
							commentId: t.id,
							type: "edit",
							isPinnedSection: e
						}
					},
					showComplaintForm(t) {
						this.complaintCommentId = t.id
					},
					closeForm() {
						this.formTarget = null
					},
					onDeleteComment(t) {
						this.$emit("commentDelete", t), this.closeForm()
					}
				}
			},
			bt = ft,
			Tt = (s("be6e"), Object(S["a"])(bt, n, a, !1, null, null, null));
		e["a"] = Tt.exports
	},
	"0954": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMBlock", {
				attrs: {
					title: t.msg("WIDGET_VK")
				}
			}, [s("script", {
				attrs: {
					async: "",
					src: "https://vk.com/js/api/openapi.js?63",
					type: "application/javascript"
				},
				on: {
					load: t.onLoad
				}
			}), t._v(" "), s("div", {
				attrs: {
					id: t.elementId
				}
			})])
		},
			a = [],
			i = s("19d1"),
			o = {
				name: "TMWidgetVK",
				components: {
					TMBlock: i["a"]
				},
				props: {
					widgetData: {
						type: Object,
						required: !0
					},
					type: {
						type: String,
						required: !0
					}
				},
				data() {
					return {
						elementId: "widget-social-" + Math.random()
					}
				},
				methods: {
					onLoad() {
						window.VK && window.VK.Widgets && window.VK.Widgets.Group && window.VK.Widgets.Group(this.elementId, {
							mode: 0,
							width: "260",
							height: "300"
						}, this.widgetData.id)
					}
				}
			},
			r = o,
			c = s("2877"),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"0955": function (t, e, s) {
		"use strict";

		function n(t) {
			const e = t.params.flowName || t.params.hubName || t.params.login || t.params.name;
			let s = t.name;
			const n = t.params.pageNum && 1 !== t.params.pageNum ? t.params.pageNum : null,
				a = t.params.score,
				i = t.params.period,
				o = t.params.categoryAlias,
				r = t.params.nomination,
				c = [e, a, i, n, o, r].filter(Boolean);
			return s = c.length ? `${s}_${c.join("_")}` : s, s.toUpperCase()
		}
		s.d(e, "a", (function () {
			return n
		}))
	},
	"09f4": function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return o
		})), s.d(e, "b", (function () {
			return r
		})), s.d(e, "c", (function () {
			return c
		}));
		var n = s("adef");
		const a = 200;

		function i() {
			const t = document.querySelector("[data-header-sticky]"),
				e = document.querySelector("[data-menu-sticky]");
			return e ? e.getBoundingClientRect().height : t ? t.getBoundingClientRect().height : 0
		}

		function o(t) {
			const e = t.getBoundingClientRect().top,
				s = e + Object(n["a"])(),
				o = i();
			return o > 0 ? Object(n["b"])(s - o, a) : Object(n["b"])(s, a)
		}

		function r(t, e = 0) {
			const s = t.getBoundingClientRect().top,
				i = s + Object(n["a"])();
			return Object(n["b"])(i - e, a)
		}

		function c(t) {
			const e = t.getBoundingClientRect().top,
				s = e + Object(n["a"])();
			return Object(n["b"])(s, a)
		}
	},
	"0a2e": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMNotice", {
				attrs: {
					type: "neutral"
				}
			}, [s("p", {
				staticClass: "tm-article-comments-disabled__paragraph"
			}, [t._v("\n    " + t._s(t.msg("ARTICLE_DISABLE_COMMENTS_MESSAGE")) + "\n  ")]), t._v(" "), t.isSuperAdmin ? s("TMButtonBase", {
				staticClass: "tm-article-comments-disabled__button",
				attrs: {
					"style-size": "medium",
					"style-type": "transparent"
				},
				on: {
					click: function (e) {
						return t.$emit("toggleCommentsState")
					}
				}
			}, [t._v("\n    " + t._s(t.msg("ARTICLE_ENABLE_COMMENTS")) + "\n  ")]) : t._e()], 1)
		},
			a = [],
			i = s("2f62"),
			o = s("884d"),
			r = s("e4d1"),
			c = {
				name: "TMArticleCommentsDisabledNotice",
				components: {
					TMButtonBase: o["a"],
					TMNotice: r["a"]
				},
				computed: {
					...Object(i["c"])("me", ["isSuperAdmin"])
				}
			},
			l = c,
			u = (s("263a"), s("2877")),
			m = Object(u["a"])(l, n, a, !1, null, null, null);
		e["a"] = m.exports
	},
	"0a3b": function (t, e, s) {
		"use strict";
		s("f3bd")
	},
	"0a3d": function (t, e, s) {
		"use strict";
		s("bb64")
	},
	"0a5f": function (t, e, s) {
		"use strict";
		s.d(e, "k", (function () {
			return i
		})), s.d(e, "h", (function () {
			return o
		})), s.d(e, "g", (function () {
			return r
		})), s.d(e, "f", (function () {
			return c
		})), s.d(e, "m", (function () {
			return l
		})), s.d(e, "l", (function () {
			return u
		})), s.d(e, "a", (function () {
			return m
		})), s.d(e, "q", (function () {
			return d
		})), s.d(e, "t", (function () {
			return p
		})), s.d(e, "c", (function () {
			return _
		})), s.d(e, "e", (function () {
			return h
		})), s.d(e, "i", (function () {
			return g
		})), s.d(e, "d", (function () {
			return f
		})), s.d(e, "v", (function () {
			return b
		})), s.d(e, "u", (function () {
			return T
		})), s.d(e, "o", (function () {
			return v
		})), s.d(e, "w", (function () {
			return E
		})), s.d(e, "p", (function () {
			return S
		})), s.d(e, "n", (function () {
			return O
		})), s.d(e, "b", (function () {
			return C
		})), s.d(e, "s", (function () {
			return I
		})), s.d(e, "r", (function () {
			return A
		})), s.d(e, "j", (function () {
			return y
		}));
		var n = s("2105"),
			a = s("4dcc");

		function i(t, e, s) {
			let i = `articles/${t}/comments/`;
			return s && (i += "?nocount=1"), Object(n["b"])(Object(a["a"])(i, "v2"), e)
		}

		function o(t, e) {
			return Object(n["b"])(Object(a["a"])(`articles/${t}/comments/split/guest`, "v2"), e)
		}

		function r(t, e) {
			return Object(n["b"])(Object(a["a"])(`articles/${t}/comments/split/guest/cache`, "v2"), e)
		}

		function c({
			id: t,
			hl: e
		}) {
			return Object(n["b"])(Object(a["a"])(`articles/${t}/comments/split/user`, "v2"), {
				hl: e
			})
		}

		function l(t, e) {
			return Object(n["b"])(Object(a["a"])(`articles/${t}/comments/new`, "v2"), e)
		}

		function u(t) {
			return Object(n["b"])(Object(a["a"])("comments/search", "v2"), t)
		}

		function m(t, e) {
			return Object(n["c"])(Object(a["a"])(`comments/${t}/add`, "v2"), e)
		}

		function d(t, e) {
			return Object(n["c"])(Object(a["a"])(`comments/${t}/preview`, "v2"), e)
		}

		function p(t) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/comments/reset`, "v2"))
		}

		function _(t, e) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/comments/disable`, "v2"), e)
		}

		function h(t) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/comments/enable`, "v2"))
		}

		function g(t, e, s) {
			return Object(n["b"])(Object(a["a"])(`articles/${t}/comments/${e}/source`, "v2"), s)
		}

		function f(t, e, s) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/comments/${e}`, "v2"), s)
		}

		function b(t, e) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/comments-suspend/${e}`, "v2"))
		}

		function T(t, e, s) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/comment-complaint/${e}`, "v2"), s)
		}

		function v(t, e, s) {
			const i = s ? "approve" : "reject";
			return Object(n["c"])(Object(a["a"])(`articles/${t}/comments/${e}/moderate/${i}`, "v2"))
		}

		function E({
			postId: t,
			commentId: e,
			data: s
		}) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/comments/${e}/votes`, "v2"), s)
		}

		function S({
			postId: t,
			commentId: e,
			data: s
		}) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/comments/${e}/pinned`, "v2"), s)
		}

		function O(t) {
			return Object(n["b"])(Object(a["a"])(`articles/${t}/comments/pinned`, "v2"))
		}

		function C(t) {
			return Object(n["c"])(Object(a["a"])(`comments/${t}/bookmarks/add`))
		}

		function I(t) {
			return Object(n["c"])(Object(a["a"])(`comments/${t}/bookmarks/remove`))
		}

		function A(t) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/comments/read`, "v2"))
		}
		async function y({
			articleId: t,
			hl: e,
			cacheKey: s
		}) {
			const n = new URLSearchParams({
				hl: e,
				cacheKey: s
			}),
				a = `/ssr/comments/${t}?${n.toString()}`,
				i = window.fetchStream || fetch,
				o = await i(a),
				{
					body: r,
					ok: c
				} = o;
			return c ? r : Promise.reject(o)
		}
	},
	"0a93": function (t, e, s) {
		"use strict";
		s("eabf")
	},
	"0b6c": function (t, e, s) { },
	"0e18": function (t, e, s) {
		"use strict";
		s("52ae")
	},
	"0e97": function (t, e, s) {
		"use strict";
		s.d(e, "b", (function () {
			return r
		})), s.d(e, "c", (function () {
			return c
		})), s.d(e, "a", (function () {
			return l
		}));
		var n = s("161e"),
			a = s("a9a2");

		function i(t) {
			const {
				period: e,
				score: s
			} = t;
			return (!e || !s) && (e ? ["daily", "weekly", "monthly", "yearly", "alltime"].includes(e) : !s || ["0", "10", "25", "50", "100"].includes(s))
		}

		function o(t) {
			return t.replace(/^\/(en|ru)/, "")
		}

		function r({
			route: t,
			flowName: e,
			isNews: s
		}) {
			const {
				location: r,
				href: c
			} = t, {
				params: l
			} = r;
			if (!i(l)) return;
			const u = Object(a["buildCookieName"])({
				flowName: e,
				isNews: s
			}),
				m = o(c);
			Object(n["c"])(u, m, {
				expires: 365
			})
		}

		function c(t) {
			const {
				path: e
			} = t, s = o(e);
			Object(n["c"])("habr_web_home_feed", s, {
				expires: 365
			})
		}

		function l(t) {
			const e = Object(n["a"])("habr_web_home_feed") || "/all/";
			return `/${t.hl}${e}`
		}
	},
	"0fca": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMArticlesList", {
				attrs: {
					"articles-list": t.currentArticlesList,
					"is-loading": t.isLoading,
					"pages-count": t.currentPagesCount
				},
				scopedSlots: t._u([{
					key: "afterArticle",
					fn: function (e) {
						var n = e.position,
							a = e.currentPage;
						return [t._t("afterArticle", (function () {
							return [s("TMArticlesFeedBlocks", {
								attrs: {
									position: n
								}
							})]
						}), {
							currentPage: a,
							position: n
						})]
					}
				}, {
					key: "afterArticles",
					fn: function () {
						return [t.isUserShowSubscriptionBlock ? s("TMSubscriptionBlock", {
							attrs: {
								id: "subcriptions_block",
								"data-navigatable": "",
								tabindex: "0"
							}
						}) : t._e()]
					},
					proxy: !0
				}], null, !0)
			})
		},
			a = [],
			i = s("2f62"),
			o = s("a8f0"),
			r = s("a28c"),
			c = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-subscription"
				}, [s("h2", {
					staticClass: "tm-subscription__title"
				}, [t._v("\n    " + t._s(t.msg("SUBSCRIPTION_TITLE")) + "\n  ")]), t._v(" "), s("p", [t._v("\n    " + t._s(t.msg("SUBSCRIPTION_TEXT")) + "\n  ")]), t._v(" "), t.showThanks ? s("div", {
					staticClass: "tm-subscription__thanks"
				}, [t._v("\n    " + t._s(t.msg("SUBSCRIPTION_THANKS")) + "\n  ")]) : s("div", {
					staticClass: "tm-subscription__form"
				}, [s("div", {
					staticClass: "tm-select__container"
				}, [s("select", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: t.period,
						expression: "period"
					}],
					staticClass: "tm-subscription__select",
					attrs: {
						disabled: t.isLoading
					},
					on: {
						change: function (e) {
							var s = Array.prototype.filter.call(e.target.options, (function (t) {
								return t.selected
							})).map((function (t) {
								var e = "_value" in t ? t._value : t.value;
								return e
							}));
							t.period = e.target.multiple ? s : s[0]
						}
					}
				}, [s("option", {
					attrs: {
						value: "day"
					}
				}, [t._v("\n          " + t._s(t.i18nSubscriptionPeriod("D")) + "\n        ")]), t._v(" "), s("option", {
					attrs: {
						value: "week"
					}
				}, [t._v("\n          " + t._s(t.i18nSubscriptionPeriod("W")) + "\n        ")]), t._v(" "), s("option", {
					attrs: {
						value: "month"
					}
				}, [t._v("\n          " + t._s(t.i18nSubscriptionPeriod("M")) + "\n        ")])])]), t._v(" "), s("div", {
					staticClass: "tm-subscription__button-container"
				}, [s("TMButtonBase", {
					staticClass: "tm-subscription__button",
					attrs: {
						"is-loading": t.isLoading,
						"style-size": "large",
						"style-type": "solid",
						type: "submit"
					},
					on: {
						click: t.sendSubscriptionSettings
					}
				}, [t._v("\n        " + t._s(t.msg("SUBSCRIPTION_SUBSCRIBE")) + "\n      ")])], 1)]), t._v(" "), s("button", {
					staticClass: "tm-subscription__close",
					on: {
						click: function (e) {
							return t.sendSubscriptionSettings("never")
						}
					}
				}, [s("TMSvgImg", {
					staticClass: "tm-subscription__close-icon",
					attrs: {
						id: "close"
					}
				})], 1)])
			},
			l = [],
			u = s("884d"),
			m = s("b7d0"),
			d = s("6f23"),
			p = s("6012");
		const _ = !0,
			h = t => {
				switch (t) {
					case "day":
						return "subscribe_daily";
					case "week":
						return "subscribe_weekly";
					case "month":
						return "subscribe_monthly";
					case "never":
						return "close";
					default:
						return null
				}
			};
		var g = {
			name: "TMSubscriptionBlock",
			components: {
				TMSvgImg: m["a"],
				TMButtonBase: u["a"]
			},
			data() {
				return {
					period: "week",
					showThanks: !1,
					isLoading: !1
				}
			},
			beforeDestroy() {
				this.showThanks && this.init(_)
			},
			methods: {
				...Object(i["b"])("me", ["init"]),
				i18nSubscriptionPeriod(t) {
					return this.msg("SUBSCRIPTION_PERIOD_" + t)
				},
				sendSubscriptionSettings(t) {
					if (this.showThanks && "never" === t) return void this.init(_);
					this.isLoading = !0;
					const e = t || this.period,
						s = {
							frequency: e
						};
					Object(d["c"])("tm_block", "digest_feed", h(e)), Object(p["J"])(s).then(e => {
						e.ok && ("never" === t ? this.init(_) : this.showThanks = !0)
					}).catch(t => {
						this.$toast.error(t.message)
					}).finally(() => {
						this.isLoading = !1
					})
				}
			}
		},
			f = g,
			b = (s("d665"), s("2877")),
			T = Object(b["a"])(f, c, l, !1, null, null, null),
			v = T.exports,
			E = s("0955"),
			S = {
				name: "TMArticlesFeed",
				components: {
					TMArticlesFeedBlocks: o["a"],
					TMArticlesList: r["a"],
					TMSubscriptionBlock: v
				},
				computed: {
					...Object(i["e"])("me", ["user"]),
					...Object(i["e"])("articlesList", ["isLoading", "pagesCount"]),
					...Object(i["c"])("articlesList", ["getArticlesList"]),
					isUserShowSubscriptionBlock() {
						return this.user && null === this.user.settings.miscSettings.digestSubscription
					},
					routeKey() {
						return Object(E["a"])(this.$route)
					},
					currentArticlesList() {
						return this.getArticlesList(this.routeKey)
					},
					currentPagesCount() {
						return this.pagesCount[this.routeKey]
					}
				}
			},
			O = S,
			C = Object(b["a"])(O, n, a, !1, null, null, null);
		e["a"] = C.exports
	},
	1: function (t, e) { },
	"107d": function (t, e, s) {
		"use strict";
		s("355c")
	},
	1172: function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return o
		})), s.d(e, "b", (function () {
			return l
		}));
		var n = s("adef");
		const a = 200,
			i = 12;
		class o extends Error {
			constructor() {
				super("Element is not focusable")
			}
		}
		class r extends Error {
			constructor() {
				super("Scroll to the element has been prevented")
			}
		}
		const c = t => new Promise((e, s) => {
			let n;
			const a = () => {
				s(new r), n && n.disconnect(), window.removeEventListener("wheel", a)
			};
			n = new IntersectionObserver(t => {
				const [s] = t;
				s.isIntersecting && (e(), n.disconnect(), window.removeEventListener("wheel", a))
			}), n.observe(t), window.addEventListener("wheel", a)
		}),
			l = t => new Promise((e, s) => {
				if (null === t.offsetParent) return void s(new o);
				const {
					top: r
				} = t.getBoundingClientRect();
				if (0 === r) return void e(!0);
				const l = t.getBoundingClientRect().top,
					u = l + Object(n["a"])();
				Object(n["b"])(u - i, a), e(c(t))
			})
	},
	"125a": function (t, e, s) {
		"use strict";
		s("94ac")
	},
	"125c": function (t, e, s) {
		"use strict";
		s("7c2f")
	},
	"126f": function (t, e, s) {
		"use strict";
		s.d(e, "b", (function () {
			return l
		})), s.d(e, "c", (function () {
			return u
		})), s.d(e, "a", (function () {
			return m
		}));
		var n = s("af72"),
			a = s.n(n),
			i = s("522c"),
			o = s.n(i);

		function r(t) {
			return !t.author || t.author.is_banned
		}

		function c(t) {
			return {
				...t,
				isUfo: !0
			}
		}

		function l(t) {
			const e = new Date(t),
				s = t => o()(t.toString(), 2, "0"),
				n = s(e.getDate()),
				a = s(e.getMonth() + 1),
				i = s(e.getFullYear()),
				r = s(e.getHours()),
				c = s(e.getMinutes());
			return {
				date: `${n}.${a}.${i}`,
				time: `${r}:${c}`
			}
		}

		function u(t) {
			return r(t) ? c(t) : t
		}

		function m(t) {
			const e = a.a.map(t, {
				id: a.a.maybe.nonEmptyString,
				isSuspended: a.a.maybe.boolean,
				isAuthor: a.a.boolean,
				isPostAuthor: a.a.boolean,
				isNew: a.a.boolean,
				score: a.a.maybe.number,
				message: a.a.nonEmptyString,
				timePublished: a.a.nonEmptyString
			});
			return a.a.all(e)
		}
	},
	"12c3": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMOverlay", {
				on: {
					close: function (e) {
						return t.$emit("close")
					}
				}
			}, [s("div", {
				ref: "wrapper",
				staticClass: "tm-bottom-sheet"
			}, [s("div", {
				staticClass: "tm-bottom-sheet__header"
			}, [t.title ? s("div", {
				staticClass: "tm-bottom-sheet__title",
				domProps: {
					textContent: t._s(t.title)
				}
			}) : t._e(), t._v(" "), s("button", {
				staticClass: "tm-bottom-sheet__close",
				attrs: {
					type: "button"
				},
				on: {
					click: function (e) {
						return t.$emit("close")
					}
				}
			}, [s("TMSvgImg", {
				staticClass: "tm-bottom-sheet__close-icon",
				attrs: {
					id: "close-rounded",
					size: "24"
				}
			})], 1)]), t._v(" "), t.$slots.default ? s("div", {
				staticClass: "tm-bottom-sheet__content"
			}, [t._t("default")], 2) : t._e(), t._v(" "), t._t("body")], 2)])
		},
			a = [],
			i = s("9c32"),
			o = s("b7d0"),
			r = {
				name: "TMBottomSheet",
				components: {
					TMOverlay: i["a"],
					TMSvgImg: o["a"]
				},
				props: {
					title: {
						type: String,
						default: null
					}
				}
			},
			c = r,
			l = (s("814b"), s("2877")),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	1334: function (t, e, s) { },
	"143a": function (t, e, s) {
		"use strict";
		s("0810")
	},
	1441: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMBlock", {
				attrs: {
					title: t.msg("WIDGET_FACEBOOK")
				}
			}, [s("iframe", {
				staticStyle: {
					border: "none",
					overflow: "hidden"
				},
				attrs: {
					allowTransparency: "true",
					frameborder: "0",
					height: "220",
					scrolling: "no",
					src: t.src,
					width: "100%"
				}
			})])
		},
			a = [],
			i = s("19d1"),
			o = {
				name: "TMWidgetFacebook",
				components: {
					TMBlock: i["a"]
				},
				props: {
					widgetData: {
						type: Object,
						required: !0
					}
				},
				computed: {
					src() {
						const {
							linkUrl: t
						} = this.widgetData, e = "width=260&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";
						return `https://www.facebook.com/plugins/page.php?href=${t}&${e}`
					}
				}
			},
			r = o,
			c = s("2877"),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"144e": function (t, e, s) {
		"use strict";
		s("3fe5")
	},
	"14b7": function (module, __webpack_exports__, __webpack_require__) {
		"use strict";
		var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2f62"),
			_components_article_formatted_body_article_formatted_body_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d4a6"),
			_components_article_poll_article_poll_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("aba0"),
			_components_article_tracking_pixels_article_tracking_pixels_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5da6"),
			_guards_article_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9864"),
			_utils_enovironment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("6c10"),
			_utils_gallery_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cd16"),
			_utils_gallery_slider_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("3f16"),
			_utils_scroll_to_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("09f4");
		const TMGallery = () => __webpack_require__.e("gallery").then(__webpack_require__.bind(null, "1ea6"));
		__webpack_exports__["a"] = {
			name: "TMArticleBody",
			components: {
				TMArticlePoll: _components_article_poll_article_poll_vue__WEBPACK_IMPORTED_MODULE_2__["a"],
				TMGallery: TMGallery,
				TMArticleFormattedBody: _components_article_formatted_body_article_formatted_body_vue__WEBPACK_IMPORTED_MODULE_1__["a"],
				TMArticleTrackingPixels: _components_article_tracking_pixels_article_tracking_pixels_vue__WEBPACK_IMPORTED_MODULE_3__["a"]
			},
			props: {
				article: _guards_article_js__WEBPACK_IMPORTED_MODULE_4__["a"],
				isMegapostScriptsLodaded: Boolean
			},
			data() {
				return {
					galleryImages: [],
					gallerySliders: []
				}
			},
			computed: {
				...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["c"])("i18n", ["msg"]),
				editorVersion() {
					return parseInt(this.article.editorVersion, 10)
				},
				formattedClass() {
					return this.isMegapostV1 ? "" : "tm-article-body__content_formatted"
				},
				isMegapostV1() {
					return "megaproject" === this.article.postType && 1 === this.editorVersion
				}
			},
			watch: {
				isMegapostScriptsLodaded: {
					handler(t) {
						t && _utils_enovironment_js__WEBPACK_IMPORTED_MODULE_5__["b"] && this.evalMegapostScripts()
					},
					immediate: !0
				}
			},
			mounted() {
				const currentHash = this.$route.hash;
				if (currentHash) {
					const t = this.$el.querySelector(`a[name="${currentHash.substr(1)}"]`) || this.$el.querySelector(currentHash);
					t && (Object(_utils_scroll_to_js__WEBPACK_IMPORTED_MODULE_8__["a"])(t), window.history.replaceState(null, null, " "))
				}
				if (!this.isMegapostV1) {
					this.galleryImages = Object(_utils_gallery_js__WEBPACK_IMPORTED_MODULE_6__["a"])(this.$el), this.gallerySliders = Object(_utils_gallery_slider_js__WEBPACK_IMPORTED_MODULE_7__["a"])(this.$el);
					const inlineScripts = Array.from(this.$el.querySelectorAll("script"));
					if (inlineScripts && inlineScripts.length) {
						const quizRegexp = /(function initQuiz[\d]+\(\){const t=document.getElementById)/g;
						inlineScripts.forEach(script => {
							const scriptInner = script.innerText;
							null !== scriptInner.match(quizRegexp) && eval(scriptInner)
						})
					}
				}
			},
			methods: {
				evalMegapostScripts() {
					if (this.$el) {
						const inlineScripts = Array.from(this.$el.querySelectorAll("script"));
						inlineScripts.forEach(script => {
							eval(script.innerText)
						})
					}
				},
				getNodesList(t) {
					const e = this.$el.querySelectorAll(t);
					return [].slice.call(e)
				},
				getArticleFlagValue(t) {
					return this.msg(this.flagsValues[t])
				}
			}
		}
	},
	"14ea": function (t, e, s) { },
	1559: function (t, e, s) {
		"use strict";

		function n(t) {
			if (!t) throw new Error("Missed spoilerBlock param!");
			const e = t.querySelector(".spoiler_title"),
				s = () => {
					t.classList.toggle("spoiler_open")
				};
			return e.addEventListener("click", s), () => {
				e.removeEventListener("click", s)
			}
		}
		s.d(e, "a", (function () {
			return c
		}));
		const a = () => s.e("hljs").then(s.bind(null, "c0b9")),
			i = t => a().then(e => e.default(t));

		function o(t) {
			const e = document.createElement("div");
			e.className = "table table_wrapped", e.appendChild(t.cloneNode(!0)), t.parentNode.replaceChild(e, t)
		}

		function r(t) {
			const e = document.createElement("iframe");
			e.setAttribute("frameborder", 0), e.setAttribute("scrolling", "no"), e.setAttribute("allowfullscreen", !0), e.setAttribute("src", t.getAttribute("data-src")), e.setAttribute("style", t.getAttribute("data-style")), e.setAttribute("width", t.getAttribute("width")), e.setAttribute("id", t.getAttribute("id")), t.parentNode.replaceChild(e, t)
		}
		const c = t => {
			const e = t.querySelectorAll(".tm-iframe_temp"),
				s = t.querySelectorAll("table"),
				a = t.querySelectorAll("pre code"),
				c = t.querySelectorAll("div.spoiler");
			a.length && [...a].forEach(i), c.length && [...c].forEach(n), e.length && [...e].forEach(r), s.length && [...s].forEach(o)
		}
	},
	1673: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-button-follow",
				on: {
					click: t.onClick
				}
			}, [s("span", {
				staticClass: "tm-button-follow__unfollow"
			}, [t._v("\n    Ã—\n  ")]), t._v(" "), s("button", {
				staticClass: "tm-button-follow__button tm-button-follow__button_big",
				class: t.className,
				attrs: {
					type: "button"
				}
			}, [t._v("\n    " + t._s(t.buttonText) + "\n  ")])])
		},
			a = [],
			i = s("2f62"),
			o = {
				name: "TMButtonFollow",
				props: {
					useFollowLabel: Boolean,
					subscribed: Boolean
				},
				data() {
					return {
						computedSubscribed: this.subscribed
					}
				},
				computed: {
					...Object(i["c"])("i18n", ["msg"]),
					i18n() {
						return {
							subscribe: this.useFollowLabel ? this.msg("PROFILE_ACTION_FOLLOW") : this.msg("PROFILE_ACTION_SUBSCRIBE"),
							subscribed: this.useFollowLabel ? this.msg("PROFILE_ACTION_FOLLOWING") : this.msg("PROFILE_ACTION_SUBSCRIBED")
						}
					},
					buttonText() {
						return this.computedSubscribed ? this.i18n.subscribed : this.i18n.subscribe
					},
					className() {
						return {
							"tm-button-follow__button_is-active": this.computedSubscribed
						}
					}
				},
				watch: {
					subscribed(t) {
						this.computedSubscribed = t
					}
				},
				methods: {
					onClick() {
						this.computedSubscribed = !this.computedSubscribed, this.$emit("onToggle")
					}
				}
			},
			r = o,
			c = (s("3b4c"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"16a3": function (t, e, s) { },
	"16fe": function (t, e, s) { },
	"16fe9": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("article", {
				staticClass: "tm-widget-applications__card"
			}, [s("aside", {
				staticClass: "tm-widget-applications__aside"
			}, [s("img", {
				staticClass: "tm-widget-applications__image",
				attrs: {
					alt: "",
					src: t.application.imageUrl
				}
			})]), t._v(" "), s("div", {
				staticClass: "tm-widget-applications__body"
			}, [s("h3", {
				staticClass: "tm-widget-applications__card-title",
				domProps: {
					innerHTML: t._s(t.application.title)
				}
			}), t._v(" "), s("p", {
				staticClass: "tm-widget-applications__card-description",
				domProps: {
					innerHTML: t._s(t.application.descriptionHtml)
				}
			}), t._v(" "), s("ul", {
				staticClass: "tm-widget-applications__card-links"
			}, t._l(t.application.links, (function (e) {
				return s("li", {
					key: e.title + "-" + e.linkUrl,
					staticClass: "tm-widget-applications__card-link-item"
				}, [s("a", {
					staticClass: "tm-widget-applications__card-link",
					attrs: {
						href: e.linkUrl,
						rel: "nofollow noreferrer",
						target: "_blank"
					},
					domProps: {
						innerHTML: t._s(e.title)
					}
				})])
			})), 0)])])
		},
			a = [],
			i = {
				name: "TMWidgetApplication",
				props: {
					application: {
						type: Object,
						required: !0
					}
				}
			},
			o = i,
			r = (s("ead8"), s("2877")),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["a"] = c.exports
	},
	"173a": function (t, e, s) {
		"use strict";
		s("e095")
	},
	"173f": function (t, e, s) {
		const n = s("4328");

		function a(t, e, s = {}, a, i) {
			if ("undefined" !== typeof window) return null;
			const o = s["Content-Type"] && "application/json" === s["Content-Type"],
				r = o ? JSON.stringify(e) : n.stringify(e, {
					arrayFormat: "indices"
				}),
				c = new URL(t);
			let l = "\n";
			"ext" === i ? l += "[44;1m [API] " : "int" === i && (l += "[45;1m [SSR] ");
			const u = s["X-Request-ID"];
			return u && (l += `ID: ${u} `), l += `[0m curl -k -X ${a} `, s["csrf-token"] && (l += ` -H 'csrf-token: ${s["csrf-token"]}' `), s["Content-Type"] && (l += ` -H 'Content-Type: ${s["Content-Type"]}' `), s.cookie && (l += ` -H 'cookie: ${s.cookie}' `), s.token && (l += ` -H 'client: ${s.client}' -H 'token: ${s.token}' `), s.ApiKey && (l += ` -H 'ApiKey: ${s.ApiKey}' `), e && (l += ` -d '${r}' `), c.searchParams.delete("rid"), l += c.toString(), console.log(l), l
		}
		t.exports = a
	},
	1848: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("span", {
				staticClass: "tm-align-center"
			}, [t.$slots.start ? s("span", {
				staticClass: "tm-align-center__start"
			}, [t._t("start")], 2) : t._e(), t._v(" "), s("span", {
				staticClass: "tm-align-center__content"
			}, [t._t("default")], 2), t._v(" "), t.$slots.end ? s("span", {
				staticClass: "tm-align-center__end"
			}, [t._t("end")], 2) : t._e()])
		},
			a = [],
			i = {
				name: "TMAlignCenter"
			},
			o = i,
			r = (s("7b38"), s("2877")),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["a"] = c.exports
	},
	18482: function (t, e, s) {
		"use strict";
		s("2959")
	},
	"18e7": function (t, e, s) {
		"use strict";

		function n(t) {
			return `https://localhost:7103/tmtm/megapost/habr/preview/${t}/`
		}

		function a(t) {
			return `https://localhost:7103/tmtm/megapost/habr/edit/${t}/`
		}
		s.d(e, "b", (function () {
			return n
		})), s.d(e, "a", (function () {
			return a
		}))
	},
	"197e": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				directives: [{
					name: "hotkey",
					rawName: "v-hotkey",
					value: {
						esc: t.closeOptions
					},
					expression: "{ 'esc': closeOptions }"
				}],
				staticClass: "tm-dropdown",
				class: {
					"tm-dropdown_active": t.optionsVisible
				}
			}, [s("div", {
				staticClass: "tm-dropdown__head"
			}, [t._t("head", null, {
				toggle: t.toggleOptions
			})], 2), t._v(" "), t.optionsVisible ? s("div", {
				staticClass: "tm-dropdown__body",
				class: t.getClass,
				style: t.getOffset
			}, [t._t("body", null, {
				visible: t.optionsVisible
			})], 2) : t._e()])
		},
			a = [],
			i = {
				name: "TMDropdown",
				props: {
					align: {
						type: String,
						default: "left"
					},
					bodyOffset: {
						type: Number,
						default: 0
					},
					variant: {
						type: String,
						default: "default"
					}
				},
				data() {
					return {
						optionsVisible: !1
					}
				},
				computed: {
					getClass() {
						return {
							"tm-dropdown__body_left": "left" === this.align,
							"tm-dropdown__body_right": "right" === this.align,
							"tm-dropdown__body_center": "center" === this.align,
							"tm-dropdown__body_inline": "inline" === this.variant,
							"tm-dropdown__body_padding-none": "noBodyPadding" === this.variant
						}
					},
					getOffset() {
						return {
							["margin-" + this.align]: this.bodyOffset + "px"
						}
					}
				},
				watch: {
					$route(t, e) {
						t.path !== e.path && this.optionsVisible && (this.optionsVisible = !1)
					}
				},
				methods: {
					close() {
						this.optionsVisible = !1
					},
					toggleOptions() {
						this.optionsVisible = !this.optionsVisible, this.optionsVisible ? document.addEventListener("click", this.listenClickOutside) : document.removeEventListener("click", this.listenClickOutside)
					},
					closeOptions() {
						this.optionsVisible = !1, document.removeEventListener("click", this.listenClickOutside)
					},
					listenClickOutside(t) {
						this.optionsVisible && !this.$el.contains(t.target) && this.toggleOptions()
					}
				}
			},
			o = i,
			r = (s("9aa2"), s("2877")),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["a"] = c.exports
	},
	"19d1": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s(t.tag, {
				tag: "component",
				staticClass: "tm-block",
				class: t.bem("tm-block", {
					spacing: t.spacing,
					variant: t.variant
				})
			}, [t.title || "header-aside" in t.$slots ? s("header", {
				staticClass: "tm-block__header",
				class: t.bem("tm-block__header", {
					variant: t.headerVariant
				})
			}, [s("div", {
				staticClass: "tm-block__header-container"
			}, [t.title ? s(t.titleTag, {
				tag: "component",
				staticClass: "tm-block__title",
				domProps: {
					textContent: t._s(t.title)
				}
			}) : t._e(), t._v(" "), t._t("block-settings")], 2), t._v(" "), "header-aside" in t.$slots ? s("div", {
				staticClass: "tm-block__header-aside"
			}, [t._t("header-aside")], 2) : t._e()]) : t._e(), t._v(" "), t._t("body", (function () {
				return [s("div", {
					staticClass: "tm-block__body",
					class: t.bem("tm-block__body", {
						variant: t.bodyVariant
					})
				}, [t._t("default")], 2)]
			})), t._v(" "), t.$slots.footer ? s("footer", {
				staticClass: "tm-block__footer"
			}, [t._t("footer", (function () {
				return [t._t("default")]
			}))], 2) : t._e()], 2)
		},
			a = [],
			i = s("cee5"),
			o = {
				name: "TMBlock",
				props: {
					tag: {
						type: String,
						default: "section"
					},
					title: {
						type: String,
						default: null
					},
					titleTag: {
						type: String,
						default: "h2"
					},
					headerVariant: {
						type: String,
						default: null
					},
					bodyVariant: {
						type: String,
						default: null
					},
					spacing: {
						type: String,
						default: "bottom"
					},
					variant: {
						type: String,
						default: null
					}
				},
				methods: {
					bem: i["a"]
				}
			},
			r = o,
			c = (s("fa00"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"1a5d": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("transition", {
				attrs: {
					appear: t.appear,
					name: t.name
				},
				on: {
					"after-leave": t.onHide,
					enter: t.onShow,
					"enter-cancelled": t.onCancel,
					"leave-cancelled": t.onCancel
				}
			}, [t._t("default")], 2)
		},
			a = [],
			i = s("c740"),
			o = {
				name: "TMScrollLockTransition",
				props: {
					appear: {
						type: Boolean,
						default: !1
					},
					name: {
						type: String,
						required: !0
					}
				},
				methods: {
					onShow() {
						Object(i["disableBodyScroll"])(this.$children[0].$el.querySelector("[data-scroll-target]"), {
							reserveScrollBarGap: !0
						})
					},
					onHide() {
						Object(i["clearAllBodyScrollLocks"])()
					},
					onCancel() {
						Object(i["clearAllBodyScrollLocks"])()
					}
				}
			},
			r = o,
			c = s("2877"),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"1a95": function (t, e, s) { },
	"1ba4": function (t, e, s) {
		"use strict";
		s("9961")
	},
	"1c13": function (t, e, s) { },
	"1cb9": function (t, e, s) { },
	"1cdb": function (t, e, s) { },
	"1ce4": function (t, e, s) {
		"use strict";
		s("6853")
	},
	"1d03": function (t, e, s) {
		"use strict";
		s("ff91")
	},
	"1d10": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return t.showCompanyBranding ? s("div", {
				staticClass: "tm-company-card__branding",
				class: {
					"tm-company-card__branding_loading": t.imageLoading
				}
			}, [t.imageLoading ? s("div", {
				staticClass: "tm-company-card__branding-placeholder"
			}, [t.error ? s("div", {
				staticClass: "tm-company-card__branding-error"
			}, [t._v("\n      " + t._s(t.msg("ERROR_MISSING_BRANDING_IMAGE")) + "\n    ")]) : t._e()]) : t._e(), t._v(" "), t.companyInfo.settings.branding.linkUrl ? s("a", {
				attrs: {
					href: t.companyInfo.settings.branding.linkUrl
				}
			}, [s("img", {
				staticClass: "tm-company-card__branding-image",
				attrs: {
					src: t.companyInfo.settings.branding.imageUrl,
					width: "100%"
				},
				on: {
					error: function (e) {
						t.error = !0
					},
					load: function (e) {
						t.imageLoading = !1
					}
				}
			})]) : s("img", {
				staticClass: "tm-company-card__branding-image",
				attrs: {
					src: t.companyInfo.settings.branding.imageUrl,
					width: "100%"
				},
				on: {
					error: function (e) {
						t.error = !0
					},
					load: function (e) {
						t.imageLoading = !1
					}
				}
			})]) : t._e()
		},
			a = [],
			i = {
				name: "TMCompanyBranding",
				props: {
					companyInfo: {
						type: Object,
						required: !0
					}
				},
				data() {
					return {
						imageLoading: !0,
						error: !1
					}
				},
				computed: {
					showCompanyBranding() {
						return this.companyInfo.settings && this.companyInfo.settings.branding && this.companyInfo.settings.branding.imageUrl
					}
				},
				mounted() {
					this.companyInfo.settings.branding && this.companyInfo.settings.branding.pixelUrl && this.initTrackingPixel()
				},
				methods: {
					initTrackingPixel() {
						const {
							pixelUrl: t
						} = this.companyInfo.settings.branding, e = new Image;
						e.src = t
					}
				}
			},
			o = i,
			r = (s("f1fa"), s("2877")),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["a"] = c.exports
	},
	"1d55": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("a", {
				attrs: {
					href: t.loginUrl,
					rel: "nofollow"
				}
			}, [t._t("default")], 2)
		},
			a = [],
			i = {
				name: "TMLoginLink",
				computed: {
					loginUrl() {
						const t = this.$route.path;
						return `https://localhost:7103/kek/v1/auth/habrahabr/?back=${t}&hl=${this.langOptions.hl}`
					}
				}
			},
			o = i,
			r = s("2877"),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["a"] = c.exports
	},
	"1dc4": function (t, e, s) { },
	"1e9c": function (t, e, s) {
		"use strict";
		s("3f5e")
	},
	"1f62": function (t, e, s) { },
	"1f65": function (t, e, s) {
		"use strict";

		function n(t) {
			return t.map(t => [t, t.getBoundingClientRect()]).reduce((t, e) => Math.abs(e[1].top) < Math.abs(t[1].top) ? e : t)[0]
		}
		s.d(e, "a", (function () {
			return n
		}))
	},
	"1fa6": function (t, e, s) {
		"use strict";

		function n(t) {
			const e = document.createElement("input");
			document.body.appendChild(e), e.value = t, e.select(), document.execCommand("copy"), document.body.removeChild(e)
		}
		s.d(e, "a", (function () {
			return n
		}))
	},
	"1ffd": function (t, e, s) {
		"use strict";
		s("2c67")
	},
	"207f": function (t, e, s) {
		"use strict";
		s("c7b7")
	},
	2105: function (t, e, s) {
		"use strict";
		s.d(e, "b", (function () {
			return b
		})), s.d(e, "c", (function () {
			return E
		})), s.d(e, "a", (function () {
			return S
		})), s.d(e, "d", (function () {
			return O
		}));
		var n = s("bc3a"),
			a = s.n(n),
			i = s("4328"),
			o = s.n(i);
		const r = t => {
			const e = new URL(t.url);
			return "https://localhost:7103" !== e.origin ? t : {
				...t,
				headers: {
					...t.headers,
					"x-app-version": "2.81.0"
				}
			}
		};
		var c = s("6c10"),
			l = s("161e");

		function u(t) {
			if (!t) return;
			const e = document.querySelector('meta[name="habr-version"]'),
				s = e ? e.getAttribute("content") : "",
				[, n] = s.split("."),
				[, a] = t.split(".");
			if (a - n > 1) {
				const t = Object(l["a"])("target-minor-version");
				t && t === a || (Object(l["c"])("target-minor-version", a, {
					expires: 30
				}), window.location.reload(!0))
			}
			if (a !== n) {
				const t = new CustomEvent("showRefreshNotice");
				document.dispatchEvent(t)
			}
		}

		function m(t) {
			if (t) {
				const e = new CustomEvent("showCacheNotice", {
					detail: t
				});
				document.dispatchEvent(e)
			} else {
				const t = new CustomEvent("hideCacheNotice");
				document.dispatchEvent(t)
			}
		}
		const d = s("173f"),
			p = (t = {}) => ({
				...t,
				withCredentials: !0
			});

		function _(t, e, s) {
			this.name = this.constructor.name, this.message = t.message, Object.assign(this, t), this.stack = s || e.stack || (new Error).stack
		}
		a.a.interceptors.request.use(r), _.prototype = Object.create(Error.prototype), _.prototype.constructor = _;
		const h = (t, e) => {
			const {
				response: s
			} = t;
			return s ? s.data && s.data.message ? new _(s.data, t, e) : new _(t.response, t, e) : t
		},
			g = (t, e) => e < 2 && (!t.response || 408 === t.response.status);

		function f(t) {
			!c["c"] && c["b"] && (u(t["server-habr-version"]), m(t["x-sw-cache"]))
		}

		function b(t, e = {}, s = 0, n = !0, i = "json") {
			const r = {
				responseType: i,
				params: {
					...e
				},
				paramsSerializer: t => o.a.stringify(t, {
					arrayFormat: "indices"
				})
			},
				c = n ? p(r) : r;
			d(`${t}?${r.paramsSerializer(r.params)}`, null, r.headers, "GET", "int");
			const {
				stack: l
			} = new Error;
			return a.a.get(t, c).then(t => (f(t.headers), t.data)).catch(a => {
				if (g(a, s)) return new Promise(a => setTimeout(() => a(b(t, e, s + 1, n), 2e3)));
				throw h(a, l)
			})
		}

		function T() {
			const t = document.querySelector('meta[name="csrf-token"]');
			return t && t.getAttribute("content")
		}

		function v() {
			const t = T(),
				e = t ? {
					headers: {
						"csrf-token": t
					}
				} : {};
			return e
		}

		function E(t, e = {}, s = !0, n = !0) {
			const i = n ? v() : {},
				o = s ? p(i) : i,
				{
					stack: r
				} = new Error;
			return d(t, e, o.headers, "POST", "int"), a.a.post(t, e, o).then(t => (f(t.headers), t.data)).catch(t => {
				throw h(t, r)
			})
		}

		function S(t) {
			const {
				stack: e
			} = new Error;
			return a.a.delete(t, v()).then(t => t.data).catch(t => {
				throw h(t, e)
			})
		}

		function O(t, e = {}, s = !0, n = !0) {
			const i = n ? v() : {},
				o = s ? p(i) : i,
				{
					stack: r
				} = new Error;
			return d(t, e, o.headers, "SEARCH", "int"), a()({
				method: "SEARCH",
				url: t,
				data: e,
				...o
			}).then(t => (f(t.headers), t.data)).catch(t => {
				throw h(t, r)
			})
		}
	},
	2169: function (t, e, s) {
		"use strict";
		s("ca6d")
	},
	2198: function (t, e, s) {
		"use strict";
		s("1cdb")
	},
	"21e3": function (t, e, s) {
		"use strict";
		s("4f1f")
	},
	2291: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMBlock", {
				attrs: {
					title: t.msg("WIDGET_LINKS")
				}
			}, [s("ul", {
				staticClass: "tm-widget-links__list"
			}, t._l(t.widgetData.links, (function (e) {
				return s("li", {
					key: e.title + "-" + e.linkUrl,
					staticClass: "tm-widget-links__item"
				}, [s("a", {
					staticClass: "tm-widget-links__link",
					attrs: {
						href: e.linkUrl,
						rel: "nofollow noreferrer",
						target: "_blank"
					},
					domProps: {
						innerHTML: t._s(e.title)
					}
				}), t._v(" "), s("small", {
					staticClass: "tm-widget-links__host",
					domProps: {
						textContent: t._s(e.linkHost)
					}
				})])
			})), 0)])
		},
			a = [],
			i = s("19d1"),
			o = {
				name: "TMWidgetLinks",
				components: {
					TMBlock: i["a"]
				},
				props: {
					widgetData: {
						type: Object,
						required: !0
					}
				}
			},
			r = o,
			c = (s("ad29"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"22f2": function (t, e, s) {
		"use strict";
		s("7d30")
	},
	"239d": function (t, e, s) {
		"use strict";
		s("ce8a")
	},
	"23bd": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return t.showPinnedPost ? s("div", {
				staticClass: "tm-pinned-post"
			}, [s("div", {
				staticClass: "tm-pinned-post__toggle",
				on: {
					click: t.togglePinnedPost
				}
			}, [s("TMSvgImg", {
				staticClass: "tm-pinned-post__icon",
				attrs: {
					id: "pin"
				}
			}), t._v(" "), s("span", {
				staticClass: "tm-pinned-post__toggle-title",
				domProps: {
					innerHTML: t._s(t.pinnedPost.expanded ? t.msg("PINNED_POST") : t.pinnedPost.title)
				}
			}), t._v(" "), s("TMSvgImg", {
				staticClass: "tm-pinned-post__icon tm-pinned-post__icon_collapse",
				attrs: {
					id: t.pinnedPost.expanded ? "collapse_pin" : "expand"
				}
			})], 1), t._v(" "), t.pinnedPost.expanded ? s("a", {
				staticClass: "tm-pinned-post__info",
				attrs: {
					href: t.pinnedPost.link
				},
				on: {
					click: function (e) {
						return t.logClickEvent({
							category: "tm_block",
							action: "top_post",
							label: "go"
						})
					}
				}
			}, [s("div", {
				staticClass: "tm-pinned-post__text"
			}, [s("h2", {
				staticClass: "tm-pinned-post__title",
				domProps: {
					innerHTML: t._s(t.pinnedPost.title)
				}
			}), t._v(" "), s("div", {
				staticClass: "tm-pinned-post__descr",
				domProps: {
					innerHTML: t._s(t.pinnedPost.description)
				}
			})]), t._v(" "), s("img", {
				staticClass: "tm-pinned-post__image",
				attrs: {
					src: t.pinnedPost.image
				}
			})]) : t._e()]) : t._e()
		},
			a = [],
			i = s("2f62"),
			o = s("161e"),
			r = s("b7d0"),
			c = s("a8a8"),
			l = s("6f23");
		const u = "habr-web-collapsed-pinned";
		var m = {
			name: "TMPinnedPost",
			components: {
				TMSvgImg: r["a"]
			},
			asyncData({
				store: t
			}) {
				return "en" === t.getters["i18n/langOptions"].fl ? Promise.resolve() : t.dispatch("pinnedPost/loadPinnedPost").catch(t => {
					Object(c["a"])(t)
				})
			},
			computed: {
				...Object(i["e"])("pinnedPost", ["pinnedPost"]),
				showPinnedPost() {
					const t = this.$route.meta && this.$route.meta.showPinnedPost;
					return this.pinnedPost && t
				}
			},
			methods: {
				...Object(i["b"])("pinnedPost", ["setExpanded"]),
				logClickEvent: ({
					category: t,
					action: e,
					label: s
				}) => Object(l["c"])(t, e, s),
				togglePinnedPost() {
					const t = !this.pinnedPost.expanded;
					this.setExpanded(t), this.pinnedPost.expanded || this.logClickEvent({
						category: "tm_block",
						action: "top_post",
						label: "close"
					}), Object(o["c"])(u, t ? null : this.pinnedPost.id, {
						expires: 365
					})
				}
			}
		},
			d = m,
			p = (s("5e1f"), s("2877")),
			_ = Object(p["a"])(d, n, a, !1, null, null, null);
		e["a"] = _.exports
	},
	"24fd": function (t, e, s) {
		"use strict";
		var n, a, i = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-article-comments-offloaded"
			}, [t.shouldOffload ? [t.isLoadingCommentsStream ? s("TMCommentsWrapper", {
				attrs: {
					"comments-count": t.commentsCount
				}
			}, [s("TMPlaceholder", {
				attrs: {
					times: 3,
					type: "comment"
				}
			})], 1) : s("TMDeferredRender", {
				attrs: {
					"ready-to-hydrate": !t.$fetchState.isLoading,
					stream: t.commentsStream
				},
				on: {
					done: t.onDone,
					error: t.onError
				},
				scopedSlots: t._u([{
					key: "fallback",
					fn: function () {
						return [s("TMCommentsWrapper", {
							attrs: {
								"comments-count": t.commentsCount
							}
						}, [s("TMPlaceholder", {
							attrs: {
								times: 3,
								type: "comment"
							}
						})], 1)]
					},
					proxy: !0
				}, {
					key: "default",
					fn: function () {
						return [s("TMArticleComments", {
							attrs: {
								"article-id": t.articleId,
								"cache-key": t.canCacheComments ? t.cacheKey : null,
								"is-loading": !1
							},
							on: {
								expandLimiter: function (e) {
									return t.$emit("expandLimiter", e)
								}
							}
						})]
					},
					proxy: !0
				}, {
					key: "tail",
					fn: function () {
						return [s("TMPlaceholder", {
							attrs: {
								times: 3,
								type: "comment"
							}
						})]
					},
					proxy: !0
				}])
			})] : s("TMArticleComments", {
				attrs: {
					"article-id": t.articleId,
					"cache-key": t.canCacheComments ? t.cacheKey : null,
					"is-loading": t.$fetchState.isLoading
				},
				on: {
					expandLimiter: function (e) {
						return t.$emit("expandLimiter", e)
					}
				}
			})], 2)
		},
			o = [],
			r = s("2f62"),
			c = s("ef70"),
			l = s("f15e"),
			u = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					ref: "root",
					staticClass: "tm-deferred-render"
				}, [s("streaming-element", {
					ref: "streamingElement"
				}, [t.readyToHydrate && t.rootElement ? s("TMClientHydration", {
					attrs: {
						element: t.rootElement
					}
				}, [t._t("default")], 2) : [t.shouldDisplayFallback ? t._t("fallback") : t._e(), t._v(" "), t.readyToHydrate ? t._e() : t._t("tail")]], 2)], 1)
			},
			m = [],
			d = s("6c10"),
			p = {
				name: "TMClientHydration",
				props: {
					element: {
						type: d["d"] ? Object : Element,
						required: !0
					}
				},
				created() {
					this._vnode = this.element
				},
				render() {
					return this.$scopedSlots.default()
				}
			},
			_ = p,
			h = s("2877"),
			g = Object(h["a"])(_, n, a, !1, null, null, null),
			f = g.exports,
			b = s("49b0");

		function T(t, e) {
			const s = Math.ceil(t.length / e),
				n = new Array(s);
			for (let a = s - 1, i = 0; a >= 0; i += e, a -= 1) n[a] = t.substr(i, e);
			return n
		}
		class v extends Error { }
		const E = ({
			stream: t,
			onFirstChunk: e,
			write: s
		}) => {
			const n = new TextDecoder("utf-8"),
				a = t.getReader();
			let i, o = !1,
				r = !1;
			const c = () => {
				o || a.cancel(), i && i(new v("Render cancelled manually"))
			},
				l = () => new Promise((t, c) => {
					i = t => {
						r = !0, c(t)
					};
					const l = 65536,
						u = [];
					let m = 0,
						d = [],
						p = !1,
						_ = !1;
					const h = () => {
						s(d.pop()), _ || (e(), _ = !0)
					},
						g = () => {
							0 === d.length && u.length - 1 >= m && (d = T(u[m], l), m += 1)
						},
						f = () => {
							r || (m === u.length && 0 === d.length && p ? t() : (requestAnimationFrame(f), g(), 0 !== d.length && h()))
						},
						b = ({
							done: t,
							value: e
						}) => {
							if (t) return o = !0, p = !0, void requestAnimationFrame(f);
							requestAnimationFrame(t => {
								f(t), a.read().then(b).catch(i)
							}), u.push(n.decode(e).normalize("NFC"))
						};
					a.read().then(b).catch(i)
				});
			return [l, c]
		};
		var S = {
			name: "TMDeferredRender",
			components: {
				TMClientHydration: f
			},
			props: {
				stream: {
					type: Object(b["a"])() ? ReadableStream : Object,
					required: !0
				},
				readyToHydrate: {
					type: Boolean,
					default: !0
				}
			},
			data() {
				return {
					rootElement: null,
					shouldDisplayFallback: !0,
					cancel: null
				}
			},
			mounted() {
				const {
					stream: t
				} = this, e = document.implementation.createHTMLDocument("comments"), [s, n] = E({
					stream: t,
					onFirstChunk: () => {
						this.shouldDisplayFallback = !1;
						const t = e.querySelector("streaming-element");
						this.$refs.streamingElement.replaceChild(t.children[0], this.$refs.streamingElement.childNodes[0])
					},
					write(t) {
						e.write(t)
					}
				});
				this.cancel = n, e.open(), e.write("<streaming-element>"), s().then(() => {
					e.write("</streaming-element>"), e.close(), this.rootElement = this.$refs.root.querySelector("streaming-element > *"), this.$emit("done")
				}).catch(t => {
					t instanceof v || this.$emit("error", t)
				})
			},
			beforeDestroy() {
				this.cancel && this.cancel()
			}
		},
			O = S,
			C = Object(h["a"])(O, u, m, !1, null, null, null),
			I = C.exports,
			A = s("5188"),
			y = s("0a5f");
		const L = !d["b"] || "fetch" in window && "TextDecoder" in window;
		var P = {
			name: "TMArticleCommentsOffloaded",
			components: {
				TMCommentsWrapper: l["a"],
				TMPlaceholder: A["a"],
				TMDeferredRender: I,
				TMArticleComments: c["a"]
			},
			props: {
				articleId: {
					type: String,
					required: !0
				},
				ssr: {
					type: Boolean,
					default: !1
				},
				canStreamComments: {
					type: Boolean,
					default: !0
				},
				canCacheComments: {
					type: Boolean,
					default: !1
				}
			},
			asyncData({
				store: t
			}) {
				const {
					articleId: e
				} = this, s = [];
				return this.article.hasPinnedComments && s.push(t.dispatch("comments/getPinnedComments", e)), this.canCacheComments ? s.push(t.dispatch("comments/getGuestComments", e)) : s.push(t.dispatch("comments/getComments", {
					articleId: e,
					nocount: this.commentsStreamingEnabled
				})), Promise.all(s)
			},
			data() {
				return {
					isLoadingCommentsStream: !0,
					commentsStream: null,
					hasHydratableElement: !1,
					shouldFallbackToClientRendering: !1
				}
			},
			computed: {
				...Object(r["c"])("me", ["isLoggedIn"]),
				...Object(r["c"])("articlesList", ["getArticleById"]),
				...Object(r["c"])("comments", ["getCommentsCacheKey"]),
				cacheKey() {
					return this.getCommentsCacheKey(this.articleId)
				},
				article() {
					return this.getArticleById(this.articleId)
				},
				commentsCount() {
					return this.article && this.article.statistics ? this.article.statistics.commentsCount : null
				},
				shouldOffload() {
					return !(!d["b"] || !this.commentsStreamingEnabled || this.hasHydratableElement || this.shouldFallbackToClientRendering) && (this.canStreamComments && L)
				},
				commentsStreamingEnabled() {
					return this.$getFeatureFlag("COMMENTS_STREAMING_ENABLED")
				}
			},
			beforeMount() {
				this.hasHydratableElement = Boolean(this._vnode || this.$el), this.shouldOffload ? this.$watch(() => this.$fetchState.isLoading, t => {
					t || this.loadCommentsStream()
				}, {
					immediate: !0
				}) : this.$watch(() => this.$fetchState.isLoading, t => {
					t || this.readVisitorComments()
				}, {
					immediate: !0
				})
			},
			methods: {
				loadCommentsStream() {
					this.isLoadingCommentsStream = !0;
					const {
						articleId: t,
						cacheKey: e,
						langOptions: {
							hl: s
						}
					} = this;
					Object(y["j"])({
						articleId: t,
						cacheKey: e,
						hl: s
					}).then(t => {
						this.isLoadingCommentsStream = !1, this.commentsStream = t
					}).catch(() => {
						this.shouldFallbackToClientRendering = !0, this.isLoadingCommentsStream = !1
					})
				},
				onError(t) {
					throw this.$toast.error(this.msg("COMMENT_RENDER_FAILED")), t
				},
				readVisitorComments() {
					this.isLoggedIn && !this.canCacheComments && Object(y["r"])(this.articleId)
				},
				onDone() {
					this.readVisitorComments()
				}
			}
		},
			N = P,
			R = Object(h["a"])(N, i, o, !1, null, null, null);
		e["a"] = R.exports
	},
	2517: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-section-name"
			}, [t.backRouteName ? s("div", {
				staticClass: "tm-section-name__back",
				on: {
					click: t.goBack
				}
			}, [s("TMSvgImg", {
				staticClass: "icon_arrow-back icon_arrow-back_section",
				attrs: {
					id: "arrow-back"
				}
			}), t._v(" "), s("h1", {
				staticClass: "tm-section-name__text"
			}, [t._v("\n      " + t._s(t.name) + "\n    ")])], 1) : t.route ? s("router-link", {
				staticClass: "tm-section-name__link",
				attrs: {
					to: t.route
				}
			}, [t._v("\n    " + t._s(t.name) + "\n  ")]) : s("h1", {
				staticClass: "tm-section-name__text"
			}, [t._v("\n    " + t._s(t.name) + "\n  ")]), t._v(" "), t._t("default")], 2)
		},
			a = [],
			i = s("b7d0"),
			o = {
				name: "TMSectionName",
				components: {
					TMSvgImg: i["a"]
				},
				props: {
					name: {
						required: !0,
						type: String
					},
					route: {
						type: Object,
						default: null
					},
					backRouteName: {
						default: null,
						type: String
					},
					backRouteQuery: {
						default: null,
						type: Object
					}
				},
				methods: {
					goBack() {
						this.backRouteName ? this.$router.push({
							name: this.backRouteName,
							query: this.backRouteQuery
						}) : this.$router.go(-1)
					}
				}
			},
			r = o,
			c = (s("143a"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"263a": function (t, e, s) {
		"use strict";
		s("4522")
	},
	"277e": function (t, e, s) {
		"use strict";
		s("432d")
	},
	2907: function (t, e, s) { },
	2959: function (t, e, s) { },
	"2a8c": function (t, e, s) {
		"use strict";
		var n, a, i = {
			name: "TMIntersect",
			props: {
				threshold: {
					type: Array,
					required: !1,
					default: () => [0, .2]
				},
				root: {
					type: "undefined" !== typeof HTMLElement ? HTMLElement : Object,
					required: !1,
					default: null
				},
				rootMargin: {
					type: String,
					required: !1,
					default: "0px 0px 0px 0px"
				}
			},
			mounted() {
				if (this.observer = new IntersectionObserver(([{
					target: t,
					isIntersecting: e
				}]) => {
					const s = () => this.observer.unobserve(t);
					e ? this.$emit("enter", {
						unobserve: s
					}) : this.$emit("leave", {
						unobserve: s
					})
				}, {
					threshold: this.threshold,
					root: this.root,
					rootMargin: this.rootMargin
				}), this.$slots.default && this.$slots.default.length > 1) throw new Error("You may only wrap one element in a <intersect> component.");
				if (!this.$slots.default || this.$slots.default.length < 1) throw new Error("You must have one child inside a <intersect> component.");
				this.observer.observe(this.$slots.default[0].elm)
			},
			destroyed() {
				this.observer.disconnect()
			},
			render() {
				return this.$slots.default ? this.$slots.default[0] : null
			}
		},
			o = i,
			r = s("2877"),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["a"] = c.exports
	},
	"2abc": function (t, e, s) {
		"use strict";

		function n(t) {
			return t.toISOString().slice(0, 10)
		}

		function a(t) {
			const e = new Date,
				s = new Date(e.getTime() - 86400 * t * 1e3);
			return {
				date_from: n(s),
				date_to: n(e)
			}
		}

		function i(t) {
			return +new Date(t) / 1e3
		}

		function o(t, e) {
			return new Date(t.getTime() + 1e3 * e * 60 * 60 * 24)
		}
		s.d(e, "b", (function () {
			return n
		})), s.d(e, "d", (function () {
			return a
		})), s.d(e, "c", (function () {
			return i
		})), s.d(e, "a", (function () {
			return o
		}))
	},
	"2be1": function (t, e, s) {
		"use strict";
		s.d(e, "b", (function () {
			return i
		})), s.d(e, "c", (function () {
			return o
		})), s.d(e, "d", (function () {
			return r
		})), s.d(e, "g", (function () {
			return c
		})), s.d(e, "a", (function () {
			return l
		})), s.d(e, "f", (function () {
			return u
		})), s.d(e, "e", (function () {
			return m
		}));
		var n = s("2105"),
			a = s("4dcc");

		function i(t, e) {
			return Object(n["b"])(Object(a["a"])("docs/ppa/" + t, "v2"), e)
		}

		function o(t) {
			return Object(n["b"])(Object(a["a"])("ppa/cards/" + t, "v2"))
		}

		function r(t, e) {
			return Object(n["b"])(Object(a["a"])("ppa/transactions/" + t, "v2"), {
				page_num: e
			})
		}

		function c(t) {
			return Object(n["c"])(Object(a["a"])("ppa/withdraw", "v2"), {
				value: t
			})
		}

		function l(t) {
			return Object(n["c"])(Object(a["a"])("ppa/profile", "v2"), t)
		}

		function u(t) {
			return Object(n["c"])(Object(a["a"])("ppa/profile/update", "v2"), t)
		}

		function m() {
			return Object(n["c"])(Object(a["a"])("ppa/join", "v2"))
		}
	},
	"2c67": function (t, e, s) { },
	"2c95": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-article-body",
				attrs: {
					"data-gallery-root": ""
				}
			}, [t.article.metadata ? s("TMArticleTrackingPixels", {
				attrs: {
					links: t.article.metadata.customTrackerLinks
				}
			}) : t._e(), t._v(" "), s("TMArticleFormattedBody", {
				attrs: {
					id: "post-content-body",
					"article-text": t.article.textHtml,
					"should-format": !t.isMegapostV1,
					version: t.editorVersion
				}
			}), t._v(" "), t.galleryImages.length ? s("TMGallery", {
				attrs: {
					"images-list": t.galleryImages
				}
			}) : t._e(), t._v(" "), t.article.polls && t.article.polls.length ? t._l(t.article.polls, (function (t) {
				return s("TMArticlePoll", {
					key: t.id,
					attrs: {
						poll: t
					}
				})
			})) : t._e()], 2)
		},
			a = [],
			i = s("14b7"),
			o = i["a"],
			r = (s("0a93"), s("2877")),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["a"] = c.exports
	},
	"2df0": function (t, e, s) { },
	"2e8a": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-entity-image"
			}, [t.hasPlaceholderImage ? s("TMSvgImg", {
				staticClass: "tm-image-placeholder",
				class: "tm-image-placeholder_" + t.color,
				attrs: {
					id: "placeholder-" + t.type,
					color: t.color,
					height: t.size,
					size: t.size,
					type: t.type,
					width: t.size
				}
			}) : s("img", {
				staticClass: "tm-entity-image__pic",
				attrs: {
					alt: "",
					height: t.size,
					loading: t.lazy ? "lazy" : null,
					src: t.image,
					width: t.size
				}
			})], 1)
		},
			a = [],
			i = s("b7d0"),
			o = {
				name: "TMEntityImage",
				components: {
					TMSvgImg: i["a"]
				},
				props: {
					alias: {
						type: String,
						default: null
					},
					image: {
						type: String,
						default: null
					},
					type: {
						type: String,
						required: !0
					},
					lazy: {
						type: Boolean,
						default: !1
					},
					size: {
						type: [Number, String],
						default: null
					}
				},
				computed: {
					hasPlaceholderImage() {
						return !this.image || this.image.indexOf("stub-user-middle.gif") > -1 || this.image.indexOf("stub-user-small.gif") > -1
					},
					color() {
						const t = ["blue", "pink", "lilac", "green"];
						return t[this.hashNumber % t.length]
					},
					hashNumber() {
						return this.alias ? this.alias.split("").reduce((t, e) => t + e.charCodeAt(0), 0) : 0
					}
				}
			},
			r = o,
			c = (s("4edc"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"2ea4": function (t, e, s) { },
	"30ab": function (t, e, s) {
		"use strict";
		s("b931")
	},
	"30d6": function (t, e, s) {
		"use strict";
		s("ded5")
	},
	"30f2": function (t, e, s) {
		"use strict";
		s("d7dd")
	},
	"31ba": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("span", {
				staticClass: "tm-user-info"
			}, [s("router-link", {
				staticClass: "tm-user-info__userpic",
				attrs: {
					title: t.author.alias || t.author.login,
					to: t.authorRoute
				},
				nativeOn: {
					mouseenter: function (e) {
						return t.$emit("mouseenter", e)
					},
					mouseleave: function (e) {
						return t.$emit("mouseleave", e)
					}
				}
			}, [s("TMEntityImage", {
				attrs: {
					alias: t.author.alias || t.author.login,
					image: t.getAuthorAvatar,
					size: 24,
					type: "user"
				}
			})], 1), t._v(" "), s("span", {
				staticClass: "tm-user-info__user"
			}, [s("router-link", {
				staticClass: "tm-user-info__username",
				attrs: {
					to: t.authorRoute
				},
				nativeOn: {
					mouseenter: function (e) {
						return t.$emit("mouseenter", e)
					},
					mouseleave: function (e) {
						return t.$emit("mouseleave", e)
					}
				}
			}, [t._v("\n      " + t._s(t.author.alias || t.author.login) + "\n    ")]), t._v(" "), t._t("default")], 2)], 1)
		},
			a = [],
			i = s("2e8a"),
			o = s("43bc"),
			r = {
				name: "TMUserInfo",
				components: {
					TMEntityImage: i["a"]
				},
				props: {
					author: {
						required: !0,
						type: Object
					},
					avatar: {
						type: String,
						default: null
					}
				},
				computed: {
					getAuthorAvatar() {
						const t = this.author.avatarUrl || this.avatar;
						return Object(o["c"])(t, 32)
					},
					authorRoute() {
						return {
							name: "USER_PROFILE",
							params: {
								login: this.author.alias || this.author.login,
								hl: this.$route.params.hl
							}
						}
					}
				}
			},
			c = r,
			l = (s("bc28"), s("2877")),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	"32f0": function (t, e, s) {
		"use strict";

		function n(t) {
			const e = document.createElement("DIV");
			return e.innerHTML = t, e.textContent || e.innerText || ""
		}

		function a(t) {
			return t.replace(/(<([^>]+)>)/gi, "")
		}
		s.d(e, "a", (function () {
			return n
		})), s.d(e, "b", (function () {
			return a
		}))
	},
	"335e": function (t, e, s) { },
	"340c": function (t, e, s) {
		"use strict";
		s("65f3")
	},
	"355c": function (t, e, s) { },
	3619: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return !t.isLoading && t.items && 0 !== t.items.length ? s("TMProjectBlock", {
				attrs: {
					"footer-link": t.footerLink,
					"footer-title": t.msg("VACANCIES_ALL"),
					title: t.msg("VACANCIES_TITLE", {
						company: t.companyTitle ? t.companyTitle : "none"
					}),
					"title-link": t.titleLink,
					variant: "vacancies"
				},
				on: {
					click: function (e) {
						return t.logGa("vacancies")
					}
				}
			}, [s("TMProjectBlockItems", {
				attrs: {
					items: t.items,
					"search-params": t.itemParams
				},
				on: {
					click: function (e) {
						return t.logGa("post")
					}
				}
			})], 1) : t.isLoading ? s("TMPlaceholder", {
				attrs: {
					type: "inset_vacancies"
				}
			}) : t._e()
		},
			a = [],
			i = s("5188"),
			o = s("d959"),
			r = s("7e83"),
			c = s("996e"),
			l = s("38de"),
			u = s("6f23"),
			m = s("4462"),
			d = {
				name: "TMProjectBlockVacancies",
				components: {
					TMProjectBlockItems: r["a"],
					TMProjectBlock: o["a"],
					TMPlaceholder: i["a"]
				},
				props: {
					location: {
						type: String,
						required: !0
					},
					companyTitle: {
						type: String,
						default: null
					},
					companyAlias: {
						type: String,
						default: null
					},
					careerAlias: {
						type: String,
						default: null
					},
					hubs: {
						type: Array,
						default: () => []
					},
					tags: {
						type: Array,
						default: () => []
					}
				},
				data() {
					return {
						isLoading: !0,
						items: null
					}
				},
				computed: {
					isCompanyVacancies() {
						return this.careerAlias && this.companyAlias
					},
					utm() {
						let t = "vacancies_postlist";
						return this.isCompanyVacancies && (t = "vacancies_postlist_company"), {
							medium: "habr_block",
							source: "habr_mob",
							campaign: t
						}
					},
					itemParams() {
						return c["a"].toUtm({
							...this.utm,
							content: "vacancy"
						})
					},
					gaAction() {
						let t = "career_" + this.location;
						return this.isCompanyVacancies && (t += "_company"), t
					},
					baseLink() {
						return Object(l["a"])(this.careerAlias)
					},
					titleLink() {
						const t = c["a"].toUtm({
							...this.utm,
							content: "vacancies"
						}),
							e = new URL(this.baseLink);
						return Object.keys(t).forEach(s => e.searchParams.append(s, t[s])), e.href
					},
					footerLink() {
						const t = c["a"].toUtm({
							...this.utm,
							content: "vacancies_all"
						}),
							e = new URL(this.baseLink);
						return Object.keys(t).forEach(s => e.searchParams.append(s, t[s])), e.href
					}
				},
				mounted() {
					const {
						companyAlias: t,
						tags: e,
						hubs: s,
						langOptions: {
							hl: n
						}
					} = this;
					Object(m["e"])({
						companyAlias: t,
						tags: e,
						hubs: s,
						hl: n
					}).then(({
						items: t
					}) => {
						this.items = t, this.isLoading = !1, 0 === this.items.length && this.$emit("loadedEmpty")
					}).catch(() => {
						this.$emit("loadFailed"), this.isLoading = !1
					})
				},
				methods: {
					logGa(t) {
						Object(u["c"])("tm_block", this.gaAction, t)
					}
				}
			},
			p = d,
			_ = s("2877"),
			h = Object(_["a"])(p, n, a, !1, null, null, null);
		e["a"] = h.exports
	},
	3647: function (t, e, s) {
		"use strict";
		s("e87f")
	},
	3658: function (t, e, s) { },
	"36e8": function (t, e, s) { },
	"36e9": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-company-basic-info"
			}, [t.companyInfo.foundationDate ? s("TMDescriptionList", {
				attrs: {
					title: t.msg("PROFILE_COMPANY_TITLE_FOUNDATION_DATE"),
					variant: t.variant
				}
			}, [t.foundationHasFullDate ? s("TMDatetime", {
				attrs: {
					date: t.foundationDate
				}
			}) : s("span", [t._v("\n      " + t._s(t.foundationDate) + "\n    ")])], 1) : t._e(), t._v(" "), t.companyInfo.location && t.companyInfo.location.country ? s("TMDescriptionList", {
				attrs: {
					title: t.msg("PROFILE_COMPANY_TITLE_LOCATION"),
					variant: t.variant
				}
			}, [t._v("\n    " + t._s(t.companyInfo.location.country.title) + "\n  ")]) : t._e(), t._v(" "), t.companyInfo.siteUrl ? s("TMDescriptionList", {
				attrs: {
					title: t.msg("PROFILE_COMPANY_TITLE_WEBSITE"),
					variant: t.variant
				}
			}, [s("a", {
				staticClass: "tm-company-basic-info__link",
				attrs: {
					href: t.companyInfo.siteUrl,
					target: "_blank"
				}
			}, [t._v("\n      " + t._s(t.hostname) + "\n    ")])]) : t._e(), t._v(" "), t.companyInfo.staffNumber ? s("TMDescriptionList", {
				attrs: {
					title: t.msg("PROFILE_COMPANY_TITLE_EMPLOYEES_COUNT"),
					variant: t.variant
				}
			}, [t._v("\n    " + t._s(t.companyInfo.staffNumber) + "\n  ")]) : t._e(), t._v(" "), t.companyInfo.registrationDate ? s("TMDescriptionList", {
				attrs: {
					title: t.msg("PROFILE_COMPANY_TITLE_REGISTRATION_DATE"),
					variant: t.variant
				}
			}, [s("TMDatetime", {
				attrs: {
					date: new Date(t.companyInfo.registrationDate)
				}
			})], 1) : t._e(), t._v(" "), t.companyInfo.representativeUser ? s("TMDescriptionList", {
				attrs: {
					title: t.msg("PROFILE_COMPANY_TITLE_REPRESENTIVE_USER"),
					variant: t.variant
				}
			}, [s("router-link", {
				staticClass: "tm-company-basic-info__link",
				attrs: {
					to: t.representativeUserRoute
				}
			}, [t._v("\n      " + t._s(t.representativeUserTitle) + "\n    ")])], 1) : t._e()], 1)
		},
			a = [],
			i = s("2f62"),
			o = s("8fab"),
			r = s("46ac"),
			c = {
				name: "TMCompanyBasicInfo",
				components: {
					TMDescriptionList: r["a"],
					TMDatetime: o["a"]
				},
				props: {
					companyInfo: {
						type: Object,
						default: null
					},
					variant: {
						type: String,
						default: "base"
					}
				},
				computed: {
					...Object(i["c"])("i18n", ["msg"]),
					hostname() {
						const t = new URL(this.companyInfo.siteUrl);
						return t.hostname
					},
					foundationHasFullDate() {
						const {
							day: t,
							month: e,
							year: s
						} = this.companyInfo.foundationDate;
						return t && e && s
					},
					foundationDate() {
						const {
							day: t,
							month: e,
							year: s
						} = this.companyInfo.foundationDate;
						if (this.foundationHasFullDate) {
							const n = parseInt(e, 10) - 1;
							return new Date(s, n, t)
						}
						return s
					},
					representativeUserTitle() {
						const {
							companyInfo: {
								representativeUser: t
							}
						} = this;
						return t.fullname || t.alias
					},
					representativeUserRoute() {
						return {
							name: "USER_PROFILE",
							params: {
								login: this.companyInfo.representativeUser.alias
							}
						}
					}
				}
			},
			l = c,
			u = (s("239d"), s("2877")),
			m = Object(u["a"])(l, n, a, !1, null, null, null);
		e["a"] = m.exports
	},
	3785: function (t, e, s) { },
	"38ab": function (t, e, s) { },
	"38bd": function (t, e, s) {
		"use strict";
		s("5c1e")
	},
	"38de": function (t, e, s) {
		"use strict";

		function n(t) {
			return t ? "https://localhost:7103/career-habr/companies/{company}/vacancies".replace("{company}", t) : "https://localhost:7103/career-habr/catalog"
		}
		s.d(e, "a", (function () {
			return n
		}))
	},
	3931: function (t, e, s) {
		"use strict";
		s("4f61")
	},
	"3a37": function (t, e, s) {
		"use strict";
		s("6714")
	},
	"3ad0": function (t, e, s) { },
	"3b4c": function (t, e, s) {
		"use strict";
		s("e33f")
	},
	"3cb0": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				directives: [{
					name: "hotkey",
					rawName: "v-hotkey",
					value: {
						esc: function () {
							return t.$emit("close")
						}
					},
					expression: "{ esc: () => $emit('close') }"
				}],
				ref: "wrapper",
				staticClass: "tm-popover",
				class: t.bem("tm-popover", {
					variant: t.variant
				})
			}, [t._t("default")], 2)
		},
			a = [],
			i = s("39c3"),
			o = s("cee5"),
			r = {
				name: "TMPopover",
				props: {
					placement: {
						type: String,
						default: "bottom-start"
					},
					offset: {
						type: Array,
						default: () => [0, 8]
					},
					root: {
						type: "undefined" === typeof window ? null : HTMLElement,
						required: !0
					},
					variant: {
						type: String,
						default: null
					}
				},
				data() {
					return {
						popper: null
					}
				},
				mounted() {
					document.addEventListener("click", this.handleOuterClick), this.popper = Object(i["a"])(this.root, this.$refs.wrapper, {
						placement: this.placement,
						modifiers: [{
							name: "offset",
							options: {
								offset: this.offset
							}
						}]
					})
				},
				beforeDestroy() {
					if (document.removeEventListener("click", this.handleOuterClick), !this.popper) return;
					const t = this.$refs.wrapper;
					getComputedStyle(t).transition ? (t.addEventListener("transitionend", () => {
						this.popper.destroy()
					}), t.addEventListener("transitioncancel", () => {
						this.popper.destroy()
					})) : this.popper.destroy()
				},
				methods: {
					bem: o["a"],
					handleOuterClick(t) {
						this.root.contains(t.target) || this.$refs.wrapper.contains(t.target) || this.$emit("close")
					}
				}
			},
			c = r,
			l = (s("f877"), s("2877")),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	"3e27": function (t, e, s) {
		"use strict";
		s("b16d")
	},
	"3eb4": function (t, e, s) {
		"use strict";
		s("1dc4")
	},
	"3eef": function (t, e, s) {
		"use strict";
		s("f2ed")
	},
	"3f16": function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return c
		}));
		var n = s("6d3b"),
			a = s("8343"),
			i = s("5dc8"),
			o = s("cc84");
		const r = t => {
			const e = t.getElementsByClassName("gallery-wrapper"),
				s = [].slice.call(e);
			return s
		},
			c = t => {
				n["a"].use([a["a"], i["a"], o["a"]]);
				const e = r(t),
					s = [],
					c = [];
				return e.forEach(t => {
					const e = t.querySelector(".thumb-gallery"),
						a = Array.from(e.querySelectorAll(".swiper-slide")).length > 8;
					e && !a && e.classList.add("thumb-gallery_nav_off");
					const i = new n["a"](e, {
						spaceBetween: 12,
						slidesPerView: "auto",
						freeMode: !0,
						threshold: 10,
						multipleActiveThumbs: !1,
						watchSlidesProgress: !0,
						observer: !0,
						navigation: {
							nextEl: ".swiper-next",
							prevEl: ".swiper-prev"
						}
					});
					c.push(i);
					const o = new n["a"](t.querySelector(".gallery"), {
						slidesPerView: 1,
						spaceBetween: 0,
						observer: !0,
						observeParents: !0,
						watchSlidesProgress: !0,
						navigation: {
							nextEl: ".swiper-next",
							prevEl: ".swiper-prev"
						},
						thumbs: {
							swiper: i
						}
					});
					s.push(o)
				}), s
			}
	},
	"3f1a": function (t, e, s) { },
	"3f5e": function (t, e, s) { },
	"3fbf": function (t, e, s) {
		"use strict";
		s("9b16")
	},
	"3fe5": function (t, e, s) { },
	4043: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("li", {
				staticClass: "tm-context-menu-list__item"
			}, [s(t.tag, t._b({
				tag: "component",
				class: t.itemClassNames
			}, "component", t.$attrs, !1), [t._t("default")], 2)], 1)
		},
			a = [],
			i = s("cee5"),
			o = {
				name: "TMContextMenuListItem",
				inheritAttrs: !1,
				props: {
					tag: {
						type: String,
						default: "button"
					},
					variant: {
						type: String,
						default: null
					}
				},
				computed: {
					itemClassNames() {
						return ["tm-context-menu-list__item-inner", ...this.bem("tm-context-menu-list__item-inner", {
							[this.variant]: !0
						}), {
								"tm-context-menu-list__button": "button" === this.tag,
								"tm-context-menu-list__external-link": ["a", "router-link"].includes(this.tag)
							}]
					}
				},
				methods: {
					bem: i["a"]
				}
			},
			r = o,
			c = (s("dca4"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"41b7": function (t, e, s) {
		"use strict";
		s("96cb")
	},
	4274: function (t, e, s) {
		"use strict";
		s("2907")
	},
	"42d8": function (t, e, s) { },
	"432d": function (t, e, s) { },
	4344: function (t, e, s) {
		"use strict";
		s("8a7c")
	},
	"43bc": function (t, e, s) {
		"use strict";
		s.d(e, "c", (function () {
			return r
		})), s.d(e, "b", (function () {
			return c
		})), s.d(e, "a", (function () {
			return u
		}));
		const n = "habrastorage.org",
			a = /\/r\/w\w+\//,
			i = 780,
			o = [390, 780, 1560];

		function r(t, e = 120, s = !1) {
			const i = t,
				o = s ? "q1" : "",
				r = i && "string" === typeof i && "gif" === t.toLowerCase().split(".").pop();
			return r ? i : i && -1 !== i.indexOf(n) ? i.replace(a, "/").replace(n + "/", `${n}/r/w${e}${o}/`) : i
		}

		function c(t) {
			const e = t.getElementsByTagName("img"),
				s = [].slice.call(e);
			return s
		}

		function l() {
			if (window) {
				const {
					innerWidth: t,
					devicePixelRatio: e
				} = window, s = t * e, n = o.reduce((t, e) => Math.abs(e - s) < Math.abs(t - s) ? e : t);
				return n
			}
			return i
		}

		function u(t) {
			const e = l();
			return r(t, e)
		}
	},
	4462: function (t, e, s) {
		"use strict";
		s.d(e, "e", (function () {
			return i
		})), s.d(e, "d", (function () {
			return o
		})), s.d(e, "a", (function () {
			return r
		})), s.d(e, "b", (function () {
			return c
		})), s.d(e, "c", (function () {
			return l
		}));
		var n = s("2105"),
			a = s("4dcc");

		function i(t = {}) {
			const {
				count: e,
				hubs: s = [],
				tags: i = [],
				companyAlias: o,
				hl: r
			} = t;
			return Object(n["b"])(Object(a["a"])("inset/vacancies", "v2"), {
				count: e,
				hubs: s.slice(0, 10).join(","),
				tags: i.slice(0, 10).join(","),
				companyAlias: o,
				hl: r
			})
		}

		function o(t = {}) {
			const {
				count: e,
				hubs: s,
				tags: i,
				hl: o
			} = t;
			return Object(n["b"])(Object(a["a"])("inset/tasks", "v2"), {
				count: e,
				hubs: s.slice(0, 10).join(","),
				tags: i.slice(0, 10).join(","),
				hl: o
			})
		}

		function r(t = {}) {
			const {
				count: e,
				hubs: s = [],
				tags: i = [],
				hl: o
			} = t;
			return Object(n["b"])(Object(a["a"])("inset/courses", "v2"), {
				count: e,
				hubs: s.slice(0, 10).join(","),
				tags: i.slice(0, 10).join(","),
				hl: o
			})
		}

		function c({
			count: t,
			tags: e = [],
			hl: s
		}) {
			return Object(n["b"])(Object(a["a"])("inset/questions", "v2"), {
				count: t,
				tags: e.slice(0, 5).join(","),
				hl: s
			})
		}

		function l() {
			return Object(n["b"])(Object(a["a"])("inset/salary_distribution", "v2"))
		}
	},
	4505: function (t, e) {
		t.exports = "/img/megazord-v25.cf9e6cfb.svg"
	},
	4522: function (t, e, s) { },
	"45a5": function (t, e, s) { },
	4676: function (t, e, s) { },
	"467e": function (t, e, s) {
		"use strict";
		s("a852")
	},
	"46ac": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("dl", {
				staticClass: "tm-description-list",
				class: t.bem("tm-description-list", {
					variant: t.variant
				})
			}, [s("dt", {
				staticClass: "tm-description-list__title",
				class: t.bem("tm-description-list__title", {
					variant: t.variant
				}),
				domProps: {
					textContent: t._s(t.title)
				}
			}), t._v(" "), s("dd", {
				staticClass: "tm-description-list__body",
				class: t.bem("tm-description-list__body", {
					variant: t.variant
				})
			}, [t._t("default")], 2)])
		},
			a = [],
			i = s("cee5"),
			o = {
				name: "TMDescriptionList",
				props: {
					title: {
						type: String,
						required: !0
					},
					variant: {
						type: String,
						default: "base"
					}
				},
				methods: {
					bem: i["a"]
				}
			},
			r = o,
			c = (s("c9b7"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	4754: function (t, e, s) {
		"use strict";
		s("1f62")
	},
	"47ba": function (t, e, s) { },
	"47e8": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return t.hasRss ? s("button", {
				staticClass: "tm-rss-button",
				class: "tm-rss-button_" + t.variant
			}, [s("TMSvgIcon", {
				staticClass: "tm-rss-button__icon",
				attrs: {
					id: "rss"
				},
				on: {
					click: t.copyRssLink
				}
			})], 1) : t._e()
		},
			a = [],
			i = s("4a90"),
			o = s("1fa6"),
			r = {
				name: "TMRssButton",
				components: {
					TMSvgIcon: i["a"]
				},
				props: {
					variant: {
						type: String,
						default: "default"
					}
				},
				computed: {
					hasRss() {
						return Boolean(this.$route.meta.rssLink)
					}
				},
				methods: {
					copyRssLink() {
						const t = document.querySelector('link[name="rss"]');
						if (t) {
							const e = t.getAttribute("href");
							Object(o["a"])(e), this.$toast.success(this.msg("SOCIAL_COPIED"))
						}
					}
				}
			},
			c = r,
			l = (s("4754"), s("2877")),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	"485d": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMSeparatedList", {
				attrs: {
					list: t.tagsWithRoutes,
					title: t.title
				},
				scopedSlots: t._u([{
					key: "default",
					fn: function (e) {
						var n = e.item;
						return [s("router-link", {
							staticClass: "tm-tags-list__link",
							attrs: {
								to: n.route
							},
							domProps: {
								innerHTML: t._s(n.titleHtml)
							}
						})]
					}
				}])
			})
		},
			a = [],
			i = s("b848"),
			o = {
				name: "TMTagsList",
				components: {
					TMSeparatedList: i["a"]
				},
				props: {
					tags: {
						type: Array,
						required: !0
					},
					title: {
						type: String,
						required: !0
					}
				},
				computed: {
					tagsWithRoutes() {
						return this.tags.map(t => ({
							...t,
							route: {
								name: "SEARCH_QUERY_RESULTS",
								query: {
									target_type: "posts",
									order: "relevance",
									q: `[${t.titleHtml}]`
								}
							}
						}))
					}
				}
			},
			r = o,
			c = (s("30d6"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"49b0": function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return a
		}));
		var n = s("6c10");

		function a() {
			return n["b"] && !n["e"] && window.ReadableStream
		}
	},
	"4a90": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s(t.tag, {
				tag: "component",
				staticClass: "tm-svg-icon__wrapper",
				attrs: {
					title: t.title
				},
				on: {
					click: function (e) {
						return t.$emit("click")
					},
					mouseover: function (e) {
						return t.$emit("mouseover")
					}
				}
			}, [s("TMSvgImg", {
				staticClass: "tm-svg-icon",
				attrs: {
					id: t.id,
					size: t.size,
					title: t.title
				}
			})], 1)
		},
			a = [],
			i = s("b7d0"),
			o = {
				name: "TMSvgIcon",
				components: {
					TMSvgImg: i["a"]
				},
				props: {
					tag: {
						default: "span",
						type: String
					},
					id: {
						required: !0,
						type: String
					},
					size: {
						default: "16",
						type: String
					},
					title: {
						default: null,
						type: String
					}
				}
			},
			r = o,
			c = (s("1e9c"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"4a9c": function (t, e, s) { },
	"4ac0": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMIntersect", {
				attrs: {
					threshold: [.5]
				},
				on: {
					enter: t.trackView
				}
			}, [s("div", {
				staticClass: "tm-promo-post-link",
				class: t.bem("tm-promo-post-link", {
					appearance: t.appearance
				})
			}, [s("a", {
				staticClass: "tm-promo-post-link__link",
				class: t.bem("tm-promo-post-link__link", {
					appearance: t.appearance
				}),
				attrs: {
					href: t.promoPost.link.url
				},
				domProps: {
					textContent: t._s(t.promoPost.title)
				},
				on: {
					click: function (e) {
						return t.$emit("click")
					}
				}
			}), t._v(" "), s("div", {
				staticClass: "tm-promo-post-link__label"
			}, [t._v("\n      " + t._s(t.promoPost.label) + "\n      "), t.promoPost.external ? s("TMExternalIcon", {
				staticClass: "tm-promo-post-link__external",
				attrs: {
					height: "12",
					width: "12"
				}
			}) : t._e()], 1)])])
		},
			a = [],
			i = s("2a8c"),
			o = s("cee5"),
			r = s("8a58");
		const c = () => s.e("chunk-2d21042a").then(s.t.bind(null, "b6aa", 7));
		var l = {
			name: "TMPromoPostLink",
			components: {
				TMIntersect: i["a"],
				TMExternalIcon: c
			},
			props: {
				appearance: {
					type: String,
					default: "most-reading"
				},
				promoPost: {
					type: Object,
					required: !0
				}
			},
			data() {
				return {
					tracked: !1
				}
			},
			methods: {
				bem: o["a"],
				trackView() {
					const t = this.promoPost.events && this.promoPost.events.view;
					t && !this.tracked && (this.tracked = !0, Object(r["b"])([t]))
				}
			}
		},
			u = l,
			m = (s("95ea"), s("2877")),
			d = Object(m["a"])(u, n, a, !1, null, null, null);
		e["a"] = d.exports
	},
	"4cf9": function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return c
		})), s.d(e, "b", (function () {
			return l
		}));
		const n = [];
		let a = !1;
		const i = {
			LEFT: 50,
			RIGHT: -50
		};

		function o(t) {
			return {
				delta: t,
				isLeft: t > i.LEFT,
				isRight: t < i.RIGHT
			}
		}

		function r(t) {
			return {
				delta: t
			}
		}

		function c(t) {
			if (n.push(t), !a) {
				let t = 0;
				a = !0, window.addEventListener("touchstart", e => {
					const s = e.changedTouches[0];
					t = s.pageX
				}), window.addEventListener("touchmove", e => {
					const s = e.changedTouches[0],
						a = t - s.pageX,
						i = r(a);
					n.forEach(t => t(i))
				}), window.addEventListener("touchend", e => {
					const s = e.changedTouches[0];
					t -= s.pageX;
					const a = o(t);
					n.forEach(t => t(a))
				})
			}
			return t
		}

		function l(t) {
			let e = null;
			n.some((s, n) => s === t && (e = n, !0)), null !== e && n.splice(e)
		}
	},
	"4dcc": function (t, e, s) {
		"use strict";

		function n(t, e = "v1") {
			return encodeURI(`https://localhost:7103/kek/${e}/${t}`)
		}
		s.d(e, "a", (function () {
			return n
		}))
	},
	"4de5": function (t, e) {
		function s({
			hubs: t
		}) {
			if (!t) return [];
			const e = t.filter(t => "corporative" === t.type);
			return e.length > 0 && e[0].alias
		}

		function n(t) {
			const {
				isCorporative: e
			} = t, n = s(t);
			if (e && "news" !== t.postType && "megaproject" !== t.postType) return `company/${n}/blog`;
			switch (t.postType) {
				case "sandbox":
					return "sandbox";
				case "megaproject":
					return "article";
				case "news":
					return e ? `company/${n}/news/t` : "news/t";
				default:
					return "post"
			}
		}

		function a(t, e = "https://localhost:7103") {
			const s = n(t),
				{
					lang: a,
					id: i
				} = t;
			return `${e}/${a}/${s}/${i}/`
		}
		t.exports = {
			articleCanonical: a
		}
	},
	"4e61": function (t, e, s) { },
	"4edc": function (t, e, s) {
		"use strict";
		s("1cb9")
	},
	"4f1f": function (t, e, s) { },
	"4f61": function (t, e, s) { },
	"4f8a": function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return i
		})), s.d(e, "b", (function () {
			return o
		}));
		const n = 768,
			a = 1024,
			i = () => {
				const t = document.body.clientWidth;
				return t < n ? "mobile" : t < a ? "tablet" : "desktop"
			},
			o = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
	},
	"507a": function (t, e, s) {
		"use strict";
		s("f3f3")
	},
	"50c1": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-widget-banner-content"
			}, [s(t.widgetData.imageLinkUrl ? "a" : "span", {
				tag: "component",
				staticClass: "tm-widget-banner-content__image-wrapper",
				attrs: {
					href: t.widgetData.imageLinkUrl
				}
			}, [s("img", {
				staticClass: "tm-widget-banner-content__image",
				class: t.imageClasses,
				attrs: {
					alt: "",
					src: t.widgetData.imageUrl
				}
			})]), t._v(" "), t.widgetData.textHtml ? s("div", {
				staticClass: "tm-widget-banner-content__message",
				class: t.messageClasses,
				domProps: {
					innerHTML: t._s(t.widgetData.textHtml)
				}
			}) : t._e()], 1)
		},
			a = [],
			i = {
				name: "TMWidgetBannerContent",
				props: {
					widgetData: {
						type: Object,
						required: !0
					}
				},
				computed: {
					messageClasses() {
						const {
							textAlign: t
						} = this.widgetData;
						return t ? "tm-widget-banner-content__message_align-" + t : null
					},
					imageClasses() {
						const {
							textAlign: t
						} = this.widgetData;
						return t ? "tm-widget-banner-content__image_align-" + t : null
					}
				}
			},
			o = i,
			r = (s("bb19"), s("2877")),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["a"] = c.exports
	},
	5186: function (t, e) {
		t.exports = "/img/services.974f36f3.svg"
	},
	5188: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", ["article" === t.type ? t._l(t.times, (function (e) {
				return s("div", {
					key: "placeholder-article-" + e,
					class: "tm-placeholder tm-placeholder_article tm-placeholder_article_" + t.modificator
				}, [t._m(0, !0), t._v(" "), t._l(2, (function (n) {
					return s("div", {
						key: "placeholder-article-title-" + e + "-" + n,
						class: "\n          tm-placeholder__article-title\n          tm-placeholder__article-title_" + t.modificator + "\n          loads\n        "
					})
				})), t._v(" "), "preview" === t.modificator ? s("div", {
					staticClass: "tm-placeholder__counters"
				}, t._l(4, (function (t) {
					return s("div", {
						key: "placeholder-icon-" + t,
						staticClass: "tm-placeholder__icon loads"
					})
				})), 0) : t._e(), t._v(" "), "article-comments" === t.modificator ? s("div", {
					staticClass: "tm-placeholder__counters"
				}, t._l(3, (function (t) {
					return s("div", {
						key: "placeholder-icon-" + t,
						staticClass: "tm-placeholder__icon loads"
					})
				})), 0) : t._e()], 2)
			})) : t._e(), t._v(" "), "articleBody" === t.type ? s("div", {
				staticClass: "tm-placeholder tm-placeholder_article-body"
			}, [s("div", {
				staticClass: "tm-placeholder__article-img loads"
			}), t._v(" "), t._l(20, (function (e) {
				return s("div", {
					key: "placeholder-article-body-" + e,
					staticClass: "tm-placeholder__line loads",
					style: "width:" + t.generateRandomWidth(80, 100) + "%;"
				})
			}))], 2) : t._e(), t._v(" "), "hubs" === t.type ? s("div", {
				staticClass: "tm-placeholder tm-placeholder_hubs"
			}, t._l(t.times, (function (t) {
				return s("div", {
					key: "placeholder-hub-" + t,
					staticClass: "tm-placeholder__hub loads"
				})
			})), 0) : t._e(), t._v(" "), "categories" === t.type ? s("div", {
				staticClass: "tm-placeholder tm-placeholder_categories"
			}, t._l(t.times, (function (e) {
				return s("div", {
					key: "placeholder-category-" + e,
					staticClass: "tm-placeholder__category"
				}, [s("div", {
					staticClass: "tm-placeholder__category-avatar"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__category-info"
				}, [s("span", {
					staticClass: "tm-placeholder__category-name",
					style: "width: " + t.generateRandomWidth(38, 200) + "px"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__category-desctiption",
					style: "width: " + t.generateRandomWidth(50, 110) + "px"
				})])])
			})), 0) : t._e(), t._v(" "), "preset" === t.type ? t._l(t.times, (function (e) {
				return s("div", {
					key: "placeholder-preset-" + e,
					staticClass: "tm-placeholder tm-placeholder_preset"
				}, [s("div", {
					staticClass: "tm-placeholder__preset-header"
				}, [s("div", {
					staticClass: "tm-placeholder__preset-title loads"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__preset-icons"
				}, t._l(2, (function (t) {
					return s("div", {
						key: "placeholder-preset-icon-" + t,
						staticClass: "tm-placeholder__preset-icon tm-placeholder__icon loads"
					})
				})), 0)]), t._v(" "), t._l(3, (function (e) {
					return s("div", {
						key: "placeholder-preset-line-" + e,
						staticClass: "tm-placeholder__line loads",
						style: "width:" + t.generateRandomWidth(80, 100) + "%;"
					})
				})), t._v(" "), s("div", {
					staticClass: "tm-placeholder__preset-button loads"
				})], 2)
			})) : t._e(), t._v(" "), "conversations" === t.type ? s("div", {
				staticClass: "tm-placeholder__conversations"
			}, t._l(t.times, (function (e) {
				return s("div", {
					key: "placeholder-conversations-" + e,
					class: "\n        tm-placeholder\n        tm-placeholder__conversation\n        tm-placeholder__conversation_" + t.modificator + "\n      "
				}, [s("div", {
					staticClass: "tm-placeholder__conversation-userpic loads"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__conversation-body"
				}, [s("div", {
					staticClass: "tm-placeholder__conversation-meta"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_username loads",
					style: "width:" + t.generateRandomWidth(5, 20) + "%;"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_date loads",
					style: "width:" + t.generateRandomWidth(5, 20) + "%;"
				})]), t._v(" "), s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_conversations loads",
					style: "width:" + t.generateRandomWidth(60, 80) + "%;"
				})])])
			})), 0) : t._e(), t._v(" "), "messages" === t.type ? s("div", {
				staticClass: "tm-placeholder__messages"
			}, t._l(t.times, (function (e) {
				return s("div", {
					key: "placeholder-messages-" + e,
					class: "tm-placeholder tm-placeholder__message tm-placeholder__message_" + t.modificator
				}, [s("div", {
					staticClass: "tm-placeholder__message-meta"
				}, [s("div", {
					staticClass: "tm-placeholder__message-userpic loads"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_message-date loads",
					style: "width:" + t.generateRandomWidth(5, 20) + "%;"
				})]), t._v(" "), t._l(3, (function (e) {
					return s("div", {
						key: "placeholder-message-line-" + e,
						staticClass: "tm-placeholder__line tm-placeholder__line_messages loads",
						style: "width:" + t.generateRandomWidth(80, 100) + "%;"
					})
				}))], 2)
			})), 0) : t._e(), t._v(" "), "static" === t.type ? s("div", {
				staticClass: "tm-placeholder tm-placeholder_static"
			}, [t._m(1), t._v(" "), s("div", {
				staticClass: "tm-placeholder__static-page-tabs"
			}, t._l(3, (function (e) {
				return s("div", {
					key: "placeholder-preset-static-" + e,
					staticClass: "tm-placeholder__static-page-tab loads",
					style: "width:" + t.generateRandomWidth(80, 100) + "px;"
				})
			})), 0), t._v(" "), s("div", {
				staticClass: "tm-placeholder__static-page-content"
			}, [s("div", {
				staticClass: "tm-placeholder__static-page-content-headling loads"
			}), t._v(" "), s("div", {
				staticClass: "tm-placeholder__static-page-content-headling loads",
				style: "width:" + t.generateRandomWidth(80, 100) + "%;"
			}), t._v(" "), s("div", {
				staticClass: "tm-placeholder__static-page-content-headling loads",
				style: "width:" + t.generateRandomWidth(60, 80) + "%;"
			}), t._v(" "), s("div", {
				staticClass: "tm-placeholder__static-page-content-wrap-text"
			}, t._l(12, (function (e) {
				return s("div", {
					key: "placeholder-preset-static-2-" + e,
					staticClass: "tm-placeholder__static-page-content-text loads",
					style: "width:" + t.generateRandomWidth(60, 80) + "%;"
				})
			})), 0), t._v(" "), s("div", {
				staticClass: "tm-placeholder__static-page-content-headling loads",
				style: "width:" + t.generateRandomWidth(80, 100) + "%;"
			}), t._v(" "), s("div", {
				staticClass: "tm-placeholder__static-page-content-wrap-text"
			}, t._l(6, (function (e) {
				return s("div", {
					key: "placeholder-preset-static-3-" + e,
					staticClass: "tm-placeholder__static-page-content-text loads",
					style: "width:" + t.generateRandomWidth(60, 80) + "%;"
				})
			})), 0)])]) : t._e(), t._v(" "), "static_section_name" === t.type ? s("div", {
				staticClass: "tm-placeholder__static-page-section-name"
			}, [s("div", {
				staticClass: "tm-placeholder__static-page-headling loads"
			})]) : t._e(), t._v(" "), "static_dropdown" === t.type ? s("div", {
				staticClass: "tm-placeholder__static-page-tabs"
			}, [s("div", {
				staticClass: "tm-placeholder__static-page-headling loads"
			})]) : t._e(), t._v(" "), "static_tabs" === t.type ? s("div", {
				staticClass: "tm-placeholder__static-page-tabs"
			}, t._l(3, (function (e) {
				return s("div", {
					key: "placeholder-preset-static-" + e,
					staticClass: "tm-placeholder__static-page-tab loads",
					style: "width:" + t.generateRandomWidth(80, 100) + "px;"
				})
			})), 0) : t._e(), t._v(" "), "static_article" === t.type ? s("div", {
				staticClass: "tm-placeholder__static-page-content"
			}, [s("div", {
				staticClass: "tm-placeholder__static-page-content-headling loads"
			}), t._v(" "), s("div", {
				staticClass: "tm-placeholder__static-page-content-headling loads",
				style: "width:" + t.generateRandomWidth(80, 100) + "%;"
			}), t._v(" "), s("div", {
				staticClass: "tm-placeholder__static-page-content-headling loads",
				style: "width:" + t.generateRandomWidth(60, 80) + "%;"
			}), t._v(" "), s("div", {
				staticClass: "tm-placeholder__static-page-content-wrap-text"
			}, t._l(12, (function (e) {
				return s("div", {
					key: "ps-text-" + e,
					staticClass: "tm-placeholder__static-page-content-text loads",
					style: "width:" + t.generateRandomWidth(60, 80) + "%;"
				})
			})), 0), t._v(" "), s("div", {
				staticClass: "tm-placeholder__static-page-content-headling loads",
				style: "width:" + t.generateRandomWidth(80, 100) + "%;"
			}), t._v(" "), s("div", {
				staticClass: "tm-placeholder__static-page-content-wrap-text"
			}, t._l(6, (function (e) {
				return s("div", {
					key: "ps-text-2-" + e,
					staticClass: "tm-placeholder__static-page-content-text loads",
					style: "width:" + t.generateRandomWidth(60, 80) + "%;"
				})
			})), 0)]) : t._e(), t._v(" "), "comment" === t.type ? t._l(t.times, (function (e) {
				return s("div", {
					key: "placeholder-article-" + e,
					class: "tm-placeholder tm-placeholder__comment tm-placeholder__comment_" + t.modificator
				}, ["user-comment" === t.modificator ? s("div", {
					staticClass: "tm-placeholder__comment-article"
				}, t._l(2, (function (t) {
					return s("div", {
						key: "placeholder-article-title-" + e + "-" + t,
						class: "tm-placeholder__article-title loads"
					})
				})), 0) : t._e(), t._v(" "), t._m(2, !0), t._v(" "), t._l(2, (function (n) {
					return s("div", {
						key: "placeholder-article-title-" + e + "-" + n,
						staticClass: "tm-placeholder__article-title loads",
						style: "width:" + t.generateRandomWidth(80, 100) + "%;"
					})
				}))], 2)
			})) : t._e(), t._v(" "), "form" === t.type ? t._l(t.times, (function (t) {
				return s("div", {
					key: "placeholder-form-" + t,
					staticClass: "tm-placeholder tm-placeholder_form loads"
				})
			})) : t._e(), t._v(" "), "profileInfo" === t.type ? t._l(12, (function (e) {
				return s("div", {
					key: "placeholder-form-" + e,
					staticClass: "tm-placeholder tm-placeholder__line loads",
					style: "width:" + t.generateRandomWidth(20, 80) + "%;"
				})
			})) : t._e(), t._v(" "), "userProfileCard" === t.type ? [s("div", {
				staticClass: "tm-placeholder tm-placeholder_user-profile"
			}, [t._m(3), t._v(" "), s("div", {
				staticClass: "tm-placeholder__category-info"
			}, [s("span", {
				staticClass: "tm-placeholder__category-name",
				style: "width: " + t.generateRandomWidth(38, 300) + "px"
			}), t._v(" "), s("div", {
				staticClass: "tm-placeholder__category-desctiption tm-placeholder__desctiption_profile",
				style: "width: " + t.generateRandomWidth(50, 210) + "px"
			})])]), t._v(" "), s("div", {
				staticClass: "tm-placeholder__static-page-tabs"
			}, t._l(4, (function (e) {
				return s("div", {
					key: "placeholder-preset-static-" + e,
					staticClass: "tm-placeholder__static-page-tab loads",
					style: "width:" + t.generateRandomWidth(80, 100) + "px;"
				})
			})), 0)] : t._e(), t._v(" "), "hubProfileCard" === t.type ? s("div", {
				staticClass: "tm-placeholder tm-placeholder_user-profile"
			}, [t._m(4), t._v(" "), s("div", {
				staticClass: "tm-placeholder__category-info"
			}, [s("span", {
				staticClass: "tm-placeholder__category-name",
				style: "width: " + t.generateRandomWidth(38, 300) + "px"
			}), t._v(" "), s("div", {
				staticClass: "tm-placeholder__category-desctiption tm-placeholder__desctiption_profile",
				style: "width: " + t.generateRandomWidth(50, 210) + "px"
			})])]) : t._e(), t._v(" "), "inset_salary" === t.type ? s("div", {
				staticClass: "tm-placeholder-inset tm-placeholder-salary"
			}, [t._m(5), t._v(" "), t._m(6), t._v(" "), t._m(7)]) : t._e(), t._v(" "), "inset_tasks" === t.type ? s("div", {
				staticClass: "tm-placeholder-inset tm-placeholder-tasks"
			}, [t._m(8), t._v(" "), s("div", {
				staticClass: "tm-placeholder-inset__body"
			}, [s("ul", {
				staticClass: "tm-placeholder-list"
			}, t._l(5, (function (e) {
				return s("li", {
					key: e,
					staticClass: "tm-placeholder-list__item tm-placeholder-list__item_inset"
				}, [t._m(9, !0), t._v(" "), s("div", {
					staticClass: "tm-project-block-items__properties"
				}, t._l(3, (function (t) {
					return s("span", {
						key: t,
						staticClass: "tm-project-block-items__property-item"
					}, [s("span", {
						staticClass: "tm-placeholder__line loads",
						staticStyle: {
							width: "100px"
						}
					})])
				})), 0)])
			})), 0)]), t._v(" "), t._m(10)]) : t._e(), t._v(" "), "inset_questions" === t.type ? s("div", {
				staticClass: "tm-placeholder-inset tm-placeholder-questions"
			}, [t._m(11), t._v(" "), s("div", {
				staticClass: "tm-placeholder-inset__body"
			}, [s("ul", {
				staticClass: "tm-placeholder-list"
			}, t._l(5, (function (e) {
				return s("li", {
					key: e,
					staticClass: "tm-placeholder-list__item tm-placeholder-list__item_inset"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_item-title loads"
				}), t._v(" "), s("div", {
					staticClass: "tm-project-block-items__properties"
				}, t._l(3, (function (t) {
					return s("span", {
						key: t,
						staticClass: "tm-project-block-items__property-item"
					}, [s("span", {
						staticClass: "tm-placeholder__line loads",
						staticStyle: {
							width: "100px"
						}
					})])
				})), 0)])
			})), 0)]), t._v(" "), t._m(12)]) : t._e(), t._v(" "), "inset_courses" === t.type ? s("div", {
				staticClass: "tm-placeholder-inset tm-placeholder-courses"
			}, [t._m(13), t._v(" "), s("div", {
				staticClass: "tm-placeholder-inset__body"
			}, [s("ul", {
				staticClass: "tm-placeholder-list"
			}, t._l(5, (function (e) {
				return s("li", {
					key: e,
					staticClass: "tm-placeholder-list__item tm-placeholder-list__item_inset"
				}, [t._m(14, !0), t._v(" "), s("div", {
					staticClass: "tm-project-block-items__properties"
				}, t._l(3, (function (t) {
					return s("span", {
						key: t,
						staticClass: "tm-project-block-items__property-item"
					}, [s("span", {
						staticClass: "tm-placeholder__line loads",
						staticStyle: {
							width: "100px"
						}
					})])
				})), 0)])
			})), 0)]), t._v(" "), t._m(15)]) : t._e(), t._v(" "), "inset_vacancies" === t.type ? s("div", {
				staticClass: "tm-placeholder-inset tm-placeholder-vacancies"
			}, [t._m(16), t._v(" "), s("div", {
				staticClass: "tm-placeholder-inset__body"
			}, [s("ul", {
				staticClass: "tm-placeholder-list"
			}, t._l(5, (function (e) {
				return s("li", {
					key: e,
					staticClass: "tm-placeholder-list__item tm-placeholder-list__item_inset"
				}, [t._m(17, !0), t._v(" "), s("div", {
					staticClass: "tm-project-block-items__properties"
				}, t._l(3, (function (t) {
					return s("span", {
						key: t,
						staticClass: "tm-project-block-items__property-item"
					}, [s("span", {
						staticClass: "tm-placeholder__line loads",
						staticStyle: {
							width: "100px"
						}
					})])
				})), 0)])
			})), 0)]), t._v(" "), t._m(18)]) : t._e(), t._v(" "), "promo_block" === t.type ? s("div", {
				staticClass: "tm-placeholder-promo"
			}, [t._m(19), t._v(" "), t._m(20)]) : t._e()], 2)
		},
			a = [function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder__user"
				}, [s("div", {
					staticClass: "tm-placeholder__user-pic loads"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__user-date loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder__static-page-section-name"
				}, [s("div", {
					staticClass: "tm-placeholder__static-page-headling loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder__user"
				}, [s("div", {
					staticClass: "tm-placeholder__user-pic loads"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__user-date loads"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__user-score loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder__user-profile-data"
				}, [s("div", {
					staticClass: "tm-placeholder__category-avatar tm-placeholder__userinfo-avatar"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder__user-profile-data"
				}, [s("div", {
					staticClass: "tm-placeholder__category-avatar"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-inset__header"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_inset-header loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-salary__body"
				}, [s("div", {
					staticClass: "tm-placeholder-salary__text"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_salary_average"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder-salary__description"
				}, [s("div", {
					staticClass: "tm-placeholder__line loads"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__line loads"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__line loads"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__line loads"
				})])]), t._v(" "), s("div", {
					staticClass: "tm-placeholder-salary__image loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-inset__footer tm-placeholder-inset__footer_salary"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_inset-footer loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-inset__header"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_inset-header loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-list__title-container"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_item-title loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-inset__footer"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_inset-footer loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-inset__header"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_inset-header loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-inset__footer"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_inset-footer loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-inset__header"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_inset-header loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-list__title-container"
				}, [s("div", {
					staticClass: "tm-placeholder__company-avatar"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_item-title loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-inset__footer"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_inset-footer loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-inset__header"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_inset-header loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-list__title-container"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_item-title loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-inset__footer"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_inset-footer loads"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-promo__header"
				}, [s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_promo-title"
				})])
			}, function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-placeholder-promo__body"
				}, [s("div", {
					staticClass: "tm-placeholder-promo__posts"
				}, [s("div", {
					staticClass: "tm-placeholder-promo__post"
				}, [s("div", {
					staticClass: "tm-placeholder-promo__image"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_post-title"
				})]), t._v(" "), s("div", {
					staticClass: "tm-placeholder-promo__post"
				}, [s("div", {
					staticClass: "tm-placeholder-promo__image"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_post-title"
				})]), t._v(" "), s("div", {
					staticClass: "tm-placeholder-promo__post"
				}, [s("div", {
					staticClass: "tm-placeholder-promo__image"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder__line tm-placeholder__line_post-title"
				})])]), t._v(" "), s("div", {
					staticClass: "tm-placeholder-promo__dots"
				}, [s("div", {
					staticClass: "tm-placeholder-promo__dot"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder-promo__dot"
				}), t._v(" "), s("div", {
					staticClass: "tm-placeholder-promo__dot"
				})])])
			}],
			i = s("edc0");
		const o = {
			article: !0,
			articleBody: !0,
			hubs: !0,
			categories: !0,
			preset: !0,
			conversations: !0,
			messages: !0,
			static: !0,
			static_section_name: !0,
			static_dropdown: !0,
			static_tabs: !0,
			static_article: !0,
			comment: !0,
			form: !0,
			profileInfo: !0,
			userProfileCard: !0,
			hubProfileCard: !0,
			inset_salary: !0,
			inset_tasks: !0,
			inset_questions: !0,
			inset_courses: !0,
			inset_vacancies: !0,
			promo_block: !0
		};
		var r = {
			name: "TMPlaceholder",
			props: {
				type: {
					type: String,
					validator(t) {
						return t in o
					},
					default: null
				},
				times: {
					type: Number,
					default: 1
				},
				modificator: {
					type: String,
					default: ""
				}
			},
			methods: {
				generateRandomWidth: i["a"]
			}
		},
			c = r,
			l = (s("b071"), s("2877")),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	"51c9": function (t, e, s) {
		"use strict";
		s.d(e, "b", (function () {
			return n
		})), s.d(e, "a", (function () {
			return a
		})), s.d(e, "e", (function () {
			return i
		})), s.d(e, "d", (function () {
			return o
		})), s.d(e, "c", (function () {
			return r
		}));
		const n = 300,
			a = 300,
			i = 300,
			o = 300,
			r = 3e3
	},
	"52ae": function (t, e, s) { },
	5339: function (t, e, s) {
		"use strict";

		function n(t) {
			const e = "sandbox" === t.postType ? "sandbox" : "topic";
			return `https://localhost:7103/${e}/edit/${t.id}/`
		}
		s.d(e, "a", (function () {
			return n
		}))
	},
	"53da": function (t, e, s) {
		"use strict";
		s("9272")
	},
	5449: function (t, e, s) {
		"use strict";
		s.d(e, "f", (function () {
			return i
		})), s.d(e, "d", (function () {
			return o
		})), s.d(e, "h", (function () {
			return r
		})), s.d(e, "g", (function () {
			return c
		})), s.d(e, "k", (function () {
			return l
		})), s.d(e, "m", (function () {
			return u
		})), s.d(e, "l", (function () {
			return m
		})), s.d(e, "b", (function () {
			return d
		})), s.d(e, "a", (function () {
			return p
		})), s.d(e, "n", (function () {
			return _
		})), s.d(e, "e", (function () {
			return h
		})), s.d(e, "j", (function () {
			return g
		})), s.d(e, "c", (function () {
			return f
		})), s.d(e, "i", (function () {
			return b
		}));
		var n = s("2105"),
			a = s("4dcc");

		function i() {
			return Object(n["b"])(Object(a["a"])("me", "v2"))
		}

		function o() {
			return Object(n["b"])(Object(a["a"])("me/invites/available", "v2"))
		}

		function r(t) {
			return Object(n["b"])(Object(a["a"])("me/invites/used", "v2"), t)
		}

		function c(t) {
			return Object(n["b"])(Object(a["a"])("me/invites/unused", "v2"), t)
		}

		function l(t) {
			return Object(n["c"])(Object(a["a"])("me/invites/all", "v2"), t)
		}

		function u(t) {
			return Object(n["c"])(Object(a["a"])("me/invites/all/" + t, "v2"))
		}

		function m(t) {
			return Object(n["c"])(Object(a["a"])(`me/invites/all/${t}/resend`, "v2"), {
				id: t
			})
		}

		function d(t) {
			return Object(n["c"])(Object(a["a"])("me/invites/check", "v2"), {
				invite: t
			})
		}

		function p(t) {
			return Object(n["c"])(Object(a["a"])("me/invites/apply", "v2"), {
				invite: t
			})
		}

		function _(t) {
			return Object(n["c"])(Object(a["a"])("me/ppg", "v2"), {
				program: t
			})
		}

		function h() {
			return Object(n["b"])(Object(a["a"])("me/karma/reset", "v2"))
		}

		function g() {
			return Object(n["c"])(Object(a["a"])("me/karma/reset", "v2"))
		}

		function f() {
			return Object(n["a"])(Object(a["a"])("me/karma/reset", "v2"))
		}

		function b(t) {
			return Object(n["b"])(Object(a["a"])("me/notes", "v2"), t)
		}
	},
	"54fe": function (t, e, s) { },
	5580: function (t, e, s) {
		"use strict";
		s("073b")
	},
	"564a": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("ul", {
				staticClass: "companies-admin-list"
			}, t._l(t.companies, (function (e) {
				return s("li", {
					key: e.alias,
					staticClass: "companies-admin-list__item"
				}, [s(t.adminRouteDesktop ? "a" : "router-link", {
					tag: "component",
					staticClass: "companies-admin-list__link",
					attrs: {
						href: t.getCompanyAdminLink(e),
						to: t.getCompanyAdminLink(e)
					}
				}, [s("TMEntityImage", {
					staticClass: "company-admin-dropdown__image",
					attrs: {
						alias: e.alias,
						image: e.imageUrl,
						type: "company"
					}
				}), t._v(" "), s("span", {
					domProps: {
						innerHTML: t._s(e.titleHtml)
					}
				})], 1)], 1)
			})), 0)
		},
			a = [],
			i = s("2e8a"),
			o = {
				name: "TMCompaniesAdminList",
				components: {
					TMEntityImage: i["a"]
				},
				props: {
					companies: {
						type: Array,
						required: !0
					}
				},
				computed: {
					adminRouteDesktop() {
						return !0
					}
				},
				methods: {
					getCompanyAdminLink(t) {
						return this.adminRouteDesktop ? `https://localhost:7103/company/${t.alias}/admin/` : `/company/${t.alias}/admin/`
					}
				}
			},
			r = o,
			c = (s("d1ae"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"57fc": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return t.showPagination ? s("div", {
				staticClass: "tm-pagination"
			}, [s(t.navigation.prev ? "router-link" : "div", {
				key: "decrementLink",
				tag: "component",
				staticClass: "tm-pagination__navigation-link",
				class: {
					"tm-pagination__navigation-link_active": t.navigation.prev
				},
				attrs: {
					id: "pagination-prev-page",
					"data-pagination-prev": "",
					rel: "prev",
					to: t.navigation.prev
				}
			}, [s("TMSvgImg", {
				staticClass: "tm-pagination__arrow tm-pagination__arrow_prev",
				attrs: {
					id: "arrow-back",
					size: "16"
				}
			}), t._v(" "), s("span", {
				staticClass: "tm-pagination__navigation-link-title"
			}, [t._v("\n      " + t._s(t.msg("NAV_PREV_PAGE")) + "\n    ")])], 1), t._v(" "), s("div", {
				staticClass: "tm-pagination__pages"
			}, [t._l(t.previousPages, (function (e, n) {
				return s("div", {
					key: n + "prev",
					staticClass: "tm-pagination__page-group"
				}, [t._l(e, (function (e) {
					return s("router-link", {
						key: e.title,
						staticClass: "tm-pagination__page",
						attrs: {
							to: e.route
						}
					}, [t._v("\n        " + t._s(e.title) + "\n      ")])
				})), t._v(" "), 0 === n && t.previousPages.length > 1 ? s("span", {
					key: "skip-prev",
					staticClass: "tm-pagination__page tm-pagination__page_skip"
				}, [t._v("\n        ...\n      ")]) : t._e()], 2)
			})), t._v(" "), s("span", {
				staticClass: "tm-pagination__page tm-pagination__page_current"
			}, [t._v("\n      " + t._s(t.currentRoutePage) + "\n    ")]), t._v(" "), t._l(t.nextPages, (function (e, n) {
				return s("div", {
					key: n + "next",
					staticClass: "tm-pagination__page-group"
				}, [t._l(e, (function (e) {
					return s("router-link", {
						key: e.title,
						staticClass: "tm-pagination__page",
						attrs: {
							to: e.route
						}
					}, [t._v("\n        " + t._s(e.title) + "\n      ")])
				})), t._v(" "), 0 === n && t.nextPages.length > 1 ? s("span", {
					key: "skip-next",
					staticClass: "tm-pagination__page tm-pagination__page_skip"
				}, [t._v("\n        ...\n      ")]) : t._e()], 2)
			}))], 2), t._v(" "), s(t.navigation.next ? "router-link" : "div", {
				key: "incrementLink",
				tag: "component",
				staticClass: "tm-pagination__navigation-link",
				class: {
					"tm-pagination__navigation-link_active": t.navigation.next
				},
				attrs: {
					id: "pagination-next-page",
					"data-pagination-next": "",
					rel: "next",
					to: t.navigation.next
				}
			}, [s("span", {
				staticClass: "tm-pagination__navigation-link-title"
			}, [t._v("\n      " + t._s(t.msg("NAV_NEXT_PAGE")) + "\n    ")]), t._v(" "), s("TMSvgImg", {
				staticClass: "tm-pagination__arrow tm-pagination__arrow_next",
				attrs: {
					id: "arrow-back",
					size: "16"
				}
			})], 1)], 1) : t._e()
		},
			a = [],
			i = s("2f62"),
			o = s("b7d0");
		const r = t => e => ({
			route: {
				...t,
				params: {
					pageNum: e
				}
			},
			title: e
		});
		var c = {
			name: "TMPagination",
			components: {
				TMSvgImg: o["a"]
			},
			props: {
				currentPage: {
					type: Number,
					default: null
				},
				routeName: {
					type: String,
					default: null
				},
				totalPages: {
					type: Number,
					required: !0
				},
				pagePadding: {
					type: Number,
					default: 2
				},
				pagePaddingMobile: {
					type: Number,
					default: 1
				}
			},
			computed: {
				route() {
					return {
						name: this.routeName || this.$route.name,
						query: this.$route.query
					}
				},
				navigation() {
					return {
						prev: this.currentRoutePage > 1 ? {
							...this.route,
							params: {
								pageNum: this.currentRoutePage - 1
							}
						} : null,
						next: this.isLastPage ? null : {
							...this.route,
							params: {
								pageNum: this.currentRoutePage + 1
							}
						}
					}
				},
				currentRoutePage() {
					return this.currentPage || Number(this.$route.params.pageNum) || 1
				},
				isLastPage() {
					return this.currentRoutePage === this.totalPages
				},
				showPagination() {
					return this.totalPages > 1
				},
				previousPages() {
					const {
						route: t,
						currentRoutePage: e,
						responsivePadding: s
					} = this;
					if (1 === e) return [];
					const n = r(t);
					if (e - 1 - 2 * s <= 1) {
						const t = [];
						for (let s = 1; s < e; s += 1) t.push(n(s));
						return [t]
					}
					const a = [];
					for (let o = 1; o <= s; o += 1) a.push(n(o));
					const i = [];
					for (let o = e - s; o < e; o += 1) i.push(n(o));
					return [a, i]
				},
				nextPages() {
					const {
						route: t,
						currentRoutePage: e,
						responsivePadding: s,
						totalPages: n
					} = this;
					if (e === n) return [];
					const a = r(t);
					if (e + 2 * s >= n - 1) {
						const t = [];
						for (let s = e + 1; s <= n; s += 1) t.push(a(s));
						return [t]
					}
					const i = [];
					for (let r = e + 1; r <= e + s; r += 1) i.push(a(r));
					const o = [];
					for (let r = n - s + 1; r <= n; r += 1) o.push(a(r));
					return [i, o]
				},
				...Object(i["c"])("global", ["isMobile"]),
				responsivePadding() {
					const {
						pagePadding: t,
						pagePaddingMobile: e
					} = this;
					return this.isMobile ? e : t
				}
			}
		},
			l = c,
			u = (s("0702"), s("2877")),
			m = Object(u["a"])(l, n, a, !1, null, null, null);
		e["a"] = m.exports
	},
	"58b1": function (t, e, s) { },
	"58ba": function (t, e, s) {
		"use strict";
		s("f120")
	},
	"597a": function (t, e, s) {
		"use strict";
		s("859e")
	},
	"5adb": function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return a
		}));
		var n = s("43bc");
		const a = (t, e) => {
			const s = Object(n["b"])(t),
				a = new IntersectionObserver(t => {
					t.forEach(t => {
						if (t.isIntersecting) {
							let s = t.target,
								i = new Image;
							const o = Object(n["a"])(s.getAttribute("data-src") || s.src);
							i.setAttribute("src", o);
							const r = () => {
								"/img/image-loader.svg" === s.getAttribute("src") && s.removeAttribute("src"), s.setAttribute("src", o);
								const t = s.getAttribute("data-width");
								t && s.setAttribute("width", t), setTimeout(() => {
									s.removeAttribute("data-blurred"), i.removeEventListener("load", r), i.removeEventListener("error", c), i = null, s = null
								}, 0)
							},
								c = () => {
									s.setAttribute("src", null), s.setAttribute("alt", e), s.removeAttribute("data-blurred"), i.removeEventListener("load", r), i.removeEventListener("error", c), i = null, s = null
								};
							i.addEventListener("load", r), i.addEventListener("error", c), a.unobserve(t.target)
						}
					})
				}, {
					rootMargin: "500px"
				});
			return s.forEach(t => {
				const e = t.getAttribute("data-src");
				if (e) {
					const s = e.split(".").pop(),
						n = ["jpg", "jpeg"]; - 1 !== n.indexOf(s) && a.observe(t)
				}
			}), () => a.disconnect()
		}
	},
	"5b53": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-navigation-dropdown",
				class: t.bem("tm-navigation-dropdown", {
					variant: t.variant
				})
			}, [s("div", {
				staticClass: "tm-navigation-dropdown__wrapper"
			}, [s("button", {
				directives: [{
					name: "hotkey",
					rawName: "v-hotkey",
					value: {
						esc: t.closeOptions
					},
					expression: "{ 'esc': closeOptions }"
				}],
				ref: "button",
				staticClass: "tm-navigation-dropdown__button",
				class: t.bem("tm-navigation-dropdown__button", {
					variant: t.variant
				}),
				on: {
					click: t.toggleOptions
				}
			}, [s("div", {
				staticClass: "tm-navigation-dropdown__button-text"
			}, [t._v("\n        " + t._s(t.labelOfCurrentValue) + "\n      ")]), t._v(" "), s("TMSvgImg", {
				staticClass: "icon_dropdown-arrow",
				class: {
					"icon_dropdown-arrow-rotated": t.optionsVisible
				},
				attrs: {
					id: "arrow-down"
				}
			})], 1), t._v(" "), t._t("default")], 2), t._v(" "), s("ul", {
				ref: "options",
				staticClass: "tm-navigation-dropdown__options",
				class: t.getClass,
				style: t.getStyles
			}, t._l(t.transformedOptions, (function (e, n) {
				return s("li", {
					key: e.optionValue + "_" + n,
					staticClass: "tm-navigation-dropdown__option"
				}, [t.sections ? s("router-link", {
					staticClass: "tm-navigation-dropdown__option-button",
					attrs: {
						"active-class": "tm-navigation-dropdown__option-button_active",
						to: e.route
					}
				}, [s("button", {
					staticClass: "tm-navigation-dropdown__option-button",
					attrs: {
						tabindex: t.optionsVisible ? 0 : -1
					},
					on: {
						click: function (s) {
							return t.handleOptionClick(e)
						}
					}
				}, [t._v("\n          " + t._s(e.label) + "\n          "), e.count ? s("span", {
					staticClass: "tm-navigation-dropdown__option-count"
				}, [t._v("\n            " + t._s(t.getCount(e.count)) + "\n          ")]) : t._e()])]) : s("button", {
					staticClass: "tm-navigation-dropdown__option-button",
					class: t.activeOptionIndex === n && "tm-navigation-dropdown__option-button_active",
					on: {
						click: function (s) {
							return t.handleOptionClick(e)
						}
					}
				}, [t._v("\n        " + t._s(e.label) + "\n        "), e.count ? s("span", {
					staticClass: "tm-navigation-dropdown__option-count"
				}, [t._v("\n          " + t._s(t.getCount(e.count)) + "\n        ")]) : t._e()])], 1)
			})), 0)])
		},
			a = [],
			i = s("2f62"),
			o = s("b7d0"),
			r = s("cee5"),
			c = s("6be8"),
			l = {
				name: "TMNavigationDropdown",
				components: {
					TMSvgImg: o["a"]
				},
				props: {
					sections: {
						type: Array,
						default: null
					},
					options: {
						type: Array,
						default: () => []
					},
					currentValue: {
						type: String,
						default: null
					},
					customTitle: {
						type: String,
						default: null
					},
					variant: {
						type: String,
						default: null
					}
				},
				data() {
					return {
						optionsVisible: !1,
						maxHeightStyles: null
					}
				},
				computed: {
					...Object(i["c"])("global", ["isDesktop"]),
					transformedOptions() {
						return this.sections ? this.sections.map(t => ({
							label: t.title,
							value: t.route.name,
							...t
						})) : this.options
					},
					activeOptionIndex() {
						let t = this.currentValue;
						const e = "_PAGES";
						return this.currentValue && -1 !== this.currentValue.indexOf(e) && (t = t.replace(e, "")), this.transformedOptions.findIndex(e => e.value === t || e.optionValue === t)
					},
					getStyles() {
						return this.optionsVisible && this.maxHeightStyles
					},
					labelOfCurrentValue() {
						if (this.sections) {
							const t = this.sections.find(t => {
								const e = t.route.name === this.$route.name;
								if (t.route.params && this.$route.params) {
									let s;
									const n = Object.keys(t.route.params);
									return 0 === n.length ? s = !0 : (s = !1, n.forEach(e => {
										s = this.$route.params[e] === t.route.params[e]
									})), e && s
								}
								return e
							});
							if (t) return t.title
						}
						if (this.customTitle) return this.customTitle;
						const t = this.activeOptionIndex > 0 ? this.activeOptionIndex : 0;
						return this.transformedOptions[t].label
					},
					getClass() {
						return {
							"tm-navigation-dropdown__options_absolute": this.isDesktop
						}
					}
				},
				mounted() {
					this.$nextTick(() => {
						this.maxHeightStyles = `max-height: ${this.$refs.options.scrollHeight}px`
					})
				},
				methods: {
					getCount(t) {
						return t && 0 !== Number(t) ? Object(c["a"])(t) : ""
					},
					handleOptionClick(t) {
						t.value !== this.currentValue && (this.$emit("change", t), this.optionsVisible = !1, this.$refs.button.focus())
					},
					toggleOptions() {
						this.optionsVisible = !this.optionsVisible, this.optionsVisible ? document.addEventListener("click", this.listenClickOutside) : document.removeEventListener("click", this.listenClickOutside)
					},
					closeOptions() {
						this.optionsVisible = !1, document.removeEventListener("click", this.listenClickOutside)
					},
					listenClickOutside(t) {
						this.optionsVisible && !this.$el.contains(t.target) && this.toggleOptions()
					},
					bem: r["a"]
				}
			},
			u = l,
			m = (s("173a"), s("2877")),
			d = Object(m["a"])(u, n, a, !1, null, null, null);
		e["a"] = d.exports
	},
	"5c02": function (t, e, s) { },
	"5c0b": function (t, e, s) {
		"use strict";
		s("9c0c")
	},
	"5c1e": function (t, e, s) { },
	"5d2c": function (t, e, s) {
		"use strict";
		s.d(e, "d", (function () {
			return u
		})), s.d(e, "c", (function () {
			return m
		})), s.d(e, "b", (function () {
			return d
		})), s.d(e, "a", (function () {
			return p
		}));
		var n = s("8877"),
			a = s("670f"),
			i = s("09f4");

		function o(t) {
			return "#first_unread" === t
		}

		function r(t) {
			return t.indexOf("#comment_") > -1 || o(t)
		}

		function c(t) {
			return t.split("#comment_")[1]
		}
		const l = 12;

		function u(t) {
			if (!r(t)) return Promise.resolve(!1);
			let e;
			if (r(t)) {
				const s = c(t);
				e = `[name="comment_${s}"]`
			}
			if (o(t)) {
				const t = Object(a["d"])();
				t && (e = `[name="${t.getAttribute("name")}"]`)
			}
			return Object(n["c"])(e).then(t => {
				if (t && (Object(i["b"])(t, l), t.parentElement)) {
					const e = t.parentElement.querySelector("[data-comment-header]");
					e && e.focus()
				}
			})
		}

		function m(t) {
			r(t.hash) && setTimeout(() => {
				u(t.hash)
			}, 300)
		}

		function d(t, e, s) {
			t.hash && (0 === t.hash.indexOf("#comment") || o(t.hash)) && Object.assign(t.meta, {
				isRedirected: !0
			}), s()
		}

		function p(t) {
			const e = document.querySelector(`[name="comment_${t}"]`),
				s = document.querySelector("[data-height-limiter]");
			if (!s) return !0;
			const n = e.getBoundingClientRect(),
				a = s.getBoundingClientRect();
			return n.top + n.height < a.top
		}
	},
	"5d47": function (t, e, s) {
		"use strict";
		s("7472")
	},
	"5da6": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", t._l(t.links, (function (t) {
				return s("img", {
					key: t,
					staticStyle: {
						display: "none"
					},
					attrs: {
						height: "1",
						src: t,
						width: "1"
					}
				})
			})), 0)
		},
			a = [],
			i = {
				name: "TMArticleTrackingPixels",
				props: {
					links: {
						type: Array,
						required: !0
					}
				}
			},
			o = i,
			r = s("2877"),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["a"] = c.exports
	},
	"5ddb": function (t, e, s) {
		"use strict";
		s("7a07")
	},
	"5e1f": function (t, e, s) {
		"use strict";
		s("82ef")
	},
	"5e87": function (t, e, s) {
		"use strict";
		s.r(e);
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMArticlesFeed")
		},
			a = [],
			i = s("0fca"),
			o = {
				components: {
					TMArticlesFeed: i["a"]
				},
				asyncData({
					store: t,
					route: e
				}) {
					return t.dispatch("articlesList/loadArticlesList", {
						route: e
					})
				}
			},
			r = o,
			c = s("2877"),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["default"] = l.exports
	},
	"5ecd": function (t, e, s) { },
	"5fb7": function (t, e, s) {
		"use strict";
		s("3ad0")
	},
	6012: function (t, e, s) {
		"use strict";
		s.d(e, "D", (function () {
			return i
		})), s.d(e, "E", (function () {
			return o
		})), s.d(e, "p", (function () {
			return r
		})), s.d(e, "u", (function () {
			return c
		})), s.d(e, "o", (function () {
			return l
		})), s.d(e, "q", (function () {
			return u
		})), s.d(e, "w", (function () {
			return m
		})), s.d(e, "y", (function () {
			return d
		})), s.d(e, "Q", (function () {
			return p
		})), s.d(e, "t", (function () {
			return _
		})), s.d(e, "v", (function () {
			return h
		})), s.d(e, "z", (function () {
			return g
		})), s.d(e, "U", (function () {
			return f
		})), s.d(e, "T", (function () {
			return b
		})), s.d(e, "M", (function () {
			return T
		})), s.d(e, "e", (function () {
			return v
		})), s.d(e, "d", (function () {
			return E
		})), s.d(e, "J", (function () {
			return S
		})), s.d(e, "x", (function () {
			return O
		})), s.d(e, "N", (function () {
			return C
		})), s.d(e, "G", (function () {
			return I
		})), s.d(e, "H", (function () {
			return A
		})), s.d(e, "r", (function () {
			return y
		})), s.d(e, "s", (function () {
			return L
		})), s.d(e, "B", (function () {
			return P
		})), s.d(e, "A", (function () {
			return N
		})), s.d(e, "n", (function () {
			return R
		})), s.d(e, "c", (function () {
			return M
		})), s.d(e, "L", (function () {
			return w
		})), s.d(e, "I", (function () {
			return k
		})), s.d(e, "m", (function () {
			return j
		})), s.d(e, "g", (function () {
			return D
		})), s.d(e, "h", (function () {
			return x
		})), s.d(e, "k", (function () {
			return B
		})), s.d(e, "f", (function () {
			return $
		})), s.d(e, "l", (function () {
			return F
		})), s.d(e, "i", (function () {
			return G
		})), s.d(e, "j", (function () {
			return U
		})), s.d(e, "S", (function () {
			return V
		})), s.d(e, "R", (function () {
			return W
		})), s.d(e, "O", (function () {
			return H
		})), s.d(e, "K", (function () {
			return Y
		})), s.d(e, "F", (function () {
			return q
		})), s.d(e, "C", (function () {
			return K
		})), s.d(e, "P", (function () {
			return z
		})), s.d(e, "b", (function () {
			return X
		})), s.d(e, "a", (function () {
			return J
		}));
		var n = s("2105"),
			a = s("4dcc");

		function i(t) {
			return Object(n["b"])(Object(a["a"])("users/", "v2"), t)
		}

		function o(t) {
			return Object(n["b"])(Object(a["a"])("users/search", "v2"), t)
		}

		function r(t) {
			return Object(n["b"])(Object(a["a"])(`users/${t.user}/comments`, "v2"), t)
		}

		function c(t, e) {
			return Object(n["b"])(Object(a["a"])(`users/${t}/investment/hubs`, "v2"), e)
		}

		function l(t) {
			return Object(n["b"])(Object(a["a"])(`users/${t.user}/bookmarks/comments`, "v2"), t)
		}

		function u(t, e) {
			return Object(n["b"])(Object(a["a"])(`users/${t}/subscriptions/companies`, "v2"), e)
		}

		function m(t, e) {
			return Object(n["b"])(Object(a["a"])(`users/${t}/invited`, "v2"), e)
		}

		function d(t) {
			return Object(n["b"])(Object(a["a"])(`users/${t}/ppg`, "v2"))
		}

		function p(t, e) {
			return Object(n["c"])(Object(a["a"])(`users/${t}/ppg`, "v2"), {
				program: e
			})
		}

		function _(t, e) {
			return Object(n["b"])(Object(a["a"])(`users/${t}/subscriptions/hubs`, "v2"), e)
		}

		function h(t, e) {
			return Object(n["b"])(Object(a["a"])(`users/${t}/card`, "v2"), e)
		}

		function g(t, e) {
			return Object(n["b"])(Object(a["a"])(`users/${t}/whois`, "v2"), e)
		}

		function f(t, e) {
			return Object(n["c"])(Object(a["a"])(`users/${t}/votes`, "v2"), e)
		}

		function b(t) {
			return Object(n["c"])(Object(a["a"])(`users/${t}/following/toggle`, "v2"))
		}

		function T(t) {
			return Object(n["c"])(Object(a["a"])("settings/i18n"), t)
		}

		function v(t, e) {
			return Object(n["b"])(Object(a["a"])(`users/${t}/statistics/viewcount`, "v2"), e)
		}

		function E(t, e) {
			return Object(n["b"])(Object(a["a"])(`users/${t}/statistics/posts`, "v2"), e)
		}

		function S(t) {
			return Object(n["c"])(Object(a["a"])("settings/subscription", "v2"), t)
		}

		function O(t) {
			return Object(n["b"])(Object(a["a"])(`users/${t}/note`, "v2"))
		}

		function C(t, e) {
			return Object(n["c"])(Object(a["a"])(`users/${t}/note`, "v2"), e)
		}

		function I(t) {
			return Object(n["c"])(Object(a["a"])(`users/${t}/invites`, "v2"))
		}

		function A(t) {
			return Object(n["c"])(Object(a["a"])(`users/${t}/issue_invite`, "v2"))
		}

		function y(t, e) {
			return Object(n["b"])(Object(a["a"])(`users/${t}/followed`, "v2"), e)
		}

		function L(t, e) {
			return Object(n["b"])(Object(a["a"])(`users/${t}/followers`, "v2"), e)
		}

		function P(t, e) {
			return Object(n["b"])(Object(a["a"])(`users/${t}/occupation`, "v2"), e)
		}

		function N(t) {
			return Object(n["b"])(Object(a["a"])(`settings/${t}/form`, "v2"))
		}

		function R(t) {
			return Object(n["b"])(Object(a["a"])("settings/oauth/" + t, "v2"))
		}

		function M(t) {
			return Object(n["c"])(Object(a["a"])("settings/oauth/delete/" + t, "v2"))
		}

		function w(t) {
			return Object(n["c"])(Object(a["a"])("settings/oauth/clients", "v2"), t)
		}

		function k(t, e, s) {
			return Object(n["c"])(Object(a["a"])(`settings/oauth/clients/${e}/${s}`, "v2"), t)
		}

		function j(t) {
			return Object(n["b"])(Object(a["a"])(`settings/oauth/clients/${t}/form`, "v2"))
		}

		function D() {
			return Object(n["b"])(Object(a["a"])("refs/user_contact_types", "v2"))
		}

		function x() {
			return Object(n["b"])(Object(a["a"])("refs/geo", "v2"))
		}

		function B(t) {
			return Object(n["b"])(Object(a["a"])("refs/geo", "v2"), {
				countryId: t
			})
		}

		function $(t, e) {
			return Object(n["b"])(Object(a["a"])("refs/geo", "v2"), {
				countryId: t,
				regionId: e
			})
		}

		function F() {
			return Object(n["b"])(Object(a["a"])("refs/specializations", "v2"))
		}

		function G() {
			return Object(n["b"])(Object(a["a"])("refs/currencies", "v2"))
		}

		function U() {
			return Object(n["b"])(Object(a["a"])("refs/qualifications", "v2"))
		}

		function V(t) {
			return Object(n["b"])(Object(a["a"])("suggest/skills", "v2"), t)
		}

		function W(t) {
			return Object(n["b"])(Object(a["a"])("suggest/skills/similar", "v2"), {
				skills: t
			})
		}

		function H(t, e) {
			return Object(n["c"])(Object(a["a"])("settings/" + e, "v2"), t)
		}

		function Y(t) {
			return Object(n["c"])(Object(a["a"])("upload", "v2"), t)
		}

		function q() {
			return Object(n["b"])(Object(a["a"])("statistics/users", "v2"))
		}

		function K() {
			return Object(n["b"])(Object(a["a"])("karma-stats"))
		}

		function z(t, e) {
			return Object(n["c"])(Object(a["a"])(`users/${t}/employee_requests`, "v2"), e)
		}

		function X(t, e) {
			return Object(n["b"])(Object(a["a"])(`users/${t}/employee_requests/${e}`, "v2"))
		}

		function J(t, e) {
			return Object(n["a"])(Object(a["a"])(`users/${t}/employee_requests/${e}/`, "v2"))
		}
	},
	6376: function (t, e, s) {
		"use strict";
		s("071c")
	},
	"64ee": function (t, e, s) {
		"use strict";
		s("023f")
	},
	6528: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMBlock", {
				attrs: {
					title: t.msg("WIDGET_TWITTER")
				}
			}, [s("ul", {
				staticClass: "tm-widget-twitter__list"
			}, t._l(t.tweets, (function (e) {
				return s("li", {
					key: e.id,
					staticClass: "tm-widget-twitter__item"
				}, [s("header", {
					staticClass: "tm-widget-twitter__header"
				}, [s("a", {
					staticClass: "tm-widget-twitter__name",
					attrs: {
						href: "https://twitter.com/" + e.user.displayName,
						rel: "noreferrer nofollow",
						target: "_blank"
					},
					domProps: {
						textContent: t._s(e.user.name)
					}
				}), t._v(" "), s("small", {
					staticClass: "tm-widget-twitter__date"
				}, [s("a", {
					staticClass: "tm-widget-twitter__link",
					attrs: {
						href: e.tweetUrl,
						rel: "noreferrer nofollow",
						target: "_blank"
					}
				}, [s("TMDatetime", {
					attrs: {
						date: e.date
					}
				})], 1)])]), t._v(" "), s("p", {
					staticClass: "tm-widget-twitter__message",
					domProps: {
						innerHTML: t._s(e.text)
					}
				})])
			})), 0), t._v(" "), s("a", {
				staticClass: "btn btn_solid btn_large tm-widget-twitter__follow-button",
				attrs: {
					href: t.twitterLink,
					rel: "nofollow noreferrer",
					target: "_blank"
				}
			}, [t._v("\n    " + t._s(t.msg("WIDGET_TWITTER_FOLLOW", {
				name: t.widgetData.twitterName
			})) + "\n  ")])])
		},
			a = [],
			i = s("19d1"),
			o = s("8fab"),
			r = {
				name: "TMWidgetTwitter",
				components: {
					TMDatetime: o["a"],
					TMBlock: i["a"]
				},
				props: {
					widgetData: {
						type: Object,
						required: !0
					}
				},
				computed: {
					tweets() {
						return this.widgetData.tweets.slice(0, 3).map(t => ({
							...t,
							date: new Date(t.date)
						}))
					},
					twitterLink() {
						return "https://twitter.com/" + this.widgetData.twitterName
					}
				}
			},
			c = r,
			l = (s("b119"), s("2877")),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	6593: function (t, e, s) {
		"use strict";
		s("9fd7")
	},
	"65f3": function (t, e, s) { },
	"670f": function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return o
		})), s.d(e, "c", (function () {
			return r
		})), s.d(e, "d", (function () {
			return u
		})), s.d(e, "b", (function () {
			return v
		})), s.d(e, "e", (function () {
			return E
		})), s.d(e, "f", (function () {
			return S
		}));
		var n = s("6f23"),
			a = s("1172"),
			i = s("1f65");
		const o = "xpanel_mobile",
			r = t => {
				const [, e] = t.getAttribute("name").split("comment_");
				return e
			},
			c = t => t.offsetParent,
			l = () => {
				const t = Array.from(document.querySelectorAll("[data-comment-new]"));
				if (0 === t.length) return [];
				const e = t.filter(c);
				return 0 === e.length ? t : e
			},
			u = () => {
				const t = l();
				return 0 === t.length ? null : t[0]
			},
			m = () => Array.from(document.querySelectorAll("[data-selected-comment]")).forEach(t => {
				delete t.dataset.selectedComment
			}),
			d = t => {
				t.dataset.selectedComment = "true"
			},
			p = t => {
				m(), d(t)
			},
			_ = () => document.querySelector("[data-selected-comment]"),
			h = () => {
				const {
					top: t
				} = document.documentElement.getBoundingClientRect();
				return window.scrollY === Math.abs(t)
			},
			g = () => {
				const t = l();
				if (0 === t.length) return null;
				let e;
				if (h()) e = t.indexOf(_()) - 1;
				else {
					const s = Object(i["a"])(t);
					if (!s) return null;
					e = t.indexOf(s) - 1
				}
				return t[e] || t[t.length - 1]
			},
			f = () => {
				const t = l();
				if (0 === t.length) return null;
				let e;
				if (h()) e = t.indexOf(_()) + 1;
				else {
					const s = Object(i["a"])(t);
					if (!s) return null;
					const n = 0 === s.getBoundingClientRect().top,
						a = t.indexOf(s);
					e = n ? a + 1 : a
				}
				return t[e] || t[0]
			},
			b = t => t ? c(t) ? t : b(t.parentElement) : null,
			T = t => e => {
				if (e instanceof a["a"]) {
					const e = b(t).querySelector("[data-comment-collapsed-thread]");
					Object(a["b"])(e, "start")
				}
			},
			v = t => {
				if (t.parentElement) {
					const e = t.parentElement.querySelector("[data-comment-header]");
					e && e.focus()
				}
			},
			E = () => {
				const t = f();
				t && Object(a["b"])(t).then(() => {
					p(t), Object(n["c"])(o, "next"), v(t)
				}).catch(T(t))
			},
			S = () => {
				const t = g();
				t && Object(a["b"])(t).then(() => {
					p(t), Object(n["c"])(o, "prev"), v(t)
				}).catch(T(t))
			}
	},
	6714: function (t, e, s) { },
	"67d1": function (t, e, s) {
		"use strict";
		s.d(e, "C", (function () {
			return o
		})), s.d(e, "D", (function () {
			return r
		})), s.d(e, "z", (function () {
			return c
		})), s.d(e, "U", (function () {
			return l
		})), s.d(e, "fb", (function () {
			return u
		})), s.d(e, "Qb", (function () {
			return m
		})), s.d(e, "jb", (function () {
			return d
		})), s.d(e, "kb", (function () {
			return p
		})), s.d(e, "R", (function () {
			return _
		})), s.d(e, "E", (function () {
			return h
		})), s.d(e, "j", (function () {
			return g
		})), s.d(e, "tb", (function () {
			return f
		})), s.d(e, "n", (function () {
			return b
		})), s.d(e, "vb", (function () {
			return T
		})), s.d(e, "Fb", (function () {
			return v
		})), s.d(e, "ub", (function () {
			return E
		})), s.d(e, "u", (function () {
			return S
		})), s.d(e, "wb", (function () {
			return O
		})), s.d(e, "Gb", (function () {
			return C
		})), s.d(e, "Hb", (function () {
			return I
		})), s.d(e, "o", (function () {
			return A
		})), s.d(e, "Ib", (function () {
			return y
		})), s.d(e, "yb", (function () {
			return L
		})), s.d(e, "xb", (function () {
			return P
		})), s.d(e, "pb", (function () {
			return N
		})), s.d(e, "Eb", (function () {
			return R
		})), s.d(e, "bb", (function () {
			return M
		})), s.d(e, "B", (function () {
			return w
		})), s.d(e, "A", (function () {
			return k
		})), s.d(e, "db", (function () {
			return j
		})), s.d(e, "ib", (function () {
			return D
		})), s.d(e, "T", (function () {
			return x
		})), s.d(e, "L", (function () {
			return B
		})), s.d(e, "H", (function () {
			return $
		})), s.d(e, "W", (function () {
			return F
		})), s.d(e, "eb", (function () {
			return G
		})), s.d(e, "X", (function () {
			return U
		})), s.d(e, "zb", (function () {
			return V
		})), s.d(e, "P", (function () {
			return W
		})), s.d(e, "G", (function () {
			return H
		})), s.d(e, "K", (function () {
			return Y
		})), s.d(e, "Q", (function () {
			return q
		})), s.d(e, "V", (function () {
			return K
		})), s.d(e, "Sb", (function () {
			return z
		})), s.d(e, "Tb", (function () {
			return X
		})), s.d(e, "N", (function () {
			return J
		})), s.d(e, "a", (function () {
			return Q
		})), s.d(e, "S", (function () {
			return Z
		})), s.d(e, "Lb", (function () {
			return tt
		})), s.d(e, "M", (function () {
			return et
		})), s.d(e, "Mb", (function () {
			return st
		})), s.d(e, "cb", (function () {
			return nt
		})), s.d(e, "ab", (function () {
			return at
		})), s.d(e, "c", (function () {
			return it
		})), s.d(e, "k", (function () {
			return ot
		})), s.d(e, "Z", (function () {
			return rt
		})), s.d(e, "Ab", (function () {
			return ct
		})), s.d(e, "Bb", (function () {
			return lt
		})), s.d(e, "Y", (function () {
			return ut
		})), s.d(e, "gb", (function () {
			return mt
		})), s.d(e, "i", (function () {
			return dt
		})), s.d(e, "h", (function () {
			return pt
		})), s.d(e, "hb", (function () {
			return _t
		})), s.d(e, "d", (function () {
			return ht
		})), s.d(e, "Db", (function () {
			return gt
		})), s.d(e, "Cb", (function () {
			return ft
		})), s.d(e, "l", (function () {
			return bt
		})), s.d(e, "lb", (function () {
			return Tt
		})), s.d(e, "w", (function () {
			return vt
		})), s.d(e, "sb", (function () {
			return Et
		})), s.d(e, "Jb", (function () {
			return St
		})), s.d(e, "Kb", (function () {
			return Ot
		})), s.d(e, "Nb", (function () {
			return Ct
		})), s.d(e, "Ob", (function () {
			return It
		})), s.d(e, "rb", (function () {
			return At
		})), s.d(e, "Pb", (function () {
			return yt
		})), s.d(e, "e", (function () {
			return Lt
		})), s.d(e, "t", (function () {
			return Pt
		})), s.d(e, "qb", (function () {
			return Nt
		})), s.d(e, "F", (function () {
			return Rt
		})), s.d(e, "O", (function () {
			return Mt
		})), s.d(e, "y", (function () {
			return wt
		})), s.d(e, "b", (function () {
			return kt
		})), s.d(e, "s", (function () {
			return jt
		})), s.d(e, "m", (function () {
			return Dt
		})), s.d(e, "x", (function () {
			return xt
		})), s.d(e, "Rb", (function () {
			return Bt
		})), s.d(e, "f", (function () {
			return $t
		})), s.d(e, "v", (function () {
			return Ft
		})), s.d(e, "J", (function () {
			return Gt
		})), s.d(e, "I", (function () {
			return Ut
		})), s.d(e, "g", (function () {
			return Vt
		})), s.d(e, "mb", (function () {
			return Wt
		})), s.d(e, "ob", (function () {
			return Ht
		})), s.d(e, "nb", (function () {
			return Yt
		})), s.d(e, "p", (function () {
			return qt
		})), s.d(e, "q", (function () {
			return Kt
		})), s.d(e, "r", (function () {
			return zt
		}));
		var n = s("2abc"),
			a = s("2105"),
			i = s("4dcc");

		function o(t = {}) {
			const {
				flowAlias: e,
				hubAlias: s
			} = t;
			let n = "companies/";
			return e && (n = `flows/${e}/companies`), s && (n = `hubs/${s}/companies`), Object(a["b"])(Object(i["a"])(n, "v2"), t)
		}

		function r(t) {
			return Object(a["b"])(Object(i["a"])("companies/search", "v2"), t)
		}

		function c(t) {
			return Object(a["b"])(Object(i["a"])("companies/company_categories/", "v2"), t)
		}

		function l(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/card/`, "v2"), e)
		}

		function u(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/whois/`, "v2"), e)
		}

		function m(t) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/subscription`, "v2"))
		}

		function d(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/widgets/`, "v2"), e)
		}

		function p(t, e, s) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/workers/${e}`, "v2"), s)
		}

		function _(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/widgets`, "v2"), e)
		}

		function h(t, e, s) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/widget_applications/${e}/applications`, "v2"), s)
		}

		function g(t, e, s) {
			return Object(a["a"])(Object(i["a"])(`companies/${t}/admin/widget_applications/${e}/applications/${s}`, "v2"))
		}

		function f(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/widget_twitter/${e}/account`, "v2"))
		}

		function b(t, e) {
			return Object(a["a"])(Object(i["a"])(`companies/${t}/admin/widget_twitter/${e}/account`, "v2"))
		}

		function T(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/widget_twitter/${e}/connect`, "v2"), null)
		}

		function v(t, e, s) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/widget_twitter/${e}/exclude_replies`, "v2"), s)
		}

		function E(t, e, s) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/${e}/${s}/form`, "v2"))
		}

		function S(t, e, s) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/widget_applications/${e}/applications/${s}/form`, "v2"))
		}

		function O(t, e, s, n) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/widget_applications/${e}/applications/${s}`, "v2"), n)
		}

		function C(t, e, s, n) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/widgets/${e}/${s}`, "v2"), n)
		}

		function I(t, e, s) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/widgets/${e}/published`, "v2"), s)
		}

		function A(t, e, s) {
			return Object(a["a"])(Object(i["a"])(`companies/${t}/admin/widgets/${e}/${s}`, "v2"))
		}

		function y(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/widgets_ordering`, "v2"), e)
		}

		function L(t, e, s) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/widget_applications/${e}/ordering`, "v2"), s)
		}

		function P(t, e, s, n) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/widget_applications/${e}/applications/${s}/published`, "v2"), n)
		}

		function N(t, e, s) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/widget_news/${e}/items`, "v2"), s)
		}

		function R(t, e, s, n) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/widget_news/${e}/items/${s}/published`, "v2"), n)
		}

		function M(t, e, s) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/fans/${e}`, "v2"), s)
		}

		function w(t) {
			return Object(a["b"])(Object(i["a"])("companies/top/by_hub/" + t, "v2"))
		}

		function k(t) {
			return Object(a["b"])(Object(i["a"])("companies/top/by_flow/" + t, "v2"))
		}

		function j(t) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/investment/hubs`, "v2"))
		}

		function D(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/vacancies/`, "v2"), e)
		}

		function x(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/branding/${e}`, "v2"))
		}

		function B(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/info`, "v2"), e)
		}

		function $(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/profile/form`, "v2"), e)
		}

		function F() {
			return Object(a["b"])(Object(i["a"])("refs/company_categories", "v2"))
		}

		function G() {
			return Object(a["b"])(Object(i["a"])("refs/human_resources", "v2"))
		}

		function U() {
			return Object(a["b"])(Object(i["a"])("refs/company_contact_types", "v2"))
		}

		function V(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/profile`, "v2"), e)
		}

		function W(t, e) {
			const s = e.period || "month",
				o = {
					rating: "rating",
					views: "posts_views",
					followers: "subscribers"
				},
				r = {
					week: 7,
					month: 30,
					quarter: 90,
					halfyear: 180,
					year: 365,
					twoyears: 730
				},
				c = r[s],
				l = Object(n["d"])(c);
			return Object(a["b"])(Object(i["a"])(`companies/${t}/indicators/`, "v2"), {
				...l,
				type: o[e.type]
			})
		}

		function H(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/statistics/authors`, "v2"), e)
		}

		function Y(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/statistics/hubs`, "v2"), e)
		}

		function q(t, {
			page: e,
			perPage: s
		}) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/career/vacancies/`, "v2"), {
				page_num: e,
				per_page: s
			})
		}

		function K(t) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/career/settings/form`, "v2"))
		}

		function z(t) {
			const {
				companyAlias: e,
				careerAlias: s,
				isRatingEnabled: n,
				isVacanciesEnabled: o
			} = t;
			return Object(a["c"])(Object(i["a"])(`companies/${e}/career/settings`, "v2"), {
				alias: s,
				isRatingEnabled: n,
				isVacanciesEnabled: o
			})
		}

		function X({
			companyAlias: t,
			vacancyId: e,
			isActive: s
		}) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/career/vacancy`, "v2"), {
				id: e,
				isActive: s
			})
		}

		function J(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/log`, "v2"), e)
		}

		function Q(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/tariff/code`, "v2"), e)
		}

		function Z(t) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/analytics/settings/form`, "v2"))
		}

		function tt(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/analytics/settings`, "v2"), e)
		}

		function et(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/localization/form`, "v2"), e)
		}

		function st(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/localization`, "v2"), e)
		}

		function nt(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/finance/list`, "v2"), e)
		}

		function at(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/employees`, "v2"), e)
		}

		function it(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/employees`, "v2"), e)
		}

		function ot(t, e) {
			return Object(a["a"])(Object(i["a"])(`companies/${t}/admin/employees/${e}/`, "v2"))
		}

		function rt(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/employee_requests`, "v2"), e)
		}

		function ct(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/employee_requests/${e}/approve`, "v2"), null)
		}

		function lt(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/employee_requests/${e}/reject`, "v2"), null)
		}

		function ut(t) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/tariff/current`, "v2"))
		}

		function mt(t) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/tariff/list`, "v2"))
		}

		function dt(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/tariff/prolong`, "v2"), e)
		}

		function pt(t) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/startup/prolong`, "v2"))
		}

		function _t(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/manager/list`, "v2"), e)
		}

		function ht(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/manager`, "v2"), e)
		}

		function gt(t, e, s) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/manager/${e}/role`, "v2"), s)
		}

		function ft(t, e, s) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/manager/${e}/settings`, "v2"), s)
		}

		function bt(t, e) {
			return Object(a["a"])(Object(i["a"])(`companies/${t}/admin/manager/${e}/`, "v2"))
		}

		function Tt(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/invites/count`, "v2"), e)
		}

		function vt(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/invites/used`, "v2"), e)
		}

		function Et(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/invites/unused`, "v2"), e)
		}

		function St(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/invites/${e}/`, "v2"))
		}

		function Ot(t, e) {
			return Object(a["a"])(Object(i["a"])(`companies/${t}/invites/${e}/`, "v2"))
		}

		function Ct(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/invites/by_email`, "v2"), e)
		}

		function It(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/invites/by_login`, "v2"), e)
		}

		function At(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/requisites/list`, "v2"), e)
		}

		function yt(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/requisites/${e}/current`, "v2"))
		}

		function Lt(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/requisites`, "v2"), e)
		}

		function Pt(t, e, s) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/requisites/${e}`, "v2"), s)
		}

		function Nt(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/requisites/${e}`, "v2"))
		}

		function Rt(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/statistics/posts/`, "v2"), e)
		}

		function Mt(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/statistics/news/`, "v2"), e)
		}

		function wt(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/branding/list`, "v2"), e)
		}

		function kt(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/branding/list/`, "v2"), e)
		}

		function jt(t, e, s) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/branding/list/${e}/`, "v2"), s)
		}

		function Dt(t, e) {
			return Object(a["a"])(Object(i["a"])(`companies/${t}/admin/branding/list/${e}/`, "v2"))
		}

		function xt(t, e, s) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/branding/list/${e}/form/`, "v2"), s)
		}

		function Bt(t) {
			return Object(a["a"])(Object(i["a"])(`companies/${t}/admin/branding/current/`, "v2"))
		}

		function $t(t, e) {
			return Object(a["c"])(Object(i["a"])(`companies/${t}/admin/branding/current/`, "v2"), e)
		}

		function Ft() {
			return Object(a["b"])(Object(i["a"])("refs/application_platforms", "v2"))
		}

		function Gt(t) {
			return Object(a["b"])(Object(i["a"])("companies/faq/", "v2"), t)
		}

		function Ut(t, e) {
			return Object(a["b"])(Object(i["a"])("companies/faq/" + t, "v2"), e)
		}

		function Vt(t, e, s) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/workers/all/${e}`, "v2"), s)
		}

		function Wt(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/employees_suggest`, "v2"), e)
		}

		function Ht(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/managers_suggest`, "v2"), e)
		}

		function Yt(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/invites/by_login/suggest`, "v2"), e)
		}

		function qt(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/statistics/posts/export`, "v2"), e, 0, !0, "blob")
		}

		function Kt(t, e) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/statistics/news/export`, "v2"), e, 0, !0, "blob")
		}

		function zt(t, e, s) {
			return Object(a["b"])(Object(i["a"])(`companies/${t}/admin/finance/files/${e}`, "v2"), s, 0, !0, "blob")
		}
	},
	6833: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-empty-placeholder"
			}, [s("TMSvgImg", {
				staticClass: "tm-empty-placeholder__image",
				attrs: {
					id: t.image
				}
			}), t._v(" "), s("div", {
				staticClass: "tm-empty-placeholder__text"
			}, [t._t("default", (function () {
				return [t._v("\n      " + t._s(t.title || t.msg("EMPTY_POSTS_MESSAGE")) + "\n    ")]
			}))], 2), t._v(" "), t._t("footer")], 2)
		},
			a = [],
			i = s("b7d0"),
			o = {
				name: "TMEmptyPlaceholder",
				components: {
					TMSvgImg: i["a"]
				},
				props: {
					title: {
						type: String,
						default: null
					},
					image: {
						type: String,
						default: "/img/empty-post-placeholder.svg#placeholder"
					}
				}
			},
			r = o,
			c = (s("8bba"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	6853: function (t, e, s) { },
	6889: function (t, e, s) {
		"use strict";
		s("d6a5")
	},
	"68a4": function (t, e, s) { },
	"68eb": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "lds-ring",
				style: t.styleVars
			}, [s("div", {
				style: t.styleVars
			}), t._v(" "), s("div", {
				style: t.styleVars
			}), t._v(" "), s("div", {
				style: t.styleVars
			}), t._v(" "), s("div", {
				style: t.styleVars
			})])
		},
			a = [],
			i = {
				name: "TMCircleLoader",
				props: {
					width: {
						type: Number,
						default: 15
					},
					height: {
						type: Number,
						default: 15
					},
					color: {
						type: String,
						default: "#bbcdd6"
					},
					circleWidth: {
						type: Number,
						default: 15
					},
					circleHeight: {
						type: Number,
						default: 15
					}
				},
				computed: {
					styleVars() {
						return {
							"--circle-loader-width": this.width + "px",
							"--circle-loader-height": this.height + "px",
							"--circle-loader-circle-width": this.circleWidth + "px",
							"--circle-loader-circle-height": this.circleHeight + "px",
							"--circle-loader-circle-border-color": "" + this.color
						}
					}
				}
			},
			o = i,
			r = (s("fb7a"), s("2877")),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["a"] = c.exports
	},
	"6a34": function (t, e, s) {
		"use strict";
		s("b77d")
	},
	"6be8": function (t, e, s) {
		"use strict";
		let n, a;
		s.d(e, "a", (function () {
			return i
		})), s.d(e, "b", (function () {
			return o
		}));
		const i = t => (n || (n = new Intl.NumberFormat("en-US", {
			notation: "compact",
			compactDisplay: "short"
		})), n.format(t)),
			o = t => (a || (a = new Intl.NumberFormat("en-US", {
				useGrouping: !1,
				signDisplay: "exceptZero"
			})), a.format(t))
	},
	"6c10": function (t, e, s) {
		"use strict";
		s.d(e, "c", (function () {
			return a
		})), s.d(e, "b", (function () {
			return i
		})), s.d(e, "d", (function () {
			return o
		})), s.d(e, "e", (function () {
			return r
		})), s.d(e, "f", (function () {
			return c
		})), s.d(e, "a", (function () {
			return l
		}));
		const n = "production",
			a = "development" === n,
			i = "undefined" !== typeof window,
			o = "undefined" === typeof window,
			r = "test" === n,
			c = "https://localhost:7103/qna-habr",
			l = "https://localhost:7103/career-habr"
	},
	"6e7d": function (t, e, s) {
		"use strict";
		s("ecbd")
	},
	"6ef7": function (t, e, s) {
		"use strict";
		s("c9bb")
	},
	"6f23": function (t, e, s) {
		"use strict";
		s.d(e, "f", (function () {
			return c
		})), s.d(e, "d", (function () {
			return l
		})), s.d(e, "c", (function () {
			return u
		})), s.d(e, "e", (function () {
			return m
		})), s.d(e, "a", (function () {
			return d
		})), s.d(e, "b", (function () {
			return p
		}));
		var n = s("2bf7");

		function a(t, e, s) {
			return t ? e && e(t) : s && s()
		}

		function i() {
			const t = Object(n["d"])(Object(n["b"])());
			return t ? t.path : ""
		}

		function o(t) {
			const e = Object(n["d"])(Object(n["b"])());
			return `${e.protocol}//${e.host}${t}`
		}
		const r = new Map,
			c = (t, e) => a(window.gtag, t, e);

		function l(t, e) {
			c(s => {
				const a = t || i();
				s("event", "page_view", {
					page_location: o(a),
					send_to: r.get(e),
					event_callback: n["c"]
				})
			})
		}

		function u(t, e, s, n) {
			c(a => {
				a("event", e, {
					event_category: t,
					event_label: s,
					send_to: r.get(n)
				})
			})
		}

		function m(t, e, s) {
			c(n => {
				s ? n("config", r.get(s), {
					[t]: e
				}) : n("set", t, e)
			})
		}

		function d(t) {
			r.delete(t)
		}

		function p(t, e) {
			t && c(s => {
				const n = {
					send_page_view: !1
				},
					a = ["config", t];
				if (e) {
					a.push({
						...n,
						...e
					});
					const s = "object" === typeof e ? e.name : e;
					s && r.set(s, t)
				} else a.push(n);
				s(...a)
			})
		}
	},
	"6fa2": function (t, e, s) { },
	7043: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMBlock", {
				attrs: {
					spacing: t.spacing,
					title: t.title
				}
			}, [s("ul", {
				staticClass: "tm-article-list-block__list"
			}, [t._l(t.articleList, (function (e) {
				return s("li", {
					key: e.id,
					staticClass: "tm-article-list-block__item"
				}, [s("TMArticleSnippetBlock", {
					attrs: {
						article: e,
						"bookmark-module": t.bookmarkModule,
						"ga-options": t.gaOptions,
						layout: t.layout
					}
				})], 1)
			})), t._v(" "), t.$slots.lastItem ? s("li", {
				staticClass: "tm-article-list-block__item"
			}, [t._t("lastItem")], 2) : t._e()], 2)])
		},
			a = [],
			i = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("article", {
					class: "tm-article-snippet-block-" + t.layout + " tm-article-snippet-block-" + t.layout + "_preview"
				}, ["mostReadingList" !== t.bookmarkModule ? s("div", {
					staticClass: "tm-article-snippet-block__user-meta"
				}, [s("div", {
					staticClass: "tm-article-snippet-block__date"
				}, [t.article.timePublished ? s("TMDatetime", {
					attrs: {
						date: new Date(t.article.timePublished),
						"show-full-date-time": ""
					}
				}) : t.article.plannedPublishTime ? s("span", [t._v("\n        " + t._s(t.msg("ARTICLE_PLANNED")) + "\n        "), s("TMDatetime", {
					attrs: {
						date: new Date(t.article.plannedPublishTime),
						"show-full-date-time": ""
					}
				})], 1) : s("span", {
					domProps: {
						textContent: t._s(t.msg("ARTICLE_NEVER_PUBLISHED"))
					}
				})], 1)]) : t._e(), t._v(" "), "fullview" === t.layout ? s("h1", {
					staticClass: "tm-article-title",
					class: "tm-article-title_" + t.layout
				}, [s("span", {
					staticClass: "tm-article-title__text",
					domProps: {
						innerHTML: t._s(t.article.titleHtml)
					}
				})]) : s("h2", {
					staticClass: "tm-article-title",
					class: "tm-article-title_" + t.layout
				}, [s("TMArticleLink", {
					staticClass: "tm-article-title__link",
					class: t.titleClassName,
					attrs: {
						article: t.article
					},
					nativeOn: {
						click: function (e) {
							return t.logClickEvent.apply(null, arguments)
						}
					}
				}, [s("span", {
					domProps: {
						innerHTML: t._s(t.article.titleHtml)
					}
				})])], 1), t._v(" "), s("TMDataIcons", {
					attrs: {
						article: t.article,
						"bookmark-module": t.bookmarkModule,
						"ga-options": t.gaOptions,
						"icons-list": t.iconsList,
						type: t.layout
					}
				})], 1)
			},
			o = [],
			r = s("8819"),
			c = s("9022"),
			l = s("8fab"),
			u = s("9864"),
			m = s("6f23"),
			d = {
				name: "TMArticleSnippetBlock",
				components: {
					TMDataIcons: c["a"],
					TMDatetime: l["a"],
					TMArticleLink: r["a"]
				},
				props: {
					article: u["a"],
					gaOptions: {
						type: Object,
						default: null,
						required: !1
					},
					layout: {
						type: String,
						default: "block"
					},
					bookmarkModule: {
						type: String,
						default: "articlesList"
					}
				},
				computed: {
					iconsList() {
						return "block" === this.layout ? ["votes", "comments", "views", "favorite"] : ["views", "comments"]
					},
					titleClassName() {
						return {
							"tm-article-title__link_megapost": "megaproject" === this.article.postType
						}
					}
				},
				methods: {
					logClickEvent() {
						if (this.gaOptions) {
							const {
								category: t,
								action: e,
								label: s
							} = this.gaOptions;
							Object(m["c"])(t, e, s.post)
						}
					}
				}
			},
			p = d,
			_ = (s("ef66"), s("2877")),
			h = Object(_["a"])(p, i, o, !1, null, null, null),
			g = h.exports,
			f = s("19d1"),
			b = {
				name: "TMArticleListBlock",
				components: {
					TMBlock: f["a"],
					TMArticleSnippetBlock: g
				},
				props: {
					title: {
						type: String,
						default: null
					},
					dataList: {
						type: Array,
						default: () => []
					},
					maxPosts: {
						type: Number,
						default: 5
					},
					gaOptions: {
						type: Object,
						default: null,
						required: !1
					},
					layout: {
						type: String,
						default: "block"
					},
					bookmarkModule: {
						type: String,
						default: "articlesList"
					},
					spacing: {
						type: String,
						default: "around"
					}
				},
				computed: {
					articleList() {
						return this.dataList.slice(0, this.maxPosts)
					}
				}
			},
			T = b,
			v = (s("0e18"), Object(_["a"])(T, n, a, !1, null, null, null));
		e["a"] = v.exports
	},
	7140: function (t, e, s) {
		"use strict";
		s("9218")
	},
	"71b1": function (t, e, s) { },
	7273: function (t, e, s) { },
	7472: function (t, e, s) { },
	7527: function (t, e, s) {
		"use strict";
		s("7fc1")
	},
	"756c": function (t, e, s) {
		"use strict";
		s.d(e, "d", (function () {
			return i
		})), s.d(e, "e", (function () {
			return o
		})), s.d(e, "c", (function () {
			return r
		})), s.d(e, "b", (function () {
			return c
		})), s.d(e, "g", (function () {
			return l
		})), s.d(e, "f", (function () {
			return u
		})), s.d(e, "a", (function () {
			return m
		}));
		var n = s("2105"),
			a = s("4dcc");

		function i(t) {
			let e = Object(a["a"])("hubs/", "v2");
			return t.flowAlias && (e = Object(a["a"])(`hubs/${t.flowAlias}/`, "v2")), Object(n["b"])(e, t)
		}

		function o(t) {
			return Object(n["b"])(Object(a["a"])("hubs/search", "v2"), t)
		}

		function r(t, e) {
			return Object(n["b"])(Object(a["a"])(`hubs/${t}/profile`, "v2"), e)
		}

		function c(t, e) {
			return Object(n["b"])(Object(a["a"])(`hubs/${t}/authors`, "v2"), e)
		}

		function l(t) {
			return Object(n["c"])(Object(a["a"])(`hubs/${t}/subscription`, "v2"))
		}

		function u(t) {
			return Object(n["b"])(Object(a["a"])("presets/list", "v2"), t)
		}

		function m(t) {
			return Object(n["c"])(Object(a["a"])("presets/subscription", "v2"), t)
		}
	},
	"778e": function (t, e, s) {
		"use strict";
		s("a368")
	},
	"785c": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return t.mostReadingList && t.mostReadingList.length ? s("TMArticleListBlock", {
				attrs: {
					"bookmark-module": "mostReadingList",
					"data-list": t.mostReadingList,
					"ga-options": t.mostReadingGaOptions(t.gaType),
					layout: t.layout,
					spacing: t.spacing,
					title: t.msg("TITLE_MOST_READING")
				},
				scopedSlots: t._u([t.hasLoaded && t.mostReadingPromoLink ? {
					key: "lastItem",
					fn: function () {
						return [s("TMPromoPostLink", {
							attrs: {
								"promo-post": t.mostReadingPromoLink
							},
							on: {
								click: t.onPromoLinkClick
							}
						})]
					},
					proxy: !0
				} : null], null, !0)
			}) : t._e()
		},
			a = [],
			i = s("2f62"),
			o = s("7043"),
			r = s("4ac0"),
			c = s("6f23"),
			l = {
				name: "TMMostReadingBlock",
				components: {
					TMPromoPostLink: r["a"],
					TMArticleListBlock: o["a"]
				},
				props: {
					gaType: {
						type: String,
						default: "post"
					},
					layout: {
						type: String,
						default: null
					},
					spacing: {
						type: String,
						default: "around"
					}
				},
				computed: {
					...Object(i["c"])("mostReadingList", ["mostReadingList"]),
					...Object(i["e"])("mostReadingList", ["promoPost"]),
					...Object(i["e"])("promoData", ["hasLoaded"]),
					...Object(i["c"])("promoData", ["mostReadingPromoLink"])
				},
				mounted() {
					this.$store.dispatch("mostReadingList/loadMostReadingList", {
						route: this.$route
					})
				},
				methods: {
					mostReadingGaOptions(t) {
						return {
							category: "tm_block",
							action: "read_now," + t,
							label: {
								post: "post",
								comment: "comment"
							}
						}
					},
					mostReadingPromoGaOptions(t, e) {
						return {
							category: "tm_block",
							action: "read_now," + t,
							label: {
								post: e,
								comment: e
							}
						}
					},
					onPromoLinkClick() {
						Object(c["c"])(this.mostReadingPromoGaOptions(this.type, this.mostReadingPromoLink.link.url))
					}
				}
			},
			u = l,
			m = s("2877"),
			d = Object(m["a"])(u, n, a, !1, null, null, null);
		e["a"] = d.exports
	},
	"79f0": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-comment",
				attrs: {
					"data-gallery-root": ""
				}
			}, [s("header", {
				ref: "commentHeader",
				staticClass: "tm-comment__header",
				class: t.hasMounted ? t.className : null,
				attrs: {
					"data-comment-header": "",
					tabindex: "-1"
				}
			}, [s("div", {
				staticClass: "tm-comment__header-inner"
			}, [s("TMUserInfo", {
				ref: "userInfo",
				staticClass: "tm-comment__user-info",
				attrs: {
					author: t.comment.author,
					avatar: t.comment.author.avatarUrl
				},
				on: {
					mouseenter: t.onUserMouseenter,
					mouseleave: t.onUserMouseleave
				}
			}, [t._t("comment-link", (function () {
				return [s("a", {
					staticClass: "tm-comment__datetime",
					attrs: {
						href: "#comment_" + t.comment.id
					}
				}, [t._v("\n            " + t._s(t.msg("DATE_FORMAT", t.datetimeStr)) + "\n          ")])]
			}), {
				datetimeStr: t.datetimeStr
			})], 2)], 1), t._v(" "), t.isCommentControlsShown && !t.isPinnedSection ? s("div", {
				ref: "commentButtons",
				staticClass: "tm-comment__buttons"
			}, [t.comment.parentId ? s("button", {
				ref: "scrollToParentButton",
				staticClass: "tm-comment__button tm-comment__button_with-icon",
				attrs: {
					type: "button"
				},
				on: {
					click: function () {
						t.scrollTo("#comment_" + t.comment.parentId), t.setScrollParents({
							comment: t.comment
						})
					}
				}
			}, [s("TMSvgImg", {
				staticClass: "tm-comment__icon",
				attrs: {
					id: "small-arrow",
					title: t.msg("GO_TO_PARENT_COMMENT")
				}
			})], 1) : t._e(), t._v(" "), t.getScrollParents && t.getScrollParents[t.comment.id] ? s("button", {
				ref: "scrollToChildButton",
				staticClass: "tm-comment__button tm-comment__button_with-icon",
				attrs: {
					type: "button"
				},
				on: {
					click: function (e) {
						return t.scrollTo("#comment_" + t.getScrollParents[t.comment.id])
					}
				}
			}, [s("TMSvgImg", {
				staticClass: "tm-comment__icon tm-comment__icon_rotated",
				attrs: {
					id: "small-arrow",
					title: t.msg("GO_TO_CHILD_COMMENT")
				}
			})], 1) : t._e()]) : t._e()]), t._v(" "), s("div", {
				ref: "commentBody",
				staticClass: "tm-comment__body-content",
				class: {
					"tm-comment__body-content_muted": t.opacity, "tm-comment__body-content_v2": t.comment.editorVersion > 1
				},
				style: t.opacity,
				domProps: {
					innerHTML: t._s(t.comment.message)
				}
			}), t._v(" "), s("transition", {
				attrs: {
					name: "transition-fade"
				}
			}, [t.userPopoverEnabled && t.userInfoPopupVisible ? s("TMUserInfoPopup", {
				ref: "userInfoPopup",
				attrs: {
					root: t.$refs.userInfo.$el,
					"user-alias": t.comment.author.alias
				}
			}) : t._e()], 1), t._v(" "), t.galleryImages.length ? s("TMGallery", {
				ref: "commentGallary",
				staticClass: "tm-comment__gallery",
				attrs: {
					"images-list": t.galleryImages
				}
			}) : t._e()], 1)
		},
			a = [],
			i = s("2f62"),
			o = s("f7fe"),
			r = s.n(o),
			c = s("84a2"),
			l = s.n(c),
			u = s("da18"),
			m = s("0414"),
			d = s("b7d0"),
			p = s("31ba"),
			_ = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMPopover", {
					staticClass: "user-info-popup",
					attrs: {
						root: t.root
					}
				}, [t.user ? [s("div", {
					staticClass: "user-info-popup__wrapper"
				}, [s("TMUserCard", {
					attrs: {
						"avatar-size": 40,
						"is-donate-button-visible": !0,
						user: t.user,
						variant: "popover"
					}
				})], 1), t._v(" "), s("div", {
					staticClass: "user-info-popup__footer"
				}, [s("TMDescriptionList", {
					staticClass: "user-info-popup__stat",
					attrs: {
						title: t.msg("PROFILE_POSTS") + ":",
						variant: "inline"
					}
				}, [t._v("\n        " + t._s(t.user.counterStats.postCount) + "\n      ")]), t._v(" "), s("TMDescriptionList", {
					staticClass: "user-info-popup__stat",
					attrs: {
						title: t.msg("PROFILE_COMMENTS") + ":",
						variant: "inline"
					}
				}, [t._v("\n        " + t._s(t.user.counterStats.commentCount) + "\n      ")])], 1)] : s("div", {
					staticClass: "user-info-popup__wrapper"
				}, [s("TMUserInfoPopupPlaceholder")], 1)], 2)
			},
			h = [],
			g = s("46ac"),
			f = s("3cb0"),
			b = s("eff8"),
			T = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "user-info-popup-placeholder"
				}, [t._m(0), t._v(" "), s("div", {
					staticClass: "user-info-popup-placeholder__category-info"
				}, [s("span", {
					staticClass: "user-info-popup-placeholder__category-name",
					style: "width: " + t.getRandomNumberFromRange(80, 150) + "px"
				}), t._v(" "), s("div", {
					staticClass: "user-info-popup-placeholder__category-description",
					style: "width: " + t.getRandomNumberFromRange(30, 210) + "px"
				})])])
			},
			v = [function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "user-info-popup-placeholder__user-profile-data"
				}, [s("div", {
					staticClass: "user-info-popup-placeholder__category-avatar"
				})])
			}],
			E = s("edc0"),
			S = {
				name: "TMUserInfoPopupPlaceholder",
				methods: {
					getRandomNumberFromRange: E["a"]
				}
			},
			O = S,
			C = (s("e560"), s("2877")),
			I = Object(C["a"])(O, T, v, !1, null, null, null),
			A = I.exports,
			y = {
				name: "TMUserInfoPopup",
				components: {
					TMUserInfoPopupPlaceholder: A,
					TMDescriptionList: g["a"],
					TMUserCard: b["a"],
					TMPopover: f["a"]
				},
				props: {
					userAlias: {
						type: [Number, String],
						required: !0
					},
					root: {
						type: null,
						required: !0
					}
				},
				computed: {
					...Object(i["c"])("users", ["getUserByAlias"]),
					user() {
						return this.getUserByAlias(this.userAlias)
					}
				},
				created() {
					this.loadUserInfo({
						alias: this.userAlias
					})
				},
				methods: {
					...Object(i["b"])("users", ["loadUserInfo"])
				}
			},
			L = y,
			P = (s("7be7"), Object(C["a"])(L, _, h, !1, null, null, null)),
			N = P.exports,
			R = s("126f"),
			M = s("5adb"),
			w = s("1559"),
			k = s("cefd"),
			j = s("cd16"),
			D = s("5d2c");
		const x = () => s.e("gallery").then(s.bind(null, "1ea6"));
		var B = {
			name: "TMComment",
			components: {
				TMGallery: x,
				TMSvgImg: d["a"],
				TMUserInfo: p["a"],
				TMArticleCommentsLink: m["a"],
				TMUserInfoPopup: N
			},
			props: {
				comment: {
					type: Object,
					required: !0,
					validator: R["a"]
				},
				isCommentControlsShown: {
					type: Boolean,
					default: !0
				},
				shouldDisplayStatus: {
					type: Boolean,
					default: !0
				},
				userPopoverEnabled: Boolean,
				isPinnedSection: {
					type: Boolean,
					default: !1
				}
			},
			data() {
				return {
					userInfoPopupVisible: !1,
					userInfoTimer: null,
					shouldClosePopup: !1,
					galleryImages: [],
					hasMounted: !1,
					disconnectObserver: null,
					disposeLinks: null
				}
			},
			computed: {
				...Object(i["c"])("comments", ["getScrollParents"]),
				...Object(i["c"])("i18n", ["langOptions"]),
				className() {
					return this.shouldDisplayStatus ? {
						"tm-comment__header_is-by-op": this.comment.isPostAuthor,
						"tm-comment__header_is-mine": this.comment.isAuthor,
						"tm-comment__header_is-new": this.comment.isNew,
						"tm-comment__header_is-readonly": this.comment.isReadonly,
						"tm-comment__header_is-deleted": this.comment.isSuspended
					} : null
				},
				datetimeStr() {
					return Object(R["b"])(this.comment.timePublished)
				},
				opacity() {
					if (this.comment.score >= 0 || this.isHovered) return null;
					const t = 90,
						e = 10 * this.comment.score,
						s = Math.abs(Math.max(-50, e));
					return {
						opacity: (t - s) / 100
					}
				},
				handleMouseMoveThrottled() {
					return l()(this.handleMouseMove, 200)
				},
				closeUserInfoPopupDebounced() {
					return r()((function () {
						this.shouldClosePopup && this.closeUserInfoPopup()
					}), 500)
				}
			},
			watch: {
				shouldClosePopup: "closeUserInfoPopupDebounced"
			},
			mounted() {
				this.hasMounted = !0, this.galleryImages = Object(j["a"])(this.$refs.commentBody), Object(w["a"])(this.$el), this.disconnectObserver = Object(M["a"])(this.$refs.commentBody, this.msg("ERROR_IMAGE_WAS_NOT_LOADED")), this.disposeLinks = Object(k["a"])(this.$el, (t, e) => {
					t.preventDefault(), this.$router.push({
						path: e.pathname
					})
				})
			},
			beforeDestroy() {
				this.disconnectObserver(), this.disposeLinks(), document.removeEventListener("mousemove", this.handleMouseMoveThrottled)
			},
			methods: {
				...Object(i["b"])("comments", ["setScrollParents"]),
				scrollTo(t) {
					Object(D["d"])(t), Object(u["b"])(t)
				},
				openUserInfoPopup() {
					this.userPopoverEnabled && !this.userInfoPopupVisible && (this.userInfoPopupVisible = !0, document.addEventListener("mousemove", this.handleMouseMoveThrottled))
				},
				closeUserInfoPopup() {
					this.userPopoverEnabled && (this.userInfoPopupVisible = !1, this.shouldClosePopup = !1, document.removeEventListener("mousemove", this.handleMouseMoveThrottled))
				},
				onUserMouseenter() {
					this.userPopoverEnabled && (clearTimeout(this.userInfoTimer), this.userInfoPopupVisible || (this.userInfoTimer = setTimeout(this.openUserInfoPopup, 800)))
				},
				onUserMouseleave() {
					this.userPopoverEnabled && !this.userInfoPopupVisible && clearTimeout(this.userInfoTimer)
				},
				handleMouseMove({
					clientX: t,
					clientY: e
				}) {
					if (!this.$refs.userInfoPopup) return;
					const s = document.elementFromPoint(t, e),
						n = this.$refs.userInfoPopup.$el,
						a = this.$refs.userInfo.$el;
					this.shouldClosePopup = ![n, a].some(t => t.contains(s))
				}
			}
		},
			$ = B,
			F = (s("e01b"), Object(C["a"])($, n, a, !1, null, null, null));
		e["a"] = F.exports
	},
	"7a07": function (t, e, s) { },
	"7a73": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMScrollLockTransition", {
				attrs: {
					name: "transition-fade"
				}
			}, [t.isConfirmVisible ? s("TMPopupBase", {
				attrs: {
					centered: ""
				},
				on: {
					close: function (e) {
						t.isConfirmVisible = !1
					}
				}
			}, [s("div", {
				staticClass: "tm-confirmation-dialog"
			}, [s("h2", {
				staticClass: "tm-confirmation-dialog__title"
			}, [t._v("\n        " + t._s(t.title) + "\n      ")]), t._v(" "), t.message ? s("p", {
				staticClass: "tm-confirmation-dialog__description"
			}, [t._v("\n        " + t._s(t.message) + "\n      ")]) : t._e(), t._v(" "), s("div", {
				staticClass: "tm-confirmation-dialog__actions"
			}, [s("TMButtonBase", {
				staticClass: "tm-confirmation-dialog__action tm-confirmation-dialog__action_confirm",
				attrs: {
					"style-size": "small",
					type: "button"
				},
				on: {
					click: t.confirm
				}
			}, [t._v("\n          " + t._s(t.confirmLabel) + "\n        ")]), t._v(" "), s("TMButtonBase", {
				staticClass: "tm-confirmation-dialog__action tm-confirmation-dialog__action_cancel",
				attrs: {
					"style-size": "small",
					"style-type": "transparent",
					type: "button"
				},
				on: {
					click: t.cancel
				}
			}, [t._v("\n          " + t._s(t.cancelLabel) + "\n        ")])], 1)])]) : t._e()], 1)
		},
			a = [],
			i = s("884d"),
			o = s("c5ac"),
			r = s("1a5d"),
			c = {
				name: "TMAsyncConfirmationDialog",
				components: {
					TMButtonBase: i["a"],
					TMPopupBase: o["default"],
					TMScrollLockTransition: r["a"]
				},
				data() {
					return {
						title: void 0,
						message: void 0,
						confirmLabel: void 0,
						cancelLabel: void 0,
						resolvePromise: void 0,
						rejectPromise: void 0,
						isConfirmVisible: !1
					}
				},
				methods: {
					show(t = {}) {
						const {
							title: e,
							message: s,
							confirmLabel: n,
							cancelLabel: a
						} = t;
						return this.title = e, this.message = s, this.confirmLabel = n || this.msg("CONFIRM_OK_BUTTON_LABEL"), this.cancelLabel = a || this.msg("CONFIRM_CANCEL_BUTTON_LABEL"), this.isConfirmVisible = !0, new Promise((t, e) => {
							this.resolvePromise = t, this.rejectPromise = e
						})
					},
					confirm() {
						this.isConfirmVisible = !1, this.resolvePromise(!0)
					},
					cancel() {
						this.isConfirmVisible = !1, this.resolvePromise(!1)
					}
				}
			},
			l = c,
			u = (s("b32d"), s("2877")),
			m = Object(u["a"])(l, n, a, !1, null, null, null);
		e["a"] = m.exports
	},
	"7b38": function (t, e, s) {
		"use strict";
		s("e9f1")
	},
	"7b4a": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-header-user-menu"
			}, [s("router-link", {
				staticClass: "tm-header-user-menu__item tm-header-user-menu__search",
				attrs: {
					to: t.toSearchPage
				}
			}, [s("TMSvgImg", {
				staticClass: "tm-header-user-menu__icon tm-header-user-menu__icon_search",
				class: {
					"tm-header-user-menu__icon_dark": t.isDesktop
				},
				attrs: {
					id: "search",
					size: "24"
				}
			})], 1), t._v(" "), t.isLoggedIn ? s("TMTrackerDropdown", {
				staticClass: "tm-header-user-menu__item"
			}) : t._e(), t._v(" "), t.adminDropdownVisible ? s("TMCompanyAdminDropdown", {
				staticClass: "tm-header-user-menu__item"
			}) : t._e(), t._v(" "), t.isLoggedIn ? s("div", {
				staticClass: "tm-header-user-menu__item tm-header-user-menu__write"
			}, [t.canPostVoice ? s("TMDropdown", {
				attrs: {
					align: "right"
				},
				scopedSlots: t._u([{
					key: "head",
					fn: function (e) {
						var n = e.toggle;
						return [s("button", {
							staticClass: "tm-header-user-menu__toggle",
							on: {
								click: function (e) {
									t.isDesktop ? n() : t.editorPopupVisible = !0
								}
							}
						}, [s("TMSvgImg", {
							staticClass: "tm-header-user-menu__icon tm-header-user-menu__icon_write",
							class: {
								"tm-header-user-menu__icon_dark": t.isDesktop
							},
							attrs: {
								id: "write",
								size: "24"
							}
						})], 1)]
					}
				}, {
					key: "body",
					fn: function () {
						return [s("div", {
							staticClass: "tm-header-user-menu__popup-wrapper"
						}, [s("TMNewPublicationLink", {
							staticClass: "tm-header-user-menu__popup-item"
						}, [t._v("\n            " + t._s(t.msg("ICON_WRITE")) + "\n          ")]), t._v(" "), s("router-link", {
							staticClass: "tm-header-user-menu__popup-item",
							attrs: {
								to: {
									name: "VOICE"
								}
							}
						}, [t._v("\n            " + t._s(t.msg("VOICE_TITLE")) + "\n          ")])], 1)]
					},
					proxy: !0
				}], null, !1, 3416031634)
			}) : s("TMNewPublicationLink", [s("TMSvgImg", {
				staticClass: "tm-header-user-menu__icon tm-header-user-menu__icon_write",
				class: {
					"tm-header-user-menu__icon_dark": t.isDesktop
				},
				attrs: {
					id: "write",
					size: "24"
				}
			})], 1), t._v(" "), t.editorPopupVisible ? s("TMPopup", {
				on: {
					close: function (e) {
						t.editorPopupVisible = !1
					}
				},
				scopedSlots: t._u([{
					key: "body",
					fn: function () {
						return [s("div", {
							staticClass: "tm-header-user-menu__popup-wrapper"
						}, [s("TMNewPublicationLink", {
							staticClass: "tm-header-user-menu__popup-item",
							nativeOn: {
								click: function (e) {
									t.editorPopupVisible = !1
								}
							}
						}, [t._v("\n            " + t._s(t.msg("ICON_WRITE")) + "\n          ")]), t._v(" "), s("router-link", {
							staticClass: "tm-header-user-menu__popup-item",
							attrs: {
								to: {
									name: "PUBLICATION_MEGAPOST"
								}
							},
							nativeOn: {
								click: function (e) {
									t.editorPopupVisible = !1
								}
							}
						}, [t._v("\n            " + t._s(t.msg("MEGAPOST_TITLE_NEW")) + "\n          ")]), t._v(" "), s("router-link", {
							staticClass: "tm-header-user-menu__popup-item",
							attrs: {
								to: {
									name: "VOICE"
								}
							},
							nativeOn: {
								click: function (e) {
									t.editorPopupVisible = !1
								}
							}
						}, [t._v("\n            " + t._s(t.msg("VOICE_TITLE")) + "\n          ")])], 1)]
					},
					proxy: !0
				}], null, !1, 346434852)
			}) : t._e()], 1) : t._e(), t._v(" "), s("div", {
				staticClass: "tm-header-user-menu__item",
				class: {
					"tm-header-user-menu__user_desktop": t.isDesktop
				}
			}, [t.isDesktop ? s("TMDropdown", {
				attrs: {
					align: "right"
				},
				scopedSlots: t._u([{
					key: "head",
					fn: function (e) {
						var n = e.toggle;
						return [t.isLoggedIn ? s("TMEntityImage", {
							attrs: {
								alias: t.user.alias,
								"data-test-id": t.toggleTestId,
								image: t.user.avatarUrl,
								size: 32,
								type: "user"
							},
							nativeOn: {
								click: function (t) {
									return n.apply(null, arguments)
								}
							}
						}) : s("TMSvgImg", {
							staticClass: "tm-header-user-menu__icon",
							attrs: {
								id: "header-user",
								size: "24",
								"svg-attrs": {
									"data-test-id": t.toggleTestId
								}
							},
							nativeOn: {
								click: function (t) {
									return n.apply(null, arguments)
								}
							}
						}), t._v(" "), t.unreadCount ? s("span", {
							staticClass: "tm-header-user-menu__conversations-count",
							domProps: {
								textContent: t._s(t.unreadCount)
							}
						}) : t._e()]
					}
				}, {
					key: "body",
					fn: function (e) {
						var n = e.visible;
						return [n ? s("TMUserMenu", {
							on: {
								openPageSettings: function (e) {
									t.pageSettingsVisible = !0
								}
							}
						}) : t._e()]
					}
				}], null, !1, 37642179)
			}) : s("button", {
				staticClass: "tm-header-user-menu__toggle",
				class: {
					"tm-header-user-menu__toggle_has-conversations": t.unreadCount > 0
				},
				attrs: {
					"data-test-id": t.toggleTestId
				},
				on: {
					click: function (e) {
						t.overlayVisible = !0
					}
				}
			}, [t.isLoggedIn ? s("TMEntityImage", {
				attrs: {
					alias: t.user.alias,
					image: t.user.avatarUrl,
					size: t.isMobile && !t.isTablet ? 24 : 32,
					type: "user"
				}
			}) : s("TMSvgImg", {
				staticClass: "tm-header-user-menu__icon tm-header-user-menu__icon_white",
				class: {
					"tm-header-user-menu__icon_dark": t.isDesktop
				},
				attrs: {
					id: "header-user",
					size: 24
				}
			})], 1), t._v(" "), s("TMScrollLockTransition", {
				attrs: {
					name: "fade-sidebar"
				}
			}, [t.overlayVisible ? s("TMSidebar", {
				attrs: {
					position: "right"
				},
				on: {
					close: function (e) {
						t.overlayVisible = !1
					}
				}
			}, [s("TMUserMenu", {
				on: {
					close: function (e) {
						t.overlayVisible = !1
					},
					openPageSettings: function (e) {
						t.pageSettingsVisible = !0
					}
				}
			})], 1) : t._e()], 1)], 1), t._v(" "), s("TMScrollLockTransition", {
				attrs: {
					name: "transition-fade"
				}
			}, [t.pageSettingsVisible ? s("TMPopupBase", {
				on: {
					close: function (e) {
						t.pageSettingsVisible = !1
					}
				}
			}, [s("TMPageSettingsForm", {
				on: {
					closePopup: function (e) {
						t.pageSettingsVisible = !1
					}
				}
			})], 1) : t._e()], 1)], 1)
		},
			a = [],
			i = s("2f62"),
			o = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMDropdown", {
					staticClass: "company-admin-dropdown",
					attrs: {
						align: "right",
						variant: "noBodyPadding"
					},
					scopedSlots: t._u([{
						key: "head",
						fn: function (e) {
							var n = e.toggle;
							return [1 === t.companiesAdmin.length ? s("a", {
								staticClass: "company-admin-dropdown__button",
								attrs: {
									href: t.companyAdminLink,
									title: t.msg("COMPANY_ADMIN")
								}
							}, [s("TMSvgImg", {
								staticClass: "company-admin-dropdown__icon",
								attrs: {
									id: "company",
									size: "24"
								}
							})], 1) : s("button", {
								staticClass: "company-admin-dropdown__button",
								attrs: {
									title: t.msg("COMPANIES_ADMIN")
								},
								on: {
									click: n
								}
							}, [s("TMSvgImg", {
								staticClass: "company-admin-dropdown__icon",
								attrs: {
									id: "company",
									size: "24"
								}
							}), t._v(" "), s("TMSvgImg", {
								staticClass: "company-admin-dropdown__icon company-admin-dropdown__icon_arrow",
								attrs: {
									id: "arrow-down",
									size: "20"
								}
							})], 1)]
						}
					}, {
						key: "body",
						fn: function () {
							return [s("div", {
								staticClass: "company-admin-dropdown__list"
							}, [s("TMCompaniesAdminList", {
								attrs: {
									companies: t.companiesAdmin
								}
							})], 1)]
						},
						proxy: !0
					}])
				})
			},
			r = [],
			c = s("564a"),
			l = s("197e"),
			u = s("b7d0"),
			m = {
				name: "TMCompanyAdminDropdown",
				components: {
					TMCompaniesAdminList: c["a"],
					TMSvgImg: u["a"],
					TMDropdown: l["a"]
				},
				computed: {
					...Object(i["c"])("me", ["companiesAdmin"]),
					companyAdminLink() {
						return `https://localhost:7103/company/${this.companiesAdmin[0].alias}/admin/`
					}
				}
			},
			d = m,
			p = (s("b1d8"), s("2877")),
			_ = Object(p["a"])(d, o, r, !1, null, null, null),
			h = _.exports,
			g = s("2e8a"),
			f = s("b7d8"),
			b = s("badd"),
			T = s("1a5d"),
			v = s("7bf9"),
			E = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return t.isMounted ? s("div", {
					staticClass: "tm-tracker-dropdown"
				}, [t.isMounted && t.isDesktop ? s("TMDropdown", {
					attrs: {
						align: "right",
						variant: "noBodyPadding"
					},
					scopedSlots: t._u([{
						key: "head",
						fn: function (e) {
							var n = e.toggle;
							return [s("button", {
								staticClass: "tm-tracker-dropdown__notifications-button tm-tracker-dropdown__button_dark",
								attrs: {
									title: t.msg("TRACKER_TITLE")
								},
								on: {
									click: n
								}
							}, [t.getUnviewedCount ? s("span", {
								staticClass: "tm-tracker-dropdown__notifications-counter",
								class: t.bem("tm-tracker-dropdown__notifications-counter", {
									variant: "viewer"
								}),
								domProps: {
									textContent: t._s("+" + t.abbreviateNumber(t.getUnviewedCount))
								}
							}) : t.notificationsUnreadCount ? s("span", {
								staticClass: "tm-tracker-dropdown__notifications-counter",
								domProps: {
									textContent: t._s(t.abbreviateNumber(t.notificationsUnreadCount))
								}
							}) : t._e(), t._v(" "), s("TMSvgImg", {
								staticClass: "tm-tracker-dropdown__icon",
								attrs: {
									id: "notifications",
									size: "24"
								}
							})], 1)]
						}
					}, {
						key: "body",
						fn: function (e) {
							var n = e.visible;
							return [n ? s("TMUserNotificationsDropdown") : t._e()]
						}
					}], null, !1, 3048275731)
				}) : s("router-link", {
					staticClass: "tm-tracker-dropdown__notifications-button",
					attrs: {
						title: t.msg("TRACKER_TITLE"),
						to: {
							name: "TRACKER"
						}
					}
				}, [t.getUnviewedCount ? s("span", {
					staticClass: "tm-tracker-dropdown__notifications-counter",
					class: t.bem("tm-tracker-dropdown__notifications-counter", {
						variant: "viewer"
					}),
					domProps: {
						textContent: t._s("+" + t.abbreviateNumber(t.getUnviewedCount))
					}
				}) : t.notificationsUnreadCount ? s("span", {
					staticClass: "tm-tracker-dropdown__notifications-counter",
					domProps: {
						textContent: t._s(t.abbreviateNumber(t.notificationsUnreadCount))
					}
				}) : t._e(), t._v(" "), s("TMSvgImg", {
					staticClass: "tm-tracker-dropdown__icon",
					attrs: {
						id: "notifications",
						size: "24"
					}
				})], 1)], 1) : t._e()
			},
			S = [],
			O = s("cee5"),
			C = s("6be8");
		const I = () => Promise.all([s.e("chunk-4b965a03"), s.e("chunk-7cd89490")]).then(s.bind(null, "89fb"));
		var A = {
			name: "TMTrackerDropdown",
			components: {
				TMSvgImg: u["a"],
				TMUserNotificationsDropdown: I,
				TMDropdown: l["a"]
			},
			data() {
				return {
					isMounted: !1
				}
			},
			computed: {
				...Object(i["c"])("global", ["isDesktop"]),
				...Object(i["c"])("i18n", ["langOptions"]),
				...Object(i["c"])("me", ["isLoggedIn"]),
				...Object(i["c"])("tracker", ["getUnreadCount", "getUnviewedCount"]),
				notificationsUnreadCount() {
					return this.getUnreadCount("all")
				}
			},
			mounted() {
				if (this.isMounted = !0, this.isLoggedIn) {
					const {
						hl: t
					} = this.langOptions;
					this.loadNotifications({
						params: {
							hl: t
						},
						cacheKey: "dropdown"
					})
				}
			},
			methods: {
				...Object(i["b"])("tracker", ["loadNotifications"]),
				abbreviateNumber(t) {
					return Object(C["a"])(t)
				},
				bem: O["a"]
			}
		},
			y = A,
			L = (s("0a3b"), Object(p["a"])(y, E, S, !1, null, null, null)),
			P = L.exports;
		const N = () => Promise.resolve().then(s.bind(null, "c5ac")),
			R = () => Promise.resolve().then(s.bind(null, "bccd")),
			M = () => s.e("chunk-5cc902a5").then(s.bind(null, "3a02"));
		var w = {
			name: "TMHeaderUserMenu",
			components: {
				TMPageSettingsForm: R,
				TMPopupBase: N,
				TMNewPublicationLink: f["a"],
				TMScrollLockTransition: T["a"],
				TMPopup: b["a"],
				TMCompanyAdminDropdown: h,
				TMTrackerDropdown: P,
				TMDropdown: l["a"],
				TMSidebar: v["a"],
				TMEntityImage: g["a"],
				TMSvgImg: u["a"],
				TMUserMenu: M
			},
			data() {
				return {
					dropdownVisible: !1,
					overlayVisible: !1,
					pageSettingsVisible: !1,
					editorPopupVisible: !1
				}
			},
			computed: {
				...Object(i["e"])("conversations", ["unreadCount"]),
				...Object(i["c"])("global", ["isMobile", "isTablet", "isDesktop"]),
				...Object(i["c"])("me", ["isLoggedIn", "companiesAdmin", "canPostVoice"]),
				...Object(i["c"])("i18n", ["langOptions"]),
				...Object(i["e"])("me", ["user"]),
				toggleTestId() {
					return this.isLoggedIn ? this.unreadCount > 0 ? "menu-toggle-unread" : "menu-toggle-user" : "menu-toggle-guest"
				},
				toSearchPage() {
					return {
						name: "SEARCH_QUERY_RESULTS",
						params: {
							hl: this.langOptions.hl
						}
					}
				},
				adminDropdownVisible() {
					return this.isDesktop && this.isLoggedIn && 0 !== this.companiesAdmin.length
				}
			},
			methods: {
				toggleOverlay() {
					this.overlayVisible = !this.overlayVisible
				},
				toggleDropdown() {
					this.dropdownVisible = !this.dropdownVisible
				}
			}
		},
			k = w,
			j = (s("4344"), Object(p["a"])(k, n, a, !1, null, null, null));
		e["a"] = j.exports
	},
	"7be7": function (t, e, s) {
		"use strict";
		s("81fa")
	},
	"7bf9": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMOverlay", {
				staticClass: "tm-sidebar",
				class: "tm-sidebar_" + t.position,
				on: {
					close: function (e) {
						return t.$emit("close")
					}
				}
			}, [s("div", {
				staticClass: "tm-sidebar__wrapper",
				class: "tm-sidebar__wrapper_" + t.position,
				style: t.style
			}, [s("div", {
				staticClass: "tm-sidebar__container"
			}, [t._t("default")], 2)])])
		},
			a = [],
			i = s("2f62"),
			o = s("9c32"),
			r = s("4cf9");
		const c = {
			right: "isRight",
			left: "isLeft"
		};
		var l = {
			name: "TMSidebarModal",
			components: {
				TMOverlay: o["a"]
			},
			props: {
				position: {
					required: !0,
					type: String
				}
			},
			data() {
				return {
					delta: 0,
					swipeListener: null
				}
			},
			computed: {
				...Object(i["e"])("viewport", ["width"]),
				parallax() {
					const t = 2;
					return Math.abs(this.delta) / this.width / t
				},
				style() {
					return "left" === this.position && this.delta > 0 ? {
						transform: `translateX(${-100 * this.parallax}%)`
					} : "right" === this.position && this.delta < 0 ? {
						transform: `translateX(${100 * this.parallax}%)`
					} : null
				}
			},
			watch: {
				$route() {
					this.$emit("close")
				}
			},
			beforeDestroy() {
				Object(r["b"])(this.swipeListener)
			},
			mounted() {
				this.swipeListener = Object(r["a"])(t => {
					this.delta = t.delta, t[c[this.position]] && this.$emit("close")
				})
			}
		},
			u = l,
			m = (s("de3a"), s("2877")),
			d = Object(m["a"])(u, n, a, !1, null, null, null);
		e["a"] = d.exports
	},
	"7c2f": function (t, e, s) { },
	"7d30": function (t, e, s) { },
	"7e83": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("ul", {
				staticClass: "tm-project-block-items"
			}, t._l(t.preparedItems, (function (e, n) {
				return s("li", {
					key: n,
					staticClass: "tm-project-block-items__item"
				}, [s("a", {
					staticClass: "tm-project-block-items__detail tm-project-block-items__title",
					attrs: {
						href: t.getItemUrl(e),
						rel: "noopener",
						target: "_blank"
					},
					on: {
						click: function (e) {
							return t.$emit("click", e)
						}
					}
				}, [t.imageVisible && e.imageUrl ? s("img", {
					staticClass: "tm-project-block-items__image",
					attrs: {
						alt: "",
						src: e.imageUrl
					}
				}) : t._e(), t._v(t._s(e.title) + "\n    ")]), t._v(" "), s("div", {
					staticClass: "tm-project-block-items__properties"
				}, t._l(e.properties, (function (e) {
					return s("span", {
						key: e,
						staticClass: "tm-project-block-items__property-item"
					}, [t._v(t._s(e))])
				})), 0)])
			})), 0)
		},
			a = [],
			i = s("2f62"),
			o = s("af72"),
			r = s.n(o);
		const c = t => t.every(t => {
			const e = r.a.map(t, {
				itemUrl: r.a.nonEmptyString,
				properties: r.a.array,
				title: r.a.nonEmptyString
			});
			return e
		}),
			l = {
				type: Array,
				required: !0,
				validator: c
			};
		var u = {
			name: "TMProjectBlockItems",
			props: {
				items: l,
				imageVisible: {
					type: Boolean,
					default: !1
				},
				searchParams: {
					type: Object,
					default: null
				}
			},
			computed: {
				...Object(i["c"])("articlesList", ["compactView"]),
				preparedItems() {
					return this.compactView ? this.items.slice(0, 3) : this.items
				}
			},
			methods: {
				getItemUrl(t) {
					const e = new URL(t.itemUrl);
					return Object.keys(this.searchParams).forEach(t => e.searchParams.append(t, this.searchParams[t])), e.href
				}
			}
		},
			m = u,
			d = (s("abba"), s("2877")),
			p = Object(d["a"])(m, n, a, !1, null, null, null);
		e["a"] = p.exports
	},
	"7f7b": function (t, e, s) {
		"use strict";
		s.d(e, "e", (function () {
			return n
		})), s.d(e, "d", (function () {
			return a
		})), s.d(e, "g", (function () {
			return i
		})), s.d(e, "f", (function () {
			return o
		})), s.d(e, "b", (function () {
			return r
		})), s.d(e, "a", (function () {
			return c
		})), s.d(e, "c", (function () {
			return l
		}));
		const n = t => ({
			name: "ARTICLES_LIST_BY_COMPANY",
			query: {},
			params: {
				name: t
			}
		});

		function a(t) {
			return t && t.settings && "expired" === t.settings.status
		}

		function i(t, e) {
			if (t && Array.isArray(t.sectors)) {
				const s = t.sectors.map(({
					title: t
				}) => t);
				return [e, ...s].join(", ")
			}
			return ""
		}

		function o(t) {
			return t && t.metadata && Array.isArray(t.metadata.keywords) ? t.metadata.keywords.join(", ") : ""
		}
		const r = new Date(2018, 5, 1),
			c = 30,
			l = ["postCount", "readingCount", "commentsCount", "favoritesCount", "score"]
	},
	"7f86": function (t, e, s) { },
	"7fc1": function (t, e, s) { },
	8023: function (t, e, s) {
		"use strict";
		s("c387")
	},
	8124: function (t, e, s) { },
	"814b": function (t, e, s) {
		"use strict";
		s("df51")
	},
	"81fa": function (t, e, s) { },
	"82ef": function (t, e, s) { },
	8490: function (t, e, s) {
		"use strict";
		s("a7b9")
	},
	"84b8": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return !t.isTablet && t.isMobile ? s("TMScrollLockTransition", {
				attrs: {
					appear: "",
					name: "slide-fade"
				}
			}, [s("TMBottomSheet", {
				on: {
					close: function (e) {
						return t.$emit("close")
					}
				},
				scopedSlots: t._u([{
					key: "default",
					fn: function () {
						return [t._t("default")]
					},
					proxy: !0
				}, {
					key: "body",
					fn: function () {
						return [t._t("body")]
					},
					proxy: !0
				}], null, !0)
			})], 1) : s("transition", {
				attrs: {
					appear: "",
					name: "transition-fade"
				}
			}, [s("TMPopover", {
				attrs: {
					root: t.target,
					variant: "dropdown"
				},
				on: {
					close: function (e) {
						return t.$emit("close")
					}
				}
			}, [t._t("default"), t._v(" "), t._t("body")], 2)], 1)
		},
			a = [],
			i = s("2f62"),
			o = s("12c3"),
			r = s("3cb0"),
			c = s("1a5d"),
			l = {
				name: "TMContextMenu",
				components: {
					TMPopover: r["a"],
					TMBottomSheet: o["a"],
					TMScrollLockTransition: c["a"]
				},
				props: {
					target: {
						type: null,
						required: !0
					}
				},
				computed: {
					...Object(i["c"])("global", ["isMobile", "isTablet"])
				}
			},
			u = l,
			m = s("2877"),
			d = Object(m["a"])(u, n, a, !1, null, null, null);
		e["a"] = d.exports
	},
	"84c2": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-navigation-search__input"
			}, [s("TMInputTextDecorated", {
				ref: "input",
				attrs: {
					autocomplete: "off",
					maxlength: t.maxlength,
					name: "searchQuery",
					placeholder: t.placeholder || t.msg("SEARCH_INPUT_PLACEHOLDER"),
					value: t.value
				},
				on: {
					input: t.onInputChange
				}
			}, [s("TMSvgIcon", {
				staticClass: "tm-search__icon",
				attrs: {
					slot: "after",
					id: "input-search"
				},
				slot: "after"
			})], 1)], 1)
		},
			a = [],
			i = s("2f62"),
			o = s("f7fe"),
			r = s.n(o),
			c = s("142c"),
			l = s("4a90"),
			u = {
				name: "TMNavigationSearch",
				components: {
					TMInputTextDecorated: c["a"],
					TMSvgIcon: l["a"]
				},
				props: {
					placeholder: {
						type: String,
						default: null
					},
					maxlength: {
						type: Number,
						default: 50
					},
					value: {
						type: String,
						default: ""
					}
				},
				computed: {
					...Object(i["c"])("i18n", ["msg"])
				},
				beforeDestroy() {
					this.updateSearchQuery({
						query: null
					})
				},
				methods: {
					...Object(i["b"])("location", ["updateSearchQuery"]),
					onInputChange: r()((function (t) {
						const e = t.length >= 2 ? t : null;
						return this.updateSearchQuery({
							query: e
						}), this.$emit("updateSearchQuery", e), null
					}), 500)
				}
			},
			m = u,
			d = (s("5fb7"), s("2877")),
			p = Object(d["a"])(m, n, a, !1, null, null, null);
		e["a"] = p.exports
	},
	"859e": function (t, e, s) { },
	8617: function (t, e, s) {
		"use strict";
		s("9af8")
	},
	"86a5": function (t, e, s) { },
	"874b": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-votes-meter"
			}, [s("TMSvgImg", {
				staticClass: "tm-votes-meter__icon",
				class: t.iconClassName,
				attrs: {
					id: t.iconId,
					size: "24",
					title: t.iconTitle
				}
			}), t._v(" "), s("span", {
				staticClass: "tm-votes-meter__value",
				class: t.valueClassName,
				attrs: {
					title: t.title
				},
				domProps: {
					textContent: t._s(t.scoreFormatted)
				}
			})], 1)
		},
			a = [],
			i = s("b7d0"),
			o = s("cee5"),
			r = s("6be8"),
			c = {
				name: "TMVotesMeter",
				components: {
					TMSvgImg: i["a"]
				},
				props: {
					score: {
						required: !0,
						type: Number
					},
					noVotesTitle: {
						type: String,
						default: null
					},
					voteState: {
						required: !0,
						type: Number
					},
					votesCount: {
						type: Number,
						default: 0
					},
					appearance: {
						type: String,
						required: !0,
						validator(t) {
							return ["article", "karma", "comment"].includes(t)
						}
					}
				},
				computed: {
					title() {
						return this.votesCount > 0 ? this.msg("ARTICLE_REASON_TOTAL", {
							total: this.votesCount,
							positive: (this.votesCount + this.score) / 2,
							negative: (this.votesCount - this.score) / 2
						}) : this.noVotesTitle
					},
					iconTitle() {
						return this.voteState > 0 ? this.msg("DATA_ICONS_VOTE_UP") : this.voteState < 0 ? this.msg("DATA_ICONS_VOTE_DOWN") : this.title
					},
					iconClassName() {
						return this.bem("tm-votes-meter__icon", {
							positive: this.voteState > 0,
							negative: this.voteState < 0,
							appearance: this.appearance
						})
					},
					valueClassName() {
						return this.bem("tm-votes-meter__value", {
							positive: this.score > 0,
							negative: this.score < 0,
							appearance: this.appearance,
							rating: 0 === this.voteState
						})
					},
					iconId() {
						return 0 === this.voteState ? "counter-rating" : "counter-vote"
					},
					scoreFormatted() {
						return Object(r["b"])(this.score)
					}
				},
				methods: {
					bem: o["a"]
				}
			},
			l = c,
			u = (s("e340"), s("2877")),
			m = Object(u["a"])(l, n, a, !1, null, null, null);
		e["a"] = m.exports
	},
	8819: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("router-link", {
				attrs: {
					to: t.route
				}
			}, [t._t("default")], 2)
		},
			a = [],
			i = s("9f2e"),
			o = {
				name: "TMArticleLink",
				props: {
					article: {
						type: Object,
						required: !0,
						validator(t) {
							return "id" in t && (!!["article", "news", "megaproject", "sandbox", "unknown"].includes(t.postType) && (!t.isCorporative || !!t.hubs && t.hubs.some(t => "corporative" === t.type)))
						}
					}
				},
				computed: {
					route() {
						return Object(i["c"])(this.article, this.langOptions.hl)
					}
				}
			},
			r = o,
			c = s("2877"),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"882a": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-adfox-banner__container"
			}, [t.adIsShown ? s("a", {
				staticClass: "tm-adfox-banner__title",
				attrs: {
					href: t.advertisingLink,
					target: "_blank"
				}
			}, [t._v("\n    " + t._s(t.msg("NAV_ADVERTISING")) + "\n  ")]) : t._e(), t._v(" "), s("div", {
				key: t.uniqueDivId,
				ref: "adBanner",
				staticClass: "tm-adfox-banner",
				class: t.bem("tm-adfox-banner", {
					variant: t.variant
				}),
				attrs: {
					id: t.containerId
				}
			})])
		},
			a = [],
			i = s("2f62"),
			o = s("20a8");
		const r = (t = {}, e = {}, s = {}) => {
			let n = [];
			const {
				hubs: a
			} = t;
			return n = n.concat(a ? a.map(t => "h_" + t.alias) : []), s.params.hubName && e && n.push("h_" + e.alias), n
		},
			c = (t = {}, e = {}, s = {}) => {
				let n = [];
				const {
					flows: a
				} = t;
				return n = n.concat(a ? a.map(t => "f_" + t.alias) : []), s.params.hubName && e.flow && e.flow.alias && n.push("f_" + e.flow.alias), s.params.flowName && n.push("f_" + s.params.flowName), n
			};
		var l = s("cee5"),
			u = {
				name: "TMAdfoxBanner",
				props: {
					adfoxId: {
						type: String,
						required: !0
					},
					divId: {
						type: String,
						default: Object(o["a"])("adbanner")
					},
					variant: {
						type: String,
						required: !0
					},
					params: {
						type: Object,
						required: !0
					}
				},
				data() {
					return {
						uniqueDivId: Object(o["a"])(this.divId),
						adIsShown: !1
					}
				},
				computed: {
					...Object(i["c"])("articlesList", ["getArticleById"]),
					...Object(i["c"])("hubs", ["getHubByAlias"]),
					...Object(i["e"])("adblock", ["hasAcceptableAdsFilter"]),
					...Object(i["e"])("i18n", ["fl", "hl"]),
					articleId() {
						return this.$route.params.id
					},
					hubAlias() {
						return this.$route.params.hubName
					},
					hub() {
						return this.hubAlias && this.getHubByAlias(this.hubAlias)
					},
					article() {
						return this.articleId && this.getArticleById(this.articleId)
					},
					containerId() {
						return "adfox_" + this.adfoxId
					},
					pageType() {
						let t = "default";
						return this.$route.matched.forEach(e => {
							e.meta && e.meta.pageType && (t = e.meta.pageType)
						}), t
					},
					advertisingLink() {
						return `https://localhost:7103/company-habr/${this.hl}/advertising/`
					}
				},
				mounted() {
					this.initiObserver(), this.displayAds()
				},
				methods: {
					bem: l["a"],
					initiObserver() {
						if (window.MutationObserver) {
							const t = this.$refs.adBanner,
								e = {
									childList: !0,
									subtree: !0
								},
								s = () => {
									const {
										adBanner: t
									} = this.$refs;
									this.adIsShown = t && (t.firstElementChild && t.firstElementChild.childElementCount > 0 || t.childElementCount > 1)
								};
							this.observer = new MutationObserver(s), this.observer.observe(t, e)
						} else this.adIsShown = !0
					},
					displayAds() {
						window.yaContextCb.push(() => {
							const t = c(this.article, this.hub, this.$route),
								e = r(this.article, this.hub, this.$route),
								s = {
									puid1: this.pageType,
									puid2: t.join(":"),
									puid3: e.join(":"),
									puid4: this.hasAcceptableAdsFilter ? "yes" : "no",
									puid5: this.$route.path,
									puid6: "en" === this.fl ? "en" : "ru"
								};
							Ya.adfoxCode.create({
								ownerId: 406261,
								containerId: this.containerId,
								params: {
									...this.params,
									...s
								}
							})
						})
					}
				}
			},
			m = u,
			d = (s("8023"), s("2877")),
			p = Object(d["a"])(m, n, a, !1, null, null, null);
		e["a"] = p.exports
	},
	"887b": function (t, e, s) { },
	"89e2": function (t, e, s) {
		"use strict";
		s("0140")
	},
	"8a0a": function (t, e, s) { },
	"8a58": function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return i
		})), s.d(e, "b", (function () {
			return o
		}));
		var n = s("a8a8"),
			a = s("2105");

		function i(t = {}) {
			const e = "https://localhost:7103/effect-habr/a";
			return Object(a["d"])(e, JSON.stringify(t), !1, !1).then(t => {
				if (t.error) throw new Error(t.error.message);
				return t
			}).catch(t => Object(n["a"])(t))
		}

		function o(t = []) {
			const e = "https://localhost:7103/effect-habr/a",
				s = {
					version: "1.0",
					events: t
				};
			return Object(a["c"])(e, JSON.stringify(s), !1, !1).then(t => {
				if (t.error) throw new Error(t.error.message);
				return t
			}).catch(t => Object(n["a"])(t))
		}
	},
	"8a7c": function (t, e, s) { },
	"8b39": function (t, e, s) {
		"use strict";
		s("1c13")
	},
	"8b84": function (t, e) {
		t.exports.en = {
			SETTINGS_AGREEMENT_FINISH: "The end",
			SETTINGS_ACTION_SAVE: "Save preferences",
			SETTINGS_ARTICLES_ERROR: "You should select at least one language",
			SETTINGS_ARTICLES_TITLE: "Content",
			SETTINGS_FEED: "Feed",
			SETTINGS_FEED_CLASSIC: "Classic",
			SETTINGS_FEED_COMPACT: "Compact",
			SETTINGS_EMAIL_LABEL: "I want to receive emails on Habr updates (monthly)",
			SETTINGS_DIGEST_LABEL: "I want to receive digests with the best articles (weekly)",
			SETTINGS_FL_LANG_ENGLISH: "English",
			SETTINGS_FL_LANG_RUSSIAN: "Russian",
			SETTINGS_LANG_ENGLISH: "English",
			SETTINGS_LANG_RUSSIAN: "Ð ÑƒÑÑÐºÐ¸Ð¹",
			SETTINGS_RULES: "site rules",
			SETTINGS_TITLE: "Page settings",
			SETTINGS_UI_TITLE: "Interface",
			SETTINGS_SUCCESS: "Settings were updated successfully",
			SETTINGS: "Settings",
			SETTINGS_PROFILE: "Profile settings",
			SETTINGS_PROFILE_TITLE: "Profile",
			SETTINGS_SPECS: "Specialization settings",
			SETTINGS_SPECS_TITLE: "Specialization",
			SETTINGS_SKILLS_PLACEHOLDER: "Enter skill",
			SETTINGS_SKILLS_TITLE: "Skills",
			SETTINGS_SKILLS_HINT: "Select up to ten of your skills and rank them in descending order of importance.",
			SETTINGS_SPECS_HINT: "Select your specialization.",
			SETTINGS_SPECS_QUALIFICATION_TITLE: "Qualification",
			SETTINGS_SPECS_QUALIFICATION_NOT_SELECTED: "Not specified",
			SETTINGS_SPECS_OTHER_PLACEHOLDER: "Specialization title",
			SETTINGS_SPECS_OCCUPATION: "Occupation",
			SETTINGS_SPECS_SUM: "Sum",
			SETTINGS_SPECS_SALARY: "Desired salary",
			SETTINGS_SPECS_SALARY_HINT: "Indicate here how much you would like to earn.",
			SETTINGS_PROFILE_UPGRADE_TITLE: "Upgrade",
			SETTINGS_PRIVACY_TITLE: "Privacy",
			SETTINGS_NOTIFICATIONS_TITLE: "Notifications",
			SETTINGS_APPS_INSTALLED_TITLE: "Installed applications",
			SETTINGS_APPS_TITLE: "Applications",
			SETTINGS_APPS_MY_TITLE: "My applications",
			SETTINGS_APPS_REMOVE: "Remove",
			SETTINGS_APPS_EDIT: "Edit",
			SETTINGS_APPS_EMPTY: "You have no applications yet",
			SETTINGS_APPS_ADD: "Add new application",
			SETTINGS_APP_EDIT_TITLE: "Edit application",
			SETTINGS_APP_ADD_TITLE: "Add new application",
			SETTINGS_APP_IMAGE: "Icon",
			SETTINGS_APP_TITLE: "Application name",
			SETTINGS_APP_TITLE_HINT: "Enter application name",
			SETTINGS_APP_REDIRECT: "Redirect URL",
			SETTINGS_APP_REDIRECT_HINT: "Specify the URL for the redirect after authorization",
			SETTINGS_APP_ABOUT_HINT: "Describe your application",
			SETTINGS_APP_ABOUT: "Short description",
			SETTINGS_APP_TYPE: "Application type",
			SETTINGS_APP_TYPE_WEB: "Web application",
			SETTINGS_APP_TYPE_MOBILE: "Mobile application",
			SETTINGS_APP_TYPE_BROWSER: "Browser application",
			SETTINGS_APP_SCOPE: "Access permissions",
			SETTINGS_APP_READ: "Read only",
			SETTINGS_APP_READ_BOOKMARK: "Read only + bookmarks",
			SETTINGS_APP_ALL_RIGHTS: "Full access",
			SETTINGS_APP_EXTENDED: "Extended rights",
			SETTINGS_APP_COMPANY_NAME: "Company name",
			SETTINGS_APP_COMPANY_NAME_HINT: "Enter the developer company name",
			SETTINGS_APP_COMPANY_URL: "Companyâ€™s website",
			SETTINGS_APP_COMPANY_URL_HINT: "Enter the devepoler companyâ€™s website",
			SETTINGS_APP_TYPE_CHOOSE: "Select type",
			SETTINGS_APP_SCOPE_CHOOSE: "Select access permissions",
			SETTINGS_APP_RESET_CLIENT_ID: "Reset Client ID & Client Secret",
			SETTINGS_APP_RESET_API_KEY: "Reset API Key",
			SETTINGS_APP_RESET_HINT: "After the reset, all your applications will stop working until you update the settings",
			SETTINGS_ACCOUNT_TITLE: "Account",
			SETTINGS_MISC_TITLE: "Other",
			SETTINGS_PROFILE_AVATAR: "Avatar",
			SETTINGS_PROFILE_AVATAR_HINT: "Format: jpg, gif, png. '<br/>' Maximal size: 1 MB. '<br/>' Resolution: up to 96x96px.",
			SETTINGS_PROFILE_REALNAME: "Actual name",
			SETTINGS_PROFILE_REALNAME_HINT: "Specify your first and last name so that other users can find out what your name is",
			SETTINGS_PROFILE_WORKPLACE: "Workplace",
			SETTINGS_PROFILE_WORKPLACE_PLACEHOLDER: "Link with the company will be removed after saving the changes.",
			SETTINGS_PROFILE_WORKPLACE_PLACEHOLDER_ACTION: "Restore",
			SETTINGS_PROFILE_CONTACTS_PLACEHOLDER: "Contact link will be removed after saving the changes.",
			SETTINGS_PROFILE_CONTACTS_PLACEHOLDER_ACTION: "Restore",
			SETTINGS_PROFILE_SPECIALITY: "Describe yourself",
			SETTINGS_PROFILE_SPECIALITY_HINT: "Specify your specialization. For example: Database Administrator",
			SETTINGS_PROFILE_GENDER: "Gender",
			SETTINGS_PROFILE_GENDER_OTHER: "Other",
			SETTINGS_PROFILE_GENDER_MALE: "Male",
			SETTINGS_PROFILE_GENDER_FEMALE: "Female",
			SETTINGS_PROFILE_BIRTH_DATE: "Birth date",
			SETTINGS_PROFILE_BIRTH_DAY: "Day",
			SETTINGS_PROFILE_BIRTH_MONTH: "Month",
			SETTINGS_PROFILE_BIRTH_YEAR: "Year",
			SETTINGS_PROFILE_LOCATION: "Location",
			SETTINGS_PROFILE_COUNTRY: "Country",
			SETTINGS_PROFILE_REGION: "Region",
			SETTINGS_PROFILE_CITY: "City",
			SETTINGS_PROFILE_CONTACTS: "Contacts and social media",
			SETTINGS_PROFILE_CONTACTS_HINT: "Specify the username or ID and we will create the link ourselves. If you want the link to be shown in the authors information panel, select it by clicking on the icon on the right.",
			SETTINGS_PROFILE_CONTACTS_ADD: "Add link",
			SETTINGS_PROFILE_YANDEX_MONEY: "YooMoney",
			SETTINGS_PROFILE_YANDEX_MONEY_HINT: "Wallet number 11-20 digits",
			SETTINGS_PROFILE_PAYPAL: "PayPal.Me",
			SETTINGS_PROFILE_PAYPAL_HINT: "PayPal.Me identificator. 3 to 20 digits and/or English letters",
			SETTINGS_PROFILE_WEBMONEY: "Webmoney",
			SETTINGS_PROFILE_WEBMONEY_HINT: "Wallet number. 12 digits",
			SETTINGS_PROFILE_PAYMENTS: "Payment details",
			SETTINGS_PROFILE_PAYMENTS_HINT: "If you want to receive rewards from others for your posts, specify the numbers of your wallets.",
			SETTINGS_PROFILE_ABOUT: "Tell us about yourself",
			SETTINGS_PROFILE_ABOUT_HINT: "No more than 6 500 characters",
			SETTINGS_PROFILE_SUBMIT: "Save changes",
			SETTINGS_PROFILE_SHOW_CONTACTS: "Who can see your websites and social networking accounts",
			SETTINGS_PROFILE_TO_EVERYONE: "everyone",
			SETTINGS_PROFILE_TO_FOLLOWING: "only those you are following",
			SETTINGS_PROFILE_INBOX_ACCESS: "Who can send you direct messages",
			SETTINGS_PROFILE_FROM_EVERYONE: "everyone",
			SETTINGS_PROFILE_FROM_FOLLOWERS: "only those you are following",
			SETTINGS_PROFILE_SHOW_ACTIVITY: "Who can track your activity on Habr",
			SETTINGS_PROFILE_TO_FOLLOWERS: "only those who following you",
			SETTINGS_NOTIFICATIONS_NEW_COMMENTS: "Notifications about new comments",
			SETTINGS_NOTIFICATIONS_TO_MY_POSTS: "To my posts",
			SETTINGS_NOTIFICATIONS_TO_POSTS_WITH_COMMENTS: "To posts I left comments to",
			SETTINGS_NOTIFICATIONS_TO_BOOKMARKED_POSTS: "To posts I have bookmarked",
			SETTINGS_NOTIFICATIONS_TRACKER: "Tracker",
			SETTINGS_NOTIFICATIONS_EMAIL: "Email",
			SETTINGS_NOTIFICATIONS_SEND_ME_EMAILS: "Send me emails",
			SETTINGS_NOTIFICATIONS_NEWS: "About Habr news",
			SETTINGS_NOTIFICATIONS_NEW_EXPERIENCE: "About new opportunities for me on Habr",
			SETTINGS_NOTIFICATIONS_NEW_MESSAGES: "About new messages in conversations",
			SETTINGS_NOTIFICATIONS_NEW_COMMENTS_REPLY: "About new replies to my comments",
			SETTINGS_NOTIFICATIONS_NEW_MENTION: "When Iâ€™m mentioned in posts and comments",
			SETTINGS_NOTIFICATIONS_NEW_FOLLOWER: "When new subscriber added",
			SETTINGS_NOTIFICATIONS_TRACKER_SETTINGS: "Tracker settings",
			SETTINGS_NOTIFICATIONS_TRACKER_BADGE: "Show the number of unread notifications next to the tracker icon",
			SETTINGS_NOTIFICATIONS_FOLLOWERS_BOOKMARKS: "Show followers bookmarks in tracker",
			SETTINGS_NOTIFICATIONS_DIGEST: "How often do you want to receive a newsletter with the most interesting from the hubs you are subscribed to?",
			SETTINGS_NOTIFICATIONS_DIGEST_NEVER: "Send never",
			SETTINGS_NOTIFICATIONS_DIGEST_DAY: "Send every day",
			SETTINGS_NOTIFICATIONS_DIGEST_WEEK: "Send weekly",
			SETTINGS_NOTIFICATIONS_DIGEST_MONTH: "Send monthly",
			SETTINGS_MISC_INTERACTIONS: "Interaction",
			SETTINGS_MISC_REFRESH_PANEL: "Show comments update panel",
			SETTINGS_MISC_HOTKEYS: "Use hotkeys ('<a href=\"/docs/help/hotkeys/\">'list'</a>')",
			SETTINGS_MISC_DISABLE_ADS: "Disable ads",
			SETTINGS_MISC_YES_IT_WOULD_BE_NICE: "Yes, that would be great!",
			SETTINGS_READONLY_UPGRADE: "If you have an invitation code, enter it in a field below to get all the features of the full account.",
			SETTINGS_INVITE_CODE: "Invitation code",
			SETTINGS_INVITE_RECALLED: "The invitation was recalled",
			SETTINGS_INVITE_APPLIED: "Invitation was applied",
			SETTINGS_INVITE_ALREADY_USED: "The invitation has already been used",
			SETTINGS_INVITE_USER_ALREADY_FULL: "You are already full-fledged user of Habr, so you can't use invitations"
		}, t.exports.ru = {
			SETTINGS_AGREEMENT_FINISH: "Ð—Ð°Ð²ÐµÑ€ÑˆÐ¸Ñ‚ÑŒ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÑƒ",
			SETTINGS_ACTION_SAVE: "Ð¡Ð¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸",
			SETTINGS_ARTICLES_ERROR: "Ð”Ð¾Ð»Ð¶ÐµÐ½ Ð±Ñ‹Ñ‚ÑŒ Ð²Ñ‹Ð±Ñ€Ð°Ð½ Ñ…Ð¾Ñ‚Ñ Ð±Ñ‹ Ð¾Ð´Ð¸Ð½ ÑÐ·Ñ‹Ðº",
			SETTINGS_ARTICLES_TITLE: "ÐŸÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸Ð¸",
			SETTINGS_FEED: "Ð’Ð¸Ð´ Ð»ÐµÐ½Ñ‚Ñ‹",
			SETTINGS_FEED_CLASSIC: "ÐšÐ»Ð°ÑÑÐ¸Ñ‡ÐµÑÐºÐ¸Ð¹",
			SETTINGS_FEED_COMPACT: "ÐšÐ¾Ð¼Ð¿Ð°ÐºÑ‚Ð½Ñ‹Ð¹",
			SETTINGS_EMAIL_LABEL: "Ð¥Ð¾Ñ‡Ñƒ Ð¿Ð¾Ð»ÑƒÑ‡Ð°Ñ‚ÑŒ Ð¿Ð¸ÑÑŒÐ¼Ð° Ð¾Ð± Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸ÑÑ… Ð½Ð° ÑÐ°Ð¹Ñ‚Ðµ (Ð½Ðµ Ñ‡Ð°Ñ‰Ðµ Ñ€Ð°Ð·Ð° Ð² Ð¼ÐµÑÑÑ†)",
			SETTINGS_DIGEST_LABEL: "Ð¥Ð¾Ñ‡Ñƒ Ð¿Ð¾Ð»ÑƒÑ‡Ð°Ñ‚ÑŒ Ð´Ð°Ð¹Ð´Ð¶ÐµÑÑ‚ Ñ Ð»ÑƒÑ‡ÑˆÐ¸Ð¼Ð¸ ÑÑ‚Ð°Ñ‚ÑŒÑÐ¼Ð¸ (Ñ€Ð°Ð· Ð² Ð½ÐµÐ´ÐµÐ»ÑŽ)",
			SETTINGS_FL_LANG_ENGLISH: "ÐÐ½Ð³Ð»Ð¸Ð¹ÑÐºÐ¸Ð¹",
			SETTINGS_FL_LANG_RUSSIAN: "Ð ÑƒÑÑÐºÐ¸Ð¹",
			SETTINGS_LANG_ENGLISH: "English",
			SETTINGS_LANG_RUSSIAN: "Ð ÑƒÑÑÐºÐ¸Ð¹",
			SETTINGS_RULES: "Ð¿Ñ€Ð°Ð²Ð¸Ð»Ð° ÑÐ°Ð¹Ñ‚Ð°",
			SETTINGS_TITLE: "ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹",
			SETTINGS: "ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸",
			SETTINGS_PROFILE: "ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ Ð¿Ñ€Ð¾Ñ„Ð¸Ð»Ñ",
			SETTINGS_SPECS: "Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ ÑÐ¿ÐµÑ†Ð¸Ð°Ð»Ð¸Ð°Ð·Ñ†Ð¸Ð¸",
			SETTINGS_SPECS_TITLE: "Ð¡Ð¿ÐµÑ†Ð¸Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ñ",
			SETTINGS_SKILLS_TITLE: "ÐŸÑ€Ð¾Ñ„ÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ð½Ð°Ð²Ñ‹ÐºÐ¸",
			SETTINGS_SKILLS_HINT: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð´Ð¾ Ð´ÐµÑÑÑ‚Ð¸ ÑÐ²Ð¾Ð¸Ñ… Ð¿Ñ€Ð¾Ñ„ÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð½Ð°Ð²Ñ‹ÐºÐ¾Ð² Ð¸ Ñ€Ð°ÑÑÑ‚Ð°Ð²ÑŒÑ‚Ðµ Ð² Ð¿Ð¾Ñ€ÑÐ´ÐºÐµ ÑƒÐ±Ñ‹Ð²Ð°Ð½Ð¸Ñ Ð¸Ñ… Ð²Ð°Ð¶Ð½Ð¾ÑÑ‚Ð¸.",
			SETTINGS_SKILLS_PLACEHOLDER: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð½Ð°Ð²Ñ‹Ðº",
			SETTINGS_SPECS_HINT: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð²Ð°ÑˆÑƒ ÑÐ¿ÐµÑ†Ð¸Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸ÑŽ.",
			SETTINGS_SPECS_OCCUPATION: "ÐŸÑ€Ð¾Ñ„ÐµÑÑÐ¸Ñ",
			SETTINGS_SPECS_QUALIFICATION_TITLE: "ÐšÐ²Ð°Ð»Ð¸Ñ„Ð¸ÐºÐ°Ñ†Ð¸Ñ",
			SETTINGS_SPECS_QUALIFICATION_NOT_SELECTED: "ÐÐµ ÑƒÐºÐ°Ð·Ð°Ð½Ð°",
			SETTINGS_SPECS_SUM: "Ð¡ÑƒÐ¼Ð¼Ð°",
			SETTINGS_SPECS_SALARY: "Ð–ÐµÐ»Ð°ÐµÐ¼Ð°Ñ Ð·Ð°Ñ€Ð¿Ð»Ð°Ñ‚Ð°",
			SETTINGS_SPECS_SALARY_HINT: "Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ð·Ð´ÐµÑÑŒ, ÑÐºÐ¾Ð»ÑŒÐºÐ¾ Ð²Ñ‹ Ñ…Ð¾Ñ‚ÐµÐ»Ð¸ Ð±Ñ‹ Ð·Ð°Ñ€Ð°Ð±Ð°Ñ‚Ñ‹Ð²Ð°Ñ‚ÑŒ.",
			SETTINGS_SPECS_OTHER_PLACEHOLDER: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ ÑÐ¿ÐµÑ†Ð¸Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ð¸",
			SETTINGS_UI_TITLE: "Ð˜Ð½Ñ‚ÐµÑ€Ñ„ÐµÐ¹Ñ",
			SETTINGS_SUCCESS: "ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ñ‹ ÑƒÑÐ¿ÐµÑˆÐ½Ð¾",
			SETTINGS_PROFILE_TITLE: "ÐŸÑ€Ð¾Ñ„Ð¸Ð»ÑŒ",
			SETTINGS_PROFILE_UPGRADE_TITLE: "ÐÐ¿Ð³Ñ€ÐµÐ¹Ð´",
			SETTINGS_PRIVACY_TITLE: "ÐŸÑ€Ð¸Ð²Ð°Ñ‚Ð½Ð¾ÑÑ‚ÑŒ",
			SETTINGS_NOTIFICATIONS_TITLE: "Ð£Ð²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ñ",
			SETTINGS_APPS_INSTALLED_TITLE: "Ð£ÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½Ð½Ñ‹Ðµ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ",
			SETTINGS_APPS_TITLE: "ÐŸÑ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ",
			SETTINGS_APPS_MY_TITLE: "ÐœÐ¾Ð¸ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ",
			SETTINGS_APPS_REMOVE: "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ",
			SETTINGS_APPS_EDIT: "Ð ÐµÐ´Ð°ÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ",
			SETTINGS_APPS_EMPTY: "Ð£ Ð²Ð°Ñ Ð¿Ð¾ÐºÐ° Ð½ÐµÑ‚ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ð¹",
			SETTINGS_APPS_ADD: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ",
			SETTINGS_APP_EDIT_TITLE: "Ð ÐµÐ´Ð°ÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ",
			SETTINGS_APP_ADD_TITLE: "Ð¡Ð¾Ð·Ð´Ð°Ð½Ð¸Ðµ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ",
			SETTINGS_APP_RESET_CLIENT_ID: "Ð¡Ð±Ñ€Ð¾ÑÐ¸Ñ‚ÑŒ Client ID Ð¸ Client Secret",
			SETTINGS_APP_RESET_API_KEY: "Ð¡Ð±Ñ€Ð¾ÑÐ¸Ñ‚ÑŒ API Key",
			SETTINGS_APP_RESET_HINT: "Ð¡Ð±Ñ€Ð¾Ñ Client ID Ð¸ Client Secret â€” ÑÑ‚Ð¾ Ð¸ÑÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ð¹ Ð¼ÐµÑ…Ð°Ð½Ð¸Ð·Ð¼, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ Ð½Ðµ ÑÑ‚Ð¾Ð¸Ñ‚ Ð·Ð°Ð¿ÑƒÑÐºÐ°Ñ‚ÑŒ Ð±ÐµÐ· Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ÑÑ‚Ð¸",
			SETTINGS_APP_IMAGE: "Ð˜ÐºÐ¾Ð½ÐºÐ°",
			SETTINGS_APP_TITLE: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ",
			SETTINGS_APP_TITLE_HINT: "Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ",
			SETTINGS_APP_REDIRECT: "Redirect URL",
			SETTINGS_APP_REDIRECT_HINT: "Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ url Ð´Ð»Ñ Ñ€ÐµÐ´Ð¸Ñ€ÐµÐºÑ‚Ð° Ð¿Ð¾ÑÐ»Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸",
			SETTINGS_APP_ABOUT_HINT: "ÐžÐ¿Ð¸ÑˆÐ¸Ñ‚Ðµ Ð²Ð°ÑˆÐµ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ",
			SETTINGS_APP_ABOUT: "ÐšÑ€Ð°Ñ‚ÐºÐ¾Ðµ Ð¾Ð¿Ð¸ÑÐ°Ð½Ð¸Ðµ",
			SETTINGS_APP_TYPE: "Ð¢Ð¸Ð¿",
			SETTINGS_APP_TYPE_WEB: "Ð’ÐµÐ± Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ",
			SETTINGS_APP_TYPE_MOBILE: "ÐœÐ¾Ð±Ð¸Ð»ÑŒÐ½Ð¾Ðµ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ",
			SETTINGS_APP_TYPE_BROWSER: "Ð‘Ñ€Ð°ÑƒÐ·ÐµÑ€Ð½Ð¾Ðµ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ",
			SETTINGS_APP_SCOPE: "ÐŸÑ€Ð°Ð²Ð°",
			SETTINGS_APP_READ: "Ð¢Ð¾Ð»ÑŒÐºÐ¾ Ñ‡Ñ‚ÐµÐ½Ð¸Ðµ",
			SETTINGS_APP_READ_BOOKMARK: "Ð¢Ð¾Ð»ÑŒÐºÐ¾ Ñ‡Ñ‚ÐµÐ½Ð¸Ðµ + Ð·Ð°ÐºÐ»Ð°Ð´ÐºÐ¸",
			SETTINGS_APP_ALL_RIGHTS: "Ð’ÑÐµ Ð¿Ñ€Ð°Ð²Ð°",
			SETTINGS_APP_EXTENDED: "Ð Ð°ÑÑˆÐ¸Ñ€ÐµÐ½Ð½Ñ‹Ðµ Ð¿Ñ€Ð°Ð²Ð°",
			SETTINGS_APP_COMPANY_NAME: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¸",
			SETTINGS_APP_COMPANY_NAME_HINT: "Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¸ Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸ÐºÐ°",
			SETTINGS_APP_COMPANY_URL: "Ð¡Ð°Ð¹Ñ‚ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¸",
			SETTINGS_APP_COMPANY_URL_HINT: "Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ ÑÐ°Ð¹Ñ‚ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¸ Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸ÐºÐ°",
			SETTINGS_APP_TYPE_CHOOSE: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ñ‚Ð¸Ð¿",
			SETTINGS_APP_SCOPE_CHOOSE: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð¿Ñ€Ð°Ð²Ð°",
			SETTINGS_ACCOUNT_TITLE: "ÐÐºÐºÐ°ÑƒÐ½Ñ‚",
			SETTINGS_MISC_TITLE: "Ð”Ñ€ÑƒÐ³Ð¾Ðµ",
			SETTINGS_PROFILE_AVATAR: "ÐÐ²Ð°Ñ‚Ð°Ñ€",
			SETTINGS_PROFILE_AVATAR_HINT: "Ð¤Ð¾Ñ€Ð¼Ð°Ñ‚: jpg, gif, png. '<br/>' ÐœÐ°ÐºÑÐ¸Ð¼Ð°Ð»ÑŒÐ½Ñ‹Ð¹ Ñ€Ð°Ð·Ð¼ÐµÑ€ Ñ„Ð°Ð¹Ð»Ð°: 1Mb. '<br/>' Ð Ð°Ð·Ñ€ÐµÑˆÐµÐ½Ð¸Ðµ: Ð´Ð¾ 96x96px.",
			SETTINGS_PROFILE_REALNAME: "ÐÐ°ÑÑ‚Ð¾ÑÑ‰ÐµÐµ Ð¸Ð¼Ñ",
			SETTINGS_PROFILE_REALNAME_HINT: "Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ð²Ð°ÑˆÐ¸ Ð¸Ð¼Ñ Ð¸ Ñ„Ð°Ð¼Ð¸Ð»Ð¸ÑŽ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð´Ñ€ÑƒÐ³Ð¸Ðµ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ð¸ ÑÐ¼Ð¾Ð³Ð»Ð¸ ÑƒÐ·Ð½Ð°Ñ‚ÑŒ, ÐºÐ°Ðº Ð²Ð°Ñ Ð·Ð¾Ð²ÑƒÑ‚",
			SETTINGS_PROFILE_WORKPLACE: "ÐœÐµÑÑ‚Ð¾ Ñ€Ð°Ð±Ð¾Ñ‚Ñ‹",
			SETTINGS_PROFILE_WORKPLACE_PLACEHOLDER: "Ð£Ð´Ð°Ð»Ð¸Ð¼ Ð¼ÐµÑÑ‚Ð¾ Ñ€Ð°Ð±Ð¾Ñ‚Ñ‹, Ð¿Ð¾ÑÐ»Ðµ ÑÐ¾Ñ…Ñ€Ð°Ð½Ð¸Ñ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ð¹.",
			SETTINGS_PROFILE_WORKPLACE_PLACEHOLDER_ACTION: "Ð’Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ",
			SETTINGS_PROFILE_CONTACTS_PLACEHOLDER: "Ð£Ð´Ð°Ð»Ð¸Ð¼ ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚, Ð¿Ð¾ÑÐ»Ðµ ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ð¹.",
			SETTINGS_PROFILE_CONTACTS_PLACEHOLDER_ACTION: "Ð’Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ",
			SETTINGS_PROFILE_SPECIALITY: "ÐžÐ¿Ð¸ÑˆÐ¸Ñ‚Ðµ ÑÐµÐ±Ñ",
			SETTINGS_PROFILE_SPECIALITY_HINT: "Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ ÑÐ²Ð¾ÑŽ ÑÐ¿ÐµÑ†Ð¸Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸ÑŽ. ÐÐ°Ð¿Ñ€Ð¸Ð¼ÐµÑ€: ÐÐ´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¾Ñ€ Ð±Ð°Ð· Ð´Ð°Ð½Ð½Ñ‹Ñ…",
			SETTINGS_PROFILE_GENDER: "ÐŸÐ¾Ð»",
			SETTINGS_PROFILE_GENDER_OTHER: "Ð”Ñ€ÑƒÐ³Ð¾Ð¹",
			SETTINGS_PROFILE_GENDER_MALE: "ÐœÑƒÐ¶ÑÐºÐ¾Ð¹",
			SETTINGS_PROFILE_GENDER_FEMALE: "Ð–ÐµÐ½ÑÐºÐ¸Ð¹",
			SETTINGS_PROFILE_BIRTH_DATE: "Ð”Ð°Ñ‚Ð° Ñ€Ð¾Ð¶Ð´ÐµÐ½Ð¸Ñ",
			SETTINGS_PROFILE_BIRTH_DAY: "Ð§Ð¸ÑÐ»Ð¾",
			SETTINGS_PROFILE_BIRTH_MONTH: "ÐœÐµÑÑÑ†",
			SETTINGS_PROFILE_BIRTH_YEAR: "Ð“Ð¾Ð´",
			SETTINGS_PROFILE_LOCATION: "ÐœÐµÑÑ‚Ð¾Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ",
			SETTINGS_PROFILE_COUNTRY: "Ð¡Ñ‚Ñ€Ð°Ð½Ð°",
			SETTINGS_PROFILE_REGION: "Ð ÐµÐ³Ð¸Ð¾Ð½",
			SETTINGS_PROFILE_CITY: "Ð“Ð¾Ñ€Ð¾Ð´",
			SETTINGS_PROFILE_CONTACTS: "ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ð½Ð°Ñ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ Ð¸ Ð²ÐµÐ±-Ñ€ÐµÑÑƒÑ€ÑÑ‹",
			SETTINGS_PROFILE_CONTACTS_HINT: "Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ð¸Ð¼Ñ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ Ð¸Ð»Ð¸ ID Ð¸ Ð¼Ñ‹ ÑÐ°Ð¼Ð¸ ÑÐ´ÐµÐ»Ð°ÐµÐ¼ ÑÑÑ‹Ð»ÐºÑƒ. Ð§Ñ‚Ð¾Ð±Ñ‹ ÑÑÑ‹Ð»ÐºÐ° Ð¿Ð¾ÑÐ²Ð¸Ð»Ð°ÑÑŒ Ð² Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¾Ð½Ð½Ð¾Ð¹ Ð¿Ð°Ð½ÐµÐ»Ð¸ Ð°Ð²Ñ‚Ð¾Ñ€Ð° Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸Ð¸, Ð¾Ñ‚Ð¼ÐµÑ‚ÑŒÑ‚Ðµ ÐµÑ‘, ÐºÐ»Ð¸ÐºÐ½ÑƒÐ² Ð½Ð° Ð¸ÐºÐ¾Ð½ÐºÑƒ ÑÐ¿Ñ€Ð°Ð²Ð°.",
			SETTINGS_PROFILE_CONTACTS_ADD: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ ÑÑÑ‹Ð»ÐºÑƒ",
			SETTINGS_PROFILE_YANDEX_MONEY: "YooMoney",
			SETTINGS_PROFILE_YANDEX_MONEY_HINT: "ÐÐ¾Ð¼ÐµÑ€ ÐºÐ¾ÑˆÐµÐ»ÑŒÐºÐ°. ÐžÑ‚ 11 Ð´Ð¾ 20 Ñ†Ð¸Ñ„Ñ€",
			SETTINGS_PROFILE_PAYPAL: "PayPal.Me",
			SETTINGS_PROFILE_PAYPAL_HINT: "Ð˜Ð´ÐµÐ½Ñ‚Ð¸Ñ„Ð¸ÐºÐ°Ñ‚Ð¾Ñ€ PayPal.me ÐžÑ‚ 3 Ð´Ð¾ 20 Ñ†Ð¸Ñ„Ñ€ Ð¸/Ð¸Ð»Ð¸ Ð»Ð°Ñ‚Ð¸Ð½ÑÐºÐ¸Ñ… Ð±ÑƒÐºÐ²",
			SETTINGS_PROFILE_WEBMONEY: "Webmoney",
			SETTINGS_PROFILE_WEBMONEY_HINT: "ÐÐ¾Ð¼ÐµÑ€ WMID. 12 Ñ†Ð¸Ñ„Ñ€",
			SETTINGS_PROFILE_PAYMENTS: "ÐŸÐ»Ð°Ñ‚ÐµÐ¶Ð½Ñ‹Ðµ Ñ€ÐµÐºÐ²Ð¸Ð·Ð¸Ñ‚Ñ‹",
			SETTINGS_PROFILE_PAYMENTS_HINT: "Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ñ…Ð¾Ñ‚Ð¸Ñ‚Ðµ Ð¿Ð¾Ð»ÑƒÑ‡Ð°Ñ‚ÑŒ Ð¾Ñ‚ Ð´Ñ€ÑƒÐ³Ð¸Ñ… Ð²Ð¾Ð·Ð½Ð°Ð³Ñ€Ð°Ð¶Ð´ÐµÐ½Ð¸Ðµ Ð·Ð° ÑÐ²Ð¾Ð¸ Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸Ð¸, ÑƒÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ð½Ð¾Ð¼ÐµÑ€Ð° Ð²Ð°ÑˆÐ¸Ñ… ÐºÐ¾ÑˆÐµÐ»ÑŒÐºÐ¾Ð².",
			SETTINGS_PROFILE_ABOUT: "Ð Ð°ÑÑÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ð¾ ÑÐµÐ±Ðµ",
			SETTINGS_PROFILE_ABOUT_HINT: "ÐÐµ Ð±Ð¾Ð»ÐµÐµ 6 500 ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð²",
			SETTINGS_PROFILE_SUBMIT: "Ð¡Ð¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ñ",
			SETTINGS_PROFILE_SHOW_CONTACTS: "ÐŸÐ¾ÐºÐ°Ð·Ñ‹Ð²Ð°Ñ‚ÑŒ Ð²Ð°ÑˆÐ¸ ÑÐ°Ð¹Ñ‚Ñ‹ Ð¸ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚Ñ‹ Ð² ÑÐ¾Ñ†ÑÐµÑ‚ÑÑ…",
			SETTINGS_PROFILE_TO_EVERYONE: "Ð²ÑÐµÐ¼",
			SETTINGS_PROFILE_TO_FOLLOWING: "Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ñ‚ÐµÐ¼, Ð½Ð° ÐºÐ¾Ð³Ð¾ Ð²Ñ‹ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐ°Ð½Ñ‹",
			SETTINGS_PROFILE_INBOX_ACCESS: "ÐŸÑ€Ð¸Ð½Ð¸Ð¼Ð°Ñ‚ÑŒ Ð»Ð¸Ñ‡Ð½Ñ‹Ðµ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ",
			SETTINGS_PROFILE_FROM_EVERYONE: "Ð¾Ñ‚Ð¾ Ð²ÑÐµÑ…",
			SETTINGS_PROFILE_FROM_FOLLOWERS: "Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð¾Ñ‚ Ñ‚ÐµÑ…, Ð½Ð° ÐºÐ¾Ð³Ð¾ Ð²Ñ‹ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐ°Ð½Ñ‹",
			SETTINGS_PROFILE_SHOW_ACTIVITY: "ÐŸÐ¾ÐºÐ°Ð·Ñ‹Ð²Ð°Ñ‚ÑŒ Ð²Ð°ÑˆÑƒ Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾ÑÑ‚ÑŒ Ð½Ð° ÑÐ°Ð¹Ñ‚Ðµ",
			SETTINGS_PROFILE_TO_FOLLOWERS: "Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ñ‚ÐµÐ¼, ÐºÑ‚Ð¾ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐ°Ð½ Ð½Ð° Ð²Ð°Ñ",
			SETTINGS_NOTIFICATIONS_NEW_COMMENTS: "Ð£Ð²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ñ Ð¾ Ð½Ð¾Ð²Ñ‹Ñ… ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸ÑÑ…",
			SETTINGS_NOTIFICATIONS_TO_MY_POSTS: "Ðš Ð¼Ð¾Ð¸Ð¼ Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸ÑÐ¼",
			SETTINGS_NOTIFICATIONS_TO_POSTS_WITH_COMMENTS: "Ðš Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸ÑÐ¼, Ð³Ð´Ðµ ÐµÑÑ‚ÑŒ Ð¼Ð¾Ð¹ ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¹",
			SETTINGS_NOTIFICATIONS_TO_BOOKMARKED_POSTS: "Ðš Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸ÑÐ¼ Ñƒ Ð¼ÐµÐ½Ñ Ð²Â Ð·Ð°ÐºÐ»Ð°Ð´ÐºÐ°Ñ…",
			SETTINGS_NOTIFICATIONS_TRACKER: "Ð¢Ñ€ÐµÐºÐµÑ€",
			SETTINGS_NOTIFICATIONS_EMAIL: "ÐŸÐ¾Ñ‡Ñ‚Ð°",
			SETTINGS_NOTIFICATIONS_SEND_ME_EMAILS: "ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð»ÑÑ‚ÑŒ Ð¼Ð½Ðµ Ð¿Ð¸ÑÑŒÐ¼Ð°",
			SETTINGS_NOTIFICATIONS_NEWS: "ÐžÐ± Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸ÑÑ… Ð½Ð° ÑÐ°Ð¹Ñ‚Ðµ",
			SETTINGS_NOTIFICATIONS_NEW_EXPERIENCE: "Ðž Ð½Ð¾Ð²Ñ‹Ñ… Ð´Ð»Ñ Ð¼ÐµÐ½Ñ Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚ÑÑ… Ð½Ð°Â ÑÐ°Ð¹Ñ‚Ðµ",
			SETTINGS_NOTIFICATIONS_NEW_MESSAGES: "Ðž Ð½Ð¾Ð²Ñ‹Ñ… ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸ÑÑ… Ð² Ð”Ð¸Ð°Ð»Ð¾Ð³Ð°Ñ…",
			SETTINGS_NOTIFICATIONS_NEW_COMMENTS_REPLY: "ÐžÐ± Ð¾Ñ‚Ð²ÐµÑ‚Ð°Ñ… Ð½Ð° Ð¼Ð¾Ð¸ ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¸",
			SETTINGS_NOTIFICATIONS_NEW_MENTION: "Ð•ÑÐ»Ð¸ Ð¼ÐµÐ½Ñ ÑƒÐ¿Ð¾Ð¼ÑÐ½ÑƒÐ»Ð¸ Ð² Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸Ð¸ Ð¸Ð»Ð¸ ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¸",
			SETTINGS_NOTIFICATIONS_NEW_FOLLOWER: "Ð•ÑÐ»Ð¸ Ñƒ Ð¼ÐµÐ½Ñ Ð½Ð¾Ð²Ñ‹Ð¹ Ð¿Ð¾Ð´Ð¿Ð¸ÑÑ‡Ð¸Ðº",
			SETTINGS_NOTIFICATIONS_TRACKER_SETTINGS: "ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ Ñ‚Ñ€ÐµÐºÐµÑ€Ð°",
			SETTINGS_NOTIFICATIONS_TRACKER_BADGE: "ÐŸÐ¾ÐºÐ°Ð·Ñ‹Ð²Ð°Ñ‚ÑŒ Ñ‡Ð¸ÑÐ»Ð¾ Ð½ÐµÐ¿Ñ€Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð½Ñ‹Ñ… ÑƒÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ð¹ Ñ€ÑÐ´Ð¾Ð¼ Ñ Ð¸ÐºÐ¾Ð½ÐºÐ¾Ð¹ Ñ‚Ñ€ÐµÐºÐµÑ€Ð°",
			SETTINGS_NOTIFICATIONS_FOLLOWERS_BOOKMARKS: "ÐŸÐ¾ÐºÐ°Ð·Ñ‹Ð²Ð°Ñ‚ÑŒ Ð·Ð°ÐºÐ»Ð°Ð´ÐºÐ¸, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð´Ð¾Ð±Ð°Ð²Ð¸Ð»Ð¸ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ð¸, Ð½Ð° ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ñ… Ñ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐ°Ð½",
			SETTINGS_NOTIFICATIONS_DIGEST: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ñ‡Ð°ÑÑ‚Ð¾Ñ‚Ñƒ Ñ€Ð°ÑÑÑ‹Ð»ÐºÐ¸ Ð´Ð°Ð¹Ð´Ð¶ÐµÑÑ‚Ð° Ð¾ ÑÐ°Ð¼Ð¾Ð¼ Ð¸Ð½Ñ‚ÐµÑ€ÐµÑÐ½Ð¾Ð¼ Ð¿Ð¾ Ð²Ð°ÑˆÐ¸Ð¼ Ñ…Ð°Ð±Ð°Ð¼",
			SETTINGS_NOTIFICATIONS_DIGEST_NEVER: "ÐÐµ Ð¿Ñ€Ð¸ÑÑ‹Ð»Ð°Ñ‚ÑŒ",
			SETTINGS_NOTIFICATIONS_DIGEST_DAY: "ÐŸÑ€Ð¸ÑÑ‹Ð»Ð°Ñ‚ÑŒ ÐºÐ°Ð¶Ð´Ñ‹Ð¹ Ð´ÐµÐ½ÑŒ",
			SETTINGS_NOTIFICATIONS_DIGEST_WEEK: "ÐŸÑ€Ð¸ÑÑ‹Ð»Ð°Ñ‚ÑŒ Ñ€Ð°Ð· Ð² Ð½ÐµÐ´ÐµÐ»ÑŽ",
			SETTINGS_NOTIFICATIONS_DIGEST_MONTH: "ÐŸÑ€Ð¸ÑÑ‹Ð»Ð°Ñ‚ÑŒ Ñ€Ð°Ð· Ð² Ð¼ÐµÑÑÑ†",
			SETTINGS_MISC_INTERACTIONS: "Ð’Ð·Ð°Ð¸Ð¼Ð¾Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ",
			SETTINGS_MISC_REFRESH_PANEL: "ÐžÑ‚Ð¾Ð±Ñ€Ð°Ð¶Ð°Ñ‚ÑŒ Ð¿Ð°Ð½ÐµÐ»ÑŒ Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ ÐºÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸ÐµÐ²",
			SETTINGS_MISC_HOTKEYS: "Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ð³Ð¾Ñ€ÑÑ‡Ð¸Ðµ ÐºÐ»Ð°Ð²Ð¸ÑˆÐ¸ ('<a href=\"/docs/help/hotkeys/\">'ÑÐ¿Ð¸ÑÐ¾Ðº'</a>')",
			SETTINGS_MISC_DISABLE_ADS: "ÐžÑ‚ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ Ñ€ÐµÐºÐ»Ð°Ð¼Ñƒ Ð½Ð° ÑÐ°Ð¹Ñ‚Ðµ",
			SETTINGS_MISC_YES_IT_WOULD_BE_NICE: "Ð”Ð°, ÑÑ‚Ð¾ Ð±Ñ‹Ð»Ð¾ Ð±Ñ‹ Ð·Ð´Ð¾Ñ€Ð¾Ð²Ð¾!",
			SETTINGS_READONLY_UPGRADE: "Ð•ÑÐ»Ð¸ Ñƒ Ð²Ð°Ñ ÐµÑÑ‚ÑŒ Ð¿Ñ€Ð¸Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ðµ, Ð²Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð½Ð°Ð¿Ð¸ÑÐ°Ñ‚ÑŒ ÐµÐ³Ð¾ Ð² Ñ„Ð¾Ñ€Ð¼Ñƒ Ð½Ð¸Ð¶Ðµ Ð¸ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ Ð²ÑÐµ Ð´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ñ‹Ðµ Ð´Ð»Ñ Ð¿Ð¾Ð»Ð½Ð¾Ð¿Ñ€Ð°Ð²Ð½Ñ‹Ñ… Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚Ð¾Ð² Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚Ð¸.",
			SETTINGS_INVITE_CODE: "ÐšÐ¾Ð´ Ð¿Ñ€Ð¸Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ñ",
			SETTINGS_INVITE_RECALLED: "ÐŸÑ€Ð¸Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ðµ Ð±Ñ‹Ð»Ð¾ Ð¾Ñ‚Ð¾Ð·Ð²Ð°Ð½Ð¾",
			SETTINGS_INVITE_APPLIED: "ÐŸÑ€Ð¸Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ðµ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½Ð¾",
			SETTINGS_INVITE_ALREADY_USED: "ÐŸÑ€Ð¸Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ðµ ÑƒÐ¶Ðµ Ð±Ñ‹Ð»Ð¾ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¾",
			SETTINGS_INVITE_USER_ALREADY_FULL: "Ð’Ñ‹ ÑƒÐ¶Ðµ ÑÐ²Ð»ÑÐµÑ‚ÐµÑÑŒ Ð¿Ð¾Ð»Ð½Ð¾Ð¿Ñ€Ð°Ð²Ð½Ñ‹Ð¼ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÐµÐ¼ Ð¥Ð°Ð±Ñ€Ð° Ð¸ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ð¿Ñ€Ð¸Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ñ"
		}
	},
	"8bba": function (t, e, s) {
		"use strict";
		s("71b1")
	},
	"8dbe": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("router-link", {
				attrs: {
					to: t.route
				}
			}, [t._t("default")], 2)
		},
			a = [],
			i = s("2f62");
		const o = {
			corporative: "ARTICLES_LIST_BY_COMPANY",
			collective: "HUB_PAGE"
		};
		var r = {
			name: "TMHubLink",
			props: {
				hub: {
					type: Object,
					required: !0
				}
			},
			computed: {
				...Object(i["c"])("i18n", ["langOptions"]),
				route() {
					const {
						hub: {
							type: t,
							alias: e
						},
						langOptions: {
							hl: s
						}
					} = this;
					return {
						name: o[t] || o.collective,
						params: {
							name: e,
							hubName: e,
							hl: s
						}
					}
				}
			}
		},
			c = r,
			l = s("2877"),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	"8e5c": function (t, e, s) {
		"use strict";
		s("d083")
	},
	"8f7a": function (t, e, s) { },
	"8fab": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return t.$scopedSlots.default ? s("span", [t._t("default", null, {
				formattedDate: t.formattedDate
			})], 2) : s("time", {
				attrs: {
					datetime: t.jsDate.toISOString(),
					title: t.fullForm
				},
				domProps: {
					textContent: t._s(t.formattedDate)
				}
			})
		},
			a = [],
			i = s("88e7"),
			o = {
				name: "TMDatetime",
				props: {
					date: {
						required: !0,
						type: [String, Date]
					},
					showFullDateTime: Boolean,
					absoluteDate: Boolean,
					hideToday: Boolean
				},
				computed: {
					jsDate() {
						return new Date(this.date)
					},
					time() {
						return Object(i["a"])(this.jsDate)
					},
					fullForm() {
						const t = Object(i["b"])(this.jsDate);
						return `${t}, ${this.time}`
					},
					isMoreThanOneYear() {
						const t = new Date;
						return t.getFullYear() - this.jsDate.getFullYear() >= 1
					},
					textParams() {
						const t = new Date,
							e = {
								time: this.time
							};
						if (!this.absoluteDate) {
							if (Object(i["c"])(this.jsDate, t)) return this.hideToday ? {
								name: "WHEN_AT",
								params: e
							} : {
								name: "WHEN_TODAY_AT",
								params: e
							};
							if (Object(i["d"])(this.jsDate, t)) return {
								name: "WHEN_YESTERDAY_AT",
								params: e
							}
						}
						const s = (this.absoluteDate || this.isMoreThanOneYear) && this.jsDate.getFullYear(),
							n = {
								day: this.jsDate.getDate().toString(),
								month: this.jsDate.getMonth().toString(),
								year: s,
								...e
							};
						return this.showFullDateTime ? {
							name: "WHEN_FULL_DATE_AT",
							params: n
						} : {
							name: "WHEN_FULL_DATE",
							params: n
						}
					},
					formattedDate() {
						return this.msg(this.textParams.name, this.textParams.params)
					}
				}
			},
			r = o,
			c = s("2877"),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	"8fea": function (t, e, s) { },
	9022: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-data-icons"
			}, [t.showIcon("rating") ? s("TMArticleRating", {
				staticClass: "tm-data-icons__item",
				attrs: {
					article: t.article
				},
				on: {
					scoreClick: t.showVotesPopup
				}
			}) : t._e(), t._v(" "), t.showIcon("votes") ? s("TMVotesMeter", {
				staticClass: "tm-data-icons__item",
				attrs: {
					appearance: "article",
					score: t.article.statistics.score,
					"vote-state": t.voteState,
					"votes-count": t.article.statistics.votesCount
				},
				nativeOn: {
					click: function (e) {
						return t.showVotesPopup.apply(null, arguments)
					}
				}
			}) : t._e(), t._v(" "), t.showIcon("views") ? s("TMIconCounter", {
				staticClass: "tm-data-icons__item",
				attrs: {
					abbreviated: "",
					counter: t.article.statistics.readingCount,
					"icon-id": "counter-views",
					title: t.msg("DATA_ICONS_VIEWS")
				}
			}) : t._e(), t._v(" "), t.showIcon("favorite") ? s("TMBookmarksButton", {
				staticClass: "tm-data-icons__item",
				attrs: {
					"bookmarks-count": t.article.statistics.favoritesCount,
					"is-bookmarked": t.isLoggedIn && t.isBookmarked,
					"is-processing": t.isLoadingBookmark
				},
				on: {
					"toggle-bookmark": function (e) {
						return t.onBookmarkClick(t.article)
					}
				}
			}) : t._e(), t._v(" "), t.showIcon("comments") ? s("TMArticleCommentsCounterLink", {
				staticClass: "tm-data-icons__item",
				attrs: {
					article: t.article,
					"comments-count": t.article.statistics.commentsCount,
					"ga-options": t.gaOptions,
					title: t.msg("DATA_ICONS_READ_COMMENTS"),
					"unread-count": t.unreadCommentsCount
				}
			}) : t._e(), t._v(" "), t.showIcon("share") ? s("TMSharing", {
				staticClass: "tm-data-icons__item",
				attrs: {
					article: t.article,
					title: t.msg("DATA_ICONS_SHARE")
				}
			}) : t._e(), t._v(" "), s("Portal", {
				attrs: {
					to: "overlays"
				}
			}, [t.votesPopupVisible ? s("TMPopup", {
				attrs: {
					title: t.msg("ARTICLE_REASON_TOTAL", t.votesStats)
				},
				on: {
					close: function (e) {
						t.votesPopupVisible = !1
					}
				}
			}, [s("TMArticleVoteStats", {
				attrs: {
					"reasons-map": t.reasonsMap,
					voting: t.votesStats
				}
			})], 1) : t._e()], 1)], 1)
		},
			a = [],
			i = s("2f62"),
			o = s("edfe"),
			r = s("ea2d"),
			c = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-article-rating"
				}, [t.article.relatedData && t.article.relatedData.canVote ? s("TMVotesLever", {
					staticClass: "tm-article-rating__votes-switcher",
					attrs: {
						appearance: "article",
						"can-vote-minus": t.article.relatedData.canVoteMinus,
						"can-vote-plus": t.article.relatedData.canVotePlus,
						"is-loading": t.isVoteLoading || t.isLoadingReasonsList,
						"is-plusified": !0,
						score: t.article.statistics.score,
						"vote-state": t.voteState,
						"votes-count": t.article.statistics.votesCount
					},
					on: {
						downvote: t.showVotePopup,
						scoreClick: function (e) {
							return t.$emit("scoreClick")
						},
						upvote: t.articleUpVote
					}
				}) : s("TMVotesMeter", {
					staticClass: "tm-article-rating__votes-switcher",
					attrs: {
						appearance: "article",
						score: t.article.statistics.score,
						"vote-state": t.voteState,
						"votes-count": t.article.statistics.votesCount
					},
					nativeOn: {
						click: function (e) {
							return t.$emit("scoreClick")
						}
					}
				}), t._v(" "), s("Portal", {
					attrs: {
						to: "overlays"
					}
				}, [t.isOpenArticleVote ? s("TMPopup", {
					attrs: {
						title: t.title
					},
					on: {
						close: t.closePopup
					}
				}, [t.isOpenSuccessPopup ? s("div", {
					domProps: {
						textContent: t._s(t.msg("ARTICLE_REASON_SUCCESS"))
					}
				}) : s("TMArticleMinusReason", {
					attrs: {
						"reasons-list": t.getReasonsList
					},
					on: {
						downVote: t.articleDownVote
					}
				})], 1) : t._e()], 1)], 1)
			},
			l = [],
			u = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-article-minus-reason"
				}, [t._l(t.reasonsList, (function (e) {
					return s("TMInputRadioLabeled", {
						key: e.id,
						staticClass: "tm-article-minus-reason__radio-button",
						attrs: {
							"checked-value": "" + e.id,
							name: "reason"
						},
						model: {
							value: t.reasonValue,
							callback: function (e) {
								t.reasonValue = e
							},
							expression: "reasonValue"
						}
					}, [t._v("\n    " + t._s(e.title) + "\n  ")])
				})), t._v(" "), s("TMButtonBase", {
					staticClass: "tm-article-minus-reason__btn",
					attrs: {
						disabled: 0 === t.reasonValue.length,
						"is-loading": t.downVoteLoading,
						"style-size": "small",
						"style-type": "solid",
						type: "submit"
					},
					on: {
						click: function (e) {
							return t.$emit("downVote", t.reasonValue)
						}
					}
				}, [t._v("\n    " + t._s(t.msg("ARTICLE_REASON_BUTTON_SEND")) + "\n  ")])], 2)
			},
			m = [],
			d = s("884d"),
			p = s("de63"),
			_ = {
				name: "TMArticleMinusReason",
				components: {
					TMButtonBase: d["a"],
					TMInputRadioLabeled: p["a"]
				},
				props: {
					reasonsList: {
						type: Object,
						required: !0
					}
				},
				data() {
					return {
						isOpenArticleVote: !1,
						reasonValue: "",
						downVoteLoading: !1,
						isOpenArticleVoteSuccess: !1
					}
				}
			},
			h = _,
			g = (s("340c"), s("2877")),
			f = Object(g["a"])(h, u, m, !1, null, null, null),
			b = f.exports,
			T = s("badd"),
			v = s("f419"),
			E = s("874b"),
			S = s("9864"),
			O = s("6f23"),
			C = {
				name: "TMArticleRating",
				components: {
					TMVotesLever: v["a"],
					TMVotesMeter: E["a"],
					TMArticleMinusReason: b,
					TMPopup: T["a"]
				},
				props: {
					article: S["a"]
				},
				data() {
					return {
						isOpenArticleVote: !1,
						isOpenSuccessPopup: !1,
						title: null,
						isVoteLoading: !1,
						isLoadingReasonsList: !1
					}
				},
				computed: {
					...Object(i["c"])("me", ["isSuperAdmin", "userAlias", "isLoggedIn"]),
					...Object(i["c"])("articlesList", ["getReasonsList"]),
					voteState() {
						return this.isLoggedIn && this.article.relatedData && this.article.relatedData.vote.value || 0
					},
					GAAction() {
						return this.article.metadata && this.article.metadata.pageType
					}
				},
				methods: {
					...Object(i["b"])("articlesList", ["downvote", "upvote", "loadReasonsList"]),
					articleUpVote() {
						this.isVoteLoading = !0, this.upvote({
							id: this.article.id
						}).then(() => {
							Object(O["c"])("voting", this.GAAction, "plus"), this.isVoteLoading = !1
						}).catch(t => {
							this.isVoteLoading = !1, this.$toast.error(t.message)
						})
					},
					articleDownVote(t) {
						this.downvote({
							id: this.article.id,
							reason: t
						}).then(() => {
							this.title = null, this.isOpenSuccessPopup = !0, setTimeout(() => {
								this.isOpenSuccessPopup = !1, this.isOpenArticleVote = !1
							}, 3e3), Object(O["c"])("voting", this.GAAction, "minus")
						}).catch(t => {
							this.$toast.error(t.message)
						})
					},
					closePopup() {
						this.isOpenArticleVote = !1, this.isResult = !1
					},
					showVotePopup() {
						this.isLoadingReasonsList = !0, this.loadReasonsList().then(() => {
							this.isOpenArticleVote = this.isLoggedIn && this.article.relatedData.canVote, this.title = this.msg("ARTICLE_REASON_POPUP_TITLE"), this.isLoadingReasonsList = !1
						}).catch(t => {
							this.isLoadingReasonsList = !1, this.$toast.error(t.message)
						})
					}
				}
			},
			I = C,
			A = (s("05be"), Object(g["a"])(I, c, l, !1, null, null, null)),
			y = A.exports,
			L = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return t.reasonsList ? s("div", {
					staticClass: "tm-article-vote-stats",
					style: {
						"--percent-value": t.percentValue
					}
				}, [t.emptyResult ? s("div", [t._v("\n    " + t._s(t.msg("ARTICLE_REASON_NO_DATA")) + "\n  ")]) : [s("div", {
					staticClass: "tm-article-vote-stats__result-border"
				}), t._v(" "), s("h3", {
					staticClass: "tm-article-vote-stats__title"
				}, [t._v("\n      " + t._s(t.msg("ARTICLE_REASON_SUBTITLE")) + "\n    ")]), t._v(" "), t._l(t.filteredReasons, (function (e) {
					return s("div", {
						key: e.reasonId,
						staticClass: "tm-article-vote-stats__result-item"
					}, [s("div", {
						staticClass: "tm-article-vote-stats__text"
					}, [t._v("\n        " + t._s(t.getReasonTitle(e)) + "\n      ")]), t._v(" "), s("div", {
						staticClass: "tm-article-vote-stats__percent"
					}, [t._v("\n        " + t._s(e.percent) + "%\n      ")]), t._v(" "), s("div", {
						staticClass: "tm-article-vote-stats__result-line",
						style: {
							width: e.percent + "%"
						}
					})])
				}))]], 2) : t._e()
			},
			P = [],
			N = {
				name: "TMArticleVoteStats",
				props: {
					voting: {
						type: Object,
						required: !0
					},
					reasonsMap: {
						type: Array,
						required: !0
					}
				},
				computed: {
					...Object(i["e"])("articlesList", ["reasonsList"]),
					emptyResult() {
						let t = 0;
						return this.reasonsMap.forEach(e => {
							t += e.percent
						}), 0 === t
					},
					filteredReasons() {
						return this.reasonsMap.filter(t => !!this.reasonsList[t.id])
					},
					percentValue() {
						const {
							positive: t,
							total: e
						} = this.voting;
						return t / e * 100 + "%"
					}
				},
				mounted() {
					this.loadReasonsList().catch(t => {
						this.$toast.error(t.message)
					})
				},
				methods: {
					...Object(i["b"])("articlesList", ["loadReasonsList"]),
					getReasonTitle({
						id: t
					}) {
						return !!this.reasonsList[t] && (this.reasonsList[t].title || "")
					}
				}
			},
			R = N,
			M = (s("21e3"), Object(g["a"])(R, L, P, !1, null, null, null)),
			w = M.exports,
			k = s("cbd6"),
			j = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("span", {
					staticClass: "tm-icon-counter"
				}, [s("TMSvgImg", {
					staticClass: "tm-icon-counter__icon",
					attrs: {
						id: t.iconId,
						size: "24"
					}
				}), t._v(" "), s("span", {
					staticClass: "tm-icon-counter__value",
					domProps: {
						textContent: t._s(t.formattedCounter)
					}
				})], 1)
			},
			D = [],
			x = s("b7d0"),
			B = s("6be8"),
			$ = {
				name: "TMIconCounter",
				components: {
					TMSvgImg: x["a"]
				},
				props: {
					iconId: {
						type: String,
						required: !0
					},
					counter: {
						type: [String, Number],
						default: null
					},
					abbreviated: Boolean
				},
				computed: {
					formattedCounter() {
						return this.abbreviated ? Object(B["a"])(this.counter) : this.counter
					}
				}
			},
			F = $,
			G = (s("18482"), Object(g["a"])(F, j, D, !1, null, null, null)),
			U = G.exports,
			V = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-sharing"
				}, [s("button", {
					staticClass: "tm-sharing__button",
					attrs: {
						type: "button"
					},
					on: {
						click: t.invokeSharing
					}
				}, [s("TMShareIcon", {
					staticClass: "tm-sharing__icon"
				})], 1), t._v(" "), s("Portal", {
					attrs: {
						to: "overlays"
					}
				}, [t.isOpenShare ? s("TMPopup", {
					attrs: {
						title: t.msg("ARTICLE_SHARING_TITLE")
					},
					on: {
						close: t.closePopup
					}
				}, [s("ul", {
					staticClass: "tm-sharing__socials"
				}, t._l(t.socials, (function (e) {
					return s("li", {
						key: e.key
					}, [s("span", {
						staticClass: "tm-sharing__social",
						on: {
							click: e.action
						}
					}, [t._v("\n            " + t._s(t.msg(e.key)) + "\n          ")])])
				})), 0)]) : t._e()], 1)], 1)
			},
			W = [],
			H = s("1fa6"),
			Y = s("32f0");
		const q = () => s.e("chunk-2d21ab85").then(s.t.bind(null, "bd5b", 7));
		var K = {
			name: "TMSharing",
			components: {
				TMShareIcon: q,
				TMPopup: T["a"]
			},
			props: {
				article: S["a"]
			},
			data() {
				return {
					isOpenShare: !1
				}
			},
			computed: {
				articleUrl() {
					return `https://localhost:7103/p/${this.article.id}/`
				},
				socials() {
					const t = encodeURIComponent(this.articleUrl),
						e = encodeURIComponent(Object(Y["a"])(this.article.titleHtml));
					return [{
						key: "SOCIAL_COPY",
						action: this.copyLink
					}, {
						key: "SOCIAL_FACEBOOK",
						action: () => this.openLink("https://www.facebook.com/sharer/sharer.php?u=" + t)
					}, {
						key: "SOCIAL_TWITTER",
						action: () => this.openLink(`https://twitter.com/intent/tweet?text=${e}+${t}+via+%40habr_com`)
					}, {
						key: "SOCIAL_VK",
						action: () => this.openLink("https://vk.com/share.php?url=" + t)
					}, {
						key: "SOCIAL_TELEGRAM",
						action: () => this.openLink(`https://t.me/share/url?url=${t}&title=${e}`)
					}, {
						key: "SOCIAL_POCKET",
						action: () => this.openLink("https://getpocket.com/edit?url=" + t)
					}]
				}
			},
			methods: {
				openLink(t) {
					window.open(t, "_blank"), this.closePopup()
				},
				copyLink() {
					const t = window.location.href;
					Object(H["a"])(t), this.closePopup(), this.$toast.success(this.msg("SOCIAL_COPIED"))
				},
				invokeSharing() {
					navigator.share ? navigator.share({
						title: this.msg("SITENAME"),
						text: this.article.titleHtml,
						url: this.articleUrl
					}).catch(t => {
						throw t
					}) : this.isOpenShare = !0
				},
				closePopup() {
					this.isOpenShare = !1
				}
			}
		},
			z = K,
			X = (s("8617"), Object(g["a"])(z, V, W, !1, null, null, null)),
			J = X.exports,
			Q = s("e3a7");
		const Z = ["rating", "votes", "views", "favorite", "comments", "share"];
		var tt = {
			name: "TMDataIcons",
			components: {
				TMArticleVoteStats: w,
				TMPopup: T["a"],
				TMArticleCommentsCounterLink: r["a"],
				TMArticleRating: y,
				TMBookmarksButton: k["a"],
				TMIconCounter: U,
				TMSharing: J,
				TMVotesMeter: E["a"]
			},
			props: {
				article: {
					type: Object,
					default: null
				},
				iconsList: {
					type: Array,
					default: () => [],
					validator: t => t.every(t => -1 !== Z.indexOf(t))
				},
				type: {
					type: String,
					default: "block"
				},
				bookmarkModule: {
					type: String,
					default: "articlesList"
				},
				gaOptions: {
					type: Object,
					default: null
				}
			},
			data() {
				return {
					isLoadingBookmark: !1,
					votesPopupVisible: !1,
					reasonsMap: null,
					unreadCommentsCount: this.article.relatedData ? this.article.relatedData.unreadCommentsCount : null
				}
			},
			computed: {
				...Object(i["e"])("articlesList", ["articlesList"]),
				...Object(i["c"])("me", ["isLoggedIn", "isSuperAdmin", "userAlias"]),
				isBookmarked() {
					return !this.isLoadingBookmark && this.article.relatedData && this.article.relatedData.bookmarked
				},
				GAAction() {
					return this.article.metadata && this.article.metadata.pageType
				},
				voteState() {
					const {
						relatedData: t
					} = this.article;
					return t && t.vote && t.vote.value ? t.vote.value : 0
				},
				votesStats() {
					const {
						votesCount: t,
						score: e
					} = this.article.statistics;
					return {
						total: t,
						positive: (t + e) / 2,
						negative: (t - e) / 2
					}
				}
			},
			beforeMount() {
				if (!this.isLoggedIn) {
					const {
						article: {
							id: t,
							statistics: e
						}
					} = this;
					Object(o["a"])(t).then((t = 0) => {
						const s = Math.max(e.commentsCount - t, 0);
						this.unreadCommentsCount = s
					})
				}
			},
			methods: {
				...Object(i["b"])("articlesList", ["toggleArticleBookmark"]),
				showIcon(t) {
					return this.iconsList && -1 !== this.iconsList.indexOf(t)
				},
				onBookmarkClick() {
					this.isLoggedIn ? (this.isLoadingBookmark = !0, this.toggleArticleBookmark({
						article: this.article,
						bookmarkModule: this.bookmarkModule
					}).then(() => {
						this.article.relatedData.bookmarked && Object(O["c"])("favorites", this.GAAction, this.userAlias), this.isLoadingBookmark = !1
					})) : this.$toast.error(this.msg("AUTH_REQUIRED"))
				},
				showVotesPopup() {
					(this.isSuperAdmin || this.userAlias === this.article.author.alias) && Object(Q["t"])(this.article.id).then(t => {
						this.votesPopupVisible = !0, this.reasonsMap = t.data
					}).catch(t => {
						this.$toast.error(t.message)
					})
				}
			}
		},
			et = tt,
			st = (s("5ddb"), Object(g["a"])(et, n, a, !1, null, null, null));
		e["a"] = st.exports
	},
	9044: function (t, e) {
		t.exports.en = {
			ERROR_PAGE_AUTH: "Login",
			ERROR_PAGE_BACK_TO_MAIN: "Back to the main page",
			ERROR_PAGE_MESSAGE_INTERNAL: "Something went wrong",
			ERROR_PAGE_MESSAGE_NOT_AUTHORIZED: "Please login to see this page",
			ERROR_PAGE_MESSAGE_NOT_FOUND: "Page is outdated, was removed or never existed at all",
			ERROR_PAGE_MESSAGE_NOT_IMPLEMENTED: "Please use desktop version",
			ERROR_PAGE_MESSAGE_UNAUTHORIZED: "Please login to see this page",
			ERROR_PAGE_MESSAGE_REDIRECT: "Requested resource is moved",
			ERROR_PAGE_MESSAGE_TIMEOUT: "Please check your connection and try to refresh the page.",
			ERROR_PAGE_REFRESH: "Refresh",
			ERROR_PAGE_TITLE_INTERNAL: "Internal error",
			ERROR_PAGE_TITLE_NOT_AUTHORIZED: "Authorization failed",
			ERROR_PAGE_TITLE_NOT_FOUND: "Page not found",
			ERROR_PAGE_TITLE_REDIRECT: "Moved permanently",
			ERROR_PAGE_TITLE_NOT_IMPLEMENTED: "This page doesn't have mobile version yet",
			ERROR_PAGE_TITLE_UNAUTHORIZED: "Access denied",
			ERROR_PAGE_TITLE_TIMEOUT: "Connection lost",
			ERROR_PAGE_TITLE_ARTICLE_IN_DRAFTS: "Access to this post is restricted",
			ERROR_PAGE_MESSAGE_ARTICLE_IN_DRAFTS: "You're trying to open the post, written by '<a class=\"tm-page__link\" href=\"{userProfileLink}\">'{userName}'</a>', but unfortunately it was marked as a draft (by the user himself or the UFO)",
			ERROR_PAGE_TITLE_ARTICLE_USER_INACTIVE: "Access to this post is restricted",
			ERROR_PAGE_MESSAGE_ARTICLE_USER_INACTIVE: "You're trying to open a post, written by {userName}, who is now blocked/deactivated or deleted",
			ERROR_PAGE_TITLE_ARTICLE_USER_BANNED: "Access to this post is restricted",
			ERROR_PAGE_MESSAGE_ARTICLE_USER_BANNED: "You're trying to open a post, written by {userName}, who is now banned",
			ERROR_PAGE_MESSAGE_NO_INTERNET_LINK: "Oops, seems the connection is lost",
			ERROR_IMAGE_WAS_NOT_LOADED: "Failed to load image",
			ERROR_MISSING_BRANDING_IMAGE: "A cover is supposed to be here, but something went wrong",
			ERROR_PAGE_MESSAGE_USER_PROFILE_INACTIVE: "You're trying to open the profile page of {userName}, who has been deactivated/deleted",
			ERROR_PAGE_POST_IS_LOCKED: "You canâ€™t edit this publication right now. Feel free to '<a class=\"tm-page__link\" href=\"/feedback\">'contact us'</a>' if you have any questions.",
			ERROR_GETTING_REQUEST_TOKEN: "Unable to get access token, please try again later"
		}, t.exports.ru = {
			ERROR_PAGE_AUTH: "Ð’Ð¾Ð¹Ñ‚Ð¸",
			ERROR_PAGE_BACK_TO_MAIN: "Ð’ÐµÑ€Ð½ÑƒÑ‚ÑŒÑÑ Ð½Ð° Ð³Ð»Ð°Ð²Ð½ÑƒÑŽ",
			ERROR_PAGE_MESSAGE_INTERNAL: "Ð§Ñ‚Ð¾-Ñ‚Ð¾ Ð¿Ð¾ÑˆÐ»Ð¾ Ð½Ðµ Ñ‚Ð°Ðº",
			ERROR_PAGE_MESSAGE_NOT_AUTHORIZED: "Ð”Ð»Ñ Ð¿Ñ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€Ð° ÑÑ‚Ð¾Ð¹ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð¾Ð²Ð°Ñ‚ÑŒÑÑ",
			ERROR_PAGE_MESSAGE_NOT_FOUND: "Ð¡Ñ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° ÑƒÑÑ‚Ð°Ñ€ÐµÐ»Ð°, Ð±Ñ‹Ð»Ð° ÑƒÐ´Ð°Ð»ÐµÐ½Ð° Ð¸Ð»Ð¸ Ð½Ðµ ÑÑƒÑ‰ÐµÑÑ‚Ð²Ð¾Ð²Ð°Ð»Ð° Ð²Ð¾Ð²ÑÐµ",
			ERROR_PAGE_MESSAGE_NOT_IMPLEMENTED: "Ð’Ð¾ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐ¹Ñ‚ÐµÑÑŒ Ð¿Ð¾Ð»Ð½Ð¾Ð¹ Ð²ÐµÑ€ÑÐ¸ÐµÐ¹ ÑÐ°Ð¹Ñ‚Ð°, Ð¿Ð¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°",
			ERROR_PAGE_MESSAGE_UNAUTHORIZED: "Ð”Ð»Ñ Ð¿Ñ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð¾Ð²Ð°Ñ‚ÑŒÑÑ",
			ERROR_PAGE_MESSAGE_REDIRECT: "Ð—Ð°Ð¿Ñ€Ð°ÑˆÐ¸Ð²Ð°ÐµÐ¼Ñ‹Ð¹ Ñ€ÐµÑÑƒÑ€Ñ Ð´Ð¾ÑÑ‚ÑƒÐ¿ÐµÐ½ Ð¿Ð¾ Ð´Ñ€ÑƒÐ³Ð¾Ð¼Ñƒ Ð°Ð´Ñ€ÐµÑÑƒ",
			ERROR_PAGE_MESSAGE_TIMEOUT: "ÐŸÑ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ ÑÐ¾ÑÑ‚Ð¾ÑÐ½Ð¸Ðµ Ð²Ð°ÑˆÐµÐ³Ð¾ Ð¿Ð¾Ð´ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ñ Ð¸ Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ Ð¾Ð±Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñƒ.",
			ERROR_PAGE_REFRESH: "ÐžÐ±Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ",
			ERROR_PAGE_TITLE_INTERNAL: "Ð’Ð½ÑƒÑ‚Ñ€ÐµÐ½Ð½ÑÑ Ð¾ÑˆÐ¸Ð±ÐºÐ°",
			ERROR_PAGE_TITLE_NOT_AUTHORIZED: "ÐžÑˆÐ¸Ð±ÐºÐ° Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸",
			ERROR_PAGE_TITLE_NOT_FOUND: "Ð¡Ñ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° Ð½Ðµ Ð½Ð°Ð¹Ð´ÐµÐ½Ð°",
			ERROR_PAGE_TITLE_REDIRECT: "Ð ÐµÑÑƒÑ€Ñ Ð¿ÐµÑ€ÐµÐ¼ÐµÑ‰Ñ‘Ð½",
			ERROR_PAGE_TITLE_NOT_IMPLEMENTED: "Ð”Ð»Ñ ÑÑ‚Ð¾Ð³Ð¾ Ñ€Ð°Ð·Ð´ÐµÐ»Ð° Ð¼Ð¾Ð±Ð¸Ð»ÑŒÐ½Ð°Ñ Ð²ÐµÑ€ÑÐ¸Ñ ÐµÑ‰Ðµ Ð½Ðµ Ð³Ð¾Ñ‚Ð¾Ð²Ð°",
			ERROR_PAGE_TITLE_UNAUTHORIZED: "Ð”Ð¾ÑÑ‚ÑƒÐ¿ Ð·Ð°ÐºÑ€Ñ‹Ñ‚",
			ERROR_PAGE_TITLE_TIMEOUT: "Ð¡Ð¾ÐµÐ´Ð¸Ð½ÐµÐ½Ð¸Ðµ Ð¿Ð¾Ñ‚ÐµÑ€ÑÐ½Ð¾",
			ERROR_PAGE_TITLE_ARTICLE_IN_DRAFTS: "Ð”Ð¾ÑÑ‚ÑƒÐ¿ Ðº Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸Ð¸ Ð·Ð°ÐºÑ€Ñ‹Ñ‚",
			ERROR_PAGE_MESSAGE_ARTICLE_IN_DRAFTS: "Ð’Ñ‹ Ð¿Ñ‹Ñ‚Ð°ÐµÑ‚ÐµÑÑŒ Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚ÑŒ Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸ÑŽ, Ð½Ð°Ð¿Ð¸ÑÐ°Ð½Ð½ÑƒÑŽ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÐµÐ¼ '<a class=\"tm-page__link\" href=\"{userProfileLink}\">'{userName}'</a>', Ð¾Ð´Ð½Ð°ÐºÐ¾, Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸Ñ ÑÐºÑ€Ñ‹Ñ‚Ð° Ð² Ñ‡ÐµÑ€Ð½Ð¾Ð²Ð¸ÐºÐ¸ (ÑÐ°Ð¼Ð¸Ð¼ Ð°Ð²Ñ‚Ð¾Ñ€Ð¾Ð¼ Ð¸Ð»Ð¸ ÐÐ›Ðž)",
			ERROR_PAGE_TITLE_ARTICLE_USER_INACTIVE: "Ð”Ð¾ÑÑ‚ÑƒÐ¿ Ðº Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸Ð¸ Ð·Ð°ÐºÑ€Ñ‹Ñ‚",
			ERROR_PAGE_MESSAGE_ARTICLE_USER_INACTIVE: "Ð’Ñ‹ Ð¿Ñ‹Ñ‚Ð°ÐµÑ‚ÐµÑÑŒ Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚ÑŒ Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸ÑŽ, Ð½Ð°Ð¿Ð¸ÑÐ°Ð½Ð½ÑƒÑŽ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÐµÐ¼ {userName}, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ Ð² Ð½Ð°ÑÑ‚Ð¾ÑÑ‰ÐµÐµ Ð²Ñ€ÐµÐ¼Ñ Ð·Ð°Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²Ð°Ð½/Ð´ÐµÐ°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ð½ Ð¸Ð»Ð¸ ÑƒÐ´Ð°Ð»Ñ‘Ð½",
			ERROR_PAGE_TITLE_ARTICLE_USER_BANNED: "Ð”Ð¾ÑÑ‚ÑƒÐ¿ Ðº Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸Ð¸ Ð·Ð°ÐºÑ€Ñ‹Ñ‚",
			ERROR_PAGE_MESSAGE_ARTICLE_USER_BANNED: "Ð’Ñ‹ Ð¿Ñ‹Ñ‚Ð°ÐµÑ‚ÐµÑÑŒ Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚ÑŒ Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸ÑŽ, Ð½Ð°Ð¿Ð¸ÑÐ°Ð½Ð½ÑƒÑŽ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÐµÐ¼ {userName}, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ Ð² Ð½Ð°ÑÑ‚Ð¾ÑÑ‰ÐµÐµ Ð²Ñ€ÐµÐ¼Ñ Ð·Ð°Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²Ð°Ð½",
			ERROR_PAGE_MESSAGE_NO_INTERNET_LINK: "ÐžÐ¹, ÐºÐ°Ð¶ÐµÑ‚ÑÑ, Ð¸Ð½Ñ‚ÐµÑ€Ð½ÐµÑ‚ Ð¿Ñ€Ð¾Ð¿Ð°Ð»",
			ERROR_IMAGE_WAS_NOT_LOADED: "Ð˜Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ðµ Ð½Ðµ Ð·Ð°Ð³Ñ€ÑƒÐ¶ÐµÐ½Ð¾",
			ERROR_MISSING_BRANDING_IMAGE: "Ð¢ÑƒÑ‚ Ð´Ð¾Ð»Ð¶Ð½Ð° Ð±Ñ‹Ñ‚ÑŒ Ð¾Ð±Ð»Ð¾Ð¶ÐºÐ°, Ð½Ð¾ Ñ‡Ñ‚Ð¾-Ñ‚Ð¾ Ð¿Ð¾ÑˆÐ»Ð¾ Ð½Ðµ Ñ‚Ð°Ðº",
			ERROR_PAGE_MESSAGE_USER_PROFILE_INACTIVE: "Ð’Ñ‹ Ð¿Ñ‹Ñ‚Ð°ÐµÑ‚ÐµÑÑŒ Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚ÑŒ Ð¿Ñ€Ð¾Ñ„Ð¸Ð»ÑŒ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ {userName}, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ Ð±Ñ‹Ð» Ð·Ð°Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²Ð°Ð½/Ð´ÐµÐ°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ð½ Ð¸Ð»Ð¸ ÑƒÐ´Ð°Ð»Ñ‘Ð½",
			ERROR_PAGE_POST_IS_LOCKED: "Ð’Ñ‹ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð¾Ñ‚Ñ€ÐµÐ´Ð°ÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ ÑÑ‚Ñƒ Ð¿ÑƒÐ±Ð»Ð¸ÐºÐ°Ñ†Ð¸ÑŽ Ð² Ð´Ð°Ð½Ð½Ñ‹Ð¹ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚. ÐŸÑ€Ð¸ Ð²Ð¾Ð·Ð½Ð¸ÐºÐ½Ð¾Ð²ÐµÐ½Ð¸Ð¸ Ð²Ð¾Ð¿Ñ€Ð¾ÑÐ¾Ð² ÑÐ²ÑÐ¶Ð¸Ñ‚ÐµÑÑŒ ÑÐ¾ '<a class=\"tm-page__link\" href=\"/feedback\">'ÑÐ»ÑƒÐ¶Ð±Ð¾Ð¹ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¸'</a>'.",
			ERROR_GETTING_REQUEST_TOKEN: "ÐÐµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ Ñ‚Ð¾ÐºÐµÐ½ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸, Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ Ð¿Ð¾Ð·Ð¶Ðµ"
		}
	},
	9218: function (t, e, s) { },
	9224: function (t) {
		t.exports = JSON.parse('{"a":"2.81.0"}')
	},
	"926d": function (t, e, s) {
		"use strict";
		s("2df0")
	},
	9272: function (t, e, s) { },
	"94ac": function (t, e, s) { },
	"94e4": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return t.companyInfo ? s("TMBlock", {
				attrs: {
					title: t.msg("PROFILE_BLOCK_TITLE")
				}
			}, [s("TMCompanyBasicInfo", {
				attrs: {
					"company-info": t.companyInfo,
					variant: "columns-nowrap"
				}
			})], 1) : t._e()
		},
			a = [],
			i = s("19d1"),
			o = s("36e9"),
			r = {
				name: "TMCompanyBasicInfoBlock",
				components: {
					TMCompanyBasicInfo: o["a"],
					TMBlock: i["a"]
				},
				props: {
					companyInfo: {
						type: Object,
						default: null
					}
				}
			},
			c = r,
			l = s("2877"),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	"94fe": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMBlock", {
				attrs: {
					level: "2",
					tag: "aside",
					title: t.msg("WIDGET_NEWS")
				}
			}, [s("ul", {
				staticClass: "tm-widget-news__list"
			}, t._l(t.news, (function (e) {
				return s("li", {
					key: e.title + "-" + e.linkUrl,
					staticClass: "tm-widget-news__item"
				}, [s("a", {
					staticClass: "tm-widget-news__link",
					attrs: {
						href: e.linkUrl,
						rel: "nofollow noreferrer",
						target: "_blank"
					},
					domProps: {
						innerHTML: t._s(e.title)
					}
				}), t._v(" "), s("small", {
					staticClass: "tm-widget-news__date"
				}, [s("TMDatetime", {
					attrs: {
						date: e.date
					}
				})], 1)])
			})), 0)])
		},
			a = [],
			i = s("19d1"),
			o = s("8fab"),
			r = {
				name: "TMWidgetNews",
				components: {
					TMDatetime: o["a"],
					TMBlock: i["a"]
				},
				props: {
					widgetData: {
						type: Object,
						required: !0
					}
				},
				computed: {
					news() {
						return this.widgetData.news.map(t => ({
							...t,
							date: new Date(t.date)
						}))
					}
				}
			},
			c = r,
			l = (s("4274"), s("2877")),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	"95e2": function (t, e, s) { },
	"95ea": function (t, e, s) {
		"use strict";
		s("8124")
	},
	"966b": function (t, e, s) {
		"use strict";
		s("47ba")
	},
	"96cb": function (t, e, s) { },
	"96ce": function (t, e) {
		function s(t) {
			const e = [];
			let s = t.postType;
			"article" === t.postType ? s = "publish" : "megaproject" === t.postType && (s = "megapost");
			let n = "_ugc";
			t.isEditorial && (n = "_editorial"), t.isCorporative && (n = "_corp"), "megaproject" === t.postType && (n = ""), e.push(`${s}${n}_${t.lang}`);
			const a = t.flows ? t.flows.map(t => "f_" + t.alias) : [],
				i = [],
				o = [];
			return t.hubs && t.hubs.forEach(t => {
				"corporative" === t.type ? i.push("c_" + t.alias) : o.push("h_" + t.id)
			}), [...e, ...i, ...o, ...a].join(",")
		}
		t.exports = s
	},
	"96f5": function (t, e, s) { },
	9864: function (t, e, s) {
		"use strict";

		function n() {
			return !0
		}
		s.d(e, "a", (function () {
			return a
		}));
		const a = {
			required: !0,
			type: Object,
			validator: n
		}
	},
	"987a": function (t, e, s) {
		"use strict";
		s("f0ad")
	},
	"991a": function (t, e, s) { },
	9961: function (t, e, s) { },
	"996e": function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return o
		}));
		var n = s("4328"),
			a = s.n(n),
			i = s("63af");
		class o {
			constructor(t) {
				this.campaign = t.campaign, this.content = t.content, this.medium = t.medium, this.source = t.source
			}
			clone() {
				return new o(this)
			}
			setCampaign(t) {
				return this.campaign = t, this
			}
			setContent(t) {
				return this.content = t, this
			}
			setMedium(t) {
				return this.medium = t, this
			}
			setSource(t) {
				return this.source = t, this
			}
			toString() {
				return a.a.stringify({
					utm_campaign: this.campaign,
					utm_content: this.content,
					utm_medium: this.medium,
					utm_source: this.source
				}, {
					arrayFormat: "indices"
				})
			}
			static isUtm(t) {
				return Object(i["c"])(t.campaign) || Object(i["c"])(t.content) || Object(i["c"])(t.medium) || Object(i["c"])(t.source)
			}
			static toUtm(t) {
				return {
					utm_campaign: t.campaign,
					utm_content: t.content,
					utm_medium: t.medium,
					utm_source: t.source
				}
			}
			static parse(t) {
				return new o(t)
			}
		}
	},
	"99da": function (t, e, s) {
		"use strict";
		s("1a95")
	},
	"9a3f": function (t, e, s) {
		"use strict";
		s("1334")
	},
	"9aa2": function (t, e, s) {
		"use strict";
		s("8f7a")
	},
	"9af8": function (t, e, s) { },
	"9b16": function (t, e, s) { },
	"9b51": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-article-blocks"
			}, [s("TMEditoralSubscription"), t._v(" "), t._t("beforeComments"), t._v(" "), t.isLoading ? s("TMCommentsWrapper", [s("TMPlaceholder", {
				attrs: {
					times: 3,
					type: "comment"
				}
			})], 1) : s("div", {
				staticClass: "tm-article-blocks__comments"
			}, [s("TMArticlePageComments", {
				attrs: {
					article: t.article
				}
			})], 1), t._v(" "), t._t("afterComments")], 2)
		},
			a = [],
			i = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-article-page-comments"
				}, [t.article.commentsEnabled ? t.shouldSsrArticleComments ? s("TMArticleCommentsServerRendered", {
					attrs: {
						"article-id": t.articleId,
						"can-cache-comments": t.canCacheComments
					}
				}) : s("TMIntersectionSwitch", {
					attrs: {
						"root-margin": "1000px 0px 1000px 0px"
					},
					on: {
						intersected: t.onIntersected
					},
					scopedSlots: t._u([{
						key: "default",
						fn: function () {
							return [t.canStreamComments ? s("TMHeightLimiter", {
								attrs: {
									"expand-title": t.msg("COMMENTS_SHOW_ALL", {
										count: t.article.statistics.commentsCount
									}),
									"max-height": t.isExpandedLimiter ? null : t.commentsInitialHeight
								}
							}, [s("TMArticleCommentsOffloaded", {
								attrs: {
									"article-id": t.articleId,
									"can-cache-comments": t.canCacheComments,
									ssr: t.shouldSsrArticleComments
								},
								on: {
									expandLimiter: function (e) {
										t.isExpandedLimiter = !0
									},
									toggleCommentsState: t.enableArticleComments
								}
							})], 1) : s("TMArticleCommentsClientRendered", {
								attrs: {
									article: t.article
								},
								on: {
									loaded: t.onCommentsLoaded
								}
							})]
						},
						proxy: !0
					}, {
						key: "fallback",
						fn: function () {
							return [s("TMArticleCommentsCounterButton", {
								attrs: {
									article: t.article
								}
							})]
						},
						proxy: !0
					}])
				}) : s("TMArticleCommentsDisabledNotice", {
					on: {
						toggleCommentsState: t.enableArticleComments
					}
				})], 1)
			},
			o = [],
			r = s("2f62"),
			c = s("161e"),
			l = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-article-comments-client-rendered"
				}, [t.shouldClientRenderComments ? s("TMArticleComments", {
					attrs: {
						"article-id": t.article.id,
						"is-loading": t.isLoadingComments
					}
				}) : s("TMArticleCommentsCounterButton", {
					attrs: {
						article: t.article
					}
				})], 1)
			},
			u = [],
			m = s("ef70"),
			d = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMArticleCommentsCounterLink", {
					directives: [{
						name: "hotkey",
						rawName: "v-hotkey.stop",
						value: {
							c: t.handleCommentsKey
						},
						expression: "{ 'c': handleCommentsKey }",
						modifiers: {
							stop: !0
						}
					}],
					ref: "commentsLink",
					staticClass: "tm-article-comments-counter-button",
					attrs: {
						article: t.article,
						"comments-count": t.article.statistics.commentsCount,
						"unread-count": t.article.relatedData && t.article.relatedData.unreadCommentsCount,
						variant: "button"
					}
				})
			},
			p = [],
			_ = s("ea2d"),
			h = {
				name: "TMArticleCommentsCounterButton",
				components: {
					TMArticleCommentsCounterLink: _["a"]
				},
				props: {
					article: {
						type: Object,
						required: !0
					}
				},
				methods: {
					handleCommentsKey() {
						this._inactive || this.$refs.commentsLink.click()
					}
				}
			},
			g = h,
			f = (s("53da"), s("2877")),
			b = Object(f["a"])(g, d, p, !1, null, null, null),
			T = b.exports,
			v = s("51c9"),
			E = {
				name: "TMArticleCommentsClientRendered",
				components: {
					TMArticleComments: m["a"],
					TMArticleCommentsCounterButton: T
				},
				props: {
					article: {
						type: Object,
						required: !0
					}
				},
				data() {
					return {
						isLoadingComments: !0
					}
				},
				computed: {
					shouldClientRenderComments() {
						return this.article.statistics.commentsCount <= v["b"]
					}
				},
				mounted() {
					this.shouldClientRenderComments && this.loadComments()
				},
				methods: {
					...Object(r["b"])("comments", ["getComments", "getPinnedComments"]),
					loadComments() {
						return this.isLoadingComments = !0, Promise.all([this.getComments({
							articleId: this.article.id
						}), this.getPinnedComments(this.article.id)]).then(() => {
							this.$emit("loaded"), this.isLoadingComments = !1
						}).catch(t => {
							this.isLoadingComments = !1, this.$toast.error(t.message)
						})
					}
				}
			},
			S = E,
			O = Object(f["a"])(S, l, u, !1, null, null, null),
			C = O.exports,
			I = s("0a2e"),
			A = s("24fd"),
			y = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMArticleComments", {
					attrs: {
						"article-id": t.articleId,
						"cache-key": t.canCacheComments ? t.cacheKey : null,
						"is-loading": t.$fetchState.isLoading
					}
				})
			},
			L = [],
			P = s("0a5f"),
			N = {
				name: "TMArticleCommentsServerRendered",
				components: {
					TMArticleComments: m["a"]
				},
				props: {
					articleId: {
						type: String,
						required: !0
					},
					canCacheComments: {
						type: Boolean,
						default: !1
					}
				},
				asyncData() {
					const t = [];
					return t.push(this.getPinnedComments(this.articleId)), this.canCacheComments ? t.push(this.getGuestComments(this.articleId)) : t.push(this.getComments({
						articleId: this.articleId,
						nocount: !0
					})), Promise.all(t)
				},
				computed: {
					...Object(r["c"])("me", ["isLoggedIn"]),
					...Object(r["c"])("comments", ["getCommentsCacheKey"]),
					cacheKey() {
						return this.getCommentsCacheKey(this.articleId)
					}
				},
				mounted() {
					this.readVisitorComments()
				},
				methods: {
					...Object(r["b"])("comments", ["getComments", "getGuestComments", "getPinnedComments"]),
					readVisitorComments() {
						this.isLoggedIn && !this.canCacheComments && Object(P["r"])(this.articleId)
					}
				}
			},
			R = N,
			M = Object(f["a"])(R, y, L, !1, null, null, null),
			w = M.exports,
			k = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-height-limiter"
				}, [s("div", {
					staticClass: "tm-height-limiter__wrapper",
					style: {
						maxHeight: t.currentPixelsHeight,
						overflow: t.currentPixelsHeight ? "hidden" : null
					}
				}, [t._t("default")], 2), t._v(" "), t.currentHeight ? s("div", {
					staticClass: "tm-height-limiter__expand",
					attrs: {
						"data-height-limiter": ""
					}
				}, [s("button", {
					staticClass: "tm-height-limiter__expand-button",
					domProps: {
						textContent: t._s(t.expandTitle)
					},
					on: {
						click: function (e) {
							t.currentHeight = null
						}
					}
				})]) : t._e()])
			},
			j = [],
			D = {
				name: "TMHeightLimiter",
				props: {
					maxHeight: {
						type: Number,
						default: null
					},
					expandTitle: {
						type: String,
						required: !0
					}
				},
				data() {
					return {
						currentHeight: this.maxHeight
					}
				},
				computed: {
					currentPixelsHeight() {
						return this.currentHeight ? this.currentHeight + "px" : null
					}
				},
				watch: {
					maxHeight() {
						this.currentHeight = this.maxHeight
					}
				}
			},
			x = D,
			B = (s("e835"), Object(f["a"])(x, k, j, !1, null, null, null)),
			$ = B.exports,
			F = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMIntersect", {
					attrs: {
						"root-margin": t.rootMargin
					},
					on: {
						enter: t.onIntersect
					}
				}, [t.hasIntersected ? t._t("default") : t._t("fallback")], 2)
			},
			G = [],
			U = s("2a8c"),
			V = {
				name: "TMIntersectionSwitch",
				components: {
					TMIntersect: U["a"]
				},
				props: {
					rootMargin: {
						type: String,
						default: "0px 0px 0px 0px"
					}
				},
				data() {
					return {
						hasIntersected: !1
					}
				},
				methods: {
					onIntersect() {
						this.$emit("intersected"), this.hasIntersected = !0
					}
				}
			},
			W = V,
			H = Object(f["a"])(W, F, G, !1, null, null, null),
			Y = H.exports,
			q = s("5d2c"),
			K = {
				name: "TMArticlePageComments",
				components: {
					TMArticleCommentsCounterButton: T,
					TMArticleCommentsDisabledNotice: I["a"],
					TMArticleCommentsServerRendered: w,
					TMArticleCommentsClientRendered: C,
					TMArticleCommentsOffloaded: A["a"],
					TMHeightLimiter: $,
					TMIntersectionSwitch: Y
				},
				props: {
					article: {
						type: Object,
						required: !0
					}
				},
				data() {
					return {
						isExpandedLimiter: !1
					}
				},
				computed: {
					...Object(r["c"])("articlesList", ["shouldSsrComments"]),
					...Object(r["c"])("comments", ["getCommentsCacheKey"]),
					articleId() {
						return this.article.id
					},
					shouldSsrArticleComments() {
						return (this.commentsStreamingEnabled || !(this.article.statistics.commentsCount > v["b"])) && this.shouldSsrComments(this.articleId)
					},
					commentsInitialHeight() {
						return this.shouldSsrArticleComments || this.article.statistics.commentsCount <= v["d"] ? null : v["c"]
					},
					canCacheComments() {
						return !(!this.article || this.article.statistics.commentsCount < v["a"]) && this.$getFeatureFlag("COMMENTS_CACHING_ENABLED")
					},
					cacheKey() {
						return this.canCacheComments ? this.getCommentsCacheKey(this.articleId) : null
					},
					canStreamComments() {
						return !(!this.article || this.article.statistics.commentsCount < v["e"]) && this.commentsStreamingEnabled
					},
					commentsStreamingEnabled() {
						return this.$getFeatureFlag("COMMENTS_STREAMING_ENABLED")
					}
				},
				mounted() {
					this.$route.meta.isRedirected && (Object.assign(this.$route.meta, {
						isRedirected: !1
					}), this.$router.replace({
						name: "ARTICLE_COMMENTS",
						hash: this.$route.hash
					}), Object(q["c"])(this.$route))
				},
				deactivated() {
					this.removeVisitedArticle()
				},
				beforeDestroy() {
					this.removeSsrCommentsArticleId(this.articleId), this.removeVisitedArticle()
				},
				methods: {
					...Object(r["b"])("articlesList", ["setArticleCommentsStatus"]),
					...Object(r["d"])("articlesList", ["removeSsrCommentsArticleId"]),
					enableArticleComments() {
						return Object(P["e"])(this.articleId).then(() => this.setArticleCommentsStatus({
							articleId: this.articleId,
							status: !this.article.commentsEnabled
						})).catch(t => this.$toast.error(t.message))
					},
					onCommentsLoaded() {
						this.saveVisitedArticle()
					},
					onIntersected() {
						this.saveVisitedArticle()
					},
					saveVisitedArticle() {
						const t = Object(c["a"])("visited_articles", !0) || "",
							e = t ? t.split(":") : [],
							s = Array.from(new Set([this.articleId, ...e])),
							n = s.slice(0, 10).join(":");
						Object(c["c"])("visited_articles", n, {
							expires: 30
						})
					},
					removeVisitedArticle() {
						const t = Object(c["a"])("visited_articles") || "",
							e = t.split(":"),
							s = new Set(e);
						s.delete(this.articleId);
						const n = Array.from(s).join(":");
						n ? Object(c["c"])("visited_articles", n, {
							expires: 30
						}) : Object(c["b"])("visited_articles")
					}
				}
			},
			z = K,
			X = Object(f["a"])(z, i, o, !1, null, null, null),
			J = X.exports,
			Q = s("f15e"),
			Z = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return t.showBlock ? s("div", {
					staticClass: "tm-editoral-subscription"
				}, [s("TMSvgIcon", {
					staticClass: "tm-editoral-subscription__close",
					attrs: {
						id: "close"
					},
					on: {
						click: t.closeForm
					}
				}), t._v(" "), s("h3", {
					staticClass: "tm-editoral-subscription__title"
				}, [t._v("\n    " + t._s(t.msg("SUBSCRIPTION_EDITORAL_TITLE")) + "\n  ")]), t._v(" "), s("p", {
					staticClass: "tm-editoral-subscription__description"
				}, [t._v("\n    " + t._s(t.msg("SUBSCRIPTION_EDITORAL_DESCRIPTION")) + "\n  ")]), t._v(" "), t.requestSended ? s("p", {
					staticClass: "tm-editoral-subscription__success"
				}, [t._v("\n    " + t._s(t.msg("SUBSCRIPTION_EDITORAL_SUCCESS")) + "\n  ")]) : s("form", {
					staticClass: "tm-editoral-subscription__form",
					attrs: {
						method: "GET"
					},
					on: {
						submit: t.onSubmit
					}
				}, [s("TMInputTextDecorated", {
					ref: "input",
					staticClass: "tm-editoral-subscription__input",
					attrs: {
						disabled: t.isLoading,
						"is-invalid": t.hasError,
						name: "email",
						placeholder: t.msg("SUBSCRIPTION_EDITORAL_PLACEHOLDER"),
						type: "email"
					},
					model: {
						value: t.email,
						callback: function (e) {
							t.email = e
						},
						expression: "email"
					}
				}, [s("button", {
					staticClass: "tm-editoral-subscription__icon",
					class: {
						"tm-editoral-subscription__icon_loading": t.isLoading
					},
					attrs: {
						slot: "after",
						disabled: t.isLoading,
						type: "submit"
					},
					slot: "after"
				}, [s("TMArrowRight")], 1)]), t._v(" "), t.hasError ? s("p", {
					staticClass: "tm-editoral-subscription__error"
				}, [t._v("\n      " + t._s(t.errorMessage) + "\n    ")]) : t._e()], 1)], 1) : t._e()
			},
			tt = [],
			et = s("142c"),
			st = s("4a90"),
			nt = s("6f23"),
			at = s("2105"),
			it = s("4dcc");

		function ot(t) {
			return Object(at["c"])(Object(it["a"])("digests/editorial/subscribe", "v2"), t)
		}
		const rt = () => s.e("chunk-2d222042").then(s.t.bind(null, "cd8c", 7)),
			ct = "habr-editoral-subscription";
		var lt = {
			name: "TMEditoralSubscription",
			components: {
				TMInputTextDecorated: et["a"],
				TMSvgIcon: st["a"],
				TMArrowRight: rt
			},
			data() {
				return {
					email: "",
					isLoading: !1,
					requestSended: !1,
					errorMessage: "",
					hasError: !1,
					showBlock: !1
				}
			},
			computed: {
				...Object(r["c"])("i18n", ["msg", "langOptions"]),
				...Object(r["c"])("me", ["isLoggedIn"])
			},
			mounted() {
				this.showBlock = this.checkBlockShowStatus()
			},
			methods: {
				checkBlockShowStatus() {
					const t = Object(c["a"])(ct);
					return !this.isLoggedIn && !t
				},
				onSubmit(t) {
					t.preventDefault(), this.isLoading = !0, this.hasError = !1;
					const e = {
						email: this.email,
						...this.langOptions
					};
					ot(e).then(t => {
						if (!t || !t.ok) throw new Error(t && t.message);
						this.requestSended = !0, this.isLoading = !1, Object(c["c"])(ct, "subscribe", {
							expires: 90
						}), Object(nt["c"])("tm_block", "edit-digest_post", "subscribe"), setTimeout(() => {
							this.showBlock = !1
						}, 1e4)
					}).catch(t => {
						this.setError(t)
					})
				},
				setError(t) {
					this.isLoading = !1, this.hasError = !0, this.errorMessage = t && t.message || this.msg("SUBSCRIPTION_EDITORAL_ERROR")
				},
				closeForm() {
					this.showBlock = !1, Object(c["c"])(ct, "close", {
						expires: 90
					}), Object(nt["c"])("tm_block", "edit-digest_post", "close")
				}
			}
		},
			ut = lt,
			mt = (s("1ce4"), Object(f["a"])(ut, Z, tt, !1, null, null, null)),
			dt = mt.exports,
			pt = s("5188"),
			_t = {
				name: "TMArticleBlocks",
				components: {
					TMArticlePageComments: J,
					TMPlaceholder: pt["a"],
					TMCommentsWrapper: Q["a"],
					TMEditoralSubscription: dt
				},
				props: {
					article: {
						type: Object,
						default: null
					},
					isLoading: {
						type: Boolean,
						required: !0
					}
				}
			},
			ht = _t,
			gt = (s("a649"), Object(f["a"])(ht, n, a, !1, null, null, null));
		e["a"] = gt.exports
	},
	"9c0c": function (t, e, s) { },
	"9c32": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				directives: [{
					name: "hotkey",
					rawName: "v-hotkey",
					value: {
						esc: function () {
							return t.$emit("close")
						}
					},
					expression: "{ esc: () => $emit('close') }"
				}],
				staticClass: "tm-overlay"
			}, [s("div", {
				staticClass: "tm-overlay__background"
			}), t._v(" "), s("div", {
				ref: "inner",
				staticClass: "tm-overlay__inner",
				attrs: {
					"data-scroll-target": ""
				},
				on: {
					click: function (e) {
						return e.target !== e.currentTarget ? null : t.onClick.apply(null, arguments)
					},
					mousedown: t.onMousedown
				}
			}, [t._t("default")], 2)])
		},
			a = [],
			i = {
				name: "TMOverlay",
				data() {
					return {
						mouseTarget: null
					}
				},
				mounted() {
					this.mouseTarget = this.$refs.inner
				},
				methods: {
					onClick() {
						this.mouseTarget === this.$refs.inner && this.$emit("close")
					},
					onMousedown(t) {
						this.mouseTarget = t.target
					}
				}
			},
			o = i,
			r = (s("f29c"), s("2877")),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["a"] = c.exports
	},
	"9c63": function (t, e, s) {
		"use strict";
		s("c7a9")
	},
	"9e83": function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", [!t.isLoading && t.promoBlockPosts ? s("TMBlock", {
				attrs: {
					spacing: t.isArticleLayout ? "around" : "bottom",
					title: t.msg("PROMO_BLOCK_TITLE")
				},
				scopedSlots: t._u([{
					key: "header-aside",
					fn: function () {
						return [t.isDesktop && "ru" === t.langOptions.hl ? s("a", {
							staticClass: "tm-block-extralink",
							attrs: {
								href: "https://localhost:7103/tmtm/megapost/",
								target: "_blank"
							}
						}, [t._v("\n        " + t._s(t.msg("PROMO_BLOCK_ADD")) + "\n      ")]) : t._e()]
					},
					proxy: !0
				}, {
					key: "default",
					fn: function () {
						return [s(t.isSmallestMobile ? "TMSwiper" : "div", {
							tag: "component",
							staticClass: "tm-promo-block__content-wrapper",
							attrs: {
								"data-test-id": t.isSmallestMobile ? "swiper-slider" : null,
								pagination: "",
								"slides-per-view": 1
							}
						}, t._l(t.promoBlockPosts, (function (e) {
							return s(t.isSmallestMobile ? "TMSwiperSlide" : "div", {
								key: e.link.url,
								tag: "component",
								staticClass: "tm-promo-block__item-wrapper"
							}, [s("TMIntersect", {
								attrs: {
									threshold: [.5]
								},
								on: {
									enter: function (s) {
										return t.trackView(e)
									}
								}
							}, [s("a", {
								staticClass: "tm-promo-block__item tm-article-title__link",
								attrs: {
									href: e.link.url,
									rel: "nofollow " + (e.external ? "sponsored" : "")
								},
								on: {
									click: function (s) {
										return t.logClickToGa(e.link.url)
									}
								}
							}, [s("header", {
								staticClass: "tm-promo-block__head"
							}, [s("div", {
								staticClass: "tm-promo-block__image-wrapper"
							}, [s("img", {
								staticClass: "tm-promo-block__image",
								attrs: {
									alt: "",
									src: t.promoImage(e.image.url)
								}
							})]), t._v(" "), e.label ? s("div", {
								staticClass: "tm-promo-block__label"
							}, [t._v("\n                  " + t._s(e.label) + "\n                  "), e.external ? s("TMExternalIcon", {
								staticClass: "tm-block-promo__external"
							}) : t._e()], 1) : t._e()]), t._v(" "), s("div", {
								staticClass: "tm-promo-block__info"
							}, [s("h3", {
								staticClass: "tm-promo-block__title",
								domProps: {
									innerHTML: t._s(e.title)
								}
							})])])])], 1)
						})), 1)]
					},
					proxy: !0
				}], null, !1, 1765953917)
			}) : t.isLoading || !t.hasLoaded || t.promoBlockPosts ? s("TMPlaceholder", {
				attrs: {
					type: "promo_block"
				}
			}) : t._e()], 1)
		},
			a = [],
			i = s("2f62"),
			o = s("19d1"),
			r = s("2a8c"),
			c = s("5188"),
			l = s("c2d4"),
			u = s("6f23"),
			m = s("43bc"),
			d = s("8a58");
		const p = () => s.e("chunk-2d21042a").then(s.t.bind(null, "b6aa", 7)),
			_ = () => Promise.resolve().then(s.bind(null, "f4b8")),
			h = () => Promise.resolve().then(s.bind(null, "a714"));
		var g = {
			name: "TMPromoBlock",
			components: {
				TMPlaceholder: c["a"],
				TMIntersect: r["a"],
				TMBlock: o["a"],
				TMExternalIcon: p,
				TMSwiper: _,
				TMSwiperSlide: h
			},
			props: {
				layout: {
					default: "articles-list",
					type: String
				},
				gaType: {
					type: String,
					default: null
				}
			},
			data() {
				return {
					isSmallestMobile: !1,
					matcher: null,
					trackedItems: []
				}
			},
			computed: {
				...Object(i["c"])("global", ["isDesktop"]),
				...Object(i["c"])("promoData", ["promoBlockPosts"]),
				...Object(i["e"])("promoData", ["isLoading", "hasLoaded"]),
				...Object(i["c"])("i18n", ["langOptions"]),
				isArticlesListLayout() {
					return "articles-list" === this.layout
				},
				isArticleLayout() {
					return "article" === this.layout
				}
			},
			mounted() {
				this.matcher = window.matchMedia("(max-width: 413px)"), this.matcher.addListener(this.onMediaTriggered), this.isSmallestMobile = this.matcher.matches
			},
			beforeDestroy() {
				this.matcher.removeListener(this.onMediaTriggered)
			},
			methods: {
				onMediaTriggered(t) {
					this.isSmallestMobile = t.matches
				},
				logClickToGa(t) {
					if (this.gaType) {
						const {
							category: e,
							action: s,
							label: n
						} = Object(l["b"])(this.gaType, t);
						Object(u["c"])(e, s, n)
					} else this.isArticleLayout ? Object(u["c"])("tm_block", "promo,post", t) : Object(u["c"])("tm_block", "promo,feed_middle", t)
				},
				promoImage(t) {
					const e = this.isDesktop ? 390 : 120;
					return Object(m["c"])(t, e)
				},
				trackView({
					events: t
				}) {
					const e = t && t.view;
					e && !this.trackedItems.includes(e) && (this.trackedItems.push(e), Object(d["b"])([e]))
				}
			}
		},
			f = g,
			b = (s("99da"), s("2877")),
			T = Object(b["a"])(f, n, a, !1, null, null, null);
		e["a"] = T.exports
	},
	"9f2e": function (t, e, s) {
		"use strict";
		s.d(e, "b", (function () {
			return c
		})), s.d(e, "c", (function () {
			return l
		})), s.d(e, "d", (function () {
			return u
		})), s.d(e, "a", (function () {
			return m
		}));
		const n = {
			corp: {
				news: "NEWS_OF_COMPANY",
				megaproject: "ARTICLE_MEGAPOST",
				default: "ARTICLE_OF_COMPANY"
			},
			regular: {
				sandbox: "ARTICLE_SANDBOX",
				megaproject: "ARTICLE_MEGAPOST",
				news: "NEWS_ARTICLE",
				default: "ARTICLE"
			}
		};

		function a({
			isCorporative: t,
			postType: e
		}) {
			const s = t ? n.corp : n.regular;
			return s[e] || s.default
		}
		const i = {
			corp: {
				default: "ARTICLE_COMMENTS_OF_COMPANY",
				news: "NEWS_OF_COMPANY_COMMENTS"
			},
			regular: {
				news: "NEWS_ARTICLE_COMMENTS",
				megaproject: "ARTICLE_COMMENTS_OF_MEGAPOST",
				default: "ARTICLE_COMMENTS"
			}
		};

		function o({
			isCorporative: t,
			postType: e
		}) {
			const s = t ? i.corp : i.regular;
			return s[e] || s.default
		}

		function r(t) {
			return t.find(t => "corporative" === t.type).alias
		}

		function c(t, e) {
			const {
				hubs: s,
				id: n,
				isCorporative: a,
				postType: i
			} = t;
			return {
				name: o({
					isCorporative: a,
					postType: i
				}),
				params: {
					companyName: a ? r(s) : null,
					id: n,
					hl: e
				}
			}
		}

		function l(t, e) {
			const {
				hubs: s,
				id: n,
				isCorporative: i,
				postType: o
			} = t;
			return {
				name: a({
					isCorporative: i,
					postType: o
				}),
				params: {
					companyName: i ? r(s) : null,
					id: n,
					hl: e
				}
			}
		}

		function u(t) {
			const e = t.flatMap(t => [t.value, ...t.children ? u(t.children) : []]);
			return Array.from(new Set(e))
		}
		const m = "more-news"
	},
	"9fd7": function (t, e, s) { },
	a072: function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return i
		})), s.d(e, "b", (function () {
			return o
		})), s.d(e, "c", (function () {
			return r
		})), s.d(e, "d", (function () {
			return c
		}));
		var n = s("2105"),
			a = s("4dcc");

		function i(t) {
			const {
				perPage: e,
				pageNum: s,
				hl: i,
				category: o,
				unread: r
			} = t;
			return Object(n["b"])(Object(a["a"])("me/notifications", "v2"), {
				per_page: e,
				page_num: s,
				hl: i,
				category: o,
				unread: r
			})
		}

		function o({
			ids: t
		}) {
			return Object(n["c"])(Object(a["a"])("me/notifications/read", "v2"), {
				ids: t
			})
		}

		function r({
			ids: t
		}) {
			return Object(n["c"])(Object(a["a"])("me/notifications/view", "v2"), {
				ids: t
			})
		}

		function c(t) {
			return Object(n["c"])(Object(a["a"])(`posts/${t}/tracker_subscription`, "v2"), {
				trackerSubscribed: !1
			})
		}
	},
	a0a5: function (t, e, s) {
		"use strict";
		s("96f5")
	},
	a10b: function (t, e, s) {
		"use strict";
		s.d(e, "e", (function () {
			return r
		})), s.d(e, "f", (function () {
			return c
		})), s.d(e, "c", (function () {
			return l
		})), s.d(e, "b", (function () {
			return u
		})), s.d(e, "d", (function () {
			return i
		})), s.d(e, "a", (function () {
			return m
		}));
		var n = s("88e7");
		s("d0ec");
		const a = t => ({
			id: t.id,
			alias: t.alias,
			avatarUrl: t.avatarUrl,
			fullname: t.fullname,
			speciality: t.speciality
		}),
			i = t => ({
				id: t.id,
				conversationId: t.conversationId,
				isAuthor: t.isAuthor,
				userInfo: a(t.author),
				isNew: t.isNew,
				textHtml: t.textHtml,
				timeCreated: Object(n["e"])(t.timeCreated)
			}),
			o = t => ({
				id: t.id,
				lastMessage: t.lastMessage && t.lastMessage.text,
				lastMessageTime: Object(n["e"])(t.lastMessage && t.lastMessage.timeCreated),
				respondentInfo: a(t.respondent),
				unreadCount: parseInt(t.unreadCount, 10) || 0
			}),
			r = t => ({
				unreadCount: parseInt(t.unreadCount, 10) || 0
			}),
			c = t => (t.conversationIds || []).map(e => a(t.conversationRefs[e].respondent)),
			l = t => ({
				conversations: (t.conversationIds || []).map(e => o(t.conversationRefs[e])),
				pagesCount: parseInt(t.pagesCount, 10) || 0
			}),
			u = t => ({
				messages: (t.messageIds || []).map(e => i(t.messageRefs[e])),
				respondent: a(t.conversation.respondent),
				unreadCount: parseInt(t.conversation.unreadCount, 10) || 0,
				isLoadMore: t.hasMore
			}),
			m = t => ({
				source: t,
				editorVersion: 1,
				isMarkdown: !0
			})
	},
	a28c: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", [t.isLoading ? s("TMPlaceholder", {
				attrs: {
					modificator: "preview",
					times: 7,
					type: "article"
				}
			}) : t.articlesList && t.articlesList.length ? [s("div", {
				directives: [{
					name: "hotkey",
					rawName: "v-hotkey.stop",
					value: t.hotkeys,
					expression: "hotkeys",
					modifiers: {
						stop: !0
					}
				}],
				staticClass: "tm-articles-list"
			}, [t._l(t.articlesList, (function (e, n) {
				return [10 === n ? s("a", {
					key: "more_news_" + n,
					attrs: {
						name: "more-news"
					}
				}) : t._e(), t._v(" "), "voice" === e.postType && e.leadData.textHtml ? s("TMVoiceArticle", {
					key: e.id,
					staticClass: "tm-articles-list__item",
					attrs: {
						id: e.id,
						article: e,
						"data-navigatable": "",
						tabindex: "0"
					},
					on: {
						delete: function (s) {
							return t.$emit("deleteVoice", e)
						}
					}
				}) : s("article", {
					key: e.id,
					staticClass: "tm-articles-list__item",
					attrs: {
						id: e.id,
						"data-navigatable": "",
						tabindex: "0"
					}
				}, ["megaproject" === e.postType && "1.0" === e.editorVersion ? s("TMMegapostSnippet", {
					attrs: {
						article: e
					}
				}) : s("TMArticleSnippet", {
					attrs: {
						article: e,
						"use-link": ""
					},
					on: {
						delete: function (s) {
							return t.$emit("deleteArticle", e)
						}
					}
				}), t._v(" "), e.statistics.readingCount ? s("TMDataIcons", {
					ref: "counters",
					refInFor: !0,
					attrs: {
						article: e,
						"icons-list": ["votes", "comments", "views", "favorite"]
					}
				}) : t._e()], 1), t._v(" "), t.$scopedSlots.afterArticle ? s("div", {
					key: "afterArticle_" + n,
					staticClass: "tm-articles-list__after-article"
				}, [t._t("afterArticle", null, {
					currentPage: t.currentPage,
					position: n + 1
				})], 2) : t._e()]
			}))], 2), t._v(" "), t.$slots.afterArticles ? s("div", {
				staticClass: "tm-articles-list__after-articles"
			}, [t._t("afterArticles")], 2) : t._e(), t._v(" "), t.pagesCount > 1 ? s("TMPagination", {
				attrs: {
					"route-name": t.paginationRouteName,
					"total-pages": t.pagesCount
				}
			}) : t._e()] : s("TMEmptyPlaceholder", [s("span", {
				domProps: {
					textContent: t._s(t.msg("EMPTY_POSTS_MESSAGE"))
				}
			})])], 2)
		},
			a = [],
			i = s("2f62"),
			o = s("fe04"),
			r = s("9022"),
			c = s("6833"),
			l = s("c307"),
			u = s("57fc"),
			m = s("5188"),
			d = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("article", {
					staticClass: "tm-voice-article"
				}, [s("div", {
					staticClass: "tm-voice-article__voice-controls"
				}, [t.article.relatedData && t.article.relatedData.canEdit ? s("router-link", {
					staticClass: "tm-voice-article__voice-control tm-voice-article__edit-voice",
					attrs: {
						to: {
							name: "VOICE_EDIT",
							params: {
								voiceId: t.article.id
							}
						}
					}
				}, [s("TMSvgImg", {
					attrs: {
						id: "edit",
						size: "20"
					}
				})], 1) : t._e(), t._v(" "), t.article.relatedData && t.article.relatedData.canEdit && !t.article.timePublished ? s("button", {
					staticClass: "tm-voice-article__voice-control tm-voice-article__delete-voice",
					attrs: {
						title: t.msg("ARTICLE_DRAFT_DELETE")
					},
					on: {
						click: function (e) {
							return t.$emit("delete")
						}
					}
				}, [s("TMSvgImg", {
					attrs: {
						id: "trash",
						size: "20",
						title: t.msg("ARTICLE_DRAFT_DELETE")
					}
				})], 1) : t._e()], 1), t._v(" "), s("TMArticleFormattedBody", {
					staticClass: "tm-voice-article__body",
					attrs: {
						"article-text": t.article.leadData.textHtml,
						"should-format": !1
					}
				})], 1)
			},
			p = [],
			_ = s("d4a6"),
			h = s("b7d0"),
			g = {
				name: "TMVoiceArticle",
				components: {
					TMSvgImg: h["a"],
					TMArticleFormattedBody: _["a"]
				},
				props: {
					article: {
						type: Object,
						required: !0
					}
				}
			},
			f = g,
			b = (s("6889"), s("2877")),
			T = Object(b["a"])(f, d, p, !1, null, null, null),
			v = T.exports,
			E = s("c095"),
			S = s("9f2e"),
			O = s("09f4");

		function C(t) {
			const e = `[name="${t}"]`,
				s = document.querySelector(e);
			s && Object(O["a"])(s);
			const n = new MutationObserver(() => {
				Array.from(document.querySelectorAll(e)).forEach(t => {
					t.scrollIntoView(!0), n.disconnect()
				})
			});
			return n.observe(document.documentElement, {
				childList: !0,
				subtree: !0
			}), () => n.disconnect()
		}
		var I = {
			name: "TMArticlesList",
			components: {
				TMArticleSnippet: o["a"],
				TMDataIcons: r["a"],
				TMEmptyPlaceholder: c["a"],
				TMMegapostSnippet: l["a"],
				TMPagination: u["a"],
				TMPlaceholder: m["a"],
				TMVoiceArticle: v
			},
			props: {
				articlesList: {
					type: Array,
					required: !0
				},
				pagesCount: {
					type: Number,
					default: 1
				},
				isLoading: {
					type: Boolean,
					default: !1
				}
			},
			data() {
				return {
					disconnectObserver: null
				}
			},
			computed: {
				paginationRouteName() {
					const t = -1 !== this.$route.name.indexOf("_PAGES");
					return t ? this.$route.name : this.$route.name + "_PAGES"
				},
				hotkeys() {
					const {
						toggleArticleView: t
					} = this;
					return Object(E["a"])({
						toggleArticleView: t
					})
				},
				currentPage() {
					return Number(this.$route.params.pageNum) || 1
				}
			},
			mounted() {
				this.setLastVisitedRoute(this.$route), this.$route.hash === "#" + S["a"] && (this.disconnectObserver = C(S["a"]))
			},
			beforeDestroy() {
				this.disconnectObserver && this.disconnectObserver()
			},
			methods: {
				...Object(i["b"])("articlesList", ["setLastVisitedRoute", "toggleArticleView"])
			}
		},
			A = I,
			y = (s("3eef"), Object(b["a"])(A, n, a, !1, null, null, null));
		e["a"] = y.exports
	},
	a300: function (t, e, s) {
		"use strict";
		s("2ea4")
	},
	a324: function (t, e, s) {
		"use strict";
		s.d(e, "f", (function () {
			return i
		})), s.d(e, "d", (function () {
			return o
		})), s.d(e, "g", (function () {
			return r
		})), s.d(e, "e", (function () {
			return c
		})), s.d(e, "a", (function () {
			return l
		})), s.d(e, "c", (function () {
			return u
		})), s.d(e, "h", (function () {
			return m
		})), s.d(e, "b", (function () {
			return p
		}));
		var n = s("32f0"),
			a = s("4de5");

		function i(t) {
			return [{
				property: "og:title",
				content: t,
				vmid: "og:title"
			}, {
				name: "twitter:title",
				content: t,
				vmid: "twitter:title"
			}, {
				name: "aiturec:title",
				content: t,
				vmid: "aiturec:title"
			}]
		}

		function o(t) {
			const e = Object(n["b"])(t);
			return [{
				name: "description",
				content: e,
				vmid: "description"
			}, {
				itemprop: "description",
				content: e,
				vmid: "description:itemprop"
			}, {
				property: "og:description",
				content: e,
				vmid: "og:description"
			}, {
				name: "twitter:description",
				content: e,
				vmid: "twitter:description"
			}, {
				property: "aiturec:description",
				content: e,
				vmid: "aiturec:description"
			}]
		}
		const r = t => t && {
			property: "vk:image",
			content: t + "?format=vk",
			vmid: "vk:image"
		};

		function c(t) {
			return t ? [{
				itemprop: "image",
				content: t,
				vmid: "image:itemprop"
			}, {
				property: "og:image",
				content: t,
				vmid: "og:image"
			}, {
				property: "og:image:width",
				content: "1200",
				vmid: "og:image:width"
			}, {
				property: "og:image:height",
				content: "630",
				vmid: "og:image:height"
			}, {
				property: "aiturec:image",
				content: t,
				vmid: "aiturec:image"
			}, {
				name: "twitter:image",
				content: t,
				vmid: "twitter:image"
			}, r(t)] : null
		}

		function l({
			id: t,
			date: e
		}) {
			const s = new Date(e).toISOString();
			return [{
				property: "aiturec:item_id",
				content: t,
				vmid: "aiturec:item_id"
			}, {
				property: "aiturec:datetime",
				content: s,
				vmid: "aiturec:datetime"
			}]
		}

		function u(t = []) {
			return t.filter(t => -1 === t.indexOf("stylesheets.mobile.css")).map(t => ({
				href: t,
				rel: "stylesheet"
			}))
		}
		const m = {
			vmid: "hreflang"
		},
			d = {
				en: "en_US",
				ru: "ru_RU"
			},
			p = t => {
				const {
					titleHtml: e,
					id: s,
					lang: n,
					timePublished: u,
					metadata: m
				} = t, {
					metaDescription: p,
					shareImageUrl: _,
					shareImageWidth: h,
					shareImageHeight: g,
					vkShareImageUrl: f
				} = m;
				return [...i(e), ...o(p), ...c(_), r(f), ...l({
					id: s,
					date: u
				}), {
					content: Object(a["articleCanonical"])(t),
					property: "og:url",
					vmid: "og:url"
				}, {
					property: "og:type",
					content: "article",
					vmid: "og:type"
				}, {
					property: "og:locale",
					content: d[n],
					vmid: "og:locale"
				}, {
					property: "og:image:width",
					content: h,
					vmid: "og:image:width"
				}, {
					property: "og:image:height",
					content: g,
					vmid: "og:image:height"
				}, {
					name: "keywords",
					content: t.tags.map(t => t.titleHtml).join(", ")
				}].filter(Boolean)
			}
	},
	a368: function (t, e, s) { },
	a590: function (t, e, s) { },
	a5cd: function (t, e, s) { },
	a5fe: function (t, e) {
		const s = t => t.split(",").reduce((t, e) => {
			const [s, n] = e.split("=");
			return {
				...t,
				[s]: "on" === n
			}
		}, {}),
			n = t => "on" === Object({
				VUE_APP_RELEASE_VERSION: "2022-07-07-09-19",
				NODE_ENV: "production",
				VUE_APP_ADS_TARGETING_DEV: "0",
				VUE_APP_ANALYTICS_GA_BASE_KEY: "UA-726094-1",
				VUE_APP_ANALYTICS_GA_BETA_KEY: "UA-726094-33",
				VUE_APP_ANALYTICS_GA_HOSTNAME: "habr.com",
				VUE_APP_ANALYTICS_GA_OPTIMIZE_KEY: "GTM-559GVC8",
				VUE_APP_ANALYTICS_VK_PIXEL_KEY: "VK-RTRG-421343-57vKE",
				VUE_APP_ANALYTICS_YANDEX_METRIKA_KEY: "24049213",
				VUE_APP_API_HOST_EXTERNAL: "https://localhost:7103/api-init-habr/api/",
				VUE_APP_API_HOST_INTERNAL: "https://localhost:7103",
				VUE_APP_AUTH_HOST: "https://localhost:7103",
				VUE_APP_BASE_URL: "https://localhost:7103",
				VUE_APP_DESKTOP_BASE: "https://localhost:7103",
				VUE_APP_EFFECT_URL: "https://localhost:7103/effect-habr",
				VUE_APP_ENV_MODE: "production",
				VUE_APP_RECAPTCHA_SITE_KEY: "6LfPEI4UAAAAABkNYyXRDStI3ob8KNSQeZz9xnSf",
				VUE_APP_SENTRY_ENABLE: "on",
				VUE_APP_STATIC_PUBLIC_PATH: "https://localhost:7103/assets-habr/habr-web/",
				VUE_APP_I18N_INTERNAL_PATH: "/dist/static/js/i18n/",
				VUE_APP_WYSIWYG_EMBED_HOST: "https://localhost:7103/embedd-srv-habr",
				VUE_APP_USE_TEST_IDS: "off",
				VUE_APP_USE_REQUEST_IDS: "off",
				VUE_APP_FEATURE_COMMENTS_STREAMING_ENABLED: "on",
				VUE_APP_FEATURE_COMMENTS_CACHING_ENABLED: "on",
				VUE_APP_CAREER_HOST: "https://localhost:7103/career-habr",
				VUE_APP_QNA_HOST: "https://localhost:7103/qna-habr",
				VUE_APP_ACCOUNT_HOST: "https://localhost:7103/account-habr",
				VUE_APP_TECHNOTEXT_YEAR: "2021",
				VUE_APP_TECHNOTEXT_LINK: "https://localhost:7103/contenting/2021.html",
				VUE_APP_FEATURE_TECHNOTEXT: "on",
				VUE_APP_NEW_COMPANY_ADMIN_FEATURE_ENABLED: "off",
				VUE_APP_MEGAPOSTS_ADMIN_FEATURE_ENABLED: "on",
				VUE_APP_TM_EXTERNAL_URL: "https://localhost:7103/tmtm",
				VUE_APP_LANDING_URL: "https://localhost:7103/company-habr",
				VUE_APP_BETA_TEST: "",
				VUE_APP_BETA_TEST_NOTICE: "off",
				VUE_APP_FEATURE_BETA: "off",
				VUE_APP_ENABLE_YANDEX_ADS: "off",
				VUE_APP_MAIN_TOPIC: "on",
				VUE_APP_CAREER_BLOCK_URL_COMPANY: "https://localhost:7103/career-habr/companies/{company}/vacancies",
				VUE_APP_CAREER_BLOCK_URL: "https://localhost:7103/career-habr/catalog",
				VUE_APP_FREELANCE_BLOCK_URL: "https://localhost:7103/freelance-habr/tasks",
				VUE_APP_COURSES_BLOCK_URL: "https://localhost:7103/career-habr/courses",
				VUE_APP_QNA_BLOCK_URL: "https://localhost:7103/qna-habr/questions",
				VUE_APP_IPAD_ENABLE: "on",
				VUE_APP_PINNED_COOKIE_KEY: "habr-web-collapsed-pinned",
				VUE_APP_RECAPTCHA_HOST: "https://www.google.com/recaptcha/api/siteverify",
				VUE_APP_REDIS_HOST: "localhost",
				VUE_APP_SCRIPT_STATUS_ADBLOCK: "zhY4i4nJ9K",
				VUE_APP_SCRIPT_STATUS_DESKTOP_STATE: "e0044d29c024",
				VUE_APP_TEXT_PLACEHOLDER: "â–‡â–…â–„â–…â–…â–„ â–‡â–„â–…",
				VUE_APP_FB_ACCESS_TOKEN: "444736788986613|XshRJ2gOujliLvbFJjDrWO566oc",
				VUE_APP_COMMENTS_NEW_WYSIWYG: "on",
				VUE_APP_SENTRY_DSN_FRONT: "https://55fa8d464200462c8705016e201b61c5@sentry.srv.habr.com/13",
				VUE_APP_SENTRY_DSN_API: "https://e0e387b25a1049dbb812bf8a197403f2@sentry.habralab.com/12",
				VUE_APP_VERSION: "2.81.0",
				BASE_URL: "https://localhost:7103/assets-habr/habr-web/"
			})["VUE_APP_FEATURE_" + t];
		t.exports = {
			parseFeaturesSettings: s,
			getFeatureStatusFromEnv: n
		}
	},
	a649: function (t, e, s) {
		"use strict";
		s("e8d2")
	},
	a65d: function (t, e, s) { },
	a714: function (t, e, s) {
		"use strict";
		s.r(e);
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "swiper-slide"
			}, [t._t("default")], 2)
		},
			a = [],
			i = {
				name: "TMSwiperSlide"
			},
			o = i,
			r = s("2877"),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["default"] = c.exports
	},
	a73a: function (t, e, s) {
		"use strict";
		s("38ab")
	},
	a7b9: function (t, e, s) { },
	a7dc: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return t.showBlock ? s("TMBlock", {
				attrs: {
					"header-variant": "borderless",
					title: t.msg("NAV_NEWS"),
					"title-tag": "h2"
				},
				scopedSlots: t._u([t.showTypeNav ? {
					key: "block-settings",
					fn: function () {
						return [s("TMSmallTabs", {
							attrs: {
								"active-tab": t.selection,
								tabs: t.tabs
							},
							on: {
								change: t.setSelection
							}
						})]
					},
					proxy: !0
				} : null], null, !0)
			}, [t._v(" "), s("keep-alive", [s("TMNewsBlockList", {
				key: t.selection,
				attrs: {
					"company-alias": t.companyAlias,
					"company-title": t.companyTitle,
					"flow-name": t.flowName,
					"hub-name": t.hubName,
					selection: t.selection
				},
				on: {
					"has-news-change": t.setShowBlock
				}
			})], 1)], 1) : t._e()
		},
			a = [],
			i = s("19d1"),
			o = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMNewsBlockLayout", {
					attrs: {
						"is-loading": t.isLoading,
						"show-placeholder": !t.pagesCount && !t.newsItems.length
					},
					scopedSlots: t._u([{
						key: "items",
						fn: function () {
							return t._l(t.newsItems, (function (e) {
								return s("TMNewsBlockItem", {
									key: e.id,
									staticClass: "tm-news-block__item",
									attrs: {
										"news-item": e
									},
									on: {
										"comments-click": function (e) {
											return t.logClick("comments")
										},
										"title-click": function (e) {
											return t.logClick("title")
										}
									}
								})
							}))
						},
						proxy: !0
					}, {
						key: "footer",
						fn: function () {
							return [t.showLoadMore ? s("button", {
								staticClass: "tm-news-block__all",
								attrs: {
									type: "button"
								},
								on: {
									click: t.onShowMoreClick
								}
							}, [t._v("\n      " + t._s(t.msg("SHOW_MORE")) + "\n    ")]) : s("router-link", {
								staticClass: "tm-news-block__all",
								attrs: {
									to: t.newsRoute
								},
								nativeOn: {
									click: function (e) {
										return t.logClick("all_news")
									}
								}
							}, [t._v("\n      " + t._s(t.allNewsText) + "\n    ")])]
						},
						proxy: !0
					}])
				})
			},
			r = [],
			c = s("2f62"),
			l = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("li", {
					staticClass: "tm-news-block-item"
				}, [s("h3", {
					staticClass: "tm-news-block-item__title"
				}, [s("TMArticleLink", {
					staticClass: "tm-news-block-item__title-link tm-news-block-item__title",
					attrs: {
						article: t.newsItem
					},
					nativeOn: {
						"!click": function (e) {
							return t.$emit("title-click")
						}
					}
				}, [s("span", {
					domProps: {
						innerHTML: t._s(t.newsItem.titleHtml)
					}
				})])], 1), t._v(" "), s("div", {
					staticClass: "tm-news-block-item__meta"
				}, [s("TMDatetime", {
					staticClass: "tm-news-block-item__date",
					attrs: {
						date: new Date(t.newsItem.timePublished),
						"hide-today": !0,
						"show-full-date-time": !0
					}
				}), t._v(" "), s("TMArticleCommentsLink", {
					staticClass: "tm-news-block-item__comments-link",
					attrs: {
						article: t.newsItem
					},
					nativeOn: {
						"!click": function (e) {
							return t.$emit("comments-click")
						}
					}
				}, [s("span", {
					staticClass: "tm-news-block-item__comments"
				}, [s("TMSvgImg", {
					staticClass: "tm-news-block-item__comments-icon",
					attrs: {
						id: "counter-comments",
						size: "24"
					}
				}), t._v(" "), s("span", [t._v("\n          " + t._s(t.newsItem.statistics.commentsCount) + "\n        ")]), t._v(" "), t.unreadCommentsCount ? s("span", {
					staticClass: "tm-news-block-item__comments_unread"
				}, [t._v("\n          " + t._s(t.unreadCommentsCount) + "\n        ")]) : t._e()], 1)])], 1)])
			},
			u = [],
			m = s("edfe"),
			d = s("0414"),
			p = s("8819"),
			_ = s("8fab"),
			h = s("b7d0"),
			g = s("6be8"),
			f = {
				name: "TMNewsBlockItem",
				components: {
					TMSvgImg: h["a"],
					TMArticleCommentsLink: d["a"],
					TMDatetime: _["a"],
					TMArticleLink: p["a"]
				},
				props: {
					newsItem: {
						type: Object,
						required: !0
					}
				},
				data() {
					return {
						unreadCommentsCount: null
					}
				},
				computed: {
					...Object(c["c"])("me", ["isLoggedIn"])
				},
				beforeMount() {
					if (this.isLoggedIn) {
						const {
							relatedData: t
						} = this.newsItem;
						t && t.unreadCommentsCount && (this.unreadCommentsCount = Object(g["b"])(t.unreadCommentsCount))
					} else {
						const {
							newsItem: {
								id: t,
								statistics: e
							}
						} = this;
						Object(m["a"])(t).then((t = 0) => {
							const s = Math.max(e.commentsCount - t, 0);
							s && (this.unreadCommentsCount = Object(g["b"])(s))
						})
					}
				}
			},
			b = f,
			T = (s("cf26"), s("2877")),
			v = Object(T["a"])(b, l, u, !1, null, null, null),
			E = v.exports,
			S = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-news-block-layout"
				}, [s("ul", {
					staticClass: "tm-news-block-layout__items"
				}, [t.isLoading && t.showPlaceholder ? t._l(t.placeholdersCount, (function (t) {
					return s("li", {
						key: t,
						staticClass: "tm-news-block-layout__item"
					}, [s("TMNewsBlockItemPlaceholder")], 1)
				})) : t._t("items")], 2), t._v(" "), s("div", {
					staticClass: "tm-news-block-layout__footer"
				}, [t.isLoading && !t.showPlaceholder ? s("TMCircleLoader") : t._t("footer")], 2)])
			},
			O = [],
			C = s("68eb"),
			I = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "news-block-item-placeholder"
				}, [s("div", {
					staticClass: "news-block-item-placeholder__header",
					style: {
						width: t.getRandomNumberFromRange(140, 300) + "px"
					}
				}), t._v(" "), s("div", {
					staticClass: "news-block-item-placeholder__meta",
					style: {
						width: t.getRandomNumberFromRange(240, 280) + "px"
					}
				})])
			},
			A = [],
			y = s("edc0"),
			L = {
				name: "TMNewsBlockItemPlaceholder",
				methods: {
					getRandomNumberFromRange: y["a"]
				}
			},
			P = L,
			N = (s("22f2"), Object(T["a"])(P, I, A, !1, null, null, null)),
			R = N.exports,
			M = {
				name: "TMNewsBlockLayout",
				components: {
					TMCircleLoader: C["a"],
					TMNewsBlockItemPlaceholder: R
				},
				props: {
					isLoading: {
						type: Boolean,
						default: !1
					},
					showPlaceholder: {
						type: Boolean,
						default: !1
					},
					placeholdersCount: {
						type: Number,
						default: 5
					}
				}
			},
			w = M,
			k = (s("507a"), Object(T["a"])(w, S, O, !1, null, null, null)),
			j = k.exports,
			D = s("6f23"),
			x = s("2105"),
			B = s("4dcc");

		function $(t) {
			return Object(x["b"])(Object(B["a"])("news/context", "v2"), t)
		}
		const F = 5;
		var G = {
			name: "TMNewsBlockList",
			components: {
				TMNewsBlockItem: E,
				TMNewsBlockLayout: j
			},
			props: {
				selection: {
					type: String,
					default: "date",
					validator: t => ["rating", "date"].includes(t)
				},
				hasNews: Boolean,
				companyTitle: {
					type: String,
					default: null
				},
				companyAlias: {
					type: String,
					default: null
				},
				flowName: {
					type: String,
					default: null
				},
				hubName: {
					type: String,
					default: null
				}
			},
			data() {
				return {
					isLoading: !0,
					newsItems: [],
					pagesCount: null,
					currentOption: "all"
				}
			},
			computed: {
				...Object(c["c"])("i18n", ["langOptions"]),
				allNewsText() {
					if (this.companyNews) return this.msg("NEWS_ALL_NEWS_COMPANY", {
						companyTitle: this.companyTitle
					});
					if (this.flowNews) {
						const t = this.flowName.toUpperCase(),
							e = this.msg("NAV_FLOW_" + t);
						return this.msg("NEWS_ALL_NEWS_FLOW", {
							flowTitle: e
						})
					}
					return this.msg("NEWS_ALL_NEWS")
				},
				newsRouteName() {
					return this.companyNews ? "NEWS_LIST_BY_COMPANY" : this.flowNews ? "NEWS_LIST_BY_FLOW" : "NEWS"
				},
				newsRoute() {
					const t = this.routeHasHash ? "#more-news" : null;
					return {
						name: this.newsRouteName,
						params: {
							lang: this.langOptions.hl
						},
						...t ? {
							hash: t
						} : {}
					}
				},
				routeHasHash() {
					return this.pagesCount > 2
				},
				companyNews() {
					return Boolean(this.companyAlias)
				},
				flowNews() {
					return Boolean(this.flowName)
				},
				hubNews() {
					return Boolean(this.hubName)
				},
				contextParams() {
					return this.hubNews ? {
						context_hub_alias: this.hubName
					} : this.flowNews ? {
						context_flow_alias: this.flowName
					} : this.companyNews ? {
						context_company_alias: this.companyAlias
					} : {}
				},
				showLoadMore() {
					return this.pagesCount > 1 && this.newsItems.length === F
				}
			},
			mounted() {
				this.loadNews({
					pageNum: 1
				})
			},
			methods: {
				loadNews({
					pageNum: t
				}) {
					const e = {
						...this.langOptions,
						...this.contextParams,
						selection: this.selection,
						extend_context: !1,
						per_page: F,
						page_num: t
					};
					this.isLoading = !0, $(e).then(t => {
						if (t && t.articleRefs && t.articleIds) {
							const e = t.articleIds.map(e => t.articleRefs[e]);
							this.newsItems.push(...e), this.pagesCount = t.pagesCount
						}
					}).catch(t => {
						this.newsItems.length && this.$toast.error(t.message)
					}).finally(() => {
						this.isLoading = !1, this.$emit("has-news-change", !!this.newsItems.length)
					})
				},
				onShowMoreClick() {
					this.logClick("more"), this.loadNews({
						pageNum: 2
					})
				},
				logClick(t) {
					Object(D["c"])("tm_block", "news", t)
				}
			}
		},
			U = G,
			V = (s("a92e"), Object(T["a"])(U, o, r, !1, null, null, null)),
			W = V.exports,
			H = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-options-switch"
				}, t._l(t.tabs, (function (e) {
					return s("button", {
						key: e.value,
						staticClass: "tm-options-switch__item",
						class: t.bem("tm-options-switch__item", {
							active: t.isActive(e)
						}),
						attrs: {
							"data-active": t.isActive(e),
							disabled: t.isActive(e)
						},
						on: {
							click: function (s) {
								return t.select(e)
							}
						}
					}, [t._v("\n    " + t._s(e.label) + "\n  ")])
				})), 0)
			},
			Y = [],
			q = s("cee5"),
			K = {
				name: "TMSmallTabs",
				model: {
					prop: "activeTab",
					event: "change"
				},
				props: {
					activeTab: {
						type: [String, Number],
						default: null
					},
					tabs: {
						type: Array,
						required: !0
					}
				},
				methods: {
					bem: q["a"],
					select(t) {
						this.$emit("change", t.value)
					},
					isActive(t) {
						return t.value === this.activeTab
					}
				}
			},
			z = K,
			X = (s("e625"), Object(T["a"])(z, H, Y, !1, null, null, null)),
			J = X.exports,
			Q = {
				name: "TMNewsBlock",
				components: {
					TMSmallTabs: J,
					TMBlock: i["a"],
					TMNewsBlockList: W
				},
				props: {
					companyTitle: {
						type: String,
						default: null
					},
					companyAlias: {
						type: String,
						default: null
					},
					flowName: {
						type: String,
						default: null
					},
					hubName: {
						type: String,
						default: null
					},
					showTypeNav: {
						type: Boolean,
						default: !0
					}
				},
				data() {
					return {
						showBlock: !0,
						selection: "date"
					}
				},
				computed: {
					tabs() {
						return [{
							value: "date",
							label: this.msg("NAV_TITLE_LATEST").toLowerCase()
						}, {
							value: "rating",
							label: this.msg("NAV_BEST").toLowerCase()
						}]
					}
				},
				methods: {
					setSelection(t) {
						this.selection = t;
						const e = "date" === t ? "filter_all" : "filter_best";
						this.logEvent(e)
					},
					setShowBlock(t) {
						this.showBlock = t
					},
					logEvent(t) {
						Object(D["c"])("tm_block", "news", t)
					}
				}
			},
			Z = Q,
			tt = Object(T["a"])(Z, n, a, !1, null, null, null);
		e["a"] = tt.exports
	},
	a852: function (t, e, s) { },
	a8a8: function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return d
		}));
		var n = s("2b0e"),
			a = s("dc21"),
			i = s("82dc"),
			o = s("0038"),
			r = s("d194"),
			c = s("a3c5"),
			l = s("e594"),
			u = s("b24e"),
			m = s.n(u);

		function d(t) {
			"string" !== typeof t ? "TimeoutError" !== t.name ? (i["c"](t => {
				t.setTag("app_version", "2.81.0")
			}), i["a"](t)) : i["e"](e => {
				e.setFingerprint(["TimeoutError"]), i["a"](t)
			}) : i["e"](e => {
				e.setLevel("info"), i["b"](t)
			})
		}
		a["a"]({
			dsn: "https://55fa8d464200462c8705016e201b61c5@sentry.srv.habr.com/13",
			environment: "production",
			release: "2022-07-07-09-19",
			integrations: [new o["a"], new r["a"], new c["a"], new l["a"]({
				Vue: n["default"],
				attachProps: !0
			})],
			...m.a
		})
	},
	a8f0: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return t.showFeedBlocks ? s("div", {
				staticClass: "tm-article-feed-blocks"
			}, [t.showPromoBlock ? s("TMPromoBlock", {
				key: "promo_block_" + t.position,
				attrs: {
					id: "promo_block_" + t.position,
					"data-navigatable": "",
					"ga-type": "feed_middle",
					tabindex: "0"
				}
			}) : t.showAdBanner ? s("TMAdfoxBanner", {
				key: "ads_block_" + t.position,
				attrs: {
					"adfox-id": "164725660339535756",
					"div-id": "articlesListBanner",
					params: {
						pp: "h",
						ps: "fnps",
						p2: "hnyb"
					},
					variant: "leaderboard"
				}
			}) : t.showRandomProjectBlock ? s("TMRandomProjectBlock", {
				key: "project-blocks_" + t.position,
				attrs: {
					id: "project-blocks_" + t.position,
					"block-id": "project-blocks_" + t.position,
					"data-navigatable": "",
					hubs: t.sortedHubs,
					location: "feed",
					tabindex: "0",
					tags: t.sortedTags
				}
			}) : t._e()], 1) : t._e()
		},
			a = [],
			i = s("2f62"),
			o = s("882a"),
			r = s("f20c"),
			c = s("9e83");
		const l = 10,
			u = {
				default: {
					allPositions: [4, 7, l, 13, 16],
					promoBlockPositions: [4],
					adBannerPositions: [7],
					projectBlockPositions: [l, 13, 16]
				},
				startup: {
					allPositions: [4, 7, 17],
					promoBlockPositions: [4],
					adBannerPositions: [],
					projectBlockPositions: [7, 17]
				}
			},
			m = new Set(["NEWS", "NEWS_LIST_ALL", "NEWS_LIST_ALL_PAGES", "NEWS_LIST_ALL_SCORE", "NEWS_LIST_ALL_SCORE_PAGES", "NEWS_LIST_TOP", "NEWS_LIST_TOP_PERIOD", "NEWS_LIST_TOP_PERIOD", "NEWS_LIST_TOP_PERIOD_PAGES", "NEWS_LIST_BY_FLOW", "NEWS_LIST_BY_FLOW_ALL", "NEWS_LIST_BY_FLOW_ALL_PAGES", "NEWS_LIST_BY_FLOW_SCORE", "NEWS_LIST_BY_FLOW_SCORE_PAGES", "NEWS_LIST_BY_FLOW_TOP", "NEWS_LIST_BY_FLOW_TOP_PERIOD", "NEWS_LIST_BY_FLOW_TOP_PERIOD_PAGES", "NEWS_LIST_BY_COMPANY", "NEWS_LIST_BY_COMPANY_PAGES"]),
			d = t => {
				const e = {};
				return t.forEach(t => {
					e[t] = (e[t] || 0) + 1
				}), Object.keys(e).sort((t, s) => e[t] - e[s])
			};
		var p = {
			name: "TMArticlesFeedBlocks",
			components: {
				TMAdfoxBanner: o["a"],
				TMPromoBlock: c["a"],
				TMRandomProjectBlock: r["a"]
			},
			props: {
				rotationType: {
					type: String,
					default: "default"
				},
				position: {
					type: Number,
					required: !0
				}
			},
			computed: {
				...Object(i["c"])("articlesList", ["getAllHubsTitles", "getAllTagsNames"]),
				...Object(i["c"])("me", ["userShowAdv"]),
				currentRotationConfig() {
					return u[this.rotationType] || u.default
				},
				isFlEnglish() {
					return "en" === this.langOptions.fl
				},
				hubs() {
					return this.getAllHubsTitles(this.$route)
				},
				tags() {
					return this.getAllTagsNames(this.$route)
				},
				sortedHubs() {
					if (!this.hubs) return null;
					let t = d(this.hubs);
					return this.$route.params.hubName && (t = Array.from(new Set([this.$route.params.hubName, ...t]))), t
				},
				sortedTags() {
					return this.tags ? d(this.tags) : null
				},
				showFeedBlocks() {
					return this.currentRotationConfig.allPositions.includes(this.position)
				},
				showPromoBlock() {
					return this.currentRotationConfig.promoBlockPositions.includes(this.position) && !this.isFlEnglish
				},
				showAdBanner() {
					return this.currentRotationConfig.adBannerPositions.includes(this.position) && this.userShowAdv
				},
				showRandomProjectBlock() {
					return this.currentRotationConfig.projectBlockPositions.includes(this.position) && !this.isFlEnglish && !(this.isNewsRoute && this.position === l)
				},
				isNewsRoute() {
					return this.$route.matched.some(t => m.has(t.name))
				}
			}
		},
			_ = p,
			h = s("2877"),
			g = Object(h["a"])(_, n, a, !1, null, null, null);
		e["a"] = g.exports
	},
	a90a: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-company-widgets"
			}, t._l(t.widgets, (function (e, n) {
				return s(t.$options.presenters[e.type], {
					key: n,
					tag: "component",
					attrs: {
						type: e.type,
						"widget-data": e.data
					}
				})
			})), 1)
		},
			a = [],
			i = s("2f62"),
			o = s("c834"),
			r = s("c1e1"),
			c = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMBlock", {
					staticClass: "tm-widget-banners-slider",
					class: {
						"tm-widget-banners-slider_shadowed": t.renderShadow
					},
					attrs: {
						"header-variant": "borderless",
						title: t.msg("WIDGET_BANNER")
					}
				}, [s("TMSwiper", {
					attrs: {
						"auto-height": "",
						autoplay: t.$options.autoplayParams,
						pagination: "",
						"slides-per-view": 1
					}
				}, t._l(t.widgetData, (function (t, e) {
					return s("TMSwiperSlide", {
						key: e
					}, [s("TMWidgetBannerContent", {
						attrs: {
							"widget-data": t.data
						}
					})], 1)
				})), 1)], 1)
			},
			l = [],
			u = s("19d1"),
			m = s("f4b8"),
			d = s("a714"),
			p = s("50c1");
		const _ = 1e4;
		var h = {
			name: "TMWidgetBannersSlider",
			components: {
				TMBlock: u["a"],
				TMWidgetBannerContent: p["a"],
				TMSwiper: m["default"],
				TMSwiperSlide: d["default"]
			},
			props: {
				widgetData: {
					type: Array,
					required: !0
				}
			},
			autoplayParams: {
				delay: _,
				disableOnInteraction: !1
			},
			computed: {
				renderShadow() {
					return this.widgetData.length > 12
				}
			}
		},
			g = h,
			f = (s("6a34"), s("2877")),
			b = Object(f["a"])(g, c, l, !1, null, null, null),
			T = b.exports,
			v = s("1441"),
			E = s("2291"),
			S = s("94fe"),
			O = s("6528"),
			C = s("0954"),
			I = {
				name: "TMCompanyWidgets",
				props: {
					companyAlias: {
						type: String,
						required: !0
					},
					widgetsAsSlider: {
						type: Boolean,
						default: !1
					}
				},
				presenters: {
					vk: C["a"],
					facebook: v["a"],
					twitter: O["a"],
					news: S["a"],
					links: E["a"],
					banner: r["a"],
					applications: o["a"],
					bannersSlider: T
				},
				computed: {
					...Object(i["c"])("global", ["isDesktop"]),
					...Object(i["e"])("companies", ["companiesWidgets"]),
					needShowSlider() {
						return this.widgetsAsSlider && this.bannersWidgets.length > 1
					},
					rawWidgets() {
						const t = this.companiesWidgets[this.companyAlias];
						return t ? t.filter(t => !!t.data && (("news" !== t.type || 0 !== t.data.news.length) && ("links" !== t.type || 0 !== t.data.links.length))) : []
					},
					bannersWidgets() {
						return this.rawWidgets.filter(t => "banner" === t.type)
					},
					regularWidgets() {
						return this.rawWidgets.filter(t => "banner" !== t.type)
					},
					widgets() {
						return this.needShowSlider ? [{
							type: "bannersSlider",
							data: this.bannersWidgets
						}, ...this.regularWidgets] : this.rawWidgets
					}
				},
				mounted() {
					this.isDesktop && this.loadCompanyWidgets(this.companyAlias)
				},
				methods: {
					...Object(i["b"])("companies", ["loadCompanyWidgets"])
				}
			},
			A = I,
			y = Object(f["a"])(A, n, a, !1, null, null, null);
		e["a"] = y.exports
	},
	a92e: function (t, e, s) {
		"use strict";
		s("95e2")
	},
	a949: function (t, e, s) {
		"use strict";
		s.r(e);
		var n = s("2b0e"),
			a = s("6c42"),
			i = (s("5abe"), s("82dc")),
			o = s("84a2"),
			r = s.n(o),
			c = s("161e"),
			l = s("58ca"),
			u = s("2b88"),
			m = s.n(u),
			d = s("f6f1"),
			p = s.n(d),
			_ = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					attrs: {
						id: "app"
					}
				}, [s(t.currentLayout, {
					tag: "component"
				}), t._v(" "), s("PortalTarget", {
					attrs: {
						multiple: "",
						name: "overlays"
					}
				})], 1)
			},
			h = [],
			g = s("2f62"),
			f = s("a324"),
			b = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMLayoutMetaWrapper", {
					staticClass: "tm-layout__wrapper",
					class: t.className
				}, [s("router-view", {
					attrs: {
						name: "ads"
					}
				}), t._v(" "), s("TMAnalytics"), t._v(" "), t.isMobile && t.isFeatureShown && !t.isTablet ? s("TMFeature") : t._e(), t._v(" "), t.isBlankPage ? t._e() : s("TMHeader", {
					attrs: {
						"is-feature-shown": t.isFeatureShown,
						"is-sticky": t.isHeaderSticky && t.isMobile
					},
					on: {
						showNavMenu: function (e) {
							t.navMenuVisible = !0
						}
					}
				}), t._v(" "), s("div", {
					directives: [{
						name: "hotkey",
						rawName: "v-hotkey.stop",
						value: {
							"shift+/": t.toggleHotKeysPopup
						},
						expression: "{ 'shift+/': toggleHotKeysPopup }",
						modifiers: {
							stop: !0
						}
					}],
					staticClass: "tm-layout",
					class: {
						"tm-layout__wrapper_fix-header": t.isPwa && t.isMobile
					}
				}, [s("TMPageProgressBar", {
					attrs: {
						"is-finished": t.isDataLoaded,
						"is-processing": t.isDataLoading
					}
				}), t._v(" "), !t.isMobile || t.isTablet ? s("div", {
					staticClass: "tm-base-layout__header",
					class: {
						"tm-base-layout__header_is-sticky": t.isDesktop
					},
					attrs: {
						"data-menu-sticky": t.isDesktop
					}
				}, [s("TMPageWidth", [s("div", {
					staticClass: "tm-base-layout__header-wrapper"
				}, [!t.isTablet && !t.isDesktop || t.isBlankPage ? t._e() : s("TMMainMenu"), t._v(" "), t.isDesktop ? s("TMHeaderUserMenu", {
					staticClass: "tm-base-layout__user-menu"
				}) : t._e()], 1)])], 1) : t._e(), t._v(" "), s("TMScrollTop"), t._v(" "), s("TMPageWidth", {
					attrs: {
						"no-padding": t.isTablet
					}
				}, [t.showRefreshNotice ? s("TMNotification", [s("p", [t._v("\n          " + t._s(t.msg("REFRESH_TITLE")) + "\n        ")]), t._v(" "), s("TMButtonBase", {
					staticClass: "tm-notification-refresh__action",
					attrs: {
						"style-size": "small",
						"style-type": "transparent"
					},
					on: {
						click: t.reloadThePage
					}
				}, [t._v("\n          " + t._s(t.msg("REFRESH_ACTION")) + "\n        ")])], 1) : t._e(), t._v(" "), t.showCacheNotice ? s("TMNotification", {
					attrs: {
						layout: "minimal"
					}
				}, [s("span", [t._v("\n          " + t._s(t.msg("CACHED_DATA_TITLE")) + "\n          "), s("br"), t._v("\n          " + t._s(t.msg("CACHED_DATA")) + "\n          "), s("TMDatetime", {
					attrs: {
						date: new Date(t.cacheTime),
						"show-full-date-time": !0
					}
				})], 1)]) : t._e(), t._v(" "), t.showNewVersionNotice ? s("TMNotification", {
					attrs: {
						static: ""
					}
				}, [s("div", {
					staticClass: "tm-base-layout__notification-title"
				}, [t._v("\n          " + t._s(t.msg("BETA_TEST_TITLE")) + "\n        ")]), t._v(" "), s("p", {
					staticClass: "tm-base-layout__notification-text",
					domProps: {
						innerHTML: t._s(t.msg("BETA_TEST_TEXT"))
					}
				}), t._v(" "), s("TMButtonBase", {
					staticClass: "tm-base-layout__notification-button",
					attrs: {
						"style-size": "small",
						"style-type": "solid"
					},
					on: {
						click: function (e) {
							return t.setBetaTestCookie("true")
						}
					}
				}, [t._v("\n          " + t._s(t.msg("BETA_TEST_YES")) + "\n        ")]), t._v(" "), s("TMButtonBase", {
					staticClass: "tm-base-layout__notification-button",
					attrs: {
						"style-size": "small",
						"style-type": "transparent"
					},
					on: {
						click: function (e) {
							return t.setBetaTestCookie("false")
						}
					}
				}, [t._v("\n          " + t._s(t.msg("BETA_TEST_NO")) + "\n        ")])], 1) : t._e(), t._v(" "), 0 !== t.notices.length && t.showUserNotices ? s("div", t._l(t.notices, (function (t, e) {
					return s("TMUserNotice", {
						key: e,
						attrs: {
							notice: t
						}
					})
				})), 1) : t._e()], 1), t._v(" "), s("main", {
					staticClass: "tm-layout__container"
				}, [t.error && !t.ppgError ? s("TMPage", [s("TMPageError", {
					attrs: {
						error: t.error
					}
				})], 1) : s("keep-alive", [s("router-view", {
					on: {
						payments: function (e) {
							t.shouldOpenPayments = !0
						}
					}
				})], 1)], 1), t._v(" "), s("TMScrollLockTransition", {
					attrs: {
						name: "fade-sidebar"
					}
				}, [t.navMenuVisible && t.isMobile ? s("TMSidebar", {
					attrs: {
						position: "left"
					},
					on: {
						close: function (e) {
							t.navMenuVisible = !1
						}
					}
				}, [s("TMBurgerMenu", {
					on: {
						close: function (e) {
							t.navMenuVisible = !1
						}
					}
				})], 1) : t._e()], 1)], 1), t._v(" "), t.isDesktop && !t.isFooterHidden ? s("TMFooterMenu") : t._e(), t._v(" "), t.isFooterHidden ? t._e() : s("TMFooter", {
					on: {
						lang: function (e) {
							t.shouldOpenLangSettings = !0
						}
					}
				}), t._v(" "), t.shouldOpenPayments ? s("TMPopupPayments", {
					on: {
						close: function (e) {
							t.shouldOpenPayments = !1
						}
					}
				}) : t._e(), t._v(" "), t.showHotKeysPopup ? s("TMPopup", {
					attrs: {
						title: t.msg("HOT_KEYS")
					},
					on: {
						close: t.toggleHotKeysPopup
					}
				}, [s("TMHotKeys")], 1) : t._e()], 1)
			},
			T = [],
			v = s("884d"),
			E = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div")
			},
			S = [],
			O = s("6f23"),
			C = s("c70c");

		function I(t) {
			const e = Object(c["a"])("habr_web_ga_uid") || null;
			return e || t ? {
				...e ? {
					uid: e
				} : {},
				...t ? {
					name: t
				} : {}
			} : null
		}
		var A = {
			name: "TMAnalytics",
			computed: {
				...Object(g["c"])("adblock", ["adblockStatus"]),
				...Object(g["c"])("companies", ["getCompanyInfo"]),
				...Object(g["c"])("articlesList", ["getArticleById"]),
				...Object(g["c"])("me", ["userGaType"]),
				...Object(g["e"])("ssr", ["isDataLoaded"]),
				companyInfo() {
					const t = this.$route.params.name;
					return this.getCompanyInfo(t)
				}
			},
			watch: {
				$route(t, e) {
					t.path && e.path && t.path !== e.path && setTimeout(this.logPageView)
				}
			},
			mounted() {
				this.initAnalytics(), this.logPageView()
			},
			methods: {
				initAnalytics() {
					const t = I();
					Object(O["b"])("UA-726094-1", t), Object(O["f"])(t => {
						t("require", "GTM-559GVC8"), Object(O["e"])("transport", "beacon");
						const {
							userGaType: e
						} = this;
						Object(O["e"])("dimension1", e), Object(O["e"])("dimension4", this.adblockStatus), Object(O["e"])("dimension6", this.langOptions.fl), Object(O["e"])("hostname", window.location.host), Object(O["e"])("dimension7", "web_override");
						const s = "",
							n = Object(c["a"])(s),
							a = "true" === n;
						a && Object(O["e"])("dimension7", s)
					})
				},
				logPageView() {
					const {
						fullPath: t
					} = this.$route;
					Object(O["e"])("page", this.$route.fullPath), this.$route.matched.filter(t => t.meta.customGA).length || Object(C["a"])(t)
				}
			}
		},
			y = A,
			L = s("2877"),
			P = Object(L["a"])(y, E, S, !1, null, null, null),
			N = P.exports,
			R = s("8fab"),
			M = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return (t.hasLoaded ? t.feature : t.isProbablyVisible) ? s("div", {
					staticClass: "tm-feature",
					class: t.bem("tm-feature", {
						variant: t.variant
					})
				}, [t.feature ? s("a", {
					staticClass: "tm-feature__link",
					attrs: {
						href: t.feature.link.url,
						rel: "noopener",
						target: "_blank"
					},
					on: {
						click: t.logFeaturerEvent
					}
				}, [s("img", {
					staticClass: "tm-feature__icon",
					attrs: {
						alt: "",
						height: "20",
						src: t.feature.image.url,
						width: "20"
					}
				}), t._v("\n    " + t._s(t.feature.title) + "\n  ")]) : t._e()]) : t._e()
			},
			w = [],
			k = s("cee5"),
			j = s("8a58"),
			D = {
				name: "TMFeature",
				props: {
					variant: {
						type: String,
						default: null
					}
				},
				computed: {
					...Object(g["e"])("global", ["isPwa"]),
					...Object(g["c"])("i18n", ["langOptions"]),
					...Object(g["e"])("feature", ["isProbablyVisible"]),
					...Object(g["c"])("promoData", ["feature"]),
					...Object(g["e"])("promoData", ["hasLoaded"])
				},
				watch: {
					feature: {
						immediate: !0,
						handler(t) {
							t && this.trackView()
						}
					}
				},
				methods: {
					bem: k["a"],
					logFeaturerEvent() {
						Object(O["c"])("habr_top_panel", "lightning", this.feature.gal)
					},
					trackView() {
						const t = this.feature.events && this.feature.events.view;
						t && Object(j["b"])([t])
					}
				}
			},
			x = D,
			B = (s("38bd"), Object(L["a"])(x, M, w, !1, null, null, null)),
			$ = B.exports,
			F = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-footer"
				}, [s("TMPageWidth", [s("div", {
					staticClass: "tm-footer__container"
				}, [t.isMobile ? s("div", {
					staticClass: "tm-footer__title"
				}, [s("router-link", {
					staticClass: "tm-svg-icon__wrapper tm-footer__title-link",
					attrs: {
						to: t.homeUrl
					}
				}, [s("TMSvgImg", {
					staticClass: "tm-svg-icon",
					attrs: {
						id: t.logoIcon
					}
				})], 1)], 1) : t._e(), t._v(" "), s("TMSocialIcons", {
					staticClass: "tm-footer__social"
				}), t._v(" "), s("Portal", {
					attrs: {
						to: "overlays"
					}
				}, [s("TMScrollLockTransition", {
					attrs: {
						name: "transition-fade"
					}
				}, [t.pageSettingsVisible ? s("TMPopupBase", {
					on: {
						close: function (e) {
							t.pageSettingsVisible = !1
						}
					}
				}, [s("TMPageSettingsForm", {
					staticClass: "tm-popup-page-settings__form",
					on: {
						closePopup: function (e) {
							t.pageSettingsVisible = !1
						}
					}
				})], 1) : t._e()], 1)], 1), t._v(" "), s("button", {
					staticClass: "tm-footer__link",
					on: {
						click: function (e) {
							t.pageSettingsVisible = !0
						}
					}
				}, [t.isMobile ? s("TMSvgImg", {
					staticClass: "tm-footer__icon",
					attrs: {
						id: "lang"
					}
				}) : t._e(), t._v("\n        " + t._s(t.msg("FOOTER_LANG")) + "\n      ")], 1), t._v(" "), s("router-link", {
					staticClass: "tm-footer__link",
					attrs: {
						to: {
							name: "FEEDBACK"
						}
					}
				}, [t._v("\n        " + t._s(t.msg("NAV_FEEDBACK")) + "\n      ")]), t._v(" "), !t.isPwa && t.isMobile ? s("a", {
					staticClass: "tm-footer__link",
					attrs: {
						href: t.desktopUrl
					}
				}, [t._v("\n        " + t._s(t.msg("FOOTER_DESKTOP")) + "\n      ")]) : t._e(), t._v(" "), s("a", {
					staticClass: "tm-footer__link",
					attrs: {
						href: "/berserk-mode-nope"
					},
					on: {
						click: t.logGa
					}
				}, [t._v("\n        " + t._s(t.msg("BETA_TEST_SWITCH_BACK")) + "\n      ")]), t._v(" "), s("TMFooterCopyright")], 1)])], 1)
			},
			G = [],
			U = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-footer-copyright"
				}, [s("span", {
					staticClass: "tm-copyright"
				}, [s("span", {
					staticClass: "tm-copyright__years"
				}, [t._v("Â© 2006â€“" + t._s(t.currentYear) + ", ")]), t._v(" "), s("span", {
					staticClass: "tm-copyright__name"
				}, [s("a", {
					staticClass: "tm-copyright__link",
					attrs: {
						href: t.getLink,
						rel: "noopener",
						target: "_blank"
					}
				}, [t._v("Habr")])])])])
			},
			V = [],
			W = {
				name: "TMFooterCopyright",
				computed: {
					...Object(g["c"])("i18n", ["langOptions"]),
					currentYear() {
						return (new Date).getFullYear()
					},
					getLink() {
						return "ru" === this.langOptions.hl ? "https://localhost:7103/company-habr/" : "https://localhost:7103/company-habr/en/"
					}
				}
			},
			H = W,
			Y = (s("d91e"), Object(L["a"])(H, U, V, !1, null, null, null)),
			q = Y.exports,
			K = s("bccd"),
			z = s("fce7"),
			X = s("c5ac"),
			J = s("1a5d"),
			Q = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", t._l(t.socialIcons, (function (e) {
					return s("TMSvgIcon", {
						key: e.key,
						staticClass: "tm-social-icons__icon",
						attrs: {
							id: t.spriteUrl + "#social-logo-" + e.key,
							href: e.url,
							rel: "nofollow noopener noreferrer",
							tag: "a",
							target: "_blank"
						}
					})
				})), 1)
			},
			Z = [],
			tt = s("4a90");
		const et = {
			en: [{
				key: "facebook",
				url: "https://www.facebook.com/habr.eng"
			}, {
				key: "twitter",
				url: "https://twitter.com/habr_eng"
			}, {
				key: "telegram",
				url: "https://t.me/habr_eng"
			}],
			ru: [{
				key: "facebook",
				url: "https://www.facebook.com/habrahabr.ru"
			}, {
				key: "twitter",
				url: "https://twitter.com/habr_com"
			}, {
				key: "vkontakte",
				url: "https://vk.com/habr"
			}, {
				key: "telegram",
				url: "https://telegram.me/habr_com"
			}, {
				key: "youtube",
				url: "https://www.youtube.com/channel/UCd_sTwKqVrweTt4oAKY5y4w"
			}, {
				key: "zen",
				url: "https://zen.yandex.ru/habr"
			}]
		};
		var st = {
			name: "TMSocialIcons",
			components: {
				TMSvgIcon: tt["a"]
			},
			computed: {
				...Object(g["e"])("i18n", ["fl"]),
				socialIcons() {
					return this.fl && this.fl.indexOf("ru") > -1 ? et.ru : et.en
				},
				spriteUrl() {
					return "/img/social-icons-sprite.svg"
				}
			}
		},
			nt = st,
			at = (s("8490"), Object(L["a"])(nt, Q, Z, !1, null, null, null)),
			it = at.exports,
			ot = s("b7d0"),
			rt = {
				name: "TMFooter",
				components: {
					TMFooterCopyright: q,
					TMSocialIcons: it,
					TMSvgIcon: tt["a"],
					TMSvgImg: ot["a"],
					TMPageWidth: z["a"],
					TMScrollLockTransition: J["a"],
					TMPageSettingsForm: K["default"],
					TMPopupBase: X["default"]
				},
				data() {
					return {
						pageSettingsVisible: !1
					}
				},
				computed: {
					...Object(g["e"])("i18n", ["hl"]),
					...Object(g["c"])("location", ["desktopUrl"]),
					...Object(g["e"])("global", ["isPwa"]),
					...Object(g["c"])("global", ["isMobile"]),
					...Object(g["c"])("me", ["userAlias"]),
					isUserBetaTester() {
						const t = "",
							e = Object(c["a"])(t);
						return "true" === e
					},
					homeUrl() {
						return `/${this.hl}/`
					},
					logoIcon() {
						return `/img/habr-logo-${this.hl}.svg#logo`
					}
				},
				methods: {
					logGa() {
						Object(O["c"])("footer", "return_to_desktop", this.userAlias || null)
					}
				}
			},
			ct = rt,
			lt = (s("6593"), Object(L["a"])(ct, F, G, !1, null, null, null)),
			ut = lt.exports,
			mt = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-footer-menu"
				}, [s("TMPageWidth", [s("div", {
					staticClass: "tm-footer-menu__container"
				}, t._l(t.groupMenuItems, (function (e, n) {
					return s("div", {
						key: "group-" + n,
						staticClass: "tm-footer-menu__block"
					}, [s("h3", {
						staticClass: "tm-footer-menu__block-title"
					}, [t._v("\n          " + t._s(e.name) + "\n        ")]), t._v(" "), s("div", {
						staticClass: "tm-footer-menu__block-content"
					}, [s("ul", {
						staticClass: "tm-footer-menu__list"
					}, t._l(e.items, (function (e, n) {
						return s("li", {
							key: "link-" + n,
							staticClass: "tm-footer-menu__list-item"
						}, ["_blank" === e.target || "_self" === e.target ? s("a", {
							attrs: {
								href: e.link,
								rel: e.rel,
								target: e.target
							}
						}, [t._v("\n                " + t._s(e.name) + "\n              ")]) : s("router-link", {
							staticClass: "footer-menu__item-link",
							attrs: {
								to: e.link
							}
						}, [t._v("\n                " + t._s(e.name) + "\n              ")])], 1)
					})), 0)])])
				})), 0)])], 1)
			},
			dt = [];
		const pt = "https://localhost:7103/account-habr",
			_t = "https://localhost:7103/company-habr";
		var ht = {
			name: "TMFooterMenu",
			components: {
				TMPageWidth: z["a"]
			},
			computed: {
				...Object(g["c"])("me", ["userAlias", "isLoggedIn"]),
				...Object(g["c"])("i18n", ["msg", "langOptions"]),
				loginUrl() {
					const t = "/kek/v1/auth/habrahabr/";
					return `${t}?back=${this.$route.path}&hl=${this.langOptions.hl}`
				},
				signUpUrl() {
					const t = "/kek/v1/auth/habrahabr-register/";
					return `${t}?back=${this.$route.path}&hl=${this.langOptions.hl}`
				},
				loggedInAccountItems() {
					return [{
						name: this.msg("NAV_PROFILE"),
						link: {
							name: "ARTICLES_LIST_BY_USER",
							params: {
								login: this.userAlias,
								hl: this.langOptions.hl
							}
						}
					}, {
						name: this.msg("TRACKER_TITLE"),
						link: {
							name: "TRACKER",
							params: {
								hl: this.langOptions.hl
							}
						}
					}, {
						name: this.msg("NAV_CONVERSATIONS"),
						link: {
							name: "CONVERSATIONS",
							params: {
								hl: this.langOptions.hl
							}
						}
					}, {
						name: this.msg("SETTINGS"),
						link: {
							name: "USER_SETTINGS_PROFILE",
							params: {
								hl: this.langOptions.hl
							}
						}
					}, {
						name: this.msg("NAV_PPA"),
						link: {
							name: "PPA_ROOT",
							params: {
								hl: this.langOptions.hl
							}
						}
					}]
				},
				loggedOutAccountItems() {
					return [{
						name: this.msg("LOG_IN"),
						link: this.loginUrl,
						target: "_self",
						rel: "nofollow"
					}, {
						name: this.msg("SIGN_UP"),
						link: this.signUpUrl,
						target: "_self",
						rel: "nofollow"
					}]
				},
				groupMenuItems() {
					const t = this.isLoggedIn ? this.loggedInAccountItems : this.loggedOutAccountItems;
					return [{
						name: this.msg("NAV_ACCOUNT"),
						items: t
					}, {
						name: this.msg("NAV_SECTIONS"),
						items: [{
							name: this.msg("NAV_BOOKMARKS_ARTICLES"),
							link: {
								name: "INDEX",
								params: {
									hl: this.langOptions.hl
								}
							}
						}, {
							name: this.msg("NAV_NEWS"),
							link: {
								name: "NEWS",
								params: {
									hl: this.langOptions.hl
								}
							}
						}, {
							name: this.msg("NAV_HUBS"),
							link: {
								name: "HUBS",
								params: {
									hl: this.langOptions.hl
								}
							}
						}, {
							name: this.msg("NAV_COMPANIES"),
							link: {
								name: "COMPANIES",
								params: {
									hl: this.langOptions.hl
								}
							}
						}, {
							name: this.msg("NAV_AUTHORS"),
							link: {
								name: "USERS",
								params: {
									hl: this.langOptions.hl
								}
							}
						}, {
							name: this.msg("NAV_SANDBOX"),
							link: {
								name: "AWAIT_INVITE_AUTHORS_ARTICLES_LIST",
								params: {
									hl: this.langOptions.hl
								}
							}
						}]
					}, {
						name: this.msg("NAV_INFO"),
						items: [{
							name: this.msg("NAV_HELP"),
							link: {
								name: "DOCS",
								params: {
									alias: "help"
								}
							}
						}, {
							name: this.msg("NAV_FOR_AUTHORS"),
							link: {
								name: "DOCS_ARTICLE",
								params: {
									alias: "authors",
									articleAlias: "codex"
								}
							}
						}, {
							name: this.msg("NAV_FOR_COMPANIES"),
							link: {
								name: "DOCS_ARTICLE",
								params: {
									alias: "companies",
									articleAlias: "corpblogs"
								}
							}
						}, {
							name: this.msg("NAV_DOCUMENTS"),
							link: {
								name: "DOCS_ARTICLE",
								params: {
									alias: "docs",
									articleAlias: "transparency"
								}
							}
						}, {
							name: this.msg("NAV_AGREEMENT"),
							link: pt + "/info/agreement",
							target: "_blank"
						}, {
							name: this.msg("NAV_CONFIDENTIAL"),
							link: pt + "/info/confidential/",
							target: "_blank"
						}]
					}, {
						name: this.msg("NAV_SERVICE"),
						items: [{
							name: this.msg("NAV_CORPORATE_BLOGS"),
							link: `${_t}/${this.langOptions.hl}/corporate-blogs/`,
							target: "_blank"
						}, {
							name: this.msg("NAV_MEDIA_ADVERTISING"),
							link: `${_t}/${this.langOptions.hl}/advertising/`,
							target: "_blank"
						}, {
							name: this.msg("NAV_SPECIAL_PROJECTS"),
							link: `${_t}/${this.langOptions.hl}/native-special/`,
							target: "_blank"
						}, {
							name: this.msg("NAV_EDUCATION_PROGRAMS"),
							link: `${_t}/${this.langOptions.hl}/education-programs/`,
							target: "_blank"
						}, {
							name: this.msg("NAV_MEGAPROJECTS"),
							link: {
								name: "MEGAPROJECTS"
							}
						}]
					}]
				}
			}
		},
			gt = ht,
			ft = (s("e49f"), Object(L["a"])(gt, mt, dt, !1, null, null, null)),
			bt = ft.exports,
			Tt = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("transition", {
					attrs: {
						name: "fade"
					}
				}, [s("header", {
					staticClass: "tm-header",
					class: t.className,
					attrs: {
						"data-header-sticky": t.isMobilePwa && !t.isSticky
					}
				}, [s("TMPageWidth", [s("div", {
					staticClass: "tm-header__container"
				}, [t.isMobile && !t.isTablet ? s("div", {
					staticClass: "tm-header__burger-nav"
				}, [t.isArticlePage && t.isPwa ? s("button", {
					staticClass: "tm-header__button tm-header__button_back",
					attrs: {
						type: "button"
					},
					on: {
						click: t.goBack
					}
				}, [s("TMSvgImg", {
					staticClass: "icon_arrow-back",
					attrs: {
						id: "arrow-back"
					}
				})], 1) : t.isConversationPage ? s("router-link", {
					staticClass: "tm-header__button tm-header__button_back",
					attrs: {
						to: t.toConversations
					}
				}, [s("TMSvgImg", {
					staticClass: "icon_arrow-back",
					attrs: {
						id: "arrow-back"
					}
				})], 1) : s("button", {
					staticClass: "tm-header__button tm-header__button_burger",
					attrs: {
						type: "button"
					},
					on: {
						click: function (e) {
							return t.$emit("showNavMenu")
						}
					}
				}, [s("TMSvgImg", {
					staticClass: "tm-header__icon tm-header__icon-burger",
					attrs: {
						id: "header-burger"
					}
				})], 1)], 1) : t._e(), t._v(" "), s("span", {
					staticClass: "tm-header__logo-wrap"
				}, [s("a", {
					staticClass: "tm-header__logo",
					class: "tm-header__logo_" + t.langOptions.hl,
					attrs: {
						href: t.homeUrl
					}
				}, [s("TMSvgImg", {
					staticClass: "tm-header__icon",
					attrs: {
						id: t.logoIcon
					}
				})], 1), t._v(" "), s("span", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.isUserBetaTester,
						expression: "isUserBetaTester"
					}],
					staticClass: "tm-header__beta-sign"
				}, [t._v("Î²")])]), t._v(" "), t.isDesktop || t.isTablet ? [t.isHlEnglish ? t._e() : s("TMDropdown", {
					staticClass: "tm-header__projects",
					class: {
						"tm-projects_extra-margin": t.isUserBetaTester
					},
					attrs: {
						align: "left",
						"body-offset": -67
					},
					scopedSlots: t._u([{
						key: "head",
						fn: function (t) {
							var e = t.toggle;
							return [s("button", {
								staticClass: "tm-header__dropdown-toggle",
								on: {
									click: e
								}
							}, [s("TMSvgImg", {
								staticClass: "tm-header__icon tm-header__icon_dropdown",
								attrs: {
									id: "arrow-down"
								}
							})], 1)]
						}
					}, {
						key: "body",
						fn: function () {
							return [s("TMOurProjects", {
								attrs: {
									"show-description": !0
								}
							})]
						},
						proxy: !0
					}], null, !1, 1364691637)
				}), t._v(" "), s("router-link", {
					staticClass: "tm-header__become-author-btn",
					class: {
						"tm-header__become-author-btn_extra-margin": t.isUserBetaTester
					},
					attrs: {
						to: {
							name: "MOST_IMPORTANT_SANBOX_INFO"
						}
					}
				}, [t._v("\n            " + t._s(t.msg("NAV_SANDBOX_BECOME_AUTHOR")) + "\n          ")]), t._v(" "), t.isFeatureShown ? s("TMFeature", {
					staticClass: "tm-header__feature",
					attrs: {
						variant: "inline"
					}
				}) : t._e(), t._v(" "), !t.isHlEnglish && t.isDesktop ? s("TMTopLink") : t._e()] : t._e(), t._v(" "), t.isTablet || t.isMobile ? s("TMHeaderUserMenu", {
					staticClass: "tm-header_user-menu"
				}) : t._e()], 2)])], 1)])
			},
			vt = [],
			Et = s("197e"),
			St = s("7b4a"),
			Ot = s("d089"),
			Ct = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return t.topLinkPost && t.topLinkPost.link.url ? s("a", {
					staticClass: "tm-top-link",
					style: "color: " + (t.topLinkPost.color || "#94E379"),
					attrs: {
						href: t.topLinkPost.link.url,
						target: "_blank"
					},
					on: {
						click: t.logTopLinkEvent
					}
				}, [t._v("\n  " + t._s(t.topLinkPost.title) + "\n")]) : t._e()
			},
			It = [],
			At = {
				name: "TMTopLink",
				data() {
					return {
						topLink: null
					}
				},
				computed: {
					...Object(g["c"])("i18n", ["msg", "langOptions"]),
					...Object(g["c"])("promoData", ["topLinkPost"])
				},
				watch: {
					topLinkPost: {
						immediate: !0,
						handler(t) {
							t && this.trackView()
						}
					}
				},
				methods: {
					logTopLinkEvent() {
						Object(O["c"])("habr_top_panel", "megaprojects", this.topLinkPost.link.url)
					},
					trackView() {
						const t = this.topLinkPost.events && this.topLinkPost.events.view;
						t && Object(j["b"])([t])
					}
				}
			},
			yt = At,
			Lt = (s("9c63"), Object(L["a"])(yt, Ct, It, !1, null, null, null)),
			Pt = Lt.exports,
			Nt = s("0e97"),
			Rt = {
				name: "TMHeader",
				components: {
					TMDropdown: Et["a"],
					TMFeature: $,
					TMSvgImg: ot["a"],
					TMOurProjects: Ot["a"],
					TMHeaderUserMenu: St["a"],
					TMTopLink: Pt,
					TMPageWidth: z["a"]
				},
				props: {
					isSticky: Boolean,
					isFeatureShown: Boolean
				},
				data() {
					return {
						showHeader: !0,
						lastScrollPosition: 0
					}
				},
				computed: {
					...Object(g["e"])("global", ["isPwa"]),
					...Object(g["c"])("global", ["isMobile", "isTablet", "isDesktop"]),
					...Object(g["c"])("me", ["isLoggedIn"]),
					...Object(g["c"])("i18n", ["langOptions"]),
					homeUrl() {
						return this.isPwa ? "/pwa" : `/${this.langOptions.hl}/`
					},
					logoIcon() {
						const {
							hl: t
						} = this.langOptions;
						return `/img/habr-logo-${t}.svg#logo`
					},
					isUserBetaTester() {
						const t = "",
							e = Object(c["a"])(t);
						return "true" === e
					},
					isArticlePage() {
						const t = ["ARTICLE", "ARTICLE_COMMENTS", "ARTICLE_COMMENTS_OF_COMPANY", "ARTICLE_COMMENTS_OF_MEGAPOST", "ARTICLE_MEGAPOST", "ARTICLE_OF_COMPANY", "NEWS_ARTICLE", "NEWS_OF_COMPANY", "NEWS_OF_COMPANY_COMMENTS", "NEWS_ARTICLE_COMMENTS"];
						return -1 !== t.indexOf(this.$route.name)
					},
					isConversationPage() {
						return "conversation" === this.$route.meta.pageType
					},
					isMobilePwa() {
						return this.isPwa && this.isMobile
					},
					toConversations() {
						return {
							name: "CONVERSATIONS",
							params: {
								hl: this.langOptions.hl
							}
						}
					},
					isHlEnglish() {
						return "en" === this.langOptions.hl
					},
					className() {
						return {
							"tm-header_sticky": this.isSticky,
							"tm-header_hidden": this.isSticky && !this.showHeader,
							"tm-header_fixed": !this.isSticky && this.isMobilePwa
						}
					}
				},
				watch: {
					isSticky: {
						handler(t) {
							this.$isServer || (t ? (this.lastScrollPosition = window.pageYOffset, window.addEventListener("scroll", this.onScroll, {
								passive: !0
							})) : window.removeEventListener("scroll", this.onScroll))
						},
						immediate: !0
					}
				},
				beforeDestroy() {
					window.removeEventListener("scroll", this.onScroll)
				},
				methods: {
					onScroll() {
						const t = window.pageYOffset || document.documentElement.scrollTop,
							e = Math.abs(t - this.lastScrollPosition);
						t < 0 || e < 120 || (this.showHeader = t < this.lastScrollPosition, this.lastScrollPosition = t)
					},
					goBack() {
						if (window.history && window.history.length > 1) this.$router.go(-1);
						else {
							const t = Object(Nt["a"])(this.langOptions);
							this.$router.push(t)
						}
					},
					onUserMenuLang() {
						this.$emit("lang")
					}
				}
			},
			Mt = Rt,
			wt = (s("30f2"), Object(L["a"])(Mt, Tt, vt, !1, null, null, null)),
			kt = wt.exports,
			jt = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", [t._t("default")], 2)
			},
			Dt = [],
			xt = {
				name: "TMLayoutMetaWrapper",
				computed: {
					...Object(g["c"])("me", ["rssKey"]),
					...Object(g["e"])("i18n", ["hl", "fl"]),
					...Object(g["e"])("desktopState", ["isChecked"]),
					scripts() {
						return this.$isServer || this.isChecked ? [] : [{
							onload: "window['e0044d29c024'] = true",
							src: "https://localhost:7103/auth/checklogin/",
							vmid: "checklogin"
						}]
					},
					pageTitlePart() {
						return this.$route.meta.title ? this.msg(this.$route.meta.title, this.$route.params) : ""
					},
					rssFullRoute() {
						const {
							params: t,
							query: e,
							meta: {
								rssLink: s
							}
						} = this.$route, n = {
							...t,
							...e,
							fl: this.fl,
							hl: this.hl,
							...this.rssKey ? {
								rssKey: this.rssKey
							} : {}
						}, a = new URL(`https://localhost:7103/${this.hl}${s(n)}`);
						return a.searchParams.append("fl", this.fl), a.href
					}
				},
				metaInfo() {
					const t = [];
					return this.$route.meta.rssLink && t.push({
						href: this.rssFullRoute,
						type: "application/rss+xml",
						title: this.pageTitlePart,
						rel: "alternate",
						name: "rss"
					}), {
						htmlAttrs: {
							lang: this.hl
						},
						link: t,
						script: this.scripts,
						__dangerouslyDisableSanitizersByTagID: {
							checkad: ["onload"],
							checklogin: ["onload"]
						}
					}
				}
			},
			Bt = xt,
			$t = Object(L["a"])(Bt, jt, Dt, !1, null, null, null),
			Ft = $t.exports,
			Gt = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-main-menu"
				}, [t.flows.length ? s("div", {
					staticClass: "tm-main-menu__section"
				}, [s("nav", {
					staticClass: "tm-main-menu__section-content"
				}, [t.isLoggedIn ? s("router-link", {
					staticClass: "tm-main-menu__item",
					attrs: {
						"active-class": "tm-main-menu__item_active",
						event: "",
						to: t.routes.feed
					},
					nativeOn: {
						click: function (e) {
							return function (e) {
								return t.pushRouteTo(t.routes.feed, e)
							}.apply(null, arguments)
						}
					}
				}, [t._v("\n        " + t._s(t.msg("NAV_MY_FEED")) + "\n      ")]) : t._e(), t._v(" "), s("router-link", {
					staticClass: "tm-main-menu__item",
					class: {
						"tm-main-menu__item_active": t.allFlowsLinkActive
					},
					attrs: {
						"active-class": "tm-main-menu__item_active",
						event: "",
						to: t.routes.articles
					},
					nativeOn: {
						click: function (e) {
							return function (e) {
								return t.pushRouteTo(t.routes.articles, e)
							}.apply(null, arguments)
						}
					}
				}, [t._v("\n        " + t._s(t.msg("NAV_FLOWS_ALL")) + "\n      ")]), t._v(" "), t._l(t.flows, (function (e) {
					return [t.i18nFlows[e.alias] ? s("router-link", {
						key: e.id,
						staticClass: "tm-main-menu__item",
						attrs: {
							"active-class": "tm-main-menu__item_active",
							event: "",
							to: e.route
						},
						nativeOn: {
							click: function (s) {
								return function (s) {
									return t.pushRouteTo(e.route, s)
								}.apply(null, arguments)
							}
						}
					}, [t._v("\n          " + t._s(t.msg(t.i18nFlows[e.alias])) + "\n        ")]) : t._e()]
				}))], 2)]) : t._e()])
			},
			Ut = [];
		const Vt = (t, e) => Object.keys(t).every(s => t[s] === e[s]);
		var Wt = {
			name: "TMMainMenu",
			data() {
				return {
					swipeListener: null,
					i18nFlows: {
						admin: "NAV_FLOW_ADMIN",
						design: "NAV_FLOW_DESIGN",
						develop: "NAV_FLOW_DEVELOP",
						popsci: "NAV_FLOW_POPSCI",
						management: "NAV_FLOW_MANAGEMENT",
						marketing: "NAV_FLOW_MARKETING",
						misc: "NAV_FLOW_MISC",
						geektimes: "NAV_FLOW_GEEKTIMES"
					}
				}
			},
			computed: {
				...Object(g["e"])("flows", ["flows"]),
				...Object(g["c"])("i18n", ["msg", "langOptions"]),
				...Object(g["c"])("me", ["isLoggedIn"]),
				...Object(g["c"])("global", ["isDesktop"]),
				isFlEnglish() {
					return "en" === this.langOptions.fl
				},
				isHLEnglish() {
					return "en" === this.langOptions.hl
				},
				routes() {
					const t = {
						hl: this.langOptions.hl
					};
					return {
						articles: {
							name: this.isLoggedIn ? "ALL_FLOWS" : "ARTICLES_LIST_ALL",
							params: t
						},
						feedback: {
							name: "FEEDBACK",
							params: t
						},
						feed: {
							name: "ARTICLES_LIST_FEED",
							params: t
						},
						help: {
							name: "DOCS",
							params: {
								alias: "help",
								...t
							}
						},
						megaprojects: {
							name: "MEGAPROJECTS",
							params: t
						}
					}
				},
				allFlowsLinkActive() {
					return this.$route.matched.some(t => "INDEX" === t.name)
				}
			},
			methods: {
				...Object(g["b"])("pullRefresh", ["toggleRefresh"]),
				pushRouteTo(t, e) {
					if (e.metaKey || e.ctrlKey || e.shiftKey) return;
					e.preventDefault();
					const s = {
						FLOW_PAGE: "ARTICLES_LIST_BY_FLOW_ALL",
						ALL_FLOWS: "ARTICLES_LIST_ALL"
					},
						n = s[t.name],
						a = this.$router.resolve(t).route,
						i = n || a.name,
						o = this.$route.name === i && Vt(a.params, this.$route.params);
					o ? (window.scrollTo({
						top: 0
					}), this.toggleRefresh(!0)) : this.$router.push(t).catch(() => { })
				}
			}
		},
			Ht = Wt,
			Yt = (s("966b"), Object(L["a"])(Ht, Gt, Ut, !1, null, null, null)),
			qt = Yt.exports,
			Kt = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-notification",
					class: t.inlineClass + " " + t.staticClass + " " + t.layoutClass
				}, [t._t("default")], 2)
			},
			zt = [],
			Xt = {
				name: "TMNotification",
				props: {
					inline: Boolean,
					static: Boolean,
					layout: {
						default: "full",
						type: String
					}
				},
				computed: {
					inlineClass() {
						return this.inline ? "tm-notification_inline" : ""
					},
					staticClass() {
						return this.static ? "tm-notification_static" : ""
					},
					layoutClass() {
						return "tm-notification_" + this.layout
					}
				}
			},
			Jt = Xt,
			Qt = (s("d067"), Object(L["a"])(Jt, Kt, zt, !1, null, null, null)),
			Zt = Qt.exports,
			te = s("ff3c"),
			ee = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMErrorMessage", {
					scopedSlots: t._u([{
						key: "title",
						fn: function () {
							return [t._v("\n    " + t._s(t.errorTitle) + "\n  ")]
						},
						proxy: !0
					}, {
						key: "message",
						fn: function () {
							return [s("p", {
								domProps: {
									innerHTML: t._s(t.errorMessage)
								}
							}), t._v(" "), !t.isPwa && t.errorAction ? s("TMButtonBase", {
								staticClass: "tm-error__refresh",
								attrs: {
									"style-size": "large",
									"style-type": "transparent",
									type: "button"
								},
								on: {
									click: t.errorAction.action
								}
							}, [t._v("\n      " + t._s(t.errorAction.text) + "\n    ")]) : t._e(), t._v(" "), t.errorActionAlternative ? s("a", {
								staticClass: "tm-error__link",
								attrs: {
									href: "#"
								},
								on: {
									click: t.errorActionAlternative.action
								}
							}, [t._v("\n      " + t._s(t.errorActionAlternative.text) + "\n    ")]) : t._e()]
						},
						proxy: !0
					}])
				})
			},
			se = [],
			ne = s("9044"),
			ae = s("f2a8"),
			ie = s("d0ec"),
			oe = {
				name: "TMPageError",
				components: {
					TMButtonBase: v["a"],
					TMErrorMessage: ae["a"]
				},
				props: {
					error: {
						type: [Object, Error],
						required: !0
					}
				},
				computed: {
					...Object(g["e"])("global", ["isPwa"]),
					...Object(g["e"])("me", ["user"]),
					...Object(g["c"])("me", ["isLoggedIn"]),
					draftParams() {
						return {
							userProfileLink: this.getUserProfileLink(this.error.data.author.login),
							userName: this.error.data.author.login
						}
					},
					userLogoutHash() {
						return this.user && this.user.crc32
					},
					errorMessage() {
						if ("TimeoutError" === this.error.name) return this.getTranslation("ERROR_PAGE_MESSAGE_TIMEOUT");
						if (ie["a"].is403WithReason(this.error)) return this.getTranslation("ERROR_PAGE_MESSAGE_ARTICLE_" + this.error.data.reason, this.draftParams);
						if (ie["a"].is403Error(this.error.code)) {
							if (this.error.additional) {
								if (Array.isArray(this.error.additional) && 1 === this.error.additional.length && this.error.message) return "COMPANY_ACCESS_LIMIT" === this.error.additional[0] ? this.getTranslation("ERROR_PAGE_TITLE_UNAUTHORIZED") : this.getTranslation("ERROR_PAGE_" + this.error.additional[0]);
								if ("USER_INACTIVE" === this.error.additional.reasonKey) {
									const t = -1 !== this.$route.name.indexOf("USER_") ? "ERROR_PAGE_MESSAGE_USER_PROFILE_INACTIVE" : "ERROR_PAGE_MESSAGE_ARTICLE_USER_INACTIVE",
										e = this.error.additional.author.alias,
										s = this.$router.resolve({
											name: "USER_PROFILE",
											params: {
												hl: this.langOptions.hl,
												login: e
											}
										});
									return this.getTranslation(t, {
										userProfileLink: s.href,
										userName: e
									})
								}
							}
							return this.getTranslation("ERROR_PAGE_TITLE_ARTICLE_IN_DRAFTS")
						}
						return ie["a"].is401Error(this.error.code) ? this.getTranslation("ERROR_PAGE_MESSAGE_NOT_AUTHORIZED") : ie["a"].is4xxError(this.error.code) ? this.getTranslation("ERROR_PAGE_MESSAGE_NOT_FOUND") : this.error.message ? this.error.message : ""
					},
					errorTitle() {
						return "TimeoutError" === this.error.name ? this.getTranslation("ERROR_PAGE_TITLE_TIMEOUT") : ie["a"].is403WithReason(this.error) ? this.getTranslation("ERROR_PAGE_TITLE_ARTICLE_" + this.error.data.reason) : ie["a"].is403Error(this.error.code) ? this.getTranslation("ERROR_PAGE_TITLE_UNAUTHORIZED") : ie["a"].is401Error(this.error.code) ? this.getTranslation("ERROR_PAGE_TITLE_NOT_AUTHORIZED") : ie["a"].is4xxError(this.error.code) ? this.getTranslation("ERROR_PAGE_TITLE_NOT_FOUND") : this.getTranslation("ERROR_PAGE_TITLE_INTERNAL")
					},
					errorAction() {
						return "TimeoutError" === this.error.name ? {
							text: this.getTranslation("ERROR_PAGE_REFRESH"),
							action: this.reloadThePage
						} : ie["a"].is403Error(this.error.code) || ie["a"].is403WithReason(this.error) || ie["a"].is4xxError(this.error.code) ? {
							text: this.getTranslation("ERROR_PAGE_BACK_TO_MAIN"),
							action: this.backToMainPage
						} : ie["a"].is401Error(this.error.code) ? {
							text: this.getTranslation("ERROR_PAGE_AUTH"),
							action: () => {
								const {
									hl: t
								} = this.langOptions, e = this.$route.path;
								window.location.href = `/kek/v1/auth/habrahabr/?back=${e}&hl=${t}`
							}
						} : null
					},
					errorActionAlternative() {
						return this.errorAction && this.errorAction.text === this.getTranslation("ERROR_PAGE_BACK_TO_MAIN") ? null : ie["a"].is401Error(this.error.code) ? {
							text: this.getTranslation("ERROR_PAGE_BACK_TO_MAIN"),
							action: () => {
								const {
									hl: t
								} = this.langOptions;
								window.location.href = `/kek/v1/auth/logout2/${this.userLogoutHash}/?back=/${t}/all`
							}
						} : null
					}
				},
				beforeMount() {
					const {
						code: t,
						additional: e = []
					} = this.error || {};
					401 === t && -1 !== e.indexOf("TOKEN_PROBLEM") && (this.setUser(null), this.init(!0), this.reset()), 403 === t && -1 !== e.indexOf("SUBSCRIPTIONS_ARE_EMPTY") && this.isLoggedIn && this.$router.push({
						name: "MY_FEED_SETTINGS"
					})
				},
				mounted() {
					ie["a"].is401Error(this.error.code) && i["e"](t => {
						t.setTag("error_type", this.error.code), t.setUser(this.user), t.setLevel("warning"), i["b"]("NOT_AUTHORIZED_401", {
							extra: this.error,
							contexts: this.error
						})
					})
				},
				methods: {
					...Object(g["d"])("me", ["setUser"]),
					...Object(g["b"])("me", ["init"]),
					...Object(g["b"])("ssr", ["reset"]),
					getTranslation(t, e) {
						if (e) return this.msg(t, e);
						const {
							hl: s
						} = this.langOptions;
						return s ? ne[s][t] : ne["en"][t]
					},
					getUserProfileLink(t) {
						return `/${this.langOptions.hl}/users/${t}/`
					},
					backToMainPage() {
						this.isPwa ? window.location = "/pwa" : window.location = "/"
					}
				}
			},
			re = oe,
			ce = Object(L["a"])(re, ee, se, !1, null, null, null),
			le = ce.exports,
			ue = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-page-progress-bar",
					class: t.className
				})
			},
			me = [],
			de = {
				name: "TMPageProgressBar",
				props: {
					isFinished: Boolean,
					isProcessing: Boolean
				},
				data() {
					return {
						haveJustFinished: !1
					}
				},
				computed: {
					className() {
						return {
							"tm-page-progress-bar_finished": this.haveJustFinished,
							"tm-page-progress-bar_processing": this.isProcessing
						}
					}
				},
				watch: {
					isFinished(t, e) {
						t && !e && (this.haveJustFinished = !0, setTimeout(() => {
							this.haveJustFinished = !1
						}, 300))
					}
				}
			},
			pe = de,
			_e = (s("125c"), Object(L["a"])(pe, ue, me, !1, null, null, null)),
			he = _e.exports,
			ge = s("badd"),
			fe = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return t.isDesktop && (t.scrolledEnough || t.shouldRestoreScroll) ? s("button", {
					staticClass: "tm-scroll-top",
					on: {
						click: t.performScroll
					}
				}, [s("TMSvgIcon", {
					staticClass: "tm-scroll-top__arrow",
					class: {
						"tm-scroll-top__arrow_reverted": t.shouldRestoreScroll
					},
					attrs: {
						id: "small-arrow",
						tag: "span",
						title: t.shouldRestoreScroll ? t.msg("NAV_DOWN") : t.msg("NAV_UP")
					}
				})], 1) : t._e()
			},
			be = [];
		const Te = 100;
		var ve = {
			name: "TMScrollTop",
			components: {
				TMSvgIcon: tt["a"]
			},
			data() {
				return {
					storedScrollPosition: 0,
					lastScrollPosition: 0,
					shouldRestoreScroll: !1,
					scrolledEnough: !1
				}
			},
			computed: {
				...Object(g["c"])("global", ["isDesktop"])
			},
			mounted() {
				requestAnimationFrame(() => {
					this.handleScroll(), window.addEventListener("scroll", this.handleScroll, {
						passive: !0
					})
				})
			},
			beforeDestroy() {
				window.removeEventListener("scroll", this.handleScroll)
			},
			methods: {
				performScroll() {
					let t = 0;
					this.shouldRestoreScroll ? (t = this.storedScrollPosition, this.storedScrollPosition = 0) : this.storedScrollPosition = document.scrollingElement.scrollTop, this.shouldRestoreScroll = !this.shouldRestoreScroll, window.scrollTo({
						top: t,
						left: 0,
						behavior: "smooth"
					})
				},
				handleScroll() {
					const {
						scrollTop: t
					} = document.scrollingElement;
					this.scrolledEnough = t > Te, this.lastScrollPosition < t && this.shouldRestoreScroll && (this.shouldRestoreScroll = !1), this.lastScrollPosition = t
				}
			}
		},
			Ee = ve,
			Se = (s("987a"), Object(L["a"])(Ee, fe, be, !1, null, null, null)),
			Oe = Se.exports,
			Ce = s("7bf9");
		const Ie = () => Promise.resolve().then(s.bind(null, "aa3f")),
			Ae = () => s.e("chunk-4f0b0fdc").then(s.bind(null, "9bba")),
			ye = () => s.e("chunk-223b1983").then(s.bind(null, "3eb1f")),
			Le = () => s.e("chunk-4a00ea15").then(s.bind(null, "70ef"));

		function Pe(t) {
			const e = /https?:\/\/((?:[\w\d-]+\.)+[\w\d]{2,})/i;
			return e.exec(t)
		}
		var Ne = {
			components: {
				TMPageError: le,
				TMPage: te["a"],
				TMBurgerMenu: Ae,
				TMPageWidth: z["a"],
				TMHeaderUserMenu: St["a"],
				TMScrollLockTransition: J["a"],
				TMPopup: ge["a"],
				TMUserNotice: Le,
				TMButtonBase: v["a"],
				TMDatetime: R["a"],
				TMFeature: $,
				TMFooter: ut,
				TMFooterMenu: bt,
				TMAnalytics: N,
				TMHeader: kt,
				TMHotKeys: ye,
				TMLayoutMetaWrapper: Ft,
				TMMainMenu: qt,
				TMNotification: Zt,
				TMPageProgressBar: he,
				TMPopupPayments: Ie,
				TMScrollTop: Oe,
				TMSidebar: Ce["a"]
			},
			data() {
				return {
					isFeatureBeta: !1,
					shouldOpenLangSettings: !1,
					shouldOpenPayments: !1,
					showRefreshNotice: !1,
					cacheTime: null,
					showCacheNotice: !1,
					showNewVersionNotice: !1,
					isHeaderSticky: !1,
					showHotKeysPopup: !1,
					navMenuVisible: !1
				}
			},
			computed: {
				...Object(g["e"])("navMenu", {
					isMainMenuOpened: "isOpened",
					mainMenuDelta: "delta"
				}),
				...Object(g["e"])("ssr", ["isDataLoaded", "isDataLoading"]),
				...Object(g["c"])("ssr", ["error"]),
				...Object(g["c"])("global", ["isMobile", "isTablet", "isDesktop"]),
				...Object(g["c"])("me", ["isLoggedIn", "notices"]),
				...Object(g["e"])("global", ["isPwa"]),
				ppgError() {
					return Array.isArray(this.error.additional) && -1 !== this.error.additional.indexOf("PPG_REQUIRED")
				},
				className() {
					return {
						"tm-layout__wrapper_white": this.isDotnetPage && !this.isMobile
					}
				},
				isDotnetPage() {
					return "dotnet" === this.$route.params.topic
				},
				isFeatureShown() {
					return "en" !== this.langOptions.fl && !this.isPwa
				},
				isBlankPage() {
					return "blank" === this.$route.meta.pageType
				},
				isConversationPage() {
					return "conversation" === this.$route.meta.pageType
				},
				isFooterHidden() {
					return this.isBlankPage || this.isConversationPage
				},
				isDisplayStandalone() {
					return window.matchMedia("(display-mode: standalone)").matches || !0 === window.navigator.standalone
				},
				showUserNotices() {
					return !this.$route.meta.hideUserNotices
				}
			},
			watch: {
				$route: {
					handler(t) {
						this.isHeaderSticky = "sticky" === t.meta.header, this.shouldOpenLangSettings = !1, this.shouldOpenPayments = !1
					},
					immediate: !0
				}
			},
			mounted() {
				this.$nextTick(() => {
					this.checkNewVersionNotice()
				}), this.isDisplayStandalone && this.initPwaMode(), this.initViewport(), window.addEventListener("appinstalled", () => {
					Object(O["c"])("pwa", "add"), this.initPwaMode()
				}), document.addEventListener("showRefreshNotice", () => {
					this.showRefreshNotice = !0
				}, {
					once: !0
				}), document.addEventListener("showCacheNotice", t => {
					this.cacheTime = parseInt(t.detail, 10), this.showCacheNotice = !0, document.addEventListener("click", this.blockOpeningExternalLink)
				}), document.addEventListener("hideCacheNotice", () => {
					this.cacheTime = null, this.showCacheNotice = !1, document.removeEventListener("click", this.blockOpeningExternalLink)
				}), window.addEventListener("offline", () => {
					this.cacheTime = new Date, this.showCacheNotice = !0
				}), window.addEventListener("online", () => {
					this.showCacheNotice = !1
				}), window.addEventListener("beforeinstallprompt", t => (t.preventDefault(), !1))
			},
			methods: {
				...Object(g["b"])("me", ["init"]),
				...Object(g["b"])("viewport", {
					initViewport: "init"
				}),
				...Object(g["b"])("global", ["initPwaMode"]),
				...Object(g["b"])("desktopState", ["checkDesktopState"]),
				checkNewVersionNotice() {
					const t = !1;
					if (!t) return void (this.showNewVersionNotice = !1);
					const e = navigator.doNotTrack || navigator.cookieEnabled,
						s = "",
						n = s && Boolean(s.length),
						a = Object(c["a"])(s) || localStorage.getItem(s) || "";
					this.showNewVersionNotice = e && n && -1 === ["true", "false"].indexOf(a)
				},
				onPaymentsForm() {
					this.shouldOpenPayments = !0
				},
				reloadThePage() {
					this.isPwa ? window.location = "/pwa" : window.location.reload(!0)
				},
				setBetaTestCookie(t) {
					const e = "";
					Object(c["c"])(e, t, {
						expires: 90
					}), localStorage.setItem(e, t), this.reloadThePage()
				},
				blockOpeningExternalLink(t) {
					const {
						target: e
					} = t;
					if ("A" === e.tagName || "A" === e.parentNode.tagName) {
						const {
							href: s
						} = e.closest("a"), n = Pe(s), a = Pe(document.location.href);
						n !== a && (t.preventDefault(), this.$toast.warning(this.msg("ERROR_PAGE_MESSAGE_NO_INTERNET_LINK")))
					}
				},
				toggleHotKeysPopup() {
					this.showHotKeysPopup = !this.showHotKeysPopup
				}
			}
		},
			Re = Ne,
			Me = (s("58ba"), Object(L["a"])(Re, b, T, !1, null, null, null)),
			we = Me.exports,
			ke = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("main", {
					staticClass: "tm-layout"
				}, [s("router-view")], 1)
			},
			je = [],
			De = {},
			xe = Object(L["a"])(De, ke, je, !1, null, null, null),
			Be = xe.exports,
			$e = s("02c5"),
			Fe = s("9f2e"),
			Ge = s("e783");
		const Ue = t => "ru" === t ? "en" : "ru";
		var Ve = {
			components: {
				TMBaseLayout: we,
				TMEmptyLayout: Be
			},
			asyncData({
				store: t
			}) {
				return t.dispatch("flows/loadFlows")
			},
			data() {
				return {
					isCroppedByOverlay: !1,
					isLoadingI18n: !1,
					hasHydrated: !1
				}
			},
			computed: {
				...Object(g["c"])("me", ["isLoggedIn", "userAlias"]),
				...Object(g["c"])("i18n", ["langOptions", "currentLocale", "pageTitle"]),
				...Object(g["c"])("global", ["isHabrCom"]),
				currentLayout() {
					return `TM-${this.$route.meta.layout || "base"}-layout`
				},
				defaultPreviewImage() {
					return "ru" === this.langOptions.hl ? "/img/habr_ru.png" : "/img/habr_en.png"
				},
				staticPageMeta() {
					return [...Object(f["e"])(this.defaultPreviewImage), {
						property: "fb:app_id",
						content: "444736788986613"
					}, {
						property: "fb:pages",
						content: "472597926099084"
					}, {
						name: "twitter:card",
						content: "summary_large_image"
					}, {
						name: "twitter:site",
						content: "ru" === this.langOptions.hl ? "@habr_com" : "@habr_eng"
					}, {
						property: "og:locale",
						content: this.currentLocale,
						vmid: "og:locale"
					}, {
						property: "og:type",
						content: "website",
						vmid: "og:type"
					}, {
						property: "og:site_name",
						content: "ru" === this.langOptions.hl ? "Ð¥Ð°Ð±Ñ€" : "Habr",
						vmid: "og:site_name"
					}]
				},
				pageMetaTitle() {
					const {
						title: t
					} = this.$route.meta || {};
					return t ? this.msg(t, this.$route.params) : void 0
				},
				pageMeta() {
					const {
						description: t,
						noindex: e
					} = this.$route.meta, s = [...this.staticPageMeta], {
						href: n
					} = this.$router.resolve({
						name: this.$route.name,
						params: this.$route.params
					});
					return e && s.push({
						name: "robots",
						content: "noindex",
						vmid: "robots"
					}), t && (s.push({
						name: "description",
						content: this.msg(t, this.$route.params),
						vmid: "description"
					}), s.push({
						property: "og:description",
						content: this.msg(t, this.$route.params),
						vmid: "og:description"
					})), s.push({
						property: "og:title",
						content: this.pageTitle(this.pageMetaTitle),
						vmid: "og:title"
					}, {
						property: "og:url",
						content: Object($e["a"])(n),
						vmid: "og:url"
					}), s
				},
				pageMetaLinks() {
					const t = [{
						image_src: "image",
						href: this.defaultPreviewImage,
						vmid: "image:href"
					}];
					let {
						href: e
					} = this.$router.resolve({
						name: this.$route.name,
						params: this.$route.params
					});
					if (this.$route.meta.canonicalRoute) e = this.$router.resolve({
						name: this.$route.meta.canonicalRoute,
						params: this.$route.params
					}).href;
					else if (this.$route.name && this.$route.name.match(/_PAGES$/)) {
						const {
							matched: t,
							params: s
						} = this.$route, n = t[t.length - 2];
						e = this.$router.resolve({
							...n,
							params: s
						}).href
					}
					t.push({
						href: Object($e["a"])(e),
						rel: "canonical",
						vmid: "canonical"
					});
					const s = [],
						{
							isHabrCom: n
						} = this;
					if (n) {
						const t = this.$router.resolve({
							...this.$route,
							params: {
								...this.$route.params,
								hl: Ue(this.$route.params.hl)
							}
						});
						s.push({
							href: "https://localhost:7103" + this.$route.path,
							hreflang: this.$route.params.hl,
							rel: "alternate",
							vmid: "hreflang"
						}), s.push({
							href: "https://localhost:7103" + t.href,
							hreflang: Ue(this.$route.params.hl),
							rel: "alternate",
							vmid: "hreflang"
						})
					}
					return [...t, ...s]
				}
			},
			watch: {
				$route(t, e) {
					t.path !== e.path && (this.getUnreadConversations(), this.loadPromoData())
				}
			},
			mounted() {
				this.hasHydrated = !0;
				const t = Object(c["a"])("hl"),
					e = Object(c["a"])("fl"),
					{
						fl: s,
						hl: n
					} = this.langOptions;
				n !== t && Object(c["c"])("hl", n, {
					expires: 365
				}), s !== e && Object(c["c"])("fl", s, {
					expires: 365
				}), window.addEventListener("message", t => {
					this.validEmbedOrigin(t) && (t.data && t.data.type && "embed-size" === t.data.type && this.resizeIframe(t.data), t.data && t.data.type && "embed-scroll" === t.data.type && this.scrollToIframe(t.data), t.data && t.data.type && "request-user" === t.data.type && this.sendUser(t))
				}), this.$route.hash !== "#" + Fe["a"] && (window.history.scrollRestoration = "auto"), this.getUnreadConversations(), this.loadPromoData()
			},
			metaInfo() {
				return {
					title: this.pageMetaTitle,
					titleTemplate: t => this.pageTitle(t),
					link: this.pageMetaLinks,
					meta: this.pageMeta
				}
			},
			methods: {
				...Object(g["b"])("conversations", ["setUnreadCount"]),
				...Object(g["b"])("promoData", ["loadPromoData"]),
				getUnreadConversations() {
					this.isLoggedIn && Object(Ge["c"])().then(t => {
						this.setUnreadCount(t)
					}).catch(t => {
						throw t
					})
				},
				resizeIframe(t) {
					const e = t.id,
						s = document.querySelectorAll(`[id="${e}"]`);
					for (let n = 0; n < s.length; n += 1) s[n].height = t.height
				},
				scrollToIframe(t) {
					const e = t.id,
						s = document.querySelector(`[id="${e}"]`);
					if (s) {
						const t = s.getBoundingClientRect().top + window.pageYOffset - 56;
						window.scrollTo({
							top: t,
							behavior: "smooth"
						})
					}
				},
				sendUser(t) {
					t.source.postMessage({
						type: "user",
						alias: this.userAlias
					}, t.origin)
				},
				validEmbedOrigin(t) {
					return "https://localhost:7103/embedd-srv-habr" === t.origin
				}
			}
		},
			We = Ve,
			He = (s("5c0b"), Object(L["a"])(We, _, h, !1, null, null, null)),
			Ye = He.exports,
			qe = s("116c"),
			Ke = s("2bf7"),
			ze = s("2105"),
			Xe = s("4dcc");

		function Je(t) {
			return Object(ze["c"])(Object(Xe["a"])("fbi/"), t)
		}
		var Qe = s("a9a2");

		function Ze(t, e) {
			const s = e.getters["i18n/langOptions"],
				{
					hl: n
				} = s;
			if (t.params.hl !== n) return t.name && "ERROR_NOT_FOUND" !== t.name ? {
				params: {
					...t.params,
					hl: n
				},
				name: t.name,
				query: t.query
			} : {
				path: `/${n}${t.fullPath}`,
				query: t.query
			};
			const a = "/" === t.path[t.path.length - 1];
			return a ? null : {
				path: t.path + "/",
				query: t.query
			}
		}

		function ts(t, e) {
			t.beforeEach((t, s, n) => {
				const a = {
					FLOW_PAGE: "ARTICLES_LIST_BY_FLOW_ALL",
					ALL_FLOWS: "ARTICLES_LIST_ALL",
					NEWS_LIST_BY_FLOW: "NEWS_LIST_BY_FLOW_ALL",
					NEWS: "NEWS_LIST_ALL"
				},
					{
						name: i,
						params: o,
						hash: r
					} = t,
					l = o.flowName || "all",
					u = i && i.startsWith("NEWS"),
					m = Boolean(e.state.me.user),
					d = a[i];
				if (!d) return n();
				if (!m) return n({
					name: d,
					params: o,
					hash: r
				});
				const p = Object(Qe["buildCookieName"])({
					flowName: l,
					isNews: u
				}),
					_ = Object(c["a"])(p),
					h = `/${o.hl}${_}${r || ""}`;
				return n(_ ? {
					path: h
				} : {
					name: d,
					params: o,
					hash: r
				})
			})
		}

		function es(t, e) {
			t.beforeEach((t, s, n) => {
				const a = t.matched.reduce((t, e) => Array.isArray(e.meta.groups) ? [...t, ...e.meta.groups] : t, []),
					i = `/${t.params.hl}/404/`;
				if (a.length) {
					if (!e.state.me.user) return n({
						path: i
					});
					if (!a.every(t => e.state.me.user.groups.includes(t))) return n({
						path: i
					})
				}
				if (t.matched.some(t => t.meta.requiresAuth) && (e.state.me.user || e.dispatch("desktopState/checkDesktopState").then(() => {
					if (e.state.desktopState.isLoginDemanded) {
						const {
							hl: s
						} = e.state.i18n;
						Object(Ke["a"])(`/kek/v1/auth/habrahabr/?back=${t.path}&hl=${s}`)
					} else e.commit("ssr/setError", {
						code: 401
					})
				})), "/" !== s.path) {
					const s = Ze(t, e);
					return s ? n(s) : n()
				}
				return n()
			}), ts(t, e), t.afterEach((t, s) => {
				const n = "undefined" !== typeof window;
				e.dispatch("location/updateUrl", {
					route: t
				});
				const {
					error: a
				} = e.state.ssr, i = a && Array.isArray(a.additional) && -1 !== a.additional.indexOf("PPG_REQUIRED");
				if (a && !i && (e.dispatch("ssr/reset"), e.dispatch("ssr/markDataLoading")), e.state.me && e.state.me.user && n) {
					const {
						path: t
					} = e.state.location.urlStruct;
					Je({
						url: t
					}).catch(t => qe["a"].notifyException(t))
				}
				Object.assign(t.meta, {
					prevFullPath: s.fullPath
				})
			})
		}
		var ss = s("8c4f");
		const ns = () => s.e("page-error").then(s.bind(null, "9ce4")),
			as = (t, e, s) => {
				const n = {
					geektimes: "geektimes",
					mozg: "megamozg"
				};
				return Object(ze["b"])(Object(Xe["a"])(`migrated/${n[t]}/${e}/${s}`), null).then(({
					data: t
				}) => {
					const s = ["company", "hub", "post", "sandbox"];
					return "habrahabr" === t.target && -1 !== s.indexOf(e) ? Promise.resolve({
						pageType: e,
						targetId: t.target_alias || t.target_id
					}) : Promise.resolve(null)
				})
			},
			is = (t, e, s, n, a) => {
				const {
					hl: i
				} = t.params, o = t.fullPath.split("/")[2];
				return as(o, s, n).then(s => {
					if (s) {
						const n = t.params.pathMatch || "",
							a = t.params.rss ? "/rss" : "";
						return e({
							path: `/${i}${a}/${s.pageType}/${s.targetId}/${n}`
						})
					}
					return e()
				}).catch(t => (a.dispatch("ssr/showError", {
					error: t
				}), e(t)))
			},
			os = t => [{
				path: "company/:alias/*",
				component: ns,
				beforeEnter: (e, s, n) => is(e, n, "company", e.params.alias, t),
				props: {
					error: "redirect"
				}
			}, {
				path: "company/:alias/blog/:id/",
				component: ns,
				beforeEnter: (e, s, n) => is(e, n, "post", e.params.id, t),
				props: {
					error: "redirect"
				}
			}, {
				path: "hub/:alias/*",
				component: ns,
				beforeEnter: (e, s, n) => is(e, n, "hub", e.params.alias, t),
				props: {
					error: "redirect"
				}
			}, {
				path: "post/:id/",
				component: ns,
				beforeEnter: (e, s, n) => is(e, n, "post", e.params.id, t),
				props: {
					error: "redirect"
				}
			}, {
				path: "p/:id/",
				component: ns,
				beforeEnter: (e, s, n) => is(e, n, "post", e.params.id, t),
				props: {
					error: "redirect"
				}
			}, {
				path: "sandbox/:id/",
				component: ns,
				beforeEnter: (e, s, n) => is(e, n, "sandbox", e.params.id, t),
				props: {
					error: "redirect"
				}
			}];
		var rs = t => [{
			path: "geektimes/:rss(rss)?",
			component: ns,
			children: os(t),
			props: {
				error: "redirect"
			}
		}, {
			path: "mozg/:rss(rss)?",
			component: ns,
			children: os(t),
			props: {
				error: "redirect"
			}
		}];
		const cs = () => s.e("about").then(s.bind(null, "7c9d"));
		var ls = [{
			name: "ABOUT",
			path: "about/",
			components: {
				default: cs
			},
			meta: {
				pageType: "blank",
				layout: "empty"
			}
		}],
			us = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMPage", {
					scopedSlots: t._u([{
						key: "default",
						fn: function () {
							return [s("TMUserArticlePresenter", {
								attrs: {
									article: t.article,
									"is-loading": t.$fetchState.isLoading
								},
								scopedSlots: t._u([{
									key: "footer",
									fn: function () {
										return [s("TMUserArticleBlocks", {
											attrs: {
												article: t.article,
												"is-loading": t.$fetchState.isLoading
											},
											scopedSlots: t._u([{
												key: "afterAuthorBlocks",
												fn: function () {
													return [t.userShowAdv ? s("TMAdfoxBanner", {
														staticClass: "tm-page-article__banner",
														attrs: {
															"adfox-id": "164725660339535756",
															"div-id": "articleBottomBanner",
															params: {
																pp: "h",
																ps: "fnps",
																p2: "hnyb"
															},
															variant: "leaderboard"
														}
													}) : t._e()]
												},
												proxy: !0
											}, {
												key: "beforeDailyArticles",
												fn: function () {
													return [s("TMPromoBlock", {
														attrs: {
															"ga-type": "post",
															layout: "article"
														}
													}), t._v(" "), t.article && t.article.id ? s("TMRandomProjectBlock", {
														attrs: {
															"block-id": "project-block-article",
															hubs: t.getArticleHubsTitles(t.id),
															location: "post",
															tags: t.getArticleTagsTitles(t.id)
														}
													}) : t._e()]
												},
												proxy: !0
											}, t.isMobile && !t.isFlEnglish && t.article && t.article.hubs ? {
												key: "afterDailyArticles",
												fn: function () {
													return [s("TMVacanciesBlock", {
														attrs: {
															hubs: t.article.hubs.map((function (t) {
																var e = t.alias;
																return e
															}))
														}
													})]
												},
												proxy: !0
											} : null, {
												key: "dailyTopPromoLink",
												fn: function () {
													return [t.dailyTopPromoLink ? s("TMPromoPostLink", {
														attrs: {
															appearance: "top-daily",
															"promo-post": t.dailyTopPromoLink
														}
													}) : t._e()]
												},
												proxy: !0
											}], null, !0)
										})]
									},
									proxy: !0
								}])
							})]
						},
						proxy: !0
					}, {
						key: "sidebar",
						fn: function () {
							return [s("TMArticleSidebar", {
								attrs: {
									article: t.article
								}
							})]
						},
						proxy: !0
					}])
				})
			},
			ms = [],
			ds = s("882a"),
			ps = s("f20c"),
			_s = s("9e83"),
			hs = s("4ac0"),
			gs = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMArticleBlocks", {
					attrs: {
						article: t.article,
						"is-loading": t.isLoading
					},
					scopedSlots: t._u([{
						key: "beforeComments",
						fn: function () {
							return [t.userInfo ? s("TMBlock", {
								attrs: {
									"body-variant": "balanced"
								}
							}, [s("TMArticleAuthor", {
								attrs: {
									user: t.userInfo
								},
								on: {
									"change:isSubscribed": t.onToggleSubscribeStatusArticle,
									payments: function (e) {
										t.shouldOpenPayments = !0
									}
								},
								scopedSlots: t._u([{
									key: "beforeCard",
									fn: function () {
										return [t._t("beforeUserCard")]
									},
									proxy: !0
								}], null, !0)
							}), t._v(" "), s("Portal", {
								attrs: {
									to: "overlays"
								}
							}, [t.shouldOpenPayments ? s("TMPopupPayments", {
								on: {
									close: function (e) {
										t.shouldOpenPayments = !1
									}
								}
							}) : t._e()], 1)], 1) : t._e(), t._v(" "), t._t("afterAuthorBlocks")]
						},
						proxy: !0
					}, {
						key: "afterComments",
						fn: function () {
							return [t._t("beforeSimilarArticles"), t._v(" "), t.similarList.length ? s("TMArticleListBlock", {
								attrs: {
									"bookmark-module": "similarList",
									"data-list": t.similarList,
									"ga-options": t.$options.similarGaOptions,
									title: t.msg("TITLE_SIMILAR")
								}
							}) : t._e(), t._v(" "), t._t("beforeDailyArticles"), t._v(" "), t.dailyArticles.length ? s("TMArticleListBlock", {
								attrs: {
									"data-list": t.dailyArticles,
									"ga-options": t.$options.dailyTopGaOptions,
									spacing: "top",
									title: t.msg("TITLE_TOP_DAILY")
								},
								scopedSlots: t._u([{
									key: "lastItem",
									fn: function () {
										return [t._t("dailyTopPromoLink")]
									},
									proxy: !0
								}], null, !0)
							}) : t._e(), t._v(" "), t._t("afterDailyArticles")]
						},
						proxy: !0
					}], null, !0)
				})
			},
			fs = [],
			bs = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-article-author"
				}, [t._t("beforeCard"), t._v(" "), s("TMUserCard", {
					staticClass: "tm-article-author__user-card",
					attrs: {
						"avatar-size": 40,
						"invite-button-visible": !1,
						"is-donate-button-visible": "",
						user: t.user,
						variant: "article"
					},
					on: {
						"change:isSubscribed": function (e) {
							return t.$emit("change:isSubscribed", e)
						},
						karmachange: t.onKarmaChange,
						payments: function (e) {
							return t.$emit("payments")
						}
					}
				}), t._v(" "), t.user.authorContacts && t.user.authorContacts.length ? s("div", {
					staticClass: "tm-article-author__user-contacts"
				}, t._l(t.user.authorContacts, (function (e) {
					return s("a", {
						key: e.url,
						staticClass: "tm-article-author__contact",
						attrs: {
							href: e.url,
							rel: "noopener",
							target: "_blank"
						}
					}, [t._v("\n      " + t._s(e.title) + "\n    ")])
				})), 0) : t._e()], 2)
			},
			Ts = [],
			vs = s("eff8"),
			Es = s("d7b7"),
			Ss = {
				name: "TMArticleAuthor",
				components: {
					TMUserCard: vs["a"]
				},
				props: {
					user: Es["a"]
				},
				methods: {
					onKarmaChange(t) {
						const e = "up" === t.direction ? "vote_plus" : "vote_minus";
						Object(O["c"])("author_info_post", e, this.user.alias)
					}
				}
			},
			Os = Ss,
			Cs = (s("125a"), Object(L["a"])(Os, bs, Ts, !1, null, null, null)),
			Is = Cs.exports,
			As = s("9b51"),
			ys = s("7043"),
			Ls = s("19d1"),
			Ps = s("aa3f"),
			Ns = s("0955"),
			Rs = s("c2d4");
		const Ms = {
			name: "ARTICLES_LIST_TOP_PERIOD",
			params: {
				period: "daily"
			},
			query: {}
		};
		var ws = {
			name: "TMUserArticleBlocks",
			components: {
				TMPopupPayments: Ps["default"],
				TMArticleListBlock: ys["a"],
				TMArticleAuthor: Is,
				TMBlock: Ls["a"],
				TMArticleBlocks: As["a"]
			},
			similarGaOptions: Rs["c"],
			dailyTopGaOptions: Rs["a"],
			props: {
				article: {
					type: Object,
					default: null
				},
				isLoading: {
					type: Boolean,
					required: !0
				}
			},
			data() {
				return {
					shouldOpenPayments: !1
				}
			},
			computed: {
				...Object(g["c"])("users", ["getUserByAlias"]),
				...Object(g["c"])("similarList", ["similarList"]),
				...Object(g["e"])("articlesList", ["articlesIds", "articlesList"]),
				userInfo() {
					return this.article ? this.getUserByAlias(this.article.author.alias) || this.article.author : null
				},
				dailyArticles() {
					const t = this.articlesIds[Object(Ns["a"])(Ms)];
					return t ? t.map(t => this.articlesList[t]) : []
				}
			},
			mounted() {
				this.$activeWatch(() => this.article, t => {
					t && (this.setUserInfo({
						userAlias: t.author.alias,
						userData: t.author
					}), this.loadArticlesList({
						route: Ms
					}), this.loadSimilarList({
						articleId: t.id
					}))
				}, {
					immediate: !0
				})
			},
			methods: {
				...Object(g["b"])("users", ["loadUserInfo"]),
				...Object(g["b"])("similarList", ["loadSimilarList"]),
				...Object(g["b"])("articlesList", ["loadArticlesList"]),
				...Object(g["d"])("users", ["setUserInfo"]),
				onToggleSubscribeStatusArticle(t) {
					const e = t ? "subscribe" : "unsubscribe";
					Object(O["c"])("author_info_bottom", e, this.userInfo.alias), t && Object(O["c"])(e, "user", this.userAlias)
				}
			}
		},
			ks = ws,
			js = Object(L["a"])(ks, gs, fs, !1, null, null, null),
			Ds = js.exports,
			xs = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMArticlePresenter", {
					attrs: {
						article: t.article,
						"is-loading": t.isLoading
					},
					scopedSlots: t._u([{
						key: "beforeBody",
						fn: function () {
							return [t._t("beforeBody")]
						},
						proxy: !0
					}, {
						key: "afterStickyIcons",
						fn: function () {
							return [t.shouldDisplayRecommendationsButton || t.canSendComplaint ? s("div", {
								staticClass: "tm-user-article-presenter__admin-icons"
							}, [t.shouldDisplayRecommendationsButton ? s("button", {
								staticClass: "tm-user-article-presenter__admin-button",
								attrs: {
									title: t.msg("ARTICLE_RECOMMENDATION_TITLE")
								},
								on: {
									click: t.getRecommendationsList
								}
							}, [s("TMSvgImg", {
								staticClass: "tm-user-article-presenter__icon",
								attrs: {
									id: "flag"
								}
							})], 1) : t._e(), t._v(" "), t.canSendComplaint ? s("button", {
								staticClass: "tm-user-article-presenter__admin-button",
								attrs: {
									title: t.msg("ARTICLE_COMPLAINT_TITLE")
								},
								on: {
									click: function (e) {
										t.isComplaintFormShown = !0
									}
								}
							}, [s("TMWarningIcon", {
								staticClass: "tm-user-article-presenter__icon"
							})], 1) : t._e()]) : t._e()]
						},
						proxy: !0
					}, {
						key: "beforeFooter",
						fn: function () {
							return [s("Portal", {
								attrs: {
									to: "overlays"
								}
							}, [t.isRecommendationsFormShown ? s("TMPopup", {
								attrs: {
									title: t.msg("ARTICLE_RECOMMENDATIONS_FORM_TITLE")
								},
								on: {
									close: function (e) {
										t.isRecommendationsFormShown = !1
									}
								}
							}, [s("TMRecommendationsForm", {
								attrs: {
									"is-processing": t.isRecommendationsFormDisabled,
									recommendations: t.articleRecommendationsList
								},
								on: {
									submit: t.sendRecommendations
								}
							})], 1) : t._e(), t._v(" "), t.isComplaintFormShown ? s("TMPopup", {
								attrs: {
									title: t.msg("ARTICLE_COMPLAINT_TITLE")
								},
								on: {
									close: function (e) {
										t.isComplaintFormShown = !1
									}
								}
							}, [s("TMComplaintForm", {
								attrs: {
									autofocus: "",
									"is-processing": t.isComplaintFormDisabled,
									"submit-action": t.complaintAction
								}
							})], 1) : t._e()], 1)]
						},
						proxy: !0
					}, {
						key: "footer",
						fn: function () {
							return [t._t("footer")]
						},
						proxy: !0
					}], null, !0)
				})
			},
			Bs = [],
			$s = s("ca44"),
			Fs = s("e314"),
			Gs = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("form", {
					staticClass: "tm-recommendations-form"
				}, [s("fieldset", {
					staticClass: "tm-recommendations-form__fieldset"
				}, t._l(t.recommendationsArr, (function (e) {
					return s("TMLabeledCheckbox", {
						key: e.id,
						staticClass: "tm-recommendations-form__field",
						attrs: {
							name: "" + e.id,
							value: e.id
						},
						model: {
							value: t.checkedRecommendations[e.id],
							callback: function (s) {
								t.$set(t.checkedRecommendations, e.id, s)
							},
							expression: "checkedRecommendations[item.id]"
						}
					}, [t._v("\n      " + t._s(e.title) + "\n    ")])
				})), 1), t._v(" "), s("TMButtonBase", {
					staticClass: "tm-recommendations-form__button",
					attrs: {
						disabled: t.isProcessing,
						"style-size": "medium"
					},
					on: {
						click: t.emitSubmit
					}
				}, [t._v("\n    " + t._s(t.msg("SUBMIT_FORM_ACTION")) + "\n  ")])], 1)
			},
			Us = [],
			Vs = s("90e1"),
			Ws = {
				name: "RecommendationsForm",
				components: {
					TMButtonBase: v["a"],
					TMLabeledCheckbox: Vs["a"]
				},
				props: {
					recommendations: {
						type: Object,
						required: !0
					},
					isProcessing: {
						type: Boolean
					}
				},
				data() {
					return {
						checkedRecommendations: []
					}
				},
				computed: {
					recommendationsArr() {
						return Object.values(this.recommendations)
					}
				},
				methods: {
					emitSubmit() {
						const t = [];
						this.checkedRecommendations.forEach((e, s) => {
							e && t.push(this.recommendationsArr[s - 1].id)
						}), this.$emit("submit", t)
					}
				}
			},
			Hs = Ws,
			Ys = (s("2169"), Object(L["a"])(Hs, Gs, Us, !1, null, null, null)),
			qs = Ys.exports,
			Ks = s("c4d2"),
			zs = s("e3a7");
		const Xs = () => s.e("chunk-2d228e2b").then(s.t.bind(null, "daa9", 7));
		var Js = {
			name: "TMUserArticlePresenter",
			components: {
				TMSvgImg: ot["a"],
				TMComplaintForm: Fs["a"],
				TMArticlePresenter: $s["a"],
				TMRecommendationsForm: qs,
				TMWarningIcon: Xs,
				TMPopup: ge["a"]
			},
			props: {
				article: {
					type: Object,
					default: null
				},
				isLoading: {
					type: Boolean,
					required: !0
				}
			},
			data() {
				return {
					isComplaintFormShown: !1,
					isComplaintFormDisabled: !1,
					isRecommendationsFormShown: !1,
					isRecommendationsFormDisabled: !1,
					articleRecommendationsList: []
				}
			},
			computed: {
				...Object(g["c"])("me", ["isSuperAdmin", "userAlias"]),
				...Object(g["e"])("me", ["user"]),
				isMineArticle() {
					const t = this.article.author.alias.toLowerCase();
					return this.isLoggedIn && t === this.userAlias.toLowerCase()
				},
				shouldDisplayRecommendationsButton() {
					return !this.isMineArticle && this.isSuperAdmin
				},
				canSendComplaint() {
					return this.user && this.user.settings.permissionSettings.canAddComplaints
				}
			},
			mounted() {
				this.$activeWatch(() => this.article, t => {
					t && this.verifyArticleRoute()
				}, {
					immediate: !0
				}), this.loadDailyArticleList()
			},
			methods: {
				...Object(g["b"])("articlesList", ["loadDailyArticleList"]),
				closeComplaintForm() {
					this.isComplaintFormShown = !1, this.isComplaintFormDisabled = !1
				},
				closeRecommendationsForm() {
					this.isRecommendationsFormShown = !1, this.isRecommendationsFormDisabled = !1
				},
				complaintAction(t) {
					return Object(zs["v"])(this.article.id, {
						message: t
					}).then(() => {
						this.closeComplaintForm(), this.$toast.success(this.msg("COMMENT_COMPLAINT_SUCCESS"))
					}).catch(t => {
						throw this.$toast.error(t.message), t
					})
				},
				getRecommendationsList() {
					Object(zs["o"])().then(({
						postRecommendationRefs: t
					}) => {
						this.isRecommendationsFormShown = !0, this.articleRecommendationsList = t
					}).catch(t => this.$toast.error(t.message))
				},
				sendRecommendations(t) {
					Object(zs["n"])(this.article.id, {
						ids: t
					}).then(t => {
						this.isRecommendationsFormShown = !1, this.$router.push({
							name: "CONVERSATION_MESSAGES",
							params: {
								login: this.article.author.alias,
								hl: this.langOptions.hl,
								template: t
							}
						})
					}).catch(t => this.$toast.error(t.message))
				},
				verifyArticleRoute() {
					const t = Object(Ks["a"])(this.article, this.article.id, this.langOptions.hl),
						e = "" + t;
					this.$route.path !== e && this.$router.replace({
						path: e,
						hash: this.$route.hash
					})
				}
			}
		},
			Qs = Js,
			Zs = (s("3a37"), Object(L["a"])(Qs, xs, Bs, !1, null, null, null)),
			tn = Zs.exports,
			en = s("b885"),
			sn = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return t.isDesktop && t.article && t.article.id ? s("TMLayoutSidebar", {
					attrs: {
						"show-adv": ""
					}
				}, [s("TMMostReadingBlock", {
					attrs: {
						"ga-type": "post",
						layout: "sidebar",
						spacing: "bottom"
					}
				}), t._v(" "), !t.isFlEnglish && t.article.hubs ? s("TMVacanciesBlock", {
					attrs: {
						hubs: t.article.hubs.map((function (t) {
							var e = t.alias;
							return e
						}))
					}
				}) : t._e()], 1) : t._e()
			},
			nn = [],
			an = s("0272"),
			on = s("785c"),
			rn = {
				name: "TMArticleSidebar",
				components: {
					TMMostReadingBlock: on["a"],
					TMLayoutSidebar: an["a"],
					TMVacanciesBlock: en["a"]
				},
				props: {
					article: {
						type: Object,
						default: null
					}
				},
				computed: {
					...Object(g["c"])("global", ["isDesktop"]),
					isFlEnglish() {
						return "en" === this.langOptions.fl
					}
				}
			},
			cn = rn,
			ln = Object(L["a"])(cn, sn, nn, !1, null, null, null),
			un = ln.exports,
			mn = {
				name: "TMArticlePage",
				components: {
					TMPromoPostLink: hs["a"],
					TMArticleSidebar: un,
					TMRandomProjectBlock: ps["a"],
					TMPromoBlock: _s["a"],
					TMAdfoxBanner: ds["a"],
					TMPage: te["a"],
					TMUserArticlePresenter: tn,
					TMUserArticleBlocks: Ds,
					TMVacanciesBlock: en["a"]
				},
				props: {
					id: {
						type: String,
						required: !0
					}
				},
				asyncData({
					store: t
				}) {
					return t.dispatch("articlesList/loadArticle", {
						articleId: this.id
					})
				},
				computed: {
					...Object(g["c"])("global", ["isMobile"]),
					...Object(g["c"])("me", ["userShowAdv"]),
					...Object(g["c"])("articlesList", ["getArticleById", "getArticleHubsTitles", "getArticleTagsTitles"]),
					...Object(g["c"])("promoData", ["dailyTopPromoLink"]),
					isFlEnglish() {
						return "en" === this.langOptions.fl
					},
					article() {
						return this.getArticleById(this.id)
					}
				}
			},
			dn = mn,
			pn = (s("ff65"), Object(L["a"])(dn, us, ms, !1, null, null, null)),
			_n = pn.exports,
			hn = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMPage", {
					scopedSlots: t._u([{
						key: "header",
						fn: function () {
							return [t.companyInfo ? s("TMCompanyBranding", {
								staticClass: "tm-company-article__branding",
								attrs: {
									"company-info": t.companyInfo
								}
							}) : t._e()]
						},
						proxy: !0
					}, {
						key: "default",
						fn: function () {
							return [s("TMUserArticlePresenter", {
								attrs: {
									article: t.article,
									"is-loading": t.$fetchState.isLoading
								},
								scopedSlots: t._u([{
									key: "beforeBody",
									fn: function () {
										return [t.isDesktop ? s("TMCompanyProfileCard", {
											staticClass: "tm-company-article__profile-card",
											attrs: {
												company: t.companyInfo
											}
										}) : t._e()]
									},
									proxy: !0
								}, {
									key: "footer",
									fn: function () {
										return [s("TMUserArticleBlocks", {
											attrs: {
												article: t.article,
												"is-loading": t.$fetchState.isLoading
											},
											scopedSlots: t._u([{
												key: "beforeUserCard",
												fn: function () {
													return [t.companyInfo ? s("TMCompanyInfo", {
														attrs: {
															"company-info": t.companyInfo
														}
													}) : t._e()]
												},
												proxy: !0
											}, {
												key: "beforeDailyArticles",
												fn: function () {
													return [t.isStartup ? [s("TMPromoBlock", {
														attrs: {
															"ga-type": "post",
															layout: "article"
														}
													}), t._v(" "), t.article && t.article.id ? s("TMRandomProjectBlock", {
														attrs: {
															"block-id": "project-block-company-article",
															hubs: t.getArticleHubsTitles(t.id),
															location: "post",
															tags: t.getArticleTagsTitles(t.id)
														}
													}) : t._e()] : [t.companyInfo ? s("TMProjectBlockVacancies", {
														attrs: {
															"career-alias": t.careerAlias,
															"company-alias": t.companyAlias,
															"company-title": t.companyTitle,
															location: "post"
														}
													}) : t._e()]]
												},
												proxy: !0
											}, {
												key: "dailyTopPromoLink",
												fn: function () {
													return [t.dailyTopPromoLink && t.isStartup ? s("TMPromoPostLink", {
														attrs: {
															appearance: "top-daily",
															"promo-post": t.dailyTopPromoLink
														}
													}) : t._e()]
												},
												proxy: !0
											}])
										})]
									},
									proxy: !0
								}])
							})]
						},
						proxy: !0
					}, {
						key: "sidebar",
						fn: function () {
							return [s("TMArticleCorporativeSidebar", {
								attrs: {
									"company-info": t.companyInfo,
									"company-name": t.companyAlias
								}
							})]
						},
						proxy: !0
					}])
				})
			},
			gn = [],
			fn = s("1d10"),
			bn = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-article-author__company"
				}, [s("div", {
					staticClass: "tm-article-author__company-card"
				}, [s("TMCompanySnippet", {
					attrs: {
						company: t.companyInfo
					}
				}), t._v(" "), s("div", {
					staticClass: "tm-article-author__buttons"
				}, [t.isSuperAdmin ? s("div", {
					staticClass: "tm-article-author__button"
				}, [s("TMAdministrationLinks", {
					attrs: {
						links: t.companyLinksItems
					}
				})], 1) : t._e(), t._v(" "), t.isLoggedIn ? s("div", {
					staticClass: "tm-article-author__button"
				}, [s("div", {
					staticClass: "tm-article-author__follow-block"
				}, [s("TMButtonFollow", {
					attrs: {
						subscribed: t.isCompanySubscribed,
						"use-follow-label": !0
					},
					on: {
						onToggle: function (e) {
							return t.toggleSubscribeStatus(t.companyInfo.alias)
						}
					}
				})], 1)]) : t._e()])], 1), t._v(" "), t.companyInfo.contacts && t.companyInfo.contacts.length ? s("div", {
					staticClass: "tm-article-author__company-contacts"
				}, t._l(t.companyInfo.contacts, (function (e) {
					return s("a", {
						key: e.url,
						staticClass: "tm-article-author__contact",
						attrs: {
							href: e.url,
							rel: "noopener",
							target: "_blank"
						}
					}, [t._v("\n      " + t._s(e.title) + "\n    ")])
				})), 0) : t._e(), t._v(" "), s("div", {
					staticClass: "tm-article-author__separator"
				})])
			},
			Tn = [],
			vn = s("1673"),
			En = s("fd95");
		const Sn = () => s.e("admin").then(s.bind(null, "6058"));
		var On = {
			name: "TMCompanyInfo",
			components: {
				TMButtonFollow: vn["a"],
				TMAdministrationLinks: Sn,
				TMCompanySnippet: En["a"]
			},
			props: {
				companyInfo: {
					type: Object,
					required: !0
				}
			},
			computed: {
				...Object(g["c"])("me", ["isLoggedIn", "isSuperAdmin"]),
				companyLinksItems() {
					const {
						alias: t
					} = this.companyInfo, e = {
						en: {
							EDIT_PROFILE: "Edit profile via CP"
						},
						ru: {
							EDIT_PROFILE: "Ð ÐµÐ´Ð°ÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð¿Ñ€Ð¾Ñ„Ð¸Ð»ÑŒ Ð² CP"
						}
					}, s = `https://localhost:7103/kek/admin/company/${t}/`;
					return [{
						title: e[this.langOptions.hl].EDIT_PROFILE,
						link: s
					}]
				},
				isCompanySubscribed() {
					return this.companyInfo.relatedData && this.companyInfo.relatedData.isSubscribed
				}
			},
			methods: {
				...Object(g["b"])("companies", ["toggleSubscribeStatus"])
			}
		},
			Cn = On,
			In = Object(L["a"])(Cn, bn, Tn, !1, null, null, null),
			An = In.exports,
			yn = s("befa"),
			Ln = s("3619"),
			Pn = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return t.isDesktop ? s("TMLayoutSidebar", {
					attrs: {
						"show-adv": t.showSidebarAdv
					}
				}, [t.companyInfo && t.showAdministrationBlock ? s("TMCompanyAdministrationBlock", {
					attrs: {
						"company-info": t.companyInfo
					}
				}) : t._e(), t._v(" "), t.companyInfo ? s("TMCompanyBasicInfoBlock", {
					attrs: {
						"company-info": t.companyInfo
					}
				}) : t._e(), t._v(" "), t.companyName && t.companyInfo && !t.isCompanyExpired ? s("TMCompanyWidgets", {
					attrs: {
						"company-alias": t.companyName
					}
				}) : t._e(), t._v(" "), t.companyName && t.companyBlogList && t.companyBlogList.length ? s("TMArticleListBlock", {
					attrs: {
						"data-list": t.companyBlogList,
						layout: "sidebar",
						title: t.msg("TITLE_HABR_BLOG")
					}
				}) : t._e()], 1) : t._e()
			},
			Nn = [],
			Rn = s("d43f"),
			Mn = s("94e4"),
			wn = s("a90a"),
			kn = s("7f7b"),
			jn = {
				name: "TMArticleCorporativeSidebar",
				components: {
					TMArticleListBlock: ys["a"],
					TMCompanyAdministrationBlock: Rn["a"],
					TMCompanyBasicInfoBlock: Mn["a"],
					TMCompanyWidgets: wn["a"],
					TMLayoutSidebar: an["a"]
				},
				props: {
					companyName: {
						type: String,
						default: null
					},
					companyInfo: {
						type: Object,
						default: null
					}
				},
				computed: {
					...Object(g["c"])("global", ["isDesktop"]),
					...Object(g["c"])("articlesList", ["getArticleById", "getArticlesList", "getCompanyAlias"]),
					...Object(g["c"])("me", ["isSuperAdmin"]),
					isCompanyExpired() {
						return Object(kn["d"])(this.companyInfo)
					},
					companyBlogList() {
						const t = Object(Ns["a"])(Object(kn["e"])(this.companyName));
						return this.getArticlesList(t)
					},
					showAdministrationBlock() {
						const {
							aDeskSettings: t
						} = this.companyInfo;
						return t && t.access || this.isSuperAdmin
					},
					showSidebarAdv() {
						return this.companyInfo && this.companyInfo.settings.isStartup
					}
				},
				mounted() {
					this.$watch(() => [this.companyName, this.isDesktop], ([t, e]) => {
						e && t && this.loadArticlesList({
							route: Object(kn["e"])(t)
						})
					}, {
						immediate: !0
					})
				},
				methods: {
					...Object(g["b"])("articlesList", ["loadArticlesList"])
				}
			},
			Dn = jn,
			xn = Object(L["a"])(Dn, Pn, Nn, !1, null, null, null),
			Bn = xn.exports,
			$n = s("d4a6b"),
			Fn = s("e16f"),
			Gn = s("32f0"),
			Un = {
				name: "TMCompanyArticlePage",
				components: {
					TMPromoPostLink: hs["a"],
					TMRandomProjectBlock: ps["a"],
					TMPromoBlock: _s["a"],
					TMArticleCorporativeSidebar: Bn,
					TMUserArticlePresenter: tn,
					TMProjectBlockVacancies: Ln["a"],
					TMUserArticleBlocks: Ds,
					TMCompanyProfileCard: yn["a"],
					TMCompanyBranding: fn["a"],
					TMPage: te["a"],
					TMCompanyInfo: An
				},
				props: {
					id: {
						type: String,
						required: !0
					}
				},
				asyncData() {
					return Promise.all([this.loadArticle({
						articleId: this.id
					}).then(() => this.loadCompanyInfo({
						alias: this.companyAlias
					})).catch(t => {
						const e = Object(Fn["a"])(t);
						if ("NOT_FOUND" !== e) throw t
					})])
				},
				computed: {
					...Object(g["c"])("global", ["isDesktop"]),
					...Object(g["c"])("companies", ["getCompanyInfo", "getCompanyStartupStatus"]),
					...Object(g["c"])("articlesList", ["getArticleById", "getArticleHubsTitles", "getArticleTagsTitles"]),
					...Object(g["c"])("promoData", ["dailyTopPromoLink"]),
					article() {
						return this.getArticleById(this.id)
					},
					companyInfo() {
						return this.companyAlias ? this.getCompanyInfo(this.companyAlias) : null
					},
					companyAlias() {
						if (!this.article) return null;
						const t = this.article.hubs.find(t => "corporative" === t.type);
						return t ? t.alias.toLowerCase() : null
					},
					companyTitle() {
						return this.companyInfo.titleHtml
					},
					careerAlias() {
						return this.companyInfo.careerAlias
					},
					isStartup() {
						return this.getCompanyStartupStatus(this.companyAlias)
					}
				},
				metaInfo() {
					const {
						article: t
					} = this;
					if (!t || !t.metadata || !this.companyInfo) return {};
					const e = `${t.titleHtml} / ${this.msg("ARTICLE_COMPANY_BLOG", { companyName: this.companyInfo.titleHtml })}`;
					return {
						title: Object(Gn["b"])(e)
					}
				},
				mounted() {
					this.$watch(() => this.companyInfo, t => {
						t && Object($n["a"])(t, this.$route.fullPath)
					}, {
						immediate: !0
					})
				},
				methods: {
					...Object(g["b"])("companies", ["loadCompanyInfo"]),
					...Object(g["b"])("articlesList", ["loadArticle"])
				}
			},
			Vn = Un,
			Wn = (s("b672"), Object(L["a"])(Vn, hn, gn, !1, null, null, null)),
			Hn = Wn.exports,
			Yn = s("5d2c");
		const qn = () => s.e("page-feed-preview").then(s.bind(null, "f982")),
			Kn = () => s.e("page-feed-preview").then(s.bind(null, "23a7")),
			zn = () => Promise.all([s.e("page-article~sandbox~user-articles-subpages"), s.e("page-article")]).then(s.bind(null, "527b")),
			Xn = (t, e, s) => ({
				name: t,
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: e
				},
				props: {
					default: !0
				},
				meta: {
					pageType: "post",
					customGA: !0,
					rssLink: t => s ? `/rss/news/t/${t.id}/` : `/rss/post/${t.id}/`
				},
				beforeEnter: Yn["b"]
			}),
			Jn = !0;
		var Qn = [{
			...Xn("ARTICLE", _n),
			path: "post/:id(\\d+)/",
			alias: "/:hl/p/:id(\\d+)/"
		}, {
			...Xn("NEWS_ARTICLE", _n, Jn),
			path: "news/t/:id(\\d+)?/"
		}, {
			...Xn("ARTICLE_OF_COMPANY", Hn),
			path: "company/:companyName/blog/:id(\\d+)/",
			alias: "/:hl/blogs/:companyName/:id/"
		}, {
			...Xn("NEWS_OF_COMPANY", Hn, Jn),
			path: "company/:companyName/news/t/:id(\\d+)/"
		}, {
			...Xn("ARTICLE_MEGAPOST", qn),
			path: "article/:id(\\d+)/"
		}, {
			...Xn("ARTICLE_MEGAPOST_PREVIEW", Kn),
			path: "article/preview/:hash/"
		}, {
			name: "ARTICLE_SANDBOX",
			path: "sandbox/:id(\\d+)/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: zn
			},
			meta: {
				pageType: "sandbox",
				rssLink: t => `/rss/post/${t.id}/`
			}
		}];
		const Zn = () => s.e("page-article-comments").then(s.bind(null, "f3af")),
			ta = () => s.e("page-article-comments").then(s.bind(null, "67b7")),
			ea = () => s.e("page-article-comments").then(s.bind(null, "c3bd")),
			sa = (t, e = null, s) => ({
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Zn
				},
				props: {
					default: !0
				},
				children: [{
					name: t,
					path: "",
					components: {
						sidebar: e
					},
					props: {
						sidebar: !0
					},
					meta: {
						pageType: "post_comments",
						customGA: !0,
						rssLink: t => s ? `/rss/news/t/${t.id}/` : `/rss/post/${t.id}/`
					}
				}],
				meta: {
					pageType: "post_comments",
					customGA: !0,
					rssLink: t => s ? `/rss/news/t/${t.id}/` : `/rss/post/${t.id}/`
				}
			}),
			na = !0;
		var aa = [{
			...sa("ARTICLE_COMMENTS", ea),
			path: "post/:id(\\d+)/comments/",
			alias: "/:hl/p/:id(\\d+)/comments/"
		}, {
			...sa("NEWS_ARTICLE_COMMENTS", ea, na),
			path: "news/t/:id(\\d+)/comments/"
		}, {
			...sa("ARTICLE_COMMENTS_OF_COMPANY", ta),
			path: "company/:companyName/blog/:id(\\d+)/comments/",
			alias: "/:hl/blogs/:companyName/:id(\\d+)/comments/"
		}, {
			...sa("NEWS_OF_COMPANY_COMMENTS", ta, na),
			path: "company/:companyName/news/t/:id(\\d+)/comments/"
		}, {
			...sa("ARTICLE_COMMENTS_OF_MEGAPOST"),
			path: "article/:id(\\d+)/comments/"
		}];
		const ia = () => s.e("beta-test").then(s.bind(null, "091f")),
			oa = () => s.e("beta-test").then(s.bind(null, "3529")),
			ra = () => s.e("beta-test").then(s.bind(null, "8e66"));
		var ca = [{
			path: "beta/",
			components: {
				default: ia
			},
			children: [{
				name: "BETA_TEST",
				path: "",
				meta: {
					title: "BETA_TESTING_TITLE",
					requiresAuth: !0
				},
				components: {
					default: oa
				}
			}, {
				name: "BETA_TEST_ARCHIVED_ANNOUNCEMENT",
				path: "archieve/:id",
				meta: {
					title: "BETA_TESTING_TITLE"
				},
				components: {
					default: ra
				}
			}, {
				path: "welcome/",
				redirect: t => ({
					...t,
					name: "BETA_TEST"
				})
			}]
		}];
		const la = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-company")]).then(s.bind(null, "9eb2")),
			ua = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-company")]).then(s.bind(null, "b700")),
			ma = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-company")]).then(s.bind(null, "4521")),
			da = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-company")]).then(s.bind(null, "caaf")),
			pa = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-company")]).then(s.bind(null, "7390")),
			_a = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-company")]).then(s.bind(null, "2a43"));
		var ha = [{
			name: "COMPANY_PROFILE_ROOT",
			path: "company/:name/",
			pathToRegexpOptions: {
				strict: !0
			},
			meta: {
				pageType: "company",
				customGA: !0
			},
			components: {
				default: la
			},
			redirect: t => ({
				...t,
				name: "ARTICLES_LIST_BY_COMPANY"
			}),
			children: [{
				name: "COMPANY_PROFILE",
				path: "profile/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: da
				}
			}, {
				name: "COMPANY_BRANDING_PREVIEW",
				path: "branding/:brandingId/preview/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: ua
				},
				meta: {
					showArticleFilter: !0,
					navTitle: "NAV_NEW"
				},
				children: [{
					name: "COMPANY_BRANDING_PREVIEW_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						showArticleFilter: !0,
						navTitle: "NAV_NEW"
					}
				}]
			}, {
				name: "ARTICLES_LIST_BY_COMPANY",
				path: "blog/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: ua
				},
				meta: {
					showArticleFilter: !0,
					navTitle: "NAV_NEW",
					rssLink: t => `/rss/company/${t.name}/blog/`
				},
				children: [{
					name: "ARTICLES_LIST_BY_COMPANY_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						showArticleFilter: !0,
						navTitle: "NAV_NEW",
						rssLink: t => `/rss/company/${t.name}/blog/`
					}
				}]
			}, {
				name: "ARTICLES_LIST_TOP_BY_COMPANY",
				path: "blog/top/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: ua
				},
				meta: {
					showArticleFilter: !0,
					navTitle: "NAV_BEST"
				},
				children: [{
					name: "ARTICLES_LIST_TOP_BY_COMPANY_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						showArticleFilter: !0,
						navTitle: "NAV_BEST"
					}
				}]
			}, {
				name: "NEWS_LIST_BY_COMPANY",
				path: "news/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: ua
				},
				meta: {
					rssLink: t => `/rss/company/${t.name}/blog/`
				},
				children: [{
					name: "NEWS_LIST_BY_COMPANY_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						rssLink: t => `/rss/company/${t.name}/blog/`
					}
				}]
			}, {
				name: "COMPANY_VACANCIES",
				path: "vacancies/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: pa
				},
				children: [{
					name: "COMPANY_VACANCIES_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "COMPANY_VACANCIES",
						noindex: !0
					}
				}]
			}, {
				name: "COMPANY_WORKERS",
				path: "workers/",
				redirect: {
					name: "COMPANY_WORKERS_ALL"
				}
			}, {
				name: "COMPANY_WORKERS_ALL",
				path: "workers/all/rating/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: _a
				},
				meta: {
					canonicalRoute: "COMPANY_WORKERS",
					noindex: !0,
					showUsersFilter: !0,
					navTitle: "NAV_ALL"
				},
				children: [{
					name: "COMPANY_WORKERS_ALL_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "COMPANY_WORKERS",
						noindex: !0,
						showUsersFilter: !0,
						navTitle: "NAV_ALL"
					}
				}]
			}, {
				name: "COMPANY_WORKERS_NEW",
				path: "workers/new/rating/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: _a
				},
				meta: {
					canonicalRoute: "COMPANY_WORKERS",
					noindex: !0,
					showUsersFilter: !0,
					navTitle: "NAV_NEW"
				},
				children: [{
					name: "COMPANY_WORKERS_NEW_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "COMPANY_WORKERS",
						noindex: !0,
						showUsersFilter: !0,
						navTitle: "NAV_NEW"
					}
				}]
			}, {
				name: "COMPANY_FANS",
				path: "fans/",
				redirect: {
					name: "COMPANY_FANS_ALL"
				}
			}, {
				name: "COMPANY_FANS_ALL",
				path: "fans/all/rating/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: ma
				},
				meta: {
					noindex: !0,
					showFansFilter: !0,
					navTitle: "NAV_ALL"
				},
				children: [{
					name: "COMPANY_FANS_ALL_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						noindex: !0,
						showFansFilter: !0,
						navTitle: "NAV_ALL"
					}
				}]
			}, {
				name: "COMPANY_FANS_NEW",
				path: "fans/new/rating/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: ma
				},
				meta: {
					noindex: !0,
					showFansFilter: !0,
					navTitle: "NAV_NEW"
				},
				children: [{
					name: "COMPANY_FANS_NEW_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						noindex: !0,
						showFansFilter: !0,
						navTitle: "NAV_NEW"
					}
				}]
			}]
		}];

		function ga() {
			const t = ["widgets/", "vkontakte-groups/", "facebook-like-box/", "applications/", "twitter-stream/", "news/", "links/"],
				e = t.reduce((t, e) => ({
					...t,
					[e]: "settings/widgets/"
				}), {});
			return {
				...e,
				"statistics-summary/": "statistics/summary/",
				"authors-statistics/": "statistics/authors/",
				"hubs-statistics/": "statistics/hubs/",
				"post-list/": "posts/articles/",
				"post-list/page:pageNum(\\d+)/": "posts/articles/page:pageNum/",
				"news-list/": "posts/news/",
				"news-list/page:pageNum(\\d+)/": "posts/news/page:pageNum/",
				"administrators-list/": "company/users/",
				"administrators-list/page:pageNum(\\d+)/": "company/users/page:pageNum/",
				"administrators-list/add/": "company/users/add/",
				"employees-list/": "company/employees/",
				"employees-list/page:pageNum(\\d+)/": "company/employees/page:pageNum/",
				"employees-list/requests/": "company/employees/requests/",
				"employees-list/requests/page:pageNum(\\d+)/": "company/employees/requests/page:pageNum/",
				"employees-list/add/": "company/employees/add/",
				"invites/": "company/invitations/",
				"vacancies/": "company/vacancies/listing/",
				"vacancies/page:pageNum(\\d+)/": "company/vacancies/listing/page:pageNum/",
				"log/": "company/logs/",
				"log/page:pageNum(\\d+)/": "company/logs/page:pageNum/",
				"current-subscription/": "billing/current/",
				"prolongation/": "billing/renewal/",
				"activation-code/": "billing/activation/",
				"requisites/": "billing/requisites/",
				"requisites/add/": "billing/requisites/add",
				"finance/": "billing/finance/",
				"description/": "settings/card/",
				"widgets/": "settings/widgets/",
				"branding/": "settings/branding/",
				"localization/": "settings/localization/",
				"analytics/": "settings/analytics/",
				"documents/faq/": "faq/"
			}
		}

		function fa() {
			const t = ga();
			return Object.keys(t).reduce((e, s) => {
				const n = {
					path: s,
					redirect: t[s]
				};
				return e.concat(n)
			}, [])
		}
		const ba = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "f766")),
			Ta = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "d8bf")),
			va = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "6980")),
			Ea = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "a5ff")),
			Sa = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "a5cd0")),
			Oa = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "f551")),
			Ca = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "8ad7")),
			Ia = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "5cff")),
			Aa = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "5645")),
			ya = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "d6f8")),
			La = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "028e")),
			Pa = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "8c62")),
			Na = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "b7a2")),
			Ra = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "4500")),
			Ma = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "461c")),
			wa = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "3f48")),
			ka = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "b713")),
			ja = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "8da0")),
			Da = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "6f4e")),
			xa = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "1cf0")),
			Ba = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "bcf4")),
			$a = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "87a0")),
			Fa = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "b600")),
			Ga = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "4e06")),
			Ua = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "9b27")),
			Va = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "9753")),
			Wa = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "06bf")),
			Ha = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "29fb")),
			Ya = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "953f")),
			qa = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "d9e0")),
			Ka = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "5f22")),
			za = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "d97d")),
			Xa = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "ff70")),
			Ja = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "06ea")),
			Qa = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "eb96")),
			Za = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "00f2")),
			ti = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "a10bc")),
			ei = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "d9ac")),
			si = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "dd12")),
			ni = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "b32b")),
			ai = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "7226")),
			ii = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "d1b4")),
			oi = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "f59f")),
			ri = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "9ccd")),
			ci = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "ec8d")),
			li = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "2232")),
			ui = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("page-company-admin")]).then(s.bind(null, "8232"));
		var mi = [{
			name: "COMPANY_ADMIN",
			path: "company/:name/admin/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: ba
			},
			redirect: {
				name: "COMPANY_ADMIN_STATISTICS"
			},
			children: [...fa(), {
				name: "COMPANY_ADMIN_STATISTICS",
				path: "statistics/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					requiresAuth: !0
				},
				components: {
					default: Ta
				},
				redirect: {
					name: "COMPANY_ADMIN_STATISTICS_SUMMARY"
				},
				children: [{
					name: "COMPANY_ADMIN_STATISTICS_SUMMARY",
					path: "summary/",
					pathToRegexpOptions: {
						strict: !0
					},
					components: {
						default: ya
					},
					meta: {
						requiresAuth: !0
					}
				}, {
					name: "COMPANY_ADMIN_STATISTICS_AUTHORS",
					path: "authors/",
					pathToRegexpOptions: {
						strict: !0
					},
					components: {
						default: La
					},
					meta: {
						requiresAuth: !0
					},
					children: [{
						name: "COMPANY_ADMIN_STATISTICS_AUTHORS_PAGES",
						path: "page:pageNum(\\d+)/",
						meta: {
							requiresAuth: !0,
							activeNavigationSection: "COMPANY_ADMIN_STATISTICS_AUTHORS"
						}
					}]
				}, {
					name: "COMPANY_ADMIN_STATISTICS_HUBS",
					path: "hubs/",
					pathToRegexpOptions: {
						strict: !0
					},
					components: {
						default: Aa
					},
					meta: {
						requiresAuth: !0
					},
					children: [{
						name: "COMPANY_ADMIN_STATISTICS_HUBS_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							requiresAuth: !0,
							activeNavigationSection: "COMPANY_ADMIN_STATISTICS_HUBS"
						}
					}]
				}]
			}, {
				name: "COMPANY_ADMIN_POSTS",
				path: "posts/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					requiresAuth: !0
				},
				components: {
					default: Ea
				},
				redirect: {
					name: "COMPANY_ADMIN_POSTS_ARTICLES"
				},
				children: [{
					name: "COMPANY_ADMIN_POSTS_ARTICLES",
					path: "articles/",
					pathToRegexpOptions: {
						strict: !0
					},
					components: {
						default: Sa
					},
					meta: {
						requiresAuth: !0
					},
					children: [{
						name: "COMPANY_ADMIN_POSTS_ARTICLES_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "COMPANY_ADMIN",
							activeNavigationSection: "COMPANY_ADMIN_POSTS_ARTICLES"
						}
					}]
				}, {
					name: "COMPANY_ADMIN_POSTS_NEWS",
					path: "news/",
					pathToRegexpOptions: {
						strict: !0
					},
					components: {
						default: Oa
					},
					meta: {
						requiresAuth: !0
					},
					children: [{
						name: "COMPANY_ADMIN_POSTS_NEWS_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "COMPANY_ADMIN",
							activeNavigationSection: "COMPANY_ADMIN_POSTS_NEWS"
						}
					}]
				}]
			}, {
				name: "COMPANY_ADMIN_COMPANY",
				path: "company/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					requiresAuth: !0
				},
				components: {
					default: va
				},
				redirect: {
					name: "COMPANY_ADMIN_COMPANY_USERS"
				},
				children: [{
					name: "COMPANY_ADMIN_COMPANY_USERS",
					path: "users/",
					components: {
						default: ti
					},
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0
					},
					children: [{
						name: "COMPANY_ADMIN_COMPANY_USERS_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							requiresAuth: !0,
							activeNavigationSection: "COMPANY_ADMIN_COMPANY_USERS"
						}
					}]
				}, {
					path: "employees/",
					components: {
						default: Ka
					},
					pathToRegexpOptions: {
						strict: !0
					},
					redirect: {
						name: "COMPANY_ADMIN_COMPANY_EMPLOYEES"
					},
					children: [{
						name: "COMPANY_ADMIN_COMPANY_EMPLOYEES",
						path: "",
						components: {
							default: za
						},
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							requiresAuth: !0
						},
						children: [{
							name: "COMPANY_ADMIN_COMPANY_EMPLOYEES_PAGES",
							path: "page:pageNum(\\d+)/",
							pathToRegexpOptions: {
								strict: !0
							},
							meta: {
								requiresAuth: !0,
								activeNavigationSection: "COMPANY_ADMIN_COMPANY_EMPLOYEES"
							}
						}]
					}, {
						name: "COMPANY_ADMIN_COMPANY_EMPLOYEES_REQUESTS",
						path: "requests/",
						components: {
							default: Ja
						},
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							requiresAuth: !0,
							activeNavigationSection: "COMPANY_ADMIN_COMPANY_EMPLOYEES"
						},
						children: [{
							name: "COMPANY_ADMIN_COMPANY_EMPLOYEES_REQUESTS_PAGES",
							path: "page:pageNum(\\d+)/",
							pathToRegexpOptions: {
								strict: !0
							},
							meta: {
								requiresAuth: !0,
								activeNavigationSection: "COMPANY_ADMIN_COMPANY_EMPLOYEES"
							}
						}]
					}]
				}, {
					path: "invitations/",
					components: {
						default: si
					},
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0
					},
					children: [{
						name: "COMPANY_ADMIN_APPROVED_INVITATIONS",
						path: "",
						components: {
							default: ai
						},
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							requiresAuth: !0
						},
						children: [{
							name: "COMPANY_ADMIN_APPROVED_INVITATIONS_PAGES",
							path: "page:pageNum(\\d+)/",
							pathToRegexpOptions: {
								strict: !0
							},
							meta: {
								requiresAuth: !0,
								activeNavigationSection: "COMPANY_ADMIN_APPROVED_INVITATIONS"
							}
						}]
					}, {
						name: "COMPANY_ADMIN_SENT_INVITATIONS",
						path: "sent/",
						components: {
							default: ni
						},
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							requiresAuth: !0,
							activeNavigationSection: "COMPANY_ADMIN_APPROVED_INVITATIONS"
						},
						children: [{
							name: "COMPANY_ADMIN_SENT_INVITATIONS_PAGES",
							path: "page:pageNum(\\d+)/",
							pathToRegexpOptions: {
								strict: !0
							},
							meta: {
								requiresAuth: !0,
								activeNavigationSection: "COMPANY_ADMIN_APPROVED_INVITATIONS"
							}
						}]
					}]
				}, {
					name: "COMPANY_ADMIN_COMPANY_NEW_EMPLOYEE",
					path: "employees/add/",
					components: {
						default: Xa
					},
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0,
						activeNavigationSection: "COMPANY_ADMIN_COMPANY_EMPLOYEES"
					}
				}, {
					name: "COMPANY_ADMIN_COMPANY_NEW_INVITATION",
					path: "invitations/add/",
					components: {
						default: ii
					},
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0
					}
				}, {
					name: "COMPANY_ADMIN_COMPANY_NEW_USER",
					path: "users/add/",
					components: {
						default: ei
					},
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0,
						activeNavigationSection: "COMPANY_ADMIN_COMPANY_USERS"
					}
				}, {
					name: "COMPANY_ADMIN_COMPANY_LOGS",
					path: "logs/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0
					},
					component: Na,
					children: [{
						name: "COMPANY_ADMIN_COMPANY_LOGS_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							requiresAuth: !0,
							activeNavigationSection: "COMPANY_ADMIN_COMPANY_LOGS"
						}
					}]
				}, {
					name: "COMPANY_ADMIN_COMPANY_VACANCIES",
					path: "vacancies/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0
					},
					redirect: {
						name: "COMPANY_ADMIN_COMPANY_VACANCIES_SETTINGS"
					},
					component: Pa,
					children: [{
						name: "COMPANY_ADMIN_COMPANY_VACANCIES_SETTINGS",
						path: "settings/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							requiresAuth: !0,
							activeNavigationSection: "COMPANY_ADMIN_COMPANY_VACANCIES"
						},
						component: Da
					}, {
						name: "COMPANY_ADMIN_COMPANY_VACANCIES_LISTING",
						path: "listing/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							requiresAuth: !0,
							activeNavigationSection: "COMPANY_ADMIN_COMPANY_VACANCIES"
						},
						component: xa,
						children: [{
							name: "COMPANY_ADMIN_COMPANY_VACANCIES_LISTING_PAGES",
							path: "page:pageNum(\\d+)/",
							pathToRegexpOptions: {
								strict: !0
							},
							meta: {
								requiresAuth: !0,
								activeNavigationSection: "COMPANY_ADMIN_COMPANY_VACANCIES"
							}
						}]
					}]
				}]
			}, {
				name: "COMPANY_ADMIN_BILLING",
				path: "billing/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					requiresAuth: !0
				},
				components: {
					default: Ca
				},
				redirect: {
					name: "COMPANY_ADMIN_BILLING_CURRENT"
				},
				children: [{
					name: "COMPANY_ADMIN_BILLING_CURRENT",
					path: "current/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0
					},
					component: Qa
				}, {
					name: "COMPANY_ADMIN_BILLING_RENEWAL",
					path: "renewal/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0
					},
					components: {
						default: Za
					}
				}, {
					name: "COMPANY_ADMIN_BILLING_ACTIVATION",
					path: "activation/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0
					},
					components: {
						default: Ra
					}
				}, {
					name: "COMPANY_ADMIN_BILLING_REQUISITES",
					path: "requisites/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0
					},
					components: {
						default: oi
					},
					children: [{
						name: "COMPANY_ADMIN_BILLING_REQUISITES_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							requiresAuth: !0,
							activeNavigationSection: "COMPANY_ADMIN_BILLING_REQUISITES"
						}
					}]
				}, {
					name: "COMPANY_ADMIN_BILLING_REQUISITES_FORM_EDIT",
					path: "requisites/edit/:id/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0,
						activeNavigationSection: "COMPANY_ADMIN_BILLING_REQUISITES"
					},
					components: {
						default: ri
					}
				}, {
					name: "COMPANY_ADMIN_BILLING_REQUISITES_FORM_ADD",
					path: "requisites/add/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0,
						activeNavigationSection: "COMPANY_ADMIN_BILLING_REQUISITES"
					},
					components: {
						default: ri
					}
				}, {
					name: "COMPANY_ADMIN_BILLING_FINANCE",
					path: "finance/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0
					},
					components: {
						default: Ma
					},
					children: [{
						name: "COMPANY_ADMIN_BILLING_FINANCE_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							requiresAuth: !0,
							activeNavigationSection: "COMPANY_ADMIN_BILLING_FINANCE"
						}
					}]
				}]
			}, {
				name: "COMPANY_ADMIN_SETTINGS",
				path: "settings/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					requiresAuth: !0
				},
				components: {
					default: Ia
				},
				redirect: {
					name: "COMPANY_ADMIN_SETTINGS_CARD"
				},
				children: [{
					name: "COMPANY_ADMIN_SETTINGS_CARD",
					path: "card/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0
					},
					components: {
						default: ka
					}
				}, {
					name: "COMPANY_ADMIN_SETTINGS_WIDGET_EDIT_VK",
					path: "widgets/vk/:widgetId/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0,
						activeNavigationSection: "COMPANY_ADMIN_SETTINGS_WIDGETS"
					},
					components: {
						default: $a
					}
				}, {
					name: "COMPANY_ADMIN_SETTINGS_WIDGET_EDIT_BANNER",
					path: "widgets/banner/:widgetId/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0,
						activeNavigationSection: "COMPANY_ADMIN_SETTINGS_WIDGETS"
					},
					components: {
						default: Ya
					}
				}, {
					name: "COMPANY_ADMIN_SETTINGS_WIDGET_EDIT_FACEBOOK",
					path: "widgets/facebook/:widgetId/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0,
						activeNavigationSection: "COMPANY_ADMIN_SETTINGS_WIDGETS"
					},
					components: {
						default: Fa
					}
				}, {
					name: "COMPANY_ADMIN_SETTINGS_WIDGET_EDIT_TWITTER",
					path: "widgets/twitter/:widgetId/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0,
						activeNavigationSection: "COMPANY_ADMIN_SETTINGS_WIDGETS"
					},
					components: {
						default: qa
					}
				}, {
					name: "COMPANY_ADMIN_SETTINGS_WIDGET_EDIT_LINKS",
					path: "widgets/links/:widgetId/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0,
						activeNavigationSection: "COMPANY_ADMIN_SETTINGS_WIDGETS"
					},
					components: {
						default: Ga
					}
				}, {
					name: "COMPANY_ADMIN_SETTINGS_WIDGET_EDIT_NEWS",
					path: "widgets/rss/:widgetId/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0,
						activeNavigationSection: "COMPANY_ADMIN_SETTINGS_WIDGETS"
					},
					components: {
						default: Ua
					}
				}, {
					name: "COMPANY_ADMIN_SETTINGS_WIDGET_EDIT_NEWS_LIST",
					path: "widgets/rss/:widgetId/list/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0,
						activeNavigationSection: "COMPANY_ADMIN_SETTINGS_WIDGETS"
					},
					components: {
						default: Va
					},
					children: [{
						name: "COMPANY_ADMIN_SETTINGS_WIDGET_EDIT_NEWS_LIST_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						}
					}]
				}, {
					name: "COMPANY_ADMIN_SETTINGS_WIDGET_EDIT_APPLICATIONS",
					path: "widgets/applications/:widgetId/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0,
						activeNavigationSection: "COMPANY_ADMIN_SETTINGS_WIDGETS"
					},
					components: {
						default: Wa
					}
				}, {
					name: "COMPANY_ADMIN_SETTINGS_WIDGET_EDIT_APPLICATION",
					path: "widgets/application/:widgetId/:applicationId/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0,
						activeNavigationSection: "COMPANY_ADMIN_SETTINGS_WIDGETS"
					},
					components: {
						default: Ha
					}
				}, {
					name: "COMPANY_ADMIN_SETTINGS_WIDGETS",
					path: "widgets/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0
					},
					components: {
						default: Ba
					}
				}, {
					name: "COMPANY_ADMIN_SETTINGS_BRANDING",
					path: "branding/",
					components: {
						default: ci
					},
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0
					}
				}, {
					name: "COMPANY_ADMIN_NEW_BRANDING",
					path: "branding/new/",
					components: {
						default: li
					},
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0,
						activeNavigationSection: "COMPANY_ADMIN_SETTINGS_BRANDING"
					}
				}, {
					name: "COMPANY_ADMIN_EDIT_BRANDING",
					path: "branding/edit/:id/",
					components: {
						default: li
					},
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0,
						activeNavigationSection: "COMPANY_ADMIN_SETTINGS_BRANDING"
					}
				}, {
					name: "COMPANY_ADMIN_SETTINGS_LOCALIZATION",
					path: "localization/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0
					},
					components: {
						default: ja
					}
				}, {
					name: "COMPANY_ADMIN_SETTINGS_ANALYTICS",
					path: "analytics/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						requiresAuth: !0
					},
					components: {
						default: wa
					}
				}]
			}, {
				name: "COMPANY_ADMIN_FAQ",
				path: "faq/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					requiresAuth: !0
				},
				components: {
					default: ui
				},
				children: [{
					name: "COMPANY_ADMIN_FAQ_PAGE",
					path: ":alias/",
					meta: {
						requiresAuth: !0
					}
				}]
			}]
		}];
		const di = () => s.e("dialogs").then(s.bind(null, "58f3"));
		var pi = [{
			name: "CONVERSATION_MESSAGES",
			path: "conversations/:login/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: di
			},
			meta: {
				pageType: "conversations",
				header: "sticky",
				requiresAuth: !0,
				hideUserNotices: !0
			}
		}];
		const _i = () => s.e("dialogs").then(s.bind(null, "dcfb"));
		var hi = [{
			name: "CONVERSATIONS",
			path: "conversations/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: _i
			},
			meta: {
				pageType: "conversations",
				title: "CONVERSATIONS_TITLE",
				requiresAuth: !0
			},
			children: [{
				name: "CONVERSATIONS_PAGES",
				path: "page:pageNum(\\d+)/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					title: "CONVERSATIONS_TITLE"
				}
			}]
		}];
		const gi = () => s.e("docs").then(s.bind(null, "fbb3"));
		var fi = [{
			name: "DOCS",
			path: "docs/:alias?/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: gi
			},
			children: [{
				name: "DOCS_ARTICLE",
				path: ":articleAlias?/",
				pathToRegexpOptions: {
					strict: !0
				}
			}]
		}];
		const bi = () => s.e("page-error").then(s.bind(null, "9ce4"));
		var Ti = [{
			name: "ERROR_INTERNAL",
			path: "error/500/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: bi,
			meta: {
				HTTPStatus: 500
			},
			props: {
				error: "internal"
			}
		}, {
			name: "ERROR_UNKNOWN",
			path: "error/unknown/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: bi,
			meta: {
				HTTPStatus: 500
			},
			props: {
				error: "unknown"
			}
		}, {
			name: "ERROR_UNAUTHORIZED",
			path: "error/403/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: bi,
			meta: {
				HTTPStatus: 403
			},
			props: {
				error: "unauthorized"
			}
		}, {
			path: "*",
			name: "ERROR_NOT_FOUND",
			component: bi,
			meta: {
				HTTPStatus: 404
			},
			props: {
				error: "notFound"
			}
		}];
		const vi = () => s.e("page-my-feed").then(s.bind(null, "fb3a"));
		var Ei = [{
			name: "ARTICLES_LIST_FEED",
			path: "feed/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: vi
			},
			meta: {
				title: "TITLE_FEED",
				pageType: "feed",
				showPinnedPost: !0,
				rssLink: t => `/rss/feed/posts/all/${t.rssKey}/`
			},
			children: [{
				name: "ARTICLES_LIST_FEED_PAGES",
				path: "page:pageNum(\\d+)/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					title: "TITLE_FEED",
					rssLink: t => `/rss/feed/posts/all/${t.rssKey}/`
				}
			}]
		}];
		const Si = () => s.e("feed-setting").then(s.bind(null, "e7c1"));
		var Oi = [{
			name: "MY_FEED_SETTINGS",
			path: "feed/settings/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: Si
			},
			meta: {
				title: "TITLE_FEED_SETTINGS",
				requiresAuth: !0
			}
		}];
		const Ci = () => s.e("feedback").then(s.bind(null, "28d7"));
		var Ii = [{
			name: "FEEDBACK",
			path: "feedback/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: Ci
			}
		}],
			Ai = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMPage", {
					scopedSlots: t._u([{
						key: "default",
						fn: function () {
							return [s("div", {
								staticClass: "tm-page__top"
							}, [s("TMSectionName", {
								attrs: {
									name: t.flowName
								}
							}), t._v(" "), s("TMTabs", {
								staticClass: "tm-tabs_page-header",
								attrs: {
									exact: "",
									tabs: t.tabs
								}
							}), t._v(" "), s("div", {
								staticClass: "tm-flow__subheader"
							}, [t.isArticleFilterShown ? s("TMNavigationFilters", {
								attrs: {
									options: t.filterOptions
								},
								on: {
									applyFilter: t.saveFilter
								}
							}, [s("TMRssButton")], 1) : t._e()], 1), t._v(" "), t.showNavigationSearch ? s("TMNavigationSearch") : t._e()], 1), t._v(" "), s("router-view")]
						},
						proxy: !0
					}, {
						key: "sidebar",
						fn: function () {
							return [s("router-view", {
								attrs: {
									name: "sidebar"
								}
							})]
						},
						proxy: !0
					}])
				})
			},
			yi = [],
			Li = s("df93"),
			Pi = s("84c2"),
			Ni = s("47e8"),
			Ri = s("2517"),
			Mi = s("b92c"),
			wi = {
				components: {
					TMNavigationFilters: Li["a"],
					TMNavigationSearch: Pi["a"],
					TMRssButton: Ni["a"],
					TMPage: te["a"],
					TMSectionName: Ri["a"],
					TMTabs: Mi["a"]
				},
				computed: {
					...Object(g["c"])("i18n", ["langOptions", "pageTitle"]),
					...Object(g["c"])("global", ["isDesktop"]),
					showNavigationSearch() {
						return this.$route.meta.hasSearch
					},
					i18nFlows() {
						return {
							admin: this.msg("NAV_FLOW_ADMIN"),
							design: this.msg("NAV_FLOW_DESIGN"),
							develop: this.msg("NAV_FLOW_DEVELOP"),
							geektimes: this.msg("NAV_FLOW_GEEKTIMES"),
							popsci: this.msg("NAV_FLOW_POPSCI"),
							management: this.msg("NAV_FLOW_MANAGEMENT"),
							marketing: this.msg("NAV_FLOW_MARKETING"),
							misc: this.msg("NAV_FLOW_MISC")
						}
					},
					flowName() {
						return this.i18nFlows[this.$route.params.flowName]
					},
					filterOptions() {
						return this.isNewsRoute ? this.newsFilterOptions : this.articlesFilterOptions
					},
					articlesFilterOptions() {
						return [{
							label: this.msg("NAV_NEW"),
							value: "ARTICLES_LIST_BY_FLOW_ALL",
							rootLabel: this.msg("NAV_SHOW_FIRST"),
							mainLabel: this.msg("NAV_SHOW_BY_RATING"),
							children: [{
								label: this.msg("NAV_ALL"),
								value: "ARTICLES_LIST_BY_FLOW_ALL",
								params: {}
							}, {
								label: "â‰¥0",
								value: "ARTICLES_LIST_BY_FLOW_ALL_SCORE",
								params: {
									score: "0"
								}
							}, {
								label: "â‰¥10",
								value: "ARTICLES_LIST_BY_FLOW_ALL_SCORE",
								params: {
									score: "10"
								}
							}, {
								label: "â‰¥25",
								value: "ARTICLES_LIST_BY_FLOW_ALL_SCORE",
								params: {
									score: "25"
								}
							}, {
								label: "â‰¥50",
								value: "ARTICLES_LIST_BY_FLOW_ALL_SCORE",
								params: {
									score: "50"
								}
							}, {
								label: "â‰¥100",
								value: "ARTICLES_LIST_BY_FLOW_ALL_SCORE",
								params: {
									score: "100"
								}
							}]
						}, {
							label: this.msg("NAV_BEST"),
							value: "ARTICLES_LIST_BY_FLOW_TOP",
							rootLabel: this.msg("NAV_SHOW_FIRST"),
							mainLabel: this.msg("NAV_SHOW_BY_PERIOD"),
							children: [{
								label: this.msg("NAV_DAY"),
								value: "ARTICLES_LIST_BY_FLOW_TOP_PERIOD",
								params: {
									period: "daily"
								}
							}, {
								label: this.msg("NAV_WEEK"),
								value: "ARTICLES_LIST_BY_FLOW_TOP_PERIOD",
								params: {
									period: "weekly"
								}
							}, {
								label: this.msg("NAV_MONTH"),
								value: "ARTICLES_LIST_BY_FLOW_TOP_PERIOD",
								params: {
									period: "monthly"
								}
							}, {
								label: this.msg("NAV_YEAR"),
								value: "ARTICLES_LIST_BY_FLOW_TOP_PERIOD",
								params: {
									period: "yearly"
								}
							}, {
								label: this.msg("NAV_ALLTIME"),
								value: "ARTICLES_LIST_BY_FLOW_TOP_PERIOD",
								params: {
									period: "alltime"
								}
							}]
						}]
					},
					newsFilterOptions() {
						return [{
							label: this.msg("NAV_NEW"),
							value: "NEWS_LIST_BY_FLOW_ALL",
							rootLabel: this.msg("NAV_SHOW_FIRST"),
							mainLabel: this.msg("NAV_SHOW_BY_RATING"),
							children: [{
								label: this.msg("NAV_ALL"),
								value: "NEWS_LIST_BY_FLOW_ALL",
								params: {}
							}, {
								label: "â‰¥0",
								value: "NEWS_LIST_BY_FLOW_SCORE",
								params: {
									score: "0"
								}
							}, {
								label: "â‰¥10",
								value: "NEWS_LIST_BY_FLOW_SCORE",
								params: {
									score: "10"
								}
							}, {
								label: "â‰¥25",
								value: "NEWS_LIST_BY_FLOW_SCORE",
								params: {
									score: "25"
								}
							}, {
								label: "â‰¥50",
								value: "NEWS_LIST_BY_FLOW_SCORE",
								params: {
									score: "50"
								}
							}, {
								label: "â‰¥100",
								value: "NEWS_LIST_BY_FLOW_SCORE",
								params: {
									score: "100"
								}
							}]
						}, {
							label: this.msg("NAV_BEST"),
							value: "NEWS_LIST_BY_FLOW_TOP",
							rootLabel: this.msg("NAV_SHOW_FIRST"),
							mainLabel: this.msg("NAV_SHOW_BY_PERIOD"),
							children: [{
								label: this.msg("NAV_DAY"),
								value: "NEWS_LIST_BY_FLOW_TOP_PERIOD",
								params: {
									period: "daily"
								}
							}, {
								label: this.msg("NAV_WEEK"),
								value: "NEWS_LIST_BY_FLOW_TOP_PERIOD",
								params: {
									period: "weekly"
								}
							}, {
								label: this.msg("NAV_MONTH"),
								value: "NEWS_LIST_BY_FLOW_TOP_PERIOD",
								params: {
									period: "monthly"
								}
							}, {
								label: this.msg("NAV_YEAR"),
								value: "NEWS_LIST_BY_FLOW_TOP_PERIOD",
								params: {
									period: "yearly"
								}
							}, {
								label: this.msg("NAV_ALLTIME"),
								value: "NEWS_LIST_BY_FLOW_TOP_PERIOD",
								params: {
									period: "alltime"
								}
							}]
						}]
					},
					tabs() {
						return [{
							title: this.msg("NAV_ARTICLES"),
							route: {
								name: "FLOW_PAGE",
								params: {
									flowName: this.$route.params.flowName,
									hl: this.langOptions.hl
								}
							},
							children: Object(Fe["d"])(this.articlesFilterOptions)
						}, {
							title: this.msg("NAV_NEWS"),
							route: {
								name: "NEWS_LIST_BY_FLOW",
								params: {
									flowName: this.$route.params.flowName,
									hl: this.langOptions.hl
								}
							},
							children: Object(Fe["d"])(this.newsFilterOptions)
						}, {
							title: this.msg("NAV_HUBS"),
							route: {
								name: "HUBS_BY_FLOW",
								params: {
									flowName: this.$route.params.flowName,
									hl: this.langOptions.hl
								}
							}
						}, {
							title: this.msg("NAV_AUTHORS"),
							route: {
								name: "AUTHORS_BY_FLOW",
								params: {
									flowName: this.$route.params.flowName,
									hl: this.langOptions.hl
								}
							}
						}, {
							title: this.msg("NAV_COMPANIES"),
							route: {
								name: "COMPANIES_BY_FLOW",
								params: {
									flowName: this.$route.params.flowName,
									hl: this.langOptions.hl
								}
							}
						}]
					},
					isArticleFilterShown() {
						return !0 === this.$route.meta.showFilter
					},
					pageMetaDescription() {
						return this.$route.meta.description ? [{
							vmid: "description",
							name: "description",
							content: this.msg(this.$route.meta.description, {
								...this.$route.params,
								flowName: this.flowName
							})
						}, {
							vmid: "og:description",
							property: "og:description",
							content: this.msg(this.$route.meta.description, {
								...this.$route.params,
								flowName: this.flowName
							})
						}] : []
					},
					pageMeta() {
						return [{
							property: "og:title",
							content: this.pageTitle(this.pageTitlePart),
							vmid: "og:title"
						}]
					},
					pageTitlePart() {
						return this.$route.meta.title ? this.msg(this.$route.meta.title, {
							...this.$route.params,
							flowName: this.flowName
						}) : ""
					},
					isNewsRoute() {
						return this.$route.matched.some(t => t.name && t.name.startsWith("NEWS_LIST_BY_FLOW_"))
					}
				},
				methods: {
					bem: k["a"],
					saveFilter(t) {
						Object(Nt["b"])({
							route: this.$router.resolve(t),
							flowName: this.$route.params.flowName,
							isNews: this.isNewsRoute
						})
					}
				},
				metaInfo() {
					return {
						title: this.pageTitlePart,
						meta: [...this.pageMetaDescription, ...this.pageMeta]
					}
				}
			},
			ki = wi,
			ji = (s("5580"), Object(L["a"])(ki, Ai, yi, !1, null, null, null)),
			Di = ji.exports,
			xi = s("fa58"),
			Bi = s("5e87");
		const $i = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-flow~page-flows"), s.e("page-flow")]).then(s.bind(null, "7267")),
			Fi = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-flow~page-flows"), s.e("page-flow")]).then(s.bind(null, "d12e")),
			Gi = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-flow~page-flows"), s.e("page-flow")]).then(s.bind(null, "dacc")),
			Ui = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-flow~page-flows"), s.e("page-flow")]).then(s.bind(null, "2d5c")),
			Vi = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-flow~page-flows"), s.e("page-flow")]).then(s.bind(null, "48ff")),
			Wi = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-flow~page-flows"), s.e("page-flow")]).then(s.bind(null, "1937"));
		var Hi = [{
			path: "flows/geektimes/*",
			redirect: t => ({
				path: "/:hl/flows/popsci/" + t.params.pathMatch
			})
		}, {
			name: "ALL_FLOWS",
			path: "flows/all/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: Di
		}, {
			name: "FLOW_PAGE",
			path: "flows/:flowName/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: Di,
			meta: {
				pageType: "feed"
			},
			children: [{
				name: "ARTICLES_LIST_BY_FLOW_ALL",
				path: "",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: xi["default"],
					sidebar: $i
				},
				meta: {
					canonicalRoute: "FLOW_PAGE",
					showFilter: !0,
					showPinnedPost: !0,
					title: "TITLE_FLOW_PAGE_LATEST",
					navTitle: "NAV_TITLE_LATEST",
					description: "DESCRIPTION_FLOW_PAGE_LATEST",
					rssLink: t => `/rss/flows/${t.flowName}/all/`
				},
				children: [{
					name: "ARTICLES_LIST_BY_FLOW_ALL_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "FLOW_PAGE",
						showFilter: !0,
						title: "TITLE_FLOW_PAGE_LATEST",
						navTitle: "NAV_TITLE_LATEST",
						description: "DESCRIPTION_FLOW_PAGE_LATEST",
						rssLink: t => `/rss/flows/${t.flowName}/all/`
					}
				}, {
					name: "ARTICLES_LIST_BY_FLOW_ALL_SCORE",
					path: "top:score(0|10|25|50|100)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "FLOW_PAGE",
						showFilter: !0,
						showPinnedPost: !0,
						title: "TITLE_FLOW_PAGE_SCORE",
						navTitle: "NAV_TITLE_SCORE",
						description: "DESCRIPTION_FLOW_PAGE_SCORE",
						rssLink: t => `/rss/flows/${t.flowName}/top${t.score}/`
					},
					children: [{
						name: "ARTICLES_LIST_BY_FLOW_ALL_SCORE_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "FLOW_PAGE",
							showFilter: !0,
							title: "TITLE_FLOW_PAGE_SCORE",
							navTitle: "NAV_TITLE_SCORE",
							description: "DESCRIPTION_FLOW_PAGE_SCORE",
							rssLink: t => `/rss/flows/${t.flowName}/top${t.score}/`
						}
					}]
				}]
			}, {
				name: "ARTICLES_LIST_BY_FLOW_TOP",
				path: "top/",
				components: {
					default: xi["default"],
					sidebar: $i
				},
				redirect: t => ({
					name: "ARTICLES_LIST_BY_FLOW_TOP_PERIOD",
					params: {
						...t.params,
						period: "daily"
					}
				}),
				children: [{
					name: "ARTICLES_LIST_BY_FLOW_TOP_PERIOD",
					path: ":period(daily|monthly|weekly|yearly|alltime)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "FLOW_PAGE",
						showFilter: !0,
						showPinnedPost: !0,
						title: "TITLE_FLOW_PAGE_PERIOD",
						navTitle: "NAV_TITLE_PERIOD",
						description: "DESCRIPTION_FLOW_PAGE_PERIOD",
						rssLink: t => `/rss/flows/${t.flowName}/top/${t.period}/`
					},
					children: [{
						name: "ARTICLES_LIST_BY_FLOW_TOP_PERIOD_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "FLOW_PAGE",
							showFilter: !0,
							title: "TITLE_FLOW_PAGE_PERIOD",
							navTitle: "NAV_TITLE_PERIOD",
							description: "DESCRIPTION_FLOW_PAGE_PERIOD",
							rssLink: t => `/rss/flows/${t.flowName}/top/${t.period}/`
						}
					}]
				}]
			}, {
				name: "NEWS_LIST_BY_FLOW",
				path: "news/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Bi["default"],
					sidebar: $i
				},
				children: [{
					name: "NEWS_LIST_BY_FLOW_ALL",
					path: "",
					pathToRegexpOptions: {
						strict: !0
					},
					components: {
						default: Bi["default"],
						sidebar: $i
					},
					meta: {
						title: "FLOW_PAGE_NEWS_META_TITLE",
						showFilter: !0,
						description: "FLOW_PAGE_NEWS_META_DESCRIPTION",
						showCompanyRatingBlock: !0,
						navTitle: "NAV_TITLE_LATEST"
					},
					children: [{
						name: "NEWS_LIST_BY_FLOW_ALL_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							title: "FLOW_PAGE_NEWS_META_TITLE",
							showFilter: !0,
							description: "FLOW_PAGE_NEWS_META_DESCRIPTION",
							rssLink: t => `/rss/flows/${t.flowName}/news/`
						}
					}, {
						name: "NEWS_LIST_BY_FLOW_SCORE",
						path: "top:score(0|10|25|50|100)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "NEWS",
							showFilter: !0,
							showCompanyRatingBlock: !0,
							title: "TITLE_NEWS_SCORE",
							navTitle: "NAV_TITLE_SCORE",
							description: "FLOW_PAGE_NEWS_META_DESCRIPTION"
						},
						children: [{
							name: "NEWS_LIST_BY_FLOW_SCORE_PAGES",
							path: "page:pageNum(\\d+)/",
							pathToRegexpOptions: {
								strict: !0
							},
							meta: {
								canonicalRoute: "NEWS",
								showFilter: !0,
								showCompanyRatingBlock: !0,
								title: "TITLE_NEWS_SCORE",
								navTitle: "NAV_TITLE_SCORE",
								description: "FLOW_PAGE_NEWS_META_DESCRIPTION"
							}
						}]
					}]
				}, {
					name: "NEWS_LIST_BY_FLOW_TOP",
					path: "top/",
					components: {
						default: Bi["default"],
						sidebar: $i
					},
					redirect: {
						name: "NEWS_LIST_BY_FLOW_TOP_PERIOD",
						params: {
							period: "daily"
						}
					},
					children: [{
						name: "NEWS_LIST_BY_FLOW_TOP_PERIOD",
						path: ":period(daily|monthly|weekly|yearly|alltime)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "NEWS_LIST_TOP",
							showFilter: !0,
							showCompanyRatingBlock: !0,
							title: "TITLE_NEWS_PERIOD_FLOW",
							navTitle: "NAV_TITLE_PERIOD",
							description: "DESCRIPTION_PERIOD"
						},
						children: [{
							name: "NEWS_LIST_BY_FLOW_TOP_PERIOD_PAGES",
							path: "page:pageNum(\\d+)/",
							pathToRegexpOptions: {
								strict: !0
							},
							meta: {
								canonicalRoute: "NEWS_LIST_TOP",
								showFilter: !0,
								showCompanyRatingBlock: !0,
								title: "TITLE_NEWS_PERIOD_FLOW",
								navTitle: "NAV_TITLE_PERIOD",
								description: "DESCRIPTION_PERIOD"
							}
						}]
					}]
				}]
			}, {
				name: "HUBS_BY_FLOW",
				path: "hubs/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Vi,
					sidebar: Gi
				},
				meta: {
					title: "FLOW_PAGE_HUBS_META_TITLE",
					description: "FLOW_PAGE_HUBS_META_DESCRIPTION",
					hasSearch: !0
				},
				children: [{
					name: "HUBS_BY_FLOW_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						title: "FLOW_PAGE_HUBS_META_TITLE",
						description: "FLOW_PAGE_HUBS_META_DESCRIPTION",
						hasSearch: !0
					}
				}]
			}, {
				name: "AUTHORS_BY_FLOW",
				path: "authors/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Wi,
					sidebar: Fi
				},
				meta: {
					title: "FLOW_PAGE_AUTHORS_META_TITLE",
					description: "FLOW_PAGE_AUTHORS_META_DESCRIPTION",
					hasSearch: !0
				},
				children: [{
					name: "AUTHORS_BY_FLOW_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						title: "FLOW_PAGE_AUTHORS_META_TITLE",
						description: "FLOW_PAGE_AUTHORS_META_DESCRIPTION",
						hasSearch: !0
					}
				}]
			}, {
				name: "COMPANIES_BY_FLOW",
				path: "companies/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Ui,
					sidebar: Fi
				},
				meta: {
					title: "FLOW_PAGE_COMPANIES_META_TITLE",
					description: "FLOW_PAGE_COMPANIES_META_DESCRIPTION",
					hasSearch: !0
				},
				children: [{
					name: "COMPANIES_BY_FLOW_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						title: "FLOW_PAGE_COMPANIES_META_TITLE",
						description: "FLOW_PAGE_COMPANIES_META_DESCRIPTION",
						hasSearch: !0
					}
				}]
			}]
		}];
		const Yi = () => Promise.all([s.e("page-flow~page-flows"), s.e("page-flows")]).then(s.bind(null, "c5f1")),
			qi = () => Promise.all([s.e("page-flow~page-flows"), s.e("page-flows")]).then(s.bind(null, "2637")),
			Ki = () => Promise.all([s.e("page-flow~page-flows"), s.e("page-flows")]).then(s.bind(null, "f735")),
			zi = () => Promise.all([s.e("page-flow~page-flows"), s.e("page-flows")]).then(s.bind(null, "1e5a")),
			Xi = () => Promise.all([s.e("page-flow~page-flows"), s.e("page-flows")]).then(s.bind(null, "fa58")),
			Ji = () => Promise.all([s.e("page-flow~page-flows"), s.e("page-flows")]).then(s.bind(null, "2d5c")),
			Qi = () => Promise.all([s.e("page-flow~page-flows"), s.e("page-flows")]).then(s.bind(null, "48ff")),
			Zi = () => Promise.all([s.e("page-flow~page-flows"), s.e("page-flows")]).then(s.bind(null, "5e87")),
			to = () => Promise.all([s.e("page-flow~page-flows"), s.e("page-flows")]).then(s.bind(null, "1937"));
		var eo = [{
			name: "INDEX",
			path: "",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: Yi
			},
			meta: {
				pageType: "feed"
			},
			redirect: {
				name: "ARTICLES_LIST_ALL"
			},
			children: [{
				name: "INDEX_PAGES",
				path: "page:pageNum(\\d+)/",
				pathToRegexpOptions: {
					strict: !0
				},
				redirect: {
					name: "ARTICLES_LIST_ALL_PAGES"
				},
				components: {
					sidebar: qi
				}
			}, {
				name: "ARTICLES_LIST_ALL",
				path: "all/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Xi,
					sidebar: qi
				},
				meta: {
					showFilter: !0,
					showPinnedPost: !0,
					showCompanyRatingBlock: !0,
					title: "TITLE_LATEST",
					navTitle: "NAV_TITLE_LATEST",
					description: "DESCRIPTION_SCORE",
					rssLink: () => "/rss/all/all/"
				},
				children: [{
					name: "ARTICLES_LIST_ALL_SCORE",
					path: "top:score(0|10|25|50|100)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "ARTICLES_LIST_ALL",
						showFilter: !0,
						showPinnedPost: !0,
						showCompanyRatingBlock: !0,
						title: "TITLE_SCORE",
						navTitle: "NAV_TITLE_SCORE",
						description: "DESCRIPTION_SCORE",
						rssLink: t => `/rss/all/top${t.score}/`
					},
					children: [{
						name: "ARTICLES_LIST_ALL_SCORE_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "ARTICLES_LIST_ALL",
							showFilter: !0,
							showCompanyRatingBlock: !0,
							title: "TITLE_SCORE",
							navTitle: "NAV_TITLE_SCORE",
							description: "DESCRIPTION_SCORE",
							rssLink: t => `/rss/all/top${t.score}/`
						}
					}]
				}, {
					name: "ARTICLES_LIST_ALL_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						showFilter: !0,
						showCompanyRatingBlock: !0,
						title: "TITLE_LATEST",
						navTitle: "NAV_TITLE_LATEST",
						description: "DESCRIPTION_SCORE",
						rssLink: () => "/rss/all/all/"
					}
				}]
			}, {
				name: "ARTICLES_LIST_TOP",
				path: "top/",
				components: {
					default: Xi,
					sidebar: qi
				},
				redirect: {
					name: "ARTICLES_LIST_TOP_PERIOD",
					params: {
						period: "daily"
					}
				},
				children: [{
					name: "ARTICLES_LIST_TOP_PERIOD",
					path: ":period(daily|monthly|weekly|yearly|alltime)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "ARTICLES_LIST_TOP",
						showFilter: !0,
						showPinnedPost: !0,
						showCompanyRatingBlock: !0,
						title: "TITLE_PERIOD",
						navTitle: "NAV_TITLE_PERIOD",
						description: "DESCRIPTION_PERIOD",
						rssLink: t => `/rss/best/${t.period}/`
					},
					children: [{
						name: "ARTICLES_LIST_TOP_PERIOD_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "ARTICLES_LIST_TOP",
							showFilter: !0,
							showCompanyRatingBlock: !0,
							title: "TITLE_PERIOD",
							navTitle: "NAV_TITLE_PERIOD",
							description: "DESCRIPTION_PERIOD",
							rssLink: t => `/rss/best/${t.period}/`
						}
					}]
				}]
			}, {
				name: "NEWS",
				path: "news/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Zi,
					sidebar: qi
				},
				children: [{
					name: "NEWS_LIST_ALL",
					path: "",
					pathToRegexpOptions: {
						strict: !0
					},
					components: {
						default: Zi,
						sidebar: qi
					},
					meta: {
						showFilter: !0,
						showCompanyRatingBlock: !0,
						title: "NEWS_PAGE_META_TITLE",
						navTitle: "NAV_TITLE_LATEST",
						description: "NEWS_PAGE_META_DESCRIPTION",
						rssLink: () => "/rss/news/"
					},
					children: [{
						name: "NEWS_LIST_ALL_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							showFilter: !0,
							title: "NEWS_PAGE_META_TITLE",
							navTitle: "NAV_TITLE_LATEST",
							description: "NEWS_PAGE_META_DESCRIPTION",
							showCompanyRatingBlock: !0
						}
					}, {
						name: "NEWS_LIST_ALL_SCORE",
						path: "top:score(0|10|25|50|100)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "NEWS",
							showFilter: !0,
							showCompanyRatingBlock: !0,
							title: "TITLE_NEWS_SCORE",
							navTitle: "NAV_TITLE_SCORE",
							description: "NEWS_PAGE_META_DESCRIPTION"
						},
						children: [{
							name: "NEWS_LIST_ALL_SCORE_PAGES",
							path: "page:pageNum(\\d+)/",
							pathToRegexpOptions: {
								strict: !0
							},
							meta: {
								canonicalRoute: "NEWS",
								showFilter: !0,
								showCompanyRatingBlock: !0,
								title: "TITLE_NEWS_SCORE",
								navTitle: "NAV_TITLE_SCORE",
								description: "NEWS_PAGE_META_DESCRIPTION"
							}
						}]
					}]
				}, {
					name: "NEWS_LIST_TOP",
					path: "top/",
					components: {
						default: Xi,
						sidebar: qi
					},
					redirect: {
						name: "NEWS_LIST_TOP_PERIOD",
						params: {
							period: "daily"
						}
					},
					children: [{
						name: "NEWS_LIST_TOP_PERIOD",
						path: ":period(daily|monthly|weekly|yearly|alltime)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "NEWS_LIST_TOP",
							showFilter: !0,
							showCompanyRatingBlock: !0,
							title: "TITLE_NEWS_PERIOD",
							navTitle: "NAV_TITLE_PERIOD",
							description: "DESCRIPTION_PERIOD"
						},
						children: [{
							name: "NEWS_LIST_TOP_PERIOD_PAGES",
							path: "page:pageNum(\\d+)/",
							pathToRegexpOptions: {
								strict: !0
							},
							meta: {
								canonicalRoute: "NEWS_LIST_TOP",
								showFilter: !0,
								showCompanyRatingBlock: !0,
								title: "TITLE_NEWS_PERIOD",
								navTitle: "NAV_TITLE_PERIOD",
								description: "DESCRIPTION_PERIOD"
							}
						}]
					}]
				}]
			}, {
				name: "HUBS",
				path: "hubs/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Qi,
					sidebar: qi
				},
				meta: {
					hasSearch: !0,
					title: "NAV_HUBS"
				},
				children: [{
					name: "HUBS_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						title: "NAV_HUBS"
					}
				}]
			}, {
				name: "USERS",
				path: "users/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: to,
					sidebar: Ki
				},
				meta: {
					title: "SEARCH_TAB_USERS_LONG",
					hasSearch: !0,
					noindex: !0
				},
				children: [{
					name: "USERS_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						title: "SEARCH_TAB_USERS_LONG",
						noindex: !0
					}
				}]
			}, {
				name: "COMPANIES",
				path: "companies/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Ji,
					sidebar: zi
				},
				meta: {
					title: "NAV_COMPANIES",
					hasSearch: !0
				},
				children: [{
					name: "COMPANIES_CATEGORIES",
					path: "category/:categoryAlias/",
					pathToRegexpOptions: {
						strict: !0
					},
					components: {
						default: Ji,
						sidebar: zi
					},
					children: [{
						name: "COMPANIES_CATEGORIES_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						}
					}]
				}, {
					name: "COMPANIES_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						title: "NAV_COMPANIES"
					}
				}]
			}]
		}];
		const so = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-hub")]).then(s.bind(null, "36ab")),
			no = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-hub")]).then(s.bind(null, "fdad")),
			ao = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-hub")]).then(s.bind(null, "915d")),
			io = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-hub")]).then(s.bind(null, "fa58")),
			oo = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-hub")]).then(s.bind(null, "2d5c")),
			ro = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-hub")]).then(s.bind(null, "1937"));
		var co = [{
			path: "hub/:hubName/",
			name: "HUB_PAGE",
			pathToRegexpOptions: {
				strict: !0
			},
			component: so,
			redirect: {
				name: "ARTICLES_LIST_BY_HUB_ALL"
			},
			meta: {
				pageType: "feed"
			},
			children: [{
				name: "ARTICLES_LIST_BY_HUB_ALL",
				path: "",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: io,
					sidebar: no
				},
				meta: {
					canonicalRoute: "HUB_PAGE",
					showFilter: !0,
					navTitle: "NAV_TITLE_LATEST",
					rssLink: t => `/rss/hub/${t.hubName}/all/`
				},
				children: [{
					name: "ARTICLES_LIST_BY_HUB_ALL_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "HUB_PAGE",
						showFilter: !0,
						navTitle: "NAV_TITLE_LATEST",
						rssLink: t => `/rss/hub/${t.hubName}/all/`
					}
				}, {
					name: "ARTICLES_LIST_BY_HUB_ALL_SCORE",
					path: "top:score(0|10|25|50|100)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "HUB_PAGE",
						showFilter: !0,
						navTitle: "NAV_TITLE_SCORE",
						rssLink: t => `/rss/hub/${t.hubName}/top${t.score}/`
					},
					children: [{
						name: "ARTICLES_LIST_BY_HUB_ALL_SCORE_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "HUB_PAGE",
							showFilter: !0,
							navTitle: "NAV_TITLE_SCORE",
							rssLink: t => `/rss/hub/${t.hubName}/top${t.score}/`
						}
					}]
				}]
			}, {
				name: "ARTICLES_LIST_BY_HUB_TOP",
				path: "top/",
				components: {
					default: io,
					sidebar: no
				},
				redirect: {
					name: "ARTICLES_LIST_BY_HUB_TOP_PERIOD",
					params: {
						period: "daily"
					}
				},
				children: [{
					name: "ARTICLES_LIST_BY_HUB_TOP_PERIOD",
					path: ":period(daily|monthly|weekly|yearly|alltime)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "HUB_PAGE",
						showFilter: !0,
						title: "TITLE_LATEST",
						navTitle: "NAV_TITLE_PERIOD",
						rssLink: t => `/rss/hub/${t.hubName}/top/${t.period}/`
					},
					children: [{
						name: "ARTICLES_LIST_BY_HUB_TOP_PERIOD_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "HUB_PAGE",
							showFilter: !0,
							title: "TITLE_LATEST",
							navTitle: "NAV_TITLE_PERIOD",
							rssLink: t => `/rss/hub/${t.hubName}/top/${t.period}/`
						}
					}]
				}]
			}, {
				name: "AUTHORS_BY_HUB",
				path: "authors/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					hasSearch: !0
				},
				components: {
					default: ro,
					sidebar: ao
				},
				children: [{
					name: "AUTHORS_BY_HUB_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "HUB_PAGE",
						hasSearch: !0
					}
				}]
			}, {
				name: "COMPANIES_BY_HUB",
				path: "companies/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					hasSearch: !0
				},
				components: {
					default: oo,
					sidebar: ao
				},
				children: [{
					name: "COMPANIES_BY_HUB_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "HUB_PAGE",
						hasSearch: !0
					}
				}]
			}]
		}];
		const lo = () => s.e("info").then(s.bind(null, "088c"));
		var uo = [{
			name: "INFO",
			path: "info/:section(welcome|overview)/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: lo
			},
			children: [{
				name: "INFO_TOPICS",
				path: ":topic?/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					hideUserNotices: !0
				}
			}]
		}, {
			path: "info/*",
			pathToRegexpOptions: {
				strict: !0
			},
			beforeEnter: (t, e, s) => {
				const {
					hl: n,
					pathMatch: a
				} = t.params;
				if (-1 !== a.indexOf("welcome")) return s();
				if (-1 !== a.indexOf("overview/dotnet")) return s();
				switch (a) {
					case "company/":
						return s({
							path: `/${n}/docs/companies/corpblogs/`
						});
					case "authors/":
						return s({
							path: `/${n}/docs/authors/codex/`
						});
					case "rules/":
						return s({
							path: `/${n}/docs/docs/rules/`
						});
					case "legal/":
						return s({
							path: `/${n}/docs/docs/legal/`
						});
					case "topics/how-to/":
						return s({
							path: `/${n}/sandbox/start/`
						});
					case "topics/madskillz/":
						return s({
							path: `/${n}/docs/companies/design/`
						});
					case "topics/toolkit/":
						return s({
							path: `/${n}/docs/companies/preparations/`
						});
					case "help/":
						return s({
							path: `/${n}/docs/${t.params.pathMatch}`
						});
					case "help/sponsorship-info/":
						return s({
							path: `/${n}/docs/companies/sponsorship/`
						});
					case "help/others/":
						return s({
							path: `/${n}/docs/help/hotkeys/`
						});
					case "advert_rules/":
					case "advert-rules/":
						return s({
							path: `/${n}/docs/docs/advert-rules/`
						});
					default:
				}
				return a.startsWith("help/") ? s({
					path: `/${n}/docs/${a}`
				}) : s({
					path: `/${n}/docs/`
				})
			}
		}];
		const mo = () => s.e("publication").then(s.bind(null, "9122")),
			po = () => s.e("megaposts-admin").then(s.bind(null, "a334"));
		var _o = [{
			name: "MEGAPOST_ADMIN",
			path: "megapost/admin/",
			pathToRegexpOptions: {
				strict: !0
			},
			meta: {
				title: "MEGAPOSTS_TITLE",
				requiresAuth: !0,
				isMegapostPage: !0,
				groups: ["super"]
			},
			components: {
				default: po
			},
			children: [{
				name: "MEGAPOST_ADMIN_PAGES",
				path: "page:pageNum(\\d+)/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					title: "MEGAPOSTS_TITLE",
					requiresAuth: !0,
					isMegapostPage: !0,
					groups: ["super"]
				}
			}]
		}, {
			name: "PUBLICATION_MEGAPOST",
			path: "megapost/new/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: mo,
			meta: {
				isMegapostPage: !0
			}
		}, {
			name: "PUBLICATION_MEGAPOST_EDIT",
			path: "megapost/edit/:postId/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: mo,
			meta: {
				isMegapostPage: !0
			}
		}];
		const ho = () => s.e("megaprojects").then(s.bind(null, "fc2e"));
		var go = [{
			name: "MEGAPROJECTS",
			path: "megaprojects/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: ho
			},
			meta: {
				title: "NAV_MEGAPROJECTS",
				description: "MEGAPROJECTS_DESCRIPTION",
				pageType: "feed"
			},
			children: [{
				name: "MEGAPROJECTS_PAGES",
				path: "page:pageNum(\\d+)/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					title: "NAV_MEGAPROJECTS",
					description: "MEGAPROJECTS_DESCRIPTION"
				}
			}]
		}];
		const fo = () => s.e("page-ppa").then(s.bind(null, "244b")),
			bo = () => s.e("page-ppa").then(s.bind(null, "73cd")),
			To = () => s.e("page-ppa").then(s.bind(null, "306a")),
			vo = () => s.e("page-ppa").then(s.bind(null, "277c")),
			Eo = () => s.e("page-ppa").then(s.bind(null, "7714")),
			So = () => s.e("page-ppa").then(s.bind(null, "23ee")),
			Oo = () => s.e("page-ppa").then(s.bind(null, "44a3")),
			Co = () => s.e("page-ppa").then(s.bind(null, "0a37"));
		var Io = [{
			name: "PPA_ROOT",
			path: "ppa/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: fo,
			redirect: {
				path: "ppa/faq/"
			},
			children: [{
				name: "PPA_BALANCE",
				path: "balance/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					title: "PPA_SUBPAGE_BALANCE"
				},
				components: {
					default: Oo,
					sidebar: vo
				},
				children: [{
					name: "PPA_BALANCE_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						title: "PPA_SUBPAGE_BALANCE"
					}
				}]
			}, {
				name: "PPA_WITHDRAW",
				path: "withdraw/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Co,
					sidebar: bo
				},
				meta: {
					title: "PPA_SUBPAGE_FUNDS_WITHDRAWAL"
				}
			}, {
				name: "PPA_ABOUT",
				path: "about/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Eo,
					sidebar: To
				},
				meta: {
					title: "PPA_SUBPAGE_ABOUT"
				}
			}, {
				name: "PPA_ARTICLE",
				path: ":alias/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: So,
					sidebar: To
				}
			}]
		}];
		const Ao = () => s.e("ppg").then(s.bind(null, "3889"));
		var yo = [{
			name: "PPG_COMMENTS",
			path: "ppg/comments/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: Ao,
			meta: {
				requiresAuth: !0
			}
		}, {
			name: "PPG_SMILES",
			path: "ppg/smiles/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: Ao,
			meta: {
				requiresAuth: !0
			}
		}];
		const Lo = () => s.e("publication").then(s.bind(null, "9122"));
		var Po = [{
			name: "PUBLICATION",
			path: "publication/new/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: Lo
		}, {
			name: "PUBLICATION_EDIT",
			path: "publication/edit/:postId/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: Lo
		}],
			No = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div")
			},
			Ro = [],
			Mo = {
				computed: {
					...Object(g["c"])("i18n", ["langOptions"])
				},
				beforeMount() {
					const t = Object(Nt["a"])(this.langOptions);
					this.$router.push(t)
				}
			},
			wo = Mo,
			ko = Object(L["a"])(wo, No, Ro, !1, null, null, null),
			jo = ko.exports,
			Do = [{
				name: "PWA",
				path: "pwa/",
				pathToRegexpOptions: {
					strict: !0
				},
				component: jo
			}];
		const xo = () => Promise.all([s.e("page-article~sandbox~user-articles-subpages"), s.e("sandbox")]).then(s.bind(null, "aaae")),
			Bo = () => Promise.all([s.e("page-article~sandbox~user-articles-subpages"), s.e("sandbox")]).then(s.bind(null, "e5de")),
			$o = () => Promise.all([s.e("page-article~sandbox~user-articles-subpages"), s.e("sandbox")]).then(s.bind(null, "f8c5")),
			Fo = () => Promise.all([s.e("page-article~sandbox~user-articles-subpages"), s.e("sandbox")]).then(s.bind(null, "efd6")),
			Go = () => Promise.all([s.e("page-article~sandbox~user-articles-subpages"), s.e("sandbox")]).then(s.bind(null, "e60d")),
			Uo = () => Promise.all([s.e("page-article~sandbox~user-articles-subpages"), s.e("sandbox")]).then(s.bind(null, "008d")),
			Vo = () => Promise.all([s.e("page-article~sandbox~user-articles-subpages"), s.e("sandbox")]).then(s.bind(null, "fc89")),
			Wo = () => s.e("publication").then(s.bind(null, "9122"));
		var Ho = [{
			path: "sandbox/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: xo
			},
			meta: {
				pageType: "sandbox"
			},
			children: [{
				name: "MOST_IMPORTANT_SANBOX_INFO",
				path: "start/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Vo,
					sidebar: Go
				},
				meta: {
					isSandboxPage: !0,
					title: "SANDBOX_PAGE_MOST_IMPORTANT_TITLE"
				}
			}, {
				name: "AWAIT_INVITE_AUTHORS_ARTICLES_LIST",
				path: "",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Uo,
					sidebar: Bo
				},
				meta: {
					isSandboxPage: !0,
					title: "SANDBOX_PAGE_AWAIT_INVITE_AUTHORS_TITLE"
				},
				children: [{
					name: "AWAIT_INVITE_AUTHORS_ARTICLES_LIST_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						isSandboxPage: !0,
						title: "SANDBOX_PAGE_AWAIT_INVITE_AUTHORS_TITLE"
					}
				}]
			}, {
				name: "NEW_AUTHORS_ARTICLES_LIST",
				path: "invited/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Uo,
					sidebar: $o
				},
				meta: {
					isSandboxPage: !0,
					title: "SANDBOX_PAGE_NEW_AUTHORS_TITLE",
					rssLink: () => "/rss/sandbox/invited/"
				},
				children: [{
					name: "NEW_AUTHORS_ARTICLES_LIST_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						isSandboxPage: !0,
						title: "SANDBOX_PAGE_NEW_AUTHORS_TITLE",
						rssLink: () => "/rss/sandbox/invited/"
					}
				}]
			}, {
				name: "MY_SANDBOX_ARTICLES_LIST",
				path: "my/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Uo,
					sidebar: Fo
				},
				meta: {
					isSandboxPage: !0,
					title: "SANDBOX_PAGE_MY_TITLE"
				},
				children: [{
					name: "MY_SANDBOX_ARTICLES_LIST_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					}
				}]
			}, {
				name: "AWAIT_MODERATION_ARTICLES_LIST",
				path: "disapproved/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Uo,
					sidebar: Fo
				},
				meta: {
					isSandboxPage: !0,
					title: "SANDBOX_PAGE_AWAIT_MODERATION_TITLE"
				},
				children: [{
					name: "AWAIT_MODERATION_ARTICLES_LIST_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						isSandboxPage: !0,
						title: "SANDBOX_PAGE_AWAIT_MODERATION_TITLE"
					}
				}]
			}]
		}, {
			name: "PUBLICATION_SANDBOX",
			path: "sandbox/new/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: Wo,
			meta: {
				isSandboxPage: !0
			}
		}, {
			name: "PUBLICATION_EDIT_SANDBOX",
			path: "sandbox/edit/:postId/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: Wo,
			meta: {
				isSandboxPage: !0
			}
		}];
		const Yo = () => s.e("search").then(s.bind(null, "650b")),
			qo = () => s.e("search").then(s.bind(null, "13f6")),
			Ko = () => s.e("search").then(s.bind(null, "04f7")),
			zo = () => s.e("search").then(s.bind(null, "d13d")),
			Xo = () => s.e("search").then(s.bind(null, "cefb")),
			Jo = () => s.e("search").then(s.bind(null, "47e1"));
		var Qo = [{
			path: "search/",
			pathToRegexpOptions: {
				strict: !0
			},
			props: t => ({
				currentPageName: t.query.target_type
			}),
			component: Yo,
			meta: {
				pageType: "search"
			},
			children: [{
				name: "SEARCH_QUERY_RESULTS",
				path: "",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					posts: qo,
					users: Ko,
					companies: zo,
					hubs: Xo,
					comments: Jo
				},
				meta: {
					rssLink: t => `/rss/search/?q=${t.q}\n        &order_by=${t.order}\n        &target_type=${t.target_type}\n        &hl=${t.hl}\n        &fl=${t.fl}\n      `
				},
				children: [{
					name: "SEARCH_QUERY_RESULTS_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					rssLink: t => `/rss/search/?q=${t.q}\n        &order_by=${t.order}\n        &target_type=${t.target_type}\n        &hl=${t.hl}\n        &fl=${t.fl}\n      `
				}]
			}]
		}];
		const Zo = () => s.e("user-settings").then(s.bind(null, "4365")),
			tr = () => s.e("user-apps").then(s.bind(null, "f502")),
			er = () => s.e("user-app").then(s.bind(null, "5e78")),
			sr = () => s.e("user-upgrade").then(s.bind(null, "15ce"));
		var nr = [{
			name: "USER_SETTINGS_PROFILE",
			path: "auth/settings/profile/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: Zo
			},
			meta: {
				requiresAuth: !0
			}
		}, {
			name: "USER_SETTINGS_UPGRADE",
			path: "auth/settings/upgrade/:invite/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: sr
			},
			meta: {
				requiresAuth: !0
			}
		}, {
			name: "USER_SETTINGS_PRIVACY",
			path: "auth/settings/privacy/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: Zo
			},
			meta: {
				requiresAuth: !0
			}
		}, {
			name: "USER_SETTINGS_NOTIFICATIONS",
			path: "auth/settings/notifications/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: Zo
			},
			meta: {
				requiresAuth: !0
			}
		}, {
			name: "USER_SETTINGS_SPECS",
			path: "auth/settings/specialization/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: Zo
			},
			meta: {
				requiresAuth: !0
			}
		}, {
			name: "USER_SETTINGS_MISC",
			path: "auth/settings/others/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: Zo
			},
			meta: {
				requiresAuth: !0
			}
		}, {
			name: "USER_SETTINGS_APPS_REGISTER",
			path: "auth/apps/register/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: er
			},
			meta: {
				requiresAuth: !0
			}
		}, {
			name: "USER_SETTINGS_APPS_EDIT",
			path: "auth/apps/details/:appId/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: er
			},
			meta: {
				requiresAuth: !0
			}
		}, {
			name: "USER_SETTINGS_APPS",
			path: "auth/apps/",
			pathToRegexpOptions: {
				strict: !0
			},
			components: {
				default: tr
			},
			meta: {
				requiresAuth: !0
			},
			children: [{
				name: "USER_SETTINGS_APPS_MY",
				path: "my/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: tr
				},
				meta: {
					requiresAuth: !0
				}
			}]
		}];
		const ar = () => s.e("page-technotext").then(s.bind(null, "acf3")),
			ir = [{
				name: "ARTICLES_LIST_TECHNOTEXT_ALL",
				path: "technotext/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: ar
				},
				meta: {
					title: "TITLE_TECHNOTEXT",
					pageType: "feed"
				},
				children: [{
					name: "ARTICLES_LIST_TECHNOTEXT_ALL_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						title: "TITLE_TECHNOTEXT"
					}
				}, {
					name: "ARTICLES_LIST_TECHNOTEXT_NOMINATION",
					path: ":nomination/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						title: "TITLE_TECHNOTEXT_NOMINATION"
					},
					children: [{
						name: "ARTICLES_LIST_TECHNOTEXT_NOMINATION_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							title: "TITLE_TECHNOTEXT_NOMINATION"
						}
					}]
				}]
			}];
		var or = ir;
		const rr = () => Promise.all([s.e("chunk-4b965a03"), s.e("tracker")]).then(s.bind(null, "53fa8"));
		var cr = [{
			name: "TRACKER",
			path: "tracker/",
			pathToRegexpOptions: {
				strict: !0
			},
			meta: {
				pageType: "tracker"
			},
			components: {
				default: rr
			},
			children: [{
				name: "TRACKER_PAGES",
				path: "page:pageNum(\\d+)/",
				pathToRegexpOptions: {
					strict: !0
				}
			}]
		}];
		const lr = () => s.e("page-user-comments").then(s.bind(null, "dfca")),
			ur = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-user")]).then(s.bind(null, "33a9")),
			mr = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-user")]).then(s.bind(null, "68cd")),
			dr = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-user")]).then(s.bind(null, "1122")),
			pr = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-user")]).then(s.bind(null, "f638")),
			_r = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-user")]).then(s.bind(null, "f4c6")),
			hr = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-user")]).then(s.bind(null, "24fc")),
			gr = () => Promise.all([s.e("page-company~page-flow~page-hub~page-user"), s.e("page-user")]).then(s.bind(null, "37b9")),
			fr = () => s.e("user-invites").then(s.bind(null, "42e4")),
			br = () => Promise.all([s.e("page-article~sandbox~user-articles-subpages"), s.e("user-articles-subpages")]).then(s.bind(null, "3868")),
			Tr = () => Promise.all([s.e("page-article~sandbox~user-articles-subpages"), s.e("user-articles-subpages")]).then(s.bind(null, "80c7")),
			vr = () => Promise.all([s.e("page-article~sandbox~user-articles-subpages"), s.e("user-articles-subpages")]).then(s.bind(null, "8431")),
			Er = () => Promise.all([s.e("page-article~sandbox~user-articles-subpages"), s.e("user-articles-subpages")]).then(s.bind(null, "0ee8")),
			Sr = () => Promise.all([s.e("page-article~sandbox~user-articles-subpages"), s.e("user-articles-subpages")]).then(s.bind(null, "71a5")),
			Or = () => Promise.all([s.e("page-company-admin~user-statistics"), s.e("user-statistics")]).then(s.bind(null, "ccda"));
		var Cr = [{
			path: "users/:login/",
			components: {
				default: ur
			},
			meta: {
				pageType: "feed"
			},
			children: [{
				name: "USER_PROFILE",
				path: "",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: gr
				},
				meta: {
					canonicalRoute: "USER_PROFILE",
					showFilter: !0
				}
			}, {
				name: "USER_INVITES",
				path: "invites/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: fr
				},
				meta: {
					canonicalRoute: "USER_PROFILE",
					requiresAuth: !0,
					showFilter: !0
				}
			}, {
				name: "USER_NOTES",
				path: "notes/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Sr
				},
				meta: {
					canonicalRoute: "USER_PROFILE",
					title: "NAV_PROFILE_NOTES",
					requiresAuth: !0,
					showFilter: !0
				},
				children: [{
					name: "USER_NOTES_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "USER_PROFILE",
						title: "NAV_PROFILE_NOTES",
						requiresAuth: !0,
						showFilter: !0
					}
				}]
			}, {
				name: "USER_KARMA_RESET",
				path: "reset/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: Er
				},
				meta: {
					canonicalRoute: "USER_PROFILE",
					title: "KARMA_RESET",
					requiresAuth: !0,
					showFilter: !0
				}
			}, {
				path: "posts/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					canonicalRoute: "USER_PROFILE"
				},
				components: {
					default: {
						render(t) {
							return t("router-view")
						}
					}
				},
				children: [{
					path: "",
					name: "ARTICLES_LIST_BY_USER",
					pathToRegexpOptions: {
						strict: !0
					},
					components: {
						default: mr
					},
					meta: {
						canonicalRoute: "USER_PROFILE",
						showFilter: !0,
						rssLink: t => `/rss/users/${t.login}/posts/`
					},
					children: [{
						name: "ARTICLES_LIST_BY_USER_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "USER_PROFILE",
							showFilter: !0,
							rssLink: t => `/rss/users/${t.login}/posts/`
						}
					}]
				}, {
					name: "ARTICLES_DRAFTS_LIST_BY_USER",
					path: "drafts/",
					pathToRegexpOptions: {
						strict: !0
					},
					components: {
						default: br
					},
					meta: {
						canonicalRoute: "USER_PROFILE",
						showFilter: !0
					},
					children: [{
						name: "ARTICLES_DRAFTS_LIST_BY_USER_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "USER_PROFILE",
							showFilter: !0
						}
					}]
				}, {
					name: "ARTICLES_LIST_SANDBOX_BY_USER",
					path: "sandbox/",
					pathToRegexpOptions: {
						strict: !0
					},
					components: {
						default: Tr
					},
					meta: {
						canonicalRoute: "USER_PROFILE",
						pageType: "feed",
						showFilter: !0,
						isSandboxPage: !0
					},
					children: [{
						name: "ARTICLES_LIST_SANDBOX_BY_USER_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "USER_PROFILE",
							pageType: "feed",
							showFilter: !0,
							isSandboxPage: !0
						}
					}]
				}, {
					name: "ARTICLES_PLANNED_LIST_BY_USER",
					path: "planned/",
					pathToRegexpOptions: {
						strict: !0
					},
					components: {
						default: vr
					},
					meta: {
						canonicalRoute: "USER_PROFILE",
						showFilter: !0
					},
					children: [{
						name: "ARTICLES_PLANNED_LIST_BY_USER_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "USER_PROFILE",
							showFilter: !0
						}
					}]
				}, {
					name: "USER_STATISTICS",
					path: "statistics/",
					pathToRegexpOptions: {
						strict: !0
					},
					components: {
						default: Or
					},
					meta: {
						requiresAuth: !0,
						showFilter: !0
					},
					children: [{
						name: "USER_STATISTICS_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							requiresAuth: !0,
							showFilter: !0
						}
					}]
				}]
			}, {
				path: "topics/",
				pathToRegexpOptions: {
					strict: !0
				},
				children: [{
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					redirect: t => ({
						...t,
						name: "ARTICLES_LIST_BY_USER_PAGES"
					})
				}],
				redirect: t => ({
					...t,
					name: "ARTICLES_LIST_BY_USER"
				})
			}, {
				name: "USER_BOOKMARKED",
				path: "favorites/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: pr
				},
				meta: {
					canonicalRoute: "USER_PROFILE"
				},
				redirect: t => ({
					...t,
					name: "ARTICLES_LIST_BOOKMARKED"
				}),
				children: [{
					name: "ARTICLES_LIST_BOOKMARKED",
					path: "posts/",
					pathToRegexpOptions: {
						strict: !0
					},
					components: {
						default: dr
					},
					meta: {
						canonicalRoute: "USER_PROFILE",
						showFilter: !0
					},
					children: [{
						name: "ARTICLES_LIST_BOOKMARKED_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							showFilter: !0
						}
					}]
				}, {
					name: "COMMENTS_LIST_BOOKMARKED",
					path: "comments/",
					pathToRegexpOptions: {
						strict: !0
					},
					components: {
						default: lr
					},
					meta: {
						canonicalRoute: "USER_PROFILE",
						showFilter: !0,
						commentType: "userFavorites"
					},
					children: [{
						name: "COMMENTS_LIST_BOOKMARKED_PAGES",
						path: "page:pageNum(\\d+)/",
						pathToRegexpOptions: {
							strict: !0
						},
						meta: {
							canonicalRoute: "USER_PROFILE",
							showFilter: !0,
							commentType: "userFavorites"
						}
					}]
				}]
			}, {
				name: "USER_COMMENTS",
				path: "comments/",
				pathToRegexpOptions: {
					strict: !0
				},
				components: {
					default: lr
				},
				meta: {
					canonicalRoute: "USER_PROFILE",
					commentType: "userComments"
				},
				children: [{
					name: "USER_COMMENTS_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "USER_PROFILE",
						commentType: "userComments"
					}
				}]
			}, {
				name: "USER_FOLLOWERS",
				path: "subscription/followers/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					canonicalRoute: "USER_PROFILE"
				},
				components: {
					default: hr
				},
				children: [{
					name: "USER_FOLLOWERS_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "USER_PROFILE"
					}
				}]
			}, {
				name: "USER_FOLLOWED",
				path: "subscription/follow/",
				pathToRegexpOptions: {
					strict: !0
				},
				meta: {
					canonicalRoute: "USER_PROFILE"
				},
				components: {
					default: _r
				},
				children: [{
					name: "USER_FOLLOWED_PAGES",
					path: "page:pageNum(\\d+)/",
					pathToRegexpOptions: {
						strict: !0
					},
					meta: {
						canonicalRoute: "USER_PROFILE"
					}
				}]
			}]
		}];
		const Ir = () => s.e("voice").then(s.bind(null, "7049")),
			Ar = () => s.e("voice").then(s.bind(null, "e586"));
		var yr = [{
			name: "VOICE",
			path: "voice/new/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: Ir
		}, {
			name: "VOICE_EDIT",
			path: "voice/edit/:voiceId/",
			pathToRegexpOptions: {
				strict: !0
			},
			component: Ar
		}],
			Lr = [...ls, ...Qn, ...aa, ...ca, ...mi, ...ha, ...hi, ...pi, ...fi, ...Oi, ...Ei, ...Ii, ...Hi, ...eo, ...co, ...uo, ..._o, ...go, ...cr, ...Io, ...yo, ...Po, ...Do, ...Ho, ...Qo, ...or, ...nr, ...Cr, ...Ti, ...yr];
		n["default"].use(ss["a"]);
		const Pr = ["utm_source", "utm_medium", "utm_content", "utm_campaign", "utm_term"],
			Nr = t => ({
				path: "/:hl/",
				children: [...rs(t), ...Lr],
				components: {
					default: {
						computed: {
							routeKey() {
								const {
									query: t
								} = this.$route;
								return Object.keys(t).some(t => Pr.indexOf(t) >= 0) ? this.$route.path : this.$route.fullPath
							}
						},
						render(t) {
							return t("keep-alive", {
								props: {
									include: ["TMArticlePage", "TMArticleCommentsPage"],
									exclude: ["TMAdBanner"],
									max: 20
								}
							}, [t("router-view", {
								on: this.$listeners,
								key: this.routeKey
							})])
						}
					}
				}
			});

		function Rr(t) {
			return new ss["a"]({
				mode: "history",
				routes: [Nr(t)],
				scrollBehavior(t, e, s) {
					return !e && t.hash ? {
						selector: t.hash
					} : t.fullPath !== e.fullPath && (s || {
						x: 0,
						y: 0
					})
				}
			})
		}
		var Mr = s("126f"),
			wr = s("0a5f");
		const kr = {
			root: !0
		};
		var jr = {
			state() {
				return {
					lastViewedComment: 0,
					postId: null,
					lastCommentTimestamp: "",
					moderated: [],
					moderatedIds: [],
					commentRoute: ""
				}
			},
			getters: {
				getModeratedIds: t => t.moderatedIds
			},
			mutations: {
				saveInfoAboutComments(t, {
					id: e,
					last: s
				}) {
					Object.assign(t, {
						postId: e,
						lastViewedComment: s
					})
				},
				setLastCommentTimestamp(t, e) {
					e && (t.lastCommentTimestamp = e)
				},
				setModeratedIds(t, e) {
					t.moderatedIds = e
				}
			},
			actions: {
				sendComment({
					commit: t,
					dispatch: e
				}, {
					articleId: s,
					parentId: n,
					text: a
				}) {
					return Object(wr["a"])(s, {
						isMarkdown: !0,
						parentId: n,
						text: a
					}).then(n => {
						const a = Object(Mr["c"])(n.data);
						return e("comments/addComment", {
							articleId: s,
							comment: a
						}, kr), a.isReadonly && (t("comments/setCommentAccess", {
							isCanComment: !1,
							cantCommentReasonKey: "MODERATE_POST_COMMENT_PENDING"
						}, kr), t("setModeratedIds", [a.id])), a.id
					}).then(e => (t("articlesList/incrementComments", {
						articleId: s
					}, kr), e)).catch(t => {
						throw t
					})
				},
				getComments({
					commit: t,
					rootGetters: e
				}, {
					articleId: s,
					nocount: n
				}) {
					return Object(wr["k"])(s, e["i18n/langOptions"], n).then(e => {
						const {
							lastCommentTimestamp: n,
							threads: a,
							comments: i,
							moderated: o,
							commentAccess: r
						} = e;
						t("setLastCommentTimestamp", n), t("comments/setComments", {
							articleId: s,
							refs: i,
							root: a
						}, kr), Object.keys(o).forEach(e => t("comments/addComment", {
							articleId: s,
							comment: o[e]
						}, kr)), t("comments/setCommentAccess", r, kr), t("setModeratedIds", Object.keys(o)), t("articlesList/resetCommentsUnreadCount", s, kr)
					})
				},
				getGuestComments({
					commit: t,
					rootGetters: e
				}, s) {
					return Object(wr["h"])(s, e["i18n/langOptions"]).then(e => {
						const {
							cacheKey: n,
							lastCommentTimestamp: a,
							threads: i,
							commentRefs: o
						} = e;
						t("setLastCommentTimestamp", a), t("comments/setComments", {
							articleId: s,
							refs: o,
							root: i,
							cacheKey: n
						}, kr)
					})
				},
				getGuestCachedComments({
					commit: t,
					rootGetters: e
				}, {
					articleId: s,
					apiCacheKey: n
				}) {
					return Object(wr["g"])(s, {
						...e["i18n/langOptions"],
						cacheKey: n
					}).then(e => {
						const {
							lastCommentTimestamp: a,
							threads: i,
							commentRefs: o
						} = e;
						t("setLastCommentTimestamp", a), t("comments/setComments", {
							articleId: s,
							refs: o,
							root: i,
							cacheKey: n
						}, kr)
					})
				},
				loadNewComments({
					commit: t,
					dispatch: e,
					state: s,
					rootState: n
				}, {
					route: a
				}) {
					const {
						id: i
					} = a.params;
					return Object(wr["m"])(i, {
						timestamp: s.lastCommentTimestamp
					}).then(s => {
						const i = a.params.id,
							{
								added: o,
								moderated: r,
								lastCommentTimestamp: c
							} = s;
						t("setLastCommentTimestamp", c), e("clearModeratedComments", {
							articleId: a.params.id
						}), t("setModeratedIds", Object.keys(r));
						const l = {
							...o,
							...r
						};
						Object.keys(l).forEach(e => t("comments/addComment", {
							articleId: i,
							comment: l[e]
						}, kr));
						const {
							refs: u
						} = n.comments.articleComments[i], m = Object.keys(u).filter(t => !u[t].isReadonly).length;
						t("articlesList/setArticleCommentsCount", {
							articleId: i,
							count: m
						}, kr)
					})
				},
				clearModeratedComments({
					commit: t,
					getters: e
				}, {
					articleId: s
				}) {
					const n = new Set(e.getModeratedIds);
					n.forEach(e => t("comments/deleteComment", {
						articleId: s,
						commentId: e
					}, kr)), t("setModeratedIds", [])
				},
				getPinnedComments({
					commit: t,
					rootGetters: e
				}, s) {
					return Object(wr["n"])(s, e["i18n/langOptions"]).then(e => {
						const {
							commentRefs: n,
							commentIds: a
						} = e;
						t("comments/setPinnedComments", {
							articleId: s,
							commentIds: a,
							refs: n
						}, kr)
					})
				}
			}
		},
			Dr = s("6c10"),
			xr = s("6012"),
			Br = s("9224");

		function $r(t) {
			switch (t.name) {
				case "USER_COMMENTS":
				case "USER_COMMENTS_PAGES":
					return {
						comments: !0, user: t.params.login
					};
				case "COMMENTS_LIST_BOOKMARKED":
				case "COMMENTS_LIST_BOOKMARKED_PAGES":
					return {
						bookmarks: !0, user: t.params.login
					};
				default:
					return {}
			}
		}
		const Fr = (t, e, s, n) => {
			let a = `v${Br["a"]}:a${t}:k${e}:${s}`;
			return n ? a += ":HASH" + n : Dr["c"] && "undefined" !== typeof __webpack_hash__ && (a += ":HASH" + __webpack_hash__), a
		};
		var Gr = {
			namespaced: !0,
			state() {
				return {
					articleComments: {},
					articlePinnedComments: {},
					searchCommentsResults: null,
					pagesCount: null,
					commentAccess: {},
					scrollParents: {}
				}
			},
			modules: {
				pageArticleComments: jr
			},
			getters: {
				getCommentsTreeByArticleId: (t, e) => s => t.articleComments[s] ? t.articleComments[s].root.map((function t(n) {
					const a = e.getCommentById(s, n);
					let i;
					return a.children && (i = a.children.map(t)), {
						...a,
						children: i
					}
				})) : null,
				getCommentById: t => (e, s) => t.articleComments[e].refs[s],
				searchCommentsList: t => t.searchCommentsResults && Array.isArray(t.searchCommentsResults.root) ? t.searchCommentsResults.root.map(e => t.searchCommentsResults.refs[e]) : [],
				getScrollParents: t => t.scrollParents,
				getCommentAccess: t => t.commentAccess,
				getCommentsCacheKey: (t, e, s, n) => (e, s) => {
					const {
						cacheKey: a
					} = t.articleComments[e] || {};
					return a ? Fr(e, a, n["i18n/langOptions"].hl, s) : null
				},
				getPinnedCommentsById: t => e => t.articlePinnedComments[e] ? t.articlePinnedComments[e].commentIds.map(s => t.articlePinnedComments[e].refs[s]) : []
			},
			mutations: {
				setCommentsRoot(t, {
					articleId: e,
					root: s
				}) {
					t.articleComments = {
						...t.articleComments,
						[e]: {
							...t.articleComments[e],
							root: s
						}
					}
				},
				setComments(t, {
					articleId: e,
					refs: s,
					root: n,
					cacheKey: a
				}) {
					t.articleComments = {
						...t.articleComments,
						[e]: {
							refs: s,
							root: n,
							cacheKey: a
						}
					}
				},
				setPinnedComments(t, {
					articleId: e,
					refs: s,
					commentIds: n
				}) {
					t.articlePinnedComments = {
						...t.articlePinnedComments,
						[e]: {
							refs: s,
							commentIds: n
						}
					}
				},
				addComment(t, {
					articleId: e,
					comment: s
				}) {
					const n = t.articleComments[e];
					if (n.refs = {
						...n.refs,
						[s.id]: s
					}, s.parentId && "0" !== s.parentId) {
						const t = n.refs[s.parentId];
						t.children = Array.from(new Set([...t.children, s.id]))
					} else n.root = Array.from(new Set([...n.root, s.id]));
					t.articleComments = {
						...t.articleComments,
						[e]: n
					}
				},
				updateComment(t, {
					articleId: e,
					comment: s
				}) {
					t.articleComments[e].refs = {
						...t.articleComments[e].refs,
						[s.id]: s
					}, t.articleComments = {
						...t.articleComments
					}, t.articlePinnedComments[e] && t.articlePinnedComments[e].refs && t.articlePinnedComments[e].refs[s.id] && (t.articlePinnedComments[e].refs = {
						...t.articlePinnedComments[e].refs,
						[s.id]: s
					})
				},
				mergeComments(t, {
					articleId: e,
					comments: s
				}) {
					Object.keys(s).forEach(n => {
						const a = t.articleComments[e].refs[n];
						t.articleComments[e].refs[n] = {
							...a,
							...s[n]
						}
					}), t.articleComments = {
						...t.articleComments
					}
				},
				deleteComment(t, {
					articleId: e,
					commentId: s
				}) {
					const n = t.articleComments[e],
						a = n.refs[s];
					if (a.parentId && "0" !== a.parentId) {
						const t = n.refs[a.parentId],
							e = t.children.slice(0);
						e.splice(t.children.indexOf(s), 1), t.children = e
					} else {
						const t = n.root.slice(0);
						t.splice(t.indexOf(s), 1), n.root = t
					}
					t.articleComments = {
						...t.articleComments
					}
				},
				suspendCommentTree(t, {
					articleId: e,
					commentId: s
				}) {
					const n = s => {
						const a = t.articleComments[e].refs[s];
						a.isSuspended = !0, a.children && a.children.forEach(n)
					};
					n(s), t.articleComments = {
						...t.articleComments
					}
				},
				setCommentRead(t, {
					articleId: e,
					commentId: s
				}) {
					const n = t.articleComments[e].refs[s];
					n.isNew = !1, t.articleComments = {
						...t.articleComments
					}
				},
				setFavorite(t, {
					articleId: e,
					commentId: s,
					isFavorite: n
				}) {
					t.articleComments[e].refs[s].isFavorite = n, t.articleComments = {
						...t.articleComments
					}, t.articlePinnedComments[e] && t.articlePinnedComments[e].refs && t.articlePinnedComments[e].refs[s] && (t.articlePinnedComments[e].refs[s].isFavorite = n)
				},
				updateScore(t, e) {
					const {
						articleId: s,
						commentId: n,
						score: a,
						vote: i,
						votesCount: o
					} = e, r = t.articleComments[s].refs[n];
					r.score = a, r.votesCount = o, r.vote = {
						...r.vote,
						isCanVote: !1,
						value: i
					}, t.articleComments = {
						...t.articleComments
					}, t.articlePinnedComments[s] && t.articlePinnedComments[s].refs && t.articlePinnedComments[s].refs[n] && (t.articlePinnedComments[s].refs[n] = r)
				},
				clearCommentsList(t, e) {
					const {
						[e]: s, ...n
					} = t.articleComments;
					t.articleComments = n
				},
				setInputValue(t, {
					name: e,
					value: s
				}) {
					t.inputs[e].value = s
				},
				setSearchCommentsResults(t, {
					refs: e,
					root: s
				}) {
					t.searchCommentsResults = {
						refs: e,
						root: s
					}
				},
				setSearchResultFavorite(t, {
					commentId: e,
					isFavorite: s
				}) {
					t.searchCommentsResults.refs[e].isFavorite = s
				},
				setPagesCount(t, e) {
					t.pagesCount = e
				},
				clearSearchResults(t) {
					t.searchCommentsResults = null, t.pageCount = null
				},
				setCommentAccess(t, e) {
					t.commentAccess = {
						...t.commentAccess,
						...e
					}
				},
				setScrollParents(t, e) {
					t.scrollParents = {
						...t.scrollParents,
						[e.parentId]: e.id
					}
				},
				setCommentIsPinned(t, {
					articleId: e,
					commentId: s,
					isPinned: n
				}) {
					t.articleComments[e].refs[s].isPinned = n, t.articleComments = {
						...t.articleComments
					}
				}
			},
			actions: {
				addComment({
					commit: t
				}, {
					articleId: e,
					comment: s
				}) {
					t("addComment", {
						articleId: e,
						comment: s
					})
				},
				updateComment({
					state: t,
					commit: e
				}, {
					articleId: s,
					comment: n
				}) {
					const a = Object(Mr["c"])(n),
						i = {
							...a,
							children: t.articleComments[s].refs[a.id].children
						};
					e("updateComment", {
						articleId: s,
						comment: i
					})
				},
				setScrollParents({
					commit: t
				}, {
					comment: e
				}) {
					t("setScrollParents", e)
				},
				suspendComment({
					commit: t
				}, {
					commentId: e,
					articleId: s
				}) {
					Object(wr["v"])(s, e).then(() => {
						t("suspendCommentTree", {
							articleId: s,
							commentId: e
						})
					})
				},
				vote({
					commit: t
				}, {
					articleId: e,
					commentId: s,
					direction: n
				}) {
					const a = "up" === n ? 1 : -1;
					return Object(wr["w"])({
						commentId: s,
						postId: e,
						data: {
							value: a
						}
					}).then(n => {
						t("me/decrementCommentsCharge", null, {
							root: !0
						});
						const {
							score: i,
							votesCount: o
						} = n;
						return t("updateScore", {
							articleId: e,
							commentId: s,
							score: i,
							votesCount: o,
							vote: a
						}), n
					})
				},
				setFavorite({
					commit: t
				}, {
					articleId: e,
					commentId: s,
					isFavorite: n
				}) {
					return n ? Object(wr["b"])(s).then(() => {
						t("setFavorite", {
							articleId: e,
							commentId: s,
							isFavorite: n
						})
					}) : Object(wr["s"])(s).then(() => {
						t("setFavorite", {
							articleId: e,
							commentId: s,
							isFavorite: n
						})
					})
				},
				setSearchResultFavorite({
					commit: t
				}, {
					commentId: e,
					isFavorite: s
				}) {
					return s ? Object(wr["b"])(e).then(() => {
						t("setSearchResultFavorite", {
							commentId: e,
							isFavorite: s
						})
					}) : Object(wr["s"])(e).then(() => {
						t("setSearchResultFavorite", {
							commentId: e,
							isFavorite: s
						})
					})
				},
				moderateComment({
					commit: t,
					getters: e
				}, {
					postId: s,
					commentId: n,
					isApprove: a
				}) {
					Object(wr["o"])(s, n, a).then(({
						moderatedCommentId: a,
						data: {
							comment: i
						} = {}
					}) => {
						const o = new Set(e.getModeratedIds);
						o.delete(n), t("setModeratedIds", Array.from(o)), t("deleteComment", {
							articleId: s,
							commentId: n
						}), a && t("addComment", {
							articleId: s,
							comment: i
						})
					})
				},
				loadUserComments({
					commit: t,
					rootGetters: e
				}, {
					route: s
				}) {
					const n = s.params.pageNum || 1,
						a = {
							...$r(s),
							...e["i18n/langOptions"],
							page: n
						},
						i = a.bookmarks ? xr["o"] : xr["p"];
					return i(a).then(({
						comments: e,
						threads: s,
						pages: n
					}) => {
						t("setPagesCount", n), t("setSearchCommentsResults", {
							refs: e,
							root: s
						})
					})
				},
				searchComments({
					commit: t,
					rootGetters: e
				}, {
					route: s
				}) {
					const n = {
						...s.query,
						...$r(s),
						...e["i18n/langOptions"],
						page: s.params.pageNum || 1
					};
					return Object(wr["l"])(n).then(({
						commentIds: e,
						commentRefs: s,
						pagesCount: n
					}) => {
						t("setSearchCommentsResults", {
							refs: s,
							root: e
						}), t("setPagesCount", n)
					})
				},
				pinComment({
					commit: t
				}, {
					articleId: e,
					commentId: s,
					isPinned: n
				}) {
					return Object(wr["p"])({
						commentId: s,
						postId: e,
						data: {
							pinned: n
						}
					}).then(() => t("setCommentIsPinned", {
						articleId: e,
						commentId: s,
						isPinned: n
					}))
				}
			}
		};

		function Ur(t, e, s) {
			return `${t}?ch=${e}&rn=${s}`
		}

		function Vr(t) {
			return new Promise(e => {
				const s = new Image;
				s.onload = () => e(!1), s.onerror = () => {
					e(!0)
				}, s.src = t
			})
		}

		function Wr(t, e) {
			return Promise.all([Vr(Ur(t, 1, e)), Vr(Ur(t, 2, e))]).then(([t, e]) => !t && e)
		}
		let Hr = null;

		function Yr() {
			const t = parseInt(1e6 * Math.random(), 10),
				e = "/img/px.gif";
			return Hr || (Hr = Wr(e, t.toString())), Hr
		}
		var qr = s("8877"),
			Kr = s("f881");

		function zr() {
			const t = "zhY4i4nJ9K";
			return Kr["a"][t]
		}

		function Xr() {
			const t = "K9Jn4i4Yhz";
			return Object(qr["a"])("#" + t).then(Boolean)
		}
		let Jr = 0,
			Qr = null;

		function Zr() {
			if (zr()) return clearTimeout(Qr), Xr().then(t => !t);
			if (Jr >= 3) return clearTimeout(Qr), Promise.resolve(!0);
			const t = 300;
			return new Promise((e, s) => {
				Qr = setTimeout(() => {
					Jr += 1, Zr().then(e, s)
				}, t * Jr)
			})
		}
		var tc = {
			CAN_SEE_ACCEPTABLE_ADS: "aa",
			HAS_ADBLOCK: "yes",
			SEE_ADS: "no"
		},
			ec = {
				namespaced: !0,
				state() {
					return {
						hasAcceptableAdsFilter: !1,
						hasAdblock: !1
					}
				},
				getters: {
					adblockStatus(t) {
						return t.hasAdblock ? t.hasAcceptableAdsFilter ? tc.CAN_SEE_ACCEPTABLE_ADS : tc.HAS_ADBLOCK : tc.SEE_ADS
					}
				},
				mutations: {
					setAcceptableAds(t, e) {
						t.hasAcceptableAdsFilter = e
					},
					setAdblock(t, e) {
						t.hasAdblock = e
					}
				},
				actions: {
					detectAcceptableAds({
						commit: t
					}) {
						return Yr().then(e => {
							t("setAcceptableAds", e)
						})
					},
					detectAdblock({
						commit: t
					}) {
						return Zr().then(e => t("setAdblock", e))
					},
					findOutAdblockStatus({
						dispatch: t
					}) {
						return Promise.all([t("detectAcceptableAds"), t("detectAdblock")])
					}
				}
			},
			sc = s("da81"),
			nc = s.n(sc),
			ac = {
				namespaced: !0,
				actions: {
					vote({
						commit: t
					}, {
						id: e,
						value: s
					}) {
						return Object(xr["U"])(e, {
							value: s
						}).then(e => (t("me/decrementPostsCharge", null, {
							root: !0
						}), e))
					}
				}
			};

		function ic() {
			return Object(ze["b"])(Object(Xe["a"])("votes/reasons", "v2"))
		}

		function oc(t) {
			switch (t.name) {
				case "ARTICLES_LIST_TECHNOTEXT_ALL":
				case "ARTICLES_LIST_TECHNOTEXT_ALL_PAGES":
				case "ARTICLES_LIST_TECHNOTEXT_NOMINATION":
				case "ARTICLES_LIST_TECHNOTEXT_NOMINATION_PAGES":
					return {
						technotext: !0, nomination: t.params.nomination || "all", year: "2021"
					};
				case "ARTICLES_LIST_ALL":
				case "ARTICLES_LIST_ALL_PAGES":
					return {
						sort: "rating"
					};
				case "ARTICLES_LIST_ALL_SCORE":
				case "ARTICLES_LIST_ALL_SCORE_PAGES":
					return {
						sort: "rating", score: t.params.score
					};
				case "ARTICLES_LIST_BY_COMPANY":
				case "ARTICLES_LIST_BY_COMPANY_PAGES":
					return {
						company: t.params.name
					};
				case "COMPANY_BRANDING_PREVIEW":
				case "COMPANY_BRANDING_PREVIEW_PAGES":
					return {
						company: t.params.name
					};
				case "ARTICLES_LIST_TOP_BY_COMPANY":
				case "ARTICLES_LIST_TOP_BY_COMPANY_PAGES":
					return {
						company: t.params.name, sort: "rating"
					};
				case "ARTICLES_LIST_BY_FLOW_ALL":
				case "ARTICLES_LIST_BY_FLOW_ALL_PAGES":
					return {
						flow: t.params.flowName, sort: "all"
					};
				case "ARTICLES_LIST_BY_FLOW_ALL_SCORE":
				case "ARTICLES_LIST_BY_FLOW_ALL_SCORE_PAGES":
					return {
						flow: t.params.flowName, score: t.params.score, sort: "all"
					};
				case "ARTICLES_LIST_BY_FLOW_TOP_PERIOD":
				case "ARTICLES_LIST_BY_FLOW_TOP_PERIOD_PAGES":
					return {
						flow: t.params.flowName, period: t.params.period, sort: "all"
					};
				case "ARTICLES_LIST_BY_HUB_ALL":
				case "ARTICLES_LIST_BY_HUB_ALL_PAGES":
					return {
						hub: t.params.hubName, sort: "all"
					};
				case "ARTICLES_LIST_BY_HUB_ALL_SCORE":
				case "ARTICLES_LIST_BY_HUB_ALL_SCORE_PAGES":
					return {
						hub: t.params.hubName, score: t.params.score, sort: "all"
					};
				case "ARTICLES_LIST_BY_HUB_TOP_PERIOD":
				case "ARTICLES_LIST_BY_HUB_TOP_PERIOD_PAGES":
					return {
						hub: t.params.hubName, period: t.params.period, sort: "all"
					};
				case "ARTICLES_LIST_BY_USER":
				case "ARTICLES_LIST_BY_USER_PAGES":
				case "ARTICLES_DRAFTS_LIST_BY_USER":
				case "ARTICLES_DRAFTS_LIST_BY_USER_PAGES":
				case "ARTICLES_PLANNED_LIST_BY_USER":
				case "ARTICLES_PLANNED_LIST_BY_USER_PAGES":
					return {
						user: t.params.login
					};
				case "ARTICLES_LIST_BOOKMARKED":
				case "ARTICLES_LIST_BOOKMARKED_PAGES":
					return {
						user: t.params.login, user_bookmarks: !0
					};
				case "ARTICLES_LIST_FEED":
				case "ARTICLES_LIST_FEED_PAGES":
					return {
						custom: !0
					};
				case "MEGAPROJECTS":
				case "MEGAPROJECTS_PAGES":
					return {
						megaprojects: !0
					};
				case "ARTICLES_LIST_TOP_PERIOD":
				case "ARTICLES_LIST_TOP_PERIOD_PAGES":
					return {
						period: t.params.period, sort: "date"
					};
				case "INDEX":
					return {
						date: "day", sort: "date"
					};
				case "SEARCH_QUERY_RESULTS":
				case "SEARCH_QUERY_RESULTS_PAGES":
					return {
						query: t.query.q, order: t.query.order
					};
				case "NEWS":
				case "NEWS_LIST_ALL":
				case "NEWS_LIST_ALL_PAGES":
					return {
						news: !0
					};
				case "NEWS_LIST_ALL_SCORE":
				case "NEWS_LIST_ALL_SCORE_PAGES":
					return {
						news: !0, score: t.params.score
					};
				case "NEWS_LIST_TOP":
				case "NEWS_LIST_TOP_PERIOD":
				case "NEWS_LIST_TOP_PERIOD_PAGES":
					return {
						news: !0, period: t.params.period
					};
				case "NEWS_LIST_BY_COMPANY":
				case "NEWS_LIST_BY_COMPANY_PAGES":
					return {
						companyNews: t.params.name
					};
				case "NEWS_LIST_BY_FLOW_ALL":
				case "NEWS_LIST_BY_FLOW_ALL_PAGES":
					return {
						flow: t.params.flowName, flowNews: !0
					};
				case "NEWS_LIST_BY_FLOW_SCORE":
				case "NEWS_LIST_BY_FLOW_SCORE_PAGES":
					return {
						flow: t.params.flowName, flowNews: !0, score: t.params.score
					};
				case "NEWS_LIST_BY_FLOW_TOP":
				case "NEWS_LIST_BY_FLOW_TOP_PERIOD":
				case "NEWS_LIST_BY_FLOW_TOP_PERIOD_PAGES":
					return {
						flow: t.params.flowName, flowNews: !0, period: t.params.period
					};
				default:
					return {}
			}
		}

		function rc({
			hubs: t
		}) {
			return (t || []).filter(t => "collective" === t.type).map(t => t.alias)
		}

		function cc({
			tags: t
		}) {
			return (t || []).map(t => t.titleHtml)
		}
		var lc = {
			namespaced: !0,
			state() {
				return {
					articlesList: {},
					articlesIds: {},
					isLoading: !1,
					pagesCount: {},
					route: {},
					reasonsList: null,
					view: null,
					lastVisitedRoute: {},
					ssrCommentsArticleIds: []
				}
			},
			modules: {
				karma: ac
			},
			getters: {
				getArticleById: t => e => t.articlesList[e],
				getArticlesList: t => e => {
					const s = t.articlesIds[e] || [];
					return s.map(e => t.articlesList[e])
				},
				getArticleOptionsById: t => e => {
					const s = t.articlesList[e] || {},
						{
							isCorporative: n
						} = s,
						a = s.metadata || {},
						i = a.scriptUrls && Boolean(a.scriptUrls.length) && Boolean(a.stylesUrls.length),
						o = !(i || n);
					return {
						articleMeta: a,
						isCorporative: n,
						isMegapost: i,
						isAdsPermitted: o
					}
				},
				getReasonsList: t => t.reasonsList,
				getAllHubsTitles: t => e => {
					const {
						articlesList: s,
						articlesIds: n
					} = t, a = [], i = Object(Ns["a"])(e), o = n[i];
					return o ? (o.forEach(t => {
						const e = rc(s[t]);
						a.push(...e)
					}), a) : []
				},
				getAllTagsNames: t => e => {
					const {
						articlesList: s,
						articlesIds: n
					} = t, a = [], i = Object(Ns["a"])(e), o = n[i];
					return o ? (o.forEach(t => {
						a.push(...cc(s[t]))
					}), a) : []
				},
				getArticleHubsTitles: t => e => {
					const s = t.articlesList[e] || {};
					return rc(s)
				},
				getArticleTagsTitles: t => e => {
					const s = t.articlesList[e] || {};
					return cc(s)
				},
				getArticleView: t => t.view,
				getCompanyAlias: (t, e) => t => {
					const s = e.getArticleById(t);
					if (!s) return null;
					const {
						hubs: n
					} = s;
					if (!n) return null;
					const a = n.filter(t => "corporative" === t.type)[0];
					return a ? a.alias.toLowerCase() : null
				},
				isSubscribedToTracker: (t, e) => t => e.getArticleById(t).relatedData.trackerSubscribed,
				isSubscribedToEmail: (t, e) => t => e.getArticleById(t).relatedData.emailSubscribed,
				shouldSsrComments: t => e => t.ssrCommentsArticleIds.includes(e),
				compactView: t => "list" === t.view
			},
			mutations: {
				setArticle(t, {
					article: e
				}) {
					t.articlesList = {
						...t.articlesList,
						[e.id]: e
					}
				},
				setArticleCommentsStatus(t, {
					articleId: e,
					status: s
				}) {
					t.articlesList[e].commentsEnabled = s
				},
				setArticleRulesRemindStatus(t, {
					articleId: e,
					status: s
				}) {
					t.articlesList[e].rulesRemindEnabled = s
				},
				incrementComments(t, {
					articleId: e
				}) {
					const s = t.articlesList[e];
					s.statistics.commentsCount += 1
				},
				setArticleCommentsCount(t, {
					articleId: e,
					count: s
				}) {
					const n = t.articlesList[e];
					n && n.statistics && (n.statistics.commentsCount = s)
				},
				resetCommentsUnreadCount(t, e) {
					const s = t.articlesList[e];
					s && s.relatedData && (s.relatedData.unreadCommentsCount = 0)
				},
				setArticles(t, {
					articlesList: e,
					articlesIds: s
				}) {
					t.articlesList = nc()(t.articlesList, e), t.articlesIds = {
						...t.articlesIds,
						...s
					}
				},
				clearArticles(t, e) {
					delete t.articlesIds[e]
				},
				setArticlePoll(t, {
					poll: e,
					articleId: s
				}) {
					const n = t.articlesList[s],
						a = n.polls.findIndex(t => t.id === e.id);
					n.polls.splice(a, 1, e)
				},
				setBookmarked(t, {
					articleId: e,
					shouldBookmarked: s
				}) {
					const n = t.articlesList[e],
						{
							statistics: a
						} = n;
					a.favoritesCount = s ? a.favoritesCount + 1 : a.favoritesCount - 1, n.relatedData = {
						...n.relatedData,
						bookmarked: s
					}
				},
				setLoading(t, e) {
					t.isLoading = e
				},
				setPagesCount(t, e) {
					t.pagesCount = {
						...t.pagesCount,
						...e
					}
				},
				setRating(t, e) {
					const {
						articleId: s,
						score: n,
						value: a,
						votesCount: i
					} = e, o = t.articlesList[s];
					o.relatedData.vote.value = a, o.statistics.score = n, o.statistics.votesCount = i
				},
				setCanVote(t, {
					articleId: e,
					isEnabled: s
				}) {
					const n = t.articlesList[e];
					n.relatedData.canVote = s
				},
				setRouteCache(t, e) {
					t.route.name = e.name, t.route.params = e.params, t.route.query = e.query
				},
				setCanComment(t, {
					articleId: e,
					canComment: s
				}) {
					const n = t.articlesList[e];
					n.relatedData.canComment = s
				},
				setReasonsList(t, e) {
					t.reasonsList = e
				},
				setArticleView(t, e) {
					t.view = e
				},
				setLastVisitedRoute(t, e) {
					t.lastVisitedRoute = e
				},
				updateArticleRelatedData(t, {
					articleId: e,
					relatedData: s
				}) {
					t.articlesList[e].relatedData = {
						...t.articlesList[e].relatedData,
						...s
					}
				},
				setSsrCommentsArticleIds(t, e) {
					t.ssrCommentsArticleIds = e
				},
				removeSsrCommentsArticleId(t, e) {
					const s = new Set(t.ssrCommentsArticleIds);
					s.delete(e), t.ssrCommentsArticleIds = Array.from(s)
				}
			},
			actions: {
				loadArticlesList({
					state: t,
					commit: e,
					rootGetters: s
				}, {
					route: n,
					force: a
				}) {
					const i = Object(Ns["a"])(n),
						o = t.articlesIds[i],
						r = Boolean(Object.keys(n.query).length),
						c = s["pullRefresh/getRefreshState"];
					if (o && !r && !c && !a) return !0;
					(r || c || a) && e("clearArticles", i), e("setLoading", !0);
					const l = n.params.pageNum || 1,
						u = {
							...oc(n),
							...s["i18n/langOptions"],
							page: l
						};
					return Object(zs["i"])(u).then(t => {
						const {
							articleRefs: s,
							newsRefs: a,
							newsIds: o,
							pagesCount: r,
							articleIds: c
						} = t, l = {
							[i]: c || o
						}, u = {
							[i]: r
						};
						e("setArticles", {
							articlesIds: l || o,
							articlesList: s || a
						}), e("setPagesCount", u), e("setRouteCache", n), e("setLoading", !1)
					})
				},
				loadDrafts({
					state: t,
					commit: e,
					rootGetters: s
				}, {
					route: n,
					force: a = !1
				}) {
					const i = Object(Ns["a"])(n),
						o = s["pullRefresh/getRefreshState"];
					if (!a && i in t.articlesIds && !o) return Promise.resolve();
					e("setLoading", !0);
					const r = n.params.pageNum || 1,
						c = {
							...oc(n),
							...s["i18n/langOptions"],
							page: r
						};
					return Object(zs["j"])(c).then(t => {
						const {
							articleRefs: s,
							newsRefs: a,
							newsIds: o,
							pagesCount: r,
							articleIds: c
						} = t, l = {
							[i]: c || o
						}, u = {
							[i]: r
						};
						e("setArticles", {
							articlesIds: l || o,
							articlesList: s || a
						}), e("setPagesCount", u), e("setRouteCache", n), e("setLoading", !1)
					})
				},
				loadPlannedArticles({
					state: t,
					commit: e,
					rootGetters: s
				}, {
					route: n
				}) {
					const a = Object(Ns["a"])(n),
						i = s["pullRefresh/getRefreshState"];
					if (a in t.articlesIds && !i) return Promise.resolve();
					e("setLoading", !0);
					const o = n.params.pageNum || 1,
						r = {
							...oc(n),
							...s["i18n/langOptions"],
							page: o
						};
					return Object(zs["m"])(r).then(t => {
						const {
							articleRefs: s,
							newsRefs: i,
							newsIds: o,
							pagesCount: r,
							articleIds: c
						} = t, l = {
							[a]: c || o
						}, u = {
							[a]: r
						};
						e("setArticles", {
							articlesIds: l || o,
							articlesList: s || i
						}), e("setPagesCount", u), e("setRouteCache", n), e("setLoading", !1)
					})
				},
				loadDailyArticleList({
					dispatch: t
				}) {
					const e = {
						name: "ARTICLES_LIST_TOP_PERIOD",
						params: {
							period: "daily"
						},
						query: {},
						hash: ""
					};
					return t("loadArticlesList", {
						route: e
					})
				},
				loadArticle({
					commit: t,
					rootGetters: e
				}, {
					articleId: s
				}) {
					return Object(zs["f"])(s, e["i18n/langOptions"]).then(e => {
						t("setArticle", {
							article: e
						})
					})
				},
				loadArticlePreview({
					commit: t,
					rootGetters: e
				}, {
					hash: s
				}) {
					return Object(zs["g"])(s, e["i18n/langOptions"]).then(e => {
						t("setArticle", {
							article: {
								...e,
								id: s
							}
						})
					})
				},
				toggleArticleBookmark({
					commit: t
				}, {
					article: e,
					bookmarkModule: s
				}) {
					const n = !e.relatedData.bookmarked,
						a = n ? zs["a"] : zs["u"];
					return a(e.id).then(() => {
						t(s + "/setBookmarked", {
							articleId: e.id,
							shouldBookmarked: n
						}, {
							root: !0
						})
					})
				},
				downvote({
					commit: t
				}, {
					id: e,
					reason: s
				}) {
					return Object(zs["d"])(e, {
						reason: s
					}).then(s => {
						const {
							vote: n,
							canVote: a,
							score: i,
							votesCount: o,
							chargeSettings: r
						} = s, {
							value: c
						} = n;
						t("setRating", {
							articleId: e,
							score: i,
							value: c,
							votesCount: o
						}), t("setCanVote", {
							articleId: e,
							isEnabled: a
						}), t("me/setChargeSettings", r, {
							root: !0
						})
					})
				},
				upvote({
					commit: t
				}, {
					id: e
				}) {
					return Object(zs["A"])(e).then(s => {
						const {
							vote: n,
							canVote: a,
							score: i,
							votesCount: o,
							chargeSettings: r
						} = s, {
							value: c
						} = n;
						t("setRating", {
							articleId: e,
							score: i,
							value: c,
							votesCount: o
						}), t("setCanVote", {
							articleId: e,
							isEnabled: a
						}), t("me/setChargeSettings", r, {
							root: !0
						})
					})
				},
				loadReasonsList({
					commit: t,
					getters: e
				}) {
					return e.getReasonsList ? Promise.resolve() : ic().then(e => {
						t("setReasonsList", e.data)
					})
				},
				setArticleView({
					commit: t
				}, {
					view: e
				}) {
					Object(c["c"])("habr_article_view", e, {
						expires: 365
					}), t("setArticleView", e)
				},
				toggleArticleView({
					dispatch: t,
					getters: e
				}) {
					const s = "cards" === e.getArticleView ? "list" : "cards";
					t("setArticleView", {
						view: s
					})
				},
				setLastVisitedRoute({
					commit: t
				}, e) {
					t("setLastVisitedRoute", e)
				},
				setArticleCommentsStatus({
					commit: t
				}, {
					articleId: e,
					status: s
				}) {
					t("setArticleCommentsStatus", {
						articleId: e,
						status: s
					})
				},
				setArticleRulesRemindStatus({
					commit: t
				}, {
					articleId: e,
					status: s
				}) {
					t("setArticleRulesRemindStatus", {
						articleId: e,
						status: s
					})
				},
				toggleSubscriptionStatus({
					commit: t
				}, {
					articleId: e,
					tracker: s,
					email: n
				}) {
					return Object(zs["z"])({
						articleId: e,
						tracker: s,
						email: n
					}).then(({
						emailSubscribed: s,
						trackerSubscribed: n
					}) => {
						t("updateArticleRelatedData", {
							articleId: e,
							relatedData: {
								emailSubscribed: s,
								trackerSubscribed: n
							}
						})
					})
				}
			}
		};

		function uc({
			flowRefs: t
		}) {
			const e = [];
			return Object.keys(t).forEach(s => {
				const n = t[s];
				e.push({
					alias: n.alias,
					id: n.id,
					route: {
						name: "FLOW_PAGE",
						params: {
							flowName: n.alias
						}
					}
				})
			}), e
		}

		function mc(t) {
			return Object(ze["b"])(Object(Xe["a"])("refs/flows", "v2"), t).then(uc)
		}

		function dc(t, e) {
			return Object(ze["b"])(Object(Xe["a"])(`flows/${t}/authors`, "v2"), e)
		}
		var pc = s("756c");
		const _c = (t, e) => `${e}_${t}`.toLowerCase();
		var hc = {
			namespaced: !0,
			state() {
				return {
					authors: {}
				}
			},
			getters: {
				getAuthorContributionsByAlias: t => (e, s = "flow") => {
					const n = _c(e, s);
					return t.authors[n] || []
				}
			},
			mutations: {
				setAuthorContribution(t, {
					authors: e,
					key: s
				}) {
					t.authors = {
						...t.authors,
						[s]: e.authorIds.map(t => e.authorRefs[t])
					}
				}
			},
			actions: {
				loadAuthorContributions({
					state: t,
					commit: e
				}, {
					flowName: s,
					hubName: n
				}) {
					const a = s || n,
						i = s ? "flow" : "hub",
						o = _c(a, i),
						r = {
							page: 1,
							perPage: 10
						};
					if (t.authors[o]) return t.authors[o];
					const c = s ? dc : pc["b"];
					return c(a, r).then(t => (e("setAuthorContribution", {
						authors: t,
						key: o
					}), t.authorIds))
				}
			}
		},
			gc = {
				namespaced: !0,
				state() {
					return {
						articleRefs: {},
						articleIds: {},
						pagesCount: {},
						route: {},
						viewsCount: [],
						maxStatsCount: {}
					}
				},
				getters: {
					getArticlesList: t => e => {
						const s = t.articleIds[e] || [];
						return s.map(e => t.articleRefs[e])
					}
				},
				mutations: {
					setArticleRefs(t, e) {
						t.articleRefs = {
							...t.articleRefs,
							...e
						}
					},
					setArticleIds(t, {
						routeKey: e,
						articleIds: s
					}) {
						t.articleIds = {
							...t.articleIds,
							[e]: s
						}
					},
					setPagesCount(t, {
						routeKey: e,
						pagesCount: s
					}) {
						t.pagesCount = {
							...t.pagesCount,
							[e]: s
						}
					},
					setRouteCache(t, e) {
						t.route.name = e.name, t.route.params = e.params, t.route.query = e.query
					},
					setViewsCount(t, e) {
						t.viewsCount = e
					},
					setStatisticsMaxCounts(t, e) {
						t.maxStatsCount = {
							...e
						}
					}
				},
				actions: {
					loadArticlesStatistics({
						commit: t
					}, e) {
						const s = e.params.login.toLowerCase(),
							n = e.params.pageNum || 1,
							a = Object(Ns["a"])(e);
						return Object(xr["d"])(s, {
							page: n
						}).then(s => {
							const {
								articleRefs: n,
								articleIds: i,
								pagesCount: o
							} = s, [r, c, l, u] = i.reduce((t, e) => {
								const {
									statistics: s
								} = n[e], {
									commentsCount: a,
									favoritesCount: i,
									readingCount: o,
									votesCount: r
								} = s, c = [a, i, o, r];
								return t.map((t, e) => Math.max(t, c[e]))
							}, [0, 0, 0, 0]), m = {
								comments: r,
								favorites: c,
								readings: l,
								votes: u
							};
							t("setArticleRefs", n), t("setArticleIds", {
								routeKey: a,
								articleIds: i
							}), t("setPagesCount", {
								routeKey: a,
								pagesCount: o
							}), t("setRouteCache", e), t("setStatisticsMaxCounts", m)
						})
					},
					loadArticlesViewCount({
						commit: t
					}, {
						alias: e,
						period: s
					}) {
						return Object(xr["e"])(e.toLowerCase(), {
							period: s
						}).then(({
							data: e
						}) => {
							const s = e.map(t => ({
								x: t.date,
								y: t.count
							}));
							t("setViewsCount", s)
						})
					}
				}
			};

		function fc({
			fl: t,
			hl: e
		}) {
			return Object(ze["b"])(Object(Xe["a"])("beta/announcements/current", "v2"), {
				fl: t,
				hl: e
			})
		}

		function bc({
			experimentId: t,
			fl: e,
			hl: s
		}) {
			return Object(ze["b"])(Object(Xe["a"])("beta/announcements/" + t, "v2"), {
				fl: e,
				hl: s
			})
		}

		function Tc({
			experimentId: t,
			nocount: e = 0
		}) {
			return Object(ze["b"])(Object(Xe["a"])(`beta/announcements/${t}/comments`, "v2"), {
				nocount: e
			})
		}

		function vc({
			experimentId: t,
			text: e,
			parentId: s
		}) {
			return Object(ze["c"])(Object(Xe["a"])(`beta/announcements/${t}/comments`, "v2"), {
				text: e,
				parentId: s
			})
		}

		function Ec({
			experimentId: t,
			commentId: e,
			mark: s
		}) {
			return Object(ze["c"])(Object(Xe["a"])(`beta/announcements/${t}/comments/${e}`, "v2"), {
				mark: s
			})
		}

		function Sc({
			fl: t,
			hl: e,
			perPage: s = 20,
			pageNum: n = 1
		}) {
			return Object(ze["b"])(Object(Xe["a"])("beta/announcements/finished", "v2"), {
				fl: t,
				hl: e,
				perPage: s,
				pageNum: n
			})
		}

		function Oc() {
			return Object(ze["c"])(Object(Xe["a"])("beta", "v2"))
		}
		var Cc = {
			namespaced: !0,
			state() {
				return {
					currentAnnouncement: null,
					announcements: {},
					announcementCards: null,
					announcementComments: {},
					announcementCommentThreads: {},
					announcementCommentingStatuses: {},
					archivedList: []
				}
			},
			getters: {
				archivedAnnouncements: t => t.announcementCards ? t.archivedList.map(e => t.announcementCards[e]) : [],
				getAnnouncementById: t => e => t.announcements[e],
				getCommentingStatusById: t => e => t.announcementCommentingStatuses[e],
				getAnnouncementCommentsTreeById: t => e => (t.announcementCommentThreads[e] || []).map((function s(n) {
					const a = t.announcementComments[e][n];
					return {
						...a,
						children: a.children.map(s)
					}
				}))
			},
			mutations: {
				setHasJoinedBetaTesting(t, e) {
					t.hasJoinedBetaTesting = e
				},
				setCurrentAnnouncement(t, e) {
					t.currentAnnouncement = e
				},
				setArchivedAnnouncements(t, {
					announcements: e,
					list: s
				}) {
					t.announcementCards = {
						...t.announcementCards,
						...e
					}, t.archivedList = s
				},
				addAnnouncement(t, {
					experimentId: e,
					announcement: s
				}) {
					t.announcements = {
						...t.announcements,
						[e]: s
					}
				},
				addAnnouncementComments(t, {
					experimentId: e,
					comments: s,
					threads: n
				}) {
					t.announcementComments = {
						...t.announcementComments,
						[e]: s
					}, t.announcementCommentThreads = {
						...t.announcementCommentThreads,
						[e]: n
					}
				},
				addAnnouncementComment(t, {
					experimentId: e,
					comment: s
				}) {
					const {
						id: n,
						parentId: a
					} = s;
					if (t.announcementComments = {
						...t.announcementComments,
						[e]: {
							...t.announcementComments[e],
							[n]: s
						}
					}, a) {
						const s = t.announcementComments[e][a];
						s.children = Array.from(new Set([...s.children, n]))
					} else t.announcementCommentThreads = {
						...t.announcementCommentThreads,
						[e]: Array.from(new Set([...t.announcementCommentThreads[e], n]))
					}
				},
				setCommentingStatus(t, {
					experimentId: e,
					commentAccess: s
				}) {
					t.announcementCommentingStatuses = {
						...t.announcementCommentingStatuses,
						[e]: s
					}
				},
				patchComment(t, {
					experimentId: e,
					commentId: s,
					newValues: n
				}) {
					t.announcementComments = {
						...t.announcementComments,
						[e]: {
							...t.announcementComments[e],
							[s]: {
								...t.announcementComments[e][s],
								...n
							}
						}
					}
				}
			},
			actions: {
				loadCurrentAnnouncement({
					state: t,
					commit: e,
					rootGetters: s
				}) {
					return t.currentAnnouncement ? Promise.resolve() : fc(s["i18n/langOptions"]).then(({
						announcement: t
					}) => {
						e("setCurrentAnnouncement", t)
					})
				},
				loadAnnouncement({
					state: t,
					commit: e,
					rootGetters: s
				}, n) {
					return t.announcements[n] ? Promise.resolve() : bc({
						experimentId: n,
						...s["i18n/langOptions"]
					}).then(({
						announcement: t
					}) => {
						e("addAnnouncement", {
							experimentId: n,
							announcement: t
						})
					})
				},
				loadAnnouncementComments({
					state: t,
					commit: e
				}, s) {
					return t.announcementComments[s] ? Promise.resolve() : Tc({
						experimentId: s
					}).then(({
						commentAccess: t,
						data: {
							comments: n,
							threads: a
						}
					}) => {
						e("setCommentingStatus", {
							experimentId: s,
							commentAccess: t
						}), e("addAnnouncementComments", {
							experimentId: s,
							comments: n,
							threads: a
						})
					})
				},
				postAnnouncementComment({
					commit: t
				}, {
					experimentId: e,
					text: s,
					parentId: n
				}) {
					return vc({
						experimentId: e,
						text: s,
						parentId: n
					}).then(({
						commentAccess: s,
						data: n
					}) => {
						t("setCommentingStatus", {
							experimentId: e,
							commentAccess: s
						}), t("addAnnouncementComment", {
							experimentId: e,
							comment: n.comment
						})
					})
				},
				loadArchivedAnnouncementsList({
					state: t,
					commit: e,
					rootGetters: s
				}) {
					return t.announcementCards ? Promise.resolve() : Sc(s["i18n/langOptions"]).then(({
						announcementRefs: t,
						announcementExperimentIds: s
					}) => {
						e("setArchivedAnnouncements", {
							announcements: t,
							list: s
						})
					})
				},
				voteForComment({
					commit: t
				}, {
					experimentId: e,
					commentId: s,
					direction: n
				}) {
					const a = "up" === n ? 1 : -1;
					return Ec({
						experimentId: e,
						commentId: s,
						mark: a
					}).then(({
						score: n,
						votesCount: a,
						vote: i
					}) => {
						const o = {
							score: n,
							votesCount: a,
							vote: i
						};
						t("patchComment", {
							experimentId: e,
							commentId: s,
							newValues: o
						})
					})
				}
			}
		};

		function Ic(t) {
			return Object(ze["b"])(Object(Xe["a"])("seo-landings-hubs"), t)
		}
		var Ac = {
			namespaced: !0,
			state() {
				return {
					seoLandings: [],
					hubs: ""
				}
			},
			mutations: {
				setSeoLandings(t, e) {
					t.seoLandings = e
				},
				setHubs(t, e) {
					t.hubs = e
				},
				clearSeoLandings(t) {
					t.seoLandings = []
				}
			},
			actions: {
				loadSeoLandings({
					state: t,
					commit: e
				}, {
					hubs: s
				}) {
					return t.hubs === s ? null : (e("clearSeoLandings"), Ic({
						hubs: s
					}).then(t => {
						e("setSeoLandings", t), e("setHubs", s)
					}))
				}
			}
		},
			yc = s("67d1"),
			Lc = {
				namespaced: !0,
				state() {
					return {
						companyRefs: {},
						companyIds: {},
						companyTopIds: {},
						pagesCount: {},
						companyProfiles: {},
						companiesCategories: [],
						companiesCategoriesTotalCount: 0,
						companiesWidgets: {},
						companiesWorkers: {},
						companiesFans: {},
						route: {},
						isLoading: !1,
						companyWorkersLoading: !1,
						companyFansLoading: !1,
						vacancies: {},
						workplaceInfo: null
					}
				},
				getters: {
					getCompanyInfo: t => e => t.companyRefs[e] || null,
					getCompanyStartupStatus: t => e => {
						const s = t.companyRefs[e] || null;
						return !!s && s.settings.isStartup
					},
					getProfileInfo: t => e => t.companyProfiles[e] || null,
					companiesTopRating: t => {
						const {
							companyTopIds: e
						} = t;
						return e && e.length ? e.map(e => t.companyRefs[e]) : []
					},
					getCompanyVacancies: t => e => t.vacancies[e]
				},
				mutations: {
					setCompanyRefs(t, e) {
						t.companyRefs = {
							...t.companyRefs,
							...e
						}
					},
					setCompanyIds(t, {
						routeKey: e,
						companyIds: s
					}) {
						t.companyIds = {
							...t.companyIds,
							[e]: s
						}
					},
					setCompanyTopIds(t, e) {
						t.companyTopIds = e
					},
					setCompanyInfo(t, {
						companyInfo: e,
						alias: s
					}) {
						t.companyRefs = {
							...t.companyRefs,
							[s]: {
								...t.companyRefs[s],
								...e,
								statistics: {
									...e.statistics,
									...t.companyRefs[s] ? t.companyRefs[s].statistics : {}
								}
							}
						}
					},
					setProfileInfo(t, e) {
						t.companyProfiles = {
							...t.companyProfiles,
							...e
						}
					},
					setCompaniesCategories(t, e) {
						t.companiesCategories = e
					},
					setCompaniesCategoriesTotalCount(t, e) {
						t.companiesCategoriesTotalCount = e
					},
					setSubscriptionStatus(t, {
						alias: e,
						isSubscribed: s
					}) {
						t.companyRefs[e].relatedData.isSubscribed = s
					},
					setPagesCount(t, {
						routeKey: e,
						pagesCount: s
					}) {
						t.pagesCount = {
							...t.pagesCount,
							[e]: s
						}
					},
					setRouteCache(t, e) {
						t.route.name = e.name, t.route.params = e.params, t.route.query = e.query
					},
					clearCompanies(t, e) {
						t.companyIds[e] && (t.companyIds[e] = [])
					},
					setLoading(t, e) {
						t.isLoading = e
					},
					setCompanyWidgets(t, {
						alias: e,
						widgets: s
					}) {
						t.companiesWidgets = {
							...t.companiesWidgets,
							[e]: s
						}
					},
					setCompanyWorkers(t, {
						alias: e,
						data: s
					}) {
						t.companiesWorkers = {
							...t.companiesWorkers,
							[e]: s
						}
					},
					setCompanyWorkersLoading(t, e) {
						t.companyWorkersLoading = e
					},
					setCompanyFans(t, {
						alias: e,
						data: s
					}) {
						t.companiesFans = {
							...t.companiesFans,
							[e]: s
						}
					},
					setCompanyFansLoading(t, e) {
						t.companyFansLoading = e
					},
					setCompanyVacancies(t, {
						alias: e,
						vacancies: s,
						totalPages: n
					}) {
						t.vacancies = {
							...t.vacancies,
							[e]: {
								vacancies: s,
								totalPages: n
							}
						}
					},
					setWorkplaceInfo(t, e) {
						t.workplaceInfo = e
					}
				},
				actions: {
					loadCompanies({
						commit: t,
						state: e,
						rootGetters: s
					}, {
						route: n
					}) {
						const a = {
							title: "abc",
							rating: "rating"
						},
							i = {
								...n.query,
								page: n.params.pageNum || 1,
								perPage: n.query.perPage || 20,
								sector: n.params.categoryAlias || null,
								order: a[n.query.sort] || "rating",
								orderDirection: n.query.order || "desc"
							},
							{
								q: o
							} = n.query,
							r = o ? yc["D"] : yc["C"];
						let c = {};
						o || (n.params.flowName && (c = {
							flowAlias: n.params.flowName
						}), n.params.hubName && (c = {
							hubAlias: n.params.hubName
						}));
						const l = Object(Ns["a"])(n),
							u = e.companyIds[l],
							m = Boolean(Object.keys(n.query).length),
							d = JSON.stringify(e.route.query) === JSON.stringify(n.query),
							p = n.params.hubName || n.params.flowName;
						return !(!(u && u.length && d) || o || p) || ((m && !d || p) && t("clearCompanies", l), t("setLoading", !0), r({
							...i,
							...c,
							...s["i18n/langOptions"]
						}).then(({
							companyRefs: e,
							companyIds: s,
							pagesCount: a
						}) => (t("setCompanyRefs", e), t("setCompanyIds", {
							routeKey: l,
							companyIds: s
						}), t("setPagesCount", {
							routeKey: l,
							pagesCount: o ? 1 : a
						}), t("setRouteCache", n), t("setLoading", !1), {
							companyRefs: e,
							companyIds: s,
							pagesCount: a
						})))
					},
					searchCompanies({
						state: t,
						commit: e
					}, {
						route: s
					}) {
						const n = {
							...s.query,
							page: s.params.pageNum || 1
						},
							a = Object(Ns["a"])(s),
							i = JSON.stringify(t.route.query) === JSON.stringify(s.query),
							o = Boolean(Object.keys(s.query).length);
						return o && !i && e("clearCompanies", a), e("setLoading", !0), Object(yc["D"])(n).then(({
							companyRefs: t,
							companyIds: n,
							pagesCount: i
						}) => (e("setCompanyRefs", t), e("setCompanyIds", {
							routeKey: a,
							companyIds: n
						}), e("setPagesCount", {
							routeKey: a,
							pagesCount: i
						}), e("setRouteCache", s), e("setLoading", !1), {
							companyRefs: t,
							companyIds: n,
							pagesCount: i
						}))
					},
					loadTopCompanies({
						commit: t,
						state: e,
						rootGetters: s
					}) {
						const {
							companyTopIds: n
						} = e;
						if (n && n.length) return e.companyTopIds;
						const a = {
							page: 1,
							perPage: 10,
							sector: null,
							order: "rating",
							orderDirection: "desc"
						};
						return Object(yc["C"])({
							...a,
							...s["i18n/langOptions"]
						}).then(({
							companyRefs: e,
							companyIds: s
						}) => (t("setCompanyTopIds", s), t("setCompanyRefs", e), {
							companyRefs: e,
							companyIds: s
						}))
					},
					loadCompanyInfo({
						rootGetters: t,
						state: e,
						commit: s
					}, {
						alias: n
					}) {
						const a = t["i18n/langOptions"],
							i = e.companyRefs[n],
							o = i && i.location,
							r = t["pullRefresh/getRefreshState"];
						return o && !r ? Promise.resolve() : Object(yc["U"])(n, a).then(t => {
							s("setCompanyInfo", {
								companyInfo: t,
								alias: n
							})
						})
					},
					getEmployeeStatus({
						rootGetters: t,
						commit: e
					}, {
						alias: s
					}) {
						const n = t["i18n/langOptions"],
							a = t["me/userAlias"];
						return e("setWorkplaceInfo", {
							isUserEmployee: !1,
							employeeRequest: null
						}), Object(yc["g"])(s, a, n).then(t => t.ok ? (e("setWorkplaceInfo", {
							isUserEmployee: !0,
							employeeRequest: null
						}), Promise.resolve(null)) : Object(xr["b"])(a, s).then(({
							employeeRequest: t
						}) => {
							t ? e("setWorkplaceInfo", {
								isUserEmployee: !1,
								employeeRequest: t
							}) : Promise.resolve(null)
						})).catch(() => e("setWorkplaceInfo", null))
					},
					updateWorkplaceInfo({
						commit: t
					}, e) {
						t("setWorkplaceInfo", e)
					},
					loadProfileInfo({
						rootGetters: t,
						state: e,
						commit: s
					}, {
						alias: n
					}) {
						const a = t["i18n/langOptions"],
							i = e.companyProfiles[n],
							o = t["pullRefresh/getRefreshState"];
						return i && !o ? Promise.resolve(i) : Object(yc["fb"])(n, a).then(t => {
							const e = {
								[n]: {
									...t
								}
							};
							return s("setProfileInfo", e), t
						})
					},
					loadCompaniesCategories({
						commit: t,
						state: e
					}) {
						return e.companiesCategories.length ? Promise.resolve(e.companiesCategories) : (t("setCompaniesCategories", []), Object(yc["z"])().then(({
							countByCategories: e,
							totalCount: s
						}) => {
							t("setCompaniesCategoriesTotalCount", s), t("setCompaniesCategories", e)
						}))
					},
					toggleSubscribeStatus({
						commit: t,
						state: e
					}, s) {
						const {
							isSubscribed: n
						} = e.companyRefs[s].relatedData, a = !n;
						return t("setSubscriptionStatus", {
							alias: s,
							isSubscribed: a
						}), Object(yc["Qb"])(s).catch(e => {
							throw t("setSubscriptionStatus", {
								alias: s,
								isSubscribed: !a
							}), e
						})
					},
					loadCompanyWidgets({
						commit: t,
						state: e,
						rootGetters: s
					}, n) {
						if (e.companiesWidgets[n]) return Promise.resolve();
						const a = s["i18n/langOptions"];
						return Object(yc["jb"])(n, a).then(({
							widgetRefs: e
						}) => {
							t("setCompanyWidgets", {
								alias: n,
								widgets: e
							})
						})
					},
					loadCompanyWorkers({
						commit: t,
						state: e
					}, s) {
						const n = s.name === e.route.name,
							a = JSON.stringify(s.params) === JSON.stringify(e.route.params);
						if (n && a) return Promise.resolve();
						t("setRouteCache", s);
						const i = s.params.name.toLowerCase(),
							o = s.params.pageNum || 1,
							r = "COMPANY_WORKERS_NEW" === s.name ? "new" : "all";
						return t("setCompanyWorkersLoading", !0), Object(yc["kb"])(i, r, {
							page: o
						}).then(e => {
							t("setCompanyWorkers", {
								alias: i,
								data: e
							}), t("setCompanyWorkersLoading", !1)
						})
					},
					loadCompanyFans({
						commit: t,
						state: e
					}, s) {
						const n = s.name === e.route.name,
							a = JSON.stringify(s.params) === JSON.stringify(e.route.params);
						if (n && a) return Promise.resolve();
						t("setRouteCache", s);
						const i = s.params.name.toLowerCase(),
							o = s.params.pageNum || 1,
							r = "COMPANY_FANS_NEW" === s.name ? "new" : "all";
						return t("setCompanyFansLoading", !0), Object(yc["bb"])(i, r, {
							page: o
						}).then(e => {
							t("setCompanyFans", {
								alias: i,
								data: e
							}), t("setCompanyFansLoading", !1)
						})
					},
					loadCompanyVacancies({
						commit: t
					}, {
						alias: e,
						page: s = 1
					}) {
						return Object(yc["ib"])(e, {
							page: s
						}).then(({
							vacancies: s,
							pagesCount: n
						}) => {
							t("setCompanyVacancies", {
								alias: e,
								totalPages: n,
								vacancies: s
							})
						})
					}
				}
			},
			Pc = {
				namespaced: !0,
				state() {
					return {
						hubs: {},
						flows: {},
						companyRefs: {}
					}
				},
				getters: {
					getCompaniesHubsContributionByAlias: t => e => {
						const s = e.toLowerCase();
						return t.hubs[s] ? t.hubs[s].map(e => t.companyRefs[e]) : []
					},
					getCompaniesFlowsContributionByAlias: t => e => {
						const s = e.toLowerCase();
						return t.flows[s] ? t.flows[s].map(e => t.companyRefs[e]) : []
					}
				},
				mutations: {
					setCompaniesHubsContribution(t, {
						companyRefs: e,
						companyIds: s,
						key: n
					}) {
						t.companyRefs = {
							...t.companyRefs,
							...e
						}, t.hubs = {
							...t.companyIds,
							[n]: s
						}
					},
					setCompaniesFlowsContribution(t, {
						companyRefs: e,
						companyIds: s,
						key: n
					}) {
						t.companyRefs = {
							...t.companyRefs,
							...e
						}, t.flows = {
							...t.companyIds,
							[n]: s
						}
					}
				},
				actions: {
					loadHubsContributions({
						state: t,
						commit: e
					}, s) {
						const n = s.toLowerCase();
						return t.hubs[n] ? t.hubs[n] : Object(yc["B"])(s).then(({
							companyRefs: t,
							companyIds: s
						}) => {
							e("setCompaniesHubsContribution", {
								companyRefs: t,
								companyIds: s,
								key: n
							})
						})
					},
					loadFlowsContributions({
						state: t,
						commit: e
					}, s) {
						const n = s.toLowerCase();
						return t.flows[n] ? t.flows[n] : Object(yc["A"])(s).then(({
							companyRefs: t,
							companyIds: s
						}) => {
							e("setCompaniesFlowsContribution", {
								companyRefs: t,
								companyIds: s,
								key: n
							})
						})
					}
				}
			};
		const Nc = {
			inactive: 0,
			ready: 1,
			visible: 2
		},
			Rc = () => !!window.jivo_api,
			Mc = {
				super: "COMPANY_ADMIN_EVENT_ROLE_super",
				admin: "COMPANY_ADMIN_EVENT_ROLE_admin",
				author: "COMPANY_ADMIN_EVENT_ROLE_author",
				editor: "COMPANY_ADMIN_EVENT_ROLE_editor"
			};
		var wc = {
			namespaced: !0,
			state() {
				return {
					companyInfo: null,
					companyInfoLoading: !1,
					faqArticles: null,
					brandingPreviewImageUrl: null,
					jivoStatus: Nc.inactive
				}
			},
			mutations: {
				setCompanyInfo(t, e) {
					t.companyInfo = e
				},
				setCompanyInfoLoading(t, e) {
					t.companyInfoLoading = e
				},
				setFaqNavigationList(t, e) {
					t.faqNavigationList = e
				},
				setHasStartupProlongationFlag(t, e) {
					t.companyInfo && t.companyInfo.tariffData && (t.companyInfo.tariffData.hasStartupProlongationRequest = e)
				},
				setFaqArticles(t, e) {
					t.faqArticles = e
				},
				setBrandingPreviewImageUrl(t, e) {
					t.brandingPreviewImageUrl = e
				},
				setJivoStatus(t, e) {
					t.jivoStatus = e
				}
			},
			actions: {
				loadCompanyInfo({
					rootGetters: t,
					commit: e
				}, {
					alias: s
				}) {
					const n = t["i18n/langOptions"];
					return e("setCompanyInfoLoading", !0), Object(yc["L"])(s, n).then(t => {
						e("setCompanyInfo", t)
					}).finally(() => {
						e("setCompanyInfoLoading", !1)
					})
				},
				loadFaqData({
					commit: t,
					rootGetters: e,
					state: s
				}) {
					const n = e["i18n/langOptions"];
					return s.faqArticles ? Promise.resolve() : Object(yc["J"])(n).then(({
						articlesList: t
					}) => Promise.all([...t.map(t => Object(yc["I"])(t.alias, n))])).then(e => {
						t("setFaqArticles", e)
					})
				},
				setBrangingPreviewImage({
					commit: t
				}, e) {
					t("setBrandingPreviewImageUrl", e)
				},
				initializeJivoSiteChat({
					state: t,
					commit: e
				}) {
					return new Promise((s, n) => {
						if (t.jivoStatus === Nc.visible) s();
						else if (Rc()) return window.jivo_init(), void s();
						const a = document.createElement("script");
						a.src = "//code-ya.jivosite.com/widget/43McEsqDSt", a.async = !0, a.addEventListener("error", n), document.body.append(a), window.jivo_onLoadCallback = () => {
							e("setJivoStatus", Nc.ready), s()
						}
					})
				},
				sendJivoData({
					state: t,
					rootState: e,
					getters: s
				}, {
					companyBlogUrl: n,
					userRole: a
				}) {
					if (!Rc()) return;
					window.jivo_api.setContactInfo({
						name: e.me.user.fullname,
						email: e.me.user.email
					});
					const [i, o] = [t.companyInfo.tariffData.startedAt, t.companyInfo.tariffData.endedAt].map(t => new Date(t).toLocaleDateString("ru-RU")), r = [{
						title: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð±Ð»Ð¾Ð³Ð° ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¸",
						content: t.companyInfo.titleHtml
					}, {
						title: "Ð¡ÑÑ‹Ð»ÐºÐ° Ð½Ð° Ð±Ð»Ð¾Ð³",
						content: n
					}, {
						title: "Ð¢ÐµÐºÑƒÑ‰Ð¸Ð¹ Ñ‚Ð°Ñ€Ð¸Ñ„",
						content: t.companyInfo.tariffData.title
					}, {
						title: "Ð¡Ñ€Ð¾Ðº Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ Ñ‚ÐµÐºÑƒÑ‰ÐµÐ³Ð¾ Ñ‚Ð°Ñ€Ð¸Ñ„Ð°",
						content: `${i} - ${o}`
					}, {
						title: "Ð›Ð¾Ð³Ð¸Ð½ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ",
						content: e.me.user.alias
					}];
					a && r.push({
						title: "Ð Ð¾Ð»ÑŒ Ð² Ð¿Ð°Ð½ÐµÐ»Ð¸ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ",
						content: a && s.getUserRoleTitle(a)
					}), window.jivo_api.setCustomData(r)
				},
				destroyJivo({
					commit: t
				}) {
					Rc() && (window.jivo_destroy(), t("setJivoStatus", Nc.ready))
				}
			},
			getters: {
				getUserRoleTitle(t, e, s, n) {
					return t => n["i18n/msg"](Mc[t])
				}
			}
		},
			kc = {
				state() {
					return {
						hubRefs: {},
						hubIds: {}
					}
				},
				getters: {
					getHubsContributionsByAlias: t => e => {
						const s = e.toLowerCase();
						return t.hubIds[s] ? t.hubIds[s].map(e => t.hubRefs[e]) : []
					}
				},
				mutations: {
					setHubsContribution(t, {
						hubs: e,
						key: s
					}) {
						t.hubRefs = {
							...t.hubRefs,
							...e.hubRefs
						}, t.hubIds = {
							...t.hubIds,
							[s]: e.hubIds
						}
					}
				}
			},
			jc = {
				namespaced: !0,
				modules: {
					contributionRefs: kc
				},
				actions: {
					loadCompanyHubsContributions({
						state: t,
						commit: e
					}, s) {
						const n = s.toLowerCase();
						return t.contributionRefs.hubIds[n] ? t.contributionRefs.hubIds[n] : Object(yc["db"])(s).then(t => {
							e("setHubsContribution", {
								hubs: t,
								key: n
							})
						})
					}
				}
			},
			Dc = {
				namespaced: !0,
				state() {
					return {
						messages: [],
						respondent: null,
						isLoadMore: !1
					}
				},
				mutations: {
					setMessages(t, e) {
						t.messages = e
					},
					addMessage(t, e) {
						t.messages.push(e)
					},
					setRespondent(t, e) {
						t.respondent = e
					},
					setLoadMoreStatus(t, e) {
						t.isLoadMore = e
					},
					cleanState(t) {
						t.messages = [], t.respondent = null, t.isLoadMore = !1
					}
				},
				actions: {
					fillState({
						commit: t
					}, {
						messages: e,
						respondent: s,
						isLoadMore: n
					}) {
						t("setLoadMoreStatus", !!n), t("setMessages", e), t("setRespondent", s)
					},
					updateMassagesList({
						state: t,
						commit: e
					}, {
						messages: s,
						isLoadMore: n
					}) {
						const a = s.concat(t.messages);
						e("setLoadMoreStatus", !!n), e("setMessages", a)
					},
					addMessage({
						commit: t
					}, e) {
						t("addMessage", e)
					},
					cleanState({
						commit: t
					}) {
						t("cleanState")
					}
				}
			},
			xc = {
				namespaced: !0,
				state() {
					return {
						conversations: [],
						unreadCount: 0,
						pagesCount: 0
					}
				},
				mutations: {
					setConversations(t, e) {
						t.conversations = e
					},
					deleteConversation(t, e) {
						t.conversations.splice(e, 1)
					},
					setUnreadCount(t, e) {
						t.unreadCount = e
					},
					setPagesCount(t, e) {
						t.pagesCount = e
					},
					cleanState(t) {
						t.conversations = [], t.pagesCount = 0
					}
				},
				actions: {
					fillState({
						commit: t
					}, {
						conversations: e,
						pagesCount: s
					}) {
						t("setPagesCount", s), t("setConversations", e)
					},
					deleteConversation({
						commit: t
					}, e) {
						t("deleteConversation", e)
					},
					setUnreadCount({
						commit: t
					}, {
						unreadCount: e
					}) {
						t("setUnreadCount", e)
					},
					cleanState({
						commit: t
					}) {
						t("cleanState")
					}
				}
			},
			Bc = s("412b"),
			$c = s("64e7");
		let Fc = 0,
			Gc = null;

		function Uc(t, e = 300) {
			return t() ? (clearTimeout(Gc), Promise.resolve(!0)) : Fc >= 3 ? (clearTimeout(Gc), Promise.resolve(!1)) : new Promise((s, n) => {
				Gc = setTimeout(() => {
					Fc += 1, Uc(t, e).then(s, n)
				}, e * Fc)
			})
		}
		const Vc = 864e5,
			Wc = "habr_web_checked_desktop_state";

		function Hc() {
			if (!Object($c["a"])(Wc)) return !1;
			const t = Object(Bc["a"])(Object($c["a"])(Wc)),
				e = Date.now() - t > Vc;
			return !e || (Object($c["b"])(Wc), !1)
		}

		function Yc() {
			const t = "e0044d29c024";
			return Boolean(Kr["a"][t])
		}

		function qc() {
			const t = "habrLogin";
			if (Kr["a"][t]) return Kr["a"][t]();
			const e = "isLogined";
			return !!Kr["a"][e] && Kr["a"][e]()
		}
		var Kc = {
			namespaced: !0,
			state() {
				return {
					desktopFl: null,
					desktopHl: null,
					isChecked: Hc(),
					isLoginDemanded: !1
				}
			},
			mutations: {
				setChecked(t, e) {
					t.isChecked = e
				},
				setIsLoginDemanded(t, e) {
					t.isLoginDemanded = e
				},
				setDesktopHl(t, e) {
					t.desktopHl = e
				},
				setDesktopFl(t, e) {
					t.desktopFl = e
				}
			},
			actions: {
				checkDesktopState({
					dispatch: t,
					state: e
				}) {
					return e.isChecked || e.me && e.me.user ? Promise.resolve(!1) : Uc(Yc).then(() => t("markAsChecked")).then(() => Promise.all([t("checkLogin")])).then(([t]) => ({
						shouldLogin: t
					}))
				},
				checkLogin({
					commit: t
				}) {
					const e = qc();
					return t("setIsLoginDemanded", e), e
				},
				markAsChecked({
					commit: t
				}) {
					return Object($c["c"])(Wc, Date.now()), t("setChecked", !1), null
				}
			}
		};

		function zc(t, e) {
			return Object(ze["b"])(Object(Xe["a"])(`docs/${t}/menu`, "v2"), e)
		}

		function Xc(t, e, s) {
			return Object(ze["b"])(Object(Xe["a"])(`docs/${t}/${e}`, "v2"), s)
		}

		function Jc(t) {
			return Object(ze["b"])(Object(Xe["a"])("docs/", "v2"), t)
		}
		const Qc = t => {
			const {
				alias: e,
				articleAlias: s
			} = t;
			return `${e}/${s}`
		};
		var Zc = {
			namespaced: !0,
			state() {
				return {
					menu: {},
					articles: {},
					mainMenu: [],
					loading: {
						main: !1,
						dropdown: !1,
						article: !1
					}
				}
			},
			mutations: {
				setMenu(t, {
					alias: e,
					articlesList: s
				}) {
					t.menu = {
						...t.menu,
						[e]: s
					}
				},
				setArticle(t, {
					route: e,
					article: s
				}) {
					t.articles = {
						...t.articles,
						[Qc(e)]: s
					}
				},
				setMainMenu(t, e) {
					t.mainMenu = e
				},
				setLoadingState(t, e) {
					const {
						name: s,
						value: n
					} = e;
					t.loading[s] = n
				}
			},
			getters: {
				getMenuByAlias: t => e => t.menu[e],
				getArticleByAlias: t => e => t.articles[Qc(e)]
			},
			actions: {
				getDropdownList({
					commit: t,
					state: e,
					rootGetters: s
				}, {
					alias: n
				}) {
					return n ? e.menu[n] ? Promise.resolve() : (t("setLoadingState", {
						name: "dropdown",
						value: !0
					}), zc(n, s["i18n/langOptions"]).then(e => {
						const {
							articlesList: s
						} = e;
						return t("setMenu", {
							alias: n,
							articlesList: s
						}), t("setLoadingState", {
							name: "dropdown",
							value: !1
						}), s
					})) : Promise.resolve()
				},
				getArticle({
					commit: t,
					state: e,
					rootGetters: s
				}, n) {
					const {
						alias: a,
						articleAlias: i
					} = n;
					if (!i) return Promise.resolve();
					const o = Qc(n);
					return e.articles[o] ? Promise.resolve() : (t("setLoadingState", {
						name: "article",
						value: !0
					}), Xc(a, i, s["i18n/langOptions"]).then(e => {
						t("setArticle", {
							route: n,
							article: e
						}), t("setLoadingState", {
							name: "article",
							value: !1
						})
					}))
				},
				getMainMenu({
					state: t,
					commit: e,
					rootGetters: s
				}) {
					return 0 === t.mainMenu.length ? (e("setLoadingState", {
						name: "main",
						value: !0
					}), Jc(s["i18n/langOptions"]).then(t => {
						e("setMainMenu", t), e("setLoadingState", {
							name: "main",
							value: !1
						})
					})) : Promise.resolve()
				}
			}
		},
			tl = {
				namespaced: !0,
				state() {
					return {
						isProbablyVisible: !1
					}
				},
				mutations: {
					setIsProbablyVisible(t, e) {
						t.isProbablyVisible = e
					}
				}
			},
			el = {
				namespaced: !0,
				state() {
					return {
						flows: []
					}
				},
				mutations: {
					setFlows(t, e) {
						t.flows = e
					}
				},
				actions: {
					loadFlows({
						commit: t,
						state: e
					}) {
						return e.flows.length ? Promise.resolve(e.flows) : (t("setFlows", []), mc().then(e => (t("setFlows", e), e)))
					}
				}
			},
			sl = {
				namespaced: !0,
				state() {
					return {
						isPwa: !1,
						device: null,
						isHabrCom: null
					}
				},
				getters: {
					isMobileOnly(t) {
						return "mobile" === t.device
					},
					isMobile(t) {
						return "mobile" === t.device || "tablet" === t.device
					},
					isTablet(t) {
						return "tablet" === t.device
					},
					isDesktop(t) {
						return "desktop" === t.device
					},
					isHabrCom(t) {
						return !!t.isHabrCom
					}
				},
				mutations: {
					initPwaMode(t) {
						t.isPwa = !0
					},
					setDevice(t, e) {
						t.device = e
					},
					setIsHabrCom(t, e) {
						t.isHabrCom = e
					}
				},
				actions: {
					initPwaMode({
						commit: t
					}) {
						t("initPwaMode")
					},
					setDevice({
						commit: t
					}, {
						device: e
					}) {
						t("setDevice", e)
					},
					setIsHabrCom({
						commit: t
					}, {
						isHabrCom: e
					}) {
						t("setIsHabrCom", e)
					}
				}
			},
			nl = {
				namespaced: !0,
				state() {
					return {
						hubRefs: {},
						hubIds: {},
						pagesCount: {},
						isLoading: !1,
						route: {}
					}
				},
				getters: {
					getHubByAlias: t => e => t.hubRefs[e.toLowerCase()] || null
				},
				mutations: {
					setHubRefs(t, e) {
						t.hubRefs = {
							...t.hubRefs,
							...e
						}
					},
					setHubIds(t, {
						routeKey: e,
						hubIds: s
					}) {
						t.hubIds = {
							...t.hubIds,
							[e]: s
						}
					},
					clearHubs(t, e) {
						t.hubIds[e] && (t.hubIds[e] = [])
					},
					setLoading(t, e) {
						t.isLoading = e
					},
					setRouteCache(t, e) {
						t.route.name = e.name, t.route.params = e.params, t.route.query = e.query
					},
					setPagesCount(t, {
						routeKey: e,
						pagesCount: s
					}) {
						t.pagesCount = {
							...t.pagesCount,
							[e]: s
						}
					},
					setHubInfo(t, {
						hubAlias: e,
						hubInfo: s
					}) {
						t.hubRefs = {
							...t.hubRefs,
							[e]: s
						}
					},
					setSubscriptionStatus(t, {
						alias: e,
						isSubscribed: s
					}) {
						t.hubRefs[e].relatedData.isSubscribed = s
					}
				},
				actions: {
					loadHubs({
						state: t,
						commit: e
					}, {
						route: s
					}) {
						const n = {
							...s.query,
							page: s.params.pageNum || 1,
							flowAlias: s.params.flowName
						},
							{
								q: a
							} = s.query,
							i = a ? pc["e"] : pc["d"],
							o = Object(Ns["a"])(s),
							r = t.hubIds[o],
							c = Boolean(Object.keys(s.query).length),
							l = JSON.stringify(t.route.query) === JSON.stringify(s.query);
						return !(!(r && r.length && l) || a) || (c && !l && e("clearHubs", o), e("setLoading", !0), i(n).then(({
							hubRefs: t,
							hubIds: n,
							pagesCount: i
						}) => (e("setHubRefs", t), e("setHubIds", {
							routeKey: o,
							hubIds: n
						}), e("setPagesCount", {
							routeKey: o,
							pagesCount: a ? 1 : i
						}), e("setRouteCache", s), e("setLoading", !1), {
							hubRefs: t,
							hubIds: n,
							pagesCount: i
						})))
					},
					searchHubs({
						state: t,
						commit: e
					}, {
						route: s
					}) {
						const n = {
							...s.query,
							page: s.params.pageNum || 1
						},
							a = Object(Ns["a"])(s),
							i = JSON.stringify(t.route.query) === JSON.stringify(s.query),
							o = Boolean(Object.keys(s.query).length);
						return o && !i && e("clearHubs", a), e("setLoading", !0), Object(pc["e"])(n).then(({
							hubRefs: t,
							hubIds: n,
							pagesCount: i
						}) => (e("setHubRefs", t), e("setHubIds", {
							routeKey: a,
							hubIds: n
						}), e("setPagesCount", {
							routeKey: a,
							pagesCount: i
						}), e("setRouteCache", s), e("setLoading", !1), {
							hubRefs: t,
							hubIds: n,
							pagesCount: i
						}))
					},
					loadHub({
						rootGetters: t,
						state: e,
						commit: s
					}, {
						alias: n
					}) {
						const a = t["i18n/langOptions"],
							i = n.toLowerCase(),
							o = e.hubRefs[i],
							r = o && o.fullDescriptionHtml,
							c = t["pullRefresh/getRefreshState"];
						return r && !c ? Promise.resolve(o) : Object(pc["c"])(n, a).then(t => (s("setHubInfo", {
							hubInfo: t,
							hubAlias: i
						}), t))
					},
					toggleSubscribeStatus({
						commit: t,
						state: e
					}, s) {
						const n = s.toLowerCase(),
							{
								isSubscribed: a
							} = e.hubRefs[n].relatedData,
							i = !a;
						return t("setSubscriptionStatus", {
							alias: n,
							isSubscribed: i
						}), Object(pc["g"])(s).catch(() => {
							t("setSubscriptionStatus", {
								alias: n,
								isSubscribed: !i
							})
						})
					}
				}
			},
			al = {
				namespaced: !0,
				state() {
					return {
						hubRefs: {},
						hubIds: {}
					}
				},
				getters: {
					getBlockHubsListByAlias: t => (e = "all") => t.hubIds[e] ? t.hubIds[e].map(e => t.hubRefs[e]) : []
				},
				mutations: {
					setHubsBlock(t, {
						hubs: e,
						flowName: s
					}) {
						t.hubRefs = {
							...t.hubRefs,
							...e.hubRefs
						}, t.hubIds = {
							...t.hubIds,
							[s]: e.hubIds
						}
					}
				},
				actions: {
					loadHubsBlock({
						state: t,
						commit: e
					}, {
						flowName: s = "all"
					}) {
						const n = {
							page: 1,
							flowAlias: "all" === s ? null : s,
							perPage: 10
						};
						return t.hubIds[s] ? t.hubIds[s] : Object(pc["d"])(n).then(t => (e("setHubsBlock", {
							hubs: t,
							flowName: s
						}), t.hubIds))
					}
				}
			},
			il = s("36b6"),
			ol = s.n(il),
			rl = s("e902"),
			cl = s("e459");
		let ll;

		function ul(t) {
			ll = t
		}

		function ml(t, e, s) {
			if (!ll) return "â–‡â–…â–„â–…â–…â–„ â–‡â–„â–…";
			const n = ll[t];
			if (!n) return Object(cl["a"])(e, new Error(`Language "${t}" is not present in the locales cache`)), "â–‡â–…â–„â–…â–…â–„ â–‡â–„â–…";
			const a = n[e];
			try {
				const e = new rl["a"](a, t, null, {
					ignoreTag: !0
				});
				return e.format(s)
			} catch (i) {
				return Object(cl["a"])(e, i), "â–‡â–…â–„â–…â–…â–„ â–‡â–„â–…"
			}
		}
		const dl = {
			en: "en_US",
			ru: "ru_RU"
		};
		var pl = {
			namespaced: !0,
			state() {
				return {
					fl: null,
					hl: null
				}
			},
			getters: {
				isEnglishContentEnabled: t => t.fl && t.fl.indexOf("en") > -1,
				isRussianContentEnabled: t => t.fl && t.fl.indexOf("ru") > -1,
				langOptions: t => ({
					fl: t.fl,
					hl: t.hl
				}),
				currentLocale: (t, e) => dl[e.langOptions.hl],
				msg(t, e) {
					return (t, s = {}) => ml(e.langOptions.hl, t, s)
				},
				pageTitle(t, e) {
					return (...t) => ol()([...t.filter(Boolean), e.msg("SITENAME")].join(" / "))
				}
			},
			mutations: {
				setFl(t, e) {
					t.fl = e
				},
				setHl(t, e) {
					t.hl = e
				},
				setLangParams(t, {
					fl: e,
					hl: s
				}) {
					t.fl = e, t.hl = s
				}
			}
		};

		function _l(t, e) {
			return Object(ze["b"])(Object(Xe["a"])("info" + t), e)
		}
		var hl = {
			namespaced: !0,
			state() {
				return {
					infoPage: {},
					isLoading: !0
				}
			},
			getters: {
				infoPage: t => e => {
					const s = e.params.topic ? `${e.params.section}-${e.params.topic}` : e.params.section + "-index";
					return t.infoPage[s]
				},
				getInfoPage: t => e => t.infoPage[e] || null
			},
			mutations: {
				setInfo(t, e) {
					t.infoPage = {
						...t.infoPage,
						...e
					}
				},
				setIsLoading(t, e) {
					t.isLoading = e
				}
			},
			actions: {
				loadInfoPage({
					commit: t,
					getters: e,
					rootGetters: s
				}, {
					route: n
				}) {
					const {
						section: a,
						topic: i
					} = n.params, o = i ? `${a}-${i}` : a + "-index";
					let r = "";
					return a && (r = "/" + a), a && i && (r = `/${a}/${i}`), e.getInfoPage(o) ? e.getInfoPage(o) : (t("setIsLoading", !0), _l(r, s["i18n/langOptions"]).then(({
						data: e
					}) => (t("setIsLoading", !1), t("setInfo", {
						[o]: e
					}), e)))
				}
			}
		},
			gl = s("0b16"),
			fl = s.n(gl),
			bl = {
				namespaced: !0,
				state() {
					return {
						urlStruct: Object(Ke["d"])(Object(Ke["b"])()),
						searchQuery: null
					}
				},
				getters: {
					desktopUrlStruct(t) {
						const e = Object.assign({}, t.urlStruct);
						return e.host && 0 === e.host.indexOf("m.") ? e.host = e.host.slice(2) : (e.host = "habr.com", e.protocol = "https:"), e
					},
					desktopUrl(t, e) {
						const s = Object.assign({}, e.desktopUrlStruct);
						return s.query = Object.assign({}, s.query, {
							mobile: "no"
						}), fl.a.format(s)
					}
				},
				mutations: {
					setUrl(t, e) {
						t.urlStruct = e
					},
					setSearchQuery(t, e) {
						t.searchQuery = e
					}
				},
				actions: {
					updateUrl({
						commit: t
					}, {
						route: e
					}) {
						const s = Object(Ke["b"])() || e.fullPath,
							n = Object(Ke["d"])(s);
						n.path = e.path, n.pathname = e.path, Object.assign(n.query, e.query), delete n.search, t("setUrl", n)
					},
					updateSearchQuery({
						commit: t
					}, {
						query: e
					}) {
						t("setSearchQuery", e)
					}
				}
			},
			Tl = {
				namespaced: !0,
				state() {
					return {
						mostReadingListIds: [],
						mostReadingListRefs: null,
						promoPost: null
					}
				},
				getters: {
					mostReadingList: t => t.mostReadingListIds.map(e => t.mostReadingListRefs[e])
				},
				mutations: {
					setMostReadingList(t, {
						articleIds: e,
						articleRefs: s
					}) {
						t.mostReadingListIds = e, t.mostReadingListRefs = s
					},
					setBookmarked(t, {
						articleId: e,
						shouldBookmarked: s
					}) {
						const n = t.mostReadingListRefs[e],
							{
								relatedData: a,
								statistics: i
							} = n;
						i.favoritesCount = s ? i.favoritesCount + 1 : i.favoritesCount - 1, a.bookmarked = s
					},
					setPromoPost(t, e) {
						t.promoPost = e
					}
				},
				actions: {
					loadMostReadingList({
						commit: t,
						getters: e,
						rootGetters: s
					}) {
						return e.mostReadingList.length ? e.mostReadingList : Object(zs["l"])(s["i18n/langOptions"]).then(e => {
							t("setMostReadingList", e)
						})
					}
				}
			};

		function vl(t) {
			return Object(ze["b"])(Object(Xe["a"])("pinned-post"), t)
		}
		var El = {
			namespaced: !0,
			state() {
				return {
					pinnedPost: null
				}
			},
			mutations: {
				setPinnedPost(t, e) {
					t.pinnedPost = e
				},
				setExpanded(t, e) {
					t.pinnedPost = {
						...t.pinnedPost,
						expanded: e
					}
				}
			},
			actions: {
				loadPinnedPost({
					state: t,
					commit: e
				}) {
					return t.pinnedPost ? Promise.resolve() : vl().then(t => {
						e("setPinnedPost", t)
					})
				},
				setExpanded({
					commit: t
				}, e) {
					t("setExpanded", e)
				}
			}
		},
			Sl = s("2be1"),
			Ol = {
				namespaced: !0,
				state() {
					return {
						articles: {},
						card: null,
						transactions: null,
						totalTransactions: null,
						isAccessible: null
					}
				},
				mutations: {
					setArticle(t, {
						articleAlias: e,
						article: s
					}) {
						t.articles = {
							...t.articles,
							[e]: s
						}
					},
					setCard(t, {
						ppaCard: e,
						isAccessible: s
					}) {
						t.card = e, t.isAccessible = s
					},
					patchCard(t, e) {
						t.card = {
							...t.card,
							...e
						}
					},
					setTransactions(t, {
						transactions: e,
						pagesCount: s
					}) {
						t.transactions = e, t.totalTransactions = s
					},
					updateTest(t, e) {
						t.test.test = e
					}
				},
				getters: {
					getArticleByAlias: t => e => t.articles[e],
					isJustCreated: t => t.card && "just_created" === t.card.status
				},
				actions: {
					getArticle({
						commit: t,
						state: e,
						rootGetters: s
					}, n) {
						const a = s["i18n/langOptions"];
						return e.articles[n] ? Promise.resolve() : Object(Sl["b"])(n, a).then(e => {
							t("setArticle", {
								articleAlias: n,
								article: e
							})
						})
					},
					getCard({
						state: t,
						commit: e,
						rootGetters: s
					}) {
						if (t.card) return Promise.resolve();
						const n = s["me/userAlias"];
						return Object(Sl["c"])(n).then(({
							ppaCard: t,
							isAccessible: s
						}) => {
							e("setCard", {
								ppaCard: t,
								isAccessible: s
							})
						})
					},
					getTransactions({
						state: t,
						commit: e,
						rootGetters: s
					}, n) {
						if (t.transactions) return Promise.resolve();
						const a = s["me/userAlias"];
						return Object(Sl["d"])(a, n).then(({
							transactions: t,
							pagesCount: s
						}) => {
							e("setTransactions", {
								transactions: t,
								pagesCount: s
							})
						})
					},
					postWithdrawEnabled({
						commit: t
					}, e) {
						return t("patchCard", {
							withdrawEnabled: e
						}), Object(Sl["g"])(e)
					},
					joinPpa({
						dispatch: t
					}) {
						return Object(Sl["e"])().then(() => t("getCard"))
					}
				}
			};
		const Cl = t => {
			if (0 === t.length) return null;
			const e = t.slice(0).sort(([, t], [, e]) => t - e),
				s = 100 * Math.random();
			let n = 0,
				a = t[0][0];
			return e.forEach(([t, e]) => {
				n <= s && (a = t), n += e
			}), a
		};
		var Il = {
			namespaced: !0,
			state() {
				return {
					activeBlocks: {}
				}
			},
			mutations: {
				registerBlock(t, {
					name: e,
					id: s
				}) {
					t.activeBlocks = {
						...t.activeBlocks,
						[e]: s
					}
				},
				unregisterBlock(t, e) {
					t.activeBlocks = {
						...t.activeBlocks,
						[e]: ""
					}
				}
			},
			getters: {
				getRandomBlockName(t) {
					return e => {
						const s = e.filter(e => !t.activeBlocks[e]).map((t, e, s) => [t, Math.floor(100 / s.length)]);
						return Cl(s)
					}
				},
				getRegisteredBlockById(t) {
					return e => Object.keys(t.activeBlocks).find(s => t.activeBlocks[s] === e)
				}
			}
		},
			Al = {
				namespaced: !0,
				state: {
					isLoading: !1,
					hasLoaded: !1,
					featurer: null,
					megaposts: null,
					promoLinks: null,
					promoPosts: null
				},
				mutations: {
					setLoadingFlag(t, e) {
						t.isLoading = e, e || (t.hasLoaded = !0)
					},
					savePromoData(t, e) {
						Object.keys(e).forEach(s => {
							t[s] = e[s].adverts
						})
					}
				},
				actions: {
					loadPromoData({
						rootGetters: t,
						commit: e
					}) {
						const {
							fl: s,
							hl: n
						} = t["i18n/langOptions"], a = n, i = s.split(","), o = {
							version: "1.0",
							queries: {
								promoPosts: {
									type: "promopost",
									filter: {
										langs: i
									},
									count: 3,
									view: {
										lang: a
									}
								},
								featurer: {
									type: "featurer",
									view: {
										lang: a
									}
								},
								megaposts: {
									type: "megapost",
									filter: {
										langs: i
									},
									count: 1
								},
								promoLinks: {
									type: "promolink",
									filter: {
										langs: i
									},
									count: 2,
									view: {
										lang: a
									}
								}
							}
						};
						return e("setLoadingFlag", !0), Object(j["a"])(o).then(({
							results: {
								featurer: t,
								megaposts: s,
								promoLinks: n,
								promoPosts: a
							}
						}) => {
							e("savePromoData", {
								featurer: t,
								megaposts: s,
								promoLinks: n,
								promoPosts: a
							})
						}).finally(() => {
							e("setLoadingFlag", !1)
						})
					}
				},
				getters: {
					feature({
						featurer: t
					}) {
						return t && t.length ? t[0] : null
					},
					topLinkPost({
						megaposts: t
					}) {
						return t && t.length ? t[0] : null
					},
					promoBlockPosts({
						promoPosts: t
					}) {
						return t && t.length ? t : null
					},
					mostReadingPromoLink({
						promoLinks: t
					}) {
						return t && t.length ? t[0] : null
					},
					dailyTopPromoLink({
						promoLinks: t
					}, {
						mostReadingPromoLink: e
					}) {
						return t && t.length > 1 ? t[1] : e
					}
				}
			},
			yl = {
				namespaced: !0,
				state() {
					return {
						shouldRefresh: !1
					}
				},
				mutations: {
					setRefresh(t, e) {
						t.shouldRefresh = e
					}
				},
				getters: {
					getRefreshState(t) {
						return t.shouldRefresh
					}
				},
				actions: {
					toggleRefresh({
						commit: t
					}, e) {
						t("setRefresh", e)
					}
				}
			};

		function Ll(t, e) {
			switch (t.name) {
				case "NEW_AUTHORS_ARTICLES_LIST":
				case "NEW_AUTHORS_ARTICLES_LIST_PAGES":
					return {
						sandbox: "new_authors_posts"
					};
				case "AWAIT_INVITE_AUTHORS_ARTICLES_LIST":
				case "AWAIT_INVITE_AUTHORS_ARTICLES_LIST_PAGES":
					return {
						sandbox: "awaiting_invite_posts"
					};
				case "MOST_IMPORTANT_SANBOX_INFO":
					return {
						sandbox: "new_authors_posts", perPage: 5
					};
				case "AWAIT_MODERATION_ARTICLES_LIST":
				case "AWAIT_MODERATION_ARTICLES_LIST_PAGES":
					return {
						sandbox: "awaiting_approval_posts"
					};
				case "MY_SANDBOX_ARTICLES_LIST":
				case "MY_SANDBOX_ARTICLES_LIST_PAGES":
				case "ARTICLES_LIST_SANDBOX_BY_USER":
				case "ARTICLES_LIST_SANDBOX_BY_USER_PAGES":
					return {
						sandbox: "by_author", userAlias: e
					};
				default:
					return {}
			}
		}
		var Pl = {
			namespaced: !0,
			state() {
				return {
					articleIds: [],
					articleRefs: {},
					pagesCount: null,
					route: {},
					lastVisitedRoute: {},
					isLoading: !1
				}
			},
			getters: {
				getArticlesByRouteKey: t => e => {
					const s = t.articleIds[e] || [];
					return s.map(e => t.articleRefs[e])
				},
				getArticleById: t => e => t.articleRefs[e] || {}
			},
			mutations: {
				setArticles(t, {
					articleIds: e,
					articleRefs: s
				}) {
					t.articleRefs = {
						...t.articleRefs,
						...s
					}, t.articleIds = {
						...t.articleIds,
						...e
					}
				},
				setArticle(t, {
					article: e
				}) {
					t.articleRefs = {
						...t.articleRefs,
						[e.id]: e
					}
				},
				setPagesCount(t, e) {
					t.pagesCount = {
						...t.pagesCount,
						...e
					}
				},
				setRouteCache(t, e) {
					t.route.name = e.name, t.route.params = e.params, t.route.query = e.query
				},
				setLastVisitedRoute(t, e) {
					t.lastVisitedRoute = e
				},
				setLoading(t, e) {
					t.isLoading = e
				},
				removeArticleFromList(t, e, s) {
					const n = t.articleIds[e].findIndex(({
						id: t
					}) => s === t);
					t.articleIds[e].splice(n, 1)
				},
				clearArticles(t, e) {
					delete t.articleIds[e]
				}
			},
			actions: {
				loadArticleslist({
					commit: t,
					state: e,
					rootGetters: s
				}, {
					route: n,
					force: a
				}) {
					const i = Object(Ns["a"])(n),
						o = e.articleIds[i],
						r = Boolean(Object.keys(n.query).length),
						c = JSON.stringify(e.route.query) === JSON.stringify(n.query),
						l = s["pullRefresh/getRefreshState"];
					if (o && c && !l && !a) return !0;
					(r && !c || l || a) && t("clearArticles", i), t("setLoading", !0);
					const u = n.params.userAlias || s["me/userAlias"],
						m = s["me/isLoggedIn"],
						d = Object(zs["i"])({
							...Ll(n, u),
							...s["i18n/langOptions"],
							page: n.params.pageNum || 1
						}),
						p = m ? d.then(({
							articleIds: t
						}) => t && t.length ? Object(zs["k"])({
							articleIds: t.join(",")
						}) : Promise.resolve([])) : [];
					return Promise.all([d, p]).then(([{
						articleIds: e,
						articleRefs: s,
						pagesCount: a
					}, {
						notes: o
					}]) => {
						const r = {
							[i]: e
						},
							c = {
								[i]: a
							};
						return o && o.length && o.forEach(t => {
							s[t.postId].moderationComment = t
						}), t("setArticles", {
							articleIds: r,
							articleRefs: s
						}), t("setPagesCount", c), t("setRouteCache", n), t("setLoading", !1), {
							articleIds: e,
							articleRefs: s,
							pagesCount: a
						}
					})
				},
				loadArticle({
					commit: t,
					rootGetters: e,
					state: s
				}, {
					force: n,
					route: a,
					snippetOnly: i
				}) {
					const o = a.params.id,
						r = s.articleRefs && s.articleRefs[o],
						c = e["pullRefresh/getRefreshState"],
						l = e["me/isLoggedIn"];
					return !r || n || c || !r.textHtml && !i ? Promise.all([Object(zs["f"])(o, {
						...e["i18n/langOptions"],
						isSandbox: !0
					}), ...l ? [Object(zs["k"])({
						articleIds: [o]
					})] : []]).then(([e, s]) => {
						const n = s && s.notes.length ? s.notes[0] : null;
						return t("setArticle", {
							article: {
								...e,
								moderationComment: n
							}
						}), t("setRouteCache", a), e
					}) : Promise.resolve()
				},
				updateArticlesList({
					commit: t
				}, {
					route: e,
					id: s
				}) {
					const n = Object(Ns["a"])(e);
					t("removeArticleFromList", n, s)
				},
				setLastVisitedRoute({
					commit: t
				}, e) {
					t("setLastVisitedRoute", e)
				}
			}
		},
			Nl = {
				namespaced: !0,
				state: {
					searchQueryError: null
				},
				mutations: {
					setSearchQueryError(t, e) {
						t.searchQueryError = e
					}
				}
			},
			Rl = s("d184"),
			Ml = {
				namespaced: !0,
				state() {
					return {
						inputs: {
							...Object(Rl["b"])(["uiLang"], ""),
							...Object(Rl["b"])(["articlesLangEnglish", "articlesLangRussian"], !1),
							...Object(Rl["b"])(["agreement"], !1),
							...Object(Rl["b"])(["email"], !0),
							...Object(Rl["b"])(["digest"], !0)
						}
					}
				},
				getters: {
					formData: ({
						inputs: t
					}) => ({
						fl: [t.articlesLangEnglish.value ? "en" : "", t.articlesLangRussian.value ? "ru" : ""].filter(Boolean).join(","),
						hl: t.uiLang.value,
						agreement: t.agreement.value,
						email: t.email.value,
						digest: t.digest.value
					})
				},
				mutations: {
					setInputValue(t, {
						name: e,
						value: s
					}) {
						t.inputs[e].value = s
					}
				},
				actions: {
					setInputValue({
						commit: t
					}, {
						name: e,
						value: s
					}) {
						t("setInputValue", {
							name: e,
							value: s
						})
					}
				}
			},
			wl = {
				namespaced: !0,
				state() {
					return {
						similarListIds: [],
						similarListRefs: null
					}
				},
				getters: {
					similarList: t => t.similarListIds.map(e => t.similarListRefs[e])
				},
				mutations: {
					setSimilarList(t, {
						articleIds: e,
						articleRefs: s
					}) {
						t.similarListIds = e, t.similarListRefs = s
					},
					setBookmarked(t, {
						articleId: e,
						shouldBookmarked: s
					}) {
						const n = t.similarListRefs[e],
							{
								relatedData: a,
								statistics: i
							} = n;
						i.favoritesCount = s ? i.favoritesCount + 1 : i.favoritesCount - 1, a.bookmarked = s
					}
				},
				actions: {
					loadSimilarList({
						commit: t,
						rootGetters: e
					}, {
						articleId: s
					}) {
						return Object(zs["p"])(s, e["i18n/langOptions"]).then(e => (t("setSimilarList", e), e))
					}
				}
			},
			kl = {
				namespaced: !0,
				state() {
					return {
						error: null,
						isDataLoaded: !1,
						isDataLoading: !1,
						isHydrationFailed: !1,
						isServer: !1
					}
				},
				getters: {
					isServer(t) {
						return t.isServer
					},
					error(t) {
						return t.error
					}
				},
				mutations: {
					setDataLoaded(t, e) {
						t.isDataLoaded = e
					},
					setDataLoading(t, e) {
						t.isDataLoading = e
					},
					setEnvironment(t, e) {
						t.isServer = e
					},
					setError(t, e) {
						t.error = e
					},
					setHydrationFailed(t, e) {
						t.isHydrationFailed = e
					},
					setI18nLoaded(t, e) {
						t.isI18nLoaded = e
					}
				},
				actions: {
					markDataLoaded({
						commit: t
					}) {
						t("setDataLoaded", !0), t("setDataLoading", !1)
					},
					markDataLoading({
						commit: t
					}) {
						t("setDataLoading", !0)
					},
					markHydrationFailed({
						commit: t
					}) {
						t("setHydrationFailed", !0)
					},
					setSsrError({
						commit: t
					}, e) {
						t("setDataLoaded", !0), t("setDataLoading", !1), t("setError", e)
					},
					showError({
						commit: t
					}, {
						error: e
					}) {
						return t("setError", e), t("setI18nLoaded", !0), Promise.reject(e)
					},
					reset({
						commit: t
					}) {
						t("setDataLoaded", !1), t("setI18nLoaded", !1), t("setError", null)
					}
				}
			};

		function jl(t, e) {
			return Object(ze["b"])(Object(Xe["a"])(`technotext/${t}/nominations`, "v2"), e)
		}
		var Dl = {
			namespaced: !0,
			mutations: {
				setNominationsList(t, {
					nominationIds: e,
					nominationRefs: s
				}) {
					t.nominationsList = e.map(t => s[t]).filter(t => t.count)
				}
			},
			state() {
				return {
					nominationsList: []
				}
			},
			actions: {
				getNominations({
					commit: t,
					rootGetters: e
				}, {
					year: s,
					query: n = {}
				}) {
					const a = e["i18n/langOptions"];
					return jl(s, {
						...a,
						query: n
					}).then(e => {
						t("setNominationsList", e)
					})
				}
			}
		},
			xl = s("a072"),
			Bl = {
				namespaced: !0,
				state() {
					return {
						items: {},
						pagesCache: {},
						markedViewedSilently: {},
						markedRead: {},
						unreadCounters: {
							applications: null,
							system: null,
							mentions: null,
							subscribers: null,
							posts_and_comments: null
						},
						unviewedCounters: {
							applications: null,
							system: null,
							mentions: null,
							subscribers: null,
							posts_and_comments: null
						}
					}
				},
				mutations: {
					setNotificationItems(t, e) {
						t.items = {
							...t.items,
							...e
						}
					},
					setNotificationsList(t, {
						itemIds: e,
						pagesCount: s,
						cacheKey: n
					}) {
						t.pagesCache = {
							...t.pagesCache,
							[n]: {
								itemIds: e,
								pagesCount: s
							}
						}
					},
					setUnreadCounters(t, e) {
						t.unreadCounters = e
					},
					setUnviewedCounters(t, e) {
						t.unviewedCounters = e
					},
					markViewedSilently(t, e) {
						e.forEach(e => {
							t.markedViewedSilently = {
								...t.markedViewedSilently,
								[e]: !0
							}
						})
					},
					markRead(t, e) {
						e.forEach(e => {
							t.markedRead = {
								...t.markedRead,
								[e]: !0
							}
						})
					},
					markAllRead(t) {
						Object.values(t.items).forEach(t => {
							t.unread = !1
						})
					}
				},
				actions: {
					loadNotifications({
						commit: t
					}, {
						params: e,
						cacheKey: s
					}) {
						return Object(xl["a"])(e).then(e => {
							const {
								itemRefs: n,
								itemIds: a,
								pagesCount: i,
								unreadCounters: o,
								unviewedCounters: r
							} = e;
							t("setNotificationItems", n), t("setNotificationsList", {
								itemIds: a,
								pagesCount: i,
								cacheKey: s
							}), t("setUnviewedCounters", r), t("setUnreadCounters", o)
						})
					},
					markViewedSilently({
						commit: t
					}, e) {
						return Object(xl["c"])({
							ids: e
						}).then(({
							unviewedCounters: s
						}) => {
							t("markViewedSilently", e), t("setUnviewedCounters", s)
						})
					},
					markRead({
						commit: t
					}, e) {
						return Object(xl["b"])({
							ids: e
						}).then(({
							unreadCounters: s
						}) => {
							t("markRead", e), t("setUnreadCounters", s)
						})
					},
					markAllRead({
						commit: t
					}) {
						return Object(xl["b"])({
							ids: []
						}).then(({
							unreadCounters: e
						}) => {
							t("markAllRead"), t("setUnreadCounters", e)
						})
					}
				},
				getters: {
					getNotifications(t) {
						return e => (t.pagesCache[e] || {
							itemIds: []
						}).itemIds.map(e => t.items[e])
					},
					getPagesCount(t) {
						return e => (t.pagesCache[e] || {
							pagesCount: 0
						}).pagesCount
					},
					getUnreadCount(t) {
						return e => "all" === e ? Object.values(t.unreadCounters).reduce((t, e) => t + (e || 0), 0) : t.unreadCounters[e]
					},
					getUnviewedCount(t) {
						return Object.values(t.unviewedCounters).reduce((t, e) => t + e || 0, 0)
					},
					isMarkedViewed: t => e => !e.unviewed || e.id in t.markedViewedSilently,
					isMarkedRead: t => e => !e.unread || e.id in t.markedRead
				}
			},
			$l = s("5449"),
			Fl = {
				namespaced: !0,
				state() {
					return {
						user: null,
						ppgDemanded: !1,
						karmaResetInfo: {
							canReincarnate: null,
							wasReincarnated: null,
							currentScore: null
						},
						notes: null
					}
				},
				getters: {
					isLoggedIn(t) {
						return Boolean(t.user)
					},
					isSuperAdmin(t) {
						return t.user && -1 !== t.user.groups.indexOf("super")
					},
					isCorrector(t) {
						return t.user && -1 !== t.user.groups.indexOf("corrector")
					},
					isModerator(t) {
						return t.user && -1 !== t.user.groups.indexOf("moderator")
					},
					isReadOnly(t) {
						return t.user && -1 !== t.user.groups.indexOf("readonly")
					},
					isReadOnlyOrReadAndComment(t) {
						return t.user && (-1 !== t.user.groups.indexOf("readonly") || -1 !== t.user.groups.indexOf("comments_manual") || -1 !== t.user.groups.indexOf("comments"))
					},
					userAlias(t) {
						return t.user && t.user.alias
					},
					userShowAdv(t) {
						return !t.user || t.user && !t.user.settings.miscSettings.hideAdv
					},
					userGaType(t, e) {
						return e.isLoggedIn ? -1 !== t.user.groups.indexOf("comments_manual") || -1 !== t.user.groups.indexOf("comments") ? "readcomment" : -1 !== t.user.groups.indexOf("readonly") ? "readonly" : "habrauser" : "guest"
					},
					ppaBalance(t) {
						return t.user ? t.user.ppaBalance : null
					},
					lastKarmaResetDate: t => t.karmaResetInfo.wasReincarnated,
					karmaResetScore: t => t.karmaResetInfo.currentScore,
					canCancelKarmaReset: ({
						karmaResetInfo: t
					}) => t.canReincarnate,
					notesList: t => t.notes ? t.notes.noteIds.map(e => t.notes.noteRefs[e]) : [],
					notesPagesCount: t => t.notes && t.notes.pagesCount,
					rssKey(t) {
						return t.user && t.user.rssKey
					},
					companiesAdmin(t) {
						return t.user && t.user.companiesAdmin
					},
					hasJoinedBetaTesting(t) {
						return t.user && t.user.groups.includes("tester")
					},
					canSendComplaint(t, e) {
						return t.user && t.user.settings.permissionSettings.canAddComplaints || e.isSuperAdmin
					},
					notices(t) {
						return t.user ? t.user.notices : []
					},
					canPostVoice(t) {
						return t.user && t.user.settings.permissionSettings.canCreateVoices
					}
				},
				mutations: {
					setUser(t, e) {
						t.user = e
					},
					setPPGDemanded(t, e) {
						t.ppgDemanded = e
					},
					setChargeSettings(t, e) {
						t.user.settings.chargeSettings = e
					},
					decrementPostsCharge(t) {
						t.user.settings.chargeSettings = {
							...t.user.settings.chargeSettings,
							postVoteCount: t.user.settings.chargeSettings.postVoteCount - 1
						}
					},
					decrementCommentsCharge(t) {
						t.user.settings.chargeSettings = {
							...t.user.settings.chargeSettings,
							commentVoteCount: t.user.settings.chargeSettings.commentVoteCount - 1
						}
					},
					setKarmaResetInfo(t, e) {
						t.karmaResetInfo = e
					},
					setUserNotes(t, e) {
						t.notes = e
					},
					setHasJoinedBetaTesting(t, e) {
						if (e) {
							const e = new Set(t.user.groups);
							e.add("tester"), t.user.groups = Array.from(e)
						} else t.user.groups = t.user.groups.filter(t => "tester" !== t)
					},
					setAvailableInvitesCount(t, e) {
						t.user.availableInvitesCount = e
					}
				},
				actions: {
					init({
						commit: t,
						getters: e,
						dispatch: s
					}, n) {
						return e.isLoggedIn && !n ? Promise.resolve(null) : Object($l["f"])().then(e => e ? (t("setUser", e), e.ppg && t("setPPGDemanded", !0), s("logUserToGA"), e) : null)
					},
					loadKarmaResetInfo({
						commit: t
					}) {
						return Object($l["e"])().then(e => {
							t("setKarmaResetInfo", e)
						})
					},
					cancelKarmaReset({
						dispatch: t
					}) {
						return Object($l["c"])().then(() => t("loadKarmaResetInfo"))
					},
					resetKarma({
						dispatch: t
					}) {
						return Object($l["j"])().then(() => t("loadKarmaResetInfo"))
					},
					loadMyUserNotes({
						commit: t
					}, {
						route: e
					}) {
						const s = {
							page: e.params.pageNum || 1
						};
						return Object($l["i"])(s).then(e => {
							t("setUserNotes", e)
						})
					},
					toggleBetaTestParticipation({
						commit: t
					}) {
						return Oc().then(({
							betaTester: e
						}) => {
							t("setHasJoinedBetaTesting", e)
						})
					},
					setPPGDemanded({
						commit: t
					}, e) {
						t("setPPGDemanded", e)
					},
					issueInviteByUserAlias({
						state: t,
						commit: e
					}, s) {
						return Object(xr["H"])(s).then(() => {
							e("setAvailableInvitesCount", t.user.availableInvitesCount - 1)
						})
					}
				}
			},
			Gl = {
				namespaced: !0,
				modules: {
					contributionRefs: kc
				},
				actions: {
					loadUserHubsContributions({
						state: t,
						commit: e
					}, {
						login: s
					}) {
						const n = s,
							a = n.toLowerCase(),
							i = {
								page: 1,
								perPage: 10
							};
						return t.contributionRefs.hubIds[a] ? t.contributionRefs.hubIds[a] : Object(xr["u"])(n, i).then(t => {
							e("setHubsContribution", {
								hubs: t,
								key: a
							})
						})
					}
				}
			},
			Ul = {
				namespaced: !0,
				state() {
					return {
						availableInvites: 0,
						usedInvitesIds: [],
						usedInvitesRefs: {},
						usedInvitesPagesCount: 0,
						unusedInvitesIds: [],
						unusedInvitesRefs: {},
						unusedInvitesPagesCount: 0
					}
				},
				getters: {
					usedInvites: t => t.usedInvitesIds.length ? t.usedInvitesIds.map(e => t.usedInvitesRefs[e]) : [],
					unusedInvites: t => t.unusedInvitesIds.length ? t.unusedInvitesIds.map(e => t.unusedInvitesRefs[e]) : []
				},
				mutations: {
					setAvailableInvites(t, e) {
						t.availableInvites = e
					},
					setUsedInvites(t, {
						userIds: e,
						userRefs: s,
						pagesCount: n
					}) {
						t.usedInvitesIds = e, t.usedInvitesRefs = {
							...t.usedInvitesRefs,
							...s
						}, t.usedInvitesPagesCount = n
					},
					setUnusedInvites(t, {
						inviteIds: e,
						inviteRefs: s,
						pagesCount: n
					}) {
						t.unusedInvitesIds = e, t.unusedInvitesRefs = {
							...t.unusedInvitesRefs,
							...s
						}, t.unusedInvitesPagesCount = n
					},
					revokeInvite(t, e) {
						t.unusedInvitesIds.splice(e, 1)
					},
					clearState(t) {
						t.availableInvites = 0, t.sedInvitesIds = [], t.usedInvitesRefs = null, t.usedInvitesPagesCount = 0, t.unusedInvitesIds = [], t.unusedInvitesRefs = null, t.unusedInvitesPagesCount = 0
					}
				},
				actions: {
					loadInvitesList({
						commit: t
					}) {
						return Promise.all([Object($l["d"])(), Object($l["h"])(), Object($l["g"])()]).then(([e, s, n]) => {
							const {
								availableInvitesCount: a
							} = e;
							return t("setAvailableInvites", a), t("setUsedInvites", s), t("setUnusedInvites", n), {
								usedInvites: s,
								unusedInvites: n
							}
						})
					},
					loadMoreUsedInvites({
						commit: t,
						state: e
					}, s) {
						return Object($l["h"])(s).then(s => {
							const n = [...e.usedInvitesIds, ...s.userIds];
							t("setUsedInvites", {
								...s,
								userIds: n
							})
						})
					},
					loadMoreUnusedInvites({
						commit: t,
						state: e
					}, s) {
						return Object($l["g"])(s).then(s => {
							const n = [...e.unusedInvitesIds, ...s.inviteIds];
							t("setUnusedInvites", {
								...s,
								inviteIds: n
							})
						})
					},
					putInvite({
						commit: t
					}, e) {
						return Object($l["k"])(e).then(({
							inviteCount: e
						}) => {
							t("setAvailableInvites", e)
						})
					},
					revokeInvite({
						commit: t
					}, {
						id: e,
						index: s
					}) {
						return Object($l["m"])(e).then(({
							inviteCount: e
						}) => {
							t("setAvailableInvites", e), t("revokeInvite", s)
						})
					},
					clearState({
						commit: t
					}) {
						t("clearState")
					}
				}
			},
			Vl = {
				namespaced: !0,
				state() {
					return {
						authorRefs: {},
						authorIds: {},
						pagesCount: {},
						authorProfiles: {},
						userHubs: {},
						userInvitations: {},
						authorFollowers: {},
						authorFollowed: {},
						userSpecialization: {},
						karmaStats: [],
						statistics: null,
						isLoading: !1,
						authorFollowersLoading: !1,
						authorFollowedLoading: !1,
						userHubsLoading: !1,
						userInvitationsLoading: !1,
						route: {}
					}
				},
				getters: {
					getUserByAlias: t => e => t.authorRefs[e.toLowerCase()] || null,
					getProfileInfo: t => e => t.authorProfiles[e.toLowerCase()] || null,
					getUserInvitations: t => e => t.userInvitations[e.toLowerCase()] || null,
					getUserHubs: t => e => t.userHubs[e.toLowerCase()] || null,
					getUserSpecialization: t => e => t.userSpecialization[e.toLowerCase()] || null
				},
				mutations: {
					setAuthorRefs(t, e) {
						t.authorRefs = {
							...t.authorRefs,
							...e
						}
					},
					setAuthorIds(t, {
						routeKey: e,
						authorIds: s
					}) {
						t.authorIds = {
							...t.authorIds,
							[e]: s
						}
					},
					setUserInfo(t, {
						userAlias: e,
						userData: s
					}) {
						const n = e.toLowerCase();
						t.authorRefs = {
							...t.authorRefs,
							[n]: {
								...t.authorRefs[n],
								...s
							}
						}
					},
					setUserKarmaData(t, {
						userAlias: e,
						karmaData: s
					}) {
						t.authorRefs = {
							...t.authorRefs,
							[e]: {
								...t.authorRefs[e],
								scoreStats: s.scoreStats,
								relatedData: {
									...t.authorRefs[e].relatedData,
									vote: s.vote
								}
							}
						}
					},
					setProfileInfo(t, {
						profileData: e,
						userAlias: s
					}) {
						t.authorProfiles = {
							...t.authorProfiles,
							[s]: {
								...t.authorProfiles[s],
								...e
							}
						}
					},
					setPagesCount(t, {
						routeKey: e,
						pagesCount: s
					}) {
						t.pagesCount = {
							...t.pagesCount,
							[e]: s
						}
					},
					clearAuthors(t, e) {
						t.authorIds[e] && (t.authorIds[e] = [])
					},
					setLoading(t, e) {
						t.isLoading = e
					},
					setRouteCache(t, e) {
						t.route.name = e.name, t.route.params = e.params, t.route.query = e.query
					},
					setSubscriptionStatus(t, {
						alias: e,
						isSubscribed: s
					}) {
						t.authorRefs[e.toLowerCase()].relatedData.isSubscribed = s
					},
					setFollowersCount(t, {
						alias: e,
						count: s
					}) {
						t.authorRefs[e].followStats.followersCount = s
					},
					setUsersStatisticsData(t, e) {
						t.statistics = e
					},
					setUsersKarmaStatsData(t, e) {
						t.karmaStats = e
					},
					setUserFollowers(t, {
						alias: e,
						data: s
					}) {
						t.authorFollowers = {
							...t.authorFollowers,
							[e]: s
						}
					},
					setUserFollowersLoading(t, e) {
						t.authorFollowersLoading = e
					},
					setUserFollowed(t, {
						alias: e,
						data: s
					}) {
						t.authorFollowed = {
							...t.authorFollowed,
							[e]: s
						}
					},
					setUserFollowedLoading(t, e) {
						t.authorFollowedLoading = e
					},
					setUserInvitationsLoading(t, e) {
						t.userInvitationsLoading = e
					},
					setUserInvitations(t, {
						invitations: e,
						alias: s,
						page: n
					}) {
						const a = t.userInvitations[s] || {},
							i = a.invitationsRefs || {};
						t.userInvitations = {
							...t.userInvitations,
							[s]: {
								invitationsRefs: {
									...i,
									...e.userRefs
								},
								pagesCount: e.pagesCount,
								currentPage: n
							}
						}
					},
					setUserHubsLoading(t, e) {
						t.userHubsLoading = e
					},
					setUserSpecialization(t, {
						specialization: e,
						alias: s
					}) {
						t.userSpecialization = {
							...t.userSpecialization,
							[s]: e
						}
					},
					setUserHubs(t, {
						hubs: e,
						alias: s,
						page: n
					}) {
						const a = t.userHubs[s] || {},
							i = a.hubRefs || {};
						t.userHubs = {
							...t.userHubs,
							[s]: {
								hubRefs: {
									...i,
									...e.hubRefs
								},
								pagesCount: e.pagesCount,
								currentPage: n
							}
						}
					}
				},
				actions: {
					loadUserInfo({
						commit: t,
						state: e,
						rootGetters: s
					}, {
						alias: n,
						snippet: a,
						force: i
					}) {
						const o = n.toLowerCase(),
							r = e.authorRefs[o],
							c = s["pullRefresh/getRefreshState"],
							l = s["i18n/langOptions"],
							u = s["me/userAlias"],
							m = u ? u.toLowerCase() : null,
							d = s["me/isLoggedIn"],
							p = o === m;
						if (r && r.counterStats && !c && !i) return Promise.resolve(r);
						if (a && !i) {
							const e = a.alias.toLowerCase();
							return t("setUserInfo", {
								userAlias: e,
								userData: a
							}), a
						}
						return Promise.all([Object(xr["v"])(n, l), ...d && !p ? [Object(xr["x"])(n)] : []]).then(([e, s]) => {
							const n = e.alias.toLowerCase(),
								i = {
									...r,
									...a,
									...e,
									note: s
								};
							return t("setUserInfo", {
								userAlias: n,
								userData: i
							}), i
						})
					},
					loadUserSpecialization({
						commit: t,
						state: e
					}, {
						alias: s
					}) {
						const n = s.toLowerCase(),
							a = e.userSpecialization[n];
						return a ? Promise.resolve(a) : Object(xr["B"])(n).then(e => {
							t("setUserSpecialization", {
								specialization: e,
								alias: n
							})
						}).catch(t => {
							throw t
						})
					},
					loadUserInvitations({
						commit: t,
						state: e
					}, {
						alias: s,
						page: n = 1
					}) {
						const a = s.toLowerCase(),
							i = e.userInvitations[a];
						return i && i.currentPage >= n ? Promise.resolve(i) : (t("setUserInvitationsLoading", !0), Object(xr["w"])(a, {
							page: n
						}).then(e => {
							t("setUserInvitations", {
								invitations: e,
								alias: a,
								page: n
							}), t("setUserInvitationsLoading", !1)
						}).catch(e => {
							throw t("setUserInvitationsLoading", !1), e
						}))
					},
					loadUserHubs({
						commit: t,
						state: e
					}, {
						alias: s,
						page: n = 1
					}) {
						const a = s.toLowerCase(),
							i = e.userHubs[a];
						return i && i.currentPage >= n ? Promise.resolve(i) : (t("setUserHubsLoading", !0), Object(xr["t"])(a, {
							page: n
						}).then(e => {
							t("setUserHubs", {
								hubs: e,
								alias: a,
								page: n
							})
						}).finally(() => {
							t("setUserHubsLoading", !1)
						}))
					},
					loadProfileInfo({
						commit: t,
						state: e,
						rootGetters: s
					}, n) {
						const a = s["i18n/langOptions"],
							i = e.authorProfiles[n],
							o = s["pullRefresh/getRefreshState"];
						return i && !o ? Promise.resolve(i) : Promise.all([Object(xr["z"])(n, a), Object(xr["q"])(n)]).then(([s, a]) => {
							const i = n.toLowerCase(),
								o = {
									...e.authorProfiles[i],
									...s,
									companies: a
								};
							return t("setProfileInfo", {
								profileData: o,
								userAlias: i
							}), s
						})
					},
					searchUsers({
						state: t,
						commit: e
					}, {
						route: s
					}) {
						const n = {
							...s.query,
							page: s.params.pageNum || 1
						},
							a = Object(Ns["a"])(s),
							i = t.authorIds[a],
							o = Boolean(Object.keys(s.query).length),
							r = JSON.stringify(t.route.query) === JSON.stringify(s.query),
							c = JSON.stringify(t.route.params) === JSON.stringify(s.params);
						return !!(r && i && c) || (o && !r && e("clearAuthors", a), e("setLoading", !0), Object(xr["E"])(n).then(({
							userRefs: t,
							userIds: n,
							pagesCount: i
						}) => (e("setAuthorRefs", t), e("setAuthorIds", {
							routeKey: a,
							authorIds: n
						}), e("setPagesCount", {
							routeKey: a,
							pagesCount: i
						}), e("setRouteCache", s), e("setLoading", !1), {
							userRefs: t,
							userIds: n,
							pagesCount: i
						})))
					},
					loadUsers({
						state: t,
						commit: e,
						rootGetters: s
					}, {
						route: n
					}) {
						const a = {
							...n.query,
							page: n.params.pageNum || 1
						},
							{
								q: i
							} = n.query,
							o = Object(Ns["a"])(n),
							r = t.authorIds[o],
							c = Boolean(Object.keys(n.query).length),
							l = JSON.stringify(t.route.query) === JSON.stringify(n.query),
							u = n.params.hubName || n.params.flowName;
						if (r && r.length && l && !i && !u) return !0;
						(c && !l || u) && e("clearAuthors", o), e("setLoading", !0);
						let m = i ? xr["E"] : xr["D"];
						const d = [{
							...a,
							...s["i18n/langOptions"]
						}];
						return i || (n.params.flowName && (m = dc, d.unshift(n.params.flowName)), n.params.hubName && (m = pc["b"], d.unshift(n.params.hubName))), m(...d).then(({
							authorRefs: t,
							authorIds: s,
							userRefs: a,
							userIds: r,
							pagesCount: c
						}) => {
							e("setAuthorRefs", t || a), e("setAuthorIds", {
								routeKey: o,
								authorIds: s || r
							}), e("setPagesCount", {
								routeKey: o,
								pagesCount: i ? 1 : c
							}), e("setRouteCache", n), e("setLoading", !1)
						})
					},
					toggleSubscribeStatus({
						commit: t
					}, {
						alias: e,
						isSubscribed: s
					}) {
						return t("setSubscriptionStatus", {
							alias: e,
							isSubscribed: !s
						}), Object(xr["T"])(e).then(({
							isSubscribed: s
						}) => {
							t("setSubscriptionStatus", {
								alias: e,
								isSubscribed: s
							})
						})
					},
					updateFollowersCounter({
						commit: t,
						state: e
					}, s) {
						const n = s.toLowerCase(),
							{
								isSubscribed: a
							} = e.authorRefs[n].relatedData,
							{
								followersCount: i
							} = e.authorRefs[n].followStats,
							o = a ? i + 1 : i - 1;
						t("setFollowersCount", {
							alias: n,
							count: o
						})
					},
					addUserNote({
						commit: t,
						state: e
					}, {
						alias: s,
						note: n
					}) {
						return Object(xr["N"])(s, {
							text: n.text
						}).then(n => {
							const a = s.toLowerCase(),
								i = {
									...e.authorRefs[a],
									note: n
								};
							t("setUserInfo", {
								userAlias: a,
								userData: i
							})
						})
					},
					updateKarmaInfo({
						commit: t
					}, {
						userAlias: e,
						karmaData: s
					}) {
						const n = e.toLowerCase();
						t("setUserKarmaData", {
							userAlias: n,
							karmaData: s
						})
					},
					loadUsersStatistics({
						state: t,
						commit: e
					}) {
						return t.statistics ? t.statistics : Object(xr["F"])().then(t => (e("setUsersStatisticsData", t), t))
					},
					loadKarmaStats({
						state: t,
						commit: e
					}) {
						return t.karmaStats.length ? Promise.resolve() : Object(xr["C"])().then(t => e("setUsersKarmaStatsData", t))
					},
					loadUserFollowers({
						commit: t
					}, e) {
						const s = e.params.login.toLowerCase(),
							n = e.params.pageNum || 1;
						return t("setUserFollowersLoading", !0), Object(xr["s"])(s, {
							page: n
						}).then(e => {
							t("setUserFollowers", {
								alias: s,
								data: e
							}), t("setUserFollowersLoading", !1)
						})
					},
					loadUserFollowed({
						commit: t
					}, e) {
						const s = e.params.login.toLowerCase(),
							n = e.params.pageNum || 1;
						return t("setUserFollowedLoading", !0), Object(xr["r"])(s, {
							page: n
						}).then(e => {
							t("setUserFollowed", {
								alias: s,
								data: e
							}), t("setUserFollowedLoading", !1)
						})
					}
				}
			},
			Wl = s("dc77"),
			Hl = s("adef"),
			Yl = {
				namespaced: !0,
				state() {
					return {
						prevScrollY: {},
						scrollY: 0,
						width: 0
					}
				},
				mutations: {
					setPrevScrollY(t, {
						prevScrollY: e,
						fullPath: s
					}) {
						t.prevScrollY[s] = e
					},
					setScrollY(t, e) {
						t.scrollY = e
					},
					setWidth(t, e) {
						t.width = e
					}
				},
				actions: {
					init({
						commit: t
					}) {
						t("setWidth", window.innerWidth), window.addEventListener("resize", () => {
							t("setWidth", window.innerWidth)
						}), Object(Wl["a"])(() => {
							Object(qr["b"])().then(e => t("setScrollY", e))
						})
					},
					restorePrevScrollY({
						state: t
					}, {
						fullPath: e
					}) {
						t.prevScrollY[e] && Object(Hl["b"])(t.prevScrollY[e])
					},
					setPrevScrollY({
						commit: t,
						state: e
					}, {
						fullPath: s
					}) {
						t("setPrevScrollY", {
							prevScrollY: e.scrollY,
							fullPath: s
						})
					}
				}
			},
			ql = {
				adblock: ec,
				articlesList: lc,
				authorContribution: hc,
				betaTest: Cc,
				authorStatistics: gc,
				career: Ac,
				comments: Gr,
				companies: Lc,
				companyAdmin: wc,
				companiesContribution: Pc,
				companyHubsContribution: jc,
				conversation: Dc,
				conversations: xc,
				desktopState: Kc,
				docs: Zc,
				feature: tl,
				flows: el,
				global: sl,
				hubs: nl,
				hubsBlock: al,
				i18n: pl,
				info: hl,
				location: bl,
				me: Fl,
				mostReadingList: Tl,
				pinnedPost: El,
				ppa: Ol,
				projectsBlocks: Il,
				promoData: Al,
				pullRefresh: yl,
				sandbox: Pl,
				search: Nl,
				settingsOther: Ml,
				similarList: wl,
				ssr: kl,
				technotext: Dl,
				userHubsContribution: Gl,
				userInvites: Ul,
				users: Vl,
				viewport: Yl,
				tracker: Bl
			};

		function Kl() {
			return new g["a"].Store({
				modules: ql
			})
		}
		n["default"].use(g["a"]);
		var zl = () => ({
			computed: {
				...Object(g["c"])("i18n", ["langOptions", "msg"])
			}
		}),
			Xl = s("a5fe");

		function Jl(t) {
			const {
				features: e
			} = this.$root;
			return t in e ? e[t] : Object(Xl["getFeatureStatusFromEnv"])(t)
		}

		function Ql(t = Ye, e) {
			const s = Kl(),
				a = Rr(s);
			a.onReady(() => es(a, s), t => {
				throw t
			});
			const i = new n["default"]({
				router: a,
				store: s,
				render: s => s(t, {
					props: e
				})
			});
			return {
				app: i,
				router: a,
				store: s
			}
		}
		n["default"].use(l["a"]), n["default"].use(p.a), n["default"].mixin(zl()), n["default"].use(m.a), n["default"].config.productionTip = !1, n["default"].prototype.$getFeatureFlag = Jl, n["default"].prototype.$activeWatch = function (t, e, s) {
			const n = function () {
				const e = [this._inactive];
				return "function" === typeof t ? e.push(t.call(this)) : e.push(t), e
			};
			return this.$watch(n, (function ([t, ...s]) {
				t || e.call(this, ...s)
			}), s)
		};
		const Zl = (t, e) => {
			const s = [],
				n = t[e];
			return Array.isArray(n) ? s.push(...n) : n && s.push(n), s
		},
			tu = {
				created() {
					const {
						asyncData: t
					} = this.$options;
					if (!t) return;
					const e = this;
					this.$fetchState = n["default"].observable({
						_isFetching: !1,
						_isWaitingForGuards: !1,
						get isLoading() {
							return e.$fetchState._isFetching && e.$fetchState._isWaitingForGuards
						},
						error: null
					});
					const s = () => {
						const e = this.$route,
							s = this.$store;
						this.$fetchState._isFetching = !0, this.$fetchState._isWaitingForGuards = !0, this.dataPromise = t.call(this, {
							store: s,
							route: e
						}).then(() => {
							this.$store.dispatch("ssr/markDataLoaded"), this.$store.dispatch("pullRefresh/toggleRefresh", !1), this.$fetchState._isFetching = !1, this.$fetchState._isWaitingForGuards = !1;
							const t = Zl(this.$options, "afterAsyncData");
							if (!t || 0 === t.length) return;
							this.$fetchState._isWaitingForGuards = !0;
							const n = a => {
								if (a) return this.$fetchState._isWaitingForGuards = !1, void this.$router.push(a);
								const i = t.shift();
								i ? i({
									store: s,
									route: e,
									next: n
								}) : this.$fetchState._isWaitingForGuards = !1
							};
							n()
						}).catch(t => {
							this.$store.dispatch("ssr/showError", {
								error: t
							}), this.$store.dispatch("ssr/markDataLoaded"), this.$fetchState._isFetching = !1, this.$fetchState._isWaitingForGuards = !1, this.$fetchState.error = t;
							const e = Array.isArray(t.additional) && -1 !== t.additional.indexOf("PPG_REQUIRED");
							if (e) {
								this.$store.dispatch("me/setPPGDemanded", !0);
								const {
									program: e
								} = t.data, s = "comments" === e ? "PPG_COMMENTS" : "PPG_SMILES";
								this.$router.push({
									name: s
								})
							}
						})
					},
						{
							hasHydrated: a
						} = this.$root.$children[0],
						i = this.$vnode.elm && this.$vnode.elm.dataset && this.$vnode.elm.dataset.asyncCalled;
					!a || i ? this.dataPromise = Promise.resolve() : s(), this.$watch(() => this.$store.getters["pullRefresh/getRefreshState"], t => {
						const e = this._inactive;
						t && !e && s()
					})
				}
			};
		var eu = s("a8a8"),
			su = s("4f8a"),
			nu = s("5769"),
			au = s("a5cdd"),
			iu = s("a98b");

		function ou(t) {
			const e = [];
			return Object(au["shouldPolyfill"])() && e.push(s.e("lang").then(s.t.bind(null, "0731", 7)), s.e("lang").then(s.t.bind(null, "37814", 7)), s.e("lang").then(s.t.bind(null, "f3a1", 7))), Object(iu["shouldPolyfill"])() && (e.push(s.e("lang").then(s.t.bind(null, "6923", 7))), "ru" === t ? e.push(s.e("lang").then(s.t.bind(null, "0478", 7))) : e.push(s.e("lang").then(s.t.bind(null, "3d74", 7)))), e
		}

		function ru(t) {
			let e = Promise.resolve();
			return Object(nu["shouldPolyfill"])() && (e = s.e("lang").then(s.t.bind(null, "a37b", 7))), e.then(() => Promise.all(ou(t)))
		}
		var cu = s("49b0");

		function lu() {
			let t = Promise.resolve();
			return Object(cu["a"])() || (t = Promise.all([s.e("web-streams-polyfill").then(s.t.bind(null, "94fb", 7)), s.e("fetch-readablestream").then(s.t.bind(null, "b140", 7)).then(t => {
				window.fetchStream = t.default
			})])), t
		}
		var uu = s("9483");
		"serviceWorker" in navigator && Object(uu["a"])("https://localhost:7103/assets-habr/habr-web/service-worker.js", {
			ready() {
				console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")
			},
			registered() {
				console.log("Service worker has been registered.")
			},
			cached() {
				console.log("Content has been cached for offline use.")
			},
			updatefound() {
				console.log("New content is downloading.")
			},
			updated() {
				console.log("New content is available; please refresh.")
			},
			offline() {
				console.log("No internet connection found. App is running in offline mode.")
			},
			error(t) {
				console.error("Error during service worker registration:", t)
			}
		});
		const mu = {
			closeOnClick: !0,
			pauseOnFocusLoss: !1,
			pauseOnHover: !1,
			position: "top-center",
			draggable: !0,
			draggablePercent: .6,
			showCloseButtonOnHover: !1,
			hideProgressBar: !0,
			closeButton: !1,
			newestOnTop: !0,
			icon: !1
		};
		n["default"].use(a["a"], mu);
		const du = t => {
			const e = Object(su["a"])();
			t.state.global.device !== e && t.dispatch("global/setDevice", {
				device: e
			})
		},
			pu = !0,
			{
				app: _u,
				router: hu,
				store: gu
			} = Ql(),
			fu = t => {
				pu ? Object(eu["a"])(t) : console.error(t)
			};
		window.__INITIAL_STATE__ && (gu.replaceState(window.__INITIAL_STATE__), window.__INITIAL_STATE__ = null), window.addEventListener("resize", r()(() => du(gu), 100), !1), i["d"]({
			username: gu.state.me.user ? gu.state.me.user.alias : "HABR_GUEST"
		});
		const {
			hl: bu
		} = gu.state.i18n;
		n["default"].mixin(tu), _u.$root.features = Object(Xl["parseFeaturesSettings"])(Object(c["a"])("features") || ""), Promise.all([window.i18nFetch, ru(bu), lu(), gu.dispatch("adblock/findOutAdblockStatus")]).then(([t]) => {
			ul(t), hu.onReady(() => {
				_u.$mount("#app"), du(gu)
			}, t => {
				throw t
			})
		}), hu.onError = t => fu(t), window.onerror = t => fu(t), window.onunhandledrejection = ({
			reason: t
		}) => fu(t)
	},
	a9a2: function (t, e) {
		const s = "habr_web_flow_filter_",
			n = "news_";

		function a({
			flowName: t,
			isNews: e
		}) {
			const a = [s];
			return e && a.push(n), a.push(t), a.join("")
		}
		t.exports = {
			buildCookieName: a
		}
	},
	a9e1: function (t, e, s) { },
	aa3f: function (t, e, s) {
		"use strict";
		s.r(e);
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMPopup", {
				attrs: {
					title: t.msg("ARTICLE_DONATE_POPUP")
				},
				on: {
					close: function (e) {
						return t.$emit("close")
					}
				}
			}, t._l(t.payments, (function (e) {
				return s("div", {
					key: e,
					staticClass: "tm-popup__item-payment"
				}, [s("a", {
					staticClass: "tm-popup__link-payment",
					attrs: {
						href: t.getUrl(e),
						target: "_blank"
					},
					on: {
						click: t.logGa
					}
				}, [t._v("\n      " + t._s(t.getTitle(e)) + "\n    ")])])
			})), 0)
		},
			a = [],
			i = s("2f62"),
			o = s("bccd"),
			r = s("badd"),
			c = s("b7d0"),
			l = s("6f23");
		const u = {
			paymentWebmoney: "SETTINGS_PROFILE_WEBMONEY",
			paymentPayPalMe: "SETTINGS_PROFILE_PAYPAL",
			paymentYandexMoney: "SETTINGS_PROFILE_YANDEX_MONEY"
		},
			m = {
				paymentWebmoney: "https://pay.web.money/",
				paymentPayPalMe: "https://www.paypal.me/",
				paymentYandexMoney: "https://money.yandex.ru/to/"
			};
		var d = {
			name: "TMPopupPayments",
			components: {
				TMPageSettingsForm: o["default"],
				TMSvgImg: c["a"],
				TMPopup: r["a"]
			},
			computed: {
				...Object(i["c"])("articlesList", ["getArticleById"]),
				...Object(i["c"])("me", ["userAlias"]),
				article() {
					return this.getArticleById(this.$route.params.id)
				},
				payments() {
					const t = [],
						{
							paymentDetails: e
						} = this.article.author;
					return e && Object.keys(e).forEach(s => {
						e[s] && t.push(s)
					}), t
				}
			},
			methods: {
				logGa() {
					Object(l["c"])("donation", "pay_receiver", this.article.author.alias), Object(l["c"])("donation", "pay_sender", this.userAlias || "%guest%")
				},
				getUrl(t) {
					return `${m[t]}${this.article.author.paymentDetails[t]}`
				},
				getTitle(t) {
					return this.msg(u[t])
				}
			}
		},
			p = d,
			_ = (s("0a3d"), s("2877")),
			h = Object(_["a"])(p, n, a, !1, null, null, null);
		e["default"] = h.exports
	},
	aba0: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-article-poll"
			}, [t.isLoggedIn ? t._e() : s("TMNotice", {
				staticClass: "tm-article-poll__notice",
				attrs: {
					type: "positive"
				},
				scopedSlots: t._u([{
					key: "default",
					fn: function () {
						return [s("span", {
							domProps: {
								innerHTML: t._s(t.unauthorizedNoticeMessage)
							}
						})]
					},
					proxy: !0
				}], null, !1, 4159226856)
			}), t._v(" "), t.poll.id ? [s("div", {
				staticClass: "tm-article-poll__header",
				domProps: {
					innerHTML: t._s(t.poll.textHtml)
				}
			}), t._v(" "), t.poll.relatedData && t.poll.relatedData.canVote ? [s("div", {
				staticClass: "tm-article-poll__answers"
			}, t._l(t.poll.variants, (function (e, n) {
				return s("div", {
					key: e.id,
					staticClass: "tm-article-poll__answer"
				}, ["checkbox" === t.poll.answersType ? s("TMLabeledCheckbox", {
					staticClass: "tm-article-poll__answer-item",
					attrs: {
						name: "" + e.id
					},
					model: {
						value: t.selectedAnswers.checkboxes[n],
						callback: function (e) {
							t.$set(t.selectedAnswers.checkboxes, n, e)
						},
						expression: "selectedAnswers.checkboxes[i]"
					}
				}, [s("TMText", {
					staticClass: "tm-article-poll__answer-label",
					attrs: {
						text: e.textHtml
					}
				})], 1) : s("TMInputRadioLabeled", {
					staticClass: "tm-article-poll__answer-item",
					attrs: {
						id: "answer",
						"checked-value": "" + e.id,
						value: e.id
					},
					model: {
						value: t.selectedAnswers.radio,
						callback: function (e) {
							t.$set(t.selectedAnswers, "radio", e)
						},
						expression: "selectedAnswers.radio"
					}
				}, [s("TMText", {
					staticClass: "tm-article-poll__answer-label",
					attrs: {
						text: e.textHtml
					}
				})], 1)], 1)
			})), 0), t._v(" "), s("div", {
				staticClass: "tm-article-poll__controls"
			}, [s("TMButtonBase", {
				staticClass: "tm-article-poll__submit",
				attrs: {
					disabled: t.isVoteDisabled,
					"is-loading": t.isLoadingVote,
					"style-size": "middle",
					"style-type": "solid",
					type: "submit"
				},
				on: {
					click: t.onSubmitVote
				}
			}, [t._v("\n          " + t._s(t.msg("POLLS_VOTE")) + "\n        ")]), t._v(" "), s("TMButtonBase", {
				staticClass: "tm-article-poll__decline",
				attrs: {
					"is-loading": t.isLoadingDecline,
					"style-size": "middle",
					"style-type": "transparent",
					type: "button"
				},
				on: {
					click: t.declineVote
				}
			}, [t._v("\n          " + t._s(t.msg("POLLS_DECLINE")) + "\n        ")])], 1)] : s("div", {
				staticClass: "tm-article-poll__answers"
			}, t._l(t.poll.variants, (function (e) {
				return s("div", {
					key: e.id,
					staticClass: "tm-article-poll__answer"
				}, [s("div", {
					staticClass: "tm-article-poll__answer-data"
				}, [s("span", {
					class: t.percentClassName(e.id)
				}, [t._v("\n            " + t._s(e.percent) + "%\n          ")]), t._v(" "), s("span", {
					class: t.answerLabelClassName(e.selected),
					domProps: {
						innerHTML: t._s(e.textHtml)
					}
				}), t._v(" "), s("span", {
					staticClass: "tm-article-poll__answer-votes"
				}, [t._v("\n            " + t._s(e.votesCount) + "\n          ")])]), t._v(" "), s("div", {
					staticClass: "tm-article-poll__answer-bar"
				}, [s("div", {
					class: t.progressBarClassName(e.id),
					style: "width: " + e.percent + "%"
				})])])
			})), 0), t._v(" "), s("div", {
				staticClass: "tm-article-poll__stats"
			}, [t._v("\n      " + t._s(t.msg("POLLS_STAT_VOTED", {
				votesCount: t.poll.votesCount
			})) + "\n\n      " + t._s(t.msg("POLLS_STAT_PASSED", {
				passCount: t.poll.passCount
			})) + "\n    ")])] : t._e()], 2)
		},
			a = [],
			i = s("2f62"),
			o = s("884d"),
			r = s("90e1"),
			c = s("af81"),
			l = s("de63"),
			u = s("e4d1"),
			m = s("e3a7"),
			d = {
				name: "TMArticlePoll",
				components: {
					TMButtonBase: o["a"],
					TMInputRadioLabeled: l["a"],
					TMLabeledCheckbox: r["a"],
					TMNotice: u["a"],
					TMText: c["a"]
				},
				props: {
					poll: {
						default: () => { },
						type: Object
					}
				},
				data() {
					return {
						selectedAnswers: {
							checkboxes: [],
							radio: ""
						},
						isLoadingVote: !1,
						isLoadingDecline: !1
					}
				},
				computed: {
					...Object(i["c"])("me", ["isLoggedIn"]),
					...Object(i["c"])("i18n", ["msg", "langOptions"]),
					articleId() {
						return this.$route.params.id
					},
					isVoteDisabled() {
						const t = this.selectedAnswers;
						return -1 === t.checkboxes.indexOf(!0) && 0 === t.radio.length
					},
					winningAnswer() {
						return this.poll.variants.reduce((t, e) => t.votesCount > e.votesCount ? t : e)
					},
					progressBarClassName() {
						return t => ({
							"tm-article-poll__answer-progress": !0,
							"tm-article-poll__answer-progress_winning": this.winningAnswer.id === t
						})
					},
					answerLabelClassName() {
						return t => ({
							"tm-article-poll__answer-label": !0,
							"tm-article-poll__answer-label_selected": t
						})
					},
					percentClassName() {
						return t => ({
							"tm-article-poll__answer-percent": !0,
							"tm-article-poll__answer-percent_winning": this.winningAnswer.id === t
						})
					},
					unAuthLinkParams() {
						const t = this.$route.path,
							{
								hl: e
							} = this.langOptions;
						return {
							url: `/kek/v1/auth/habrahabr/?back=${t}&hl=${e}`
						}
					},
					unauthorizedNoticeMessage() {
						return `${this.msg("POLLS_NOTICE_UNAUTH_DECLARATION")} ${this.msg("POLLS_NOTICE_UNAUTH_ACTION", this.unAuthLinkParams)}`
					}
				},
				methods: {
					...Object(i["d"])("articlesList", ["setArticlePoll"]),
					onSubmitVote() {
						this.isLoadingVote = !0;
						let t = [];
						"checkbox" === this.poll.answersType ? this.selectedAnswers.checkboxes.forEach((e, s) => {
							e && t.push(this.poll.variants[s].id)
						}) : t = [this.selectedAnswers.radio];
						const e = {
							id: t
						};
						this.sendVote(e).then(() => {
							this.isLoadingVote = !1
						})
					},
					declineVote() {
						this.isLoadingDecline = !0, this.sendVote().then(() => {
							this.isLoadingDecline = !1
						})
					},
					sendVote(t = {}) {
						return Object(m["s"])(this.poll.id, t).then(t => this.setArticlePoll({
							poll: t,
							articleId: this.articleId
						})).catch(t => {
							this.$toast.error(t.message), this.isLoadingVote = !1, this.isLoadingDecline = !1
						})
					}
				}
			},
			p = d,
			_ = (s("7140"), s("2877")),
			h = Object(_["a"])(p, n, a, !1, null, null, null);
		e["a"] = h.exports
	},
	abba: function (t, e, s) {
		"use strict";
		s("ec69")
	},
	abc0: function (t, e, s) {
		"use strict";
		s("bcc6")
	},
	acce: function (t, e, s) { },
	ad29: function (t, e, s) {
		"use strict";
		s("36e8")
	},
	ae08: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-company-card"
			}, [s("div", {
				staticClass: "tm-company-card__header"
			}, [s("router-link", {
				staticClass: "tm-company-card__avatar",
				attrs: {
					to: t.profileRoute
				}
			}, [s("TMEntityImage", {
				attrs: {
					alias: t.company.alias,
					image: t.company.imageUrl,
					size: 48,
					type: "company"
				}
			})], 1), t._v(" "), t.company.statistics ? [null != t.company.statistics.careerRating ? s("TMGrade", {
				staticClass: "tm-company-card__rating",
				attrs: {
					alias: t.company.careerAlias || t.company.alias,
					grade: t.company.statistics.careerRating
				}
			}) : t._e(), t._v(" "), null != t.company.statistics.rating ? s("TMRating", {
				staticClass: "tm-company-card__rating",
				attrs: {
					score: t.company.statistics.rating
				}
			}) : t._e(), t._v(" "), t.showSubscribers && null !== t.company.statistics.subscribersCount ? s("TMCompanySubscribers", {
				attrs: {
					"subscribers-count": t.company.statistics.subscribersCount
				}
			}) : t._e()] : t._e()], 2), t._v(" "), s("div", {
				staticClass: "tm-company-card__info"
			}, [s("router-link", {
				staticClass: "tm-company-card__name",
				attrs: {
					to: t.profileRoute
				}
			}, [t._v("\n      " + t._s(t.companyTitle) + "\n    ")]), t._v(" "), t.hasDescription ? s("div", {
				staticClass: "tm-company-card__description",
				domProps: {
					innerHTML: t._s(t.company.descriptionHtml)
				}
			}) : t._e()], 1)])
		},
			a = [],
			i = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-company-subscribers"
				}, [s("div", {
					staticClass: "tm-company-subscribers__count"
				}, [t._v("\n    " + t._s(t.formattedCount) + "\n  ")]), t._v(" "), s("div", {
					staticClass: "tm-company-subscribers__label"
				}, [t._v("\n    " + t._s(t.msg("SUBSCRIBERS")) + "\n  ")])])
			},
			o = [],
			r = {
				name: "TMCompanySubscribers",
				props: {
					subscribersCount: {
						type: Number,
						required: !0
					}
				},
				computed: {
					formattedCount() {
						const t = new Intl.NumberFormat(this.langOptions.hl),
							e = e => t.format(e);
						return e(this.subscribersCount)
					}
				}
			},
			c = r,
			l = (s("467e"), s("2877")),
			u = Object(l["a"])(c, i, o, !1, null, null, null),
			m = u.exports,
			d = s("2e8a"),
			p = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("a", {
					staticClass: "tm-grade",
					attrs: {
						href: t.$options.CAREER_HOST + "/companies/" + t.alias,
						rel: "noopener",
						target: "_blank"
					}
				}, [s("TMRating", {
					attrs: {
						label: t.msg("POINTS_LABEL_GRADE_SHORT"),
						score: t.grade,
						variant: "grade"
					}
				}, [s("TMSvgImg", {
					staticClass: "tm-svg-grade__icon",
					attrs: {
						id: "grade",
						size: "24",
						title: t.msg("POINTS_LABEL_GRADE")
					}
				})], 1)], 1)
			},
			_ = [],
			h = s("c24c"),
			g = s("b7d0"),
			f = s("6c10"),
			b = {
				name: "TMGrade",
				components: {
					TMSvgImg: g["a"],
					TMRating: h["a"]
				},
				props: {
					grade: {
						type: Number,
						required: !0
					},
					alias: {
						type: String,
						required: !0
					}
				},
				CAREER_HOST: f["a"]
			},
			T = b,
			v = (s("cd62"), Object(l["a"])(T, p, _, !1, null, null, null)),
			E = v.exports,
			S = s("32f0"),
			O = {
				name: "TMCompanyCard",
				components: {
					TMCompanySubscribers: m,
					TMEntityImage: d["a"],
					TMRating: h["a"],
					TMGrade: E
				},
				props: {
					company: {
						type: Object,
						default: null
					},
					hasDescription: {
						type: Boolean,
						default: !0
					},
					showSubscribers: {
						type: Boolean,
						default: !1
					}
				},
				computed: {
					profileRoute() {
						return {
							name: "COMPANY_PROFILE",
							params: {
								name: this.company.alias
							}
						}
					},
					companyTitle() {
						return this.company.titleHtml && Object(S["b"])(this.company.titleHtml)
					}
				}
			},
			C = O,
			I = (s("b6f4"), Object(l["a"])(C, n, a, !1, null, null, null));
		e["a"] = I.exports
	},
	ae8e: function (t, e, s) {
		"use strict";
		s("e86c")
	},
	b071: function (t, e, s) {
		"use strict";
		s("8fea")
	},
	b119: function (t, e, s) {
		"use strict";
		s("a65d")
	},
	b16d: function (t, e, s) { },
	b1d8: function (t, e, s) {
		"use strict";
		s("3f1a")
	},
	b24e: function (t, e) {
		const s = !0;
		t.exports = {
			attachStacktrace: !0,
			maxBreadcrumbs: 50,
			whitelistUrls: s ? [/https?:\/\/((www)\.)?(m\.)?habr\.com/, "https://localhost:7103/assets-habr/habr-web/"] : [],
			ignoreErrors: ["TypeError: null is not an object (evaluating 'd.frameElement')", "Can't find variable: pktAnnotationHighlighter", "ReferenceError: Can't find variable: article", "top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error."],
			ignoreUrls: [/graph\.facebook\.com/i, /connect\.facebook\.net\/en_US\/all\.js/i, /eatdifferent\.com\.woopra-ns\.com/i, /static\.woopra\.com\/js\/woopra\.js/i, /extensions\//i, /^chrome:\/\//i, /127\.0\.0\.1:4001\/isrunning/i, /webappstoolbarba\.texthelp\.com\//i, /metrics\.itunes\.apple\.com\.edgesuite\.net\//i]
		}
	},
	b29f: function (t, e, s) { },
	b32d: function (t, e, s) {
		"use strict";
		s("6fa2")
	},
	b41b: function (t, e, s) {
		"use strict";
		s("acce")
	},
	b672: function (t, e, s) {
		"use strict";
		s("fb49")
	},
	b6bf: function (t, e, s) { },
	b6f4: function (t, e, s) {
		"use strict";
		s("e55d")
	},
	b77d: function (t, e, s) { },
	b7bd: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-navigation-filters-spoiler"
			}, [s("div", {
				staticClass: "tm-navigation-filters-spoiler__wrapper"
			}, [s("button", {
				directives: [{
					name: "hotkey",
					rawName: "v-hotkey",
					value: {
						esc: t.closeOptions
					},
					expression: "{ 'esc': closeOptions }"
				}],
				ref: "button",
				staticClass: "tm-navigation-filters-spoiler__button",
				attrs: {
					type: "button"
				},
				on: {
					click: function (e) {
						return e.preventDefault(), t.toggleOptions.apply(null, arguments)
					}
				}
			}, [t._t("label"), t._v(" "), s("TMSvgImg", {
				staticClass: "icon_dropdown-arrow",
				class: {
					"icon_dropdown-arrow-rotated": t.visibleModel
				},
				attrs: {
					id: "arrow-down"
				}
			})], 2), t._v(" "), t._t("afterButton")], 2), t._v(" "), s("div", {
				ref: "content",
				class: t.bem("tm-navigation-filters-spoiler__content", {
					transitions: t.enableTransitions
				}),
				style: t.getStyles,
				on: {
					transitionend: function (e) {
						return e.target !== e.currentTarget ? null : t.onTransitionEnd.apply(null, arguments)
					}
				}
			}, [t._t("content", null, {
				contentVisible: t.visibleModel
			})], 2)])
		},
			a = [],
			i = s("b7d0"),
			o = s("cee5"),
			r = {
				name: "TMNavigationFiltersSpoiler",
				components: {
					TMSvgImg: i["a"]
				},
				props: {
					useVModel: {
						type: Boolean,
						default: !1
					},
					value: {
						type: Boolean,
						default: !1
					}
				},
				data() {
					return {
						contentVisible: !1,
						maxHeight: null,
						overflow: "hidden",
						enableTransitions: !1
					}
				},
				computed: {
					visibleModel: {
						get() {
							return this.useVModel ? this.value : this.contentVisible
						},
						set(t) {
							this.useVModel ? this.$emit("input", t) : this.contentVisible = t
						}
					},
					getStyles() {
						return this.visibleModel ? {
							maxHeight: this.maxHeight,
							overflow: this.overflow
						} : null
					}
				},
				mounted() {
					this.useVModel && this.value && (this.overflow = "visible"), this.calculateMaxHeight(), this.$nextTick(() => {
						this.enableTransitions = !0
					})
				},
				methods: {
					bem: o["a"],
					onTransitionEnd() {
						this.visibleModel && (this.overflow = "visible")
					},
					calculateMaxHeight() {
						this.maxHeight = this.$refs.content.scrollHeight + "px"
					},
					toggleOptions() {
						this.overflow = "hidden", this.calculateMaxHeight(), this.visibleModel = !this.visibleModel
					},
					closeOptions() {
						this.visibleModel = !1
					}
				}
			},
			c = r,
			l = (s("a73a"), s("2877")),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	b7d0: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("svg", t._b({
				staticClass: "tm-svg-img",
				attrs: {
					height: t.height || t.size,
					width: t.width || t.size
				}
			}, "svg", t.svgAttrs, !1), [t.iconTitle ? s("title", [t._v(t._s(t.iconTitle))]) : t._e(), t._v(" "), s("use", {
				attrs: {
					"xlink:href": t.src
				}
			})])
		},
			a = [],
			i = s("4505"),
			o = s.n(i);
		const r = ["placeholder-user", "placeholder-company", "placeholder-hub", "placeholder"];
		var c = {
			name: "TMSvgImg",
			inheritAttrs: !1,
			props: {
				id: {
					required: !0,
					type: String
				},
				size: {
					default: "16",
					type: [String, Number]
				},
				width: {
					default: null,
					type: [Number, String]
				},
				height: {
					default: null,
					type: [Number, String]
				},
				title: {
					type: String,
					default: null
				},
				svgAttrs: {
					type: Object,
					default() {
						return {}
					}
				}
			},
			computed: {
				src() {
					return "/" !== this.id.charAt(0) ? `${o.a}#${this.id}` : this.id
				},
				iconTitle() {
					if (this.title) return this.title;
					const t = "/" === this.id.charAt(0),
						e = t ? this.id.split("#")[1] : this.id;
					if (-1 === r.indexOf(e)) {
						const t = "ICON_" + e.split("-").join("_").toUpperCase();
						return this.msg(t)
					}
					return null
				}
			}
		},
			l = c,
			u = (s("d795"), s("2877")),
			m = Object(u["a"])(l, n, a, !1, null, null, null);
		e["a"] = m.exports
	},
	b7d8: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return t.isLoggedIn ? s("router-link", {
				attrs: {
					to: t.routerLinkTo
				}
			}, [t._t("default")], 2) : s("TMLoginLink", [t._t("default")], 2)
		},
			a = [],
			i = s("2f62"),
			o = s("1d55"),
			r = {
				name: "TMNewPublicationLink",
				components: {
					TMLoginLink: o["a"]
				},
				props: {
					sandbox: {
						type: Boolean,
						default: !1
					}
				},
				computed: {
					...Object(i["c"])("me", ["isLoggedIn"]),
					routerLinkTo() {
						return this.sandbox ? {
							name: "PUBLICATION_SANDBOX"
						} : {
							name: "PUBLICATION",
							params: {
								hl: this.langOptions.hl
							}
						}
					}
				}
			},
			c = r,
			l = s("2877"),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	b7e1: function (t, e, s) {
		"use strict";
		s("f810")
	},
	b848: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-separated-list"
			}, [t.title ? s("span", {
				staticClass: "tm-separated-list__title",
				domProps: {
					textContent: t._s(t.title)
				}
			}) : t._e(), t._v(" "), s("ul", {
				staticClass: "tm-separated-list__list"
			}, t._l(t.list, (function (e, n) {
				return s("li", {
					key: n,
					staticClass: "tm-separated-list__item"
				}, [t._t("default", null, {
					item: e
				})], 2)
			})), 0)])
		},
			a = [],
			i = {
				name: "TMSeparatedList",
				props: {
					list: {
						type: Array,
						required: !0
					},
					title: {
						type: String,
						default: null
					}
				}
			},
			o = i,
			r = (s("ce34"), s("2877")),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["a"] = c.exports
	},
	b885: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return t.seoLandings && t.seoLandings.length ? s("TMBlock", {
				attrs: {
					spacing: "top",
					title: t.msg("VACANCIES_BLOCK_TITLE")
				},
				scopedSlots: t._u([{
					key: "default",
					fn: function () {
						return t._l(t.seoLandings, (function (e) {
							return s("div", {
								key: e.itemUrl,
								staticClass: "tm-vacancies-block__item"
							}, [s("a", {
								staticClass: "tm-vacancies-block__vacancy-title",
								attrs: {
									href: e.itemUrl,
									target: "_blank"
								}
							}, [t._v("\n        " + t._s(e.title) + "\n      ")]), t._v(" "), s("div", {
								staticClass: "tm-vacancies-block__vacancies-count"
							}, [t._v("\n        " + t._s(t.msg("VACANCIES_COUNT", {
								count: e.vacanciesCount
							})) + "\n      ")])])
						}))
					},
					proxy: !0
				}, {
					key: "footer",
					fn: function () {
						return [s("a", {
							staticClass: "tm-block-extralink",
							attrs: {
								href: t.careerUrl
							}
						}, [t._v("\n      " + t._s(t.msg("VACANCIES_BLOCK_ALL_LINK")) + "\n    ")])]
					},
					proxy: !0
				}], null, !1, 3283846063)
			}) : t._e()
		},
			a = [],
			i = s("2f62"),
			o = s("19d1"),
			r = {
				name: "TMVacanciesBlock",
				components: {
					TMBlock: o["a"]
				},
				props: {
					hubs: {
						type: Array,
						required: !0
					}
				},
				asyncData({
					store: t
				}) {
					return t.dispatch("career/loadSeoLandings", {
						hubs: this.hubs.join(",")
					}).catch(() => null)
				},
				data() {
					return {
						careerUrl: "https://localhost:7103/career-habr/catalog"
					}
				},
				computed: {
					...Object(i["e"])("career", ["seoLandings"])
				}
			},
			c = r,
			l = (s("f6e7"), s("2877")),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	b92c: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-tabs",
				class: t.bem("tm-tabs", {
					variant: t.variant
				})
			}, [s("div", {
				ref: "scrollArea",
				class: {
					"tm-tabs__scroll-area": !t.shouldSplitTabs, "tm-tabs__padding-area": t.shouldSplitTabs
				}
			}, t._l(t.slicedTabs, (function (e, n) {
				return s("span", {
					key: "tab_" + n,
					staticClass: "tm-tabs__tab-item"
				}, [e.route.external ? s("a", {
					staticClass: "tm-tabs__tab-link",
					attrs: {
						href: e.route.path,
						target: e.route.target || "_self"
					}
				}, [t._v("\n        " + t._s(e.title) + "\n      ")]) : s("router-link", {
					staticClass: "tm-tabs__tab-link",
					class: {
						"tm-tabs__tab-link_active": t.checkTabActivity(e)
					},
					attrs: {
						"active-class": t.activeClassName,
						"data-test-id": t.checkTabActivity(e) ? "tab-link-active" : null,
						exact: t.exact,
						to: e.route
					}
				}, [t._v("\n        " + t._s(e.title) + "\n        "), e.count ? s("span", {
					staticClass: "tm-tabs__tab-counter"
				}, [t._v("\n          " + t._s(t.getCount(e.count)) + "\n        ")]) : t._e()])], 1)
			})), 0), t._v(" "), t.shouldSplitTabs ? s("div", {
				staticClass: "tm-tabs__dropdown"
			}, [s("TMNavigationDropdown", {
				attrs: {
					"current-value": t.$route.name,
					"custom-title": t.msg("MORE"),
					options: t.extraMenuTabs,
					variant: "tabs"
				},
				on: {
					change: t.handleNavigationChange
				}
			})], 1) : t._e()])
		},
			a = [],
			i = s("2f62"),
			o = s("5b53"),
			r = s("b7d0"),
			c = s("63af");

		function l(t) {
			return Object(c["b"])(t.name) || Object(c["b"])(t.path)
		}

		function u(t) {
			return l(t.route) && Object(c["c"])(t.title)
		}

		function m(t) {
			return t.every(u)
		}
		const d = {
			required: !0,
			type: Array,
			validator: m
		};
		var p = s("cee5"),
			_ = s("6be8"),
			h = {
				name: "TMTabs",
				components: {
					TMSvgImg: r["a"],
					TMNavigationDropdown: o["a"]
				},
				props: {
					tabs: d,
					tabsCount: {
						type: Number,
						default: null
					},
					variant: {
						type: String,
						default: null
					},
					exact: {
						type: Boolean,
						default: !1
					},
					exactMeta: {
						type: Boolean,
						default: !1
					},
					hideEmptyTabs: {
						type: Boolean,
						default: !1
					}
				},
				computed: {
					...Object(i["c"])("global", ["isMobile"]),
					filteredTabs() {
						return this.hideEmptyTabs ? this.tabs.filter(t => 0 !== t.count) : this.tabs
					},
					shouldSplitTabs() {
						return !this.isMobile && this.tabsCount && this.filteredTabs.length > this.tabsCount
					},
					slicedTabs() {
						return this.shouldSplitTabs ? this.filteredTabs.slice(0, this.tabsCount) : this.filteredTabs
					},
					extraMenuTabs() {
						return this.shouldSplitTabs ? this.filteredTabs.slice(this.tabsCount).map(t => ({
							label: t.title,
							value: t.route.name,
							...t
						})) : []
					},
					activeClassName() {
						return "companies_list" === this.$route.meta.pageType ? "tm-tabs__tab-link_active" : ""
					}
				},
				mounted() {
					this.shouldSplitTabs || this.scrollTab()
				},
				methods: {
					checkActivityByMeta(t) {
						return this.$route.meta.activeTab === t.route.name
					},
					checkTabActivity(t) {
						return this.isActive(t) || this.isParentRouteActive(t.route)
					},
					handleNavigationChange(t) {
						this.$router.push(t.route)
					},
					isParentRouteActive(t) {
						return !this.exact && this.$route.matched.some(e => e.name === t.name)
					},
					isActive(t) {
						if (t.route.params && t.route.params.topic) return this.$route.params.topic === t.route.params.topic;
						if (t.route.params && t.route.params.alias) return this.$route.params.alias === t.route.params.alias;
						if (t.route.query && t.route.query.target_type) return this.$route.query.target_type ? this.$route.query.target_type === t.route.query.target_type : "posts" === t.route.query.target_type;
						if (t.children && t.children.length) {
							const e = t.children.map(t => t + "_PAGES").concat(t.children);
							return -1 !== e.indexOf(this.$route.name)
						}
						return this.$route.name === t.route.name || this.$route.name === t.route.name + "_PAGES"
					},
					getCount(t) {
						return t && 0 !== Number(t) ? Object(_["a"])(t) : ""
					},
					scrollTab() {
						const {
							scrollArea: t
						} = this.$refs, e = t.querySelector(".tm-tabs__tab-link_active");
						if (t.scrollWidth < t.clientWidth || !e) return;
						const {
							x: s,
							right: n
						} = e.parentElement.getBoundingClientRect(!0);
						n < t.clientWidth || s < 0 || this.$refs.scrollArea.scroll(s - 16, 0)
					},
					bem: p["a"]
				}
			},
			g = h,
			f = (s("3e27"), s("2877")),
			b = Object(f["a"])(g, n, a, !1, null, null, null);
		e["a"] = b.exports
	},
	b931: function (t, e, s) { },
	b994: function (t, e, s) { },
	ba56: function (t, e, s) {
		"use strict";
		s("58b1")
	},
	badd: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return !t.isTablet && t.isMobile ? s("TMScrollLockTransition", {
				attrs: {
					appear: "",
					name: "slide-fade"
				}
			}, [s("TMBottomSheet", {
				attrs: {
					title: t.title
				},
				on: {
					close: function (e) {
						return t.$emit("close")
					}
				},
				scopedSlots: t._u([{
					key: "body",
					fn: function () {
						return [t._t("body")]
					},
					proxy: !0
				}], null, !0)
			}, [t._t("default")], 2)], 1) : s("TMScrollLockTransition", {
				attrs: {
					appear: "",
					name: "transition-fade"
				}
			}, [s("TMModalWindow", {
				attrs: {
					title: t.title
				},
				on: {
					close: function (e) {
						return t.$emit("close")
					}
				},
				scopedSlots: t._u([{
					key: "body",
					fn: function () {
						return [t._t("body")]
					},
					proxy: !0
				}], null, !0)
			}, [t._t("default")], 2)], 1)
		},
			a = [],
			i = s("2f62"),
			o = s("12c3"),
			r = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMOverlay", {
					on: {
						close: function (e) {
							return t.$emit("close")
						}
					}
				}, [s("div", {
					staticClass: "tm-modal-window"
				}, [s("div", {
					staticClass: "tm-modal-window__header"
				}, [s("button", {
					staticClass: "tm-modal-window__close",
					attrs: {
						type: "button"
					},
					on: {
						click: function (e) {
							return t.$emit("close")
						}
					}
				}, [s("TMSvgImg", {
					attrs: {
						id: "close",
						size: "12"
					}
				})], 1), t._v(" "), t.title ? s("div", {
					staticClass: "tm-modal-window__title",
					domProps: {
						textContent: t._s(t.title)
					}
				}) : t._e()]), t._v(" "), t.$slots.default ? s("div", {
					staticClass: "tm-modal-window__content"
				}, [t._t("default")], 2) : t._e(), t._v(" "), t._t("body")], 2)])
			},
			c = [],
			l = s("9c32"),
			u = s("b7d0"),
			m = {
				name: "TMModalWindow",
				components: {
					TMSvgImg: u["a"],
					TMOverlay: l["a"]
				},
				props: {
					title: {
						type: String,
						default: null
					}
				}
			},
			d = m,
			p = (s("6ef7"), s("2877")),
			_ = Object(p["a"])(d, r, c, !1, null, null, null),
			h = _.exports,
			g = s("1a5d"),
			f = {
				name: "TMPopup",
				components: {
					TMModalWindow: h,
					TMBottomSheet: o["a"],
					TMScrollLockTransition: g["a"]
				},
				props: {
					title: {
						type: String,
						default: null
					}
				},
				computed: {
					...Object(i["c"])("global", ["isMobile", "isTablet"])
				}
			},
			b = f,
			T = (s("41b7"), Object(p["a"])(b, n, a, !1, null, null, null));
		e["a"] = T.exports
	},
	bb19: function (t, e, s) {
		"use strict";
		s("4676")
	},
	bb64: function (t, e, s) { },
	bb73: function (t, e, s) { },
	bba5: function (t, e, s) { },
	bc28: function (t, e, s) {
		"use strict";
		s("bb73")
	},
	bc61: function (t, e, s) { },
	bcc6: function (t, e, s) { },
	bccd: function (t, e, s) {
		"use strict";
		s.r(e);
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("form", {
				staticClass: "tm-page-settings-form",
				on: {
					submit: t.onSubmit
				}
			}, [s("div", {
				staticClass: "tm-page-settings-form__title"
			}, [t._v("\n    " + t._s(t.getTranslation("SETTINGS_TITLE")) + "\n  ")]), t._v(" "), s("TMFieldset", {
				staticClass: "tm-page-settings-form__fieldset",
				attrs: {
					errors: [],
					title: t.getTranslation("SETTINGS_UI_TITLE")
				}
			}, [s("p", {
				staticClass: "tm-page-settings-form__input-wrapper"
			}, [s("TMInputRadioLabeled", {
				attrs: {
					id: "uiRussian",
					"checked-value": "ru",
					name: "ui"
				},
				on: {
					input: function (e) {
						return t.checkboxCheck()
					}
				},
				model: {
					value: t.uiLang,
					callback: function (e) {
						t.uiLang = e
					},
					expression: "uiLang"
				}
			}, [t._v("\n        " + t._s(t.getTranslation("SETTINGS_LANG_RUSSIAN")) + "\n      ")])], 1), t._v(" "), s("p", {
				staticClass: "tm-page-settings-form__input-wrapper"
			}, [s("TMInputRadioLabeled", {
				attrs: {
					id: "uiEnglish",
					"checked-value": "en",
					name: "ui"
				},
				on: {
					input: function (e) {
						return t.checkboxCheck()
					}
				},
				model: {
					value: t.uiLang,
					callback: function (e) {
						t.uiLang = e
					},
					expression: "uiLang"
				}
			}, [t._v("\n        " + t._s(t.getTranslation("SETTINGS_LANG_ENGLISH")) + "\n      ")])], 1)]), t._v(" "), s("TMFieldset", {
				staticClass: "tm-page-settings-form__fieldset",
				attrs: {
					errors: t.articlesLangErrors,
					title: t.getTranslation("SETTINGS_ARTICLES_TITLE")
				}
			}, [s("p", {
				staticClass: "tm-page-settings-form__input-wrapper"
			}, [s("TMLabeledCheckbox", {
				attrs: {
					name: "articlesRussian"
				},
				model: {
					value: t.articlesLangRussian,
					callback: function (e) {
						t.articlesLangRussian = e
					},
					expression: "articlesLangRussian"
				}
			}, [t._v("\n        " + t._s(t.getTranslation("SETTINGS_FL_LANG_RUSSIAN")) + "\n      ")])], 1), t._v(" "), s("p", {
				staticClass: "tm-page-settings-form__input-wrapper"
			}, [s("TMLabeledCheckbox", {
				attrs: {
					name: "articlesEnglish"
				},
				model: {
					value: t.articlesLangEnglish,
					callback: function (e) {
						t.articlesLangEnglish = e
					},
					expression: "articlesLangEnglish"
				}
			}, [t._v("\n        " + t._s(t.getTranslation("SETTINGS_FL_LANG_ENGLISH")) + "\n      ")])], 1)]), t._v(" "), s("TMFieldset", {
				staticClass: "tm-page-settings-form__fieldset",
				attrs: {
					errors: [],
					title: t.getTranslation("SETTINGS_FEED")
				}
			}, [s("p", {
				staticClass: "tm-page-settings-form__input-wrapper"
			}, [s("TMInputRadioLabeled", {
				attrs: {
					"checked-value": "cards",
					name: "feed"
				},
				model: {
					value: t.feed,
					callback: function (e) {
						t.feed = e
					},
					expression: "feed"
				}
			}, [t._v("\n        " + t._s(t.getTranslation("SETTINGS_FEED_CLASSIC")) + "\n      ")])], 1), t._v(" "), s("p", {
				staticClass: "tm-page-settings-form__input-wrapper"
			}, [s("TMInputRadioLabeled", {
				attrs: {
					"checked-value": "list",
					name: "feed"
				},
				model: {
					value: t.feed,
					callback: function (e) {
						t.feed = e
					},
					expression: "feed"
				}
			}, [t._v("\n        " + t._s(t.getTranslation("SETTINGS_FEED_COMPACT")) + "\n      ")])], 1)]), t._v(" "), s("p", {
				staticClass: "tm-page-settings-form__controls"
			}, [s("TMButtonBase", {
				staticClass: "tm-page-settings-form__submit",
				attrs: {
					disabled: Boolean(t.articlesLangErrors.length),
					"style-size": "large",
					"style-type": "solid",
					type: "submit"
				}
			}, [t._v("\n      " + t._s(t.getTranslation("SETTINGS_ACTION_SAVE")) + "\n    ")])], 1)], 1)
		},
			a = [],
			i = s("2f62"),
			o = s("8b84"),
			r = s("884d"),
			c = s("a571"),
			l = s("90e1"),
			u = s("161e"),
			m = s("de63"),
			d = s("d184");

		function p(t) {
			return Object(u["c"])("fl", t, {
				expires: 365
			})
		}

		function _(t) {
			return Object(u["c"])("hl", t, {
				expires: 365
			})
		}
		var h = s("6012"),
			g = {
				name: "TMPageSettingsForm",
				components: {
					TMButtonBase: r["a"],
					TMFieldset: c["a"],
					TMInputRadioLabeled: m["a"],
					TMLabeledCheckbox: l["a"]
				},
				data() {
					return {
						feed: this.$store.state.articlesList.view,
						isDirtyLang: !1
					}
				},
				computed: {
					articlesLangEnglish: Object(d["a"])("articlesLangEnglish"),
					articlesLangRussian: Object(d["a"])("articlesLangRussian"),
					uiLang: Object(d["a"])("uiLang"),
					cookieFl() {
						return Object(u["a"])("fl")
					},
					...Object(i["c"])("i18n", ["isEnglishContentEnabled", "isRussianContentEnabled", "msg"]),
					...Object(i["e"])("i18n", ["hl", "fl"]),
					...Object(i["e"])("settingsOther", ["inputs"]),
					...Object(i["c"])("me", ["isLoggedIn"]),
					...Object(i["c"])("settingsOther", ["formData"]),
					...Object(i["e"])("global", ["isPwa"]),
					...Object(i["e"])("articlesList", ["view"]),
					articlesLangErrors() {
						return this.articlesLangEnglish || this.articlesLangRussian ? [] : [this.getTranslation("SETTINGS_ARTICLES_ERROR")]
					}
				},
				beforeMount() {
					this.markDataLoaded()
				},
				mounted() {
					const t = [{
						name: "articlesLangEnglish",
						value: this.isEnglishContentEnabled
					}, {
						name: "articlesLangRussian",
						value: this.isRussianContentEnabled
					}, {
						name: "uiLang",
						value: this.hl
					}];
					t.forEach(({
						name: t,
						value: e
					}) => {
						this.setInputValue({
							name: t,
							value: e
						})
					})
				},
				methods: {
					...Object(i["b"])("settingsOther", ["setInputValue"]),
					...Object(i["b"])("ssr", ["markDataLoaded"]),
					...Object(i["b"])("articlesList", ["setArticleView"]),
					getTranslation(t) {
						return this.uiLang ? o[this.uiLang][t] : this.msg(t)
					},
					checkboxCheck() {
						if (!this.cookieFl) {
							const t = {
								ru: "articlesLangRussian",
								en: "articlesLangEnglish"
							};
							Object.keys(t).forEach(e => {
								this.setInputValue({
									name: t[e],
									value: e === this.uiLang
								})
							})
						}
					},
					reloadThePage() {
						this.isPwa ? window.location = "/pwa" : window.location.reload(!0)
					},
					onSubmit(t) {
						if (t.preventDefault(), !this.articlesLangErrors.length)
							if (this.feed !== this.view && this.setArticleView({
								view: this.feed
							}), this.formData.fl !== this.fl || this.formData.hl !== this.hl)
								if (p(this.formData.fl), _(this.formData.hl), this.isLoggedIn) {
									const t = {
										hl: this.formData.hl,
										fl: [...this.articlesLangEnglish ? ["en"] : [], ...this.articlesLangRussian ? ["ru"] : []]
									};
									Object(h["M"])(t).then(() => this.reloadThePage()).catch(t => this.$toast.error(t))
								} else this.reloadThePage();
							else this.$emit("closePopup")
					}
				}
			},
			f = g,
			b = (s("b41b"), s("2877")),
			T = Object(b["a"])(f, n, a, !1, null, null, null);
		e["default"] = T.exports
	},
	be13: function (t, e, s) { },
	be4e: function (t, e, s) {
		"use strict";
		s("7273")
	},
	be6e: function (t, e, s) {
		"use strict";
		s("45a5")
	},
	befa: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return t.company ? s("div", {
				staticClass: "tm-company-profile-card"
			}, [s("TMCompanyCard", {
				staticClass: "tm-company-profile-card__info",
				attrs: {
					company: t.company
				}
			}), t._v(" "), t.isLoggedIn ? s("div", {
				staticClass: "tm-company-profile-card__buttons"
			}, [s("TMButtonFollow", {
				staticClass: "tm-company-profile-card__button tm-company-profile-card__button_follow",
				attrs: {
					subscribed: t.isSubscribed
				},
				on: {
					onToggle: t.toggleFollowCompany
				}
			}), t._v(" "), t.workplaceInfo ? s("TMCompanyEmployeeRequest", {
				staticClass: "tm-company-profile-card__button tm-company-profile-card__button_request",
				attrs: {
					company: t.company,
					"current-user": t.userAlias,
					"workplace-info": t.workplaceInfo
				}
			}) : t._e(), t._v(" "), t.isSuperAdmin ? s("div", {
				staticClass: "tm-company-profile-card__button tm-company-profile-card__button_admin"
			}, [s("TMAdministrationLinks", {
				attrs: {
					links: t.companyLinksItems
				}
			})], 1) : t._e()], 1) : t._e()], 1) : t._e()
		},
			a = [],
			i = s("2f62"),
			o = s("1673"),
			r = s("ae08"),
			c = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "company-employee-request"
				}, [s("button", {
					staticClass: "company-employee-request__button",
					attrs: {
						type: "button"
					},
					on: {
						click: t.toggleButtonAction
					}
				}, [s("span", {
					staticClass: "company-employee-request__button-inner",
					class: {
						"company-employee-request__button-inner_active": t.isButtonActive
					}
				}, [t._v("\n      " + t._s(t.requestButtonText) + "\n    ")]), t._v(" "), t.isButtonActive ? s("span", {
					staticClass: "company-employee-request__button-cancel"
				}, [t._v("\n      Ã—\n    ")]) : t._e()]), t._v(" "), s("Portal", {
					attrs: {
						to: "overlays"
					}
				}, [t.isPopupVisible ? s("TMEmployeeRequestPopup", {
					attrs: {
						company: t.company,
						"user-alias": t.currentUser
					},
					on: {
						closePopup: function (e) {
							t.isPopupVisible = !1
						},
						setRequestData: function (e) {
							return t.updateWorkplaceInfo({
								isUserEmployee: !1,
								employeeRequest: e
							})
						}
					}
				}) : t._e(), t._v(" "), s("TMAsyncConfirmationDialog", {
					ref: "confirmDialog"
				})], 1)], 1)
			},
			l = [],
			u = s("7a73"),
			m = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMPopup", {
					staticClass: "employee-request-popup",
					attrs: {
						title: t.msg("COMPANY_ADMIN_EMPLOYEE_REQUEST_POPUP_TITLE")
					},
					on: {
						close: function (e) {
							return t.$emit("closePopup")
						}
					}
				}, [s("div", {
					staticClass: "employee-request-popup__content"
				}, [s("div", {
					staticClass: "employee-request-popup__company-info"
				}, [s("TMEntityImage", {
					staticClass: "employee-request-popup__company-logo",
					attrs: {
						alias: t.company.alias,
						image: t.company.imageUrl,
						size: 36,
						type: "company"
					}
				}), t._v(" "), s("span", {
					staticClass: "employee-request-popup__company-name"
				}, [t._v(t._s(t.company.titleHtml))])], 1), t._v(" "), s("TMFormBuilder", {
					staticClass: "employee-request-popup__form",
					attrs: {
						disabled: t.isLoading,
						fields: t.formFields,
						"initial-data": t.initialData,
						lang: t.langOptions.hl,
						"server-errors": t.serverErrors,
						"submit-label": t.msg("SUBMIT_FORM_ACTION")
					},
					on: {
						submit: t.proceedForm
					}
				})], 1)])
			},
			d = [],
			p = s("2e8a"),
			_ = s("0578"),
			h = s("badd"),
			g = s("e16f"),
			f = s("6012"),
			b = {
				name: "TMEmployeeRequestPopup",
				components: {
					TMPopup: h["a"],
					TMEntityImage: p["a"],
					TMFormBuilder: _["a"]
				},
				props: {
					company: {
						type: Object,
						default: null
					},
					userAlias: {
						type: String,
						required: !0
					}
				},
				data() {
					return {
						isLoading: !1,
						initialData: {
							messageText: ""
						},
						serverErrors: {}
					}
				},
				computed: {
					formFields() {
						return [{
							className: "tm-textarea",
							label: this.msg("COMPANY_ADMIN_EMPLOYEE_REQUEST_FORM_LABEL_TEXT"),
							description: this.msg("COMPANY_ADMIN_EMPLOYEE_REQUEST_FORM_DESCRIPTION_TEXT"),
							name: "messageText",
							type: "BaseTextarea",
							validation: {
								required: !0,
								maxLength: 300
							},
							htmlAttrs: {
								placeholder: this.msg("COMPANY_ADMIN_EMPLOYEE_REQUEST_FORM_PLACEHOLDER_TEXT")
							}
						}]
					}
				},
				methods: {
					proceedForm(t) {
						return this.isLoading = !0, this.serverErrors = {}, Object(f["P"])(this.userAlias, {
							company: this.company.alias,
							note: t.messageText
						}).then(t => {
							this.isLoading = !1, this.initialData = {
								messageText: ""
							}, t && this.$emit("setRequestData", t), this.$emit("closePopup"), this.$toast.success(this.msg("COMPANY_ADMIN_EMPLOYEE_REQUEST_SUBMIT_SUCCESS_MESSAGE"))
						}).catch(t => {
							this.isLoading = !1;
							const e = Object(g["a"])(t);
							"FORM_ERRORS" !== e ? this.$toast.error(t.message) : this.serverErrors = t.data
						})
					}
				}
			},
			T = b,
			v = (s("b7e1"), s("2877")),
			E = Object(v["a"])(T, m, d, !1, null, null, null),
			S = E.exports,
			O = s("67d1"),
			C = {
				name: "TMEmployeeRequest",
				components: {
					TMEmployeeRequestPopup: S,
					TMAsyncConfirmationDialog: u["a"]
				},
				props: {
					company: {
						type: Object,
						default: null
					},
					currentUser: {
						type: String,
						required: !0
					},
					workplaceInfo: {
						type: Object,
						required: !0
					}
				},
				data() {
					return {
						isPopupVisible: !1
					}
				},
				computed: {
					isButtonActive() {
						return this.workplaceInfo.employeeRequest || this.workplaceInfo.isUserEmployee
					},
					requestButtonText() {
						return this.workplaceInfo.employeeRequest ? this.msg("COMPANY_ADMIN_REQUEST_STATUS_WAITING") : this.msg("COMPANY_ADMIN_REQUEST_BUTTON_TEXT")
					}
				},
				methods: {
					...Object(i["b"])("companies", ["updateWorkplaceInfo"]),
					toggleButtonAction() {
						this.workplaceInfo.employeeRequest ? this.cancelRequest() : this.workplaceInfo.isUserEmployee ? this.deleteEmployee() : this.isPopupVisible = !0
					},
					cancelRequest() {
						this.$refs.confirmDialog.show({
							title: this.msg("COMPANY_ADMIN_CANCEL_REQUEST_CONFIRM_TITLE"),
							message: this.msg("COMPANY_ADMIN_CANCEL_REQUEST_CONFIRM_MESSAGE", {
								companyName: this.company.titleHtml
							}),
							confirmLabel: this.msg("COMPANY_ADMIN_APPROVE_REQUEST_BUTTON_TEXT"),
							cancelLabel: this.msg("CONFIRM_CANCEL_BUTTON_LABEL")
						}).then(t => {
							t && Object(f["a"])(this.currentUser, this.workplaceInfo.employeeRequest.id).then(() => {
								this.updateWorkplaceInfo({
									isUserEmployee: !1,
									employeeRequest: null
								}), this.$toast.success(this.msg("COMPANY_ADMIN_CANCEL_REQUEST_SUCCESS_MESSAGE"))
							}).catch(t => this.$toast.error(t.message))
						})
					},
					deleteEmployee() {
						this.$refs.confirmDialog.show({
							title: this.msg("COMPANY_ADMIN_REMOVE_EMPLOYEE_CONFIRM_TITLE"),
							message: this.msg("COMPANY_ADMIN_EMPLOYEE_REQUEST_DECLINE_MESSAGE", {
								companyName: this.company.titleHtml
							})
						}).then(t => {
							t && Object(O["k"])(this.company.alias, this.currentUser).then(() => {
								this.updateWorkplaceInfo({
									isUserEmployee: !1,
									employeeRequest: null
								}), this.$toast.success(this.msg("COMPANY_ADMIN_REMOVE_COMPANY_EMPLOYEE_SUCCESS_MESSAGE"))
							}).catch(t => this.$toast.error(t.message))
						})
					}
				}
			},
			I = C,
			A = (s("ec81"), Object(v["a"])(I, c, l, !1, null, null, null)),
			y = A.exports,
			L = s("6f23");
		const P = () => s.e("admin").then(s.bind(null, "6058"));
		var N = {
			name: "TMCompanyProfileCard",
			components: {
				TMCompanyCard: r["a"],
				TMButtonFollow: o["a"],
				TMAdministrationLinks: P,
				TMCompanyEmployeeRequest: y
			},
			props: {
				company: {
					type: Object,
					default: null
				}
			},
			computed: {
				...Object(i["c"])("me", ["isLoggedIn", "isSuperAdmin", "userAlias"]),
				...Object(i["e"])("companies", ["workplaceInfo"]),
				isSubscribed() {
					return this.company.relatedData && this.company.relatedData.isSubscribed
				},
				companyLinksItems() {
					const {
						alias: t
					} = this.company, e = {
						en: {
							EDIT_PROFILE: "Edit profile via CP"
						},
						ru: {
							EDIT_PROFILE: "Ð ÐµÐ´Ð°ÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð¿Ñ€Ð¾Ñ„Ð¸Ð»ÑŒ Ð² CP"
						}
					}, s = `https://localhost:7103/kek/admin/company/${t}/`;
					return [{
						title: e[this.langOptions.hl].EDIT_PROFILE,
						link: s
					}]
				}
			},
			methods: {
				...Object(i["b"])("companies", ["toggleSubscribeStatus"]),
				toggleFollowCompany() {
					return this.toggleSubscribeStatus(this.company.alias.toLowerCase()).then(() => {
						this.isSubscribed && Object(L["c"])("subscribe", "company", this.company.alias)
					})
				}
			}
		},
			R = N,
			M = (s("9a3f"), Object(v["a"])(R, n, a, !1, null, null, null));
		e["a"] = M.exports
	},
	c095: function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return l
		}));
		var n = s("84a2"),
			a = s.n(n),
			i = s("1f65");

		function o(t) {
			return Array.from(document.querySelectorAll(t))
		}

		function r(t) {
			t.focus({
				preventScroll: !0
			}), window.scrollTo({
				top: t.offsetTop,
				behavior: "smooth"
			})
		}

		function c({
			navigatableSelector: t,
			onPrevNavigationEnd: e,
			onNextNavigationEnd: s,
			onFocusedInteraction: n
		}) {
			const c = a()(r, 400);
			return {
				h: () => {
					const [s] = o(t);
					s === document.activeElement ? e() : c(s)
				},
				l: () => {
					const e = o(t),
						n = e[e.length - 1];
					n === document.activeElement ? s() : c(n)
				},
				k: () => {
					const s = o(t),
						{
							activeElement: n
						} = document,
						a = s.indexOf(n),
						r = -1 === a ? Object(i["a"])(s) : s[a - 1];
					r ? c(r) : e()
				},
				j: () => {
					const e = o(t),
						{
							activeElement: n
						} = document,
						a = e.indexOf(n),
						r = -1 === a ? Object(i["a"])(e) : e[a + 1];
					r ? c(r) : s()
				},
				o: () => {
					const e = o(t),
						{
							activeElement: s
						} = document,
						a = e.indexOf(s); - 1 !== a && n(document.activeElement)
				}
			}
		}

		function l({
			toggleArticleView: t
		} = {}) {
			const e = c({
				navigatableSelector: "[data-navigatable]",
				onFocusedInteraction(t) {
					const e = t.querySelector("[data-article-link]");
					e && e.click()
				},
				onPrevNavigationEnd() {
					const t = document.querySelector("[data-pagination-prev]");
					t && t.click()
				},
				onNextNavigationEnd() {
					const t = document.querySelector("[data-pagination-next]");
					t && t.click()
				}
			});
			return t && (e.t = t), e
		}
	},
	c1e1: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMBlock", {
				attrs: {
					"header-variant": "borderless",
					title: t.msg("WIDGET_BANNER")
				}
			}, [s("TMWidgetBannerContent", {
				attrs: {
					"widget-data": t.widgetData
				}
			})], 1)
		},
			a = [],
			i = s("19d1"),
			o = s("50c1"),
			r = {
				name: "TMWidgetBanner",
				components: {
					TMBlock: i["a"],
					TMWidgetBannerContent: o["a"]
				},
				props: {
					widgetData: {
						type: Object,
						required: !0
					}
				}
			},
			c = r,
			l = s("2877"),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	c24c: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-rating"
			}, [s("div", {
				staticClass: "tm-rating__header"
			}, [t._t("default"), t._v(" "), s("div", {
				staticClass: "tm-rating__counter",
				class: t.bem("tm-rating__counter", {
					variant: t.variant
				}),
				domProps: {
					textContent: t._s(t.score || 0)
				}
			})], 2), t._v(" "), s("div", {
				staticClass: "tm-rating__text",
				class: t.bem("tm-rating__text", {
					variant: t.variant
				})
			}, [t._v("\n    " + t._s(t.label || t.msg("POINTS_LABEL_RATING")) + "\n  ")])])
		},
			a = [],
			i = s("cee5"),
			o = {
				name: "TMRating",
				props: {
					score: {
						type: Number,
						default: 0
					},
					label: {
						type: String,
						default: null
					},
					variant: {
						type: String,
						default: null
					}
				},
				methods: {
					bem: i["a"]
				}
			},
			r = o,
			c = (s("be4e"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	c29b: function (t, e, s) { },
	c2d4: function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return n
		})), s.d(e, "c", (function () {
			return a
		})), s.d(e, "b", (function () {
			return i
		}));
		const n = {
			category: "tm_block",
			action: "top_daily,post",
			label: {
				post: "post",
				comment: "comment"
			}
		},
			a = {
				category: "tm_block",
				action: "similar_posts",
				label: "common"
			};

		function i(t, e) {
			return {
				category: "tm_block",
				action: "promo," + t,
				label: e
			}
		}
	},
	c307: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-megapost-snippet"
			}, [s("div", {
				staticClass: "tm-megapost-snippet__wrapper",
				style: t.getBackgroundStyles
			}, [s("div", {
				staticClass: "tm-megapost-snippet__tint"
			}, [s("header", {
				staticClass: "tm-megapost-snippet__header"
			}, [t.companyHub ? s("router-link", {
				ref: "companyBlogName",
				staticClass: "tm-megapost-snippet__link tm-megapost-snippet__company-blog",
				attrs: {
					to: t.companyRoute
				}
			}, [s("span", {
				domProps: {
					innerHTML: t._s(t.companyBlogName)
				}
			})]) : t._e(), t._v(" "), s("TMArticleLink", {
				staticClass: "tm-megapost-snippet__link tm-megapost-snippet__date",
				attrs: {
					article: t.article
				}
			}, [s("TMDatetime", {
				ref: "megapostPublishedDate",
				staticClass: "tm-megapost-snippet__datetime-published",
				attrs: {
					date: new Date(t.article.timePublished)
				}
			})], 1)], 1), t._v(" "), s("TMArticleLink", {
				staticClass: "tm-megapost-snippet__link tm-megapost-snippet__card",
				attrs: {
					article: t.article
				}
			}, [s("h2", {
				ref: "megapostTitle",
				staticClass: "tm-megapost-snippet__title",
				domProps: {
					innerHTML: t._s(t.article.titleHtml)
				}
			})]), t._v(" "), 0 !== t.hubs.length ? s("ul", {
				ref: "megapostHubs",
				staticClass: "tm-megapost-snippet__hubs"
			}, t._l(t.hubs, (function (e) {
				return s("li", {
					key: e.id,
					staticClass: "tm-megapost-snippet__hub"
				}, [s("TMHubLink", {
					staticClass: "tm-megapost-snippet__link",
					attrs: {
						hub: e
					}
				}, [s("span", {
					domProps: {
						innerHTML: t._s(e.titleHtml)
					}
				})])], 1)
			})), 0) : t._e()], 1)]), t._v(" "), t.showLead && t.article.leadData ? s("div", {
				staticClass: "tm-megapost-snippet__body"
			}, [t.article.leadData.textHtml ? s("TMArticleFormattedBody", {
				ref: "megapostLeadText",
				attrs: {
					"article-text": t.article.leadData.textHtml,
					version: t.editorVersion
				}
			}) : t._e(), t._v(" "), t.article.leadData.buttonTextHtml ? s("TMArticleLink", {
				ref: "megapostLeadReadMore",
				staticClass: "tm-megapost-snippet__readmore",
				attrs: {
					article: t.article
				}
			}, [s("span", {
				domProps: {
					innerHTML: t._s(t.article.leadData.buttonTextHtml)
				}
			})]) : t._e()], 1) : t._e()])
		},
			a = [],
			i = s("2f62"),
			o = s("d4a6"),
			r = s("8819"),
			c = s("8fab"),
			l = s("8dbe"),
			u = s("43bc"),
			m = {
				name: "TMMegapostSnippet",
				components: {
					TMArticleFormattedBody: o["a"],
					TMHubLink: l["a"],
					TMDatetime: c["a"],
					TMArticleLink: r["a"]
				},
				props: {
					article: {
						type: Object,
						default: () => { }
					}
				},
				computed: {
					...Object(i["c"])("articlesList", ["getArticleView"]),
					showLead() {
						return "cards" === this.getArticleView
					},
					getBackgroundStyles() {
						return !this.$isServer && this.article.leadData && this.article.leadData.imageUrl ? {
							background: `url(${Object(u["a"])(this.article.leadData.imageUrl)}) no-repeat center center / cover`
						} : null
					},
					editorVersion() {
						return parseInt(this.article.editorVersion, 10)
					},
					companyHub() {
						return this.article.isCorporative ? this.article.hubs.find(t => "corporative" === t.type) : null
					},
					companyBlogName() {
						return this.companyHub.titleHtml
					},
					companyRoute() {
						const {
							alias: t
						} = this.companyHub;
						return t ? {
							name: "COMPANY_PROFILE_ROOT",
							params: {
								name: t
							}
						} : null
					},
					hubs() {
						return this.article.hubs.filter(t => t !== this.companyHub)
					}
				}
			},
			d = m,
			p = (s("e9f9"), s("2877")),
			_ = Object(p["a"])(d, n, a, !1, null, null, null);
		e["a"] = _.exports
	},
	c31d: function (t, e, s) { },
	c387: function (t, e, s) { },
	c499: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				class: t.bem("tm-comment-footer", {
					"is-pinned": t.isPinnedSection
				})
			}, [t.comment.isReadonly ? t._e() : [t.hasMounted && t.canVoteForComment && t.voteAction ? s("TMVotesLever", {
				staticClass: "tm-comment-footer__votes-switcher",
				attrs: {
					appearance: "comment",
					"is-loading": t.isLoadingVote,
					"is-plusified": !0,
					"no-votes-title": t.msg("COMMENT_NOT_RATED"),
					score: t.comment.score,
					"vote-state": t.comment.vote.value || 0,
					"votes-count": t.comment.votesCount
				},
				on: {
					downvote: function (e) {
						return t.onVote("down")
					},
					upvote: function (e) {
						return t.onVote("up")
					}
				}
			}) : s("TMVotesMeter", {
				ref: "votesMeter",
				staticClass: "tm-comment-footer__votes-meter",
				attrs: {
					appearance: "comment",
					"no-votes-title": t.msg("COMMENT_NOT_RATED"),
					score: t.comment.score || 0,
					"vote-state": t.hasMounted && t.comment.vote && t.comment.vote.value || 0,
					"votes-count": t.comment.votesCount
				}
			}), t._v(" "), t._t("button", (function () {
				return [s("TMArticleCommentsLink", {
					staticClass: "tm-comment-footer__button tm-comment-footer__button",
					attrs: {
						article: t.comment.post,
						"comment-id": t.comment.id
					}
				}, [t._v("\n        " + t._s(t.msg("COMMENT_ACTION_LOOK")) + "\n      ")])]
			})), t._v(" "), t.favoriteAction ? s("TMBookmarksButton", {
				ref: "favoriteButton",
				staticClass: "tm-comment-footer__button tm-comment-footer__button_with-icon",
				attrs: {
					"is-bookmarked": !!t.hasMounted && t.comment.isFavorite,
					"is-counter-shown": !1,
					"is-processing": t.isLoadingFavorite
				},
				on: {
					"toggle-bookmark": t.favorite
				}
			}) : t._e()], t._v(" "), t.popupToggleVisible ? s("button", {
				ref: "popupButton",
				staticClass: "tm-comment__button tm-comment__button_with-icon",
				attrs: {
					"data-comment-popup": t.comment.id
				},
				on: {
					click: function (e) {
						return t.$emit("openPopup")
					}
				}
			}, [s("TMSvgImg", {
				staticClass: "tm-comment__icon tm-comment__icon_dots",
				attrs: {
					id: "dots"
				}
			})], 1) : s("div"), t._v(" "), t.adminControlsVisible ? [s("button", {
				staticClass: "tm-comment-footer__button",
				attrs: {
					type: "button"
				},
				on: {
					click: function (e) {
						return t.$emit("moderate", !0)
					}
				}
			}, [t._v("\n      " + t._s(t.msg("COMMENT_ACTION_APPROVE")) + "\n    ")]), t._v(" "), s("button", {
				staticClass: "tm-comment-footer__button",
				attrs: {
					type: "button"
				},
				on: {
					click: function (e) {
						return t.$emit("moderate", !1)
					}
				}
			}, [t._v("\n      " + t._s(t.msg("COMMENT_ACTION_REJECT")) + "\n    ")])] : t._e()], 2)
		},
			a = [],
			i = s("2f62"),
			o = s("0414"),
			r = s("cbd6"),
			c = s("b7d0"),
			l = s("f419"),
			u = s("874b"),
			m = s("126f"),
			d = s("cee5"),
			p = s("6be8"),
			_ = s("6f23");
		const h = () => s.e("chunk-2d228e2b").then(s.t.bind(null, "daa9", 7));
		var g = {
			name: "TMCommentFooter",
			components: {
				TMBookmarksButton: r["a"],
				TMSvgImg: c["a"],
				TMVotesLever: l["a"],
				TMVotesMeter: u["a"],
				TMWarningIcon: h,
				TMArticleCommentsLink: o["a"]
			},
			props: {
				comment: {
					type: Object,
					required: !0,
					validator: m["a"]
				},
				voteAction: {
					type: Function,
					default: null
				},
				favoriteAction: {
					type: Function,
					default: null
				},
				isPinnedSection: {
					type: Boolean,
					default: !1
				},
				popupToggleVisible: Boolean,
				showModerationControls: Boolean
			},
			data() {
				return {
					isLoadingFavorite: !1,
					isLoadingVote: !1,
					hasMounted: !1
				}
			},
			computed: {
				...Object(i["c"])("me", ["isLoggedIn", "isSuperAdmin", "userAlias"]),
				...Object(i["e"])("me", ["user"]),
				article() {
					return this.comment.post
				},
				voteStateStr() {
					return Object(p["b"])(this.comment.vote.value)
				},
				canVoteForComment() {
					return this.comment.vote && this.comment.vote.isCanVote
				},
				adminControlsVisible() {
					const {
						isReadonly: t,
						isAuthor: e
					} = this.comment;
					return this.hasMounted && t && !e && this.showModerationControls
				}
			},
			mounted() {
				this.hasMounted = !0
			},
			methods: {
				onVote(t) {
					const e = "up" === t ? "plus" : "minus";
					this.isLoadingVote = !0, this.voteAction({
						commentId: this.comment.id,
						direction: t
					}).then(() => {
						Object(_["c"])("comment", e, this.userAlias)
					}).catch(t => {
						this.$toast(t.message)
					}).finally(() => {
						this.isLoadingVote = !1
					})
				},
				favorite() {
					if (!this.isLoggedIn) return void this.$toast.error(this.msg("AUTH_REQUIRED"));
					const t = (new Date).getTime(),
						e = 1e3;
					this.isLoadingFavorite = !0;
					const {
						id: s,
						isFavorite: n
					} = this.comment;
					this.favoriteAction({
						commentId: s,
						isFavorite: !n
					}).then(() => {
						const s = (new Date).getTime() - t,
							n = s < e ? e - s : 0;
						setTimeout(() => {
							this.isLoadingFavorite = !1
						}, n)
					})
				},
				bem: d["a"]
			}
		},
			f = g,
			b = (s("8e5c"), s("2877")),
			T = Object(b["a"])(f, n, a, !1, null, null, null);
		e["a"] = T.exports
	},
	c4d2: function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return n
		}));
		const n = (t, e, s) => {
			const n = "news" === t.postType,
				a = "megaproject" === t.postType,
				i = t.hubs.filter(t => "corporative" === t.type),
				o = i.length && i[0].alias;
			let r = `/${s}/post/${e}/`;
			return n && (r = `/${s}/news/t/${e}/`), t.isCorporative && (r = `/${s}/company/${o}/blog/${e}/`), n && t.isCorporative && (r = `/${s}/company/${o}/news/t/${e}/`), a && (r = `/${s}/article/${e}/`), r
		}
	},
	c551: function (t, e, s) {
		"use strict";
		s.d(e, "n", (function () {
			return i
		})), s.d(e, "l", (function () {
			return o
		})), s.d(e, "d", (function () {
			return r
		})), s.d(e, "a", (function () {
			return c
		})), s.d(e, "b", (function () {
			return l
		})), s.d(e, "f", (function () {
			return u
		})), s.d(e, "m", (function () {
			return m
		})), s.d(e, "j", (function () {
			return d
		})), s.d(e, "i", (function () {
			return p
		})), s.d(e, "g", (function () {
			return _
		})), s.d(e, "h", (function () {
			return h
		})), s.d(e, "c", (function () {
			return b
		})), s.d(e, "e", (function () {
			return T
		})), s.d(e, "k", (function () {
			return v
		}));
		var n = s("2105"),
			a = s("4dcc");

		function i() {
			return Object(n["b"])(Object(a["a"])("publication/wysiwyg-rules", "v2"))
		}

		function o(t) {
			return Object(n["b"])(Object(a["a"])("publication/suggest-tags", "v2"), t)
		}

		function r(t) {
			return Object(n["b"])(Object(a["a"])("publication/suggest-customers", "v2"), t)
		}

		function c(t) {
			return Object(n["b"])(Object(a["a"])("publication/suggest-authors", "v2"), t)
		}

		function l(t) {
			return Object(n["b"])(Object(a["a"])("publication/suggest-megapost-companies", "v2"), t)
		}

		function u(t) {
			return Object(n["b"])(Object(a["a"])("publication/suggest-inner-tags", "v2"), t)
		}

		function m(t) {
			return Object(n["c"])(Object(a["a"])("publication/upload", "v2"), t)
		}

		function d(t, e) {
			const s = e ? "publication/save/" + e : "publication/save";
			return Object(n["c"])(Object(a["a"])(s, "v2"), t)
		}

		function p(t, e) {
			const s = e ? "megapost/save/" + e : "megapost/save";
			return Object(n["c"])(Object(a["a"])(s, "v2"), t)
		}

		function _(t) {
			return Object(n["b"])(Object(a["a"])("megapost/post-data/" + t, "v2"))
		}

		function h(t) {
			return Object(n["b"])(Object(a["a"])("publication/post-data/" + t, "v2"))
		}
		const g = (t, e) => t.filter(t => -1 === e.indexOf(t.id)).map(t => ({
			name: t.title,
			alias: t.id.toString()
		})),
			f = t => {
				const e = [],
					s = t.byPost ? t.byPost.map(t => (e.push(t.id), {
						name: t.title,
						alias: t.id.toString()
					})) : [],
					n = t.collective ? g(t.collective, e) : [],
					a = t.corporative ? g(t.corporative, e) : [],
					i = t.offtopic ? g(t.offtopic, e) : [];
				return [{
					list: s,
					name: "PUBLICATION_HUBS_BYPOST"
				}, {
					list: a,
					name: "PUBLICATION_HUBS_CORPORATIVE"
				}, {
					list: n,
					name: "PUBLICATION_HUBS_COLLECTIVE"
				}, {
					list: i,
					name: "PUBLICATION_HUBS_OFFTOPIC"
				}]
			};

		function b(t) {
			return Object(n["b"])(Object(a["a"])("megapost/suggest-company-blog", "v2"), t).then(f)
		}

		function T(t) {
			return Object(n["b"])(Object(a["a"])("megapost/suggest-hubs", "v2"), t).then(f)
		}

		function v(t) {
			return Object(n["b"])(Object(a["a"])("publication/suggest-hubs", "v2"), t).then(f)
		}
	},
	c5ac: function (t, e, s) {
		"use strict";
		s.r(e);
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMOverlay", {
				on: {
					close: t.close
				}
			}, [s("div", {
				staticClass: "tm-popup-base__wrapper",
				class: t.bem("tm-popup-base__wrapper", {
					centered: t.centered
				})
			}, [s("button", {
				directives: [{
					name: "hotkey",
					rawName: "v-hotkey",
					value: {
						esc: t.close
					},
					expression: "{ esc: close }"
				}],
				staticClass: "tm-popup-base__close",
				on: {
					click: t.close
				}
			}, [s("TMSvgImg", {
				staticClass: "tm-popup-base__close-icon",
				attrs: {
					id: "close"
				}
			})], 1), t._v(" "), s("div", {
				staticClass: "tm-popup-base__body"
			}, [t._t("default")], 2)])])
		},
			a = [],
			i = s("9c32"),
			o = s("b7d0"),
			r = s("cee5"),
			c = {
				name: "TMPopupBase",
				components: {
					TMOverlay: i["a"],
					TMSvgImg: o["a"]
				},
				props: {
					centered: {
						type: Boolean,
						default: !1
					}
				},
				methods: {
					bem: r["a"],
					close() {
						this.$emit("close")
					}
				}
			},
			l = c,
			u = (s("ae8e"), s("2877")),
			m = Object(u["a"])(l, n, a, !1, null, null, null);
		e["default"] = m.exports
	},
	c708: function (t, e, s) { },
	c70c: function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return u
		}));
		var n = s("2bf7"),
			a = s("6f23");
		const i = "24049213";

		function o() {
			const t = window.ym;
			return Boolean(t) && "function" === typeof t
		}

		function r() {
			const t = Object(n["d"])(Object(n["b"])());
			return t ? t.path : ""
		}

		function c(t) {
			const e = Object(n["d"])(Object(n["b"])());
			return `${e.protocol}//${e.host}${t}`
		}

		function l() {
			const {
				location: t,
				history: e
			} = window;
			if (-1 !== t.search.indexOf("utm_")) {
				const s = new URL(t),
					n = Array.from(s.searchParams.keys()).filter(t => t.startsWith("utm_"));
				n.forEach(t => s.searchParams.delete(t)), e.replaceState({}, null, s)
			}
		}

		function u(t) {
			const e = t || r();
			Object(a["f"])(t => {
				t("event", "page_view", {
					page_location: c(e)
				})
			}), o() && window.ym(i, "hit", e), l()
		}
	},
	c7a9: function (t, e, s) { },
	c7b7: function (t, e, s) { },
	c834: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMBlock", {
				attrs: {
					title: t.msg("WIDGET_APPLICATIONS")
				}
			}, [s("ul", {
				staticClass: "tm-widget-applications__list"
			}, t._l(t.widgetData.applications, (function (t) {
				return s("li", {
					key: t.title,
					staticClass: "tm-widget-applications__item"
				}, [s("TMWidgetApplication", {
					attrs: {
						application: t
					}
				})], 1)
			})), 0)])
		},
			a = [],
			i = s("19d1"),
			o = s("16fe9"),
			r = {
				name: "TMWidgetApplications",
				components: {
					TMBlock: i["a"],
					TMWidgetApplication: o["a"]
				},
				props: {
					widgetData: {
						type: Object,
						required: !0
					}
				}
			},
			c = r,
			l = (s("f889"), s("2877")),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	c9b7: function (t, e, s) {
		"use strict";
		s("d753")
	},
	c9bb: function (t, e, s) { },
	ca44: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-article-presenter",
				class: {
					"tm-article-presenter_wide": t.isWideVariant
				}
			}, [t._t("beforeBody"), t._v(" "), s("div", {
				staticClass: "tm-article-presenter__body"
			}, [s("TMMisprintArea", {
				attrs: {
					action: t.misprintAction
				}
			}, [s("article", {
				directives: [{
					name: "hotkey",
					rawName: "v-hotkey.stop",
					value: t.hotkeys,
					expression: "hotkeys",
					modifiers: {
						stop: !0
					}
				}],
				ref: "article",
				staticClass: "tm-article-presenter__content",
				class: {
					"tm-article-presenter__content_narrow": !t.isWideVariant
				}
			}, [t.isLoading ? [s("TMPlaceholder", {
				attrs: {
					type: "article"
				}
			}), t._v(" "), s("TMPlaceholder", {
				attrs: {
					type: "articleBody"
				}
			})] : [s("div", {
				staticClass: "tm-article-presenter__header",
				class: {
					"tm-article-presenter__header_wide": t.isWideVariant
				}
			}, [t._t("beforeSnippet"), t._v(" "), s("TMArticleSnippet", {
				staticClass: "tm-article-presenter__snippet",
				class: {
					"tm-article-presenter__snippet_wide": t.isWideVariant
				},
				attrs: {
					article: t.article,
					"full-article": "",
					lang: t.article.lang,
					tag: "h1"
				},
				on: {
					delete: function (e) {
						return t.deleteArticle(t.article.id)
					}
				}
			})], 2), t._v(" "), t._t("body", (function () {
				return [t.translationData ? s("div", {
					staticClass: "tm-article-presenter__origin"
				}, [s("a", {
					staticClass: "tm-article-presenter__origin-link",
					attrs: {
						href: t.translationData.originalUrl,
						target: "_blank"
					}
				}, [t._v("\n                " + t._s(t.msg("ARTICLE_ORIGIN_TITLE")) + "\n                "), s("span", [t._v("\n                  " + t._s(t.translationData.originalAuthorName) + "\n                ")])])]) : t._e(), t._v(" "), s("TMArticleBody", {
					attrs: {
						article: t.article,
						lang: t.article.lang
					}
				})]
			})), t._v(" "), s("div", {
				staticClass: "tm-article-presenter__meta",
				class: {
					"tm-article-presenter__meta_wide": t.isWideVariant
				}
			}, [t.article.tags && t.article.tags.length ? s("TMTagsList", {
				staticClass: "tm-article-presenter__meta-list",
				attrs: {
					tags: t.article.tags,
					title: t.msg("ARTICLE_TAGS_TITLE")
				}
			}) : t._e(), t._v(" "), t.article.hubs && t.article.hubs.length ? s("TMHubsList", {
				staticClass: "tm-article-presenter__meta-list",
				attrs: {
					hubs: t.article.hubs,
					title: t.msg("ARTICLE_HUBS_TITLE")
				}
			}) : t._e()], 1)]], 2)]), t._v(" "), t.article ? s("TMArticleStickyPanel", {
				attrs: {
					article: t.article,
					element: t.hasMounted ? t.$refs.article : null
				},
				scopedSlots: t._u([{
					key: "afterIcons",
					fn: function () {
						return [t._t("afterStickyIcons")]
					},
					proxy: !0
				}], null, !0)
			}) : t._e()], 1), t._v(" "), t._t("beforeFooter"), t._v(" "), t.$slots.footer ? s("div", {
				staticClass: "tm-article-presenter__footer"
			}, [t._t("footer")], 2) : t._e()], 2)
		},
			a = [],
			i = s("2f62"),
			o = s("edfe"),
			r = s("116c"),
			c = s("2bf7"),
			l = s("2c95"),
			u = s("fe04"),
			m = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("transition", {
					attrs: {
						name: "transition-slide"
					}
				}, [s("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: !t.isIconsPanelHidden,
						expression: "!isIconsPanelHidden"
					}],
					staticClass: "tm-article-sticky-panel"
				}, [t.article && t.article.id ? s("TMDataIcons", {
					staticClass: "tm-article-sticky-panel__icons",
					attrs: {
						article: t.article,
						"icons-list": t.iconsList
					}
				}) : t._e(), t._v(" "), t._t("afterIcons")], 2)])
			},
			d = [],
			p = s("9022");
		const _ = t => {
			const {
				bottom: e
			} = t.getBoundingClientRect();
			return e - window.innerHeight <= 0
		};
		var h = {
			name: "TMArticleStickyPanel",
			components: {
				TMDataIcons: p["a"]
			},
			props: {
				article: {
					type: Object,
					default: null
				},
				element: {
					type: null,
					default: null
				}
			},
			data() {
				return {
					isAtTheBottomOfArticle: !1,
					isIconsPanelHidden: !1,
					lastScrollPosition: null
				}
			},
			computed: {
				iconsList() {
					return ["rating", "favorite", "share", ...this.isAtTheBottomOfArticle ? ["comments"] : ["views"]]
				}
			},
			mounted() {
				document.addEventListener("scroll", this.handleScroll, {
					passive: !0
				})
			},
			beforeDestroy() {
				document.removeEventListener("scroll", this.handleScroll)
			},
			methods: {
				handleScroll() {
					if (!this.element || this._inactive) return;
					if (this.isAtTheBottomOfArticle = _(this.element), this.isAtTheBottomOfArticle) return this.scrolledDown || (this.scrolledDown = !0), void (this.isIconsPanelHidden = !1);
					const t = window.pageYOffset || document.documentElement.scrollTop;
					this.isIconsPanelHidden = t > this.lastScrollPosition, this.lastScrollPosition = t
				}
			}
		},
			g = h,
			f = (s("1ba4"), s("2877")),
			b = Object(f["a"])(g, m, d, !1, null, null, null),
			T = b.exports,
			v = s("ecc3"),
			E = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					directives: [{
						name: "hotkey",
						rawName: "v-hotkey.stop",
						value: t.misprintKeymap,
						expression: "misprintKeymap",
						modifiers: {
							stop: !0
						}
					}],
					staticClass: "tm-misprint-area"
				}, [s("div", {
					ref: "root",
					staticClass: "tm-misprint-area__wrapper"
				}, [t._t("default")], 2), t._v(" "), t.showMisprint ? s("TMMisprint", {
					attrs: {
						action: t.action,
						"misprint-text": t.misprintText
					},
					on: {
						close: t.closeMisprint
					}
				}) : t._e()], 1)
			},
			S = [];
		const O = () => s.e("chunk-7b17c241").then(s.bind(null, "6f9a"));
		var C = {
			name: "TMMisprintArea",
			components: {
				TMMisprint: O
			},
			props: {
				action: {
					type: Function,
					required: !0
				}
			},
			data() {
				return {
					misprintText: null,
					showMisprint: !1
				}
			},
			computed: {
				...Object(i["c"])("me", ["isLoggedIn"]),
				misprintKeymap() {
					return {
						"ctrl+enter": this.toggleMisprint,
						"meta+enter": this.toggleMisprint
					}
				}
			},
			methods: {
				getTextSelection() {
					const t = window.getSelection(),
						e = t.toString(),
						{
							anchorNode: s,
							focusNode: n
						} = t,
						{
							root: a
						} = this.$refs;
					return e.length && a.contains(s) && a.contains(n) ? e : null
				},
				toggleMisprint() {
					if (this._inactive) return;
					if (this.showMisprint) return void this.closeMisprint();
					const t = this.getTextSelection();
					t && this.isLoggedIn && (this.misprintText = t, this.showMisprint = !0)
				},
				closeMisprint() {
					this.showMisprint = !1, this.misprintText = ""
				}
			}
		},
			I = C,
			A = Object(f["a"])(I, E, S, !1, null, null, null),
			y = A.exports,
			L = s("5188"),
			P = s("485d"),
			N = s("a324"),
			R = s("5339"),
			M = s("6f23"),
			w = s("0e97"),
			k = s("32f0"),
			j = s("c70c"),
			D = s("e3a7"),
			x = s("4de5"),
			B = s("96ce"),
			$ = s.n(B),
			F = {
				name: "TMArticlePresenter",
				components: {
					TMArticleStickyPanel: T,
					TMHubsList: v["a"],
					TMTagsList: P["a"],
					TMArticleBody: l["a"],
					TMArticleSnippet: u["a"],
					TMPlaceholder: L["a"],
					TMMisprintArea: y
				},
				props: {
					article: {
						type: Object,
						default: null
					},
					isLoading: {
						type: Boolean,
						required: !0
					},
					variant: {
						type: String,
						default: null
					},
					shouldLogPageview: {
						type: Boolean,
						default: !0
					}
				},
				data() {
					return {
						hasMounted: !1,
						hasTrackedPageview: !1
					}
				},
				computed: {
					...Object(i["e"])("articlesList", ["lastVisitedRoute"]),
					...Object(i["c"])("me", ["userAlias"]),
					hotkeys() {
						return {
							"meta+e": this.checkAndOpenArticleEdit,
							"ctrl+e": this.checkAndOpenArticleEdit,
							u: this.goToLastVisitedArticlesList
						}
					},
					translationData() {
						if (!this.article.postLabels) return null;
						const {
							data: t = null
						} = this.article.postLabels.find(t => "translation" === t.type) || {};
						return t
					},
					adriverPixels() {
						const {
							metadata: {
								adriverPixels: t
							} = {}
						} = this.article || {};
						return t
					},
					isWideVariant() {
						return "wide" === this.variant
					}
				},
				activated() {
					this.hasTrackedPageview = !1
				},
				metaInfo() {
					const {
						article: t
					} = this;
					if (!t || !t.metadata) return {};
					const {
						lang: e,
						metadata: s
					} = t, {
						shareImageUrl: n,
						schemaJsonLd: a,
						amp: i
					} = s, o = [{
						href: Object(x["articleCanonical"])(t),
						rel: "canonical",
						vmid: "canonical"
					}, N["h"], {
						image_src: "image",
						href: n,
						vmid: "image:href"
					}];
					return i && this.langOptions.hl === e && o.push({
						rel: "amphtml",
						href: `https://localhost:7103/${e}/amp/post/${t.id}/`
					}), {
						title: Object(k["b"])(t.titleHtml),
						link: o,
						meta: Object(N["b"])(this.article),
						script: [{
							type: "application/ld+json",
							innerHTML: a,
							vmid: "ldjson-schema"
						}],
						__dangerouslyDisableSanitizers: ["script"],
						__dangerouslyDisableSanitizersByTagID: {
							"ldjson-schema": ["innerHTML"]
						}
					}
				},
				mounted() {
					this.hasMounted = !0, this.$activeWatch(() => this.article, t => {
						t && (this.collectAnalytics(), Object(c["c"])(), this.isLoggedIn || Object(o["b"])(t.id, t.statistics.commentsCount), this.adriverPixels && this.adriverPixels.length && this.initAdriverPixels())
					}, {
						immediate: !0
					})
				},
				methods: {
					checkAndOpenArticleEdit() {
						if (!this.article) return;
						const {
							relatedData: t,
							postType: e
						} = this.article, s = t && t.canEdit && "megaproject" !== e;
						if (!s) return;
						const n = parseInt(this.article.editorVersion, 10),
							a = 2 === n,
							i = Object(R["a"])(this.article),
							o = this.$router.resolve({
								name: "PUBLICATION_EDIT",
								params: {
									postId: this.$route.params.id
								}
							}).href;
						window.location = a ? o : i
					},
					misprintAction(t) {
						return Object(D["r"])(this.article.id, t)
					},
					goToLastVisitedArticlesList() {
						const t = Object(w["a"])(this.langOptions),
							e = this.lastVisitedRoute.name ? this.lastVisitedRoute : t;
						this.$router.push(e)
					},
					deleteArticle(t) {
						window.confirm(this.msg("ARTICLE_DRAFT_DELETE_CONFIRM")) && Object(D["b"])(t).then(() => {
							this.$router.push({
								name: "ARTICLES_LIST_BY_USER",
								params: {
									login: this.userAlias,
									hl: this.langOptions.hl
								}
							}), this.$toast.info(this.msg("ARTICLE_DELETED"))
						}).catch(t => {
							this.$toast.error(t.message)
						})
					},
					initAdriverPixels() {
						this.adriverPixels.forEach(t => {
							const e = new Image;
							e.src = t
						})
					},
					collectAnalytics() {
						this.hasTrackedPageview || (Object(D["q"])(this.article.id).catch(t => {
							r["a"].notifyException(t)
						}), Object(M["e"])("dimension2", $()(this.article)), Object(j["a"])(this.$route.fullPath), Object(M["e"])("dimension2", null), this.hasTrackedPageview = !0)
					}
				}
			},
			G = F,
			U = (s("fd6e"), Object(f["a"])(G, n, a, !1, null, null, null));
		e["a"] = U.exports
	},
	ca6d: function (t, e, s) { },
	cbd6: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("button", {
				staticClass: "bookmarks-button",
				attrs: {
					disabled: t.isProcessing,
					title: t.buttonTitle,
					type: "button"
				},
				on: {
					click: function (e) {
						return t.$emit("toggle-bookmark")
					}
				}
			}, [t.isProcessing ? s("TMCircleLoader", {
				staticClass: "bookmarks-button__loader",
				attrs: {
					"circle-height": 10,
					"circle-width": 10,
					height: 24,
					width: 24
				}
			}) : s("TMSvgIcon", {
				staticClass: "bookmarks-button__icon",
				class: {
					"bookmarks-button__icon_highlighted": t.isBookmarked
				},
				attrs: {
					id: "counter-favorite",
					size: "24",
					tag: "span",
					title: t.iconTitleAttr
				}
			}), t._v(" "), t.isCounterShown ? s("span", {
				staticClass: "bookmarks-button__counter",
				class: {
					"bookmarks-button__counter_highlighted": t.isBookmarked
				},
				attrs: {
					title: t.msg("DATA_ICONS_BOOKMARKS_COUNT")
				}
			}, [t._v("\n    " + t._s(t.bookmarksCount) + "\n  ")]) : t._e()], 1)
		},
			a = [],
			i = s("68eb"),
			o = s("4a90"),
			r = {
				name: "TMBookmarkButton",
				components: {
					TMCircleLoader: i["a"],
					TMSvgIcon: o["a"]
				},
				props: {
					bookmarksCount: {
						type: Number,
						default: 0
					},
					isBookmarked: Boolean,
					isProcessing: Boolean,
					isCounterShown: {
						type: Boolean,
						default: !0
					}
				},
				computed: {
					iconTitleAttr() {
						return this.isBookmarked ? this.msg("DATA_ICONS_REMOVE_FROM_BOOKMARKS") : this.msg("DATA_ICONS_ADD_TO_BOOKMARKS")
					},
					buttonTitle() {
						return this.isBookmarked ? this.msg("DATA_ICONS_REMOVE_FROM_BOOKMARKS") : this.msg("DATA_ICONS_ADD_TO_BOOKMARKS")
					}
				}
			},
			c = r,
			l = (s("1ffd"), s("2877")),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	cd16: function (t, e, s) {
		"use strict";

		function n(t) {
			return "a" === t.parentNode.tagName.toLowerCase()
		}

		function a(t, e = 0) {
			const s = n(t);
			return !!s || !(e > 1) && a(t.parentNode, e + 1)
		}
		s.d(e, "a", (function () {
			return o
		}));
		var i = s("43bc");
		const o = t => Object(i["b"])(t).filter(t => !a(t))
	},
	cd62: function (t, e, s) {
		"use strict";
		s("14ea")
	},
	ce34: function (t, e, s) {
		"use strict";
		s("a590")
	},
	ce8a: function (t, e, s) { },
	cee5: function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return n
		}));
		const n = (t, e) => {
			const s = Object.keys(e),
				n = [];
			return s.forEach(s => {
				const a = e[s];
				if (a)
					if (Array.isArray(a)) a.forEach(e => {
						n.push(`${t}_${s}-${e}`)
					});
					else {
						const e = "boolean" === typeof a ? s : `${s}-${a}`;
						n.push(`${t}_${e}`)
					}
			}), [t, n]
		}
	},
	cefd: function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return u
		}));
		const n = ["https://localhost:7103", "https://localhost:7103/m-habr", "https://habrahabr.ru", "https://localhost:7103", "https://localhost:7103"];
		let a = !1,
			i = !1;

		function o(t) {
			return ["Control", "Meta"].includes(t)
		}

		function r(t) {
			o(t.key) && (a = !1)
		}

		function c(t) {
			o(t.key) && (a = !0)
		}

		function l() {
			i || (document.addEventListener("keyup", r), document.addEventListener("keydown", c), i = !0)
		}
		const u = (t, e) => {
			l();
			const s = t.querySelectorAll("a");
			if (!s.length) return () => { };
			const i = [];
			return s.forEach(t => {
				if (-1 !== n.indexOf(t.origin) && !t.hash) {
					const s = s => {
						1 !== s.button && (a || e(s, t))
					};
					t.addEventListener("click", s), i.push(() => {
						t.removeEventListener("click", s)
					})
				}
			}), () => {
				i.forEach(t => t())
			}
		}
	},
	cf26: function (t, e, s) {
		"use strict";
		s("4e61")
	},
	cf80: function (t, e, s) { },
	d067: function (t, e, s) {
		"use strict";
		s("5ecd")
	},
	d083: function (t, e, s) { },
	d089: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-our-projects"
			}, [s("TMServicesIcons", {
				staticStyle: {
					display: "none"
				}
			}), t._v(" "), s("div", {
				staticClass: "tm-our-projects__label"
			}, [t._v("\n    " + t._s(t.msg("NAV_PROJECTS_SECTION_LABEL")) + "\n  ")]), t._v(" "), s("div", {
				staticClass: "tm-our-projects__items"
			}, t._l(t.ourProjects, (function (e, n) {
				return s("a", {
					key: e.name + "_" + n,
					staticClass: "tm-our-projects__item",
					attrs: {
						href: e.url,
						target: "_blank"
					}
				}, [s("svg", {
					staticClass: "tm-our-projects__logo",
					class: "tm-our-projects__logo" + e.logo,
					attrs: {
						height: e.heightSVG,
						width: e.widthSVG
					}
				}, [s("title", [t._v(t._s(e.name))]), t._v(" "), s("use", {
					attrs: {
						"xlink:href": e.logo
					}
				})]), t._v(" "), t.showDescription ? s("span", {
					staticClass: "tm-our-projects__description"
				}, [t._v("\n        " + t._s(e.description) + "\n      ")]) : t._e()])
			})), 0)], 1)
		},
			a = [],
			i = s("2f62"),
			o = s("4a90"),
			r = s("b7d0"),
			c = s("5186"),
			l = s.n(c),
			u = {
				name: "TMOurProjects",
				components: {
					TMSvgIcon: o["a"],
					TMSvgImg: r["a"],
					TMServicesIcons: l.a
				},
				props: {
					showDescription: {
						type: Boolean,
						default: !1
					},
					useText: {
						type: Boolean,
						default: !1
					}
				},
				computed: {
					...Object(i["c"])("i18n", ["msg", "langOptions"]),
					ourProjects() {
						return [{
							name: this.msg("NAV_PROJECT_HABR"),
							description: this.msg("NAV_PROJECT_HABR_DESCR"),
							logo: l.a + "#service-habrcom_ru",
							url: "/",
							widthSVG: "52",
							heightSVG: "22"
						}, {
							name: this.msg("NAV_PROJECT_TOSTER"),
							description: this.msg("NAV_PROJECT_TOSTER_DESCR"),
							logo: l.a + "#service-qna_ru",
							url: "https://localhost:7103/qna-habr?utm_source=habr&utm_medium=habr_top_panel",
							widthSVG: "46",
							heightSVG: "18"
						}, {
							name: this.msg("NAV_PROJECT_MOYKRUG"),
							description: this.msg("NAV_PROJECT_MOYKRUG_DESCR"),
							logo: l.a + "#service-career_ru",
							url: "https://localhost:7103/career-habr?utm_source=habr&utm_medium=habr_top_panel",
							widthSVG: "84",
							heightSVG: "21"
						}, {
							name: this.msg("NAV_PROJECT_FREELANSIM"),
							description: this.msg("NAV_PROJECT_FREELANSIM_DESCR"),
							logo: l.a + "#service-freelance_ru",
							url: "https://localhost:7103/freelance-habr?utm_source=habr&utm_medium=habr_top_panel",
							widthSVG: "91",
							heightSVG: "21"
						}]
					}
				}
			},
			m = u,
			d = (s("2198"), s("2877")),
			p = Object(d["a"])(m, n, a, !1, null, null, null);
		e["a"] = p.exports
	},
	d0d6: function (t, e, s) { },
	d0ec: function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return n
		}));
		class n extends Error {
			constructor(t, e, s) {
				super(e), this.code = t, this.name = "ResponseError", this.data = s
			}
			static getRouteNameByErrorCode(t) {
				return n.is4xxError(t) ? "ERROR_NOT_FOUND" : n.is5xxError(t) ? "ERROR_INTERNAL" : "ERROR_UNKNOWN"
			}
			static getRoutePathByErrorCode(t) {
				return n.is4xxError(t) ? "/error/404/" : n.is5xxError(t) ? "/error/500/" : "/error/unknown/"
			}
			static is4xxError(t) {
				return t >= 400 && t <= 499
			}
			static is403Error(t) {
				return 403 === t
			}
			static is401Error(t) {
				return 401 === t
			}
			static is5xxError(t) {
				return t >= 500 && t <= 599
			}
			static is403WithReason(t) {
				return this.is403Error(t.code) && t.data && t.data.reason
			}
			static factory(t, e, s) {
				return new n(t, e, s)
			}
			static isResponseError(t) {
				return "ResponseError" === t.name
			}
		}
	},
	d184: function (t, e, s) {
		"use strict";

		function n(t, e = "") {
			return t.reduce((t, s) => ({
				...t,
				[s]: {
					errors: [],
					ref: null,
					value: e
				}
			}), {})
		}

		function a(t) {
			return {
				get() {
					return this.inputs[t].value
				},
				set(e) {
					this.setInputValue({
						name: t,
						value: e
					})
				}
			}
		}
		s.d(e, "b", (function () {
			return n
		})), s.d(e, "a", (function () {
			return a
		}))
	},
	d1ae: function (t, e, s) {
		"use strict";
		s("c708")
	},
	d43f: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMBlock", {
				attrs: {
					title: t.msg("ADMINISTRATION_BLOCK_TITLE")
				}
			}, t._l(t.items, (function (e) {
				return s("a", {
					key: e.link,
					staticClass: "tm-administration-block__link",
					attrs: {
						href: e.link,
						target: "_blank"
					}
				}, [t._v("\n    " + t._s(e.title) + "\n  ")])
			})), 0)
		},
			a = [],
			i = s("2f62"),
			o = s("19d1"),
			r = {
				name: "TMCompanyAdministrationBlock",
				components: {
					TMBlock: o["a"]
				},
				props: {
					companyInfo: {
						type: Object,
						required: !0
					}
				},
				computed: {
					...Object(i["c"])("i18n", ["langOptions"]),
					items() {
						const t = !1,
							e = `/company/${this.companyInfo.alias}/admin/`;
						return [{
							title: this.msg("ADMINISTRATION_BLOCK_CP"),
							link: t ? e : "https://localhost:7103" + e
						}, {
							title: this.msg("ADMINISTRATION_BLOCK_CONTENT"),
							link: `https://localhost:7103/company-habr/${this.langOptions.hl}/native-special/`
						}, {
							title: this.msg("ADMINISTRATION_BLOCK_DOCS"),
							link: "/docs/companies/preparations/"
						}]
					}
				}
			},
			c = r,
			l = (s("5d47"), s("2877")),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	d4a6: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMMobileAbbreviation", [t.shouldFormat ? s("div", {
				staticClass: "article-formatted-body",
				class: t.bem("article-formatted-body", {
					version: t.version
				}),
				domProps: {
					innerHTML: t._s(t.articleText)
				}
			}) : s("div", {
				domProps: {
					innerHTML: t._s(t.articleText)
				}
			})])
		},
			a = [],
			i = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", [s("div", {
					ref: "content"
				}, [t._t("default")], 2), t._v(" "), s("Portal", {
					attrs: {
						to: "overlays"
					}
				}, [t.isMobile && t.currentAbbr ? s("TMPopup", {
					attrs: {
						title: t.currentAbbr.title
					},
					on: {
						close: function (e) {
							t.currentAbbr = null
						}
					}
				}, [s("p", {
					domProps: {
						textContent: t._s(t.currentAbbr.value)
					}
				})]) : t._e()], 1)], 1)
			},
			o = [],
			r = s("2f62"),
			c = s("badd");
		const l = (t, e) => {
			const s = t.querySelectorAll("abbr[title]");
			if (!s.length) return () => { };
			const n = [];
			return s.forEach(t => {
				t.addEventListener("click", e), n.push(() => {
					t.removeEventListener("click", e)
				})
			}), () => {
				n.forEach(t => t())
			}
		};
		var u = s("32f0"),
			m = {
				name: "TMMobileAbbreviation",
				components: {
					TMPopup: c["a"]
				},
				data() {
					return {
						currentAbbr: null,
						disposeAbbrs: null
					}
				},
				computed: {
					...Object(r["c"])("global", ["isMobile"])
				},
				mounted() {
					this.disposeAbbrs = l(this.$refs.content, this.abbrClickHandler)
				},
				beforeDestroy() {
					this.disposeAbbrs()
				},
				methods: {
					abbrClickHandler(t) {
						this.isMobile && (this.currentAbbr = {
							value: Object(u["a"])(t.currentTarget.title),
							title: Object(u["a"])(t.currentTarget.textContent)
						})
					}
				}
			},
			d = m,
			p = s("2877"),
			_ = Object(p["a"])(d, i, o, !1, null, null, null),
			h = _.exports,
			g = s("cee5"),
			f = s("5adb"),
			b = s("1559"),
			T = s("cefd"),
			v = {
				name: "TMArticleFormattedBody",
				components: {
					TMMobileAbbreviation: h
				},
				props: {
					articleText: {
						type: String,
						required: !0
					},
					shouldFormat: {
						type: Boolean,
						default: !0
					},
					version: {
						type: [String, Number],
						default: null
					}
				},
				data() {
					return {
						disconnectObserver: null,
						disposeLinks: null
					}
				},
				mounted() {
					Object(b["a"])(this.$el), this.disposeLinks = Object(T["a"])(this.$el, (t, e) => {
						t.preventDefault(), this.$router.push({
							path: e.pathname
						})
					}), this.disconnectObserver = Object(f["a"])(this.$el, this.msg("ERROR_IMAGE_WAS_NOT_LOADED"))
				},
				beforeDestroy() {
					this.disconnectObserver(), this.disposeLinks()
				},
				methods: {
					bem: g["a"]
				}
			},
			E = v,
			S = (s("034b"), Object(p["a"])(E, n, a, !1, null, null, null));
		e["a"] = S.exports
	},
	d4a6b: function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return o
		}));
		var n = s("6f23");
		const a = {
			ym: "yandex",
			ga: "google"
		};

		function i(t = {}) {
			const {
				analyticsSettings: e = []
			} = t;
			return e.reduce((t, {
				type: e,
				trackingId: s
			}) => ({
				...t,
				[a[e]]: s
			}), {})
		}

		function o(t, e) {
			const {
				settings: s
			} = t;
			if (!s) return;
			const a = i(s);
			if (!a) return;
			const {
				google: o,
				yandex: r
			} = a;
			o && Object(n["f"])(() => {
				Object(n["b"])(o, {
					name: "company"
				}), Object(n["d"])(e, "company"), Object(n["a"])("company")
			}), r && window.ym && (window.ym(r, "init", {
				defer: !0,
				webvisor: !1,
				clickmap: !1
			}), window.ym(r, "hit", e))
		}
	},
	d665: function (t, e, s) {
		"use strict";
		s("e7ab")
	},
	d6a5: function (t, e, s) { },
	d71d: function (t, e, s) { },
	d753: function (t, e, s) { },
	d795: function (t, e, s) {
		"use strict";
		s("bc61")
	},
	d7b7: function (t, e, s) {
		"use strict";
		s.d(e, "a", (function () {
			return i
		}));
		var n = s("63af");

		function a(t) {
			return Object(n["c"])(t.alias) && (Object(n["c"])(t.avatarUrl) || null === t.avatarUrl || Object(n["c"])(t.image))
		}
		const i = {
			required: !0,
			type: Object,
			validator: a
		}
	},
	d7dd: function (t, e, s) { },
	d7e5: function (t, e, s) { },
	d91e: function (t, e, s) {
		"use strict";
		s("335e")
	},
	d959: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-project-block",
				class: t.bem("tm-project-block", {
					variant: t.variant
				})
			}, [s("div", {
				staticClass: "tm-project-block__header"
			}, [s("div", {
				staticClass: "tm-project-block__title"
			}, [s("a", {
				staticClass: "tm-project-block__title-link",
				attrs: {
					href: t.titleLink,
					rel: "noopener",
					target: "_blank"
				},
				domProps: {
					textContent: t._s(t.title)
				},
				on: {
					click: function (e) {
						return t.$emit("click", e)
					}
				}
			})])]), t._v(" "), s("div", {
				staticClass: "tm-project-block__content"
			}, [t._t("default")], 2), t._v(" "), s("div", {
				staticClass: "tm-project-block__footer"
			}, [s("a", {
				staticClass: "tm-project-block__link",
				attrs: {
					href: t.footerLink,
					rel: "noopener",
					target: "_blank"
				},
				domProps: {
					textContent: t._s(t.footerTitle)
				},
				on: {
					click: function (e) {
						return t.$emit("click", e)
					}
				}
			})])])
		},
			a = [],
			i = s("cee5"),
			o = {
				name: "TMProjectBlock",
				props: {
					title: {
						type: String,
						required: !0
					},
					titleLink: {
						type: String,
						required: !0
					},
					footerTitle: {
						type: String,
						required: !0
					},
					footerLink: {
						type: String,
						required: !0
					},
					variant: {
						type: String,
						default: null
					}
				},
				methods: {
					bem: i["a"]
				}
			},
			r = o,
			c = (s("f8e8"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	da31: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("ul", {
				staticClass: "tm-context-menu-list",
				class: t.bem("tm-context-menu-list", {
					variant: t.variant
				})
			}, [t._t("default")], 2)
		},
			a = [],
			i = s("cee5"),
			o = {
				name: "TMContextMenuList",
				props: {
					variant: {
						type: String,
						default: null
					}
				},
				methods: {
					bem: i["a"]
				}
			},
			r = o,
			c = (s("1d03"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	dca4: function (t, e, s) {
		"use strict";
		s("16a3")
	},
	de3a: function (t, e, s) {
		"use strict";
		s("b29f")
	},
	de63: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-input-radio-labeled"
			}, [s("label", {
				staticClass: "tm-input-radio-labeled__label"
			}, [s("div", {
				staticClass: "tm-checkbox-labeled__input",
				attrs: {
					"data-test-id": "checkbox-labeled-input_" + t.$attrs.name
				}
			}, [s("TMInputRadioBase", t._b({
				staticClass: "tm-input-radio-labeled__real",
				attrs: {
					"checked-value": t.checkedValue
				},
				model: {
					value: t.localValue,
					callback: function (e) {
						t.localValue = e
					},
					expression: "localValue"
				}
			}, "TMInputRadioBase", t.$attrs, !1)), t._v(" "), s("span", {
				staticClass: "tm-input-radio-labeled__fake"
			})], 1), t._v(" "), t._t("default")], 2)])
		},
			a = [],
			i = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("input", {
					attrs: {
						type: "radio"
					},
					domProps: {
						checked: t.value === t.checkedValue
					},
					on: {
						change: t.onChange
					}
				})
			},
			o = [],
			r = {
				name: "TMInputRadioBase",
				props: {
					checkedValue: {
						type: String,
						default: null
					},
					value: {
						type: String,
						default: null
					}
				},
				methods: {
					onChange() {
						this.$emit("input", this.checkedValue)
					}
				}
			},
			c = r,
			l = s("2877"),
			u = Object(l["a"])(c, i, o, !1, null, null, null),
			m = u.exports,
			d = {
				name: "TMInputRadioLabeled",
				components: {
					TMInputRadioBase: m
				},
				inheritAttrs: !1,
				props: {
					checkedValue: {
						type: String,
						default: null
					},
					value: {
						type: String,
						default: null
					}
				},
				computed: {
					localValue: {
						get() {
							return this.value
						},
						set(t) {
							this.$emit("input", t)
						}
					}
				}
			},
			p = d,
			_ = (s("144e"), Object(l["a"])(p, n, a, !1, null, null, null));
		e["a"] = _.exports
	},
	ded5: function (t, e, s) { },
	df51: function (t, e, s) { },
	df93: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMNavigationFiltersSpoiler", {
				scopedSlots: t._u([{
					key: "label",
					fn: function () {
						return [t._v("\n    " + t._s(t.title) + "\n  ")]
					},
					proxy: !0
				}, {
					key: "afterButton",
					fn: function () {
						return [t._t("default")]
					},
					proxy: !0
				}, {
					key: "content",
					fn: function (e) {
						var n = e.contentVisible;
						return [s("div", {
							staticClass: "tm-navigation-filters__options"
						}, [t.options[t.rootActiveIndex] ? s("div", {
							staticClass: "tm-navigation-filters__list-label"
						}, [t._v("\n        " + t._s(t.options[t.rootActiveIndex].rootLabel) + "\n      ")]) : t._e(), t._v(" "), s("ul", {
							staticClass: "tm-navigation-filters__list"
						}, t._l(t.options, (function (e, a) {
							return s("li", {
								key: "" + e.label,
								staticClass: "tm-navigation-filters__option"
							}, [s("button", {
								staticClass: "tm-navigation-filters__option-button",
								class: {
									"tm-navigation-filters__option-button_active": t.rootActiveIndex === a
								},
								attrs: {
									tabindex: t.getTabIndex(n)
								},
								on: {
									click: function (e) {
										t.rootActiveIndex = a, t.mainActiveIndex = 0
									}
								}
							}, [t._v("\n            " + t._s(e.label) + "\n          ")])])
						})), 0), t._v(" "), t.options[t.rootActiveIndex] && t.options[t.rootActiveIndex].mainLabel ? s("div", {
							staticClass: "tm-navigation-filters__list-label"
						}, [t._v("\n        " + t._s(t.options[t.rootActiveIndex].mainLabel) + "\n      ")]) : t._e(), t._v(" "), t.options[t.rootActiveIndex] && t.options[t.rootActiveIndex].children ? s("ul", {
							staticClass: "tm-navigation-filters__list"
						}, t._l(t.options[t.rootActiveIndex].children, (function (e, a) {
							return s("li", {
								key: "" + e.label,
								staticClass: "tm-navigation-filters__option"
							}, [s("button", {
								staticClass: "tm-navigation-filters__option-button",
								class: {
									"tm-navigation-filters__option-button_active": t.mainActiveIndex === a
								},
								attrs: {
									tabindex: t.getTabIndex(n)
								},
								on: {
									click: function (e) {
										t.mainActiveIndex = a
									}
								}
							}, [t._v("\n            " + t._s(e.label) + "\n          ")])])
						})), 0) : t._e(), t._v(" "), s("TMButtonBase", {
							staticClass: "tm-navigation-filters__apply",
							attrs: {
								"style-size": "small",
								"style-type": "solid",
								tabindex: t.getTabIndex(n),
								type: "button"
							},
							on: {
								click: t.applyNavigationFilter
							}
						}, [t._v("\n        " + t._s(t.msg("NAV_APPLY")) + "\n      ")])], 1)]
					}
				}], null, !0)
			})
		},
			a = [],
			i = s("884d"),
			o = s("b7bd"),
			r = s("b7d0"),
			c = {
				name: "TMNavigationFilters",
				components: {
					TMSvgImg: r["a"],
					TMButtonBase: i["a"],
					TMNavigationFiltersSpoiler: o["a"]
				},
				props: {
					options: {
						type: Array,
						required: !0
					}
				},
				data() {
					const t = this.options.findIndex(t => this.isOptionActive(t)),
						e = t > -1 && this.options[t].children,
						s = e ? e.map(t => this.isOptionActive(t, !0)).lastIndexOf(!0) : null;
					return {
						optionsVisible: !1,
						rootActiveIndex: t,
						mainActiveIndex: s
					}
				},
				computed: {
					getStyles() {
						return this.optionsVisible && this.maxHeightStyles
					},
					title() {
						return this.$route.meta.navTitle ? this.msg(this.$route.meta.navTitle, this.$route.params) : ""
					}
				},
				methods: {
					getTabIndex(t) {
						return t ? 0 : -1
					},
					isOptionActive(t, e = !1) {
						const {
							value: s,
							params: n
						} = t;
						if (e && n) {
							const e = !!this.$route.matched.find(t => t.name === s);
							let n;
							const a = Object.keys(t.params);
							return 0 === a.length ? n = !0 : (n = !1, a.forEach(e => {
								const s = this.$route.params && "undefined" !== typeof this.$route.params[e] && this.$route.params[e],
									a = t.params && "undefined" !== typeof t.params[e] && t.params[e];
								n = s === a
							})), n && e
						}
						return !!this.$route.matched.find(t => t.name === s)
					},
					applyNavigationFilter() {
						const t = this.options[this.rootActiveIndex],
							e = t.children ? t.children[this.mainActiveIndex] : t,
							s = {
								name: e.value,
								params: e.params
							};
						this.$emit("applyFilter", s), this.$router.push(s)
					}
				}
			},
			l = c,
			u = (s("107d"), s("2877")),
			m = Object(u["a"])(l, n, a, !1, null, null, null);
		e["a"] = m.exports
	},
	e01b: function (t, e, s) {
		"use strict";
		s("c29b")
	},
	e095: function (t, e, s) { },
	e16f: function (t, e, s) {
		"use strict";

		function n(t) {
			return t && t.additional && t.additional.length ? t.additional[0] : null
		}

		function a(t) {
			const e = n(t);
			return "FORM_ERRORS" === e && t.data ? t.data : null
		}

		function i(t, e) {
			const s = n(t);
			return "FORM_ERRORS" === s && t.data && t.data[e] && t.data[e].length ? t.data[e][0] : null
		}

		function o(t) {
			return t && t.data instanceof Blob ? t.data.text().then(t => JSON.parse(t)) : Promise.resolve(t)
		}
		s.d(e, "a", (function () {
			return n
		})), s.d(e, "d", (function () {
			return a
		})), s.d(e, "c", (function () {
			return i
		})), s.d(e, "b", (function () {
			return o
		}))
	},
	e314: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("form", {
				ref: "form",
				staticClass: "tm-complaint-form",
				class: {
					"tm-complaint-form_processing": t.disabled
				},
				on: {
					submit: function (e) {
						return e.preventDefault(), t.submitForm.apply(null, arguments)
					}
				}
			}, [s("div", {
				staticClass: "tm-complaint-form__field"
			}, ["checkbox" === t.$attrs.type ? s("input", t._b({
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.currentValue,
					expression: "currentValue"
				}],
				ref: "input",
				staticClass: "tm-complaint-form__input",
				attrs: {
					disabled: t.disabled,
					type: "checkbox"
				},
				domProps: {
					checked: Array.isArray(t.currentValue) ? t._i(t.currentValue, null) > -1 : t.currentValue
				},
				on: {
					keyup: [function (e) {
						return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : e.ctrlKey ? t.submitForm.apply(null, arguments) : null
					}, function (e) {
						return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : e.metaKey ? t.submitForm.apply(null, arguments) : null
					}],
					change: function (e) {
						var s = t.currentValue,
							n = e.target,
							a = !!n.checked;
						if (Array.isArray(s)) {
							var i = null,
								o = t._i(s, i);
							n.checked ? o < 0 && (t.currentValue = s.concat([i])) : o > -1 && (t.currentValue = s.slice(0, o).concat(s.slice(o + 1)))
						} else t.currentValue = a
					}
				}
			}, "input", t.$attrs, !1)) : "radio" === t.$attrs.type ? s("input", t._b({
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.currentValue,
					expression: "currentValue"
				}],
				ref: "input",
				staticClass: "tm-complaint-form__input",
				attrs: {
					disabled: t.disabled,
					type: "radio"
				},
				domProps: {
					checked: t._q(t.currentValue, null)
				},
				on: {
					keyup: [function (e) {
						return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : e.ctrlKey ? t.submitForm.apply(null, arguments) : null
					}, function (e) {
						return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : e.metaKey ? t.submitForm.apply(null, arguments) : null
					}],
					change: function (e) {
						t.currentValue = null
					}
				}
			}, "input", t.$attrs, !1)) : s("input", t._b({
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.currentValue,
					expression: "currentValue"
				}],
				ref: "input",
				staticClass: "tm-complaint-form__input",
				attrs: {
					disabled: t.disabled,
					type: t.$attrs.type
				},
				domProps: {
					value: t.currentValue
				},
				on: {
					keyup: [function (e) {
						return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : e.ctrlKey ? t.submitForm.apply(null, arguments) : null
					}, function (e) {
						return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : e.metaKey ? t.submitForm.apply(null, arguments) : null
					}],
					input: function (e) {
						e.target.composing || (t.currentValue = e.target.value)
					}
				}
			}, "input", t.$attrs, !1)), t._v(" "), s("div", {
				staticClass: "tm-complaint-form__hint"
			}, [t._v("\n      " + t._s(t.msg("COMMENT_COMPLAINT_HINT")) + "\n    ")])]), t._v(" "), s("div", {
				staticClass: "tm-complaint-form__controls"
			}, [s("TMButtonBase", {
				attrs: {
					disabled: t.isTextareaEmpty || t.disabled
				},
				nativeOn: {
					click: function (e) {
						return t.submitForm.apply(null, arguments)
					}
				}
			}, [t._v("\n      " + t._s(t.msg("COMMENT_ACTION_SEND")) + "\n    ")])], 1)])
		},
			a = [],
			i = s("884d"),
			o = {
				name: "TMComplaintForm",
				components: {
					TMButtonBase: i["a"]
				},
				inheritAttrs: !1,
				props: {
					submitAction: {
						type: Function,
						required: !0
					}
				},
				data() {
					return {
						currentValue: null,
						disabled: !1
					}
				},
				computed: {
					isTextareaEmpty() {
						return !this.currentValue
					}
				},
				mounted() {
					this.$attrs.autofocus && this.$refs.input.focus()
				},
				methods: {
					submitForm() {
						this.disabled = !0, this.submitAction(this.currentValue).then(() => {
							this.disabled = !1
						}).catch(t => {
							throw this.disabled = !1, t
						})
					}
				}
			},
			r = o,
			c = (s("e69b"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	e33f: function (t, e, s) { },
	e340: function (t, e, s) {
		"use strict";
		s("d7e5")
	},
	e3a7: function (t, e, s) {
		"use strict";
		s.d(e, "i", (function () {
			return i
		})), s.d(e, "j", (function () {
			return o
		})), s.d(e, "m", (function () {
			return r
		})), s.d(e, "f", (function () {
			return c
		})), s.d(e, "g", (function () {
			return l
		})), s.d(e, "b", (function () {
			return u
		})), s.d(e, "q", (function () {
			return m
		})), s.d(e, "d", (function () {
			return d
		})), s.d(e, "A", (function () {
			return p
		})), s.d(e, "t", (function () {
			return _
		})), s.d(e, "a", (function () {
			return h
		})), s.d(e, "u", (function () {
			return g
		})), s.d(e, "s", (function () {
			return f
		})), s.d(e, "p", (function () {
			return b
		})), s.d(e, "l", (function () {
			return T
		})), s.d(e, "v", (function () {
			return v
		})), s.d(e, "r", (function () {
			return E
		})), s.d(e, "n", (function () {
			return S
		})), s.d(e, "o", (function () {
			return O
		})), s.d(e, "k", (function () {
			return C
		})), s.d(e, "z", (function () {
			return I
		})), s.d(e, "e", (function () {
			return A
		})), s.d(e, "c", (function () {
			return y
		})), s.d(e, "y", (function () {
			return L
		})), s.d(e, "x", (function () {
			return P
		})), s.d(e, "w", (function () {
			return N
		})), s.d(e, "h", (function () {
			return R
		}));
		var n = s("2105"),
			a = s("4dcc");

		function i(t) {
			return Object(n["b"])(Object(a["a"])("articles/", "v2"), t)
		}

		function o(t) {
			return Object(n["b"])(Object(a["a"])("articles/drafts", "v2"), t)
		}

		function r(t) {
			return Object(n["b"])(Object(a["a"])("articles/planned", "v2"), t)
		}

		function c(t, e) {
			return Object(n["b"])(Object(a["a"])(`articles/${t}/`, "v2"), e)
		}

		function l(t, e) {
			return Object(n["b"])(Object(a["a"])(`articles/preview/${t}/`, "v2"), e)
		}

		function u(t) {
			return Object(n["a"])(Object(a["a"])(`articles/drafts/${t}/`, "v2"))
		}

		function m(t) {
			if (!t) throw new Error("Article ID is undefined!");
			return Object(n["c"])(Object(a["a"])(`articles/${t}/pageview`, "v2"))
		}

		function d(t, e) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/votes/down`, "v2"), e)
		}

		function p(t) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/votes/up`, "v2"))
		}

		function _(t) {
			return Object(n["b"])(Object(a["a"])(`articles/${t}/reasons/stats`, "v2"))
		}

		function h(t) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/bookmarks/add`))
		}

		function g(t) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/bookmarks/remove`))
		}

		function f(t, e) {
			return Object(n["c"])(Object(a["a"])(`polls/${t}/vote`, "v2"), e)
		}

		function b(t, e) {
			return Object(n["b"])(Object(a["a"])(`articles/${t}/similar`, "v2"), e)
		}

		function T(t) {
			return Object(n["b"])(Object(a["a"])("articles/most-reading", "v2"), t)
		}

		function v(t, e) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/complaint`, "v2"), e)
		}

		function E(t, e) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/misprint`, "v2"), e)
		}

		function S(t, e) {
			return Object(n["b"])(Object(a["a"])(`articles/${t}/recommendation/template`, "v2"), e)
		}

		function O(t) {
			return Object(n["b"])(Object(a["a"])("refs/post/recommendations", "v2"), t)
		}

		function C(t) {
			return Object(n["b"])(Object(a["a"])("articles/moderation-comments", "v2"), t)
		}

		function I({
			articleId: t,
			email: e,
			tracker: s
		}) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/subscription`, "v2"), {
				emailSubscribed: e,
				trackerSubscribed: s
			})
		}

		function A(t) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/rules_remind/`, "v2"))
		}

		function y(t) {
			return Object(n["a"])(Object(a["a"])(`articles/${t}/rules_remind/`, "v2"))
		}

		function L(t, e) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/published`, "v2"), e)
		}

		function P(t, e) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/trackingPix`, "v2"), e)
		}

		function N(t, e) {
			return Object(n["c"])(Object(a["a"])(`articles/${t}/defer`, "v2"), e)
		}

		function R(t) {
			return Object(n["b"])(Object(a["a"])("shared-count/facebook", "v2"), t)
		}
	},
	e431: function (t, e, s) { },
	e49f: function (t, e, s) {
		"use strict";
		s("3785")
	},
	e4d1: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-notice",
				class: "tm-notice_" + t.type
			}, [t.$slots.icon ? s("div", {
				staticClass: "tm-notice__icon"
			}, [t._t("icon")], 2) : t._e(), t._v(" "), s("div", {
				staticClass: "tm-notice__inner"
			}, [t.$slots.title ? s("div", {
				staticClass: "tm-notice__title"
			}, [t._t("title")], 2) : t._e(), t._v(" "), s("div", {
				staticClass: "tm-notice__content"
			}, [t._t("default")], 2)])])
		},
			a = [];

		function i(t) {
			const e = ["info", "negative", "positive", "neutral", "warning"];
			return e.includes(t)
		}
		const o = {
			required: !0,
			type: String,
			validator: i
		};
		var r = {
			name: "TMNotice",
			props: {
				type: o
			}
		},
			c = r,
			l = (s("778e"), s("2877")),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	e55d: function (t, e, s) { },
	e560: function (t, e, s) {
		"use strict";
		s("bba5")
	},
	e625: function (t, e, s) {
		"use strict";
		s("7f86")
	},
	e69b: function (t, e, s) {
		"use strict";
		s("86a5")
	},
	e783: function (t, e, s) {
		"use strict";
		s.d(e, "b", (function () {
			return o
		})), s.d(e, "a", (function () {
			return r
		})), s.d(e, "e", (function () {
			return c
		})), s.d(e, "d", (function () {
			return l
		})), s.d(e, "c", (function () {
			return u
		}));
		var n = s("a10b"),
			a = s("2105"),
			i = s("4dcc");

		function o(t) {
			return Object(a["b"])(Object(i["a"])("conversations/list", "v2"), t).then(n["c"])
		}

		function r(t, e) {
			return Object(a["b"])(Object(i["a"])(`conversations/list/${t}/`, "v2"), e).then(n["b"])
		}

		function c(t, e) {
			return Object(a["c"])(Object(i["a"])("conversations/list/" + e, "v2"), t).then(n["d"])
		}

		function l(t) {
			return Object(a["b"])(Object(i["a"])("conversations/suggest", "v2"), t).then(n["f"])
		}

		function u(t) {
			return Object(a["b"])(Object(i["a"])("conversations/unread/", "v2"), t).then(n["e"])
		}
	},
	e7ab: function (t, e, s) { },
	e835: function (t, e, s) {
		"use strict";
		s("991a")
	},
	e86c: function (t, e, s) { },
	e87f: function (t, e, s) { },
	e8d2: function (t, e, s) { },
	e9b0: function (t, e, s) {
		"use strict";
		s("16fe")
	},
	e9d7: function (t, e, s) {
		"use strict";
		s("8a0a")
	},
	e9f1: function (t, e, s) { },
	e9f9: function (t, e, s) {
		"use strict";
		s("887b")
	},
	ea2d: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-article-comments-counter-link"
			}, [s("TMArticleCommentsLink", {
				ref: "commentsLink",
				staticClass: "tm-article-comments-counter-link__link",
				class: {
					"tm-article-comments-counter-link__link_button-style": t.isButton
				},
				attrs: {
					article: t.article
				},
				nativeOn: {
					click: function (e) {
						return t.onClick.apply(null, arguments)
					}
				}
			}, [s("TMSvgImg", {
				staticClass: "tm-article-comments-counter-link__icon",
				class: {
					"tm-article-comments-counter-link__icon_contrasted": t.isButton
				},
				attrs: {
					id: "counter-comments",
					size: "24"
				}
			}), t._v(" "), s("span", {
				staticClass: "tm-article-comments-counter-link__value",
				class: {
					"tm-article-comments-counter-link__value_contrasted": t.isButton
				}
			}, [t._v("\n      " + t._s(t.textValue) + "\n    ")])], 1), t._v(" "), t.unreadCount ? s("TMArticleCommentsLink", {
				ref: "commentsLink",
				staticClass: "tm-article-comments-counter-link__link",
				class: {
					"tm-article-comments-counter-link__link_button-style": t.isButton
				},
				attrs: {
					article: t.article,
					"first-unread": t.unreadCount && t.unreadCount !== t.commentsCount
				},
				nativeOn: {
					click: function (e) {
						return t.onClick.apply(null, arguments)
					}
				}
			}, [s("span", {
				staticClass: "tm-article-comments-counter-link__unread-counter",
				class: {
					"tm-article-comments-counter-link__unread-counter_contrasted": t.isButton
				},
				attrs: {
					title: t.msg("DATA_ICONS_READ_NEW_COMMENTS")
				}
			}, [t._v("\n      +" + t._s(t.unreadCount) + "\n    ")])]) : t._e()], 1)
		},
			a = [],
			i = s("0414"),
			o = s("b7d0"),
			r = s("6f23"),
			c = {
				name: "TMArticleCommentsCounterLink",
				components: {
					TMArticleCommentsLink: i["a"],
					TMSvgImg: o["a"]
				},
				props: {
					article: {
						type: Object,
						required: !0
					},
					commentsCount: {
						type: Number,
						default: null
					},
					unreadCount: {
						type: [String, Number],
						default: null
					},
					variant: {
						type: String,
						default: "icon"
					},
					gaOptions: {
						type: Object,
						default: null
					}
				},
				computed: {
					isButton() {
						return "button" === this.variant
					},
					textValue() {
						return this.isButton ? this.msg("ARTICLE_COMMENTS_COUNT", {
							count: this.commentsCount
						}) : this.commentsCount
					}
				},
				methods: {
					onClick() {
						if (this.gaOptions) {
							const {
								category: t,
								action: e,
								label: s
							} = this.gaOptions;
							Object(r["c"])(t, e, s.comment)
						}
					},
					click() {
						this.$refs.commentsLink.click()
					}
				}
			},
			l = c,
			u = (s("abc0"), s("2877")),
			m = Object(u["a"])(l, n, a, !1, null, null, null);
		e["a"] = m.exports
	},
	eabf: function (t, e, s) { },
	ead8: function (t, e, s) {
		"use strict";
		s("54fe")
	},
	ec69: function (t, e, s) { },
	ec81: function (t, e, s) {
		"use strict";
		s("cf80")
	},
	ecbd: function (t, e, s) { },
	ecc3: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMSeparatedList", {
				attrs: {
					list: t.hubs,
					title: t.title
				},
				scopedSlots: t._u([{
					key: "default",
					fn: function (e) {
						var n = e.item;
						return [s("TMHubLink", {
							staticClass: "tm-hubs-list__link",
							attrs: {
								hub: n
							}
						}, [t._v("\n    " + t._s(n.title) + "\n  ")])]
					}
				}])
			})
		},
			a = [],
			i = s("8dbe"),
			o = s("b848"),
			r = {
				name: "TMHubsList",
				components: {
					TMSeparatedList: o["a"],
					TMHubLink: i["a"]
				},
				props: {
					hubs: {
						type: Array,
						required: !0
					},
					title: {
						type: String,
						required: !0
					}
				}
			},
			c = r,
			l = (s("6e7d"), s("2877")),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	edc0: function (t, e, s) {
		"use strict";

		function n(t, e) {
			return Math.floor(t + Math.random() * (e + 1 - t))
		}
		s.d(e, "a", (function () {
			return n
		}))
	},
	ef66: function (t, e, s) {
		"use strict";
		s("e431")
	},
	ef70: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-article-comments",
				class: {
					"tm-article-comments_without-removed": t.isRemovedCommentsHidden
				}
			}, [s("TMComments", {
				attrs: {
					"can-pin-unpin-comment": t.canPinUnpinComment,
					"comment-component": t.$options.components.TMArticleComment,
					"comment-submit-action": t.commentSubmitAction,
					comments: t.comments,
					"comments-count": t.commentsCount,
					"complaint-action": t.canSendComplaint ? t.complaintAction : null,
					"favorite-action": t.favoriteAction,
					"footer-visible": t.shouldDisplayUserItems,
					"get-comment-link": t.getCommentLink,
					"is-loading": t.isLoading,
					notice: t.noticeData,
					"pinned-comments": t.pinnedComments,
					"show-moderation-controls": t.showModerationControls,
					"vote-action": t.voteAction
				},
				on: {
					commentDelete: t.onCommentDelete,
					expandLimiter: function (e) {
						return t.$emit("expandLimiter", e)
					},
					pinUnpinComment: t.pinUnpinComment
				},
				scopedSlots: t._u([{
					key: "headerAside",
					fn: function () {
						return [t.isLoggedIn && t.isSuperAdmin && t.shouldDisplayUserItems ? s("TMAdministrationLinks", {
							staticClass: "tm-article-comments__administration-links",
							attrs: {
								"dropdown-align": "center",
								links: t.commentsAdministrationsLinks,
								variant: "simple"
							}
						}) : t._e(), t._v(" "), s("TMRssButton", {
							attrs: {
								variant: "comments-header"
							}
						}), t._v(" "), !t.isLoading && t.isLoggedIn && t.shouldDisplayUserItems ? s("TMArticleSubscriptionControls", {
							staticClass: "tm-article-comments__subscription",
							attrs: {
								"article-id": t.articleId
							}
						}) : t._e()]
					},
					proxy: !0
				}, {
					key: "body",
					fn: function () {
						return [t.shouldDisplayUserItems && t.article && t.article.rulesRemindEnabled ? s("TMArticleCommentsUfoNotice", {
							staticClass: "tm-article-comments__ufo-notice"
						}) : t._e()]
					},
					proxy: !0
				}, {
					key: "afterComments",
					fn: function () {
						return [t.isLoggedIn && t.shouldDisplayUserItems ? s("TMCommentsNavigation", {
							attrs: {
								comments: t.comments,
								"load-action": t.updateCommentsAction
							},
							on: {
								readComment: t.onReadComment
							}
						}) : t._e()]
					},
					proxy: !0
				}])
			})], 1)
		},
			a = [],
			i = s("2f62"),
			o = s("f3a9"),
			r = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("TMNotice", {
					attrs: {
						type: "info"
					},
					scopedSlots: t._u([{
						key: "icon",
						fn: function () {
							return [s("TMSvgImg", {
								staticClass: "tm-ufo-notice__icon",
								attrs: {
									id: "info",
									title: "info"
								}
							})]
						},
						proxy: !0
					}])
				}, [t._v(" "), s("div", {
					staticClass: "tm-ufo-notice__content"
				}, [s("p", {
					staticClass: "tm-ufo-notice__intro",
					domProps: {
						innerHTML: t._s(t.msg("ARTICLE_COMMENTS_UFO_CARE_NOTICE"))
					}
				}), t._v(" "), s("details", [s("summary", [t._v(t._s(t.msg("ARTICLE_COMMENTS_UFO_CARE_SUMMARY_TITLE")))]), t._v(" "), s("div", {
					staticClass: "tm-ufo-notice__spoiler-text",
					domProps: {
						innerHTML: t._s(t.msg("ARTICLE_COMMENTS_UFO_CARE_DETAILS"))
					}
				})])])])
			},
			c = [],
			l = s("e4d1"),
			u = s("b7d0"),
			m = {
				name: "TMArticleCommentsUfoNotice",
				components: {
					TMNotice: l["a"],
					TMSvgImg: u["a"]
				}
			},
			d = m,
			p = (s("e9b0"), s("2877")),
			_ = Object(p["a"])(d, r, c, !1, null, null, null),
			h = _.exports,
			g = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-article-subscription-controls"
				}, [s("button", {
					directives: [{
						name: "hotkey",
						rawName: "v-hotkey.stop",
						value: {
							t: function () {
								return t.toggleTrackerSubscription({
									toggleTracker: !0
								})
							},
							m: function () {
								return t.toggleTrackerSubscription({
									toggleEmail: !0
								})
							}
						},
						expression: "{\n      't': () => toggleTrackerSubscription({ toggleTracker: true }),\n      'm': () => toggleTrackerSubscription({ toggleEmail: true }),\n    }",
						modifiers: {
							stop: !0
						}
					}],
					staticClass: "tm-article-subscription-controls__button",
					class: {
						"tm-article-subscription-controls__button_active": t.isSubscribed
					},
					attrs: {
						title: t.msg("ARTICLE_SUBSCRIBE_TITLE")
					},
					on: {
						click: t.openModal
					}
				}, [s("TMSvgImg", {
					attrs: {
						id: t.icon,
						size: "24",
						title: t.msg("ARTICLE_SUBSCRIBE_TITLE")
					}
				})], 1), t._v(" "), t.modalVisible ? s("TMPopup", {
					attrs: {
						title: t.msg("ARTICLE_SUBSCRIBE_TITLE")
					},
					on: {
						close: function (e) {
							t.modalVisible = !1
						}
					}
				}, [s("form", {
					on: {
						submit: function (e) {
							return e.preventDefault(), t.onSubmit.apply(null, arguments)
						}
					}
				}, [s("div", {
					staticClass: "tm-article-subscription-controls__checkbox"
				}, [s("TMLabeledCheckbox", {
					attrs: {
						name: "subscription_tracker"
					},
					model: {
						value: t.form.tracker,
						callback: function (e) {
							t.$set(t.form, "tracker", e)
						},
						expression: "form.tracker"
					}
				}, [t._v("\n          " + t._s(t.msg("ARTICLE_SUBSCRIBE_TRACKER")) + "\n        ")])], 1), t._v(" "), s("div", {
					staticClass: "tm-article-subscription-controls__checkbox"
				}, [s("TMLabeledCheckbox", {
					attrs: {
						name: "subscription_email"
					},
					model: {
						value: t.form.email,
						callback: function (e) {
							t.$set(t.form, "email", e)
						},
						expression: "form.email"
					}
				}, [t._v("\n          " + t._s(t.msg("ARTICLE_SUBSCRIBE_EMAIL")) + "\n        ")])], 1), t._v(" "), s("div", {
					staticClass: "tm-article-subscription-controls__submit"
				}, [s("TMButtonBase", {
					attrs: {
						"style-size": "large",
						"style-type": "solid"
					},
					on: {
						click: t.onSubmit
					}
				}, [t._v("\n          " + t._s(t.msg("ARTICLE_SUBSCRIBE_SAVE")) + "\n        ")])], 1)])]) : t._e()], 1)
			},
			f = [],
			b = s("884d"),
			T = s("90e1"),
			v = s("badd"),
			E = {
				name: "TMArticleSubscriptionControls",
				components: {
					TMPopup: v["a"],
					TMSvgImg: u["a"],
					TMLabeledCheckbox: T["a"],
					TMButtonBase: b["a"]
				},
				props: {
					articleId: {
						type: [String, Number],
						required: !0
					}
				},
				data() {
					return {
						modalVisible: !1,
						form: null
					}
				},
				computed: {
					isSubscribedToTracker() {
						return this.$store.getters["articlesList/isSubscribedToTracker"](this.articleId)
					},
					isSubscribedToEmail() {
						return this.$store.getters["articlesList/isSubscribedToEmail"](this.articleId)
					},
					isSubscribed() {
						return this.isSubscribedToTracker || this.isSubscribedToEmail
					},
					icon() {
						return this.isSubscribed ? "notifications-filled" : "notifications"
					}
				},
				methods: {
					...Object(i["b"])("articlesList", ["toggleSubscriptionStatus"]),
					toggleTrackerSubscription({
						toggleTracker: t,
						toggleEmail: e
					}) {
						this.form = {
							tracker: t ? !this.isSubscribedToTracker : this.isSubscribedToTracker,
							email: e ? !this.isSubscribedToEmail : this.isSubscribedToEmail
						}, this.toggleSubscriptionStatus({
							articleId: this.articleId,
							...this.form
						}).then(() => {
							let s;
							t && (s = this.isSubscribedToTracker ? this.msg("ARTICLE_SUBSCRIBE_TRACKER_SUCCESS_VIA_TRACKER") : this.msg("ARTICLE_UNSUBSCRIBE_TRACKER_SUCCESS_VIA_TRACKER")), e && (s = this.isSubscribedToEmail ? this.msg("ARTICLE_SUBSCRIBE_TRACKER_SUCCESS_VIA_EMAIL") : this.msg("ARTICLE_UNSUBSCRIBE_TRACKER_SUCCESS_VIA_EMAIL")), this.$toast.success(s)
						}).catch(t => {
							this.$toast.error(t.message)
						})
					},
					openModal() {
						this.form = {
							tracker: this.isSubscribedToTracker,
							email: this.isSubscribedToEmail
						}, this.modalVisible = !0
					},
					onSubmit() {
						this.toggleSubscriptionStatus({
							articleId: this.articleId,
							...this.form
						}).catch(t => {
							this.$toast.error(t.message)
						}), this.modalVisible = !1
					}
				}
			},
			S = E,
			O = (s("597a"), Object(p["a"])(S, g, f, !1, null, null, null)),
			C = O.exports,
			I = s("084a"),
			A = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-comment-navigation tm-comment-navigation__block",
					class: t.showCounter
				}, [s("button", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: !t.hasUnreadComments,
						expression: "!hasUnreadComments"
					}, {
						name: "hotkey",
						rawName: "v-hotkey.stop",
						value: {
							r: t.updateComments
						},
						expression: "{ 'r': updateComments }",
						modifiers: {
							stop: !0
						}
					}],
					staticClass: "tm-comment-navigation__button tm-comment-navigation__button_refresh",
					attrs: {
						title: t.msg("UPDATE_COMMENTS")
					},
					on: {
						click: t.updateComments
					}
				}, [s("TMRefreshserCommentsIcon", {
					staticClass: "tm-comment-navigation__icon tm-comment-navigation__icon_refresh",
					class: {
						"tm-comment-navigation__icon_loading": t.isLoadingNewComments
					}
				})], 1), t._v(" "), s("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.hasUnreadComments,
						expression: "hasUnreadComments"
					}],
					staticClass: "tm-comment-navigation__wrapper"
				}, [s("button", {
					directives: [{
						name: "hotkey",
						rawName: "v-hotkey.stop",
						value: {
							k: t.goToPrevComment
						},
						expression: "{ 'k': goToPrevComment }",
						modifiers: {
							stop: !0
						}
					}],
					staticClass: "tm-comment-navigation__button",
					attrs: {
						title: t.msg("GO_TO_PREV_COMMENT"),
						type: "button"
					},
					on: {
						click: t.goToPrevComment
					}
				}, [s("TMRefreshserCommentsUpIcon", {
					staticClass: "tm-comment-navigation__icon tm-comment-navigation__icon__up"
				})], 1), t._v(" "), s("button", {
					directives: [{
						name: "hotkey",
						rawName: "v-hotkey.stop",
						value: {
							f: t.readFirstUnreadCommentThrottled
						},
						expression: "{ 'f': readFirstUnreadCommentThrottled }",
						modifiers: {
							stop: !0
						}
					}],
					staticClass: "tm-comment-navigation__counter",
					attrs: {
						title: t.msg("GO_TO_FIRST_UNREAD_COMMENT"),
						type: "button"
					},
					on: {
						click: t.readFirstUnreadCommentThrottled
					}
				}, [t._v("\n      " + t._s(t.unreadCommentIds.length) + "\n    ")]), t._v(" "), s("button", {
					directives: [{
						name: "hotkey",
						rawName: "v-hotkey.stop",
						value: {
							j: t.goToNextComment
						},
						expression: "{ 'j': goToNextComment }",
						modifiers: {
							stop: !0
						}
					}],
					staticClass: "tm-comment-navigation__button",
					attrs: {
						title: t.msg("GO_TO_NEXT_COMMENT"),
						type: "button"
					},
					on: {
						click: t.goToNextComment
					}
				}, [s("TMRefreshserCommentsUpIcon", {
					staticClass: "tm-comment-navigation__icon tm-comment-navigation__icon_down"
				})], 1)])])
			},
			y = [],
			L = s("84a2"),
			P = s.n(L),
			N = s("670f"),
			R = s("6f23"),
			M = s("1172"),
			w = s("5d2c");
		const k = () => s.e("chunk-2d0af40b").then(s.t.bind(null, "0e11", 7)),
			j = () => s.e("chunk-2d0e5f94").then(s.t.bind(null, "9788", 7));
		var D = {
			name: "TMCommentsNavigation",
			components: {
				TMRefreshserCommentsIcon: j,
				TMRefreshserCommentsUpIcon: k
			},
			props: {
				comments: {
					type: Array,
					required: !0
				},
				loadAction: {
					type: Function,
					required: !0
				}
			},
			data() {
				return {
					isLoadingNewComments: !1,
					currentCommentId: null,
					scrollSettled: !1
				}
			},
			computed: {
				unreadCommentIds() {
					return this.comments.reduce((function t(e, s) {
						return s.isNew && e.push(s.id), s.children && e.push(...s.children.reduce(t, [])), e
					}), [])
				},
				hasUnreadComments() {
					return 0 !== this.unreadCommentIds.length
				},
				showCounter() {
					return this.hasUnreadComments ? "tm-comment-navigation__has-new" : "tm-comment-navigation__has-new_reverse"
				},
				goToNextClosestCommentThrottled() {
					return P()(N["e"], 500)
				},
				goToPrevClosestCommentThrottled() {
					return P()(N["f"], 500)
				},
				readFirstUnreadCommentThrottled() {
					return P()(this.readFirstUnreadComment, 500)
				}
			},
			created() {
				this.unreadCommentsWatcher = this.$watch("hasUnreadComments", t => {
					this.checkScrollToComments(t)
				})
			},
			mounted() {
				!this.scrollSettled && this.hasUnreadComments && this.checkScrollToComments(this.hasUnreadComments)
			},
			methods: {
				checkScrollToComments(t) {
					t && (this.scrollSettled = !0, Object(w["c"])(this.$route), this.unreadCommentsWatcher())
				},
				goToNextComment() {
					this._inactive || (this.scrollSettled = !0, this.unreadCommentsWatcher(), this.goToNextClosestCommentThrottled())
				},
				goToPrevComment() {
					this._inactive || (this.scrollSettled = !0, this.unreadCommentsWatcher(), this.goToPrevClosestCommentThrottled())
				},
				updateComments(t) {
					this._inactive || (t.target.blur(), this.isLoadingNewComments = !0, this.scrollSettled = !0, this.unreadCommentsWatcher(), this.loadAction().then(() => {
						this.isLoadingNewComments = !1
					}).catch(t => {
						this.isLoadingNewComments = !1;
						const e = t.data && t.data.text && t.data.text.source && Array.isArray(t.data.text.source);
						throw e ? this.$toast.error(t.data.text.source[0]) : this.$toast.error(t.message), t
					}), Object(R["c"])(N["a"], "update"))
				},
				readFirstUnreadComment() {
					if (this._inactive) return;
					const t = Object(N["d"])();
					if (!t) return;
					this.scrollSettled = !0, this.unreadCommentsWatcher();
					const e = Object(N["c"])(t);
					Object(M["b"])(t).then(s => {
						Object(R["c"])(N["a"], "middle"), s ? this.$emit("readComment", e) : setTimeout(() => {
							this.$emit("readComment", e)
						}, 250), Object(N["b"])(t)
					}).catch(t => {
						t instanceof M["a"] && (Object(R["c"])(N["a"], "middle"), this.$emit("readComment", e))
					})
				}
			}
		},
			x = D,
			B = (s("ba56"), Object(p["a"])(x, A, y, !1, null, null, null)),
			$ = B.exports,
			F = s("47e8"),
			G = s("e3a7"),
			U = s("0a5f");
		const V = () => s.e("admin").then(s.bind(null, "6058"));
		var W = {
			name: "TMArticleComments",
			components: {
				TMArticleComment: o["a"],
				TMComments: I["a"],
				TMRssButton: F["a"],
				TMCommentsNavigation: $,
				TMArticleSubscriptionControls: C,
				TMArticleCommentsUfoNotice: h,
				TMAdministrationLinks: V
			},
			serverCacheKey(t) {
				return !!t.cacheKey && t.cacheKey
			},
			props: {
				articleId: {
					type: [Number, String],
					required: !0
				},
				cacheKey: {
					type: String,
					default: null
				},
				isLoading: {
					type: Boolean,
					default: !1
				}
			},
			data() {
				return {
					isRemovedCommentsHidden: !1,
					hasMounted: !1,
					stopHandlerArticle: null,
					stopHandlerUserData: null
				}
			},
			computed: {
				...Object(i["c"])("comments", ["getCommentsTreeByArticleId", "getCommentAccess", "getPinnedCommentsById"]),
				...Object(i["c"])("articlesList", ["getArticleById"]),
				...Object(i["c"])("me", ["isModerator", "companiesAdmin", "isLoggedIn", "userAlias", "isSuperAdmin", "canSendComplaint"]),
				article() {
					return this.getArticleById(this.articleId)
				},
				showModerationControls() {
					return this.article && this.article.relatedData && this.article.relatedData.canModerateComments
				},
				comments() {
					return this.getCommentsTreeByArticleId(this.articleId)
				},
				pinnedComments() {
					return this.getPinnedCommentsById(this.articleId)
				},
				commentsAdministrationsLinks() {
					return [{
						title: this.msg("ARTICLE_CLEAR_CACHE_COMMENTS"),
						onclick: t => this.resetCache(t)
					}, {
						title: this.commentsStateActionText,
						onclick: t => this.toggleCommentsState(t)
					}, {
						title: this.removedCommentsActionText,
						onclick: t => this.toggleRemovedComments(t)
					}, {
						title: this.ufoNoticeActionText,
						onclick: t => this.toggleUfoNotice(t)
					}]
				},
				isCanComment() {
					return this.getCommentAccess && this.getCommentAccess.isCanComment
				},
				cantCommentReasonKey() {
					return this.getCommentAccess ? this.getCommentAccess.cantCommentReasonKey : null
				},
				userBlockReasonData() {
					const t = this.getCommentAccess && this.getCommentAccess.data || {};
					return t.reason = t.reason || "EMPTY", t.timeElapsed = t.timeElapsed || "EMPTY", t
				},
				commentAccessMessage() {
					if (!this.cantCommentReasonKey) return null;
					let t = "EXTERNAL_" + this.cantCommentReasonKey;
					return "EXTERNAL_USER_BANNED" === t && (t = "EXTERNAL_USER_BLOCKED"), this.msg(t, this.userBlockReasonData)
				},
				loginUrl() {
					const t = "/kek/v1/auth/habrahabr/";
					return `${t}?back=${this.$route.path}&hl=${this.langOptions.hl}`
				},
				noticeData() {
					return "draft" === this.article.status ? {
						type: "negative",
						message: this.msg("POST_IN_DRAFTS")
					} : this.isLoggedIn && !this.isCanComment ? {
						type: "negative",
						message: this.commentAccessMessage
					} : this.isLoggedIn ? null : {
						type: "positive",
						message: this.msg("COMMENT_NOTICE_UNAUTH_DECLARATION", {
							url: this.loginUrl
						})
					}
				},
				removedCommentsActionText() {
					return this.isRemovedCommentsHidden ? this.msg("ARTICLE_SHOW_REMOVED_COMMENTS") : this.msg("ARTICLE_HIDE_REMOVED_COMMENTS")
				},
				commentsStateActionText() {
					return this.article.commentsEnabled ? this.msg("ARTICLE_DISABLE_COMMENTS") : this.msg("ARTICLE_ENABLE_COMMENTS")
				},
				ufoNoticeActionText() {
					return this.article && this.article.rulesRemindEnabled ? this.msg("RULES_REMINDER_HIDE_BUTTON_TEXT") : this.msg("RULES_REMINDER_SHOW_BUTTON_TEXT")
				},
				commentsCount() {
					return this.article && this.article.statistics ? this.article.statistics.commentsCount : null
				},
				isArticleAuthor() {
					return this.article.author && this.article.author.alias === this.userAlias
				},
				shouldDisplayUserItems() {
					return !this.cacheKey || this.hasMounted
				},
				canPinUnpinComment() {
					if (this.isArticleAuthor || this.isSuperAdmin || this.isModerator) return !0;
					if (!this.article.isCorporative || !this.companiesAdmin || !this.companiesAdmin.length) return !1;
					const t = this.article.hubs.find(t => "corporative" === t.type),
						e = t && t.alias;
					return !!this.companiesAdmin.find(t => t.alias === e)
				}
			},
			beforeDestroy() {
				this.clearCommentsList(this.articleId)
			},
			mounted() {
				this.hasMounted = !0, this.cacheKey && (this.stopHandlerArticle = this.$watch(() => this.article, t => {
					t && !this._inactive && this.isLoggedIn && (this.loadUserData().catch(t => {
						this.$toast.error(t.message)
					}), this.stopHandlerArticle && this.stopHandlerArticle())
				}, {
					immediate: !0
				}))
			},
			methods: {
				...Object(i["b"])("articlesList", ["setArticleCommentsStatus", "setArticleRulesRemindStatus"]),
				...Object(i["b"])("comments", ["getComments", "getPinnedComments", "loadNewComments", "sendComment", "suspendComment", "setFavorite", "vote", "pinComment"]),
				...Object(i["d"])("comments", ["addComment", "setCommentRead", "clearCommentsList", "setLastCommentTimestamp", "mergeComments", "setCommentAccess", "setCommentsRoot"]),
				voteAction({
					commentId: t,
					direction: e
				}) {
					return this.vote({
						articleId: this.articleId,
						commentId: t,
						direction: e
					}).catch(t => {
						this.$toast.error(t.message)
					})
				},
				favoriteAction({
					commentId: t,
					isFavorite: e
				}) {
					const {
						articleId: s
					} = this;
					return this.setFavorite({
						articleId: s,
						commentId: t,
						isFavorite: e
					}).catch(t => {
						this.$toast.error(t.message)
					})
				},
				pinUnpinComment(t) {
					return this.pinComment({
						articleId: this.articleId,
						commentId: t.id,
						isPinned: !t.isPinned
					}).then(() => {
						const e = t.isPinned ? "COMMENT_UNPINNED_SUCCESS" : "COMMENT_PINNED_SUCCESS";
						this.$toast.success(this.msg(e)), this.getPinnedComments(this.articleId)
					}).catch(t => {
						this.$toast.error(t.message)
					})
				},
				toggleRemovedComments() {
					this.isRemovedCommentsHidden = !this.isRemovedCommentsHidden
				},
				toggleUfoNotice() {
					const {
						articleId: t
					} = this, e = this.article && this.article.rulesRemindEnabled ? G["c"] : G["e"];
					return e(t).then(() => {
						this.setArticleRulesRemindStatus({
							articleId: this.articleId,
							status: !this.article.rulesRemindEnabled
						});
						const t = this.article && this.article.rulesRemindEnabled ? this.msg("RULES_REMINDER_SHOW_ACTION_SUCCESS_MESSAGE") : this.msg("RULES_REMINDER_HIDE_ACTION_SUCCESS_MESSAGE");
						this.$toast.success(t)
					}).catch(t => {
						this.$toast.error(t.message)
					})
				},
				onCommentDelete(t) {
					const e = {
						articleId: this.articleId,
						commentId: t
					};
					this.suspendComment(e)
				},
				complaintAction({
					value: t,
					parentId: e
				}) {
					return Object(U["u"])(this.articleId, e, {
						message: t
					}).then(() => {
						this.$toast.success(this.msg("COMMENT_COMPLAINT_SUCCESS"))
					}).catch(t => {
						this.$toast.error(t.message)
					})
				},
				commentSubmitAction({
					value: t,
					parentId: e
				}) {
					const s = {
						articleId: this.articleId,
						parentId: e,
						text: t
					};
					return this.sendComment(s).then(t => {
						t && Object(R["c"])("comment", this.GAAction, this.userAlias)
					}).catch(t => {
						const e = t.data && t.data.text && t.data.text.source && Array.isArray(t.data.text.source);
						throw e ? this.$toast.error(t.data.text.source[0]) : this.$toast.error(t.message), t
					})
				},
				updateCommentsAction() {
					return this.loadNewComments({
						route: this.$route
					})
				},
				onReadComment(t) {
					this.setCommentRead({
						articleId: this.articleId,
						commentId: t
					})
				},
				disableArticleComments(t) {
					const e = window.confirm(this.msg("ARTICLE_DISABLE_COMMENTS_CONFIRM"));
					if (!e) return !1;
					const s = prompt(this.msg("ARTICLE_DISABLE_COMMENTS_REASON"));
					return Object(U["c"])(t, {
						reason: s
					})
				},
				toggleCommentsState() {
					const t = this.article.commentsEnabled ? this.disableArticleComments : U["e"];
					return t(this.articleId).then(() => {
						this.setArticleCommentsStatus({
							articleId: this.articleId,
							status: !this.article.commentsEnabled
						}), this.getComments({
							route: this.$route
						})
					}).catch(t => this.$toast.error(t.message))
				},
				resetCache() {
					return Object(U["t"])(this.articleId).then(() => {
						this.$toast.success(this.msg("ARTICLE_CLEAR_CACHE_SUCCESS_MESSAGE")), setTimeout(() => {
							window.location.reload()
						}, 1e3)
					}).catch(t => this.$toast.error(t.message))
				},
				getCommentLink(t) {
					return `${window.location.origin}${this.$route.path}#comment_${t.id}`
				},
				loadUserData() {
					return Object(U["f"])({
						id: this.articleId,
						hl: this.langOptions.hl
					}).then(t => {
						this.stopHandlerUserData = this.$watch(() => [this.isLoading, this._inactive], ([e, s]) => {
							e || s || (this.applyUserData(t), this.stopHandlerUserData && this.stopHandlerUserData())
						}, {
							immediate: !0
						})
					})
				},
				applyUserData(t) {
					const {
						articleId: e
					} = this, {
						lastCommentTimestamp: s,
						commentRelatedRefs: n,
						commentAccess: a,
						commentDeletedRefs: i,
						commentModeratedRefs: o,
						threads: r
					} = t;
					this.setCommentAccess(a), this.setLastCommentTimestamp(s), this.mergeComments({
						articleId: e,
						comments: n
					}), i && (this.mergeComments({
						articleId: e,
						comments: i
					}), this.setCommentsRoot({
						articleId: e,
						root: r
					})), o && Object.keys(o).sort((t, e) => t.timePublished - e.timePublished).forEach(t => {
						this.addComment({
							articleId: e,
							comment: {
								...o[t],
								isReadonly: !0
							}
						})
					})
				}
			}
		},
			H = W,
			Y = (s("fad9"), Object(p["a"])(H, n, a, !1, null, null, null));
		e["a"] = Y.exports
	},
	eff8: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-user-card",
				class: t.bem("tm-user-card", {
					variant: t.variant
				})
			}, [s("div", {
				staticClass: "tm-user-card__info-container"
			}, [s("div", {
				staticClass: "tm-user-card__header"
			}, [s("div", {
				staticClass: "tm-user-card__header-data"
			}, [s("router-link", {
				staticClass: "tm-user-card__userpic",
				class: "tm-user-card__userpic_size-" + t.avatarSize,
				attrs: {
					to: t.profileRoute
				}
			}, [s("TMEntityImage", {
				attrs: {
					alias: t.user.alias,
					image: t.user.avatarUrl,
					type: "user"
				}
			})], 1), t._v(" "), t.user.isReadonly ? t._e() : s("div", {
				staticClass: "tm-user-card__meta"
			}, [s("TMKarma", {
				staticClass: "tm-user-card__karma",
				attrs: {
					user: t.user
				},
				on: {
					change: t.onKarmaChange
				}
			}), t._v(" "), s("TMRating", {
				staticClass: "tm-user-card__rating",
				attrs: {
					score: t.user.rating,
					title: t.msg("USER_RATING")
				}
			})], 1)], 1)]), t._v(" "), s("div", {
				staticClass: "tm-user-card__info",
				class: t.bem("tm-user-card__info", {
					variant: t.variant
				})
			}, [s("div", {
				staticClass: "tm-user-card__title",
				class: t.bem("tm-user-card__title", {
					variant: t.variant
				})
			}, [t.user.fullname ? s("span", {
				staticClass: "tm-user-card__name",
				class: t.bem("tm-user-card__name", {
					variant: t.variant
				}),
				domProps: {
					innerHTML: t._s(t.user.fullname)
				}
			}) : t._e(), t._v(" "), s("router-link", {
				staticClass: "tm-user-card__nickname",
				class: t.bem("tm-user-card__nickname", {
					variant: t.variant
				}),
				attrs: {
					to: t.profileRoute
				}
			}, [t._v("\n          @" + t._s(t.user.alias) + "\n        ")]), t._v(" "), t.user.isReadonly ? s("sup", {
				staticClass: "tm-user-card__status"
			}, [t._v("\n          " + t._s(t.msg("READ_ONLY")) + "\n        ")]) : t._e()], 1), t._v(" "), s("p", {
				staticClass: "tm-user-card__short-info",
				class: t.bem("tm-user-card__short-info", {
					variant: t.variant
				}),
				domProps: {
					innerHTML: t._s(t.userSpeciality)
				}
			})])]), t._v(" "), s("div", {
				staticClass: "tm-user-card__buttons",
				class: t.bem("tm-user-card__buttons", {
					variant: t.variant
				})
			}, [t.showIssueInviteButton ? s("TMUserInviteControl", {
				staticClass: "tm-user-card__button",
				attrs: {
					user: t.user
				},
				on: {
					invited: t.onUserInvited
				}
			}) : t._e(), t._v(" "), !t.isLoggedIn || t.isItMe || t.user.isReadonly ? t._e() : s("div", {
				staticClass: "tm-user-card__button"
			}, [s("TMButtonFollow", {
				staticClass: "tm-user-card__button-follow",
				attrs: {
					subscribed: t.isSubscribed,
					"use-follow-label": !0
				},
				on: {
					onToggle: t.toggleFollow
				}
			})], 1), t._v(" "), t.showDonateButton ? s("TMButtonBase", {
				staticClass: "tm-user-card__button",
				attrs: {
					"style-size": "medium",
					"style-type": "transparent",
					type: "submit"
				},
				on: {
					click: function (e) {
						return t.$emit("payments")
					}
				}
			}, [t._v("\n      " + t._s(t.msg("ARTICLE_DONATE_BUTTON")) + "\n    ")]) : t._e(), t._v(" "), t.isLoggedIn && !t.isItMe ? s("router-link", {
				staticClass: "tm-user-card__button tm-user-card__button_write",
				attrs: {
					to: t.getConversationLink(t.user.alias)
				}
			}, [s("TMSvgImg", {
				staticClass: "tm-user-card__button-icon",
				attrs: {
					id: "mail"
				}
			})], 1) : t._e(), t._v(" "), t.isSuperAdmin ? s("TMAdministrationLinks", {
				staticClass: "tm-user-card__button",
				attrs: {
					links: t.userLinksItems
				}
			}) : t._e()], 1)])
		},
			a = [],
			i = s("2f62"),
			o = s("884d"),
			r = s("1673"),
			c = s("2e8a"),
			l = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-karma",
					class: t.bem("tm-karma", {
						"allowed-vote": t.isAllowedToVote
					}),
					attrs: {
						title: t.msg("VOTES_COUNT", {
							count: t.votesCount
						})
					}
				}, [t.isAllowedToVote ? s("TMVotesLever", {
					staticClass: "tm-karma__votes-switcher",
					attrs: {
						appearance: "karma",
						"is-loading": t.isKarmaLoading,
						"is-natural": !0,
						score: t.score,
						"vote-state": t.voteState
					},
					on: {
						downvote: function (e) {
							return t.triggerVote(-1)
						},
						upvote: function (e) {
							return t.triggerVote(1)
						}
					}
				}) : s("div", {
					staticClass: "tm-karma__votes",
					class: {
						"tm-karma__votes_positive": t.score > 0, "tm-karma__votes_negative": t.score < 0
					}
				}, [t._v("\n    " + t._s(t.score) + "\n  ")]), t._v(" "), s("div", {
					staticClass: "tm-karma__text"
				}, [t._v("\n    " + t._s(t.msg("POINTS_LABEL_KARMA")) + "\n  ")])], 1)
			},
			u = [],
			m = s("f419"),
			d = s("d7b7"),
			p = s("cee5"),
			_ = {
				name: "TMKarma",
				components: {
					TMVotesLever: m["a"]
				},
				props: {
					user: d["a"]
				},
				data() {
					return {
						isKarmaLoading: !1
					}
				},
				computed: {
					...Object(i["e"])("me", {
						currentUser: t => t.user
					}),
					...Object(i["c"])("i18n", ["langOptions"]),
					score() {
						return this.user.scoreStats && this.user.scoreStats.score || 0
					},
					votesCount() {
						return this.user.scoreStats && this.user.scoreStats.votesCount || 0
					},
					isAllowedToVote() {
						return this.user.relatedData && this.user.relatedData.canVote
					},
					voteState() {
						return this.user.relatedData && this.user.relatedData.vote && this.user.relatedData.vote.value || 0
					}
				},
				methods: {
					...Object(i["b"])("articlesList/karma", ["vote"]),
					...Object(i["b"])("users", ["updateKarmaInfo"]),
					bem: p["a"],
					triggerVote(t) {
						const e = 1 === t ? "up" : "down";
						this.isKarmaLoading = !0, this.vote({
							id: this.user.alias,
							value: t
						}).then(t => {
							const s = {
								direction: e,
								karmaData: t
							};
							this.$emit("change", s), this.updateKarmaInfo({
								userAlias: this.user.alias,
								...s
							}), this.isKarmaLoading = !1
						}).catch(t => {
							let e = null;
							"VOTER_NOT_BE_EVIL" === t.additional[0] && (e = {
								username: this.currentUser.alias
							});
							const s = this.msg("EXTERNAL_" + t.additional[0], e);
							this.isKarmaLoading = !1, this.$toast.error(s)
						})
					}
				}
			},
			h = _,
			g = (s("277e"), s("2877")),
			f = Object(g["a"])(h, l, u, !1, null, null, null),
			b = f.exports,
			T = s("c24c"),
			v = s("b7d0"),
			E = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return !t.isLoading && t.canInvite ? s("TMButtonBase", {
					attrs: {
						"style-size": "medium",
						"style-type": "solid",
						type: "button"
					},
					on: {
						click: t.issueUserInvite
					}
				}, [t._v("\n  " + t._s(t.msg("GIVE_INVITE")) + "\n")]) : t._e()
			},
			S = [],
			O = s("a8a8"),
			C = {
				name: "TMUserInviteControl",
				components: {
					TMButtonBase: o["a"]
				},
				props: {
					user: {
						type: Object,
						required: !0
					}
				},
				data() {
					return {
						isLoading: !0
					}
				},
				computed: {
					...Object(i["e"])("me", {
						currentUser: "user"
					}),
					canInvite() {
						return this.currentUser.availableInvitesCount > 0
					}
				},
				mounted() {
					this.loadInvitesList().then(() => {
						this.isLoading = !1
					}).catch(t => {
						this.isLoading = !1, Object(O["a"])(t)
					})
				},
				methods: {
					...Object(i["b"])("userInvites", ["loadInvitesList"]),
					...Object(i["b"])("me", ["issueInviteByUserAlias"]),
					issueUserInvite() {
						const t = window.confirm(this.msg("CONFIRM_INVITE"));
						return !!t && this.issueInviteByUserAlias(this.user.alias).then(() => {
							this.$toast.success(this.msg("INVITE_HAS_BEEN_SENT")), this.$emit("invited")
						}).catch(t => {
							this.$toast.error(t.message)
						})
					}
				}
			},
			I = C,
			A = Object(g["a"])(I, E, S, !1, null, null, null),
			y = A.exports,
			L = s("6012");
		const P = () => s.e("admin").then(s.bind(null, "6058")),
			N = {
				en: {
					EDIT_PROFILE: "Edit profile via CP",
					GIVE_INVITE: "Ð¡harge an invite",
					INVITE_HAS_BEEN_SENT: "Invite has been charged",
					PPG_COMMENTS: "Force to pass PPG",
					PPG_SMILES: "Force to pass PIS",
					PPG_COMMENTS_HAS_BEEN_SENT: "User has been sent to PPG",
					PPG_SMILES_HAS_BEEN_SENT: "User has been sent to PIS",
					SEE_DRAFTS: "See drafts"
				},
				ru: {
					EDIT_PROFILE: "Ð ÐµÐ´Ð°ÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð¿Ñ€Ð¾Ñ„Ð¸Ð»ÑŒ Ð² CP",
					GIVE_INVITE: "ÐÐ°Ñ‡Ð¸ÑÐ»Ð¸Ñ‚ÑŒ Ð¸Ð½Ð²Ð°Ð¹Ñ‚",
					INVITE_HAS_BEEN_SENT: "Ð˜Ð½Ð²Ð°Ð¹Ñ‚ Ð½Ð°Ñ‡Ð¸ÑÐ»ÐµÐ½",
					PPG_COMMENTS: "Ð—Ð°ÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ Ð¿Ñ€Ð¾Ð¹Ñ‚Ð¸ ÐŸÐŸÐ“",
					PPG_SMILES: "Ð—Ð°ÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ Ð¿Ñ€Ð¾Ð¹Ñ‚Ð¸ ÐŸÐ˜Ð¡",
					PPG_COMMENTS_HAS_BEEN_SENT: "ÐŸÐ¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½ Ð½Ð° ÐŸÐŸÐ“",
					PPG_SMILES_HAS_BEEN_SENT: "ÐŸÐ¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½ Ð½Ð° ÐŸÐ˜Ð¡",
					SEE_DRAFTS: "ÐŸÐ¾ÑÐ¼Ð¾Ñ‚Ñ€ÐµÑ‚ÑŒ Ñ‡ÐµÑ€Ð½Ð¾Ð²Ð¸ÐºÐ¸"
				}
			};
		var R = {
			name: "TMUserCard",
			components: {
				TMButtonFollow: r["a"],
				TMButtonBase: o["a"],
				TMEntityImage: c["a"],
				TMKarma: b,
				TMRating: T["a"],
				TMSvgImg: v["a"],
				TMAdministrationLinks: P,
				TMUserInviteControl: y
			},
			props: {
				user: d["a"],
				isDonateButtonVisible: Boolean,
				inviteButtonVisible: {
					type: Boolean,
					default: !0
				},
				variant: {
					type: String,
					default: ""
				},
				avatarSize: {
					type: Number,
					default: 48
				}
			},
			computed: {
				...Object(i["c"])("me", ["isLoggedIn", "isSuperAdmin", "isReadOnlyOrReadAndComment"]),
				...Object(i["e"])("me", {
					currentUser: "user"
				}),
				userLinksItems() {
					const {
						alias: t
					} = this.user, e = `https://localhost:7103/kek/admin/user/${t}/`;
					return [{
						title: N[this.langOptions.hl].EDIT_PROFILE,
						link: e
					}, {
						title: N[this.langOptions.hl].GIVE_INVITE,
						onclick: this.sendInvite
					}, {
						title: N[this.langOptions.hl].PPG_COMMENTS,
						onclick: t => this.setUserPPG(t, "comments")
					}, {
						title: N[this.langOptions.hl].PPG_SMILES,
						onclick: t => this.setUserPPG(t, "smiles")
					}, {
						title: N[this.langOptions.hl].SEE_DRAFTS,
						onclick: t => this.goToUserDrafts(t)
					}]
				},
				userSpeciality() {
					return this.user.speciality || this.msg("USER")
				},
				isSubscribed() {
					return this.user.relatedData && this.user.relatedData.isSubscribed
				},
				isItMe() {
					return this.isLoggedIn && this.user.alias === this.currentUser.alias
				},
				canShowFollowButton() {
					const {
						isLoggedIn: t,
						isItMe: e,
						isReadOnlyOrReadAndComment: s
					} = this;
					return t && !e && !s
				},
				showIssueInviteButton() {
					const {
						isLoggedIn: t,
						isItMe: e
					} = this;
					return this.inviteButtonVisible && t && !e && this.user.canBeInvited
				},
				showDonateButton() {
					return this.isDonateButtonVisible && this.user && this.user.paymentDetails && Object.values(this.user.paymentDetails).filter(t => !!t).length
				},
				profileRoute() {
					return {
						name: "USER_PROFILE",
						params: {
							login: this.user.alias
						}
					}
				}
			},
			methods: {
				...Object(i["b"])("users", ["loadUserInfo", "loadProfileInfo", "toggleSubscribeStatus"]),
				bem: p["a"],
				onUserInvited() {
					this.loadUserInfo({
						alias: this.user.alias,
						force: !0
					})
				},
				onKarmaChange(t) {
					this.$emit("karmachange", t)
				},
				getConversationLink(t) {
					return {
						name: "CONVERSATION_MESSAGES",
						params: {
							login: t.toLowerCase()
						}
					}
				},
				goToUserDrafts(t) {
					t.preventDefault(), this.$router.push({
						name: "ARTICLES_DRAFTS_LIST_BY_USER",
						params: {
							login: this.user.alias
						}
					})
				},
				sendInvite(t) {
					t.preventDefault(), Object(L["G"])(this.user.alias).then(() => {
						this.$toast.success(N[this.langOptions.hl].INVITE_HAS_BEEN_SENT)
					}).catch(t => {
						this.$toast.error(t.message)
					})
				},
				setUserPPG(t, e) {
					t.preventDefault(), Object(L["Q"])(this.user.alias, e).then(() => {
						const t = `PPG_${e.toUpperCase()}_HAS_BEEN_SENT`;
						this.$toast.success(N[this.langOptions.hl][t])
					}).catch(t => {
						this.$toast.error(t.message)
					})
				},
				toggleFollow() {
					const {
						isSubscribed: t
					} = this.user.relatedData;
					this.toggleSubscribeStatus({
						alias: this.user.alias,
						isSubscribed: t
					}).then(() => {
						this.$emit("change:isSubscribed", this.user.relatedData.isSubscribed)
					}).catch(t => {
						this.$toast.error(t.message)
					})
				}
			}
		},
			M = R,
			w = (s("3647"), Object(g["a"])(M, n, a, !1, null, null, null));
		e["a"] = w.exports
	},
	f0ad: function (t, e, s) { },
	f120: function (t, e, s) { },
	f15e: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-comments-wrapper"
			}, [s("div", {
				staticClass: "tm-comments-wrapper__wrapper"
			}, [s("header", {
				staticClass: "tm-comments-wrapper__header"
			}, [s("h2", {
				staticClass: "tm-comments-wrapper__title"
			}, [t._v("\n        " + t._s(t.msg("ARTICLE_COMMENTS_TITLE")) + "\n        "), t.commentsCount ? s("span", {
				staticClass: "tm-comments-wrapper__comments-count"
			}, [t._v("\n          " + t._s(t.commentsCount) + "\n        ")]) : t._e()]), t._v(" "), t.$slots.headerAside ? s("div", {
				staticClass: "tm-comments-wrapper__header-aside"
			}, [t._t("headerAside")], 2) : t._e()]), t._v(" "), t.$slots.default ? s("div", {
				staticClass: "tm-comments-wrapper__inner"
			}, [t._t("default")], 2) : t._e()]), t._v(" "), t._t("footer")], 2)
		},
			a = [],
			i = {
				name: "TMCommentsWrapper",
				props: {
					commentsCount: {
						type: [String, Number],
						default: null
					}
				}
			},
			o = i,
			r = (s("f5cf"), s("2877")),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["a"] = c.exports
	},
	f1d4: function (t, e, s) {
		"use strict";
		s("a9e1")
	},
	f1fa: function (t, e, s) {
		"use strict";
		s("b6bf")
	},
	f20c: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return t.currentBlockName ? s(t.currentBlock, {
				tag: "component",
				attrs: {
					hubs: t.hubs,
					location: t.location,
					tags: t.tags
				},
				on: {
					loadFailed: t.resetBlock,
					loadedEmpty: t.resetBlock
				}
			}) : t._e()
		},
			a = [],
			i = s("2f62"),
			o = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return !t.isLoading && t.items && 0 !== t.items.length ? s("TMProjectBlock", {
					attrs: {
						"footer-link": t.footerLink,
						"footer-title": t.msg("COURSES_ALL"),
						title: t.msg("COURSES_TITLE"),
						"title-link": t.titleLink,
						variant: "courses"
					},
					on: {
						click: function (e) {
							return t.logGa("courses")
						}
					}
				}, [s("TMProjectBlockItems", {
					attrs: {
						"image-visible": "",
						items: t.items,
						"search-params": t.$options.itemParams
					},
					on: {
						click: function (e) {
							return t.logGa("post")
						}
					}
				})], 1) : t.isLoading ? s("TMPlaceholder", {
					attrs: {
						type: "inset_courses"
					}
				}) : t._e()
			},
			r = [],
			c = s("5188"),
			l = s("d959"),
			u = s("7e83"),
			m = s("996e"),
			d = s("6f23"),
			p = s("4462");
		const _ = {
			medium: "habr_block",
			source: "habr_mob",
			campaign: "courses_postlist"
		};
		var h = {
			name: "TMProjectBlockCourses",
			components: {
				TMProjectBlockItems: u["a"],
				TMProjectBlock: l["a"],
				TMPlaceholder: c["a"]
			},
			itemParams: m["a"].toUtm({
				..._,
				content: "course"
			}),
			props: {
				location: {
					type: String,
					required: !0
				},
				hubs: {
					type: Array,
					default: null
				},
				tags: {
					type: Array,
					default: null
				}
			},
			data() {
				return {
					isLoading: !0,
					items: null
				}
			},
			computed: {
				gaAction() {
					return "career_courses_" + this.location
				},
				titleLink() {
					const t = m["a"].toUtm({
						..._,
						content: "courses"
					}),
						e = new URL("https://localhost:7103/career-habr/courses");
					return Object.keys(t).forEach(s => e.searchParams.append(s, t[s])), e.href
				},
				footerLink() {
					const t = m["a"].toUtm({
						..._,
						content: "courses_all"
					}),
						e = new URL("https://localhost:7103/career-habr/courses");
					return Object.keys(t).forEach(s => e.searchParams.append(s, t[s])), e.href
				}
			},
			mounted() {
				const {
					tags: t,
					hubs: e,
					langOptions: {
						hl: s
					}
				} = this;
				Object(p["a"])({
					tags: t,
					hubs: e,
					hl: s
				}).then(({
					items: t
				}) => {
					this.items = t, this.isLoading = !1, 0 === this.items.length && this.$emit("loadedEmpty")
				}).catch(() => {
					this.$emit("loadFailed"), this.isLoading = !1
				})
			},
			methods: {
				logGa(t) {
					Object(d["c"])("tm_block", this.gaAction, t)
				}
			}
		},
			g = h,
			f = s("2877"),
			b = Object(f["a"])(g, o, r, !1, null, null, null),
			T = b.exports,
			v = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return !t.isLoading && t.items && 0 !== t.items.length ? s("TMProjectBlock", {
					attrs: {
						"footer-link": t.footerLink,
						"footer-title": t.msg("QUESTIONS_ALL"),
						title: t.msg("QUESTIONS_TITLE"),
						"title-link": t.titleLink,
						variant: "questions"
					},
					on: {
						click: function (e) {
							return t.logGa("questions")
						}
					}
				}, [s("TMProjectBlockItems", {
					attrs: {
						items: t.items,
						"search-params": t.$options.itemParams
					},
					on: {
						click: function (e) {
							return t.logGa("post")
						}
					}
				})], 1) : t.isLoading ? s("TMPlaceholder", {
					attrs: {
						type: "inset_questions"
					}
				}) : t._e()
			},
			E = [];
		const S = {
			medium: "habr_block",
			source: "habr_mob",
			campaign: "questions_postlist"
		};
		var O = {
			name: "TMProjectBlockQuestions",
			components: {
				TMProjectBlockItems: u["a"],
				TMProjectBlock: l["a"],
				TMPlaceholder: c["a"]
			},
			itemParams: m["a"].toUtm({
				...S,
				content: "question"
			}),
			props: {
				location: {
					type: String,
					required: !0
				},
				tags: {
					type: Array,
					required: !0
				}
			},
			data() {
				return {
					isLoading: !0,
					items: null
				}
			},
			computed: {
				gaAction() {
					return "qna_" + this.location
				},
				titleLink() {
					const t = m["a"].toUtm({
						...S,
						content: "questions"
					}),
						e = new URL("https://localhost:7103/qna-habr/questions");
					return Object.keys(t).forEach(s => e.searchParams.append(s, t[s])), e.href
				},
				footerLink() {
					const t = m["a"].toUtm({
						...S,
						content: "questions_all"
					}),
						e = new URL("https://localhost:7103/qna-habr/questions");
					return Object.keys(t).forEach(s => e.searchParams.append(s, t[s])), e.href
				}
			},
			mounted() {
				const {
					tags: t,
					langOptions: {
						hl: e
					}
				} = this;
				Object(p["b"])({
					tags: t,
					hl: e
				}).then(({
					items: t
				}) => {
					this.items = t, this.isLoading = !1, 0 === this.items.length && this.$emit("loadedEmpty")
				}).catch(() => {
					this.$emit("loadFailed"), this.isLoading = !1
				})
			},
			methods: {
				logGa(t) {
					Object(d["c"])("tm_block", this.gaAction, t)
				}
			}
		},
			C = O,
			I = Object(f["a"])(C, v, E, !1, null, null, null),
			A = I.exports,
			y = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", [!t.isLoading && t.salaryData ? s("TMProjectBlock", {
					attrs: {
						"footer-link": t.footerLink,
						"footer-title": t.msg("SALARY_ALL"),
						title: t.msg("SALARY_TITLE"),
						"title-link": t.titleLink,
						variant: "salary"
					},
					on: {
						click: function (e) {
							return t.logGa("salary")
						}
					}
				}, [s("TMSalaryDistribution", {
					attrs: {
						"salary-data": t.salaryData
					}
				})], 1) : t.isLoading ? s("TMPlaceholder", {
					attrs: {
						type: "inset_salary"
					}
				}) : t._e()], 1)
			},
			L = [],
			P = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "tm-salary-distribution"
				}, [s("div", {
					staticClass: "tm-salary-distribution__description"
				}, [s("div", {
					staticClass: "tm-salary-distribution__amount",
					domProps: {
						innerHTML: t._s(t.msg("SALARY_DISTRIBUTION_CURRENCY", {
							amount: t.salaryAverageFormatted
						}))
					}
				}), t._v(" "), s("p", {
					staticClass: "tm-salary-distribution__description-text",
					domProps: {
						innerHTML: t._s(t.msg("SALARY_DISTRIBUTION_DESCRIPTION", {
							profilesAmount: t.salaryData.profilesAmount,
							halfYear: t.salaryData.halfYear,
							year: t.salaryData.year
						}))
					}
				})]), t._v(" "), s("div", {
					ref: "salaryChart",
					staticClass: "tm-salary-distribution__salary-chart"
				}, [t.isTooltipShown ? s("TMTooltip", {
					attrs: {
						content: t.tooltipContent,
						"flip-options": t.tooltipFlipOptions,
						placement: "top-start",
						root: t.tooltipRoot
					}
				}) : t._e(), t._v(" "), s("svg", {
					staticClass: "salary-chart",
					attrs: {
						height: t.chartHeight,
						width: t.chartWidth,
						xmlns: "http://www.w3.org/2000/svg"
					}
				}, [s("g", {
					staticClass: "salary-chart__bars"
				}, t._l(t.stats, (function (e, n) {
					return s("rect", {
						key: "bar-" + n + "-" + e.percent,
						ref: "statBar",
						refInFor: !0,
						staticClass: "salary-chart__bar",
						attrs: {
							height: t.getBarHeight(e.percent),
							width: t.barWidth - t.barsGap,
							x: t.barWidth * n + t.xPadding + t.barsGap,
							y: t.chartHeight - t.getBarHeight(e.percent)
						},
						on: {
							mouseout: t.hideTooltip,
							mouseover: function (s) {
								return t.showTooltip(s, e)
							}
						}
					})
				})), 0), t._v(" "), s("g", {
					staticClass: "salary-chart__grid",
					attrs: {
						id: "xGrid"
					}
				}, [s("line", {
					attrs: {
						x1: "15",
						x2: t.chartWidth - t.xPadding,
						y1: t.chartHeight,
						y2: t.chartHeight
					}
				}), t._v(" "), s("line", {
					attrs: {
						x1: "15",
						x2: "15",
						y1: t.chartHeight,
						y2: t.chartHeight + 7
					}
				}), t._v(" "), s("line", {
					attrs: {
						x1: t.chartWidth - t.xPadding,
						x2: t.chartWidth - t.xPadding,
						y1: t.chartHeight,
						y2: t.chartHeight + 7
					}
				})]), t._v(" "), s("g", {
					staticClass: "salary-chart__x-labels"
				}, t._l(t.xLabels, (function (e, n) {
					return s("text", {
						key: "step" + e,
						attrs: {
							x: t.xLabelsStep * n + t.xPadding,
							y: t.chartHeight + 20
						}
					}, [t._v("\n          " + t._s(e) + "k\n        ")])
				})), 0)])], 1)])
			},
			N = [],
			R = s("84a2"),
			M = s.n(R),
			w = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					ref: "tooltip",
					staticClass: "tm-tooltip",
					domProps: {
						innerHTML: t._s(t.content)
					}
				})
			},
			k = [],
			j = s("39c3"),
			D = {
				name: "TMTooltip",
				props: {
					placement: {
						type: String,
						default: "bottom-start"
					},
					offset: {
						type: Array,
						default: () => [0, 8]
					},
					root: {
						type: null,
						required: !0
					},
					content: {
						type: String,
						default: ""
					},
					flipOptions: {
						type: Object,
						default: null
					}
				},
				data() {
					return {
						tooltip: null
					}
				},
				mounted() {
					this.tooltip = Object(j["a"])(this.root, this.$refs.tooltip, {
						placement: this.placement,
						modifiers: [{
							name: "offset",
							options: {
								offset: this.offset
							}
						}, {
							name: "flip",
							options: this.flipOptions
						}]
					}), this.tooltip.update()
				},
				beforeDestroy() {
					this.tooltip && this.tooltip.destroy()
				}
			},
			x = D,
			B = (s("89e2"), Object(f["a"])(x, w, k, !1, null, null, null)),
			$ = B.exports,
			F = {
				name: "TMSalaryDistribution",
				components: {
					TMTooltip: $
				},
				props: {
					salaryData: {
						type: Object,
						required: !0
					}
				},
				data() {
					return {
						tooltipRoot: null,
						tooltipContent: "",
						isTooltipShown: !1,
						chartHeight: 160,
						chartWidth: 420,
						xPadding: 15,
						barsGap: 4
					}
				},
				computed: {
					...Object(i["c"])("global", ["isMobile"]),
					stats() {
						const t = this.salaryData.labels.map(t => t.split("-").map(t => parseInt(t / 1e3, 10) + "k").join(" - "));
						return this.salaryData.data.map((e, s) => ({
							percent: e,
							count: t[s]
						}))
					},
					chartPaddings() {
						return 2 * (this.xPadding + this.barsGap)
					},
					barWidth() {
						return (this.chartWidth - this.chartPaddings) / this.stats.length
					},
					xLabelsStepsCount() {
						return this.isMobile ? this.stats.length / 2 : this.stats.length
					},
					xLabels() {
						const t = [],
							e = this.getRoundedValue(this.salaryData.min),
							s = this.getRoundedValue(this.salaryData.max) + 5,
							n = Math.ceil((s - e) / this.xLabelsStepsCount);
						for (let a = e; a <= s; a += n) t.push(a);
						return t
					},
					xLabelsStep() {
						return (this.chartWidth - this.chartPaddings) / this.xLabelsStepsCount
					},
					salaryAverageFormatted() {
						return this.salaryData.average.toLocaleString("ru-RU")
					},
					tooltipFlipOptions() {
						return {
							boundary: this.$refs.salaryChart,
							fallbackPlacements: ["top-start", "top-end"]
						}
					}
				},
				mounted() {
					window.addEventListener("resize", this.onResizeThrottled, !1), this.onResizeThrottled()
				},
				beforeDestroy() {
					window.removeEventListener("resize", this.onResizeThrottled)
				},
				methods: {
					getRoundedValue(t) {
						return parseInt(parseInt(t, 10) / 1e3, 10)
					},
					getBarHeight(t) {
						const e = Math.abs(this.stats[0].percent),
							s = Math.abs(this.stats[this.stats.length - 1].percent);
						return this.chartHeight * Math.abs(t) / (e + s)
					},
					showTooltip(t, e) {
						this.tooltipRoot = t.target, this.tooltipContent = this.msg("SALARY_DISTRIBUTION_PERCENT", {
							count: e.count,
							percent: e.percent
						}), this.isTooltipShown = !0
					},
					hideTooltip() {
						this.isTooltipShown = !1
					},
					updateChartWidth() {
						const t = this.$refs.salaryChart,
							e = t.getBoundingClientRect().width;
						this.chartWidth = e
					},
					onResizeThrottled: M()((function () {
						this.updateChartWidth()
					}), 100)
				}
			},
			G = F,
			U = (s("e9d7"), Object(f["a"])(G, P, N, !1, null, null, null)),
			V = U.exports;
		const W = {
			medium: "habr_block",
			source: "habr_mob",
			campaign: "salary_postlist"
		};
		var H = {
			name: "TMProjectBlockSalary",
			components: {
				TMPlaceholder: c["a"],
				TMSalaryDistribution: V,
				TMProjectBlock: l["a"]
			},
			inheritAttrs: !1,
			props: {
				location: {
					type: String,
					required: !0
				}
			},
			data() {
				return {
					isLoading: !0,
					salaryData: null
				}
			},
			computed: {
				baseUrl() {
					return this.salaryData.sourceUrl
				},
				titleLink() {
					const t = m["a"].toUtm({
						...W,
						content: "salary"
					}),
						e = new URL(this.baseUrl);
					return Object.keys(t).forEach(s => e.searchParams.append(s, t[s])), e.href
				},
				footerLink() {
					const t = m["a"].toUtm({
						...W,
						content: "salary_all"
					}),
						e = new URL(this.baseUrl);
					return Object.keys(t).forEach(s => e.searchParams.append(s, t[s])), e.href
				}
			},
			mounted() {
				Object(p["c"])().then(t => {
					this.isLoading = !1, this.salaryData = t, t || this.$emit("loadedEmpty")
				}).catch(() => {
					this.isLoading = !1, this.$emit("loadFailed")
				})
			},
			methods: {
				logGa(t) {
					Object(d["c"])("tm_block", "career_" + this.location, t)
				}
			}
		},
			Y = H,
			q = Object(f["a"])(Y, y, L, !1, null, null, null),
			K = q.exports,
			z = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return !t.isLoading && t.items && 0 !== t.items.length ? s("TMProjectBlock", {
					attrs: {
						"footer-link": t.footerLink,
						"footer-title": t.msg("TASKS_ALL"),
						title: t.msg("TASKS_TITLE"),
						"title-link": t.titleLink,
						variant: "tasks"
					},
					on: {
						click: function (e) {
							return t.logGa("tasks")
						}
					}
				}, [s("TMProjectBlockItems", {
					attrs: {
						items: t.items,
						"search-params": t.$options.itemParams
					},
					on: {
						click: function (e) {
							return t.logGa("post")
						}
					}
				})], 1) : t.isLoading ? s("TMPlaceholder", {
					attrs: {
						type: "inset_tasks"
					}
				}) : t._e()
			},
			X = [];
		const J = {
			medium: "habr_block",
			source: "habr_mob",
			campaign: "tasks_postlist"
		};
		var Q = {
			name: "TMProjectBlockTasks",
			components: {
				TMProjectBlockItems: u["a"],
				TMProjectBlock: l["a"],
				TMPlaceholder: c["a"]
			},
			itemParams: m["a"].toUtm({
				...J,
				content: "task"
			}),
			props: {
				location: {
					type: String,
					required: !0
				},
				hubs: {
					type: Array,
					default: null
				},
				tags: {
					type: Array,
					default: null
				}
			},
			data() {
				return {
					isLoading: !0,
					items: null
				}
			},
			computed: {
				gaAction() {
					return "freelance_" + this.location
				},
				titleLink() {
					const t = m["a"].toUtm({
						...J,
						content: "tasks"
					}),
						e = new URL("https://localhost:7103/freelance-habr/tasks");
					return Object.keys(t).forEach(s => e.searchParams.append(s, t[s])), e.href
				},
				footerLink() {
					const t = m["a"].toUtm({
						...J,
						content: "tasks_all"
					}),
						e = new URL("https://localhost:7103/freelance-habr/tasks");
					return Object.keys(t).forEach(s => e.searchParams.append(s, t[s])), e.href
				}
			},
			mounted() {
				const {
					tags: t,
					hubs: e,
					langOptions: {
						hl: s
					}
				} = this;
				Object(p["d"])({
					tags: t,
					hubs: e,
					hl: s
				}).then(({
					items: t
				}) => {
					this.items = t, this.isLoading = !1, 0 === this.items.length && this.$emit("loadedEmpty")
				}).catch(() => {
					this.$emit("loadFailed"), this.isLoading = !1
				})
			},
			methods: {
				logGa(t) {
					Object(d["c"])("tm_block", this.gaAction, t)
				}
			}
		},
			Z = Q,
			tt = Object(f["a"])(Z, z, X, !1, null, null, null),
			et = tt.exports,
			st = s("3619"),
			nt = {
				name: "TMRandomProjectBlock",
				props: {
					blocks: {
						type: Object,
						default: () => ({
							courses: T,
							questions: A,
							salary: K,
							tasks: et,
							vacancies: st["a"]
						})
					},
					location: {
						type: String,
						required: !0
					},
					hubs: {
						type: Array,
						default: null
					},
					tags: {
						type: Array,
						default: null
					},
					blockId: {
						type: String,
						required: !0
					}
				},
				data() {
					return {
						currentBlockName: null,
						failedBlocks: []
					}
				},
				computed: {
					...Object(i["c"])("projectsBlocks", ["getRandomBlockName", "getRegisteredBlockById"]),
					currentBlock() {
						return this.blocks[this.currentBlockName]
					}
				},
				created() {
					this.currentBlockName = this.getRegisteredBlockById(this.blockId), this.currentBlockName || (this.currentBlockName = this.getRandomBlockName(Object.keys(this.blocks)), this.currentBlockName && this.registerBlock({
						name: this.currentBlockName,
						id: this.blockId
					}))
				},
				beforeDestroy() {
					this.unregisterBlock(this.currentBlockName), this.failedBlocks.forEach(t => this.unregisterBlock(t))
				},
				deactivated() {
					this.failedBlocks.forEach(t => this.unregisterBlock(t))
				},
				methods: {
					...Object(i["d"])("projectsBlocks", ["registerBlock", "unregisterBlock"]),
					resetBlock() {
						this.failedBlocks.push(this.currentBlockName), this.currentBlockName = this.getRandomBlockName(Object.keys(this.blocks)), this.currentBlockName && this.registerBlock({
							name: this.currentBlockName,
							id: this.blockId
						})
					}
				}
			},
			at = nt,
			it = Object(f["a"])(at, n, a, !1, null, null, null);
		e["a"] = it.exports
	},
	f29c: function (t, e, s) {
		"use strict";
		s("c31d")
	},
	f2a8: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-error-message"
			}, [s("h1", {
				staticClass: "tm-error-message__title"
			}, [t._t("title")], 2), t._v(" "), s("div", {
				staticClass: "tm-error-message__body"
			}, [t._t("message")], 2), t._v(" "), s("div", [t._t("button")], 2)])
		},
			a = [],
			i = {
				name: "TMErrorMessage"
			},
			o = i,
			r = (s("6376"), s("2877")),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["a"] = c.exports
	},
	f2ed: function (t, e, s) { },
	f3a9: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("TMComment", {
				attrs: {
					comment: t.comment,
					"is-comment-controls-shown": t.isCommentControlsShown,
					"popup-toggle-visible": t.popupToggleVisible,
					"should-display-status": t.shouldDisplayStatus,
					"user-popover-enabled": t.userPopoverEnabled
				},
				scopedSlots: t._u([{
					key: "comment-link",
					fn: function (e) {
						var n = e.datetimeStr;
						return [t._t("comment-link", (function () {
							return [s("TMArticleCommentsLink", {
								staticClass: "tm-article-comment__link",
								attrs: {
									article: t.comment.post,
									"comment-id": t.comment.id
								}
							}, [t._v("\n        " + t._s(t.msg("DATE_FORMAT", n)) + "\n      ")])]
						}), {
							datetimeStr: n
						})]
					}
				}], null, !0)
			})
		},
			a = [],
			i = s("0414"),
			o = s("79f0"),
			r = {
				name: "TMArticleComment",
				components: {
					TMArticleCommentsLink: i["a"],
					TMComment: o["a"]
				},
				props: {
					comment: {
						type: Object,
						required: !0
					},
					isCommentControlsShown: {
						type: Boolean,
						default: !0
					},
					shouldDisplayStatus: {
						type: Boolean,
						default: !0
					},
					userPopoverEnabled: Boolean,
					popupToggleVisible: Boolean
				}
			},
			c = r,
			l = (s("926d"), s("2877")),
			u = Object(l["a"])(c, n, a, !1, null, null, null);
		e["a"] = u.exports
	},
	f3bd: function (t, e, s) { },
	f3f3: function (t, e, s) { },
	f419: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-votes-lever",
				class: t.bem("tm-votes-lever", {
					appearance: t.appearance
				}),
				attrs: {
					title: t.title
				}
			}, [t.canVotePlus ? s("button", {
				staticClass: "tm-votes-lever__button",
				attrs: {
					disabled: t.voteState > 0 || t.isLoading,
					title: t.msg("DATA_ICONS_LIKE"),
					type: "button"
				},
				on: {
					click: t.upvote
				}
			}, [s("TMSvgImg", {
				staticClass: "tm-votes-lever__icon",
				class: {
					"tm-votes-lever__icon_upvote": t.voteState > 0
				},
				attrs: {
					id: "counter-vote",
					size: "24"
				}
			})], 1) : t._e(), t._v(" "), s("div", {
				staticClass: "tm-votes-lever__score",
				class: t.bem("tm-votes-lever__score", {
					appearance: t.appearance
				}),
				on: {
					click: function (e) {
						return t.$emit("scoreClick")
					}
				}
			}, [t.isLoading ? s("TMCircleLoader", {
				attrs: {
					"circle-height": 12,
					"circle-width": 12,
					height: 18,
					width: 12
				}
			}) : t._t("default", (function () {
				return [s("span", {
					staticClass: "tm-votes-lever__score-counter",
					class: {
						"tm-votes-lever__score-counter_negative": t.score < 0, "tm-votes-lever__score-counter_positive": t.score > 0
					}
				}, [t._v("\n        " + t._s(t.formatNumber(t.score)) + "\n      ")])]
			}))], 2), t._v(" "), t.canVoteMinus ? s("button", {
				staticClass: "tm-votes-lever__button",
				attrs: {
					disabled: t.voteState < 0 || t.isLoading,
					title: t.msg("DATA_ICONS_DISLIKE"),
					type: "button"
				},
				on: {
					click: t.downvote
				}
			}, [s("TMSvgImg", {
				staticClass: "tm-votes-lever__icon tm-votes-lever__icon_arrow-down",
				class: {
					"tm-votes-lever__icon_downvote": t.voteState < 0
				},
				attrs: {
					id: "counter-vote",
					size: "24"
				}
			})], 1) : t._e()])
		},
			a = [],
			i = s("68eb"),
			o = s("b7d0"),
			r = s("cee5"),
			c = s("6be8"),
			l = {
				name: "TMVotesLever",
				components: {
					TMCircleLoader: i["a"],
					TMSvgImg: o["a"]
				},
				props: {
					score: {
						required: !0,
						type: Number
					},
					voteState: {
						required: !0,
						type: Number
					},
					votesCount: {
						type: Number,
						default: 0
					},
					noVotesTitle: {
						type: String,
						default: null
					},
					appearance: {
						type: String,
						required: !0,
						validator(t) {
							return ["article", "karma", "comment"].includes(t)
						}
					},
					isLoading: {
						type: Boolean,
						default: !1
					},
					isPlusified: {
						type: Boolean,
						default: !1
					},
					canVoteMinus: {
						type: Boolean,
						default: !0
					},
					canVotePlus: {
						type: Boolean,
						default: !0
					}
				},
				computed: {
					title() {
						return this.votesCount > 0 ? this.msg("ARTICLE_REASON_TOTAL", {
							total: this.votesCount,
							positive: (this.votesCount + this.score) / 2,
							negative: (this.votesCount - this.score) / 2
						}) : this.noVotesTitle
					}
				},
				methods: {
					bem: r["a"],
					upvote(t) {
						this.$emit("upvote"), t.target.blur()
					},
					downvote(t) {
						this.$emit("downvote"), t.target.blur()
					},
					formatNumber(t) {
						return this.isPlusified ? Object(c["b"])(t) : Object(c["a"])(t)
					}
				}
			},
			u = l,
			m = (s("f1d4"), s("2877")),
			d = Object(m["a"])(u, n, a, !1, null, null, null);
		e["a"] = d.exports
	},
	f4b8: function (t, e, s) {
		"use strict";
		s.r(e);
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				ref: "swiper",
				staticClass: "swiper-container"
			}, [s("div", {
				staticClass: "swiper-wrapper"
			}, [t._t("default")], 2), t._v(" "), t.pagination ? s("div", {
				staticClass: "swiper-pagination"
			}) : t._e()])
		},
			a = [],
			i = s("6d3b"),
			o = s("5dc8"),
			r = s("d17a");
		i["a"].use([o["a"], r["a"]]);
		var c = {
			name: "TMSwiper",
			props: {
				slidesPerView: {
					type: [Number, String],
					default: "auto"
				},
				pagination: {
					type: [Boolean, Object],
					default: null
				},
				autoHeight: {
					type: Boolean,
					default: !1
				},
				autoplay: {
					type: Object,
					default() {
						return {
							enabled: !1
						}
					}
				}
			},
			data() {
				return {
					swiperInstance: null
				}
			},
			mounted() {
				const {
					autoHeight: t,
					autoplay: e,
					slidesPerView: s,
					pagination: n
				} = this;
				let a = {
					el: ".swiper-pagination",
					clickable: !0
				};
				"object" === typeof n && (a = {
					...a,
					...n
				});
				const o = {
					slidesPerView: s,
					pagination: a,
					autoHeight: t,
					autoplay: e
				};
				this.swiperInstance = new i["a"](this.$refs.swiper, o)
			},
			beforeDestroy() {
				this.swiperInstance.destroy()
			}
		},
			l = c,
			u = (s("30ab"), s("2877")),
			m = Object(u["a"])(l, n, a, !1, null, null, null);
		e["default"] = m.exports
	},
	f5cf: function (t, e, s) {
		"use strict";
		s("be13")
	},
	f6e7: function (t, e, s) {
		"use strict";
		s("42d8")
	},
	f810: function (t, e, s) { },
	f877: function (t, e, s) {
		"use strict";
		s("d71d")
	},
	f889: function (t, e, s) {
		"use strict";
		s("b994")
	},
	f8e8: function (t, e, s) {
		"use strict";
		s("d0d6")
	},
	fa00: function (t, e, s) {
		"use strict";
		s("5c02")
	},
	fa58: function (t, e, s) {
		"use strict";
		s.r(e);
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-articles-subpage"
			}, [s("TMPinnedPost"), t._v(" "), s("TMArticlesFeed", {
				scopedSlots: t._u([{
					key: "afterArticle",
					fn: function (e) {
						var n = e.position,
							a = e.currentPage;
						return [1 !== n || 1 !== a || t.isFlEnglish ? t._e() : s("TMNewsBlock", {
							key: "news_block_1",
							attrs: {
								id: "news_block_1",
								"data-navigatable": "",
								"flow-name": t.flowName,
								"hub-name": t.hubName,
								tabindex: "0"
							}
						})]
					}
				}])
			})], 1)
		},
			a = [],
			i = s("0fca"),
			o = s("a7dc"),
			r = s("23bd"),
			c = {
				components: {
					TMNewsBlock: o["a"],
					TMArticlesFeed: i["a"],
					TMPinnedPost: r["a"]
				},
				asyncData({
					store: t,
					route: e
				}) {
					return t.dispatch("articlesList/loadArticlesList", {
						route: e
					})
				},
				computed: {
					isFlEnglish() {
						return "en" === this.langOptions.fl
					},
					hubName() {
						return this.$route.params.hubName
					},
					flowName() {
						return this.$route.params.flowName
					}
				}
			},
			l = c,
			u = s("2877"),
			m = Object(u["a"])(l, n, a, !1, null, null, null);
		e["default"] = m.exports
	},
	fad9: function (t, e, s) {
		"use strict";
		s("fe01")
	},
	fb49: function (t, e, s) { },
	fb7a: function (t, e, s) {
		"use strict";
		s("06ce")
	},
	fce7: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-page-width",
				class: {
					"tm-page-width_no-padding": t.noPadding
				}
			}, [t._t("default")], 2)
		},
			a = [],
			i = {
				name: "TMPageWidth",
				props: {
					noPadding: {
						type: Boolean,
						default: !1
					}
				}
			},
			o = i,
			r = (s("a300"), s("2877")),
			c = Object(r["a"])(o, n, a, !1, null, null, null);
		e["a"] = c.exports
	},
	fd6e: function (t, e, s) {
		"use strict";
		s("4a9c")
	},
	fd95: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-company-snippet"
			}, [s("router-link", {
				staticClass: "tm-company-snippet__logo-link",
				attrs: {
					to: t.companyProfileRoute
				}
			}, [s("TMEntityImage", {
				attrs: {
					alias: t.company.alias,
					image: t.company.imageUrl,
					size: 40,
					type: "company"
				}
			})], 1), t._v(" "), s("div", {
				staticClass: "tm-company-snippet__info"
			}, [s("router-link", {
				staticClass: "tm-company-snippet__title",
				class: {
					"tm-company-snippet__title_subscribed": t.isSubscribed
				},
				attrs: {
					to: t.companyProfileRoute
				},
				domProps: {
					innerHTML: t._s(t.company.titleHtml)
				}
			}), t._v(" "), s("div", {
				staticClass: "tm-company-snippet__description",
				domProps: {
					innerHTML: t._s(t.company.descriptionHtml || t.msg("COMPANY"))
				}
			})], 1)], 1)
		},
			a = [],
			i = s("2e8a"),
			o = {
				name: "TMCompanySnippet",
				components: {
					TMEntityImage: i["a"]
				},
				props: {
					company: {
						type: Object,
						default: null
					}
				},
				computed: {
					companyProfileRoute() {
						return {
							name: "COMPANY_PROFILE",
							params: {
								name: this.company.alias,
								hl: this.$route.params.hl
							}
						}
					},
					isSubscribed() {
						return this.company.relatedData && this.company.relatedData.isSubscribed
					}
				}
			},
			r = o,
			c = (s("a0a5"), s("2877")),
			l = Object(c["a"])(r, n, a, !1, null, null, null);
		e["a"] = l.exports
	},
	fe01: function (t, e, s) { },
	fe04: function (t, e, s) {
		"use strict";
		var n = function () {
			var t, e = this,
				s = e.$createElement,
				n = e._self._c || s;
			return n("div", {
				staticClass: "tm-article-snippet"
			}, [n("div", {
				staticClass: "tm-article-snippet__meta-container"
			}, [n("div", {
				staticClass: "tm-article-snippet__meta"
			}, [e.article.author && !e.isMegapostV1 ? n("TMUserInfo", {
				staticClass: "tm-article-snippet__author",
				attrs: {
					author: e.article.author,
					avatar: e.article.author.avatarUrl
				}
			}) : e._e(), e._v(" "), n("span", {
				staticClass: "tm-article-snippet__datetime-published",
				class: {
					"tm-article-snippet__datetime-published_megapost": e.isMegapostV1
				}
			}, [e.article.timePublished ? n("TMDatetime", {
				attrs: {
					date: new Date(e.article.timePublished),
					"show-full-date-time": ""
				}
			}) : e.article.plannedPublishTime ? n("span", [e._v("\n          " + e._s(e.msg("ARTICLE_PLANNED")) + "\n          "), n("TMDatetime", {
				attrs: {
					"absolute-date": "",
					date: new Date(e.article.plannedPublishTime),
					"show-full-date-time": ""
				}
			})], 1) : n("span", {
				domProps: {
					textContent: e._s(e.msg("ARTICLE_NEVER_PUBLISHED"))
				}
			})], 1)], 1), e._v(" "), e.showModeratorCheck || e.showEdit ? n("div", {
				staticClass: "tm-article-snippet__controls"
			}, [e.showModeratorCheck && e.article.checked ? n("TMSvgImg", {
				staticClass: "tm-article-snippet__moderation",
				attrs: {
					id: "moderator-check"
				}
			}) : e._e(), e._v(" "), e.showEdit ? [e.isNewEditor ? n("router-link", {
				staticClass: "tm-article-snippet__edit",
				attrs: {
					to: e.editPublicationRoute
				}
			}, [n("TMSvgImg", {
				staticClass: "icon_edit-post",
				attrs: {
					id: "edit",
					size: "20"
				}
			})], 1) : n("a", {
				staticClass: "tm-article-snippet__edit",
				attrs: {
					href: e.desktopEditPublicationRoute,
					target: "_blank"
				}
			}, [n("TMSvgImg", {
				staticClass: "icon_edit-post",
				attrs: {
					id: "edit",
					size: "20"
				}
			})], 1)] : e._e(), e._v(" "), e.canDeleteDraft ? n("button", {
				staticClass: "tm-article-snippet__delete",
				attrs: {
					title: e.msg("ARTICLE_DRAFT_DELETE")
				},
				on: {
					click: function (t) {
						return e.$emit("delete")
					}
				}
			}, [n("TMSvgImg", {
				staticClass: "icon_edit-post",
				attrs: {
					id: "trash",
					size: "20",
					title: e.msg("ARTICLE_DRAFT_DELETE")
				}
			})], 1) : e._e()], 2) : e._e()]), e._v(" "), n(e.tag, {
				tag: "component",
				staticClass: "tm-article-snippet__title",
				class: (t = {}, t["tm-article-snippet__title_" + e.tag] = !0, t["tm-article-snippet__title_megapost"] = e.isMegapostV1, t),
				attrs: {
					lang: e.lang
				}
			}, [e.useLink ? n("TMArticleLink", {
				staticClass: "tm-article-snippet__title-link",
				attrs: {
					article: e.article,
					"data-article-link": ""
				}
			}, [n("span", {
				domProps: {
					innerHTML: e._s(e.article.titleHtml)
				}
			})]) : n("span", {
				domProps: {
					innerHTML: e._s(e.article.titleHtml)
				}
			})], 1), e._v(" "), e.showHubs && e.article.hubs && e.article.hubs.length ? n("div", {
				staticClass: "tm-article-snippet__hubs"
			}, e._l(e.article.hubs, (function (t, s) {
				return n("span", {
					key: "hub_" + s,
					staticClass: "tm-article-snippet__hubs-item",
					class: {
						"tm-article-snippet__hubs-item_megapost": e.isMegapostV1
					}
				}, [n("TMHubLink", {
					staticClass: "tm-article-snippet__hubs-item-link",
					class: {
						"tm-article-snippet__hubs-item-link_megapost": e.isMegapostV1, "tm-article-snippet__hubs-item-link_subscribed": t.relatedData && t.relatedData.isSubscribed
					},
					attrs: {
						hub: t
					}
				}, [n("span", {
					domProps: {
						textContent: e._s(t.title)
					}
				}), e._v(" "), t.isProfiled ? n("span", {
					staticClass: "tm-article-snippet__profiled-hub",
					attrs: {
						title: e.msg("PROFILED_HUB")
					}
				}, [e._v("*")]) : e._e()])], 1)
			})), 0) : e._e(), e._v(" "), e.showLabels && e.article && e.article.postLabels.length ? n("div", {
				staticClass: "tm-article-snippet__labels"
			}, e._l(e.article.postLabels, (function (t) {
				return n("div", {
					key: t.type,
					staticClass: "tm-article-snippet__label",
					class: e.bem("tm-article-snippet__label", {
						variant: t.type
					})
				}, ["textruCheck" === t.type && e.isSuperAdmin ? n("a", {
					attrs: {
						href: t.data.url,
						target: "_blank"
					}
				}, [e._v("\n        " + e._s(e.msg("ARTICLE_LABEL_" + t.type)) + "\n      ")]) : t.type && t.type.indexOf("technotext") >= 0 ? n("router-link", {
					attrs: {
						to: {
							name: "ARTICLES_LIST_TECHNOTEXT_ALL"
						}
					}
				}, [e._v("\n        " + e._s(e.msg("ARTICLE_LABEL_" + t.type)) + "\n      ")]) : t.data && t.data.url ? n("a", {
					attrs: {
						href: t.data.url,
						target: "_blank"
					}
				}, [e._v("\n        " + e._s(e.msg("ARTICLE_LABEL_" + t.type)) + "\n      ")]) : "megapostType" === t.type && t.data.value ? n("span", [e._v("\n        " + e._s(e.msg("ARTICLE_LABEL_MEGAPOST_megapost")) + "\n      ")]) : n("span", [e._v("\n        " + e._s(e.msg("ARTICLE_LABEL_" + t.type)) + "\n      ")])], 1)
			})), 0) : e._e(), e._v(" "), e.article.moderationComment ? n("TMNotice", {
				attrs: {
					type: "warning"
				},
				scopedSlots: e._u([{
					key: "icon",
					fn: function () {
						return [n("TMWarningIcon", {
							staticClass: "tm-article__moderation-comment-icon"
						})]
					},
					proxy: !0
				}, {
					key: "title",
					fn: function () {
						return [n("div", {
							staticClass: "tm-article__moderation-comment-header"
						}, [n("div", {
							staticClass: "tm-article__moderation-comment-title"
						}, [e._v("\n          " + e._s(e.msg("ARTICLE_MODERATOR_MESSAGE")) + "\n        ")]), e._v(" "), e.isDesktop ? n("TMDatetime", {
							attrs: {
								date: new Date(e.article.moderationComment.timeCreated),
								"show-full-date-time": ""
							}
						}) : e._e()], 1)]
					},
					proxy: !0
				}], null, !1, 1832162755)
			}, [e._v(" "), e._v(" "), n("div", {
				staticClass: "tm-article__moderation-comment-body",
				domProps: {
					innerHTML: e._s(e.article.moderationComment.textHtml)
				}
			})]) : e._e(), e._v(" "), e.showLead && e.article.leadData ? n("div", {
				staticClass: "tm-article-body tm-article-snippet__lead"
			}, [e.article.leadData.image ? n("div", {
				staticClass: "tm-article-snippet__cover",
				class: e.objectFitClass
			}, [n("img", {
				staticClass: "tm-article-snippet__lead-image",
				style: e.objectPositionStyle,
				attrs: {
					src: e.article.leadData.image.url
				}
			})]) : e.article.leadData.imageUrl ? n("img", {
				staticClass: "tm-article-snippet__lead-image",
				attrs: {
					src: e.article.leadData.imageUrl
				}
			}) : e._e(), e._v(" "), e.article.leadData.textHtml ? n("TMArticleFormattedBody", {
				attrs: {
					"article-text": e.article.leadData.textHtml,
					version: e.editorVersion
				}
			}) : e._e(), e._v(" "), e.article.leadData.buttonTextHtml ? n("TMArticleLink", {
				staticClass: "tm-article-snippet__readmore",
				attrs: {
					article: e.article
				}
			}, [n("span", {
				domProps: {
					innerHTML: e._s(e.article.leadData.buttonTextHtml)
				}
			})]) : e._e()], 1) : e._e()], 1)
		},
			a = [],
			i = s("2f62"),
			o = s("d4a6"),
			r = s("8819"),
			c = s("8fab"),
			l = s("8dbe"),
			u = s("e4d1"),
			m = s("b7d0"),
			d = s("31ba"),
			p = s("cee5"),
			_ = s("5339"),
			h = s("18e7");
		const g = () => s.e("chunk-2d228e2b").then(s.t.bind(null, "daa9", 7));
		var f = {
			name: "TMArticleSnippet",
			components: {
				TMDatetime: c["a"],
				TMNotice: u["a"],
				TMSvgImg: m["a"],
				TMUserInfo: d["a"],
				TMHubLink: l["a"],
				TMArticleLink: r["a"],
				TMWarningIcon: g,
				TMArticleFormattedBody: o["a"]
			},
			props: {
				article: {
					default: () => { },
					type: Object
				},
				tag: {
					type: String,
					default: "h2"
				},
				useLink: {
					type: Boolean,
					default: !1
				},
				fullArticle: {
					type: Boolean,
					default: !1
				},
				lang: {
					type: String,
					default: null
				}
			},
			computed: {
				...Object(i["c"])("articlesList", ["getArticleView"]),
				...Object(i["c"])("global", ["isDesktop"]),
				...Object(i["c"])("me", ["isSuperAdmin"]),
				isMegapostV1() {
					return "megaproject" === this.article.postType && 1 === this.editorVersion
				},
				isMegapostV2() {
					return "megaproject" === this.article.postType && 2 === this.editorVersion
				},
				showHubs() {
					return this.fullArticle || "cards" === this.getArticleView
				},
				showLabels() {
					return this.fullArticle || "cards" === this.getArticleView || this.isMegapostV2
				},
				showLead() {
					return !this.fullArticle && "cards" === this.getArticleView
				},
				editorVersion() {
					return parseInt(this.article.editorVersion, 10)
				},
				leadDataImage() {
					const {
						article: {
							leadData: t
						}
					} = this;
					return t && t.image
				},
				objectFitClass() {
					return this.leadDataImage && this.leadDataImage.fit && "tm-article-snippet__cover_" + this.leadDataImage.fit
				},
				objectPositionStyle() {
					return this.leadDataImage && `object-position: ${this.leadDataImage.positionX}% ${this.leadDataImage.positionY}%`
				},
				showEdit() {
					const {
						relatedData: t
					} = this.article;
					return t && t.canEdit && !this.isMegapost
				},
				isNewEditor() {
					const t = parseInt(this.article.editorVersion, 10);
					return 2 === t
				},
				showModeratorCheck() {
					return this.isSuperAdmin
				},
				editPublicationRoute() {
					return "megaproject" === this.article.postType && this.isNewEditor ? {
						name: "PUBLICATION_MEGAPOST_EDIT",
						params: {
							postId: this.article.id
						}
					} : {
						name: "sandbox" === this.article.postType ? "PUBLICATION_EDIT_SANDBOX" : "PUBLICATION_EDIT",
						params: {
							postId: this.article.id
						}
					}
				},
				desktopEditPublicationRoute() {
					return this.isMegapostV1 ? Object(h["a"])(this.article.id) : Object(_["a"])(this.article)
				},
				canDeleteDraft() {
					return "draft" === this.article.status && !this.article.timePublished
				}
			},
			methods: {
				bem: p["a"],
				getDataTestID(t) {
					const e = "sandbox" === this.$route.meta.pageType || this.$route.meta.isSandboxPage;
					if (!e) return null;
					const s = "sandbox";
					return `${s}_article_${t}`
				}
			}
		},
			b = f,
			T = (s("64ee"), s("2877")),
			v = Object(T["a"])(b, n, a, !1, null, null, null);
		e["a"] = v.exports
	},
	ff3c: function (t, e, s) {
		"use strict";
		var n = function () {
			var t = this,
				e = t.$createElement,
				s = t._self._c || e;
			return s("div", {
				staticClass: "tm-page",
				class: {
					"tm-page_wide": t.wide, "tm-page_no-top-margin": t.noTopMargin
				}
			}, [s(t.wide ? "div" : "TMPageWidth", {
				tag: "component",
				attrs: {
					"no-padding": t.isTablet
				}
			}, [t.$slots.header ? s("div", {
				staticClass: "tm-page__header"
			}, [t._t("header")], 2) : t._e(), t._v(" "), s("div", {
				staticClass: "tm-page__wrapper"
			}, [s("div", {
				staticClass: "tm-page__main",
				class: {
					"tm-page__main_has-sidebar": Boolean(t.$slots.sidebar)
				}
			}, [s("TMPullToRefresh", {
				attrs: {
					config: {
						pullDownHeight: 60
					},
					"on-refresh": t.refreshData
				}
			}, [t._t("default")], 2)], 1), t._v(" "), t.$slots.sidebar ? s("div", {
				staticClass: "tm-page__sidebar"
			}, [t._t("sidebar")], 2) : t._e()])])], 1)
		},
			a = [],
			i = s("2f62"),
			o = s("fce7"),
			r = function () {
				var t = this,
					e = t.$createElement,
					s = t._self._c || e;
				return s("div", {
					staticClass: "pull-down"
				}, [s("div", {
					staticClass: "pull-down__header",
					style: {
						height: t.pullDown.height + "px"
					}
				}, [s("div", {
					staticClass: "pull-down__content",
					style: t.pullDownContentStyle
				}, [t.isLoading ? s("TMSvgImg", {
					staticClass: "icon_refresh pull-down_circle-animate",
					attrs: {
						id: "refresh",
						size: "24"
					}
				}) : s("TMSvgImg", {
					class: t.labelClass,
					attrs: {
						id: "pull-arrow",
						size: "24"
					}
				})], 1)]), t._v(" "), t._t("default")], 2)
			},
			c = [],
			l = s("b7d0");
		const u = {
			ERROR: -1,
			START: 0,
			READY: 1,
			REFRESH: 2
		},
			m = {
				error: "",
				start: "pull-down__arrow",
				ready: "pull-down__arrow_down",
				loading: ""
			},
			d = "height .2s ease";
		var p = {
			name: "TMPullToRefresh",
			components: {
				TMSvgImg: l["a"]
			},
			props: {
				onRefresh: {
					type: Function,
					required: !0
				},
				config: {
					type: Object,
					default: () => { }
				}
			},
			data() {
				return {
					pullDown: {
						status: 0,
						height: 0,
						msg: ""
					},
					canPull: !1,
					currentConfig: this.config,
					lastY: null,
					touchPosition: {
						start: 0,
						distance: 0
					}
				}
			},
			computed: {
				label() {
					return this.pullDown.status === u.ERROR ? this.pullDown.msg : this.customLabels[this.pullDown.status + 1]
				},
				isLoading() {
					return this.pullDown.status === u.REFRESH
				},
				labelClass() {
					return this.pullDown.status === u.ERROR ? this.pullDown.msg : this.customLabels[this.pullDown.status + 1]
				},
				customLabels() {
					const t = void 0 !== this.currentConfig.errorLabel ? this.currentConfig.errorLabel : m.error,
						e = void 0 !== this.currentConfig.startLabel ? this.currentConfig.startLabel : m.start,
						s = void 0 !== this.currentConfig.readyLabel ? this.currentConfig.readyLabel : m.ready,
						n = void 0 !== this.currentConfig.loadingLabel ? this.currentConfig.loadingLabel : m.loading;
					return [t, e, s, n]
				},
				pullDownContentStyle() {
					return {
						bottom: (this.currentConfig.pullDownHeight - 40) / 2 + "px"
					}
				}
			},
			mounted() {
				this.$nextTick(() => {
					const t = this.$el,
						e = this.$el.querySelector(".pull-down__header");
					this.currentConfig.pullDownHeight = this.currentConfig.pullDownHeight || 60, t.addEventListener("touchstart", this.handleTouchStart, {
						passive: !0
					}), t.addEventListener("touchmove", this.handleTouchMove, {
						passive: !0
					}), t.addEventListener("touchend", this.handleTouchEnd), e.addEventListener("transitionend", this.handleTransitionEnd)
				})
			},
			beforeDestroy() {
				const t = this.$el,
					e = this.$el.querySelector(".pull-down__header");
				t.removeEventListener("touchstart", this.handleTouchStart, {
					passive: !0
				}), t.removeEventListener("touchmove", this.handleTouchMove, {
					passive: !0
				}), t.removeEventListener("touchend", this.handleTouchEnd), e.removeEventListener("transitionend", this.handleTransitionEnd)
			},
			methods: {
				resetPullDown(t, e) {
					const s = this.$el.querySelector(".pull-down__header"),
						n = t;
					e && (s.style.transition = d), n.height = 0, n.status = u.START
				},
				handleTouchStart(t) {
					const e = window.scrollY < 20,
						{
							baseOffset: s,
							focusOffset: n
						} = document.getSelection(),
						a = s !== n;
					this.canPull = e && !a, this.touchPosition.start = t.touches.item(0).pageY, this.lastY = t.touches.item(0).pageY
				},
				handleTouchMove(t) {
					const {
						currentY: e
					} = t.touches.item(0);
					if (!this.canPull || e > this.lastY) return void (this.lastY = e);
					let s = t.touches.item(0).pageY - this.touchPosition.start;
					s = s > 80 ? 80 : s, s > 10 && document.documentElement.setAttribute("data-pulling", !0), this.touchPosition.distance = s, this.pullDown.height = s, s > this.currentConfig.pullDownHeight ? this.pullDown.status = u.READY : this.pullDown.status = u.START, this.lastY = e
				},
				handleTouchEnd() {
					const t = this.$el.querySelector(".pull-down__header");
					if (this.canPull = !1, t.style.transition = d, this.touchPosition.distance - this.$el.scrollTop > this.currentConfig.pullDownHeight)
						if (this.$el.scrollTop = 0, this.pullDown.height = this.currentConfig.pullDownHeight, this.pullDown.status = u.REFRESH, this.onRefresh && "function" === typeof this.onRefresh) {
							const t = this.onRefresh();
							t && t.then && "function" === typeof t.then ? t.then(() => {
								this.resetPullDown(this.pullDown, !0)
							}, t => {
								let e = t;
								"string" !== typeof e && (e = !1), this.pullDown.msg = e || this.customLabels[0], this.pullDown.status = u.ERROR, setTimeout(() => {
									this.resetPullDown(this.pullDown, !0)
								}, 1e3)
							}) : this.resetPullDown(this.pullDown)
						} else this.resetPullDown(this.pullDown), console.warn("please use :on-refresh to pass onRefresh callback");
					else this.resetPullDown(this.pullDown);
					this.touchPosition.distance = 0, this.touchPosition.start = 0
				},
				handleTransitionEnd() {
					const t = this.$el.querySelector(".pull-down__header");
					t.style.transition = ""
				}
			}
		},
			_ = p,
			h = (s("7527"), s("2877")),
			g = Object(h["a"])(_, r, c, !1, null, null, null),
			f = g.exports,
			b = {
				name: "TMPage",
				components: {
					TMPullToRefresh: f,
					TMPageWidth: o["a"]
				},
				props: {
					wide: {
						type: Boolean,
						default: !1
					},
					noTopMargin: {
						type: Boolean,
						default: !1
					}
				},
				computed: {
					...Object(i["e"])("i18n", ["hl"]),
					...Object(i["e"])("global", ["isPwa"]),
					...Object(i["c"])("global", ["isMobile", "isTablet"])
				},
				methods: {
					...Object(i["b"])("pullRefresh", ["toggleRefresh"]),
					refreshData() {
						return this.error && this.$store.dispatch("ssr/reset"), this.toggleRefresh(!0), new Promise(t => {
							setTimeout(() => {
								t()
							}, 1e3)
						})
					}
				}
			},
			T = b,
			v = (s("3eb4"), Object(h["a"])(T, n, a, !1, null, null, null));
		e["a"] = v.exports
	},
	ff65: function (t, e, s) {
		"use strict";
		s("68a4")
	},
	ff91: function (t, e, s) { }
});
//# sourceMappingURL=app.f7fdce84.js.map