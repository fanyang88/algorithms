/*
The gray code is a binary numeral system where two successive values differ in only one bit.
Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. 
A gray code sequence must begin with 0.
For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:
00 - 0
01 - 1
11 - 3
10 - 2
Note:
For a given n, a gray code sequence is not uniquely defined.
For example, [0,2,3,1] is also a valid gray code sequence according to the above definition.
For now, the judge is able to judge based on one instance of gray code sequence. Sorry about that.
*/

/**
 * @param {number} n
 * @return {number[]}
 when n=1, we have 00, 01
 when n=2, 1<<1 = 10, 10+00=10 10+01=11 plus 00, 01 we have 00, 01, 10, 11
 when n=3, 10<<1 = 100, 00, 01, 10, 11 -> 100, 101, 110, 111, plus 00, 01, 10, 11
 ...
 */
var grayCode = function(n) {
    if(n=== 0) return [0];
    var res = [0, 1];
    var st = [0, 1];
    var start = 1;
    var mutiply = 1;
    while(start < n) {
        start ++;
        mutiply = mutiply << 1;
        for(var i= 0; i<st.length; i++) {
            st[i] += mutiply;
        }
        res = res.concat(st.reverse());
        st= res.slice(0);
    }
    return res;
};
