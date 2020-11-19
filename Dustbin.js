class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.dustbin = loadImage("sprites/dustbingreen (1).png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

    }
    display(){
      
      image(this.dustbin,550,480,200,200);
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };