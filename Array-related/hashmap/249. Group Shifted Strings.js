/*
Given a string, we can "shift" each of its letter to its successive letter, 
for example: "abc" -> "bcd". 
We can keep "shifting" which forms the sequence:

"abc" -> "bcd" -> ... -> "xyz"
Given a list of strings which contains only lowercase alphabets, 
group all strings that belong to the same shifting sequence.

Example:

Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
Output: 
[
  ["abc","bcd","xyz"],
  ["az","ba"],
  ["acef"],
  ["a","z"]
]
*/

/**
 * @param {string[]} strings
 * @return {string[][]}
 // we can use the difference of s[i]- s[i-1] to be key
 // e.g: abc => 1:1  bcd:1:1    az=> 25   ba=>-1+26=25
    
 */
var groupStrings = function(strings) {
    var map = {};
    for(var s of strings) {
        var key = getKey(s);
        if(!map[key])  map[key] = [];
        map[key].push(s);
    }
    return Object.values(map);
};

var getKey = function(str) {
    var key = '';
    for(var i=1; i<str.length; i++) {
        var diff = str.charCodeAt(i) - str.charCodeAt(i-1);
        if(diff < 0) diff+= 26;
        key += diff+':';
    }
    return key;
};

