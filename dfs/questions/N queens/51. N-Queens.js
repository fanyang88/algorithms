/*
Given an integer n, 
return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' 
placement, where 'Q' and '.' 
both indicate a queen and an empty space respectively.

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var board = [], res= [];
    for(var i=0; i<n; i++) {
        board[i] = new Array(n).fill('.');
    }
    dfs(board, n, 0, res);
    return res;
};

var dfs = function(board, n, row, res) {
    if(row === n) {
        var singleRes= []; // transform to string array
        for(var x=0; x<n; x++) {
            singleRes.push(board[x].join(''));
        }
        res.push(singleRes);
        return;
    }
    for(var j=0; j<n; j++) {
        if(isValid(row, j, board, n)) {
            board[row][j] = 'Q';
            dfs(board, n, row+1, res);
            board[row][j] = '.';
        }
    }
};

var isValid = function(row, col, board, n) {
    //check if the column had a queen before.
    for(var i=0; i!=row; i++) {
        if(board[i][col] === 'Q')  return false;
    }
    //check if the diagol had a queen before.
    for(var i=row-1, j=col-1; i>=0 && j>=0; i--, j--) {
        if(board[i][j] === 'Q')  return false;
    }
    
    //check if the anti-diagol had a queen before.
    for(var i=row-1, j=col+1; i>=0 && j<n; i--, j++) {
        if(board[i][j] === 'Q')  return false;
    }
    return true;
};