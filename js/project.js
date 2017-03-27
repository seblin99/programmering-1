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
		var ballspeedX = 0.6;
		var ballaccelerationY = 0.02;
		var numBounces = 0;
		var ball = function() {
			fill (0,0,0);
			ballX += ballspeedX;
			ballSpeedY -= ballaccelerationY;
			ballY -= ballSpeedY;


			ellipse(ballX,ballY,30,30);
			if ( ballY >= 390 && ballSpeedY < 0 ) {
				// Bollen vänder
				ballSpeedY = -0.7  * ballSpeedY;
				numBounces++;
				// Använd antal studs i en if sats...'
				if ( numBounces>=2){
					//alert(bollen ur spel)
					//poäng
				};
				// console.log(ballSpeedY);

			}

			// console.log("ball called")
		}
		var score1 = 0 
		var score2 = 0 
		var scoreboard = function(){
			text(10,60)
		}

		var score = function (){
			text(score1 score2,10,40);			
				if (ballX => 200){
				score1+=1;
			} 
			if (ballX =<1){
				score2+=1;
			}
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
		//moveplayer2 
		var movePlayer2 = function(step) {
			// Ändra player1pos beroende på nedtryckt tangent
			player2pos += step;
		}
// p1 
		var matchtime = 100	
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
			/*
			if (key == '66' || key == '98') {
			    	movePlayer1(2);
			} else if ( key == 86 || key == 118 ) {
				movePlayer1(-2);
			} else {
				console.log("Värdet av 'key' är " + key);
			}
			*/
			// Plustecknet konverterar från objekt till Number
			switch (+key) {
				//player 1 move 
				case 66:
				case 98:
				    movePlayer1(2);
				    break;
			    case 86:
			    case 118:
			    	movePlayer1(-2);
			    	break;
			    	//player 2 move 
			    case 113:
			    case 81:
			    	movePlayer2(-2)
			    	break;
			    case 119:
			    case 87:
			    	movePlayer2(2)
			    		break;
			    case 32:
			    	if (Math.abs(player1pos-ballX) < 20) {
			    	   	ballSpeedY =  Math.abs(ballSpeedY);
						ballspeedX = -Math.abs(ballspeedX)/ballspeedX*0.6			    	
				    }
				    break;
			    case  65535:
				    if (Math.abs(player2pos-ballX)<20){
				    	/*ballSpeedY =  Math.abs(ballSpeedY) /Math.pow(0.7, -numBounces);
				    	numBounces = 0;
						ballspeedX = -Math.abs(ballspeedX)/ballspeedX*0.6*/
						if (ballspeedX<0){
							ballspeedX== 0.6
						}	
						if (ballspeedX>0){
							ballspeedX==-0.6
						}
				    }
				    break;		
		    	default:
					console.log("Värdet av 'key' är " + key);

			}
		}

				
		// Globala variabler som delas mellan funktioner
		var player2pos = 300;
		var player1pos = 30;
		var draw = function () {
			
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
		   
		}

	}
}
var canvas = document.getElementById("mycanvas");
var processingInstance= new Processing(canvas,sketchProc);
canvas.focus();