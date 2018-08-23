/*
In a directed graph, we start at some node and every turn, walk along a directed edge of the graph.  
If we reach a node that is terminal (that is, it has no outgoing directed edges), we stop.

Now, say our starting node is eventually safe if and only if we must eventually walk to a terminal node.  
More specifically, there exists a natural number K so that for any choice of where to walk, 
we must have stopped at a terminal node in less than K steps.
Which nodes are eventually safe?  Return them as an array in sorted order.

The directed graph has N nodes with labels 0, 1, ..., N-1, where N is the length of graph.  
The graph is given in the following form: graph[i] is a list of labels j such that (i, j) 
is a directed edge of the graph.

Example:
Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
Output: [2,4,5,6]
Here is a diagram of the above graph.
*/

/**
 * @param {number[][]} graph
 * @return {number[]}
 check pic
 to solve it we need to find all nodes that each node is not in a cycle or a cycle detached to it.
 for example: 0->1->2                   
                  <-
 make 0 to be unsafe first, find its neighbor 1, make it to be unsafe and find its neighnbor 2, mark it unsafe and find its neigvor 1 again which already is 2, means it is unsafe, there is a cycle, so return false, means 0 has cycle.
 we use three states to denotes: 
 0: unvisited
 1: visited and unsafe
 2: visted and safe
 
 */
var eventualSafeNodes = function(graph) {
    var res = [], state = new Array(graph.length).fill(0);
    for(var i=0; i<graph.length; i++) {
        if(dfs(i, state, graph))  res.push(i);
    }
    return res;
};

var dfs = function(i, state, graph) {
    if(state[i] !== 0) // already visited
        return state[i] === 2;
    else {
        state[i] = 1; // mark it to be unsafe first
        for(var node of graph[i]) {
            if(!dfs(node, state, graph))  return false;
        }
        state[i] = 2;
        return true;
    }
}