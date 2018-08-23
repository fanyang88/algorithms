/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[  [3],
  [9,20],
  [15,7] ]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 bfs
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var st = [], res= [], arr, len, node;
    if(!root)  return [];
    st.push(root);
    
    while(st.length > 0) {
        len = st.length;
        arr = [];
        while(len > 0) {
            node = st.shift();  // this is the key
            arr.push(node.val);
            if(node.left) st.push(node.left);
            if(node.right) st.push(node.right);
            len --;
        }
        res.push(arr.slice(0));
    }
    return res;
};
