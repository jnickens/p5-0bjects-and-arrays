var allMyBubbles = [];
var numOfBubbles = 500;
var sizeOfBubbles = 45;
var berryblue = 50;
var applered = 255;
var limegreen = 50;

function setup(){
    createCanvas(600,400);
    for(var i = 0; i  < numOfBubbles; i++){
    allMyBubbles[i] = new Bubble(random(0,600), random(0,400));
    berryblue = random(0,255);
    applered = random(0,255);
    limegreen = random(0,255);
    
 }
}

 function draw(){
    background(255,0,255);
   for(var i = 0; i < allMyBubbles.length; i++){
         allMyBubbles[i].display();
         allMyBubbles[i].move();
    }
}

function Bubble(x,y){
    this.x = x;
    this.y = y;
    this.display = function(){
       
        fill(berryblue,applered,limegreen);
        stroke(355);
       
        ellipse(this.x , this.y ,sizeOfBubbles,sizeOfBubbles);
   }
  
    this.move = function(){
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);
    }

}