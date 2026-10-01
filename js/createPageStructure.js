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

  headerContent.append(startGame, leaderboard);
  header.append(headerContent);
  mainContent.append(title, cards);
  body.append(header, mainContent);

  return body;
}
