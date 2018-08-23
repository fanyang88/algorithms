/*
Given a string s, return all the palindromic permutations 
(without duplicates) of it. 
Return an empty list if no palindromic permutation could be form.

Example 1:

Input: "aabb"
Output: ["abba", "baab"]
Example 2:

Input: "abc"
Output: []
*/


/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
    var map = {}, res= [], mid, odd =0, cur= '';
    for(var chr of s) {
        map[chr] = map[chr] ? map[chr]+1 : 1;
    }
    for(var key in map) {
        if(map[key] % 2 ===1 )  {
            mid = key;
            odd++;
        }
    }
    if(odd > 1)  return res;
    if(mid) {
        cur = ''+mid;
        map[mid] --;
    }
    dfs(map, cur, res, s.length);
    return res;
};

var dfs = function(map, cur, res, len) {
    if(cur.length === len) {
        res.push(cur);
        return;
    }
    for(var key in map) {
        if(map[key]==0)  continue;
        map[key] -=2;
        cur = key + cur + key;
        dfs(map, cur, res, len);
        map[key] +=2;
        cur = cur.substring(1, cur.length-1);
    }
};
