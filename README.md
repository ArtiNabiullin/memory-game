# Memory Game

A browser-based memory game built with vanilla JavaScript, HTML, and CSS. Flip cards to find matching pairs, keep track of your moves, and try to improve your best score.

## Features

- Shuffled pairs loaded from `js/data/cards.json`
- Move and matched-pair counters
- Win dialog shown after all pairs are found
- Leaderboard with up to 10 results, stored in browser `localStorage`
- New game action that resets the board and counters

## Run locally

The game uses JavaScript modules and fetches its card data from a JSON file, so it must be served over HTTP. Opening `index.html` directly with a `file://` URL will not work correctly.

### Visual Studio Code

1. Open this project folder in Visual Studio Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html` and select **Open with Live Server**.

### Node.js

From the project root, run:

```sh
npx --yes http-server .
```

Open the local URL printed in the terminal, usually `http://localhost:8080`.

## Project structure

```text
index.html
style.css
images/
js/
  createPageStructure.js
  gameState.js
  main.js
  modal.js
  renderCards.js
  renderModal.js
  storage.js
  data/
    cards.json
    data.js
```
