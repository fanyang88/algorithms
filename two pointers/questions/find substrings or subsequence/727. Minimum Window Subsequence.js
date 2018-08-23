/*
Given strings S and T, find the minimum (contiguous) substring W of S, 
so that T is a subsequence of W.
If there is no such window in S that covers all characters in T, return the empty string "". 
If there are multiple such minimum-length windows, return the one with the left-most starting index.
Example 1:
Input:   S = "abcdebdde", T = "bde"
Output: "bcde"
Explanation: 
"bcde" is the answer because it occurs before "bdde" which has the same length.
"deb" is not a smaller window because the elements of T in the window must occur in order.
Note:
All the strings in the input will only contain lowercase letters.
The length of S will be in the range [1, 20000].
The length of T will be in the range [1, 100].
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var minWindow = function(S, T) {
    var pt = 0, minStr = S+'dummy';
    for(var i=0; i<S.length; i++) {
        if(S[i] === T[pt]) {
            pt++;
            // find a potential match, 
            if(pt === T.length) {  
                // move pT to point to the last char in T
                pt --;
                var end = i;
                // backward match S and T till reach to the -1 postion of T
                while(pt >=0) {  
                    if(T[pt] === S[i]) {
                        pt--;
                        i--;
                    } else {
                        i--;
                    }
                }  
                // end of the loop, pt now = -1
                pt ++; // pt point to 0
                i++; // i point to the first matching position now.
                
                // record it if length smaller than min.
                if(end - i + 1 < minStr.length) {
                    minStr = S.substring(i, end+1);
                }
            }
        }
    }
    return minStr === S+'dummy' ? '' : minStr;
};
