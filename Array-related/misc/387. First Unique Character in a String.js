/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
Examples:
s = "leetcode"  return 0.
s = "loveleetcode",  return 2.
Note: You may assume the string contain only lowercase letters.
*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var i, arr = s.split('');
    var map = new Array(26).fill(0);
    
    for(i=0; i<s.length; i++) {
        chr = s.charCodeAt(i) - "a".charCodeAt(0);
        map[chr] += 1;
        
    }
    for(i=0; i<s.length; i++) {
        chr = s.charCodeAt(i) - "a".charCodeAt(0);
        if(map[chr]<2) {
            return i;
        }
    }
    
    return -1;
};
