/*
You are given two jugs with capacities x and y litres. 
There is an infinite amount of water supply available. 
You need to determine whether it is possible to measure exactly z litres 
using these two jugs.

If z liters of water is measurable, 
you must have z liters of water contained within one or both buckets 
by the end.

Operations allowed:

Fill any of the jugs completely with water.
Empty any of the jugs.
Pour water from one jug into another till the other jug is completely 
full or the first jug itself is empty.
Example 1: (From the famous "Die Hard" example)

Input: x = 3, y = 5, z = 4
Output: True
Example 2:

Input: x = 2, y = 6, z = 5
Output: False
*/


/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 we assume the GCD of x and y is d, what to do here is to check if z is a mutilpy of d.
 */
var canMeasureWater = function(x, y, z) {
    if(x+y < z)  return false;
    // handle special case when x or y =0
    if(x ===z || y===z || x+y ===z)  return true;
    return z % getGCD(x, y) === 0;
};

var getGCD = function(x, y) {
    while(y !== 0) {
        var mod = x % y;
        x = y;
        y = mod;
    }
    return x;
};
