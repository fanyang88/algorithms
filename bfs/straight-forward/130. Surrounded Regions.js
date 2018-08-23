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
 */
var solve = function(board) {
    if(board.length === 0)  return;
    var i, j, visited = [], col = board[0].length, row=board.length;
    for(i=0; i<board.length; i++) {
        visited[i] = [];
        for(j=0; j<board.length; j++) {
            visited[i][j] = false;
        }
    }
    for(i=0; i<board.length; i++) {
        for(j=0; j<board[0].length; j++) {
            var flip = dfs(visited, i, j, [], board, row, col);
            if(flip) {
                fillColor(board, flip);
            }
        }
    }
   return;
};

var fillColor = function(board, flip) {
    var flag = flip.every(function(item){
        return item[0] !==0 && item[0] !== board.length-1 && item[1] !==0 && item[1] !== board[0].length-1;
    });
    if(flag) {
        flip.forEach(item => {
            board[item[0]][item[1]] = 'X';
        });
    }
    return;
};

var dfs = function(visited, i, j, flip, board, row, col) {
    if(!visited[i][j] && board[i][j] === 'O') {
        visited[i][j] = true;
        flip.push([i, j]);
        if(i+1 < row) dfs(visited, i+1, j, flip, board, row, col);
        if(i-1 >=0) dfs(visited, i-1, j, flip, board, row, col);
        if(j+1 < col) dfs(visited, i, j+1, flip, board, row, col);
        if(j-1 >=0) dfs(visited, i, j-1, flip, board, row, col);
        return flip;
    }
}
