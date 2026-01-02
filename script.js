const TOTAL_JOGADORES = 12;
const CARTAS_POR_JOGADOR = 10;

// Exemplo de baralho (vamos expandir depois)
let baralho = [
  criarQueen("Ruby Glam", 8,9,7,8,6,7,9,5,8,7),
  criarQueen("Lola Lux", 9,8,6,7,8,6,8,6,7,8),
  criarQueen("Miss Chaos", 6,9,8,7,7,9,7,6,8,6)
];

function criarQueen(nome, acting, lipsync, look, runway, improv, comedy, make, singing, dancing, branding) {
  return {
    nome,
    imagem: "https://via.placeholder.com/150",
    atributos: {
      acting, lipsync, look, runway,
      improv, comedy, make,
      singing, dancing, branding
    }
  };
}

function iniciarJogo() {
  mostrarCartas(baralho);
}

function mostrarCartas(cartas) {
  let html = `<h2>Suas Drag Queens</h2><div class="cards">`;

  cartas.forEach((queen) => {
    html += `
      <div class="card">
        <img src="${queen.imagem}">
        <h3>${queen.nome}</h3>
        <div class="tag">DRAG QUEEN</div>

        <div class="attributes">
          ${Object.entries(queen.atributos).map(
            ([attr, val]) => `
              <div class="attr">
                <strong>${attr}</strong>
                <div class="bar">
                  <span style="width:${val * 10}%"></span>
                </div>
                ${val}
              </div>
            `
          ).join("")}
        </div>

        <button>Jogar</button>
      </div>
    `;
  });

  html += `</div>`;
  document.body.innerHTML = html;
}
// =========================
// BARALHO DE DRAG QUEENS
// =========================

const allQueens = [
  {
    name: "Miss Chaos",
    image: "",
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
  // depois você adiciona mais
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
    deck = deck.concat(allQueens);
  }

  shuffle(deck);

  players.forEach(player => {
    player.deck = deck.splice(0, CARDS_PER_PLAYER);
  });

  console.log(players);
}

// =========================
// INICIAR JOGO
// =========================

distributeCards();
