/*
Design and implement a TwoSum class. It should support the following operations: add and find.

add - Add the number to an internal data structure.
find - Find if there exists any pair of numbers which sum is equal to the value.

Example 1:

add(1); add(3); add(5);
find(4) -> true
find(7) -> false
Example 2:

add(3); add(1); add(2);
find(3) -> true
find(6) -> false
*/

/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.map = {};
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.map[number] = this.map[number] ? this.map[number]+1 : 1;
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    
    for(var key in this.map) {
        var key2 = value - key;
        if(this.map[key2]) {
	        if(key != key2 || this.map[key2] >= 2)  
                return true;
	    }
    }
    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = Object.create(TwoSum).createNew()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */