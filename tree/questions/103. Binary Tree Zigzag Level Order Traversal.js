/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * similar to level traverse, but use a flag to indicate to reverse array or not.
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    
    var st = [], result =[], tmp = [], flag= false;
    if(!root)  return [];
    
    st.push(root);
    while(st.length>0) {
        var size = st.length;
        while(size>0) {
            var node = st.shift();
            size--;
            if(node && node.left) st.push(node.left);
            if(node && node.right) st.push(node.right);
            tmp.push(node.val); 
        }
        // Store node into result
        if(flag) {
            // Reverse tmp
            tmp = tmp.reverse();
        }
        result.push(tmp);
        tmp = [];
        flag = (flag === true ? false : true);
    }
    return result;
};
