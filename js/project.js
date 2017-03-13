console.log("Starting");

var sketchProc = function(processingInstance) {
	with (processingInstance) {
		var canvas_size = 400
		size(canvas_size ,canvas_size);
		var frames_per_second = 50;
		frameRate(frames_per_second);
		
		font=loadFont("FFScala.ttf");
		textFont(font);
		textSize(20);

		var color1= 50;
		var color2 = 50;
		var b = color3= 50;

		var background = function (){
			fill (color1,color2,color3);
			// console.log("background");
			rect(0, 0, canvas_size, canvas_size);
			color1+=0.02;
			color2+=0.03;
			color3+=0.07;
			if(color1+color2+color3> 600){
				color1= 100
				color2 = 100
				color3 = 100

			}
		}
		var ballX = 10;
		var ballY = 200;
		var ballSpeedY = 2.5;
		var ballspeedX = 1.2;
		var ballaccelerationY = 0.02;
		var ball = function() {
			fill (0,0,0);
			ballX += ballspeedX;
			ballSpeedY -= ballaccelerationY;
			ballY -= ballSpeedY;


			ellipse(ballX,ballY,30,30);
			

			// console.log("ball called")
		}

		
		var playingfield = function () {
			// Rita bakgrunden TODO
			stroke(0);
			line(0,390,400,390);
			line(200,390,200,150);
		}
		
		var player = function(x) {
			line(x-20,390,x,350);
			line(x+20,390,x,350);
			line(x,350,x,300);
			line(x,300,x+20,325);
			line(x,300,x-20,325);

			// console.log("Inuti player1");
		}	
		var movePlayer1 = function(step) {
			// Ändra player1pos beroende på nedtryckt tangent
			player1pos += step;
			console.log("movePlayer1 anropad");	
		}
// p1 
		var matchtime = 5	
		var matchtimeframes = matchtime * frames_per_second;
		console.log(matchtimeframes);
		var timer = function() {
			matchtimeframes -= 1;
			if (matchtimeframes === 0){
				console.log("time out");
			}
			// console.log(matchtimeframes);
		}
		var keyPressed = function() {
			if (key == '66' || key == '98') {
			    	movePlayer1(2);
			} else if ( key == 86 || key == 118 ) {
				movePlayer1(-2);
			} else {
				console.log("Värdet av 'key' är " + key);
			}
				
		}

				
		// Globala variabler som delas mellan funktioner
		var player1pos = 30;
		var draw = function () {
			background();
			playingfield();
		    player(player1pos);
		  	fill(255, 255, 255);
		    if ( matchtimeframes >= 1 ) {
			  	timer();
				text(matchtimeframes, 10, 30);
		    } else {
		    	text("Tiden är ute", 10, 30);
		    }
		  	// console.log("draw called");
		  	ball();
		   
		}

	}
}
var canvas = document.getElementById("mycanvas");
var processingInstance= new Processing(canvas,sketchProc);
