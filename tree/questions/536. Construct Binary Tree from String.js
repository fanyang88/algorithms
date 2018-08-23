/*
You need to construct a binary tree from a string consisting of parenthesis and integers.
The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. 
The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
You always start to construct the left child node of the parent first if it exists.
Example:
Input: "4(2(3)(1))(6(5))"
Output: return the tree root node representing the following tree:
       4
     /   \
    2     6
   / \   / 
  3   1 5   
Note:
There will only be '(', ')', '-' and '0' ~ '9' in the input string.
An empty tree is represented by "" instead of "()".
*/

// use start[i] instead of i, since passing array can make the value stay there.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */

var str2tree = function(s) {
    if(s === '')  return null;
    var start = [0];
    return dfs(s, start);
};

var dfs = function(s, start) {
    var str = '';
    // get the number
    while(start[0] < s.length && (s[start[0]] <= '9' && s[start[0]] >= '0' || s[start[0]] === '-')) {
        str += s[start[0]++];
    }
    var root = new TreeNode(+str);
    if(s[start[0]] === '(') {
        start[0]++;    // go to next val
        root.left = dfs(s, start);
        start[0]++;    // pass right bracket ')'
    }
    if(s[start[0]] === '(') {
        start[0]++;
        root.right = dfs(s, start);
        start[0]++;
    }
    return root;
}
