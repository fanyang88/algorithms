/*
Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.
For example, given the following triangle
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
*/

/**
 * @param {number[][]} triangle
 * @return {number}
 * 
 * Note that in this problem, "adjacent" of a[i][j] means a[i-1][j] and a[i-1][j-1], if available(not out of bound), while a[i-1][j+1] is not "adjacent" element.
from up to down, first consider the first row and second row
   [2]          [2]
 [3   4]  ->  [5    6]
 
 We continue to allow such addtion till reach to the last row.
 Last find out the minimum value on the last row which is the minimum path sum.
 if it is the first item in the row, j===0 , triangle[i][j] += triangle[i-1][j];
 else if it is the first item in the row (i==j)  triangle[i][j] += triangle[i-1][j-1];
 else triangle[i][j] += Math.min(triangle[i-1][j-1], triangle[i-1][j]);
 */
var minimumTotal = function(triangle) {
    var i, j, len = triangle.length;
    for(i=1; i<triangle.length; i++) {
        for(j=0; j<triangle[i].length; j++) {
            if( j=== 0) {
                triangle[i][j] += triangle[i-1][j];
            }
            else {
                if(i===j) {
                    triangle[i][j] += triangle[i-1][j-1];
                }
                else {
                    triangle[i][j] += Math.min(triangle[i-1][j-1], triangle[i-1][j]);
                }
            }
        }
    }
    let maxSum = triangle[len-1][0];
    for(i=1;i<triangle[len-1].length; i++) {
        maxSum = Math.min(maxSum, triangle[len-1][i]);
    }
    return maxSum;
};
