/*
Given a nested list of integers, return the sum of all integers in the list weighted by their depth.
Each element is either an integer, or a list -- whose elements may also be integers or other lists.
Different from the previous question where weight is increasing from root to leaf, now the weight is defined from bottom up. 
i.e., the leaf level integers have weight 1, and the root level integers have the largest weight.
Example 1:
Given the list [[1,1],2,[1,1]], return 8. (four 1's at depth 1, one 2 at depth 2)
Example 2:
Given the list [1,[4,[6]]], return 17. (one 1 at depth 3, one 4 at depth 2, and one 6 at depth 1; 1*3 + 4*2 + 6*1 = 17)
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
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
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
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function(nestedList) {
    var map = {}, maxDepth = [0], sum=0;
    dfs(1, nestedList, map, maxDepth);
    for(var key in map) {
        sum += (+maxDepth[0] - key+1) * + getSum(map[key]);
    }
    return sum;
};

var dfs = function(depth, nestedList, map, maxDepth) {
    for(var list of nestedList) {
        if(list.isInteger()) {
            maxDepth[0] = Math.max(maxDepth[0], depth);
            if(!map[depth])  map[depth] = [];
            map[depth].push(list.getInteger());
        } else {
            dfs(depth+1, list.getList(), map, maxDepth);
        }
    }
};

var getSum = function(arr) {
    return arr.reduce((total, item) => {
        return total + item;
    }, 0);
};
