
/*
We are given a binary tree (with root node root), a target node, and an integer value K.

Return a list of the values of all nodes that have a distance K from the target node.  The answer can be returned in any order.

 

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, K = 2

Output: [7,4,1]

Explanation: 
The nodes that are a distance 2 from the target node (with value 5)
have values 7, 4, and 1.



Note that the inputs "root" and "target" are actually TreeNodes.
The descriptions of the inputs above are just serializations of these objects.
 

Note:

The given tree is non-empty.
Each node in the tree has unique values 0 <= node.val <= 500.
The target node is a node in the tree.
0 <= K <= 1000.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 
 //Method 1: use HashMap
//1. build a undirected graph using treenodes as vertices, and the parent-child relation as edges
//2. do BFS with source vertice (target) to find all vertices with distance K to it.

 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    if(K===0)  return [target.val];
    var map = new Map(), visited = new Set(), res= [], st= [target];
    build(root, null, map);
    if(!map.get(target))  return [];
    
    visited.add(target);
    while(st.length > 0) {
        var size = st.length;
        while(size --) {
            var cur = st.shift();
            for(var next of map.get(cur)) {
                if(visited.has(next))  continue;
                st.push(next);
                visited.add(next);
            }
        }
        K--;
        if(K===0) {
            for(var item of st) res.push(item.val);
        }
    }
    return res;
};

var build = function(node, parent, map){
    if(!node)  return;
    if(parent) {
        if(!map.get(node)) map.set(node, []);
        map.get(node).push(parent);
       if(!map.get(parent)) map.set(parent, []);
        map.get(parent).push(node);
    }
    build(node.left, node, map);
    build(node.right, node, map);
};