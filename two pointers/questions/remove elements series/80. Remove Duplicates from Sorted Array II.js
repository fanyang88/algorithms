/*
Given a sorted array nums, remove the duplicates in-place 
such that duplicates appeared at most twice and return the new length.
Do not allocate extra space for another array, you must do this by modifying 
the input array in-place with O(1) extra memory.

Example 1:
Given nums = [1,1,1,2,2,3],
Your function should return length = 5, with the first five elements of 
nums being 1, 1, 2, 2 and 3 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:
Given nums = [0,0,1,1,1,1,2,3,3],
Your function should return length = 7, with the first seven elements of 
nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.

It doesn't matter what values are set beyond the returned length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 e.g:  [1,1,1,2,2,3]
 i=2 count=2  since num[2] = num[count-2]  count remain 2
 i=3 count=2  since num[3]!= num[count-2]  nums[2] = nums[3]=2 count=3
 i=4 count=3  since num[4]!= num[count-2]  nums[3] = nums[4]=2 count=4
 i=5 count=4  since num[5]!= num[count-2]  nums[4] = nums[5]=3 count=5
 we can make a template out of it: 
 Given a sorted array nums, remove the duplicates in-place 
such that duplicates appeared at most K times and return the new length.
	var count = K;
    for(var i=K; i<nums.length; i++) {
        if(nums[i] !== nums[count-K]) { 
            nums[count] = nums[i];  // count always point to the place to be inserted.
            count++;  
        }
    }
    return count;
 */
var removeDuplicates = function(nums) {
    var count  = 2;
    for(var i=2; i<nums.length; i++) {
        if(nums[i] !== nums[count-2]) { 
        	// count always point to the place to be inserted.
            nums[count] = nums[i];  
            count++;  
        }
    }
    return count;
};