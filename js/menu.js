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

const menuLinks = document.querySelectorAll(`a[href^="#"]`);
menuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    menuLinks.forEach((link) => link.classList.remove("menu__link_active"));
    // set active link
    const selectedId = link.getAttribute("href");
    const selectedLinks = document.querySelectorAll(`a[href^="${selectedId}"]`);
    selectedLinks.forEach((link) => link.classList.add("menu__link_active"));
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

const sectionsArr = ["moods", "ideas", "catalog", "subscribe", "contacts"];
const moods = document.getElementById(sectionsArr[0]);

function activeScroll() {
  let scrollFromTop = +window.pageYOffset;
  console.log("scrollFromTop " + scrollFromTop);
  //let documentHeight = document.documentElement.scrollHeight;
  let documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  let windowHeight = document.documentElement.clientHeight;
  console.log("window " + windowHeight);

  console.log("documentHeight " + documentHeight);
  let totalHeight = windowHeight + scrollFromTop;
  console.log("totalHeight " + totalHeight);
  console.log(
    "totalHeight === documentHeight :" + totalHeight <= documentHeight
  );
  if (totalHeight >= documentHeight) {
    sections.forEach((section) => section.classList.remove("section_active"));
    footer.classList.add("section_active");
    menuLinks.forEach((link) => {
      link.classList.remove("menu__link_active");
      if (link.getAttribute("href").slice(1) === "contacts") {
        link.classList.add("menu__link_active");
      }
    });
  }
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("section_active");
    if (
      sections[i + 1] &&
      scrollFromTop >= sections[i].offsetTop - 250 &&
      scrollFromTop <= sections[i + 1].offsetTop - 250
    ) {
      console.log(sections[i].offsetTop);
      sections[i].classList.add("section_active");
      let sectionId = sections[i].getAttribute("id");
      menuLinks.forEach((link) => {
        link.classList.remove("menu__link_active");
        if (link.getAttribute("href").slice(1) === sectionId) {
          link.classList.add("menu__link_active");
        }
      });
    }
  }
}

window.addEventListener("scroll", activeScroll);
