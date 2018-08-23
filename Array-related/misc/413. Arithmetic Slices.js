/*
A sequence of number is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.
For example, these are arithmetic sequence:
1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
The following sequence is not arithmetic.
1, 1, 2, 5, 7
A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.
A slice (P, Q) of array A is called arithmetic if the sequence:
A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.
The function should return the number of arithmetic slices in the array A.
Example:
A = [1, 2, 3, 4]
return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.
*/

/**
 * @param {number[]} A
 * @return {number}
 * e.g: 3, 5, 7,9, 10, 11, 12, point to 7
 * 3,5,7 is, count++ =1
 * 5,7,9 is, count++ =2
 * 7,9,10 not, sparecount = count-1 =1 total += count+ sparecount, count =0
 * 9,10,11 is, count++ =1
 * 10,11,12 is, count++ =2
 * sparecount = count-1 =1 total += count+ sparecount, count =0
 * 
 */
var numberOfArithmeticSlices = function(A) {
    let i, total=0, count=0, sparecount=0;
    for(i=2; i<A.length; i++) {
        if((A[i]-A[i-1]) == (A[i-1]-A[i-2])) {
            count++;
        }
        else {
            total += count;
            sparecount = count-1;
            while(sparecount > 0) {
                total += sparecount;
                sparecount --;
            }
            count=0;
        }
    }
    total += count;
    sparecount = count-1;
    while(sparecount > 0) {
        total += sparecount;
        sparecount --;
    }
    return total;
};
