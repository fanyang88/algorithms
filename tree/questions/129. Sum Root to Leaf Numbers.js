/*
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
An example is the root-to-leaf path 1->2->3 which represents the number 123.
Find the total sum of all root-to-leaf numbers.
For example,
    1
   / \
  2   3
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Return the sum = 12 + 13 = 25.
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
 */
var sumNumbers = function(root) {
    if(!root)  return 0;
    var arr = [''+root.val];
    var sum = [0];
    dfs(root, arr, sum);
    return sum[0];
};

var dfs = function(node, arr, sum) {
    if(!node.left && !node.right) {
        sum[0] += parseInt(arr.join(''));
        return;
    }
    if(node.left) {
        arr.push(node.left.val);
        dfs(node.left, arr, sum);
        arr.pop();
    }
     if(node.right) {
         arr.push(node.right.val);
         dfs(node.right, arr, sum);
         arr.pop();
     }
}

