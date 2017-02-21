console.log("Starting");

var sketchProc = function(processingInstance) {
	with (processingInstance) {
		var canvas_size = 400
		size(canvas_size ,canvas_size);
		frameRate(50);

		//plane
		stroke(0);

		var draw = function (){
			line(0,390,400,390);
			line(200,10,200,50);
		};
		// p1 
    }
};
var canvas = document.getElementById("mycanvas");
var processingInstance= new Processing(canvas, sketchProc);

