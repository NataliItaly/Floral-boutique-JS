const menuArr = ["Moods", "Ideas", "Catalog", "Subscribe", "Contacts"];
const headerMenu = document.querySelector("#header-menu");
const footerMenu = document.querySelector("#footer-menu");

// create menu item function
function createMenuList(num) {
  const menuList = document.createElement("ul");
  menuList.classList.add("menu__list");

  for (let i = 0; i < num; i++) {
    const menuItem = document.createElement("li");
    menuItem.classList.add("menu__item");
    menuItem.innerHTML = `
      <a href="#${menuArr[i]}" class="menu__link">${menuArr[i]}</a>
    `;

    menuList.append(menuItem);
  }
  return menuList;
}

// set menu items in header and footer
headerMenu.append(createMenuList(5));
footerMenu.append(createMenuList(3));
