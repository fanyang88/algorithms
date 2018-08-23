/*
Given a binary tree, return all duplicate subtrees. For each kind of duplicate subtrees, you only need to return the root node of any one of them.
Two trees are duplicate if they have the same structure with same node values.

Example 1: 
        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
The following are two duplicate subtrees:
      2
     /
    4
and
    4
Therefore, you need to return above trees' root in the form of a list.
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
 * @return {TreeNode[]}
 similar to serialize binary tree, we get each serialized string for each subtree, and store in hashmap, if this same string get found twice, we return its root, means this is a duplicate subtree.
 */
var findDuplicateSubtrees = function(root) {
    var res= [], map= {};
    _serialize(root, map, res);
    return res;
};

var _serialize = function(root, map, res) {
    if(!root) {
        return '#';
    }
    var key = ''+ root.val + ',' + 
        _serialize(root.left, map, res) + ',' +
        _serialize(root.right, map, res);
    
    map[key] = map[key] ? map[key]+1 : 1;
    if(map[key] == 2)  res.push(root);
    
    return key;
};