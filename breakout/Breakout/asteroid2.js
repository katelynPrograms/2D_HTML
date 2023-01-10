const canvas = document.getElementById("game-canvas");
const context =  canvas.getContext("2d");

const backgroundImg = new Image();
backgroundImg.src = 'images/Space-Background-1.jpg';

const BALL_WIDTH = 20;
const BALL_HEIGHT = 20;

const SPACESHIP_WIDTH = 100;
const SPACESHIP_HEIGHT = 20;
const BOTTOM_MARGIN = 15;

let leftArrow = false;
let rightArrow = false;
let leftKeyDown = false;
let rightKeyDown = false;
let spaceBar = false;
var downPressed = false;
gameOver = false;
gameWon = false;
bricksBroken = 0;

// SPACESHIP
const spaceship = {
    x : canvas.width/2 - SPACESHIP_WIDTH,
    y : canvas.height - SPACESHIP_WIDTH - BOTTOM_MARGIN,
    width : SPACESHIP_WIDTH,
    height : SPACESHIP_HEIGHT,
    dx : 5 // how far the spaceship moves on arrow key
}

function drawSpaceship() {
    context.fillStyle = "#00ffff";
    context.fillRect(spaceship.x, spaceship.y, spaceship.width, spaceship.height);

    context.strokeStyle = "#ffffff";
    context.strokeRect(spaceship.x, spaceship.y, spaceship.width, spaceship.height);
}

function moveSpaceship() {
    if(rightArrow && spaceship.x + spaceship.width < canvas.width) {
        spaceship.x += spaceship.dx;
    } else if(leftArrow && spaceship.x > 0) {
        spaceship.x -= spaceship.dx;
    }
}

// BALL
const ball = {
    x : canvas.width/2 - 55,
    y : spaceship.y - 25,
    width : BALL_WIDTH,
    height : BALL_HEIGHT,
    dx : 2,
    dy : -2,
    radius : 10
}

function drawBall () {
    context.fillStyle = "#1b4dfc";
    context.fillRect(ball.x, ball.y, ball.width, ball.height);

    context.strokeStyle = "#ffffff";
    context.strokeRect(ball.x, ball.y, ball.width, ball.height);
}

function launchBall() {
    if(spaceBar) {
        ball.y += ball.dy;
        if(leftKeyDown){
            ball.x += (ball.dx * 0.25);
        }
        else if(rightKeyDown) {
            ball.x -= (ball.dx * 0.25);
        }
    }
    if ((!spaceBar && leftArrow) && (spaceship.x > 0)) { //ball moves with ship pre-launch
        ball.x -= spaceship.dx;
    }
    else if ((!spaceBar && rightArrow) && ((spaceship.x + spaceship.width)) < canvas.width) { //ball moves
        ball.x += spaceship.dx;                                                                    //with ship
    }                                                                                         //pre-launch

    if(ball.x + ball.width > canvas.width || ball.x + ball.width < 0) { //ball rebounds off of left/right
        ball.dx = -ball.dx                                              //canvas boundaries
    }
    if(ball.y - ball.height < 0) { //ball rebounds off of top canvas boundary.
        ball.dy = -ball.dy;
    }
    if((ball.y > spaceship.y) &&  //ball rebounds off of ship
       (ball.y < (spaceship.y + spaceship.height)) && 
       (ball.x > spaceship.x) && 
       (ball.x < (spaceship.x + spaceship.width))) {
           ball.dy = - ball.dy;
       }
    if(ball.y + ball.height > canvas.height) {
        ball.y = canvas.height + ball.height;
        ball.x = canvas.width / 2;
        gameOver = true;
        gameOverMsg();
    }
}

function gameOverMsg() {
    if (gameOver) { 
        gameOver = false;
        alert("Game Over!");
        refresh();
    }
}

function gameWonMsg() {
    if(gameWon) {
        alert("Congratulations! You won!");
    }
}

function refresh() {
    document.location.reload();
}

// BRICK
const brick = {
    row : 5,
    column : 7,
    width : 98,
    height : 30,
    offSetLeft : 15,
    offSetTop : 10,
    marginTop : 10,
    fillColor : "#8B4513",
    strokeColor : "#FFF"
}

let bricks = [];

function createBricks(){
    for(let r = 0; r < brick.row; r++){
        bricks[r] = [];
        for(let c = 0; c < brick.column; c++){
            bricks[r][c] = {
                x : c * ( brick.offSetLeft + brick.width ) + brick.offSetLeft,
                y : r * ( brick.offSetTop + brick.height ) + brick.offSetTop + brick.marginTop,
                status : true
            }
        }
    }
}

createBricks();

function drawBricks(){
    for(let r = 0; r < brick.row; r++){
        for(let c = 0; c < brick.column; c++){
            let b = bricks[r][c];
            if(b.status){
                context.fillStyle = brick.fillColor;
                context.fillRect(b.x, b.y, brick.width, brick.height);
                
                context.strokeStyle = brick.strokeColor;
                context.strokeRect(b.x, b.y, brick.width, brick.height);
            }
        }
    }
}

function ballBrickCollision(){
    for(let r = 0; r < brick.row; r++){
        for(let c = 0; c < brick.column; c++){
            let b = bricks[r][c];
            if(b.status){
                if(ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + brick.width && ball.y + ball.radius > b.y && ball.y - ball.radius < b.y + brick.height){
                    console.log("destroying brick");
                    ball.dy = - ball.dy;
                    b.status = false;
                    bricksBroken += 1;
                    if(bricksBroken === 35) {
                        gameWon = true;
                    }
                }
            }
        }
    }
}

// ARROW KEY INPUT
document.addEventListener("keydown", function(event) {
    if(event.key === "ArrowRight") {
        rightArrow = true;
        rightKeyDown = true;
    } else if(event.key === "ArrowLeft") {
        leftArrow = true;
        leftKeyDown = true;
    } else if(event.key === " ") {
        spaceBar = true;
    }
});

document.addEventListener("keyup", function(event) {
    if(event.key === "ArrowRight") {
        rightArrow = false;
    } else if(event.key === "ArrowLeft") {
        leftArrow = false;
    }
});

// update and loop functions
function update() {
    moveSpaceship();
    launchBall();
    ballBrickCollision();
    gameWonMsg();
    //gameOverMsg();
}

function loop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(backgroundImg, 0, 0, 800, 600);
    drawSpaceship();
    drawBall();
    drawBricks();
    update();
    if(!gameOver) {
        requestAnimationFrame(loop);
    }
    //gameOverMsg();
}
loop();