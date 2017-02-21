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
			line(200,390,200,150);
		
		// p1 
		var player1 = function(x){
			line(x,100,x,390)
		}


	 	}
		
		}

		}
    }
};
var canvas = document.getElementById("mycanvas");
var processingInstance= new Processing(canvas, sketchProc);

