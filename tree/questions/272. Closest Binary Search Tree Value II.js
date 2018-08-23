/*
Given a non-empty binary search tree and a target value, find k values in the BST that are closest to the target.
Note:
Given target value is a floating point.
You may assume k is always valid, that is: k ≤ total nodes.
You are guaranteed to have only one unique set of k values in the BST that are closest to the target.
Follow up: Assume that the BST is balanced, could you solve it in less than O(n) runtime (where n = total nodes)?
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
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 
 use two stack to store the value bigger then target and values smaller than target, then we pick values from these two stacks
 */
var closestKValues = function(root, target, k) {
    var s1 = [], s2= [], res= [], i=0;
    getLargers(root, target, s1);
    getSmallers(root, target, s2);
    while(i<k && (s1.length > 0 || s2.length > 0)){
        if(s1.length ===0) {
            res.push(s2.pop());
        } else if(s2.length ===0) {
            res.push(s1.pop());
        }else {
            if(Math.abs(s1[s1.length-1] - target) < Math.abs(s2[s2.length-1] - target)) {
                res.push(s1.pop());
            } else {
                res.push(s2.pop());
            }
        } 
        i++;
    }
    return res;
};

var getLargers = function(root, target, s1) {
    if(!root)  return;
    getLargers(root.right, target, s1);
    if(root.val <= target) return;
    s1.push(root.val);
    getLargers(root.left, target, s1);
};

var getSmallers = function(root, target, s2) {
    if(!root)  return;
    getSmallers(root.left, target, s2);
    if(root.val > target) return;
    s2.push(root.val);
    getSmallers(root.right, target, s2);
};