/*
Given the root of a tree, you are asked to find the most frequent subtree sum. 
The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). 
So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order.
Examples 1  Input:
  5
 /  \
2   -3
return [2, -3, 4], since all the values happen only once, return all of them in any order.
Examples 2  Input:
  5
 /  \
2   -5
return [2], since 2 happens twice, however -5 only occur once.
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    var maxCount = [0], res= [], map = {};
    getSum(root, map, maxCount);
    for(var key in map) {
        if(map[key] === maxCount[0])
            res.push(+key);
    }
    return res;
};

var getSum = function(node, map, maxCount) {
    if(!node)  return 0;
    let sum = node.val;
    sum+= getSum(node.left, map, maxCount);
    sum+= getSum(node.right, map, maxCount);
    map[sum] = map[sum]? map[sum]+1 : 1;
    maxCount[0] = Math.max(maxCount[0], map[sum]);
    return sum;
};
