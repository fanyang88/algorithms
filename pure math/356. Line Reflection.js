/*
Given n points on a 2D plane, 
find if there is such a line parallel to y-axis 
that reflect the given points.

Example 1:
Given points = [[1,1],[-1,1]], return true.

Example 2:
Given points = [[1,1],[-1,-1]], return false.

Follow up:
Could you do better than O(n2)?
*/

/**
 * @param {number[][]} points
 * @return {boolean}
 
 if there is a line parallel to y that can reflect all points, say it is y=mid
 means for each pointer p , there must to another pointer p2 in the set that has x = mid - p1.x  and p1.y=p2.y
 1. find the mid = min+max,  e.g: min=-1 max = 2 mid = 1  
 2. add all pointers in the map with key = p[0]+'_'+p[1]
 3. for each pointer, there should has another pointer mid-p[0]+'_'+p[1]  if can't find, it can't be reflected by a line para to y
 */
var isReflected = function(points) {
    var set = new Set(), min = Infinity, max= -Infinity;
    for(var p of points) {
        min = Math.min(min, p[0]);
        max = Math.max(max, p[0]);
        set.add(p[0]+':'+p[1]);
        
    }
    var mid = min + max;
    for(var p of points) {
        var x = mid - p[0];
        if(!set.has(x+':'+p[1]))  return false;
    }
    return true;
};
