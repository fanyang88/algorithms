/*
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), 
write a function to check whether these edges make up a valid tree.
For example:
Given n = 5 and edges = [[0, 1], [0, 2], [0, 3], [1, 4]], return true.
Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]], return false.
Note: you can assume that no duplicate edges will appear in edges. 
Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
*/


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 use union find
 [1, 2], [2, 3], [1, 3]
 1 has root 2, 2 has root 3,(1's root is 3 as well) 1 has root 3, if edge[1] === root already, return false, it is a graph
 */
var validTree = function(n, edges) {
    // if the edge number not equal to n-1, it is defined not a tree or graph
    if(edges.length !== n-1) return false;
    var roots = [];
    for(var i=0; i<n; i++) {
        roots[i] = i;
    }
    for(var edge of edges) {
        var superRoot0 = findRoot(edge[0], roots);
        var superRoot1 = findRoot(edge[1], roots);
        if(superRoot0 === superRoot1) {
            return false;
        }
        roots[superRoot0] = superRoot1; // the key
    }
    return true;
};

var findRoot = function(val, roots) {
    if(val === roots[val]) {
        return val;
    }
     return findRoot(roots[val], roots);
}
