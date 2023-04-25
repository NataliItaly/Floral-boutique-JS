// bouquets object with all information about every single item:

const bouquets = [
  {
    name: "Spring",
    price: 25,
    tags: ["pink", "tulip"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Confession",
    price: 40,
    tags: ["pink", "rose", "peony"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Surprise",
    price: 20,
    tags: ["pink", "tulip", "red", "yellow", "violet", "pink"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Elegance",
    price: 30,
    tags: ["white", "orange", "rose"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Tenderness",
    price: 55,
    tags: ["white", "pink", "rose"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Snow dream",
    price: 40,
    tags: ["pink", "white", "peony"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "April",
    price: 40,
    tags: [
      "yellow",
      "white",
      "blue",
      "daffodil",
      "tulip",
      "gillyflower",
      "peony",
    ],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Love",
    price: 50,
    tags: ["rose", "pink"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Morning",
    price: 60,
    tags: ["white", "yellow", "orange", "tulip", "daffodil"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Delight",
    price: 50,
    tags: ["rose", "peony", "carnation", "yellow", "pink"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Fantasy",
    price: 55,
    tags: ["rose", "carnation", "pink", "white"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Caramel",
    price: 60,
    tags: ["rose", "orchid", "chrysanthemum", "violet", "white"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Exotic",
    price: 30,
    tags: ["red", "orange", "tulip", "rose"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Caprice",
    price: 50,
    tags: ["tulip", "orchid", "peony", "pink", "orange"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Original",
    price: 40,
    tags: ["white", "yellow", "poppy"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Exrtreme",
    price: 50,
    tags: ["red", "poppy"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Enigma",
    price: 35,
    tags: ["lily", "carnation", "red", "white"],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
  {
    name: "Remembrance",
    price: 20,
    tags: [
      "peony",
      "daisy",
      "gerbera",
      "orchid",
      "blue",
      "yellow",
      "pink",
      "red",
      "orange",
    ],
    inCart: false,
    quantity: 0,
    currentTotal: 0,
  },
];

const catalog = document.querySelector(".cards_catalog");
const catalogBtn = document.querySelector("#catalog-button");
let firstCardsNumber = 9;
let isAllCards = false;

// function create single catalog card;

function createSingleCard(ind) {
  const item = document.createElement("li");
  item.classList.add("cards__item", "cards__item_catalog");
  item.setAttribute("data-bouquet", `${bouquets[ind].name}`);
  item.innerHTML = `
      <h3 class="cards__title">Bouquet ${bouquets[ind].name}</h3>
      <img src="img/cards/${bouquets[ind].name}.jpg" alt="Bouquet ${bouquets[ind].name} picture" class="cards__img" />
      <p class="card__price">${bouquets[ind].price}$</p>
      <button class="cards__button">Order</button>
    `;

  item.addEventListener("click", function (event) {
    if (event.target.closest(".cards__item")) {
      let choosenCard = event.target.closest(".cards__item").dataset.bouquet;
      let choosenIndex;
      bouquets.forEach((bouquet, index) => {
        if (choosenCard === bouquet.name) {
          choosenIndex = index;
        }
      });

      createPopup(choosenIndex);
    }
  });

  return item;
}

// function set definite number of card to catalog:

function createCatalogCard(num) {
  for (let i = 0; i < num; i++) {
    catalog.append(createSingleCard(i));
  }
}

createCatalogCard(firstCardsNumber);

// function show more (or less cards):

catalogBtn.addEventListener("click", function () {
  if (!isAllCards) {
    catalog.innerHTML = "";
    createCatalogCard(bouquets.length);
    catalogBtn.textContent = "Show less";
    isAllCards = true;
  } else {
    catalog.innerHTML = "";
    createCatalogCard(9);
    catalogBtn.textContent = "Show more";
    isAllCards = false;
  }
});
