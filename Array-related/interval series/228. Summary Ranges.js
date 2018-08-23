/*
Given a sorted integer array without duplicates, return the summary of its ranges.

Example 1:

Input:  [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
Example 2:

Input:  [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.

*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(nums.length ===0)  return [];
    var cur = nums[0], k=0, res= [];
    for(var i=1; i<nums.length; i++) {
        if(nums[i] === cur+1) {
            k++;
            cur = nums[i];
        } else {
            if(k===0)  res.push(''+cur);
            else res.push(''+(cur-k)+'->'+cur);
            cur = nums[i];
            k=0;
            
        }
    }
    if(k===0)  res.push(''+cur);
    else res.push(''+(cur-k)+'->'+cur);
    return res;
};