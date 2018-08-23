/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

For example,
Given [10, 9, 2, 5, 3, 7, 101, 18],
The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. 
Note that there may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 
 using dp [i] donote the longest sequece from 0 to i
     [10, 9, 2, 5, 3, 7, 101, 18]
 dp: [1]
     [1,  1]      since 9<10
     [1,  1, 1]   since 2<9 2<10
     [1,  1, 1, 2]   since 5<9 5<10  but 5>2 dp[2]+1 = dp[3]
     [1,  1, 1, 2, 2]   since 3<9 3<10 3<5 but 3>2 dp[2]+1 = dp[4]
     [1,  1, 1, 2, 2, 3]   since 7<9 7<10 but 7>5 7>2 7>3 max(dp[2]+1, dp[3]+1, dp[4]+1) = dp[5] = 3
     [1,  1, 1, 2, 2, 3]   since 101 > all of previous max(dp[0]+1,... dp[5]+1) = dp[6] = 4
     [1,  1, 1, 2, 2, 3]   since 101 > all of previous except 101, max(dp[0]+1,... dp[5]+1) = dp[7] = 4
     return dp[7]
 */
var lengthOfLIS = function(nums) {
    if(nums.length === 0)  return 0;
    var dp = [1];
    for(var i=1; i<nums.length; i++) {
        dp[i] = 1;
        for(var k=0; k<i; k++) {
            if(nums[k] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[k]+1);
            } 
        }
    }
    return Math.max(...dp);
};
