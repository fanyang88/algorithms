/*
Given a string s and a string t, check if s is subsequence of t.
You may assume that there is only lower case English letters in both s and t. 
t is potentially a very long (length ~= 500,000) string, 
and s is a short string (<=100).

A subsequence of a string is a new string which is formed from the original 
string by deleting some (can be none) of the characters without disturbing 
the relative positions of the remaining characters. 
(ie, "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
s = "abc", t = "ahbgdc"

Return true.

Example 2:
s = "axc", t = "ahbgdc"

Return false.
Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, 
and you want to check one by one to see if T has its subsequence. 
In this scenario, how would you change your code?
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 we can use a hashmap to record each postion for char in t.
 then for each chr in s, using binary search to find the position for each chr, if any chr can not be found, return false.
 .eg: s = "hc", t = "achbhdc"   map = {a: [0], b: [3], h: [2, 4], d: [5] c: [1, 6]}
  start = -1, find in [2,4] the first larger than -1 is 2, start=2
  start=2, find in [1, 6] the first larger than 2 is 6, start = 6, return true.
 */
var isSubsequence = function(s, t) {
    var map = {};
    for(var i=0; i<t.length; i++) {
        if(!map[t[i]])  map[t[i]] = [];
        map[t[i]].push(i);
    }
   
    var start = -1;
    for(var chr of s) {
         
        if(!map[chr])   return false;
        var ind = findNextLarger(map[chr], start);
        if(ind === -1)  return false;
        start = ind;
        
    }
    return true;
};

var findNextLarger = function(arr, val) {
    var s = 0, e = arr.length-1;
    while(s < e) {
        var mid = ~~((s+e) / 2);
        if(arr[mid] > val) {  // continue search on left part
            e = mid; // mid can be a answer
        } else {
            s = mid+1;
        }
    }
    return arr[e] > val ? arr[e] : -1;
};