/*
Median is the middle value in an ordered integer list. 
If the size of the list is even, there is no middle value. 
So the median is the mean of the two middle value.

Examples: 
[2,3,4] , the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Given an array nums, there is a sliding window of size k which is moving from the very 
left of the array to the very right. You can only see the k numbers in the window. 
Each time the sliding window moves right by one position. 
Your job is to output the median array for each window in the original array.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Median
---------------               -----
[1  3  -1] -3  5  3  6  7       1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7       3
 1  3  -1  -3 [5  3  6] 7       5
 1  3  -1  -3  5 [3  6  7]      6
Therefore, return the median sliding window as [1,-1,-1,3,5,6].
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 
 e.g: [1,3, -1,4, 5, 2, 3]  k= 5
 we need to maintain a k size window, sort the array in the window first, 
 we want to make sure the number in the window is always sorted
 for each new incoming number, we push it to the last postion first, 
 then we need to find the insertion point for the new number in the window.
 insert the number in the right position.
 the median is always = window[k/2] + window[(k-1) /2];
 Then at last, since nums[i-k] is the number we want to delete in the array
 We found the postion of the delete element and delete it.
 
 [1, 3, 4, 5, -1, 2]  k=5
 =>window [-1, 1, 3, 4, 5]
 new number = 2, i=5: 
    use binary search to find the first number larger than 2, 
    ind = 2, we insert 2 into window: [-1, 1, 2, 3, 4, 5]
    the number to be deleted is nums[5-5] = 1, 
    we find the position of 1 and delete it in window
 
 */
var medianSlidingWindow = function(nums, k) {
    var res = [],  mid1 = ~~(k/2), mid2= ~~((k-1)/2);
    var window = nums.slice(0, k).sort((a,b) => {
        return a-b;
    });
    res.push((window[mid1] + window[mid2])/2);

    for(var i=k; i<nums.length; i++) {
        var newNum = nums[i];
        var insertP = binarySearch(window, newNum);
        // insert new element
        if(insertP === -1) { // newNum is larger than the end element
            window.push(newNum);
        } else {
            window.splice(insertP, 0, newNum);
        }
        // remove old one not in the new window
        var deleteP = binarySearch(window, nums[i-k]);
        window.splice(deleteP, 1);

        res.push((window[mid1] + window[mid2])/2);
    }
    return res;
};

var binarySearch = function(arr, x) {
    var s = 0, e = arr.length-1;
    while(s < e) {
        var mid =  ~~((s + e) / 2);
        if(arr[mid] < x) {  // search on right
            s = mid +1;
        } else {
            e = mid;
        }
    }
    return arr[e] < x ? -1 : e;
};

