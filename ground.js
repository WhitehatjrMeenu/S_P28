class Ground
{
    constructor()
    {
        var options = {
            'isStatic': true,
            'restitution': 0.0,
            'density': 0.7
        }
        this.body = Bodies.rectangle(525,565,1050,10,options);
        World.add(world,this.body);
    }
    display()
    {
        push();
        //rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,1050,10);
        pop();
    }
}