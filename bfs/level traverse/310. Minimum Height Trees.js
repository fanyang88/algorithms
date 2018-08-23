/*
For a undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs). Given such a graph, write a function to find all the MHTs and return a list of their root labels.

Format
The graph contains n nodes which are labeled from 0 to n - 1. You will be given the number n and a list of undirected edges (each edge is a pair of labels).

You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

Example 1 :

Input: n = 4, edges = [[1, 0], [1, 2], [1, 3]]

        0
        |
        1
       / \
      2   3 

Output: [1]
Example 2 :

Input: n = 6, edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]

     0  1  2
      \ | /
        3
        |
        4
        |
        5 

Output: [3, 4]
*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 This is the process of remove leaves and add new leaves 
 till we only have less or equal to 2 nodes left
 e.g:  contruct a map: [[1, 0], [1, 2], [1, 3]]
 map: 0: [1]  1: [0, 2, 3] 2:[1]  3: [1]
 leaves = [0, 2, 3]
 pop 0: since map[0] = [1] map[1].remove(0)
 pop 2: since map[2] = [1] map[1].remove(2)  map[1]= [3] add in leave
 pop 3: since map[3] = [1] map[1].remove(3)  map[1] = []
 n-3 = 1 < 2 stop loop
 return leave is [1]
 */
var findMinHeightTrees = function(n, edges) {
    if(edges.length ===0)  return [0];
    var map = {}, leave = [];
    for(var edge of edges) {
        if(!map[edge[0]])  map[edge[0]] = new Set();
        map[edge[0]].add(edge[1]);
        if(!map[edge[1]])  map[edge[1]] = new Set();
        map[edge[1]].add(edge[0]);
    }
    for(var key in map) {
        if(map[key].size ===1)  leave.push(+key);
    }

    while(n > 2) {  // This is the key, until there is only less or equal to 2 nodes left, we stop
        n -= leave.length;
        var size = leave.length;
        while(size > 0) {
            size--;
            var node = leave.shift();
            for(var neighbor of map[node]) {
                map[neighbor].delete(node);
                if(map[neighbor].size ===1) {  // it becomes a leave
                    leave.push(+neighbor);
                }
            }
        }
    }
    return leave;
};
