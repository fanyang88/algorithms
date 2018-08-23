/*
Given a collection of intervals, merge all overlapping intervals.
For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].
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
 * @return {Interval[]}
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
 * @return {Interval[]}
 input: [1,4][5,6]  output is still [1,4][5,6]
 */
var merge = function(intervals) {
    if(intervals.length < 2) return intervals;
    
    //sort intervals
    intervals.sort((a,b) => {
        if(a.start === b.start) return a.end - b.end;
        return a.start - b.start;
    });
    var start = intervals[0].start, end = intervals[0].end, res=[];
    for(var i=1; i<intervals.length; i++) {
        if(intervals[i].start <= end) {
            end = Math.max(end, intervals[i].end);
        } else {  // intervals[i].start > end+1
            res.push([start, end]);
            start = intervals[i].start;
            end = intervals[i].end;
        }
    }
    res.push([start, end]);
    return res;
};

