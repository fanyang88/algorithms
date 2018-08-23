/*
Given a non-empty array containing only positive integers, 
find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
Note:
Each of the array element will not exceed 100.
The array size will not exceed 200.
Example 1:
Input: [1, 5, 11, 5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:
Input: [1, 2, 3, 5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
*/

/**
 * @param {number[]} nums
 * @return {boolean}  
 dp[i][0] = true, dp[0][j] = false; dp[0][0] = true 
 dp[i][j] means if there is a subset exist from 0-i that could sum to j
 dp[i][j] = dp[i-1][j]  // without add nums[i]
 dp[i][j] = dp[i-1][j-nums[i]]  // with add nums[i]
 so ince j>= nums[i]  we need to get the or result
 
      0      1      2       3       4       5       6       7       8      9     10     11
  0  true, false,  false, false, false,  false,  false,  false,  false, false,  false, false
  1  true,  true,  false, false, false,  false,  false,  false,  false, false,  false, false
  5  true,  true,  false, false, false,  true,   true,   false,  false, false,  false, false
 11  true,  true,  false, false, false,  true,   true,   false,  false, false,  false, true
  5  true,  true,  false, false, false,  true,   true,   false,  false, false,  true, true
  
    
 */
var canPartition = function(nums) {
    var sum = nums.reduce((total, num) => {return total + num}, 0);
    if(sum %2 !== 0)  return false;
    sum = parseInt(sum/2);
    var dp = [];
    for(var i=0; i<=nums.length; i++) {
        dp[i] = [];
        for(var j=0; j<=sum; j++) {
            dp[0][j] = false;
            dp[i][0] = true;
        }
    }
    dp[0][0] = true;
   
    for(i=1; i<=nums.length; i++) {
        for(var j=1; j<=sum; j++) {
            dp[i][j] = dp[i-1][j];
            if(j >= nums[i-1]) {
                dp[i][j] = dp[i-1][j] || dp[i-1][j- nums[i-1]];
            }
        }
    }
    return dp[nums.length][sum];
};

// update

/**
 * @param {number[]} nums
 * @return {boolean}  
 dp[i][0] = true, dp[0][j] = false; dp[0][0] = true 
 dp[i][j] means if there is a subset exist from 0-i that could sum to j
 dp[i][j] = dp[i-1][j]  // without add nums[i]
 dp[i][j] = dp[i-1][j-nums[i]]  // with add nums[i]
 so ince j>= nums[i]  we need to get the or result
 
      0      1      2       3       4       5       6       7       8      9     10     11
  0  true, false,  false, false, false,  false,  false,  false,  false, false,  false, false
  1  true,  true,  false, false, false,  false,  false,  false,  false, false,  false, false
  5  true,  true,  false, false, false,  true,   true,   false,  false, false,  false, false
 11  true,  true,  false, false, false,  true,   true,   false,  false, false,  false, true
  5  true,  true,  false, false, false,  true,   true,   false,  false, false,  true, true
  
    
 */
var canPartition = function(nums) {
    var sum = nums.reduce((total, num) => {return total + num}, 0);
   
    if(sum %2 !== 0)  return false;
    sum = parseInt(sum/2);
    var dp = [];
    for(var i=0; i<=nums.length; i++) {
        dp[i%2] = [];
        for(var j=0; j<=sum; j++) {
            dp[0][j] = false;
            dp[i%2][0] = true;
        }
    }
    dp[0][0] = true;
    
    for(i=1; i<=nums.length; i++) {
        for(var j=1; j<=sum; j++) {
            dp[i%2][j] = dp[(i-1)%2][j];
            if(j >= nums[i-1]) {
                dp[i%2][j] = dp[(i-1)%2][j] || dp[(i-1)%2][j- nums[i-1]];
            }
        }
    }
    return dp[nums.length%2][sum];
};
