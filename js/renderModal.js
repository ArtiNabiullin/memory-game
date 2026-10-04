import { openModal, closeModal } from "./modal.js";
import { STORAGE_KEY } from "./storage.js";

export function showWinModal(moves, onRestart) {
  const wrapper = document.createElement("div");
  wrapper.className = "modal__body";

  const title = document.createElement("h2");
  title.textContent = "You win!";

  const text = document.createElement("p");
  text.textContent = `Moves : ${moves}`;

  const actions = document.createElement("div");
  actions.className = "modal__actions";

  const newGameBtn = document.createElement("button");
  newGameBtn.textContent = "New game";
  newGameBtn.className = "modal-button";
  newGameBtn.addEventListener("click", () => {
    closeModal();
    onRestart();
  });

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.className = "modal-button";
  closeBtn.addEventListener("click", closeModal);

  actions.append(newGameBtn, closeBtn);
  wrapper.append(title, text, actions);

  openModal(wrapper);
}

export function showLeaderboardModal() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const results = stored ? JSON.parse(stored) : [];

  const wrapper = document.createElement("div");
  wrapper.className = "modal__body";

  const title = document.createElement("h2");
  title.textContent = "Leaderboard";

  const content = document.createElement("div");

  if (!results.length) {
    const empty = document.createElement("p");
    empty.textContent = "No results yet";
    content.append(empty);
  } else {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const headerRow = document.createElement("tr");

    const thPlace = document.createElement("th");
    thPlace.textContent = "Place";

    const thMoves = document.createElement("th");
    thMoves.textContent = "Moves";

    const thDate = document.createElement("th");
    thDate.textContent = "Date";

    headerRow.append(thPlace, thMoves, thDate);
    thead.appendChild(headerRow);

    results.forEach((item, index) => {
      const row = document.createElement("tr");

      const place = document.createElement("td");
      place.textContent = String(index + 1);

      const moves = document.createElement("td");
      moves.textContent = String(item.moves);

      const date = document.createElement("td");
      date.textContent = new Date(item.date).toLocaleDateString("ru-RU");

      row.append(place, moves, date);
      tbody.append(row);
    });

    table.append(thead, tbody);
    content.append(table);
  }

  const closeBtn = document.createElement("button");
  closeBtn.className = "modal-button";
  closeBtn.textContent = "Close";
  closeBtn.addEventListener("click", closeModal);

  wrapper.append(title, content, closeBtn);
  openModal(wrapper);
}
