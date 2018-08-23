/*
You are given coins of different denominations and a total amount of money. 
Write a function to compute the number of combinations that make up that amount. 
You may assume that you have infinite number of each kind of coin.
Note: You can assume that
0 <= amount <= 5000
1 <= coin <= 5000
the number of coins is less than 500
the answer is guaranteed to fit into signed 32-bit integer
Example 1:
Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
Example 2:
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
Example 3:
Input: amount = 10, coins = [10] 
Output: 1
*/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 
 e.g: 5  - [1,2,5]
 matrix  amount/coin  0 | 1 | 2 | 3 | 4 | 5
                    ------------------------
                 0  | 1 | 0 | 0 | 0 | 0 | 0  
                    --------------------------
                 1  | 1 | 1 | 1 | 1 | 1 | 1      add by 1 step  
                    --------------------------
                 2  | 1 | 1 | 2 | 2 | 3 | 3      add by 2 step 
                    --------------------------
                 5  | 1 | 1 | 1 | 1 | 1 | 4      add by 5 step 
                 
 */
var change = function(amount, coins) {
    var dp = [];
    for(var i=0; i<=coins.length; i++) {
        dp[i] = [];
        for(var j=0; j<=amount; j++) {
            if(i=== 0) dp[i][j] = 0;
        }
    }
    dp[0][0] = 1;
    for(var i=1; i<=coins.length; i++) {
        dp[i][0] = 1;
        for(var j=1; j<=amount; j++) {
            dp[i][j] = dp[i-1][j];
            if(j >= coins[i-1]) dp[i][j]+=  dp[i][j-coins[i-1]];
        }
    }
    return dp[coins.length][amount];
};


// update
var change = function(amount, coins) {
    var dp = [1];
    for(var i=1; i<=amount; i++) {
        dp[i] = 0;
    }
  
    for(var coin of coins) {
        for(var i=coin; i<=amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    return dp[amount];
};
