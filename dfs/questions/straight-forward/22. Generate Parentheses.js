/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
For example, given n = 3, a solution set is:
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res = [];
    dfs(0, 0, '', res, n);
    return res;
};

var dfs = function(left, right, str, res, n) {
    if(left === n && right === n) {
        res.push(str.slice(0));
        return;
    }
    if(left < n) {
        dfs(left+1, right, str + '(', res, n);
    }
    if(right < left) {
        dfs(left, right+1, str + ')', res, n);
    }
};
