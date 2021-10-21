
var box; //memory with a name
var edges;
var box2;

function setup() {
  createCanvas(400, 400);

  // var objectname = createSprite(x,y,width,height)

  box = createSprite(100,100,40,40);
  box.shapeColor = "black";

  box.velocityY  = 4;
  box.velocityX = 3;

  //box.lifetime= 100;

  // sprite.setCollider("rectangle",x-offset,y-offset,width,height)
  // sprite.setCollider("circle",x-offset,y-offset,radius);
 //box.setCollider("circle",0,0,50);

  box2 = createSprite(100,300,30,30);
 box2.shapeColor = "green";
 box2.debug = true;

  box2.velocityY  = -5;
 box2.velocityX = 4;
  
  
  edges = createEdgeSprites(); // create EDGES 
  
}

function draw() {

  background("blue"); // 0 to 255;

  box.bounceOff(edges);
  box2.bounceOff(edges);

  

 if(box.isTouching(box2)){
   box.destroy();
 }




  drawSprites();
  


}





