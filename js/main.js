import { loadCards } from "./data/data.js";
import { createPageStructure } from "./createPageStructure.js";
import { renderCards } from "./renderCards.js";
import { resetGameState } from "./gameState.js";
import { showWinModal, showLeaderboardModal } from "./renderModal.js";

createPageStructure();

let isStarting = false;

function onWin(moves) {
  showWinModal(moves, startNewGame);
}

async function startNewGame() {
  if (isStarting) {
    return;
  }

  isStarting = true;

  try {
    const gameCards = await loadCards();
    resetGameState();
    document.querySelector(".cards-container").replaceChildren();
    renderCards(gameCards, onWin);
  } catch (error) {
    console.error("Could not start the game:", error);
  } finally {
    isStarting = false;
  }
}

document.querySelector(".header-start").addEventListener("click", startNewGame);

document
  .querySelector(".header-leaderboard")
  .addEventListener("click", showLeaderboardModal);

startNewGame();
