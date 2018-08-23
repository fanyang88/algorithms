/*
Remove the minimum number of invalid parentheses 
in order to make the input string valid. Return all possible results.
Note: The input string may contain letters other than the parentheses ( and ).
Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]
Example 2:

Input: "(a)())()"
Output: ["(a)()()", "(a())()"]
Example 3:

Input: ")("
Output: [""]
*/

/**
 * @param {string} s
 * @return {string[]}
 
 The idea is straightforward, with the input string s, we generate all possible states by removing one '(' or ')', 
 check if they are valid, if found valid ones on the current level, put them to the final result list 
 and we are done, otherwise, add them to a queue and carry on to the next level.

The good thing of using BFS is that we can guarantee the number of parentheses that need to be removed 
is minimal, also no recursion call is needed in BFS.

                            ()())
                    /      |      |     |      \
remove first '(': )())    (())   ()))   ()()   ()():remove last chr: ')'
there is valid answer,return at this level
 */
var removeInvalidParentheses = function(s) {
    var st = [s], res= [], visited = new Set(), found = false;
    visited.add(s);
    while(st.length > 0) {
        var size = st.length;
        while(size --) {
            var cur = st.shift();
            if(isValid(cur)) {
                res.push(cur);
                found = true;
            }
            
            for(var i=0; i<cur.length; i++) {
                if(cur[i] !== '(' && cur[i] !== ')') continue;
                var newStr = cur.substring(0, i) + cur.substring(i+1);
                if(!visited.has(newStr)) {
                    st.push(newStr);
                    visited.add(newStr);
                }
            }   
        }
        // stop at this level
        if(found)  break; 
    }
    return res;
};

var isValid = function(str) {
    var count=0;
    for(var i=0; i<str.length; i++) {
        if(str[i] === '(') count++;
        if(str[i] === ')') count--;
        if(count<0)  return false;
    }
    return count === 0;
}
