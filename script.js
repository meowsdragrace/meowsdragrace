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
  let html = `<h2>Cartas do Jogador</h2><div class="cards">`;

  cartas.forEach((queen) => {
    html += `
      <div class="card">
        <img src="${queen.imagem}">
        <h3>${queen.nome}</h3>
        <div class="attributes">
          ${Object.entries(queen.atributos).map(
            ([attr, val]) => `<div>${attr}: ${val}</div>`
          ).join("")}
        </div>
        <button>Jogar</button>
      </div>
    `;
  });

  html += `</div>`;
  document.body.innerHTML = html;
}
