/*
Find the length of the longest substring T of a given string 
(consists of lowercase letters only) such that every character in 
T appears no less than k times.

Example 1:

Input:
s = "aaabb", k = 3

Output:
3

The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:

Input:
s = "ababbc", k = 2

Output:
5

The longest substring is "ababb", as 'a' is repeated 2 times 
and 'b' is repeated 3 times.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 
 divide and conquer
 for any string s:  first caculate each char frequency, e.g: 'a' < k, b<'k'
 then loop from a-z
 check each char in the string s
 if we meet a 'a', since we know it can't be >k, we need to exclude it out, we can split the string left and right based on 'a'
 cacluate the left and right part and get the max
 however if all chars in s are >k we return end - start
 */
var longestSubstring = function(s, k) {
    return dfs(s, k, 0, s.length);  
};

// return the max substring length from start to end that each char >k
var dfs = function(s, k, start, end) {
    if(end - start< k) return 0; // the total length is smaller than k
    
    // caculate each char freq the substring of s from start to end
    var map = {};
    for(var i=start; i<end; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]]+1 : 1;
    }
    
    for(var key in map) {
        if(map[key] >= k) continue;
        for(var i=start; i<end; i++) {
            //                                                 i  j
            // prepare to split string here, there could be ...aaab... if k=4, we should split it to '...' and 'b...'
            if(s[i] === key) {  
                var j = i;
                while(s[j] === key)  j++;
                var left = dfs(s, k, start, i);
                var right = dfs(s, k, j, end);
                return Math.max(left, right);
            }
        } 
    }
    return end -start;
};
