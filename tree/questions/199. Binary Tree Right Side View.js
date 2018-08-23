/*
Given a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.
For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].
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
var rightSideView = function(root) {
    var res= [], st = [];
    if(!root)  return res;
    st.push(root);
    while(st.length > 0) {
        var len = st.length;
        res.push(st[st.length-1].val);
        while(len > 0) {
            var node = st.shift();
            if(node.left) st.push(node.left);
            if(node.right) st.push(node.right);
            len --;
        }
    }
    return res;
};
