/*
Given a binary tree with n nodes, your task is to check if it's possible to partition the tree to two trees 
which have the equal sum of values after removing exactly one edge on the original tree.
Example 1:
Input:     
    5
   / \
  10 10
    /  \
   2   3

Output: True
Explanation: 
    5
   / 
  10
Sum: 15

   10
  /  \
 2    3
Sum: 15
Example 2:
Input:     
    1
   / \
  2  10
    /  \
   2   20
Output: False
Explanation: You can't split the tree into two trees with equal sum after removing exactly one edge on the tree.
Note:
The range of tree node value is in the range of [-100000, 100000].
1 <= n <= 10000
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 get the sum of each nodes and store in hashmap, get the total sum of the whole tree, check if there is a sum/2 in hashmap, if there is, return true, else return false; 
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkEqualTree = function(root) {
    var map = {};
    var totalSum = getSum(root, map);
    if(totalSum === 0) { // check special case: [0, -1, 1]
        return map[totalSum] > 1;
    }
    return totalSum %2 === 0 && map[totalSum/2] > 0; //map[totalSum/2];
};

var getSum = function(root, map) {
    if(!root)  return 0;
        var sum = root.val + getSum(root.left, map) + getSum(root.right, map);
        map[sum] = map[sum] ? map[sum]+1 : 1;
        return sum;
}
