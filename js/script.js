const hamburgerClick = () => {
	document.getElementById("navbar-mobile").style.width = "100%";
}

const closeBar = () => {
	document.getElementById("navbar-mobile").style.width = "0";
}

document.addEventListener("scroll", () => {
	const vh = Math.max(document.documentElement.clientHeight || 0, window.innerWidth || 0);
	alert("vh");
	alert(vh);
	const homes = document.getElementsByClassName("home");
	forEach(homes, (h) => {
		h.removeClass("active");
	});
	const abouts = document.getElementsByClassName("about");
	forEach(abouts, (a) => {
		a.removeClass("active");
	});
	const portfolios = document.getElementsByClassName("portfolio");
	forEach(abouts, (p) => {
		a.removeClass("active");
	});
	const teams = document.getElementsByClassName("team");
	forEach(teams, (t) => {
		t.removeClass("active");
	});
	const connects = document.getElementsByClassName("connect");
	forEach(connects, (c) => {
		c.removeClass("active");
	});
	switch(vh) {
		case(vh >= 0 && vh < 100):
			const elems1 = document.getElementsByClassName("home");
			forEach(elems1, (e) => {
				e.addClass("active");
			});
			break;
		case(vh >= 100 && vh < 200):
			const elems2 = document.getElementsByClassName("about");
			forEach(elems, (e) => {
				e.addClass("active");
			});
			break;
		case(vh >= 200 && vh < 300):
			const elems3 = document.getElementsByClassName("portfolio");
			forEach(elems3, (e) => {
				e.addClass("active");
			});
			break;
		case(vh >= 300 && vh < 400):
			const elems4 = document.getElementsByClassName("team");
			forEach(elems4, (e) => {
				e.addClass("active");
			});
			break;
		case(vh >= 400 && vh < 500):
			const elems5 = document.getElementsByClassName("connect");
			forEach(elems5, (e) => {
				e.addClass("active");
			});
			break;
		default: break;
	}
});

