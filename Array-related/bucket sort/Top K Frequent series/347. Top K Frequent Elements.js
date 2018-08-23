/*
Given a non-empty array of integers, return the k most frequent elements.
For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].
Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = {}, res= [], count = 0;
    for(let num of nums) {
        map[num] = map[num]? map[num]+1 : 1;
    }
    // corner case [1,1,1] so bucket length should be nums.length+1
    var bucket= new Array(nums.length+1); 
    for(let key in map) {
        if(!bucket[map[key]]) bucket[map[key]] = [];
        bucket[map[key]].push(key);
    }
    
    for(var i=nums.length; i>=0 && count <k; i--) {
        if(bucket[i]) {
            count += bucket[i].length;
            for(var item of bucket[i]) {
                res.push(+item);
            }
        }
    }
    return res;
};

