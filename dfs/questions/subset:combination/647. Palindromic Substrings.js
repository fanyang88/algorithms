/*
Given a string, your task is to count how many palindromic substrings in this string.
The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
Example 1:
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/

/**
 * @param {string} s
 * @return {number}
 check odd palindrome and even palindrome at each position
 e.g: aaa
 i=0   odd: a  even aa
 i=1   odd: a, aaa  even aa
 i=2   odd: a, even: no
 
 */
var countSubstrings = function(s) {
    var count = 0;
    for(var i=0; i<s.length; i++) {
        count += countPalindrome(s, i, i);
        count += countPalindrome(s, i, i+1);
    }
    return count;
};

var countPalindrome = function(s, start, end) {
    var count = 0
    while(true) {
        if(end>=s.length || start <0 || s[start] !== s[end]) break;
        start--;
        end++;
        count++;
    }
    return count;
};
