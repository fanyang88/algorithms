/*
Given a digit string, return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) is given below.
Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

var letterCombinations = function(digits) {
    var map=['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs','tuv','wxyz'], res= [];
    if(digits.length===0)  return res;
    dfs(0, digits, map, res, '');
    return res;
};

var dfs = function(index, digits, map, res, cur) {
    if(index === digits.length) {  // come to the end
        res.push(cur);
        return;
    }
    // current number
    var curStr = map[+digits[index]];
    for(var i=0;i<curStr.length; i++) {
        dfs(index+1, digits, map, res, cur+curStr[i]);
    }
};
