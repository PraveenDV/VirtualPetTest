class Food{
    constructor(){
        this.image=loadImage("images/Milk.png");
         this.foodStock=0;
         this.lastFed=null;
    
    }

    

    getFoodStock(){
        var getFood=database.ref("Food");
        getFood.on("value", function(data){
            food=data.val();
        })
    }

    updateFoodStock(foods){
        database.ref("/").update({
            food:foods 
        });

    }

    deductFood(x){
       

        if(x<=0){
            x=0;
          }else{
            x=x-1;
          }
        
          database.ref("/").update({
            food:x
          });
          
    }

    display(){
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,620,220,70,70);

        if(this.foodStock!=0){
            for(var i; i<this.foodStock; i++){
                if(this.foodStock%10===0){
                    x=80;
                    y=y+50;
                }

                image(this.image,620,220,70,70);
                x=x+30;
            }
        }
     //   textSize(15)
 // fill("white");
 // text("Food remaining:"+this.foodStock, 500,100);
    }

}

