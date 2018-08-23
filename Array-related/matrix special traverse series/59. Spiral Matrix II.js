/*
Given a positive integer n, 
generate a square matrix filled with elements from 1 to n2 in spiral order.

Example:

Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
*/


/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    // generate a nxn matrix first
    var matrix= [];
    for(var i=0; i<n; i++) {
        matrix[i] = new Array(n);
    }
    if(n===0)  return matrix;
    var s1 = 0, s2=1, e1 = n-1, e2= n-1, total = n*n, k=1;//, res= [];
    while(k <= total) {
        for(var i=s1; i<=e1; i++) {
            if(k> total)  break;
            matrix[s1][i] = k++;
        }
        for(var i=s2; i<e2; i++) {
            if(k> total)  break;
            matrix[i][e1] = k++;
        }
        for(var i=e1; i>=s1; i--) {
            if(k> total)  break;
            matrix[e2][i] = k++;
        }
        for(var i=e2-1; i>=s2; i--) {
            if(k> total)  break;
            matrix[i][s1] = k++;
            
        }
        s1++;
        s2++;
        e1--;
        e2--;
    }
    return matrix;
};