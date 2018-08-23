/*
The thief has found himself a new place for his thievery again. There is only one entrance to this area, 
called the "root." Besides the root, each house has one and only one parent house. After a tour, 
the smart thief realized that "all houses in this place forms a binary tree". 
It will automatically contact the police if two directly-linked houses were broken into on the same night.
Determine the maximum amount of money the thief can rob tonight without alerting the police.
Example 1:
     3
    / \
   2   3
    \   \ 
     3   1
Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:
     3
    / \
   4   5
  / \   \ 
 1   3   1
Maximum amount of money the thief can rob = 4 + 5 = 9.
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
 * @return {number}
 
  since for each root, the maxV on this root either equals the root + root.left.left + root.left.right + root.right.left+ ....
  or the root.left+root.right+root.left.left.left + ...
  
 */
var rob = function(root) {
    var map = new Map();  // don't use object, it won't persist data, use real map.
    return robSub(root, map);
};

var robSub = function(root, map) {  // we define dfs to be the max val we get from this node
    if (!root) return 0;
    if (map.get(root)) return map.get(root);
    let val = 0;
    if (root.left) {
        val += robSub(root.left.left, map) + robSub(root.left.right, map);
    }
    if (root.right) {
        val += robSub(root.right.left, map) + robSub(root.right.right, map);
    }
    val = Math.max(val + root.val, robSub(root.left, map) + robSub(root.right, map));
    map.set(root, val);
    return val;
}
