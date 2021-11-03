class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
      }
      this.visiblity=255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,50, 50);
      image(this.image,pos.x,pos.y);
      
         
       
    }
}