/*
Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The binary tree has the same structure as a full binary tree, but some nodes are null.

The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, 
where the null nodes between the end-nodes are also counted into the length calculation.
Example 1:
Input:     1
         /   \
        3     2
       / \     \  
      5   3     9 

Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
Example 2:
Input:    1
         /  
        3    
       / \       
      5   3     

Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).
Example 3:
Input:    1
         / \
        3   2 
       /        
      5      

Output: 2
Explanation: The maximum width existing in the second level with the length 2 (3,2).
Example 4:
Input:    1
         / \
        3   2
       /     \  
      5       9 
     /         \
    6           7
Output: 8
Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 bfs, store the indexes instead of actual node val
 
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    var st = [], stNode = [], node, maxLen=1, width, arr, ind;
    st.push(1);
    stNode.push(root);
    while(st.length > 0) {
        var len= st.length;
        arr = [];
        while(len > 0) {
            ind = st.shift();
            arr.push(ind);
            node = stNode.shift();
            if(node.left) {
                stNode.push(node.left);
                st.push(ind*2);
            }
            if(node.right) {
                stNode.push(node.right);
                st.push(ind*2+1);
            }
            len--;
        }
        width = (arr[arr.length-1] === arr[0]) ? 1 : (arr[arr.length-1] - arr[0]+1);
        maxLen = Math.max(maxLen, width);
    }
    return maxLen;
};
