/*
Your are given an array of positive integers nums.

Count and print the number of (contiguous) subarrays where the product 
of all the elements in the subarray is less than k.

Example 1:
Input: nums = [10, 5, 2, 6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are: 
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
Note:

0 < nums.length <= 50000.
0 < nums[i] < 1000.
0 <= k < 10^6.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 
 The idea is always keep an max-product-window less than K;
Every time shift window by adding a new number on the right(j), if the product is greater than k, then try to reduce numbers on the left(i), until the subarray product fit less than k again, (subarray could be empty);
Each step introduces x new subarrays, where x is the size of the current window (j + 1 - i);
example:
for window (5, 2), when 6 is introduced, it add 3 new subarray: (5, (2, (6)))

 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;
    var product = 1, count = 0;
    for(var i=0, j=0; j<nums.length; j++) {
        product *= nums[j];
        while(product >= k) {
            product = product / nums[i];
            i++;
        }
        count += j - i +1;
    }
    return count;
};