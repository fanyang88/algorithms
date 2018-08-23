/*
Write a function to generate the generalized abbreviations of a word. 

Note: The order of the output does not matter.

Example:

Input: "word"
Output:
["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
 


*/

/**
 * @param {string} word
 * @return {string[]}
 if last round is false, the next round can be false or true, 
        if false, we add a char, 
        if true, we add a number 
 if last round is true, the next round can only be false
        
                              e.g:  word
                                    ''
                      F  /                      \ T
                        w                  1     2    3     4
                F/         \T              |     |    |      
               wo       w1,  w2,  w3       1o   2r    3d     
         F/      \T     |    |           /   \   ...   ...
        wor   wo1, wo2  w1r  w2d     1or   1o1, 1o2
    F /  |T    |       /  \         /  \    |   
  word  wor1  wo1d  w1r1 w1rd    1ord 1or1  1o1d
     
     
 */
var generateAbbreviations = function(word) {
    var res = [];
    dfs(word, 0, '', res, false);
    return res;
};

var dfs = function(s, start, cur, res, prevIsNumber) {
    if(start === s.length) {
        res.push(cur.slice(0));
        return;
    }
    if(!prevIsNumber) {  // we can add number in this round
        for(var len=1; len+start <=s.length; len++) {
             dfs(s, start+len, cur+len, res, true);
        }
    }
    // we can also choose not to add number
    dfs(s, start+1, cur+s[start], res, false);
};