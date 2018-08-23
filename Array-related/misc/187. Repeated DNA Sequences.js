/*
All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.
Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
For example,
Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",
Return:
["AAAAACCCCC", "CCCCCAAAAA"].
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var res = [];
    var map = {}, sub;
    for(var i=0; i<=s.length-10; i++) {
        sub = s.substring(i, i+10);
        if(map[sub]) {
           if(res.indexOf(sub) < 0) {
               res.push(sub);
           }
           map[sub] += 1;
        } else {
            map[sub] = 1;
        }
    }
    return res;
};
