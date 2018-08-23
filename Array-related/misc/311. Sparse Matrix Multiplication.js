/*

Given two sparse matrices A and B, return the result of AB.

You may assume that A's column number is equal to B's row number.

Example:

Input:

A = [
  [ 1, 0, 0],
  [-1, 0, 3]
]

B = [
  [ 7, 0, 0 ],
  [ 0, 0, 0 ],
  [ 0, 0, 1 ]
]

Output:

     |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
                  | 0 0 1 |

If A is an n × m matrix and B is an m × p matrix,
A= a11  a12 ... a1m   B= b11  b12 ....b1p
   a21  a22 ... a2m      b21  b22 ....b2p
   ...                      ...
   an1  an2 ... anm      bm1  bm2 ....bmp

   Cij = ai1b1j + ... +aimbmj

*/

var multiply = function(A, B) {
    // if A[i][j]=0  continue;
    //C[i][k] += A[i][j] * B[j][k]  k=0~n2
    var m1 = A.length, n1 =A[0].length, m2 = B.length, n2 =B[0].length;
    var C = new Array(m1);
    for(var i=0; i<m1; i++) C[i] = new Array(n2).fill(0);
    
    for(var i=0; i<m1; i++) {
        for(var j=0; j<n1; j++) {
            if(A[i][j] === 0)  continue;
            for(var k=0; k<n2; k++) {
                if(B[j][k]!=0)  C[i][k] += A[i][j] * B[j][k];
            }
        }
    }
    return C;
};
