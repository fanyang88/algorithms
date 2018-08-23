/*
Follow up for "Unique Paths":
Now consider if some obstacles are added to the grids. How many unique paths would there be?
An obstacle and empty space is marked as 1 and 0 respectively in the grid.
For example,There is one obstacle in the middle of a 3x3 grid as illustrated below.
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * 
 *  
 if(gird[0][0]==1)  return 0, the first one is obstacle, then there is no way
 intialzize steps[m,n] to be all 1 matrix ecept those whose correspodning x,y in obstacleGrid are 1
 1 1 1 
 1 0 1
 1 1 1
 1. intialize first row, then first col
 2. procedd the follwing:
  for(int i=1;i<m;i++)
            for(int j=1;j<n;j++)
            {
                if(obstacleGrid[i][j]== 1)  //this is an obstacle
                    steps[i][j]=0;
                else
                    steps[i][j]= steps[i-1][j]+ steps[i][j-1];
            }
 
return steps[m-1][n-1];

 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0]==1)   return 0;
    var dp = [], m = obstacleGrid.length, n = obstacleGrid[0].length;
    // Initialize map filled with 1
    for(var i=0; i<m; i++) 
        dp[i]= new Array(n).fill(1);
   
    for(var i=1; i<m; i++) {
        dp[i][0] = dp[i-1][0];
        if(obstacleGrid[i][0] ===1) dp[i][0] = 0;
    }
    for(var j=1; j<n; j++) {
        dp[0][j] = dp[0][j-1];
        if(obstacleGrid[0][j] ===1) dp[0][j] = 0;
    }
    
    // Do caculation.
    for(i=1; i<m; i++) {
        for(j=1; j<n; j++) {
            if(obstacleGrid[i][j] === 1) dp[i][j] = 0;
            else dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
};
