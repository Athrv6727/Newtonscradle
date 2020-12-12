
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	platform = new Roof(width/2,height/4,width/7,20);
    bobObj1 = new Bob(50,140,70);
	bobObj2 = new Bob(70,140,70);
	bobObj3 = new Bob(90,140,70);
	bobObj4 = new Bob(110,140,70);
	bobObj5 = new Bob(130,140,70);
	rope1=new Rope(bobObj1.Body,platform.Body,-bobDiameter*2,0)
	rope2=new Rope(bobObj2.Body,platform.Body,-bobDiameter*2,0)
	rope3=new Rope(bobObj3.Body,platform.Body,-bobDiameter*2,0)
	rope4=new Rope(bobObj4.Body,platform.Body,-bobDiameter*2,0)
	rope5=new Rope(bobObj5.Body,platform.Body,-bobDiameter*2,0)

	var mouse = Mouse.create(render.canvas),
	mouseConstraint = MouseConstraint.create(engine, {
		mouse: mouse,
		constraint: {
			stiffness: 0.2,
			render: {
				visible: false
			}
		}
	});

World.add(world, mouseConstraint);

render.mouse = mouse;

Render.lookAt(render, {
	min: { x: 0, y: 0 },
	max: { x: 800, y: 600 }
});


return {
	engine: engine,
	runner: runner,
	render: render,
	canvas: render.canvas,
	stop: function() {
		Matter.Render.stop(render);
		Matter.Runner.stop(runner);
	}
};

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 platform.display()
 bobObj1.display()
 bobObj2.display()
 bobObj3.display()
 bobObj4.display()
 bobObj5.display()
 rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()
}



