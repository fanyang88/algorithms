/*
Median is the middle value in an ordered integer list. 
If the size of the list is even, there is no middle value. 
So the median is the mean of the two middle value.

For example,
[2,3,4], the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
Example:

addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
*/

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr= [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.arr.length===0) {
        this.arr.push(num);
        return;
    }
    var pos = this.binarySearch(num);
    if(pos === -1) {
        this.arr.push(num);
    } else {
        this.arr.splice(pos, 0, num);
    }
};

MedianFinder.prototype.binarySearch = function(num) {
    var lo = 0, hi = this.arr.length-1;
    while(lo < hi) {
        var mid = ~~((lo + hi) / 2);
        if(this.arr[mid] >= num) {
            hi = mid;
        } else {
            lo = mid +1;
        }
    }
    return this.arr[hi] >= num ? hi : -1;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    var len = this.arr.length;
    var mid1 = ~~(len/2), mid2= ~~((len-1)/2);
    return (this.arr[mid1] + this.arr[mid2]) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
 