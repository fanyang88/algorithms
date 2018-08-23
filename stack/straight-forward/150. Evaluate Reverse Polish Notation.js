/*

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Note:

Division between two integers should truncate toward zero.
The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.
Example 1:

Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: ["4", "13", "5", "/", "+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
Output: 22
Explanation: 
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

*/

/**
 * @param {string[]} tokens
 * @return {number}
 对于逆波兰式，一般都是用栈来处理，依次处理字符串，
如果是数值，则push到栈里面
如果是操作符，则从栈中pop出来两个元素，计算出值以后，再push到栈里面，
则最后栈里面剩下的元素即为所求。
note: always the prev pushed one op on latest pushed one, take care of the order
 */
var evalRPN = function(tokens) {
    var st = [];
    for(var token of tokens) {
        if((token[0] === '-' && token.length > 1) || (token[0] >= '0' && token[0] <= '9')) 
            st.push(token);
        else{
            var e1 = parseInt(st.pop());
            var e2 = parseInt(st.pop());
            if(token === '-') st.push(e2 - e1);
            if(token === '+') st.push(e2 + e1);
            if(token === '*') st.push(e2 * e1);
            if(token === '/') {
                if(e1 ===0)  st.push(0);
                else st.push(e2 / e1);
            }
        }
    }
    return parseInt(st[0]);
};
