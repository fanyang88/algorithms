/*
A sorted list A contains 1, plus some number of primes.  
Then, for every p < q in the list, we consider the fraction p/q.
What is the K-th smallest fraction considered?  Return your answer as an array of ints, 
where answer[0] = p and answer[1] = q.

Examples:
Input: A = [1, 2, 3, 5], K = 3
Output: [2, 5]
Explanation:
The fractions to be considered in sorted order are:
1/5, 1/3, 2/5, 1/2, 3/5, 2/3.
The third fraction is 2/5.

Input: A = [1, 7], K = 1
Output: [1, 7]
Note:

A will have length between 2 and 2000.
Each A[i] will be between 1 and 30000.
K will be between 1 and A.length * (A.length - 1) / 2.
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 
 simiar to 378, we need to construct a matrix first: e.g: A = [1, 2, 3, 5], K = 3
          small<------------
 matrix = [[1/5, 1/3, 1/2]  ^
           [2/5, 2/3, 2/2]  | 
           [3/5, 3/3, 3/2]] |
                          small
           we need in the matrix to find the kth smallest
 */
var kthSmallestPrimeFraction = function(A, K) {
    // construct the vitual matrix
    // var matrix = [];
    // for(var i=0; i<A.length-1; i++) {
    //     matrix[i] = [];
    //     for(var j=0, k=A.length-1; j<A.length-1; j++, k--) {
    //         matrix[i][j] = A[i]/A[k];
    //     }
    // }
     //matrix[i][j] = A[i]/A[n-j]   n = A.length-1
    var low = 0, high = 1, n = A.length-1, q, p;
    while(low < high) {
        var total = 0;
        var maxF = 0;
        var mid = (low + high) / 2;
        
        // search in matrix, always start from matrix[0][n-1]
        for(var i=0, j=n-1; i<n; i++) {
            while(j>=0 && A[i]/A[n-j] > mid)   j--;  
            
            // now j point to the last position that <= m, or j can be -1
            total += j+1;
            if(j >=0) {
            	// record the largest number which would be the answer.
                var endVal =  A[i]/A[n-j];// A[i]/A[n-j] = matrix[i][j];
                if(maxF < endVal) {
                    p= i;
                    q = j;
                    maxF = endVal;
                }
            }
        }
        
        if(total < K) {  // search on right half
            low = mid;
        } else if(total > K){        // search on left half
            high = mid;
        } else {
            return [A[p], A[n-q]];
        }
    }
};