/*
Given a string containing just the characters '(' and ')', 
find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
Example 2:

Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"

*/

/**
 * @param {string} s
 * @return {number}
 
 )()())((()
 0123456789
 we can use stack, if it is (, directly push index
                   if it is ), if top is (, pop top, else push index
 in the end, if the st is empty, means the whole string is a valid one, return s.length directly
 else we get the maximum distance between each i to i+1 in st, the max distance is the answer
 using above example, after one loop, st = [0, 5, 6, 7]
 the maximum distance is 5-0-1 is 4 which is the answer.
 */
var longestValidParentheses = function(s) {
    var st = [], maxV  = 0;//-Infinity;
    for(var i=0; i<s.length; i++) {
        if(s[i] === '(') st.push(i);
        else {
            if(s[st[st.length-1]] === '(')  st.pop();
            else st.push(i);
        }
    }
    
    if(st[0] !== 0)  st.unshift(-1);
    if(st[st.length-1] !== s.length-1)  st.push(s.length);
  
    for(var i=st.length-2;i>=0; i--) {
        maxV = Math.max(st[i+1] - st[i]-1, maxV);
    }
    return maxV;
};
