/*
Your are given an array of integers prices, 
for which the i-th element is the price of a given stock on day i; 
and a non-negative integer fee representing a transaction fee.
You may complete as many transactions as you like, 
but you need to pay the transaction fee for each transaction. 
You may not buy more than 1 share of a stock at a time.
Return the maximum profit you can make.
Example 1:
Input: prices = [1, 3, 2, 8, 4, 9], fee = 2
Output: 8
Explanation: The maximum profit can be achieved by:
Buying at prices[0] = 1
Selling at prices[3] = 8
Buying at prices[4] = 4
Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
*/

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 There are two states: sold, hold
 if we hold the stock on ith day, means we either bought/hold the stack on i-1th day= hold[i-1]
 or we sold the stock on i-1th day and buy on ith day = sold[i-1] - price[i]. since buy cost money
 if we sold the stock on ith day, means we either sold it on i-1th day = sold[i-1]
 or we bought the stock on i-1th day and sold on ith day = hold[i-1] + price[i] - fee
 */
var maxProfit = function(prices, fee) {
    var n= prices.length, hold = new Array(n), sold = new Array(n);
    hold[0] = -prices[0];  // bought on first day
    sold[0] = 0; // can't sell on first day
    for(var i=1; i<n; i++) {
        hold[i] = Math.max(hold[i-1], sold[i-1] - prices[i]);
        sold[i] = Math.max(sold[i-1], hold[i-1] + prices[i] - fee);
    }
    return Math.max(hold[n-1], sold[n-1]);
};