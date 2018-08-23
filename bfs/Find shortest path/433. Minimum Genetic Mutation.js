/*
A gene string can be represented by an 8-character long string, 
with choices from "A", "C", "G", "T".
Suppose we need to investigate about a mutation (mutation from "start" to "end"), 
where ONE mutation is defined as ONE single character changed in the gene string.
For example, "AACCGGTT" -> "AACCGGTA" is 1 mutation.
Also, there is a given gene "bank", which records all the valid gene mutations. 
A gene must be in the bank to make it a valid gene string.
Now, given 3 things - start, end, bank, your task is to determine 
what is the minimum number of mutations needed to mutate from "start" to "end". 
If there is no such a mutation, return -1.

Note:
Starting point is assumed to be valid, so it might not be included in the bank.
If multiple mutations are needed, all mutations during in the sequence must be valid.
You may assume start and end string is not the same.
Example 1:
start: "AACCGGTT"
end:   "AACCGGTA"
bank: ["AACCGGTA"]
return: 1

Example 2:
start: "AACCGGTT"
end:   "AAACGGTA"
bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]
return: 2

Example 3:
start: "AAAAACCC"
end:   "AACCCCCC"
bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]
return: 3
*/

/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    var st = [], wordSet = new Set();
    st.push({word: start, length: 0});
    // put list in set for faster deletion.
    for(var i=0; i<bank.length; i++) {
        wordSet.add(bank[i]);
    }
    wordSet.delete(start);
    
    while(st.length > 0) {
        var wordObj = st.shift();
        if(wordObj.word === end) {
            return wordObj.length;
        }
        for(var neighbor of _findNeighbors(wordObj.word, wordSet)) {
            // remove this word from wordSet.
            wordSet.delete(neighbor);
            st.push({word: neighbor, length: wordObj.length+1});
        }
    }
    return -1;
};

var _findNeighbors= function(word, wordSet) {
    var set = new Set();
    var str = 'ACGT';
    for(var i=0; i<word.length; i++) {
        var arr = word.split('');
        for(var chr = 0; chr < str.length; chr++) {
            if(str[chr] !== arr[i])  {
                arr[i] = str[chr];
                var newWord =  arr.join('');
                if(wordSet.has(newWord)) {
                    set.add(newWord);
                }
            }
        }
    }
    return set;
};
