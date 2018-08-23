/*
Given an unsorted array of integers, 
find the length of longest increasing subsequence.

For example,
Given [10, 9, 2, 5, 3, 7, 101, 18],
The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. 
Note that there may be more than one LIS combination, 
it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
*/

 /**
 * @param {number[]} nums
 * @return {number}
 Another method: using binary search
 [10,9,2,5,3,7,101,18] 
 e.g: for each number, we check the tops from exsited stacks, 
 try to find the one with number mimimum larger than it.(use binary search), 
 once we found such top, we append the number to that stack, 
 otherwise we open a new stack.
 st1    st2          st3     st4
 10      5            7       101
 9       3                    18
 2
 number of stacks is the longest sequence length.
 */

var lengthOfLIS = function(nums) {
    var st = [];
    for(var num of nums) {
        var found = binarySearch(st, num);
        if(found === -1) {
            st.push(num);
        } else {
            st[found]=num;
        }
    }
    return st.length;
};

var binarySearch = function(st, val) {
   var s = 0, e = st.length-1;
    while(s < e) {
        var mid = ~~((s + e) / 2);
        if(st[mid] >= val) {
            e = mid;
        } else {
            s = mid +1;
        }
    }
    return st[e] >= val ? e: -1;
};
