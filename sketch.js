
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// var engine , world;
// var paper,ground;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  paper = new PaperBall(70,100,30);
  ground = new Ground(400,690,800,60);
dustbinBase= new Dustbin(650,650,150,20);
dustbinSide1 = new Dustbin(570,565,20,150);
dustbinSide2 = new Dustbin(725,565,20,150);

	
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  paper.display();
dustbinSide2.display();

dustbinSide1.display();

dustbinBase.display();
ground.display();

  //drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW ){
  Matter.Body.applyForce(paper.body, paper.body.position, {x:85,y:-85});
}
}
