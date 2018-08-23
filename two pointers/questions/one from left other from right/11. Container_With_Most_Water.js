/*
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
Find two lines, which together with x-axis forms a container, such that the container contains the most water.

e.g: height = [1,4,1,5,2]
maxArea = 8 between 4 and 5
*/
// Ask to find the two highest lines from left and right sepearatly and the area between them is the answer.
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var l = 0, r = height.length-1, maxArea = 0;
    while(l< r) {
        maxArea = Math.max(maxArea, (r-l)*Math.min(height[l], height[r]));
        if(height[l] < height[r]) l++;
        else r--;
    }
    return maxArea;
};
