/*
Given a square array of integers A, we want the minimum sum of a falling path through A.
A falling path starts at any element in the first row, and chooses one element from each row.  
The next row's choice must be in a column that is different from the previous row's column by at most one.
Example 1:
Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: 12
Explanation: 
The possible falling paths are:
[1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
[2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
[3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
The falling path with the smallest sum is [1,4,7], so the answer is 12.
*/

/**
 * @param {number[][]} A
 * @return {number}
 */
/*
[1,2,3]        [1, 2,  3]
[4,5,6]  ->    [5, 6,  8]
[7,8,9]        [12,13, 15]
start from second row, each element add the smallest in the previous row, the min value in last row is the answer.
*/

var minFallingPathSum = function(A) {
    const len = A.length;
    for(var i=1; i<len; i++) {
        for(var j=0; j<len; j++) {
            A[i][j] += Math.min((A[i-1][j-1] || Infinity), A[i-1][j], (A[i-1][j+1] || Infinity));
        }
    }
    return Math.min(...A[len-1]);
};
