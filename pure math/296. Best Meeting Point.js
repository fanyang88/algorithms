/*
A group of two or more people wants to meet and minimize the total travel distance. You are given a 2D grid of values 0 or 1, 
where each 1 marks the home of someone in the group. 
The distance is calculated using Manhattan Distance, where distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.
For example, given three people living at (0,0), (0,4), and (2,2):
1 - 0 - 0 - 0 - 1
|   |   |   |   |
0 - 0 - 0 - 0 - 0
|   |   |   |   |
0 - 0 - 1 - 0 - 0
The point (0,2) is an ideal meeting point, as the total travel distance of 2+2+2=6 is minimal. So return 6.
*/

/**
 * @param {number[][]} grid
 * @return {number}
  since the min distance of n points = (xN - x1 + xN-1 - x2 + ... ) + (yN - y1 + yN-1 - y2 + ... )
  x1, x2, ...xN is sorted, so as y1, y2, ....yN
 */
var minTotalDistance = function(grid) {
    var arrX = [], arrY = [];
    for(var i=0; i<grid.length; i++) {
        for(var j=0; j<grid[0].length; j++) {
            if(grid[i][j] === 1) {
                arrX.push(i);
                arrY.push(j);
            }
        }
    }
    return getMinDist(arrX) + getMinDist(arrY);
};

var getMinDist = function(arr) {
    arr.sort((a, b) => a -b);
    var start = 0, end = arr.length-1, res = 0;
    while(start < end) {
        res += arr[end--] - arr[start++];
    }
    return res;
}
