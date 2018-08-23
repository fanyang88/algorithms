/*
Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. 
You can only see the k numbers in the window. Each time the sliding window moves right by one position.
For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Therefore, return the max sliding window as [3,3,5,5,6,7].
i=0 Q = [0]
i=1 since 3>1 Q=[1]
i=2 since -1<3 Q = [1, 2]  i=k-1  res.push(1)
i=3 since -3<-1 Q = [1,2,3]  res.push(1) since i-queue[0]=2=k-1 unshift(queue) Q=[2,3] 
i=4 since -1<5 -3<5 Q=[4] res.push(4) 
...
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 we push index instead of element itself.
 */
var maxSlidingWindow = function(nums, k) {
    var queue = [], res= [];
    for(var i=0; i<nums.length; i++) {
    	// Queue always store the max at first pos, the rest are smaller than max
        while(queue.length !== 0 && nums[queue[queue.length-1]] < nums[i]) queue.pop();
        //we push index instead of element itself.
        queue.push(i);
        // the first one is always is the max
        if(i >= k-1) res.push(nums[queue[0]]); 
        // if the max is not in the next window anymore, remove it.
        if(i - queue[0] === k-1)  queue.shift(); 
    }
    return res;
};
