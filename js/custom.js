
// function  for random starting position
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Variable for drawball
var canvas = document.getElementById("myGame");
var ctx = canvas.getContext("2d");
var ballX = getRandom(50, canvas.width - 50);
var ballY = getRandom(50, canvas.height - 50);
var ballRadius = 15;
var dx =  getRandomArbitrary(-1 , 1);
var dy =  getRandomArbitrary(-1 , 1);


// add event for speed ball
document.addEventListener("keydown", keyDownHandler);        
function keyDownHandler(e) {
    // condition : min max speed when events happen
    if(e.key == "ArrowUp") {
        if(dx > 0 && dx < 20){
            dx++;   
        }else if (dx < 0 && dx > -20){
            dx--;                  
        }
        if(dy > 0 && dy < 20){
            dy++;     
        }else if (dy < 0 && dy > -20){
            dy--;
            
        }
    }
    else if(e.key == "ArrowDown") {
        if(dx > 1 && dx <= 20){
            dx--;                                       
        }else if (dx < -1 && dx >= -20){
            dx++;    
        }

        if(dy > 1 && dy <= 20){
            dy--;   
        }else if (dy < -1 && dy >= -20){
            dy++;
            
        }
    }
}

// ball
function drawBall(){
    ctx.beginPath();
    ctx.arc(ballX,ballY,ballRadius,0,2*Math.PI);
    ctx.fillStyle = "#b5c0c7";
    ctx.fill();
    ctx.stroke();
}

function draw(){
    //delete previous ball 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //drawBall
    drawBall();
    //condition : ball is touching the wall and change the direction
    if((ballX > canvas.width - ballRadius) || ballRadius > ballX ){
        dx = -dx;
    }
    if((ballY  > canvas.height - ballRadius) || ballRadius > ballY ){
        dy = -dy;
    }
    ballX += dx;
    ballY += dy;
    requestAnimationFrame(draw);
}

//set full screen and resize 
window.addEventListener('resize', resizeCanvas, false);
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //condition : when the ball out of viewport            
    if(ballX > canvas.width){
        ballX = canvas.width - ballRadius -5;
    }

    if(ballY > canvas.height){
        ballX = canvas.height - ballRadius -5;
    }
    draw(); 
  }

// resize and start draw 
resizeCanvas();
        
