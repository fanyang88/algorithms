/*
Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, 
so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Example 1:

Input: ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]] 
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
Example 2:

Input: ["bat","tab","cat"]
Output: [[0,1],[1,0]] 
Explanation: The palindromes are ["battab","tabbat"]
*/

/**
 * @param {string[]} words
 * @return {number[][]}
 
 e.g:  abcd   
       we can split it into str1=''   str2 = 'abcd'
       since str1 is a palindrome, we need to find if there is a dcba in map, there is, so we record it to result
       e.g: lls
       we can split it into '' and lls there is no sll skip
       we can split it into l and ls, since l is a palindrome, we need to find sl, not found, skip
       we can split it into ll and s, since ll is a palindrome, we need to find s, there is record,
                                      since s is a palindrome, we need to find ll, not found, skip
            
      1. record each word in map
      2. split each word from 0 to word.length, check str1 and str2
         if(str1 is palindrome)  check if we can find str2 reverse word in map, if there is, record index
         if(str2 is palindrome)  check if we can find str1 reverse word in map, if there is, record index
         
 */
var palindromePairs = function(words) {
    var res = [], map = {}, set = new Set();
    for(var i=0; i<words.length; i++) {
        map[words[i]] = i;
    }
        
    for(var index=0; index<words.length; index++) {
        var word = words[index];
        
        for(var i=0; i<=word.length; i++) {
            var str1 = word.substring(0, i);
            var str2 = word.substring(i);
            if(isPalindrome(str1)) {
                var reverse = str2.split('').reverse().join('');
                if(map[reverse]>=0 && map[reverse] !== index) {
                    set.add(map[reverse]+':'+index);
                }
            }
            if(isPalindrome(str2)) {
                var reverse = str1.split('').reverse().join('');
                if(map[reverse]>=0 && map[reverse] !== index) {
                    set.add(index + ':'+map[reverse]);
                }
            }
        }
    }
   
    for(var item of set) {
        var tuple = item.split(':');
        res.push([+tuple[0], +tuple[1]]);
    }
    return res;
};

var isPalindrome = function(str) {
    var i=0, j= str.length-1;
    while( i < j ) {
        if(str[i] !== str[j])  return false;
        i++;
        j--;
    }
    return true;
}
