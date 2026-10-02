export function createPageStructure() {
  const body = document.querySelector("body");

  const header = document.createElement("header");
  header.className = "header";

  const headerContent = document.createElement("div");
  headerContent.className = "header-menu";

  const startGame = document.createElement("div");
  startGame.className = "header-start";
  startGame.textContent = "New Game";

  const leaderboard = document.createElement("div");
  leaderboard.className = "header-leaderboard";
  leaderboard.textContent = "Leaderboard";

  const mainContent = document.createElement("main");
  mainContent.className = "main";

  const title = document.createElement("h1");
  title.className = "title";
  title.textContent = "Memory-game";

  const cards = document.createElement("div");
  cards.className = "cards-container";

  const state = document.createElement("div");
  state.className = "state";

  const message = document.createElement("p");
  message.className = "game-message";
  message.setAttribute("aria-live", "polite");

  const moves = document.createElement("p");
  moves.className = "moves";
  moves.textContent = "Moves: 0";

  const timer = document.createElement("p");
  timer.className = "timer";
  timer.textContent = "0";

  const score = document.createElement("p");
  score.className = "score";
  score.textContent = "0";

  state.append(moves, timer, score);
  headerContent.append(startGame, leaderboard);
  header.append(headerContent);
  mainContent.append(title, cards, message, state);
  body.append(header, mainContent);

  return body;
}
