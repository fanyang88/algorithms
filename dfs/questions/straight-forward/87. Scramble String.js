/*
Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.
Below is one possible representation of s1 = "great":
    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
To scramble the string, we may choose any non-leaf node and swap its two children.
For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat".
    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
We say that "rgeat" is a scrambled string of "great".
Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae".
    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
We say that "rgtae" is a scrambled string of "great".
Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.
Exampl 1:
Input: s1 = "great", s2 = "rgeat"
Output: true
Example 2:
Input: s1 = "abcde", s2 = "caebd"
Output: false
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 
 need to consider to two situations: 
 1. the s1 first part = s2 first part && s1 second part = s2 second part
 2. the s1 first part = s2 second part && s1 second part = s2 first part
 */
var isScramble = function(s1, s2) {
    if(s1.length !== s2.length)  return false;
    if(s1=== s2)  return true;
    
    var map = {};
    for(var i=0; i<s1.length; i++) {
        map[s1[i]] = map[s1[i]]? map[s1[i]]+1 : 1;
        map[s2[i]] = map[s2[i]]? map[s2[i]]-1 : -1;
    }
    
    for(var key in map) {
        if(map[key] !== 0)  return false;
    }
    
    for(var i=1; i<s1.length; i++) {
        if(isScramble(s1.substring(0, i), s2.substring(0, i)) &&
         isScramble(s1.substring(i), s2.substring(i)))     
            return true;
        if(isScramble(s1.substring(0, i), s2.substring(s2.length - i)) &&
           isScramble(s1.substring(i), s2.substring(0, s2.length - i))) 
            return true;
    }
    return false;
};
