/*
Given an array of strings, group anagrams together.
For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
Return:
[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = {};
    strs.forEach(str => {
        var sorted = getSorted(str);
        if(map[sorted]) {
            map[sorted].push(str);
        } else {
            map[sorted] = [str];
        }
    });
    return Object.values(map);
};

var getSorted = function(str) {
    var arr = str.split('').sort((a,b) => {
        if(a>b) return 1;
        if(a === b) return 0;
        if(a<b) return -1;
    });
    return arr.join('');
}
