console.log("Starting");

var sketchProc = function(processingInstance) {
	with (processingInstance) {
		var canvas_size = 400
		size(canvas_size ,canvas_size);
		frameRate(50);
		
		// Bättre namn TODO
		var q = 1;
		var s = 2;
		var b = 3;

		var background = function (){
			fill (q,b,s);
			// console.log("background");
			rect(0, 0, canvas_size, canvas_size);
			s+=0.2;
			q+=0.3;
			b+=0.7;
			if(s+q+b> 600){
				s = 100
				q = 100
				b = 100
			}
		}
	
		var playingfield = function () {
			// Rita bakgrunden TODO
			stroke(0);
			line(0,390,400,390);
			line(200,390,200,150);
		}
		
		var player1 = function(x) {
			line(x,100,x,390);

			// console.log("Inuti player1");
		}	
		var movePlayer1 = function(step) {
			// Ändra player1pos beroende på nedtryckt tangent
			player1pos += step;
		}
// p1 
		var keyPressed = function() {
			  //  if (key == 'b' || key == 'B') {
    				console.log("Key is pressed");
			    	movePlayer1(2)
			    //}
			}
		
		// Globala variabler som delas mellan funktioner
		var player1pos = 30;
		var draw = function () {
			background();
			playingfield();
		    player1(player1pos);

		}

	}
}
var canvas = document.getElementById("mycanvas");
var processingInstance= new Processing(canvas, sketchProc);
