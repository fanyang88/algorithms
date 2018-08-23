/*
Design a Snake game that is played on a device with screen size = width x height. Play the game online if you are not familiar with the game.

The snake is initially positioned at the top left corner (0,0) with length = 1 unit.

You are given a list of food's positions in row-column order. When a snake eats the food, its length and the game's score both increase by 1.

Each food appears one by one on the screen. For example, the second food will not appear until the first food was eaten by the snake.

When a food does appear on the screen, it is guaranteed that it will not appear on a block occupied by the snake.

Example:
Given width = 3, height = 2, and food = [[1,2],[0,1]].

Snake snake = new Snake(width, height, food);

Initially the snake appears at position (0,0) and the food at (1,2).

|S| | |
| | |F|

snake.move("R"); -> Returns 0

| |S| |
| | |F|

snake.move("D"); -> Returns 0

| | | |
| |S|F|

snake.move("R"); -> Returns 1 (Snake eats the first food and right after that, the second food appears at (0,1) )

| |F| |
| |S|S|

snake.move("U"); -> Returns 1

| |F|S|
| | |S|

snake.move("L"); -> Returns 2 (Snake eats the second food)

| |S|S|
| | |S|

snake.move("U"); -> Returns -1 (Game over because snake collides with border)


*/

/**
 * Initialize your data structure here.
        @param width - screen width
        @param height - screen height 
        @param food - A list of food positions
        E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function(width, height, food) {
    this.w = width;
    this.h = height;
    this.food = food;
    this.snake = [[0,0]];
    this.count = 0; // how many food ate
};

/**
 * Moves the snake.
        @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
        @return The game's score after the move. Return -1 if game over. 
        Game over when snake crosses the screen boundary or bites its body. 
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function(direction) {
    var x = this.snake[0][0], y = this.snake[0][1];
    switch(direction) {
        case 'R': y++; break;
        case 'L': y--; break;
        case 'U': x--; break;
        case 'D': x++; break;
    }
    if(x < 0 || x >= this.h || y < 0 || y >= this.w)  return -1;
    // check if the newHead eat the body itself, only need check to the second last one, since the last one would be removed
    for(var i=1; i<this.snake.length-1; i++) {
        if(x === this.snake[i][0] && y === this.snake[i][1])  return -1;
    }
    // add newhead to snake
    this.snake.unshift([x, y]);
    
    // make snake eat the count-th food
    if(this.food[this.count] && this.food[this.count][0] === x && this.food[this.count][1] === y) {
        // don't remove the tail
        this.count++;
    } else {
        // didn't eat food, remove tail
        this.snake.pop();
    }
    return this.count;
};

/** 
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = Object.create(SnakeGame).createNew(width, height, food)
 * var param_1 = obj.move(direction)
 */
 