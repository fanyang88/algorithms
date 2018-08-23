/*
We have two integer sequences A and B of the same non-zero length.
We are allowed to swap elements A[i] and B[i].  Note that both elements are in the same index position in their respective sequences.
At the end of some number of swaps, A and B are both strictly increasing.  
(A sequence is strictly increasing if and only if A[0] < A[1] < A[2] < ... < A[A.length - 1].)
Given A and B, return the minimum number of swaps to make both sequences strictly increasing.  
It is guaranteed that the given input always makes it possible.
Example:
Input: A = [1,3,5,4], B = [1,2,3,7]
Output: 1
Explanation: 
Swap A[3] and B[3].  Then the sequences are:
A = [1, 3, 5, 7] and B = [1, 2, 3, 4]
which are both strictly increasing.
Note:
A, B are arrays with the same length, and that length will be in the range [1, 1000].
A[i], B[i] are integer values in the range [0, 2000].
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 
 e.g: A = [1,2,5,4]  
      B = [0,1,3,9]
 we use two dp to store the swap and non-swap status
 dh[i] means to step i, we wouldn't swap it, to this point, the min swaps is what
 ds[i] means to step i, we would swap it no matter what, to this point, the min swaps is what
 
 if(A[i] < A[i+1]  && B[i] < B[i+1]) && (A[i] < B[i+1]  && B[i] < A[i+1]) 
    we either swap or not swap is ok, so for dh[i], we need to get the i-1 min swaps dh[i] = min(dh(i-1), ds[i-1])
    if we have to swap in this step, also we need to get the i-1 min swaps plus this 1 swap,  dh[i] = min(dh(i-1), ds[i-1])+1

 if only(A[i] < A[i+1]  && B[i] < B[i+1])  we can not swap
    so dh[i] = dh[i-1]
       ds[i] = ds[i-1] + 1 for example: 1  2  we need the i-1 pair to be swapped as well, 
                                        2  3    if 2 and 3 have to swap, then 1 and 2 also need wasp
 if only(A[i] < B[i+1]  && B[i] < A[i+1])  we have to swap
    so dh[i] = ds[i-1]  for example: 4  4
                                     2  5   we need the i-1 step to be swapped, 
       ds[i] = dh[i-1] + 1
        
 */
var minSwap = function(A, B) {
    var dh = 0, ds =1;
    for(var i=1; i<A.length; i++) {
        if(A[i] > A[i-1] && B[i] > B[i-1] && B[i] > A[i-1] && A[i] > B[i-1]) {
            var temp = dh;
            dh = Math.min(dh, ds);//newDh;
            ds = temp+1;
        } else if(A[i] > A[i-1] && B[i] > B[i-1]) {  // we don't need to swap
            dh = dh;            // continue the i-1 no-swap status
            ds = ds +1;         // i-1 step need to swap, this step also need swap
        } else if(B[i] > A[i-1] && A[i] > B[i-1]) {  // we have to swap
            var temp = ds;        //i-1 step need to swap
            ds = dh +1;       // if i-1 not swap, step i need to swap
            dh = temp;
        }
    }
    return Math.min(dh, ds);
};
