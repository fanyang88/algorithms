/*
Given the coordinates of four points in 2D space, return whether the four points could construct a square.

The coordinate (x,y) of a point is represented by an integer array with two integers.

Example:
Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: True
Note:

All the input integers are in the range [-10000, 10000].
A valid square has four equal sides with positive length and four equal angles (90-degree angles).
Input points have no order.
*/

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 
Calculate distances between all pairs and count distinct values.
There should be only 2 distinct distances (side and diagonal), if not return false.
Fetch lower and bigger value - lower value should occur 4 times (sides), higher 2 times (diagonals) and a^2 + b^2 = c^2 condition should be met.
 */
var validSquare = function(p1, p2, p3, p4) {
    var arr = [p1, p2, p3, p4], map = {}, max = -Infinity, min = Infinity;
    // check the distance between points
    for(var i=0; i<4; i++) {
        for(var j=i+1; j<4; j++) {
            var dist = getDist(arr[i], arr[j]);
            var max= Math.max(max, dist);
            var min= Math.min(min, dist);
            map[dist] = map[dist] ? map[dist]+1 : 1;
        }
    }
    return map[max] === 2 && map[min] === 4 && Object.keys(map).length ===2;
};

var getDist = function(p1, p2) {
    return (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]);
};
