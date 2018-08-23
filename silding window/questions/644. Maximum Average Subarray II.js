/*
Given an array consisting of n integers, find the contiguous subarray 
whose length is greater than or equal to k that has the maximum average value. 
And you need to output the maximum average value.
Example 1:
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation:
when length is 5, maximum average value is 10.8,
when length is 6, maximum average value is 9.16667.
Thus return 12.75.
Note:
1 <= k <= n <= 10,000.
Elements of the given array will be in range [-10,000, 10,000].
The answer with the calculation error less than 10-5 will be accepted.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var maxAvg = Number.NEGATIVE_INFINITY;
    for(var len=k; len<=nums.length; len++) {
        var avg = _getMaxAvg(len, nums, 0, len);
        maxAvg = Math.max(maxAvg, avg);
    }
    return maxAvg;
};

var _getMaxAvg = function(len, nums, start, end) {
    var sum = 0, avg = Number.NEGATIVE_INFINITY;
    // use sliding window to get the max avg with length == len
    for(var i=start; i<end; i++) {
        sum += nums[i];
    }
    
    avg = Math.max(avg, sum / len);
    while(i<nums.length) {
        sum = sum - nums[start] + nums[i];
        avg = Math.max(avg, sum / len);
        start ++;
        i++;
    }
    return avg;
};
