var sketchProc = function(processingInstance){
	with (processingInstance){
		size(400,400);
		frameRate(50);
	var face = function (){
	 var xPosition = 200;
	
    var yPosition = 200;
    var xSpeed = 2;
    var ySpeed = 6;
    var faceSize = 300;
    var draw = function () {
        background(49);
        if ( xPosition <= faceSize/2 ) {
            xSpeed = Math.abs(xSpeed);
        }
        if ( xPosition >= 400 - faceSize/2 ) {
            xSpeed = -Math.abs(xSpeed);
        }
        if ( yPosition <= faceSize/2 ) {
            ySpeed = Math.abs(ySpeed);
        }
        if ( yPosition >= 400 - faceSize/2 ) {
            ySpeed = -Math.abs(ySpeed);
        }
        xPosition += xSpeed;
        yPosition += ySpeed;
        fill(255, 255, 0);
        ellipse(xPosition, yPosition, faceSize, faceSize);
        noFill();
        stroke(0, 0, 0);
        strokeWeight(2);
        arc(xPosition, yPosition, 0.75 * faceSize, 0.5 * faceSize, 0, PI);
        fill(0, 0, 0);
        ellipse(xPosition + faceSize/4, yPosition, faceSize/20, faceSize/20);
        ellipse(xPosition - faceSize/4, yPosition, faceSize/20, faceSize/20);
    }};
}};

var canvas = document.getElementById("mycanvas");
var processingInstance= new Processing(canvas, sketchProc);
face ();