/*
Print a binary tree in an m*n 2D string array following these rules:

The row number m should be equal to the height of the given binary tree.
The column number n should always be an odd number.
The root node's value (in string format) should be put in the exactly middle of the first row it can be put. The column and the row where the root node belongs will separate the rest space into two parts (left-bottom part and right-bottom part). You should print the left subtree in the left-bottom part and print the right subtree in the right-bottom part. The left-bottom part and the right-bottom part should have the same size. Even if one subtree is none while the other is not, you don't need to print anything for the none subtree but still need to leave the space as large as that for the other subtree. However, if two subtrees are none, then you don't need to leave space for both of them.
Each unused space should contain an empty string "".
Print the subtrees following the same rules.
Example 1:
Input:
     1
    /
   2
Output:
[["", "1", ""],
 ["2", "", ""]]
Example 2:
Input:
     1
    / \
   2   3
    \
     4
Output:
[["", "", "", "1", "", "", ""],
 ["", "2", "", "", "", "3", ""],
 ["", "", "4", "", "", "", ""]]
Example 3:
Input:
      1
     / \
    2   5
   / 
  3 
 / 
4 
Output:

[["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
 ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
 ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
 ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]
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
 * @return {string[][]}
 */
var printTree = function(root) {
    // get max depth first
    var row = getMaxDepth(root);
    var col = (1 << row) -1;
    var res = new Array(row);
    // Construct the answer 2D array first.
    for(var i=0; i<row; i++) {
        res[i] = new Array(col).fill("");
    }
    // recusively fill the root value into the array.
    fill(root, res, 0, 0, col-1);
    return res;
};

var fill = function(root, res, depth, left, right) {
    if(!root)  return;
    // root fill in the middle of the array, then we divide the array to two parts and fill the left and right node into it recursively.
    var mid = ~~((left + right) / 2);
    res[depth][mid] = ''+root.val;
    fill(root.left, res, depth+1, left, mid-1);
    fill(root.right, res, depth+1, mid+1, right);
};


var getMaxDepth = function(root) {
    if(!root)  return 0;
    return 1+ Math.max(getMaxDepth(root.left), getMaxDepth(root.right));
};