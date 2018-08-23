/*
Given a Binary Search Tree (BST) with root node root, and a target value V, 
split the tree into two subtrees where one subtree has nodes that are all smaller or equal to the target value, 
while the other subtree has all nodes that are greater than the target value.  
It's not necessarily the case that the tree contains a node with value V.
Additionally, most of the structure of the original tree should remain.  
Formally, for any child C with parent P in the original tree, if they are both in the same subtree after the split, 
then node C should still have the parent P.
You should output the root TreeNode of both subtrees after splitting, in any order.
Example 1:
Input: root = [4,2,6,1,3,5,7], V = 2
Output: [[2,1],[4,3,6,null,null,5,7]]
Explanation:
Note that root, output[0], and output[1] are TreeNode objects, not arrays.
The given tree [4,2,6,1,3,5,7] is represented by the following diagram:
          4
        /   \
      2      6
     / \    / \
    1   3  5   7
while the diagrams for the outputs are:
          4
        /   \
      3      6      and    2
            / \           /
           5   7         1
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
 * @param {number} V
 * @return {TreeNode[]}
 */
var splitBST = function(root, V) {
    if(!root || root.val === V ) return [root, []];
    // find target first, once found, replce target.right to be target position, target + its left branch to be subtree
    return [dfs(root, V) || [], root];
    
};

var dfs = function(root, V) {
    var subRoot = null;
    if(root) {
        if(root.left && root.left.val === V) {
            subRoot= root.left;
            root.left = root.left.right;
            subRoot.right = null;
            return subRoot;
        }
        if(root.right && root.right.val === V) {
            subRoot = root.right;
            root.right = root.right.right;
            subRoot.right = null;
            return subRoot;
        } 
    
        return dfs(root.left, V);
        return dfs(root.right, V);
    }
};
