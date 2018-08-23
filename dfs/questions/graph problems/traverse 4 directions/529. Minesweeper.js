/*
Let's play the minesweeper game (Wikipedia, online game)!

You are given a 2D char matrix representing the game board. 'M' represents an unrevealed mine, 'E' represents an unrevealed empty square, 'B' represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, digit ('1' to '8') represents how many mines are adjacent to this revealed square, and finally 'X' represents a revealed mine.

Now given the next click position (row and column indices) among all the unrevealed squares ('M' or 'E'), return the board after revealing this position according to the following rules:

If a mine ('M') is revealed, then the game is over - change it to 'X'.
If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') and all of its adjacent unrevealed squares should be revealed recursively.
If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.
Return the board when no more squares will be revealed.
Example 1:
Input: 

[['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'M', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E'],
 ['E', 'E', 'E', 'E', 'E']]

Click : [3,0]

Output: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]


Example 2:
Input: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'M', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]

Click : [1,2]

Output: 

[['B', '1', 'E', '1', 'B'],
 ['B', '1', 'X', '1', 'B'],
 ['B', '1', '1', '1', 'B'],
 ['B', 'B', 'B', 'B', 'B']]
*/


/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 the rule is
 if x, y is a bomb, turn it to X and return
 if there is bomb around (x, y), turn it to number of bombs around it and return.
 if there is no bomb around (x, y), turn it to 'B' and continue to check its surrounding
 */
var dir = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [1,-1], [-1, 1]];
var updateBoard = function(board, click) {
    var x = click[0], y=click[1];
    if(board[x][y] === 'M')   {
        board[x][y] = 'X';
        return board;
    }
    var m = board.length, n = board[0].length;
    dfs(board, x, y, m, n);
    return board;
};

var dfs = function(board, x, y, m, n) {
    if(x < 0 || y < 0 || x >= m  || y >=n || board[x][y] !== 'E')  return;
    var num = numOfBombs(board, x, y, m, n);
    if( num === 0) {
        board[x][y] = 'B';
        for(var i=0; i<8; i++) {
            dfs(board, x+ dir[i][0], y+dir[i][1], m, n);
        }
    } else {
        board[x][y] = ''+num;
    }
};

var numOfBombs = function(board, i, j, m, n) {
    var count = 0;
    for(var k=0; k<8; k++) {
        var x = dir[k][0] + i;
        var y = dir[k][1] + j;
        if(x >= 0 && y >= 0 && x < m && y <n && (board[x][y] === 'M' || board[x][y] === 'X'))  count++;
        
    }
    return count;
};
