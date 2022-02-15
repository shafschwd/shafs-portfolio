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

	// menu fix start
});
