$(function () {
	// menu fix start
	var mapping = $(".menu").offset().top;

	$(window).scroll(function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > mapping) {
			$(".menu").addClass("menu_fix");
		} else {
			$(".menu").removeClass("menu_fix");
		}
	});

	// var mapping = $(".ms-auto").offset().top;

	// $(window).scroll(function () {
	// 	var scrolling = $(this).scrollTop();

	// 	if (scrolling > mapping) {
	// 		$(".ms-auto").addClass("m-auto");
	// 	} else {
	// 		$(".ms-auto").removeClass("m-auto");
	// 	}
	// });

	// var mapping = $(".menu__list").offset().top;

	// $(window).scroll(function () {
	// 	var scrolling = $(this).scrollTop();

	// 	if (scrolling > mapping) {
	// 		$(".menu__list").addClass("menu__spacing");
	// 	} else {
	// 		$(".menu__list").removeClass("menu__spacing");
	// 	}
	// });

	// type js
	var typed = new Typed(".type-banner", {
		strings: ["END-DEV"],
		loop: true,
		typeSpeed: 60,
		backSpeed: 60,
		startDelay: 400,
		showCursor: false,
		// cursorChar: "💻",
	});
	
	var typed = new Typed(".type-about", {
		strings: ["of Bangladesh"],
		loop: false,
		typeSpeed: 40,
		backSpeed: 40,
		startDelay: 200,
		showCursor: false,
	});

	// swiper
	var swiper = new Swiper(".work-mySwiper", {
		// freeMode: true,
		slidesPerView: 3,
		grid: {
			rows: 2,
		},
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		// scrollbar: {
		// 	el: ".swiper-scrollbar",
		// },
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		// mousewheel: true,
	});

	//scroll js
	ScrollReveal({
		reset: true,
		distance: '60px',
		duration: 2500,
		// delay: 400,
	})

	// ScrollReveal().reveal('.sor-t', { delay: 200, origin: 'top'});
	// ScrollReveal().reveal('.sor-b', { delay: 200, origin: 'bottom'});
	// ScrollReveal().reveal('.sor-r', { delay: 200, origin: 'right'});
	// ScrollReveal().reveal('.sor-l', { delay: 200, origin: 'left'});
	// ScrollReveal().reveal('.icon i', { delay: 400, origin: 'top', interval: 200 });

	// logo anim
	gsap.timeline()
	.fromTo("#s1", { y: 10, opacity: 0}, {opacity: 1, y: 0, duration: 1})
	.fromTo("#h", { y: -10, opacity: 0}, {opacity: 1, y: 0, duration: 1})
	.fromTo("#a", { x: -10, opacity: 0}, {opacity: 1, x: 0, duration: 1})
	.fromTo("#f", { x: 10, opacity: 0}, {opacity: 1, x: 0, duration: 1})
	.fromTo("#s2", { opacity: 0}, {opacity: 1, rotation:360, duration: 1})
	.fromTo("#bracket", { x: -53}, {x:0, ease: "linear", duration: 3.5}, 0)

});
