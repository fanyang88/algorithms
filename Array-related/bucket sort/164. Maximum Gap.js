/*
Given an unsorted array, 
find the maximum difference between the successive elements in its sorted form.

Return 0 if the array contains less than 2 elements.

Example 1:

Input: [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either
             (3,6) or (6,9) has the maximum difference 3.
Example 2:

Input: [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.
Note:

You may assume all elements in the array are 
non-negative integers and fit in the 32-bit signed integer range.
Try to solve it in linear time/space.

*/

/**
 * @param {number[]} nums
 * @return {number}
 use bucket sort, for example, [3,6,9,1] = > [1, 3, 6, 9]
 min= 1 max = 9 gap = ceil(max-min/ len-1) = ceil(8/3) = 3
 use two arrays to store the max and min in each range
 e:g 1 belong to bucket[0] since (1-min)/gap = 0, put in bucket 0
     3 belong to bucket[0]
     6 belong to bucket[1]
     9 belong to bucket[2]
bucket #   0    1    2 
max        3    6    9
min        1    6    9     we use previous max - current min to get the max gap
1 compare to 1, then 3 compare to 6, then 6 coompare to 9, at last 9 compare to 9
 */
var maximumGap = function(nums) {
    if(nums.length===0)   return 0;
    var maxV = Math.max(...nums);
    var minV = Math.min(...nums);
    var gap = Math.ceil((maxV - minV) / (nums.length-1));
    var bucketMin = new Array(nums.length-1).fill(Number.MAX_SAFE_INTEGER);
    var bucketMax = new Array(nums.length-1).fill(Number.MIN_SAFE_INTEGER);
    
    // scan each number and get min and max for each bucket
    for(var num of nums) {
        if (num === minV || num === maxV) // sepcial case: [1, 100000] they belong to same bucket
            continue;      // this is the key
        var id = ~~((num - minV) / gap);
        bucketMin[id] = Math.min(bucketMin[id], num);
        bucketMax[id] = Math.max(bucketMax[id], num);
    }
    
    // get the max gap by using current min - previous max
    var maxGap = Number.MIN_SAFE_INTEGER;
    var previous = minV;
    for(var i=0; i<bucketMin.length; i++) {
        if(bucketMin[i] === Number.MAX_SAFE_INTEGER)  continue;  // empty bucket
        maxGap = Math.max(maxGap, bucketMin[i] - previous);
        previous = bucketMax[i];
    }
    maxGap = Math.max(maxGap, maxV - previous);
    return maxGap;
};