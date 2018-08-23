/*
Given an array which consists of non-negative integers and an integer m, 
you can split the array into m non-empty continuous subarrays. 
Write an algorithm to minimize the largest sum among these m subarrays.

Note:
If n is the length of array, assume the following constraints are satisfied:

1 ≤ n ≤ 1000
1 ≤ m ≤ min(50, n)
Examples:

Input:
nums = [7,2,5,10,8]
m = 2

Output:
18

Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
*/

/**
 similar to LC 813
 
 [7,2,5,10,8]  m=2
 
        7   2   5   10     8
0       7   9   14   24    32
1       7   7   9    14    18

dp[0][i] = sum[i]
when group is 2: 
i=1, j=1  dp[1][1] = max(dp[0][0], sum(arr[1], arr[1])) = max(7,2)
     j=2  7,2,5 we can split as 7 (2,5) = max(dp[0][0], sum(arr[1]+arr[2]))
                we can split as 5 (7,2) = max(dp[0][1], sum(arr[2]+arr[2]))
     j=3  7,2,5,10 we can split as 7 (2,5,10) = max(dp[0][0], sum(arr[1]+...+arr[3]))
                we can split as (7,2) (5,10) = max(dp[0][1], sum(arr[2]+arr[3]))
                we can split as (7,2,5) (10) = max(dp[0][2], sum(arr[3]+arr[3]))

formula:  dp[0][i] = sum[i];
        dp[i][j] = Math.min(max(dp[i-1][k], getSum(k+1, j)))   i-1=<k<=j-1
 
 */
var splitArray = function(nums, m) {
    var n = nums.length, dp = new Array(m), sum = 0;
    for(var i=0; i<m; i++) {
        dp[i] = new Array(n).fill(0);
    }
    // init
    for(var i=0; i<n; i++) {
        sum += nums[i];
        dp[0][i] = sum;
    }
    
    for(var i=1; i<m; i++) {
        for(var j=i; j<n; j++) {
            var minV = Infinity;
            for(var k=i-1; k<j ;k++) {
                minV = Math.min(minV, Math.max(dp[i-1][k], getSum(k+1, j, nums)));
            }
            dp[i][j] = minV;
        }
    }
    return dp[m-1][n-1];
};

var getSum = function(start, end, nums) {
    var sum=0;
    for(var i=start; i<=end; i++) sum+=nums[i];
    return sum;
};
