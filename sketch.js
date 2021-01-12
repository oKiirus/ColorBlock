

function preload(){
    
}


function setup(){
    canvas = createCanvas(800,800);

    rBlock = createSprite(100, 775, 175, 20)
    rBlock.shapeColor = "red"
    yBlock = createSprite(300, 775, 175, 20)
    yBlock.shapeColor = "yellow"
    bBlock = createSprite(500, 775, 175, 20)
    bBlock.shapeColor = "blue"
    gBlock = createSprite(700, 775, 175, 20)
    gBlock.shapeColor = "green"  
    Ball = createSprite(400, 400, 50, 50)
    Ball.shapeColor = "white"  
    
    Ball.velocityX = random(-7, 7)
    Ball.velocityY = random(-7, 7)

    edges = createEdgeSprites()

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    Ball.bounceOff(edges)

    collideF(rBlock, "red")
    collideF(yBlock, "yellow")
    collideF(bBlock, "blue")
    collideF(gBlock, "green")


    drawSprites()
    //add condition to check if box touching surface and make it box
}

function collideF(Block, Color){
if(Ball.isTouching(Block)){
    Ball.shapeColor = Color
    Ball.bounceOff(Block)
}

}