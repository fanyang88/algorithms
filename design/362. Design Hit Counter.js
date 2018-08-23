/*
Design a hit counter which counts the number of hits received in the past 5 minutes.
Each function accepts a timestamp parameter (in seconds granularity) and 
you may assume that calls are being made to the system in chronological order (ie, the timestamp is monotonically increasing). 
You may assume that the earliest timestamp starts at 1.
It is possible that several hits arrive roughly at the same time.
Example:
HitCounter counter = new HitCounter();
// hit at timestamp 1.
counter.hit(1);
// hit at timestamp 2.
counter.hit(2);
// hit at timestamp 3.
counter.hit(3);
// get hits at timestamp 4, should return 3.
counter.getHits(4);
// hit at timestamp 300.
counter.hit(300);
// get hits at timestamp 300, should return 4.
counter.getHits(300);
// get hits at timestamp 301, should return 3.
counter.getHits(301); 
*/

/**
 * Initialize your data structure here.
 hit at timestamp 1.hit at timestamp 2.hit at timestamp 3.
 we can use two arrays to store: timestamps = [ , 1, 2, 3], count = [0, 1,1 ,1]
 hit at timestamp 300. , get hits at timestamp 300 = 4
 timestamps = [ 300, 1, 2, 3], count = [1, 1,1 ,1]
 hit at timestamp 300 again. , get hits at timestamp 300 = 4
  timestamps = [ 300, 1, 2, 3], count = [2, 1,1 ,1]
  hit at timestamp 301, get hits at timestamp 301 = 5
  timestamps = [ 300, 301, 2, 3], count = [2, 1,1 ,1]
  
 */
var HitCounter = function() {
    // store the timestamps in the array, we store the corresponding counts in the count.
    this.timestamps = new Array(300);
    this.count = new Array(300).fill(0);
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    var index = timestamp % 300;
     // should override the old one, the old one can be this.timestamps[index] = 1, 
    // the new timestamp = 301, index=1, we should update the timestamp, and the related count.
    if(this.timestamps[index] !==  timestamp) { 
        this.timestamps[index] = timestamp;
        this.count[index] = 1;
    } else {
        this.count[index] ++;
    }
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    var total = 0;
    for(var i=0; i<300; i++) {
        if(timestamp - this.timestamps[i] < 300) {
            total += this.count[i];
        }
    }
    return total;
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = Object.create(HitCounter).createNew()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
