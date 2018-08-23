/*
Given a binary tree, return all root-to-leaf paths.
For example, given the following binary tree:
   1
 /   \
2     3
 \
  5
All root-to-leaf paths are: ["1->2->5", "1->3"]
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var pathes = [];
    if(!root)  return pathes;
    
    var path = [];
    _binaryTreePaths(root, pathes, path);
    return pathes;
};

var _binaryTreePaths = function(node, pathes, path) {
    path.push(node.val);
    if(!node.left && !node.right) { // Reach to a leaf
        pathes.push(path.join('->'));
        path.pop();  // The Key!
        return;
    }
    if(node.left) _binaryTreePaths(node.left, pathes, path);
    if(node.right)  _binaryTreePaths(node.right, pathes, path);
    path.pop();   //The Key!
};


