/*
Given a string s, you are allowed to convert it to 
a palindrome by adding characters in front of it. 
Find and return the shortest palindrome you can find by performing 
this transformation.

Example 1:

Input: "aacecaaa"
Output: "aaacecaaa"
Example 2:

Input: "abcd"
Output: "dcbabcd"

*/

/**
 * @param {string} s
 * @return {string}
 e.g:  abab     rev_s+s = babaabab  if we remove aba, we get babab  which is the shortest palindrome
       s+rev_s = ababbaba  since aba is the longest prefix which equal to suffix
       so we are converting this problem to be find the longest prefix which equal to suffix in s+rev_s
       then the answer is rev_s (remove longest prefix) + s
       
       to find the longest prefix, we can use prefix table in kmp
       e.g:   a a b a a b a a a
              0 1 0 1 2
              j i
                j i
              j     i
                j     i
   i=1 j=0 equal, p[1] = p[j]+1   i++, j++
   i=2 j=1 not equal, j=p[j-1]=0 still not equal j=0 i++
   i=3 j=0 equal, p[3] = p[j]+1   i++, j++
   i=4 j=1 equal, p[4] = p[1]+1=2   i++, j++
   ...
   if(s[j] === s[i]) p[i] = j+1  i++, j--
   else 
        if(j!=0)  j=p[j-1];
        else p[i]=0; i++;
   
                   
 */
var shortestPalindrome = function(s) {
    var rev_s = s.split('').reverse().join('');
    // need to add # this is the key, otherwise, the prefix can be across rev_s to s
    var str = s +'#'+rev_s;  
    var prefix = new Array(str.length).fill(0);
    kmp(prefix, str);
    return s.substring(prefix[prefix.length-1]).split('').reverse().join('') + s;
};

var kmp = function(table, str) {
    table[0] = 0;
    var j= 0;
    for (var i = 1; i < str.length; i++) {
        while (j > 0 && str[i] !== str[j]) {
            j = table[j - 1];
        }
        if (str[i] === str[j]) {
            j++;
        }
        table[i] = j;     // The key
    }
};



