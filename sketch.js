
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
    createCanvas(1000, 600);

    engine = Engine.create();
	world = engine.world;

		ground1 = new ground(500, 590, 1000, 10 );
		
        ball1 = new ball(300, 300, 50);

        block1 = new block(750, 50, 30, 30);

        

	Engine.run(engine);
		console.log(block1);
}

function draw () {

    background("red");
   
    Engine.update(engine);
   
    ball1.display();
    ground1.display();
    block1.display();

    
}