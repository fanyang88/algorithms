/*
Given a non-negative integer num represented as a string, 
remove k digits from the number 
so that the new number is the smallest possible.
Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
*/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 
 num = "1432219", k = 3
 st push 1  st= [1]
 st push 4  st= [1,4]
 3 < 4 pop 4, k--, removed 1 element push 3 st= [1,3]
 2 < 3 pop 3, k--, removed 1 element push 2 st= [1,2]
 st push 2  st= [1,2,2]
 1 < 2 pop 2, k--, removed 1 element push 1 st= [1,2, 1]
 k already =0, stop check, just push the rest
 */
var removeKdigits = function(num, k) {
    var count = num.length - k, st = [+num[0]];
    if(num.length === k)  return "0";
    for(var i = 1; i<num.length; i++) {
        var digit = +num[i];
        while(k>0 && st && st[st.length - 1] > digit) {
            st.pop();
            k--;
        }
        st.push(digit);
    }
    // corner case: 0100, 112 
    while(st[0] === 0) {
        st.shift();
    }
    if(st.length === 0) return "0";
    return st.slice(0, count).join('');
};
