/*
Given a string array words, 
find the maximum value of length(word[i]) * length(word[j]) 
where the two words do not share common letters. 
You may assume that each word will contain only lower case letters. 
If no such two words exist, return 0.

Example 1:

Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16 
Explanation: The two words can be "abcw", "xtfn".
Example 2:

Input: ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4 
Explanation: The two words can be "ab", "cd".
Example 3:

Input: ["a","aa","aaa","aaaa"]
Output: 0 
Explanation: No such pair of words.
*/

/**
 * @param {string[]} words
 * @return {number}
 
    The soultion is calcuated by doing a product of the length of
	each string to every other string. Anyhow the constraint given is
	that the two strings should not have any common character. This
	is taken care by creating a unique number for every string. Image
	a an 32 bit integer where 0 bit corresponds to 'a', 1st bit
	corresponds to 'b' and so on.
	 
	Thus if two strings contain the same character when we do and
	"AND" the result will not be zero and we can ignore that case. 
 */
var maxProduct = function(words) {
    var map = {}, maxV = 0;
    for(var word of words) {
        map[word] = getBitRep(word);
    }
    for(var i=0; i<words.length; i++) {
        for(var j=i+1; j<words.length; j++) {
            if((map[words[i]] & map[words[j]]) === 0) {
                maxV = Math.max(maxV, words[i].length * words[j].length);
            }
        }
    }
    return maxV;
};

var getBitRep = function(str) {
    var value = 0;
    for(var chr of str) {
        value = value | (1 << (chr.charCodeAt(0) - 'a'.charCodeAt(0)));
    }
    return value;
};
