/*
Given a matrix of m x n elements (m rows, n columns), 
return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 
                1   2   3   4
                10  11  12  5
                9   8   7   6
                
                outout: [0][0] ~ [0][n-1]
                    [1][n-1] ~ [m-1][n-1]
                    [m-1][n-2] ~ [m-1][0]
                    [m-2][0] ~ [1][0]
                
                s1=0, s2= 1, e1= n-1, e2= m-1
                while loop:
                [s1][s1] - [s1][e1]
                [s2][e1] - [e2][e1]
                [e2][e1-1] - [e2][s1]
                [e2-1][s1] - [s2][s1]
                
                s1++, s2++, e1--, e2--
                loop end
 */
var spiralOrder = function(matrix) {
    if(matrix.length ===0 )  return  [];
    var s1 = 0, s2=1, m=matrix.length, n = matrix[0].length;
    var e1 = n-1, e2= m-1, total = m*n, k=0, res= [];
    
    while(k < total) {
        for(var i=s1; i<=e1; i++) {
            res[k++] = matrix[s1][i];
        }
       
        for(var i=s2; i<e2; i++) {
            res[k++] = matrix[i][e1];
        }
        
        for(var i=e1; i>=s1; i--) {
            res[k++] = matrix[e2][i];
        }
        
        for(var i=e2-1; i>=s2; i--) {
            res[k++] = matrix[i][s1];
        }
        
        s1++;
        s2++;
        e1--;
        e2--;
    }
    return res.slice(0, total);
};