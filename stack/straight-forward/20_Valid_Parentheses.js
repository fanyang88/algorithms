/**
 * @param {string} s
 * @return {boolean}
 
 Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */
var isValid = function(s) {
    var i=0, st = [], chr, top;
    
    for(; i<s.length; i++) {
        chr = s.charAt(i);
        if(chr === '(' || chr === '{' || chr === '[') {
            st.push(chr);
        }
        else {
            if(chr === ')' || chr === '}' || chr === ']') {
                top = st.pop();
                if(!top || (top === '(' && chr !== ')') ||
                    (top === '{' && chr !== '}') ||
                    (top === '[' && chr !== ']')) {
                    return false;
                }
            }
            
        }
    }
    return st.length === 0;
};
