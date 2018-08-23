// Given two strings S and T, determine if they are both one edit distance apart.

/**
 * @param s: a string
 * @param t: a string
 * @return: true if they are both one edit distance apart or false
 */
const isOneEditDistance = function (s, t) {
    var pointA = 0, pointB = 0, diff =0;
    while(pointA < s.length && pointB < t.length) {
        if(s[pointA] === t[pointB]) {
            pointA ++;
            pointB ++;
        } else {   // s[pointA] !== t[pointB]
            if(s[pointA+1] === t[pointB+1]) {
                diff ++;
                pointA ++;
                pointB ++;
            } else if(s[pointA+1] === t[pointB]) {
                diff ++;
                pointA ++;
            } else if(s[pointA] === t[pointB+1]) {
                diff ++;
                pointB ++;
            } else {  // s[pointA+1] !== t[pointB+1]
                diff ++;
                return false;
            }
        }
    }
    while(pointA < s.length) {
        diff++;
        pointA ++;
    }
    while(pointB < t.length) {
        diff++;
        pointB ++;
    }
    return diff === 1;
}

