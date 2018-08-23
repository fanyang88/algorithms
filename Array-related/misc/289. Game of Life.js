/*
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:

Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]

*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var m = board.length, n= board[0].length, deadSet = new Set(), liveSet = new Set();
    for(var i=0; i<m; i++) {
        for(var j=0; j<n; j++) {
            var state = board[i][j];
            var neighbor = getNeighborState(i, j, board, m, n);
            if(state === 1 && (neighbor < 2 || neighbor > 3)) state=0;
            if(state === 0 && neighbor ===3) state=1;
            if(state === 0) {
                deadSet.add(i*n + j);
            } else {
                liveSet.add(i*n + j);
            }
        }
    }
    
    for(var item of deadSet) {
        var i = ~~(item / n);
        var j= item % n;
        board[i][j] = 0;
    }
    for(var item of liveSet) {
        var i = ~~(item / n);
        var j= item % n;
        board[i][j] = 1;
    }
    return;
};

var getNeighborState = function(row, col, board, m, n) {
    var dir = [[-1, 0], [-1, -1], [-1, 1], [1, -1], [1, 0], [1, 1], [0, -1], [0, 1]];
    var liveTotal = 0;
    for(var i=0; i<8; i++) {
        var x = row + dir[i][0];
        var y = col + dir[i][1];
        if(x <0 || y<0 || x>=m || y>=n) continue;
        if(board[x][y] === 1) liveTotal++;
    }
    return liveTotal;
};
