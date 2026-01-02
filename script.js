// =========================
// BARALHO DE DRAG QUEENS
// =========================

const allQueens = [
  {
    name: "Miss Chaos",
    image: "https://via.placeholder.com/150",
    attributes: {
      acting: 6,
      lipsync: 9,
      look: 8,
      runway: 7,
      improv: 7,
      comedy: 9,
      make: 7,
      singing: 6,
      dancing: 8,
      branding: 6
    }
  }
];

// =========================
// JOGADORES
// =========================

const TOTAL_PLAYERS = 12;
const CARDS_PER_PLAYER = 10;

let players = [];

for (let i = 1; i <= TOTAL_PLAYERS; i++) {
  players.push({
    name: `Jogador ${i}`,
    deck: []
  });
}

// =========================
// FUNÇÕES
// =========================

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function distributeCards() {
  let deck = [];

  while (deck.length < TOTAL_PLAYERS * CARDS_PER_PLAYER) {
    deck = deck.concat(allQueens.map(q => ({ ...q })));
  }

  shuffle(deck);

  players.forEach(player => {
    player.deck = deck.splice(0, CARDS_PER_PLAYER);
  });
}

function renderPlayerSelector() {
  const select = document.getElementById("playerSelect");
  players.forEach((p, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = p.name;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    renderCards(players[select.value].deck);
  });
}

function renderCards(deck) {
  const container = document.getElementById("cardsContainer");
  container.innerHTML = "";

  deck.forEach(queen => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${queen.image}">
      <h2>${queen.name}</h2>
      <div class="attributes">
        ${Object.entries(queen.attributes)
          .map(([key, value]) =>
            `<div class="attr">${key}: ${value}</div>`
          ).join("")}
      </div>
      <button class="play-btn">Jogar</button>
    `;

    container.appendChild(card);
  });
}

// =========================
// INICIAR JOGO
// =========================

distributeCards();
renderPlayerSelector();
renderCards(players[0].deck);

// =========================
// INICIAR JOGO
// =========================

distributeCards();
