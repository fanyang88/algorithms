/*
Given an array of words and a width maxWidth, 
format the text such that each line has exactly maxWidth characters and 
is fully (left and right) justified.

You should pack your words in a greedy approach; 
that is, pack as many words as you can in each line. 
Pad extra spaces ' ' when necessary so that each line has exactly maxWidth 
characters.

Extra spaces between words should be distributed as evenly as possible. 
If the number of spaces on a line do not divide evenly between words, 
the empty slots on the left will be assigned more spaces than the slots 
on the right.

For the last line of text, it should be left justified 
and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.

Example 1:

Input:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Example 2:

Input:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be",
             because the last line must be left-justified instead of fully-justified.
             Note that the second line is also left-justified becase it contains only one word.
Example 3:

Input:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
*/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 using example one, when we hit example it exceed max, last = 3
 cur = 0, last = 3 diff = 2 (2 space intervals)
 cur = 3, last = 6 diff = 2 count = 15 avg = (16-15)/2=0  remain =  (16-15)%2=1 
 */
var fullJustify = function(words, maxWidth) {
    var cur = 0, res= [];
    while(cur < words.length) {
        var count = words[cur].length;
        var next = cur+1;
        while(next < words.length && count + 1 + words[next].length <= maxWidth) {
            count += 1+words[next].length;
            next ++;
        }
        var line = words[cur];
        // how many words in this line = last - cur, 
        // how many space intervals in the line = last - cur -1
        if(next === words.length || next- cur <=1) {
            for(var i=cur+1; i<next; i++) {
                line += ' '+ words[i];
            }
            line += ' '.repeat(maxWidth - line.length);
            
        } else {
            // total number of space / space interval = each interval should have at least avg spaces
            var avg = ~~((maxWidth - count) / (next- cur-1));
            // e.g total 8 spaces, 3 intervals, remain is 2 
            var remain = (maxWidth - count) % (next- cur-1);
            for(var i=cur+1; i<next; i++) {
                line += ' '.repeat(avg+1);
                if(remain > 0) {
                    line += ' ';
                    remain --;
                }
                line += words[i];
            }
        }
        res.push(line);
        cur = next;
    }
    return res;
};




