/*
Given a grid where each entry is only 0 or 1, find the number of corner rectangles.

A corner rectangle is 4 distinct 1s on the grid that form an axis-aligned rectangle. Note that only the corners need to have the value 1. Also, all four 1s used must be distinct.

 

Example 1:

Input: grid = 
[[1, 0, 0, 1, 0],
 [0, 0, 1, 0, 1],
 [0, 0, 0, 1, 0],
 [1, 0, 1, 0, 1]]
Output: 1
Explanation: There is only one corner rectangle, with corners grid[1][2], grid[1][4], grid[3][2], grid[3][4].
 

Example 2:

Input: grid = 
[[1, 1, 1],
 [1, 1, 1],
 [1, 1, 1]]
Output: 9
Explanation: There are four 2x2 rectangles, four 2x3 and 3x2 rectangles, and one 3x3 rectangle.
 

Example 3:

Input: grid = 
[[1, 1, 1, 1]]
Output: 0
Explanation: Rectangles must have four distinct corners.
 
*/

/**
 * @param {number[][]} grid
 * @return {number}
 To find an axis-aligned rectangle, my idea is to fix two rows (or two columns) first, 
 then check column by column to find "1" on both rows. 
 Say you find n pairs, then just pick any 2 of those to form an axis-aligned rectangle 
 (calculating how many in total is just high school math).
 */
var countCornerRectangles = function(grid) {
    var m = grid.length, n = grid[0].length, res= 0;
    for(var row1=0; row1< m-1; row1++) {
        for(var row2 = row1+1; row2<m; row2++) {
            var count = 0;
            for(var j=0; j<n; j++) {
                if(grid[row1][j] === grid[row2][j] && grid[row1][j] === 1)  count++;
            }
            res += count*(count-1)/2;
        }
    }
    return res;
};
