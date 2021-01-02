class SlingShot
{
    constructor(bodyA, pointB)
    {
        var options = {
            //bodyA: launcher.body, pointB: pointB, stiffness: 0.4, length: 20
            bodyA: bodyA, pointB: pointB, stiffness: 0.04, length:1
            }
        this.slingShot = Constraint.create(options);
        this.pointB = pointB;
        this.bodyA=bodyA;//newly added 
        World.add(world,this.slingShot);
    }
    attach(body)
    {
        this.slingShot.bodyA=body;
    }
    fly()
    {
        this.slingShot.bodyA = null;
    }
    display()
    {
        if (this.slingShot.bodyA)
        {
            strokeWeight(6);
            line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
        }  
    }
}