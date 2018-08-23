/*
Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper], return its missing ranges.
Example:
Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
Output: ["2", "4->49", "51->74", "76->99"]
*/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    var res = [];
    var next = lower;  // next denotes the next number of a[i] if there is no missing range.
    for(var i=0; i<nums.length; i++) {
        if(nums[i] < next) {  // not in the range
            continue;
        }
        if(nums[i] === next) {  // no missing value
            next ++;
            continue;
        }
        // nums[i] > next, meaning there is a gap between: next to nums[i]-1
        res.push(_getRange(next, nums[i]-1));
        next = nums[i] + 1;
    }
    if(next <= upper) {  // this is the key, for corner cases: [], lo=1, hi=1, etc
        res.push(_getRange(next, upper));
    }
    return res;
};

var _getRange = function(a, b) {
    return (a===b ? ''+a : ''+a+'->'+b);
}
