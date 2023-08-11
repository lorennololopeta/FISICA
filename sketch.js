
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	Engine = Engine.create();
	World = Engine.world;

	//Crie os Corpos aqui.
    var plane_options={
	isStatic: true	
	}

	Engine.run(Engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  drawSprites();
 
}



