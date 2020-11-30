function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(700, 250);
    video = createCapture(VIDEO);
    video.position(100, 250);
    video.size(300, 300);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", Gotpose);
}

function draw(){
    background("#111010");
}

function modelLoaded(){
    console.log("Model is ready");
}

function Gotpose(results){
    if (results.length > 0){
        console.log(results);
    }
}