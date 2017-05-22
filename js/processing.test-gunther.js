var sketchProc = function(processingInstance) {
 with (processingInstance) {
    var canvas_size = 300;
    size(canvas_size, canvas_size); 
    frameRate(50);
 
    // ProgramCodeGoesHere
    var xPosition = [ 200, 100, 90 ];
    var yPosition = [ 100, 200, 250 ];
    var xSpeed = [ 6, 3, 4 ];
    var ySpeed = [ 3, 7, 5 ];
    var faceSize = [ 100, 80, 60 ];
    var drawFace = function(xPosition, yPosition, faceSize) {
        fill(255, 255, 0);
        ellipse(xPosition, yPosition, faceSize, faceSize);
        noFill();
        stroke(0, 0, 0);
        strokeWeight(2);
        arc(xPosition, yPosition, 0.75 * faceSize, 0.5 * faceSize, 0, PI);
        fill(0, 0, 0);
        ellipse(xPosition + faceSize/4, yPosition, faceSize/20, faceSize/20);
        ellipse(xPosition - faceSize/4, yPosition, faceSize/20, faceSize/20);
    }
    var draw = function () {
        background(49);
        for ( let i = 0; i < xSpeed.length; i++ ) {
            if ( xPosition[i] <= faceSize[i]/2 ) {
                xSpeed[i] = Math.abs(xSpeed[i]);
            }
            if ( xPosition[i] >= canvas_size - faceSize[i]/2 ) {
                xSpeed[i] = -Math.abs(xSpeed[i]);
            }
            if ( yPosition[i] <= faceSize[i]/2 ) {
                ySpeed[i] = Math.abs(ySpeed[i]);
            }
            if ( yPosition[i] >= canvas_size - faceSize[i]/2 ) {
                ySpeed[i] = -Math.abs(ySpeed[i]);
            }

            xPosition[i] += xSpeed[i];
            yPosition[i] += ySpeed[i];
            drawFace(xPosition[i], yPosition[i], faceSize[i]);
        }
    }
}};


// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas"); 
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc);