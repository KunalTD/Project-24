const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render=Matter.Render;

var engine, world;
var hammer;
var rubber;
var stone;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber= new Rubber(1000,500, 50);
    stone= new Stone(850, 500, 170, 90);
    iron= new Iron(600,500, 130,130);

  
    var render = Render.create({ 
    element: document.body, 
    engine: engine, 
    options: { 
        width: 1200, 
        height: 600, 
        wireframes: false } 
    }); 
    Render.run(render);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();

    
 
}