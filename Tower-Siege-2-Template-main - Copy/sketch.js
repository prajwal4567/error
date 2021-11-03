const Engine = Matter.Engine;
 const World = Matter.World; 
 const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;
  var engine, world;
  var count=0;
   var holder,polygon,ground,block1; 
   var stand1,stand2;
    var polygon; 
    var slingShot; 
    var background_img,x,y;
   function preload()
   { 
     background_img=loadImage("background.jpg")
     } 
   function setup() 
   { createCanvas(900,400); engine = Engine.create();

     world = engine.world; 
     Engine.run(engine);
    ground = new Ground();
     // block1 = new Block(200,200,30,40); 
     //block1 = createSprite(300,300,30,40);
       //polygon holder with slings 
     
       keyPressed()
      } 
       function draw() { 
        Engine.update(engine); 
        //background(background_img); 
        
       
       ground.display();
       text("score:"+count,850,50);
        drawSprites();
        
      } 
      function keyPressed()
      { if(keyCode === 32){
         block1 = new Block(mouseX,mouseY,30,40); 
         block1.display();
         count=count+1;
        }
      }
