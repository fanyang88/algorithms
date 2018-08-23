/*
Given a 2D matrix matrix, 
find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.
Example:
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
Note:
You may assume that the matrix does not change.
There are many calls to sumRegion function.
You may assume that row1 ≤ row2 and col1 ≤ col2.
*/

/**
 * @param {number[][]} matrix
 
 use Sum Table:
e.g: matrix=
2  5  4  1
3  6  1  2
4  0  7  1
2  3  2  6
sumtable:
2  7  11  12
5  16 21  24
9  20 32  36
11 25 39  49

ST[i][j]= ST[i-1][j]+ST[i][j-1]+matrix[i][j]- ST[i-1][j-1];

get sum from (row1, col1)- (row2, col2)
             |0,0         |               
             |            |    
             |   r1-1,c1-1|            r1-1,c2
             ---------------------------------
             |            | r1,c1
             |            | 
             |            | 
             |            |
             |     r2,cl-1|            r2,c2
 
sum = sumTable[row2][col2]
      - sumTable[row1-1][col2] 
      - sumTable[row2][col1-1]
      + sumTable[row1-1][col1-1](been subtracted twice)
      
 */
var NumMatrix = function(matrix) {
    this.dp = [];
    if(matrix.length ===0)  return this.dp;
    
     for(var i=0; i<matrix.length; i++) {
        this.dp[i] = [];
        for(var j=0;j<matrix[0].length; j++){
            this.dp[i][j] = matrix[i][j];
        }
    }
    
    for(var i=0; i<matrix.length; i++) {
        for(var j=0;j<matrix[0].length; j++){
            if(i-1>=0 && j-1>=0) {
                this.dp[i][j] = this.dp[i][j-1] + this.dp[i-1][j] - this.dp[i-1][j-1] + matrix[i][j];
            } else if(i-1>=0) {
                this.dp[i][j] = this.dp[i-1][j] + matrix[i][j];
            } else if(j-1>=0) {
                this.dp[i][j] = this.dp[i][j-1] + matrix[i][j];
            }
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    if(row1-1 >= 0 && col1-1>=0) {
        return this.dp[row2][col2] - this.dp[row1-1][col2] -this.dp[row2][col1-1] + this.dp[row1-1][col1-1];
    }
    if(row1-1 >= 0) {
        return this.dp[row2][col2] - this.dp[row1-1][col2];
    }
    if(col1-1>=0) {
        return this.dp[row2][col2]- this.dp[row2][col1-1];
    }
    return this.dp[row2][col2];
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
