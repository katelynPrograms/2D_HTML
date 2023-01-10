var Asteroid = function() {
    this.canvas = document.getElementById('game-canvas');
    this.context = this.canvas.getContext('2d');

    this.BRICK_CELLS_HEIGHT = 21;
    this.BRICK_CELLS_WIDTH = 66;

    this.SCALED_BRICK_HEIGHT = 25;
    this.SCALED_BRICK_WIDTH = 100;

    this.x = 200; // spaceship x coordinate
    this.y = 500; // spaceship y coordinate

}

Asteroid.prototype = {
    /*draw: function (now) {
        this.drawBackground();
        this.drawBricks();
        this.drawSpaceship();
    },*/

    drawBricks: function() {
        // syntax is drawImage(image, top left x, top left y, width, height, desired x position, desired y position, desired width, desired height);
        // this.context.drawImage(this.spritesheet, 136, 69, 66, 21, 10, 10, 90, 25);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT, //first row
           23, 0, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);   
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           120, 0, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           254, 0, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           351, 0, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           448, 0, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           590, 0, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           687, 0, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT, //second row
           0, 55, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           137, 55, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           279, 55, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           421, 55, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           563, 55, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           705, 55, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT, //third row
             8, 110, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
            105, 110, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           202, 110, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           359, 110, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           512, 110, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           605, 110, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           702, 110, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT, //fourth row
             8, 165, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
            105, 165, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           202, 165, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           299, 165, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           396, 165, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           493, 165, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           590, 165, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           687, 165, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT, //fifth row
             8, 220, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           105, 220, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           202, 220, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           299, 220, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           396, 220, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           493, 220, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           590, 220, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
        this.context.drawImage(this.spritesheet, 136, 69, this.BRICK_CELLS_WIDTH, this.BRICK_CELLS_HEIGHT,
           687, 220, this.SCALED_BRICK_WIDTH, this.SCALED_BRICK_HEIGHT);
    },

    drawSpaceship: function(x, y) {
      this.context.fillStyle = "blue";
      this.context.fillRect(x, y, 50, 50);

        /*this.context.save(); 
        this.context.translate(290, 550);
        this.context.rotate(90 * Math.PI/180);
        this.context.drawImage(this.spaceship, -(this.spaceship.width/2), -(this.spaceship.height/2), 50, 80);
        this.context.restore(); */
    },

    moveLeft: function() {
        this.x -= 5;
        this.context.clear(0, 0, this.canvas.width, this.canvas.height);
        this.drawSpaceship(this.x, this.y)
        console.log("left");
    },

    moveRight: function() {
        this.left += 5;
        this.context.clear();
        this.context.drawImage(this.spaceship, this.left, 80);
        console.log("right");
    },

    drawBackground: function() {
      this.context.drawImage(this.background, 0, 0, 800, 600);
    },

    initializeImages: function () {
        this.spaceship = new Image();
        this.spaceship.src = 'images/spaceship.png';

        this.spritesheet = new Image();
        this.spritesheet.src = 'images/spritesheet.png';

        this.background = new Image();
        this.background.src = 'images/Space-Background-1.jpg';

        this.spaceship.onload = function (e) {
            asteroid.drawBackground();
            asteroid.drawSpaceship(50, 50);
            asteroid.drawBricks();
         };
    }
};

window.addEventListener('keydown', function (e) {
    var key = e.keyCode;
 
    if (key === 37) { // left arrow
       asteroid.moveLeft();
    }
    else if (key === 39) { // right arrow
       asteroid.moveRight();
    }
});

var asteroid = new Asteroid();

asteroid.initializeImages();
asteroid.drawSpaceship();