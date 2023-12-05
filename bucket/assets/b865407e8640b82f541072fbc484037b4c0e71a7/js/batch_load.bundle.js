(() => {
	"use strict";
	const e = "lmd.batch.first.url",
		t = "lmd.batch.active";null === localStorage.getItem(e) ? localStorage.setItem(e, lmd.urlfriendly) : null !== localStorage.getItem(e) && localStorage.getItem(e) !== lmd.urlfriendly && null === localStorage.getItem(t) && ((e, t, l) => {
		const a = {
			value: !0,
			expiry: (new Date).getTime() + 18e5
		};localStorage.setItem(e, JSON.stringify(a))
	})(t)
})();