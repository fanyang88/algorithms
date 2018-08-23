/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1
*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 [[0,30],[5,10],[15,20]]
 start = [ 0, 5, 15 ] end= [ 10, 20, 30 ]
 since 0<10-end count++ need 1 room
 since 5<10 means there is a new meeting start, but since previous one is not finshed yet, we need another room, count++;
 since 15>10 means another meeting start, but the start time is after the end of first meeting, so we can use first room, end ++
 */
var minMeetingRooms = function(intervals) {
    var count = 0, e=0;
    var starts = intervals.map(item => item.start).sort((a,b) => a-b);
    var end = intervals.map(item => item.end).sort((a,b) => a-b);
    for(var i= 0; i<starts.length; i++) {
        if(starts[i] < end[e])  count++;
        else e++;
    }
    return count;
};
