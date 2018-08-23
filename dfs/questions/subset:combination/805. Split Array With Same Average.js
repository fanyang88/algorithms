/*
In a given integer array A, we must move every element of A to either list B or list C. 
(B and C initially start empty.)
Return true if and only if after such a move, 
it is possible that the average value of B is equal to the average value of C, 
and B and C are both non-empty.
Example :
Input: 
[1,2,3,4,5,6,7,8]
Output: true
Explanation: We can split the array into [1,4,5,8] and [2,3,6,7], 
and both of them have the average of 4.5.
*/

/**
 * @param {number[]} A
 * @return {boolean}
 
 We need to split A into B and C, the length of B can be [1, A.length / 2], 
 we consider them one by one:
B should have the same mean value as A, 
so sumB / lenOfB = sumA / lenOfA, 
which is equavalent to sumB = sumA * lenOfB / lenOfA. 
All elements here are integers, so sumB must be an integer, 
this gives our first criteria (sumA * lenOfB) % A.length == 0.
Then further in function check(int[] A, int leftSum, int leftNum, int startIndex), 
we recursicely check if we can find lenOfB elements in A who sum up to sumB.

corner case: [18,10,5,3], [3,5,10] === [18] but avg is not equal, 
so we need to add constrain of lenB
*/
var splitArraySameAverage = function(A) {
    var res = [];
    A.sort();
    var sum = A.reduce((total, item) => {
        return total + item;
    }, 0);
    
    for(var lenB=1; lenB<=A.length/2; lenB++) {
        // sumB is not an integer, don't check
        if(sum * lenB % A.length !== 0) continue;  
        var sumB = sum*lenB/A.length;
        // check if there's an array with sum =sumB, and length=lenB
        var flag = dfs(A, sumB, lenB, 0, 0, 0);
        if(flag)  return true;
    }
    return false;
};

var dfs = function(A, sumB, lenB, index, sum, curLen) {
    if(sum >= sumB || curLen >= lenB) {  // reach to constrains
        if(sum === sumB && curLen === lenB) {
            return true;
        }
        return false;
    }
    for(var i=index; i<A.length; i++) { 
        if(dfs(A, sumB, lenB, i+1, sum+A[i], curLen+1)) return true;
        if(A[i] === A[i+1] && i+1<A.length) i++;  // skip dup
    }
    return false;
}
