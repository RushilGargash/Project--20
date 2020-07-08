var Zenia,Tourus,Cyclap,Car;
var weight,weight2,weight3,weight1;
var speed1,speed2,speed3,speed;
var deformation,deformation1,deformation2,deformation3,constantValue;
var b1,b2,b3,b4;
var wall1,wall2,wall3,wall;

function setup(){

  createCanvas(800,400);
Car=createSprite(30,70,10,10);
Zenia=createSprite(30,170,10,10);
Tourus=createSprite(30,270,10,10);
Cyclap=createSprite(30,370,10,10);

Zenia.shapeColor="white";
Tourus.shapeColor="white";
Cyclap.shapeColor="white";
Car.shapeColor="white";



b1=createSprite(400,80,800,10);
b2=createSprite(400,180,800,10);
b3=createSprite(400,280,800,10);
b4=createSprite(400,380,800,10);
b1.shapeColor="white";
b2.shapeColor="white";
b3.shapeColor="white";
b4.shapeColor="white";

walll=createSprite(790,35,20,80)
wall1=createSprite(790,135,20,80);
wall2=createSprite(790,235,20,80);
wall3=createSprite(790,335,20,80);

weight=random(1500,3200);
weight1=2260;
weight2=1522
weight3=3000

speed=random(20,100);
speed1=60;
speed2=50;
speed3=45;

Zenia.velocityX=3;
Tourus.velocityX=2;
Cyclap.velocityX=1;
Car.velocityX=6;

constantValue=22500

deformation1=(0.5*weight1*speed1*speed1)/constantValue;
deformation2=(0.5*weight2*speed2*speed2)/constantValue;
deformation3=(0.5*weight3*speed3*speed3)/constantValue;
}

function draw() {
  background("black"); 
  text("Zenia",20,115);
  text("Tourus",20,205);
  text("Cyclap",20,325);
  text("Random",20,45);
  console.log(Zenia.x,wall1.x) ;
if(wall1.x-Zenia.x<=(Zenia.width/2+wall1.width/2+10)&&deformation1>=180){
Zenia.velocityX=0;
Zenia.shapeColor="red";
//stroke="red";
text("FATAL",380,110);
}
if(wall2.x-Tourus.x<=(Tourus.width/2+wall2.width/2+10)&&deformation2<=100){
  Tourus.velocityX=0;
  Tourus.shapeColor=color(0,255,0);
  text("SAFE",380,200);
}
if(wall3.x-Cyclap.x<=(Cyclap.width/2+wall3.width/2+10)&&deformation3<=180&&deformation3>=100){
  Cyclap.velocityX=0;
  Cyclap.shapeColor="yellow";
  text("AVERAGE",380,320);
}
if(wall1.x-Car.x<=(Car.width/2+wall1.width/2+10)){
Car.velocityX=0;
deformation=(0.5*weight*speed*speed)/constantValue;
if(deformation<=80){
  Car.shapeColor=color(0,255,0);
  text("SAFE",380,50);
}
if(deformation>=180){
  Car.shapeColor="red";
  text("FATAL",380,50);
}
if(deformation>=180&&deformation<=180){
  Car.shapeColor="yellow";
  text("AVERAGE",380,50);
}



}



  drawSprites();
}