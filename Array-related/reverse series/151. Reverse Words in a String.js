/*
Given an input string, reverse the string word by word.
For example,
Given s = "the sky is blue",
return "blue is sky the".
*/

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str= str.trim();  if(str.length === 0)  return '';
    var i = 0, arr= [], temp= '';
    while(i<str.length) {
        if(str[i] !== ' ') {
            while(str[i] !== ' ' && i<str.length){
                temp+= str[i++];
            }
            if(temp.length > 0) {
                arr.push(temp.slice(0));
                temp = '';
            }
        } else {
            i++;
        }
    } 
    return arr.reverse().join(' ');
};
