/*
Given a sorted positive integer array nums and an integer n, 
add/patch elements to the array such that any number in range [1, n] 
inclusive can be formed by the sum of some elements in the array. 
Return the minimum number of patches required.

Example 1:

Input: nums = [1,3], n = 6
Output: 1 
Explanation:
Combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
So we only need 1 patch.
Example 2:

Input: nums = [1,5,10], n = 20
Output: 2
Explanation: The two patches can be [2, 4].
Example 3:

Input: nums = [1,2,2], n = 5
Output: 0

*/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 e.g:  [1,2,3,9]
 presum=0 i=0
 i=0 since num[0]=1 = presum + 1 it is expected  presum=1 covered (1, 1)
 i=1 since num[1]=2 = presum+1=2 it is expected presum=3 covered (1, 3)
 i=2 since num[2]=3 < presum+1=4 under covered range presum=6 cover (1, 6)
 i=3 since num[3]=9 > presum+1=7 missing number here, the missing one is 7, so we add the 7 in the set and presum=13 cover(1,13)
 

e.g:  [1,2,9]
 presum=0 i=0
 i=0 since num[0]=1 = presum + 1 it is expected  presum=1 covered (1, 1)
 i=1 since num[1]=2 = presum+1=2 it is expected presum=3 covered (1, 3)
 i=3 since num[2]=9 > presum+1=4 
        missing number here, the missing one is 4, so we add the 4 in the set and presum=7 cover(1,7) 9 is still not covered
        we add 8 here, presum = 15 covered 9
        

 */

var minPatches = function(nums, n) {
    var ind = 0, added = 0, sum=0;
    while(sum<n) {
        if(ind < nums.length && nums[ind] <= sum +1) {  // under the covered range
            sum += nums[ind];
            ind ++;
        } else {
            var patch = sum+1;
            sum += patch;
            added ++;
        }
    }
    return added;
};
