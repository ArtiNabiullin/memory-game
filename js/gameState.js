let moves = 0;
let matchedPairs = 0;
let selectedCard = null;
let isLocked = false;
let isGameFinished = false;

export function handleCardClick(cardElement, card) {
  if (
    isGameFinished ||
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

  moves += 1;
  document.querySelector(".moves").textContent = `Moves: ${moves}`;

  if (selectedCard.id === card.id) {
    cardElement.classList.add("matched");
    selectedCard.element.classList.add("matched");
    matchedPairs += 1;
    document.querySelector(".score").textContent = matchedPairs;

    const totalPairs = document.querySelectorAll(".card").length / 2;

    if (matchedPairs === totalPairs) {
      isGameFinished = true;
      document.querySelector(".game-message").textContent =
        `You won ${moves} moves!`;
    }

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
