var bullet, wall;

var speed,weight , thickness;





function setup() {

 createCanvas(1600,400);

 bullet = createSprite(50, 200, 50, 20);

 thickness =Math.round(random(22,83))

 wall = createSprite(1100,200,thickness, 200);

 wall.shapeColor = color(80,80,80);

  speed =Math.round(random(55,90));

 weight = Math.round(random(400,1500));

}

function draw() {
  background("white");
  bullet.velocityX = speed;
  hasCollided(bullet,wall);
  if (hasCollided(bullet,wall)=== true){
    bullet.velocityX = 0;
    var damage = (0.5 * weight*speed*speed)/(thickness*thickness*thickness);
    if (damage > 10){
      wall.shapeColor = color(255,0,0);

    }
    if (damage <100){
      wall.shapeColor = color(0,255,0);
    }
  }

 drawSprites();
}
