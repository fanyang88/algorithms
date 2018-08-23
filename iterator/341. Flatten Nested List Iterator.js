/*
Given a nested list of integers, implement an iterator to flatten it.
Each element is either an integer, or a list -- whose elements may also be integers or other lists.
Example 1:
Given the list [[1,1],2,[1,1]],
By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].
Example 2:
Given the list [1,[4,[6]]],
By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].
*/

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
    we need a stack to do this: e.g: [[[1, [2, 3]]], [4, 5]]
    st = [4, 5], [[1, [2, 3]]]
    to call getNext, check if top of st is interger or not, 
    if not pop(st), we get cur = [[1, [2, 3]]] we need to iterative cur, st.push([1, [2, 3]])
    st =  [4, 5], [1, [2, 3]]
    since st not empty
    pop(st), we get cur = [1, [2, 3]] we need to iterative cur, st.push([2, 3], 1)
    st =  [4, 5], [2, 3], 1]
    st not empty, call st again, this time the top is an integer, return true;
    
 
 */
var NestedIterator = function(nestedList) {
    this.stack = [];
    for(var i=nestedList.length-1; i>=0; i--) {
        this.stack.push(nestedList[i]);
    }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    while(this.stack.length > 0) {
       if(this.stack[this.stack.length-1]._integer !== null) {
            return true;
        }
        var top = this.stack[this.stack.length-1];
        this.stack.pop();
        for(var i=top._list.length-1; i>=0; i--) {
             this.stack.push(top._list[i]);
        }
    }
    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.stack.pop();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
