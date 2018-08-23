/*
Given two arrays, write a function to compute their intersection.
Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
Note:
Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var set1 = new Set();
    var intersect = new Set();
    for(var num of nums1) {
        set1.add(num);
    }
    for(var num of nums2) {
        if(set1.has(num)) {
            intersect.add(num);
        }
    }
    return Array.from(intersect);
};