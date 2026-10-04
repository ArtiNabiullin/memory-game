import { handleCardClick } from "./gameState.js";

export function renderCards(gameCards, onWin) {
  const container = document.querySelector(".cards-container");

  gameCards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.addEventListener("click", () => {
      handleCardClick(cardElement, card, onWin);
    });

    const cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = card.img;
    cardImage.alt = card.name;

    cardElement.append(cardImage);
    container.append(cardElement);
  });
}
