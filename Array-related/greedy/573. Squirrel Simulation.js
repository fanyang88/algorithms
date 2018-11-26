/*
There's a tree, a squirrel, and several nuts. Positions are represented by the cells in a 2D grid. 
Your goal is to find the minimal distance for the squirrel to collect all the nuts and put them under the tree one by one. 
The squirrel can only take at most one nut at one time and can move in four directions - up, down, left and right, 
to the adjacent cell. The distance is represented by the number of moves.
Example 1:

Input: 
Height : 5
Width : 7
Tree position : [2,2]
Squirrel : [4,4]
Nuts : [[3,0], [2,5]]
Output: 12
Explanation:
​​​​​
Note:

All given positions won't overlap.
The squirrel can take at most one nut at one time.
The given positions of nuts have no order.
Height and width are positive integers. 3 <= height * width <= 10,000.
The given positions contain at least one nut, only one tree and one squirrel.

*/

/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} tree
 * @param {number[]} squirrel
 * @param {number[][]} nuts
 * @return {number}
 
if the squirrel starts from the tree, then the distance = 2 (tree to each nut)
since squirrel is not from the tree, we need to find the nearest nut, get the distance and add that distance to the total and deduct that nut to the tree distance.
For the first nut, 
let a be the distance from Tree to Nut j
let b be the distance from Squirrel to Nut j
We need to remove a from the total, and add b to the total
Therefore we will MINIMIZE the equation (b-a)
 */
 
var minDistance = function(height, width, tree, squirrel, nuts) {
    var total = 0, minDistance = Infinity, minNut = null;
    for(var nut of nuts) {
        total += 2* getDistance(nut, tree);
        var distance = getDistance(nut, squirrel) - getDistance(nut, tree);
        if(distance < minDistance) {
            minDistance = distance;
            minNut = nut;
        }
    }
    return total + minDistance;
};

var getDistance = function(p1, p2) {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
};
