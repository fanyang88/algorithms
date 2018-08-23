/*
We have a list of bus routes. Each routes[i] is a bus route that the i-th bus repeats forever. For example if routes[0] = [1, 5, 7], this means that the first bus (0-th indexed) travels in the sequence 1->5->7->1->5->7->1->... forever.

We start at bus stop S (initially not on a bus), and we want to go to bus stop T. 
Travelling by buses only, what is the least number of buses we must take to reach our destination? Return -1 if it is not possible.

Example:
Input: 
routes = [[1, 2, 7], [3, 6, 7]]
S = 1
T = 6
Output: 2
Explanation: 
The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.

*/

/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 
 we need to construct a map to show current stop to next stops
 e.g: [[1, 2, 7], [3, 6, 7]]
 we need to construct a map with key is the stop and value is the buses can reach to this stop
 
 map  1: [0]  2: [0] 7: [0, 1] 3: [1]  6: [1]
 use BFS, start at S=1
 Q= [1] cur=1, since buses are [0] we make visitedBus=[0] for each stops from bus 0, we push stop onto Q
 Q = [1,2,7] cur=1 since bus[0] visited cur=2 since bus[0] visited cur=7  
     we make visitedBus=[0, 1] for each stops from bus 1, we push stops onto Q
Q= [3,6,7] cur=3 since bus[1] visited cur=6 === T return steps
   
   need another set to record visited stops, if this stop visited already no need to visit it again
 
 */
var numBusesToDestination = function(routes, S, T) {
    var st = [S],map = {}, steps =0, visited = new Set(), pass= new Set();
   
    for(var i=0; i<routes.length; i++) {
        for(var stop of routes[i]) {
            if(!map[stop]) map[stop] = new Set();
            map[stop].add(i);
        }
    }
    pass.add(S);
    while(st.length > 0) {
        var size = st.length;
        while(size --) {
            var curStop = st.shift();
            if(+curStop === T)  return steps;
            for(var bus of map[curStop]) {
                if(visited.has(bus))  continue;
                visited.add(bus);
                for(var stop of routes[bus]) {
                     if(!pass.has(stop)){
                        pass.add(stop);
                        st.push(stop);    
                    }
                }
            }
        }
        steps ++;
    }
    return -1;
};

