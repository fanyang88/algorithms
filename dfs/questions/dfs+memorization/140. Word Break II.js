/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. You may assume the dictionary does not contain duplicate words.
Return all such possible sentences.
For example, given
s = "catsanddog",
dict = ["cat", "cats", "and", "sand", "dog"].
A solution is ["cats and dog", "cat sand dog"].

                         code  - ans=[]=> ['c ode', 'co de']
                 /                 \
            c   /                 co\ 
               / res2=['ode']        \  res2=['de']
              /  ans.push('c ode')    \ ans.push('co de')
             /                         \
           ode res2=[]                 de  res2=[]
            |  ans=['ode']             |  ans=['de']
            |  map[ode]= ['ode']       |  map[de]= ['de']
            ''                         ''
*/



/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 
 define an map to record string to it's combination, e,g: code - ["co de" , "code"]
 every time we have an array to recording the split possiblities for the string s

 */

var wordBreak = function(s, wordDict) {
    if(s.length ===0)  return [];
    if(s.length === 1) {
        return wordDict.includes(s) ? [s] : [];
    }
    var map = {};
    map[''] = [''];
    return dfs(s, wordDict, map);
};

var dfs = function(s, wordDict, map) {
    if(map[s]) { // if the combination already recorded, no need to redo it again.
        return map[s];
    }
    var ans = [];
    for(var i =1; i<= s.length; i++) {
        var s1 = s.substring(0, i);
        var s2 = s.substring(i);
        if(wordDict.includes(s1)) {
            var s2_res = dfs(s2, wordDict, map);
            for(var str of s2_res) {
                if(str === '') {
                    ans.push(s1);
                } else {
                    ans.push(s1 +' ' + str);
                }
            }
        }
    }
    map[s] = ans;
    return ans;
};


// Update
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 
 define an map to record string to it's combination, e,g: code - ["co de" , "code"]
 every time we have an array to recording the split possiblities for the string s

 */

var wordBreak = function(s, wordDict) {
    if(s.length ===0)  return [];
    if(s.length === 1) {
        return wordDict.includes(s) ? [s] : [];
    }
    var map = {};
    map[''] = [''];
    return dfs(s, wordDict, map);
};

var dfs = function(s, wordDict, map) {
    if(map[s]) { // if the combination already recorded, no need to redo it again.
        return map[s];
    }
    var ans = [];
    for(var word of wordDict) {
        if(s.startsWith(word)) {
            var s2 = s.substring(word.length);
            var s2_res = dfs(s2, wordDict, map);
            for(var str of s2_res) {
                if(str === '') {
                    ans.push(word);
                } else {
                    ans.push(word +' ' + str);
                }
            }
        }
    }
    map[s] = ans;
    return ans;
};


