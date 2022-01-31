'use strict'

let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav-list');

menuBtn.addEventListener('click', function () {
	// document.body.classList.toggle('lock');
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
