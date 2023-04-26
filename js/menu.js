const menuArr = ["moods", "ideas", "catalog", "subscribe", "contacts"];
const headerMenu = document.querySelector("#header-menu");
const footerMenu = document.querySelector("#footer-menu");

// create menu item function:

function createMenuList(num) {
  const menuList = document.createElement("ul");
  menuList.classList.add("menu__list");

  for (let i = 0; i < num; i++) {
    const menuItem = document.createElement("li");
    menuItem.classList.add("menu__item");
    menuItem.innerHTML = `
      <a href="#${menuArr[i]}" class="menu__link">${menuArr[
      i
    ][0].toUpperCase()}${menuArr[i].slice(1)}</a>
    `;

    menuList.append(menuItem);
  }
  return menuList;
}

// set menu items in header and footer:

headerMenu.append(createMenuList(5));
footerMenu.append(createMenuList(3));

// choose all link that begin with # and set smooth scroll to the ancor sections

const menuLinks = document.querySelectorAll('a[href^="#"]');
menuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const id = link.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
