/*
Given a positive 32-bit integer n, you need to find the smallest 32-bit integer which has 
exactly the same digits existing in the integer n and is greater in value than n. 
If no such positive 32-bit integer exists, you need to return -1.

Example 1:

Input: 12
Output: 21
 

Example 2:

Input: 21
Output: -1
*/

/**
 * @param {number} n
 * @return {number}
230241  
1.traverse from right to left, find the arr[i] < arr[i+1] in above case is 2, 
2.then find the smallest digit from arr[i+1] to arr[n-1] which is 4, swap 2 with 4, 
3.then sorted arr[i+1] to arr[n-1]
if in step 1 we can't find the i, return -1
 */
var nextGreaterElement = function(n) {
    var arr = (''+n).split(''), l = arr.length, pos = -1, swapInd, minV = Infinity;
    for(var i=l-2; i>=0; i--) {
        if(arr[i] < arr[i+1]) {
            pos = i;
            break;
        }
    }
    if(pos === -1)  return -1;
    for(var i=pos+1; i<l; i++) {
        if(+arr[i] > +arr[pos] && +arr[i] < minV) {
            minV = +arr[i];
            swapInd = i;
        }
    }
    swap(arr, swapInd, pos);
    var sorted = arr.slice(pos+1, l).sort((a, b) => a-b);
    var res = +arr.slice(0, pos+1).concat(sorted).join('');
    return res > Math.pow(2, 31)+1 ? -1 : res;
};

var swap = function(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
