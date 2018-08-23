/*
Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.
Example:Given binary tree 
          1
         / \
        2   3
       / \     
      4   5    
Returns [4, 5, 3], [2], [1].
Explanation:
1. Removing the leaves [4, 5, 3] would result in this tree:
          1
         / 
        2          
2. Now removing the leaf [2] would result in this tree:
          1          
3. Now removing the leaf [1] would result in the empty tree:
          []         
Returns [4, 5, 3], [2], [1].
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 in below example. 4, 5, 3 has height 1, 2 has height 2, 1 has height 3, so we just need to get the height of each node and group them to get the output.
          1
         / \
        2   3
       / \     
      4   5   
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var findLeaves = function(root) {
    var res= [];
    getHeight(root, res);
    res.shift();// the first one is empty, remove the first one
    return res;
};

var getHeight = function(node, res) {
    if(!node)  return 0;
    var level = 1+ Math.max(getHeight(node.left, res), getHeight(node.right, res));
    if(!res[level]) {
        res[level] = [];
    }
    res[level].push(node.val);
    return level;
};
