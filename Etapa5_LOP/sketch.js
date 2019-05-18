/* 
    Equipe: 
        Victor Moura Botelho Medeiros - Subturma D (T01) (Líder) 
        André Luis Miranda dos Santos - Subturma D (T01)
        Etapa 5
*/


var x = 195;
var y = 400;
var xd, yd;
var estadoDisparo = false;
var vidas = 4;
var pontos =0;
var nivel = 1;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200);
textSize(20);
text('Vidas: '+vidas, 10, 30);
text('Pontos: '+pontos,200, 30);
text('Nível: '+nivel, 400, 30);
  vidas--

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
  square(230,80, 40);
  x = x+4;
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
    ellipse(xd, yd, 10, 10)
    yd = yd - 50;
    if (yd < 0) {
      estadoDisparo = false;
    }
  }


}