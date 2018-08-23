/*
Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive.
Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j (i ≤ j), inclusive.
Note:
A naive algorithm of O(n2) is trivial. You MUST do better than that.
Example:
Given nums = [-2, 5, -1], lower = -2, upper = 2,
Return 3.
The three ranges are : [0, 0], [2, 2], [0, 2] and their respective sums are: -2, -1, 2.
*/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
   similar to reverse pair, in the presum array, we need to find out the sum[j] - sum[i] in the range
   for an array, split into two parts:  [..i.. | ..j..], left and right are sorted, e.g: [1 2 3 | 1 2 3 ]  range [-1,1]
                                        left    right
   before we merge, for each left[i], we need find the range in right array that the left[i] with elements in right fall in the [lower, upper] range, we use m, n.
   m to be the first elelemt in right array to make right[m] - left[i] >= lower
   n to be the first elelemt in right array to make right[n] - left[i] > upper, then n-m is the number of range for left[i]
   
   for example left: 1 2 3 | right -3 -2 -1 1 2 3    range is [-1, 1]
   for left[0]  since-3-1<-1 m++, -2-1<-1 m++, -1-1<-1 m++ 1-1>lower m point to 1
                since-3-1<1 n++, -2-1<1 n++, -1-1<1 n++ 1-1<1 n++ 2-1=1 n++ 3-1>upper n point to 3 means we found two pairs:
                sum[6] - sum[0] in this range
                sum[8] - sum[0] in this range
   
 */

var helper;
var countRangeSum = function(nums, lower, upper) {
    var sums = [0];
    for(var i=0; i<nums.length; i++) {
        sums[i+1] = sums[i] + nums[i];
    }
    helper = new Array(sums.length).fill(0);
    return mergeSort(sums, 0, sums.length-1, lower, upper);
};

var mergeSort = function(sums, s, e, lower, upper) {
    if(s >= e) {
        return 0;
    }
    var mid = ~~(s + (e-s)/2);
    var res = mergeSort(sums, s, mid, lower, upper) + mergeSort(sums, mid+1, e, lower, upper); 
   // caculate the number in left and right array
    var m = mid+1, n= mid+1;
    for(var i=s; i<=mid; i++) {
        // for each sums[i] which is in left, we need to find the range in right array
        while(m <= e && sums[m] - sums[i] < lower) m++;   // eventually m point to the first that minus sum[i] >= lower from left
        while(n <= e && sums[n] - sums[i] <= upper) n++; // 
        res += n - m; 
    }
    merge(sums, s, e, mid);
    return res;
};

var merge = function(sums, s, e, mid) {
    for(var i=s; i<=e; i++) helper[i] = sums[i];
    var p1 = s;             //pointer for left part
    var p2 = mid+1;         //pointer for rigth part
    var i = s;              //pointer for sorted array
    
    while(p1<=mid && p2<=e){
        sums[i++] = helper[p1] < helper[p2] ? helper[p1++] : helper[p2++];
    }
    while(p1 <= mid) {
        sums[i++] = helper[p1++];
    }
    while(p2 <= e) {
        sums[i++] = helper[p2++];
    }
};
