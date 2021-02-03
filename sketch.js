 var wall,thickness;

 var bullet,speed,weight;
 
 function setup() {
  createCanvas(800,400);

 thickness=random(22,83)
  speed=random(223,321)
 weight=random(30,52)

 bullet=createSprite(50,200,50,50)
 bullet. debug=true
 wall=createSprite(1200,200,thickness,height/2)
 wall. debug=true
 bullet.shapeColor="white"
 wall.shapeColor="yellow"

 bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  

  if(wall.x-bullet.x<(bullet.width+width)/2){
    bullet.velocityX=0
    var deformation=0.5*weight*speed*speed/22500

    if(deformation<180){
      bullet.shapeColor=color(255,0,0)
    }

    if(deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0)

      if(deformation<100){
        bullet.shapeColor=color(0,255,0)
      }
      }
  }

hasCollided(bullet,wall)

  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.X + bullet-width;
  wallLeftEdge=wall.X;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  {
    return false
  }
}
