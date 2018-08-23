/*

There are a total of n courses you have to take, labeled from 0 to n-1.
Some courses may have prerequisites, for example to take course 0 you have to first take course 1, 
which is expressed as a pair: [0,1]
Given the total number of courses and a list of prerequisite pairs, 
is it possible for you to finish all courses?

Example 1:
Input: 2, [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:
Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
Note:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices. 
Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
*/


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 
 topologic sort:  
 step1: first we init degree for each node, if there another node point to current node, degree[curnode]++
 step2: we can now do BFS based on the map and degree. 
    find the degree =0 in degree array, this would be the entry of the graph, 
    put it in the queue, and pop it out, 
    for all the nodes linked to this node, we reduce their degree by 1, 
    if there is a node among them ===0, push into q
 step3: after the queue is cleared, check if all node degree changed to 0, 
    if not, means there is a cycle in the graph;

 e.g: [1, 0] degree: 1->0   (node)0->1(degree)
 push 1 to Queue, pop 1, get neighbor is 0, neigbor 0 degree reduce to 0, push to Queue, pop 0
 detail: check pic
 */
var canFinish = function(numCourses, prerequisites) {
    var degree = new Array(numCourses).fill(0), st= [], map = {};
    for(var pre of prerequisites) {
        degree[pre[0]] ++;
        if(!map[pre[1]])  map[pre[1]] = [];
        map[pre[1]].push(pre[0]); 
    }
    for(var i=0; i<numCourses; i++) {
        if(degree[i] ===0)  st.push(i);
    }
    while(st.length > 0) {
        var cur = st.shift();
        if(!map[cur])  continue;
        for(var child of map[cur]) {
            degree[child] --;
            if(degree[child] ===0)  st.push(child);
        }
    }
    
    for(var i=0; i<numCourses; i++) {
        if(degree[i] !==0)  return false;
    }
    return true;
};