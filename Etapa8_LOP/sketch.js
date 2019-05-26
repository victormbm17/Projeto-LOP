/* 
    Equipe: 
        Victor Moura Botelho Medeiros - Subturma D (T01) (Líder) 
        André Luis Miranda dos Santos - Subturma D (T01)
        Etapa 8
*/


var x = 195;
var y = 400;
var xd, yd;
var vxo = [];
var vyo = [];
var raios = 40;
var raiod = 10;
var estadoDisparo = false;
var vidas = 4;
var pontos =0;
var barreirapnt = 10;
var barreirapnt = 10;
var nivel = 1;
var qtObjetos = 1;
var vtam=[];

function setup() {
  createCanvas(500, 500);
for(i=0; i <qtObjetos;i++){
  vxo[i] = random(0,400);
  vyo[i] = random(100,400);
  vtam[i] = random(2, 40);
}
}
function draw() {
  background(200);
textSize(20);
text('Vidas: '+vidas, 10, 30);
text('Pontos: '+pontos,200, 30);
text('Nível: '+nivel, 400, 30);

  fill(0, 102, 153);
  if (keyIsDown(RIGHT_ARROW)) {
    x = x + 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x = x - 5;
  }
  if (keyIsDown(UP_ARROW)) {
    y = y - 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y = y + 5;
  }

  ellipse(x, y, 40, 40);
  
  for(i=0; i < qtObjetos;i++){
  square(vxo[i], vyo[i], vtam[i]);
  }
    x = x + 4;
  if(x > 400){
    x = -random(200)
    console.log(x);
    
  }


  if (keyIsDown(CONTROL) && estadoDisparo == false) {

    xd = x;
    yd = y;
    estadoDisparo = true;
  }

  if (estadoDisparo == true) {
    ellipse(xd, yd, raiod, raiod)
    yd = yd - 40;
    if (yd < 0) {
      estadoDisparo = false;
    }
  }
if ( dist(xd, yd, vxo, vyo) < raios) {
        pontos++
        xs = 230;
        ys = 80;
        }
if ( pontos > barreirapnt ) {
  barreirapnt= barreirapnt + 10
  nivel = nivel + 1
}
}