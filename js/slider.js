const sliderInner = document.querySelector(".slider__inner");
const prevSliderBtn = document.querySelector(".slider__btn_prev");
const nextSliderBtn = document.querySelector(".slider__btn_next");

function createImage(num) {
  sliderInner.style.backgroundImage = `url(./../img/slider/${num}.jpg)`;
}

// create first slider image:

let currentImage = 1;
createImage(1);

// set onclick functionality on previous and next buttons:

nextSliderBtn.addEventListener("click", function () {
  currentImage++;
  if (currentImage > 12) currentImage = 1;
  createImage(currentImage);
});

prevSliderBtn.addEventListener("click", function () {
  currentImage--;
  if (currentImage < 1) currentImage = 12;
  createImage(currentImage);
});
