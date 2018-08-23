/*
Given a binary tree, return the postorder traversal of its nodes' values.
For example: Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [3,2,1].
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
var postorderTraversal = function(root) {
    var res= [];
    if(!root) return res;
    helper(root);
    return res;
    
    function helper(node) {
        if(!node) return;
        helper(node.left);
        helper(node.right);
        res.push(node.val);
    }
};

// iteratively
var postorderTraversal = function(root) {
    if(!root)  return [];
    var st = [root], res= [];
    while(st.length > 0) {
        var cur = st.pop();
        res.push(cur.val);
        if(cur.left)  st.push(cur.left);
        if(cur.right)  st.push(cur.right); 
    }
    return res.reverse(); 
};

