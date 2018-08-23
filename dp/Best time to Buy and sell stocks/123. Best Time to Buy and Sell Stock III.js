/*
Say you have an array for which the ith element is the price of a given stock on day i.
Design an algorithm to find the maximum profit. 
You may complete at most two transactions.
Note: You may not engage in multiple transactions at the same time 
(i.e., you must sell the stock before you buy again).
Example 1:
Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), 
profit = 3-0 = 3.Then buy on day 7 (price = 1) and sell on day 8 (price = 4), 
profit = 4-1 = 3.
Example 2:
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), 
profit = 5-1 = 4.Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 
 in the question, since we can do at most twice. for each prices[i], 
first calculate the max profit from 0 to i(buy and sell at two point within 0 to i), store in lprofit[i], lprofit[i]= max(lprofit[i-1], prices[i]- low)
then calculate the max profit from n-1 to i(buy and sell at two point within i to n-1). store in rprofit[i], rprofit[i]= max(rprofit[i-1], prices[i]- low)
In the end, find out the max= rprofit[i]+ lprofit[i], which the max profit.
run in O(n)
                                                                 low
from left to right, keep a low variable, if current price < low, [2, 1], update low to be current price
from right to left, keep a high variable, if current price > high, [4, 3] update high to be current price.
                                                                       high
e.g: 5,1,2,3,0,1,3,6
high= 6
i=6: rprofit[6]= high -3 =3
i=5: rprofit[5]= high -1 =5
i=4: rprofit[4]= high -0 =6
i=3,2,1,0 ...rprofit[i]=rprofit[i-1]=6

low= 5
i=1: lprofit[1]= lprofit[0]= 0, low=1
i=2: lprofit[2]= 2- low=1
i=3: lprofit[3]= 3- low=2
i=4: lprofit[4]= lprofit[3]= 2, low=0
i=5: lprofit[5]= lprofit[4]= 2
i=6: lprofit[6]= 3- low=3
i=7: lprofit[7]= 6- low=6

rprofit: 6,6,6,6,6,5,3,0
lprofit: 0,0,1,2,2,2,3,6
max=8
 */
var maxProfit = function(prices) {
    var n = prices.length, maxV = 0, low = prices[0], high = prices[n-1], left = [], right = [];
    for(var i=0; i<n; i++) {
        maxV = Math.max(maxV, prices[i] - low);
        left[i] = maxV;
        if(low > prices[i])  low = prices[i];
    }
    maxV = 0;
    for(var i=n-1; i>=0; i--) {
        maxV = Math.max(maxV, high-prices[i]);
        right[i] = maxV;
        if(high < prices[i])  high = prices[i];
    }
    for(var i=0; i<n; i++) {
        maxV = Math.max(maxV, left[i]+right[i]);
    }
    return maxV;
};
