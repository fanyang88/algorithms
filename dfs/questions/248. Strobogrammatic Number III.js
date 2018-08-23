/*
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
Write a function to count the total strobogrammatic numbers that exist in the range of low <= num <= high.
Example:
Input: low = "50", high = "100"
Output: 3 
Explanation: 69, 88, and 96 are three strobogrammatic numbers.
*/

/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var strobogrammaticInRange = function(low, high) {
    var count = 0, result = [];
    for(var i=low.length; i<=high.length; i++) {
        result = result.concat(helper(i, i));
    }
    
    for(var item of result) {
        var val = parseInt(item);
        if(val <=high && val >=low) count ++;
    }
    return count;
};

var helper = function(level, n) {
    if(level===0)  return [''];
    if(level===1)  return ['0', '1', '8'];
    
    var res = [];
    var list = helper(level-2, n);
    for(var i =0; i <list.length; i++) {
        if(level !== n) {
            res.push('0' + list[i]+ '0');
        }
        res.push('1' + list[i]+ '1');
        res.push('8' + list[i]+ '8');
        res.push('6' + list[i]+ '9');
        res.push('9' + list[i]+ '6');
    }
    return res;
}
