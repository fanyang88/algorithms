/*

Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

Examples 1:

Input: [3,9,20,null,null,15,7]

   3
  /\
 /  \
 9  20
    /\
   /  \
  15   7 

Output:

[
  [9],
  [3,15],
  [20],
  [7]
]
Examples 2:

Input: [3,9,8,4,0,1,7]

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7 

Output:

[
  [4],
  [9],
  [3,0,1],
  [8],
  [7]
]
Examples 3:

Input: [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5)

     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7
    /\
   /  \
   5   2

Output:

[
  [4],
  [9,5],
  [3,0,1],
  [8,2],
  [7]
]
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
 * @return {number[][]}
 
 
     3
    /\
   /  \
   9   8
  /\  /\
 /  \/  \
 4  01   7 
-2 -1 0 1 2               bucket
 4 9  3 8 7
      0
      1
 3 belong to col 0
 we can use a map to store the bucket id, and put the related node into the right bucket
 level order traverse, first root goes to col 0   root.left goes to col-1 root.right goes to col+1
 get min, max on the fly
 */
var verticalOrder = function(root) {
    if(!root)  return [];
    var map = {}, res = [], min = 0, max = 0, st = [[root, 0]];
    while(st.length > 0) {
        var cur = st.shift();
        var node = cur[0];
        var col = cur[1];
        if(!map[col])  map[col] = [];
        map[col].push(node.val);
        if(node.left) {
            st.push([node.left, col-1]);
            min = Math.min(min, col-1);
        }
        if(node.right) {
            st.push([node.right, col+1]);
            max = Math.max(max, col+1);
        }
    }
    
    for(var i=min; i<=max; i++) {
        res.push(map[i]);
    }
    return res;
};
