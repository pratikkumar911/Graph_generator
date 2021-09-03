var v;
var slider;
function setup()
{
    createCanvas(windowWidth,windowHeight);

    slider = createSlider(2, 50,6,1);
    w = width/2;
    slider.style('width', '3000');
    slider.position(width/2 - slider.width/2, height-height*0.05);


}
function draw()
{
    background(51);
    textSize(35);
    fill(255);
    textAlign(CENTER,BOTTOM);
    stroke(0);
    s = "Complete Graph with " + v + " vertices";
    text(s,width/2,height*0.1);
    translate(width/2,height/2);
    v = slider.value();
    var step = TWO_PI/v;
    var r = min(height/2-height*0.12,width/2-width*0.12);
    var points = [];
    for(var i =0;i<TWO_PI;i+=step)
    {
        x = r* cos(i);
        y = r* sin(i);
        var p = createVector(x,y);

        points.push(p);
        fill(255);
        rad = map(v,2 ,50,40,5);
        ellipse(x,y,rad,rad);
    }

    for(var i=0;i<points.length;i++)
    {
        for(var j=0;j<points.length;j++)
        {
            w = map(v,2,50,4,0.5);
            strokeWeight(w);
            line(points[i].x,points[i].y,points[j].x,points[j].y);
        }
    }

}