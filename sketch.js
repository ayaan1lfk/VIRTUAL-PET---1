//Create variables here
var Dog, dog, happyDog;
var database;
var foodS, foodStock;
function preload(){
  //load images here
  dog = loadImage('dogImg.png');
}

function setup() {
  createCanvas(500, 500);
  Dog = createSprite(350,350,20,20);
  Dog = addImage(dog);
  database= firebase.database();
  foodStock=database.ref('Food')
  foodStock.on("value", readStock)

}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    
    writeStock(foodS);
    dog = addImage('dogImg1.png');
    
  }
  drawSprites();
  //add styles here
  textSize(20);
  fill("green")
  stroke();
  text("FOOD LEFT: "+ foodS, 350,400);
  text("Note: Press UP_ARROW Key to feed Drago Milk");
}

//Function to read values from DB;
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB;
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



