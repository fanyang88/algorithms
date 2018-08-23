/*
Given a 2D board and a word, find if the word exists in the grid.
The word can be constructed from letters of sequentially adjacent cell, 
where "adjacent" cells are those horizontally or vertically neighboring. 
The same letter cell may not be used more than once.
For example,
Given board =
[  ['A','B','C','E'],
   ['S','F','C','S'],
   ['A','D','E','E']]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(board.length === 0)  return false;
    var visited = new Set(), m= board.length, n= board[0].length, dir = [[0, 1], [0, -1], [-1, 0], [1, 0]];
    for(var i=0; i<m; i++) {
        for(var j=0; j<n; j++) {
            if(dfs(0, word, board, i, j, visited, m, n, dir))  return true;
        }
    }
    return false;
};

var dfs = function(index, word, board, i, j, visited, m, n, dir) {
    if(index === word.length)  return true;
    if(i<0 || i>=m || j<0 || j>=n || visited.has(i+':'+j) || word[index] !== board[i][j])  return false;
    visited.add(i+':'+j);
    for(var k=0; k<4; k++) {
        if(dfs(index+1, word, board, i+dir[k][0], j+dir[k][1], visited, m, n, dir)) return true;
    }
    visited.delete(i+':'+j);
    return false;
};

