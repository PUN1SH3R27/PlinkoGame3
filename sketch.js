const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles=[];
var plinkos=[];
var divisions=[];
var score=0;
var particle;
var count=0
var gameState=0
function setup() {
  createCanvas(801,550);
  rectMode(CENTER)
  engine = Engine.create();
	world = engine.world;


  Ground1= new ground(width/2,520,1200,15)
  Border1=new DivisionObject(-7,415,10,1200)
  Border2=new DivisionObject(806,400,10,1200)



  for (var i= 10; i<= width; i=i+ 78.12)
  {
    divisions.push(new DivisionObject(i,415,10,200));
  }

  for (var j= 10; j <= width; j=j+52)
  {
    plinkos.push(new Plinko(j,55));
  }
  for (var j= 10; j <= width-10; j=j+52)
  {
    plinkos.push(new Plinko(j,125));
  }
  for (var j= 10; j <= width-10; j=j+52)
  {
    plinkos.push(new Plinko(j,195));
  }
  for (var j= 10; j <= width-10; j=j+52)
  {
    plinkos.push(new Plinko(j,265));
  }



}




function draw() {
  background("black"); 
  Engine.update(engine);
  
push()
fill("white")
scale(1.5)
  text("Score:"+ score, 5,12)
  text("500", 24,220)
  text("500", 76,220)
  text("500", 128,220)
  text("500", 180,220)
  text("100", 232,220)
  text("100", 284,220)
  text("100", 336,220)
  text("200", 388,220)
  text("200", 440,220)
  text("200", 492,220)
pop()

  display2()

  if ( gameState ==1) {
    push()
    textSize(100);
    text("GameOver", 150, 250);
    pop()
    //return
  }


  

  if(particle!=null){

    particle.display()

    if (particle.body.position.y>501){
       
      if(particle.body.position.x>0 && particle.body.position.x<320  ){
        score=score+500
        particle=null
        if ( count>= 5) gameState =1;
      }     
    
    else if (particle.body.position.x> 321 && particle.body.position.x < 586  ) 
    {
          score = score + 100;
          particle=null;
          if ( count>= 5) gameState =1;

    }
    else if (particle.body.position.x >587 && particle.body.position.x < 851  )
    {
          score = score + 200;
          particle=null;
          if ( count>= 5)  gameState =1;

    }      
  }
  }
  for(var i= 0;i<divisions.length;i++){

    divisions[i].display()

  }

}
  
    
                                   






function mousePressed(){

  if(gameState==0){
    count++
    particle= new Particle (mouseX,10,10,10) 
  }
}


function display2(){

  Ground1.display();
  Border1.display()
  Border2.display()


  for(var j= 0;j<plinkos.length;j++){

    plinkos[j].display()
  }
  


}


