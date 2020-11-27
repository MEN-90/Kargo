//@prepros-append burger.js

//$(document).ready(function () {
//	$('.header__burger').click(function (event) {
//		$('.header__burger, .header__menu').toggleClass('burger_active');
//		$('body').toggleClass('lock');
//	});
//});
$('.menu-btn').on('click', function (e) {
	e.preventDefault();
	$('.menu').toggleClass('menu_active');
	$('.content').toggleClass('content_active');
})
