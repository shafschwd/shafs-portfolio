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

	// type js
	var typed = new Typed(".type-banner", {
		strings: ["END-DEV"],
		loop: true,
		typeSpeed: 60,
		backSpeed: 60,
		startDelay: 400,
		// showCursor: false,
		cursorChar: "💻",
	});
	var typed = new Typed(".type-about", {
		strings: ["based out of BD"],
		loop: true,
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
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	clickable: true,
		// },
		scrollbar: {
			el: ".swiper-scrollbar",
		},
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		mousewheel: true,
	});

	//scroll js
	ScrollReveal({
		reset: true,
		distance: '60px',
		duration: 2500,
		delay: 400,
	})

	ScrollReveal().reveal('.title', { delay: 200, origin: 'bottom'});
	ScrollReveal().reveal('.sub-title', { delay: 200, origin: 'down'});
	ScrollReveal().reveal('.image', { delay: 200, origin: 'right'});
	ScrollReveal().reveal('.pgraph', { delay: 200, origin: 'top'});
	ScrollReveal().reveal('.icon i', { delay: 400, origin: 'top', interval: 200 });

});
