var bgImage
var pIdle
var pWalk


function preload() {
  bgImage= loadImage("Mountain.png")
  pIdle= loadAnimation("penguinidle.png")
  pWalk= loadAnimation("penguinWalk2.png", "penguinWalk3.png")
}

function setup() {
  createCanvas(displayWidth-100,displayHeight-150);
  penguin= createSprite(50,750,20,20)
  penguin.addAnimation("Idle", pIdle)
  penguin.addAnimation("walk", pWalk)
  
}


function draw() {
  background(bgImage);  

  if(keyWentDown("RIGHT_ARROW")) {
    penguin.velocityX= 2
    penguin.changeAnimation("walk")
  }
  
  if(keyWentUp("RIGHT_ARROW")) {
    penguin.velocityX= 0
    penguin.changeAnimation("Idle")
  }

  if(keyWentDown("LEFT_ARROW")) {
    penguin.velocityX= -2
    penguin.changeAnimation("walk")
  }

  if(keyWentUp("LEFT_ARROW")) {
    penguin.velocityX= 0
    penguin.changeAnimation("Idle")
  }

  drawSprites();
}