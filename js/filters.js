const filters = document.querySelector(".filters");
const filtersSelect = filters.querySelectorAll(".filters__select");
const filtersList = filters.querySelectorAll(".filters__list");

filters.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.classList.contains("filters__select")) {
    let selectId = event.target.getAttribute("id");
    filtersList.forEach((list) => {
      if (list.dataset.category === selectId) {
        list.classList.toggle("filters__list_open");
      }
    });
  }
});
