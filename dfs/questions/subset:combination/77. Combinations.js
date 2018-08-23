/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var res = [];
    dfs(1, n, k, [], res);
    return res;
};

var dfs = function(level, n, k, arr, res) {
    if(arr.length === k) {
        res.push(arr.slice(0));
        return;
    }
    for(var i=level; i<=n; i++) {
        arr.push(i);
        dfs(i+1, n, k, arr, res);
        arr.pop();
    }
}