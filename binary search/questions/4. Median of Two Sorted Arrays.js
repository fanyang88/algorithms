/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
Example 1:
nums1 = [1, 3]
nums2 = [2]
The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 
 for example: [1,3,5,6,7]  [23,44,45,58]  len = 9 A needs 5, B need 4
 startA = 0, endA = 5, midA = 2 partitions:    A [1, 3]   | [5, 6, 7]  left should always small than right
                                               B [23, 44] | [45, 58]  since 3<45(ok) 44 > 5 not ok, move to right, make A larger
 startA = 2+1=3, endA = 5, midA = 4 partitions: A [1, 3, 5, 6] | [7]       
                                               B [23]         | [44, 45, 58]  since 6<44(ok) 23 > 7 not ok, move to right
 startA = 4+1=5, endA = 5, midA = 5 partitions: A [1, 3, 5, 6, 7] | []  
                                               B []              | [23, 44, 45, 58]  since 7<23, ok
 find 7
 if it is an even number, (max(A left max, B left max) + min(A right min, B right min))/2 =  answer
 
 the core:  [... Aleft] | [Aright ...]  if(Aleft < Bright && Bleft < Aright)  ideal, break
            [... Bleft] | [Bright ...]  if(Aleft > Bright && Bleft < Aright)  shouldn't include Aleft, move to left
                                        if(Aleft < Bright && Bleft > Aright)  shouldn't include Bleft, move to right
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // to make to code less complicated
    nums1.unshift(-Infinity);
    nums1.push(Infinity);
    nums2.unshift(-Infinity);
    nums2.push(Infinity);
    
    if(nums1.length > nums2.length) {
        var temp = nums2;
        nums2 = nums1;
        nums1 = temp;
    }
    var m = nums1.length, n= nums2.length, len= m+n, half = ~~((len+1)/2), lo=0, hi=m-1;
    while(lo <= hi) {
        var mid = ~~((lo+hi)/2);   // the last one at left part of A
        var midB = half - (mid+1); // the first one at right part of B
        if(nums1[mid] <= nums2[midB] && nums1[mid+1] >= nums2[midB-1])  break;
        else if(nums1[mid] > nums2[midB]) {              // ... 4  |    5...
               hi = mid -1;// move to left               // ... 2  |    3...
        } else {
            lo = mid+1;
        }
    }
    if(len % 2 ===0)   return (Math.max(nums1[mid], nums2[midB-1]) + Math.min(nums1[mid+1], nums2[midB]))/2;
    return Math.max(nums1[mid], nums2[midB-1]);
};