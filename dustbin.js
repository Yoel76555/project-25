class Dustbin {
    constructor(x,y,width,height){
         this.x=x;
         this.y=y;
         this.width=width;
         this.height=height;
         this.rightBody=Bodies.rectangle(710,640,20,100,{isStatic:true});
         World.add(world,this.rightBody);

         this.leftBody=Bodies.rectangle(840,640,20,100,{isStatic:true});
         World.add(world,this.leftBody);

         this.bottomBody=Bodies.rectangle(775,680,110,20,{isStatic:true});
         World.add(world,this.bottomBody);

         this.image=loadImage("dustbingreen.png");

         
    }
    display(){
        push();
        translate(this.rightBody.position.x,this.rightBody.position.y);
        rectMode(CENTER);
        fill("grey");
        rect(0,0,20,100);
        image(this.image,0,0,this.r,this.r);
        pop();
        
        push();
        translate(this.leftBody.position.x,this.leftBody.position.y);
        rectMode(CENTER);
        fill("green");
        rect(0,0,20,100);
        image(this.image,0,0,this.r,this.r);
        pop();

        push();
        translate(this.bottomBody.position.x,this.bottomBody.position.y);
        rectMode(CENTER);
        fill("blue");
        rect(0,0,110,20);
        image(this.image,0,0,this.r,this.r);
        pop();



    }

}