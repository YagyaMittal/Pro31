class Particles{
    constructor(x, y){
        var options = {
            isStatic: false,
            friction: 0.4
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, 10, options);
        this.color = color(random(0,255), random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color)
        ellipse(0, 0, 10, 10);
        pop();
    }
}