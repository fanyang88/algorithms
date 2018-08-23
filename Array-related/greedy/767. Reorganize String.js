/*
Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:

Input: S = "aab"
Output: "aba"
Example 2:

Input: S = "aaab"
Output: ""
*/

/**
 * @param {string} S
 * @return {string}
 
 The solution sort the string by occurrence, i.e. the character with most occurrence is at front. For example, aaaaabbcc.

Next, let i = 0 at the beginning, j = (n-1)/2+1 in the middle.
We can build the answer by appending s[i++] and s[j++] sequentially.
e.g: aba  => aab
i=0, j=(n-1)/2+1=2 res+a+b+a
 */
var reorganizeString = function(S) {
    var map = {}, res = '', sorted= '', n= S.length, sortable=[];
    for(var chr of S) {
        map[chr] = map[chr] ? map[chr] +1 : 1;
    }
	for(var key in map) {
        sortable.push([key, map[key]]);
    }
	sortable.sort((a, b) => b[1]-a[1]);
    
    for(var item of sortable) {
        var count = item[1];
        if(count > ~~(n+1)/2)  return '';
        while(count --) sorted += item[0];
    }
    // i start from 0, j from (n-1)/2 +1
    for(var i=0, j=~~((n-1)/2) +1; i<=(n-1)/2; i++, j++) {
        res += sorted[i];
        if(j<n) res+=sorted[j];
    }
    return res;
};