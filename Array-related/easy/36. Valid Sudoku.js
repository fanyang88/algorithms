/*Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.
The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
A partially filled sudoku which is valid.

/**
 * @param {character[][]} board
 * @return {boolean}
 1. Each row must have the number 1-9 occuring just once.
 2. Each column must have the number 1-9 occuring just once.
 3. The number 1-9 must occur just once in each of sub-boxes of the grid.
 */
var isValidSudoku = function(board) {
    var map = {};
    
    // check each row
    for(var i =0 ;i <9; i++) {
        map = {};
        for(var j =0 ;j <9; j++) {
            if(board[i][j] <= '9' && board[i][j] >= '1') {
                if(!map[board[i][j]]) {
                    map[board[i][j]] = 1;
                } else {
                    return false;
                }
            }
        }
    }
    
    // check each col
    for(var i =0 ;i <9; i++) {
        map = {};
        for(var j =0 ;j <9; j++) {
           if(board[j][i] <= '9' && board[j][i] >= '1') {
                if(!map[board[j][i]]) {
                    map[board[j][i]] = 1;
                } else {
                    return false;
                }
            }
        }
    }
    
    //check sub
    var arr = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]];
    for(var k=0; k<arr.length; k++) {
        var inds = arr[k];
        map = {};
        for(var i = inds[0]; i<inds[0]+3; i++) {
            for(var j = inds[1]; j<inds[1]+3; j++) {
                if(board[i][j] <= '9' && board[i][j] >= '1') {
                    if(!map[board[i][j]]) {
                        map[board[i][j]] = 1;
                    } else {
                        return false;
                    }
                }
            }
        } 
    }
    return true;
};
