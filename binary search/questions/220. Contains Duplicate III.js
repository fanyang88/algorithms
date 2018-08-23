/*
Given an array of integers, find out whether there are two distinct indices i and j 
in the array such that the absolute difference between nums[i] and nums[j] is at most t 
and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3, t = 0
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1, t = 2
Output: true
Example 3:

Input: nums = [1,5,9,1,5,9], k = 2, t = 3
Output: false
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 floor(c)  
 floor is the max value <= c
 ceil(c) is the min value >=c
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    // keep a size k window many make sure it is sorted, we can use template from sliding window median
    var window=[];
    for(var i=0; i<nums.length; i++) {
        var newNum = nums[i];
        var insertP = binarySearch(window, newNum);
        
        // get floor and ceil from insertP, insertP point to value >=newNum, ceil = window[insertP], floor = window[insertP-1]
        var ceil = window[insertP] < newNum ? undefined : window[insertP];
        var floor = window[insertP] < newNum ? window[insertP] : window[insertP-1];
      
        if(floor!==undefined && floor >= newNum - t)  return true;
        if(ceil!==undefined && ceil <= newNum + t)  return true;
        
        // insert new element
        if(window[insertP] < newNum) { // newNum is larger than the end element
            window.push(newNum);
        } else {
            window.splice(insertP, 0, newNum);
        }
      
        if(i>=k) {
             // remove old one not in the new window
            var deleteP = binarySearch(window, nums[i-k]);
            window.splice(deleteP, 1);
        }
    }
    return false;
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
