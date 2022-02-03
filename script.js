let musicas = [
  {
    titulo: "Back in Black",
    artista: "AC/DC",
    genero: "Rock",
    src: "./music/rock.mp3",
    img: "./img/rock-capa.jpg",
  },
  {
    titulo: "Samba da volta",
    artista: "Vinicius de Moraes & Toquinho",
    genero: "Samba",
    src: "./music/samba.mp3",
    img: "./img/samba-capa.jpg",
  },
  {
    titulo: "Tropicália",
    artista: "Caetano Veloso",
    genero: "MPB",
    src: "./music/mpb.mp3",
    img: "./img/mpb-capa.jpg",
  },
];

let indexMusica = 0;
let musica = document.querySelector("audio");
let duracaoMusica = document.querySelector(".fim");
let Imagem = document.querySelector("img");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");

renderizarMusica(indexMusica);

// Eventos
document.querySelector(".anterior").addEventListener("click", () => {
  indexMusica--;
  if (indexMusica < 0) {
    indexMusica = 2;
  }
  renderizarMusica(indexMusica);
});
document.querySelector(".proxima").addEventListener("click", () => {
  indexMusica++;
  if (indexMusica > 2) {
    indexMusica = 0;
  }
  renderizarMusica(indexMusica);
});
document.querySelector(".botao-play").addEventListener("click", tocarMusica);
document.querySelector(".botao-pause").addEventListener("click", pausarMusica);
musica.addEventListener("timeupdate", atualizarBarra);

//Funções
function renderizarMusica(index) {
  musica.setAttribute("src", musicas[index].src);
  musica.addEventListener("loadeddata", () => {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    Imagem.src = musicas[index].img;
    duracaoMusica.textContent = segundosParaMinutos(
      Math.floor(musica.duration)
    );
  });
}

function tocarMusica() {
  musica.play();
  document.querySelector(".botao-pause").style.display = "block";
  document.querySelector(".botao-play").style.display = "none";
}

function pausarMusica() {
  musica.pause();
  document.querySelector(".botao-play").style.display = "block";
  document.querySelector(".botao-pause").style.display = "none";
}

function atualizarBarra() {
  let barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  let tempoDecorrido = document.querySelector(".inicio");
  tempoDecorrido.textContent = segundosParaMinutos(
    Math.floor(musica.currentTime)
  );
}
function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;

  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }

  return campoMinutos + ":" + campoSegundos;
}
