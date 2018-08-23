/*
Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.
Example 1:
Input: [1, 2, 2, 3, 1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:
Input: [1,2,2,3,1,4,2]
Output: 6
*/

var findShortestSubArray = function(nums) {
    let map={}, mins_len = Number.POSITIVE_INFINITY, len;
    nums.forEach((item) => {
        map[item] = map[item]+1 || 1;
    }, this);
    
    let degree = Math.max(...Object.values(map));
    let newKeys = Object.keys(map).filter((key) => {
       if(map[key] === degree) {
           return key;
       }
   });
    newKeys.forEach((item) => {
        len = nums.lastIndexOf(+item) - nums.indexOf(+item) +1;
        if(len < mins_len) {
            mins_len = len;
        }
    });
    return mins_len;
   
};
