/*
Implement an iterator to flatten a 2d vector.
For example,
Given 2d vector =
[  [1,2],
  [3],
  [4,5,6]]
By calling next repeatedly until hasNext returns false, the order of elements 
returned by next should be: [1,2,3,4,5,6].
*/

/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
var Vector2D = function(vec2d) {
    this.row = 0;
    this.index = 0;
    this.list = vec2d;
};

/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function() {
    while(this.row < this.list.length) {
        if(this.index < this.list[this.row].length) {
            return true;
        } else {
            // this row is ended
            this.row ++;
            this.index = 0;
        }
    }
    return false;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function() {
    return this.list[this.row][this.index++];
};

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
