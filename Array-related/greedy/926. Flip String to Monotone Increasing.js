/*
A string of '0's and '1's is monotone increasing if it consists of some number of '0's (possibly 0), 
followed by some number of '1's (also possibly 0.)
We are given a string S of '0's and '1's, and we may flip any '0' to a '1' or a '1' to a '0'.
Return the minimum number of flips to make S monotone increasing.

Example 1:
Input: "00110"
Output: 1
Explanation: We flip the last digit to get 00111.
Example 2:
Input: "010110"
Output: 2
Explanation: We flip to get 011111, or alternatively 000111.
Example 3:
Input: "00011000"
Output: 2
Explanation: We flip to get 00000000.

Note:
1 <= S.length <= 20000
S only consists of '0' and '1' characters.
*/

/**
 * @param {string} S
 * @return {number}
 
 "0100110" 
 we use flip0to1 to indicate how many zeros left need to be flip to 1,
 we use flip1to0 to indicate how many flips happened to flip 1 to be 0.
 In worse case, we flip all 0 to 1, init flip0to1= 4, flip1to0 = 0
 i=0, flip0to1--=3 min = flip0to1+flip1to0 = 3
 i=1, it is 1, assume we flip 1 to 0, min< flip1to0(1) + flip0to1(3)=4 no update
 i=2, flip0to1--=2 best = flip1to0(1) + flip0to1(2)=3
 i=3, flip0to1--=1 best = flip1to0(1) + flip0to1(1)=2
 i=4, it is 1, assume we flip, flip1to0=2, min < flip1to0(2) + flip0to1(1)=3 no update 
 i=5, it is 1, assume we flip, flip1to0=3, min < flip1to0(3) + flip0to1(1)=4 no update  
 min= 2
 */
var minFlipsMonoIncr = function(S) {
    var flip0to1 = 0, flip1to0 = 0;
    for(var chr of S) {
        if(chr === '0') flip0to1 ++;
    }
    var min = flip0to1;
    for(var chr of S) {
        if(chr === '0') flip0to1 --;
        else flip1to0++;
        min = Math.min(min, flip1to0 + flip0to1);
    }
    return min;
};
