/*
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
Find all strobogrammatic numbers that are of length = n.
Example:
Input:  n = 2
Output: ["11","69","88","96"]
*/

/**
 * @param {number} n
 * @return {string[]}
 when n=1, [0, 1, 8]
 when n= 2, ["11","69","88","96"]
 when n= 3, ["101","609","808","906", "111","619","818","916", "181","689","888","986"]
 
 */
var findStrobogrammatic = function(n) {
    var level = n;
    return helper(level, n);
};

var helper = function(level, n) {
    if(level ===0) return [''];
    if(level ===1) return ['0', '1', '8'];
    var res = [];
    var list = helper(level-2, n);  // when level=3, we get the list level=1 first.
    for(var i=0; i<list.length; i++) {
        if(level !== n)  {  // since if level === n, this is the outmost, shouldn't add 0
            res.push('0' + list[i] + '0');
        }
        res.push('1' + list[i] + '1');
        res.push('8' + list[i] + '8');
        res.push('6' + list[i] + '9');
        res.push('9' + list[i] + '6');
    }
    return res;
}
