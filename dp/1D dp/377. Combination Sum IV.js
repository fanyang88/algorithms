/*
Given an integer array with all positive numbers and no duplicates, 
find the number of possible combinations that add up to a positive integer target.
Example:
nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.
Therefore the output is 7.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 at first, dp[i] = 0 traverse each element in array, 
 if there is number in array <= target i. dp[i] += dp[i-number in array]
 e.g: 
 dp[0] = 1 sum=0 has one combination possible, it is []
 dp[1] = 0 current target is 1, since nums[0]<=1 dp[1]+=dp[1-1]=1
 dp[2] = 0 current target is 2, since nums[0]<=2 dp[2]+=dp[2-1]=1
                                since nums[1]<=2 dp[2]+=dp[2-2]=1+1=2
 dp[3] = 0 current target is 3, since nums[0]<3 dp[3]+=dp[3-1]=2
                                since nums[1]<3 dp[3]+=dp[3-2]=2+1=3
                                since nums[2]<3 dp[3]+=dp[3-3]=3+1=4
 dp[4] = 0 current target is 4, since nums[0]<4 dp[4]+=dp[4-1]=4
                                since nums[1]<4 dp[4]+=dp[4-2]=4+2=6
                                since nums[2]<4 dp[4]+=dp[4-3]=6+1=7

 */
var combinationSum4 = function(nums, target) {
    nums.sort((a,b)=> a-b);
    var dp = new Array(target+1).fill(0);
    dp[0] =1;
   
    for(var i=1; i<=target; i++) {
        for(var j=0; j<nums.length; j++) {
            if(nums[j] > i)  break;
            dp[i] += dp[i-nums[j]];
        }
    }
    return dp[target];
};
