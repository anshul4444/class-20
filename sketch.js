var movingRect,fixedRect;

function setup() {
  createCanvas(displayWidth,displayHeight);
  movingRect = createSprite(400 ,200, 80, 30);
  fixedRect = createSprite(300, 800, 50, 80);

  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "green";

  movingRect.velocityY = 5;
  fixedRect.velocityY = -5;

}

function draw() {
  background(0);  

 // movingRect.x = mouseX;
 // movingRect.y = mouseY;

  // movingRect.width/2 + fixedRect.width/2 (min distance)

  //console.log(movingRect.x - fixedRect.x)

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y <  movingRect.height/2 + fixedRect.height/2
    ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "green";
  }

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
      movingRect.velocityX = movingRect.velocityX * (-1); // -5 * -1 = 5
      fixedRect.velocityX = fixedRect.velocityX * (-1); // 5 * -1 = -5
  }

  if (movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1); 
  }

  drawSprites();
}