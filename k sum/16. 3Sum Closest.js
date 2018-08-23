/* Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. 
Return the sum of the three integers. You may assume that each input would have exactly one solution.
For example, given array S = {-1 2 1 -4}, and target = 1.
  The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
  */
  
  /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 
var threeSumClosest = function(nums, target) {
    var res, diff = Infinity, n=nums.length;
    nums.sort((a, b) => a-b);
    for(var i=0; i<n-2; i++) {
        var a = nums[i];
        var left = i+1, right = n-1;
        while(left < right) {
            var b = nums[left], c = nums[right];
            if(diff > Math.abs(target - a - b - c)) {
                diff = Math.abs(target - a - b - c);
                res = a + b+c;
            }
            if(a + b+ c === target)  break;
            if(a + b + c < target) left++;
            else right --;
        }
    }
    return res;
};
