// function create popup with choosen bouquet's description and possibility to add the bouquet to the cart

function createPopup(index) {
  // popup wrapper:
  const bouquetPopup = document.createElement("div");
  bouquetPopup.classList.add("bouquet-popup");

  //popup inner:
  const bouquetPopupInner = document.createElement("div");
  bouquetPopupInner.classList.add("bouquet-popup__inner");
  bouquetPopupInner.innerHTML = `
            <div class = "bouquet-popup__header">
              <div>
                <h3 class = "bouquet-popup__title">Bouquet ${bouquets[index].name}</h3>
                <p class = "bouquet-popup__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id illo eaque, repellat sunt ex.</p>
                <div class="bouquet-popup__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum id illo eaque, repellat sunt ex est mollitia natus
                    tempore assumenda voluptas, sit nobis, reiciendis accusamus
                    omnis delectus illum impedit tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id illo eaque, repellat sunt ex est mollitia natus tempore assumenda voluptas, sit nobis, reiciendis accusamus
                    omnis delectus illum impedit tenetur.</div>
              </div>
            </div>
          `;

  const bouquetPopupContent = document.createElement("div");
  bouquetPopupContent.classList.add("bouquet-popup__content");
  bouquetPopupContent.innerHTML = `<div class="bouquet-popup__img-wrapper">
    <img src = "img/cards/${bouquets[index].name}.jpg" class="bouquet-popup__img" alt = "Bouquet ${bouquets[index].name} picture">
    </div>`;

  // popup aside where it's possible to add (or remove) the item to cart:
  const bouquetPopupAside = document.createElement("div");
  bouquetPopupAside.classList.add("bouquet-popup__aside");

  // choosen bouquet's price
  const bouquetPopupPrice = document.createElement("div");
  bouquetPopupPrice.classList.add("bouquet-popup__price");
  bouquetPopupPrice.innerHTML = `Price: ${bouquets[index].price}$`;

  // popup add / remove buttons block:
  const bouquetPopupButtons = document.createElement("div");
  bouquetPopupButtons.classList.add("bouquet-popup__buttons");

  // count of choosen bouquet item:
  let count = bouquets[index].quantity;

  // total price of choosen type of bouquet:
  let totalCount = bouquets[index].quantity * bouquets[index].price;

  // div where to see how many item of choosen type was add to cart:
  const bouquetPopupCount = document.createElement("div");
  bouquetPopupCount.classList.add("bouquet-popup__count");
  bouquetPopupCount.textContent = count;

  // subtract or remove item button:
  const bouquetPopupSub = document.createElement("button");
  bouquetPopupSub.classList.add("bouquet-popup__btn");
  bouquetPopupSub.innerHTML = "-";

  // the button is disabled if there is no such type of bouquets in cart, so it's not possible to have a negative quantity of bouquets
  bouquetPopupSub.disabled = !bouquets[index].inCart;

  bouquetPopupSub.addEventListener("click", function () {
    count--;

    totalArticles--;
    setTotalItems(totalArticles);
    cartCount.textContent = totalArticles;
    bouquetPopupSub.disabled = count === 0 ? true : false;

    bouquets[index].quantity--;
    bouquets[index].inCart = count > 0 ? true : false;

    let currentTotal = parseInt(bouquetPopupTotal.textContent);
    totalCount = setPrice(currentTotal - bouquets[index].price);

    bouquetPopupTotal.textContent = totalCount;
    bouquetPopupCount.textContent = count;

    totalPrice -= bouquets[index].price;
    setTotalPrice(totalPrice);

    setCartItem(index);
  });

  // add items button:
  const bouquetPopupAdd = document.createElement("button");
  bouquetPopupAdd.classList.add("bouquet-popup__btn");
  bouquetPopupAdd.innerHTML = "+";
  bouquetPopupAdd.addEventListener("click", function () {
    count++;
    totalArticles++;
    setTotalItems(totalArticles);
    cartCount.textContent = totalArticles;

    let currentTotal = parseInt(bouquetPopupTotal.textContent);
    totalCount = setPrice(bouquets[index].price + currentTotal);
    bouquetPopupTotal.textContent = totalCount;
    bouquetPopupSub.disabled = false;
    bouquetPopupCount.textContent = count;

    totalPrice += bouquets[index].price;
    setTotalPrice(totalPrice);

    bouquets[index].quantity++;
    bouquets[index].inCart = true;

    setCartItem(index);
  });

  bouquetPopupButtons.append(
    bouquetPopupSub,
    bouquetPopupCount,
    bouquetPopupAdd
  );

  const bouquetPopupTotalDiv = document.createElement("div");
  bouquetPopupTotalDiv.classList.add("bouquet-popup__div");
  bouquetPopupTotalDiv.textContent = `Total: `;

  const bouquetPopupTotal = document.createElement("span");
  bouquetPopupTotal.classList.add("bouquet-popup__total");
  bouquetPopupTotal.innerHTML = `${totalCount}$`;

  bouquetPopupTotalDiv.append(bouquetPopupTotal);

  bouquetPopupAside.append(
    bouquetPopupPrice,
    bouquetPopupButtons,
    bouquetPopupTotalDiv
  );

  // close popup button:
  const bouquetPopupClose = document.createElement("button");
  bouquetPopupClose.classList.add("bouquet-popup__close");
  bouquetPopupClose.textContent = "X";
  bouquetPopupClose.addEventListener("click", function () {
    bouquetPopupInner.classList.add("bouquet-popup__inner_close");
    setTimeout(function () {
      bouquetPopup.remove();
      BODY.classList.remove("block");
    }, 500);
  });

  bouquetPopupContent.append(bouquetPopupAside);
  bouquetPopupInner.append(bouquetPopupContent, bouquetPopupClose);
  bouquetPopup.append(bouquetPopupInner);
  catalog.append(bouquetPopup);

  BODY.classList.add("block");
  bouquetPopupInner.classList.add("bo");
}

// function return a string with price and add $ sign
function setPrice(str) {
  return `${Number(str)}$`;
}
