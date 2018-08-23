/*
Given two arrays of length m and n with digits 0-9 representing two numbers. 
Create the maximum number of length k <= m + n from digits of the two. 
The relative order of the digits from the same array must be preserved. 
Return an array of the k digits.

Note: You should try to optimize your time and space complexity.

Example 1:

Input:
nums1 = [3, 4, 6, 5]
nums2 = [9, 1, 2, 5, 8, 3]
k = 5
Output:
[9, 8, 6, 5, 3]
Example 2:

Input:
nums1 = [6, 7]
nums2 = [6, 0, 4]
k = 5
Output:
[6, 7, 6, 0, 4]
Example 3:

Input:
nums1 = [3, 9]
nums2 = [8, 9]
k = 3
Output:
[9, 8, 9]
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 e.g: 
 nums1 = [6, 7]
 nums2 = [6, 0, 4]   k=5
 if(nums1.length+nums2.length==k) just use two pointers to get the max which is 6,7,6,0,4
 
 nums1 = [3, 4, 6, 5]
 nums2 = [9, 1, 2, 5, 8, 3]  k = 5
 len=0 nums1=[]            len=5  nums2=[9,2,5,8,3]
 len=1 nums1=[6]           len=4  nums2=[9,5,8,3]  kick only 2 numbers 
 len=2 nums1=[6,5]         len=3  nums2=[9,8,3]  kick only 3 numbers 
 len=3 nums1=[4,6,5]       len=2  nums2=[9,8]  
 len=4 nums1=[3,4,6,5]     len=1  nums2=[9]  
 
 in all the combination above, get the max number
 refer to LC 402
 
 */
var maxNumber = function(nums1, nums2, k) {
    var n = nums1.length, m = nums2.length, candidate = new Array(k).fill(0);
    for (var i = Math.max(0, k - m); i <= k && i <= n; ++i) {
        // nums1 with length = i, so it need to remove n-i elements
        // nums2 with length = k-i, so it need to remove m-k+i elements
        var arr = merge(RemoveK(nums1, n-i), RemoveK(nums2, m-k+i), k);
        if(greater(arr, 0, candidate, 0))  candidate = arr;
    }
    return candidate;
};

var merge = function(arr1, arr2, k) {
    var i=0, j=0, res= [];
    for(var r=0; r<k; r++) {
        res[r] = greater(arr1, i, arr2, j) ? arr1[i++] : arr2[j++];
    }
    return res;
};

var greater = function(arr1, i, arr2, j) {
    while(i<arr1.length && j<arr2.length && arr1[i] === arr2[j]) {
        i++;
        j++;
    }
    return j===arr2.length || (j< arr2.length && arr1[i] > arr2[j]);
};

var RemoveK = function(num, k) {
    var st = [+num[0]];
    if(num.length === k)  return [];
    for(var i = 1; i<num.length; i++) {
        while(k>0 && st && st[st.length - 1] < num[i]) {
            st.pop();
            k--;
        }
        st.push(num[i]);
    }
    if(st.length === 0) return [];
    return st;
};
