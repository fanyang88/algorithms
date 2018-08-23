/*
Given an integer n, return the number of distinct solutions to the n-queens puzzle.

Example:

Input: 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
*/

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    var res = [0], board = [];
    for(var i=0; i<n; i++) {
        board[i] = new Array(n).fill('.');
    }
    dfs(board, n, 0, res);
    return res[0];
};

var dfs = function(board, n, row, res) {
    if(row === n) {
        res[0] ++;
    }
    for(var col=0; col<n; col++) {
        if(isValid(row, col, board, n)) {
            board[row][col] = 'Q';
            dfs(board, n, row+1, res);
            board[row][col] = '.';
        }
    }
};

var isValid = function(row, col, board, n) {
    // check same col
    for(var i=0; i!==row; i++) {
        if(board[i][col] === 'Q')  return false;
    }
    // check diagol
    for(var i=row-1, j=col-1; i>=0 && j>=0; i--, j--) {
        if(board[i][j] === 'Q')  return false;
    }
    // check anti-diagol
    for(var i=row-1, j=col+1; i>=0 && j<n; i--, j++) {
        if(board[i][j] === 'Q')  return false;
    }
    return true;
};