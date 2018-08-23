/*
Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], 
reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. 
Thus, the itinerary must begin with JFK.

Note:
If there are multiple valid itineraries, 
you should return the itinerary that has the smallest lexical order when read as a single string. 
For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
Example 1:

Input: tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
Example 2:

Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. 
But it is larger in lexical order.
*/

/**
 * @param {string[][]} tickets     
 * @return {string[]}              
                                                          
 use post order traverse
 check pic
 */
var findItinerary = function(tickets) {
    var map = {};
    for(var ticket of tickets) {
        if(!map[ticket[0]]) map[ticket[0]]= [];
        map[ticket[0]].push(ticket[1]);
    }
    
    for(var key in map) {
        map[key].sort((a, b) => {
            if(a>b)  return 1;
            if(a<b)  return -1;
            return 0;
        });
    }
    
    var res = [];
    dfs('JFK', res, map);
    return res.reverse();
};

// post order traverse
var dfs = function(cur, res, map) {
    while(map[cur] && map[cur].length > 0) {
        var dest = map[cur].shift();
        dfs(dest, res, map);
    }
    res.push(cur);
};