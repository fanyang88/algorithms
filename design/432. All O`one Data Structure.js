/*
Implement a data structure supporting the following operations:

Inc(Key) - Inserts a new key with value 1. Or increments an existing key by 1. Key is guaranteed to be a non-empty string.
Dec(Key) - If Key's value is 1, remove it from the data structure. Otherwise decrements an existing key by 1. 
           If the key does not exist, this function does nothing. Key is guaranteed to be a non-empty string.
GetMaxKey() - Returns one of the keys with maximal value. If no element exists, return an empty string "".
GetMinKey() - Returns one of the keys with minimal value. If no element exists, return an empty string "".
Challenge: Perform all these in O(1) time complexity.
*/

/**
 * Initialize your data structure here.
 maintain a linklist of set, and a hashmap
 when we inc a key, if key not exist in hashmap, update it in hashmap and put it in first set(value=1)
                    else, get the value from the map, update in map and push it to the correscoding value set
 when we dec a key, find its value in the map first, and remove it from the coreespondng value set
 get maxkey, return the first one in last set
 get minkey, return the first one in first set
 
 
 */



var AllOne = function() {
    this.stacks = [];
    this.map = {};
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    this.map[key] = this.map[key] ? this.map[key] +1 : 1;
    var val = this.map[key];
    if(!this.stacks[val]) this.stacks[val]= new Set();
    this.stacks[val].add(key);
    if(val > 1) {
       this.stacks[val-1].delete(key);
    } 
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    if(!this.map[key])  return;
    var val = this.map[key];
    this.map[key] = val-1;
    this.stacks[val].delete(key);
    if(val>1) {
        this.stacks[val-1].add(key);
    }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    if(this.stacks.length===0)  return ''; 
    for(var i=this.stacks.length-1; i>0; i--) {
        if(this.stacks[i] && this.stacks[i].size > 0) {
            var iter = this.stacks[i].values();
            return iter.next().value;
        }
    }
    return null;
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    if(this.stacks.length===0)  return '';
    for(var i=0; i<this.stacks.length; i++) {
        if(this.stacks[i] && this.stacks[i].size > 0) {
            var iter = this.stacks[i].values();
            return iter.next().value;
        }
    }
    return null;
};
/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = Object.create(AllOne).createNew()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
