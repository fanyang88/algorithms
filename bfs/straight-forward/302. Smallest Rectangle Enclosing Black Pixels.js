/*
An image is represented by a binary matrix with 0 as a white pixel and 1 as a black pixel. The black pixels are connected, 
i.e., there is only one black region. Pixels are connected horizontally and vertically. 
Given the location (x, y) of one of the black pixels, 
return the area of the smallest (axis-aligned) rectangle that encloses all black pixels.
For example, given the following image:
[  "0010",
   "0110",
   "0100"]
and x = 0, y = 2,   Return 6.
*/

/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
    get Xmin, Xmax, Ymin, Ymax from all 1s.
    max area = (Xmax - Xmin + 1 )* (Ymax - Ymin + 1 );
    use BFS from x, y
 */
var minArea = function(image, x, y) {
    var visited = [], dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for(var i=0; i<image.length; i++) {
        visited[i] = [];
    }
    var Xmin = image.length, Xmax = 0, Ymin = image[0].length, Ymax= 0;
    var st = [[x, y]];
    visited[x][y] = 1;
    while(st.length > 0) {
        var cur = st.shift();
         Xmin = Math.min(cur[0], Xmin);
         Ymin = Math.min(cur[1], Ymin);
         Xmax = Math.max(cur[0], Xmax);
         Ymax = Math.max(cur[1], Ymax);
        for(var i=0; i<4; i++) {
            var nextX = cur[0] + dir[i][0];
            var nextY = cur[1] + dir[i][1];
            if(nextX <0 || nextY<0 || nextX>= image.length || nextY>= image[0].length || image[nextX][nextY] !== '1' || visited[nextX][nextY])  continue;
            visited[nextX][nextY] =1;
            st.push([nextX, nextY]);
        }
    }
    return (Xmax - Xmin + 1 )* (Ymax - Ymin + 1 );
};
