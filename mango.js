class Mango
{
    constructor(x,y,width,height)
    {
        var options = {
            'isStatic': true,
            'restitution': 0.0,
            'density': 0.7
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display()
    {
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        //rectMode(CENTER);
        //rect(this.body.position.x,this.body.position.y,400,450);
        pop();
    }
}