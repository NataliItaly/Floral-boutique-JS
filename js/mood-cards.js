for (let i = 0; i < moodArr.length; i++) {
  moodCards.append(createMoodCards(moodArr, i));
}

// function create single mood card:

function createMoodCards(arr, num) {
  const card = document.createElement("li");
  card.classList.add("cards__item", "cards__item_rotate");
  cardName = arr[num][0].toUpperCase() + arr[num].slice(1);
  card.innerHTML = `
        <div class="cards__side cards__side_front">
            <h3 class="cards__title">${cardName} mood</h3>
            <img
                src="./img/mood/${num + 1}.jpg"
                class="cards__img cards__img_rotate"
                alt="${arr[num]} flowers"
            />
        </div>
        <div class="cards__side cards__side_back">
            <div class="card__text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum id illo eaque, repellat sunt ex est mollitia natus
                tempore assumenda voluptas, sit nobis, reiciendis accusamus
                omnis delectus illum impedit tenetur.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                nesciunt culpa numquam sequi enim asperiores, velit natus,
                sunt autem aliquam animi earum ullam accusamus consequatur
                quibusdam, nihil pariatur modi vitae?
              </p>
            </div>
            <a href="https://www.gardenersworld.com/search/?q=${
              arr[num]
            }+flowers" class="button cards__button cards__button_back" target="_blank"
            >Read about ${arr[num]} flowers</a>
        </div>
           `;
  return card;
}
