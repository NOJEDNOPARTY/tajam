var common = {
	init: function() {
		common.owl();
		common.main();
	},
	main: function() {

		$(".nav-wrapper nav").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});

		$('.menu-trigger').click(function() {
			$(this).parent().toggleClass('mobile');
		});

		function faceReplace() {
			var revItems = document.querySelectorAll('.rev-item');
			var owlDots = document.querySelectorAll('.rev-carousel .owl-dots button');

			for(let i = 0; i < revItems.length; i++) {
				owlDots[i].style.backgroundImage =  "url('" + revItems[i].getAttribute("data-src") + "')" ;
			}
		};
		faceReplace();

	},
	owl: function() {

		$('.main-slider').owlCarousel({
			loop:true,
			margin:10,
			dots: true,
			responsive:{
				0:{
						items:1
				}
			}
		});

		$('.rev-carousel').owlCarousel({
			dots: true,
			nav:true,
			margin:10,
			startPosition: 2,
			responsive:{
				0:{
					items:1
				}
			}
		});

	}
};

(function() {
	common.init();
}());
