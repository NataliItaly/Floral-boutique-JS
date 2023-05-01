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

// set separate classes to header menu and footer
const menuList = document.querySelectorAll(".menu__list");
menuList.forEach((list) => {
  if (list.closest(".menu_header")) {
    list.classList.add("menu__list_header");
  }
  if (list.closest(".menu_footer")) {
    list.classList.add("menu__list_footer");
  }
});

// choose all link that begin with # and set smooth scroll to the ancor sections

const menuLinks = document.querySelectorAll('a[href^="#"]');
menuLinks.forEach((link) => {
  if (link.closest(".menu_header")) {
    link.classList.add("menu__link_header");
  }
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const id = link.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // set active section and set animation on active section
    sections.forEach((section) => section.classList.remove("section_active"));
    document.querySelector(id).classList.add("section_active");
  });
});
