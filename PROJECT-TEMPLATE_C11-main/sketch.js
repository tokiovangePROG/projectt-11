
var ship, shipAntion;
var seaGround, seaImage, seaImage2;
function preload(){
 shipAntion = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  seaImage2 = createSprite(600,200,100,100);
  seaImage2.addImage("sea",seaImage);
  seaImage2.scale = 0.3;
  seaImage2.velocityX = -4;

  ship = createSprite(100,200,50,50);
  ship.addAnimation("boiando",shipAntion);
  ship.scale = 0.2;
}

function draw() {
  background("blue");
  console.log(seaImage2.x)
  if(seaImage2.x < -100){
    seaImage2.x = seaImage2.width - 3550
  }
    drawSprites();

 
}
