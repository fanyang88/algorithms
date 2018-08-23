/*
Given a n x n matrix where each of the rows and columns are sorted in ascending order,
 find the kth smallest element in the matrix.
Note that it is the kth smallest element in the sorted order, 
not the kth distinct element.
Example:
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,
return 13.
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 matrix = [             k = 4,
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]]
   using above example: we can use binary search to find the kth in a matrix
   l =matrix[0][0]= 1  r =matrix[n-1][n-1]= 15   m =(1+15)/2=8 
   to find total number in the matrix that <= 8, we start from matrix[0][n-1] = 9, 
        i=0, j=2, since 9>8 j--, since 5<=8, j=1, total = j+1=2, i++
        i=1, j=1, since 11>8, j--, since j=0, i++
        i=2, j=0, since 12>8 end loop
     since total=2 < k=4, l = m+1, we search on right half, m =(9+15)/2=12 
   to find total number in the matrix that <= 12, we start from matrix[0][n-1] = 9, 
        i=0, j=2, since 9<12  total = j+1=3, i++
        i=1, j=2, since 13>8, j--, since 11<12, j=1, total+(j+1) = 5
        i=2, j=1, since 13>12, j--, since 12<=12, j=0, total+(j+1) = 6
    since total=6 > k=4, r = m, we search on left half, m =(9+12)/2=10
   to find total number in the matrix that <= 10, we start from matrix[0][n-1] = 9, 
        i=0, j=2, since 9<10  total = j+1=3, i++
        i=1, j=2, since 13>10, j--, since 11>10 j--, j=0, since 10=10, total + j+1=4
        i=2, j=0, since 12>10, j--=-1, total +(j+1) = 4
   since total === k =4, r= m = 10, we search on left half, m =(9+10)/2=9;
        total number is 3 < k=4, l = m+1=11 > 10=r, search end, return r=10 is the answer.
        
 */
var kthSmallest = function(matrix, k) {
    var res, 

    n= matrix.length, low = matrix[0][0], high =matrix[n-1][n-1];
    while(low < high) {
        var total = 0;
        var mid = ~~((low + high)/2);
        
        // search in matrix, always start from matrix[0][n-1]
        for(var i=0, j=n-1; i<n; i++) {
            while(j>=0 && matrix[i][j] > mid) j--; 
            // now j point to the last position that <= m, or j can be -1
            total += j+1;
        }
        if(total < k) {  // search on right half
            low = mid+1;
        } else {        // search on left half
            high = mid;
        }
    }
    return high;
};
