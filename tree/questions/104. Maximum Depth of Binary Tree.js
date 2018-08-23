/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null) return 0;
    var count = 0;
    return Depth(root, count);
};

var Depth = function(node, count) {
    if(node === null) {
       return count;
    }
    if(node !== null && node.left === null && node.right === null ) {
        return count+1;
    }
    var left = Depth(node.left, count);
    var right =Depth(node.right, count);
    return Math.max(left, right) +1; 
};


// update
var maxDepth = function(root) {
    if(!root) return 0;
    if(!root.left) return 1+maxDepth(root.right);
    if(!root.right) return 1+maxDepth(root.left);
    return 1+Math.max(maxDepth(root.left), maxDepth(root.right));
};
