class Paper
{
    constructor (x,y,diameter)
    {
        var options = 
        {
            'isStatic' : false,
            'restitution' : 1.0,
            'friction' : 1.0,
            'density' : 1.2
        }
     this.x = x;
     this.y = y;
     this.diameter = diameter;
     this.body = Bodies.circle(this.x,this.y,this.diameter,options);
     World.add(world,this.body);
     this.image = loadImage("Images/papers.png")
    }
    display(){
        var paperPosition = this.body.position;
        push ();

        translate(paperPosition.x,paperPosition.y);
        imageMode(CENTER);
        image(this.image,0,0,this.diameter);
        pop ();
}
}