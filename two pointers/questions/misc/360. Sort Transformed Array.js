/*
Given a sorted array of integers nums and integer values a, b and c. 
Apply a quadratic function of the form f(x) = ax2 + bx + c to each element x 
in the array.
The returned array must be in sorted order.
Expected time complexity: O(n)

Example:
nums = [-4, -2, 2, 4], a = 1, b = 3, c = 5,
Result: [3, 9, 15, 33]
nums = [-4, -2, 2, 4], a = -1, b = 3, c = 5
Result: [-23, -5, 1, 7]
*/

/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 
 1.a>=0, two ends in original array are bigger than center. So we construct the result from end
 2.a<0, center is bigger than two ends, So we construct the result from begin

 */
var sortTransformedArray = function(nums, a, b, c) {
    var res = [], i=0, j=nums.length-1;
    var k = a> 0 ? nums.length-1 : 0;
    while(i <= j) {
        // if a > 0 we pick from left and right to construct from end to start
        // if a < 0 we pick from left and right to construct from start to end
        var pi = get(nums[i], a, b, c);
        var pj = get(nums[j], a, b, c);
        if(a>0) {
             if(pi > pj) {
                 res[k--] = pi;
                 i++;
             } else {
                 res[k--] = pj;
                 j--;
             }
        } else {
            if(pj < pi) {
                 res[k++] = pj;
                 j--;
             } else {
                 res[k++] = pi;
                 i++;
             }
        }
    }
    return res;
};

var get = function(num, a, b, c) {
    return a*num*num + b*num + c;
};