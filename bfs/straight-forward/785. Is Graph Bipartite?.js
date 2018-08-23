/*
Given an undirected graph, return true if and only if it is bipartite.
Recall that a graph is bipartite if we can split it's set of nodes into two independent subsets 
A and B such that every edge in the graph has one node in A and another node in B.
The graph is given in the following form: graph[i] is a list of indexes j for which the edge 
between nodes i and j exists.  
Each node is an integer between 0 and graph.length - 1.  
There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.
Example 1:   Input: [[1,3], [0,2], [1,3], [0,2]]
Output: true
Explanation:  The graph looks like this:
0----1
|    |
|    |
3----2
We can divide the vertices into two groups: {0, 2} and {1, 3}.
Example 2:  Input: [[1,2,3], [0,2], [0,1,3], [0,2]]
Output: false
Explanation:  The graph looks like this:
0----1
| \  |
|  \ |
3----2
We cannot find a way to divide the set of nodes into two independent subsets.
*/

/**
 * @param {number[][]} graph
 * @return {boolean}
 we use color method, for example 1: 0 => [1, 3] we color 0 to 'B', 1, 3 color to 'R', 1 => [0, 2] 
 since 0 is diff with 2, np, 2 color to be 'B', 2 => [1, 3], 1,3, are diff with 2 ... return true, no two adjecent node has same color
 but if we check exmaple 2: 0 => [1,2,3] 0 to be 'B', 1,2,3 to be 'R', 1=> [0,2] since 1 is same with 2 return false.
 use BFS
 */
var isBipartite = function(graph) {
    var color = {},  map = {}, st=[]; 
    for(var i=0; i<graph.length; i++) {
        if(graph[i].length === 0 || color[i] !== undefined)  continue;
        color[i] = 2;
        st.push(i);
        while(st.length > 0) {
            var cur = st.shift();
            for(var next of graph[cur]) {
                if(color[next] !== undefined && color[next] === color[cur])  return false;
                if(color[next] === undefined) {
                    color[next] = -color[cur];
                    st.push(next);
                }
            }
        }
    }
    return true;
};
