/*
Find all possible combinations of k numbers that add up to a number n, 
given that only numbers from 1 to 9 can be used and each combination 
should be a unique set of numbers.

Note:

All numbers will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]
*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 
 
 */
var combinationSum3 = function(k, n) {
    var res= [];
    dfs(1, 0, [], n, k, 0, res);
    return res;
};

var dfs = function(index, sum, arr, n, k, count, res) {
    if(count === k && sum===n) {
        res.push(arr.slice(0));
        return;
    }  
    if(count > k|| sum > n) {
        return;
    }
    for(var i=index; i<=9; i++) {
        arr.push(i);
        dfs(i+1, sum+i, arr, n, k, count+1, res);
        arr.pop();
    }
};