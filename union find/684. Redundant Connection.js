/*
In this problem, a tree is an undirected graph that is connected and has no cycles.
The given input is a graph that started as a tree with N nodes (with distinct values 1, 2, ..., N), with one additional edge added. The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.
The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [u, v] with u < v, that represents an undirected edge connecting nodes u and v.
Return an edge that can be removed so that the resulting graph is a tree of N nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array. The answer edge [u, v] should be in the same format, with u < v.
Example 1:
Input: [[1,2], [1,3], [2,3]]
Output: [2,3]
Explanation: The given undirected graph will be like this:
  1
 / \
2 - 3
Example 2:
Input: [[1,2], [2,3], [3,4], [1,4], [1,5]]
Output: [1,4]
Explanation: The given undirected graph will be like this:
5 - 1 - 2
    |   |
    4 - 3
*/
var findRedundantConnection = function(edges) {
    var root = [], result=[];
   
    for(i=1; i<edges.length; i++) {
        root[i] = i;
    }
    
    edges.forEach(edge => {
        if(isConnected(root, edge)) {
            result = edge;
        } else {
            var root0 = find(root, edge[0]);
            var root1 = find(root, edge[1]);
            root[root0] = root1;
        }
    });
    return result;
};

var isConnected = function(root, edge) {
    var root0 = find(root, edge[0]);
    var root1 = find(root, edge[1]);
    return root0 === root1;
};

var find = function(root, node) {
    if(root[node] === node)  return node;
    return find(root, root[node]);
}
