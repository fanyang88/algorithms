/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
*/

/**
 * @param {string[]} words
 * @return {string[]}
 * Check if the cahrs in the string are in the same row.
 */
var findWords = function(words) {
    let res =[];
    const line1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const line2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const line3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
    var i, map = new Map();
    for(i=0;i<line1.length; i++) {
        map.set(line1[i], 1);
    }
    for(i=0;i<line2.length; i++) {
        map.set(line2[i], 2);
    }
    for(i=0;i<line3.length; i++) {
        map.set(line3[i], 3);
    }
    words.forEach((word) =>{
       if(isSameRow(word.toLowerCase(), map)) {
           res.push(word);
       }
    });
    return res;

    function isSameRow(str, map) {
       let i;
       for(i=0; i<str.length-1; i++) {
           if(map.get(str.charAt(i))!== map.get(str.charAt(i+1))) {
               return false;
           }
       }
       return true;
    }
};
