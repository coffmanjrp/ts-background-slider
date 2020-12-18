const { body } = document;
const slides = document.querySelectorAll(
  '.slide'
) as NodeListOf<HTMLDivElement>;
const leftBtn = document.getElementById('left') as HTMLButtonElement;
const rightBtn = document.getElementById('right') as HTMLButtonElement;

let activeSlide = 0;

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

setBgToBody();

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));

  slides[activeSlide].classList.add('active');
}

rightBtn.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});
