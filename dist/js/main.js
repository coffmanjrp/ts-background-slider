"use strict";
var body = document.body;
var slides = document.querySelectorAll('.slide');
var leftBtn = document.getElementById('left');
var rightBtn = document.getElementById('right');
var activeSlide = 0;
function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
setBgToBody();
function setActiveSlide() {
    slides.forEach(function (slide) { return slide.classList.remove('active'); });
    slides[activeSlide].classList.add('active');
}
rightBtn.addEventListener('click', function () {
    activeSlide++;
    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    setBgToBody();
    setActiveSlide();
});
leftBtn.addEventListener('click', function () {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    setBgToBody();
    setActiveSlide();
});
