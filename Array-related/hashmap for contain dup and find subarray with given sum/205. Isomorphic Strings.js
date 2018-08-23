/*
Given two strings s and t, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
For example,
Given "egg", "add", return true.
Given "foo", "bar", return false.
Given "paper", "title", return true.
Note:
You may assume both s and t have the same length.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 set map for both strings and compare the values.
 */
var isIsomorphic = function(s, t) {
    var map1= {}, map2= {}, i;
    if(s.length !== t.length) return false;
    for(i=0; i<s.length; i++) {
        if(!map1[s.charAt(i)] && !map2[t.charAt(i)]) {
            map1[s.charAt(i)] = t.charAt(i);
            map2[t.charAt(i)] = s.charAt(i);
        } else if(map1[s.charAt(i)] && map2[t.charAt(i)]) {
            if(map1[s.charAt(i)] !== t.charAt(i) || map2[t.charAt(i)] !== s.charAt(i)) {
                return false;
            }
        }else {
            return false;
        }
    }
    return true;
};
