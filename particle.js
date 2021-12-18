class Particle{
    constructor(x,y,r){
        var options = {

            isStatic: true
    }
    this.body = Bodies.circle(x,y,this.r,options);
    this.r = 8;
    this.body = Bodies.circle(x, y, this.r, options);

    World.add(world, this.body);
    
    this.color=color(random(0,255), random(0,255), random(0,255));
}
}
