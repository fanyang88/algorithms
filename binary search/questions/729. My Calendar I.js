/*
Implement a MyCalendar class to store your events. A new event can be added if adding the event will not cause a double booking.

Your class will have the method, book(int start, int end). Formally, this represents a booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.

A double booking happens when two events have some non-empty intersection (ie., there is some time that is common to both events.)

For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.

Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)
Example 1:
MyCalendar();
MyCalendar.book(10, 20); // returns true
MyCalendar.book(15, 25); // returns false
MyCalendar.book(20, 30); // returns true
Explanation: 
The first event can be booked.  The second can't because time 15 is already booked by another event.
The third event can be booked, as the first event takes every time less than 20, but not including 20.

*/


var MyCalendar = function() {
    // add dummy head
    this.arr= [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}

 */
MyCalendar.prototype.book = function(start, end) {
    var pos = this.binarySearch(start);  // place we gonna insert
    // pos point to the one larger than it, and pos-1 point to the one smaller than it
    if((!this.arr[pos-1] || this.arr[pos-1][1] <= start) && (!this.arr[pos] ||this.arr[pos][0] >= end)) {
        this.arr.splice(pos, 0, [start, end]);
        return true;
    }
    return false;
};

MyCalendar.prototype.binarySearch = function(x) {
    var s = 0, e = this.arr.length - 1;
    var times= this.arr.map(item=> item[0]);
    while(s < e) {
        var mid = ~~((s+e)/2);
        if(times[mid] >= x) {// search on left 
            e = mid;
        } else {
            s = mid+1;
        }
    }
    if(times[e] < x)  return e+1; // the last one in array is still smaller than target
    return e;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = Object.create(MyCalendar).createNew()
 * var param_1 = obj.book(start,end)
 */
 