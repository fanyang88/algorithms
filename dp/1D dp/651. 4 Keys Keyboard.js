/*
Imagine you have a special keyboard with the following keys:

Key 1: (A): Print one 'A' on screen.

Key 2: (Ctrl-A): Select the whole screen.

Key 3: (Ctrl-C): Copy selection to buffer.

Key 4: (Ctrl-V): Print buffer on screen appending it after what has already been printed.

Now, you can only press the keyboard for N times (with the above four keys), find out the maximum numbers of 'A' you can print on screen.

Example 1:
Input: N = 3
Output: 3
Explanation: 
We can at most get 3 A's on screen by pressing following key sequence:
A, A, A
Example 2:
Input: N = 7
Output: 9
Explanation: 
We can at most get 9 A's on screen by pressing following key sequence:
A, A, A, Ctrl A, Ctrl C, Ctrl V, Ctrl V

*/

/**
 * @param {number} N
 * @return {number}
 e.g: N = 7
 since Ctrl A, Ctrl C, Ctrl V cost 3 operation: we can use j denotes how many A printed directly
 e.g: at j=1, i=4   [A, CA, CC, CV] or [A, A, A, A]=dp[i]=4 
      at j=1, i=5   [A, CA, CC, CV, CV]=3 or [AAAA]=5
      at j=2, i=5   [A, A, CA, CC, CV]=4 or [AAAA]=5
      at j=1, i=6   [A, CA, CC, CV, CV, CV]=4 or [AAAAA]=6
      at j=2, i=6   [A, A, CA, CC, CV, CV]=6 or [AAAAA]=6
      at j=3, i=6   [A, A, A, CA, CC, CV]=6 or [AAAAA]=6   
      at j=1, i=7   [A, CA, CC, CV, CV, CV, CV]=5 or [AAAAAA]=7
      at j=2, i=7   [A, A, CA, CC, CV, CV, CV]=8 or [AAAAAA]=7
      at j=3, i=7   [A, A, A, CA, CC, CV, CV]=9 or [AAAAAA]=7 
      at j=4, i=7   [A, A, A, A, CA, CC, CV]=8 or [AAAAAA]=7 
      the max = 9
      
      the fomula is we init dp[i] = i  which is without Ctrl A, Ctrl C, Ctrl V
      for i=1; i<N
        for j=1; j<=i-3;j++
            dp[i] = max(dp[i], dp[j]*(i-j-1))
      
 */
var maxA = function(N) {
    var dp = new Array(N+1);
    for(var i=0; i<dp.length; i++) {
        dp[i] = i;
    }
    for(var i=4; i<=N; i++) {
        for(var j=1; j<=i-3; j++) {
            dp[i] = Math.max(dp[i], dp[j]*(i-j-1));
        }
    }
    return dp[N];
};
