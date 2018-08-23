/*
Given a non-empty string, encode the string such that its encoded length is the shortest.
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
Note:
k will be a positive integer and encoded string will not be empty or have extra space.
You may assume that the input string contains only lowercase English letters. The string's length is at most 160.
If an encoding process does not make the string shorter, then do not encode it. If there are several solutions, return any of them is fine.
Example 1:
Input: "aaa"
Output: "aaa"
Explanation: There is no way to encode it such that it is shorter than the input string, so we do not encode it.
Example 2:
Input: "aaaaa"
Output: "5[a]"
Explanation: "5[a]" is shorter than "aaaaa" by 1 character.
Example 3:
Input: "aaaaaaaaaa"
Output: "10[a]"
Explanation: "a9[a]" or "9[a]a" are also valid solutions, both of them have the same length = 5, which is the same as "10[a]".
Example 4:
Input: "aabcaabcd"
Output: "2[aabc]d"
Explanation: "aabc" occurs twice, so one answer can be "2[aabc]d".
Example 5:
Input: "abbbabbbcabbbabbbc"
Output: "2[2[abbb]c]"
Explanation: "abbbabbbc" occurs twice, but "abbbabbbc" can also be encoded to "2[abbb]c", so one answer can be "2[2[abbb]c]".
*/

/**
 * @param {string} s
 * @return {string}
 
 dp[i][j] = string from index i to index j in encoded form.
 We can write the following formula as:-
 dp[i][j] = min(dp[i][j], dp[i][k] + dp[k+1][j]) or if we can find some pattern in string from i to j which will result in more     less length.

Time Complexity = O(n^3)
 */
var encode = function(s) {
    var dp = [];
    for(var i=0; i<s.length; i++) {
        dp[i] = [];
        for(var j=0; j<s.length; j++) {
            dp[i][j] = '';
        }
    }
    
    for(var len = 0; len <s.length; len++) {
        for(var i=0; i<s.length - len; i++) {
            var j = i+len; // j-i =len
            var subs = s.substring(i, j+1);
            dp[i][j] = subs;
            if(subs.length < 4) {
                continue;
            }
            for(var k = i; k<j; k++) {
                if((dp[i][k] + dp[k+1][j]).length < dp[i][j].length) {
                    dp[i][j] = dp[i][k] + dp[k+1][j];
                }
            }
            
            // Loop for checking if string can itself found some pattern in it which could be repeated.
            for(var k=0; k<subs.length; k++) {
                var repeatStr = subs.substring(0, k+1);
                if(subs.length % repeatStr.length  == 0  && repeatStr.repeat(subs.length /repeatStr.length) === subs) {
                    // don't use repeatStr directly since repeatStr may have a shorter encoding str
                    // which is stored in dp[i][i+k], we should use the shortest encoding str for repeatStr.
                    var ss = subs.length /repeatStr.length + "[" + dp[i][i+k] + "]"; 
                    if(ss.length < dp[i][j].length) {
                        dp[i][j] = ss;
                    }
                }
            }
        }
    }
    return dp[0][s.length-1];
};

