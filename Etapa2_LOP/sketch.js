/* 
    Equipe: 
        Victor Moura Botelho Medeiros - Subturma D (T01) (Líder) 
        André Luis Miranda dos Santos - Subturma D (T01)
        Etapa 2
*/


var x = 195;
var y = 350;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  
  if(keyIsDown(RIGHT_ARROW)){
    x = x + 5;
  }
  if(keyIsDown(LEFT_ARROW)){
    x= x - 5;
  }
  if(keyIsDown(UP_ARROW)){
    y = y - 5;}
   if(keyIsDown(DOWN_ARROW)){
    y = y + 5;}
  
  ellipse(x, y, 40, 40);
  square(175,50, 40);
}
