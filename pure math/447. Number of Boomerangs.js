/*
Given n points in the plane that are all pairwise distinct, 
a "boomerang" is a tuple of points (i, j, k) 
such that the distance between i and j equals the distance between i and k 
(the order of the tuple matters).

Find the number of boomerangs. You may assume that 
n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]

*/

/**
 * @param {number[][]} points
 * @return {number}
 for each point, we examine how many points has same distance to it
 e.g: a=[0, 0] b=[1,0]  c[-1,0] d[0, -1] b,c,d has same distance to a which is 1
 so there can be boomerangs as: [a,b,c] [a,b,d] [a,c,b] [a,c,d] [a,d,b] [a,d,c] = 6 total
 since a is fixed postions, there are 3 values for 2 positions = 3 * 2 =6
 */
var numberOfBoomerangs = function(points) {
    var res = 0;
    for(var i=0; i<points.length; i++) {
        var map = {};
        for(var j=0; j<points.length; j++) {
            if(i===j)  continue;
            var dist = getDistance(points[i], points[j]);
            map[dist] = map[dist]? map[dist]+1 : 1;
        }
        for(var key in map) {
            res += map[key] * (map[key]-1);
        }
    }
    return res;
};

var getDistance = function(p1, p2) {
    var x = p1[0] - p2[0], y=p1[1] - p2[1];
    return x*x + y*y;
};