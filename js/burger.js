burgerBtn.addEventListener("click", function () {
  this.classList.toggle("burger_open");
  menuListHeader.classList.toggle("menu__list_open");
  BODY.classList.toggle("block");
});

const menuListHeader = document.querySelector(".menu__list_header");

headerMenu.addEventListener("click", function (event) {
  if (event.target.classList.contains("menu__link_header")) {
    menuListHeader.classList.remove("menu__list_open");
    BODY.classList.remove("block");
    burgerBtn.classList.remove("burger_open");
  }
});
