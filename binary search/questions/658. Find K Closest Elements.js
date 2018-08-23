/*
Given a sorted array, two integers k and x, find the k closest elements to x in the array. 
The result should also be sorted in ascending order. 
If there is a tie, the smaller elements are always preferred.

Example 1:
Input: [1,2,3,4,5], k=4, x=3
Output: [1,2,3,4]
Example 2:
Input: [1,2,3,4,5], k=4, x=-1
Output: [1,2,3,4]
Note:
The value k is positive and will always be smaller than the length of the sorted array.
Length of the given array is positive and will not exceed 104
Absolute value of elements in the array and x will not exceed 104
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    // use binary search to find the index of x in the arr first.
    var indX = binarySearch(arr, x);
   
    var right = indX === -1 ? indX +1 : indX;  // indX point to x or the value most close to x
    var left = indX === -1 ? -1 : indX-1;
    while(k >0) {
        if(left === -1 || Math.abs(arr[left] - x) > Math.abs(arr[right] -x)) right++;
        else left--;
        k--;
    }
    left ++;
    return arr.slice(left, right);
};

var binarySearch = function(arr, x) {
    var s = 0, e = arr.length-1;
    while(s < e) {
        var mid =  ~~((s + e) / 2);
        if(arr[mid] < x) {  // search on right
            s = mid +1;
        } else {
            e = mid;
        }
    }
    return e;
};