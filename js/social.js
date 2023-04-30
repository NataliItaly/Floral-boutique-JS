// create social single item and append to social list:

function createSocialItems() {
  for (let i = 0; i < socialArr.length; i++) {
    const item = document.createElement("li");
    item.classList.add("social-item");
    item.innerHTML = `<a
              href="https://www.${socialArr[i]}.com/"
              class="social-link ${socialArr[i]}" target="_blank"
            ></a>`;
    social.append(item);
  }
}

createSocialItems();
