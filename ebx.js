! function() {
	try {
		var e;
		let t = document.querySelector("#ebx").dataset.appletId;
		if(t || (e = window.location.hostname, t = encodeURIComponent(e)), "" !== t && "localhost" !== t && "127.0.0.1" !== t) {
			var n = "https://applets.ebxcdn.com/applets/" + t + "/scripts.js"; {
				var o = n,
					c = t => {
						new Function(t)()
					};
				const s = new XMLHttpRequest;
				s.onreadystatechange = () => {
					4 === s.readyState && 200 === s.status && c(s.responseText)
				}, s.open("GET", o, !0), s.send(null)
			}
		}
	} catch(t) {
		console.log("Failed to load scripts", t)
	}
}();