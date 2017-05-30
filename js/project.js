console.log("Starting");

var sketchProc = function(processingInstance) {
	with (processingInstance) {
		var canvas_size = 400;
		size(canvas_size ,canvas_size);
		var frames_per_second = 50;
		frameRate(frames_per_second);
		
		font=loadFont("FFScala.ttf");
		textFont(font);
		textSize(20);

		var color1= 50;
		var color2 = 50;
		var color3 = 50;

		var background = function () {
			fill (150,150,150);
			// console.log("background");
			rect(0, 0, canvas_size, canvas_size);
			color1+=0.02;
			color2+=0.03;
			color3+=0.07;
			if (color1 + color2 + color3 > 600) {
				color1 = 100;
				color2 = 100;
				color3 = 100;

			}
		};
		var ballspeedvariable = function(){

			if (time2 - time1 < 500 ) {
				ballSpeedY = 2;
				ballspeedX = 0.3;
			}
			if (time2- time1>500) {
				ballSpeedY = 5;
				ballspeedX = 0.5;
			}
		}
		// ballspeedvariable();
		var ballstartvalues = function() {
			var ballMoveX = 0;
			var ballMoveY = 0;
			ballX = 30;
			ballY = 10;
			ballSpeedY = 2.5;
			ballspeedX = 0.6;
			ballaccelerationY = 0.02;
			numBounces = 0;
		};
		ballstartvalues();
		
		var ball = function() {
			fill (0,0,0);
			ballX += ballspeedX;
			ballSpeedY -= ballaccelerationY;
			ballY -= ballSpeedY;



			ellipse(ballX,ballY,30,30);
			if ( ballY >= 390 && ballSpeedY < 0 ) {
				// Bollen vänder
				ballSpeedY = -0.7	* ballSpeedY;
				numBounces++;
				// Använd antal studs i en if sats...'
				if ( numBounces>=2) {
					score();
					ballstartvalues();
					//alert(bollen ur spel)
					//poäng
				}
				// console.log(ballSpeedY);

			}

			// console.log("ball called")
		};
		var score1 = 0;
		var score2 = 0;
		var scoreboard = function() {
			text("score1: " + score1 + " score2: " + score2, 10,40);

		};
		if (score1 = 10){
			alert("player 1 vinst")
		} 
		if (score2 = 100){
				alert("player 1 vinner")
		}
		/*if (score1 = 10 score2 = 10){
			score1 = 0
			score2 = 0 
		}*/

			var palyerinturn = 2 
		}
		var score = function () {
			if (ballX >= 200) {
				score1+=1;
			} 
			if (ballX <=1){
				score2+=1;
			}
		};
		
		var playingfield = function () {
			// Rita bakgrunden TODO
			stroke(0);
			line(0,390,400,390);
			//line(200,390,200,150);
		};
		
		var player = function(x) {
			line(x-20,390,x,350);
			line(x+20,390,x,350);
			line(x,350,x,300);
			line(x,300,x+20,325);
			line(x,300,x-20,325);

			// console.log("Inuti player1");
		};
		var movePlayer1 = function(step) {
			// Ändra player1pos beroende på nedtryckt tangent
			player1pos += step;
			console.log("movePlayer1 anropad");	
		};
		
		//moveplayer2 
		var movePlayer2 = function(step) {
			// Ändra player1pos beroende på nedtryckt tangent
			player2pos += step;
		};
		// p1 
		var matchtime = 100;
		var matchtimeframes = matchtime * frames_per_second;
		console.log(matchtimeframes);
		var timer = function() {
			matchtimeframes -= 1;
			if (matchtimeframes === 0){
				console.log("time out");
				alert("spelet är över");
			}
			// console.log(matchtimeframes);
		};
		var moveplayer1case = 0;
		var moveplayer2case = 0;
		/* exported keyPressed */
		var keyPressed = function() {
			// Plustecknet konverterar från objekt till Number

			switch ( +keyCode ) {
			case 66:
			case 98:
				moveplayer1case = 1;
				break;
			case 86:
			case 118:
				moveplayer1case = -1;
				break;
			//player 1 moved
			case 113:
			case 81:
				moveplayer2case = 1;
				break;
			case 119:
			case 87:
				moveplayer2case = -1;
				break;
			case 32:
				if (Math.abs(player1pos-ballX) < 20 && palyerinturn == 1) {
					ballSpeedY =	Math.abs(ballSpeedY);
					ballspeedX = -Math.abs(ballspeedX) / ballspeedX * 0.6;	
					palyerinturn = 2
				}		
				break;
			case 120:
				if  (Math.abs(player2pos-ballX) < 20 && palyerinturn == 2){
				ballSpeedY =	Math.abs(ballSpeedY);
					ballspeedX = -Math.abs(ballspeedX) / ballspeedX * 0.6;	
					palyerinturn = 1
			}
				break;
			case  65535:
				if (Math.abs(player2pos-ballX) < 20) {
					/*ballSpeedY =  Math.abs(ballSpeedY) /Math.pow(0.7, -numBounces);
					numBounces = 0;
					ballspeedX = -Math.abs(ballspeedX)/ballspeedX*0.6*/
					if (ballspeedX < 0) {
						ballspeedX = 0.6;
					}	
					else if (ballspeedX > 0 ) {
						ballspeedX =-0.6;
						var time1 = Date.now();
					}
				}
				break;	
			default:
				console.log("Värdet av 'key' är " + key);

			}
		};
		/* exported keyPressed */
		var keyReleased = function() {
			// Plustecknet konverterar från objekt till Number

			switch ( +keyCode ) {
			case 66:
			case 98:
			case 86:
			case 118:
				moveplayer1case = 0;
				break;
			case 113:
			case 81:
			case 119:
			case 87:
				moveplayer2case = 0;
				break;
				case  65535:
				var time2 = Date.now(); 
			default:
				console.log("Värdet av 'key' är " + key);

			}
		};
		playermove = function () {
				player1pos += moveplayer1case;
				player2pos += moveplayer2case;
			}
				
		// Globala variabler som delas mellan funktioner
		var player2pos = 300;
		var player1pos = 30;
		/* exported draw */
		var draw = function () {
			playermove();
			background();
			playingfield();
			player(player1pos);
			player(player2pos);
			fill(255, 255, 255);

			if ( matchtimeframes >= 1 ) {
				timer();
				text(matchtimeframes, 10, 30);
			} else {
				text("Tiden är ute", 10, 30);
			}
			// console.log("draw called");
			ball();
			scoreboard();

		};
	}

 };

var canvas = document.getElementById("mycanvas");
/* exported processingInstance */
var processingInstance = new Processing(canvas,sketchProc);
canvas.focus();