/*
Given N axis-aligned rectangles where N > 0, determine if they all together form an exact cover of a rectangular region.

Each rectangle is represented as a bottom-left point and a top-right point. For example, a unit square is represented as [1,1,2,2]. (coordinate of bottom-left point is (1, 1) and top-right point is (2, 2)).


Example 1:

rectangles = [
  [1,1,3,3],
  [3,1,4,2],
  [3,2,4,4],
  [1,3,2,4],
  [2,3,3,4]
]

Return true. All 5 rectangles together form an exact cover of a rectangular region.

Example 2:

rectangles = [
  [1,1,2,3],
  [1,3,2,4],
  [3,1,4,2],
  [3,2,4,4]
]

Return false. Because there is a gap between the two rectangular regions.

Example 3:

rectangles = [
  [1,1,3,3],
  [3,1,4,2],
  [1,3,2,4],
  [3,2,4,4]
]

Return false. Because there is a gap in the top center.

Example 4:

rectangles = [
  [1,1,3,3],
  [3,1,4,2],
  [1,3,2,4],
  [2,2,4,4]
]

Return false. Because two of the rectangles overlap with each other.
*/


/**
 * @param {number[][]} rectangles
 * @return {boolean}
 
    The right answer must satisfy two conditions:
    the large rectangle area should be equal to the sum of small rectangles
    count of all the points should be even, and that of all the four corner points should be one
 */
var isRectangleCover = function(rectangles) {
    // each input is col1, row1, col2, row2  -> 4 pointers: (row1, col1), (row1, col2), (row2, col1), (row2, col2)
    var minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity, set = new Set(), area=0;
    for(var rec of rectangles) {
        minx = Math.min(minx, rec[1], rec[3]);
        miny = Math.min(miny, rec[0], rec[2]);
        maxx = Math.max(maxx, rec[1], rec[3]);
        maxy = Math.max(maxy, rec[0], rec[2]);
        
        var s1 = rec[1] + " " + rec[0];
        var s2 = rec[3] + " " + rec[0];
        var s3 = rec[3] + " " + rec[2];
        var s4 = rec[1] + " " + rec[2];
        area += (rec[3] - rec[1]) * (rec[2] - rec[0]);
        
        if(set.has(s1))  {
            set.delete(s1);
        } else {
            set.add(s1);
        }
        if(set.has(s2))  {
            set.delete(s2);
        } else {
            set.add(s2);
        }
        if(set.has(s3)) {
            set.delete(s3);
        } else {
            set.add(s3);
        }
        if(set.has(s4))  {
            set.delete(s4);
        } else {
            set.add(s4);
        }
    }
    if(set.size !==4 || !set.has(minx + ' ' + miny) || !set.has(minx + ' ' + maxy) ||
       !set.has(maxx + ' ' + miny) || !set.has(maxx + ' ' + maxy))  return false;
    return area === (maxx - minx) * (maxy - miny);
};
