const bouquets = [
  { name: "Spring", price: "25", tags: ["pink", "tulip"] },
  { name: "Confession", price: "40", tags: ["pink", "rose", "peony"] },
  {
    name: "Surprise",
    price: "20",
    tags: ["pink", "tulip", "red", "yellow", "violet", "pink"],
  },
  {
    name: "Elegance",
    price: "30",
    tags: ["white", "orange", "rose"],
  },
  {
    name: "Tenderness",
    price: "55",
    tags: ["white", "pink", "rose"],
  },
  { name: "Snow dream", price: "40", tags: ["pink", "white", "peony"] },
  {
    name: "April",
    price: "40",
    tags: [
      "yellow",
      "white",
      "blue",
      "daffodil",
      "tulip",
      "gillyflower",
      "peony",
    ],
  },
  { name: "Love", price: "50", tags: ["rose", "pink"] },
  {
    name: "Morning",
    price: "60",
    price: "50",
    tags: ["white", "yellow", "orange", "tulip", "daffodil"],
  },
  {
    name: "Delight",
    price: "50",
    tags: ["rose", "peony", "carnation", "yellow", "pink"],
  },
  {
    name: "Fantasy",
    price: "55",
    tags: ["rose", "carnation", "pink", "white"],
  },
  {
    name: "Caramel",
    price: "60",
    tags: ["rose", "orchid", "chrysanthemum", "violet", "white"],
  },
  { name: "Exotic", price: "30", tags: ["red", "orange", "tulip", "rose"] },
  {
    name: "Caprice",
    price: "50",
    tags: ["tulip", "orchid", "peony", "pink", "orange"],
  },
  { name: "Original", price: "40", tags: ["white", "yellow", "poppy"] },
  { name: "Exrtreme", price: "50", tags: ["red", "poppy"] },
  {
    name: "Enygma",
    price: "35",
    tags: ["lily", "carnation", "red", "white"],
  },
  {
    name: "Remembrance",
    price: "20",
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
  },
];

const catalog = document.querySelector(".cards_catalog");
const catalogBtn = document.querySelector("#catalog-button");
let isAllCards = false;

function createCatalogCard(num) {
  for (let i = 0; i < 9; i++) {
    const item = document.createElement("li");
    item.classList.add("cards__item", "cards__item_catalog");
    item.innerHTML = `
      <h3 class="cards__title">Bouquet ${bouquets[num].name}</h3>
      <img src="img/cards/${i + 1}.jpg" alt="Bouquet ${
      bouquets[num].name
    } picture" class="cards__img" />
      p class="card__price">${bouquets[num].price}$</p>
      <button class="cards__button">Order</button>
    `;
    catalog.append(item);
  }
}

createCatalogCard(bouquets.length);

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
