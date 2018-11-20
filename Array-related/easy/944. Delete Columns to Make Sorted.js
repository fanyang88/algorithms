/*
We are given an array A of N lowercase letter strings, all of the same length.
Now, we may choose any set of deletion indices, and for each string, we delete all the characters in those indices.
For example, if we have a string "abcdef" and deletion indices {0, 2, 3}, then the final string after deletion is "bef".
Suppose we chose a set of deletion indices D such that after deletions, 
each remaining column in A is in non-decreasing sorted order.
Formally, the c-th column is [A[0][c], A[1][c], ..., A[A.length-1][c]]
Return the minimum possible value of D.length.

Example 1:
Input: ["cba","daf","ghi"]
Output: 1
Example 2:

Input: ["a","b"]
Output: 0
Example 3:

Input: ["zyx","wvu","tsr"]
Output: 3
*/

/**
 * @param {string[]} A
 * @return {number}
 This problem is esstentially asking how many columns are not in non-decreasing order.
 The moment you find a column that is not in non-decreasing order, stop checking that column and move on to the rest of the array.
 */
var minDeletionSize = function(A) {
    var m = A.length, n=A[0].length, ans=0;
    for(var j=0; j<n; j++) {
        for(var i=1; i<m; i++) {
            if(A[i-1][j] > A[i][j]) {
                ans++;
                break;
            }
        }
    }
    return ans;
};
