/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var i=0, j=s.length-1;
    s = s.toLowerCase();
    while(i < j) {
        while(i<s.length &&  !((s[i] <= 'z' && s[i] >= 'a') || (s[i] <= '9' && s[i] >= '0')) ) i++;
        while(j>=0 && !((s[j] <= 'z' && s[j] >= 'a') || (s[j] <= '9' && s[j] >= '0')) ) j--;
        if(s[i] !== s[j])  return false;
        i++;
        j--;
    }
    return true;
};