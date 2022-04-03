
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var fan,fan1,fan2,fan3;

var ball;

var ground;

var btn1;
var btn2;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    //frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
    ground = Bodies.rectangle(0,400,400,20,ground_options);
    World.add(world,ground);
    
    ball = Bodies.circle(200,20,20,ball_options);
    World.add(world,ball);
  
   btn2 = createImg('up.png');
   btn2.position(20,30);
   btn2.size(50,50);
   btn2.mouseClicked(vForce);
  
   fan = new Ground (50,370,50,30);
   fan1 = new Ground (150,370,50,30)
   fan2 = new Ground (250,370,50,30);
   fan3 = new Ground (350,370,50,30);

   //ground = Bodies.rectangle(100,300,100,20,ground_options);
   //World.add(world,ground);

   

   rectMode(CENTER);
   ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
 /* Matter.Body.rotate(ground1,angle);
 push();
  translate(ground.position.x,ground.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;
*/
 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,750,20);
  fan.show()
  fan1.show()
  fan2.show()
  fan3.show()
  Engine.update(engine);
 
//console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  