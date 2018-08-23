/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"
*/

/**
 * @param {number} n
 * @return {string}
 1:  1  
 2:  11   since case 1 is one 1s
 3:  21   since case 2 is two 1s
 4:  1211   since case 3 is one 2 one 1
 just read how many 1 and how many 2 in previous case is the current result
 */
var countAndSay = function(n) {
    var i=1, res = '1';
    while(i<n) {
        var count = 1, c=res[0], output = '';
        for(var j=1; j<res.length; j++) {
            if(c === res[j]) {
                count++;
            } else {
                output += ''+count + c;
                c = res[j];
                count=1;
            }
        }
        output += ''+count + c;
        res= output;
        i++;
    }
    return res;
};
