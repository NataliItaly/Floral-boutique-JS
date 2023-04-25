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
                <h3 class = "bouquet-popup__title">Bouquet ${bouquets[index].name}</h3>
                <p class = "bouquet-popup__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum id illo eaque, repellat sunt ex.</p>
            </div>
            <div class = "bouquet-popup__content">
                <img src = "img/cards/${bouquets[index].name}.jpg" class="bouquet-popup__img" alt = "Bouquet ${bouquets[index].name} picture">
                <div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum id illo eaque, repellat sunt ex est mollitia natus
                    tempore assumenda voluptas, sit nobis, reiciendis accusamus
                    omnis delectus illum impedit tenetur.</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum id illo eaque, repellat sunt ex est mollitia natus
                    tempore assumenda voluptas, sit nobis, reiciendis accusamus
                    omnis delectus illum impedit tenetur.</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum id illo eaque, repellat sunt ex est mollitia natus
                    tempore assumenda voluptas, sit nobis, reiciendis accusamus
                    omnis delectus illum impedit tenetur.</div>
                </div>
            </div>
          `;

  // popup footer where it's possible to add (or remove) the item to cart:
  const bouquetPopupFooter = document.createElement("div");
  bouquetPopupFooter.classList.add("bouquet-popup__footer");

  // choosen bouquet's price
  const bouquetPopupPrice = document.createElement("div");
  bouquetPopupPrice.classList.add("bouquet-popup__price");
  bouquetPopupPrice.innerHTML = `${bouquets[index].price}$`;

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

  // the button is disabled if thre is no such type of bouquets in cart, so it's not possible to have a negative quantity of bouquets
  bouquetPopupSub.disabled = !bouquets[index].inCart;

  bouquetPopupSub.addEventListener("click", function () {
    count--;

    totalArticles--;
    cartTotalItems.textContent = setTotalItems(totalArticles);

    bouquetPopupSub.disabled = count === 0 ? true : false;

    bouquets[index].quantity--;
    bouquets[index].inCart = count > 0 ? true : false;

    let currentTotal = parseInt(bouquetPopupTotal.textContent);
    totalCount = setPrice(currentTotal - bouquets[index].price);

    bouquetPopupTotal.textContent = totalCount;
    bouquetPopupCount.textContent = count;

    totalPrice -= bouquets[index].price;
    cartTotalPrice.textContent = setTotalPrice(totalPrice);

    setCartItem(index);
  });

  // add items button:
  const bouquetPopupAdd = document.createElement("button");
  bouquetPopupAdd.classList.add("bouquet-popup__btn");
  bouquetPopupAdd.innerHTML = "+";
  bouquetPopupAdd.addEventListener("click", function () {
    count++;
    totalArticles++;
    cartTotalItems.textContent = setTotalItems(totalArticles);

    let currentTotal = parseInt(bouquetPopupTotal.textContent);
    totalCount = setPrice(bouquets[index].price + currentTotal);
    bouquetPopupTotal.textContent = totalCount;
    bouquetPopupSub.disabled = false;
    bouquetPopupCount.textContent = count;

    totalPrice += bouquets[index].price;
    cartTotalPrice.textContent = setTotalPrice(totalPrice);

    bouquets[index].quantity++;
    bouquets[index].inCart = true;

    setCartItem(index);
  });

  const bouquetPopupTotalSpan = document.createElement("div");
  bouquetPopupTotalSpan.classList.add("bouquet-popup__span");
  bouquetPopupTotalSpan.textContent = `Total: `;

  const bouquetPopupTotal = document.createElement("div");
  bouquetPopupTotal.classList.add("bouquet-popup__total");
  bouquetPopupTotal.innerHTML = `${totalCount}$`;

  bouquetPopupFooter.append(
    bouquetPopupPrice,
    bouquetPopupSub,
    bouquetPopupCount,
    bouquetPopupAdd,
    bouquetPopupTotalSpan,
    bouquetPopupTotal
  );

  // close popup button:
  const bouquetPopupClose = document.createElement("button");
  bouquetPopupClose.classList.add("bouquet-popup__close");
  bouquetPopupClose.textContent = "X";
  bouquetPopupClose.addEventListener("click", function () {
    bouquetPopupInner.classList.add("bouquet-popup__inner_close");
    setTimeout(function () {
      bouquetPopup.remove();
      document.body.classList.remove("block");
    }, 500);
  });

  bouquetPopupInner.append(bouquetPopupFooter, bouquetPopupClose);
  bouquetPopup.append(bouquetPopupInner);
  catalog.append(bouquetPopup);

  document.body.classList.add("block");
  bouquetPopupInner.classList.add("bo");
}

// function return a string with price and add $ sign
function setPrice(str) {
  return `${Number(str)}$`;
}
