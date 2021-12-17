img = "";
Status1 = "";
objectDetector_1 = "";
object = [];
function preload(){
    img = loadImage('dog_cat.jpg');
    objectDetector_1 = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Object Status: Detecting Objects";
}
function setup(){
    Canvas = createCanvas(700, 500);
    Canvas.center();
}
function modelLoaded(){
    console.log("Model Loaded!");
    Status1 = true;
    objectDetector_1.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        object = results;
    }
}
function draw(){
    //Code for dog
    image(img, 0, 0, 700, 500);
    /*fill('#ff0000');
    text("Dog", 100, 100);
    textSize(25);
    noFill();
    stroke('#ff0000');
    rect(90, 70, 300, 400);

    //Code for cat
    fill('#3449eb');
    text("Cat", 310, 100);
    textSize(25);
    noFill();
    stroke('#3449eb');
    rect(300, 70, 300, 400);*/
    if(Status1 != ""){
        for(i=0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Object Status: Detected!";
            fill('#3449eb');
            noFill();
            Per_Cent = floor(object[i].confidence * 100);
            text(object[i].label + " " + Per_Cent + "%", object[i].x + 10, object[i].y + 20);
            textSize(20);
            stroke('#3449eb');
            rect(object[i].x, object[i].y, object[i].height, object[i].width);
        }
    }
}