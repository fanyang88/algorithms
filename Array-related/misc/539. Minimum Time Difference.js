/*
Given a list of 24-hour clock time points in "Hour:Minutes" format, 
find the minimum minutes difference between any two time points in the list.
Example 1:
Input: ["23:59","00:00"]
Output: 1
Note:
The number of time points in the given list is at least 2 and won't exceed 20000.
The input time is legal and ranges from 00:00 to 23:59.
*/

/**
 * @param {string[]} timePoints
 * @return {number}
 
 translate time to be in minute, 23:59-> 23*60 + 59, 00:00=0 . 24*60-(23*60 + 59-0) = 1 diff = 1
 */
var findMinDifference = function(timePoints) {
    var arr = [];
    for(var point of timePoints) {
        arr.push(toMin(point));
    }
    arr.sort((a, b) => a - b);
    var min = 24*60 - (arr[arr.length-1] - arr[0]);
    for(var i=1; i<arr.length; i++) {
        min = Math.min(min, arr[i] - arr[i-1]);
    }
    return min;
};

var toMin = function(point) {
    var time = point.split(':');
    return 60*(~~(time[0])) + ~~(time[1]);
};
