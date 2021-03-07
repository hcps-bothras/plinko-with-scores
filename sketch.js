var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight=300;
var score = 0;
var count = 0;
var gameState = "start";


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

    for (var k = 0; k <=width; k = k + 80) {
     divisions.push (new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
    for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50)  {
       plinkos.push(new Plinko(j,375));
    }  
}
 

function draw() {
  background("black");
  textSize(20)
  //text("Score : "+score,20,30);
  Engine.update(engine);

  text ("500", 25, 525);
  text ("400", 105, 525);
  text ("200", 180, 525);
  text ("200", 265, 525);
  text ("100", 340, 525);
  text ("200", 425, 525);
  text ("200", 500, 525);
  text ("200", 585, 525);
  text ("400", 665, 525);
  text ("500", 745, 525);
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
  
   if (particle!= null){
     particle.display();

     if (particle.body.position.y>760){
       if(particle.body.position.x<300){
         score = score+500;
         particle = null;
         if (count>=5){
           gameState = "end";
         }
       }
     else if (particle.body.position.x<600 && particle.body.position.x>301){
        score = score+100;
        particle = null;
        if (count>=5){
          gameState = "end";
        }
     }
     else if (particle.body.position.x<900 && particle.body.position.x>601){
        score = score+200;
        particle = null;
        if (count>=5){
          gameState = "end";
        }
     }
    }
  }

  if (gameState === "end"){
    textSize(20);
    text ("GAME OVER", 350,450)
}
}

function mousePressed(){
  particle = new Particle (mouseX, 10, 5);
  count++;
}