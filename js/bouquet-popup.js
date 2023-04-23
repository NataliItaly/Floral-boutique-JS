function createPopup(index) {
  const bouquetPopup = document.createElement("div");
  bouquetPopup.classList.add("bouquet-popup");
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
            <div class="bouquet-popup__footer">
                <div class="bouquet-popup__price"></div>

            </div>
        `;

  const bouquetPopupFooter = document.createElement("div");
  bouquetPopupFooter.classList.add("bouquet-popup__footer");

  const bouquetPopupPrice = document.createElement("div");
  bouquetPopupPrice.classList.add("bouquet-popup__price");
  bouquetPopupPrice.innerHTML = `${bouquets[index].price}$`;

  let count = 0;
  let totalCount = 0;
  const bouquetPopupSub = document.createElement("button");
  bouquetPopupSub.classList.add("bouquet-popup__btn");
  bouquetPopupSub.innerHTML = "-";
  bouquetPopupSub.addEventListener("click", function () {
    while (count > 0) {
      count--;
      totalCount -= bouquets[index].price;
    }
  });

  const bouquetPopupAdd = document.createElement("button");
  bouquetPopupAdd.classList.add("bouquet-popup__btn");
  bouquetPopupAdd.innerHTML = "+";
  bouquetPopupAdd.addEventListener("click", function () {
    count++;
    totalCount += bouquets[index].price;
  });

  const bouquetPopupTotal = document.createElement("div");
  bouquetPopupTotal.classList.add("bouquet-popup__total");
  bouquetPopupTotal.innerHTML = `<span class="bouquet-popup__span">Total:</span> ${totalCount}$`;

  bouquetPopupFooter.append(
    bouquetPopupPrice,
    bouquetPopupSub,
    bouquetPopupAdd,
    bouquetPopupTotal
  );

  const bouquetPopupClose = document.createElement("button");
  bouquetPopupClose.classList.add("bouquet-popup__close");
  bouquetPopupClose.textContent = "X";
  bouquetPopupClose.addEventListener("click", function () {
    bouquetPopup.remove();
  });

  bouquetPopupInner.append(bouquetPopupFooter, bouquetPopupClose);
  bouquetPopup.append(bouquetPopupInner);
  catalog.append(bouquetPopup);
}
