/*
You are given an array of positive and negative integers. 
If a number n at an index is positive, then move forward n steps. 
Conversely, if it's negative (-n), move backward n steps. 
Assume the first element of the array is forward next to the last element, 
and the last element is backward next to the first element. 
Determine if there is a loop in this array. 
A loop starts and ends at a particular index with more than 1 element 
along the loop. The loop must be "forward" or "backward'.

Example 1: Given the array [2, -1, 1, 2, 2], there is a loop, 
from index 0 -> 2 -> 3 -> 0.

Example 2: Given the array [-1, 2], there is no loop.
Note: The given array is guaranteed to contain no element "0".
Can you do it in O(n) time complexity and O(1) space complexity?
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 
 start from each number, if nums[i] = 0 skip, since it can't go forward or backward.
 slow = fast = (nums[i] + i + n) % n, fast go 2 steps, slow go 1 step
 if slow = fast, there is a circle
 for elements has visited in each loop, we can set it to 0, no need to check them again, since they are in the same loop don't lead to circle
 */
var circularArrayLoop = function(nums) {
    if(nums.length ===0) return false;
    var n = nums.length;
    for(var i=0; i<nums.length; i++) {
        if(nums[i] ===0) continue;
        var slow = i, fast = i, forward = nums[slow] > 0, count=0;
        do {
            var temp = slow;
            slow = (nums[slow] + slow + n) % n;
            if((forward && nums[fast] < 0) || (!forward && nums[fast] > 0))  break;
            fast = (nums[fast] + fast + n) % n;
            if((forward && nums[fast] < 0) || (!forward && nums[fast] > 0))  break;
            fast = (nums[fast] + fast + n) % n;
            count ++;
            nums[slow] = 0;
            
        } while(slow !== fast);
        if(count > 1)  return true; // This is the key, if the loop has only one element, not count as loop either [-1,2]
    }
    return false;
};