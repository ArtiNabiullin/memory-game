export async function loadCards() {
  const response = await fetch("./js/data/cards.json");
  const data = await response.json();

  const gameCards = [...data.cards, ...data.cards];

  shuffle(gameCards);
  renderCards(gameCards);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderCards(gameCards) {
  const container = document.querySelector(".cards-container");

  gameCards.forEach((cards) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = cards.img;
    cardImage.alt = cards.name;

    cardElement.append(cardImage);
    container.append(cardElement);
  });
}
