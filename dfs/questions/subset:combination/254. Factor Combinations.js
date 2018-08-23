/*
Numbers can be regarded as product of its factors. For example,
8 = 2 x 2 x 2;
  = 2 x 4.
Write a function that takes an integer n and return all possible combinations of its factors.
Note:
You may assume that n is always positive.
Factors should be greater than 1 and less than n.
Examples 1:
Input: 1
Output: []

Examples 2:
Input: 37
Output:[]

Examples 3:
Input: 12
Output:
[  [2, 6],
  [2, 2, 3],
  [3, 4]]
  
Examples 4:
Input: 32
Output:
[  [2, 16],
  [2, 2, 8],
  [2, 2, 2, 4],
  [2, 2, 2, 2, 2],
  [2, 4, 4],
  [4, 8]]
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function(n) {
    var res = [];
    if(n<2)  return res;
    dfs(n, 2, [], res);
    return res;
};


var dfs = function(n, index, arr, res) {
  if(n===1) {
      if(arr.length > 1) { // arr.length=1 is itself
          res.push(arr.slice(0));
      }
      return;
  }  
  for(var i = index; i<=n; i++) {
      if(n % i === 0) { // i is a factor of n
          arr.push(i);
          dfs(n/i, i, arr, res);
          arr.pop();
      }
  }
  return;
};
