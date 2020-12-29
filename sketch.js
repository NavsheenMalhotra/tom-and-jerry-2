
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tom;
var jerry;
var ground;
var cheeseImg;
var cutejerryImg, jerrycheeseImg;
var jerrycheese2Img;
var tomImg;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23;
function preload()
{
  cheeseImg=loadImage("cheese.png");
  cutejerryImg=loadImage("cutejerry.png");
 jerrycheeseImg= loadImage("jerryCheese.jpg");
 jerrycheese2Img=loadImage("jerrycheese2.png");
 tomImg=loadImage("tom.jpg");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

tom=new Tom(500, 630, 50, 50);
jerry=new Jerry(400, 640, 60, 60);
ground=new Ground(600,700,1200,20)
b1=new Block(400, 25, 700, 10);
b2=new Block(55, 330, 10, 600 )
b3=new Block(110, 630, 120, 10)
b4=new Block(130, 160, 160, 10)
b5=new Block(210, 130, 10, 70)
b6=new Block(180, 100, 70, 10)
b7=new Block(160, 250, 10, 180)
b8=new Block(250, 340, 180, 10)
b9=new Block(340, 370, 10, 60)
b10=new Block(380, 400, 250, 10)
b11=new Block(510, 380, 10, 50)
b12=new Block(540, 350, 70, 10)
b13=new Block(300, 130, 10, 200)
b14=new Block(330, 230, 210, 10)
b15=new Block(360, 260, 10, 70)
b16=new Block(90, 450, 80, 10)
b17=new Block(130, 480, 10, 70)
b18=new Block(250, 510, 230, 10)
b19=new Block(360, 530, 10, 50)
b20=new Block(310, 550, 100, 10)
b21=new Block(130, 550, 150, 10)
b22=new Block(250, 680, 10, 80)
b23=new Block(285, 640, 80, 10)

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("white");
  tom.display()
  jerry.display();
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  
  drawSprites();
 
}



