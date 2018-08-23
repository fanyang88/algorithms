/*
Given m arrays, and each array is sorted in ascending order. Now you can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a-b|. Your task is to find the maximum distance.

Example 1:
Input: 
[[1,2,3],
 [4,5],
 [1,2,3]]
Output: 4
Explanation: 
One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.

*/

/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    var min = arrays[0][0], max = arrays[0][arrays[0].length-1], result = Number.MIN_SAFE_INTEGER;
    for(var i=1; i<arrays.length; i++) {
        var head = arrays[i][0];
        var tail = arrays[i][arrays[i].length-1];
        result = Math.max(Math.abs(head - max), result);
        result = Math.max(Math.abs(tail - min), result);
        max = Math.max(max, tail);
        min = Math.min(min, head);
    }
    return result;
};
