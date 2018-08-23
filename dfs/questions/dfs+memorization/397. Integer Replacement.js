/*
Given a positive integer n and you can do operations as follow:

If n is even, replace n with n/2.
If n is odd, you can replace n with either n + 1 or n - 1.
What is the minimum number of replacements needed for n to become 1?

Example 1:

Input:
8

Output:
3

Explanation:
8 -> 4 -> 2 -> 1
Example 2:

Input:
7

Output:
4

Explanation:
7 -> 8 -> 4 -> 2 -> 1
or
7 -> 6 -> 3 -> 2 -> 1
*/

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    var orignal = n, map = {};
    return dfs(n, orignal, map);
};

var dfs = function(n, orignal, map) {
    if(n ===1) {
        return 0;
    }
    // This is the key, not original, since n can go up to n+1
    if(n > orignal+1) return Infinity;  
    if(map[n] !== undefined)  return map[n];
    
    var minV = Infinity;
    if(n % 2===0)  {
        minV = Math.min(minV, 1+dfs(n/2, orignal, map));
    } else {
        minV = Math.min(minV, 1+dfs(n-1, orignal, map));
        minV = Math.min(minV, 1+dfs(n+1, orignal, map));
    }
    map[n] = minV;
    return minV;
};


