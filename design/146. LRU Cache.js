/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, 
it should invalidate the least recently used item before inserting a new item.
Follow up:
Could you do both operations in O(1) time complexity?
Example:
LRUCache cache = new LRUCache( 2 /* capacity */ );
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = {};
    this.set = new Set();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map[key]) { // key already exist, we need to delete the key and add to end
        this.set.delete(key);
        this.set.add(key);
        return this.map[key];   
    } 
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map[key]) {
        // remove this key and add back in set, update in hashmap
        this.set.delete(key);
    } else {
        if(this.set.size >= this.capacity) {
            var it = this.set.values();
            var oldKey = it.next().value;
            delete this.map[oldKey];
            this.set.delete(oldKey);
        }
    }
    this.set.add(key);
    this.map[key] = value;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
