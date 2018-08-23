/*
Given a string, 
determine if a permutation of the string could form a palindrome.

Example 1:

Input: "code"
Output: false
Example 2:

Input: "aab"
Output: true
Example 3:

Input: "carerac"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 // get frequency of all characters, if there is one odd number or no odd number, it can form a palindrome
 */
var canPermutePalindrome = function(s) {
    var map = {};
    for(var chr of s) {
        map[chr] = map[chr] ? map[chr]+1 : 1;
    }
    var odd = 0;
    for(var key in map) {
        if(map[key] % 2 !== 0)  odd++;
    }
    return odd <=1;
};