/*
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

Example:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output:  [1,2,4,7,5,3,6,8,9]
Explanation:

Note:
The total number of elements of the given matrix will not exceed 10,000.
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 
 Walk patterns:

If out of bottom border (row >= m) then row = m - 1; col += 2; change walk direction.
if out of right border (col >= n) then col = n - 1; row += 2; change walk direction.
if out of top border (row < 0) then row = 0; change walk direction.
if out of left border (col < 0) then col = 0; change walk direction.
Otherwise, just go along with the current direction.

for example:
when at (0, 0) go up => (-1, 1) since row=-1<0  row = 0 change dir
when at (m-2, 0) go down => (m-1, -1) since col=-1<0  col = 0 change dir
when at (0, n-1) go up=> (-1, n) since col>=n, col=n-1, row+=2=1 change dir
when at (m-1, n-2) go down=> (m, n-3)  since row>=m, row=m-1, col+=2=n-1 change dir

check order: 
          up
       [  ....  ]
 left  [  ...   ]  right
       [ ...    ]
         bottom
        bottom -> right -> up -> left
 */
var findDiagonalOrder = function(matrix) {
    if(matrix.length ===0)  return matrix;
    var m = matrix.length, n = matrix[0].length, res = new Array(m*n).fill(0);
    var dir = [[-1, 1], [1, -1]], row=0, col=0, index=0, d=0;
    while(index < m*n) {
        res[index++] = matrix[row][col];
        row += dir[d][0];
        col += dir[d][1];
        // the order matters, e.g:[1,2][3,4] when come to [1,0] go down=>[2, -1] we should go row>=m branch first
        if(row >=m) {
            row = m-1;
            col += 2;
            d = 1-d;
        } else if(col >=n) {
            col = n-1;
            row += 2;
            d = 1-d;
        } else if(row < 0) {
            row = 0;
            d = 1-d;
        } else if(col < 0) {
            col = 0;
            d = 1-d;
        } 
    }
    return res;
};
