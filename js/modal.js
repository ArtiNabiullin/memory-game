const modalState = {
  state: null,
};

export function openModal(content) {
  closeModal();

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const modal = document.createElement("div");
  modal.className = "modal";

  const panel = document.createElement("div");
  panel.className = "modal-panel";
  panel.append(content);

  modal.append(panel);
  overlay.append(modal);

  document.body.append(overlay);
  document.body.classList.add("modal-open");

  modalState.state = overlay;

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });

  document.addEventListener("keydown", handleEscapeOnce);
}

function handleEscapeOnce(event) {
  if (event.key === "Escape" && modalState.state) {
    closeModal();
  }
}

export function closeModal() {
  if (!modalState.state) return;

  modalState.state.remove();
  modalState.state = null;

  document.body.classList.remove("modal-open");
  document.removeEventListener("keydown", handleEscapeOnce);
}
