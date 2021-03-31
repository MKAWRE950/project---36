class Food {
    constructor(foodS,lastFed){
        this.image = loadImage("Milk.png");
        this.foodS = foodS;        
        this.lastFed = lastFed;   
    }
    
    getFoodStock(){      
        return this.foodS;
    }
    updateFoodStock(x){
        
        if(x <= 0){
            x=0;
        }else{
            x=x-1;
        }
        this.foodS = x;
          
    }
    deductFood(){
        if(this.foodS > 0){
            this.foodS = this.foodS -1;
        } 
    }
    getFedtime(){
        return this.lastFed;
    }
    display(){ 
        var x=700,y=100; 
       
        if(foodS!=0){ 
            for(var i=0;i<this.foodS;i++){
                 if(i%10==0){ 
                    x=80; 
                    y=y+50; 
                } 
                image(this.image,x,y,50,50); 
                x=x+30;
            }
        }
    }             
        




}