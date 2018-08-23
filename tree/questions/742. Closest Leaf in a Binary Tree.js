/*
Given a binary tree where every node has a unique value, and a target key k, 
find the value of the nearest leaf node to target k in the tree.
Here, nearest to a leaf means the least number of edges travelled on the binary tree to reach any leaf of the tree.
Also, a node is called a leaf if it has no children.
In the following examples, the input tree is represented in flattened form row by row. 
The actual root tree given will be a TreeNode object.
Example 1:
Input:
root = [1, 3, 2], k = 1
Diagram of binary tree:
          1
         / \
        3   2
Output: 2 (or 3)

Explanation: Either 2 or 3 is the nearest leaf node to the target of 1.
Example 2:
Input:
root = [1], k = 1
Output: 1

Explanation: The nearest leaf node is the root node itself.
Example 3:
Input:
root = [1,2,3,4,null,null,null,5,null,6], k = 2
Diagram of binary tree:
             1
            / \
           2   3
          /
         4
        /
       5
      /
     6
Output: 3
Explanation: The leaf node with value 3 (and not the leaf node with value 6) is nearest to the node with value 2.
root represents a binary tree with at least 1 node and at most 1000 nodes.
Every node has a unique node.val in range [1, 1000].
There exists some node in the given binary tree for which node.val == k.
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
 * @param {number} k
 * @return {number}
 use example 3: construct a map:{ 1: [2, 3], 2: [1, 4], 3: [1], 4: [2, 5], 5: [4, 6], 6: [5]}
# leaves: {3, 6}
 then perform BFS, for target 2, push [1, 4], no leave, pop 1, insert [3], 3 is a leave, return 3.
 */
var findClosestLeaf = function(root, k) {
    var map = {}, set = new Set(), nodeVal, len, val;
    map = dfs(root, null, {}, set);
    
    // If itself is a leaf, directly return.
    if(set.has(k))  return k;
    var st = map[k];
    var visited = {};

    // Use BFS to find the nearest leaf;
    while(st.length > 0) {
        len = st.length;
        while(len > 0) {
            len--;
            nodeVal = st.shift();
            if(set.has(nodeVal))  return nodeVal;
            else {
                for(var i=0; i<map[nodeVal].length; i++) {
                    val = map[nodeVal][i];
                    if(!visited[val])   st.push(val);
                    visited[val] = true;
                }
            }
        }
    }
    return null;
};

var dfs = function(node, prev, map, set) {
    if(node) {
        if(!map[node.val]) {
            map[node.val] = [];
        }
        if(prev) map[node.val].push(prev.val);
        prev= node;
        if(!node.left && !node.right)  set.add(node.val);
        if(node.left) {
            map[node.val].push(node.left.val);
            dfs(node.left, prev, map, set);
        }
        if(node.right) {
            map[node.val].push(node.right.val);
            dfs(node.right, prev, map, set);
        }
    }
    return map;
};
