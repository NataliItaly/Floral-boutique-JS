// smooth scroll to the link

toTopBtn.addEventListener("click", function () {
  window.scrollTo(pageXOffset, 0);
  window.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

window.addEventListener("scroll", function () {
  toTopBtn.hidden = pageYOffset < document.documentElement.clientHeight;
});

const oper = [100, -300, -100, 480, 50];
oper.sort((a, b) => {
  console.log("a: " + a, "b: " + b);
  if (a > b) {
    console.log(a > b, 1);
  }
  if (a < b) {
    console.log(a < b, -1);
  }
});
