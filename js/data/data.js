let cardsData;

export async function loadCards() {
  if (!cardsData) {
    const response = await fetch("./js/data/cards.json");
    const data = await response.json();
    cardsData = data.cards;
  }

  const gameCards = [...cardsData, ...cardsData];

  return shuffle(gameCards);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
