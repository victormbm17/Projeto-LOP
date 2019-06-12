/* 
    Equipe: 
        Victor Moura Botelho Medeiros - Subturma D (T01) (Líder) 
        André Luis Miranda dos Santos - Subturma D (T01)
        Etapa Final.
*/

var cont = 0
var x = 0;
var y = 400;
var xd, yd;
var xi = 470;
var yi = 270;
var xeu = 70;
var yeu = 270;
var raioi = 20;
var raioeu = 10;
var raiotiro = 5;
var estadoDisparo = false;
var vidas = 3;
var pontos = 0;
var barreirapontos = 500;
var nivel = 1;
var imgAndando =[];
var imgAndandoini =[];
var imgTiro = [];
var imgParado = [];
var imgFundo1;
var imgFundo2;
var contframe = 0;
var contframeini = 0;
var frameparado = 2;
var frametiro = 7;
var paraframe = 1;
var paraframeini = 1;
var anima;
var anima1;
var anima2;
var anima3;
var anima4;
var tela = 1;
var tempo = 0;
var width = 600;
var qntd = 10;
var vx = [];
var vy = [];
var vtamanho = [];
var vtamanho1 = [];
var velocidadex = 10;

function preload(){
 for( i = 2; i < 3; i++){
   imgParado[i] =loadImage('idle_'+i+'.png');
 }
  for( n = 0; n < 6; n++){
   imgAndando[n] =loadImage('run_'+n+'-1.png');
 }
  for( m = 0; m < 6; m++){
   imgAndandoini[m] =loadImage('runinimigo_'+m+'.png');
 }
  for( g = 7; g < 8; g++){
   imgTiro[g] =loadImage('shuriken_5.png');
 }
  // imgFundo1 = loadImage('fundo_jogo3.jpg');
   imgFundo2 = loadImage('fundo_jogo2.jpg');

}

function setup(){
  
 frameRate(30);
  createCanvas(500,355);
  for( l =0; l < qntd; l++){
   vx[l] = random(0, 600);
   vy[l] = random(325, 315);
   vtamanho[l] = 7;
   vtamanho1[l] = random(7,10);
  }
  
}

function draw(){
  fill(0,0,54);
  background(220);
  if( tela == 1){
    //image(imgFundo1, 250, 179);
    fill(0);
    rect(0, 0, 500, 355);
  anima2 = imgParado[frameparado];
  ellipse(70,270, 4, 4)
  imageMode(CENTER);
  image(anima2, 90, 270);
  
  textSize(40);
  fill(200,30,40);
    text('GuyNinja', 150, 90);
    textSize(50);
    text('ようこそ', 50, 160);
    text('ようこそ', 50, 210);
    text('エリート ', 260, 160);
    text('エリート ', 260, 210);
    textSize(35);
    text('PRESS ENTER', 150, 300);
   if( keyIsDown(ENTER)){
     tela = 2;
   }  
  }
  
  if( tela == 2 ){ 
    
    image(imgFundo2, 250, 179);
    
      x = 70;
      y = 270;
      
  for( l = 0; l < qntd; l++){  
   fill(0);
     vx[l] = vx[l] - velocidadex ; 
    if( vx[l] < 0 ){
     vx[l] = 400 + random(0, 500); 
    }
    rect(0, 300, 500, 1);
    rect(vx[l], vy[l], vtamanho[l], vtamanho1[l]);
    }
    
    if( keyIsDown(CONTROL) && estadoDisparo == false ) {
      xd = x;
      yd = y;
      estadoDisparo = true;
    }
    
    if ( estadoDisparo == true ){
      anima1 = imgTiro[frametiro];
      ellipse(70,270, 4, 4)
      imageMode(CENTER);
      image(anima1, xd, yd);
      xd = xd + 9;
    if( xd > 490 ){
      estadoDisparo = false;
    }
  }
    
      anima = imgAndando[contframe];
      ellipse(70,270, 4, 4)
      imageMode(CENTER);
      image(anima, xeu, yeu);
    
      paraframe++
    if(paraframe > 6){
      contframe++
      paraframe = 0;
    }
    if(contframe > 5){
      contframe = 0;
    }
    
      anima4 = imgAndandoini[contframeini];
      ellipse(xi,270, 4, 4)
      imageMode(CENTER);
      image(anima4, xi, 270);
    
      paraframeini++
    if(paraframeini > 6){
      contframeini++
      paraframeini = 0;
    }
    if(contframeini > 5){
      contframeini = 0;
    }
      xi = xi - 4;
    if(xi < 0){
      xi = 490;
    }
    if( dist(xd, yd, xi, yi) < raioi + raiotiro){
      pontos = pontos + 100;
      cont = cont + 100;
      xi = 490+random(100,300); 
      yi = 270;
      xd = 70;
      yd = 270;
      estadoDisparo = false; 
    }
    for( cont ; vidas <= 0; cont+100){
      
    }
    if( dist(xeu, yeu, xi, yi) < raioi + raioeu){
      vidas--;
      xi = 490+random(100,300); 
      yi = 270;
    }
      textSize(20);
      text('pontos: '+pontos, 30, 35);
      text('nivel: '+nivel, 200, 35);
      text('vidas: '+vidas, 360, 35);
    if( pontos > barreirapontos ){
       nivel++;
       barreirapontos = barreirapontos+500;
    }
    if( nivel == 2 ){
      xi = xi - 6;
      if(xi < 0){
      xi = 490;
      }
    }
    if( nivel == 3 ){
      xi = xi - 7;
      if(xi < 0){
      xi = 490;
      }
    }
    if( nivel == 4 ){
      xi = xi - 8;
      if(xi < 0){
      xi = 490;
      }
    }
    if( nivel == 5 ){
      xi = xi - 9;
      if(xi < 0){
      xi = 490;
      }
    }
    if( nivel == 6 ){
      tela = 3;
    }
    if( vidas == 0 ){
       tela = 3;
       vidas = 3;
       pontos = 0;
       nivel = 1;
    }
  }
    if( tela == 3 ){
    
      fill(0);
      rect(0, 0, 500, 355);
      textSize(50);
      fill(200,30,40);
      text('ゲームオーバー', 70, 160);
      text('ゲームオーバー', 70, 210);
      textSize(40);
      text('GAME OVER', 110, 90);
      text('PONTOS: '+cont, 100, 270);
      textSize(25);
      text('PRESS SPACE', 150, 330);
    if(keyIsDown(32)){
      tela = 1;
      cont = 0;
      vidas = 3;
      pontos = 0;
      nivel = 1;
    }
      
  }
}