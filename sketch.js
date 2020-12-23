var fixedobject,movingobject;
var gameObject1,gameObject2;

function setup() {
  createCanvas(1200,800);
 fixedobject=createSprite(200,200,50,80);
  movingobject=createSprite(500,200,80,30);
  gameObject1=createSprite(300,200,50,80);
  gameObject2=createSprite(400,200,50,80);

 fixedobject.shapeColor="green";
  movingobject.shapeColor="green";
  gameObject1.shapeColor="green";
  gameObject2.shapeColor="green";

 fixedobject.debug=true;
  movingobject.debug=true;
  gameObject1.debug=true;
  gameObject2.debug=true;
}

function draw() {
  background(0,0,0); 

  movingobject.x=World.mouseX;
  movingobject.y=World.mouseY;
  
 if(isTouching(movingobject,gameObject1)){
  movingobject.shapeColor="red";
   gameObject1.shapeColor="red";
 }
 else{
 movingobject.shapeColor="green";
    gameObject1.shapeColor="green";
 }

  drawSprites();
}
function isTouching(object1,object2){

  if(object1.x-object2.x <=object2.width/2+object1.width/2 
    &&object2.x-object1.x <= object2.width/2+object1.width/2 
    && object1.y-object2.y <=object2.height/2+object1.height/2
    &&object2.y-object1.y <=object2.height/2+object1.height/2){
  return true;
  }
  else{
  return false;
  }
}