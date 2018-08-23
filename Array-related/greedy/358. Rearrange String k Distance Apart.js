/*
Given a non-empty string s and an integer k, rearrange the string such that the same characters are at 
least distance k from each other.
All input strings are given in lowercase letters. 
If it is not possible to rearrange the string, return an empty string "".

Example 1:
s = "aabbcc", k = 3

Result: "abcabc"

The same letters are at least distance 3 from each other.
Example 2:
s = "aaabc", k = 3 

Answer: ""

It is not possible to rearrange the string.
Example 3:
s = "aaadbbcc", k = 2

Answer: "abacabcd"

Another possible answer is: "abcabcda"

The same letters are at least distance 2 from each other.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 aaadbbcc, k = 2
 a: 3  b: 2   c: 2 
init:   next= [0,0,0]  # next position available for char at index i
        count= [3,2,2]  # number of elements left
 i=0, since max from count map is 3 and next[0] <= i count[0]--=2, next[0]= i+k= 3  res= 'a'
 i=1, since max from count map is 2 and next[1] <= i count[1]--=1, next[1]= i+k= 4  res= 'ab'
 i=2, since max from count map is 2 and next[2] <= i count[2]--=1, next[2]= i+k= 5  res= 'abc'
 i=3, since max from count map is 2 and next[0] <= i count[0]--=1, next[0]= i+k= 6  res= 'abca'
 i=4, since max from count map is 1 and next[1] <= i count[1]--=0, next[1]= i+k= 7  res= 'abcab'
 i=5, max from count map is 2 and next[2] <= i count[2]--=0, next[2]= i+k= 8  res= 'abcabc'
 i=6, since max from count map is 1 and next[0] <= i count[0]--=0, next[0]= i+k= 9  res= 'abcabca'
 
 */
var rearrangeString = function(s, k) {
    var count = {},  next = {}, res = '';
    for(var i=0; i<s.length; i++) {
        count[s[i]] = count[s[i]] ? count[s[i]]+1 :1;
        next[s[i]] = 0;
    }
    for(var index= 0; index<s.length; index++) {
        // find the max freq char in count with index >= next[i]
        var candicateChar = find(index, count, next); 
        if(candicateChar === -1) return '';
        count[candicateChar] --;
        next[candicateChar] = index + k;
        res += candicateChar;
    }
    return res;
    
};

var find = function(index, count, next) {
    var maxV = Number.MIN_SAFE_INTEGER, candidate=-1;
    for(var key in count) {
        // count[key] must > 0 so we can pick it
        if(count[key] > 0 && count[key] > maxV && index >=next[key]) {
            maxV = count[key];
            candidate = key;
        }
    }
    return candidate;
};
