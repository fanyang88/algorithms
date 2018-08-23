/*
In a group of N people (labelled 0, 1, 2, ..., N-1), each person has different amounts of money, 
and different levels of quietness.

For convenience, we'll call the person with label x, simply "person x".

We'll say that richer[i] = [x, y] if person x definitely has more money than person y.  
Note that richer may only be a subset of valid observations.

Also, we'll say quiet[x] = q if person x has quietness q.

Now, return answer, where answer[x] = y if y is the least quiet person 
(that is, the person y with the smallest value of quiet[y]), 
among all people who definitely have equal to or more money than person x.

 

Example 1:

Input: richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0]
Output: [5,5,2,5,4,5,6,7]
Explanation: 
answer[0] = 5.
Person 5 has more money than 3, which has more money than 1, which has more money than 0.
The only person who is quieter (has lower quiet[x]) is person 7, but
it isn't clear if they have more money than person 0.

answer[7] = 7.
Among all people that definitely have equal to or more money than person 7
(which could be persons 3, 4, 5, 6, or 7), the person who is the quietest (has lower quiet[x])
is person 7.

The other answers can be filled out with similar reasoning.
*/


/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 using above example, we can use dfs, first construct a map
 map 0:[1]  1:[2,3]   7:[3]  3:[4,5,6]
 0 has 1,2,3,4,5,6 more richer than it, so we get the least quiet one is 5
 2 has no richer ppl than it, return itself.
 */
var loudAndRich = function(richer, quiet) {
    const map = {}, res= [];
    for(var r of richer) {
        if(!map[r[1]])  map[r[1]] = [];
        map[r[1]].push(r[0]);
    }
    for(var i=0; i<quiet.length; i++) {
        if(!map[i])  res.push(i);
        else res.push(bfs(i, map, quiet));
    }
    return res;
};

var bfs = function(ppl, map, quiet) {
    var visited = new Set(), minV = quiet[ppl], ind = ppl, st = [ppl];
    while(st.length > 0) {
        var cur = st.shift();
        if(quiet[cur] < minV) {
            minV = quiet[cur];
            ind = cur;
        }
        if(!map[cur])  continue;
        for(var item of map[cur]) {
            if(visited.has(item))  continue;
            st.push(item);
            visited.add(item);
        }
    }
    return ind;
}
