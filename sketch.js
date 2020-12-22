var wall,thickness;
var bullet,speed,weight;
var bImage;

function preload(){
  bImage=loadImage("bullet.jpg");
}
function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;
  bullet.addImage(bImage);
  bullet.scale=0.2;
  bullet.setCollider("rectangle",0,0,10,10);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
  bullet.bounce(wall);

    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      fill("white");
      textSize(50);
      text("Deformation= " + Math.round(deformation), 500,50);
    }
    if(deformation<180 && deformation>100){
      fill("white");
      textSize(50);
      text("Deformation= " + Math.round(deformation), 500,50);
    }
    if(deformation<100){
      fill("white");
      textSize(50);
      text("Deformation= " + Math.round(deformation), 500,50);
    }

  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

	if(damage>10)
	{
    wall.shapeColor=color(255,0,0);	
    fill("white");
    textSize(50);
    text("Damage= " + Math.round(damage), 500,350);
	}

	if(damage<10)
	{
    wall.shapeColor=color(0,255,0);
    fill("white");
    textSize(50);
    text("Damage= " + Math.round(damage), 500,350);
	}	
  }

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}