/*
Given a string representing arbitrarily nested ternary expressions, 
calculate the result of the expression. 
You can always assume that the given expression is valid 
and only consists of digits 0-9, ?, :, T and F (T and F represent True and False respectively).

Each number will contain only one digit.
The conditional expressions group right-to-left (as usual in most languages).
The condition will always be either T or F. That is, the condition will never be a digit.
The result of the expression will always evaluate to either a digit 0-9, T or F.
Example 1:  Input: "T?2:3"   Output: "2"
Explanation: If true, then result is 2; otherwise result is 3.
Example 2:  Input: "F?1:T?4:5"      Output: "4"
Explanation: The conditional expressions group right-to-left. Using parenthesis, it is read/evaluated as:
             "(F ? 1 : (T ? 4 : 5))"                   "(F ? 1 : (T ? 4 : 5))"
          -> "(F ? 1 : 4)"                 or       -> "(T ? 4 : 5)"
          -> "4"                                    -> "4"
Example 3:  Input: "T?T?F:5:3"   Output: "F"
Explanation: The conditional expressions group right-to-left. Using parenthesis, it is read/evaluated as:
             "(T ? (T ? F : 5) : 3)"                   "(T ? (T ? F : 5) : 3)"
          -> "(T ? F : 3)"                 or       -> "(T ? F : 5)"
          -> "F"                                    -> "F"
*/

/**
 * @param {string} expression
 * @return {string}
 
 we go from right to left, if it's not ? , continue push to stack, 
 don't push :, till we meet ?, pop first and second, 
 if it is T in left of ?, push first, else push second
 
 012345678
 T?T?F:5:3
 i=8 ... 4 st= [3,5,F]
 i=3 first = st.pop(F) second=st.pop(5) since i=2 point to T push F back st= [3,F] i--=2
 i=1 it is ?, first = F second =3 since i=0 point to T push back F st=[F]
 */
var parseTernary = function(expression) {
    var st = [];
    for(var i=expression.length-1; i>=0; i--) {
        if(expression[i] === '?') {
            var first = st.pop();
            st.pop(); // pop ':'
            var second = st.pop();
            if(expression[i-1] === 'T') {
                st.push(first);
            } else {
                st.push(second);
            }
            i--;
        } else {
            st.push(expression[i]);
        }
    }
    return st[0];
};
