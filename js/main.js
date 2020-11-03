//@prepros-append burger.js

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('burger_active');
		$('body').toggleClass('lock');
	});
});
