export async function loadCards() {
  const response = await fetch("./cards.json");
  const data = await response.json();

  const gameCards = [...data.cards, ...data.cards];

  return shuffle(gameCards);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
