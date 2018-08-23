/*
Given a m x n grid filled with non-negative numbers, 
find a path from top left to bottom right which minimizes the sum of all numbers 
along its path.
Note: You can only move either down or right at any point in time.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * 
similar to edit distance
e.g:1 2 4 5
    2 3 5 6
    3 4 9 1 
    2 5 0 4
 A[i][j]= min(A[i-1][j], A[i][j-1]) + ori[i][j]
 1  3  7  12
 3 3+3 5+6 6+11
 6 4+6 9+10 1+17
 8 5+8 0+13 4+13
 minimum sum is 17
 
 1. intialize row 1 and col 1
 2. for each (i, j) from (1, 1) calcuate value based on  A[i][j]= min(A[i-1][j], A[i][j-1]) + ori[i][j]
 return A[m-1][n-1];
 */
 
var minPathSum = function(grid) {
    const row = grid.length;
    const col = grid[0].length;
    var i,j;
    
    // Caculate first row.
    for(i=1; i<col; i++) {
        grid[0][i] += grid[0][i-1];
    }
    
    // Caculate first col.
    for(i=1; i<row; i++) {
        grid[i][0] += grid[i-1][0];
    }
    
    // Caculate each element in grid.
    for(i=1; i<row; i++) {
        for(j=1; j<col; j++) {
            grid[i][j] = Math.min(grid[i-1][j], grid[i][j-1]) + grid[i][j];
        }
    }
    return grid[row-1][col-1];
};


// updated with no extra space
var minPathSum = function(grid) {
    var row = grid.length, col = grid[0].length, i, j;
    for(i=0; i<row; i++) {
        for(j=0; j<col; j++){
            if(i === 0 && j === 0) {
                grid[i][j] = grid[i][j];
            }
            else if(i === 0 && j !== 0) {
                grid[i][j] += grid[i][j-1];
            }
            else if(i !== 0 && j === 0) {
                grid[i][j] += grid[i-1][j];
            }
            else {
                grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
            }
        }
    }
    return grid[row-1][col-1];
};
