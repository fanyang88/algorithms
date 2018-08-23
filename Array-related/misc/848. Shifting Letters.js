/*
We have a string S of lowercase letters, and an integer array shifts.

Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a'). 

For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.

Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.

Return the final string after all such shifts to S are applied.

Example 1:

Input: S = "abc", shifts = [3,5,9]
Output: "rpl"
Explanation: 
We start with "abc".
After shifting the first 1 letters of S by 3, we have "dbc".
After shifting the first 2 letters of S by 5, we have "igc".
After shifting the first 3 letters of S by 9, we have "rpl", the answer.

*/

/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 e.g:  u=> 17 times => l  u=(20+17) % 26=11 => 11 from a
 */
var shiftingLetters = function(S, shifts) {
    var arr = [], sum=0;
    for(var i=shifts.length-1; i>=0; i--) {
        sum += shifts[i];
        arr[i] = (S.charCodeAt(i) - 'a'.charCodeAt(0) + sum) % 26 + 'a'.charCodeAt(0);
        arr[i] = String.fromCharCode(arr[i]);
    }
    return arr.join('');
};