/*
Give a string s, count the number of non-empty (contiguous) 
substrings that have the same number of 0's and 1's, 
and all the 0's and all the 1's in these substrings 
are grouped consecutively.

Substrings that occur multiple times are counted the number of times 
they occur.

Example 1:
Input: "00110011"
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1's 
and 0's: "0011", "01", "1100", "10", "0011", and "01".

Notice that some of these substrings repeat and are counted the number 
of times they occur.

Also, "00110011" is not a valid substring because all the 0's (and 1's) 
are not grouped together.
Example 2:
Input: "10101"
Output: 4
Explanation: There are 4 substrings: "10", "01", "10", "01" 
that have equal number of consecutive 1's and 0's.
Note:

s.length will be between 1 and 50,000.
s will only consist of "0" or "1" characters.
*/


/**
 * @param {string} s
 * @return {number}
 preRun count the same item happend before (let say you have 0011, preRun = 2 when you hit the first 1, means there are two zeros before first '1')
curRun count the current number of items (let say you have 0011, curRun = 2 when you hit the second 1, means there are two 1s so far)
Whenever item change (from 0 to 1 or from 1 to 0), 
preRun change to curRun, reset curRun to 1 (store the curRun number into PreRun, reset curRun)

Every time preRun >= curRun means there are more 0s before 1s, so could do count++ . 
(This was the tricky one, ex. 0011 when you hit the first '1', curRun = 1, preRun = 2, means 0s number is larger than 1s number, so we could form "01" at this time, count++ . When you hit the second '1', curRun = 2, preRun = 2, means 0s' number equals to 1s' number, so we could form "0011" at this time, that is why count++)
012345
000111
i=0  curLen=1
i=1  curLen=2
i=2  curLen=3
i=3  prevLen=3 curLen=1 count=1
i=4  curLen=2 prevLen=3< curLen  count=2
i=5  curLen=3 prevLen=3= curLen  count=3

 */
var countBinarySubstrings = function(s) {
    var curLen = 1, prevLen, count=0;
    for(var i=1; i<s.length; i++) {
        if(s[i] === s[i-1]) {
            curLen ++;
        } else { // switch from 0 to 1 or 1 to 0
            prevLen = curLen;
            curLen=1; // count the current number of items
        }
        if(prevLen >= curLen) count++;
    }
    return count;
};
