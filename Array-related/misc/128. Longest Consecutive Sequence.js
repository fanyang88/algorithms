/*
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.
Your algorithm should run in O(n) complexity.
*/

/**
 * @param {number[]} nums
 * @return {number}
 for each element, we check it's bigger one, bigger one ... till not exist in set
 we check it's smaller one, smaller one... till not exist in set
 the length = bigger - smaller -1, update maxLen accordingly
 to save time, we can remove the element once it get visited.
 */
var longestConsecutive = function(nums) {
    var set = new Set(), maxLen = 0;
    for(var num of nums) {
        set.add(num);
    } 
    
    for(var num of nums) {
        if(!set.has(num))  continue; // already processed
        set.delete(num);
        var small = num -1;
        var big = num+1;
        while(set.has(small)) {
            set.delete(small);
            small--;
        }
        while(set.has(big)) {
            set.delete(big);
            big++;
        }
        maxLen = Math.max(maxLen, big-small-1);
    }
    return maxLen;
};
