/*
Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
Example:  Input:
[ ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]]
Output: 6
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 
 using DP: res = Max((right[j]-left[j]) * height[j])
 left[j]: from left to right, the first pos where leads a consecutive string of 1s
 right[j]: from right to left, the last pos where leads a consecutive string of 1s
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
  height:       1 0 1 0 0
                2 0 2 1 1
                3 1 3 2 2
                4 0 0 3 0
  if(i, j) ==0 height[i, j] = 0 else height[i, j] = height[i-1, j]+1
  left:         0 0 2 0 0  
                0 0 2 2 2
                0 0 2 2 2
                0 0 0 3 0
  if(i, j) ===0  left[i,j]= 0, first = null
  else if(!first) first= i, left[i, j] = max(first, left[i-1, j])
  
  right:        1 5 3 5 5
                1 5 3 5 5
                1 5 3 5 5
                1 5 4 5 5
  if(i, j) ===0  right[i,j]= n, first = null
  else{ if(!first) first= n-i, right[i, j] = min(first, right[i-1, j])      }  
  we can use one dimentional array to replace the 2D one
 */
var maximalRectangle = function(matrix) {
    if(matrix.length ===0)  return 0;
    var left = new Array(matrix[0].length).fill(0);
    var right = new Array(matrix[0].length).fill(matrix[0].length);
    var height = new Array(matrix[0].length).fill(0);
    var maxV = 0;
    for(var i=0; i<matrix.length; i++) {
        var firstLeft = null;
        var firstRight = null;
        for(var j=0; j<matrix[0].length; j++) {  // get height and left
            if(matrix[i][j] === '0') {
                height[j] = 0;
                left[j] = 0;
                firstLeft = null;
            } else {
                height[j] = height[j] +1;
                if(firstLeft===null)  firstLeft = j;
                left[j] = Math.max(left[j], firstLeft);
            }
        }
        // get right array
        for(var j=matrix[0].length-1; j>=0; j--) {
            if(matrix[i][j] === '0') {
                right[j] = matrix[0].length;
                firstRight = null;
            } else {
                if(firstRight===null)  firstRight = j+1;
                right[j] = Math.min(right[j], firstRight);
            }
        }
         for(var j=0; j<matrix[0].length; j++) {
             maxV = Math.max(maxV, (right[j] - left[j]) * height[j]);
         }
    }
    return maxV;
};



// Another way is to use stack, 
// similar to Leetcode question 84, to find the max area, we can refer the thought from 84 which is to compute max area in 1D

var maximalRectangle = function(matrix) {
    if(matrix.length ===0)  return 0;
    
    var n = matrix[0].length, res = 0;
    var heights = new Array(n+1).fill(0);
    
    for(var row=0; row < matrix.length; row++) {
        // construct the heights array first
        for(var i=0; i<heights.length-1; i++) {
            if(matrix[row][i] === '1') {
                heights[i] ++;
            } else {
                heights[i] = 0;
            }
        }
        // get the max area from the height array.
        var st = [];
        for(var i=0; i<heights.length; i++) {
            while(st.length > 0 && heights[st[st.length-1]] > heights[i]) {
                var prev= st.pop();
                var area = st.length===0 ? heights[prev] * i : heights[prev] * (i- st[st.length-1]-1);
                res= Math.max(area, res);
            }
            st.push(i);
        }
    }
    return res;
};

