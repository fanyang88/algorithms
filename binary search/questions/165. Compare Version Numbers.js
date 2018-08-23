/*
Compare two version numbers version1 and version2.
If version1 > version2 return 1, 
if version1 < version2 return -1, otherwise return 0.
You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.
Here is an example of version numbers ordering:
0.1 < 1.1 < 1.2 < 13.37
*/

// corner case, (01, 1)  (1.0, 1)  (1.0000, 1.0)   ..
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var st1= [], st2 = [];
    st1 = version1.split('.');
    st2 = version2.split('.');
    var len = Math.min(st1.length, st2.length);
    for(var i=0; i<len; i++) {
        if(+st1[i] !== +st2[i]) {
            return +st1[i] > +st2[i] ? 1: -1 ;
        }
    }
    
    if(i<st1.length)  {
        while(i<st1.length) {
            if(+st1[i] !== 0)  return 1;
            i++;
        }
        return 0;
    }
    if(i<st2.length)  {
        while(i<st2.length) {
            if(+st2[i] !== 0)  return -1;
            i++;
        }
        return 0;
    }
    
    return 0;
};
