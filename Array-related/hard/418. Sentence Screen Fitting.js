/*
Given a rows x cols screen and a sentence represented by a list of non-empty words, 
find how many times the given sentence can be fitted on the screen.
Note:
A word cannot be split into two lines.
The order of words in the sentence must remain unchanged.
Two consecutive words in a line must be separated by a single space.
Total words in the sentence won't exceed 100.
Length of each word is greater than 0 and won't exceed 10.
1 ≤ rows, cols ≤ 20,000.
Example 1:
Input:
rows = 2, cols = 8, sentence = ["hello", "world"]
Output: 
1
Explanation:
hello---
world---
The character '-' signifies an empty space on the screen.
Example 2:
Input:
rows = 3, cols = 6, sentence = ["a", "bcd", "e"]
Output: 
2
Explanation:
a-bcd- 
e-a---
bcd-e-
The character '-' signifies an empty space on the screen.
Example 3:
Input:
rows = 4, cols = 5, sentence = ["I", "had", "apple", "pie"]
Output: 
1
Explanation:
I-had
apple
pie-I
had--
The character '-' signifies an empty space on the screen.
*/

/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 count: how mnay chars of the reformed sentence in screen
 count % length of reformed sentence: the starting position of next row
 anwer: count/length of reformed sentence
 
 case 1: if the last one is space, count += col
 case 2: if the last one is letter while next one is space, count += col + 1 we can include the space in this row
 case 3: if the last one is letter while next one is also a letter, count -- till hit space or count <= 0
 
 e.g: ['ab', 'cde', 'f']  -> reform ->  'ab cde f'
 row:5 col:4
        ab cde f ab cde f ab cde f ...
        xxxx this is case 3, so we go back till hit space, count = 3
 row 1  xxx   
 row 2     xxxx   this is case 1
 row 3         xxxxx    this is case 2
 row 4              xxxx   this is case 1
 row 5                  xxxxx  this is case 2
 count = 3 + 4 + 5+ 4+ 5 = 21 
 answer = 21 / 8 = 2
 */
var wordsTyping = function(sentence, rows, cols) {
    var count = 0;
    var str = sentence.join(' ') + ' ';  // don't miss the space in the end.
    var len = str.length;
    
    for(var i=0; i<rows; i++) {
        count += cols;
        
        var lastOne = (count-1) % len;  // last one is the row
        var nextOne = count % len;      // next one to last one
       
        if(str[lastOne] === ' ') {
                      // case 1 do nothing
        } else {                        // last one is a char
             if(str[nextOne] === ' ') {
                count++;            // case 2
            } else {
                // last one and next one are both chars. case  3
                while(count > 0 && str[(count-1) % len] !== ' ') {
                    count --;
                }
            }
        }
    }
    return parseInt(count/ str.length);
};
