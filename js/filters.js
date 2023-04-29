const filters = document.querySelector(".filters");
const filtersWraper = document.querySelectorAll(".filters__wrapper");
const filtersSelect = document.querySelectorAll(".filters__select");
const filtersListWrapers = document.querySelectorAll(".filters__list-wrapper");
const filtersList = filters.querySelectorAll(".filters__list");

function setOpenState(elem) {
  elem.classList.toggle("filters__select_open");
  let selectId = elem.getAttribute("id");
  filtersList.forEach((list) => {
    if (list.dataset.category === selectId) {
      list.classList.toggle("filters__list_open");
    }
  });
  filtersListWrapers.forEach((wrapper) => {
    if (wrapper.dataset.wrapper === selectId) {
      wrapper.classList.toggle("filters__list-wrapper_open");
    }
  });
  filtersWraper.forEach((filter) => {
    if (filter.dataset.filter === selectId) {
      filter.classList.toggle("filters__wrapper_open");
    }
  });
}

function openFilter(event) {
  event.preventDefault();
  if (event.target.classList.contains("filters__select")) {
    console.log(event.target);
    setOpenState(event.target);
  }
}

filters.addEventListener("click", openFilter);

//filters.removeEventListener("mouseout", openFilter);

filtersList.forEach((filter) => {
  filter.addEventListener("click", function (event) {
    /* if (filter.dataset.category === "price-filter") {
      let option = event.target.dataset.value;
      console.log(option);
    } */

    if (event.target.classList.contains("filters__option")) {
      let option = event.target.dataset.value;
      console.log(option);
      [...catalog.children].forEach((child) => child.remove());

      bouquets.forEach((bouquet, index) => {
        if (bouquet.tags.includes(option)) {
          console.log(bouquet.tags);
          catalog.append(createSingleCard(index));
        } else if (filter.dataset.category === "price-filter") {
          if (bouquet.price < 30 && option === "low-price") {
            catalog.append(createSingleCard(index));
          } else if (
            bouquet.price >= 30 &&
            bouquet.price < 50 &&
            option === "middle-price"
          ) {
            catalog.append(createSingleCard(index));
          } else if (bouquet.price >= 50 && option === "high-price") {
            catalog.append(createSingleCard(index));
          }
        }
      });

      isAllCards = false;
      catalogBtn.textContent = "Show all";
    }
  });
});
