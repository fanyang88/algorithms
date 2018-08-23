/*
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
Empty cells are indicated by the character '.'.


A sudoku puzzle...


...and its solution numbers marked in red.

Note:

The given board contain only digits 1-9 and the character '.'.
You may assume that the given Sudoku puzzle will have a single unique solution.
The given board size is always 9x9.
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    if(board.length ===0)  return;
    var m = board.length, n = board[0].length;
    dfs(board, m, n);
};

var dfs = function(board, m, n) {
    for(var i=0; i<m; i++) {
        for(var j=0; j<n; j++) {
            if(board[i][j] !== '.') continue;
            for(var k = 1; k <= 9; k++) {
                if(!isValid(board, i, j, m, n, ''+k)) continue;
                board[i][j] = ''+k;
                if(dfs(board, m, n))  return true;
                else board[i][j] = '.';
            }
            return false;  // THE key
        }
    }
    return true;
}

var isValid = function(board, x, y, m, n, k) {
    for(var i=0; i<9; i++) {
        if(board[x][i] === k)  return false;
        if(board[i][y] === k)  return false;
    }
    var si = ~~(x /3) * 3, sj = ~~(y /3) * 3;
    for(var i= si; i< 3+ si; i++) {
        for(var j= sj; j< 3+ sj; j++) {
            if(board[i][j] === k)  return false;
        }
    }
    
    return true;
};