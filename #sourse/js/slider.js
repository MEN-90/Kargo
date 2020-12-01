new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	grabCursor: true,
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".image-slider"
	},
	autoHeight: true,
	loop: true,
	speed: 800,
});