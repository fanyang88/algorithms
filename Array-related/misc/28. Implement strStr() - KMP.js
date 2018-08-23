/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
*/

/*
Implement strStr().
Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 
 * record the first element in a vector first from left to right, note the order
   compare with each position between needle and haystack
 */

 // using KMP

 var strStr = function(haystack, needle) {
    // use kmp
    if(needle === '')  return 0;
    if(haystack === '') return -1;
    
    var prefix = constructPrefix(needle);
    var j=0, i=0;
    while(i<haystack.length && j< needle.length) {
        if(haystack[i] === needle[j]) {
            i++;
            j++;
            if(j=== needle.length)  return i-needle.length;
        } else {
            if(j!==0) {
                j = prefix[j-1];
            } else {
                i++;
            }
        }
    }
    return -1;
};

var constructPrefix = function(pattern) {
    var j=0, i=1, prefix = new Array(pattern.length).fill(0); 
    while(i<pattern.length) {
        if(pattern[i] == pattern[j]) {
            prefix[i] = j+1;
            j++;
            i++;
        } else {
            if(j!==0) {
                j = prefix[j-1];
            } else {
                i++;
            }
        }
    }
    return prefix;
    
};

// brute force
var strStr = function(haystack, needle) {
    if(needle === '') return 0;
    
    var st = [], i;
    
    for(i=0; i<haystack.length; i++) {
        if(haystack[i] === needle[0]) st.push(i);
    }
    if(st.length === 0) return -1;
    
    for(i=0; i<st.length; i++) {
        if(haystack.substring(st[i], st[i] + needle.length) === needle) {
            return st[i];
        }
    }
    return -1;
};
