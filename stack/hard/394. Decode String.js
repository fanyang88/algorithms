/*
Given an encoded string, return it's decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

*/

/**
 * @param {string} s
 * @return {string}
 
 e.g:  2[a3[ab]]  once we meet a [, need to push a '' into stack this is the key
 we need two stacks: count and st, st= ['']
 i=0, it is a digit: push into count: [2]
 i=1, '[', push '' into chars: ['', '']
 i=2, 'a' pop chars and combine 'a' then push: chars: ['', a']
 i=3, 3, push into count: [2, 3]
 i=4, '[', push '' into chars: ['', a', '']
 i=5, 'a' pop chars and combine '' then push: chars: ['', a', 'a']
 i=6, 'b' pop chars and combine 'a' then push: chars: ['', a', 'ab']
 i=7, pop count and chars, and construct string ababab, then pop chars and combine: 
      chars: ['','aababab'], count = [2]
 i=8 pop count and chars, and construct string ababab, then pop chars and combine: 
      chars: ['aabababaababab'], count = []
 
 return chars.pop()
 */

var decodeString = function(s) {
    var res = '', st = [], count = [];
    // This is the key
    st.push('');
    for(var i=0; i<s.length; i++) {
        if(s[i] >= '0' && s[i] <= '9') {
            var start = i;
            while(i<s.length && s[i] >= '0' && s[i] <= '9') i++;
            count.push(+(s.substring(start, i)));
            i--; // since we have i++ in the loop
        } else if(s[i] === '[') {
            st.push('');
        } else if(s[i] === ']') {
            var word = '', times = +count.pop(), str = st.pop();
            while(times --) {
                word += str;
            }
            st.push(st.pop() + word);
        } else {
            st.push(st.pop() + s[i]);
        }
    }
    return st.pop();
};
