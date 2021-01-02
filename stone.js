class Stone
{
    constructor(x,y) // simply passed x and y vklaues 
    {
        var options = {
            isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.rectangle(this.x,this.y,20,20,options);
        this.image = loadImage("stone.png");
        World.add(world,this.body);
    }
    display()
    {

       

        push();
        translate(this.body.position.x,this.body.position.y);// displayed the image with treanslate /push and pop logic 
        image(this.image,0,0,40,40);
        pop ();

    }
}