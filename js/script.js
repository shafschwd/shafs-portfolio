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

	// top-bottom-btn fix start

	$(".btn_top_bottom").click(function () {
		$("html").animate(
			{
				scrollTop: 0,
			},
			2000
		);
	});

	$(window).scroll(function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".btn_top_bottom").fadeIn();
		} else {
			$(".btn_top_bottom").fadeOut();
		}
	});

	// top-bottom-btn fix end
});
