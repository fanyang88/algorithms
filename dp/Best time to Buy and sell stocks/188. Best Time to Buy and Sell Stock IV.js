/*
Say you have an array for which the ith element is the price of a given stock on day i.
Design an algorithm to find the maximum profit. 
You may complete at most k transactions.
Note:
You may not engage in multiple transactions at the same time 
(ie, you must sell the stock before you buy again).

Example 1:
Input: [2,4,1], k = 2
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
Example 2:

Input: [3,2,6,5,0,3], k = 2
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
             Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
*/

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 
 check pic for example
 we define T[i][j] as the max profit we get within K tranctions, i is number of tractions, and j is the days
                / no tranction on jth day = T[i][j-1]
 T[i][j]= max of
               \ the best price can get trancation on jth day = max(price[j] - price[m] + T[i-1][m])  m= [0, j-1]
                 m is the buying date, we buy on mth day, and sell on jth day, 
                 so we need to add T[i-1][m] which is the best profit up to mth day
using above formula couse TLE
we can optimize the above to be:
                / no tranction on jth day = T[i][j-1]
 T[i][j]= max of
               \  price[j] + maxDiff 
                  maxDiff = max(maxDiff, T[i-1][j] - Price[j])
        
 */
var maxProfit = function(k, prices) {
    
    var dp = [], n=prices.length;
    if(n===0)  return 0;
    if(k >= n/2) return quickSolve(prices);
    for(var i=0; i<k+1; i++) {
        dp[i] = new Array(n).fill(0);
    }
    
    ////////////////////  fast version
    for(var i=1; i<k+1; i++) {
        var maxDiff = -prices[0];
        for(var j=1; j<n; j++) {
            dp[i][j] = Math.max(dp[i][j-1], prices[j] + maxDiff);
            maxDiff = Math.max(maxDiff, dp[i-1][j] - prices[j]);
        }
    }
    //////////////////////////
    
    ///////////////////////// slow version
    for(var i=1; i<=k; i++) {
        for(var j=1; j<n; j++) {
            dp[i][j] = dp[i][j-1];
            var maxV = dp[i][j];
            for(var m=0; m<=j-1; m++) {
                maxV = Math.max(maxV, dp[i-1][m] + prices[j] - prices[m]);
            }
            dp[i][j] = maxV;
        }
    }
    ///////////////////////////////
    
    return dp[k][n-1];
};

// This is for corner case, when tractions limit is larger
// refer to Best Time to Buy and Sell Stock II
var quickSolve = function(prices) {
    var profit = 0;
    for(var i=1; i<prices.length; i++) {
        if(prices[i] > prices[i-1]) profit += prices[i] - prices[i-1];
    }
    return profit;
};
