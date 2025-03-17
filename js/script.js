document.addEventListener("DOMContentLoaded", function () {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let a = getRandomInt(2, 4);
  let b = getRandomInt(5, 7);
  let c = getRandomInt(8, 9);
  let d = getRandomInt(1, 5);
  let e = getRandomInt(1, 5);
  let f = 4 * e;

  let aMc = a + c;
  let DoisaMb = 2 * a + b;
  let ab = a * b;
  let ac = a * c;
  let bMenosDoisa = b - 2 * a;
  let cMenosa = c - a;
  let Doisa = 2 * a;
  let aMais2 = a + 2;
  let aMais1 = a + 1;
  let aMaisb = a + b;
  let aaMais1 = a * a + 1;  // <<< Corrigido
  let aaMais2 = a * a + 2;  // <<< Corrigido
   let cc = c * c;

document.body.innerHTML = document.body.innerHTML
    .replace(/{{a}}/g, a)
    .replace(/{{b}}/g, b)
    .replace(/{{c}}/g, c)
    .replace(/{{d}}/g, d)
    .replace(/{{f}}/g, f)
    .replace(/{{aMc}}/g, aMc)
    .replace(/{{ab}}/g, ab)
    .replace(/{{ac}}/g, ac)
    .replace(/{{bMenosDoisa}}/g, bMenosDoisa)
    .replace(/{{cMenosa}}/g, cMenosa)
    .replace(/{{Doisa}}/g, Doisa)
    .replace(/{{aMais2}}/g, aMais2)
    .replace(/{{DoisaMb}}/g, DoisaMb)
    .replace(/{{aaMais2}}/g, aaMais2)
    .replace(/{{aaMais1}}/g, aaMais1)
    .replace(/{{aMaisb}}/g, aMaisb)
    .replace(/{{cc}}/g, cc);

  renderMathInElement(document.body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\(", right: "\\)", display: false }
    ]
  });

  let hoje = new Date();
  let dia = String(hoje.getDate()).padStart(2, '0');
  let mes = String(hoje.getMonth() + 1).padStart(2, '0');
  let ano = hoje.getFullYear();
 

  let horas = String(hoje.getHours()).padStart(2, '0');
  let minutos = String(hoje.getMinutes()).padStart(2, '0');
  let segundos = String(hoje.getSeconds()).padStart(2, '0');
  document.getElementById("hora-atual").textContent = `${horas}:${minutos}:${segundos}`;
  document.getElementById("data-atual").textContent = `${dia}/${mes}/${ano}`;
});

function mostrarRespostas() {
  const respostas = document.querySelectorAll('.resposta');
  respostas.forEach(el => el.style.display = 'inline');
  renderMathInElement(document.body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\(", right: "\\)", display: false }
    ]
  });
}

function aumentarFonte() {
  const body = document.body;
  const estiloAtual = window.getComputedStyle(body).fontSize;
  const tamanhoAtual = parseFloat(estiloAtual);
  body.style.fontSize = (tamanhoAtual + 1) + "px";
}

function diminuirFonte() {
  const body = document.body;
  const estiloAtual = window.getComputedStyle(body).fontSize;
  const tamanhoAtual = parseFloat(estiloAtual);
  if (tamanhoAtual > 6) {
    body.style.fontSize = (tamanhoAtual - 1) + "px";
  }
}

