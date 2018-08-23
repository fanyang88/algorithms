/*
Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

Example:

Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
Note:  

1 is typically treated as an ugly number.
n does not exceed 1690.
*/

/**
 * @param {number} n
 * @return {number}
 dp[0] = 1
 i=1: i2=0, i3=0, i5=0  min = dp[i2]*2=2=dp[1] i2++=1
 i=2: i2=1, i3=0, i5=0 min = dp[i3]*3=3=dp[2] i3++=1
 i=3: i2=1, i3=1, i5=0 min = dp[i2]*2=4=dp[3] i2++=2
 i=4: i2=2, i3=1, i5=0 min = dp[i5]*5=5=dp[4] i5++=1
 i=4: i2=2, i3=1, i5=1 min = dp[i2]*2=6=dp[5] i2++=3  min also = dp[i3]*3 i3++=2
 
 k[1] = min( k[0]x2, k[0]x3, k[0]x5). The answer is k[0]x2. So we move 2's pointer to 1. Then we test:
 k[2] = min( k[1]x2, k[0]x3, k[0]x5). And so on. 
 Be careful about the cases such as 6, in which we need to forward both pointers of 2 and 3.
 This is the key!!!!
 
 */
var nthUglyNumber = function(n) {
    var dp = new Array(n), i2=0, i3=0, i5=0;
    dp[0] = 1;
    for(var i=1; i<n; i++) {
        dp[i] = Math.min(dp[i2]*2, dp[i3]*3, dp[i5]*5);
        if(dp[i] === dp[i2]*2) i2++;
        if(dp[i] === dp[i3]*3) i3++;
        if(dp[i] === dp[i5]*5) i5++;
    }
    return dp[n-1];
};
