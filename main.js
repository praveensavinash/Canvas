x = 0;
y = 0;
draw_circle = "";
draw_rect="";


var SpeechRecognition = window.webkitSpeechRegognition;


var recogntion = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speack";
    recogntion.start();
}

recogntion.onresult = function(event) {
    console.log(event);

    var content = event.result[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been regonized as: " + content;
    if(content =="circle")
    {
        x = Math.floor(Math.random() * 900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML = "Started drawing rectangle ";
        draw_rect = "set";
    } 
}

function draw() {
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn. ";
        draw_circle = "";
    }


    if(draw_rect == "set")
{
    rect(x,y,70,50);
    document.getElementById("status").innerHTML = "rectangle is drawn. ";
    draw_rect = "";
}


}

