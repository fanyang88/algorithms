/*
Implement a basic calculator to evaluate a simple expression string.
The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .
Example 1:
Input: "1 + 1"
Output: 2
Example 2:
Input: " 2-1 + 2 "
Output: 3
Example 3:
Input: "(1+(4+5+2)-3)+(6+8)"
Output: 23
*/

/**
 * @param {string} s
 * @return {number}
 
 e.g: 1 + 3 - (2 -3)  , res= 0,s sign  = 1
 we get the num 1 first, res = res + sign*num = 1
 we get the 3, res = res+ sign*num = 1 + 1*3 = 4
 then we meet '-', sign = -1,
 then we meet '(', we first push res and sign into stack [4, -1], and we set res to be 0 to store the sum value in brackets, and sign reset to 1
 then we meet '2', since sign = 1, res = 0+2 = 2
 then we meet '-', sign = -1
 then we meet '3', since sign = -1, res = 2+ (-1)*3 = -1
 then we meet ')', res = res* st.pop() = 1, then res + stack.pop() = 1+4=5
 */
var calculate = function(s) {
    var res = 0, sign = 1, st= [];
    for(var i=0; i<s.length; i++) {
        if(s[i] >= '0' && s[i] <= '9') {
            var num = '';
            while(i < s.length && s[i] >= '0' && s[i] <= '9') {
                num += s[i];
                i++;
            }
            i--;
            res += parseInt(num) * sign;
        } else if(s[i] === '+') {
            sign  = 1;
        } else if(s[i] === '-') {
            sign  = -1;
        } else if(s[i] === '(') {
            st.push(res);
            st.push(sign);
            res = 0;
            sign = 1;
        } else if(s[i] === ')') {
            res = res * st.pop(); // sign * sum value in brackets
            res += st.pop();
        }
    }
    return res;
};
