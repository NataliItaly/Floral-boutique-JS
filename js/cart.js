let totalArticles = 0;
let totalPrice = 0;

setTotalItems(totalArticles);
setTotalPrice(totalPrice);

function setTotalItems(num) {
  let itemsQuantity = num > 1 ? `${num} articles` : `${num} article`;
  cartTotalItems.textContent = itemsQuantity;
}

function setTotalPrice(num) {
  let price = `${num}$`;
  cartTotalPrice.textContent = price;
}

function addCartItem(ind) {
  const cartItem = document.createElement("li");
  cartItem.classList.add("cart__item");
  cartItem.setAttribute("data-cart-item", `${bouquets[ind].name}`);

  const cartItemImg = document.createElement("div");
  cartItemImg.classList.add("cart__item-img");
  cartItemImg.innerHTML = `<img src="img/cards/${bouquets[ind].name}.jpg" alt="Bouquet ${bouquets[ind].name} picture" class="cart__img" />`;

  const cartItemText = document.createElement("div");
  cartItemText.classList.add("cart__item-text");
  cartItemText.innerHTML = `
    <p class="cart__item-name">${bouquets[ind].name}</p>
  `;

  const cartItemData = document.createElement("p");
  cartItemData.classList.add("cart__item-data");

  const cartItemSub = document.createElement("button");
  cartItemSub.classList.add("cart__item-btn");
  cartItemSub.innerHTML = "-";
  cartItemSub.disabled = !bouquets[ind].inCart;

  let count = bouquets[ind].quantity;
  let itemTotalCount = bouquets[ind].quantity * bouquets[ind].price;

  cartItemSub.addEventListener("click", function () {
    count--;
    if (count === 0) {
      cartItem.remove();
    }

    // the quantity of current item in cart:
    let currentItemQuantity = +cartItemQuantity.textContent;
    currentItemQuantity--;

    // set new data to current bouquet:
    bouquets[ind].quantity--;
    bouquets[ind].inCart = count > 0 ? true : false;

    // total sum for current bouquet:
    itemTotalCount = bouquets[ind].quantity * bouquets[ind].price;
    cartItemPrice.textContent = `${itemTotalCount}$`;
    cartItemQuantity.textContent = currentItemQuantity;

    // set new cart total sum and quantity:
    totalArticles--;
    setTotalItems(totalArticles);
    cartCount.textContent = totalArticles;
    totalPrice -= bouquets[ind].price;
    setTotalPrice(totalPrice);
  });

  const cartItemAdd = document.createElement("button");
  cartItemAdd.classList.add("cart__item-btn");
  cartItemAdd.innerHTML = "+";

  cartItemAdd.addEventListener("click", function () {
    count++;
    // the quantity of current item in cart:
    let currentItemQuantity = +cartItemQuantity.textContent;
    currentItemQuantity++;

    // set new data to current bouquet:
    bouquets[ind].quantity++;
    bouquets[ind].inCart = count > 0 ? true : false;

    // total sum for current bouquet:
    itemTotalCount = bouquets[ind].quantity * bouquets[ind].price;
    cartItemPrice.textContent = `${itemTotalCount}$`;
    cartItemQuantity.textContent = currentItemQuantity;

    // set new cart total sum and quantity:
    totalArticles++;
    setTotalItems(totalArticles);
    cartCount.textContent = totalArticles;
    totalPrice += bouquets[ind].price;
    setTotalPrice(totalPrice);
  });

  const cartItemQuantity = document.createElement("p");
  cartItemQuantity.classList.add("cart__item-quantity");
  cartItemQuantity.textContent = bouquets[ind].quantity;

  const cartItemPrice = document.createElement("p");
  cartItemPrice.classList.add("cart__item-price");
  cartItemPrice.textContent = `${
    bouquets[ind].quantity * bouquets[ind].price
  }$`;

  cartItemData.append(
    cartItemSub,
    cartItemQuantity,
    cartItemAdd,
    cartItemPrice
  );
  cartItemText.append(cartItemData);
  cartItem.append(cartItemImg, cartItemText);
  cartList.append(cartItem);
}

function removeCartItem(ind) {
  [...cartList.children].forEach((cartItem) => {
    if (cartItem.dataset.cartItem === bouquets[ind].name) {
      cartItem.remove();
    }
  });
}

function setCartItem(num) {
  if (bouquets[num].inCart && bouquets[num].quantity >= 1) {
    removeCartItem(num);
    addCartItem(num);
  } else if (!bouquets[num].inCart) {
    removeCartItem(num);
  }
}

// function open cart onclick:
cartBtn.addEventListener("click", function () {
  cart.classList.add("cart_open");
});

// close the cart:
cartClose.addEventListener("click", function () {
  cart.classList.remove("cart_open");
});
