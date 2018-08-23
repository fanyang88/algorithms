/*
Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

Example 1:

Input: num = "123", target = 6
Output: ["1+2+3", "1*2*3"] 
Example 2:

Input: num = "232", target = 8
Output: ["2*3+2", "2+3*2"]
Example 3:

Input: num = "105", target = 5
Output: ["1*0+5","10-5"]
Example 4:

Input: num = "00", target = 0
Output: ["0+0", "0-0", "0*0"]
Example 5:

Input: num = "3456237490", target = 9191
Output: []

*/


/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 123 
 1+2+3
 1-2+3
 1
 */
var addOperators = function(num, target) {
    var res = [];
    if(num.length === 0) return res;
    dfs(0, num, '', 0, 0, res, target);
    return res;
};

var dfs = function(pos, s, curStr, cur, prev, res, target) {
    if(pos === s.length) {
        if(cur === target) {
            res.push(curStr);
        }
        return;
    }
    for(var i=pos; i<=s.length; i++) {
        var str = s.substring(pos, i+1);
        if(str[0] === '0' && str.length > 1)  break;
        var x = +str;
        
        if(pos === 0) {
            dfs(i+1, s, str, x, x, res, target);
            continue;
        }
        dfs(i+1, s, curStr + '+'+str, cur+ x, x, res, target);
        dfs(i+1, s, curStr + '-'+str, cur- x, -x, res, target);
        dfs(i+1, s, curStr + '*'+str, cur - prev + prev * x, prev *x, res, target);
    }
    return;
};
