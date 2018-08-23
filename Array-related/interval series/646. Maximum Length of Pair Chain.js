/*
You are given n pairs of numbers. In every pair, the first number is always smaller than the second number.
Now, we define a pair (c, d) can follow another pair (a, b) if and only if b < c. Chain of pairs can be formed in this fashion.
Given a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.
Example 1:
Input: [[1,2], [2,3], [3,4]]
Output: 2
Explanation: The longest chain is [1,2] -> [3,4]
*/

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a, b) => {
        if(a[1] === b[1]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });
    
    var len = 0;
    var prev = Number.MIN_SAFE_INTEGER;
    for(var pair of pairs) {
        if(pair[0] > prev) {
            len ++;
            prev = pair[1];
        } 
    }
    return len;
};
