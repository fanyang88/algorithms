/*
Given an unsorted array of integers, 
find the number of longest increasing subsequence.

Example 1:
Input: [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequence are [1, 3, 4, 7] 
and [1, 3, 5, 7].
Example 2:
Input: [2,2,2,2,2]
Output: 5
Explanation: The length of longest continuous increasing subsequence is 1, 
and there are 5 subsequences' length is 1, so output 5.
Note: Length of the given array will be not exceed 2000 and the answer 
is guaranteed to be fit in 32-bit signed int.
*/

/**
 * @param {number[]} nums
 * @return {number}
 
 use two arrays, one record the max length to nums[i]
 the other record how many max length to nums[i]
 */
var findNumberOfLIS = function(nums) {
        var res=0, count = new Array(nums.length).fill(1);
    var dp = new Array(nums.length).fill(1);
    for(var i=1; i<nums.length; i++) {
        for(var j=0; j<i; j++) {
            if(nums[j] >= nums[i])  continue;  
            if(dp[j] +1 < dp[i]) continue; // we need to get the max length
            if(dp[j] +1 > dp[i]) {
                dp[i] = dp[j]+1;
                count[i] = count[j];  // This is the key, not 1
            } else {
                count[i]+= count[j];
            }
        }
    }
    var maxV = Math.max(...dp);
    for(var i=0; i<count.length; i++) {
        if(maxV === dp[i])  {
            res += count[i];
        }
    }
    return res;
};
