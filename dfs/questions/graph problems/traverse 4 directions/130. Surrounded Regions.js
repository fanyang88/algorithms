/*
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
A region is captured by flipping all 'O's into 'X's in that surrounded region.
For example,
X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:
X X X X
X X X X
X X X X
X O X X
*/
// BFS
var solve = function(board) {
    if(board.length === 0)  return;
    var col = board[0].length;
    var row = board.length;
    for(i=0; i<board.length; i++) {
        BFS(board, i, 0, row, col);
        BFS(board, i, col-1, row, col);
    }
    for(j=0; j<board[0].length; j++) {
        BFS(board, 0, j, row, col);
        BFS(board, row-1, j, row, col);
    }
    
    for(i=0; i<board.length; i++) {
        for(j=0; j<board[0].length; j++) {
           if(board[i][j] === 'O') board[i][j] = 'X';
           if(board[i][j] === 'W') board[i][j] = 'O';
        }
    }
   return;
};

var BFS = function(board, i, j, row, col) {
    if(board[i][j] !== 'O')  return;
    var st = [];
    board[i][j] = 'W';
    st.push({x: i, y: j});
    while(st.length > 0) {
        var obj = st.shift();
        if(obj.x+1 < row && board[obj.x+1][obj.y] === 'O') {
            board[obj.x+1][obj.y] = 'W';
            st.push({x: obj.x+1, y: obj.y});
        }
        if(obj.x-1 >=0 && board[obj.x-1][obj.y] === 'O') {
            board[obj.x-1][obj.y] = 'W';
            st.push({x: obj.x-1, y: obj.y});
        }
        if(obj.y+1 < col && board[obj.x][obj.y+1] === 'O') {
            board[obj.x][obj.y+1] = 'W';
            st.push({x: obj.x, y: obj.y+1});
        }
        if(obj.y-1 >= 0 && board[obj.x][obj.y-1] === 'O') {
            board[obj.x][obj.y-1] = 'W';
            st.push({x: obj.x, y: obj.y-1});
        }
    }   
}


// DFS 
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 
 find the unsurrounded area first, find the four side areas first
 and use dfs to make four sides 0 and related one to be 'U'
 then we examine the board, turn all 0 to X
 at last, then all 'U' back to '0'
 */
var solve = function(board) {
    if(board.length === 0)  return;
    var m = board.length, n= board[0].length;
    for(var i=0; i<m; i++) {
        if(board[i][0] === 'O') 
            dfs(i, 0, board, m, n);
        if(board[i][n-1] === 'O')
            dfs(i, n-1, board, m, n);
    }
    for(var j=0; j<n; j++) {
        if(board[0][j] === 'O') 
            dfs(0, j, board, m, n);
        if(board[m-1][j] === 'O')
            dfs(m-1, j, board, m, n);
    }

    for(var i=0; i<m; i++) {
          for(var j=0; j<n; j++) {
              if(board[i][j] === 'O')  board[i][j] = 'X';
          }
    }
 
    for(var i=0; i<m; i++) {
          for(var j=0; j<n; j++) {
              if(board[i][j] === 'U')  board[i][j] = 'O';
          }
    }
};

var dfs = function(i, j, board, m, n) {
    if(i<0 || i>=m || j<0 || j>=n || board[i][j] !== 'O')  return;
    board[i][j] = 'U';
    dfs(i+1, j, board, m, n);
    dfs(i-1, j, board, m, n);
    dfs(i, j+1, board, m, n);
    dfs(i, j-1, board, m, n);
}
