
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground;																									
var dustbin1;
var paper;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

paper = new Paper (130, 350, 20,20);
ground = new Ground (400,665,1700,10);
dustbin1 = new Dustbin (1050,545,230,230);

}

function draw() {
	Engine.update(engine);  	
	background("pink");	  
	
	 dustbin1.display();
	 ground.display();
	 paper.display();

  drawSprites();
}

function keyPressed()
{	 
	if (keyCode === UP_ARROW) 
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y :-85});
	}
}