/*
Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.
The input string does not contain leading or trailing spaces and the words are always separated by a single space.
For example,
Given s = "the sky is blue",
return "blue is sky the".
Could you do it in-place without allocating extra space?
Related problem: Rotate Array
*/

/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify str in-place instead.
 */
var reverseWords = function(str) {
    var start = 0, end = str.length -1;
    reverse(start, end, str);
    start = 0;
    for(var i=0; i<str.length; i++) {
        if(str[i] === ' ') {
            reverse(start, i-1, str);
            start = i+1;
        }
    }
    reverse(start, end, str);
    return;
};

var reverse = function(start, end, str) {
    while(start < end) {
        var temp = str[start];
        str[start] = str[end];
        str[end] = temp;
        start ++;
        end --;
    }
};
