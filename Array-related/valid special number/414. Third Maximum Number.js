/*
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
Example 1:
Input: [3, 2, 1]
Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]
Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]
Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var max1, max2, max3;
    for(var num of nums) {
        if(num === max1 || num === max2 || num === max3) continue;
        if(!max1 || max1 < num) {
            max3= max2;
            max2 = max1;
            max1 = num;
        } else if(!max2 || max2 < num) {
            max3 =max2;
            max2 = num;
        } else if(!max3 || max3 < num) {
            max3 = num;
        }
    }
    return max3!== undefined ? max3 : max1;
};
