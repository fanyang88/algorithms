/*
There are N network nodes, labelled 1 to N.

Given times, a list of travel times as directed edges times[i] = (u, v, w), where u is the source node, v is the target node, and w is the time it takes for a signal to travel from source to target.

Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal? If it is impossible, return -1.

Note:
N will be in the range [1, 100].
K will be in the range [1, N].
The length of times will be in the range [1, 6000].
All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 1 <= w <= 100.
*/

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
// template for dijkstras
function Node(val) {
    this.val = val;
    this.next = [];
    this.distance = Infinity;
}

function popSmallestDistance(list) {
    list.sort((a, b) => a.distance - b.distance);
    return list.shift();
}

function createGraph(numNodes, edges) {
    const map = {};
     for(var i = 1; i <= numNodes; i++) {
        map[i] = new Node(i);
    }
    for(var [u, v, w] of edges) {
        map[u].next.push([map[v], w]);
    }
    return map;
}

var networkDelayTime = function(times, N, K) {
    const map = createGraph(N, times);
    var st = Object.values(map), distanceMap= {}, parent = {};
    map[K].distance = 0;
    parent[K] = null;
    while(st.length > 0) {
        const node = popSmallestDistance(st); 
        distanceMap[node] = node.distance;
        for(var [nextNode, weight] of node.next) {
            if (node.distance + weight < nextNode.distance) {
                nextNode.distance = node.distance + weight;
                parent[nextNode.val] = node.val;
            }
        }
    }
    // if the max time is Infinity it means that node wasn't visited at all from the source
    var res = Math.max(...Object.values(distanceMap));
    return res === Infinity ? -1 : res;
};


// template for Bellman-ford
var networkDelayTime = function(times, N, K) {
    var map = {};
    for(var [u, v, w] of times) {
        if(!map[u]) map[u] = [];
        map[u].push(v, w);
    }
    var distance = {}, parent = {};
    for(var i=1; i<=N; i++) {
        distance[i] = Infinity;
    }
    distance[K] = 0;
    for(var i=0; i<N; i++) {
        for(var [u, v, w] of times) {
            if(distance[v] > distance[u] + w) {
                distance[v] = distance[u] + w;
                parent[v] = u;
            }
        }
    }
    // to detect negative cycle
    for(var [u, v, w] of times) {
        if(distance[v] > distance[u] + w) {
           return;
        }
    }

    var res = Math.max(...Object.values(distance));
    return res === Infinity ? -1 : res;
};
