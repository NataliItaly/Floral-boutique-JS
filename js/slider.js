const sliderInner = document.querySelector(".slider__inner");
const prevSliderBtn = document.querySelector(".slider__btn_prev");
const nextSliderBtn = document.querySelector(".slider__btn_next");

// create first slider image:
let currentImage = 1;

function createImage(num) {
  sliderInner.style.backgroundImage = `url(./../img/slider/${num}.jpg)`;
}

createImage(1);

/* const sliderImage = document.querySelector("img");
sliderImage.src = "./../img/slider/1.jpg";
sliderImage.alt = "flowers picture";
sliderImage.classList.add("slider__img");
sliderInner.append(sliderImage); */

nextSliderBtn.addEventListener("click", function () {
  currentImage++;
  if (currentImage > 11) currentImage = 1;
  createImage(currentImage);
});

prevSliderBtn.addEventListener("click", function () {
  currentImage--;
  if (currentImage < 1) currentImage = 11;
  createImage(currentImage);
});
