/*
You need to find the largest value in each row of a binary tree.
Example:  1
         / \
        3   2
       / \   \  
      5   3   9 
Output: [1, 3, 9]
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
 * use level order traverse.
 */
var largestValues = function(root) {
    if(!root) return [];
    var st= [], res=[], len, max_V;
    st.push(root);
    while(st.length>0) {
        len = st.length;
        max_V = st[0].val;
        while(len>0) {
            len--;
            node= st.shift();
            if(node){
                if(node.left) {
                    st.push(node.left);
                }
                if(node.right) {
                    st.push(node.right);
                } 
                if(node.val > max_V) {
                    max_V  = node.val;
                } 
            }
        }
        // After traverse each level, max value stored in res
        res.push(max_V);
    }
    return res;
};
