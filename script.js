const queens = [
  {
    nome: "Ruby Glam",
    carisma: 8,
    talento: 7,
    runway: 9
  },
  {
    nome: "Lola Lux",
    carisma: 9,
    talento: 6,
    runway: 7
  },
  {
    nome: "Miss Chaos",
    carisma: 6,
    talento: 9,
    runway: 8
  }
];

function iniciarJogo() {
  mostrarQueens();
}

function mostrarQueens() {
  let html = "<h2>Escolha sua Drag Queen</h2>";

  queens.forEach((queen, index) => {
    html += `
      <div style="border:1px solid hotpink; padding:15px; margin:10px;">
        <h3>${queen.nome}</h3>
        <p>Carisma: ${queen.carisma}</p>
        <p>Talento: ${queen.talento}</p>
        <p>Runway: ${queen.runway}</p>
        <button onclick="escolherQueen(${index})">Escolher</button>
      </div>
    `;
  });

  document.body.innerHTML = html;
}

function escolherQueen(index) {
  const queen = queens[index];
  alert(`Você escolheu ${queen.nome}! 💖`);
}
