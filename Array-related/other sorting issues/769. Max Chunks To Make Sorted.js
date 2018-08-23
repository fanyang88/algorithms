/*
Given an array arr that is a permutation of [0, 1, ..., arr.length - 1], 
we split the array into some number of "chunks" (partitions), 
and individually sort each chunk.  After concatenating them, 
the result equals the sorted array.

What is the most number of chunks we could have made?

Example 1:

Input: arr = [4,3,2,1,0]
Output: 1
Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], 
which isn't sorted.
Example 2:

Input: arr = [1,0,2,3,4]
Output: 4
Explanation:
We can split into two chunks, such as [1, 0], [2, 3, 4].
However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.

*/

/**
 * @param {number[]} arr
 * @return {number}
 
 we can use presum to get the answer
 [1,0,2,3,4] 
 presum : 1 1 3 6 10
[0,1,2,3,4]
presum :  0 1 3 6 10
we compare above two arrays, we can find there are two items are same, so the answer is 4
 */
var maxChunksToSorted = function(arr) {
    var ideal = [], sum=0, count=0;
    for(var i=0; i<arr.length; i++) {
        sum+= i;
        ideal[i] = sum;
    }
    sum=0;
    for(var i=0; i<arr.length; i++) {
        sum+= arr[i];
        if(sum === ideal[i]) count++;
    }
    return count;
};
