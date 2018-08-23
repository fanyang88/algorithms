/*
Given two arrays, write a function to compute their intersection.
Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
Note:
Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function(nums1, nums2) {
    var map = {}, res= [];
    for(var num of nums1) {
        map[num] = map[num] ? map[num]+1 :1;
    }
    for(var num of nums2) {
        if(map[num] > 0) {
            res.push(num);
            map[num] = map[num]-1;
        }
    }
    return res;
};