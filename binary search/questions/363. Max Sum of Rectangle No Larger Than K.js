/*
Given a non-empty 2D matrix matrix and an integer k, 
find the max sum of a rectangle in the matrix such that its sum is 
no larger than k.

Example:
Given matrix = [
  [1,  0, 1],
  [0, -2, 3]
]
k = 2
The answer is 2. Because the sum of rectangle [[0, 1], [-2, 3]] 
is 2 and 2 is the max number no larger than k (k = 2).

Note:
The rectangle inside the matrix must have an area > 0.
What if the number of rows is much larger than the number of columns?
*/


/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 
  first we traverse from l=0, r=0, l=0, r=1 ....l=0, r =n-1
                         ...
                         l=n-2 r=n-1  
                         l=n-1 r=n-1
                         
                         
  
  Given an array of integers A and an integer k, find a subarray that contains the largest sum, 
  subject to a constraint that the sum is less than k?
  You can do this in O(nlog(n))

First thing to note is that sum of subarray (i,j] is just the sum of the first j elements less the sum of the first i elements. Store these cumulative sums in the array sums. Then the problem reduces to finding  i,j such that i<j and sums[j]−sums[i] is as close to k but lower than it.

To solve this, scan from left to right. Put the sums[i] values that you have encountered till now into a set. 
When you are processing sums[j] what you need to retrieve from the set is the smallest number in the set 
such which is bigger than sums[j]−k. This lookup can be done in O(logn) using upper_bound. 
Hence the overall complexity is O(nlog(n)).
e.g: sums [1,3,-3,2]  k=2
st= [1]   1-2=-1 closest = 0  area = 1=0=1
st= [1,4]  4-2=2  closest = 1   area = 4-1=3
st = [1,1,4] 1-2 = -1 closest = 0 area = 1=0=1
st = [1,1,3,4]  3-2 =1 closest = 1 area = 3-1=2
 */
var maxSumSubmatrix = function(matrix, k) {
    var m = matrix.length, n = matrix[0].length, res=-Infinity;
    for(var l=0; l<n; l++) {
        var sums = new Array(m).fill(0);
        for(var r=l; r<n; r++) {
            
            // put the sums in 1D array
            for(var i=0; i<m; i++) {
                sums[i] += matrix[i][r];
            }
            
            var st = [0], curSum = 0;
            for (var sum of sums) {
                curSum += sum;
                //lower_bound finds the smallest element that's >= val
                var pos = binarySearch(st, curSum-k);
                if(st[pos] >= curSum - k && res < curSum - st[pos]) {
                    res = curSum - st[pos];
                }

                var insertP = binarySearch(st, curSum);
                 // insert new element
                 if(insertP === -1) { // newNum is larger than the end element
                    st.push(curSum);
                } else {
                    st.splice(insertP, 0, curSum);
                }
            }
        }
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
