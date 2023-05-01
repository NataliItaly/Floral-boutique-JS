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
