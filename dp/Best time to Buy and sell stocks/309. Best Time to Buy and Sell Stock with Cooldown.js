/*

Say you have an array for which the ith element is the price of a given stock on day i.
Design an algorithm to find the maximum profit. 
You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

Input: [1,2,3,0,2]
Output: 3 
Explanation: transactions = [buy, sell, cooldown, buy, sell]
*/

/**
 * @param {number[]} prices
 * @return {number}
 
 hold can come from hold or rest
 hold[i] = max(hold[i-1], rest[i-1] - price[i]);
 hold can come from sold or rest
 rest[i] = max(rest[i-1], sold[i-1]);
 sold[i] = hold[i-1] + price[i];
            
 check pic
 */
var maxProfit = function(prices) {
    //on 0th day, the init state is as below.
    var rest = 0; // no tranction on 0th day
    var hold = -prices[0]; // after buy, profit is negative.
    var sold = 0; // can't sell on first day
    for(var i=1; i<prices.length; i++) {
        var prevRest = rest;
        var prevHold = hold;
        var prevSold = sold;
        hold = Math.max(prevHold, prevRest - prices[i]);
        rest = Math.max(prevRest, prevSold);
        sold = prevHold + prices[i];
    }
    return Math.max(rest, sold);
};
