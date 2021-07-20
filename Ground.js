class ground {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          'restitution':0,
          'friction':2,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options, {isStatic: true});
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      stroke("black")
      strokeWeight(3)
      fill("#045C72");
      rect(0, 0, this.width, this.height);
      pop()
    }
  };