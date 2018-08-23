/*
Design and implement a data structure for Least Frequently Used (LFU) cache. It should support the following operations: get and put.
get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, 
it should invalidate the least frequently used item before inserting a new item. For the purpose of this problem, 
when there is a tie (i.e., two or more keys that have the same frequency), the least recently used key would be evicted.
Follow up:
Could you do both operations in O(1) time complexity?
Example:
LFUCache cache = new LFUCache( 2 /* capacity */ );
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.get(3);       // returns 3.
cache.put(4, 4);    // evicts key 1.
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.map = {};
    this.arr = [];
    this.minFreq = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
     if(this.map[key]) {
         // update data in map and set
        var value  =  this.map[key].value;
        this._update(key, value);
        return value;
     }
    return -1;
};

LFUCache.prototype._update = function(key, value) {
    var oldFreq = this.map[key].freq;
    this.arr[oldFreq].delete(key);
    if(this.arr[oldFreq].size === 0 && oldFreq === this.minFreq)  this.minFreq = oldFreq+1;
    if(!this.arr[oldFreq+1]) 
        this.arr[oldFreq+1] = new Set();
    this.arr[oldFreq+1].add(key);
    this.map[key] = {value: value, freq: oldFreq+1};
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if(this.capacity ===0 )  return;
    if(this.map[key]) {
        this._update(key, value);
    } else {
        if(Object.keys(this.map).length === this.capacity) {
            // Remove the first element in the minFreq set
            var it = this.arr[this.minFreq].values();
            var toBeRemoved = it.next().value;
            this.arr[this.minFreq].delete(toBeRemoved);
            delete this.map[toBeRemoved];
        }
        // add the new element in the map and corresponding set
        this.map[key] = {value: value, freq: 1};
        if(!this.arr[1]) 
            this.arr[1] = new Set();
        this.arr[1].add(key);
        this.minFreq = 1;
    }
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = Object.create(LFUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
