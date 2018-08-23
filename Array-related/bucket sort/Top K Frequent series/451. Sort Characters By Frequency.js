/*
Given a string, sort it in decreasing order based on the frequency of characters.
Example 1:
Input: "tree"   Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var map = {}, res= '';
    for(let chr of s) {
        map[chr] = map[chr]? map[chr]+1 : 1;
    }
    // corner case 'aaa' so bucket length should be nums.length+1
    var bucket= new Array(s.length+1); 
    for(let key in map) {
        if(!bucket[map[key]]) bucket[map[key]] = [];
        bucket[map[key]].push(key);
    }
    
    for(var i=s.length; i>=0; i--) {
        if(bucket[i]) {
            for(var item of bucket[i]) {
                for(var k=0; k<i; k++) {
                    res += item;
                }
            }
        }
    }
    return res;
};
