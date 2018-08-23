/*
There are n different online courses numbered from 1 to n. 
Each course has some duration(course length) t and closed on dth day. 
A course should be taken continuously for t days and must be finished before or on the dth day. 
You will start at the 1st day.
Given n online courses represented by pairs (t,d), your task is 
to find the maximal number of courses that can be taken.

Example:
Input: [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]
Output: 3
Explanation: 
There're totally 4 courses, but you can take 3 courses at most:
First, take the 1st course, it costs 100 days so you will finish it on the 100th day, 
and ready to take the next course on the 101st day.
Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, 
and ready to take the next course on the 1101st day. 
Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day. 
The 4th course cannot be taken now, since you will finish it on the 3300th day, 
which exceeds the closed date.
*/

/**
 * @param {number[][]} courses
 * @return {number}
 
 sort the courses by deadline first, e.f: [5, 5] [4, 6] [2, 6]
 time=0, since time+5=5 = courses[0][1] continue, queue = [5]
 time=5, since time+4>6, we need to remove the largest duration in queue which is 5, time=4+5-5=4, queue= [4]
 time=4, since time+2=6, continue, queue = [4, 2] 
 queue.length is the answer. 
 We can use binary search to optimize, keep queue sorted.
 */
var scheduleCourse = function(courses) {
    // sort the courses by deadline first
    courses.sort((a, b) => {
        return a[1] - b[1];
    });
    
    var queue = [], time = 0;
     for (var course of courses) {
        var index = binarySearch(queue, course[0]);
        if(index === -1)  {
            queue.push(course[0]);
        } else {
            queue.splice(index, 0, course[0]);
        }
            
        time += course[0];
        if (time > course[1]) time -= queue.pop();
    }
    return queue.length;
};

var binarySearch = function(arr, x) {
    var s = 0, e = arr.length-1;
    while(s < e) {
        var mid =  ~~((s + e) / 2);
        if(arr[mid] < x) {  // search on right
            s = mid +1;
        } else {
            e = mid;
        }
    }
    return arr[e] >= x ? e : -1;
};