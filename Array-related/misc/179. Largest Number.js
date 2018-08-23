/*
Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer.
*/

/**
 * @param {number[]} nums
 * @return {string}
 sort the number first by string concation, this is the key
 sort(a,b) =>{return '' + a + b > '' + b + a ? -1 : 1;}
 3,30,34,5,9
 compare 3 with 30, since 330 > 303  res = 330
 compare 330 with 34, since 34330 > 33034  res = 34330
 compare 34330 with 5, since 534330 > 343305 res = 534330
 compaer 534330  with 9 res = 9534330
 */
var largestNumber = function(nums) {
    nums.sort(cmp);
    var res = nums.join('');
    return parseInt(res) === 0 ? '0' : res;
};

var cmp = function(a, b) {
    return '' + a + b > '' + b + a ? -1 : 1;
}
