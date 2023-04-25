const headerCart = document.querySelector("#header-cart");
const cartTotalItems = document.querySelector(".cart__total-items");
const cartTotalPrice = document.querySelector(".cart__total-price");
const cartList = document.querySelector(".cart__list");

let totalArticles = 0;
let totalPrice = 0;

cartTotalItems.textContent = setTotalItems(totalArticles);
cartTotalPrice.textContent = setTotalPrice(totalPrice);

function setTotalItems(num) {
  return num > 1 ? `${num} articles` : `${num} article`;
}

function setTotalPrice(num) {
  return `${num}$`;
}

function addCartItem(ind) {
  const cartItem = document.createElement("li");
  cartItem.classList.add("cart__item");
  cartItem.setAttribute("data-cart-item", `${bouquets[ind].name}`);

  const cartItemImg = document.createElement("p");
  cartItemImg.classList.add(".cart__item-img");
  cartItemImg.innerHTML = `<img src="img/cards/${bouquets[ind].name}.jpg" alt="Bouquet ${bouquets[ind].name} picture" class="cart__img" />`;

  const cartItemName = document.createElement("p");
  cartItemImg.classList.add(".cart__item-name");
  cartItemName.textContent = bouquets[ind].name;

  const cartItemQuantity = document.createElement("p");
  cartItemQuantity.classList.add(".cart__item-quantity");
  cartItemQuantity.textContent = bouquets[ind].quantity;

  const cartItemPrice = document.createElement("p");
  cartItemPrice.classList.add(".cart__item-price");
  cartItemPrice.textContent = `${
    bouquets[ind].quantity * bouquets[ind].price
  }$`;

  cartItem.append(cartItemImg, cartItemName, cartItemQuantity, cartItemPrice);
  cartList.append(cartItem);
}

function removeCartItem(ind) {
  [...cartList.children].forEach((cartItem) => {
    if (cartItem.dataset.cartItem === bouquets[ind].name) {
      console.log(bouquets[ind].name);
      console.log(cartItem.dataset.cartItem);
      console.log(cartItem);
      cartItem.remove();
    }
  });
}

function setCartItem(num) {
  if (bouquets[num].inCart && bouquets[num].quantity >= 1) {
    console.log(bouquets[num].name + " in cart");
    removeCartItem(num);
    console.log(bouquets[num]);
    addCartItem(num);
  } else if (!bouquets[num].inCart) {
    removeCartItem(num);
  }
}
//cart.addEventListener("click", function () {});
