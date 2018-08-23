/*
There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
What is the minimum candies you must give?

Example 1:

Input: [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
Example 2:

Input: [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
             The third child gets 1 candy because it satisfies the above two conditions.
*/

/**
 * @param {number[]} ratings
 * @return {number}
 Two pathes
 */
var candy = function(ratings) {
    var n = ratings.length, dp = new Array(ratings.length).fill(1);
    for(var i=1; i<n; i++) {
        if(ratings[i] > ratings[i-1]) 
            dp[i] = dp[i-1] +1;
    }
    for(var i=n-2; i>=0; i--) {
        if(ratings[i] > ratings[i+1]) 
            dp[i] = Math.max(dp[i+1] +1, dp[i]);
    }
    var sum = dp.reduce((total, item) => total + item, 0);
    return sum;
};