/*
Strings A and B are K-similar (for some non-negative integer K) if we can swap the positions of two letters in A exactly K times so that the resulting string equals B.

Given two anagrams A and B, return the smallest K for which A and B are K-similar.

Example 1:

Input: A = "ab", B = "ba"
Output: 1
Example 2:

Input: A = "abc", B = "bca"
Output: 2
Example 3:

Input: A = "abac", B = "baca"
Output: 2
Example 4:

Input: A = "aabc", B = "abca"
Output: 2
*/

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 
 case 1:    A = aabc  A[j] === B[j]
            B = acba
                 ij   swap A[i] with A[j] doesn't make difference, we need to skip such case
 case 2:    A = aaac  A[i] != B[j]
            B = aaca  swap A[i] with A[j] doesn't make difference, we need to skip such case
                 ij
 */
var kSimilarity = function(A, B) {
    var st = [A], visited = new Set(), level = 0;
    visited.add(A);
    while(st.length > 0) {
        var size = st.length;
        while(size --) {
            var cur = st.shift();
            if(cur === B)  return level;
            var i=0;
            while(cur[i] === B[i] && i < cur.length)  i++;
            // i now point to the first place in cur and B doesn't match, we start swap from here
            for(var j=i+1; j<cur.length; j++) {
                if(cur[j] === B[j] || cur[i] !== B[j])  continue;
                var newStr = swap(cur, i, j);
                if(!visited.has(newStr)) {
                    st.push(newStr);
                    visited.add(newStr);
                }
            }
        }
        level ++;
    }
    return -1;
};

var swap = function(str, i, j) {
    var arr = str.split('');
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr.join('');
}