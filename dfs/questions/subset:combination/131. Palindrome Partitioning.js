/*
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
To get the all the partitions of a string s:
1. find all the palindromes in substring s[0], and all the palindromes in substring s[1:end]
2. find all the palindromes in substring s[0:1], and all the palindromes in substring s[2:end]
...
find all the palindromes in substring s[1:end-1], and all the palindromes in substring s[end]

*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var res= [];
    dfs(0, s, [], res);
    return res;
};

var dfs = function(index, s, arr, res) {
    if(index === s.length) {
        res.push(arr.slice(0));
        return;
    }
    for(var i=index; i<s.length; i++) {
        var sub = s.substr(index, i+1-index); 
        if(isValid(sub)) {
            arr.push(sub);
            dfs(i+1, s, arr, res);
            arr.pop();
        }
    }
};

var isValid = function(str) {
    var s = 0, t = str.length-1;
    while(s < t) {
        if(str[s] !== str[t]) return false;
        s++;
        t--;
    }
    return true;
};
