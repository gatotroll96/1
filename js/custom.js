
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var canvas = document.getElementById("myGame");
//set full screen
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
// var ball
var ctx = canvas.getContext("2d");
var ballX = getRandom(50, canvas.width - 50);
var ballY = getRandom(50, canvas.height - 50);
var ballRadius = 15;
var dx =  (Math.random()>0.5)? 1 : -1;
var dy =  (Math.random()>0.5)? 1 : -1;


// hanlde speed ball
document.addEventListener("keydown", keyDownHandler);        
function keyDownHandler(e) {
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


// draw ball and run
function drawBall(){
    ctx.beginPath();
    ctx.arc(ballX,ballY,ballRadius,0,2*Math.PI);
    ctx.fillStyle = "#b5c0c7";
    ctx.fill();
    ctx.stroke();
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
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
draw();