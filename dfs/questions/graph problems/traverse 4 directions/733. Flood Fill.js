/*
An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).
Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.
To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.
At the end, return the modified image.
Example 1:
Input: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: 
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
*/

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    var oldColor = image[sr][sc];
    if(oldColor !== newColor) {
        helper(image, sr, sc, newColor, oldColor);
    }
    return image;
};

  var helper= function(image, sr, sc, newColor, color) {
    if(image[sr][sc] === color) {
        image[sr][sc] = newColor;
        if(sr+1 < image.length) {
            helper(image, sr+1, sc, newColor, color);
        }
        if(sr-1 >=0) {
            helper(image, sr-1, sc, newColor, color);
        }
        if(sc+1 < image[0].length) {
            helper(image, sr, sc+1, newColor, color);
         }
        if(sc-1 >=0) {
            helper(image, sr, sc-1, newColor, color);
        }
    }
};


