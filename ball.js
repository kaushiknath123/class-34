class ball{
    constructor(x,y,r){
        var options = {
            'restitution':0,
            'friction':1,
            'density':1.2,
            'isStatic':false
     }
     this.body = Bodies.circle(x, y, r, options);
            
     this.r = r;

     World.add(world, this.body);
    }
    display(){

        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("white");
        ellipseMode(CENTER);
         ellipse(0, 0, this.r);
    }
}