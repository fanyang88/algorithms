/*
Given a string S and a string T, find the minimum window in S 
which will contain all the characters in T in complexity O(n).
Example:
Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:
If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 
        0 1 2 3 4 5 6 7 8 9 10 11 12
        A D O B E C O D E B A  N  C  
total = 3, j=0
i=0  map[A]-- = 0 total--=2
i=3  map[B]-- = 0 total--=1
i=5  map[C]-- = 0 total--=0 since total =0  we cacluate the length=i-j
     j=0, map[A]++ total++=1 j++=1
i=9  map[B]--=-1
i=10 map[A]--=0 total--= 0 since total =0  we cacluate the length=i-j
     j++ till j=3 map[B]++=0 j continue++ till j=5 map[C]++=1 total++=1 i=10, j=6 break
i=12 map[C]=--=0 total--=0 enter while loop again
     j=6 j++ till j=9 map[B]++=1 total++=1 length=12-9 break
 */
var minWindow = function(s, t) {
    if(t.length > s.length)  return '';
    var map = {}, minStr = 'dummy' + s, total = t.length, j = 0;
    for(var i=0; i<t.length; i++) {
        map[t[i]] = map[t[i]]? map[t[i]]+1 :1;
    }
    
    for(var i=0; i<s.length; i++) {
        if(map[s[i]] !== undefined) {
            // we find one in T, reduce one.
            map[s[i]] --;
            if(map[s[i]] >= 0)  total--; 
            
            while(total === 0) {
                minStr = i-j < minStr.length ? s.substring(j, i+1) : minStr;
                if(map[s[j]] !== undefined) {
                    map[s[j]]++;  
                    if(map[s[j]] > 0)   total ++; 
                }
                j ++;
            }
        }
    }
    return minStr === 'dummy' + s ? '' : minStr;
};
