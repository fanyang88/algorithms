/*
Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.
Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:
If S[i] == "I", then A[i] < A[i+1]
If S[i] == "D", then A[i] > A[i+1]

Example 1:

Input: "IDID"
Output: [0,4,1,3,2]
Example 2:

Input: "III"
Output: [0,1,2,3]
Example 3:

Input: "DDI"
Output: [3,2,0,1]
*/

/**
 * @param {string} S
 * @return {number[]}
 "IDID" number needs [0,1,2,3,4]
  s=0, d=4
  it is I, push 0, i++=1
  it is D, push 4 d--=3
  it is I, push 1, i++=2
  it is D, push 3, d--=2
  stop 
  push 2
  
 */
var diStringMatch = function(S) {
    var smallest = 0, largest = S.length, stack = [], i=0;
    while(smallest < largest) {
        if(S[i] === 'I') stack.push(smallest ++);
        else stack.push(largest --);
        i++;
    }
    stack.push(smallest);
    return stack;
};
