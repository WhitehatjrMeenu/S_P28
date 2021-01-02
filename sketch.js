const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var ground, mango1, mango2, mango3, mango4, mango5, mango6, mango7, Mtree, launcher, boy;
var slingShot;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1050, 600);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here
  

	boy = new Juno();
	ground = new Ground();
  Mtree = new Tree();
  launcher = new Stone(80,210);
	mango1 = new Mango(850,200,50,50);
	mango2 = new Mango(900,240,40,50);
	mango3 = new Mango(750,280,50,50);
	mango4 = new Mango(800,240,40,50);
	mango5 = new Mango(850,300,50,50);
	mango6 = new Mango(930,300,40,50);
  mango7 = new Mango(970,250,30,30);
  slingShot = new SlingShot(launcher.body,{x: 100, y:445});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("lightblue");

  boy.display();
  ground.display();
  Mtree.display();
  launcher.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  slingShot.display();

  detectCollision(launcher,mango1);
  detectCollision(launcher,mango2);
  detectCollision(launcher,mango3);
  detectCollision(launcher,mango4);
  detectCollision(launcher,mango5);
  detectCollision(launcher,mango6);
  detectCollision(launcher,mango7);

  fill("red");
  strokeWeight(5);
  stroke("black");
  textSize(25);
  text("Press Space to get another mango  !",50,50);
}

function mouseDragged()
{
    Matter.Body.setPosition(launcher.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    slingShot.fly();
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(launcher.body, {x:235, y:420}) 
	  slingShot.attach(launcher.body);
	}
  }

function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position



var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if (distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}