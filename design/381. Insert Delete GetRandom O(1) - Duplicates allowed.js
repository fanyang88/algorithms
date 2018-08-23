/*
Design a data structure that supports all following operations 
in average O(1) time.

Note: Duplicate elements are allowed.
insert(val): Inserts an item val to the collection.
remove(val): Removes an item val from the collection if present.
getRandom: Returns a random element from current collection of elements. The probability of each element being returned is linearly related to the number of same value the collection contains.
Example:

// Init an empty collection.
RandomizedCollection collection = new RandomizedCollection();

// Inserts 1 to the collection. Returns true as the collection did not contain 1.
collection.insert(1);

// Inserts another 1 to the collection. Returns false as the collection contained 1. Collection now contains [1,1].
collection.insert(1);

// Inserts 2 to the collection, returns true. Collection now contains [1,1,2].
collection.insert(2);

// getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.
collection.getRandom();

// Removes 1 from the collection, returns true. Collection now contains [1,2].
collection.remove(1);

// getRandom should return 1 and 2 both equally likely.
collection.getRandom();
*/

/**
 * Initialize your data structure here.
 use a map each key is the acutal value and the value is an array of indices
 we also need a queue with each element is the [val, index]
 
 for insertion, we need to check if map[val] exist or not, if exist, add the new index into its array
                also push [val, index] into the queue
 for deletion, we pop the first index from the related array in the map, 
               found out the last element in the queue, since it is the last element, 
               we can directly pop out its last index from the array in map
               we push the tobe removed index into its map array
               then aslo need to update the q
               
e.g: 
Q: [1,0] [2,1],[2,2] [1,3]
map: 1:[0,3]  2:[1,2]
to remove value 2
ind1 = 2 from [1,2]->2
ind2 = 3 from [0,3]->1
update map: 
2->[1]  1->[0,2]
update queue:
Q[2] = [1,2], Q.pop()

 */
var RandomizedCollection = function() {
    this.Q = [];
    this.map = {};
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    var flag = false;
    if(!this.map[val]) {
        this.map[val] = new Set();
        flag  =true;
    }
    this.map[val].add(this.Q.length);
    this.Q.push(val);
    return flag;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    if(!this.map[val] || this.map[val].size ===0) return false;
    var it = this.map[val].values();
    var index = it.next().value;
    this.map[val].delete(index);
    
    if(index < this.Q.length-1) {
        var lastE = this.Q[this.Q.length-1];
        this.map[lastE].delete(this.Q.length-1);
        this.map[lastE].add(index);
        this.Q[index] = lastE;
    }
    this.Q.pop();
    return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    var rand = parseInt(Math.random() * (this.Q.length));
    return this.Q[rand];
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = Object.create(RandomizedCollection).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */