/*
There are n cities connected by m flights. 
Each fight starts from city u and arrives at v with a price w.

Now given all the cities and fights, together with starting city src and the destination dst, 
your task is to find the cheapest price from src to dst with up to k stops. 
If there is no such route, output -1.

Example 1:
Input: 
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1
Output: 200
Explanation: 
The cheapest price from city 0 to city 2 with at most 1 stop costs 200, 

Example 2:
Input: 
n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 0
Output: 500
Explanation: 
The cheapest price from city 0 to city 2 with at most 0 stop costs 500, 
*/


/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 dfs with pruning, can be solved by DP as well.
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    var map = {}, visited= new Set(), cheapest = [Number.MAX_SAFE_INTEGER];
    for(var flight of flights) {
        if(!map[flight[0]])  map[flight[0]] = [];
        map[flight[0]].push([flight[1], flight[2]]);
    }

    visited.add(src);
    dfs(src, dst, visited, map, 0, cheapest, K, 0);
    return cheapest[0] === Number.MAX_SAFE_INTEGER ? -1 : cheapest[0]; 
};

var dfs = function(src, dst, visited, map, sum, cheapest, k, count) {
    if(src === dst && count <= k+1) {
        cheapest[0] = sum;
        return;
    }
    if(k+1 === count)  return;
    if(!map[src])  return;
    for(var flight of map[src]) {  // flight[0] is the dest, flight[1] is the price
        if(!visited.has(flight[0])) {
            if(sum + flight[1] > cheapest[0])  continue;  // pruning, cut off the more expensive ones
            visited.add(flight[0]);
            dfs(flight[0], dst, visited, map, sum+flight[1], cheapest, k, count+1);
            visited.delete(flight[0]);
        }
    }
};