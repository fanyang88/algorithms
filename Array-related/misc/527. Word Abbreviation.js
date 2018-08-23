/*
Given an array of n distinct non-empty strings, you need to generate minimal possible abbreviations for every word following rules below.
Begin with the first character and then the number of characters abbreviated, which followed by the last character.
If there are any conflict, that is more than one words share the same abbreviation, 
a longer prefix is used instead of only the first character until making the map from word to abbreviation become unique. 
In other words, a final abbreviation cannot map to more than one original words.
If the abbreviation doesn't make the word shorter, then keep it as original.
Example:
Input: ["like", "god", "internal", "me", "internet", "interval", "intension", "face", "intrusion"]
Output: ["l2e","god","internal","me","i6t","interval","inte4n","f2e","intr4n"]
Note:
Both n and the length of each word will not exceed 400.
The length of each word is greater than 1.
The words consist of lowercase English letters only.
The return answers should be in the same order as the original array.
*/

/**
 * @param {string[]} dict
 * @return {string[]}
 */
var wordsAbbreviation = function(dict) {
    var newDict = [], map = {}, newWord;
    for(var word of dict) {
        if(word.length <=3) {
            newWord  = word;
            newDict.push({word: word, len: word.length -2, flag: true});
        } else {
            newWord  = word[0] + (word.length -2) + word[word.length-1];
            newDict.push({word: newWord, len: word.length -2, flag: false});
        }
    }
    while(_hasDup(newDict)) {
        for(var i=0; i<newDict.length; i++) {
            if(!newDict[i].flag) {
                var oriWord = dict[i];
                newDict[i].word = oriWord.substr(0, oriWord.length - newDict[i].len) +
                                (newDict[i].len-1) + oriWord[oriWord.length-1]; 
                newDict[i].len --; 
                if(newDict[i].len === 1) {
                    newDict[i].word = oriWord;
                }
            }
        }  // end of for
    }
    return newDict.map(item => item.word);
};

var _hasDup = function(newDict) {
    var arr = newDict.map(item => item.word);
    var hasdup = false;
    for(var i=0; i<newDict.length; i++) {
        if(!newDict[i].flag) {
            if(arr.indexOf(newDict[i].word) !== arr.lastIndexOf(newDict[i].word)) {
                newDict[i].flag = false;
                hasdup = true;
            } else {
                newDict[i].flag = true;
            }
        }
    }
    return hasdup;
};
