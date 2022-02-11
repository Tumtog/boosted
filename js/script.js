'use strict'
//===========================================================Меню бургер
let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav-list');

menuBtn.addEventListener('click', function () {
	// document.body.classList.toggle('lock');
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
//===========================================================

//=========================================================== Слайдер
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 7,
	spaceBetween: 20,
	grabCursor: true,

	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		465: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 10,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 15,
		},
		1440: {
			slidesPerView: 7,
			spaceBetween: 20,
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// // If we need pagination
	// pagination: {
	// 	el: '.swiper-pagination',
	// },

	//Управление слайдером клавиатурой
	keyboard: {
		//включить / выключить
		enabled: true,
		onlyInViewport: true,
	},

	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},

	// // And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// },
});
//===========================================================