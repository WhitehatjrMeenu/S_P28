class Juno
{
    constructor()
    {
        var options = {
            'isStatic': true,
            'restitution': 0.0,
            'density': 0.7
        }
        this.body = Bodies.rectangle(1,380,100,250,options);
        this.image = loadImage("boy.png");
        World.add(world,this.body);
    }
    display()
    {
        push();
        //imageMode(CENTER);
        image(this.image,70,380,175,250);
        //rectMode(CENTER);
        //rect(this.body.position.x,this.body.position.y,100,250);
        pop();
    }
}