/*
There is a strange printer with the following two special requirements:
The printer can only print a sequence of the same character each time.
At each turn, the printer can print new characters starting from and ending at any places, and will cover the original existing characters.
Given a string consists of lower English letters only, your job is to count the minimum number of turns the printer needed 
in order to print it.
Example 1:
Input: "aaabbb"
Output: 2
Explanation: Print "aaa" first and then print "bbb".
Example 2:
Input: "aba"
Output: 2
Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.
Hint: Length of the given string will not exceed 100.
*/

/**
 * @param {string} s
 * @return {number}
 e.g: aabcccba
 define turn(S) = miminim turns to print S
 s[j] = 'a' the last one, so split point k can be k=1, k=2
 turn(aabcccba) = min(turn(aa) + turn(bcccb), // split to 'aa' and the rest, since the last one is the same as a, ignore it
                    turn(a) + turn(abcccb))  // split to 'a' and rest
 turn(aa) = min(turn(a) + turn())  
 turn(bcccb) = min(turn(b) + turn(ccc))
 turn(abcccb) = min(turn(a) + turn(bcccb), turn(ab) + turn(ccc))
 turn(ab) = turn(a) + 1
 turn(ccc) = min(turn(cc) + turn());
 turn(cc) = min(turn(c) + turn());
               /  if(i > j)  = 0
 so turn(i, j) -  the upper bound is turn(i, j-1) + 1, 
                  if(S[j] === S[k] and i<=k<j) = min(turn(i, k) + turn(k+1, j-1))
 */
var strangePrinter = function(s) {
    var turn = [];
    for(var i=0; i<s.length; i++) {
        turn[i] = [];
        for(var j=0; j<s.length; j++) {
            turn[i][j] = 0;
        }
    }
    return dfs(s, turn, 0, s.length-1);
};

var dfs= function(s, turn, i, j) {
    if(i>j)  return 0;
    if(turn[i][j] > 0) { // already recorded
        return turn[i][j];
    }
    var ans = dfs(s, turn, i, j-1) +1;
    for(var k=i; k<j; k++) {
        if(s[k] === s[j]) {
            ans = Math.min(ans, dfs(s, turn, i, k) + dfs(s, turn, k+1, j-1)); 
        }
    }
    turn[i][j] = ans;
    return turn[i][j];
};
