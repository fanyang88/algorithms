/*
Equations are given in the format A / B = k, 
where A and B are variables represented as strings, 
and k is a real number (floating point number). 
Given some queries, return the answers. 
If the answer does not exist, return -1.0.

Example:
Given a / b = 2.0, b / c = 3.0. 
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? . 
return [6.0, 0.5, -1.0, 1.0, -1.0 ].

The input is: vector<pair<string, string>> equations, 
vector<double>& values, vector<pair<string, string>> queries , 
where equations.size() == values.size(), and the values are positive. 
This represents the equations. Return vector<double>.

According to the example above:

equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
The input is always valid. 
You may assume that evaluating the queries will result in no division 
by zero and there is no contradiction.
*/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 use a map to store the equation as: key : character value : [another char with value]
 e.g:   
 equations = [ ["a", "b"], ["b", "c"] ],
 values = [2.0, 3.0],
 map: a: [[b, 2.0]]
      b: [[a, 1/2.0], [c, 3.0]]
      c: [[b, 1/3.0]]
      
use BFS to search for each query, if the dest or src not in map, return -1, if dest = src, return 1.0, otherwise, there is a path, find the multiple of the values

 */
var calcEquation = function(equations, values, queries) {
    var res = [], map = {};
    for(var i=0; i<equations.length; i++) {
        var v1 = equations[i][0], v2 = equations[i][1];
        if(!map[v1])  map[v1] = [];
        map[v1].push([v2, values[i]]);
        if(!map[v2])  map[v2] = [];
        map[v2].push([v1, 1/values[i]]);
    }
    for(var query of queries) {
        res.push(bfs(query[0], query[1], map));
    }
    return res;
};

var bfs = function(src, dest, map) {
    var visited = new Set();
    if(!map[src] || !map[dest])  return -1.0;
    if(src === dest)  return 1.0;
    var st = [[src, 1]];
    visited.add(src);
    while(st.length > 0) {
        var cur = st.shift();
        if(cur[0] === dest)  return cur[1];
        for(var next of map[cur[0]]) {
            if(visited.has(next[0]))  continue;
            st.push([next[0], next[1] * cur[1]]);
            visited.add(next[0]);
        }
    }
    return -1;
};