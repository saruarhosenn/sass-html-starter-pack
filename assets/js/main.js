(function($) {
    "use strict";


	/* ======= STICKY MENU ======= */
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$("header").addClass('sticky-menu');
		} else {
			$("header").removeClass('sticky-menu');
		}
	});

	/* ====== SHOW & HIDE MENU ====== */
	$(".menu-toggle-btn").click(function () {
		$(".main-menu").toggleClass("show-menu");
	});

	/* ===== AOS JS ===== */
	AOS.init();


})(jQuery);
