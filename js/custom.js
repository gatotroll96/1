var canvas = document.getElementById("myGame");
        //set full screen
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        // var ball
        var ctx = canvas.getContext("2d");
        var ballX = 100;
        var ballY = 100;
        var ballRadius = 15;
        var dx = 2;
        var dy = 2;
        var upSpeed = false;
        var downSpeed = false;


        document.addEventListener("keydown", keyDownHandler);
        document.addEventListener("keyup", keyUpHandler);
        function keyDownHandler(e) {
            if(e.key == "ArrowUp") {
                
                dx += 2;
                dy += 2;
                e.preventDefault();

            }
            else if(e.key == "ArrowDown") {
                downSpeed = true;
            }
        }

        function keyUpHandler(e) {
            if(e.key == "ArrowUp") {
                upSpeed = false;
            }
            else if(e.key == "ArrowDown") {
                downSpeed = false;
            }
        }



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