var helicopterimg, helicopter, package,packageimg;
var box,rbox,lbox;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterimg=loadImage("helicopter.png")
	packageimg=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	background(80,80,80);
	rectMode(CENTER);
	
	box=createSprite(400,650,200,20);
	lbox=createSprite(300,610,20,100);
	rbox=createSprite(500,610,20,100);
	box.shapeColor=color("red");
	lbox.shapeColor=color("red");
	rbox.shapeColor=color("red");

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageimg)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterimg)
	helicopter.scale=0.6

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 
}

function keyPressed() {
 if (keyPressed = DOWN_ARROW) {
	packageBody.isStatic=false;
	package.isStatic=false;
	package.x=packageBody.position.x;
	package.y=packageBody.position.y;
	package.velocityx=4;
  }
}



