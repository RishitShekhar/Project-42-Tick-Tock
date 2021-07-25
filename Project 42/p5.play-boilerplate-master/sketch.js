var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(200, 200, 50, 80);
 fixedRect.shapeColor = "green";
 movingRect = createSprite(400,200,80,30);
 movingRect.shapeColor = "green";

 gameObject1 = createSprite(100,100,50,50);
 gameObject1.shapeColor = "green";
 gameObject2 = createSprite(200,100,50,50);
 gameObject2.shapeColor = "green";
 gameObject3 = createSprite(300,100,50,50);
 gameObject3.shapeColor = "green";
 gameObject4 = createSprite(400,100,50,50);
 gameObject4.shapeColor = "green";
}

function draw() {
  background(0,40,0);  

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;


if(isTouching(movingRect, gameObject2)){
  movingRect.shapeColor = "green";
  gameObject2.shapeColor = "green";

}
else{
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
}
  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2
&& object2.x -  object1.x < object2.width/2 + object1.width/2 
&& object1.y - object2.y < object2.width/2 + object1.width/2
&& object2.y -  object1.y < object2.width/2 + object1.width/2){
    return true
  }
  else{
   
return false
}}