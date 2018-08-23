/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
*/

/**
 * @param {number[]} height
 * @return {number}
 
 [0,1,0,2,1,0,1,3,2,1,2,1]  
 go from left to right: largest left: [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3]
 go from right to left:largest right: [3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1]
 sum = min(left[i], right[i]) - A[i];
 */
var trap = function(height) {
    var n = height.length, maxLeft = -Infinity, maxRight = -Infinity, left = new Array(n), right = new Array(n), sum=0;
    for(var i=0; i<n; i++) {
        maxLeft = Math.max(height[i], maxLeft);
        left[i] = maxLeft;
    }
    for(var i=n-1; i>=0; i--) {
        maxRight = Math.max(height[i], maxRight);
        right[i] = maxRight;
    }
    for(var i=0; i<n; i++) {
        sum += Math.min(left[i], right[i]) - height[i];
    }
    return sum;
};
