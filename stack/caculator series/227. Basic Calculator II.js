/*
Implement a basic calculator to evaluate a simple expression string.
The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . 
The integer division should truncate toward zero.
You may assume that the given expression is always valid.
Some examples:
"3+2*2" = 7
" 3/2 " = 1
" 3+5 / 2 " = 5
*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var str= '', st= [];
    for(i=0; i<s.length; i++) {
        if(s[i] !== ' ') str += s[i];
    }
    for(var i=0; i<str.length; i++) {
        if(str[i] <= '9' && str[i] >= '0') {
            var temp = '';
            while(str[i] <= '9' && str[i] >= '0')  temp += str[i++];
            i--;
            st.push(parseInt(temp));
        } else if(str[i] === '+') {
            st.push('+');
        } else if(str[i] === '-') {
            st.push('-');
        } else if(str[i] === '*' || str[i] === '/') {
            var sign = str[i];
            var oldVal = st.pop();
            var temp = '';
            i++; // i point to a number
            while(str[i] <= '9' && str[i] >= '0')  temp += str[i++];
            i--;
            temp = +temp;
            if(sign === '*')  st.push(oldVal * temp);
            else st.push(~~(oldVal / temp));
        }
    }
    var sum = st[0];
    for(i=1; i<st.length; i++) {
        if(st[i] === '+') {
            sum += st[i+1];
            i++;
        }
        if(st[i] === '-') {
            sum -= st[i+1];
            i++;
        }
    }
    return sum;
};