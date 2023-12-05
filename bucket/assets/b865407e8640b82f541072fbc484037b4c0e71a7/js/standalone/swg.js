! function() {
	const e = location.host.match(/(([a-z]+)-)?lemonde.fr$/)[2] || "prd",
		n = "prd" === e ? "" : `${e}-`,
		t = "prd" == e ? "lemonde.fr:premium" : `${e}-lemonde.fr:premium`,
		o = `https://secure.${n}lemonde.fr`,
		s = `https://secure.${n}lemonde.fr/sfuser/connexion?social-sign-in=google&redirectionUrl=https://${n}abo.lemonde${"prd"===e?".fr":".io"}/swg/entitlements`;
	(window.self.SWG = window.self.SWG || []).push((e => {
		e.init(t),
		e.setOnEntitlementsResponse((async n => {
			n.then((function(n) {
				if(n.ack(), !1 !== window.lmd.user) return;
				if(0 === n.entitlements.length) return;
				let t = n.entitlements[0];
				if("lemonde.fr" === t.source) e.showLoginNotification().then((() => {
					window.location = `${o}/sfuser/sfws/swg/connect?subscriptionToken=${encodeURIComponent(t.subscriptionToken)}&source=lemonde`
				}));
				else {
					let i = JSON.parse(t.subscriptionToken);
					(function(e) {
						return fetch(`${o}/sfuser/google/receipt-infos`, {
							method: "POST",
							body: JSON.stringify(e)
						}).then((e => e.json())).then((e => !(!e.receipt_infos.user || 0 === e.receipt_infos.subscriptions.length || !e.receipt_infos.subscriptions[0].active))).catch((e => {}))
					})({
						package_name: i.packageName,
						product_id: i.productId,
						purchase_token: i.purchaseToken
					}).then((function(t) {
						t ? e.showLoginNotification().then((() => {
							window.location = `${o}/sfuser/sfws/swg/connect?purchaseToken=${encodeURIComponent(i.purchaseToken)}&productId=${i.productId}&packageName=${i.packageName}`
						})) : e.completeDeferredAccountCreation({
							entitlements: n,
							consent: !0
						}).then((function(e) {
							const n = `${s}&login_hint=${e.userData.email}`;
							window.location = n
						}))
					}))
				}
			}))
		})),
		e.getEntitlements()
	}))
}();