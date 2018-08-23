/*
Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

Rectangle Area

Example:

Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
Output: 45

*/

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 /sort [A, E, C, G] and [B, D, F, H]
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var left = Math.max(A, E), right = Math.max(left, Math.min(C, G));
    var top = Math.min(D, H), bottom = Math.min(top, Math.max(B, F));
    var intersectArea = (right - left) * (top - bottom);
    return (C - A) * (D - B) + (G - E) * (H - F) - intersectArea;
};