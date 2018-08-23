/*Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.
'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).
Note:
s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like ? or *.
Example 1:
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:
Input:
s = "aa"
p = "*"
Output: true
Explanation: '*' matches any sequence.
Example 3:
Input:
s = "cb"
p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
Example 4:
Input:
s = "adceb"
p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
Example 5:
Input:
s = "acdcb"
p = "a*c?b"
Output: false
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
    just consider this case first s= 'abc'  p = '*c'
    i=0;j=0, since p[j]=== '*', istar = 0, jstar = 0, i--, next time i continue from 0 to match, since * can match empty char
    i=0,j=1,since s[i]!==p[j] j point back to jstar, i point back to istar,  i=0++, j=0++, istar++=1,
    i=1,j=1,since s[i]!==p[j] j point back to jstar, i point back to istar,  i=1++, j=0++, istar++=2
    i=2,j=1,since s[i]===p[j] i=2++, j=1++, end of loop
 */
var isMatch = function(s, p) {
    var istar = -1, jstar = -1;
    for(var i=0, j=0; i<s.length; i++, j++) {
        if(p[j]=== '*') {
            istar = i;
            jstar = j;
            i--; // this is the key
        } else {
            if(s[i] !== p[j] && p[j] !== '?') {
                if(istar >=0) {
                    j = jstar;
                    i= istar;
                    istar ++;
                } else {
                    return false;
                }
            } 
        }
    }
    
    // This is for special case such as '' & '*'
    while(p[j] === '*') j++;
    return j === p.length;
};
