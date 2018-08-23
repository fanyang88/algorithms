/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
For example,
Given [3,2,1,5,6,4] and k = 2, return 5.
Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 quick select, put all elements larger than pivot to left and smaller one to the right
 check if there are k-1 elements in left side, if there is, means we found the target, otherwise, use binary search to do patition again.
 */
var findKthLargest = function(nums, k) {
    return select(0, nums.length-1, nums, k);
};

var select = function(start, end, nums, k) {
    var split =  partition(start, end, nums);
    var len = split - start + 1;
    if(len === k) {
        return nums[split];
    } else if(len > k) {
        return select(start, split - 1, nums, k);
    } else {
        return select(split + 1, end, nums, k - len);
    }
};

var partition = function(start, end, nums) {
    var temp, pivot = nums[start], left = start+1, right = end;
    while(true) {
        while(left <= end && nums[left] >= pivot)  left++;
        while(right > start && nums[right] <= pivot)  right--;
        if(right <=left) break;
        else {
            temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        }
    }
    // put pivot to be right position, since right point to the last element larger than pivot
    temp = nums[start];
    nums[start] = nums[right];
    nums[right] = temp;
    return right;
};
