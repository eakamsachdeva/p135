video="";

function preload(){
    video=createCapture(VIDEO);
    video.hide();
}
function setup(){
canvas=createCanvas(480,320);
canvas.center();
}
function draw(){
    image(video,0,0,480,320);}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoded);
    document.getElementById('status').innerHTML="STATUS :detecting objects ";
}
function modelLoded(){
console.log("modelLoded!");
status=true;
video.loop();
video.speed(1);
video.volume(0);

}