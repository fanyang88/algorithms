/*
Nearly every one have used the Multiplication Table. 
But could you find out the k-th smallest number quickly from the multiplication table?
Given the height m and the length n of a m * n Multiplication Table, 
and a positive integer k, you need to return the k-th smallest number in this table.

Example 1:
Input: m = 3, n = 3, k = 5
Output: 
Explanation: 
The Multiplication Table:
1	2	3
2	4	6
3	6	9

The 5-th smallest number is 3 (1, 2, 2, 3, 3).
Example 2:
Input: m = 2, n = 3, k = 6
Output: 
Explanation: 
The Multiplication Table:
1	2	3
2	4	6

The 6-th smallest number is 6 (1, 2, 2, 3, 4, 6).
Note:
The m and n will be in the range [1, 30000].
The k will be in the range [1, m * n]
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
    // using binary search to find the kth
    var low = 1, high = m*n;
    while(low < high) {
        var total = 0;
        var mid = ~~((low + high) / 2);
        // to get the total number that <= mid in each row
        // mid/i is the total number that <= mid, we also need to compare with n
        for (var i = 1; i <= m; i++) {
	        total += Math.min(~~(mid/ i) , n);
	    }
        
        // end of search
        if(total < k) {
            low = mid +1;
        } else {
            high = mid;
        }
    }
    return high;
};