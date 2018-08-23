/*
Given an array nums, we call (i, j) an important reverse pair if i < j and nums[i] > 2*nums[j].
You need to return the number of important reverse pairs in the given array.
Example1:
Input: [1,3,2,3,1]
Output: 2
Example2:
Input: [2,4,3,5,1]
Output: 3
*/

/**
 * @param {number[]} nums
 * @return {number}

we need to use divide and conquer  nums: [ ..i...j..]
say we have an array nums, we get the total number of important pairs that i < j  and nums[i] > nums[j], we can divide the array to two parts: [..... | ......]
                 i       j
              left        right
the total number = total pairs from left array + total pairs from right array + splited pairs (one on left, the other on right)
to get the split pair, say we found nums[i] > nums[j], since the left array and right array are sorted, nums[i] to nums[mid] are all satisfy the condition, so we can add count to mid-i+1, then move j for next compare, if nums[i] < nums[j], we just need to move i to find nums[i] > nums[j] this process is O(N)

after that we merge left array with right array. 
*/

var helper; 
var reversePairs = function(nums) {
    if(!nums || nums.length === 0)  return 0;
    helper = new Array(nums.length);
    return mergeSort(nums, 0, nums.length-1);
};

var mergeSort = function(nums, s, e){
    if(s>=e) return 0; 
    var mid = ~~(s + (e-s)/2); 
    var sum = mergeSort(nums, s, mid) + mergeSort(nums, mid+1, e); 
    // caculate split pairs
    var i=s;
    var j= mid+1;
    while(i<=mid) {
        if(j<=e && nums[i] > nums[j] * 2) {
            sum+= mid-i+1;  // nums from i to mid are satify this 
            j++;
        } else {
            i++;
        }
    }
    myMerge(nums, s, mid, e);
    return sum; 
};
    
var myMerge = function(nums, s, mid, e){
    for(var i = s; i<=e; i++) {
        helper[i] = nums[i];
    }
            
    var p1 = s;             //pointer for left part
    var p2 = mid+1;         //pointer for rigth part
    var i = s;              //pointer for sorted array
    
    while(p1<=mid && p2<=e){
        if(helper[p1] >= helper[p2]) {
            nums[i++] = helper[p2++];
        } else {
            nums[i++] = helper[p1++];
        }
    }
    while(p1 <= mid) {
        nums[i++] = helper[p1++];
    }
    while(p2 <= e) {
        nums[i++] = helper[p2++];
    }
};
