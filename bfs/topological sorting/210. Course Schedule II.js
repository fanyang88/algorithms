/*
There are a total of n courses you have to take, labeled from 0 to n-1.
Some courses may have prerequisites, for example to take course 0 you have to first take course 1, 
which is expressed as a pair: [0,1]
Given the total number of courses and a list of prerequisite pairs, 
return the ordering of courses you should take to finish all courses.
There may be multiple correct orders, you just need to return one of them. 
If it is impossible to finish all courses, return an empty array.

Example 1:
Input: 2, [[1,0]] 
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished   
             course 0. So the correct course order is [0,1] .
Example 2
Input: 4, [[1,0],[2,0],[3,1],[3,2]]
Output: [0,1,2,3] or [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both     
             courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. 
             So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 similar to 207
 */
var findOrder = function(numCourses, prerequisites) {
    var queue = [], degrees = new Array(numCourses).fill(0), map = {}, res = [];
    for(var pre of prerequisites) {
        if(!map[pre[1]]) map[pre[1]] = [];
        map[pre[1]].push(pre[0]);
        degrees[pre[0]] ++;
    }
    // put all nodes has indegree 0 onto the queue
    for(var i=0; i<degrees.length; i++) {
        if(degrees[i] === 0)  queue.push(i);
    }
    
    while(queue.length > 0) {
        var curNode = queue.shift();
        res.push(curNode);
        if(!map[curNode]) continue;
        for(var neigbor of map[curNode]) {
            degrees[neigbor]--;
            if(degrees[neigbor] === 0) {
                queue.push(neigbor);
            }
        }
    }
    return res.length === numCourses? res : [];
};