class plank {
    constructor(x, y, height) {
      var options = {
          'restitution':0.8,
          'friction': 1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(255, 0, 0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  