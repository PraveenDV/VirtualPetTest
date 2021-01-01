//Create variables here
var happyDog, dog, database, foodS, Dog, addFoodButton,feedButton;

function preload()
{
  //load images here
  happyDog=loadImage("images/dogImg1.png");
  dog=loadImage("images/dogImg.png");

}

function setup() {
  createCanvas(1200, 600);
  database=firebase.database();
  console.log(database);

 Dog=createSprite(1050,300,10,10);
 Dog.addImage(dog);
 Dog.scale=0.2;

 foodS=new Food();
 

 addFoodButton=createButton('Add food');
 addFoodButton.position(1050,70);
 addFoodButton.mousePressed(addFood);

 feedButton=createButton('Feed Dog');
 feedButton.position(900,70)

 //foodStock=database.ref('Food');
 //foodStock.on("value", readStock);



}


function draw() {  
  background("green");  
  drawSprites();
  //add styles here
 // textSize(20);
  //fill("blue");
  //text("Press up arrow key to feed the dog", 100, 30);


  textSize(24);
  fill("red");
  text("Scroll Right ->->", 150, 30)
  

  /*if(keyWentDown(UP_ARROW)){
    //writeStock(foodS);
    Dog.addImage(happyDog);
  }*/

  foodS.display();

//  form.display();


  }

  function addFood(){
    foodS++;
    database.ref('/').update({
      foodStock:foodS
    });   
  }





 


