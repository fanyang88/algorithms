/*
Given a Binary Search Tree and a target number, 
return true if there exist two elements in the BST such that their sum is equal to the given target.
Example 1:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7
Target = 9
Output: True
Example 2:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28
Output: False
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
 * @param {number} k
 * @return {boolean}
 
 preorder traverse to get the array, then find the target in the arr.
 */

var findTarget = function(root, k) {
    
    let arr = helper(root, []);
    let i=0, j=arr.length-1, sum;
    while(i<j) {
        sum = arr[i] + arr[j];
        if(sum < k) {
            i++;
        } else if(sum > k) {
            j--;
        } else {
            return true;
        }
    }
    return false;
};

var helper = function(node, arr) {
    if(node) {
        helper(node.left, arr);
        arr.push(node.val);
        helper(node.right, arr);
        return arr;
    }
    
};

// Another way
var findTarget = function(root, k) {
    // use any way of traverse
    var map = {};
    return dfs(root, k, map);
};

var dfs = function(root, k, map) {
    if(!root)  return false;
    if(dfs(root.left, k, map))  return true;
    if(map[k - root.val] === 1) return true;
    map[root.val] =1;
    if(dfs(root.right, k, map))  return true;
    return false;
};
