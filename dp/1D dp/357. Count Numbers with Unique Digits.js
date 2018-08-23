/*
Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.
Example:
Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, excluding [11,22,33,44,55,66,77,88,99])
*/

/**
 * @param {number} n
 * @return {number}
 * f(1) = 10 (0-9)
 * f(2) = 9*9 (1-> 9 second digit exclude 1 there are 9 digits can be used), 1-> 9(on second digit), 2-> 9(on second digit)..)
 * f(3) = 9*9*8(thrid digit can only have 8 choices)
 * f(4) = 9*9*8*7(thrid digit can only have 8 choices)
 * 
 * answer =  f(1) + f(2) +... + f(n)
 */
var countNumbersWithUniqueDigits = function(n) {
    var dp ={}, step = 9, sum=0;
    dp[0] = 1;
    dp[1] = 9;
    
    for(i=2; i<=n; i++) {
        dp[i] = dp[i-1] * step;
        step --;
    }
    for(i=0; i<=n; i++) {
        sum += dp[i];
    }
    return sum;
};
