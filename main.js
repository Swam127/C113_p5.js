function preload()
{
}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    image(video, 0, 0, 640, 480);
    tint(tint_color);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(85, 40, 460, 20);
    
    fill(255, 0, 0);
    stroke(255, 0, 0)
    circle(570, 50, 80,)

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(560, 75, 20, 335);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(570, 425, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(85, 425, 460, 20);

    fill(255, 0, 0);
    stroke(255, 0, 0)
    circle(50, 425, 80,)

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(45, 75, 20, 335);
}

function take_snapshot()
{
    save('filterImage.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}