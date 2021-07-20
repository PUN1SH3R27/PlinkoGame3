class Plinko {
    constructor(j,y) {
      var options = {
          isStatic: true,
        //  'restitution':0.7,
        //  'friction':0,
        //  'density':0.2
      }
      this.body = Bodies.circle(j,y,8,options);
      this.radius= 8
      World.add(world, this.body);
      
    }
    display(){
    

      var pos =this.body.position;
      push()
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      fill("White");
     // stroke("Black")
      ellipse(0,0,this.radius, this.radius);
      pop() 
    }
  };