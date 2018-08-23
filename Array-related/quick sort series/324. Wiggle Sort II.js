/*
Given an unsorted array nums, 
reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

Example 1:

Input: nums = [1, 5, 1, 1, 6, 4]
Output: One possible answer is [1, 4, 1, 5, 1, 6].
Example 2:

Input: nums = [1, 3, 2, 2, 3, 1]
Output: One possible answer is [2, 3, 1, 3, 1, 2].

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 
 3 steps:
 1. copy the original and find the median using quick sort in copyed array
 2. after step 1, all numbers smaller than median on the left, numbers no less than median on the right
    then we need to use same algorithm for sort color to make sure number < median on the left, number - median in the middle
    and number that > median on the right
 3. we put left to middle numbers from copy array to nums from right to left, only put in even indexes
    we put the middle to right numbers from copy array to nums from right to left, only put in odd indexes
 
 nums:
        l2          l1       median
 median     s2            s1
      
 
 13   6   5   5   4   2   median=5
 i
 j                    k
  
 nums[j]>median swap 13 with 2
 2   6   5   5   4   13
 i
 j               k
 nums[j] < median   swap(copy, i++, j++);
 2   6   5   5   4   13
     i
     j           k
 nums[j] > median   swap(copy, j, k--);
 2   4   5   5   6   13
     i
     j       k   
 nums[j] ===5 j++
 nums[j]=5 j++  j=k, stop
 
 put the first half s1<s2<...<median  reversely into nums[even]
 i=m-1, j=0, nums[j] = copy[i] j+=2 , i--
 2   4   5   5   6   13
 j                    i
                 i
 nums[0] = 5   nums[2] = 4   nums[4] = 2
 i=n-1, j=1
 put the second half median <l1<l2< ...  reversely into nums[odd]
 nums[1]= 13  nums[3]=6    nums[5]=5
 
 nums:
 coped: s1 s2 median median l1 l2
 
       l2          l1       median
median     s2            s1
 5 < 13 >  4 <  6  > 2 < 5
 */


var wiggleSort = function(nums) {
    var n = nums.length, copy = nums.slice(0), mid = ~~((n+1)/2);
    var median = findKthSmallest(copy, mid); 
  
    // using sort color to arrange array
    var left = 0, right = n-1;
    for(var i=0; i<=right; i++) {
        if(copy[i] < median) {
            swap(copy, i, left);
            left ++;
        } else if(copy[i] > median) {
            swap(copy, i, right);
            right --;
            i--;
        }
    }
    // fill the numbers from middle to the start into the nums[even]
    for(var i=mid-1, j=0; i>=0; i--, j+=2)  nums[j] = copy[i];
    // fill the numbers from end to the middle into the nums[odd] 
    for(var i=n-1, j=1; i>mid-1; i--, j+=2) nums[j] = copy[i];
    return;
};

var findKthSmallest = function(nums, k) {
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
        while(left <= end && nums[left] <= pivot)  left++;
        while(right > start && nums[right] >= pivot)  right--;
        if(right <=left) break;
        else {
            swap(nums, left, right);
        }
    }
    // put pivot to be right position, since right point to the last element larger than pivot
    swap(nums, start, right);
    return right;
};

var swap = function(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
