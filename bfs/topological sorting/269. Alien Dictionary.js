/*
There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. 
You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. 
Derive the order of letters in this language.
Example 1:  Given the following words in dictionary,
[  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"]
The correct order is: "wertf".
Example 2:  Given the following words in dictionary,
[  "z",
  "x"]
The correct order is: "zx".
Example 3:  Given the following words in dictionary,
[  "z",
  "x",
  "z"]
The order is invalid, so return "".
Note:
You may assume all letters are in lowercase.
You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
If the order is invalid, return an empty string.
There may be multiple valid order of letters, return any one of them is fine.
*/

/**
 * @param {string[]} words
 * @return {string}
 [ "wrt",
   "wrf",
   "er",
   "ett",
   "rftt"]
 step1: first we init degree for each node, degree: [w: 0, e: 0, r: 0, t : 0, f: 0] count = 5;
 step2: we construct the edges and update map by comparing each two strings.
    for example: wrt - wrf since w===w r===r skip t!==f, map[t] = [f], degree[f]++, break
    wrf -- er: w!==e, map[w] = [e], degree[e]++, break
    er -- ett: r!==t, map[r] = [t], degree[t]++, break
    ett -- rftt: e!==r, map[e] = [r], degree[r]++, break
    degree= [w: 0, e: 1, r: 1, t : 1, f: 1]
    map = {t: [f], w : [e], r: [t], e: [r]}
step3: we can now do topological sorting based on the map and degree. graph is w - e - r - t - f
    find the degree =1 in degree array, this would be the entry of the graph, put it in the queue, and pop it out, for all the nodes linked to this node, we reduce their degree by 1, if there is a node among them ===1, push into q
 */
var alienOrder = function(words) {
    var degree = {}, set = new Set(), map = {}, res= '', st = [];
    // step1, init all degree to be 0
    for(var word of words) {
        for(var chr of word) {
            degree[chr] = 0;
            set.add(chr);  // set store all unique chars
        }
    }
    // Step2 
    for(var i=1; i<words.length; i++) {
        // compare words[i-1] and words[i]
        var len = Math.min(words[i-1].length, words[i].length);
        for(var j=0; j<len; j++) {
            var first = words[i-1][j];
            var second = words[i][j];
            if(first !== second) {
                if(!map[first]) map[first] = [];
                if(map[first].includes(second)) break;
                map[first].push(second);
                degree[second]++;
                // once we found mismatch, compare then break
                break;  // THE KEY!!!!!
            }
        }
    }
    // Step3 find all nodes with indegree 1, push into st, start topological sort
    for(var key in degree) {
        if(degree[key] === 0)  {
            st.push(key);
        }
    }
    while(st.length > 0) {
        var curNode = st.shift();
        res+=curNode;
        if(map[curNode]) {
            for(var chr of map[curNode]) {
                degree[chr] --;
                if(degree[chr] === 0) st.push(chr);
            }
        }
    }
    return res.length !== set.size ? '' : res;
};
