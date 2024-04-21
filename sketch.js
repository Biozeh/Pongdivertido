// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

// w = comprimento e h = altura da raquete

//variaveis da raquete
let xRaquete = 10;
let yRaquete = 200;
let wRaquete = 10;
let hRaquete = 80;

//variaveis raquete oponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 200;
let wRaqueteOponente = 10;
let hRaqueteOponente = 80;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//Sons do jogo
let raquetada;
let ponto;
let trilha;

function preload () {
  raquetada = loadSound ("raquetada.mp3");
  ponto = loadSound ("ponto.mp3");
  trilha = loadSound ("trilha.mp3");
  }

function setup() {
  createCanvas(600, 400);
  trilha.loop ();
}

function draw() {
  background("black");
  mostraBolinha ();
  velocidadeDaBolinha ();
  colisaoComBorda (); 
  mostrarRaquete (xRaquete, yRaquete);
  mostrarRaquete (xRaqueteOponente, yRaqueteOponente);
  movimentarRaquete ();
  movimentarRaqueteOponente ();
  verificarColisaoRaquete (xRaquete, yRaquete);
  verificarColisaoRaquete (xRaqueteOponente, yRaqueteOponente);
  incluirPlacar ();
  marcarPontos ();
}

function mostraBolinha () {
  circle (xBolinha, yBolinha, diametro);
}

function velocidadeDaBolinha () {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoComBorda () {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostrarRaquete (x, y) {
  rect (x, y, wRaquete, hRaquete);
}

function movimentarRaquete () {
  if (keyIsDown (UP_ARROW)) {
    yRaquete -=10;
 }
  if (keyIsDown (DOWN_ARROW)) {
    yRaquete +=10;
 }
}

function verificarColisaoRaquete (x, y) {
  colidiu =
  collideRectCircle (x, y, wRaquete, hRaquete, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play ();
  }
}

function movimentarRaqueteOponente () {
  if (keyIsDown (87)) {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown (83)) {
    yRaqueteOponente += 10;
  }
}

function incluirPlacar () {
  textSize (19);
  textAlign (CENTER);
  fill ("orange");
  rect (140, 10, 30, 20);
  rect (440, 10, 30, 20);
  fill ("white");
  text (meusPontos, 155, 25);
  text (pontosOponente, 455, 25);
}

function marcarPontos () {
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play ();
  }
  
  if (xBolinha < 10) {
    pontosOponente += 1;
    ponto.play ();
  }
}

