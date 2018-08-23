/*
Given two strings s and t, write a function to determine if t is an anagram of s.
For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.
Note:  You may assume the string contains only lowercase alphabets.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length)  return false;
    var arr = new Array(26).fill(0);
    for(var i=0; i<s.length; i++) {
        var inds = s.charCodeAt(i) - 'a'.charCodeAt(0);
        arr[inds] ++;
        var indt = t.charCodeAt(i) - 'a'.charCodeAt(0);
        arr[indt] --;
        
    }
    var sum = arr.reduce((total, item) =>  {
        return total + Math.abs(item); 
    } ,0);
    return  sum=== 0;
};
