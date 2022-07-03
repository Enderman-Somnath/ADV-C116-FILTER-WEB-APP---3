console.log("Console is for developers");
noseX= 0; noseY = 0;
function preload(){
clown_nose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Has Initialized");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x -10;
        noseY = results[0].pose.nose.y -2;
        console.log(noseX);
        console.log(noseY);
    }
}
function draw(){
    image(video, 0, 0, 400, 300);
    image(clown_nose, noseX, noseY, 30, 30);
    //fill(255, 0, 0);
    //stroke(255, 255, 255);
    //circle(noseX, noseY, 30);
}
function take_snapshot(){
    save('Picture.png');
}
