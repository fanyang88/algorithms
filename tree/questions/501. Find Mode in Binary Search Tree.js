/*
Given a binary search tree (BST) with duplicates, find all the mode(s) 
(the most frequently occurred element) in the given BST.
Assume a BST is defined as follows:
The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
For example:  Given BST [1,null,2,2],
   1
    \
     2
    /
   2
return [2].
Note: If a tree has more than one mode, you can return them in any order.
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
var findMode = function(root) {
    var maxCount = [0], map = {}, res= [];
    inorder(root, map, maxCount);
    for(var key in map) {
        if(map[key] === maxCount[0])
            res.push(+key);
    }
    return res;
};

var inorder = function(node, map, maxCount) {
    if(!node)  return;
    inorder(node.left, map, maxCount);
    map[node.val] = map[node.val]? map[node.val]+1 :1;
    maxCount[0] = Math.max(maxCount[0], map[node.val]);
    inorder(node.right, map, maxCount);
};
