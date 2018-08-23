/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
*/

var findKthLargest = function(nums, k) {
    var bucket = [];
    var minV = Math.min(...nums);
    var maxV = Math.max(...nums);
    // bucket is from 0 to maxV - minV
    for(var i=0; i<nums.length; i++) {
        var id = nums[i] - minV;
        if(!bucket[id])  bucket[id] = [];
        bucket[id].push(nums[i]);
    }
    
    i=maxV - minV;
    while(k > 0) {
        if(bucket[i]) {
            k = k- bucket[i].length;
        }
        i--;
    }
    
    return bucket[i+1][0];
};
