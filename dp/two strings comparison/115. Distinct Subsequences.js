/*
Given a string S and a string T, count the number of distinct subsequences of S which equals T.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).

Example 1:

Input: S = "rabbbit", T = "rabbit"
Output: 3
Explanation:

As shown below, there are 3 ways you can generate "rabbit" from S.
(The caret symbol ^ means the chosen letters)

rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
Example 2:

Input: S = "babgbag", T = "bag"
Output: 5
Explanation:

As shown below, there are 5 ways you can generate "bag" from S.
(The caret symbol ^ means the chosen letters)

babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 
 where mem[i+1][j+1] means that S[0..j] contains T[0..i] that many times as distinct subsequences. 
 Therefor the result will be mem[T.length()][S.length()].
we can build this array rows-by-rows:
the first row must be filled with 1. That's because the empty string is a subsequence of any string but only 1 time. 
So mem[0][j] = 1 for every j. 

the first column of every rows except the first must be 0. 
This is because an empty string cannot contain a non-empty string as a substring -- the very first item of the array: mem[0][0] = 1, because an empty string contains the empty string 1 time.
From here we can easily fill the whole grid: for each (x, y), 
we check if S[x] == T[y] we add the previous item and the previous item in the previous row, 
otherwise we copy the previous item in the same row. The reason is simple:

if the current character in S doesn't equal to current character T, then we have the same number of distinct subsequences as we had without the new character, which is dp[i][j-1].
if the current character in S equal to the current character T, then the distinct number of subsequences: 
the number we had before which is dp[i][j-1].
plus the distinct number of subsequences we had with less longer T and less longer S which is dp[i-1][j-1].
An example:
S: [acdabefbc] and T: [ab]

first we check with a:

           *  *
      S = [acdabefbc]
mem[1] = [0111222222]
then we check with ab:

               *  * ]
      S = [acdabefbc]
mem[1] = [0111222222]
mem[2] = [0000022244]
And the result is 4, as the distinct subsequences are:

      S = [a   b    ]
      S = [a      b ]
      S = [   ab    ]
      S = [   a   b ]


 */
var numDistinct = function(s, t) {
    var n = s.length, m= t.length, dp = new Array(m+1);
    for(var i=0; i<=m; i++) {
        if(i===0) dp[i] = new Array(n+1).fill(1);
        else dp[i] = new Array(n+1).fill(0);
    }
    
    for(var i=1; i<=m; i++) {
        for(var j=1; j<=n; j++) {
            dp[i][j] = dp[i][j-1]; // without less s and less t
            if(s[j-1] === t[i-1]) {  // should plus the result when s without current char and t without current char 
                dp[i][j] += dp[i-1][j-1]; 
            }
        }
    }
    return dp[m][n];
};