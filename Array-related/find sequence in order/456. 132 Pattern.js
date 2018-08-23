/*
Given a sequence of n integers a1, a2, ..., an, a 132 pattern is a subsequence ai, aj, ak such that i < j < k and ai < ak < aj. Design an algorithm that takes a list of n numbers as input and checks whether there is a 132 pattern in the list.
Note: n will be less than 15,000.
Example 1:
Input: [1, 2, 3, 4]
Output: False
Explanation: There is no 132 pattern in the sequence.
Example 2:
Input: [3, 1, 4, 2]
Output: True
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
Example 3:
Input: [-1, 3, 2, 0]
Output: True
Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    // The key is to find potential s3
    // search from right to left, keep tracking of nums, if num < top, push, else the current max in st could be a potential s3
    // pop all smaller elements, and keep tracking, if there is a new num smaller than s3, return true
    var s3 = null, st = [nums[nums.length-1]];
    for(var i=nums.length-2; i>=0 ;i--) {
        if(s3 && nums[i] < s3) {
            return true;
            
        } else while(st.length > 0 && nums[i] > st[st.length-1])  {
            s3 = st[st.length-1];
            st.pop();
        }
        st.push(nums[i]);
    }
    return false;
};
