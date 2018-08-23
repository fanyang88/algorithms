/*
An undirected, connected graph of N nodes (labeled 0, 1, 2, ..., N-1) is given as graph. graph.length = N, and j != i is in the list graph[i] exactly once, 
if and only if nodes i and j are connected. Return the length of the shortest path that visits every node. 
You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.
Example 1: Input: [[1,2,3],[0],[0],[0]]
Output: 4
Explanation: One possible path is [1,0,2,0,3]
Example 2:  Input: [[1],[0,2,4],[1,3,4],[2],[1,2]]
Output: 4
Explanation: One possible path is [0,1,4,2,3]

*/

/**
 * @param {number[][]} graph
 * @return {number}
  Since each node can be revisited, 
  so we need to record if the path has been visited before to avoid going into a cycle
  to record a path, we need the last visited node + all visited nodes on this path as the key.
          node state distance
  stack:  [(0,   0,    0), (1, 1, 0), (2,2,0), (3,3,0)]
  pop(0,0,0) next=1, newState=010=2 visited.add(1,2)  push(1,2,1)
             next=2, newState=state | 1<<next=100=4 visited.add(2,4), push(2,4,1)
             next=3, newState=state | 1<<next=1000=8 visited.add(3,8), push(3,8,1)
  pop(1,1,0) next=0, newState=011=3 visited.add(0,3)  push(0,3,1)
  pop(2,2,0) next=0, newState=101=5 visited.add(2,5)  push(2,5,1)
  pop(3,3,0) next=0, newState=1001=9 visited.add(0,9)  push(0,9,1)
  st=[(1,2,1),(2,4,1),(3,8,1),(0,3,1), (2,5,1),(0,9,1)]
  pop(1,2,1) next=0, newState=011=3 visited.has(0,3)  skip
  pop(2,4,1) next=0, newState=101=5 visited.add(0,5)  push(0,5,2)
  pop(3,8,1) next=0, newState=1001=9 visited.has(0,9)  skip
  pop(0,3,1) next=1, newState=11 | 10=3 visited.has(0,3)  skip
             next=2, newState=11 | 100=7 visited.add(2,7)  push(2,7,2)
             next=3, newState=11 | 1000=11 visited.add(3,11)  push(3,11,2)
  pop(2,5,1) next=0, newState=101=5 visited.has(0,5)  skip
  ....

  till we reach state= 1111 we find the shortest path
  
  
  
  
  

        
 */
var shortestPathLength = function(graph) {
    var n = graph.length, q = [], step = 0, visited =new Set(), ans = (1 << n) -1;
    for(var i=0; i<n; i++) {
        var state = (1 << i);
        q.push({key:i, state: state, distance: 0});
        visited.add(state+':'+i);
    }
  
    while(q.length > 0) {
        var cur = q.shift();
        var key = cur.key;
        var state = cur.state;
        if(state === ans)  return cur.distance;
        for(var next of graph[key]) {
            var newState = state | (1 << next);
            if(!visited.has(newState+':'+next)) continue; 
            visited.add(newState+':'+next);
            q.push({key: next, state: newState, distance: cur.distance+1});
            
        }
    }
    return -1;
};
