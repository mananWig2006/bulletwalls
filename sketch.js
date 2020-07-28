
var wall,thickness;
var speed, weight,bullet; 

function setup() {
  createCanvas(1600, 400);


	speed=random(223,321);
	weight=random(30,52);

	thickness = random(22,83);


	bullet=createSprite(200, 200, 50,50);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1400,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}







  

function draw() {
	background(0,0,225);
  
  
	






	if(hasCollided(bullet,wall))
	{
	
		bullet.velocityX=-0;
	
		var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);
	
		if(damage>10)
		{
			wall.shapeColor=(255,0,0);
	
		}
	
		if (damage<10)
		{
			wall.shapeColor=(0,225,0);
	
	
		}
	}
  
	drawSprites();

}
	

  
 

  function hasCollided(lbullet,lwall)
  
  {
  
  
		  bulletRightEdge=lbullet.x+lbullet.width;
		  wallLeftEdge=lwall.x;
  
		  if(bulletRightEdge>=wallLeftEdge)
		  {
			  return true;
  
  
		  }
		  return false;
  
  
  
  
	  }
  

