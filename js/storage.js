export const STORAGE_KEY = "game-results";

export function saveResult(moves) {
  const stored = localStorage.getItem(STORAGE_KEY);
  const results = stored ? JSON.parse(stored) : [];

  results.push({
    moves,
    date: new Date().toISOString().slice(0, 10),
  });

  results.sort((a, b) => a.moves - b.moves || a.date.localeCompare(b.date));
  const topResults = results.slice(0, 10);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(topResults));
}
