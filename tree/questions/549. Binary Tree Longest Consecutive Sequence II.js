/*
Given a binary tree, you need to find the length of Longest Consecutive Path in Binary Tree.
Especially, this path can be either increasing or decreasing. For example, [1,2,3,4] and [4,3,2,1] are both considered valid, but the path [1,2,4,3] is not valid. On the other hand, the path can be in the child-Parent-child order, 
where not necessarily be parent-child order.
Example 1:
Input:
        1
       / \
      2   3
Output: 2
Explanation: The longest consecutive path is [1, 2] or [2, 1].
Example 2:
Input:
        2
       / \
      1   3
Output: 3
Explanation: The longest consecutive path is [1, 2, 3] or [3, 2, 1].
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 similar to 687, but we need to recording the decreasing and increasing pathes seperately.
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var longestConsecutive = function(root) {
    var res = [0];
    _maxIncreasingAndDescreasingPath(root, res);
    return res[0];
};

// we need to get the max increasing and descresaing path for each node.
var _maxIncreasingAndDescreasingPath = function(root, res) {
    if(!root)  return [0,0];
    var left = _maxIncreasingAndDescreasingPath(root.left, res);  // left include inc and dec
    var right = _maxIncreasingAndDescreasingPath(root.right, res);
    
    var decreasing=1, increasing=1;
    // if it is     2<-3<-4(root)->3  we should get the max increasing, same for decreasing.
    if(root.left) {
        if(root.val === root.left.val +1)  decreasing = left[1] +1;
        if(root.val === root.left.val -1)  increasing = left[0] +1;
    }
     if(root.right) {
        if(root.val === root.right.val +1)  
            decreasing = Math.max(decreasing, right[1] +1);
        if(root.val === root.right.val -1)  
            increasing = Math.max(increasing, right[0] +1);
    }
    // if the left increasing is 2->3 right decreasing is 1->2, path =2+2-1 = 3
    res[0] = Math.max(increasing + decreasing -1, res[0]);
   
    return [increasing, decreasing];
};