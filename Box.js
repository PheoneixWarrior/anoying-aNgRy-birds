class Box extends BaseClass {
  constructor(x, y, width, height) {
  super(x,y,width, height)
  this.image = loadImage("sprites/wood1.png")
  }
  display(){
    
    super.display();
    var pos =this.body.position;
    var angle = this.body.angle;
  }
};
