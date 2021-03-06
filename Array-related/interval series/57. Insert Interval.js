/*
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
You may assume that the intervals were initially sorted according to their start times.
Example 1:
Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].
Example 2:
Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].
This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].
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
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    if(intervals.length < 2) return intervals;
    
    //sort intervals
    intervals.sort((a,b) => {
        if(a.start === b.start) return a.end - b.end;
        return a.start - b.start;
    });
    var start = intervals[0].start, end = intervals[0].end, res=[];
    for(var i=1; i<intervals.length; i++) {
        if(intervals[i].start <= end) {
            if(intervals[i].end > end) {
                end = intervals[i].end;
            }
        } else {  // intervals[i].start > end+1
            res.push([start, end]);
            start = intervals[i].start;
            end = intervals[i].end;
        }
    }
    res.push([start, end]);
    return res;
};
