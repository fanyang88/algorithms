/*
Given a sorted array consisting of only integers where every element appears twice 
except for one element which appears once. Find this single element that appears only once.
Example 1:
Input: [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:
Input: [3,3,7,7,10,11,11]
Output: 10
Note: Your solution should run in O(log n) time and O(1) space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 
 from observation: if the smaller index of the pair is a odd number, 
                    means there are odd number in front of it
                    should search on left part, 
                    [1,1,2,3,3,4,4,8,8]  nums[mid]=3 nextInd=3, single element is on left.
                   if the smaller index of the pair is a even number, 
                    means there are odd number adfter it
                    should search on right part  
                    e.g:[3,3,7,7,10,11,11]  nums[mid]=7, nextInd=2 should search on right.

[0, 1,2 ....]  if ind is odd number, search on left
[0, 1, ....]  if ind is even number, there are even number of pairs on left, so search right
 */
var singleNonDuplicate = function(nums) {
    var low = 0;
    var high = nums.length-1;
    
    while(low < high) {
        var mid = ~~((low + high) / 2);
        var leftNum = nums[mid-1];
        var rightNum = nums[mid+1];
        
        if(nums[mid] !== leftNum && nums[mid] !== rightNum) {
            return nums[mid];
        }
        var nextInd= nums[mid] === leftNum ? mid-1 : mid+1;
        
        var minV = Math.min(mid, nextInd);
        var maxV = Math.max(mid, nextInd);
        
        if(minV === 0 || minV % 2 === 0) {  // search on right
            low = maxV + 1;
        } else {  // search on left
            high = minV - 1;
        }
    }
    return nums[high];
};

