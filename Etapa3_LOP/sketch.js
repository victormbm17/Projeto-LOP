/* 
    Equipe: 
        Victor Moura Botelho Medeiros - Subturma D (T01) (Líder) 
        André Luis Miranda dos Santos - Subturma D (T01)
        Etapa 3
*/


var x = 195;
var y = 350;
var xd
var yd
var estadoDisparo = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

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
  square(175, 50, 40);


  if (keyIsDown(CONTROL) && estadoDisparo == false) {

    xd = x;
    yd = y;
    estadoDisparo = true;
  }

  if (estadoDisparo == true) {
    ellipse(xd, yd, 10, 10)
    yd = yd - 10;
    if (yd < 0) {
      estadoDisparo = false;
    }
  }


}