/*
Say you have an array for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction 
(ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Example 1:
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
Example 2:
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 * 
 * 
scan from first to end, use a variable "low" to record the minimum number, use max to record the max profit.
e.g: 5,1,2,3,0,1,3,5
max=0, low=5
i=1: low=1, tmp= 1-low<max, max=0;
i=2: low=1, tmp= 2-low=1>max, max=1
i=3: low=1, tmp= 3-low=2>max, max=2
i=4: low=0, tmp= 0-low<max, max=2
i=5: low=0, tmp= 1-low=1<max, max=2
i=6: low=0, tmp= 3-low=3>max, max=3
i=7: low=0, tmp= 5-low=5>max, max=5
 return 5
 */
 
var maxProfit = function(prices) {
    var i, low = prices[0], maxV = 0;
    for(i=1; i<prices.length; i++) {
        if(low > prices[i]) {
            low = prices[i];
        }
        maxV = Math.max(maxV, prices[i] - low);
    }
    return maxV;
};
