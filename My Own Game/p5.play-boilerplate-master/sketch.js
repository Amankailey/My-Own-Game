var Zombie, ZombieImg;
var player, playerImg, playerShootingImg;
var bg, bgImg;


function preload()
{
 playerImg=loadImage("assets/shooter_2.png");
 ZombieImg=loadImage("assets/zombie.png");
 playerShootingImg=loadImage("assets/shooter_3.png");
 bgImg=loadImage("assets/bg.jpeg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale=1.1;

  player=createSprite(displayWidth-1150,displayHeight-300,50,50);
  player.addImage(playerImg);
  player.scale=0.65;

  Zombie=createSprite(displayWidth-350,displayHeight-300,50,50);
  Zombie.addImage(ZombieImg);
  Zombie.scale=0.27
}

function draw() {
  background(255,255,255);  

  if(keyDown("UP_ARROW")){
    player.y-=30;
  }

  if(keyDown("DOWN_ARROW")){
    player.y+=30;
  }

  if(keyWentDown("SPACE")){
    player.addImage(playerShootingImg)
  }

  if(keyWentUp("SPACE")) {
    player.addImage(playerImg)
  }
  
  drawSprites();
}