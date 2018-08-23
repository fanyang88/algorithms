/*
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), 
write a function to find the number of connected components in an undirected graph.
Example 1:
     0          3
     |          |
     1 --- 2    4
Given n = 5 and edges = [[0, 1], [1, 2], [3, 4]], return 2.
Example 2:
     0           4
     |           |
     1 --- 2 --- 3
Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]], return 1.
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 use union find
 */
var countComponents = function(n, edges) {
    var root = [], set= new Set(), superroot0, superroot1;
    for(var i = 0; i<n; i++) {
        root[i] = i;
    }
    for(var edge of edges) {
        superroot0 = findRoot(edge[0], root);
        superroot1 = findRoot(edge[1], root);
        root[superroot0] = superroot1;
    }
    for(var i = 0; i<n; i++) {
        root[i] = findRoot(i, root);
        set.add(root[i]);
    }
    return set.size;
};

var findRoot = function(val, root) {
    if(root[val] === val) return val;
    return findRoot(root[val], root);
};
