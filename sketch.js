var m,f;

function setup() {
  createCanvas(800,400);
  m=createSprite(400, 200, 50, 50);
  f=createSprite(200,100,50,50);
  m.shapeColor="green";
  f.shapeColor="green";
  
}

function draw() {
  background(255,255,255); 
   m.x=mouseX;
   m.y=mouseY;
   if(m.y-f.y<m.height/2+f.height/2 && f.y-m.y<f.height/2+m.height/2 &&
    m.x-f.x<m.width/2+f.width/2 && f.x-m.x<f.width/2+m.width/2){
     m.shapeColor="red";
     f.shapeColor="red";
   }
   else{
   m.shapeColor="green";
   f.shapeColor="green";
   }
  drawSprites();
}