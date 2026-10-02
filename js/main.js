import { loadCards } from "./data/data.js";
import { createPageStructure } from "./createPageStructure.js";
import { renderCards } from "./renderCards.js";
import { resetGameState } from "./gameState.js";

createPageStructure();

let isStarting = false;

async function startNewGame() {
  if (isStarting) {
    return;
  }

  isStarting = true;

  try {
    const gameCards = await loadCards();

    resetGameState();
    document.querySelector(".cards-container").replaceChildren();
    renderCards(gameCards);
  } catch (error) {
    console.error("Could not start the game:", error);
  } finally {
    isStarting = false;
  }
}

document.querySelector(".header-start").addEventListener("click", startNewGame);

startNewGame();
