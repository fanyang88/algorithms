/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
How many possible unique paths are there?
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 
 Step[i][j] = Step[i-1][j] + Step[i][j-1];
 
 e.g: 
 s * * * *
 * * * * *
 * * * * e
 from step(0,0) to step(1,1) has two ways: [0,0]-> [1,0]-> [1,1];  [0,0]-> [0,1]-> [1,1];
 initialize:
   1 1 1 1 1 
   1 1 1 1 1
   1 1 1 1 1
   
   1 1 1 1 1
   1 2 3 4 5
   1 3 6 10 15
   
   total = 15
 */
var uniquePaths = function(m, n) {
    var pathMap = [], i, j;
    // Initialized an 2D array with 1 filled in
    for(i=0; i<m; i++) {
        var arr =  new Array(n).fill(1);
        pathMap.push(arr);
    }
    // Do the caculation.
    for(i=1; i<m; i++) {
        for(j=1; j<n; j++) {
            pathMap[i][j] = pathMap[i-1][j] + pathMap[i][j-1];
        }
    }
    return pathMap[m-1][n-1];
    
    
};
