/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var temp1 = nums1.splice(0, m);
    var temp2 = nums2.splice(0, n);
    temp1 = temp2.concat(temp1);
    temp1.sort(function(a, b) {
         return a - b;
    });
    for(i=0; i< temp1.length; i++) {
        nums1[i] = temp1[i];
    }
    return;
};
