/*
An abbreviation of a word follows the form <first letter><number><last letter>. Below are some examples of word abbreviations:

a) it                      --> it    (no abbreviation)

     1
     ↓
b) d|o|g                   --> d1g

              1    1  1
     1---5----0----5--8
     ↓   ↓    ↓    ↓  ↓    
c) i|nternationalizatio|n  --> i18n

              1
     1---5----0
     ↓   ↓    ↓
d) l|ocalizatio|n          --> l10n
Assume you have a dictionary and given a word, find whether its abbreviation is unique in the dictionary. A word's abbreviation is unique if no other word from the dictionary has the same abbreviation.

Example:

Given dictionary = [ "deer", "door", "cake", "card" ]

isUnique("dear") -> false
isUnique("cart") -> true
isUnique("cane") -> false
isUnique("make") -> true
*/


/**
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
    this.map = {};
    for(var word of dictionary) {
        var abbr = this.getAbbr(word);
        if(this.map[abbr]) {
            // if at least two words have same abbr, set it to be ''
            if(this.map[abbr] !== word) { 
                this.map[abbr] = '';
            } 
        } else {
            this.map[abbr] = word;
        }
    }
};
    
ValidWordAbbr.prototype.getAbbr = function(str) {
    return str.length <= 2 ? str: str.substr(0, 1) + (str.length-2) + str.substr(str.length-1, 1);
}; 

/** 
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    var abbr = this.getAbbr(word);
    return this.map[abbr] === undefined || this.map[abbr]=== word;
};

/** 
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = Object.create(ValidWordAbbr).createNew(dictionary)
 * var param_1 = obj.isUnique(word)
 */