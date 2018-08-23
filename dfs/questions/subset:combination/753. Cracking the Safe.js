/*

There is a box protected by a password. The password is n digits, 
where each letter can be one of the first k digits 0, 1, ..., k-1.
You can keep inputting the password, 
the password will automatically be matched against the last n digits entered.
For example, assuming the password is "345", I can open it when I type "012345", 
but I enter a total of 6 digits.
Please return any string of minimum length that is guaranteed to 
open the box after the entire string is inputted.

Example 1:
Input: n = 1, k = 2
Output: "01"
Note: "10" will be accepted too.
Example 2:
Input: n = 2, k = 2
Output: "00110"
Note: "01100", "10011", "11001" will be accepted too.
*/


/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 e.g: n=2, k=2
 there are 4 possible passwords in total, they are 00, 01, 10, 11
 we need to find a path to include all the 4 password.
 we start from 00. the goal is to find a path that we visited all 4 passwords.
                               00 - prefix 0
                            /      \      
                           00       01 (prefix 1)
                     exist        /      \
                                10         11
                              /    \      /   \
                            00     01   10      11(exist)
                      (exist)   (exist)  |
                                         answer: 00110
   
 */
var crackSafe = function(n, k) {
    var res = new Array(n).fill(0);
    var visited = new Set();
    visited.add(res.join(''));
    // there are total of k^n possiblities for pws
    var total = Math.pow(k, n);
    dfs(res, visited, total, k, n);
    return res.join('');
};

var dfs = function(res, visited, total, k, n) {
    if(visited.size === total) {
        return true;
    }
    // last n-1 digits is the prefix
    var prefix = res.slice(res.length-n+1).join('');  
  
    for(var i=0; i<k; i++) {
        var newPws = prefix + i;
        // node visited
        if(visited.has(newPws))  continue;
        
        res.push(i);
        visited.add(newPws);
        if(dfs(res, visited, total, k, n))  return true;
        visited.delete(newPws);
        res.pop();
        
    }
    return false;
}
