/*
We are given two arrays A and B of words.  Each word is a string of lowercase letters.

Now, say that word b is a subset of word a if every letter in b occurs in a, including multiplicity.  
For example, "wrr" is a subset of "warrior", but is not a subset of "world".

Now say a word a from A is universal if for every b in B, b is a subset of a. 

Return a list of all universal words in A.  You can return the words in any order.

 

Example 1:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","o"]
Output: ["facebook","google","leetcode"]
Example 2:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["l","e"]
Output: ["apple","google","leetcode"]
Example 3:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["e","oo"]
Output: ["facebook","google"]
Example 4:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["lo","eo"]
Output: ["google","leetcode"]
Example 5:

Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["ec","oc","ceo"]
Output: ["facebook","leetcode"]

*/

/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]} 
 build a map for B, which store the max count of each chr
 e.g: B = ["ec","oc","ceo"]  e:1  c:1  o:1
 A = ["amazon","apple","facebook","google","leetcode"]
 check each word against the map
 
 */
var wordSubsets = function(A, B) {
    var map = new Array(26).fill(0), res= [];
    for(var word of B) {
        var tmp = new Array(26).fill(0);
        for(var chr of word) {
            tmp[chr.charCodeAt(0)-("a".charCodeAt(0))] ++;
        }
        for(var i=0; i<26; i++) {
            map[i] = Math.max(map[i], tmp[i]);
        }
    }
    for(var word of A) {
        var flag = 1;
        var counter = getCount(word);
        for(var i=0; i<26; i++) {
            if(counter[i] < map[i]) {
                flag = false;
                break;
            }
        }
        if(flag) res.push(word);
    }
    return res;
};

var getCount = function(word) {
  var arr = new Array(26).fill(0);
  for(var chr of word) 
      arr[chr.charCodeAt(0)-("a".charCodeAt(0))] ++;
  return arr;
};
