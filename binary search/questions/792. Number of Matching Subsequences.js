/*
Given string S and a dictionary of words words, 
find the number of words[i] that is a subsequence of S.

Example :
Input: 
S = "abcde"
words = ["a", "bb", "acd", "ace"]
Output: 3
Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".
Note:

All words in words and S will only consists of lowercase letters.
The length of S will be in the range of [1, 50000].
The length of words will be in the range of [1, 5000].
The length of words[i] will be in the range of [1, 50].
*/

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 to check if a word is a subsequence of another word called it root:
 1. construct the hashmap for root, e.g: abcaec => {a: [0, 3], b:[1], c:[2, 5], e:[4]}
 2. set start = -1, e.g: word is ace, we first need to find the smallest larger num than -1 in [0, 3] 
 3. we found 0, then we continue, we need to find the smallest larger num than 0 in [2, 5] 
 4. we found 2, then we continue, we need to find the smallest larger num than 2 in[4] 
 the process to find the next index we can use binary search, 
 once in the search, if we can't find, return false.
 */
var numMatchingSubseq = function(S, words) {
    var map = {}, count=0;
    for(var i=0; i<S.length; i++) {
        if(!map[S[i]])  map[S[i]] = [];
        map[S[i]].push(i);
    }
    for(var word of words) {
        count += isSubsequence(word, map);
    }
    return count;
};

// how to check if word is a subsequence of S
var isSubsequence = function(word, map) {
    var start = -1;
    for(var chr of word) {
        if(!map[chr])  return 0;
        // find the smallest larger number than 
        // start using binary search in map[chr]
        var ind = nextLarger(map[chr], start); 
        if(ind === -1)  return 0;
        start = ind;
    }
    return 1;      
};
           
// find the smallest larger number than val
var nextLarger = function(arr, val) {
    var s = 0, e = arr.length-1;
    while(s < e) {
        var mid = ~~((s+e)/2);
        if(arr[mid] > val) {
            e = mid;
        } else {
            s = mid+1;
        }
    }
    return arr[e] > val ? arr[e] : -1;
};