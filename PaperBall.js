class PaperBall {
  constructor(x,y,radius){
      var options = {
          isStatic:false,
          restitution:0.1,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world,this.body);
      this.image = loadImage("sprites/paper.png");
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);    
    
    imageMode(RADIUS);
    image(this.image, 0, 0, this.radius, this.radius);
    pop();
  }
}