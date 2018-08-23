/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, 
write a function that will return true if the ransom note can be constructed from the magazines ; 
otherwise, it will return false. Each letter in the magazine string can only be used once in your ransom note.
Note: You may assume that both strings contain only lowercase letters.
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // Get all indexes first, for each index, get substr(index, ransomNote.length) to check
    if(ransomNote === '') return true;
    let map = new Map();
    
    var i, chr;
    for(i=0; i<magazine.length; i++) {
        chr = magazine[i];
        if(map.has(chr)) {
            map.set(chr, map.get(chr)+1);
        }
        else {
            map.set(chr, 1);
        }
    }
    for(i=0; i<ransomNote.length; i++) {
        chr = ransomNote[i];
        if(map.has(chr)) {
            map.set(chr, map.get(chr)-1);
            if(map.get(chr)<0) {
                return false;
            }
        }
        else {
            return false;
        }
    }
    
    return true;
};
