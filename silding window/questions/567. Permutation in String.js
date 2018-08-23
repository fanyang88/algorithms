/*
Given two strings s1 and s2, write a function to 
return true if s2 contains the permutation of s1. In other words, 
one of the first string's permutations is the substring of the second string.
Example 1:
Input:s1 = "ab" s2 = "eidbaooo"
Output:True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:
Input:s1= "ab" s2 = "eidboaoo"
Output: False
Note:
The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 
 We can abstract all permutation strings of s to a map (Character -> Count). i.e. abba -> {a:2, b:2}. Since there are only 26 lower case letters in this problem, we can just use an array to represent the map.
How do we know string s2 contains a permutation of s1? 
We just need to create a sliding window with length of s1, move from beginning to the end of s2. 
When a character moves in from right of the window, we subtract 1 to that character count from the map. 
When a character moves out from left of the window, we add 1 to that character count. 

So once we see all zeros in the map, meaning equal numbers of every characters between s1 and the substring in the sliding window, we know the answer is true.

e.g: s1 = "ab" s2 = "eidbaooo"
map= {a: 1, b:1}  
e: map {a: 1, b:1, e:-1}
i: map {a: 1, b:1, e:-1, i: -1}
d: map {a: 1, b:1, e:0, i: -1, d:-1}  e move out
b: map {a: 1, b:0, e:0, i: 0, d:-1}  i move out
a: map {a: 0, b:0, e:0, i: 0, d:0}  d move out  - all zero, so it is true
o: map {a: 0, b:1, e:0, i: 0, d:0, o:-1}  b move out
o: map {a: 1, b:1, e:0, i: 0, d:0: o: -2} a move out
o: map {a: 1, b:1, e:0, i: 0, d:0: o: -1} o move out
 */
var checkInclusion = function(s1, s2) {
    var window = [];
    var arr = new Array(26).fill(0);
    for(var chr of s1) {
        var ind = chr.charCodeAt(0) - 'a'.charCodeAt(0);
        arr[ind] ++;
    }
    // maintain a window size is s1.length, we use sliding window to manipulate array
    for(var chr of s2) {
        var ind = chr.charCodeAt(0) - 'a'.charCodeAt(0);
        if(window.length >= s1.length) {
            var tobeRemoved = window.shift();
            arr[tobeRemoved.charCodeAt(0) - 'a'.charCodeAt(0)] ++;
        }
        window.push(chr);
        arr[ind] --;
        if(isAllZeros(arr))  return true;
    }
    return false;
};

var isAllZeros = function(arr) {
    var sum = arr.reduce((total, item) => {
        return total + Math.abs(item);
    }, 0);
    return sum === 0;
};