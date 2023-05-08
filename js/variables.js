const BODY = document.body;
const burgerBtn = document.querySelector(".burger");
const sections = document.querySelectorAll(".section");
const footer = document.querySelector("footer#contacts");

// header and footer menu variables
const menuArr = ["moods", "ideas", "catalog", "subscribe", "contacts"];
const headerMenu = document.querySelector("#header-menu");
const footerMenu = document.querySelector("#footer-menu");

// mood cards variables
const moodArr = ["winter", "spring", "summer", "autumn"];
const moodCards = document.querySelector(".cards");

// slider variables
const sliderInner = document.querySelector(".slider__inner");
const prevSliderBtn = document.querySelector(".slider__btn_prev");
const nextSliderBtn = document.querySelector(".slider__btn_next");

// social variables
const socialArr = ["instagram", "facebook", "pinterest"];
const social = document.querySelector(".social");

// subscribe form variables:
const submitBtn = document.querySelector("#submit-btn");
const subscribeForm = document.querySelector("#subscribe-form");
const subscribeTitle = document.querySelector("#subscribe-title");
const subscribeInputs = document.querySelectorAll(".subscribe__input");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordRepeatInput = document.querySelector("#password-repeat");
const nameInput = document.querySelector("#name");
const subscribeError = document.querySelector(".subscribe__error");

// shoping cart variables
const cartBtn = document.querySelector("#cart-button");
const cartCount = document.querySelector(".header__cart-count");
const cart = document.querySelector(".cart");
const cartTotalItems = document.querySelector(".cart__total-items");
const cartTotalPrice = document.querySelector(".cart__total-price");
const cartList = document.querySelector(".cart__list");
const cartClose = document.querySelector(".cart__close");

// filters variables
const filters = document.querySelector(".filters");
const filtersWraper = document.querySelectorAll(".filters__wrapper");
const filtersSelect = document.querySelectorAll(".filters__select");
const filtersListWrapers = document.querySelectorAll(".filters__list-wrapper");
const filtersList = filters.querySelectorAll(".filters__list");

// to top button
const toTopBtn = document.querySelector(".to-top");
