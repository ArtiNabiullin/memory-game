let moves = 0;
let matchedPairs = 0;
let selectedCard = null;
let isLocked = false;
let isGameFinished = false;

export function handleCardClick(cardElement, card) {
  if (
    isLocked ||
    cardElement.classList.contains("active") ||
    cardElement.classList.contains("matched")
  ) {
    return;
  }

  cardElement.classList.add("active");

  if (selectedCard === null) {
    selectedCard = { element: cardElement, id: card.id };
    return;
  }

  if (selectedCard.id === card.id) {
    cardElement.classList.add("matched");
    matchedPairs += 1;
    document.querySelector(".score").textContent = matchedPairs;
    selectedCard = null;
    return;
  }

  isLocked = true;
  const firstCardElement = selectedCard.element;

  setTimeout(() => {
    firstCardElement.classList.remove("active");
    cardElement.classList.remove("active");
    selectedCard = null;
    isLocked = false;
  }, 700);
}
