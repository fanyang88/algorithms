/*
Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].

Return any permutation of A that maximizes its advantage with respect to B.

 

Example 1:

Input: A = [2,7,11,15], B = [1,10,4,11]
Output: [2,11,7,15]
Example 2:

Input: A = [12,24,8,32], B = [13,25,32,11]
Output: [24,32,8,12]
 
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 sort A first, sort B and store in an array 
 e.g: A = [2,7,11,15], B = [1,10,4,11]
 arr = [(1, 0), (4, 2), (10, 1), (11, 3)]
 pop last (11, 3)  since high point to 15 > 11, high --  res[3] = 15
 pop (10, 1)  since high point to 11 > 10 high--  res[1] = 11
 pop (4, 2)  since high point to 7 > 4 high --  res[2] = 7
 pop (1, 0)  since high point to 2 > 1 high --  res[0] = 2
 
 A = [8,12,24,32], B = [13,25,32,11]
 arr = [(11, 3), (13, 0), (25, 1), (32, 2)]
 pop (32, 2) since high point to 32 = 32, there is no value larger than 32, we put the smallest here
             low ++  res[2] = 8
 pop (25, 1) since high point to 32 > 25 high--  res[1] = 32
 pop (13, 0) since high point to 24 > 13 high --  res[0] = 24
 pop (11, 3)  since high point to 12 > 11 high --  res[3] = 12
 

 */
var advantageCount = function(A, B) {
    var arr = [], high = A.length-1, low = 0, res =[];
    for(var i=0; i<B.length; i++) {
        arr[i] = [B[i], i];
    }
    A.sort((a, b) => a - b);
    arr.sort((a, b) => a[0] - b[0]);
    
    while(arr.length > 0) {
        var cur = arr.pop();
        if(A[high] > cur[0])  {
            res[cur[1]] = A[high];
            high --;
        } else {
            res[cur[1]] = A[low];
            low ++;
        }
    }
    return res;
};