class Tree
{
    constructor()
    {
        var options = {
            'isStatic': true,
            'restitution': 0.0,
            'density': 0.7
        }
        this.body = Bodies.rectangle(1250,350,400,450,options);
        this.image = loadImage("tree.png");
        World.add(world,this.body);
    }
    display()
    {
        push();
        //imageMode(CENTER);
        image(this.image,650,130,400,450);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,400,450);
        pop();
    }
}