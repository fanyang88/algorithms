/*
Given an integer n, return 1 - n in lexicographical order.

For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

Please optimize your algorithm to use less time and space. 
The input size may be as large as 5,000,000.
*/

/**
 * @param {number} n
 * @return {number[]}
 
 The idea is pretty simple. If we look at the order we can find out 
 we just keep adding digit from 0 to 9 to every digit and make it a tree.
Then we visit every node in pre-order. 
       1        2        3    ...
      /\        /\       /\
   10 ...19  20...29  30...39   ....
   
   
 */
var lexicalOrder = function(n) {
    var res = [];
    for(var i=1; i<=9; i++) {
        dfs(i, res, n);
    }
    return res;
};

var dfs = function(cur, res, n) {
    if(cur > n) return;
    
    res.push(cur);
    for(var i=0; i<10; i++) {
        if(cur * 10 + i > n)  break;
        dfs(cur*10+i, res, n);
    }
};
