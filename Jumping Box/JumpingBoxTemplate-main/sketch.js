var canvas;
var music;
var block1,block2,block3,block4,box
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(100,580,200,20)
block1.shapeColor="red"
block2=createSprite(300,580,200,20)
block2.shapeColor="yellow"
block3=createSprite(500,580,200,20)
block3.shapeColor="green"
block4=createSprite(700,580,200,20)
block4.shapeColor="blue"
box=createSprite(random(20,780),100,40,40)
box.shapeColor="orange"
box.velocityX=5
box.velocityY=5

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites()
box.bounceOff(edges)

//box.bounceOff(block1)
//box.bounceOff(block2)
//box.bounceOff(block3)
//box.bounceOff(block4)



    //add condition to check if box touching surface and make it box
if(box.isTouching(block1) && box.bounceOff(block1)){
    box.shapeColor="red"
}
if(box.isTouching(block2) && box.bounceOff(block2)){
    box.shapeColor="yellow"
}
if(box.isTouching(block3) && box.bounceOff(block3)){
    box.shapeColor="green"
}
if(box.isTouching(block4) && box.bounceOff(block4)){
    box.shapeColor="blue"
}
    drawSprites()
}
