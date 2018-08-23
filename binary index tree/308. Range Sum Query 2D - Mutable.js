/*
Given a 2D matrix matrix, 
find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
Range Sum Query 2D
Example:
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]
sumRegion(2, 1, 4, 3) -> 8
update(3, 2, 2)
sumRegion(2, 1, 4, 3) -> 10
Note:
The matrix is only modifiable by the update function.
You may assume the number of calls to update and sumRegion function is distributed evenly.
You may assume that row1 ≤ row2 and col1 ≤ col2.
*/

/**
 * @param {number[][]} matrix
 use binary index tree, have the nums 2D array to store the orignal value, have the tree array to store the sum.
 */
var NumMatrix = function(matrix) {
    if(matrix.length === 0 || matrix.length[0] === 0) return;
    // init the nums and tree array.
    this.nums = new Array(matrix.length).fill(0);
    this.tree = new Array(matrix.length +1).fill(0);
    for(var i=0; i<matrix.length; i++) {
        this.nums[i] = new Array(matrix[0].length).fill(0);
        this.tree[i] = new Array(matrix[0].length +1).fill(0);
    }
    this.tree[matrix.length] = new Array(matrix[0].length +1).fill(0);
    
    // use update function to fill the value in nums and tree array.
    for(var i=0; i<matrix.length; i++) {
        for(var j=0; j<matrix[0].length; j++) {
            this.update(i, j, matrix[i][j]);
        }
    }
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
    let diff = val - this.nums[row][col];
    this.nums[row][col] = val;
    for(let i=row+1; i<this.tree.length; i+= (i & -i)) {
        for(let j=col+1; j<this.tree[0].length; j+= (j & -j)) {
            this.tree[i][j] += diff;
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
    return this.getSum(row2, col2) - this.getSum(row2, col1-1) - this.getSum(row1-1, col2) + this.getSum(row1-1, col1-1);
};

NumMatrix.prototype.getSum = function(row, col) {
    let sum =0;
    for(let i=row+1; i>0; i-= (i & -i)) {
        for(let j=col+1; j>0; j-= (j & -j)) {
            sum += this.tree[i][j];
        }
    }
    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */
