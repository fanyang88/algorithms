/*
There are a number of spherical balloons spread in two-dimensional space. For each balloon, provided input is the start and end coordinates of the horizontal diameter. Since it's horizontal, y-coordinates don't matter and hence the x-coordinates of start and end of the diameter suffice. Start is always smaller than end. There will be at most 104 balloons.

An arrow can be shot up exactly vertically from different points along the x-axis. A balloon with xstart and xend bursts by an arrow shot at x if xstart ≤ x ≤ xend. There is no limit to the number of arrows that can be shot. An arrow once shot keeps travelling up infinitely. The problem is to find the minimum number of arrows that must be shot to burst all balloons.

Example:

Input:
[[10,16], [2,8], [1,6], [7,12]]

Output:
2

Explanation:
One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and another arrow at x = 11 (bursting the other two balloons).

*/

/**
 * @param {number[][]} points
 * @return {number}
 similar to merge intervals.
 e.g use above case, after sorting, it is [1,6], [2,8], [7,12], [10,16]
 count=1
 1 < 6  minEnd = 6
 2 < 6  minEnd = min(6, 8)
 7 > 6 count++, minEnd = 12
 10<12 minEnd = min(12, 16)
 
 */
var findMinArrowShots = function(points) {
    if(points.length===0)  return 0;
    // sort by start and end
    points.sort((a, b) => {
        if(a[1] === b[1])  return a[0] - b[0];
        return a[1] - b[1];
    });
    
    var count=1, end = points[0][1];
    for(var i=1; i<points.length; i++) {
        if(points[i][0] <= end)   continue;
        count++;
        end = points[i][1];
    }
    return count;
};
