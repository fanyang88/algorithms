//Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
for each pointA, we caculate the slope from the rest of each point to this point. we also maintain a map to store the slope and its frequency, then we can get the line with max point start from point A is the max slope
then we can get the max count from all max count of each pointA;
 to avoid corner case: [[0,0],[94911151,94911150],[94911152,94911151]]
 the difference is too small to differentiate by a floating number, we need to use [gcd(a), gcd(b)] as the key
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if(points.length < 2) return points.length;
    var map, dup, maxV, res=1;
    for(var i=0; i<points.length; i++) {
        dup = 1;  // itself
        map = {};
        maxV = 0;
        for(var j=0; j<points.length; j++) {
            if(i===j)  continue;
            if(points[i].x === points[j].x && points[i].y === points[j].y)  {
                dup++;
            } else {
                var slope = getSlope(points[i], points[j]); 
                map[slope] = map[slope]? map[slope]+1 : 1;
            }
            maxV = Math.max(maxV, map[slope] || 0);
        }
        res = Math.max(res, maxV+dup);
    }
    return res;
};

var getSlope = function(p1, p2) {
    if(p1.x === p2.x)  return 1;
    if(p1.y === p2.y)  return 0;
    var a = Math.max((p1.y- p2.y),  (p1.x- p2.x));
    var b = Math.min((p1.y- p2.y),  (p1.x- p2.x));
    var gcd = getGCD(a,  b);
    if(gcd!==0) {
        a= (p1.y- p2.y)/gcd;
        b= (p1.x- p2.x)/gcd;
    }
    return ''+a+b;
};
// 10, 6, 10%6 = 4, we check 6 and 4, 6%4 is 2, we check 4,2, 4%2=0, we get 2 as GCD
// 24, 6, 24%6 = 0, gcd is 6
// 27 and 15, 27%15 = 12, 15,12 15%12 = 3, 12 and 3, 12%3===0 gcd is 3
var getGCD = function(a, b) {
    if(b===0)  return a;
    return getGCD(b, a%b);
};
