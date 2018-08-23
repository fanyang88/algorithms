/*
Say you have an array for which the ith element is the price of a given stock on day i.
Design an algorithm to find the maximum profit. 
You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). 
However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/

/**
 * @param {number[]} prices
 * @return {number}
 * 
e.g: the array is 5，1，2，3，4，0
we can buy at 1, and sell at 4, the profit= 3
we can buy at 1, sell at 2, earn 1, then buy at 2, sell at 3, earn 1, then buy at 3, sell at 4, earn 1, total profit=3
in all, add up all positive difference of price[i]-price[i-1]
 */
var maxProfit = function(prices) {
    var i, sum=0;
    for(i=1; i<prices.length; i++) {
        diff = prices[i] - prices[i-1];
        if(diff > 0) {
            sum += diff;
        }
    }
    return sum;
};
