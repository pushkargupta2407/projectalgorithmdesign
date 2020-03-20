var fixedRect,movingRect;
var game1,game2,game3,game4;

function setup() {
  createCanvas(1200,800);
 fixedRect =  createSprite(400,100, 50, 80);
 fixedRect.shapeColor = "green";
 fixedRect.debug = true;
 fixedRect.velocityX = 5;

 movingRect = createSprite(400,800,80,30);
 movingRect.shapeColor = "green";
 movingRect.debug = true;
 movingRect.velocityY = -5;

 game1=  createSprite(100,100, 50, 50);
 game1.shapeColor = "green";

 game2=  createSprite(200,100, 50, 50);
 game2.shapeColor = "green";

 game3=  createSprite(300,100, 50, 50);
 game3.shapeColor = "green";

 game4=  createSprite(400,100, 50, 50);
 game4.shapeColor = "green";
 
}

function draw() {
  background(0,0,0); 
  
 // movingRect.y = World.mouseY;
 // movingRect.x = World.mouseX;
  
  if(isTouching(movingRect,game1)){
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green"; 
  }

bounceOff(movingRect,fixedRect);
  
  drawSprites();
}

