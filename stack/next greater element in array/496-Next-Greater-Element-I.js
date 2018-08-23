/*
You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. 
Find all the next greater numbers for nums1's elements in the corresponding places of nums2.
The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. If it does not exist, output -1 for this number.
Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
Output: [-1,3,-1]
Explanation:
    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
    For number 1 in the first array, the next greater number for it in the second array is 3.
    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4].
Output: [3,-1]
Explanation:
    For number 2 in the first array, the next greater number for it in the second array is 3.
    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
*/

/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Use Stack, e.g: [5, 1, -2, 4,2]
 * since stack is E, push 5
 * since stack peek 5>1 push 1
 * since stack peek 1>-2 push -2
 * since stack peek -2<4, pop -2, map [-2][4], since 1<4, pop 1, map [1][4], push 4
 * since stack peek 4>2 push 2
 * 
 * for the rest in the stack, map each with -1 (no greater element on the right)
 */
var nextGreaterElement = function(findNums, nums) {
    var st = [], map = {}, res=[];
    for(var i=0; i<nums.length; i++) {
        while(st.length > 0 && st[st.length-1] < nums[i]) {
            var val = st.pop();
            map[val] = nums[i];
        }
        st.push(nums[i]);
    }
    // for elements still in stack, the next greater one is -1
    for(var item of st) {
        map[item] = -1;
    }
    for(var num of findNums) {
        res.push(map[num]);
    }
    return res;
};

