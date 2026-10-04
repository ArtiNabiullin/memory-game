import { saveResult } from "./storage.js";

let moves = 0;
let matchedPairs = 0;
let selectedCard = null;
let isLocked = false;
let isGameFinished = false;
let mismatchTimeout = null;

export function resetGameState() {
  if (mismatchTimeout !== null) {
    clearTimeout(mismatchTimeout);
    mismatchTimeout = null;
  }

  moves = 0;
  matchedPairs = 0;
  selectedCard = null;
  isLocked = false;
  isGameFinished = false;

  document.querySelector(".moves").textContent = "Moves: 0";
  document.querySelector(".score").textContent = "Pairs: 0/8";
  document.querySelector(".game-message").textContent = "";
}

export function handleCardClick(cardElement, card, onWin) {
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
    document.querySelector(".score").textContent = `Pairs: ${matchedPairs}/8`;

    const totalPairs = document.querySelectorAll(".card").length / 2;

    if (matchedPairs === totalPairs) {
      isGameFinished = true;
      saveResult(moves);
      onWin(moves);
    }

    selectedCard = null;
    return;
  }

  isLocked = true;
  const firstCardElement = selectedCard.element;

  mismatchTimeout = setTimeout(() => {
    firstCardElement.classList.remove("active");
    cardElement.classList.remove("active");
    selectedCard = null;
    isLocked = false;
    mismatchTimeout = null;
  }, 700);
}
